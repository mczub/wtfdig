// Shapes of raidplan.io plan documents (format version 2), as served from
// https://userdata.raidplan.io/<code>.json. Only the fields the renderer reads
// are typed; raidplan stores plenty more.

export interface RaidplanMeta {
  step?: number;
  pos?: { x: number; y: number };
  size?: { w: number; h: number };
  scale?: { x: number; y: number };
  skew?: { x: number; y: number };
  flip?: { x: boolean | number; y: boolean | number };
  origin?: { x: string; y: string };
  angle?: number;
  /** 1 = visible on every step */
  all?: number;
  /** 1 = hidden in the editor and in the viewer */
  hidden?: number;
}

export interface RaidplanAttr {
  // shapes, labels, text
  text?: string;
  fill?: string | null;
  stroke?: string | null;
  strokeWidth?: number | null;
  strokePosition?: 'inside' | 'center' | 'outside';
  strokeStyle?: 'line' | 'dash' | 'dot';
  opacity?: number;
  font?: string;
  fontSize?: number | string;
  fontWeight?: string;
  fontStyle?: string;
  underline?: boolean;
  linethrough?: boolean;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  verticalAlign?: string;
  backgroundColor?: string | null;
  autoWidth?: boolean;
  autoHeight?: boolean;
  styles?: { start: number; end: number; style: Record<string, string> }[];
  color?: string;
  labelBackground?: string | null;
  labelPosition?: 'center' | 'top' | 'bottom' | 'left' | 'right';
  labelGap?: number;
  labelStroke?: string | null;
  labelStrokeWidth?: number;
  sides?: number;
  innerRadius?: number;
  arcStart?: number;
  arcSweep?: number;
  // marker
  asset?: string;
  border?: string | null;
  styleBorder?: string | null;
  bgColor?: string | null;
  // waypoint
  wayId?: string;
  hideBg?: boolean;
  // ability
  abilityId?: string;
  colorA?: string;
  colorB?: string;
  // emoji
  emoji?: string;
  // path
  points?: number[];
  strokeLineCap?: 'butt' | 'round' | 'square';
  strokeLineJoin?: 'miter' | 'round' | 'bevel';
  strokeMiterLimit?: number;
  // arena
  shape?: 'image' | 'circle' | 'square';
  map?: string;
  raid?: string;
  boss?: string;
  imageUrl?: string;
  imageAlign?: string;
  arenaWidth?: number;
  arenaHeight?: number;
  gridColor?: string;
  gridX?: number;
  gridY?: number;
  gridRadial?: number;
  gridSpoke?: number;
  gridRotation?: number;
  /** Added by the import script: vendored copy of the arena image, relative to static/raidplan/. */
  localImage?: string;
}

export interface RaidplanNode {
  type: string;
  attr: RaidplanAttr;
  meta: RaidplanMeta;
}

export interface RaidplanPlan {
  code: string;
  name: string;
  steps: number;
  nodes: RaidplanNode[];
}
