import type { PosterLayout } from '$lib/types';
import {
  diagram,
  player,
  boss,
  text,
  aoeCircle,
  aoeRect,
  SQUARE_MARKERS,
  waymark
} from '$lib/arena';

export const m10sPosterLayout: PosterLayout = {
  cols: 16,
  rows: 9,
  title: 'M10S Cheatsheet',
  subtitle: 'AAC Heavyweight M2 (Savage)',
  sections: [
    {
      title: 'Alley-oop Inferno',
      col: 1,
      row: 1,
      w: 4,
      h: 4,
      accentColor: '#e74c3c',
      arena: diagram(
        'square',
        [
          ...SQUARE_MARKERS,
          boss(50, 50),
          player('MT', 45, 60),
          player('OT', 35, 50),
          player('M1', 40, 65),
          player('M2', 38, 55),
          player('H1', 55, 75),
          player('H2', 33, 38),
          player('R1', 68, 78),
          player('R2', 62, 78),
          text('Melee: close to boss', 50, 8, { fontSize: 4 }),
          text('Ranged/Healer: far', 50, 96, { fontSize: 4 })
        ],
        { bgColor: 'transparent' }
      )
    },
    {
      title: '2 Balls (Sickest Take-off)',
      col: 5,
      row: 1,
      w: 4,
      h: 4,
      accentColor: '#e67e22',
      arena: diagram(
        'square',
        [
          boss(50, 20),
          player('MT', 30, 40),
          player('H1', 30, 50),
          player('M1', 30, 60),
          player('R1', 30, 70),
          player('OT', 70, 40),
          player('H2', 70, 50),
          player('M2', 70, 60),
          player('R2', 70, 70),
          aoeCircle(30, 55, 18, { color: '#3b82f6', opacity: 0.15 }),
          aoeCircle(70, 55, 18, { color: '#ef4444', opacity: 0.15 }),
          text('G1 Left (facing boss)', 30, 85, { fontSize: 3.5 }),
          text('G2 Right (facing boss)', 70, 85, { fontSize: 3.5 })
        ],
        { bgColor: 'transparent' }
      )
    },
    {
      title: '8 Balls (Spread)',
      col: 9,
      row: 1,
      w: 4,
      h: 4,
      accentColor: '#f1c40f',
      arena: diagram(
        'square',
        [
          boss(50, 20),
          player('MT', 30, 35),
          player('H1', 30, 50),
          player('M1', 20, 65),
          player('R1', 20, 80),
          player('OT', 70, 35),
          player('H2', 70, 50),
          player('M2', 80, 65),
          player('R2', 80, 80),
          text('G1 Left, G2 Right', 50, 8, { fontSize: 4 }),
          text('(relative to boss)', 50, 96, { fontSize: 4 })
        ],
        { bgColor: 'transparent' }
      )
    },
    {
      title: 'Proteans (Boss Relative)',
      col: 13,
      row: 1,
      w: 4,
      h: 4,
      accentColor: '#9b59b6',
      arena: diagram(
        'square',
        [
          boss(50, 50),
          player('MT', 50, 20),
          player('OT', 50, 80),
          player('H1', 20, 50),
          player('H2', 80, 50),
          player('M1', 25, 75),
          player('M2', 75, 75),
          player('R1', 25, 25),
          player('R2', 75, 25),
          text('Boss-relative clock spots', 50, 8, { fontSize: 4 }),
          text('DD: dodge CW | Rev: stay', 50, 96, { fontSize: 4 })
        ],
        { bgColor: 'transparent' }
      )
    },
    {
      title: 'Arena Split: Start',
      col: 1,
      row: 5,
      w: 4,
      h: 5,
      accentColor: '#3498db',
      arena: diagram(
        'square',
        [
          player('R1', 30, 15),
          player('MT', 30, 28),
          player('M1', 30, 72),
          player('H1', 30, 85),
          player('R2', 70, 15),
          player('OT', 70, 28),
          player('M2', 70, 72),
          player('H2', 70, 85),
          aoeRect(30, 50, 40, 100, { color: '#3b82f6', opacity: 0.1 }),
          aoeRect(70, 50, 40, 100, { color: '#ef4444', opacity: 0.1 }),
          text('G1 West', 30, 5, { fontSize: 4 }),
          text('G2 East', 70, 5, { fontSize: 4 }),
          text('R/T North, M/H South', 50, 97, { fontSize: 4 })
        ],
        { bgColor: 'transparent' }
      )
    },
    {
      title: 'Arena Split: Stacks',
      col: 5,
      row: 5,
      w: 4,
      h: 5,
      accentColor: '#2ecc71',
      arena: diagram(
        'square',
        [
          waymark('1', 40, 25),
          waymark('2', 60, 25),
          waymark('3', 60, 75),
          waymark('4', 40, 75),
          player('MT', 38, 25),
          player('R1', 42, 25),
          player('OT', 58, 25),
          player('R2', 62, 25),
          player('H1', 38, 75),
          player('M1', 42, 75),
          player('H2', 58, 75),
          player('M2', 62, 75),
          text('T+R North (1/2)', 50, 8, { fontSize: 4 }),
          text('H+M South (3/4)', 50, 95, { fontSize: 4 })
        ],
        { bgColor: 'transparent' }
      )
    },
    {
      title: 'Alley-oop 2: Proteans',
      col: 9,
      row: 5,
      w: 4,
      h: 5,
      accentColor: '#e91e63',
      arena: diagram(
        'square',
        [
          ...SQUARE_MARKERS,
          boss(50, 50),
          player('MT', 50, 18),
          player('OT', 50, 82),
          player('H1', 18, 50),
          player('H2', 82, 50),
          player('M1', 22, 78),
          player('M2', 78, 78),
          player('R1', 22, 22),
          player('R2', 78, 22),
          text('True N clock spots', 50, 5, { fontSize: 4 }),
          text('DD: dodge CW | Rev: stay', 50, 97, { fontSize: 4 })
        ],
        { bgColor: 'transparent' }
      )
    },
    {
      title: 'Insane Air 2: Cleanses',
      col: 13,
      row: 5,
      w: 4,
      h: 5,
      accentColor: '#1abc9c',
      arena: diagram(
        'square',
        [
          text('Proximity debuff bait', 50, 10, { fontSize: 5 }),
          text('Go to boss matching', 50, 20, { fontSize: 4 }),
          text('your debuff color', 50, 28, { fontSize: 4 }),
          text('(Healers: OPPOSITE)', 50, 38, { fontSize: 5 }),
          text('Cleanse order:', 50, 55, { fontSize: 5 }),
          text('H → M → R', 50, 65, { fontSize: 6 }),
          text('Swap order:', 50, 78, { fontSize: 5 }),
          text('M → R', 50, 88, { fontSize: 6 })
        ],
        { bgColor: 'transparent' }
      )
    }
  ]
};
