/**
 * Tier 2: `renderDebuffTokens` is the consumer that crashed on m12s when its
 * upstream resolver returned a record object instead of a string. Defensive
 * tests here ensure it: handles falsy inputs gracefully, leaves authored
 * HTML intact, and substitutes known debuff tokens predictably.
 */

import { describe, expect, test } from 'vitest';
import { debuffIconUrl, getDebuff, renderDebuffTokens } from '../../src/lib/debuffs';

describe('renderDebuffTokens', () => {
  test('returns empty string for empty input', () => {
    expect(renderDebuffTokens('')).toBe('');
  });

  test('returns empty string for null/undefined', () => {
    expect(renderDebuffTokens(null as unknown as string)).toBe('');
    expect(renderDebuffTokens(undefined as unknown as string)).toBe('');
  });

  test('passes plain text through unchanged', () => {
    const text = 'Stand North, run South after first cast.';
    expect(renderDebuffTokens(text)).toBe(text);
  });

  test('preserves authored HTML (descriptions are trusted static data)', () => {
    const text = 'Use <strong>Reprisal</strong> here.';
    expect(renderDebuffTokens(text)).toBe(text);
  });

  test('replaces known debuff token with an <img>', () => {
    const out = renderDebuffTokens('Look for {{light-beacon}}');
    expect(out).toContain('<img');
    expect(out).toContain('class="debuff-icon"');
    expect(out).toContain('alt="Light Beacon"');
    expect(out).not.toContain('{{light-beacon}}');
  });

  test('leaves unknown debuff tokens as-is', () => {
    const text = 'See {{not-a-real-debuff}} here.';
    expect(renderDebuffTokens(text)).toBe(text);
  });

  test('replaces multiple occurrences in one string', () => {
    const out = renderDebuffTokens('{{defamation}} and {{aggravated-assault}}');
    const imgCount = (out.match(/<img/g) || []).length;
    expect(imgCount).toBe(2);
  });
});

describe('getDebuff', () => {
  test('returns the entry for a known id', () => {
    expect(getDebuff('light-beacon')?.name).toBe('Light Beacon');
  });

  test('returns undefined for an unknown id', () => {
    expect(getDebuff('not-a-real-debuff')).toBeUndefined();
  });
});

describe('debuffIconUrl', () => {
  test('returns the static path for a known id', () => {
    const url = debuffIconUrl('light-beacon');
    expect(url).toMatch(/^\/icons\/status\/.+\.png$/);
  });

  test('returns undefined for an unknown id', () => {
    expect(debuffIconUrl('not-a-real-debuff')).toBeUndefined();
  });
});
