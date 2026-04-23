// Arena diagram types and helper functions for declarative SVG diagrams

// --- Types ---

export type ArenaShape = 'square' | 'circle';

export type PlayerJob =
  | 'MT' | 'OT' | 'H1' | 'H2' | 'M1' | 'M2' | 'R1' | 'R2'
  | 'T' | 'H' | 'DPS' | 'SUP' | 'G1' | 'G2' | 'ANY';

/** Jobs in group 1 (first of each role pair). */
export const G1_JOBS: readonly PlayerJob[] = ['MT', 'H1', 'M1', 'R1'];
/** Jobs in group 2 (second of each role pair). */
export const G2_JOBS: readonly PlayerJob[] = ['OT', 'H2', 'M2', 'R2'];
/** Tank jobs (both tanks). */
export const TANK_JOBS: readonly PlayerJob[] = ['MT', 'OT'];
/** Healer jobs (both healers). */
export const HEALER_JOBS: readonly PlayerJob[] = ['H1', 'H2'];
/** Support jobs (tanks + healers). */
export const SUPPORT_JOBS: readonly PlayerJob[] = ['MT', 'OT', 'H1', 'H2'];
/** DPS jobs (melee + ranged). */
export const DPS_JOBS: readonly PlayerJob[] = ['M1', 'M2', 'R1', 'R2'];

/**
 * Returns true if a generic job icon (DPS/SUP/G1/G2/ANY) should light up
 * when a specific role is selected, or a specific job matches itself.
 */
export function jobMatchesRole(iconJob: PlayerJob, selectedJob: PlayerJob): boolean {
  if (iconJob === selectedJob) return true;
  if (iconJob === 'ANY') return true;
  if (iconJob === 'G1') return G1_JOBS.includes(selectedJob);
  if (iconJob === 'G2') return G2_JOBS.includes(selectedJob);
  if (iconJob === 'T') return TANK_JOBS.includes(selectedJob);
  if (iconJob === 'H') return HEALER_JOBS.includes(selectedJob);
  if (iconJob === 'SUP') return SUPPORT_JOBS.includes(selectedJob);
  if (iconJob === 'DPS') return DPS_JOBS.includes(selectedJob);
  return false;
}
export type WaymarkName = 'A' | 'B' | 'C' | 'D' | '1' | '2' | '3' | '4';

export type PlayerCorner = 'tl' | 'tr' | 'bl' | 'br';

export interface PlayerElement {
  type: 'player';
  job: PlayerJob;
  x: number; // 0-100
  y: number; // 0-100
  marker?: 'red' | 'green';
  /** Debuff icons attached to player corners (by debuff id from $lib/debuffs). */
  corners?: Partial<Record<PlayerCorner, string>>;
  id?: string;
}

/** 1-8 Limit-Cut style number. */
export type LcNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

/**
 * Numbered icon for Limit Cut-style mechanics. Rendered as a white-filled
 * circle with a colored ring and number (odd = blue, even = red) to
 * distinguish it from normal player icons.
 */
export interface LcPlayerElement {
  type: 'lc';
  num: LcNumber;
  x: number;
  y: number;
  id?: string;
}

export interface BossElement {
  type: 'boss';
  x: number;
  y: number;
  rotation?: number; // degrees, 0 = facing north (up)
  id?: string;
}

export interface WaymarkElement {
  type: 'waymark';
  mark: WaymarkName;
  x: number;
  y: number;
  /** Diameter of the waymark in arena % units (default 8). */
  size?: number;
  id?: string;
}

export interface AoECircleElement {
  type: 'aoe';
  shape: 'circle';
  x: number;
  y: number;
  r: number; // radius in arena %
  color?: string;
  opacity?: number;
  id?: string;
}

export interface AoERectElement {
  type: 'aoe';
  shape: 'rect';
  x: number; // center x
  y: number; // center y
  w: number; // width in arena %
  h: number; // height in arena %
  rotation?: number; // degrees
  color?: string;
  opacity?: number;
  id?: string;
}

export interface AoEConeElement {
  type: 'aoe';
  shape: 'cone';
  x: number; // origin / tip of the cone
  y: number;
  r: number; // length / range in arena %
  /** Spread of the cone in degrees (default 90). */
  angle?: number;
  /** Direction the cone points, degrees. 0 = north/up, clockwise positive. */
  rotation?: number;
  color?: string;
  opacity?: number;
  id?: string;
}

export interface TetherElement {
  type: 'tether';
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  width?: number;
  dashed?: boolean;
  id?: string;
}

export interface ArrowElement {
  type: 'arrow';
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  width?: number;
  id?: string;
}

export interface TextElement {
  type: 'text';
  text: string;
  x: number;
  y: number;
  color?: string;
  fontSize?: number; // in arena % units (default 4)
  anchor?: 'start' | 'middle' | 'end';
  id?: string;
}

/** Named waymark preset to attach to an arenaShape. */
export type ArenaMarkerPreset = 'square' | 'circle' | 'tea';

export interface ArenaShapeElement {
  type: 'arena';
  shape: 'square' | 'circle' | 'rect';
  x: number; // center x
  y: number; // center y
  w: number; // width (or diameter for circle)
  h: number; // height (ignored for circle; uses w as diameter)
  rotation?: number;
  bgColor?: string;
  borderColor?: string;
  showCrosshairs?: boolean; // default true
  /** Waymark preset to render around this arena, scaled to its size. */
  markers?: ArenaMarkerPreset;
  /** Optional override for marker size (arena % units). */
  markerSize?: number;
  id?: string;
}

export interface DebuffElement {
  type: 'debuff';
  debuffId: string; // key in $lib/debuffs DEBUFFS
  x: number;
  y: number;
  size?: number; // arena % units; default 6
  id?: string;
}

export type ArenaElement =
  | PlayerElement
  | LcPlayerElement
  | BossElement
  | WaymarkElement
  | AoECircleElement
  | AoERectElement
  | AoEConeElement
  | TetherElement
  | ArrowElement
  | TextElement
  | ArenaShapeElement
  | DebuffElement;

export interface ArenaDiagramData {
  arena: ArenaShape;
  bgColor?: string; // default: '#3a2f25' (dark brown)
  elements: ArenaElement[];
  highlight?: string[]; // element IDs to spotlight
  title?: string;
  scale?: number; // scales all element sizes (default 1)
}

// --- Color constants ---

export const ROLE_COLORS: Record<PlayerJob, string> = {
  MT: '#3b82f6', // blue
  OT: '#3b82f6', // blue
  H1: '#22c55e', // green
  H2: '#22c55e', // lighter green
  M1: '#ef4444', // red
  M2: '#ef4444', // lighter red
  R1: '#ef4444', // purple
  R2: '#ef4444', // lighter purple
  T: '#3b82f6', // blue — generic Tank
  H: '#22c55e', // green — generic Healer
  DPS: '#ef4444', // red — generic DPS
  SUP: '#14b8a6', // teal — generic Support (tank/healer)
  G1: '#a78bfa', // violet — group 1
  G2: '#f59e0b', // amber — group 2
  ANY: '#6e7073' // light gray — any player
};

/** Limit Cut number colors: odd = blue, even = red. */
export const LC_COLORS = {
  odd: '#3b82f6',
  even: '#ef4444'
} as const;

export function lcNumberColor(num: LcNumber): string {
  return num % 2 === 1 ? LC_COLORS.odd : LC_COLORS.even;
}

export const WAYMARK_COLORS: Record<WaymarkName, string> = {
  A: '#ef4444', // red
  B: '#eab308', // yellow
  C: '#3b82f6', // blue
  D: '#a855f7', // purple
  '1': '#ef4444',
  '2': '#eab308',
  '3': '#3b82f6',
  '4': '#a855f7'
};

// --- Helper functions for concise diagram definition ---

export function player(job: PlayerJob, x: number, y: number, opts?: string | { id?: string; marker?: 'red' | 'green'; corners?: Partial<Record<PlayerCorner, string>> }): PlayerElement {
  if (typeof opts === 'string') return { type: 'player', job, x, y, id: opts };
  return { type: 'player', job, x, y, ...opts };
}

export function boss(x: number, y: number, rotation?: number, id?: string): BossElement {
  return { type: 'boss', x, y, rotation, id };
}

export function lcPlayer(num: LcNumber, x: number, y: number, id?: string): LcPlayerElement {
  return { type: 'lc', num, x, y, id };
}

export function waymark(
  mark: WaymarkName,
  x: number,
  y: number,
  opts?: string | { size?: number; id?: string }
): WaymarkElement {
  if (typeof opts === 'string') return { type: 'waymark', mark, x, y, id: opts };
  return { type: 'waymark', mark, x, y, ...opts };
}

export function aoeCircle(
  x: number,
  y: number,
  r: number,
  opts?: { color?: string; opacity?: number; id?: string }
): AoECircleElement {
  return { type: 'aoe', shape: 'circle', x, y, r, ...opts };
}

export function aoeRect(
  x: number,
  y: number,
  w: number,
  h: number,
  opts?: { rotation?: number; color?: string; opacity?: number; id?: string }
): AoERectElement {
  return { type: 'aoe', shape: 'rect', x, y, w, h, ...opts };
}

export function aoeCone(
  x: number,
  y: number,
  r: number,
  opts?: { angle?: number; rotation?: number; color?: string; opacity?: number; id?: string }
): AoEConeElement {
  return { type: 'aoe', shape: 'cone', x, y, r, ...opts };
}

export function tether(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  opts?: { color?: string; width?: number; dashed?: boolean; id?: string }
): TetherElement {
  return { type: 'tether', x1, y1, x2, y2, ...opts };
}

export function arrow(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  opts?: { color?: string; width?: number; id?: string }
): ArrowElement {
  return { type: 'arrow', x1, y1, x2, y2, ...opts };
}

export function text(
  label: string,
  x: number,
  y: number,
  opts?: { color?: string; fontSize?: number; anchor?: 'start' | 'middle' | 'end'; id?: string }
): TextElement {
  return { type: 'text', text: label, x, y, ...opts };
}

export function debuff(
  debuffId: string,
  x: number,
  y: number,
  opts?: { size?: number; id?: string }
): DebuffElement {
  return { type: 'debuff', debuffId, x, y, ...opts };
}

export function arenaShape(
  shape: 'square' | 'circle' | 'rect',
  x: number,
  y: number,
  w: number,
  h: number,
  opts?: {
    rotation?: number;
    bgColor?: string;
    borderColor?: string;
    showCrosshairs?: boolean;
    markers?: ArenaMarkerPreset;
    markerSize?: number;
    id?: string;
  }
): ArenaShapeElement {
  return { type: 'arena', shape, x, y, w, h, ...opts };
}

export function diagram(
  arena: ArenaShape,
  elements: ArenaElement[],
  opts?: { bgColor?: string; highlight?: string[]; title?: string; scale?: number }
): ArenaDiagramData {
  return { arena, elements, ...opts };
}

// --- Standard waymark presets ---

/** Standard FFXIV square arena waymarks: A north, B east, C south, D west, 1-4 corners */
export const SQUARE_MARKERS: WaymarkElement[] = [
  waymark('A', 50, 25),
  waymark('B', 75, 50),
  waymark('C', 50, 75),
  waymark('D', 25, 50),
  waymark('1', 20, 20),
  waymark('2', 80, 20),
  waymark('3', 80, 80),
  waymark('4', 20, 80)
];

/** Standard FFXIV circle arena waymarks */
export const CIRCLE_MARKERS: WaymarkElement[] = [
  waymark('A', 50, 18),
  waymark('B', 82, 50),
  waymark('C', 50, 82),
  waymark('D', 18, 50),
  waymark('1', 25, 25),
  waymark('2', 75, 25),
  waymark('3', 75, 75),
  waymark('4', 25, 75)
];

// --- Arena-attached waymark presets ---
// These position waymarks relative to a placed arenaShape at (cx, cy) with
// width/height w/h. `size` defaults to a sensible fraction of the arena so
// marks scale with the shape.

export interface ArenaMarkerOpts {
  /** Waymark diameter in arena % units. Defaults to 8% of arena width. */
  size?: number;
  /**
   * Distance of cardinal (A/B/C/D) marks from the center, as a fraction
   * of the arena's half-extent. Default 0.7 (just inside the edge).
   */
  cardinalR?: number;
  /**
   * Distance of corner (1/2/3/4) marks from the center, as a fraction
   * of the arena's half-extent. Default 0.5.
   */
  cornerR?: number;
}

/** Square-arena waymarks positioned around a placed arenaShape at (cx, cy). */
export function squareMarkersAround(
  cx: number,
  cy: number,
  w: number,
  h: number,
  opts?: ArenaMarkerOpts
): WaymarkElement[] {
  const size = opts?.size ?? w * 0.08;
  const cardR = opts?.cardinalR ?? 0.7;
  const cornR = opts?.cornerR ?? 0.5;
  const hx = (w / 2) * cardR;
  const hy = (h / 2) * cardR;
  const cxo = (w / 2) * cornR;
  const cyo = (h / 2) * cornR;
  return [
    waymark('A', cx, cy - hy, { size }),
    waymark('B', cx + hx, cy, { size }),
    waymark('C', cx, cy + hy, { size }),
    waymark('D', cx - hx, cy, { size }),
    waymark('1', cx - cxo, cy - cyo, { size }),
    waymark('2', cx + cxo, cy - cyo, { size }),
    waymark('3', cx + cxo, cy + cyo, { size }),
    waymark('4', cx - cxo, cy + cyo, { size })
  ];
}

/**
 * TEA "PF Trines" waymark preset, scaled to a placed arenaShape at (cx, cy)
 * with width/height w/h. Source coordinates assume an arena centered at
 * (100, 100) with radius 20 (game units).
 */
export function teaMarkers(
  cx: number,
  cy: number,
  w: number,
  h: number,
  opts?: { size?: number }
): WaymarkElement[] {
  const size = opts?.size ?? w * 0.08;
  // Game arena half-width is 20 units → half-width in screen units is w/2.
  const sx = w / 40;
  const sy = h / 20;
  const marks: Array<[WaymarkName, number, number]> = [
    ['A',   0,     -13.75],
    ['B',   13.75, -8.25],
    ['C',   0,      13.75],
    ['D',  -13.75,  0],
    ['1',   8,      0],
    ['2',   13.75,  0],
    ['3',   0,      8],
    ['4',   8,      8]
  ];
  return marks.map(([mark, dx, dy]) =>
    waymark(mark, cx + dx * sx, cy + dy * sy, { size })
  );
}

/** Circle-arena waymarks positioned around a placed arenaShape at (cx, cy). */
export function circleMarkersAround(
  cx: number,
  cy: number,
  w: number,
  h: number,
  opts?: ArenaMarkerOpts
): WaymarkElement[] {
  const size = opts?.size ?? w * 0.08;
  const cardR = opts?.cardinalR ?? 0.8;
  const cornR = opts?.cornerR ?? 0.55;
  const rx = (w / 2) * cardR;
  const ry = (h / 2) * cardR;
  const k = Math.SQRT1_2;
  const cxo = (w / 2) * cornR * k;
  const cyo = (h / 2) * cornR * k;
  return [
    waymark('A', cx, cy - ry, { size }),
    waymark('B', cx + rx, cy, { size }),
    waymark('C', cx, cy + ry, { size }),
    waymark('D', cx - rx, cy, { size }),
    waymark('1', cx - cxo, cy - cyo, { size }),
    waymark('2', cx + cxo, cy - cyo, { size }),
    waymark('3', cx + cxo, cy + cyo, { size }),
    waymark('4', cx - cxo, cy + cyo, { size })
  ];
}

/**
 * Dispatches an `ArenaMarkerPreset` id to the right preset builder.
 * Used by the renderer when an `arenaShape` element has `markers` set.
 */
export function markersForArena(
  preset: ArenaMarkerPreset,
  cx: number,
  cy: number,
  w: number,
  h: number,
  size?: number
): WaymarkElement[] {
  const opts = size != null ? { size } : undefined;
  if (preset === 'square') return squareMarkersAround(cx, cy, w, h, opts);
  if (preset === 'circle') return circleMarkersAround(cx, cy, w, h, opts);
  return teaMarkers(cx, cy, w, h, opts);
}
