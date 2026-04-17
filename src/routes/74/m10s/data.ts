import type { Strat, FightConfig, StratRecord, PlayerMechStrat, MechanicStrat } from '$lib/types';
import {
  getStringObject,
  getStratArray,
  getCircleMaskUrl,
  getMultiCircleMaskUrl,
  getRectMaskUrl
} from '$lib/utils';
import { diagram, player, boss, text, aoeCircle, aoeRect, SQUARE_MARKERS, waymark } from '$lib/arena';

const toxicFirewatersnaking: MechanicStrat[] = [
  {
    mechanic: 'Debuffs',
    description:
      'Proximity bait debuff\nG1 near Blue, G2 near Red\nCan go on either closest or furthest players\nWatch debuff and swap to boss that matches your color',
    imageUrl: './m10s/toxic-snaking-debuffs.webp',
    url: 'https://raidplan.io/plan/syjvfhacdxz7awet#14'
  },
  {
    mechanic: 'Puddles + Proteans',
    description:
      '🔥 Place puddles on east wall in box shape\n💦 Giga tight spread in NW/SW corner with Tank towards middle',
    imageUrl: './m10s/toxic-snaking-pp.webp',
    url: 'https://raidplan.io/plan/syjvfhacdxz7awet#15'
  },
  {
    mechanic: 'Wide Cleave',
    description:
      'Blue jumps to N or S opposite of big wave and does wide cleave\nTrue North\n💦 West, 1 ball = Stack, 4 balls = spread\n🔥 East (near fire puddles)',
    imageUrl: './m10s/toxic-snaking-cleave.webp',
    url: 'https://raidplan.io/plan/syjvfhacdxz7awet#16'
  },
  {
    mechanic: 'Far Jumps',
    description:
      '🔥 Boss jumps on furthest fire player 4x\nIntercard markers for bait\n1 = Tank, 2 = Healer, 3 = Melee, 4 = Ranged\nMove to middle after bait\nKB + 💦 Stack/Spread after Fire baits',
    imageUrl: './m10s/toxic-snaking-far.webp',
    url: 'https://raidplan.io/plan/syjvfhacdxz7awet#17'
  },
  {
    mechanic: 'Cutback Blaze + TB',
    description:
      'Pull Red Hot mid\n🔥 Stack South to bait Cutback Blaze\nParty stay under boss\n💦 Tank run North to bait TB',
    imageUrl: './m10s/toxic-snaking-cb.webp',
    url: 'https://raidplan.io/plan/syjvfhacdxz7awet#18'
  }
];

const nomnomFirewatersnaking: MechanicStrat[] = [
  {
    mechanic: 'Debuffs',
    description:
      'Proximity bait debuff\nG1 near Blue, G2 near Red\nCan go on either closest or furthest players\nWatch debuff and swap to boss that matches your color',
    imageUrl: './m10s/nomnom-snaking-debuffs.webp',
    url: 'https://raidplan.io/plan/Cmo_RpCDbsUSMV5c#1'
  },
  {
    mechanic: 'Puddles + Proteans',
    description:
      '🔥 Place puddles on east wall in box shape\n💦 Tight protean spread in NW/SW corner, dodge 2nd hit\nDPS towards corner, Tank/Healer towards middle\nMake sure to leave room/dodge middle for 2nd hit to not cleave fires\n‼️ 2/2 proteans require extremely close positioning, consider 1/3 if you are having issues cleaving fires',
    imageUrl: './m10s/nomnom-snaking-pp.webp',
    url: {
      'Boss SW': 'https://raidplan.io/plan/Cmo_RpCDbsUSMV5c#2',
      'Boss NW': 'https://raidplan.io/plan/Cmo_RpCDbsUSMV5c#3'
    }
  },
  {
    mechanic: 'Wide Cleave',
    description:
      'Blue jumps to N or S opposite of big wave and does wide cleave\nTrue North\n💦 West, 1 ball = Stack, 4 balls = spread\n🔥 East (near fire puddles)',
    imageUrl: './m10s/nomnom-snaking-cleave.webp',
    url: 'https://raidplan.io/plan/Cmo_RpCDbsUSMV5c#5'
  },
  {
    mechanic: 'Far Jumps',
    description:
      '🔥 Boss jumps on furthest fire player 4x\n1st/3rd (T/M) Far 2nd/4th (H/R) Close relative to corner fire puddles\nStay near original puddles if not baiting\nImmediately run mid after bait',
    imageUrl: './m10s/nomnom-snaking-far.webp',
    url: 'https://raidplan.io/plan/Cmo_RpCDbsUSMV5c#6'
  },
  {
    mechanic: 'Sickest Take-off',
    description: '💦 Watch Stack/Spread telegraph\nBlue tank save KBI for buster',
    imageUrl: './m10s/nomnom-snaking-sickest.webp',
    url: 'https://raidplan.io/plan/Cmo_RpCDbsUSMV5c#8'
  },
  {
    mechanic: 'Stacks/Spreads',
    description:
      'Position Red near middle and Blue away from Take-off cleave lane\n💦 Resolve Stack/Spread\n🔥 Behind Red to bait pie slice towards safe side',
    imageUrl: './m10s/nomnom-snaking-stacks.webp',
    url: 'https://raidplan.io/plan/Cmo_RpCDbsUSMV5c#9'
  },
  {
    mechanic: 'Cutback Blaze + TB',
    description:
      'Move into safespot\n💦 Tank bait TB far from Deep Blue\n🔥 Tank go far to bait the safe slice, aim it at D marker',
    imageUrl: './m10s/nomnom-snaking-tb.webp',
    url: 'https://raidplan.io/plan/Cmo_RpCDbsUSMV5c#10'
  }
];

const oceFirewatersnaking: MechanicStrat[] = [
  {
    mechanic: 'Debuffs',
    description:
      'Proximity bait debuff\nG1 near Blue, G2 near Red\nCan go on either closest or furthest players\nWatch debuff and swap to boss that matches your color',
    imageUrl: './m10s/oce-13.webp',
    url: 'https://raidplan.io/plan/eAJGfKMLsJAZBeHl#14'
  },
  {
    mechanic: 'Puddles + Proteans',
    description:
      '🔥 Place puddles on east wall in box shape\n💦 Giga tight spread in NW/SW corner with Tank towards middle',
    imageUrl: './m10s/oce-14.webp',
    url: 'https://raidplan.io/plan/eAJGfKMLsJAZBeHl#15',
  },
  {
    mechanic: 'Wide Cleave',
    description:
      'Blue jumps to N or S opposite of big wave and does wide cleave\nTrue North\n💦 West, 1 ball = Stack, 4 balls = spread\n🔥 East (near fire puddles)',
    imageUrl: './m10s/oce-15.webp',
    url: 'https://raidplan.io/plan/eAJGfKMLsJAZBeHl#16'
  },
  {
    mechanic: 'Far Jumps',
    description:
      '🔥 Boss jumps on furthest fire player 4x\n1st/3rd (T/M) Far 2nd/4th (H/R) Close relative to corner fire puddles\nStay near original puddles if not baiting\nImmediately run mid after bait',
    imageUrl: './m10s/oce-16.webp',
    url: 'https://raidplan.io/plan/eAJGfKMLsJAZBeHl#17'
  },
  {
    mechanic: 'Cutback Blaze + TB',
    description:
      'Move into safespot\n💦 Tank bait TB far North\n🔥 Stack South to bait Cutback Blaze',
    imageUrl: './m10s/oce-18.webp',
    url: 'https://raidplan.io/plan/eAJGfKMLsJAZBeHl#19'
  }
];

const firewatersnakingMechs: Record<string, MechanicStrat[]> = {
  toxic: toxicFirewatersnaking,
  nomnom: nomnomFirewatersnaking,
  oce: oceFirewatersnaking,
};

const parallelDeepaerial: MechanicStrat[] = [
  {
    mechanic: '1st Tether',
    description:
      'Healers take ball\n🔥 Fire tether directly to A or C\n💦 Water tether straight north or south\nTether line is wide so be careful',
    imageUrl: './m10s/parallel-aerial-1.webp',
    url: 'https://raidplan.io/plan/qWue79_md0YHCrnW#1'
  },
  {
    mechanic: '2nd Tether',
    description:
      '🔥 Fire tether directly through the ball\n💦 Water tether back to first corner parallel to fire',
    imageUrl: './m10s/parallel-aerial-2.webp',
    url: 'https://raidplan.io/plan/qWue79_md0YHCrnW#2'
  },
  {
    mechanic: 'All Other Tethers',
    description: '🔥 Fire tether directly through the ball\n💦 Water tether parallel to fire',
    imageUrl: './m10s/parallel-aerial-3.webp',
    url: 'https://raidplan.io/plan/qWue79_md0YHCrnW#3'
  }
];

const deepaerialMechs: Record<string, MechanicStrat[]> = {
  parallel: parallelDeepaerial
};

export const m10sFightConfig: FightConfig = {
  fightKey: 'm10s',
  title: 'AAC Heavyweight M2 (Savage)',
  abbreviatedTitle: 'M10S',
  subtitle: 'M10S Patch 7.4',
  cheatsheetTitle: 'M10S Cheatsheet',
  strats: {
    toxic: {
      label: 'Toxic Friends',
      defaults: {
        snaking: 'toxic',
        aerial: 'parallel'
      }
    },
    hector: {
      label: 'Hector (Toxic/nomnom/Parallel)',
      defaults: {
        snaking: 'nomnom',
        aerial: 'parallel'
      },
      badges: [
        {
          text: 'NA',
          class: 'na-badge'
        },
        {
          text: 'EU',
          class: 'eu-badge'
        }
      ]
    },
    oce: {
      label: 'OCE (MR)',
      defaults: {
        snaking: 'oce',
        aerial: 'parallel'
      },
      badges: [
        {
          text: 'OCE',
          class: 'oce-badge'
        },
      ]
    }
  },
  toggles: [
    {
      key: 'snaking',
      label: 'Snaking',
      defaultValue: 'toxic',
      options: [
        {
          value: 'toxic',
          label: 'Toxic'
        },
        {
          value: 'nomnom',
          label: 'nomnom',
          url: {
            name: 'nomnom/Better Snaking',
            url: 'https://raidplan.io/plan/Cmo_RpCDbsUSMV5c'
          }
        },
        {
          value: 'oce',
          label: 'OCE',
        }
      ]
    },
    {
      key: 'aerial',
      label: 'Aerial',
      defaultValue: 'parallel',
      options: [
        {
          value: 'parallel',
          label: 'Parallel',
          url: {
            name: 'Raidplan',
            url: 'https://raidplan.io/plan/qWue79_md0YHCrnW'
          }
        }
      ]
    }
  ],
  defaultStratName: 'toxic',
  posterLayout: {
    cols: 16,
    rows: 9,
    title: 'M10S Cheatsheet',
    subtitle: 'AAC Heavyweight M2 (Savage)',
    sections: [
      {
        title: 'Alley-oop Inferno',
        col: 1, row: 1, w: 4, h: 4,
        accentColor: '#e74c3c',
        arena: diagram('square', [
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
          text('Ranged/Healer: far', 50, 96, { fontSize: 4 }),
        ], { bgColor: 'transparent' })
      },
      {
        title: '2 Balls (Sickest Take-off)',
        col: 5, row: 1, w: 4, h: 4,
        accentColor: '#e67e22',
        arena: diagram('square', [
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
          text('G2 Right (facing boss)', 70, 85, { fontSize: 3.5 }),
        ], { bgColor: 'transparent' })
      },
      {
        title: '8 Balls (Spread)',
        col: 9, row: 1, w: 4, h: 4,
        accentColor: '#f1c40f',
        arena: diagram('square', [
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
          text('(relative to boss)', 50, 96, { fontSize: 4 }),
        ], { bgColor: 'transparent' })
      },
      {
        title: 'Proteans (Boss Relative)',
        col: 13, row: 1, w: 4, h: 4,
        accentColor: '#9b59b6',
        arena: diagram('square', [
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
          text('DD: dodge CW | Rev: stay', 50, 96, { fontSize: 4 }),
        ], { bgColor: 'transparent' })
      },
      {
        title: 'Arena Split: Start',
        col: 1, row: 5, w: 4, h: 5,
        accentColor: '#3498db',
        arena: diagram('square', [
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
          text('R/T North, M/H South', 50, 97, { fontSize: 4 }),
        ], { bgColor: 'transparent' })
      },
      {
        title: 'Arena Split: Stacks',
        col: 5, row: 5, w: 4, h: 5,
        accentColor: '#2ecc71',
        arena: diagram('square', [
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
          text('H+M South (3/4)', 50, 95, { fontSize: 4 }),
        ], { bgColor: 'transparent' })
      },
      {
        title: 'Alley-oop 2: Proteans',
        col: 9, row: 5, w: 4, h: 5,
        accentColor: '#e91e63',
        arena: diagram('square', [
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
          text('DD: dodge CW | Rev: stay', 50, 97, { fontSize: 4 }),
        ], { bgColor: 'transparent' })
      },
      {
        title: 'Insane Air 2: Cleanses',
        col: 13, row: 5, w: 4, h: 5,
        accentColor: '#1abc9c',
        arena: diagram('square', [
          text('Proximity debuff bait', 50, 10, { fontSize: 5 }),
          text('Go to boss matching', 50, 20, { fontSize: 4 }),
          text('your debuff color', 50, 28, { fontSize: 4 }),
          text('(Healers: OPPOSITE)', 50, 38, { fontSize: 5 }),
          text('Cleanse order:', 50, 55, { fontSize: 5 }),
          text('H → M → R', 50, 65, { fontSize: 6 }),
          text('Swap order:', 50, 78, { fontSize: 5 }),
          text('M → R', 50, 88, { fontSize: 6 }),
        ], { bgColor: 'transparent' })
      },
    ]
  }
};

export const toxic: Strat = {
  stratName: 'toxic',
  stratUrl: {
    Raidplan: 'https://raidplan.io/plan/syjvfhacdxz7awet',
    'Improved (by Cake Shake)': 'https://raidplan.io/plan/uE1jm_M3oD-P6Ww8'
  },
  description: 'Last updated from Raidplan 1/9/2026 7pm PST',
  strats: [
    {
      phaseName: 'Opening',
      mechs: [
        {
          mechanic: 'Flame Floater',
          description: '1st: CCW corner\n2nd: CCW wall\n3rd: Back in corner\n4th: Back at start',
          imageUrl: './m10s/toxic-floater.webp',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#1'
        },
        {
          mechanic: 'Alley-oop Inferno',
          description: 'Melee close, ranged far/yolo\nPull enemy back to mid ASAP after',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#2',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Close to boss',
              imageUrl: './m10s/toxic-inferno.webp',
              mask: getCircleMaskUrl(44, 73, 6)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Close to boss',
              imageUrl: './m10s/toxic-inferno.webp',
              mask: getCircleMaskUrl(33.9, 49.4, 6)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Far from boss',
              imageUrl: './m10s/toxic-inferno.webp',
              mask: getCircleMaskUrl(54.4, 77.7, 6)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Far from boss',
              imageUrl: './m10s/toxic-inferno.webp',
              mask: getCircleMaskUrl(32, 37.3, 6)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Close to boss',
              imageUrl: './m10s/toxic-inferno.webp',
              mask: getCircleMaskUrl(38, 69.5, 6)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Close to boss',
              imageUrl: './m10s/toxic-inferno.webp',
              mask: getCircleMaskUrl(36, 59.5, 6)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Far from boss',
              imageUrl: './m10s/toxic-inferno.webp',
              mask: getCircleMaskUrl(68.2, 78.4, 6)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Far from boss',
              imageUrl: './m10s/toxic-inferno.webp',
              mask: getCircleMaskUrl(61.1, 78.3, 6)
            }
          ]
        },
        {
          mechanic: 'Cutback Blaze',
          description:
            'Stack between boss and fire\nBait narrow slice behind boss\nSafe slice will bait opposite the furthest valid player',
          imageUrl: './m10s/toxic-cutback1.webp',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#3'
        },
        {
          mechanic: 'Pyrotation',
          description: '3 hit party stack\nEach stack leaves a puddle',
          imageUrl: './m10s/toxic-pyrotation.webp',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#4'
        }
      ]
    },
    {
      phaseName: 'Sickest Take-off',
      mechs: [
        {
          mechanic: '2 Balls',
          description: 'Light parties\nG1 Left, G2 Right facing boss',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#5',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Left/Relative West',
              imageUrl: './m10s/toxic-2balls.webp',
              mask: getCircleMaskUrl(43.3, 75.9, 8)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Right/Relative East',
              imageUrl: './m10s/toxic-2balls.webp',
              mask: getCircleMaskUrl(41.9, 28.4, 8)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Left/Relative West',
              imageUrl: './m10s/toxic-2balls.webp',
              mask: getCircleMaskUrl(43.3, 75.9, 8)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Right/Relative East',
              imageUrl: './m10s/toxic-2balls.webp',
              mask: getCircleMaskUrl(41.9, 28.4, 8)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Left/Relative West',
              imageUrl: './m10s/toxic-2balls.webp',
              mask: getCircleMaskUrl(43.3, 75.9, 8)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Right/Relative East',
              imageUrl: './m10s/toxic-2balls.webp',
              mask: getCircleMaskUrl(41.9, 28.4, 8)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Left/Relative West',
              imageUrl: './m10s/toxic-2balls.webp',
              mask: getCircleMaskUrl(43.3, 75.9, 8)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Right/Relative East',
              imageUrl: './m10s/toxic-2balls.webp',
              mask: getCircleMaskUrl(41.9, 28.4, 8)
            }
          ]
        },
        {
          mechanic: '8 Balls',
          description: 'Spread\nG1 Left, G2 Right facing boss',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#6',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Left/Relative West',
              imageUrl: './m10s/toxic-8balls.webp',
              mask: getCircleMaskUrl(30.3, 68.6, 5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Right/Relative East',
              imageUrl: './m10s/toxic-8balls.webp',
              mask: getCircleMaskUrl(30.9, 31.9, 5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Left/Relative West',
              imageUrl: './m10s/toxic-8balls.webp',
              mask: getCircleMaskUrl(45.7, 69.1, 5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Right/Relative East',
              imageUrl: './m10s/toxic-8balls.webp',
              mask: getCircleMaskUrl(47.1, 30.5, 5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Left/Relative West',
              imageUrl: './m10s/toxic-8balls.webp',
              mask: getCircleMaskUrl(37.6, 83.1, 5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Right/Relative East',
              imageUrl: './m10s/toxic-8balls.webp',
              mask: getCircleMaskUrl(37.2, 17.9, 5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Left/Relative West',
              imageUrl: './m10s/toxic-8balls.webp',
              mask: getCircleMaskUrl(54.7, 83.8, 5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Right/Relative East',
              imageUrl: './m10s/toxic-8balls.webp',
              mask: getCircleMaskUrl(56.6, 20, 5)
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Reverse/Double-dip',
      mechs: [
        {
          mechanic: 'Proteans',
          description: '‼️BOSS RELATIVE CLOCK SPOTS',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#7',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Relative North',
              imageUrl: './m10s/toxic-protean1.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Relative South',
              imageUrl: './m10s/toxic-protean1.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Relative West',
              imageUrl: './m10s/toxic-protean1.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Relative East',
              imageUrl: './m10s/toxic-protean1.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Relative Southwest',
              imageUrl: './m10s/toxic-protean1.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Relative Southeast',
              imageUrl: './m10s/toxic-protean1.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Relative Northwest',
              imageUrl: './m10s/toxic-protean1.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Relative Northeast',
              imageUrl: './m10s/toxic-protean1.webp'
            }
          ]
        },
        {
          mechanic: '2nd Hit',
          description: 'Double-dip = Dodge into empty slice\nReverse = Stay',
          imageUrl: './m10s/toxic-protean1.webp',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#7'
        }
      ]
    },
    {
      phaseName: 'Deep Impact',
      description: 'Tankbuster baited on furthest player\nDoes a small KB',
      imageUrl: './m10s/toxic-impact.webp',
      url: 'https://raidplan.io/plan/syjvfhacdxz7awet#8'
    },
    {
      phaseName: 'Insane Air 1',
      mechs: [
        {
          mechanic: 'Start',
          description: 'G1 Northwest, G2 Southeast',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#9',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Northwest (Deep Blue)',
              imageUrl: './m10s/toxic-insane1-start.webp',
              mask: getCircleMaskUrl(40, 23.3, 12)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Southeast (Red Hot)',
              imageUrl: './m10s/toxic-insane1-start.webp',
              mask: getCircleMaskUrl(60.2, 75.5, 12)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Northwest (Deep Blue)',
              imageUrl: './m10s/toxic-insane1-start.webp',
              mask: getCircleMaskUrl(40, 23.3, 12)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Southeast (Red Hot)',
              imageUrl: './m10s/toxic-insane1-start.webp',
              mask: getCircleMaskUrl(60.2, 75.5, 12)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Northwest (Deep Blue)',
              imageUrl: './m10s/toxic-insane1-start.webp',
              mask: getCircleMaskUrl(40, 23.3, 12)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Southeast (Red Hot)',
              imageUrl: './m10s/toxic-insane1-start.webp',
              mask: getCircleMaskUrl(60.2, 75.5, 12)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Northwest (Deep Blue)',
              imageUrl: './m10s/toxic-insane1-start.webp',
              mask: getCircleMaskUrl(40, 23.3, 12)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Southeast (Red Hot)',
              imageUrl: './m10s/toxic-insane1-start.webp',
              mask: getCircleMaskUrl(60.2, 75.5, 12)
            }
          ]
        },
        {
          mechanic: 'Surfboards',
          description:
            'Up: Tankbuster AoE on closest\nSide: Light party stack\nDown: Proteans\n🔥 Fire leaves stuff on the ground\nOnly 1 of 4 can be a TB',
          imageUrl: './m10s/natus-surfboards.webp'
        },
        {
          mechanic: '1st Hit',
          description: 'MTHR clockwise for proteans',
          imageUrl: './m10s/toxic-insane1-1.webp',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#10'
        },
        {
          mechanic: '2nd Hit',
          description: 'MTHR clockwise for proteans',
          imageUrl: './m10s/toxic-insane1-2.webp',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#11'
        },
        {
          mechanic: '3rd Hit',
          description: 'MTHR clockwise for proteans',
          imageUrl: './m10s/toxic-insane1-3.webp',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#12'
        },
        {
          mechanic: '4th Hit',
          description: 'MTHR clockwise for proteans',
          imageUrl: './m10s/toxic-insane1-4.webp',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#13'
        }
      ]
    },
    {
      phaseName: 'Fire/Watersnaking',
      tag: 'snaking',
      mechs: firewatersnakingMechs
    },
    {
      phaseName: 'Deep Aerial',
      mechs: deepaerialMechs,
      tag: 'aerial'
    },
    {
      phaseName: 'Arena Split',
      mechs: [
        {
          mechanic: 'Start + Puddles',
          description: 'G1 West\nG2 East',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#20',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Northwest corner, south of R1',
              imageUrl: './m10s/toxic-split-start.webp',
              mask: getCircleMaskUrl(29.9, 26, 5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Northeast corner, south of R2',
              imageUrl: './m10s/toxic-split-start.webp',
              mask: getCircleMaskUrl(70.3, 25.4, 5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Southwest corner',
              imageUrl: './m10s/toxic-split-start.webp',
              mask: getCircleMaskUrl(29.9, 85.9, 5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Southeast corner',
              imageUrl: './m10s/toxic-split-start.webp',
              mask: getCircleMaskUrl(70.3, 86.1, 5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Southwest corner, north of H1',
              imageUrl: './m10s/toxic-split-start.webp',
              mask: getCircleMaskUrl(29.8, 74.8, 5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Southeast corner, north of H2',
              imageUrl: './m10s/toxic-split-start.webp',
              mask: getCircleMaskUrl(70.3, 74.4, 5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Northwest corner',
              imageUrl: './m10s/toxic-split-start.webp',
              mask: getCircleMaskUrl(29.9, 14.3, 5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Northeast corner',
              imageUrl: './m10s/toxic-split-start.webp',
              mask: getCircleMaskUrl(70.4, 14.1, 5)
            }
          ]
        },
        {
          mechanic: 'Proteans',
          description:
            'Double-dip = Dodge (far melees dodge to intercard)\nReverse = Stay (far melees dodge to cardinal)',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#21',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description:
                'North of middle\nIf far, Double-dip = dodge to intercard, Reverse = dodge to cardinal',
              imageUrl: './m10s/toxic-split-proteans.webp',
              mask: getMultiCircleMaskUrl([44.2, 44.9, 4], [69, 44.1, 4])
            },
            {
              role: 'Tank',
              party: 2,
              description:
                'North of middle\nIf far, Double-dip = dodge to intercard, Reverse = dodge to cardinal',
              imageUrl: './m10s/toxic-split-proteans.webp',
              mask: getMultiCircleMaskUrl([44.2, 44.9, 4], [69, 44.1, 4])
            },
            {
              role: 'Healer',
              party: 1,
              description: 'South',
              imageUrl: './m10s/toxic-split-proteans.webp',
              mask: getMultiCircleMaskUrl([44.9, 87.3, 4], [66.7, 63.9, 4])
            },
            {
              role: 'Healer',
              party: 2,
              description: 'South',
              imageUrl: './m10s/toxic-split-proteans.webp',
              mask: getMultiCircleMaskUrl([44.9, 87.3, 4], [66.7, 63.9, 4])
            },
            {
              role: 'Melee',
              party: 1,
              description:
                'South of middle\nIf far, Double-dip = dodge to intercard, Reverse = dodge to cardinal',
              imageUrl: './m10s/toxic-split-proteans.webp',
              mask: getMultiCircleMaskUrl([44.3, 54.9, 4], [69.2, 56, 4])
            },
            {
              role: 'Melee',
              party: 2,
              description:
                'South of middle\nIf far, Double-dip = dodge to intercard, Reverse = dodge to cardinal',
              imageUrl: './m10s/toxic-split-proteans.webp',
              mask: getMultiCircleMaskUrl([44.3, 54.9, 4], [69.2, 56, 4])
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'North',
              imageUrl: './m10s/toxic-split-proteans.webp',
              mask: getMultiCircleMaskUrl([44.7, 13, 4], [66.7, 35.7, 4])
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'North',
              imageUrl: './m10s/toxic-split-proteans.webp',
              mask: getMultiCircleMaskUrl([44.7, 13, 4], [66.7, 35.7, 4])
            }
          ]
        },
        {
          mechanic: 'Stacks',
          description: 'Pair stacks, then resolve KB + LP stacks',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#22',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Stack near 1 with R1',
              imageUrl: './m10s/toxic-split-stacks.webp',
              mask: getCircleMaskUrl(40, 26.2, 7)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Stack near 2 with R2',
              imageUrl: './m10s/toxic-split-stacks.webp',
              mask: getCircleMaskUrl(60.3, 26.7, 7)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Stack near 4 with M1',
              imageUrl: './m10s/toxic-split-stacks.webp',
              mask: getCircleMaskUrl(39.7, 75.1, 7)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Stack near 3 with M2',
              imageUrl: './m10s/toxic-split-stacks.webp',
              mask: getCircleMaskUrl(60.4, 73.5, 7)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Stack near 4 with H1',
              imageUrl: './m10s/toxic-split-stacks.webp',
              mask: getCircleMaskUrl(39.7, 75.1, 7)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Stack near 3 with H2',
              imageUrl: './m10s/toxic-split-stacks.webp',
              mask: getCircleMaskUrl(60.4, 73.5, 7)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Stack near 1 with MT',
              imageUrl: './m10s/toxic-split-stacks.webp',
              mask: getCircleMaskUrl(40, 26.2, 7)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Stack near 2 with OT',
              imageUrl: './m10s/toxic-split-stacks.webp',
              mask: getCircleMaskUrl(60.3, 26.7, 7)
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Insane Air 2',
      mechs: [
        {
          mechanic: 'Debuffs',
          description:
            'Same proximity debuff bait as Snaking\nStart at boss matching debuff color except Healers',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#23',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Start at boss matching debuff color',
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Start at boss matching debuff color',
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Start at boss OPPOSITE debuff color',
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Start at boss OPPOSITE debuff color',
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Start at boss matching debuff color',
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Start at boss matching debuff color',
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Start at boss matching debuff color',
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Start at boss matching debuff color',
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            }
          ]
        },
        {
          mechanic: 'Cleanses + Swaps',
          description: 'Cleanse order: H > M > R\nSwap order: M > R',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#23',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: "Swap if it's tankbuster\nMake sure to insta-swap if it's TB first",
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: "Swap if it's tankbuster\nMake sure to insta-swap if it's TB first",
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Just do mechanics and chill',
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Just do mechanics and chill',
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Swap after Healer cleanses for 2nd cleanse',
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Swap after Healer cleanses for 2nd cleanse',
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Swap after Melee cleanses for 3rd cleanse',
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Swap after Melee cleanses for 3rd cleanse',
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Double Alley-oop 2',
      mechs: [
        {
          mechanic: 'Proteans + Puddles',
          description: 'Double-dip = Dodge clockwise\nReverse = Stay',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#24',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'North (A marker)',
              imageUrl: './m10s/toxic-alley2-proteans.webp',
              mask: getCircleMaskUrl(49.9, 15.6, 5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'South (C marker)',
              imageUrl: './m10s/toxic-alley2-proteans.webp',
              mask: getCircleMaskUrl(50, 85, 5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'West (D marker)',
              imageUrl: './m10s/toxic-alley2-proteans.webp',
              mask: getCircleMaskUrl(31.5, 50.3, 5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'East (B marker)',
              imageUrl: './m10s/toxic-alley2-proteans.webp',
              mask: getCircleMaskUrl(68.8, 49.8, 5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Southwest (4 marker)',
              imageUrl: './m10s/toxic-alley2-proteans.webp',
              mask: getCircleMaskUrl(31.5, 82.9, 5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Southeast (3 marker)',
              imageUrl: './m10s/toxic-alley2-proteans.webp',
              mask: getCircleMaskUrl(68.3, 83.3, 5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Northwest (1 marker)',
              imageUrl: './m10s/toxic-alley2-proteans.webp',
              mask: getCircleMaskUrl(31.6, 17.3, 5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Northeast (2 marker)',
              imageUrl: './m10s/toxic-alley2-proteans.webp',
              mask: getCircleMaskUrl(68.6, 16.8, 5)
            }
          ]
        },
        {
          mechanic: 'TB + Party Stacks',
          description: 'Tank bait TB far\nStack under Deep Blue, rotate CW around Red Hot',
          imageUrl: './m10s/toxic-alley2-tb.webp',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#25'
        }
      ]
    }
  ]
};

export const hector: Strat = {
  stratName: 'hector',
  stratUrl: {
    'Video by Hector Hectorson': 'https://www.youtube.com/watch?v=17J1p4f2rIw',
    'Toxic Friends Raidplan': 'https://raidplan.io/plan/syjvfhacdxz7awet',
    'nomnom/Better Snaking Raidplan': 'https://raidplan.io/plan/Cmo_RpCDbsUSMV5c',
    'Parallel Aerial Raidplan': 'https://raidplan.io/plan/qWue79_md0YHCrnW'
  },
  description: '',
  strats: [
    {
      phaseName: 'Opening',
      mechs: [
        {
          mechanic: 'Flame Floater',
          description: '1st: CCW corner\n2nd: CCW wall\n3rd: Back in corner\n4th: Back at start',
          imageUrl: './m10s/toxic-floater.webp',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#1'
        },
        {
          mechanic: 'Alley-oop Inferno',
          description: 'Melee close, ranged far/yolo\nPull enemy back to mid ASAP after',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#2',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Close to boss',
              imageUrl: './m10s/toxic-inferno.webp',
              mask: getCircleMaskUrl(44, 73, 6)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Close to boss',
              imageUrl: './m10s/toxic-inferno.webp',
              mask: getCircleMaskUrl(33.9, 49.4, 6)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Far from boss',
              imageUrl: './m10s/toxic-inferno.webp',
              mask: getCircleMaskUrl(54.4, 77.7, 6)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Far from boss',
              imageUrl: './m10s/toxic-inferno.webp',
              mask: getCircleMaskUrl(32, 37.3, 6)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Close to boss',
              imageUrl: './m10s/toxic-inferno.webp',
              mask: getCircleMaskUrl(38, 69.5, 6)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Close to boss',
              imageUrl: './m10s/toxic-inferno.webp',
              mask: getCircleMaskUrl(36, 59.5, 6)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Far from boss',
              imageUrl: './m10s/toxic-inferno.webp',
              mask: getCircleMaskUrl(68.2, 78.4, 6)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Far from boss',
              imageUrl: './m10s/toxic-inferno.webp',
              mask: getCircleMaskUrl(61.1, 78.3, 6)
            }
          ]
        },
        {
          mechanic: 'Cutback Blaze',
          description:
            'Stack between boss and fire\nBait narrow slice behind boss\nSafe slice will bait opposite the furthest valid player',
          imageUrl: './m10s/toxic-cutback1.webp',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#3'
        },
        {
          mechanic: 'Pyrotation',
          description: '3 hit party stack\nEach stack leaves a puddle',
          imageUrl: './m10s/toxic-pyrotation.webp',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#4'
        }
      ]
    },
    {
      phaseName: 'Sickest Take-off',
      mechs: [
        {
          mechanic: '2 Balls',
          description: 'Light parties\nG1 Left, G2 Right facing boss',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#5',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Left/Relative West',
              imageUrl: './m10s/toxic-2balls.webp',
              mask: getCircleMaskUrl(43.3, 75.9, 8)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Right/Relative East',
              imageUrl: './m10s/toxic-2balls.webp',
              mask: getCircleMaskUrl(41.9, 28.4, 8)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Left/Relative West',
              imageUrl: './m10s/toxic-2balls.webp',
              mask: getCircleMaskUrl(43.3, 75.9, 8)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Right/Relative East',
              imageUrl: './m10s/toxic-2balls.webp',
              mask: getCircleMaskUrl(41.9, 28.4, 8)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Left/Relative West',
              imageUrl: './m10s/toxic-2balls.webp',
              mask: getCircleMaskUrl(43.3, 75.9, 8)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Right/Relative East',
              imageUrl: './m10s/toxic-2balls.webp',
              mask: getCircleMaskUrl(41.9, 28.4, 8)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Left/Relative West',
              imageUrl: './m10s/toxic-2balls.webp',
              mask: getCircleMaskUrl(43.3, 75.9, 8)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Right/Relative East',
              imageUrl: './m10s/toxic-2balls.webp',
              mask: getCircleMaskUrl(41.9, 28.4, 8)
            }
          ]
        },
        {
          mechanic: '8 Balls',
          description: 'Spread\nG1 Left, G2 Right facing boss',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#6',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Left/Relative West',
              imageUrl: './m10s/toxic-8balls.webp',
              mask: getCircleMaskUrl(30.3, 68.6, 5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Right/Relative East',
              imageUrl: './m10s/toxic-8balls.webp',
              mask: getCircleMaskUrl(30.9, 31.9, 5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Left/Relative West',
              imageUrl: './m10s/toxic-8balls.webp',
              mask: getCircleMaskUrl(45.7, 69.1, 5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Right/Relative East',
              imageUrl: './m10s/toxic-8balls.webp',
              mask: getCircleMaskUrl(47.1, 30.5, 5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Left/Relative West',
              imageUrl: './m10s/toxic-8balls.webp',
              mask: getCircleMaskUrl(37.6, 83.1, 5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Right/Relative East',
              imageUrl: './m10s/toxic-8balls.webp',
              mask: getCircleMaskUrl(37.2, 17.9, 5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Left/Relative West',
              imageUrl: './m10s/toxic-8balls.webp',
              mask: getCircleMaskUrl(54.7, 83.8, 5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Right/Relative East',
              imageUrl: './m10s/toxic-8balls.webp',
              mask: getCircleMaskUrl(56.6, 20, 5)
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Reverse/Double-dip',
      mechs: [
        {
          mechanic: 'Proteans',
          description: '‼️BOSS RELATIVE CLOCK SPOTS',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#7',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Relative North',
              imageUrl: './m10s/toxic-protean1.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Relative South',
              imageUrl: './m10s/toxic-protean1.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Relative West',
              imageUrl: './m10s/toxic-protean1.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Relative East',
              imageUrl: './m10s/toxic-protean1.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Relative Southwest',
              imageUrl: './m10s/toxic-protean1.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Relative Southeast',
              imageUrl: './m10s/toxic-protean1.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Relative Northwest',
              imageUrl: './m10s/toxic-protean1.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Relative Northeast',
              imageUrl: './m10s/toxic-protean1.webp'
            }
          ]
        },
        {
          mechanic: '2nd Hit',
          description: 'Double-dip = Dodge into empty slice\nReverse = Stay',
          imageUrl: './m10s/toxic-protean1.webp',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#7'
        }
      ]
    },
    {
      phaseName: 'Deep Impact',
      description: 'Tankbuster baited on furthest player\nDoes a small KB',
      imageUrl: './m10s/toxic-impact.webp',
      url: 'https://raidplan.io/plan/syjvfhacdxz7awet#8'
    },
    {
      phaseName: 'Insane Air 1',
      mechs: [
        {
          mechanic: 'Start',
          description: 'G1 Northwest, G2 Southeast',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#9',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Northwest (Deep Blue)',
              imageUrl: './m10s/toxic-insane1-start.webp',
              mask: getCircleMaskUrl(40, 23.3, 12)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Southeast (Red Hot)',
              imageUrl: './m10s/toxic-insane1-start.webp',
              mask: getCircleMaskUrl(60.2, 75.5, 12)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Northwest (Deep Blue)',
              imageUrl: './m10s/toxic-insane1-start.webp',
              mask: getCircleMaskUrl(40, 23.3, 12)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Southeast (Red Hot)',
              imageUrl: './m10s/toxic-insane1-start.webp',
              mask: getCircleMaskUrl(60.2, 75.5, 12)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Northwest (Deep Blue)',
              imageUrl: './m10s/toxic-insane1-start.webp',
              mask: getCircleMaskUrl(40, 23.3, 12)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Southeast (Red Hot)',
              imageUrl: './m10s/toxic-insane1-start.webp',
              mask: getCircleMaskUrl(60.2, 75.5, 12)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Northwest (Deep Blue)',
              imageUrl: './m10s/toxic-insane1-start.webp',
              mask: getCircleMaskUrl(40, 23.3, 12)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Southeast (Red Hot)',
              imageUrl: './m10s/toxic-insane1-start.webp',
              mask: getCircleMaskUrl(60.2, 75.5, 12)
            }
          ]
        },
        {
          mechanic: 'Surfboards',
          description:
            'Up: Tankbuster AoE on closest\nSide: Light party stack\nDown: Proteans\n🔥 Fire leaves stuff on the ground\nOnly 1 of 4 can be a TB',
          imageUrl: './m10s/natus-surfboards.webp'
        },
        {
          mechanic: '1st Hit',
          description: 'MTHR clockwise for proteans',
          imageUrl: './m10s/toxic-insane1-1.webp',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#10'
        },
        {
          mechanic: '2nd Hit',
          description: 'MTHR clockwise for proteans',
          imageUrl: './m10s/toxic-insane1-2.webp',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#11'
        },
        {
          mechanic: '3rd Hit',
          description: 'MTHR clockwise for proteans',
          imageUrl: './m10s/toxic-insane1-3.webp',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#12'
        },
        {
          mechanic: '4th Hit',
          description: 'MTHR clockwise for proteans',
          imageUrl: './m10s/toxic-insane1-4.webp',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#13'
        }
      ]
    },
    {
      phaseName: 'Fire/Watersnaking',
      tag: 'snaking',
      mechs: firewatersnakingMechs
    },
    {
      phaseName: 'Deep Aerial',
      mechs: deepaerialMechs,
      tag: 'aerial'
    },
    {
      phaseName: 'Arena Split',
      mechs: [
        {
          mechanic: 'Start + Puddles',
          description: 'G1 West\nG2 East',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#20',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Northwest corner, south of R1',
              imageUrl: './m10s/toxic-split-start.webp',
              mask: getCircleMaskUrl(29.9, 26, 5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Northeast corner, south of R2',
              imageUrl: './m10s/toxic-split-start.webp',
              mask: getCircleMaskUrl(70.3, 25.4, 5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Southwest corner',
              imageUrl: './m10s/toxic-split-start.webp',
              mask: getCircleMaskUrl(29.9, 85.9, 5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Southeast corner',
              imageUrl: './m10s/toxic-split-start.webp',
              mask: getCircleMaskUrl(70.3, 86.1, 5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Southwest corner, north of H1',
              imageUrl: './m10s/toxic-split-start.webp',
              mask: getCircleMaskUrl(29.8, 74.8, 5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Southeast corner, north of H2',
              imageUrl: './m10s/toxic-split-start.webp',
              mask: getCircleMaskUrl(70.3, 74.4, 5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Northwest corner',
              imageUrl: './m10s/toxic-split-start.webp',
              mask: getCircleMaskUrl(29.9, 14.3, 5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Northeast corner',
              imageUrl: './m10s/toxic-split-start.webp',
              mask: getCircleMaskUrl(70.4, 14.1, 5)
            }
          ]
        },
        {
          mechanic: 'Proteans',
          description:
            'Double-dip = Dodge (far melees dodge to intercard)\nReverse = Stay (far melees dodge to cardinal)',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#21',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description:
                'North of middle\nIf far, Double-dip = dodge to intercard, Reverse = dodge to cardinal',
              imageUrl: './m10s/toxic-split-proteans.webp',
              mask: getMultiCircleMaskUrl([44.2, 44.9, 4], [69, 44.1, 4])
            },
            {
              role: 'Tank',
              party: 2,
              description:
                'North of middle\nIf far, Double-dip = dodge to intercard, Reverse = dodge to cardinal',
              imageUrl: './m10s/toxic-split-proteans.webp',
              mask: getMultiCircleMaskUrl([44.2, 44.9, 4], [69, 44.1, 4])
            },
            {
              role: 'Healer',
              party: 1,
              description: 'South',
              imageUrl: './m10s/toxic-split-proteans.webp',
              mask: getMultiCircleMaskUrl([44.9, 87.3, 4], [66.7, 63.9, 4])
            },
            {
              role: 'Healer',
              party: 2,
              description: 'South',
              imageUrl: './m10s/toxic-split-proteans.webp',
              mask: getMultiCircleMaskUrl([44.9, 87.3, 4], [66.7, 63.9, 4])
            },
            {
              role: 'Melee',
              party: 1,
              description:
                'South of middle\nIf far, Double-dip = dodge to intercard, Reverse = dodge to cardinal',
              imageUrl: './m10s/toxic-split-proteans.webp',
              mask: getMultiCircleMaskUrl([44.3, 54.9, 4], [69.2, 56, 4])
            },
            {
              role: 'Melee',
              party: 2,
              description:
                'South of middle\nIf far, Double-dip = dodge to intercard, Reverse = dodge to cardinal',
              imageUrl: './m10s/toxic-split-proteans.webp',
              mask: getMultiCircleMaskUrl([44.3, 54.9, 4], [69.2, 56, 4])
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'North',
              imageUrl: './m10s/toxic-split-proteans.webp',
              mask: getMultiCircleMaskUrl([44.7, 13, 4], [66.7, 35.7, 4])
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'North',
              imageUrl: './m10s/toxic-split-proteans.webp',
              mask: getMultiCircleMaskUrl([44.7, 13, 4], [66.7, 35.7, 4])
            }
          ]
        },
        {
          mechanic: 'Stacks',
          description: 'Pair stacks, then resolve KB + LP stacks',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#22',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Stack near 1 with R1',
              imageUrl: './m10s/toxic-split-stacks.webp',
              mask: getCircleMaskUrl(40, 26.2, 7)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Stack near 2 with R2',
              imageUrl: './m10s/toxic-split-stacks.webp',
              mask: getCircleMaskUrl(60.3, 26.7, 7)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Stack near 4 with M1',
              imageUrl: './m10s/toxic-split-stacks.webp',
              mask: getCircleMaskUrl(39.7, 75.1, 7)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Stack near 3 with M2',
              imageUrl: './m10s/toxic-split-stacks.webp',
              mask: getCircleMaskUrl(60.4, 73.5, 7)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Stack near 4 with H1',
              imageUrl: './m10s/toxic-split-stacks.webp',
              mask: getCircleMaskUrl(39.7, 75.1, 7)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Stack near 3 with H2',
              imageUrl: './m10s/toxic-split-stacks.webp',
              mask: getCircleMaskUrl(60.4, 73.5, 7)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Stack near 1 with MT',
              imageUrl: './m10s/toxic-split-stacks.webp',
              mask: getCircleMaskUrl(40, 26.2, 7)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Stack near 2 with OT',
              imageUrl: './m10s/toxic-split-stacks.webp',
              mask: getCircleMaskUrl(60.3, 26.7, 7)
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Insane Air 2',
      mechs: [
        {
          mechanic: 'Debuffs',
          description:
            'Same proximity debuff bait as Snaking\nStart at boss matching debuff color except Healers',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#23',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Start at boss matching debuff color',
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Start at boss matching debuff color',
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Start at boss OPPOSITE debuff color',
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Start at boss OPPOSITE debuff color',
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Start at boss matching debuff color',
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Start at boss matching debuff color',
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Start at boss matching debuff color',
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Start at boss matching debuff color',
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            }
          ]
        },
        {
          mechanic: 'Cleanses + Swaps',
          description: 'Cleanse order: H > M > R\nSwap order: M > R',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#23',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: "Swap if it's tankbuster\nMake sure to insta-swap if it's TB first",
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: "Swap if it's tankbuster\nMake sure to insta-swap if it's TB first",
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Just do mechanics and chill',
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Just do mechanics and chill',
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Swap after Healer cleanses for 2nd cleanse',
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Swap after Healer cleanses for 2nd cleanse',
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Swap after Melee cleanses for 3rd cleanse',
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Swap after Melee cleanses for 3rd cleanse',
              imageUrl: './m10s/toxic-insane2-debuffs.webp'
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Double Alley-oop 2',
      mechs: [
        {
          mechanic: 'Proteans + Puddles',
          description: 'Double-dip = Dodge clockwise\nReverse = Stay',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#24',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'North (A marker)',
              imageUrl: './m10s/toxic-alley2-proteans.webp',
              mask: getCircleMaskUrl(49.9, 15.6, 5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'South (C marker)',
              imageUrl: './m10s/toxic-alley2-proteans.webp',
              mask: getCircleMaskUrl(50, 85, 5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'West (D marker)',
              imageUrl: './m10s/toxic-alley2-proteans.webp',
              mask: getCircleMaskUrl(31.5, 50.3, 5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'East (B marker)',
              imageUrl: './m10s/toxic-alley2-proteans.webp',
              mask: getCircleMaskUrl(68.8, 49.8, 5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Southwest (4 marker)',
              imageUrl: './m10s/toxic-alley2-proteans.webp',
              mask: getCircleMaskUrl(31.5, 82.9, 5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Southeast (3 marker)',
              imageUrl: './m10s/toxic-alley2-proteans.webp',
              mask: getCircleMaskUrl(68.3, 83.3, 5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Northwest (1 marker)',
              imageUrl: './m10s/toxic-alley2-proteans.webp',
              mask: getCircleMaskUrl(31.6, 17.3, 5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Northeast (2 marker)',
              imageUrl: './m10s/toxic-alley2-proteans.webp',
              mask: getCircleMaskUrl(68.6, 16.8, 5)
            }
          ]
        },
        {
          mechanic: 'TB + Party Stacks',
          description: 'Tank bait TB far\nStack under Deep Blue, rotate CW around Red Hot',
          imageUrl: './m10s/toxic-alley2-tb.webp',
          url: 'https://raidplan.io/plan/syjvfhacdxz7awet#25'
        }
      ]
    }
  ]
};

export const oce: Strat = {
  stratName: 'oce',
  stratUrl: {
    'M10S OCE V3 Raidplan by Valyntine Arkani@Ravana': 'https://raidplan.io/plan/eAJGfKMLsJAZBeHl',
    'Detailed Visual Guide by Hyulia': 'https://raidplan.io/plan/Qy730U_dC9zSjk0X',
    'Cheatsheet by Hyulia': 'https://drive.google.com/file/d/1rBtN18jpOjTmPEun4NjuoCA4pzuo5ZRZ/view?usp=sharing',
  },
  description: '',
  strats: [
    {
      phaseName: 'Opening',
      mechs: [
        {
          mechanic: 'Flame Floater',
          description: '1st: CCW corner\n2nd: Boss Start\n3rd: Next to Wall Fire\n4th: Back to Boss Start Next to Fire',
          imageUrl: './m10s/oce-0.webp',
          url: 'https://raidplan.io/plan/eAJGfKMLsJAZBeHl#1'
        },
        {
          mechanic: 'Alley-oop Inferno',
          description: "Melee close, ranged anywhere on the wall that isn't center\nPull enemy back to mid ASAP after puddle drop",
          url: 'https://raidplan.io/plan/eAJGfKMLsJAZBeHl#2',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Pull CW from where boss finishes to the new corner',
              imageUrl: './m10s/oce-1.webp',
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Close to boss',
              imageUrl: './m10s/oce-1.webp',
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Far from boss',
              imageUrl: './m10s/oce-1.webp',
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Far from boss',
              imageUrl: './m10s/oce-1.webp',
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Close to boss',
              imageUrl: './m10s/oce-1.webp',
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Close to boss',
              imageUrl: './m10s/oce-1.webp',
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Far from boss',
              imageUrl: './m10s/oce-1.webp',
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Far from boss',
              imageUrl: './m10s/oce-1.webp',
            }
          ]
        },
        {
          mechanic: 'Cutback Blaze',
          description:
            'Stack between boss and fire\nBait narrow slice behind boss\nSafe slice will bait opposite the furthest valid player',
          imageUrl: './m10s/oce-2.webp',
          url: 'https://raidplan.io/plan/eAJGfKMLsJAZBeHl#3'
        },
        {
          mechanic: 'Pyrotation',
          description: '3 hit party stack\nEach stack leaves a puddle',
          imageUrl: './m10s/oce-3.webp',
          url: 'https://raidplan.io/plan/eAJGfKMLsJAZBeHl#4'
        }
      ]
    },
    {
      phaseName: 'Sickest Take-off',
      mechs: [
        {
          mechanic: '2 Balls',
          description: 'Light parties\nG1 Left, G2 Right facing boss',
          url: 'https://raidplan.io/plan/eAJGfKMLsJAZBeHl#5',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Left/Relative West',
              imageUrl: './m10s/oce-4.webp',
              mask: getCircleMaskUrl(43.3, 75.9, 8)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Right/Relative East',
              imageUrl: './m10s/oce-4.webp',
              mask: getCircleMaskUrl(41.9, 28.4, 8)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Left/Relative West',
              imageUrl: './m10s/oce-4.webp',
              mask: getCircleMaskUrl(43.3, 75.9, 8)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Right/Relative East',
              imageUrl: './m10s/oce-4.webp',
              mask: getCircleMaskUrl(41.9, 28.4, 8)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Left/Relative West',
              imageUrl: './m10s/oce-4.webp',
              mask: getCircleMaskUrl(43.3, 75.9, 8)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Right/Relative East',
              imageUrl: './m10s/oce-4.webp',
              mask: getCircleMaskUrl(41.9, 28.4, 8)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Left/Relative West',
              imageUrl: './m10s/oce-4.webp',
              mask: getCircleMaskUrl(43.3, 75.9, 8)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Right/Relative East',
              imageUrl: './m10s/oce-4.webp',
              mask: getCircleMaskUrl(41.9, 28.4, 8)
            }
          ]
        },
        {
          mechanic: '8 Balls',
          description: 'Spread\nG1 Left, G2 Right facing boss',
          url: 'https://raidplan.io/plan/eAJGfKMLsJAZBeHl#6',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Left/Relative West',
              imageUrl: './m10s/oce-5.webp',
              mask: getCircleMaskUrl(30.3, 68.6, 5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Right/Relative East',
              imageUrl: './m10s/oce-5.webp',
              mask: getCircleMaskUrl(30.9, 31.9, 5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Left/Relative West',
              imageUrl: './m10s/oce-5.webp',
              mask: getCircleMaskUrl(45.7, 69.1, 5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Right/Relative East',
              imageUrl: './m10s/oce-5.webp',
              mask: getCircleMaskUrl(47.1, 30.5, 5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Left/Relative West',
              imageUrl: './m10s/oce-5.webp',
              mask: getCircleMaskUrl(37.6, 83.1, 5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Right/Relative East',
              imageUrl: './m10s/oce-5.webp',
              mask: getCircleMaskUrl(37.2, 17.9, 5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Left/Relative West',
              imageUrl: './m10s/oce-5.webp',
              mask: getCircleMaskUrl(54.7, 83.8, 5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Right/Relative East',
              imageUrl: './m10s/oce-5.webp',
              mask: getCircleMaskUrl(56.6, 20, 5)
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Reverse/Double-dip',
      mechs: [
        {
          mechanic: 'Proteans',
          description: '‼️BOSS RELATIVE CLOCK SPOTS',
          url: 'https://raidplan.io/plan/eAJGfKMLsJAZBeHl#7',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Relative North',
              imageUrl: './m10s/oce-6.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Relative South',
              imageUrl: './m10s/oce-6.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Relative West',
              imageUrl: './m10s/oce-6.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Relative East',
              imageUrl: './m10s/oce-6.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Relative Southwest',
              imageUrl: './m10s/oce-6.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Relative Southeast',
              imageUrl: './m10s/oce-6.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Relative Northwest',
              imageUrl: './m10s/oce-6.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Relative Northeast',
              imageUrl: './m10s/oce-6.webp'
            }
          ]
        },
        {
          mechanic: '2nd Hit',
          description: 'Double-dip = Dodge into empty slice\nReverse = Stay',
          imageUrl: './m10s/oce-6.webp',
          url: 'https://raidplan.io/plan/eAJGfKMLsJAZBeHl#7'
        }
      ]
    },
    {
      phaseName: 'Deep Impact',
      description: 'Tankbuster baited on furthest player\nDoes a small KB',
      imageUrl: './m10s/oce-7.webp',
      url: 'https://raidplan.io/plan/eAJGfKMLsJAZBeHl#8'
    },
    {
      phaseName: 'Insane Air 1',
      mechs: [
        {
          mechanic: 'Start',
          description: 'G1 Northwest, G2 Southeast',
          url: 'https://raidplan.io/plan/eAJGfKMLsJAZBeHl#9',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Northwest (Deep Blue)',
              imageUrl: './m10s/oce-8.webp',
              mask: getCircleMaskUrl(40, 23.3, 12)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Southeast (Red Hot)',
              imageUrl: './m10s/oce-8.webp',
              mask: getCircleMaskUrl(60.2, 75.5, 12)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Northwest (Deep Blue)',
              imageUrl: './m10s/oce-8.webp',
              mask: getCircleMaskUrl(40, 23.3, 12)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Southeast (Red Hot)',
              imageUrl: './m10s/oce-8.webp',
              mask: getCircleMaskUrl(60.2, 75.5, 12)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Northwest (Deep Blue)',
              imageUrl: './m10s/oce-8.webp',
              mask: getCircleMaskUrl(40, 23.3, 12)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Southeast (Red Hot)',
              imageUrl: './m10s/oce-8.webp',
              mask: getCircleMaskUrl(60.2, 75.5, 12)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Northwest (Deep Blue)',
              imageUrl: './m10s/oce-8.webp',
              mask: getCircleMaskUrl(40, 23.3, 12)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Southeast (Red Hot)',
              imageUrl: './m10s/oce-8.webp',
              mask: getCircleMaskUrl(60.2, 75.5, 12)
            }
          ]
        },
        {
          mechanic: 'Surfboards',
          description:
            'Up: Tankbuster AoE on closest\nSide: Light party stack\nDown: Proteans\n🔥 Fire leaves stuff on the ground\nOnly 1 of 4 can be a TB',
          imageUrl: './m10s/natus-surfboards.webp'
        },
        {
          mechanic: 'Proteans',
          description: 'MTHR clockwise for proteans',
          imageUrl: './m10s/oce-9.webp',
          url: 'https://raidplan.io/plan/eAJGfKMLsJAZBeHl#10'
        },
      ]
    },
    {
      phaseName: 'Fire/Watersnaking',
      tag: 'snaking',
      mechs: firewatersnakingMechs
    },
    {
      phaseName: 'Deep Aerial',
      mechs: deepaerialMechs,
      tag: 'aerial'
    },
    {
      phaseName: 'Arena Split',
      mechs: [
        {
          mechanic: 'Start + Puddles',
          description: 'G1 West\nG2 East',
          url: 'https://raidplan.io/plan/eAJGfKMLsJAZBeHl#26',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Northwest corner, south of D3',
              imageUrl: './m10s/oce-25.webp',
              mask: getCircleMaskUrl(29.9, 26, 5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Northeast corner, south of D4',
              imageUrl: './m10s/oce-25.webp',
              mask: getCircleMaskUrl(70.3, 25.4, 5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Southwest corner',
              imageUrl: './m10s/oce-25.webp',
              mask: getCircleMaskUrl(29.9, 85.9, 5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Southeast corner',
              imageUrl: './m10s/oce-25.webp',
              mask: getCircleMaskUrl(70.3, 86.1, 5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Southwest corner, north of H1',
              imageUrl: './m10s/oce-25.webp',
              mask: getCircleMaskUrl(29.8, 74.8, 5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Southeast corner, north of H2',
              imageUrl: './m10s/oce-25.webp',
              mask: getCircleMaskUrl(70.3, 74.4, 5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Northwest corner',
              imageUrl: './m10s/oce-25.webp',
              mask: getCircleMaskUrl(29.9, 14.3, 5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Northeast corner',
              imageUrl: './m10s/oce-25.webp',
              mask: getCircleMaskUrl(70.4, 14.1, 5)
            }
          ]
        },
        {
          mechanic: 'Proteans',
          description:
            'Double-dip = Dodge (far melees dodge to intercard)\nReverse = Stay (far melees dodge to cardinal)',
          url: 'https://raidplan.io/plan/eAJGfKMLsJAZBeHl#27',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description:
                'North of middle\nIf far, Double-dip = dodge to intercard, Reverse = dodge to cardinal',
              imageUrl: './m10s/oce-26.webp',
              mask: getMultiCircleMaskUrl([44.2, 44.9, 4], [69, 44.1, 4])
            },
            {
              role: 'Tank',
              party: 2,
              description:
                'North of middle\nIf far, Double-dip = dodge to intercard, Reverse = dodge to cardinal',
              imageUrl: './m10s/oce-26.webp',
              mask: getMultiCircleMaskUrl([44.2, 44.9, 4], [69, 44.1, 4])
            },
            {
              role: 'Healer',
              party: 1,
              description: 'South',
              imageUrl: './m10s/oce-26.webp',
              mask: getMultiCircleMaskUrl([44.9, 87.3, 4], [66.7, 63.9, 4])
            },
            {
              role: 'Healer',
              party: 2,
              description: 'South',
              imageUrl: './m10s/oce-26.webp',
              mask: getMultiCircleMaskUrl([44.9, 87.3, 4], [66.7, 63.9, 4])
            },
            {
              role: 'Melee',
              party: 1,
              description:
                'South of middle\nIf far, Double-dip = dodge to intercard, Reverse = dodge to cardinal',
              imageUrl: './m10s/oce-26.webp',
              mask: getMultiCircleMaskUrl([44.3, 54.9, 4], [69.2, 56, 4])
            },
            {
              role: 'Melee',
              party: 2,
              description:
                'South of middle\nIf far, Double-dip = dodge to intercard, Reverse = dodge to cardinal',
              imageUrl: './m10s/oce-26.webp',
              mask: getMultiCircleMaskUrl([44.3, 54.9, 4], [69.2, 56, 4])
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'North',
              imageUrl: './m10s/oce-26.webp',
              mask: getMultiCircleMaskUrl([44.7, 13, 4], [66.7, 35.7, 4])
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'North',
              imageUrl: './m10s/oce-26.webp',
              mask: getMultiCircleMaskUrl([44.7, 13, 4], [66.7, 35.7, 4])
            }
          ]
        },
        {
          mechanic: 'Stacks',
          description: 'Pair stacks, then resolve KB + LP stacks',
          url: 'https://raidplan.io/plan/eAJGfKMLsJAZBeHl#28',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Stack near 1 with D3',
              imageUrl: './m10s/oce-27.webp',
              mask: getCircleMaskUrl(40.2, 21.6, 7)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Stack near 2 with D4',
              imageUrl: './m10s/oce-27.webp',
              mask: getCircleMaskUrl(60.3, 21.6, 7)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Stack near 4 with M1',
              imageUrl: './m10s/oce-27.webp',
              mask: getCircleMaskUrl(40, 79.1, 7)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Stack near 3 with M2',
              imageUrl: './m10s/oce-27.webp',
              mask: getCircleMaskUrl(60.4, 79.1, 7)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Stack near 4 with H1',
              imageUrl: './m10s/oce-27.webp',
              mask: getCircleMaskUrl(40, 79.1, 7)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Stack near 3 with H2',
              imageUrl: './m10s/oce-27.webp',
              mask: getCircleMaskUrl(60.4, 79.1, 7)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Stack near 1 with MT',
              imageUrl: './m10s/oce-27.webp',
              mask: getCircleMaskUrl(40.2, 21.6, 7)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Stack near 2 with OT',
              imageUrl: './m10s/oce-27.webp',
              mask: getCircleMaskUrl(60.3, 21.6, 7)
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Insane Air 2',
      mechs: [
        {
          mechanic: 'Debuffs',
          description:
            'Same proximity debuff bait as Snaking\nStart at boss matching debuff color',
          url: 'https://raidplan.io/plan/eAJGfKMLsJAZBeHl#29',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Start at boss matching debuff color',
              imageUrl: './m10s/oce-28.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Start at boss matching debuff color',
              imageUrl: './m10s/oce-28.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Start at boss matching debuff color',
              imageUrl: './m10s/oce-28.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Start at boss matching debuff color',
              imageUrl: './m10s/oce-28.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Start at boss matching debuff color',
              imageUrl: './m10s/oce-28.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Start at boss matching debuff color',
              imageUrl: './m10s/oce-28.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Start at boss matching debuff color',
              imageUrl: './m10s/oce-28.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Start at boss matching debuff color',
              imageUrl: './m10s/oce-28.webp'
            }
          ]
        },
        {
          mechanic: 'Cleanses + Swaps',
          description: 'Swap BEFORE each Protean/Stack\nSwap order: H > M > R',
          url: 'https://raidplan.io/plan/eAJGfKMLsJAZBeHl#29',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: "Swap if it's tankbuster\nMake sure to insta-swap if it's TB first",
              imageUrl: './m10s/oce-28.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: "Swap if it's tankbuster\nMake sure to insta-swap if it's TB first",
              imageUrl: './m10s/oce-28.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Swap before first Protean/Stack for 1st cleanse',
              imageUrl: './m10s/oce-28.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Swap before first Protean/Stack for 1st cleanse',
              imageUrl: './m10s/oce-28.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Swap before second Protean/Stack for 2nd cleanse',
              imageUrl: './m10s/oce-28.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Swap before second Protean/Stack for 2nd cleanse',
              imageUrl: './m10s/oce-28.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Swap before third Protean/Stack for 3rd cleanse',
              imageUrl: './m10s/oce-28.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Swap before third Protean/Stack for 3rd cleanse',
              imageUrl: './m10s/oce-28.webp'
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Double Alley-oop 2',
      mechs: [
        {
          mechanic: 'Proteans + Puddles',
          description: 'Double-dip = Dodge clockwise\nReverse = Stay',
          url: 'https://raidplan.io/plan/eAJGfKMLsJAZBeHl#30',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'North (A marker)',
              imageUrl: './m10s/oce-29.webp',
              mask: getCircleMaskUrl(49.9, 15.6, 5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'South (C marker)',
              imageUrl: './m10s/oce-29.webp',
              mask: getCircleMaskUrl(50, 85, 5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'West (D marker)',
              imageUrl: './m10s/oce-29.webp',
              mask: getCircleMaskUrl(31.5, 50.3, 5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'East (B marker)',
              imageUrl: './m10s/oce-29.webp',
              mask: getCircleMaskUrl(68.8, 49.8, 5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Southwest (4 marker)',
              imageUrl: './m10s/oce-29.webp',
              mask: getCircleMaskUrl(31.5, 82.9, 5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Southeast (3 marker)',
              imageUrl: './m10s/oce-29.webp',
              mask: getCircleMaskUrl(68.3, 83.3, 5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Northwest (1 marker)',
              imageUrl: './m10s/oce-29.webp',
              mask: getCircleMaskUrl(31.6, 17.3, 5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Northeast (2 marker)',
              imageUrl: './m10s/oce-29.webp',
              mask: getCircleMaskUrl(68.6, 16.8, 5)
            }
          ]
        },
        {
          mechanic: 'TB + Party Stacks',
          description: 'OT bait TB far\nStack under Deep Blue, rotate CW around Red Hot',
          imageUrl: './m10s/oce-30.webp',
          url: 'https://raidplan.io/plan/eAJGfKMLsJAZBeHl#31'
        }
      ]
    }
  ]
};

// All strats as an array
export const m10sStrats: Strat[] = [hector, oce, toxic];
