// Arena diagram types and helper functions for declarative SVG diagrams

// --- Types ---

export type ArenaShape = 'square' | 'circle';

export type PlayerJob = 'MT' | 'OT' | 'H1' | 'H2' | 'M1' | 'M2' | 'R1' | 'R2';
export type WaymarkName = 'A' | 'B' | 'C' | 'D' | '1' | '2' | '3' | '4';

export interface PlayerElement {
  type: 'player';
  job: PlayerJob;
  x: number; // 0-100
  y: number; // 0-100
  marker?: 'red' | 'green';
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

export type ArenaElement =
  | PlayerElement
  | BossElement
  | WaymarkElement
  | AoECircleElement
  | AoERectElement
  | TetherElement
  | ArrowElement
  | TextElement;

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
  R2: '#ef4444'  // lighter purple
};

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

export function player(job: PlayerJob, x: number, y: number, opts?: string | { id?: string; marker?: 'red' | 'green' }): PlayerElement {
  if (typeof opts === 'string') return { type: 'player', job, x, y, id: opts };
  return { type: 'player', job, x, y, ...opts };
}

export function boss(x: number, y: number, rotation?: number, id?: string): BossElement {
  return { type: 'boss', x, y, rotation, id };
}

export function waymark(mark: WaymarkName, x: number, y: number, id?: string): WaymarkElement {
  return { type: 'waymark', mark, x, y, id };
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
