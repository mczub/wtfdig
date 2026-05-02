/**
 * Tier 2: Pure-function unit tests for the data-resolution layer.
 *
 * These functions are small but their fallback semantics have been the source
 * of multiple recent regressions (e.g. `resolveStratItem` returning the whole
 * record object when a toggle variant resolved to an empty string). Lock the
 * contract here so future refactors of the resolver pipeline can be diffed
 * against a known table.
 */

import { describe, expect, test } from 'vitest';
import {
  formatRoleAbbreviation,
  resolveMechs,
  resolveStratItem
} from '../../src/lib/utils';

describe('resolveStratItem', () => {
  const empty: Record<string, string | null> = {};

  test('returns undefined when item is undefined', () => {
    expect(resolveStratItem(undefined, 'p1', empty)).toBeUndefined();
  });

  test('returns null when item is null', () => {
    expect(resolveStratItem(null as unknown as undefined, 'p1', empty)).toBeNull();
  });

  test('returns empty string when item is empty string', () => {
    // `!item` short-circuit returns the empty string itself — that's correct
    // because `''` is a valid resolved value for image-only strats.
    expect(resolveStratItem('', 'p1', empty)).toBe('');
  });

  test('returns primitive item unchanged when it is a string', () => {
    expect(resolveStratItem('hello', 'p1', { p1: 'foo' })).toBe('hello');
  });

  test('returns array unchanged (arrays are not toggle records)', () => {
    const arr = ['a', 'b'];
    expect(resolveStratItem(arr, 'p1', { p1: 'foo' })).toEqual(arr);
  });

  test('record + matching state key + non-empty value → returns value', () => {
    const item = { dn: 'go north', em: 'go east' };
    expect(resolveStratItem(item, 'idyllic', { idyllic: 'em' })).toBe('go east');
  });

  test('record + matching state key + EMPTY string value → returns empty string', () => {
    // Regression: m12s Idyllic Dream Overview has `description: { dn: '', em: '...' }`.
    // The previous `(stateKey && record[stateKey]) || record` form returned the
    // whole record object for empty-string variants, which then crashed
    // `renderDebuffTokens('').replace(...)` because input was an object.
    const item = { dn: '', em: 'east-mid notes' };
    expect(resolveStratItem(item, 'idyllic', { idyllic: 'dn' })).toBe('');
  });

  test('record + state key NOT in record → returns whole item (multi-link fallback)', () => {
    // Used by phase.url which can be a multi-link Record like
    // `{ raidplan: '...', codcar: '...' }` — the toggle resolver should not
    // claim ownership of those keys.
    const item = { raidplan: 'http://r.io', codcar: 'http://c.io' };
    expect(resolveStratItem(item, 'idyllic', { idyllic: 'em' })).toEqual(item);
  });

  test('record + missing tag → returns whole item', () => {
    const item = { dn: 'a', em: 'b' };
    expect(resolveStratItem(item, undefined, empty)).toEqual(item);
  });

  test('record + tag set but state has no entry → returns whole item', () => {
    const item = { dn: 'a', em: 'b' };
    expect(resolveStratItem(item, 'idyllic', empty)).toEqual(item);
  });

  test('record + tag set but state value is null → returns whole item', () => {
    // `stratState[tag]` of `null` is the explicit "no toggle picked" signal.
    const item = { dn: 'a', em: 'b' };
    expect(resolveStratItem(item, 'idyllic', { idyllic: null })).toEqual(item);
  });

  test('record + tag set but state value is empty string → returns whole item', () => {
    const item = { dn: 'a', em: 'b' };
    expect(resolveStratItem(item, 'idyllic', { idyllic: '' })).toEqual(item);
  });
});

describe('resolveMechs', () => {
  const empty: Record<string, string | null> = {};

  test('returns undefined when mechs is undefined', () => {
    expect(resolveMechs(undefined, 'p1', empty)).toBeUndefined();
  });

  test('returns array unchanged (no toggle resolution needed)', () => {
    const mechs = [{ mechanic: 'A' }, { mechanic: 'B' }];
    expect(resolveMechs(mechs, 'p1', { p1: 'whatever' })).toEqual(mechs);
  });

  test('record + matching state key → returns matching variant', () => {
    const variantA = [{ mechanic: 'AA' }];
    const variantB = [{ mechanic: 'BB' }];
    const mechs = { a: variantA, b: variantB };
    expect(resolveMechs(mechs, 'p1', { p1: 'b' })).toEqual(variantB);
  });

  test('record + state key NOT in record → falls back to first variant', () => {
    // Different from `resolveStratItem`: for mechs we always need *some* array
    // to render, so we return the first variant rather than the raw record.
    const variantA = [{ mechanic: 'AA' }];
    const variantB = [{ mechanic: 'BB' }];
    const mechs = { a: variantA, b: variantB };
    expect(resolveMechs(mechs, 'p1', { p1: 'nonexistent' })).toEqual(variantA);
  });

  test('record + missing tag → returns first variant', () => {
    const variantA = [{ mechanic: 'AA' }];
    const variantB = [{ mechanic: 'BB' }];
    const mechs = { a: variantA, b: variantB };
    expect(resolveMechs(mechs, undefined, empty)).toEqual(variantA);
  });

  test('record + state has no entry for tag → returns first variant', () => {
    const variantA = [{ mechanic: 'AA' }];
    const variantB = [{ mechanic: 'BB' }];
    const mechs = { a: variantA, b: variantB };
    expect(resolveMechs(mechs, 'p1', empty)).toEqual(variantA);
  });
});

describe('formatRoleAbbreviation', () => {
  describe('English mode (default)', () => {
    test.each([
      ['Tank', 1, 'MT'],
      ['Tank', 2, 'OT'],
      ['Healer', 1, 'H1'],
      ['Healer', 2, 'H2'],
      ['Melee', 1, 'M1'],
      ['Melee', 2, 'M2'],
      ['Ranged', 1, 'R1'],
      ['Ranged', 2, 'R2']
    ] as const)('%s %d → %s', (role, party, expected) => {
      expect(formatRoleAbbreviation(role, party)).toBe(expected);
    });
  });

  describe('JP mode', () => {
    test.each([
      ['Tank', 1, 'MT'],
      ['Tank', 2, 'ST'],
      ['Healer', 1, 'H1'],
      ['Healer', 2, 'H2'],
      ['Melee', 1, 'D1'],
      ['Melee', 2, 'D2'],
      ['Ranged', 1, 'D3'],
      ['Ranged', 2, 'D4']
    ] as const)('%s %d → %s (JP)', (role, party, expected) => {
      expect(formatRoleAbbreviation(role, party, true)).toBe(expected);
    });
  });

  test('returns empty string when role is missing', () => {
    expect(formatRoleAbbreviation(undefined, 1)).toBe('');
  });

  test('returns empty string when party is missing', () => {
    expect(formatRoleAbbreviation('Tank', undefined)).toBe('');
  });

  test('returns empty string when both are missing', () => {
    expect(formatRoleAbbreviation()).toBe('');
  });
});
