// Arena diagram types and helper functions for declarative SVG diagrams

// --- Types ---

export type ArenaShape = 'square' | 'circle';

export type PlayerJob =
  | 'MT'
  | 'OT'
  | 'H1'
  | 'H2'
  | 'M1'
  | 'M2'
  | 'R1'
  | 'R2'
  | 'DPS'
  | 'SUP'
  | 'G1'
  | 'G2'
  | 'G1SUP'
  | 'G1DPS'
  | 'G2SUP'
  | 'G2DPS'
  | 'ANY'
  | 'TANK'
  | 'HEALER'
  | 'MELEE'
  | 'RANGED'
  | 'HTM'
  | 'TMR'
  | 'X';

/** Jobs in group 1 (first of each role pair). */
export const G1_JOBS: readonly PlayerJob[] = ['MT', 'H1', 'M1', 'R1'];
/** Jobs in group 2 (second of each role pair). */
export const G2_JOBS: readonly PlayerJob[] = ['OT', 'H2', 'M2', 'R2'];
/** Support jobs (tanks + healers). */
export const SUPPORT_JOBS: readonly PlayerJob[] = ['MT', 'OT', 'H1', 'H2'];
/** DPS jobs (melee + ranged). */
export const DPS_JOBS: readonly PlayerJob[] = ['M1', 'M2', 'R1', 'R2'];
/** Tank jobs. */
export const TANK_JOBS: readonly PlayerJob[] = ['MT', 'OT'];
/** Healer jobs. */
export const HEALER_JOBS: readonly PlayerJob[] = ['H1', 'H2'];
/** Melee DPS jobs. */
export const MELEE_JOBS: readonly PlayerJob[] = ['M1', 'M2'];
/** Ranged DPS jobs. */
export const RANGED_JOBS: readonly PlayerJob[] = ['R1', 'R2'];
/** G1 supports (MT + H1). */
export const G1_SUPPORT_JOBS: readonly PlayerJob[] = ['MT', 'H1'];
/** G2 supports (OT + H2). */
export const G2_SUPPORT_JOBS: readonly PlayerJob[] = ['OT', 'H2'];
/** G1 DPS (M1 + R1). */
export const G1_DPS_JOBS: readonly PlayerJob[] = ['M1', 'R1'];
/** G2 DPS (M2 + R2). */
export const G2_DPS_JOBS: readonly PlayerJob[] = ['M2', 'R2'];
/** Healer + Tank + Melee jobs. */
export const HTM_JOBS: readonly PlayerJob[] = ['MT', 'OT', 'H1', 'H2', 'M1', 'M2'];
/** Tank + Melee + Ranged jobs. */
export const TMR_JOBS: readonly PlayerJob[] = ['MT', 'OT', 'M1', 'M2', 'R1', 'R2'];

/** Short labels for role-generic player icons. Newlines render as stacked tspans. */
export const DEFAULT_JOB_LABELS: Partial<Record<PlayerJob, string>> = {
  TANK: 'T',
  HEALER: 'H',
  MELEE: 'M',
  RANGED: 'R',
  G1SUP: 'G1\nSUP',
  G1DPS: 'G1\nDPS',
  G2SUP: 'G2\nSUP',
  G2DPS: 'G2\nDPS'
};

/**
 * Returns true if a generic job icon (DPS/SUP/G1/G2/ANY/TANK/HEALER/MELEE/RANGED)
 * should light up when a specific role is selected, or a specific job matches itself.
 */
export function jobMatchesRole(iconJob: PlayerJob, selectedJob: PlayerJob): boolean {
  if (iconJob === selectedJob) return true;
  if (iconJob === 'ANY') return true;
  if (iconJob === 'G1') return G1_JOBS.includes(selectedJob);
  if (iconJob === 'G2') return G2_JOBS.includes(selectedJob);
  if (iconJob === 'SUP') return SUPPORT_JOBS.includes(selectedJob);
  if (iconJob === 'DPS') return DPS_JOBS.includes(selectedJob);
  if (iconJob === 'TANK') return TANK_JOBS.includes(selectedJob);
  if (iconJob === 'HEALER') return HEALER_JOBS.includes(selectedJob);
  if (iconJob === 'MELEE') return MELEE_JOBS.includes(selectedJob);
  if (iconJob === 'RANGED') return RANGED_JOBS.includes(selectedJob);
  if (iconJob === 'G1SUP') return G1_SUPPORT_JOBS.includes(selectedJob);
  if (iconJob === 'G2SUP') return G2_SUPPORT_JOBS.includes(selectedJob);
  if (iconJob === 'G1DPS') return G1_DPS_JOBS.includes(selectedJob);
  if (iconJob === 'G2DPS') return G2_DPS_JOBS.includes(selectedJob);
  if (iconJob === 'HTM') return HTM_JOBS.includes(selectedJob);
  if (iconJob === 'TMR') return TMR_JOBS.includes(selectedJob);
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
  /** Status/debuff icon centered above the player (by debuff id from $lib/debuffs), like the chevron marker. */
  statusAbove?: string;
  /** Radius in arena % units. Default 6. */
  size?: number;
  id?: string;
}

export interface BossElement {
  type: 'boss';
  x: number;
  y: number;
  rotation?: number; // degrees, 0 = facing north (up)
  /** Target-ring (hitbox) radius in arena % units. Default 12. */
  size?: number;
  /** Ring style: 'directional' (270deg arc + facing arrow, default) or 'circle' (full double ring, no direction). */
  ring?: 'directional' | 'circle';
  id?: string;
}

export interface WaymarkElement {
  type: 'waymark';
  mark: WaymarkName;
  x: number;
  y: number;
  /** Radius for letter marks / half-side for number marks, in arena % units. Default 4. */
  size?: number;
  id?: string;
}

export interface AoECircleElement {
  type: 'aoe';
  shape: 'circle';
  x: number;
  y: number;
  /** X-axis radius in arena %. (Reused as Y-axis radius when `ry` is unset.) */
  r: number;
  /** Optional Y-axis radius for ellipses. Defaults to `r` (circle). */
  ry?: number;
  /** Optional rotation in degrees, around the center. */
  rotation?: number;
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

export type ArrowHeads = 'start' | 'end' | 'both' | 'none';

export interface ArrowElement {
  type: 'arrow';
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  width?: number;
  /** Which ends get an arrowhead. Default: 'end'. */
  heads?: ArrowHeads;
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
  /** Optional URL of an image to use as the arena background (clipped to shape). */
  bgImage?: string;
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

export interface PolygonElement {
  type: 'polygon';
  /** Array of [x, y] vertex coordinates. */
  points: [number, number][];
  color?: string;
  opacity?: number;
  /** Rotation in degrees around the polygon's centroid. */
  rotation?: number;
  /** If true, render as outline only (no fill). */
  outline?: boolean;
  id?: string;
}

export interface CurvedArrowElement {
  type: 'curvedArrow';
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  /**
   * Curvature offset of the midpoint, perpendicular to the chord.
   * Positive bends to the right of the start→end direction, negative bends left.
   * Default: 6. Use 0 for a straight line.
   */
  curvature?: number;
  color?: string;
  width?: number;
  /** Which ends get an arrowhead. Default: 'end'. */
  heads?: ArrowHeads;
  id?: string;
}

export type ArenaElement = (
  | PlayerElement
  | BossElement
  | WaymarkElement
  | AoECircleElement
  | AoERectElement
  | TetherElement
  | ArrowElement
  | TextElement
  | ArenaShapeElement
  | DebuffElement
  | PolygonElement
  | CurvedArrowElement
) & {
  /** Optional group membership. Matches a `GroupDef.id` on the diagram. */
  groupId?: string;
};

/**
 * Predicate for conditional visibility on poster sections and arena element
 * groups. All listed criteria are AND-ed together. Omitted fields = no constraint.
 */
export interface VisibilityCondition {
  /** Tri-state: `true` only when a role is selected, `false` only when no role
   * is selected (i.e. overview mode), `undefined` = no constraint. */
  whenRoleSelected?: boolean;
  /** Show only when the selected job matches one of these (generics resolve via {@link jobMatchesRole}). */
  jobs?: PlayerJob[];
  /** Show only when stratState[tag] is one of the listed values, for each tag. */
  strat?: Record<string, string[]>;
  /** Show only when the active strat key is one of these. */
  stratKey?: string[];
}

/** Named group of arena elements, opt-in via {@link ArenaElement.groupId}. */
export interface GroupDef {
  id: string;
  /** Short label for UI surfaces (defaults to `id`). */
  label?: string;
  /** Visibility predicate. When unmet, every element with this groupId is hidden. */
  visibleWhen?: VisibilityCondition;
}

export interface VisibilityContext {
  selectedJob?: PlayerJob;
  stratState?: Record<string, string | null | undefined>;
  stratKey?: string;
}

/** Returns true when `cond` is satisfied (or undefined). */
export function evaluateVisibility(
  cond: VisibilityCondition | undefined,
  ctx: VisibilityContext
): boolean {
  if (!cond) return true;
  if (cond.whenRoleSelected === true && !ctx.selectedJob) return false;
  if (cond.whenRoleSelected === false && ctx.selectedJob) return false;
  if (cond.jobs?.length) {
    if (!ctx.selectedJob) return false;
    const match = cond.jobs.some((j) => jobMatchesRole(j, ctx.selectedJob!));
    if (!match) return false;
  }
  if (cond.strat) {
    const state = ctx.stratState ?? {};
    for (const [tag, allowed] of Object.entries(cond.strat)) {
      const v = state[tag];
      if (v == null || !allowed.includes(v)) return false;
    }
  }
  if (cond.stratKey?.length) {
    if (!ctx.stratKey || !cond.stratKey.includes(ctx.stratKey)) return false;
  }
  return true;
}

export interface ArenaDiagramData {
  arena: ArenaShape;
  bgColor?: string; // default: '#3a2f25' (dark brown)
  elements: ArenaElement[];
  highlight?: string[]; // element IDs to spotlight
  scale?: number; // scales all element sizes (default 1)
  /** Group definitions referenced by `ArenaElement.groupId`. */
  groups?: GroupDef[];
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
  DPS: '#ef4444', // red - generic DPS
  SUP: '#14b8a6', // teal - generic Support (tank/healer)
  G1: '#a78bfa', // violet - group 1
  G2: '#f59e0b', // amber - group 2
  ANY: '#6e7073', // light gray - any player
  TANK: '#3b82f6', // blue - any tank
  HEALER: '#22c55e', // green - any healer
  MELEE: '#ef4444', // red - any melee DPS
  RANGED: '#f97316', // orange - any ranged DPS
  HTM: '#06b6d4', // cyan - Healer/Tank/Melee
  TMR: '#d946ef', // fuchsia - Tank/Melee/Ranged
  X: '#6b7280', // grey - context marker, never matches a role
  G1SUP: '#14b8a6', // G1 supports (MT + H1) - violet (G1 color)
  G1DPS: '#ef4444', // G1 DPS (M1 + R1) - violet (G1 color)
  G2SUP: '#14b8a6', // G2 supports (OT + H2) - amber (G2 color)
  G2DPS: '#ef4444' // G2 DPS (M2 + R2) - amber (G2 color)
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

export function player(
  job: PlayerJob,
  x: number,
  y: number,
  opts?:
    | string
    | {
        id?: string;
        marker?: 'red' | 'green';
        size?: number;
        corners?: Partial<Record<PlayerCorner, string>>;
        statusAbove?: string;
        groupId?: string;
      }
): PlayerElement {
  if (typeof opts === 'string') return { type: 'player', job, x, y, id: opts };
  return { type: 'player', job, x, y, ...opts };
}

export function boss(
  x: number,
  y: number,
  rotationOrOpts?:
    | number
    | {
        rotation?: number;
        size?: number;
        ring?: 'directional' | 'circle';
        id?: string;
        groupId?: string;
      },
  id?: string
): BossElement {
  if (typeof rotationOrOpts === 'object' && rotationOrOpts !== null) {
    return { type: 'boss', x, y, ...rotationOrOpts };
  }
  return { type: 'boss', x, y, rotation: rotationOrOpts, id };
}

export function waymark(
  mark: WaymarkName,
  x: number,
  y: number,
  opts?: string | { size?: number; id?: string; groupId?: string }
): WaymarkElement {
  if (typeof opts === 'string') return { type: 'waymark', mark, x, y, id: opts };
  return { type: 'waymark', mark, x, y, ...opts };
}

export function aoeCircle(
  x: number,
  y: number,
  r: number,
  opts?: {
    ry?: number;
    rotation?: number;
    color?: string;
    opacity?: number;
    id?: string;
    groupId?: string;
  }
): AoECircleElement {
  return { type: 'aoe', shape: 'circle', x, y, r, ...opts };
}

export function aoeRect(
  x: number,
  y: number,
  w: number,
  h: number,
  opts?: {
    rotation?: number;
    color?: string;
    opacity?: number;
    id?: string;
    groupId?: string;
  }
): AoERectElement {
  return { type: 'aoe', shape: 'rect', x, y, w, h, ...opts };
}

export function tether(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  opts?: { color?: string; width?: number; dashed?: boolean; id?: string; groupId?: string }
): TetherElement {
  return { type: 'tether', x1, y1, x2, y2, ...opts };
}

export function arrow(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  opts?: {
    color?: string;
    width?: number;
    heads?: ArrowHeads;
    id?: string;
    groupId?: string;
  }
): ArrowElement {
  return { type: 'arrow', x1, y1, x2, y2, ...opts };
}

export function text(
  label: string,
  x: number,
  y: number,
  opts?: {
    color?: string;
    fontSize?: number;
    anchor?: 'start' | 'middle' | 'end';
    id?: string;
    groupId?: string;
  }
): TextElement {
  return { type: 'text', text: label, x, y, ...opts };
}

export function debuff(
  debuffId: string,
  x: number,
  y: number,
  opts?: { size?: number; id?: string; groupId?: string }
): DebuffElement {
  return { type: 'debuff', debuffId, x, y, ...opts };
}

export function polygon(
  points: [number, number][],
  opts?: {
    color?: string;
    opacity?: number;
    rotation?: number;
    outline?: boolean;
    id?: string;
    groupId?: string;
  }
): PolygonElement {
  return { type: 'polygon', points, ...opts };
}

export function curvedArrow(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  opts?: {
    curvature?: number;
    color?: string;
    width?: number;
    heads?: ArrowHeads;
    id?: string;
    groupId?: string;
  }
): CurvedArrowElement {
  return { type: 'curvedArrow', x1, y1, x2, y2, ...opts };
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
    bgImage?: string;
    id?: string;
    groupId?: string;
  }
): ArenaShapeElement {
  return { type: 'arena', shape, x, y, w, h, ...opts };
}

export function diagram(
  arena: ArenaShape,
  elements: ArenaElement[],
  opts?: { bgColor?: string; highlight?: string[]; scale?: number; groups?: GroupDef[] }
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
