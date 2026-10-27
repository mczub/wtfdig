// Geometry and layout helpers for RaidplanBoard. Raidplan draws plans with
// Fabric.js on a 1200x675 canvas; these reproduce the Fabric behaviour the
// plans rely on (object transforms, text metrics, shape outlines) as SVG.

import { ABILITY_TEMPLATES } from './abilities.generated';
import type { RaidplanAttr, RaidplanMeta, RaidplanNode, RaidplanPlan } from './types';

export const CANVAS_W = 1200;
export const CANVAS_H = 675;

const FONT_FAMILIES: Record<string, string> = {
  DEFAULT: 'Roboto, Arial, sans-serif',
  MONO: '"Roboto Mono", "Courier New", monospace',
  WRITTEN: '"Playpen Sans", "Comic Sans MS", cursive'
};

export function fontFamily(font?: string): string {
  if (font === 'MONO') return FONT_FAMILIES.MONO;
  if (font === 'WRITTEN' || font === 'COMIC') return FONT_FAMILIES.WRITTEN;
  return FONT_FAMILIES.DEFAULT;
}

// Fabric text metrics: line box = fontSize * lineHeight * fontSizeMult, and the
// baseline sits fontSizeFraction of the em above the bottom of the line.
const LINE_HEIGHT = 1.16;
const FONT_SIZE_MULT = 1.13;
const FONT_SIZE_FRACTION = 0.222;

export function lineAdvance(fontSize: number) {
  return fontSize * LINE_HEIGHT * FONT_SIZE_MULT;
}

/** Height Fabric gives a block of `lines` lines (the last line has no extra leading). */
export function textBlockHeight(fontSize: number, lines: number) {
  return (lines - 1) * lineAdvance(fontSize) + fontSize * FONT_SIZE_MULT;
}

/** Offset from the top of a text block to the baseline of its first line. */
export function firstBaseline(fontSize: number) {
  return fontSize * FONT_SIZE_MULT * (1 - FONT_SIZE_FRACTION);
}

/** Nodes visible on a step, arena first, in the plan's z-order. */
export function nodesForStep(plan: RaidplanPlan, step: number) {
  let arena: RaidplanNode | undefined;
  const nodes: RaidplanNode[] = [];
  for (const node of plan.nodes) {
    const m = node.meta;
    if (m.hidden === 1) continue;
    if (m.all !== 1 && (m.step ?? 0) !== step) continue;
    if (node.type === 'arena') arena ??= node;
    else nodes.push(normalizeNode(node));
  }
  return { arena, nodes };
}

const clampFont = (n: number) => Math.min(128, Math.max(8, Math.round(n)));

/**
 * Raidplan migrates older saved nodes when it loads them (see its createObject).
 * The ones that change how a node looks are reproduced here.
 */
export function normalizeNode(node: RaidplanNode): RaidplanNode {
  const a = node.attr;
  const m = node.meta;
  const sx = m.scale?.x ?? 1;

  if (node.type === 'itext' && a.autoWidth === undefined) {
    // Older text kept a 40px font and scaled the object; newer text bakes the
    // scale into fontSize and keeps scale at 1 unless it's out of range.
    const base = Number(a.fontSize) || 40;
    const scaled = base * sx;
    const fontSize = clampFont(scaled);
    const scale = scaled > 128 || scaled < 8 ? scaled / fontSize : 1;
    const ratio = fontSize / base;
    return {
      ...node,
      attr: { ...a, fontSize, autoWidth: true, autoHeight: true },
      meta: {
        ...m,
        scale: { x: scale, y: scale },
        size: m.size && { w: m.size.w * ratio, h: m.size.h * ratio }
      }
    };
  }

  if (['rect', 'circle', 'triangle', 'arrow', 'marker'].includes(node.type)) {
    let attr = a;
    if (node.type !== 'marker' && attr.strokePosition === undefined) {
      // Older shapes had a separate opacity; it's folded into the colors.
      const opacity = Number(attr.opacity) || 0.75;
      const hasStroke = !!attr.stroke && attr.stroke !== 'transparent';
      attr = {
        ...attr,
        fill: withAlpha(attr.fill ?? undefined, opacity),
        stroke: hasStroke ? withAlpha(attr.stroke!, opacity) : attr.stroke,
        strokePosition: hasStroke ? 'center' : 'inside'
      };
    } else if (attr.strokePosition === 'outside') {
      attr = { ...attr, strokePosition: 'inside' };
    }
    if (attr.labelBackground === undefined) {
      // Labels used to scale with the object; now they're drawn at a fixed size.
      const base =
        Number.parseInt(String(attr.fontSize ?? ''), 10) || (node.type === 'marker' ? 14 : 32);
      attr = { ...attr, labelBackground: null, fontSize: Math.max(1, Math.round(base * sx)) };
    }
    return attr === a ? node : { ...node, attr };
  }

  return node;
}

/** Multiply a color's alpha, returning #rrggbb or #rrggbbaa. */
export function withAlpha(color: string | undefined, alpha: number): string | undefined {
  if (!color) return color;
  const hex = (n: number) =>
    Math.round(Math.min(255, Math.max(0, n)))
      .toString(16)
      .padStart(2, '0');
  let m = color.trim().match(/^#([0-9a-f]{3})$/i);
  let rgb: string;
  let a = 1;
  if (m) {
    rgb = '#' + m[1].replace(/./g, (c) => c + c);
  } else if ((m = color.trim().match(/^#([0-9a-f]{6})([0-9a-f]{2})?$/i))) {
    rgb = '#' + m[1];
    a = m[2] ? parseInt(m[2], 16) / 255 : 1;
  } else if ((m = color.trim().match(/^rgba?\(([^)]+)\)$/i))) {
    const [r, g, b, al] = m[1].split(',').map((s) => parseFloat(s));
    rgb = `#${hex(r)}${hex(g)}${hex(b)}`;
    a = al ?? 1;
  } else {
    return color;
  }
  const out = a * alpha;
  return out >= 1 ? rgb : rgb + hex(out * 255);
}

/** Fabric originX/originY as a 0..1 fraction of the object's box. */
function originFraction(o: string | undefined) {
  if (o === 'left' || o === 'top') return 0;
  if (o === 'right' || o === 'bottom') return 1;
  const n = Number(o);
  return Number.isFinite(n) ? n : 0.5;
}

export interface Placement {
  /** Center of the object on the canvas. */
  cx: number;
  cy: number;
  sx: number;
  sy: number;
  angle: number;
  /** SVG transform that maps the object's local, centered coordinates onto the canvas. */
  transform: string;
}

/**
 * Where an object sits. `w`/`h` is the unscaled box; `strokeScaled` and
 * `strokeFixed` are the stroke widths Fabric adds to the box when it resolves
 * a non-center origin (scaled with the object, or not).
 */
export function placement(
  meta: RaidplanMeta,
  w: number,
  h: number,
  strokeScaled = 0,
  strokeFixed = 0
): Placement {
  const sx = meta.scale?.x ?? 1;
  const sy = meta.scale?.y ?? 1;
  const angle = meta.angle ?? 0;
  const ox = 0.5 - originFraction(meta.origin?.x);
  const oy = 0.5 - originFraction(meta.origin?.y);
  const dx = ox * ((w + strokeScaled) * Math.abs(sx) + strokeFixed);
  const dy = oy * ((h + strokeScaled) * Math.abs(sy) + strokeFixed);
  const rad = (angle * Math.PI) / 180;
  const px = meta.pos?.x ?? CANVAS_W / 2;
  const py = meta.pos?.y ?? CANVAS_H / 2;
  const cx = px + dx * Math.cos(rad) - dy * Math.sin(rad);
  const cy = py + dx * Math.sin(rad) + dy * Math.cos(rad);
  const fx = meta.flip?.x === true || meta.flip?.x === 1 ? -1 : 1;
  const fy = meta.flip?.y === true || meta.flip?.y === 1 ? -1 : 1;
  const parts = [`translate(${r2(cx)} ${r2(cy)})`];
  if (angle) parts.push(`rotate(${r2(angle)})`);
  if (sx * fx !== 1 || sy * fy !== 1) parts.push(`scale(${r4(sx * fx)} ${r4(sy * fy)})`);
  if (meta.skew?.x) parts.push(`skewX(${meta.skew.x})`);
  if (meta.skew?.y) parts.push(`skewY(${meta.skew.y})`);
  return { cx, cy, sx, sy, angle, transform: parts.join(' ') };
}

const r2 = (n: number) => Math.round(n * 100) / 100;
const r4 = (n: number) => Math.round(n * 10000) / 10000;

/** Raidplan's arrow: a 32x64 polygon whose head keeps its proportions under non-uniform scale. */
export function arrowPoints(sx: number, sy: number): string {
  const t = Math.min((24 / sy) * sx, 32);
  const pts = [
    [16, 0],
    [32, t],
    [19.5, t],
    [19.5, 64],
    [12.5, 64],
    [12.5, t],
    [0, t]
  ];
  return pts.map(([x, y]) => `${r2(x - 16)},${r2(y - 32)}`).join(' ');
}

/** Regular polygon (raidplan's triangle is sides=3) stretched to fill a w x h box. */
export function polygonPoints(sides: number | undefined, w: number, h: number): string {
  const n = Math.max(3, Math.min(16, Math.round(Number(sides) || 3)));
  const raw = Array.from({ length: n }, (_, i) => {
    const t = -Math.PI / 2 + (2 * i * Math.PI) / n;
    return [Math.cos(t), Math.sin(t)];
  });
  const xs = raw.map((p) => p[0]);
  const ys = raw.map((p) => p[1]);
  const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
  return raw
    .map(
      ([x, y]) =>
        `${r2(((x - x0) / (x1 - x0 || 1)) * w - w / 2)},${r2(((y - y0) / (y1 - y0 || 1)) * h - h / 2)}`
    )
    .join(' ');
}

/** Circle, donut, or arc segment; arcStart is degrees clockwise from 12 o'clock, arcSweep a percentage. */
export function circlePath(r: number, attr: RaidplanAttr): string {
  const inner = Math.min(attr.innerRadius || 0, r);
  const sweepPct = attr.arcSweep ?? 100;
  const full = Math.abs(sweepPct) >= 100;
  const ring = (rad: number, ccw: boolean) =>
    `M${rad},0 A${rad},${rad} 0 1 ${ccw ? 0 : 1} ${-rad},0 A${rad},${rad} 0 1 ${ccw ? 0 : 1} ${rad},0Z`;
  if (full) return inner > 0 ? ring(r, false) + ring(inner, true) : ring(r, false);

  const clampedPct =
    Math.abs(Math.max(-100, Math.min(100, sweepPct))) >= 5
      ? Math.max(-100, Math.min(100, sweepPct))
      : sweepPct < 0
        ? -5
        : 5;
  const start = ((attr.arcStart || 0) * Math.PI) / 180 - Math.PI / 2;
  const end = start + (clampedPct / 100) * 2 * Math.PI;
  const cw = end > start;
  const large = Math.abs(end - start) > Math.PI ? 1 : 0;
  const pt = (rad: number, a: number) => `${r2(rad * Math.cos(a))},${r2(rad * Math.sin(a))}`;
  if (inner <= 0) {
    return `M0,0 L${pt(r, start)} A${r},${r} 0 ${large} ${cw ? 1 : 0} ${pt(r, end)}Z`;
  }
  return (
    `M${pt(r, start)} A${r},${r} 0 ${large} ${cw ? 1 : 0} ${pt(r, end)}` +
    ` L${pt(inner, end)} A${inner},${inner} 0 ${large} ${cw ? 0 : 1} ${pt(inner, start)}Z`
  );
}

/**
 * Freehand paths are stored as points x10. Fabric's pencil brush smooths them
 * with quadratic curves through the midpoints, and the object is centered on
 * the resulting curve's bounding box.
 */
export function smoothPath(packed: number[]): { d: string; cx: number; cy: number } {
  const pts: [number, number][] = [];
  for (let i = 0; i + 1 < packed.length; i += 2) pts.push([packed[i] / 10, packed[i + 1] / 10]);
  if (pts.length < 2) return { d: '', cx: 0, cy: 0 };

  const segs: string[] = [`M${r2(pts[0][0])},${r2(pts[0][1])}`];
  let minX = pts[0][0];
  let maxX = minX;
  let minY = pts[0][1];
  let maxY = minY;
  const grow = (x: number, y: number) => {
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  };
  let from = pts[0];
  let [p1, p2] = [pts[0], pts[1]];
  for (let i = 1; i < pts.length; i++) {
    if (p1[0] !== p2[0] || p1[1] !== p2[1]) {
      const mid: [number, number] = [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2];
      segs.push(`Q${r2(p1[0])},${r2(p1[1])} ${r2(mid[0])},${r2(mid[1])}`);
      for (let t = 0.25; t <= 1; t += 0.25) {
        const u = 1 - t;
        grow(
          u * u * from[0] + 2 * u * t * p1[0] + t * t * mid[0],
          u * u * from[1] + 2 * u * t * p1[1] + t * t * mid[1]
        );
      }
      from = mid;
    }
    p1 = pts[i];
    if (i + 1 < pts.length) p2 = pts[i + 1];
  }
  segs.push(`L${r2(p1[0])},${r2(p1[1])}`);
  grow(p1[0], p1[1]);
  return { d: segs.join(' '), cx: (minX + maxX) / 2, cy: (minY + maxY) / 2 };
}

/** Ability SVG body recolored for one node; `prefix` keeps gradient ids unique. */
export function abilityMarkup(abilityId: string, colorA: string, colorB: string, prefix: string) {
  const template = ABILITY_TEMPLATES[abilityId];
  if (!template) return null;
  return template.replaceAll('%A%', colorA).replaceAll('%B%', colorB).replaceAll('%P%', prefix);
}

export interface TextRun {
  text: string;
  style?: Record<string, string>;
}

/**
 * Split text into lines of styled runs. Style ranges index characters with the
 * newlines left out, as Fabric's stylesFromArray does.
 */
export function styledLines(text: string, styles: RaidplanAttr['styles']): TextRun[][] {
  let charIndex = -1;
  return text.split('\n').map((line) => {
    const runs: TextRun[] = [];
    for (const ch of Array.from(line)) {
      charIndex++;
      const style = styles?.find((s) => s.start <= charIndex && charIndex < s.end)?.style;
      const last = runs[runs.length - 1];
      if (last && last.style === style) last.text += ch;
      else runs.push({ text: ch, style });
    }
    return runs;
  });
}
