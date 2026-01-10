import type { FightConfig, Strat, MechanicStrat } from '$lib/types';

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
    mechanic: 'Towers 2',
    description: '‼️TAKE THE TOWER IN THE QUADRANT YOU RESOLVED TETHER/MARKERS',
    imageUrl: "./m11s/toxic-split-towers-2.webp"
  },
  {
    mechanic: 'Get Slabbed',
    description: 'KB to back of boss, then look at hitbox to dodge AOE',
    imageUrl: "./m11s/toxic-slab.webp"
  }
];

const buddiesArenaSplit: MechanicStrat[] = [
  {
    mechanic: 'Split + Conga',
    description: '4 players get tethered, 2 on each side\nG1 West, G2 East',
    imageUrl: "./m11s/kindred-split-conga.webp"
  },
  {
    mechanic: 'Towers',
    description: 'EVERYONE take a tower\nKB to follow your buddy',
    imageUrl: "./m11s/kindred-buddies-towers.webp"
  },
  {
    mechanic: 'Fire Breath Baits',
    description: 'Non-tethered buddies close to boss to bait fire breaths',
    imageUrl: "./m11s/kindred-buddies-baits.webp"
  },
  {
    mechanic: 'Puddles',
    description: 'TBD',
    imageUrl: "./m11s/kindred-buddies-puddles-2.webp"
  },
  {
    mechanic: 'Lineup + Portal',
    description: 'TBD',
    imageUrl: "./m11s/kindred-buddies-lineup.webp"
  },
  {
    mechanic: 'Towers 2',
    description: 'TBD',
    imageUrl: "./m11s/kindred-buddies-towers-2.webp"
  },
  {
    mechanic: 'Get Slabbed',
    description: 'TBD',
    imageUrl: "./m11s/kindred-slab.webp"
  }
];

const nobuddiesArenaSplit: MechanicStrat[] = [
  {
    mechanic: 'Split + Conga',
    description: 'TBD',
    imageUrl: "./m11s/kindred-split-conga.webp"
  },
  {
    mechanic: 'Towers',
    description: 'TBD',
    imageUrl: "./m11s/kindred-nobuddies-towers.webp"
  },
  {
    mechanic: 'Fire Breath Baits',
    description: 'TBD',
    imageUrl: "./m11s/kindred-nobuddies-towers.webp"
  },
  {
    mechanic: 'Puddles',
    description: 'TBD',
    imageUrl: "./m11s/kindred-nobuddies-puddles.webp"
  },
  {
    mechanic: 'Lineup + Portal',
    description: 'TBD',
    imageUrl: "./m11s/kindred-nobuddies-towers.webp"
  },
  {
    mechanic: 'Towers 2',
    description: 'TBD',
    imageUrl: "./m11s/kindred-buddies-meteors.webp"
  },
  {
    mechanic: 'Get Slabbed',
    description: 'TBD',
    imageUrl: "./m11s/kindred-slab.webp"
  }
];

const arenaSplitMechs: Record<string, MechanicStrat[]> = {
  toxic: toxicArenaSplit,
  buddies: buddiesArenaSplit,
  nobuddies: nobuddiesArenaSplit
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
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-raw-axe.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-raw-axe.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-raw-axe.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-raw-axe.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-raw-axe.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-raw-axe.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-raw-axe.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-raw-axe.webp"
            }
          ]
        },
        {
          mechanic: 'Scythe',
          description: 'Tanks spread, Party stack',
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-raw-scythe.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-raw-scythe.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-raw-scythe.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-raw-scythe.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-raw-scythe.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-raw-scythe.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-raw-scythe.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-raw-scythe.webp"
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
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-assault-axe.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-assault-axe.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-assault-axe.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-assault-axe.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-assault-axe.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-assault-axe.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-assault-axe.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-assault-axe.webp"
            }
          ]
        },
        {
          mechanic: 'Sword',
          description: 'Light Party stacks\nG1 Left, G2 Right',
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-assault-sword.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-assault-sword.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-assault-sword.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-assault-sword.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-assault-sword.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-assault-sword.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-assault-sword.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-assault-sword.webp"
            }
          ]
        },
        {
          mechanic: 'Scythe',
          description: 'Boss relative Proteans',
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-assault-scythe.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-assault-scythe.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-assault-scythe.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-assault-scythe.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-assault-scythe.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-assault-scythe.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-assault-scythe.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-assault-scythe.webp"
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Void Stardust',
      description: '3 baited AOEs\nStart North and bait clockwise\nStack or spread after 3rd bait',
      imageUrl: "./m11s/toxic-void.webp"
    },
    {
      phaseName: 'Dance of Domination Trophy',
      description: 'Open side is new South',
      mechs: [
        {
          mechanic: 'Pairs',
          description: 'Pair stacks in gaps relative to new orientation',
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-dance.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-dance.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-dance.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-dance.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-dance.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-dance.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-dance.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-dance.webp"
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
          imageUrl: "./m11s/toxic-ultimate.webp"
        }
      ]
    },
    {
      phaseName: 'Great Wall of Fire',
      description: 'Double hit double tankbuster that leaves a line\nIf not invulning, MT in front for first, then rotate 45 degrees CW for second',
      imageUrl: "./m11s/toxic-great-wall.webp"
    },
    {
      phaseName: 'Orbital Omen',
      description: 'Tanks point boss North\n4 pairs of portals spawn North and East and fire lines\nBoss flanks are safe, dodge into intersecting lines after they go off',
      imageUrl: "./m11s/toxic-orbital.webp"
    },
    {
      phaseName: 'Meteorain',
      description: 'Meteor bait order M > H > R\nClosest 2 players bait meteor markers\nShould end up with 3 meteors lined up SW\nMT grabs NE/NW tether\nOT grabs SW tether',
      mechs: [
        {
          mechanic: '1st Set',
          description: 'Melees close to bait meteors, then go NE/SW\nParty stack NW\nTanks in front for the first line stack',
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-1.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-1.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-1.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-1.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-1.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-1.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-1.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-1.webp"
            }
          ]
        },
        {
          mechanic: '2nd Set',
          description: 'Healers close to bait meteors, then go NW/SW\nParty stack behind NE meteor to blow it up\nMT take NE tether, OT take SW tether',
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-2.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-2.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-2.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-2.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-2.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-2.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-2.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-2.webp"
            }
          ]
        },
        {
          mechanic: '3rd Set',
          description: 'Ranged close to bait meteors, then go NE/SW\nParty stack behind NW meteor to blow it up\nMT take NW tether, OT take SW tether',
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-3.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-3.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-3.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-3.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-3.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-3.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-3.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-3.webp"
            }
          ]
        },
        {
          mechanic: '4th Set',
          description: 'Party stack behind NE meteor to blow it up\nRun SW after to hide',
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-4.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-4.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-4.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-4.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-4.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-4.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-4.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-meteorain-4.webp"
            }
          ]
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
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-start.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-start.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-start.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-start.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-start.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-start.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-start.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-start.webp"
            }
          ]
        },
        {
          mechanic: 'Safe Corners',
          description: 'Marked players go to safe corners\nNon-marked players stack under boss',
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-corners.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-corners.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-corners.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-corners.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-corners.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-corners.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-corners.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-corners.webp"
            }
          ]
        },
        {
          mechanic: 'Puddles',
          description: 'Marked players drop 6 puddles at walls\nBoss group drops 6 puddles: Middle, then North, then CW',
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-puddles.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-puddles.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-puddles.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-puddles.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-puddles.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-puddles.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-puddles.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-puddles.webp"
            }
          ]
        },
        {
          mechanic: 'Towers',
          description: '2 tank and 2 pair towers spawn randomly\nMT + H+R CW, OT + Melees CCW from North',
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-towers.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-towers.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-towers.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-towers.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-towers.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-towers.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-towers.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "",
              imageUrl: "./m11s/toxic-ecliptic-towers.webp"
            }
          ]
        },
        {
          mechanic: 'Tethers',
          description: '4 random players get tethered\nStretch across + CW to corner\nUntethered players under boss',
          imageUrl: "./m11s/toxic-ecliptic-tethers.webp"
        },
        {
          mechanic: 'Two-way Fireball',
          description: '2 proximity-baited line AOEs\nE/W pairs, one person close, one person further to not double up\nTethers run behind to get in the line stacks',
          imageUrl: "./m11s/toxic-2way.webp"
        },
        {
          mechanic: 'Four-way Fireball',
          description: '4 proximity-baited line AOEs\nBait intercard towards tether players in corners\nUse eyes',
          imageUrl: "./m11s/toxic-4way.webp"
        }
      ]
    }
  ]
};

export const m11sStrats: Strat[] = [toxicStrat];

export const m11sFightConfig: FightConfig = {
  fightKey: "m11s",
  title: "AAC Heavyweight M3 (Savage)",
  abbreviatedTitle: "M11S",
  subtitle: "M11S Patch 7.4",
  cheatsheetTitle: "M11S Cheatsheet",
  useModernCheatsheet: true,
  strats: {
    toxic: {
      label: "Toxic Friends",
      defaults: {
        arenasplit: "toxic"
      },
      badges: [
        {
          text: "NA",
          class: "bg-blue-600 text-white"
        }
      ]
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
          value: "buddies",
          label: "Kindred Buddies"
        },
        {
          value: "nobuddies",
          label: "Kindred No Buddies"
        }
      ]
    }
  ],
  defaultStratName: "toxic",
  timeline: []
};
