import type { PosterLayout } from '$lib/types';
import { diagram, player, boss, text, aoeCircle, aoeRect, CIRCLE_MARKERS } from '$lib/arena';

export const m9sPosterLayout: PosterLayout = {
  cols: 16,
  rows: 9,
  title: 'M9S Cheatsheet',
  subtitle: 'AAC Heavyweight M1 (Savage)',
  sections: [
    {
      title: 'Vamp Stomp',
      col: 1, row: 1, w: 4, h: 4,
      accentColor: '#e74c3c',
      arena: diagram('circle', [
        ...CIRCLE_MARKERS,
        boss(50, 50),
        player('MT', 50, 18),
        player('OT', 50, 82),
        player('H1', 25, 75),
        player('H2', 75, 75),
        player('M1', 18, 50),
        player('M2', 82, 50),
        player('R1', 25, 25),
        player('R2', 75, 25),
        text('Spread at markers', 50, 8, { fontSize: 4 }),
      ], { bgColor: 'transparent' })
    },
    {
      title: 'Aetherletting',
      col: 5, row: 1, w: 4, h: 4,
      accentColor: '#e67e22',
      arena: diagram('circle', [
        ...CIRCLE_MARKERS,
        boss(50, 50),
        player('MT', 41, 15),
        player('R2', 59, 13),
        player('R1', 19, 35),
        player('H2', 71, 33),
        player('H1', 29, 68),
        player('M2', 71, 65),
        player('M1', 41, 87),
        player('OT', 59, 87),
        text('CCW from clock spot', 50, 8, { fontSize: 4 }),
        text('Drop AOE at edge', 50, 96, { fontSize: 4 }),
      ], { bgColor: 'transparent' })
    },
    {
      title: 'Screech 2: Towers',
      col: 9, row: 1, w: 4, h: 4,
      accentColor: '#3498db',
      arena: diagram('circle', [
        boss(50, 50),
        player('MT', 50, 25),
        player('OT', 50, 75),
        aoeCircle(50, 30, 8, { color: '#3b82f6', opacity: 0.3 }),
        aoeCircle(50, 70, 8, { color: '#3b82f6', opacity: 0.3 }),
        text('MT: N tower', 50, 10, { fontSize: 5 }),
        text('OT: S tower', 50, 90, { fontSize: 5 }),
        text('Others: avoid circles', 50, 100, { fontSize: 4 }),
      ], { bgColor: 'transparent' })
    },
    {
      title: 'Hell in a Cell',
      col: 13, row: 1, w: 4, h: 8,
      accentColor: '#8e44ad',
      arena: diagram('circle', [
        text('G1 1st, G2 2nd', 50, 5, { fontSize: 5 }),
        text('CW from N:', 50, 13, { fontSize: 4 }),
        text('T → H → M → R', 50, 20, { fontSize: 5 }),
        aoeCircle(50, 38, 6, { color: '#3b82f6', opacity: 0.3 }),
        aoeCircle(70, 55, 6, { color: '#3b82f6', opacity: 0.3 }),
        aoeCircle(50, 72, 6, { color: '#3b82f6', opacity: 0.3 }),
        aoeCircle(30, 55, 6, { color: '#3b82f6', opacity: 0.3 }),
        player('MT', 50, 38),
        player('H1', 70, 55),
        player('M1', 50, 72),
        player('R1', 30, 55),
        text('Spread: T wide safe', 50, 105, { fontSize: 4 }),
        text('H CW, DPS CCW from T', 50, 112, { fontSize: 4 }),
        text('Amp: LP stack wide safe', 50, 122, { fontSize: 4 }),
      ], { bgColor: 'transparent', scale: 0.65 })
    },
    {
      title: 'Undead Deathmatch',
      col: 1, row: 5, w: 4, h: 5,
      accentColor: '#1abc9c',
      arena: diagram('circle', [
        boss(50, 50),
        player('MT', 35, 30),
        player('H1', 30, 45),
        player('M1', 25, 35),
        player('R1', 40, 40),
        player('OT', 65, 70),
        player('H2', 70, 55),
        player('M2', 75, 65),
        player('R2', 60, 60),
        text('G1: N/W', 25, 15, { fontSize: 5 }),
        text('G2: S/E', 75, 85, { fontSize: 5 }),
      ], { bgColor: 'transparent' })
    },
    {
      title: 'Sanguine Scratch',
      col: 5, row: 5, w: 4, h: 5,
      accentColor: '#e91e63',
      arena: diagram('square', [
        boss(50, 50),
        text('Follow tether', 50, 10, { fontSize: 5 }),
        text('while dodging', 50, 18, { fontSize: 5 }),
        text('alternating cleaves', 50, 26, { fontSize: 5 }),
        aoeRect(50, 50, 100, 50, { rotation: 0, opacity: 0.3 }),
        text('Donut: stay far', 50, 80, { fontSize: 4 }),
        text('Circle: stay close', 50, 88, { fontSize: 4 }),
      ], { bgColor: 'transparent' })
    },
  ]
};
