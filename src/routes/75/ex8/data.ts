import type { Strat, FightConfig, StratRecord, PlayerMechStrat, MechanicStrat } from '$lib/types';
import { getCircleMaskUrl } from '$lib/utils';

const hectorIntermission: MechanicStrat[] = [
  {
    mechanic: 'Tower Prio',
    description: 'Stack with your pair near original intercard',
    imageUrl: './ex8/hector-intermission-tower-prio.webp'
  },
  {
    mechanic: 'Towers',
    description: '',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Take Northmost tower on West side',
        imageUrl: './ex8/hector-intermission-towers-markers.webp',
        mask: getCircleMaskUrl(28, 36, 5)
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Take Southmost tower on East side',
        imageUrl: './ex8/hector-intermission-towers-markers.webp',
        mask: getCircleMaskUrl(61, 88, 5)
      },
      {
        role: 'Healer',
        party: 1,
        description: 'Take Southmost tower on West side',
        imageUrl: './ex8/hector-intermission-towers-markers.webp',
        mask: getCircleMaskUrl(27, 63, 5)
      },
      {
        role: 'Healer',
        party: 2,
        description: 'Take Northmost tower on East side',
        imageUrl: './ex8/hector-intermission-towers-markers.webp',
        mask: getCircleMaskUrl(71, 70, 5)
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Take Southmost tower on West side',
        imageUrl: './ex8/hector-intermission-towers-markers.webp',
        mask: getCircleMaskUrl(27, 63, 5)
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Take Southmost tower on East side',
        imageUrl: './ex8/hector-intermission-towers-markers.webp',
        mask: getCircleMaskUrl(61, 88, 5)
      },
      {
        role: 'Ranged',
        party: 1,
        description: 'Take Northmost tower on West side',
        imageUrl: './ex8/hector-intermission-towers-markers.webp',
        mask: getCircleMaskUrl(28, 36, 5)
      },
      {
        role: 'Ranged',
        party: 2,
        description: 'Take Northmost tower on East side',
        imageUrl: './ex8/hector-intermission-towers-markers.webp',
        mask: getCircleMaskUrl(71, 70, 5)
      }
    ]
  },
  {
    mechanic: 'Markers',
    description: 'Point cleaves in gaps between towers',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Stay on West side, take North gap',
        imageUrl: './ex8/hector-intermission-towers-markers.webp'
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Stay on East side, take South gap',
        imageUrl: './ex8/hector-intermission-towers-markers.webp'
      },
      {
        role: 'Healer',
        party: 1,
        description: 'Stay on West side, take South gap',
        imageUrl: './ex8/hector-intermission-towers-markers.webp'
      },
      {
        role: 'Healer',
        party: 2,
        description: 'Stay on East side, take North gap',
        imageUrl: './ex8/hector-intermission-towers-markers.webp'
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Stay on West side, take South gap',
        imageUrl: './ex8/hector-intermission-towers-markers.webp'
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Stay on East side, take South gap',
        imageUrl: './ex8/hector-intermission-towers-markers.webp'
      },
      {
        role: 'Ranged',
        party: 1,
        description: 'Stay on West side, take North gap',
        imageUrl: './ex8/hector-intermission-towers-markers.webp'
      },
      {
        role: 'Ranged',
        party: 2,
        description: 'Stay on East side, take North gap',
        imageUrl: './ex8/hector-intermission-towers-markers.webp'
      }
    ]
  },
  {
    mechanic: 'Adds',
    description: 'Each role gets specific add mechanics',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Interrupt Drain Touch, then line Tankbuster'
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Interrupt Drain Touch, then line Tankbuster'
      },
      {
        role: 'Healer',
        party: 1,
        description: 'Esuna debuff'
      },
      {
        role: 'Healer',
        party: 2,
        description: 'Esuna debuff'
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Avoid gaze and kill add'
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Avoid gaze and kill add'
      },
      {
        role: 'Ranged',
        party: 1,
        description: 'Avoid gaze and kill add'
      },
      {
        role: 'Ranged',
        party: 2,
        description: 'Avoid gaze and kill add'
      }
    ]
  }
];

const snakeIntermission: MechanicStrat[] = [
  {
    mechanic: 'Tower Prio',
    description: 'THHT/RMMR Snake Prio\nG1 NW/CCW, G2 N/CW',
    imageUrl: './ex8/snake-intermission-start.webp'
  },
  {
    mechanic: 'Towers',
    description: '',
    url: 'https://raidplan.io/plan/kgH6GJydOCbUs1L_#20',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Take 1st tower CCW from NW',
        imageUrl: './ex8/snake-intermission-towers-markers.webp'
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Take 1st tower CW from A',
        imageUrl: './ex8/snake-intermission-towers-markers.webp'
      },
      {
        role: 'Healer',
        party: 1,
        description: 'Take 2nd tower CCW from NW',
        imageUrl: './ex8/snake-intermission-towers-markers.webp'
      },
      {
        role: 'Healer',
        party: 2,
        description: 'Take 2nd tower CW from A',
        imageUrl: './ex8/snake-intermission-towers-markers.webp'
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Take 2nd tower CCW from NW',
        imageUrl: './ex8/snake-intermission-towers-markers.webp'
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Take 2nd tower CW from A',
        imageUrl: './ex8/snake-intermission-towers-markers.webp'
      },
      {
        role: 'Ranged',
        party: 1,
        description: 'Take 1st tower CCW from NW',
        imageUrl: './ex8/snake-intermission-towers-markers.webp'
      },
      {
        role: 'Ranged',
        party: 2,
        description: 'Take 1st tower CW from A',
        imageUrl: './ex8/snake-intermission-towers-markers.webp'
      }
    ]
  },
  {
    mechanic: 'Markers',
    description: 'Fill in gaps with same snake prio',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Take 1st gap CCW from NW',
        imageUrl: './ex8/snake-intermission-towers-markers.webp'
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Take 1st gap CW from A',
        imageUrl: './ex8/snake-intermission-towers-markers.webp'
      },
      {
        role: 'Healer',
        party: 1,
        description: 'Take 2nd gap CCW from NW',
        imageUrl: './ex8/snake-intermission-towers-markers.webp'
      },
      {
        role: 'Healer',
        party: 2,
        description: 'Take 2nd gap CW from A',
        imageUrl: './ex8/snake-intermission-towers-markers.webp'
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Take 2nd gap CCW from NW',
        imageUrl: './ex8/snake-intermission-towers-markers.webp'
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Take 2nd gap CW from A',
        imageUrl: './ex8/snake-intermission-towers-markers.webp'
      },
      {
        role: 'Ranged',
        party: 1,
        description: 'Take 1st gap CCW from NW',
        imageUrl: './ex8/snake-intermission-towers-markers.webp'
      },
      {
        role: 'Ranged',
        party: 2,
        description: 'Take 1st gap CW from A',
        imageUrl: './ex8/snake-intermission-towers-markers.webp'
      }
    ]
  },
  {
    mechanic: 'Adds',
    description: 'Each role gets specific add mechanics',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Interrupt Drain Touch, then line Tankbuster'
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Interrupt Drain Touch, then line Tankbuster'
      },
      {
        role: 'Healer',
        party: 1,
        description: 'Esuna debuff'
      },
      {
        role: 'Healer',
        party: 2,
        description: 'Esuna debuff'
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Avoid gaze and kill add'
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Avoid gaze and kill add'
      },
      {
        role: 'Ranged',
        party: 1,
        description: 'Avoid gaze and kill add'
      },
      {
        role: 'Ranged',
        party: 2,
        description: 'Avoid gaze and kill add'
      }
    ]
  }
];

const acwIntermission: MechanicStrat[] = [
  {
    mechanic: 'Tower Prio',
    description: 'THHT/RMMR G1/G2\nStart at A and go Clockwise',
    imageUrl: './ex8/acw-intermission-start.webp'
  },
  {
    mechanic: 'Towers',
    description: '',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Take 1st tower CW from A',
        imageUrl: './ex8/acw-intermission-towers-markers.webp'
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Take 4th tower CW from A',
        imageUrl: './ex8/acw-intermission-towers-markers.webp'
      },
      {
        role: 'Healer',
        party: 1,
        description: 'Take 2nd tower CW from A',
        imageUrl: './ex8/acw-intermission-towers-markers.webp'
      },
      {
        role: 'Healer',
        party: 2,
        description: 'Take 3rd tower CW from A',
        imageUrl: './ex8/acw-intermission-towers-markers.webp'
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Take 2nd tower CW from A',
        imageUrl: './ex8/acw-intermission-towers-markers.webp'
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Take 3rd tower CW from A',
        imageUrl: './ex8/acw-intermission-towers-markers.webp'
      },
      {
        role: 'Ranged',
        party: 1,
        description: 'Take 1st tower CW from A',
        imageUrl: './ex8/acw-intermission-towers-markers.webp'
      },
      {
        role: 'Ranged',
        party: 2,
        description: 'Take 4th tower CW from A',
        imageUrl: './ex8/acw-intermission-towers-markers.webp'
      }
    ]
  },
  {
    mechanic: 'Markers',
    description: 'Fill in gaps CW from A',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Take 1st gap CW from A',
        imageUrl: './ex8/acw-intermission-towers-markers.webp'
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Take 4th gap CW from A',
        imageUrl: './ex8/acw-intermission-towers-markers.webp'
      },
      {
        role: 'Healer',
        party: 1,
        description: 'Take 2nd gap CW from A',
        imageUrl: './ex8/acw-intermission-towers-markers.webp'
      },
      {
        role: 'Healer',
        party: 2,
        description: 'Take 3rd gap CW from A',
        imageUrl: './ex8/acw-intermission-towers-markers.webp'
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Take 2nd gap CW from A',
        imageUrl: './ex8/acw-intermission-towers-markers.webp'
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Take 3rd gap CW from A',
        imageUrl: './ex8/acw-intermission-towers-markers.webp'
      },
      {
        role: 'Ranged',
        party: 1,
        description: 'Take 1st gap CW from A',
        imageUrl: './ex8/acw-intermission-towers-markers.webp'
      },
      {
        role: 'Ranged',
        party: 2,
        description: 'Take 4th gap CW from A',
        imageUrl: './ex8/acw-intermission-towers-markers.webp'
      }
    ]
  },
  {
    mechanic: 'Adds',
    description: 'Each role gets specific add mechanics',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Interrupt Drain Touch, then line Tankbuster'
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Interrupt Drain Touch, then line Tankbuster'
      },
      {
        role: 'Healer',
        party: 1,
        description: 'Esuna debuff'
      },
      {
        role: 'Healer',
        party: 2,
        description: 'Esuna debuff'
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Avoid gaze and kill add'
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Avoid gaze and kill add'
      },
      {
        role: 'Ranged',
        party: 1,
        description: 'Avoid gaze and kill add'
      },
      {
        role: 'Ranged',
        party: 2,
        description: 'Avoid gaze and kill add'
      }
    ]
  }
];

const intermissionStrats: Record<string, MechanicStrat[]> = {
  hector: hectorIntermission,
  snake: snakeIntermission,
  acw: acwIntermission
};

const cwcwHunts: MechanicStrat[] = [
  {
    mechanic: 'First Portals + First Tethers',
    description:
      'Tethers prepare to go CW of chaser start\nStay middle until portals go off, then bait chasers CW',
    imageUrl: './ex8/hector-hunts-cwcw-start.webp'
  },
  {
    mechanic: 'Second Tethers',
    description: 'Second tethers continue baiting chasers CW',
    imageUrl: './ex8/hector-hunts-cwcw-second.webp'
  },
  {
    mechanic: 'Second Portals',
    description: 'Second portals will be either Cardinals or Intercards safe',
    imageUrl: './ex8/hector-hunts-cwcw-portal.webp'
  }
];

const cwccwHunts: MechanicStrat[] = [
  {
    mechanic: 'First Portals + First Tethers',
    description: 'Tethers prepare to go CW\nStay middle until portals go off, then bait chasers CW',
    imageUrl: './ex8/hector-hunts-cwcw-start.webp'
  },
  {
    mechanic: 'Second Tethers',
    description: 'Second tethers bait chasers CCW after tether transfers',
    imageUrl: './ex8/cwccw-hunts-tethers.webp'
  },
  {
    mechanic: 'Second Portals',
    description: 'Second portals will be either Cardinals or Intercards safe',
    imageUrl: './ex8/hector-hunts-cwcw-portal.webp'
  }
];

const huntsStrats: Record<string, MechanicStrat[]> = {
  cwcw: cwcwHunts,
  cwccw: cwccwHunts
};

export const ex8FightConfig: FightConfig = {
  fightKey: 'ex8',
  title: 'The Unmaking (Extreme)',
  abbreviatedTitle: 'EX8',
  subtitle: 'EX8 Patch 7.5',
  cheatsheetTitle: 'EX8 Cheatsheet',
  strats: {
    hector: {
      label: 'Hector',
      defaults: {
        intermission: 'hector',
        hunts: 'cwcw'
      }
    },
    modified: {
      label: 'Modified (1L_)',
      defaults: {
        intermission: 'snake',
        hunts: 'cwccw'
      }
    }
  },
  toggles: [
    {
      key: 'intermission',
      label: 'Intermission',
      defaultValue: 'hector',
      options: [
        {
          value: 'hector',
          label: 'Hector',
          url: {
            name: 'Hector',
            url: 'https://www.youtube.com/watch?v=cA_WHJyXzyE'
          }
        },
        {
          value: 'snake',
          label: 'Snake',
          url: {
            name: 'modified enuo Raidplan (pg. 20)',
            url: 'https://raidplan.io/plan/kgH6GJydOCbUs1L_#20'
          }
        },
        {
          value: 'acw',
          label: 'A-CW',
          url: {
            name: 'The Unmaking Raidplan (pg. 19)',
            url: 'https://raidplan.io/plan/z6hesq84t7ewujw9#19'
          }
        }
      ]
    },
    {
      key: 'hunts',
      label: 'Hunts',
      defaultValue: 'cwcw',
      options: [
        {
          value: 'cwcw',
          label: 'CW to CW (Hector)'
        },
        {
          value: 'cwccw',
          label: 'CW to CCW',
          url: {
            name: 'The Unmaking Raidplan by Kroxy Cat (pg. 28)',
            url: 'https://raidplan.io/plan/z6hesq84t7ewujw9#28'
          }
        }
      ]
    }
  ],
  useMainPageTabs: false,
  defaultStratName: 'hector',
  timeline: [],
  splitTimeline: true,
  useEvenTimelineSpacing: true,
  stratDifferences: [
    {
      label: 'Hector',
      description:
        '1-A Markers, Color pairs on intercards (Supports rotate), original pairs (Northmost/Southmost) for Intermission, CW-CW for Hunts'
    },
    {
      label: 'Modified',
      description:
        'A-1 Markers, Color pairs on cardinals (DPS rotate), Snake prio for Intermission, CW-CCW for Hunts'
    }
  ]
};

export const hector: Strat = {
  stratName: 'hector',
  description: 'Source: Hector Hectorson',
  stratUrl: {
    'Video by Hector Hectorson': 'https://www.youtube.com/watch?v=cA_WHJyXzyE'
  },
  strats: [
    {
      phaseName: 'Setup',
      tag: 'setup',
      mechs: [
        {
          mechanic: 'Clockspots',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'North (A Marker)',
              imageUrl: './ex8/hector-clockspots.webp',
              mask: getCircleMaskUrl(50, 28.3, 5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'South (C Marker)',
              imageUrl: './ex8/hector-clockspots.webp',
              mask: getCircleMaskUrl(50, 68.6, 5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'West (D Marker)',
              imageUrl: './ex8/hector-clockspots.webp',
              mask: getCircleMaskUrl(39.4, 50, 5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'East (B Marker)',
              imageUrl: './ex8/hector-clockspots.webp',
              mask: getCircleMaskUrl(60.9, 50, 5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Southwest (4 Marker)',
              imageUrl: './ex8/hector-clockspots.webp',
              mask: getCircleMaskUrl(42.8, 61.5, 5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Southeast (3 Marker)',
              imageUrl: './ex8/hector-clockspots.webp',
              mask: getCircleMaskUrl(57.1, 62.9, 5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Northwest (1 Marker)',
              imageUrl: './ex8/hector-clockspots.webp',
              mask: getCircleMaskUrl(42.8, 37.1, 5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Northeast (2 Marker)',
              imageUrl: './ex8/hector-clockspots.webp',
              mask: getCircleMaskUrl(57.1, 37.1, 5)
            }
          ]
        },
        {
          mechanic: 'Pairs',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Northwest with R1',
              imageUrl: './ex8/hector-pairs.webp',
              mask: getCircleMaskUrl(43.2, 35, 6)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Southeast with M2',
              imageUrl: './ex8/hector-pairs.webp',
              mask: getCircleMaskUrl(56.1, 64.2, 6)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Southwest with M1',
              imageUrl: './ex8/hector-pairs.webp',
              mask: getCircleMaskUrl(41.8, 60.2, 6)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Northeast with R2',
              imageUrl: './ex8/hector-pairs.webp',
              mask: getCircleMaskUrl(58.1, 38.9, 6)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Southwest with H1',
              imageUrl: './ex8/hector-pairs.webp',
              mask: getCircleMaskUrl(41.8, 60.2, 6)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Southeast with OT',
              imageUrl: './ex8/hector-pairs.webp',
              mask: getCircleMaskUrl(56.1, 64.2, 6)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Northwest with MT',
              imageUrl: './ex8/hector-pairs.webp',
              mask: getCircleMaskUrl(43.2, 35, 6)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Northeast with H2',
              imageUrl: './ex8/hector-pairs.webp',
              mask: getCircleMaskUrl(58.1, 38.9, 6)
            }
          ]
        },
        {
          mechanic: 'Light Parties',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'West (D side)',
              imageUrl: './ex8/hector-lps.webp',
              mask: getCircleMaskUrl(42.3, 49.9, 7.5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'East (B side)',
              imageUrl: './ex8/hector-lps.webp',
              mask: getCircleMaskUrl(59.9, 51.1, 7.5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'West (D side)',
              imageUrl: './ex8/hector-lps.webp',
              mask: getCircleMaskUrl(42.3, 49.9, 7.5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'East (B side)',
              imageUrl: './ex8/hector-lps.webp',
              mask: getCircleMaskUrl(59.9, 51.1, 7.5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'West (D side)',
              imageUrl: './ex8/hector-lps.webp',
              mask: getCircleMaskUrl(42.3, 49.9, 7.5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'East (B side)',
              imageUrl: './ex8/hector-lps.webp',
              mask: getCircleMaskUrl(59.9, 51.1, 7.5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'West (D side)',
              imageUrl: './ex8/hector-lps.webp',
              mask: getCircleMaskUrl(42.3, 49.9, 7.5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'East (B side)',
              imageUrl: './ex8/hector-lps.webp',
              mask: getCircleMaskUrl(59.9, 51.1, 7.5)
            }
          ]
        },
        {
          mechanic: 'Role Orb Prio',
          description: 'THMR Clockwise',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: '1st pair with OT',
              imageUrl: './ex8/hector-orb-prio.webp',
              mask: getCircleMaskUrl(50.45, 32.5, 6)
            },
            {
              role: 'Tank',
              party: 2,
              description: '1st pair with MT',
              imageUrl: './ex8/hector-orb-prio.webp',
              mask: getCircleMaskUrl(50.45, 32.5, 6)
            },
            {
              role: 'Healer',
              party: 1,
              description: '2nd pair with H2',
              imageUrl: './ex8/hector-orb-prio.webp',
              mask: getCircleMaskUrl(65.5, 49.45, 6)
            },
            {
              role: 'Healer',
              party: 2,
              description: '2nd pair with H1',
              imageUrl: './ex8/hector-orb-prio.webp',
              mask: getCircleMaskUrl(65.5, 49.45, 6)
            },
            {
              role: 'Melee',
              party: 1,
              description: '3rd pair with M2',
              imageUrl: './ex8/hector-orb-prio.webp',
              mask: getCircleMaskUrl(52.45, 77.7, 6)
            },
            {
              role: 'Melee',
              party: 2,
              description: '3rd pair with M1',
              imageUrl: './ex8/hector-orb-prio.webp',
              mask: getCircleMaskUrl(52.45, 77.7, 6)
            },
            {
              role: 'Ranged',
              party: 1,
              description: '4th pair with R2',
              imageUrl: './ex8/hector-orb-prio.webp',
              mask: getCircleMaskUrl(39.2, 49.85, 6)
            },
            {
              role: 'Ranged',
              party: 2,
              description: '4th pair with R1',
              imageUrl: './ex8/hector-orb-prio.webp',
              mask: getCircleMaskUrl(39.2, 49.85, 6)
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Naught Grows (Single)',
      mechs: [
        {
          mechanic: 'Tethers/Wild Charge',
          description:
            'If single orb/tether, both tanks must stand between orb and party\nIf two orbs/tethers, light party stacks with tank between orb and party',
          imageUrl: './ex8/hector-grows-charge.webp'
        },
        {
          mechanic: 'Donut',
          description: 'Get close to void portal',
          imageUrl: './ex8/hector-grows-donut.webp'
        },
        {
          mechanic: 'Circle',
          description: 'Get far from void portal',
          imageUrl: './ex8/hector-grows-circle.webp'
        }
      ]
    },
    {
      phaseName: 'Meltdown',
      mechs: [
        {
          mechanic: 'Start + Pyretic',
          description:
            'Start underneath boss, stay until Pyretic debuff expires, then move towards clock spots',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Stack at center under boss',
              imageUrl: './ex8/hector-meltdown-start.webp',
              mask: getCircleMaskUrl(50, 52, 9)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Stack at center under boss',
              imageUrl: './ex8/hector-meltdown-start.webp',
              mask: getCircleMaskUrl(50, 52, 9)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Stack at center under boss',
              imageUrl: './ex8/hector-meltdown-start.webp',
              mask: getCircleMaskUrl(50, 52, 9)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Stack at center under boss',
              imageUrl: './ex8/hector-meltdown-start.webp',
              mask: getCircleMaskUrl(50, 52, 9)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Stack at center under boss',
              imageUrl: './ex8/hector-meltdown-start.webp',
              mask: getCircleMaskUrl(50, 52, 9)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Stack at center under boss',
              imageUrl: './ex8/hector-meltdown-start.webp',
              mask: getCircleMaskUrl(50, 52, 9)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Stack at center under boss',
              imageUrl: './ex8/hector-meltdown-start.webp',
              mask: getCircleMaskUrl(50, 52, 9)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Stack at center under boss',
              imageUrl: './ex8/hector-meltdown-start.webp',
              mask: getCircleMaskUrl(50, 52, 9)
            }
          ]
        },
        {
          mechanic: 'Spread',
          description: 'Avoid twister puddles in center, spread to clock spots for AoEs',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'North (A Marker)',
              imageUrl: './ex8/hector-meltdown-clocks.webp',
              mask: getCircleMaskUrl(50, 28, 5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'South (C Marker)',
              imageUrl: './ex8/hector-meltdown-clocks.webp',
              mask: getCircleMaskUrl(50, 75, 5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'West (D Marker)',
              imageUrl: './ex8/hector-meltdown-clocks.webp',
              mask: getCircleMaskUrl(36.5, 51, 5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'East (B Marker)',
              imageUrl: './ex8/hector-meltdown-clocks.webp',
              mask: getCircleMaskUrl(66, 51, 5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Southwest (4 Marker)',
              imageUrl: './ex8/hector-meltdown-clocks.webp',
              mask: getCircleMaskUrl(40, 68, 5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Southeast (3 Marker)',
              imageUrl: './ex8/hector-meltdown-clocks.webp',
              mask: getCircleMaskUrl(60, 67, 5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Northwest (1 Marker)',
              imageUrl: './ex8/hector-meltdown-clocks.webp',
              mask: getCircleMaskUrl(40.8, 35, 5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Northeast (2 Marker)',
              imageUrl: './ex8/hector-meltdown-clocks.webp',
              mask: getCircleMaskUrl(60.2, 35, 5)
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Dense/Airy Emptiness',
      mechs: [
        {
          mechanic: 'Dense Emptiness',
          description: 'Light party stacks on healers',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'West (D side)',
              imageUrl: './ex8/hector-dense.webp',
              mask: getCircleMaskUrl(40, 52, 7.5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'East (B side)',
              imageUrl: './ex8/hector-dense.webp',
              mask: getCircleMaskUrl(60, 52, 7.5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'West (D side)',
              imageUrl: './ex8/hector-dense.webp',
              mask: getCircleMaskUrl(40, 52, 7.5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'East (B side)',
              imageUrl: './ex8/hector-dense.webp',
              mask: getCircleMaskUrl(60, 52, 7.5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'West (D side)',
              imageUrl: './ex8/hector-dense.webp',
              mask: getCircleMaskUrl(40, 52, 7.5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'East (B side)',
              imageUrl: './ex8/hector-dense.webp',
              mask: getCircleMaskUrl(60, 52, 7.5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'West (D side)',
              imageUrl: './ex8/hector-dense.webp',
              mask: getCircleMaskUrl(40, 52, 7.5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'East (B side)',
              imageUrl: './ex8/hector-dense.webp',
              mask: getCircleMaskUrl(60, 52, 7.5)
            }
          ]
        },
        {
          mechanic: 'Airy Emptiness',
          description: 'Pair stacks on intercards',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Northwest with R1',
              imageUrl: './ex8/hector-airy.webp',
              mask: getCircleMaskUrl(41, 35, 6)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Southeast with M2',
              imageUrl: './ex8/hector-airy.webp',
              mask: getCircleMaskUrl(59, 65, 6)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Southwest with M1',
              imageUrl: './ex8/hector-airy.webp',
              mask: getCircleMaskUrl(41, 67, 6)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Northeast with R2',
              imageUrl: './ex8/hector-airy.webp',
              mask: getCircleMaskUrl(60, 34, 6)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Southwest with H1',
              imageUrl: './ex8/hector-airy.webp',
              mask: getCircleMaskUrl(41, 67, 6)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Southeast with OT',
              imageUrl: './ex8/hector-airy.webp',
              mask: getCircleMaskUrl(59, 65, 6)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Northwest with MT',
              imageUrl: './ex8/hector-airy.webp',
              mask: getCircleMaskUrl(41, 35, 6)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Northeast with H2',
              imageUrl: './ex8/hector-airy.webp',
              mask: getCircleMaskUrl(60, 34, 6)
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Gaze of the Void',
      mechs: [
        {
          mechanic: 'Dodges + New North',
          description:
            'Dodge rotating cones starting at glowing orb\nFirst two orbs will be Tank orbs/new North',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Stack near center, dodge cones',
              imageUrl: './ex8/hector-gaze-start.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Stack near center, dodge cones',
              imageUrl: './ex8/hector-gaze-start.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Stack near center, dodge cones',
              imageUrl: './ex8/hector-gaze-start.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Stack near center, dodge cones',
              imageUrl: './ex8/hector-gaze-start.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Stack near center, dodge cones',
              imageUrl: './ex8/hector-gaze-start.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Stack near center, dodge cones',
              imageUrl: './ex8/hector-gaze-start.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Stack near center, dodge cones',
              imageUrl: './ex8/hector-gaze-start.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Stack near center, dodge cones',
              imageUrl: './ex8/hector-gaze-start.webp'
            }
          ]
        },
        {
          mechanic: 'Role Orb Prio',
          description:
            'Starting orb + the one after it will be Tank orbs/new North\nTHMR going Clockwise',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'North (Big) orbs',
              imageUrl: './ex8/hector-gaze-orb-prio.webp',
              mask: getCircleMaskUrl(53, 30, 6)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'North (Big) orbs',
              imageUrl: './ex8/hector-gaze-orb-prio.webp',
              mask: getCircleMaskUrl(53, 30, 6)
            },
            {
              role: 'Healer',
              party: 1,
              description: '1st CW from Tank orbs',
              imageUrl: './ex8/hector-gaze-orb-prio.webp',
              mask: getCircleMaskUrl(67, 49, 6)
            },
            {
              role: 'Healer',
              party: 2,
              description: '1st CW from Tank orbs',
              imageUrl: './ex8/hector-gaze-orb-prio.webp',
              mask: getCircleMaskUrl(67, 49, 6)
            },
            {
              role: 'Melee',
              party: 1,
              description: '2nd CW from Tank orbs',
              imageUrl: './ex8/hector-gaze-orb-prio.webp',
              mask: getCircleMaskUrl(51, 70, 6)
            },
            {
              role: 'Melee',
              party: 2,
              description: '2nd CW from Tank orbs',
              imageUrl: './ex8/hector-gaze-orb-prio.webp',
              mask: getCircleMaskUrl(51, 70, 6)
            },
            {
              role: 'Ranged',
              party: 1,
              description: '3rd CW from Tank orbs',
              imageUrl: './ex8/hector-gaze-orb-prio.webp',
              mask: getCircleMaskUrl(38, 49, 6)
            },
            {
              role: 'Ranged',
              party: 2,
              description: '3rd CW from Tank orbs',
              imageUrl: './ex8/hector-gaze-orb-prio.webp',
              mask: getCircleMaskUrl(38, 49, 6)
            }
          ]
        },
        {
          mechanic: 'Orb Pops',
          description:
            'Pop Yellow tethered orb\nWait for Vuln to fall off\nPop Purple tethered orb\n‼️Orbs may not be next to each other\nCalculate THMR independently per color',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Pop North (Big) orbs',
              imageUrl: './ex8/hector-gaze-pops.webp',
              mask: getCircleMaskUrl(55, 31, 6)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Pop North (Big) orbs',
              imageUrl: './ex8/hector-gaze-pops.webp',
              mask: getCircleMaskUrl(55, 31, 6)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Pop 1st CW from Tank orbs',
              imageUrl: './ex8/hector-gaze-pops.webp',
              mask: getCircleMaskUrl(58, 67, 6)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Pop 1st CW from Tank orbs',
              imageUrl: './ex8/hector-gaze-pops.webp',
              mask: getCircleMaskUrl(58, 67, 6)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Pop 2nd CW from Tank orbs',
              imageUrl: './ex8/hector-gaze-pops.webp',
              mask: getCircleMaskUrl(48, 67, 6)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Pop 2nd CW from Tank orbs',
              imageUrl: './ex8/hector-gaze-pops.webp',
              mask: getCircleMaskUrl(48, 67, 6)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Pop 3rd CW from Tank orbs',
              imageUrl: './ex8/hector-gaze-pops.webp',
              mask: getCircleMaskUrl(40, 46, 6)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Pop 3rd CW from Tank orbs',
              imageUrl: './ex8/hector-gaze-pops.webp',
              mask: getCircleMaskUrl(40, 46, 6)
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Vacuum',
      mechs: [
        {
          mechanic: 'Center Safespot',
          description: 'Use center safespots away from short path',
          imageUrl: './ex8/hector-vacuum-start.webp'
        }
      ]
    },
    {
      phaseName: 'Deep Freeze',
      mechs: [
        {
          mechanic: 'Flares',
          description: 'Tanks on 4 and 1, one hitbox away + mit',
          imageUrl: './ex8/hector-freeze-flares.webp'
        },
        {
          mechanic: 'Freeze',
          description: 'Move when cast finishes, keep moving until debuff falls off',
          imageUrl: './ex8/hector-deep-freeze.webp'
        }
      ]
    },
    {
      phaseName: 'Intermission',
      tag: 'intermission',
      mechs: intermissionStrats
    },
    {
      phaseName: 'Naught Grows (Double)',
      mechs: [
        {
          mechanic: 'Overview',
          description:
            'Two circles/donuts, one on boss, one on portal\nSame wild charge orbs as before'
        },
        {
          mechanic: 'Donut + Downtime',
          description: 'If circle on boss, stay out of melee range',
          imageUrl: './ex8/hector-grows-double-donut.webp'
        },
        {
          mechanic: 'Circle + Close',
          description: 'If donut on boss, stay close\nCan adjust after donut/circle goes off',
          imageUrl: './ex8/hector-grows-double-circle.webp'
        }
      ]
    },
    {
      phaseName: 'Naught Wakes',
      mechs: [
        {
          mechanic: 'H Pattern',
          description: '',
          imageUrl: './ex8/hector-wakes-h.webp'
        },
        {
          mechanic: 'Middle',
          description: '',
          imageUrl: './ex8/hector-wakes-middle.webp'
        },
        {
          mechanic: 'Middle (Slanted)',
          description: '',
          imageUrl: './ex8/hector-wakes-middle-slanted.webp'
        },
        {
          mechanic: 'Cardinals Safe',
          description: '',
          imageUrl: './ex8/hector-wakes-cards.webp'
        },
        {
          mechanic: 'Intercards Safe',
          description: '',
          imageUrl: './ex8/hector-wakes-inters.webp'
        },
        {
          mechanic: 'Z/N',
          description: '',
          imageUrl: './ex8/hector-wakes-z.webp'
        },
        {
          mechanic: 'Party Stacks + Line AoE',
          description: '',
          imageUrl: './ex8/hector-wakes-stacks.webp'
        }
      ]
    },
    {
      phaseName: 'Vacuum + Meltdown',
      mechs: [
        {
          mechanic: 'Vacuum',
          description: 'Use inner safespot, then stand still for Pyretic',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Stack center inner safespot',
              imageUrl: './ex8/hector-vacuum-meltdown-start.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Stack center inner safespot',
              imageUrl: './ex8/hector-vacuum-meltdown-start.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Stack center inner safespot',
              imageUrl: './ex8/hector-vacuum-meltdown-start.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Stack center inner safespot',
              imageUrl: './ex8/hector-vacuum-meltdown-start.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Stack center inner safespot',
              imageUrl: './ex8/hector-vacuum-meltdown-start.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Stack center inner safespot',
              imageUrl: './ex8/hector-vacuum-meltdown-start.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Stack center inner safespot',
              imageUrl: './ex8/hector-vacuum-meltdown-start.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Stack center inner safespot',
              imageUrl: './ex8/hector-vacuum-meltdown-start.webp'
            }
          ]
        },
        {
          mechanic: 'Meltdown',
          description: 'Dodge twister puddles and spread to clocks',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'North',
              imageUrl: './ex8/hector-vacuum-meltdown-spread.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'South',
              imageUrl: './ex8/hector-vacuum-meltdown-spread.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'West',
              imageUrl: './ex8/hector-vacuum-meltdown-spread.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'East',
              imageUrl: './ex8/hector-vacuum-meltdown-spread.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Southwest',
              imageUrl: './ex8/hector-vacuum-meltdown-spread.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Southeast',
              imageUrl: './ex8/hector-vacuum-meltdown-spread.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Northwest',
              imageUrl: './ex8/hector-vacuum-meltdown-spread.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Northeast',
              imageUrl: './ex8/hector-vacuum-meltdown-spread.webp'
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Naught Hunts',
      tag: 'hunts',
      mechs: huntsStrats
    },
    {
      phaseName: 'Repeat Mechs + Enrage',
      mechs: [
        {
          mechanic: 'Remaining Mechanics',
          description:
            'Dimension Zero, Almagest, Naught Grows, Naught Wakes, Deep Freeze\nNaught Grows, Dimension Zero, Meteorain x2',
          imageUrl: './ex8/hector-enrage.webp'
        }
      ]
    }
  ]
};

export const modified: Strat = {
  stratName: 'modified',
  description:
    'Original Raidplan by Kroxy Cat from Adamantoise\nModified by Quill Fleche from Coeurl',
  stratUrl: {
    'modified enuo Raidplan': 'https://raidplan.io/plan/kgH6GJydOCbUs1L_'
  },
  strats: [
    {
      phaseName: 'Setup',
      tag: 'setup',
      mechs: [
        {
          mechanic: 'Clockspots',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'North',
              imageUrl: './ex8/hector-clockspots.webp',
              mask: getCircleMaskUrl(50, 28.3, 5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'South',
              imageUrl: './ex8/hector-clockspots.webp',
              mask: getCircleMaskUrl(50, 68.6, 5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'West',
              imageUrl: './ex8/hector-clockspots.webp',
              mask: getCircleMaskUrl(39.4, 50, 5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'East',
              imageUrl: './ex8/hector-clockspots.webp',
              mask: getCircleMaskUrl(60.9, 50, 5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Southwest',
              imageUrl: './ex8/hector-clockspots.webp',
              mask: getCircleMaskUrl(42.8, 61.5, 5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Southeast',
              imageUrl: './ex8/hector-clockspots.webp',
              mask: getCircleMaskUrl(57.1, 62.9, 5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Northwest',
              imageUrl: './ex8/hector-clockspots.webp',
              mask: getCircleMaskUrl(42.8, 37.1, 5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Northeast',
              imageUrl: './ex8/hector-clockspots.webp',
              mask: getCircleMaskUrl(57.1, 37.1, 5)
            }
          ]
        },
        {
          mechanic: 'Light Parties',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'West (D side)',
              imageUrl: './ex8/hector-lps.webp',
              mask: getCircleMaskUrl(42.3, 49.9, 7.5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'East (B side)',
              imageUrl: './ex8/hector-lps.webp',
              mask: getCircleMaskUrl(59.9, 51.1, 7.5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'West (D side)',
              imageUrl: './ex8/hector-lps.webp',
              mask: getCircleMaskUrl(42.3, 49.9, 7.5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'East (B side)',
              imageUrl: './ex8/hector-lps.webp',
              mask: getCircleMaskUrl(59.9, 51.1, 7.5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'West (D side)',
              imageUrl: './ex8/hector-lps.webp',
              mask: getCircleMaskUrl(42.3, 49.9, 7.5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'East (B side)',
              imageUrl: './ex8/hector-lps.webp',
              mask: getCircleMaskUrl(59.9, 51.1, 7.5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'West (D side)',
              imageUrl: './ex8/hector-lps.webp',
              mask: getCircleMaskUrl(42.3, 49.9, 7.5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'East (B side)',
              imageUrl: './ex8/hector-lps.webp',
              mask: getCircleMaskUrl(59.9, 51.1, 7.5)
            }
          ]
        },
        {
          mechanic: 'Role Orb Prio',
          description: 'THMR Clockwise',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: '1st pair with OT',
              imageUrl: './ex8/hector-orb-prio.webp',
              mask: getCircleMaskUrl(50.45, 32.5, 6)
            },
            {
              role: 'Tank',
              party: 2,
              description: '1st pair with MT',
              imageUrl: './ex8/hector-orb-prio.webp',
              mask: getCircleMaskUrl(50.45, 32.5, 6)
            },
            {
              role: 'Healer',
              party: 1,
              description: '2nd pair with H2',
              imageUrl: './ex8/hector-orb-prio.webp',
              mask: getCircleMaskUrl(65.5, 49.45, 6)
            },
            {
              role: 'Healer',
              party: 2,
              description: '2nd pair with H1',
              imageUrl: './ex8/hector-orb-prio.webp',
              mask: getCircleMaskUrl(65.5, 49.45, 6)
            },
            {
              role: 'Melee',
              party: 1,
              description: '3rd pair with M2',
              imageUrl: './ex8/hector-orb-prio.webp',
              mask: getCircleMaskUrl(52.45, 77.7, 6)
            },
            {
              role: 'Melee',
              party: 2,
              description: '3rd pair with M1',
              imageUrl: './ex8/hector-orb-prio.webp',
              mask: getCircleMaskUrl(52.45, 77.7, 6)
            },
            {
              role: 'Ranged',
              party: 1,
              description: '4th pair with R2',
              imageUrl: './ex8/hector-orb-prio.webp',
              mask: getCircleMaskUrl(39.2, 49.85, 6)
            },
            {
              role: 'Ranged',
              party: 2,
              description: '4th pair with R1',
              imageUrl: './ex8/hector-orb-prio.webp',
              mask: getCircleMaskUrl(39.2, 49.85, 6)
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Naught Grows (Single)',
      mechs: [
        {
          mechanic: 'Tethers/Wild Charge',
          description:
            'If single orb/tether, both tanks must stand between orb and party\nIf two orbs/tethers, light party stacks with tank between orb and party',
          imageUrl: './ex8/hector-grows-charge.webp'
        },
        {
          mechanic: 'Donut',
          description: 'Get close to void portal',
          imageUrl: './ex8/hector-grows-donut.webp'
        },
        {
          mechanic: 'Circle',
          description: 'Get far from void portal',
          imageUrl: './ex8/hector-grows-circle.webp'
        }
      ]
    },
    {
      phaseName: 'Meltdown',
      mechs: [
        {
          mechanic: 'Start + Pyretic',
          description:
            'Start underneath boss, stay until Pyretic debuff expires, then move towards clock spots',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Stack at center under boss',
              imageUrl: './ex8/hector-meltdown-start.webp',
              mask: getCircleMaskUrl(50, 52, 9)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Stack at center under boss',
              imageUrl: './ex8/hector-meltdown-start.webp',
              mask: getCircleMaskUrl(50, 52, 9)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Stack at center under boss',
              imageUrl: './ex8/hector-meltdown-start.webp',
              mask: getCircleMaskUrl(50, 52, 9)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Stack at center under boss',
              imageUrl: './ex8/hector-meltdown-start.webp',
              mask: getCircleMaskUrl(50, 52, 9)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Stack at center under boss',
              imageUrl: './ex8/hector-meltdown-start.webp',
              mask: getCircleMaskUrl(50, 52, 9)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Stack at center under boss',
              imageUrl: './ex8/hector-meltdown-start.webp',
              mask: getCircleMaskUrl(50, 52, 9)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Stack at center under boss',
              imageUrl: './ex8/hector-meltdown-start.webp',
              mask: getCircleMaskUrl(50, 52, 9)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Stack at center under boss',
              imageUrl: './ex8/hector-meltdown-start.webp',
              mask: getCircleMaskUrl(50, 52, 9)
            }
          ]
        },
        {
          mechanic: 'Spread',
          description: 'Avoid twister puddles in center, spread to clock spots for AoEs',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'North',
              imageUrl: './ex8/hector-meltdown-clocks.webp',
              mask: getCircleMaskUrl(50, 28, 5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'South',
              imageUrl: './ex8/hector-meltdown-clocks.webp',
              mask: getCircleMaskUrl(50, 75, 5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'West',
              imageUrl: './ex8/hector-meltdown-clocks.webp',
              mask: getCircleMaskUrl(36.5, 51, 5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'East',
              imageUrl: './ex8/hector-meltdown-clocks.webp',
              mask: getCircleMaskUrl(66, 51, 5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Southwest',
              imageUrl: './ex8/hector-meltdown-clocks.webp',
              mask: getCircleMaskUrl(40, 68, 5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Southeast',
              imageUrl: './ex8/hector-meltdown-clocks.webp',
              mask: getCircleMaskUrl(60, 67, 5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Northwest',
              imageUrl: './ex8/hector-meltdown-clocks.webp',
              mask: getCircleMaskUrl(40.8, 35, 5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Northeast',
              imageUrl: './ex8/hector-meltdown-clocks.webp',
              mask: getCircleMaskUrl(60.2, 35, 5)
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Dense/Airy Emptiness',
      mechs: [
        {
          mechanic: 'Dense Emptiness',
          description: 'Light party stacks on healers',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'West (D side)',
              imageUrl: './ex8/hector-dense.webp',
              mask: getCircleMaskUrl(40, 52, 7.5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'East (B side)',
              imageUrl: './ex8/hector-dense.webp',
              mask: getCircleMaskUrl(60, 52, 7.5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'West (D side)',
              imageUrl: './ex8/hector-dense.webp',
              mask: getCircleMaskUrl(40, 52, 7.5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'East (B side)',
              imageUrl: './ex8/hector-dense.webp',
              mask: getCircleMaskUrl(60, 52, 7.5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'West (D side)',
              imageUrl: './ex8/hector-dense.webp',
              mask: getCircleMaskUrl(40, 52, 7.5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'East (B side)',
              imageUrl: './ex8/hector-dense.webp',
              mask: getCircleMaskUrl(60, 52, 7.5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'West (D side)',
              imageUrl: './ex8/hector-dense.webp',
              mask: getCircleMaskUrl(40, 52, 7.5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'East (B side)',
              imageUrl: './ex8/hector-dense.webp',
              mask: getCircleMaskUrl(60, 52, 7.5)
            }
          ]
        },
        {
          mechanic: 'Airy Emptiness',
          description: 'Color partners on cardinals',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'North with R2',
              imageUrl: './ex8/modified-airy.webp',
              mask: getCircleMaskUrl(50, 35, 6)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'South with M1',
              imageUrl: './ex8/modified-airy.webp',
              mask: getCircleMaskUrl(50, 68, 6)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'West with R1',
              imageUrl: './ex8/modified-airy.webp',
              mask: getCircleMaskUrl(40, 50, 6)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'East with M2',
              imageUrl: './ex8/modified-airy.webp',
              mask: getCircleMaskUrl(62, 50, 6)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'South with OT',
              imageUrl: './ex8/modified-airy.webp',
              mask: getCircleMaskUrl(50, 68, 6)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'East with H2',
              imageUrl: './ex8/modified-airy.webp',
              mask: getCircleMaskUrl(62, 50, 6)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'West with H1',
              imageUrl: './ex8/modified-airy.webp',
              mask: getCircleMaskUrl(40, 50, 6)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'North with MT',
              imageUrl: './ex8/modified-airy.webp',
              mask: getCircleMaskUrl(50, 35, 6)
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Gaze of the Void',
      mechs: [
        {
          mechanic: 'Dodges + New North',
          description:
            'Dodge rotating cones starting at glowing orb\nFirst two orbs will be Tank orbs/new North',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Stack near center, dodge cones',
              imageUrl: './ex8/hector-gaze-start.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Stack near center, dodge cones',
              imageUrl: './ex8/hector-gaze-start.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Stack near center, dodge cones',
              imageUrl: './ex8/hector-gaze-start.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Stack near center, dodge cones',
              imageUrl: './ex8/hector-gaze-start.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Stack near center, dodge cones',
              imageUrl: './ex8/hector-gaze-start.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Stack near center, dodge cones',
              imageUrl: './ex8/hector-gaze-start.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Stack near center, dodge cones',
              imageUrl: './ex8/hector-gaze-start.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Stack near center, dodge cones',
              imageUrl: './ex8/hector-gaze-start.webp'
            }
          ]
        },
        {
          mechanic: 'Role Orb Prio',
          description:
            'Starting orb + the one after it will be Tank orbs/new North\nTHMR going Clockwise',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'North (Big) orbs',
              imageUrl: './ex8/hector-gaze-orb-prio.webp',
              mask: getCircleMaskUrl(53, 30, 6)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'North (Big) orbs',
              imageUrl: './ex8/hector-gaze-orb-prio.webp',
              mask: getCircleMaskUrl(53, 30, 6)
            },
            {
              role: 'Healer',
              party: 1,
              description: '1st CW from Tank orbs',
              imageUrl: './ex8/hector-gaze-orb-prio.webp',
              mask: getCircleMaskUrl(67, 49, 6)
            },
            {
              role: 'Healer',
              party: 2,
              description: '1st CW from Tank orbs',
              imageUrl: './ex8/hector-gaze-orb-prio.webp',
              mask: getCircleMaskUrl(67, 49, 6)
            },
            {
              role: 'Melee',
              party: 1,
              description: '2nd CW from Tank orbs',
              imageUrl: './ex8/hector-gaze-orb-prio.webp',
              mask: getCircleMaskUrl(51, 70, 6)
            },
            {
              role: 'Melee',
              party: 2,
              description: '2nd CW from Tank orbs',
              imageUrl: './ex8/hector-gaze-orb-prio.webp',
              mask: getCircleMaskUrl(51, 70, 6)
            },
            {
              role: 'Ranged',
              party: 1,
              description: '3rd CW from Tank orbs',
              imageUrl: './ex8/hector-gaze-orb-prio.webp',
              mask: getCircleMaskUrl(38, 49, 6)
            },
            {
              role: 'Ranged',
              party: 2,
              description: '3rd CW from Tank orbs',
              imageUrl: './ex8/hector-gaze-orb-prio.webp',
              mask: getCircleMaskUrl(38, 49, 6)
            }
          ]
        },
        {
          mechanic: 'Orb Pops',
          description:
            'Pop Yellow tethered orb\nWait for Vuln to fall off\nPop Purple tethered orb\n‼️Orbs may not be next to each other\nCalculate THMR independently per color',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Pop North (Big) orbs',
              imageUrl: './ex8/hector-gaze-pops.webp',
              mask: getCircleMaskUrl(55, 31, 6)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Pop North (Big) orbs',
              imageUrl: './ex8/hector-gaze-pops.webp',
              mask: getCircleMaskUrl(55, 31, 6)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Pop 1st CW from Tank orbs',
              imageUrl: './ex8/hector-gaze-pops.webp',
              mask: getCircleMaskUrl(58, 67, 6)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Pop 1st CW from Tank orbs',
              imageUrl: './ex8/hector-gaze-pops.webp',
              mask: getCircleMaskUrl(58, 67, 6)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Pop 2nd CW from Tank orbs',
              imageUrl: './ex8/hector-gaze-pops.webp',
              mask: getCircleMaskUrl(48, 67, 6)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Pop 2nd CW from Tank orbs',
              imageUrl: './ex8/hector-gaze-pops.webp',
              mask: getCircleMaskUrl(48, 67, 6)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Pop 3rd CW from Tank orbs',
              imageUrl: './ex8/hector-gaze-pops.webp',
              mask: getCircleMaskUrl(40, 46, 6)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Pop 3rd CW from Tank orbs',
              imageUrl: './ex8/hector-gaze-pops.webp',
              mask: getCircleMaskUrl(40, 46, 6)
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Vacuum',
      mechs: [
        {
          mechanic: 'Center Safespot',
          description: 'Use center safespots away from short path',
          imageUrl: './ex8/hector-vacuum-start.webp'
        }
      ]
    },
    {
      phaseName: 'Deep Freeze',
      mechs: [
        {
          mechanic: 'Flares',
          description: 'Tanks on NW and NE, one hitbox away + mit',
          imageUrl: './ex8/hector-freeze-flares.webp'
        },
        {
          mechanic: 'Freeze',
          description: 'Move when cast finishes, keep moving until debuff falls off',
          imageUrl: './ex8/hector-deep-freeze.webp'
        }
      ]
    },
    {
      phaseName: 'Intermission',
      tag: 'intermission',
      mechs: intermissionStrats
    },
    {
      phaseName: 'Naught Grows (Double)',
      mechs: [
        {
          mechanic: 'Overview',
          description:
            'Two circles/donuts, one on boss, one on portal\nSame wild charge orbs as before'
        },
        {
          mechanic: 'Donut + Downtime',
          description: 'If circle on boss, stay out of melee range',
          imageUrl: './ex8/hector-grows-double-donut.webp'
        },
        {
          mechanic: 'Circle + Close',
          description: 'If donut on boss, stay close\nCan adjust after donut/circle goes off',
          imageUrl: './ex8/hector-grows-double-circle.webp'
        }
      ]
    },
    {
      phaseName: 'Naught Wakes',
      mechs: [
        {
          mechanic: 'H Pattern',
          description: '',
          imageUrl: './ex8/hector-wakes-h.webp'
        },
        {
          mechanic: 'Middle',
          description: '',
          imageUrl: './ex8/hector-wakes-middle.webp'
        },
        {
          mechanic: 'Middle (Slanted)',
          description: '',
          imageUrl: './ex8/hector-wakes-middle-slanted.webp'
        },
        {
          mechanic: 'Cardinals Safe',
          description: '',
          imageUrl: './ex8/hector-wakes-cards.webp'
        },
        {
          mechanic: 'Intercards Safe',
          description: '',
          imageUrl: './ex8/hector-wakes-inters.webp'
        },
        {
          mechanic: 'Z/N',
          description: '',
          imageUrl: './ex8/hector-wakes-z.webp'
        },
        {
          mechanic: 'Party Stacks + Line AoE',
          description: '',
          imageUrl: './ex8/hector-wakes-stacks.webp'
        }
      ]
    },
    {
      phaseName: 'Vacuum + Meltdown',
      mechs: [
        {
          mechanic: 'Vacuum',
          description: 'Use inner safespot, then stand still for Pyretic',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Stack center inner safespot',
              imageUrl: './ex8/hector-vacuum-meltdown-start.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Stack center inner safespot',
              imageUrl: './ex8/hector-vacuum-meltdown-start.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Stack center inner safespot',
              imageUrl: './ex8/hector-vacuum-meltdown-start.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Stack center inner safespot',
              imageUrl: './ex8/hector-vacuum-meltdown-start.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Stack center inner safespot',
              imageUrl: './ex8/hector-vacuum-meltdown-start.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Stack center inner safespot',
              imageUrl: './ex8/hector-vacuum-meltdown-start.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Stack center inner safespot',
              imageUrl: './ex8/hector-vacuum-meltdown-start.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Stack center inner safespot',
              imageUrl: './ex8/hector-vacuum-meltdown-start.webp'
            }
          ]
        },
        {
          mechanic: 'Meltdown',
          description: 'Dodge twister puddles and spread to clocks',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'North',
              imageUrl: './ex8/hector-vacuum-meltdown-spread.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'South',
              imageUrl: './ex8/hector-vacuum-meltdown-spread.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'West',
              imageUrl: './ex8/hector-vacuum-meltdown-spread.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'East',
              imageUrl: './ex8/hector-vacuum-meltdown-spread.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Southwest',
              imageUrl: './ex8/hector-vacuum-meltdown-spread.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Southeast',
              imageUrl: './ex8/hector-vacuum-meltdown-spread.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Northwest',
              imageUrl: './ex8/hector-vacuum-meltdown-spread.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Northeast',
              imageUrl: './ex8/hector-vacuum-meltdown-spread.webp'
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Naught Hunts',
      tag: 'hunts',
      mechs: huntsStrats
    },
    {
      phaseName: 'Repeat Mechs + Enrage',
      mechs: [
        {
          mechanic: 'Remaining Mechanics',
          description:
            'Dimension Zero, Almagest, Naught Grows, Naught Wakes, Deep Freeze\nNaught Grows, Dimension Zero, Meteorain x2',
          imageUrl: './ex8/hector-enrage.webp'
        }
      ]
    }
  ]
};

// All strats as an array
export const ex8Strats: Strat[] = [hector, modified];
