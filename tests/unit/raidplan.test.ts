import { describe, expect, test, vi } from 'vitest';

vi.mock('$lib/raidplan/abilities.generated', () => ({
  ABILITY_TEMPLATES: {
    'ff-test': '<circle id="%P%RaidPlan_01_1" fill="%A%"/><path fill="%B%"/>'
  }
}));

import { emojiCodepoints, markerAssetPath } from '$lib/raidplan/assets';
import { isRaidplanImage, parseRaidplanImage, raidplanImage } from '$lib/raidplan/image';
import {
  abilityMarkup,
  nodesForStep,
  normalizeNode,
  placement,
  polygonPoints,
  smoothPath,
  styledLines,
  withAlpha
} from '$lib/raidplan/render';
import type { RaidplanNode } from '$lib/raidplan/types';

const node = (type: string, attr = {}, meta = {}): RaidplanNode => ({ type, attr, meta });

describe('placement', () => {
  test('center origin puts the object center at pos', () => {
    const p = placement({ pos: { x: 100, y: 50 }, scale: { x: 2, y: 2 }, angle: 90 }, 64, 64);
    expect([p.cx, p.cy]).toEqual([100, 50]);
    expect(p.transform).toBe('translate(100 50) rotate(90) scale(2 2)');
  });

  test('left/top origin offsets the center by half the scaled box, rotated', () => {
    const p = placement(
      { pos: { x: 0, y: 0 }, origin: { x: 'left', y: 'top' }, angle: 90 },
      100,
      40
    );
    // Unrotated center would be (50, 20); rotating 90deg clockwise maps it to (-20, 50)
    expect(p.cx).toBeCloseTo(-20);
    expect(p.cy).toBeCloseTo(50);
  });

  test('flip folds into scale', () => {
    const p = placement({ pos: { x: 0, y: 0 }, flip: { x: true, y: false } }, 10, 10);
    expect(p.transform).toBe('translate(0 0) scale(-1 1)');
  });
});

describe('raidplan image references', () => {
  test('round-trip, with the one-based step stored zero-based', () => {
    const src = raidplanImage('c2L5iJfuYIWXk1v7', 6);
    expect(src).toBe('raidplan:c2L5iJfuYIWXk1v7#6');
    expect(parseRaidplanImage(src)).toEqual({ code: 'c2L5iJfuYIWXk1v7', step: 5 });
  });

  test('ordinary image paths are not references', () => {
    expect(isRaidplanImage('./m9s/toxic-vamp-1.webp')).toBe(false);
    expect(isRaidplanImage(undefined)).toBe(false);
    expect(isRaidplanImage('raidplan:missing-step')).toBe(false);
  });
});

describe('nodesForStep', () => {
  test('picks the step arena, keeps z-order, honors all/hidden', () => {
    const plan = {
      code: 'x',
      name: 'x',
      steps: 2,
      nodes: [
        node('marker', { text: 'a' }, { step: 0 }),
        node('arena', {}, { step: 1 }),
        node('marker', { text: 'b' }, { step: 1 }),
        node('marker', { text: 'c' }, { step: 0, all: 1 }),
        node('marker', { text: 'd' }, { step: 1, hidden: 1 })
      ]
    };
    const v = nodesForStep(plan, 1);
    expect(v.arena).toBe(plan.nodes[1]);
    expect(v.nodes.map((n) => n.attr.text)).toEqual(['b', 'c']);
  });
});

describe('normalizeNode', () => {
  test('legacy text bakes scale into font size', () => {
    const n = normalizeNode(
      node('itext', { text: 'hi' }, { scale: { x: 0.5, y: 0.5 }, size: { w: 200, h: 46 } })
    );
    expect(n.attr.fontSize).toBe(20);
    expect(n.meta.scale).toEqual({ x: 1, y: 1 });
    expect(n.meta.size).toEqual({ w: 100, h: 23 });
  });

  test('legacy shapes fold opacity into colors', () => {
    const n = normalizeNode(node('rect', { fill: '#ff0000', opacity: 0.5, labelBackground: null }));
    expect(n.attr.fill).toBe('#ff000080');
    expect(n.attr.strokePosition).toBe('inside');
  });

  test('current nodes pass through untouched', () => {
    const n = node('rect', { fill: '#fff', strokePosition: 'inside', labelBackground: null });
    expect(normalizeNode(n)).toBe(n);
  });
});

describe('helpers', () => {
  test('withAlpha', () => {
    expect(withAlpha('#abc', 1)).toBe('#aabbcc');
    expect(withAlpha('#d0021bbf', 1)).toBe('#d0021bbf');
    expect(withAlpha('rgba(255,0,0,0.5)', 0.5)).toBe('#ff000040');
  });

  test('triangle fills its box', () => {
    expect(polygonPoints(undefined, 64, 64)).toBe('0,-32 32,32 -32,32');
  });

  test('smoothPath unpacks x10 points and centers on the curve', () => {
    const sp = smoothPath([0, 0, 100, 0, 200, 0]);
    expect(sp.d).toBe('M0,0 Q0,0 5,0 Q10,0 15,0 L20,0');
    expect(sp.cx).toBe(10);
    expect(sp.cy).toBe(0);
  });

  test('styledLines skips newlines when indexing styles', () => {
    const lines = styledLines('ab\ncd', [{ start: 1, end: 3, style: { fill: 'red' } }]);
    expect(lines).toEqual([
      [{ text: 'a' }, { text: 'b', style: { fill: 'red' } }],
      [{ text: 'c', style: { fill: 'red' } }, { text: 'd' }]
    ]);
  });

  test('abilityMarkup fills colors and id prefix', () => {
    expect(abilityMarkup('ff-test', '#111', '#222', 'n1-')).toBe(
      '<circle id="n1-RaidPlan_01_1" fill="#111"/><path fill="#222"/>'
    );
    expect(abilityMarkup('ff-missing', '#111', '#222', 'n1-')).toBeNull();
  });

  test('asset paths', () => {
    expect(markerAssetPath('gamedata/ffxiv/icon_hd/215903.png')).toBe(
      'ffxiv/legacy/icon_hd/215903.png'
    );
    expect(emojiCodepoints('⚽')).toBe('26bd');
    expect(emojiCodepoints('❤️')).toBe('2764');
  });
});
