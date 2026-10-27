// Rasterize a rendered board to WebP, so it can sit under the pointer as a real
// <img> (right-click copy/save, drag out). An SVG drawn as an image can't load
// anything external, so images and fonts are inlined as data URLs first. The
// fetched assets are cached, so warmSnapshotAssets() can do that work early and
// the image itself is only built when it's about to be used.

const dataUrlCache = new Map<string, Promise<string>>();

function toDataUrl(url: string): Promise<string> {
  let cached = dataUrlCache.get(url);
  if (!cached) {
    cached = fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`${r.status} for ${url}`);
        return r.blob();
      })
      .then(
        (blob) =>
          new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(blob);
          })
      );
    cached.catch(() => dataUrlCache.delete(url));
    dataUrlCache.set(url, cached);
  }
  return cached;
}

/** Google Fonts stylesheets per family. Roboto's matches the board's own <link>, so its files come from cache. */
export const FONT_CSS: Record<string, string> = {
  Roboto:
    'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap',
  'Roboto Mono': 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap',
  'Playpen Sans': 'https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@400;700&display=swap'
};

const fontCssCache = new Map<string, Promise<string>>();

/**
 * @font-face rules for one family with the font files inlined. Only the latin
 * subsets are kept: one shared copy serves every board on the page (other
 * scripts fall back to a system font in the snapshot).
 */
function familyCss(url: string): Promise<string> {
  let cached = fontCssCache.get(url);
  if (!cached) {
    cached = fetch(url)
      .then((r) => r.text())
      .then(async (full) => {
        const blocks = full.split(/(?=\/\*)/).filter((b) => /\/\*\s*latin(-ext)?\s*\*\//.test(b));
        const css = blocks.length ? blocks.join('') : full;
        const urls = [...new Set([...css.matchAll(/url\((https:[^)]+)\)/g)].map((m) => m[1]))];
        const inlined = new Map(
          await Promise.all(urls.map(async (u) => [u, await toDataUrl(u)] as const))
        );
        return css.replace(/url\((https:[^)]+)\)/g, (m, u) => `url(${inlined.get(u) ?? u})`);
      });
    cached.catch(() => fontCssCache.delete(url));
    fontCssCache.set(url, cached);
  }
  return cached;
}

/** @font-face rules for the fonts the board uses, with the font files inlined. */
async function fontCss(svg: SVGSVGElement): Promise<string> {
  const used = Object.keys(FONT_CSS).filter((family) =>
    [...svg.querySelectorAll('[font-family]')].some((el) =>
      new RegExp(`(^|,)\\s*"?${family}"?\\s*(,|$)`).test(el.getAttribute('font-family') ?? '')
    )
  );
  if (!used.length || !svg.textContent?.trim()) return '';
  return (await Promise.all(used.map((f) => familyCss(FONT_CSS[f])))).join('\n');
}

/** Fetch and inline everything a board's snapshot will need, without rasterizing. */
export async function warmSnapshotAssets(svg: SVGSVGElement) {
  await Promise.allSettled([
    ...[...svg.querySelectorAll('image')].map((img) => {
      const href = img.getAttribute('href');
      return href && !href.startsWith('data:') ? toDataUrl(href) : undefined;
    }),
    fontCss(svg)
  ]);
}

export async function svgToImage(svg: SVGSVGElement, width: number, height: number, scale = 1.5) {
  // Clone into an inert document: a clone in the live document, even detached,
  // starts loading every <image> href (and decoding the data URLs swapped in).
  const inert = document.implementation.createHTMLDocument('');
  const clone = inert.importNode(svg, true);
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  clone.setAttribute('width', String(width));
  clone.setAttribute('height', String(height));
  clone.removeAttribute('class');

  await Promise.all(
    [...clone.querySelectorAll('image')].map(async (img) => {
      const href = img.getAttribute('href');
      if (href && !href.startsWith('data:')) img.setAttribute('href', await toDataUrl(href));
    })
  );

  try {
    const css = await fontCss(svg);
    if (css) {
      const style = inert.createElementNS('http://www.w3.org/2000/svg', 'style');
      style.textContent = css;
      clone.prepend(style);
    }
  } catch {
    // Without the web font the image falls back to Arial; still worth having
  }

  const svgUrl = URL.createObjectURL(
    new Blob([new XMLSerializer().serializeToString(clone)], { type: 'image/svg+xml' })
  );
  const img = new Image();
  const canvas = document.createElement('canvas');
  try {
    img.src = svgUrl;
    await img.decode();
    canvas.width = Math.round(width * scale);
    canvas.height = Math.round(height * scale);
    canvas.getContext('2d')!.drawImage(img, 0, 0, canvas.width, canvas.height);
    // WebP is ~10x smaller than PNG for the noisy arena textures. Browsers that
    // can't encode it (older Safari) hand back a PNG instead.
    return await new Promise<Blob>((resolve, reject) =>
      canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('toBlob failed'))), 'image/webp', 0.9)
    );
  } finally {
    // Free the decoded SVG and the canvas backing store now rather than at GC
    URL.revokeObjectURL(svgUrl);
    img.removeAttribute('src');
    canvas.width = canvas.height = 0;
  }
}
