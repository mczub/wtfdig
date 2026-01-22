import type { Alignment, FightConfig, PlayerMechStrat, Strat, StratRecord } from '$lib/types';
import { getStratArray, getStringObject } from '$lib/utils';

const placeholderImageUrl = '/images/placeholder.webp';

const lightPartyAssignments: PlayerMechStrat[] = [
  { role: 'Tank', party: 1, description: 'MT close to boss', imageUrl: './ex6/setup-lps.webp' },
  {
    role: 'Tank',
    party: 2,
    description: 'OT far from boss, can also go with close group if 5-3',
    imageUrl: './ex6/setup-lps.webp'
  },
  { role: 'Healer', party: 1, description: 'H1 far from boss', imageUrl: './ex6/setup-lps.webp' },
  { role: 'Healer', party: 2, description: 'H2 far from boss', imageUrl: './ex6/setup-lps.webp' },
  { role: 'Melee', party: 1, description: 'M1 close to boss', imageUrl: './ex6/setup-lps.webp' },
  { role: 'Melee', party: 2, description: 'M2 close to boss', imageUrl: './ex6/setup-lps.webp' },
  { role: 'Ranged', party: 1, description: 'R1 far from boss', imageUrl: './ex6/setup-lps.webp' },
  { role: 'Ranged', party: 2, description: 'R2 far from boss', imageUrl: './ex6/setup-lps.webp' }
];

const towerAssignments: PlayerMechStrat[] = [
  {
    role: 'Tank',
    party: 1,
    description: 'Northwest (A/D markers)',
    imageUrl: './ex6/setup-towers.webp'
  },
  {
    role: 'Tank',
    party: 2,
    description: 'Southeast (B/C markers)',
    imageUrl: './ex6/setup-towers.webp'
  },
  {
    role: 'Healer',
    party: 1,
    description: 'Healers can do whatever',
    imageUrl: './ex6/setup-towers.webp'
  },
  {
    role: 'Healer',
    party: 2,
    description: 'Healers can do whatever',
    imageUrl: './ex6/setup-towers.webp'
  },
  {
    role: 'Melee',
    party: 1,
    description: 'Southwest (4 marker)',
    imageUrl: './ex6/setup-towers.webp'
  },
  {
    role: 'Melee',
    party: 2,
    description: 'Southeast (3 marker)',
    imageUrl: './ex6/setup-towers.webp'
  },
  {
    role: 'Ranged',
    party: 1,
    description: 'Northwest (1 marker)',
    imageUrl: './ex6/setup-towers.webp'
  },
  {
    role: 'Ranged',
    party: 2,
    description: 'Northeast (2 marker)',
    imageUrl: './ex6/setup-towers.webp'
  }
];

const actualTowers: PlayerMechStrat[] = [
  { role: 'Tank', party: 1, description: 'Northwest (A/D markers)', imageUrl: './ex6/towers.webp' },
  { role: 'Tank', party: 2, description: 'Southeast (B/C markers)', imageUrl: './ex6/towers.webp' },
  {
    role: 'Healer',
    party: 1,
    description: 'Healers can do whatever',
    imageUrl: './ex6/towers.webp'
  },
  {
    role: 'Healer',
    party: 2,
    description: 'Healers can do whatever',
    imageUrl: './ex6/towers.webp'
  },
  { role: 'Melee', party: 1, description: 'Southwest (4 marker)', imageUrl: './ex6/towers.webp' },
  { role: 'Melee', party: 2, description: 'Southeast (3 marker)', imageUrl: './ex6/towers.webp' },
  { role: 'Ranged', party: 1, description: 'Northwest (1 marker)', imageUrl: './ex6/towers.webp' },
  { role: 'Ranged', party: 2, description: 'Northeast (2 marker)', imageUrl: './ex6/towers.webp' }
];

const siegeflightRedAssignments: PlayerMechStrat[] = [
  {
    role: 'Tank',
    party: 1,
    description: 'Melee group stacks close to where boss dashes to',
    imageUrl: './ex6/siegeflight-red.webp'
  },
  {
    role: 'Tank',
    party: 2,
    description: 'Melee group stacks close to where boss dashes to, Ranged group stacks far',
    imageUrl: './ex6/siegeflight-red.webp'
  },
  {
    role: 'Healer',
    party: 1,
    description: 'Ranged group stacks far from where boss dashes to',
    imageUrl: './ex6/siegeflight-red.webp'
  },
  {
    role: 'Healer',
    party: 2,
    description: 'Ranged group stacks far from where boss dashes to',
    imageUrl: './ex6/siegeflight-red.webp'
  },
  {
    role: 'Melee',
    party: 1,
    description: 'Melee group stacks close to where boss dashes to',
    imageUrl: './ex6/siegeflight-red.webp'
  },
  {
    role: 'Melee',
    party: 2,
    description: 'Melee group stacks close to where boss dashes to',
    imageUrl: './ex6/siegeflight-red.webp'
  },
  {
    role: 'Ranged',
    party: 1,
    description: 'Ranged group stacks far from where boss dashes to',
    imageUrl: './ex6/siegeflight-red.webp'
  },
  {
    role: 'Ranged',
    party: 2,
    description: 'Ranged group stacks far from where boss dashes to',
    imageUrl: './ex6/siegeflight-red.webp'
  }
];

const siegeflightwhiteAssignments: PlayerMechStrat[] = [
  {
    role: 'Tank',
    party: 1,
    description: 'Melee group stacks close to where boss dashes to',
    imageUrl: './ex6/siegeflight-white.webp'
  },
  {
    role: 'Tank',
    party: 2,
    description: 'Melee group stacks close to where boss dashes to, Ranged group stacks far',
    imageUrl: './ex6/siegeflight-white.webp'
  },
  {
    role: 'Healer',
    party: 1,
    description: 'Ranged group stacks far from where boss dashes to',
    imageUrl: './ex6/siegeflight-white.webp'
  },
  {
    role: 'Healer',
    party: 2,
    description: 'Ranged group stacks far from where boss dashes to',
    imageUrl: './ex6/siegeflight-white.webp'
  },
  {
    role: 'Melee',
    party: 1,
    description: 'Melee group stacks close to where boss dashes to',
    imageUrl: './ex6/siegeflight-white.webp'
  },
  {
    role: 'Melee',
    party: 2,
    description: 'Melee group stacks close to where boss dashes to',
    imageUrl: './ex6/siegeflight-white.webp'
  },
  {
    role: 'Ranged',
    party: 1,
    description: 'Ranged group stacks far from where boss dashes to',
    imageUrl: './ex6/siegeflight-white.webp'
  },
  {
    role: 'Ranged',
    party: 2,
    description: 'Ranged group stacks far from where boss dashes to',
    imageUrl: './ex6/siegeflight-white.webp'
  }
];

const sideToSideAssignments: PlayerMechStrat[] = [
  {
    role: 'Tank',
    party: 1,
    description:
      'MT keeps the boss near the safe edge, then drags it across immediately after the claw telegraph while dodging returning waves.'
  },
  {
    role: 'Tank',
    party: 2,
    description:
      'OT helps call the safe side and follows the group across, ready to pick up if MT gets clipped.'
  },
  {
    role: 'Healer',
    party: 1,
    description:
      "H1 stays midline with MT's pack, healing on the move as everyone crosses between waves."
  },
  {
    role: 'Healer',
    party: 2,
    description:
      'H2 travels with the ranged pack, timing sprints between pulses and tossing shields as waves return.'
  },
  {
    role: 'Melee',
    party: 1,
    description:
      "M1 hugs the boss for uptime but crosses early so you don't get pinched by the backwash."
  },
  {
    role: 'Melee',
    party: 2,
    description: "M2 mirrors the first melee, weaving between waves while staying on MT's flank."
  },
  {
    role: 'Ranged',
    party: 1,
    description:
      'R1 hangs just behind the group to read the pattern, then crosses once the safe gap opens.'
  },
  {
    role: 'Ranged',
    party: 2,
    description:
      'R2 kites along the edge, baiting nothing while keeping a clean line for the final dodge.'
  }
];

const hectorStrat: Strat = {
  stratName: 'hector',
  stratUrl: 'https://www.youtube.com/watch?v=6q-si8edSTg',
  description: 'Source: Hector',
  strats: [
    {
      phaseName: 'Setup',
      mechs: [
        {
          mechanic: 'Light Parties',
          description: 'HTMM/HTRR for uptime, can also do 5-3 with both tanks in the close stack',
          strats: lightPartyAssignments
        },
        {
          mechanic: 'Towers',
          description: 'NW/SE tank towers, G1 West/G2 East, Ranged North/Melee South',
          strats: towerAssignments
        }
      ]
    },
    {
      phaseName: 'Roar (Raidwide)',
      tag: 'p1',
      mechs: [
        {
          mechanic: 'Telegraph',
          description: 'Arkveld crouches',
          imageUrl: './ex6/roar.webp'
        }
      ]
    },
    {
      phaseName: 'Chainblade Blow (Side to Side)',
      tag: 'p1',
      mechs: [
        {
          mechanic: 'Telegraph',
          description: 'Arkveld lifts one wing',
          imageUrl: './ex6/side-to-side-tele.webp'
        },
        {
          mechanic: 'Dodge',
          description:
            'Dodge the first cleave, then move to the other side of the hitbox for the second hit',
          imageUrl: './ex6/side-to-side.webp'
        }
      ]
    },
    {
      phaseName: "Wyvern's Siegeflight (Red or White)",
      tag: 'p1',
      mechs: [
        {
          mechanic: 'Red',
          description: 'Dodge out of middle, then back into the middle',
          strats: siegeflightRedAssignments
        },
        {
          mechanic: 'White',
          description: 'Dodge out of middle, then stay to the sides',
          strats: siegeflightwhiteAssignments
        },
        {
          mechanic: 'Puddles + Exalines',
          description: 'Bait two puddles, dodge the line AOEs',
          imageUrl: './ex6/siegeflight-exa.webp'
        }
      ]
    },
    {
      phaseName: 'Rush (Devour)',
      tag: 'p1',
      mechs: [
        {
          mechanic: 'Setup',
          description: 'Chill near third jump, wait for boss',
          imageUrl: './ex6/devour-setup.webp'
        },
        {
          mechanic: 'Donuts',
          description:
            'Move into the third circle after it goes off, stay near the wall to avoid donuts',
          imageUrl: './ex6/devour-donut.webp'
        }
      ]
    },
    {
      phaseName: 'Half Room + Spread',
      tag: 'p1',
      mechs: [
        {
          mechanic: 'Telegraph',
          description: 'Arkveld lifts one wing, this one is a simple half-room cleave',
          imageUrl: './ex6/halfroom-tele.webp'
        },
        {
          mechanic: 'Spreads',
          description:
            'Yolo spread in the safe half\nTake the cleave if you must but never double-stack two spreads',
          imageUrl: './ex6/halfroom-spreads.webp'
        }
      ]
    },
    {
      phaseName: 'Tail + Stack',
      tag: 'p1',
      mechs: [
        {
          mechanic: 'Telegraph',
          description: 'Arkveld lifts tail, avoid line',
          imageUrl: './ex6/tail-line.webp'
        },
        {
          mechanic: 'Stack',
          description: 'Take stack on edge of hitbox',
          imageUrl: './ex6/tail-stack.webp'
        }
      ]
    },
    {
      phaseName: 'Towers',
      tag: 'p1',
      mechs: [
        {
          mechanic: 'Puddles',
          description:
            'Bait the first set mid, second toward your tower, third anywhere not on a tower',
          imageUrl: './ex6/towers-puddles.webp'
        },
        {
          mechanic: 'Towers',
          description: 'Soak tower as third puddle goes off',
          strats: actualTowers
        }
      ]
    },
    {
      phaseName: 'Exas + Spreads',
      tag: 'p1',
      mechs: [
        {
          mechanic: 'Exaflares',
          description: 'Dodge exas, crystals explode when an exa hits them',
          imageUrl: './ex6/exaflares-first.webp'
        },
        {
          mechanic: 'Spreads',
          description: 'Keep dodging, each role will get spreads',
          imageUrl: './ex6/exaflares-second.webp'
        }
      ]
    },
    {
      phaseName: 'Limit Cut',
      tag: 'lc',
      mechs: [
        {
          mechanic: '1 To 4',
          description:
            '1 goes to E/W cardinal opposite wing, 2 goes South, 3 goes opposite 1, 4 goes North after first cleave',
          imageUrl: './ex6/limit-cut-14.webp'
        },
        {
          mechanic: '5 To 8',
          description: '5 through 8 go to same spots as 1 to 4, move in after that cleave',
          imageUrl: './ex6/limit-cut-58.webp'
        }
      ]
    },
    {
      phaseName: 'Towers',
      tag: 'p2',
      mechs: [
        {
          mechanic: 'Repeat',
          description: 'Same 3x puddles and towers as before',
          strats: actualTowers
        }
      ]
    },
    {
      phaseName: 'Lasers',
      tag: 'p2',
      mechs: [
        {
          mechanic: 'First Laser (Laser Starts Away)',
          description:
            'First laser on the same side as the big tower crystal, group stacks opposite side\nLaser player moves to group once telegraph appears',
          imageUrl: './ex6/laser-first.webp'
        },
        {
          mechanic: 'Second Laser (With Stacks)',
          description:
            'Group moves to the opposite side as soon as the second laser telegraph appears\nLight party stacks while laser moves',
          imageUrl: './ex6/laser-second.webp'
        },
        {
          mechanic: 'Third Laser (With Spread)',
          description:
            'Group moves back to the other side as soon as the third laser telegraph appears\nYolo spread after third laser finishes',
          imageUrl: './ex6/laser-third.webp'
        }
      ]
    },
    {
      phaseName: 'Exalines',
      tag: 'p2',
      mechs: [
        {
          mechanic: 'Exalines (Middle to Edge)',
          description:
            'Stay out of first + exalines, then move into first hit as they go to the outside',
          imageUrl: './ex6/exalines-first.webp'
        },
        {
          mechanic: 'Side to Side',
          description: 'Boss will do side-to-side cleaves around when 3rd exalines go off',
          imageUrl: './ex6/exalines-side.webp'
        },
        {
          mechanic: 'Exalines (Edge to Middle to Edge)',
          description:
            'Exalines come back in towards the center\n‼️Exaline cross near the center will hit twice before it goes back out',
          imageUrl: './ex6/exalines-third.webp'
        }
      ]
    },
    {
      phaseName: 'Repeated Mechs',
      tag: 'p2',
      mechs: [
        {
          mechanic: 'Rush (Devour)',
          description: 'Dodge into third jump',
          imageUrl: './ex6/devour-donut.webp'
        },
        {
          mechanic: 'Half Room + Spread',
          description: 'Spread into safe half',
          imageUrl: './ex6/halfroom-spreads.webp'
        },
        {
          mechanic: 'Tail + Stack (With Big Puddle)',
          description: 'Avoid tail line, take stack on hitbox\n‼️Move out of the new big puddle',
          imageUrl: './ex6/tail-stack.webp'
        },
        {
          mechanic: 'Towers',
          description: 'Same 3x puddles and towers as before',
          strats: actualTowers
        }
      ]
    },
    {
      phaseName: 'Exaflares',
      tag: 'p2',
      description:
        'Exaflares from one side of the arena\nMake sure to also dodge crystal explosions',
      imageUrl: './ex6/exaflares-crystal.webp'
    },
    {
      phaseName: 'More Repeated Mechs',
      tag: 'p2'
    },
    {
      phaseName: 'Enrage @ 11:41',
      tag: 'p2'
    }
  ]
};

export const ex6Strats: Strat[] = [hectorStrat];

const lcToggleOptions = [{ value: 'diamond', label: 'Diamond' }];

const ex6ToggleConfigs = [
  {
    key: 'lc',
    label: 'Limit Cut',
    defaultValue: 'diamond',
    options: lcToggleOptions
  }
];

export const ex6FightConfig: FightConfig = {
  fightKey: 'ex6',
  title: 'The Windward Wilds (Extreme)',
  abbreviatedTitle: 'EX6',
  subtitle: 'EX6 Patch 7.3',
  cheatsheetTitle: 'EX6 Cheatsheet',
  strats: {
    hector: {
      label: 'Hector',
      defaults: {
        lc: 'diamond'
      }
    }
  },
  toggles: ex6ToggleConfigs,
  tabTags: {
    P1: ['p1'],
    P2: ['lc', 'p2']
  },
  useMainPageTabs: false,
  defaultStratName: 'hector',
  timeline: []
};
