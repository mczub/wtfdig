import type { FightConfig, Strat, MechanicStrat } from '$lib/types';
import { getCircleMaskUrl } from '$lib/utils';

// Toggle-dependent mechs for Arena Split
const toxicArenaSplit: MechanicStrat[] = [
  {
    mechanic: 'Split + Conga',
    description: '4 players get tethered, 2 on each side\nG1 West, G2 East',
    imageUrl: "./m11s/toxic-split.webp"
  },
  {
    mechanic: 'Towers',
    description: 'EVERYONE take a tower\nKB to other side if you need to stretch tether\nOtherwise KB to same side',
    imageUrl: "./m11s/toxic-split-towers.webp"
  },
  {
    mechanic: 'Fire Breath Baits',
    description: 'Non-tethers close to boss to bait fire breaths\nUse body language to hint at N or S\nStack center E/W after for puddles',
    imageUrl: "./m11s/toxic-split-baits.webp"
  },
  {
    mechanic: 'Puddles',
    description: 'Bait puddles along front wall, tethers stretch',
    imageUrl: "./m11s/toxic-split-puddles.webp"
  },
  {
    mechanic: 'Lineup + Portal',
    description: 'Tethers on edge, markers on inner marker corner',
    imageUrl: "./m11s/toxic-split-portals.webp"
  },
  {
    mechanic: 'Towers 2 + 3',
    description: '‼️TAKE THE TOWER IN THE QUADRANT YOU RESOLVED TETHER/MARKERS',
    imageUrl: "./m11s/toxic-split-towers-2.webp"
  },
  {
    mechanic: 'Get Slabbed',
    description: 'KB to back of boss, then look at hitbox to dodge AOE',
    imageUrl: "./m11s/toxic-slab.webp"
  }
];

const nobuddiesArenaSplit: MechanicStrat[] = [
  {
    mechanic: 'Split + Conga',
    description: '4 players get tethered, 2 on each side\nG1 West, G2 East\nSupports NW/SE, DPS SW/NE\nℹ️ Hector has Tank/Ranged North and Healers/Melee South',
    imageUrl: "./m11s/kindred-split-conga.webp",
    url: "https://raidplan.io/plan/hvbysrfwvrc55ahz#1"
  },
  {
    mechanic: 'Towers',
    description: 'EVERYONE take a tower\nKB to other side if you need to stretch tether\nOtherwise KB to same side',
    imageUrl: "./m11s/kindred-nobuddies-towers.webp",
    url: "https://raidplan.io/plan/hvbysrfwvrc55ahz#15"
  },
  {
    mechanic: 'Fire Breath Baits',
    description: 'Non-tethers close to boss to bait fire breaths\nStack center E/W after for puddles',
    imageUrl: "./m11s/kindred-nobuddies-baits.webp",
    url: "https://raidplan.io/plan/hvbysrfwvrc55ahz#16"
  },
  {
    mechanic: 'Puddles',
    description: 'Everyone go center E/W to bait puddles, one pair go North, one pair go South\nTethers go to the side you need to stretch\nNon-tethers use body language/stay where you got knocked to',
    imageUrl: "./m11s/kindred-nobuddies-puddles.webp",
    url: {
      "Start": "https://raidplan.io/plan/hvbysrfwvrc55ahz#17",
      "Puddle baits": "https://raidplan.io/plan/hvbysrfwvrc55ahz#18"
    }
  },
  {
    mechanic: 'Lineup + Portal',
    description: 'Tethers on edge, markers on inner or outer safe corner of number markers depending on which markers are used\nℹ️ Original raidplan and Hector use outer corner markers, newer version of the raidplan uses inner corner markers',
    imageUrl: "./m11s/kindred-lineup.webp",
    url: {
      "Inner corner": "https://raidplan.io/plan/hvbysrfwvrc55ahz#8",
      "Outer corner": "https://raidplan.io/plan/hvbysrfwvrc55ahz#9"
    }
  },
  {
    mechanic: 'Towers 2 + 3',
    description: 'Take the tower in the quadrant you resolved the last set of tethers/markers\n2nd towers, another tethers + markers, 3rd towers, then stack AOEs',
    imageUrl: "./m11s/kindred-buddies-towers-2.webp",
    url: "https://raidplan.io/plan/hvbysrfwvrc55ahz#12"
  },
  {
    mechanic: 'Get Slabbed',
    description: 'KB to back of boss, then look at hitbox to dodge AOE',
    imageUrl: "./m11s/kindred-slab.webp",
    url: "https://raidplan.io/plan/hvbysrfwvrc55ahz#14"
  }
];

const hectorArenaSplit: MechanicStrat[] = [
  {
    mechanic: 'Split + Conga',
    description: '4 players get tethered, 2 on each side\nG1 West, G2 East\nHector has Tank/Ranged North and Healers/Melee South\nℹ️ Original raidplan has supports NW/SE, DPS SW/NE',
    imageUrl: "./m11s/hector-split-start.webp",
  },
  {
    mechanic: 'Towers',
    description: 'EVERYONE take a tower\nKB to other side if you need to stretch tether\nOtherwise KB to same side',
    imageUrl: "./m11s/hector-split-towers.webp",
  },
  {
    mechanic: 'Fire Breath Baits',
    description: 'Non-tethers close to boss to bait fire breaths\nStack center E/W after for puddles',
    imageUrl: "./m11s/hector-split-baits.webp",
  },
  {
    mechanic: 'Puddles',
    description: 'Everyone go center E/W to bait puddles, one pair go North, one pair go South\nTethers go to the side you need to stretch\nNon-tethers use body language/stay where you got knocked to',
    imageUrl: "./m11s/hector-split-puddles.webp",
  },
  {
    mechanic: 'Lineup + Portal',
    description: 'Tethers on edge, markers on outer safe corner of number markers\nℹ️ Original raidplan and Hector use outer corner markers, newer version of the raidplan uses inner corner markers',
    imageUrl: "./m11s/hector-split-tethers.webp",
  },
  {
    mechanic: 'Towers 2 + 3',
    description: 'Take the tower in the quadrant you resolved the last set of tethers/markers\n2nd towers, another tethers + markers, 3rd towers, then stack AOEs',
    imageUrl: "./m11s/hector-split-towers-2.webp",
  },
  {
    mechanic: 'Get Slabbed',
    description: 'KB to back of boss, then look at hitbox to dodge AOE',
    imageUrl: "./m11s/hector-slab.webp",
  }
];

const arenaSplitMechs: Record<string, MechanicStrat[]> = {
  toxic: toxicArenaSplit,
  nobuddies: nobuddiesArenaSplit,
  hector: hectorArenaSplit
};

const toxicStrat: Strat = {
  stratName: 'toxic',
  description: 'Toxic Friends',
  notes: '',
  stratUrl: 'https://raidplan.io/plan/HJAbE7fuWodELUSB',
  strats: [
    {
      phaseName: 'Raw Steel Trophy',
      mechs: [
        {
          mechanic: 'Axe',
          description: 'Tanks stack, Party spread',
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#1",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Stack for TB",
              imageUrl: "./m11s/toxic-raw-axe.webp",
              mask: getCircleMaskUrl(50, 36.4, 7.5)
            },
            {
              role: "Tank",
              party: 2,
              description: "Stack for TB",
              imageUrl: "./m11s/toxic-raw-axe.webp",
              mask: getCircleMaskUrl(50, 36.4, 7.5)
            },
            {
              role: "Healer",
              party: 1,
              description: "SSW far",
              imageUrl: "./m11s/toxic-raw-axe.webp",
              mask: getCircleMaskUrl(41.1, 84.8, 7.5)
            },
            {
              role: "Healer",
              party: 2,
              description: "SSE far",
              imageUrl: "./m11s/toxic-raw-axe.webp",
              mask: getCircleMaskUrl(59.1, 84.9, 7.5)
            },
            {
              role: "Melee",
              party: 1,
              description: "SW max melee",
              imageUrl: "./m11s/toxic-raw-axe.webp",
              mask: getCircleMaskUrl(43, 62.4, 7.5)
            },
            {
              role: "Melee",
              party: 2,
              description: "SE max melee",
              imageUrl: "./m11s/toxic-raw-axe.webp",
              mask: getCircleMaskUrl(57.1, 62.7, 7.5)
            },
            {
              role: "Ranged",
              party: 1,
              description: "WSW far",
              imageUrl: "./m11s/toxic-raw-axe.webp",
              mask: getCircleMaskUrl(26.7, 69.1, 7.5)
            },
            {
              role: "Ranged",
              party: 2,
              description: "ESE far",
              imageUrl: "./m11s/toxic-raw-axe.webp",
              mask: getCircleMaskUrl(72.7, 69.1, 7.5)
            }
          ]
        },
        {
          mechanic: 'Scythe',
          description: 'Tanks spread, Party stack',
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#2",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "NW for split TB",
              imageUrl: "./m11s/toxic-raw-scythe.webp",
              mask: getCircleMaskUrl(42.9, 37.6, 7.5)
            },
            {
              role: "Tank",
              party: 2,
              description: "NE for split TB",
              imageUrl: "./m11s/toxic-raw-scythe.webp",
              mask: getCircleMaskUrl(57, 38, 7.5)
            },
            {
              role: "Healer",
              party: 1,
              description: "Stack South",
              imageUrl: "./m11s/toxic-raw-scythe.webp",
              mask: getCircleMaskUrl(49.9, 67.1, 7.5)
            },
            {
              role: "Healer",
              party: 2,
              description: "Stack South",
              imageUrl: "./m11s/toxic-raw-scythe.webp",
              mask: getCircleMaskUrl(49.9, 67.1, 7.5)
            },
            {
              role: "Melee",
              party: 1,
              description: "Stack South",
              imageUrl: "./m11s/toxic-raw-scythe.webp",
              mask: getCircleMaskUrl(49.9, 67.1, 7.5)
            },
            {
              role: "Melee",
              party: 2,
              description: "Stack South",
              imageUrl: "./m11s/toxic-raw-scythe.webp",
              mask: getCircleMaskUrl(49.9, 67.1, 7.5)
            },
            {
              role: "Ranged",
              party: 1,
              description: "Stack South",
              imageUrl: "./m11s/toxic-raw-scythe.webp",
              mask: getCircleMaskUrl(49.9, 67.1, 7.5)
            },
            {
              role: "Ranged",
              party: 2,
              description: "Stack South",
              imageUrl: "./m11s/toxic-raw-scythe.webp",
              mask: getCircleMaskUrl(49.9, 67.1, 7.5)
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Assault Evolved',
      description: 'Boss will spawn one axe, sword, and scythe and turn to resolve them\nFirst 2 sets of 3 weapons will go clockwise',
      mechs: [
        {
          mechanic: 'Axe',
          description: 'Party stack out of AOE',
          imageUrl: "./m11s/toxic-assault-axe.webp",
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#3",
        },
        {
          mechanic: 'Sword',
          description: 'Light Party stacks\nG1 Left, G2 Right',
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#4",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Left facing boss",
              imageUrl: "./m11s/toxic-assault-sword.webp",
              mask: getCircleMaskUrl(34.2, 70.8, 5)
            },
            {
              role: "Tank",
              party: 2,
              description: "Right facing boss",
              imageUrl: "./m11s/toxic-assault-sword.webp",
              mask: getCircleMaskUrl(48.2, 46.7, 5)
            },
            {
              role: "Healer",
              party: 1,
              description: "Left facing boss",
              imageUrl: "./m11s/toxic-assault-sword.webp",
              mask: getCircleMaskUrl(34.2, 70.8, 5)
            },
            {
              role: "Healer",
              party: 2,
              description: "Right facing boss",
              imageUrl: "./m11s/toxic-assault-sword.webp",
              mask: getCircleMaskUrl(48.2, 46.7, 5)
            },
            {
              role: "Melee",
              party: 1,
              description: "Left facing boss",
              imageUrl: "./m11s/toxic-assault-sword.webp",
              mask: getCircleMaskUrl(34.2, 70.8, 5)
            },
            {
              role: "Melee",
              party: 2,
              description: "Right facing boss",
              imageUrl: "./m11s/toxic-assault-sword.webp",
              mask: getCircleMaskUrl(48.2, 46.7, 5)
            },
            {
              role: "Ranged",
              party: 1,
              description: "Left facing boss",
              imageUrl: "./m11s/toxic-assault-sword.webp",
              mask: getCircleMaskUrl(34.2, 70.8, 5)
            },
            {
              role: "Ranged",
              party: 2,
              description: "Right facing boss",
              imageUrl: "./m11s/toxic-assault-sword.webp",
              mask: getCircleMaskUrl(48.2, 46.7, 5)
            }
          ]
        },
        {
          mechanic: 'Scythe',
          description: 'Boss relative Proteans',
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#5",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Relative North",
              imageUrl: "./m11s/toxic-assault-scythe.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "Relative South",
              imageUrl: "./m11s/toxic-assault-scythe.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "Relative West",
              imageUrl: "./m11s/toxic-assault-scythe.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "Relative East",
              imageUrl: "./m11s/toxic-assault-scythe.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "Relative Southwest",
              imageUrl: "./m11s/toxic-assault-scythe.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "Relative Southeast",
              imageUrl: "./m11s/toxic-assault-scythe.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "Relative Northwest",
              imageUrl: "./m11s/toxic-assault-scythe.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "Relative Northeast",
              imageUrl: "./m11s/toxic-assault-scythe.webp"
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Void Stardust',
      description: '3 baited AOEs\nStart North and bait clockwise\nStack or spread after 3rd bait',
      imageUrl: "./m11s/toxic-void.webp",
      url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#6",
    },
    {
      phaseName: 'Dance of Domination Trophy',
      description: 'Open side is new South',
      url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#7",
      mechs: [
        {
          mechanic: 'Pairs',
          description: 'Pair stacks in gaps relative to new orientation',
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Relative West with M1\nUse inner letter markers",
              imageUrl: "./m11s/toxic-dance.webp",
              mask: getCircleMaskUrl(50.3, 72.1, 5)
            },
            {
              role: "Tank",
              party: 2,
              description: "Relative East with M2\nUse inner letter markers",
              imageUrl: "./m11s/toxic-dance.webp",
              mask: getCircleMaskUrl(50, 27.8, 5)
            },
            {
              role: "Healer",
              party: 1,
              description: "Relative Southwest with R1",
              imageUrl: "./m11s/toxic-dance.webp",
              mask: getCircleMaskUrl(74.8, 68.6, 5)
            },
            {
              role: "Healer",
              party: 2,
              description: "Relative Southeast with R2",
              imageUrl: "./m11s/toxic-dance.webp",
              mask: getCircleMaskUrl(74.7, 31.2, 5)
            },
            {
              role: "Melee",
              party: 1,
              description: "Relative West with MT\nUse inner letter markers",
              imageUrl: "./m11s/toxic-dance.webp",
              mask: getCircleMaskUrl(50.3, 72.1, 5)
            },
            {
              role: "Melee",
              party: 2,
              description: "Relative East with OT\nUse inner letter markers",
              imageUrl: "./m11s/toxic-dance.webp",
              mask: getCircleMaskUrl(50, 27.8, 5)
            },
            {
              role: "Ranged",
              party: 1,
              description: "Relative Southwest with H1",
              imageUrl: "./m11s/toxic-dance.webp",
              mask: getCircleMaskUrl(74.8, 68.6, 5)
            },
            {
              role: "Ranged",
              party: 2,
              description: "Relative Southeast with H2",
              imageUrl: "./m11s/toxic-dance.webp",
              mask: getCircleMaskUrl(74.7, 31.2, 5)
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Ultimate Trophy Weapons',
      mechs: [
        {
          mechanic: 'Weapons + Tornadoes',
          description: '6 weapons, resolve in the order they spawn\nBait tornadoes after last weapon',
          imageUrl: "./m11s/toxic-ultimate.webp",
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#8",
        }
      ]
    },
    {
      phaseName: 'Great Wall of Fire',
      description: 'Double hit double tankbuster that leaves a line\nIf not invulning, MT in front for first, then rotate 45 degrees CW for second',
      imageUrl: "./m11s/toxic-great-wall.webp",
      url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#9",
    },
    {
      phaseName: 'Orbital Omen',
      description: 'Tanks point boss North\n4 pairs of portals spawn North and East and fire lines\nBoss flanks are safe, dodge into intersecting lines after they go off',
      imageUrl: "./m11s/toxic-orbital.webp",
      url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#10",
    },
    {
      phaseName: 'Meteorain',
      description: 'Meteor bait order M > H > R\nClosest 2 players bait meteor markers\nShould end up with 3 meteors lined up SW\nMT grabs NE/NW tether\nOT grabs SW tether',
      mechs: [
        {
          mechanic: '1st Set',
          description: 'Melees close to bait meteors, then go NE/SW\nParty stack NW\nTanks in front for the first line stack',
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#11",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Stand in front of NW line stack",
              imageUrl: "./m11s/toxic-meteorain-1.webp",
              mask: getCircleMaskUrl(44.5, 43.5, 5)
            },
            {
              role: "Tank",
              party: 2,
              description: "Stand in front of NW line stack",
              imageUrl: "./m11s/toxic-meteorain-1.webp",
              mask: getCircleMaskUrl(44.5, 43.5, 5)
            },
            {
              role: "Healer",
              party: 1,
              description: "Stand in NW line stack, then get ready to bait 2nd meteors",
              imageUrl: "./m11s/toxic-meteorain-1.webp",
              mask: getCircleMaskUrl(41.8, 37.7, 5)
            },
            {
              role: "Healer",
              party: 2,
              description: "Stand in NW line stack, then get ready to bait 2nd meteors",
              imageUrl: "./m11s/toxic-meteorain-1.webp",
              mask: getCircleMaskUrl(41.8, 37.7, 5)
            },
            {
              role: "Melee",
              party: 1,
              description: "Bait meteor close, then drop NE",
              imageUrl: "./m11s/toxic-meteorain-1.webp",
              mask: getCircleMaskUrl(57.1, 38, 5)
            },
            {
              role: "Melee",
              party: 2,
              description: "Bait meteor close, then drop SW",
              imageUrl: "./m11s/toxic-meteorain-1.webp",
              mask: getCircleMaskUrl(43, 62.9, 5)
            },
            {
              role: "Ranged",
              party: 1,
              description: "Stand in NW line stack",
              imageUrl: "./m11s/toxic-meteorain-1.webp",
              mask: getCircleMaskUrl(41.8, 37.6, 5)
            },
            {
              role: "Ranged",
              party: 2,
              description: "Stand in NW line stack",
              imageUrl: "./m11s/toxic-meteorain-1.webp",
              mask: getCircleMaskUrl(41.8, 37.6, 5)
            }
          ]
        },
        {
          mechanic: '2nd Set',
          description: 'Healers close to bait meteors, then go NW/SW\nParty stack behind NE meteor to blow it up\nMT take NE tether, OT take SW tether',
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#12",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Take NE tank tether",
              imageUrl: "./m11s/toxic-meteorain-2.webp",
              mask: getCircleMaskUrl(52, 18.7, 5)
            },
            {
              role: "Tank",
              party: 2,
              description: "Take SW tank tether",
              imageUrl: "./m11s/toxic-meteorain-2.webp",
              mask: getCircleMaskUrl(45.8, 72.3, 5)
            },
            {
              role: "Healer",
              party: 1,
              description: "Bait meteor close, then drop NW",
              imageUrl: "./m11s/toxic-meteorain-2.webp",
              mask: getCircleMaskUrl(43, 38.1, 5)
            },
            {
              role: "Healer",
              party: 2,
              description: "Bait meteor close, then drop SW in line with first meteor",
              imageUrl: "./m11s/toxic-meteorain-2.webp",
              mask: getCircleMaskUrl(36.1, 74.9, 5)
            },
            {
              role: "Melee",
              party: 1,
              description: "Stand in NE line stack behind meteor",
              imageUrl: "./m11s/toxic-meteorain-2.webp",
              mask: getCircleMaskUrl(59.3, 33.9, 5)
            },
            {
              role: "Melee",
              party: 2,
              description: "Stand in NE line stack behind meteor",
              imageUrl: "./m11s/toxic-meteorain-2.webp",
              mask: getCircleMaskUrl(59.3, 33.9, 5)
            },
            {
              role: "Ranged",
              party: 1,
              description: "Stand in NE line stack, then get ready to bait 3rd meteors",
              imageUrl: "./m11s/toxic-meteorain-2.webp",
              mask: getCircleMaskUrl(59.3, 33.9, 5)
            },
            {
              role: "Ranged",
              party: 2,
              description: "Stand in NE line stack, then get ready to bait 3rd meteors",
              imageUrl: "./m11s/toxic-meteorain-2.webp",
              mask: getCircleMaskUrl(59.3, 33.9, 5)
            }
          ]
        },
        {
          mechanic: '3rd Set',
          description: 'Ranged close to bait meteors, then go NE/SW\nParty stack behind NW meteor to blow it up\nMT take NW tether, OT take SW tether',
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#13",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Take NW tank tether",
              imageUrl: "./m11s/toxic-meteorain-3.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "Take SW tank tether",
              imageUrl: "./m11s/toxic-meteorain-3.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "Stand in NW line stack behind meteor",
              imageUrl: "./m11s/toxic-meteorain-3.webp",
              mask: getCircleMaskUrl(41, 33.3, 5)
            },
            {
              role: "Healer",
              party: 2,
              description: "Stand in NW line stack behind meteor",
              imageUrl: "./m11s/toxic-meteorain-3.webp",
              mask: getCircleMaskUrl(41, 33.3, 5)
            },
            {
              role: "Melee",
              party: 1,
              description: "Stand in NW line stack behind meteor",
              imageUrl: "./m11s/toxic-meteorain-3.webp",
              mask: getCircleMaskUrl(41, 33.3, 5)
            },
            {
              role: "Melee",
              party: 2,
              description: "Stand in NW line stack behind meteor",
              imageUrl: "./m11s/toxic-meteorain-3.webp",
              mask: getCircleMaskUrl(41, 33.3, 5)
            },
            {
              role: "Ranged",
              party: 1,
              description: "Bait meteor close, then drop SW far in line with other two meteors",
              imageUrl: "./m11s/toxic-meteorain-3.webp",
              mask: getCircleMaskUrl(28.8, 87.5, 5)
            },
            {
              role: "Ranged",
              party: 2,
              description: "Bait meteor close, then drop NE",
              imageUrl: "./m11s/toxic-meteorain-3.webp",
              mask: getCircleMaskUrl(57, 37.6, 5)
            }
          ]
        },
        {
          mechanic: '4th Set',
          description: 'Party stack behind NE meteor to blow it up\nRun SW after to hide',
          imageUrl: "./m11s/toxic-meteorain-4.webp",
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#14",
        }
      ]
    },
    {
      phaseName: 'Arena Split',
      tag: 'arenasplit',
      mechs: arenaSplitMechs
    },
    {
      phaseName: 'Ecliptic Stampede',
      mechs: [
        {
          mechanic: 'Start',
          description: 'Melees + Tanks stack under boss\nRanged + Healers stay out to bait 2 markers\nIf 2 on the same side get marked, the one closer to the proximity AOE will adjust',
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#16",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Stack middle under boss",
              imageUrl: "./m11s/toxic-ecliptic-start.webp",
              mask: getCircleMaskUrl(49.8, 50, 5)
            },
            {
              role: "Tank",
              party: 2,
              description: "Stack middle under boss",
              imageUrl: "./m11s/toxic-ecliptic-start.webp",
              mask: getCircleMaskUrl(49.8, 50, 5)
            },
            {
              role: "Healer",
              party: 1,
              description: "Southwest to bait markers",
              imageUrl: "./m11s/toxic-ecliptic-start.webp",
              mask: getCircleMaskUrl(35.7, 74.5, 5)
            },
            {
              role: "Healer",
              party: 2,
              description: "Southeast to bait markers",
              imageUrl: "./m11s/toxic-ecliptic-start.webp",
              mask: getCircleMaskUrl(63.9, 74.3, 5)
            },
            {
              role: "Melee",
              party: 1,
              description: "Stack middle under boss",
              imageUrl: "./m11s/toxic-ecliptic-start.webp",
              mask: getCircleMaskUrl(50, 50.1, 5)
            },
            {
              role: "Melee",
              party: 2,
              description: "Stack middle under boss",
              imageUrl: "./m11s/toxic-ecliptic-start.webp",
              mask: getCircleMaskUrl(50, 50.1, 5)
            },
            {
              role: "Ranged",
              party: 1,
              description: "Northwest to bait markers",
              imageUrl: "./m11s/toxic-ecliptic-start.webp",
              mask: getCircleMaskUrl(35.9, 25.9, 5)
            },
            {
              role: "Ranged",
              party: 2,
              description: "Northeast to bait markers",
              imageUrl: "./m11s/toxic-ecliptic-start.webp",
              mask: getCircleMaskUrl(63.7, 25.7, 5)
            }
          ]
        },
        {
          mechanic: 'Safe Corners',
          description: 'Marked players go to safe corners\nNon-marked players stack under boss',
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#17",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Stack middle under boss",
              imageUrl: "./m11s/toxic-ecliptic-corners.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "Stack middle under boss",
              imageUrl: "./m11s/toxic-ecliptic-corners.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "If marked, go to safe corner\nIf not, stack middle under boss",
              imageUrl: "./m11s/toxic-ecliptic-corners.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "If marked, go to safe corner\nIf not, stack middle under boss",
              imageUrl: "./m11s/toxic-ecliptic-corners.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "Stack middle under boss",
              imageUrl: "./m11s/toxic-ecliptic-corners.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "Stack middle under boss",
              imageUrl: "./m11s/toxic-ecliptic-corners.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "If marked, go to safe corner\nIf not, stack middle under boss",
              imageUrl: "./m11s/toxic-ecliptic-corners.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "If marked, go to safe corner\nIf not, stack middle under boss",
              imageUrl: "./m11s/toxic-ecliptic-corners.webp"
            }
          ]
        },
        {
          mechanic: 'Puddles',
          description: 'Marked players drop 6 puddles at walls\nBoss group drops 6 puddles: Middle, then North, then CW',
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#18",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Drop puddles Middle, then North, then CW",
              imageUrl: "./m11s/toxic-ecliptic-puddles.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "Drop puddles Middle, then North, then CW",
              imageUrl: "./m11s/toxic-ecliptic-puddles.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "If marked, drop puddles at walls\nIf not, Drop puddles Middle, then North, then CW",
              imageUrl: "./m11s/toxic-ecliptic-puddles.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "If marked, drop puddles at walls\nIf not, Drop puddles Middle, then North, then CW",
              imageUrl: "./m11s/toxic-ecliptic-puddles.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "Drop puddles Middle, then North, then CW",
              imageUrl: "./m11s/toxic-ecliptic-puddles.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "Drop puddles Middle, then North, then CW",
              imageUrl: "./m11s/toxic-ecliptic-puddles.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "If marked, drop puddles at walls\nIf not, Drop puddles Middle, then North, then CW",
              imageUrl: "./m11s/toxic-ecliptic-puddles.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "If marked, drop puddles at walls\nIf not, Drop puddles Middle, then North, then CW",
              imageUrl: "./m11s/toxic-ecliptic-puddles.webp"
            }
          ]
        },
        {
          mechanic: 'Towers',
          description: '2 tank and 2 pair towers spawn randomly\nMT + H+R CW, OT + Melees CCW from North',
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#19",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Take first tank tower Clockwise from North",
              imageUrl: "./m11s/toxic-ecliptic-towers.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "Take first tank tower Counterclockwise from North",
              imageUrl: "./m11s/toxic-ecliptic-towers.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "If not marked, take first pair tower Clockwise from North",
              imageUrl: "./m11s/toxic-ecliptic-towers.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "If not marked, take first pair tower Clockwise from North",
              imageUrl: "./m11s/toxic-ecliptic-towers.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "Take first pair tower Counterclockwise from North",
              imageUrl: "./m11s/toxic-ecliptic-towers.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "Take first pair tower Counterclockwise from North",
              imageUrl: "./m11s/toxic-ecliptic-towers.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "If not marked, take first pair tower Clockwise from North",
              imageUrl: "./m11s/toxic-ecliptic-towers.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "If not marked, take first pair tower Clockwise from North",
              imageUrl: "./m11s/toxic-ecliptic-towers.webp"
            }
          ]
        },
        {
          mechanic: 'Tethers',
          description: 'One player from each tower gets tethered\nStretch across + CW to corner\nUntethered players under boss',
          imageUrl: "./m11s/toxic-ecliptic-tethers.webp",
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#20",
        },
        {
          mechanic: 'Two-way Fireball',
          description: '2 proximity-baited line AOEs\nE/W pairs, one person close, one person further to not double up\nTethers run behind to get in the line stacks',
          imageUrl: "./m11s/toxic-2way.webp",
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#21",
        },
        {
          mechanic: 'Four-way Fireball',
          description: '4 proximity-baited line AOEs\nBait intercard towards tether players in corners\nUse eyes',
          imageUrl: "./m11s/toxic-4way.webp",
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#22",
        },
        {
          mechanic: 'Hearbreak Kicks',
          description: 'Towers are 9s/11s/13s\nWill depend on tank comps and previous invuln usage, talk with your party',
          imageUrl: "./m11s/toxic-4way.webp"
        }
      ]
    }
  ]
};

const hectorStrat: Strat = {
  stratName: 'hector',
  description: 'Hector (Toxic/No Buddies)',
  notes: "Updated to use Hector video as source for Arena Split, select 'Kindred No Buddies' for raidplan version",
  stratUrl: {
    "Video by Hector Hectorson": "https://www.youtube.com/watch?v=w1uuwzhyf5A",
    "Toxic Friends Raidplan": "https://raidplan.io/plan/HJAbE7fuWodELUSB",
    "kindred flatliner raidplan (slides 1-2, 7-18)": "https://raidplan.io/plan/hvbysrfwvrc55ahz",
  },
  strats: [
    {
      phaseName: 'Raw Steel Trophy',
      mechs: [
        {
          mechanic: 'Axe',
          description: 'Tanks stack, Party spread',
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#1",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Stack for TB",
              imageUrl: "./m11s/toxic-raw-axe.webp",
              mask: getCircleMaskUrl(50, 36.4, 7.5)
            },
            {
              role: "Tank",
              party: 2,
              description: "Stack for TB",
              imageUrl: "./m11s/toxic-raw-axe.webp",
              mask: getCircleMaskUrl(50, 36.4, 7.5)
            },
            {
              role: "Healer",
              party: 1,
              description: "SSW far",
              imageUrl: "./m11s/toxic-raw-axe.webp",
              mask: getCircleMaskUrl(41.1, 84.8, 7.5)
            },
            {
              role: "Healer",
              party: 2,
              description: "SSE far",
              imageUrl: "./m11s/toxic-raw-axe.webp",
              mask: getCircleMaskUrl(59.1, 84.9, 7.5)
            },
            {
              role: "Melee",
              party: 1,
              description: "SW max melee",
              imageUrl: "./m11s/toxic-raw-axe.webp",
              mask: getCircleMaskUrl(43, 62.4, 7.5)
            },
            {
              role: "Melee",
              party: 2,
              description: "SE max melee",
              imageUrl: "./m11s/toxic-raw-axe.webp",
              mask: getCircleMaskUrl(57.1, 62.7, 7.5)
            },
            {
              role: "Ranged",
              party: 1,
              description: "WSW far",
              imageUrl: "./m11s/toxic-raw-axe.webp",
              mask: getCircleMaskUrl(26.7, 69.1, 7.5)
            },
            {
              role: "Ranged",
              party: 2,
              description: "ESE far",
              imageUrl: "./m11s/toxic-raw-axe.webp",
              mask: getCircleMaskUrl(72.7, 69.1, 7.5)
            }
          ]
        },
        {
          mechanic: 'Scythe',
          description: 'Tanks spread, Party stack',
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#2",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "NW for split TB",
              imageUrl: "./m11s/toxic-raw-scythe.webp",
              mask: getCircleMaskUrl(42.9, 37.6, 7.5)
            },
            {
              role: "Tank",
              party: 2,
              description: "NE for split TB",
              imageUrl: "./m11s/toxic-raw-scythe.webp",
              mask: getCircleMaskUrl(57, 38, 7.5)
            },
            {
              role: "Healer",
              party: 1,
              description: "Stack South",
              imageUrl: "./m11s/toxic-raw-scythe.webp",
              mask: getCircleMaskUrl(49.9, 67.1, 7.5)
            },
            {
              role: "Healer",
              party: 2,
              description: "Stack South",
              imageUrl: "./m11s/toxic-raw-scythe.webp",
              mask: getCircleMaskUrl(49.9, 67.1, 7.5)
            },
            {
              role: "Melee",
              party: 1,
              description: "Stack South",
              imageUrl: "./m11s/toxic-raw-scythe.webp",
              mask: getCircleMaskUrl(49.9, 67.1, 7.5)
            },
            {
              role: "Melee",
              party: 2,
              description: "Stack South",
              imageUrl: "./m11s/toxic-raw-scythe.webp",
              mask: getCircleMaskUrl(49.9, 67.1, 7.5)
            },
            {
              role: "Ranged",
              party: 1,
              description: "Stack South",
              imageUrl: "./m11s/toxic-raw-scythe.webp",
              mask: getCircleMaskUrl(49.9, 67.1, 7.5)
            },
            {
              role: "Ranged",
              party: 2,
              description: "Stack South",
              imageUrl: "./m11s/toxic-raw-scythe.webp",
              mask: getCircleMaskUrl(49.9, 67.1, 7.5)
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Assault Evolved',
      description: 'Boss will spawn one axe, sword, and scythe and turn to resolve them\nFirst 2 sets of 3 weapons will go clockwise',
      mechs: [
        {
          mechanic: 'Axe',
          description: 'Party stack out of AOE',
          imageUrl: "./m11s/toxic-assault-axe.webp",
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#3",
        },
        {
          mechanic: 'Sword',
          description: 'Light Party stacks\nG1 Left, G2 Right',
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#4",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Left facing boss",
              imageUrl: "./m11s/toxic-assault-sword.webp",
              mask: getCircleMaskUrl(34.2, 70.8, 5)
            },
            {
              role: "Tank",
              party: 2,
              description: "Right facing boss",
              imageUrl: "./m11s/toxic-assault-sword.webp",
              mask: getCircleMaskUrl(48.2, 46.7, 5)
            },
            {
              role: "Healer",
              party: 1,
              description: "Left facing boss",
              imageUrl: "./m11s/toxic-assault-sword.webp",
              mask: getCircleMaskUrl(34.2, 70.8, 5)
            },
            {
              role: "Healer",
              party: 2,
              description: "Right facing boss",
              imageUrl: "./m11s/toxic-assault-sword.webp",
              mask: getCircleMaskUrl(48.2, 46.7, 5)
            },
            {
              role: "Melee",
              party: 1,
              description: "Left facing boss",
              imageUrl: "./m11s/toxic-assault-sword.webp",
              mask: getCircleMaskUrl(34.2, 70.8, 5)
            },
            {
              role: "Melee",
              party: 2,
              description: "Right facing boss",
              imageUrl: "./m11s/toxic-assault-sword.webp",
              mask: getCircleMaskUrl(48.2, 46.7, 5)
            },
            {
              role: "Ranged",
              party: 1,
              description: "Left facing boss",
              imageUrl: "./m11s/toxic-assault-sword.webp",
              mask: getCircleMaskUrl(34.2, 70.8, 5)
            },
            {
              role: "Ranged",
              party: 2,
              description: "Right facing boss",
              imageUrl: "./m11s/toxic-assault-sword.webp",
              mask: getCircleMaskUrl(48.2, 46.7, 5)
            }
          ]
        },
        {
          mechanic: 'Scythe',
          description: 'Boss relative Proteans',
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#5",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Relative North",
              imageUrl: "./m11s/toxic-assault-scythe.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "Relative South",
              imageUrl: "./m11s/toxic-assault-scythe.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "Relative West",
              imageUrl: "./m11s/toxic-assault-scythe.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "Relative East",
              imageUrl: "./m11s/toxic-assault-scythe.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "Relative Southwest",
              imageUrl: "./m11s/toxic-assault-scythe.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "Relative Southeast",
              imageUrl: "./m11s/toxic-assault-scythe.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "Relative Northwest",
              imageUrl: "./m11s/toxic-assault-scythe.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "Relative Northeast",
              imageUrl: "./m11s/toxic-assault-scythe.webp"
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Void Stardust',
      description: '3 baited AOEs\nStart North and bait clockwise\nStack or spread after 3rd bait',
      imageUrl: "./m11s/toxic-void.webp",
      url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#6",
    },
    {
      phaseName: 'Dance of Domination Trophy',
      description: 'Open side is new South',
      url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#7",
      mechs: [
        {
          mechanic: 'Pairs',
          description: 'Pair stacks in gaps relative to new orientation',
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Relative West with M1\nUse inner letter markers",
              imageUrl: "./m11s/toxic-dance.webp",
              mask: getCircleMaskUrl(50.3, 72.1, 5)
            },
            {
              role: "Tank",
              party: 2,
              description: "Relative East with M2\nUse inner letter markers",
              imageUrl: "./m11s/toxic-dance.webp",
              mask: getCircleMaskUrl(50, 27.8, 5)
            },
            {
              role: "Healer",
              party: 1,
              description: "Relative Southwest with R1",
              imageUrl: "./m11s/toxic-dance.webp",
              mask: getCircleMaskUrl(74.8, 68.6, 5)
            },
            {
              role: "Healer",
              party: 2,
              description: "Relative Southeast with R2",
              imageUrl: "./m11s/toxic-dance.webp",
              mask: getCircleMaskUrl(74.7, 31.2, 5)
            },
            {
              role: "Melee",
              party: 1,
              description: "Relative West with MT\nUse inner letter markers",
              imageUrl: "./m11s/toxic-dance.webp",
              mask: getCircleMaskUrl(50.3, 72.1, 5)
            },
            {
              role: "Melee",
              party: 2,
              description: "Relative East with OT\nUse inner letter markers",
              imageUrl: "./m11s/toxic-dance.webp",
              mask: getCircleMaskUrl(50, 27.8, 5)
            },
            {
              role: "Ranged",
              party: 1,
              description: "Relative Southwest with H1",
              imageUrl: "./m11s/toxic-dance.webp",
              mask: getCircleMaskUrl(74.8, 68.6, 5)
            },
            {
              role: "Ranged",
              party: 2,
              description: "Relative Southeast with H2",
              imageUrl: "./m11s/toxic-dance.webp",
              mask: getCircleMaskUrl(74.7, 31.2, 5)
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Ultimate Trophy Weapons',
      mechs: [
        {
          mechanic: 'Weapons + Tornadoes',
          description: '6 weapons, resolve in the order they spawn\nBait tornadoes after last weapon',
          imageUrl: "./m11s/toxic-ultimate.webp",
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#8",
        }
      ]
    },
    {
      phaseName: 'Great Wall of Fire',
      description: 'Double hit double tankbuster that leaves a line\nIf not invulning, MT in front for first, then rotate 45 degrees CW for second',
      imageUrl: "./m11s/toxic-great-wall.webp",
      url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#9",
    },
    {
      phaseName: 'Orbital Omen',
      description: 'Tanks point boss North\n4 pairs of portals spawn North and East and fire lines\nBoss flanks are safe, dodge into intersecting lines after they go off',
      imageUrl: "./m11s/toxic-orbital.webp",
      url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#10",
    },
    {
      phaseName: 'Meteorain',
      description: 'Meteor bait order M > H > R\nClosest 2 players bait meteor markers\nShould end up with 3 meteors lined up SW\nMT grabs NE/NW tether\nOT grabs SW tether',
      mechs: [
        {
          mechanic: '1st Set',
          description: 'Melees close to bait meteors, then go NE/SW\nParty stack NW\nTanks in front for the first line stack',
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#11",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Stand in front of NW line stack",
              imageUrl: "./m11s/toxic-meteorain-1.webp",
              mask: getCircleMaskUrl(44.5, 43.5, 5)
            },
            {
              role: "Tank",
              party: 2,
              description: "Stand in front of NW line stack",
              imageUrl: "./m11s/toxic-meteorain-1.webp",
              mask: getCircleMaskUrl(44.5, 43.5, 5)
            },
            {
              role: "Healer",
              party: 1,
              description: "Stand in NW line stack, then get ready to bait 2nd meteors",
              imageUrl: "./m11s/toxic-meteorain-1.webp",
              mask: getCircleMaskUrl(41.8, 37.7, 5)
            },
            {
              role: "Healer",
              party: 2,
              description: "Stand in NW line stack, then get ready to bait 2nd meteors",
              imageUrl: "./m11s/toxic-meteorain-1.webp",
              mask: getCircleMaskUrl(41.8, 37.7, 5)
            },
            {
              role: "Melee",
              party: 1,
              description: "Bait meteor close, then drop NE",
              imageUrl: "./m11s/toxic-meteorain-1.webp",
              mask: getCircleMaskUrl(57.1, 38, 5)
            },
            {
              role: "Melee",
              party: 2,
              description: "Bait meteor close, then drop SW",
              imageUrl: "./m11s/toxic-meteorain-1.webp",
              mask: getCircleMaskUrl(43, 62.9, 5)
            },
            {
              role: "Ranged",
              party: 1,
              description: "Stand in NW line stack",
              imageUrl: "./m11s/toxic-meteorain-1.webp",
              mask: getCircleMaskUrl(41.8, 37.6, 5)
            },
            {
              role: "Ranged",
              party: 2,
              description: "Stand in NW line stack",
              imageUrl: "./m11s/toxic-meteorain-1.webp",
              mask: getCircleMaskUrl(41.8, 37.6, 5)
            }
          ]
        },
        {
          mechanic: '2nd Set',
          description: 'Healers close to bait meteors, then go NW/SW\nParty stack behind NE meteor to blow it up\nMT take NE tether, OT take SW tether',
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#12",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Take NE tank tether",
              imageUrl: "./m11s/toxic-meteorain-2.webp",
              mask: getCircleMaskUrl(52, 18.7, 5)
            },
            {
              role: "Tank",
              party: 2,
              description: "Take SW tank tether",
              imageUrl: "./m11s/toxic-meteorain-2.webp",
              mask: getCircleMaskUrl(45.8, 72.3, 5)
            },
            {
              role: "Healer",
              party: 1,
              description: "Bait meteor close, then drop NW",
              imageUrl: "./m11s/toxic-meteorain-2.webp",
              mask: getCircleMaskUrl(43, 38.1, 5)
            },
            {
              role: "Healer",
              party: 2,
              description: "Bait meteor close, then drop SW in line with first meteor",
              imageUrl: "./m11s/toxic-meteorain-2.webp",
              mask: getCircleMaskUrl(36.1, 74.9, 5)
            },
            {
              role: "Melee",
              party: 1,
              description: "Stand in NE line stack behind meteor",
              imageUrl: "./m11s/toxic-meteorain-2.webp",
              mask: getCircleMaskUrl(59.3, 33.9, 5)
            },
            {
              role: "Melee",
              party: 2,
              description: "Stand in NE line stack behind meteor",
              imageUrl: "./m11s/toxic-meteorain-2.webp",
              mask: getCircleMaskUrl(59.3, 33.9, 5)
            },
            {
              role: "Ranged",
              party: 1,
              description: "Stand in NE line stack, then get ready to bait 3rd meteors",
              imageUrl: "./m11s/toxic-meteorain-2.webp",
              mask: getCircleMaskUrl(59.3, 33.9, 5)
            },
            {
              role: "Ranged",
              party: 2,
              description: "Stand in NE line stack, then get ready to bait 3rd meteors",
              imageUrl: "./m11s/toxic-meteorain-2.webp",
              mask: getCircleMaskUrl(59.3, 33.9, 5)
            }
          ]
        },
        {
          mechanic: '3rd Set',
          description: 'Ranged close to bait meteors, then go NE/SW\nParty stack behind NW meteor to blow it up\nMT take NW tether, OT take SW tether',
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#13",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Take NW tank tether",
              imageUrl: "./m11s/toxic-meteorain-3.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "Take SW tank tether",
              imageUrl: "./m11s/toxic-meteorain-3.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "Stand in NW line stack behind meteor",
              imageUrl: "./m11s/toxic-meteorain-3.webp",
              mask: getCircleMaskUrl(41, 33.3, 5)
            },
            {
              role: "Healer",
              party: 2,
              description: "Stand in NW line stack behind meteor",
              imageUrl: "./m11s/toxic-meteorain-3.webp",
              mask: getCircleMaskUrl(41, 33.3, 5)
            },
            {
              role: "Melee",
              party: 1,
              description: "Stand in NW line stack behind meteor",
              imageUrl: "./m11s/toxic-meteorain-3.webp",
              mask: getCircleMaskUrl(41, 33.3, 5)
            },
            {
              role: "Melee",
              party: 2,
              description: "Stand in NW line stack behind meteor",
              imageUrl: "./m11s/toxic-meteorain-3.webp",
              mask: getCircleMaskUrl(41, 33.3, 5)
            },
            {
              role: "Ranged",
              party: 1,
              description: "Bait meteor close, then drop SW far in line with other two meteors",
              imageUrl: "./m11s/toxic-meteorain-3.webp",
              mask: getCircleMaskUrl(28.8, 87.5, 5)
            },
            {
              role: "Ranged",
              party: 2,
              description: "Bait meteor close, then drop NE",
              imageUrl: "./m11s/toxic-meteorain-3.webp",
              mask: getCircleMaskUrl(57, 37.6, 5)
            }
          ]
        },
        {
          mechanic: '4th Set',
          description: 'Party stack behind NE meteor to blow it up\nRun SW after to hide',
          imageUrl: "./m11s/toxic-meteorain-4.webp",
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#14",
        }
      ]
    },
    {
      phaseName: 'Arena Split',
      tag: 'arenasplit',
      mechs: arenaSplitMechs
    },
    {
      phaseName: 'Ecliptic Stampede',
      mechs: [
        {
          mechanic: 'Start',
          description: 'Melees + Tanks stack under boss\nRanged + Healers stay out to bait 2 markers\nIf 2 on the same side get marked, the one closer to the proximity AOE will adjust',
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#16",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Stack middle under boss",
              imageUrl: "./m11s/toxic-ecliptic-start.webp",
              mask: getCircleMaskUrl(49.8, 50, 5)
            },
            {
              role: "Tank",
              party: 2,
              description: "Stack middle under boss",
              imageUrl: "./m11s/toxic-ecliptic-start.webp",
              mask: getCircleMaskUrl(49.8, 50, 5)
            },
            {
              role: "Healer",
              party: 1,
              description: "Southwest to bait markers",
              imageUrl: "./m11s/toxic-ecliptic-start.webp",
              mask: getCircleMaskUrl(35.7, 74.5, 5)
            },
            {
              role: "Healer",
              party: 2,
              description: "Southeast to bait markers",
              imageUrl: "./m11s/toxic-ecliptic-start.webp",
              mask: getCircleMaskUrl(63.9, 74.3, 5)
            },
            {
              role: "Melee",
              party: 1,
              description: "Stack middle under boss",
              imageUrl: "./m11s/toxic-ecliptic-start.webp",
              mask: getCircleMaskUrl(50, 50.1, 5)
            },
            {
              role: "Melee",
              party: 2,
              description: "Stack middle under boss",
              imageUrl: "./m11s/toxic-ecliptic-start.webp",
              mask: getCircleMaskUrl(50, 50.1, 5)
            },
            {
              role: "Ranged",
              party: 1,
              description: "Northwest to bait markers",
              imageUrl: "./m11s/toxic-ecliptic-start.webp",
              mask: getCircleMaskUrl(35.9, 25.9, 5)
            },
            {
              role: "Ranged",
              party: 2,
              description: "Northeast to bait markers",
              imageUrl: "./m11s/toxic-ecliptic-start.webp",
              mask: getCircleMaskUrl(63.7, 25.7, 5)
            }
          ]
        },
        {
          mechanic: 'Safe Corners',
          description: 'Marked players go to safe corners\nNon-marked players stack under boss',
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#17",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Stack middle under boss",
              imageUrl: "./m11s/toxic-ecliptic-corners.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "Stack middle under boss",
              imageUrl: "./m11s/toxic-ecliptic-corners.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "If marked, go to safe corner\nIf not, stack middle under boss",
              imageUrl: "./m11s/toxic-ecliptic-corners.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "If marked, go to safe corner\nIf not, stack middle under boss",
              imageUrl: "./m11s/toxic-ecliptic-corners.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "Stack middle under boss",
              imageUrl: "./m11s/toxic-ecliptic-corners.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "Stack middle under boss",
              imageUrl: "./m11s/toxic-ecliptic-corners.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "If marked, go to safe corner\nIf not, stack middle under boss",
              imageUrl: "./m11s/toxic-ecliptic-corners.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "If marked, go to safe corner\nIf not, stack middle under boss",
              imageUrl: "./m11s/toxic-ecliptic-corners.webp"
            }
          ]
        },
        {
          mechanic: 'Puddles',
          description: 'Marked players drop 6 puddles at walls\nBoss group drops 6 puddles: Middle, then North, then CW',
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#18",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Drop puddles Middle, then North, then CW",
              imageUrl: "./m11s/toxic-ecliptic-puddles.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "Drop puddles Middle, then North, then CW",
              imageUrl: "./m11s/toxic-ecliptic-puddles.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "If marked, drop puddles at walls\nIf not, Drop puddles Middle, then North, then CW",
              imageUrl: "./m11s/toxic-ecliptic-puddles.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "If marked, drop puddles at walls\nIf not, Drop puddles Middle, then North, then CW",
              imageUrl: "./m11s/toxic-ecliptic-puddles.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "Drop puddles Middle, then North, then CW",
              imageUrl: "./m11s/toxic-ecliptic-puddles.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "Drop puddles Middle, then North, then CW",
              imageUrl: "./m11s/toxic-ecliptic-puddles.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "If marked, drop puddles at walls\nIf not, Drop puddles Middle, then North, then CW",
              imageUrl: "./m11s/toxic-ecliptic-puddles.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "If marked, drop puddles at walls\nIf not, Drop puddles Middle, then North, then CW",
              imageUrl: "./m11s/toxic-ecliptic-puddles.webp"
            }
          ]
        },
        {
          mechanic: 'Towers',
          description: '2 tank and 2 pair towers spawn randomly\nMT + H+R CW, OT + Melees CCW from North',
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#19",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Take first tank tower Clockwise from North",
              imageUrl: "./m11s/toxic-ecliptic-towers.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "Take first tank tower Counterclockwise from North",
              imageUrl: "./m11s/toxic-ecliptic-towers.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "If not marked, take first pair tower Clockwise from North",
              imageUrl: "./m11s/toxic-ecliptic-towers.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "If not marked, take first pair tower Clockwise from North",
              imageUrl: "./m11s/toxic-ecliptic-towers.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "Take first pair tower Counterclockwise from North",
              imageUrl: "./m11s/toxic-ecliptic-towers.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "Take first pair tower Counterclockwise from North",
              imageUrl: "./m11s/toxic-ecliptic-towers.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "If not marked, take first pair tower Clockwise from North",
              imageUrl: "./m11s/toxic-ecliptic-towers.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "If not marked, take first pair tower Clockwise from North",
              imageUrl: "./m11s/toxic-ecliptic-towers.webp"
            }
          ]
        },
        {
          mechanic: 'Tethers',
          description: 'One player from each tower gets tethered\nStretch across + CW to corner\nUntethered players under boss',
          imageUrl: "./m11s/toxic-ecliptic-tethers.webp",
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#20",
        },
        {
          mechanic: 'Two-way Fireball',
          description: '2 proximity-baited line AOEs\nE/W pairs, one person close, one person further to not double up\nTethers run behind to get in the line stacks',
          imageUrl: "./m11s/toxic-2way.webp",
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#21",
        },
        {
          mechanic: 'Four-way Fireball',
          description: '4 proximity-baited line AOEs\nBait intercard towards tether players in corners\nUse eyes',
          imageUrl: "./m11s/toxic-4way.webp",
          url: "https://raidplan.io/plan/HJAbE7fuWodELUSB#22",
        },
        {
          mechanic: 'Hearbreak Kicks',
          description: 'Towers are 9s/11s/13s\nWill depend on tank comps and previous invuln usage, talk with your party',
          imageUrl: "./m11s/toxic-4way.webp"
        }
      ]
    }
  ]
};

export const m11sStrats: Strat[] = [hectorStrat, toxicStrat];

export const m11sFightConfig: FightConfig = {
  fightKey: "m11s",
  title: "AAC Heavyweight M3 (Savage)",
  abbreviatedTitle: "M11S",
  subtitle: "M11S Patch 7.4",
  cheatsheetTitle: "M11S Cheatsheet",
  useModernCheatsheet: true,
  strats: {
    hector: {
      label: "Hector (Toxic/No Buddies)",
      defaults: {
        arenasplit: "hector"
      },
      badges: [
        {
          text: "NA",
          class: "bg-blue-600 text-white"
        }
      ]
    },
    toxic: {
      label: "Toxic Friends",
      defaults: {
        arenasplit: "toxic"
      }
    }
  },
  toggles: [
    {
      key: "arenasplit",
      label: "Arena Split",
      defaultValue: "toxic",
      options: [
        {
          value: "toxic",
          label: "Toxic"
        },
        {
          value: "nobuddies",
          label: "Kindred No Buddies",
          url: {
            name: "kindred flatliner raidplan (slides 1-2, 7-18)",
            url: "https://raidplan.io/plan/hvbysrfwvrc55ahz"
          }
        },
        {
          value: "hector",
          label: "Hector No Buddies",
          url: {
            name: "Video by Hector Hectorson",
            url: "https://www.youtube.com/watch?v=w1uuwzhyf5A",
          }
        }
      ]
    }
  ],
  defaultStratName: "nobuddies",
  timeline: []
};
