/**
 * Snapshot raidplan.io plans into static/raidplan/ so RaidplanBoard can render
 * them without hitting raidplan at runtime.
 *
 *   bun scripts/import-raidplan.ts <code|url> [<code|url> ...]
 *
 * For each plan this writes static/raidplan/plans/<code>.json (the plan's nodes,
 * with arena images pointed at local copies) and downloads every asset the plan
 * uses: marker icons, waypoints and ability SVGs from cdn.raidplan.io, twemoji,
 * and arena images (often imgur/discord links that can disappear; saved as
 * downscaled WebP). It then
 * regenerates src/lib/raidplan/abilities.generated.ts from all downloaded
 * ability SVGs.
 */
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import sharp from 'sharp';
import {
  RAIDPLAN_CDN,
  TWEMOJI_CDN,
  abilityAssetPath,
  emojiCodepoints,
  localPaths,
  markerAssetPath,
  waypointAssetPath
} from '../src/lib/raidplan/assets';
import type { RaidplanNode, RaidplanPlan } from '../src/lib/raidplan/types';

const ROOT = join(import.meta.dir, '..');
const OUT = join(ROOT, 'static', 'raidplan');
const ABILITIES_TS = join(ROOT, 'src', 'lib', 'raidplan', 'abilities.generated.ts');
const UA = { 'User-Agent': 'wtfdig raidplan importer (+https://wtfdig.info)' };
const SUPPORTED_VERSION = 2;

const RASTER_TYPES = new Set(['image/png', 'image/jpeg', 'image/webp', 'image/gif']);

// Arena images are drawn into raidplan's 1200x675 canvas; keep enough pixels for
// 2x screens and the 2x PNG copy, and no more (uploads are often 2500px+ JPEGs).
const ARENA_MAX = { width: 2400, height: 1350 };
const ARENA_WEBP_QUALITY = 82;

async function fetchOk(url: string): Promise<Response> {
  const res = await fetch(url, { headers: UA });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  return res;
}

function write(relPath: string, data: string | Uint8Array) {
  const abs = join(OUT, relPath);
  mkdirSync(dirname(abs), { recursive: true });
  writeFileSync(abs, data);
}

/** Download url to static/raidplan/<relPath> unless it's already there. */
async function vendor(url: string, relPath: string): Promise<boolean> {
  if (existsSync(join(OUT, relPath))) return true;
  try {
    const res = await fetchOk(url);
    write(relPath, new Uint8Array(await res.arrayBuffer()));
    return true;
  } catch (e) {
    console.warn(`  ! ${(e as Error).message}`);
    return false;
  }
}

/**
 * Arena images can be any URL; the local copy is named by URL hash. Raster
 * images are downscaled to ARENA_MAX and re-encoded as WebP; SVGs are kept.
 */
async function vendorArenaImage(url: string): Promise<string | undefined> {
  const hash = createHash('sha1').update(url).digest('hex').slice(0, 16);
  const dir = join(OUT, 'arena');
  const existing = existsSync(dir) ? readdirSync(dir).filter((f) => f.startsWith(hash + '.')) : [];
  const done = existing.find((f) => f.endsWith('.webp') || f.endsWith('.svg'));
  if (done) return `arena/${done}`;
  try {
    const res = await fetchOk(url);
    const type = (res.headers.get('content-type') ?? '').split(';')[0].trim();
    const data = new Uint8Array(await res.arrayBuffer());
    if (type === 'image/svg+xml') {
      write(`arena/${hash}.svg`, data);
      return `arena/${hash}.svg`;
    }
    if (!RASTER_TYPES.has(type)) throw new Error(`unexpected content-type "${type}" for ${url}`);
    const webp = await sharp(data)
      .resize({ ...ARENA_MAX, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: ARENA_WEBP_QUALITY })
      .toBuffer();
    write(`arena/${hash}.webp`, webp);
    // Drop copies saved in other formats by earlier imports
    for (const f of existing) rmSync(join(dir, f));
    return `arena/${hash}.webp`;
  } catch (e) {
    console.warn(`  ! arena image: ${(e as Error).message}`);
    return undefined;
  }
}

type Catalog = { cdnId: string; bosses: { id: string; cdnId: string }[] };
const catalogCache = new Map<string, Catalog | undefined>();

/** Built-in raidplan maps live at cdn/raid/<raidCdnId>/map/<bossCdnId>-<map>.jpg. */
async function mapImageUrl(raid: string, boss: string, map: string): Promise<string | undefined> {
  if (!catalogCache.has(raid)) {
    const res = await fetchOk(
      `https://raidplan.io/api/catalog/bosses?raids=${encodeURIComponent(raid)}`
    );
    const { raids } = (await res.json()) as { raids: (Catalog & { path: string })[] };
    catalogCache.set(
      raid,
      raids.find((r) => r.path === raid)
    );
  }
  const entry = catalogCache.get(raid);
  const raidCdn = entry?.cdnId ?? raid.split('.').pop();
  const bossCdn = entry?.bosses.find((b) => b.id === boss)?.cdnId ?? boss;
  return `${RAIDPLAN_CDN}/raid/${raidCdn}/map/${bossCdn}-${map}.jpg`;
}

async function pool<T>(items: T[], size: number, fn: (item: T) => Promise<unknown>) {
  const queue = [...items];
  await Promise.all(
    Array.from({ length: size }, async () => {
      while (queue.length) await fn(queue.shift()!);
    })
  );
}

async function importPlan(input: string) {
  const code = input.match(/raidplan\.io\/plan\/([A-Za-z0-9_-]+)/)?.[1] ?? input;
  console.log(`Importing ${code}`);

  const meta = (await (await fetchOk(`https://raidplan.io/api/plan/${code}`)).json()) as {
    plan: { name: string; doc_url: string };
  };
  const doc = (await (await fetchOk(meta.plan.doc_url)).json()) as {
    version: number;
    steps: number;
    nodes: RaidplanNode[];
  };
  if (doc.version !== SUPPORTED_VERSION) {
    throw new Error(
      `${code}: plan format version ${doc.version}, renderer supports ${SUPPORTED_VERSION}`
    );
  }

  const cdnAssets = new Set<string>();
  const emojis = new Set<string>();
  const arenaUrls = new Map<string, RaidplanNode[]>();

  for (const node of doc.nodes) {
    const a = node.attr;
    switch (node.type) {
      case 'marker':
        if (a.asset) cdnAssets.add(markerAssetPath(a.asset));
        break;
      case 'waypoint':
        cdnAssets.add(waypointAssetPath(a.wayId || '1'));
        break;
      case 'ability':
        cdnAssets.add(abilityAssetPath(a.abilityId || 'ff-stack'));
        break;
      case 'emoji':
        emojis.add(a.emoji || '🙂');
        break;
      case 'arena': {
        const url =
          a.map && a.map !== 'custom'
            ? a.raid && a.boss
              ? await mapImageUrl(a.raid, a.boss, a.map)
              : undefined
            : a.imageUrl && a.imageUrl.length >= 16
              ? a.imageUrl
              : undefined;
        if (url) arenaUrls.set(url, [...(arenaUrls.get(url) ?? []), node]);
        break;
      }
    }
  }

  await pool([...cdnAssets], 6, (p) => vendor(`${RAIDPLAN_CDN}/${p}`, localPaths.cdn(p)));
  await pool([...emojis], 6, (e) =>
    vendor(`${TWEMOJI_CDN}/${emojiCodepoints(e)}.svg`, localPaths.emoji(e))
  );
  await pool([...arenaUrls], 4, async ([url, nodes]) => {
    const local = await vendorArenaImage(url);
    if (local) for (const n of nodes) n.attr.localImage = local;
  });

  const plan: RaidplanPlan = { code, name: meta.plan.name, steps: doc.steps, nodes: doc.nodes };
  write(localPaths.plan(code), JSON.stringify(plan));
  console.log(
    `  ${doc.nodes.length} nodes, ${doc.steps} steps, ${cdnAssets.size} cdn assets, ${emojis.size} emoji, ${arenaUrls.size} arena images`
  );
}

/**
 * Turn each ability SVG into a template the renderer can recolor per node.
 * Raidplan tags recolorable elements with ids like RaidPlan_<n>_<colorId>;
 * colorId 1 takes the node's colorA and 2 its colorB (fill if the element has
 * one, else stroke; gradient stops for gradients). Ids get a %P% prefix so
 * several instances on one board don't collide.
 */
function abilityTemplate(svg: string): string {
  const rootTag = svg.match(/<svg[^>]*>/)?.[0] ?? '';
  // Paint attributes on the root (usually fill="none") are inherited, so keep them on a wrapper
  const rootPaint = [...rootTag.matchAll(/\s(fill|stroke|stroke-width)="[^"]*"/g)]
    .map((m) => m[0])
    .join('');
  const rootFillNone = /\sfill="none"/.test(rootPaint);
  const inner = svg
    .replace(/^[\s\S]*?<svg[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '')
    .trim();
  const placeholder = (colorId: string) => (colorId === '1' ? '%A%' : '%B%');
  const body = inner
    .replace(
      /<(linearGradient|radialGradient)([^>]*id="RaidPlan_\d+_(\d)"[^>]*)>([\s\S]*?)<\/\1>/g,
      (_m, tag, attrs, colorId, body) =>
        `<${tag}${attrs}>${body.replace(/stop-color="[^"]*"/g, `stop-color="${placeholder(colorId)}"`)}</${tag}>`
    )
    .replace(/<(\w+)([^>]*\bid="RaidPlan_\d+_(\d)"[^>]*)>/g, (m, tag, attrs, colorId) => {
      if (tag.endsWith('Gradient')) return m;
      const color = placeholder(colorId);
      if (/\bfill="(?!none|url)[^"]+"/.test(attrs)) {
        return `<${tag}${attrs.replace(/\bfill="[^"]*"/, `fill="${color}"`)}>`;
      }
      if (/\bstroke="(?!none|url)[^"]+"/.test(attrs)) {
        return `<${tag}${attrs.replace(/\bstroke="[^"]*"/, `stroke="${color}"`)}>`;
      }
      // No paint attribute means the default black fill, which raidplan also recolors
      if (!/\bfill="/.test(attrs) && !rootFillNone) return `<${tag} fill="${color}"${attrs}>`;
      return m;
    })
    .replace(/\bid="/g, 'id="%P%')
    .replace(/url\(#/g, 'url(#%P%')
    .replace(/href="#/g, 'href="#%P%');
  return rootPaint ? `<g${rootPaint}>${body}</g>` : body;
}

function writeAbilities() {
  const dir = join(OUT, 'cdn', dirname(abilityAssetPath('x')));
  if (!existsSync(dir)) return;
  const entries = readdirSync(dir)
    .filter((f) => f.endsWith('.svg'))
    .sort()
    .map((f) => {
      const template = abilityTemplate(readFileSync(join(dir, f), 'utf8'));
      return `  ${JSON.stringify(f.replace(/\.svg$/, ''))}: ${JSON.stringify(template)}`;
    });
  writeFileSync(
    ABILITIES_TS,
    `// Generated by scripts/import-raidplan.ts - do not edit by hand.\n` +
      `// Ability SVG bodies (100x100 viewBox) with %A%/%B% color and %P% id placeholders.\n` +
      `export const ABILITY_TEMPLATES: Record<string, string> = {\n${entries.join(',\n')}\n};\n`
  );
  console.log(`Wrote ${entries.length} ability templates`);
}

const inputs = process.argv.slice(2);
if (!inputs.length) {
  console.error('usage: bun scripts/import-raidplan.ts <code|url> [...]');
  process.exit(1);
}
for (const input of inputs) await importPlan(input);
writeAbilities();
