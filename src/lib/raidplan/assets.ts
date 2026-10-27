// Where raidplan assets live, both upstream and once vendored into static/.
// Shared by scripts/import-raidplan.ts (which downloads them) and the renderer
// (which references the local copies), so the two can't drift apart.

export const RAIDPLAN_CDN = 'https://cdn.raidplan.io';
export const TWEMOJI_CDN = 'https://cdn.jsdelivr.net/gh/twitter/twemoji@v14.0.2/assets/svg';

/** Directory under static/ that holds plans and vendored assets. */
export const RAIDPLAN_STATIC_DIR = 'raidplan';

/** Marker assets are stored with a few legacy prefixes; mirrors raidplan's assetUrl(). */
export function markerAssetPath(asset: string): string {
  if (asset.startsWith('gamedata/wow/icon/')) {
    return asset.replace('gamedata/wow/icon/', 'wow/icons/').replace(/[\s']/g, '_');
  }
  if (asset.startsWith('gamedata/ffxiv/icon')) {
    return asset.replace('gamedata/ffxiv/icon', 'ffxiv/legacy/icon');
  }
  if (asset.startsWith('gamedata/')) return asset.replace('gamedata/', '');
  return asset;
}

export function waypointAssetPath(wayId: string): string {
  return `game/ffxiv/mark/way_${wayId}.png`;
}

export function abilityAssetPath(abilityId: string): string {
  return `game/ffxiv/ability/${abilityId}.svg`;
}

/** Twemoji file name for an emoji: hex codepoints joined by "-", with FE0F dropped unless the sequence has a ZWJ. */
export function emojiCodepoints(emoji: string): string {
  const cps = Array.from(emoji).map((c) => c.codePointAt(0)!);
  const keep = cps.includes(0x200d) ? cps : cps.filter((cp) => cp !== 0xfe0f);
  return keep.map((cp) => cp.toString(16)).join('-');
}

/** Paths relative to static/raidplan/. */
export const localPaths = {
  plan: (code: string) => `plans/${code}.json`,
  cdn: (path: string) => `cdn/${path}`,
  emoji: (emoji: string) => `emoji/${emojiCodepoints(emoji)}.svg`
};
