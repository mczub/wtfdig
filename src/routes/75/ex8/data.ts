import type { Strat, FightConfig, StratRecord, PlayerMechStrat, MechanicStrat } from '$lib/types';
import {
  getStringObject,
  getStratArray,
  getCircleMaskUrl,
  getMultiCircleMaskUrl,
  getRectMaskUrl
} from '$lib/utils';

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
        mask: getMultiCircleMaskUrl([35.2, 14.5, 5], [62.9, 15.8, 5])
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Take Southmost tower on East side',
        imageUrl: './ex8/hector-intermission-towers-markers.webp',
        mask: getMultiCircleMaskUrl([35.2, 14.5, 5], [62.9, 15.8, 5])
      },
      {
        role: 'Healer',
        party: 1,
        description: 'Take Southmost tower on West side',
        imageUrl: './ex8/hector-intermission-towers-markers.webp',
        mask: getMultiCircleMaskUrl([35.4, 83.5, 5], [61.1, 87.3, 5])
      },
      {
        role: 'Healer',
        party: 2,
        description: 'Take Northmost tower on East side',
        imageUrl: './ex8/hector-intermission-towers-markers.webp',
        mask: getMultiCircleMaskUrl([35.4, 83.5, 5], [61.1, 87.3, 5])
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Take Southmost tower on West side',
        imageUrl: './ex8/hector-intermission-towers-markers.webp',
        mask: getMultiCircleMaskUrl([35.2, 14.5, 5], [62.9, 15.8, 5])
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Take Southmost tower on East side',
        imageUrl: './ex8/hector-intermission-towers-markers.webp',
        mask: getMultiCircleMaskUrl([35.2, 14.5, 5], [62.9, 15.8, 5])
      },
      {
        role: 'Ranged',
        party: 1,
        description: 'Take Northmost tower on West side',
        imageUrl: './ex8/hector-intermission-towers-markers.webp',
        mask: getMultiCircleMaskUrl([35.4, 83.5, 5], [61.1, 87.3, 5])
      },
      {
        role: 'Ranged',
        party: 2,
        description: 'Take Northmost tower on East side',
        imageUrl: './ex8/hector-intermission-towers-markers.webp',
        mask: getMultiCircleMaskUrl([35.4, 83.5, 5], [61.1, 87.3, 5])
      }
    ],
  },
  {
    mechanic: 'Markers',
    description: 'Point cleaves in gaps between towers',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Stay on West side, take North gap',
        imageUrl: './ex8/hector-intermission-towers-markers.webp',
        mask: getMultiCircleMaskUrl([38.2, 63.6, 5], [88.3, 15.1, 5])
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Stay on East side, take South gap',
        imageUrl: './ex8/hector-intermission-towers-markers.webp',
        mask: getMultiCircleMaskUrl([38.2, 63.6, 5], [88.3, 15.1, 5])
      },
      {
        role: 'Healer',
        party: 1,
        description: 'Stay on West side, take South gap',
        imageUrl: './ex8/hector-intermission-towers-markers.webp',
        mask: getMultiCircleMaskUrl([8.7, 85.8, 5], [61.5, 20.6, 5])
      },
      {
        role: 'Healer',
        party: 2,
        description: 'Stay on East side, take North gap',
        imageUrl: './ex8/hector-intermission-towers-markers.webp',
        mask: getMultiCircleMaskUrl([8.7, 85.8, 5], [61.5, 20.6, 5])
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Stay on West side, take South gap',
        imageUrl: './ex8/hector-intermission-towers-markers.webp',
        mask: getMultiCircleMaskUrl([38.2, 63.6, 5], [88.3, 15.1, 5])
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Stay on East side, take South gap',
        imageUrl: './ex8/hector-intermission-towers-markers.webp',
        mask: getMultiCircleMaskUrl([38.2, 63.6, 5], [88.3, 15.1, 5])
      },
      {
        role: 'Ranged',
        party: 1,
        description: 'Stay on West side, take North gap',
        imageUrl: './ex8/hector-intermission-towers-markers.webp',
        mask: getMultiCircleMaskUrl([8.7, 85.8, 5], [61.5, 20.6, 5])
      },
      {
        role: 'Ranged',
        party: 2,
        description: 'Stay on East side, take North gap',
        imageUrl: './ex8/hector-intermission-towers-markers.webp',
        mask: getMultiCircleMaskUrl([8.7, 85.8, 5], [61.5, 20.6, 5])
      }
    ],
  },
  {
    mechanic: 'Adds',
    description: 'Each role gets specific add mechanics',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Interrupt Drain Touch, then line Tankbuster',
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Interrupt Drain Touch, then line Tankbuster',
      },
      {
        role: 'Healer',
        party: 1,
        description: 'Esuna debuff',
      },
      {
        role: 'Healer',
        party: 2,
        description: 'Esuna debuff',
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Avoid gaze and kill add',
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Avoid gaze and kill add',
      },
      {
        role: 'Ranged',
        party: 1,
        description: 'Avoid gaze and kill add',
      },
      {
        role: 'Ranged',
        party: 2,
        description: 'Avoid gaze and kill add',
      }
    ],
  }
];

const snakeIntermission: MechanicStrat[] = [
  {
    mechanic: 'Tower Prio',
    description: 'THHT/RMMR Snake Prio\nG1 NW/CCW, G2 N/CW',
    imageUrl: './ex7/arcane-start.webp'
  },
  {
    mechanic: 'Towers',
    description: '',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Take Northmost tower on West side',
        imageUrl: './ex7/arcane-stacks-ew.webp',
        mask: getMultiCircleMaskUrl([35.2, 14.5, 5], [62.9, 15.8, 5])
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Take Southmost tower on East side',
        imageUrl: './ex7/arcane-stacks-ew.webp',
        mask: getMultiCircleMaskUrl([35.2, 14.5, 5], [62.9, 15.8, 5])
      },
      {
        role: 'Healer',
        party: 1,
        description: 'Take Southmost tower on West side',
        imageUrl: './ex7/arcane-stacks-ew.webp',
        mask: getMultiCircleMaskUrl([35.4, 83.5, 5], [61.1, 87.3, 5])
      },
      {
        role: 'Healer',
        party: 2,
        description: 'Take Northmost tower on East side',
        imageUrl: './ex7/arcane-stacks-ew.webp',
        mask: getMultiCircleMaskUrl([35.4, 83.5, 5], [61.1, 87.3, 5])
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Take Southmost tower on West side',
        imageUrl: './ex7/arcane-stacks-ew.webp',
        mask: getMultiCircleMaskUrl([35.2, 14.5, 5], [62.9, 15.8, 5])
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Take Southmost tower on East side',
        imageUrl: './ex7/arcane-stacks-ew.webp',
        mask: getMultiCircleMaskUrl([35.2, 14.5, 5], [62.9, 15.8, 5])
      },
      {
        role: 'Ranged',
        party: 1,
        description: 'Take Northmost tower on West side',
        imageUrl: './ex7/arcane-stacks-ew.webp',
        mask: getMultiCircleMaskUrl([35.4, 83.5, 5], [61.1, 87.3, 5])
      },
      {
        role: 'Ranged',
        party: 2,
        description: 'Take Northmost tower on East side',
        imageUrl: './ex7/arcane-stacks-ew.webp',
        mask: getMultiCircleMaskUrl([35.4, 83.5, 5], [61.1, 87.3, 5])
      }
    ],
  },
  {
    mechanic: 'Markers',
    description: 'Tank/Melee North/East-ish\nHealer/Ranged South/West-ish',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Stay on West side, take North gap',
        imageUrl: './ex7/arcane-stacks-ns.webp',
        mask: getMultiCircleMaskUrl([38.2, 63.6, 5], [88.3, 15.1, 5])
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Stay on East side, take South gap',
        imageUrl: './ex7/arcane-stacks-ns.webp',
        mask: getMultiCircleMaskUrl([38.2, 63.6, 5], [88.3, 15.1, 5])
      },
      {
        role: 'Healer',
        party: 1,
        description: 'Stay on West side, take South gap',
        imageUrl: './ex7/arcane-stacks-ns.webp',
        mask: getMultiCircleMaskUrl([8.7, 85.8, 5], [61.5, 20.6, 5])
      },
      {
        role: 'Healer',
        party: 2,
        description: 'Stay on East side, take North gap',
        imageUrl: './ex7/arcane-stacks-ns.webp',
        mask: getMultiCircleMaskUrl([8.7, 85.8, 5], [61.5, 20.6, 5])
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Stay on West side, take South gap',
        imageUrl: './ex7/arcane-stacks-ns.webp',
        mask: getMultiCircleMaskUrl([38.2, 63.6, 5], [88.3, 15.1, 5])
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Stay on East side, take South gap',
        imageUrl: './ex7/arcane-stacks-ns.webp',
        mask: getMultiCircleMaskUrl([38.2, 63.6, 5], [88.3, 15.1, 5])
      },
      {
        role: 'Ranged',
        party: 1,
        description: 'Stay on West side, take North gap',
        imageUrl: './ex7/arcane-stacks-ns.webp',
        mask: getMultiCircleMaskUrl([8.7, 85.8, 5], [61.5, 20.6, 5])
      },
      {
        role: 'Ranged',
        party: 2,
        description: 'Stay on East side, take North gap',
        imageUrl: './ex7/arcane-stacks-ns.webp',
        mask: getMultiCircleMaskUrl([8.7, 85.8, 5], [61.5, 20.6, 5])
      }
    ],
  },
  {
    mechanic: 'Adds',
    description: 'Each role gets specific add mechanics',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Interrupt Drain Touch, then line Tankbuster',
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Interrupt Drain Touch, then line Tankbuster',
      },
      {
        role: 'Healer',
        party: 1,
        description: 'Esuna debuff',
      },
      {
        role: 'Healer',
        party: 2,
        description: 'Esuna debuff',
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Avoid gaze and kill add',
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Avoid gaze and kill add',
      },
      {
        role: 'Ranged',
        party: 1,
        description: 'Avoid gaze and kill add',
      },
      {
        role: 'Ranged',
        party: 2,
        description: 'Avoid gaze and kill add',
      }
    ],
  }
];


const intermissionStrats: Record<string, MechanicStrat[]> = {
  hector: hectorIntermission,
  snake: snakeIntermission,
};

const cwcwHunts: MechanicStrat[] = [
  {
    mechanic: 'First Portals + First Tethers',
    description: 'Tethers prepare to go CW of chaser start\nStay middle until portals go off, then bait chasers CW',
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
  },
  {
    mechanic: 'Second Portals',
    description: 'Second portals will be either Cardinals or Intercards safe',
  }
];

const huntsStrats: Record<string, MechanicStrat[]> = {
  cwcw: cwcwHunts,
  cwccw: cwccwHunts,
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
      },
      badges: [
        {
          text: 'NA',
          class: 'bg-blue-600 text-white'
        }
      ]
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
            url: 'https://www.youtube.com/watch?v=fGGI8MM-wKM'
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
        },
      ]
    }
  ],
  useMainPageTabs: false,
  defaultStratName: 'hector',
  timeline: [],
  splitTimeline: true,
  useEvenTimelineSpacing: true
};

export const hector: Strat = {
  stratName: 'hector',
  description: 'Source: Hector Hectorson',
  stratUrl: {
    'Video by Hector Hectorson': 'https://www.youtube.com/watch?v=fGGI8MM-wKM'
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
              description: 'Northwest corner',
              imageUrl: './ex8/hector-clockspots.webp',
              mask: getCircleMaskUrl(50, 28.3, 5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Northeast corner',
              imageUrl: './ex8/hector-clockspots.webp',
              mask: getCircleMaskUrl(50, 68.6, 5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Southwest corner',
              imageUrl: './ex8/hector-clockspots.webp',
              mask: getCircleMaskUrl(39.4, 50, 5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Southeast corner',
              imageUrl: './ex8/hector-clockspots.webp',
              mask: getCircleMaskUrl(60.9, 50, 5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Middle northwest',
              imageUrl: './ex8/hector-clockspots.webp',
              mask: getCircleMaskUrl(42.8, 61.5, 5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Middle northeast',
              imageUrl: './ex8/hector-clockspots.webp',
              mask: getCircleMaskUrl(57.1, 62.9, 5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'South center',
              imageUrl: './ex8/hector-clockspots.webp',
              mask: getCircleMaskUrl(42.8, 37.1, 5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Middle south-ish',
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
              description: 'Northwest with M1',
              imageUrl: './ex8/hector-pairs.webp',
              mask: getCircleMaskUrl(43.2, 35, 6)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Northeast with M2',
              imageUrl: './ex8/hector-pairs.webp',
              mask: getCircleMaskUrl(56.1, 64.2, 6)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Southwest with R1',
              imageUrl: './ex8/hector-pairs.webp',
              mask: getCircleMaskUrl(41.8, 60.2, 6)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Southeast with R2',
              imageUrl: './ex8/hector-pairs.webp',
              mask: getCircleMaskUrl(58.1, 38.9, 6)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Northwest with MT',
              imageUrl: './ex8/hector-pairs.webp',
              mask: getCircleMaskUrl(41.8, 60.2, 6)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Northeast with OT',
              imageUrl: './ex8/hector-pairs.webp',
              mask: getCircleMaskUrl(56.1, 64.2, 6)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Southwest with H1',
              imageUrl: './ex8/hector-pairs.webp',
              mask: getCircleMaskUrl(43.2, 35, 6)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Southeast H2',
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
              description: 'Northwest',
              imageUrl: './ex8/hector-lps.webp',
              mask: getCircleMaskUrl(42.3, 49.9, 7.5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Northeast',
              imageUrl: './ex8/hector-lps.webp',
              mask: getCircleMaskUrl(59.9, 51.1, 7.5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Southwest',
              imageUrl: './ex8/hector-lps.webp',
              mask: getCircleMaskUrl(42.3, 49.9, 7.5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Southeast',
              imageUrl: './ex8/hector-lps.webp',
              mask: getCircleMaskUrl(59.9, 51.1, 7.5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'North',
              imageUrl: './ex8/hector-lps.webp',
              mask: getCircleMaskUrl(42.3, 49.9, 7.5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Center',
              imageUrl: './ex8/hector-lps.webp',
              mask: getCircleMaskUrl(59.9, 51.1, 7.5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'West',
              imageUrl: './ex8/hector-lps.webp',
              mask: getCircleMaskUrl(42.3, 49.9, 7.5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'East',
              imageUrl: './ex8/hector-lps.webp',
              mask: getCircleMaskUrl(59.9, 51.1, 7.5)
            }
          ]
        },
        {
          mechanic: 'Role Orb Prio',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Northwest',
              imageUrl: './ex8/hector-orb-prio.webp',
              mask: getCircleMaskUrl(50.45, 32.5, 6)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Northeast',
              imageUrl: './ex8/hector-orb-prio.webp',
              mask: getCircleMaskUrl(50.45, 32.5, 6)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Southwest',
              imageUrl: './ex8/hector-orb-prio.webp',
              mask: getCircleMaskUrl(65.5, 49.45, 6)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Southeast',
              imageUrl: './ex8/hector-orb-prio.webp',
              mask: getCircleMaskUrl(65.5, 49.45, 6)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'North',
              imageUrl: './ex8/hector-orb-prio.webp',
              mask: getCircleMaskUrl(52.45, 77.7, 6)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Center',
              imageUrl: './ex8/hector-orb-prio.webp',
              mask: getCircleMaskUrl(52.45, 77.7, 6)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'West',
              imageUrl: './ex8/hector-orb-prio.webp',
              mask: getCircleMaskUrl(39.2, 49.85, 6)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'East',
              imageUrl: './ex8/hector-orb-prio.webp',
              mask: getCircleMaskUrl(39.2, 49.85, 6)
            }
          ]
        },
        {
          mechanic: 'Adds Prio',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Northwest',
              imageUrl: './ex8/hector-adds-prio.webp',
              mask: getCircleMaskUrl(45.3, 29.1, 5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Northeast',
              imageUrl: './ex8/hector-adds-prio.webp',
              mask: getCircleMaskUrl(54.2, 72.9, 5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Southwest',
              imageUrl: './ex8/hector-adds-prio.webp',
              mask: getCircleMaskUrl(43.2, 69.7, 5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Southeast',
              imageUrl: './ex8/hector-adds-prio.webp',
              mask: getCircleMaskUrl(54.6, 27.8, 5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'North',
              imageUrl: './ex8/hector-adds-prio.webp',
              mask: getCircleMaskUrl(45.3, 72.8, 5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Center',
              imageUrl: './ex8/hector-adds-prio.webp',
              mask: getCircleMaskUrl(56.2, 69.9, 5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'West',
              imageUrl: './ex8/hector-adds-prio.webp',
              mask: getCircleMaskUrl(43.3, 32.7, 5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'East',
              imageUrl: './ex8/hector-adds-prio.webp',
              mask: getCircleMaskUrl(56.3, 31.0, 5)
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
          description: 'If single orb/tether, both tanks must stand between orb and party\nIf two orbs/tethers, light party stacks with tank between orb and party',
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
        },
      ]
    },
    {
      phaseName: 'Meltdown',
      mechs: [
        {
          mechanic: 'Start + Pyretic',
          description: 'Start underneath boss, stay until Pyretic debuff expires, then move towards clock spots',
          imageUrl: './ex8/hector-meltdown-start.webp'
        },
        {
          mechanic: 'Spread',
          description: 'Avoid twister puddles in center, spread to clock spots for AoEs',
          imageUrl: './ex8/hector-meltdown-clocks.webp'
        }
      ]
    },
    {
      phaseName: 'Dense/Airy Emptiness',
      mechs: [
        {
          mechanic: 'Dense Emptiness',
          description: 'Light party stacks on healers',
          imageUrl: './ex8/hector-dense.webp'
        },
        {
          mechanic: 'Airy Emptiness',
          description: 'Pair stacks on intercards',
          imageUrl: './ex8/hector-airy.webp'
        },
      ]
    },
    {
      phaseName: 'Gaze of the Void',
      mechs: [
        {
          mechanic: 'Dodges + New North',
          description: 'Dodge rotating cones starting at glowing orb\nFirst two orbs will be Tank orbs/new North',
          imageUrl: './ex8/hector-gaze-start.webp'
        },
        {
          mechanic: 'Role Orb Prio',
          description: 'Starting orb + the one after it will be Tank orbs/new North\nTHMR going Clockwise',
          imageUrl: './ex8/hector-gaze-orb-prio.webp'
        },
        {
          mechanic: 'Orb Pops',
          description: 'Pop Yellow tethered orb\nWait for Vuln to fall off\nPop Purple tethered orb\n‼️Orbs may not be next to each other\nCalculate THMR independently per color',
          imageUrl: './ex8/hector-gaze-pops.webp'
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
        },
      ]
    },
    {
      phaseName: 'Deep Freeze',
      mechs: [
        {
          mechanic: 'Flares',
          description: 'Tanks on 4 and 1, one hitbox away + mit',

        },
        {
          mechanic: 'Freeze',
          description: 'Move when cast finishes, keep moving until debuff falls off',
          imageUrl: './ex8/hector-deep-freeze.webp'
        },
      ]
    },
    {
      phaseName: 'Intermission',
      tag: 'intermission',
      mechs: intermissionStrats,
    },
    {
      phaseName: 'Naught Grows (Double)',
      mechs: [
        {
          mechanic: 'Overview',
          description: 'Two circles/donuts, one on boss, one on portal\nSame wild charge orbs as before',
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
        },
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
        },
      ]
    },
    {
      phaseName: 'Vacuum + Meltdown',
      mechs: [
        {
          mechanic: 'Vacuum',
          description: 'Use inner safespot, then stand still for Pyretic',
          imageUrl: './ex8/hector-vacuum-meltdown-start.webp'
        },
        {
          mechanic: 'Meltdown',
          description: 'Dodge twister puddles and spread to clocks',
          imageUrl: './ex8/hector-vacuum-meltdown-spread.webp'
        },
      ]
    },
    {
      phaseName: 'Naught Hunts',
      tag: 'hunts',
      mechs: huntsStrats,
    },
    {
      phaseName: 'Repeat Mechs + Enrage',
      mechs: [
        {
          mechanic: 'Remaining Mechanics',
          description: 'Dimension Zero, Almagest, Naught Grows, Naught Wakes, Deep Freeze\nNaught Grows, Dimension Zero, Meteorain x2',
          imageUrl: './ex8/hector-enrage.webp'
        },
      ]
    },
  ]
};

// All strats as an array
export const ex8Strats: Strat[] = [hector];
