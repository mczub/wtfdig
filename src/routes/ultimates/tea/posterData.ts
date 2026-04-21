import type { PosterLayout } from '$lib/types';
import { diagram, player, boss, arenaShape, aoeCircle, aoeRect, text, arrow } from '$lib/arena';

export const teaPosterLayout: PosterLayout = {
  cols: 16,
  rows: 10,
  title: 'TEA Cheatsheet',
  subtitle: 'Elinabin',
  sections: [
    {
      title: 'Living Liquid',
      col: 1, row: 1, w: 9, h: 5,
      accentColor: '#5b8fb9',
      arena: diagram('circle', [
        player('R1', 9.75, 29),
        player('H1', 54.38, 61.88),
        player('R2', 65.5, 28.75),
        player('H2', 33.13, 23.13),
        player('M2', 24.38, 55.63),
        player('MT', 22.5, 72.75),
        player('OT', 18, 66),
        player('M1', 28.13, 56.88),
        boss(22.25, 66, 180),
        aoeCircle(37, 71, 12, { color: '#0ac6f5' }),
        aoeCircle(63, 45, 12, { color: '#0ac6f5' }),
        aoeCircle(11, 45, 12, { color: '#0ac6f5' }),
        aoeCircle(129.5, 22.25, 10, { color: '#0ac6f5' }),
        aoeCircle(152, 45, 10, { color: '#0ac6f5' }),
        aoeCircle(107, 45, 10, { color: '#0ac6f5' }),
        arenaShape('circle', 37, 45, 70, 50),
        arenaShape('circle', 129.5, 45, 70, 50),
        arenaShape('circle', 82, 118.75, 70, 50),
        arenaShape('circle', 223.25, 82.5, 90, 50),
        text('Jagd Dolls', 36.75, 5, { fontSize: 7 }),
        text('Protean 1', 130.5, 5, { fontSize: 7 }),
        text('Protean 2', 81.5, 77.75, { fontSize: 7 }),
      ], { bgColor: 'transparent', scale: 0.8 })
    },
    {
      title: 'BJCC',
      col: 10, row: 1, w: 7, h: 5,
      accentColor: '#c0392b',
      arena: diagram('square', [
        text('Fireball Order\n1. In \n2. Out \n3. In (2nd stay out)\n4. In', 1.75, 18, { fontSize: 5, anchor: 'start' }),
        text('Quotes\n1. In/Out or In/Stack\n2. Stack/In or Stack/Out\n3. Spread/In or Spread/Out\nDivebombs\nTank/Stack or Spread/Tank\nLast 2 are random', 1.25, 60.25, { fontSize: 5, anchor: 'start' }),
      ], { bgColor: 'transparent', scale: 0.8 })
    },
    {
      title: 'Temporal Stasis',
      col: 1, row: 6, w: 4, h: 5,
      accentColor: '#e74c3c',
      arena: // Grid: 4w × 6h
        diagram('circle', [
          player('MT', 56, 39.33),
          player('H1', 44, 27.33, { marker: 'green' }),
          player('H2', 88, 27.33, { marker: 'green' }),
          player('OT', 77.33, 39.33),
          player('DPS', 46, 76),
          player('DPS', 47, 69),
          player('DPS', 53, 72),
          player('DPS', 88, 68.67, { marker: 'green' }),
          boss(66.67, -2, 180),
          text('Dragon is new North', 68, 9, { fontSize: 6 }),
        ], { scale: 0.75 })
    },
    {
      title: 'Inception',
      col: 5, row: 6, w: 3, h: 5,
      accentColor: '#e67e22',
      arena: diagram('circle', [
        player('DPS', 38, 30),
        player('DPS', 59, 73),
        player('DPS', 38, 62),
        player('DPS', 59, 79),
        player('SUP', 86, 30),
        player('SUP', 86, 62),
        player('SUP', 66, 73),
        player('SUP', 66, 79),
        boss(62.5, -2, 180),
        aoeCircle(62.5, 46.88, 12),
        aoeCircle(62.5, 40, 12),
        aoeCircle(62.5, 28, 12),
        aoeCircle(62.5, 12, 12),
        text('Supps CW\nDPS CCW', 107, 10.75, { fontSize: 7 }),
      ], { scale: 0.8 })
    },
    {
      title: 'Wormhole',
      col: 8, row: 6, w: 3, h: 5,
      accentColor: '#e91e63',
      arena: diagram('circle', [
        text('Party in Neuro', 97, 49, { fontSize: 6 }),
        text('opposite Bahamut', 97, 56, { fontSize: 6 }),
        boss(62.5, 22, 180),
        player('MT', 43, 36),
        player('OT', 82, 36),
        player('H1', 57, 60),
        player('H2', 57, 66),
        player('M1', 61, 64),
        player('M2', 63, 57),
        player('R1', 63, 68),
        player('R2', 69, 64),
      ], { scale: 0.8 })
    },
    {
      title: 'Perfect Alexander',
      col: 11, row: 6, w: 6, h: 5,
      accentColor: '#f39c12',
      arena: diagram('circle', [
        boss(66.67, 0, 180),
        boss(100, 16.67, 225),
        boss(33.33, 16.67, 135),
        aoeRect(66.67, 50, 30, 200, { rotation: 45 }),
        aoeRect(66.67, 50, 30, 200, { rotation: 135 }),
        player('MT', 59, 12),
        player('OT', 73.67, 11.67),
        text('Nael is safe\nTanks can go under Nael\nRanged can go across from Nael', 132, 75, { fontSize: 6, anchor: 'end' }),
        player('H2', 107.67, 44.33),
        player('M2', 107.67, 57.67),
        player('R1', 59.67, 91),
        player('R2', 73.33, 91),
        player('H1', 25, 43.67),
        player('M1', 25.33, 58.33),
      ], { scale: 0.75 })
    }
  ]
};
