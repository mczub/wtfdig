// UMAD P4 "Kefka Says" helper logic.
//
// Core rule: a boss cast can be REAL or FAKE; a FAKE cast reverses the effect.
// A Neo Exdeath (Grand Cross) cast drives your mark + gaze for that set:
//   - mark: real = Lightning (SPREAD),  fake = Water (STACK)
//   - gaze: real = look AWAY,           fake = look AT
//   - accel bomb (on one set only): real = STILLNESS, fake = MOTION
// Neo Exdeath "Short/Long" = which set resolves 1st (short) vs 2nd (long); the two
// sets are mutually exclusive. Accel bomb sits on exactly one set.
// Chaos: Fire resolves 1st, Water 2nd (mutually exclusive across the two casts).
//   fire+real or water+fake = Spread (out), else Stay (in).
// Mana Charge/Release is a double negative: same tell twice = real, differing = fake.

import { debuffIconUrl } from '$lib/debuffs';

export type Val = string | null;
export type P4State = Record<string, Val>;

/** Inline status-icon <img> for use inside callout line HTML. */
function ic(id: string): string {
  const url = debuffIconUrl(id);
  return url
    ? `<img src="${url}" alt="" class="inline-block h-5 w-auto mr-1 align-text-bottom" />`
    : '';
}

// Keyword -> color (literal classes so Tailwind's scanner keeps them).
const KW_COLOR: Record<string, string> = {
  LIGHTNING: 'text-yellow-400',
  WATER: 'text-blue-400',
  SPREAD: 'text-orange-400',
  STAY: 'text-emerald-400',
  MOTION: 'text-cyan-400',
  STILLNESS: 'text-rose-400',
  'LOOK AT': 'text-purple-400',
  'LOOK AWAY': 'text-purple-400'
};

/** Render a callout keyword as bold, colored, all-caps. */
function kw(word: string): string {
  return `<span class="font-semibold ${KW_COLOR[word] ?? ''}">${word}</span>`;
}

/** Which element spreads this set: real = Lightning, fake = Water (reversed). */
function spreadElem(cast: Val): { word: string; id: string } | null {
  if (cast !== 'real' && cast !== 'fake') return null;
  return cast === 'real'
    ? { word: 'LIGHTNING', id: 'forked-lightning' }
    : { word: 'WATER', id: 'compressed-water' };
}

export interface Line {
  text: string;
  tone?: 'real' | 'fake' | 'neutral' | 'dim';
}

export function bombEffect(cast: Val): string | null {
  if (cast !== 'real' && cast !== 'fake') return null;
  return cast === 'real' ? 'STILLNESS' : 'MOTION';
}
export function gazeEffect(cast: Val): string | null {
  if (cast !== 'real' && cast !== 'fake') return null;
  return cast === 'real' ? 'LOOK AWAY' : 'LOOK AT';
}
export function chaosEffect(type: Val, cast: Val): string | null {
  if ((type !== 'fire' && type !== 'water') || (cast !== 'real' && cast !== 'fake')) return null;
  const out = (type === 'fire' && cast === 'real') || (type === 'water' && cast === 'fake');
  return out ? 'SPREAD' : 'STAY';
}
export function combine(a: Val, b: Val): 'real' | 'fake' | null {
  if (!a || !b) return null;
  return a === b ? 'real' : 'fake';
}
export function rfLabel(v: Val): string {
  return v === 'real' ? 'REAL' : v === 'fake' ? 'FAKE' : '?';
}

// --- Input UI definitions ---

export interface InputOption {
  val: string;
  text: string;
  cls: string; // 'real' | 'fake' | 'fire' | 'water' | 'plain'
}
export interface InputRow {
  id: string;
  label: string;
  opts: InputOption[];
}
export interface InputSection {
  title: string;
  rows: InputRow[];
}

export const RF_OPTS: InputOption[] = [
  { val: 'real', text: 'Real', cls: 'real' },
  { val: 'fake', text: 'Fake', cls: 'fake' }
];
const TIMER: InputOption[] = [
  { val: 'short', text: 'Short', cls: 'short' },
  { val: 'long', text: 'Long', cls: 'long' }
];
const BOMB_NE1: InputOption[] = [
  { val: 'short', text: 'Short', cls: 'short' },
  { val: 'long', text: 'Long', cls: 'long' }
];
const BOMB_NE2: InputOption[] = [
  { val: 'short', text: 'Short', cls: 'short' },
  { val: 'long', text: 'Long', cls: 'long' },
  { val: 'none', text: 'None', cls: 'none' }
];
const ELEM: InputOption[] = [
  { val: 'fire', text: 'Fire', cls: 'fire' },
  { val: 'water', text: 'Water', cls: 'water' }
];

export const SETUP_SECTIONS: InputSection[] = [
  {
    title: 'Neo Exdeath #1',
    rows: [
      { id: 'ne1cast', label: 'Cast', opts: RF_OPTS },
      { id: 'ne1mark', label: 'Water/Lightning', opts: TIMER },
      { id: 'ne1bomb', label: 'Accel Bomb', opts: BOMB_NE1 }
    ]
  },
  {
    title: 'Chaos #1',
    rows: [
      { id: 'c1cast', label: 'Cast', opts: RF_OPTS },
      { id: 'c1type', label: 'Fire/Water', opts: ELEM }
    ]
  },
  {
    title: 'Neo Exdeath #2',
    rows: [
      { id: 'ne2cast', label: 'Cast', opts: RF_OPTS },
      { id: 'ne2mark', label: 'Water/Lightning', opts: TIMER },
      { id: 'ne2bomb', label: 'Accel Bomb', opts: BOMB_NE2 }
    ]
  },
  {
    title: 'Chaos #2',
    rows: [
      { id: 'c2cast', label: 'Cast', opts: RF_OPTS },
      { id: 'c2type', label: 'Fire/Water', opts: ELEM }
    ]
  }
];

/** Applies a toggle plus the mutual-exclusion / mirroring rules. */
export function applyInput(s: P4State, id: string, val: string): void {
  const next = s[id] === val ? null : val;
  s[id] = next;

  // NE mark short/long: the two sets are mutually exclusive (one short, one long).
  if (id === 'ne1mark' || id === 'ne2mark') {
    const other = id === 'ne1mark' ? 'ne2mark' : 'ne1mark';
    s[other] = next === 'short' ? 'long' : next === 'long' ? 'short' : null;
  }
  // Accel bomb lives on exactly one set: setting short/long forces the other to none.
  if (id === 'ne1bomb' || id === 'ne2bomb') {
    const other = id === 'ne1bomb' ? 'ne2bomb' : 'ne1bomb';
    if (next === 'short' || next === 'long') s[other] = 'none';
  }
  // Chaos element: fire 1st, water 2nd; setting one forces the other to the opposite.
  if (id === 'c1type' || id === 'c2type') {
    const other = id === 'c1type' ? 'c2type' : 'c1type';
    s[other] = next === 'fire' ? 'water' : next === 'water' ? 'fire' : null;
  }
}

// --- Resolution helpers ---

function nePos(s: P4State): { short: Val; long: Val } {
  const short = s.ne1mark === 'short' ? s.ne1cast : s.ne2mark === 'short' ? s.ne2cast : null;
  const long = s.ne1mark === 'long' ? s.ne1cast : s.ne2mark === 'long' ? s.ne2cast : null;
  return { short, long };
}
function accelInfo(s: P4State): { timer: string; cast: Val } | null {
  if (s.ne1bomb === 'short' || s.ne1bomb === 'long') return { timer: s.ne1bomb, cast: s.ne1cast };
  if (s.ne2bomb === 'short' || s.ne2bomb === 'long') return { timer: s.ne2bomb, cast: s.ne2cast };
  return null;
}
function elemCast(s: P4State, elem: 'fire' | 'water'): Val {
  return s.c1type === elem ? s.c1cast : s.c2type === elem ? s.c2cast : null;
}
// Each line builder ALWAYS returns a line so the timeline reads as a full
// skeleton; undetermined values render as "?" with a dim tone. Determined lines
// use a neutral base so the bold, colored keyword stands out.

function spreadLine(cast: Val, ord: string): Line {
  const sp = spreadElem(cast);
  return sp
    ? { text: `${ord} spread is ${ic(sp.id)}${kw(sp.word)}`, tone: 'neutral' }
    : { text: `${ord} spread is ?`, tone: 'dim' };
}

function accelLine(s: P4State, window: 'short' | 'long', ord: string): Line {
  const icon = ic('accel-bomb');
  const a = accelInfo(s);
  if (!a) return { text: `${icon}Your accel: ?`, tone: 'dim' };
  if (a.timer !== window) return { text: `${icon}No accel this set`, tone: 'dim' };
  const eff = bombEffect(a.cast);
  return eff
    ? { text: `${icon}Your accel is ${ord} ${kw(eff)}`, tone: 'neutral' }
    : { text: `${icon}Your accel: ?`, tone: 'dim' };
}

function gazeLine(cast: Val, ord: string): Line {
  const g = gazeEffect(cast);
  return g
    ? { text: `${ic('cursed-shriek')}${kw(g)} ${ord} shrieks`, tone: 'neutral' }
    : { text: `${ic('cursed-shriek')}? ${ord} shrieks`, tone: 'dim' };
}

function chaosLine(s: P4State, elem: 'fire' | 'water', label: string): Line {
  const cast = elemCast(s, elem);
  const head = `${ic(elem === 'fire' ? 'entropy' : 'dynamic-fluid')}${label}: `;
  const eff = chaosEffect(elem, cast);
  return eff ? { text: head + kw(eff), tone: 'neutral' } : { text: head + '?', tone: 'dim' };
}

function manaLine(s: P4State, charged: string, released: string, label: string): Line {
  const f = combine(s[charged], s[released]);
  return f
    ? { text: `${ic(f === 'real' ? 'kefka-real' : 'kefka-fake')}${label}: ${rfLabel(f)}`, tone: f }
    : { text: `${label}: ?`, tone: 'dim' };
}

/** 1st window: 1st spread element, 1st accel, 1st shrieks. */
export function block1(s: P4State): Line[] {
  const { short } = nePos(s);
  return [spreadLine(short, '1st'), accelLine(s, 'short', '1st'), gazeLine(short, '1st')];
}

/** Fire spread/stay, 2nd spread element, 2nd accel. */
export function block2(s: P4State): Line[] {
  const { long } = nePos(s);
  return [chaosLine(s, 'fire', 'Fire'), spreadLine(long, '2nd'), accelLine(s, 'long', '2nd')];
}

/** 2nd shrieks, Water spread/stay. */
export function block3(s: P4State): Line[] {
  const { long } = nePos(s);
  return [gazeLine(long, '2nd'), chaosLine(s, 'water', 'Water')];
}

/** Mana Release final tells (double negative). */
export function manaFinal(s: P4State): Line[] {
  return [manaLine(s, 'thunder', 'rlight', 'Lightning'), manaLine(s, 'blizzard', 'rbliz', 'Ice')];
}
