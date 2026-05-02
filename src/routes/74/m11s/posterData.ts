import type { PosterLayout } from '$lib/types';
import { diagram, player, boss, aoeCircle, aoeRect, text, SQUARE_MARKERS } from '$lib/arena';

export const m11sPosterLayout: PosterLayout = {
  cols: 16,
  rows: 9,
  title: 'M11S Cheatsheet',
  subtitle: 'AAC Heavyweight M3 (Savage)',
  sections: [
    {
      title: 'Raw Steel',
      col: 1,
      row: 1,
      w: 3,
      h: 4,
      accentColor: '#e74c3c',
      // Grid: 4w × 6h
      arena: diagram(
        'square',
        [
          player('MT', 47, 7),
          player('OT', 52, 7),
          player('R1', 8, 35),
          player('M1', 37, 40),
          player('M2', 63, 40),
          player('R2', 92, 35),
          player('H1', 27, 57),
          player('H2', 71, 58),
          player('MT', 32, 87),
          player('OT', 64, 87),
          player('H1', 46, 118),
          player('H2', 50, 119),
          player('M1', 44, 124),
          player('M2', 52, 121),
          player('R1', 51, 126),
          player('R2', 46, 126),
          boss(49, 26),
          boss(48, 102),
          text('Axe', 8, 5, { fontSize: 6 }),
          text('Scythe', 11, 76, { fontSize: 6 })
        ],
        { bgColor: 'transparent', scale: 0.75 }
      )
    },
    {
      title: 'Assault Evolved',
      col: 4,
      row: 1,
      w: 5,
      h: 4,
      accentColor: '#e67e22',
      arena: diagram(
        'square',
        [
          player('MT', 81, 43),
          player('R1', 65, 39),
          player('OT', 50, 72),
          player('R2', 86, 58),
          player('H1', 51, 42),
          player('H2', 80, 73),
          player('M1', 45, 56),
          player('M2', 65, 78),
          boss(65, 58, 45),
          text('Axe: Stack', 36, 12, { fontSize: 6 }),
          text('Sword: G1 Left, G2 Right', 56, 19, { fontSize: 6 }),
          text('Scythe (Boss Relative)', 53, 26, { fontSize: 6 })
        ],
        { bgColor: 'transparent' }
      )
    },
    {
      title: 'Dance of Domination',
      col: 9,
      row: 1,
      w: 4,
      h: 4,
      accentColor: '#e91e63',
      arena: diagram(
        'square',
        [
          ...SQUARE_MARKERS,
          boss(50, 50),
          aoeRect(50, 8, 1206, 20, { opacity: 0.75 }),
          aoeRect(50, 92, 120, 20, { opacity: 0.75 }),
          aoeRect(50, 50, 200, 28, { rotation: 45, opacity: 0.75 }),
          aoeRect(50, 50, 200, 28, { rotation: 135, opacity: 0.75 }),
          aoeRect(50, 50, 120, 30, { opacity: 0.75 }),
          aoeRect(8, 50, 120, 30, { rotation: 90, opacity: 0.75 }),
          player('MT', 45, 79),
          player('M1', 56, 79),
          player('OT', 45, 21),
          player('M2', 55, 21),
          player('H1', 95, 66),
          player('R1', 95, 77),
          text('New North', 15, 50, { fontSize: 6 }),
          player('H2', 95, 34),
          player('R2', 95, 24)
        ],
        { bgColor: 'transparent' }
      )
    },
    {
      title: 'Trophy Weapons',
      col: 13,
      row: 1,
      w: 4,
      h: 4,
      accentColor: '#f39c12',
      arena: diagram('square', [
        ...SQUARE_MARKERS,
        boss(50, 50),
        player('MT', 60, 12),
        player('R1', 40, 12),
        player('H1', 12, 40),
        player('M1', 12, 60),
        player('R2', 88, 40),
        player('H2', 88, 60),
        player('M2', 60, 88),
        player('OT', 40, 88)
      ])
    },
    {
      title: 'Meteorain',
      col: 1,
      row: 5,
      w: 4,
      h: 5,
      accentColor: '#3498db',
      arena: diagram(
        'square',
        [
          player('MT', 38, 42),
          player('OT', 30, 49),
          player('M1', 66, 44),
          player('M2', 32, 76),
          player('H1', 25, 35),
          player('H2', 23, 24),
          player('R1', 15, 30),
          player('R2', 13, 20),
          player('H2', 126, 86),
          player('H1', 134, 44),
          player('MT', 150, 29),
          player('OT', 150, 87),
          player('M1', 176, 36),
          player('M2', 184, 43),
          player('R1', 184, 27),
          player('R2', 192, 33),
          boss(50, 62),
          boss(150, 62),
          aoeCircle(135, 77, 5, { color: '#5f4f02', opacity: 1 }),
          aoeCircle(167, 52, 5, { color: '#5f4f02', opacity: 1 }),
          text('1st set: Melees', 50, 110, { fontSize: 8 }),
          text('2nd set: Healers', 150, 110, { fontSize: 8 }),
          text('3rd Set: Ranged', 50, 240, { fontSize: 8 }),
          player('OT', 50, 200),
          aoeCircle(34, 190, 5, { color: '#5f4f02', opacity: 1 }),
          boss(50, 175),
          aoeCircle(24, 201, 5, { color: '#5f4f02', opacity: 1 }),
          aoeCircle(35, 158, 5, { color: '#5f4f02', opacity: 1 }),
          player('M1', 22, 153),
          player('M2', 30, 145),
          player('H1', 14, 144),
          player('H2', 22, 136),
          player('R1', 13, 213),
          player('R2', 68, 157),
          player('MT', 50, 140)
        ],
        { bgColor: 'transparent', scale: 0.5 }
      )
    },
    {
      title: 'Arena Split',
      col: 5,
      row: 5,
      w: 6,
      h: 5,
      accentColor: '#1abc9c',
      arena: diagram('square', [...SQUARE_MARKERS, boss(50, 50)])
    },
    {
      title: 'Ecliptic Stampede',
      col: 11,
      row: 5,
      w: 6,
      h: 5,
      accentColor: '#8e44ad',
      arena: diagram('square', [...SQUARE_MARKERS, boss(50, 50)])
    }
  ]
};
