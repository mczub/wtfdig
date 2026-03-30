let animationId: number | null = null;
let wrapper: HTMLDivElement | null = null;
let clickHandler: (() => void) | null = null;

interface BouncingImage {
  bitmap: ImageBitmap;
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
  trailTimer: number;
  settled: boolean;
}

export async function startSolitaireEffect() {
  stopSolitaireEffect();

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const dpr = devicePixelRatio;

  // Create two canvases: one for persistent trail, one for active bouncer heads
  wrapper = document.createElement('div');
  wrapper.style.cssText = 'position:fixed;inset:0;z-index:9999;pointer-events:none;';
  document.body.appendChild(wrapper);

  const trailCanvas = document.createElement('canvas');
  trailCanvas.width = vw * dpr;
  trailCanvas.height = vh * dpr;
  trailCanvas.style.cssText = `position:absolute;inset:0;width:${vw}px;height:${vh}px;`;
  wrapper.appendChild(trailCanvas);

  const headCanvas = document.createElement('canvas');
  headCanvas.width = vw * dpr;
  headCanvas.height = vh * dpr;
  headCanvas.style.cssText = `position:absolute;inset:0;width:${vw}px;height:${vh}px;`;
  wrapper.appendChild(headCanvas);

  const trailCtx = trailCanvas.getContext('2d');
  const headCtx = headCanvas.getContext('2d');
  if (!trailCtx || !headCtx) return;
  trailCtx.scale(dpr, dpr);
  headCtx.scale(dpr, dpr);

  // Gather all strat images currently visible on the page
  const images = Array.from(
    document.querySelectorAll<HTMLImageElement>('main img')
  ).filter((img) => img.naturalWidth > 0);

  if (images.length === 0) {
    stopSolitaireEffect();
    return;
  }

  const GRAVITY = 0.3;
  const BOUNCE_DAMPING = 0.85;
  const FRICTION = 0.995;
  const TRAIL_INTERVAL = 2;

  const bouncers: BouncingImage[] = [];

  // Pre-create bitmaps for all images
  const bitmapCache = new Map<string, ImageBitmap>();
  for (const img of images) {
    if (!bitmapCache.has(img.src)) {
      bitmapCache.set(img.src, await createImageBitmap(img));
    }
  }

  // Stagger image launches
  let launchIndex = 0;
  const launchDelay = 400;

  function launchNext() {
    if (launchIndex >= images.length) return;

    const srcImg = images[launchIndex];
    const rect = srcImg.getBoundingClientRect();
    const currentVh = window.innerHeight;
    const width = rect.width;
    const height = rect.height;
    const bitmap = bitmapCache.get(srcImg.src)!;

    bouncers.push({
      bitmap,
      x: rect.left + rect.width / 2 - width / 2,
      y: rect.top + rect.height / 2 - height / 2,
      vx: (Math.random() - 0.5) * 16,
      vy: -(Math.random() * 12 + 6 + (rect.top > currentVh ? Math.random() * 12 + 6 : 0)),
      width,
      height,
      trailTimer: 0,
      settled: false
    });

    launchIndex++;
    if (launchIndex < images.length) {
      setTimeout(launchNext, launchDelay);
    }
  }

  function animate() {
    if (!trailCtx || !headCtx) return;
    const currentVw = window.innerWidth;
    const currentVh = window.innerHeight;

    // Clear the head layer each frame — trail layer is never cleared
    headCtx.clearRect(0, 0, currentVw, currentVh);

    for (const b of bouncers) {
      if (b.settled) continue;

      b.vy += GRAVITY;
      b.vx *= FRICTION;
      b.x += b.vx;
      b.y += b.vy;

      // Bounce off bottom
      if (b.y + b.height > currentVh) {
        b.y = currentVh - b.height;
        b.vy = -Math.abs(b.vy) * BOUNCE_DAMPING;
      }

      // Bounce off sides
      if (b.x < 0) {
        b.x = 0;
        b.vx = Math.abs(b.vx);
      } else if (b.x + b.width > currentVw) {
        b.x = currentVw - b.width;
        b.vx = -Math.abs(b.vx);
      }

      // Bounce off top
      if (b.y < 0) {
        b.y = 0;
        b.vy = Math.abs(b.vy);
      }

      // Check if settled
      if (b.y + b.height >= currentVh - 1 && Math.abs(b.vy) < 1.5 && Math.abs(b.vx) < 1.5) {
        b.settled = true;
        trailCtx.drawImage(b.bitmap, b.x, b.y, b.width, b.height);
        continue;
      }

      // Leave trail on the persistent layer
      b.trailTimer++;
      if (b.trailTimer >= TRAIL_INTERVAL) {
        b.trailTimer = 0;
        trailCtx.drawImage(b.bitmap, b.x, b.y, b.width, b.height);
      }

      // Always draw the current head on the cleared layer
      headCtx.drawImage(b.bitmap, b.x, b.y, b.width, b.height);
    }

    // Stop once all settled and launched, then allow click to dismiss
    if (launchIndex >= images.length && bouncers.length > 0 && bouncers.every((b) => b.settled)) {
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
      clickHandler = () => stopSolitaireEffect();
      document.addEventListener('click', clickHandler, { once: true });
      return;
    }

    animationId = requestAnimationFrame(animate);
  }

  launchNext();
  animationId = requestAnimationFrame(animate);
}

export function stopSolitaireEffect() {
  if (animationId !== null) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
  if (clickHandler) {
    document.removeEventListener('click', clickHandler);
    clickHandler = null;
  }
  if (wrapper) {
    wrapper.remove();
    wrapper = null;
  }
}
