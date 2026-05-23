import type { PosterLayout } from '$lib/types';
import { diagram, player, boss, waymark, aoeCircle, text, arrow, tether } from '$lib/arena';

export const fruPosterLayout: PosterLayout = {
  cols: 16,
  rows: 9,
  title: 'Futures Rewritten (Ultimate) NA PF Strats',
  subtitle: 'NAUR',
  sections: [
    // ─── Top row ────────────────────────────────────────────────────────────
    {
      title: 'Fatebreaker',
      col: 1,
      row: 1,
      w: 5,
      h: 4,
      accentColor: '#f59e0b',
      arena: diagram(
        'square',
        [
          // Cyclonic block
          text('Cyclonic', 4, 6, { fontSize: 6, anchor: 'start' }),
          player('R1', 8, 16),
          player('MT', 22, 16),
          player('R2', 36, 16),
          player('H1', 10, 26),
          player('OT', 34, 26),
          player('M1', 8, 36),
          player('H2', 22, 36),
          player('M2', 36, 36),
          arrow(8, 12, 36, 12, { color: '#ec4899', width: 1.5 }),
          text('Prismatic\nSwap', 50, 18, { fontSize: 4, anchor: 'start', color: '#ec4899' }),

          // Utopian block
          text('Utopian', 65, 6, { fontSize: 6, anchor: 'start' }),
          text('G1 - A1D4 Markers\nG2 - 2BC3 Markers\nRole Tethers', 65, 16, {
            fontSize: 4,
            anchor: 'start'
          }),

          // Towers (right column)
          text('Towers', 90, 6, { fontSize: 6, anchor: 'start' }),
          player('H1', 92, 16),
          player('R1', 92, 26),
          text('Anchors', 78, 26, { fontSize: 4, anchor: 'start' }),
          player('H2', 92, 36),
          text('M1>M2>R1\nNorth to South', 78, 42, { fontSize: 4, anchor: 'start' }),

          // Fall of Faith conga
          text('Fall of Faith', 50, 60, { fontSize: 6 }),
          player('R1', 12, 72),
          player('H1', 24, 72),
          player('M1', 36, 72),
          player('MT', 48, 72),
          player('OT', 60, 72),
          player('M2', 72, 72),
          player('H2', 84, 72),
          player('R2', 96, 72),
          text('W/E', 50, 90, { fontSize: 6 })
        ],
        { bgColor: 'transparent', scale: 0.85 }
      )
    },
    {
      title: 'Shiva',
      col: 6,
      row: 1,
      w: 6,
      h: 4,
      accentColor: '#a855f7',
      arena: diagram(
        'square',
        [
          // Diamond Dust
          text('Diamond Dust', 18, 6, { fontSize: 6 }),
          waymark('1', 6, 14),
          waymark('A', 18, 14),
          waymark('2', 30, 14),
          player('R1', 12, 22),
          player('MT', 18, 22),
          player('R2', 24, 22),
          waymark('D', 6, 28),
          waymark('B', 30, 28),
          player('H1', 12, 32),
          player('OT', 24, 32),
          player('M1', 12, 42),
          player('H2', 18, 42),
          player('M2', 24, 42),
          waymark('4', 6, 50),
          waymark('C', 18, 50),
          waymark('3', 30, 50),
          arrow(8, 22, 28, 42, { color: '#ec4899', width: 1 }),
          arrow(28, 22, 8, 42, { color: '#a855f7', width: 1 }),
          text('Puddle Drops away from\nShiva after KB!', 18, 60, { fontSize: 3.5 }),

          // Mirror Mirror
          text('Mirror Mirror', 55, 6, { fontSize: 6 }),
          text('Facing Mirror\nG1 Left - G2 Right', 55, 14, { fontSize: 4 }),
          player('MT', 50, 28),
          player('OT', 60, 28),
          aoeCircle(55, 42, 12, { color: '#dc2626', opacity: 0.3 }),
          player('M1', 52, 42),
          player('M2', 58, 42),

          // Light Rampant
          text('Light Rampant', 86, 6, { fontSize: 6 }),
          player('H1', 78, 18),
          player('MT', 86, 18),
          player('OT', 94, 18),
          text('E/W Puddles', 86, 32, { fontSize: 4 }),
          player('R2', 80, 42),
          player('M2', 92, 42),
          text('CW if needed\n(4 on same side\nwithout puddle)', 86, 55, { fontSize: 3.5 })
        ],
        { bgColor: 'transparent', scale: 0.85 }
      )
    },
    {
      title: 'Gaia',
      col: 12,
      row: 1,
      w: 5,
      h: 4,
      accentColor: '#a855f7',
      arena: diagram(
        'square',
        [
          // Header text
          text('Supports - A1D4\nDPS - 2BC3', 8, 5, { fontSize: 4, anchor: 'start' }),
          text('T1 > T2 > H1 > H2\nM1 > M2 > R1 > R2', 55, 5, { fontSize: 4, anchor: 'start' }),

          // Ultimate Relativity
          text('Ultimate Relativity', 25, 20, { fontSize: 5 }),
          text('G1 Flex', 25, 26, { fontSize: 4 }),
          player('H1', 14, 38),
          text('10s', 6, 32, { fontSize: 3.5, color: '#06b6d4' }),
          player('MT', 36, 38),
          text('30s', 44, 32, { fontSize: 3.5, color: '#f59e0b' }),
          text('20s', 6, 50, { fontSize: 3.5, color: '#ec4899' }),
          text('20s', 44, 50, { fontSize: 3.5, color: '#ec4899' }),
          arrow(14, 50, 36, 50, { color: '#ec4899', width: 1 }),
          arrow(25, 38, 25, 32, { color: '#eab308', width: 1 }),
          arrow(25, 50, 25, 60, { color: '#eab308', width: 1 }),
          text('30s', 6, 68, { fontSize: 3.5, color: '#f59e0b' }),
          player('R1', 14, 62),
          player('M1', 36, 62),
          text('10s', 44, 68, { fontSize: 3.5, color: '#06b6d4' }),

          // Apocalypse
          text('Apocalypse', 75, 20, { fontSize: 5 }),
          text('Static Spreads\nSafe Spot Relative', 75, 28, { fontSize: 3.5 }),
          aoeCircle(70, 50, 14, { color: '#dc2626', opacity: 0.35 }),
          aoeCircle(85, 50, 14, { color: '#dc2626', opacity: 0.35 }),
          player('H1', 64, 48),
          player('H2', 68, 52),
          player('M1', 81, 48),
          player('R1', 85, 48),
          player('M2', 81, 52),
          player('R2', 85, 52)
        ],
        { bgColor: 'transparent', scale: 0.85 }
      )
    },

    // ─── Bottom row ─────────────────────────────────────────────────────────
    {
      title: 'Oracles',
      col: 1,
      row: 5,
      w: 5,
      h: 5,
      accentColor: '#06b6d4',
      arena: diagram(
        'square',
        [
          text('Darklit Dragonsong', 50, 5, { fontSize: 6 }),

          // Box
          text('Box', 20, 14, { fontSize: 5 }),
          player('H1', 12, 22),
          player('MT', 30, 22),
          player('M1', 12, 38),
          player('OT', 30, 38),
          tether(12, 22, 30, 22, { color: '#f59e0b' }),
          tether(12, 38, 30, 38, { color: '#f59e0b' }),
          tether(12, 22, 12, 38),
          tether(30, 22, 30, 38),
          text('Swap!', 36, 28, { fontSize: 3.5, color: '#f59e0b', anchor: 'start' }),

          // Hourglass
          text('Hourglass', 70, 14, { fontSize: 5 }),
          player('H1', 60, 22),
          player('MT', 80, 22),
          player('M1', 60, 38),
          player('OT', 80, 38),
          tether(60, 22, 80, 38, { color: '#f59e0b' }),
          tether(80, 22, 60, 38, { color: '#f59e0b' }),
          text('Swap!', 86, 30, { fontSize: 3.5, color: '#f59e0b', anchor: 'start' }),

          // Bowtie
          text('Bowtie', 45, 58, { fontSize: 5 }),
          text('No Swap!', 45, 64, { fontSize: 3.5 }),
          player('H1', 32, 72),
          player('MT', 56, 72),
          player('M1', 32, 88),
          player('OT', 56, 88),
          tether(32, 72, 56, 88),
          tether(56, 72, 32, 88)
        ],
        { bgColor: 'transparent', scale: 0.85 }
      )
    },
    {
      title: '(7×1 Akh Morns) Crystallize Time',
      col: 6,
      row: 5,
      w: 6,
      h: 5,
      accentColor: '#e5e7eb',
      arena: diagram(
        'circle',
        [
          waymark('A', 50, 12),
          waymark('1', 22, 22),
          waymark('2', 78, 22),
          waymark('D', 12, 50),
          waymark('B', 88, 50),
          waymark('4', 22, 78),
          waymark('3', 78, 78),
          waymark('C', 50, 88),

          // Yellow tether (vertical-ish)
          tether(50, 18, 50, 82, { color: '#eab308', width: 2 }),
          // Pink tether (diagonal)
          tether(22, 38, 78, 62, { color: '#ec4899', width: 2 }),

          aoeCircle(22, 38, 3, { color: '#22c55e', opacity: 0.6 }),
          aoeCircle(78, 62, 3, { color: '#22c55e', opacity: 0.6 }),
          aoeCircle(50, 18, 3, { color: '#22c55e', opacity: 0.6 }),
          aoeCircle(50, 82, 3, { color: '#22c55e', opacity: 0.6 }),

          text('Cleanses', 118, 18, { fontSize: 5, anchor: 'start' }),
          text('Look at purple tethers!', 50, 102, { fontSize: 4 }),
          text('Red Debuffs\nsame flex prio\nas Apoc!', 118, 48, { fontSize: 4, anchor: 'start' })
        ],
        { scale: 0.8 }
      )
    },
    {
      title: 'Pandora',
      col: 12,
      row: 5,
      w: 5,
      h: 5,
      accentColor: '#f59e0b',
      arena: diagram(
        'square',
        [
          // Wings Dark & Light
          text('Wings Dark & Light', 25, 6, { fontSize: 5 }),
          player('M1', 12, 18),
          player('R1', 22, 18),
          player('R2', 32, 18),
          player('M2', 42, 18),
          player('H1', 22, 32),
          player('H2', 32, 32),
          text('1st Tower is South', 25, 44, { fontSize: 3.5 }),

          // Polarizing Strikes
          text('Polarizing Strikes', 75, 6, { fontSize: 5 }),
          text('T > M > R > H', 75, 14, { fontSize: 4 }),
          player('MT', 64, 28),
          player('M1', 70, 28),
          player('OT', 80, 28),
          player('M2', 86, 28),
          player('R1', 64, 38),
          player('H1', 70, 38),
          player('R2', 80, 38),
          player('H2', 86, 38),
          text('Boss Relative!', 75, 50, { fontSize: 5, color: '#f59e0b' })
        ],
        { bgColor: 'transparent', scale: 0.85 }
      )
    }
  ]
};
