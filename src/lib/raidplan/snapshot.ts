// Rasterize a rendered board to PNG, so it can sit under the pointer as a real
// <img> (right-click copy/save, drag out). An SVG drawn as an image can't load
// anything external, so images and fonts are inlined as data URLs first. The
// fetched assets are cached, so warmSnapshotAssets() can do that work early and
// the PNG itself is only built when it's about to be used.

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

const GOOGLE_FONTS: Record<string, string> = {
  Roboto: 'Roboto:ital,wght@0,400;0,700;1,400',
  'Roboto Mono': 'Roboto+Mono:wght@400;700',
  'Playpen Sans': 'Playpen+Sans:wght@400;700'
};

const fontCssCache = new Map<string, Promise<string>>();

/**
 * @font-face rules for the fonts the board uses, with the font files inlined.
 * Google Fonts' `text=` parameter returns fonts holding only those glyphs, so
 * this stays a few KB per board.
 */
function fontCss(svg: SVGSVGElement): Promise<string> {
  const used = Object.keys(GOOGLE_FONTS).filter((family) =>
    [...svg.querySelectorAll('[font-family]')].some((el) =>
      new RegExp(`(^|,)\\s*"?${family}"?\\s*(,|$)`).test(el.getAttribute('font-family') ?? '')
    )
  );
  const text = [...new Set(svg.textContent ?? '')].join('');
  if (!used.length || !text.trim()) return Promise.resolve('');
  const families = used.map((f) => `family=${GOOGLE_FONTS[f]}`).join('&');
  const url = `https://fonts.googleapis.com/css2?${families}&text=${encodeURIComponent(text)}`;
  let cached = fontCssCache.get(url);
  if (!cached) {
    cached = fetch(url)
      .then((r) => r.text())
      .then(async (css) => {
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

export async function svgToPng(svg: SVGSVGElement, width: number, height: number, scale = 1.5) {
  const clone = svg.cloneNode(true) as SVGSVGElement;
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
      const style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
      style.textContent = css;
      clone.prepend(style);
    }
  } catch {
    // Without the web font the PNG falls back to Arial; still worth having
  }

  const svgUrl = URL.createObjectURL(
    new Blob([new XMLSerializer().serializeToString(clone)], { type: 'image/svg+xml' })
  );
  try {
    const img = new Image();
    img.src = svgUrl;
    await img.decode();
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(width * scale);
    canvas.height = Math.round(height * scale);
    canvas.getContext('2d')!.drawImage(img, 0, 0, canvas.width, canvas.height);
    return await new Promise<Blob>((resolve, reject) =>
      canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('toBlob failed'))), 'image/png')
    );
  } finally {
    URL.revokeObjectURL(svgUrl);
  }
}
