// Strat data can point an imageUrl at a raidplan step instead of a screenshot:
//
//   imageUrl: raidplanImage('c2L5iJfuYIWXk1v7', 6)   // same step number as the plan's #6 link
//
// The reference is a plain string, so it flows through resolveStratItem, tags
// and ImageUrls.alt like any other image URL; the views check for it and render
// a RaidplanImage instead of an <img>. Kept free of imports so fight data
// modules can use it.

const PREFIX = 'raidplan:';

/** Boards are drawn on raidplan's 1200x675 canvas. */
export const RAIDPLAN_ASPECT = 1200 / 675;

/** `step` is one-based, matching raidplan's #N links. */
export function raidplanImage(code: string, step: number): string {
  return `${PREFIX}${code}#${step}`;
}

/** Returns the zero-based step. */
export function parseRaidplanImage(src: unknown): { code: string; step: number } | null {
  if (typeof src !== 'string' || !src.startsWith(PREFIX)) return null;
  const m = src.slice(PREFIX.length).match(/^([A-Za-z0-9_-]+)#(\d+)$/);
  return m ? { code: m[1], step: Number(m[2]) - 1 } : null;
}

export function isRaidplanImage(src: unknown): src is string {
  return parseRaidplanImage(src) !== null;
}
