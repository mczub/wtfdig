import type { FightConfig, Strat, MechanicStrat } from '$lib/types';

// Toggle-dependent mechs for Mortal Slayer
const toxicMortalSlayer: MechanicStrat[] = [
  {
    mechanic: 'Conga Prio',
    description: 'Line up H1-M1-R1-R2-M2-H2\nTake balls in pairs in the order they spawned',
    imageUrl: './m12s/p1-toxic-mortal-conga.webp',
    url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#1'
  },
];

const roleMortalSlayer: MechanicStrat[] = [
  {
    mechanic: 'DPS/Support Sides',
    description: 'Support move to side with 2 purple orbs, DPS on 4 green orbs\nDPS: M1-M2-R1-R2\nSupport: H1-H2, Tanks take purples MT-OT',
    imageUrl: './m12s/p1-roles-mortal-sides.webp',
    url: 'https://raidplan.io/plan/KbxeCHoPkzWbt_HB#2',
  },
];

const mortalSlayerMechs: Record<string, MechanicStrat[]> = {
  toxic: toxicMortalSlayer,
  role: roleMortalSlayer
};

// Toggle-dependent mechs for Replication 2
const cloneZoneReplication2: MechanicStrat[] = [
  {
    mechanic: 'Acting Light Parties',
    description: 'South to NW: Acting LP1\nNorth to SE: Acting LP2',
    imageUrl: './m12s/cz-rep2-2.webp'
  },
  {
    mechanic: 'Tether Assignments',
    description: 'Based on initial clone spawn, take a tether (1x Boss tether, 2x Cleaves, 2x Stacks, 2x Defamations)\nSouth clone will take nothing',
    imageUrl: './m12s/cz-rep2-4.webp'
  },
  {
    mechanic: 'Player Defamations',
    description: 'Defamations go ESE and WSW\nNothing player go South\nBoss tether goes on the diamond under A\nStacks and Cleaves go to North edge',
    imageUrl: './m12s/cz-rep2-5.webp'
  },
  {
    mechanic: 'Player Stacks',
    description: 'Light party stacks on stack players NW and NE',
    imageUrl: './m12s/cz-rep2-7.webp'
  },
  {
    mechanic: 'Player Cleaves',
    description: 'Cleave players go between party and boss to bait cleaves out of North of arena',
    imageUrl: './m12s/cz-rep2-8.webp'
  },
  {
    mechanic: 'Snaking Kick',
    description: 'Dodge behind frontal cleave\nA marker always safe',
    imageUrl: './m12s/cz-rep2-9.webp'
  },
  {
    mechanic: 'Netherwrath Far',
    description: 'Defamation players bait far pairs on NW/NE arena floor diamonds\nStack/Cleave players bait boss proteans North',
    imageUrl: './m12s/cz-rep2-13.webp'
  },
  {
    mechanic: 'Netherwrath Near',
    description: 'Defamation players bait pairs on boss hitbox\nStack/Cleave players bait boss proteans North',
    imageUrl: './m12s/cz-rep2-14.webp'
  },
  {
    mechanic: 'Clone First Defam + Cleave',
    description: 'Ranged will end up West\nMelees will end up East\nRanged be careful of first Clone defamation',
    imageUrl: './m12s/cz-rep2-16.webp'
  },
  {
    mechanic: 'Clone Stacks',
    description: 'Ranged stack West, Melee stack East',
    imageUrl: './m12s/cz-rep2-17.webp'
  },
  {
    mechanic: 'Clone Second Defam + Cleave',
    description: 'Melees dodge back NE to avoid second Clone defamation',
    imageUrl: './m12s/cz-rep2-18.webp'
  }
];

const dnReplication2: MechanicStrat[] = [
  {
    mechanic: 'Light Parties',
    description: 'TBD'
  },
  {
    mechanic: 'Tether Assignments',
    description: 'TBD'
  },
  {
    mechanic: 'Player Defamations',
    description: 'TBD'
  },
  {
    mechanic: 'Player Stacks',
    description: 'TBD'
  },
  {
    mechanic: 'Player Cleaves',
    description: 'TBD'
  },
  {
    mechanic: 'Snaking Kick',
    description: 'TBD'
  },
  {
    mechanic: 'Netherwrath Far',
    description: 'TBD'
  },
  {
    mechanic: 'Netherwrath Near',
    description: 'TBD'
  },
  {
    mechanic: 'Clone First Defam + Cleave',
    description: 'TBD'
  },
  {
    mechanic: 'Clone Stacks',
    description: 'TBD'
  },
  {
    mechanic: 'Clone Second Defam + Cleave',
    description: 'TBD'
  }
];

const replication2Mechs: Record<string, MechanicStrat[]> = {
  clonezone: cloneZoneReplication2,
  dn: dnReplication2
};

const shabinStrat: Strat = {
  stratName: 'shabin',
  description: 'pastebin.com/HzCeD1y4 - Identical to Modified for P1 (Toxic/Role Mortal)',
  notes: '',
  stratUrl: {
    'Shabin Pastebin': 'https://pastebin.com/HzCeD1y4',
    'Role Mortal Slayer': 'https://raidplan.io/plan/KbxeCHoPkzWbt_HB',
    'Toxic Friends P1 Raidplan (original)': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn',
    'Toxic Friends P1 Raidplan (minus Mortal Slayer)': 'https://raidplan.io/plan/m1AMDbG_jxkgkPRc',
    'P2: DN Replication Raidplan': 'https://raidplan.io/plan/9ncP6UIDURcWuRuO',
    'P2: DN Staging/Reenactment 1': 'https://raidplan.io/plan/ZacmNyJxptIVKNrK',
    'P2: Superstring Theory 3 Eletric Boogaloo': 'https://raidplan.io/plan/OnhUS061LkI3xlmg',
    'P2: DN Idyllic Dream': 'https://raidplan.io/plan/zoeminUT6l2gaOWp'
  },
  strats: [
    // P1: Lindwurm
    {
      phaseName: 'Mortal Slayer',
      tag: 'mortalslayer',
      description: 'Purple (TB) and Green (Spread) orbs hit the closest players on each side in the order they spawned\nCan hit two players on one side, make sure to watch spawns',
      mechs: mortalSlayerMechs
    },
    {
      phaseName: 'Grotesquerie: Act 1',
      tag: 'p1',
      mechs: [
        {
          mechanic: 'Debuffs + Starting',
          description: 'One role gets stack (red or no debuff), one role gets spread (yellow circle debuff)\nLoosely preposition near 1 marker NW for baits\nWatch blob on character model for cleave direction',
          imageUrl: './m12s/p1-toxic-act1-debuffs.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#6'
        },
        {
          mechanic: 'Puddles',
          description: 'Bait 4 puddles from 1 to A then middle\nMove behind dragon head after last bait',
          imageUrl: './m12s/p1-toxic-act1-puddles.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#7'
        },
        {
          mechanic: 'Stack/Spread (DPS spread)',
          description: 'If DPS spread, M1-M2-R1-R2 roughly North to South\nSupports on 1 or 2 marker, Tanks on North side, Supports on East/West\nPoint cleaves out of arena',
          imageUrl: './m12s/p1-toxic-act1-dps-zoomed.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#8'
        },
        {
          mechanic: 'Stack/Spread (Support spread)',
          description: 'If Support spread, MT-OT-H1-H2 roughly North to South\nDPS on 1 or 2 marker, Melees on North side, Ranged on East/West\nPoint cleaves out of arena',
          imageUrl: './m12s/p1-toxic-act1-supports-zoomed.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#9'
        },
        {
          mechanic: 'Stack + TB',
          description: 'Party stays for stack, Tanks sprint to opposite side\nSafe to stack tankbusters',
          imageUrl: './m12s/p1-toxic-act1-tb.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#10'
        }
      ]
    },
    {
      phaseName: 'Grotesquerie: Act 2',
      tag: 'p1',
      mechs: [
        {
          mechanic: 'Cheatsheet',
          description: '',
          imageUrl: './m12s/p1-toxic-act2-cheatsheet.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#21'
        },
        {
          mechanic: 'Debuffs',
          description: 'Each player gets a number (I, II, III, IV) and an A or B debuff\nEach player needs to break a chain and take a tower\nChains spawn when debuffs expire\nTowers spawn on chains after chains break and blobs after debuffs expire\nBreak chains in I-II-III-IV order\nTake towers in III-IV-I-II order',
          imageUrl: './m12s/p1-toxic-act2-debuffs.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#11'
        },
        {
          mechanic: 'Blobs',
          description: '4 blobs spawn in order\nParty gets sucked in and stays stacked',
          imageUrl: './m12s/p1-toxic-act2-blobs.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#12'
        },
        {
          mechanic: '1 (I) Debuffs',
          description: 'Stay middle until debuffs expire\nA: run out of snake to break, then take 3rd blob tower\nB: stay inside to break, then take 3rd chain tower',
          imageUrl: './m12s/p1-toxic-act2-break1.webp',
          url: {
            'First break': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#13',
            'Third towers': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#18'
          },
        },
        {
          mechanic: '2 (II) Debuffs',
          description: 'Stay middle until debuffs expire\nA: run out of snake to break, then take 4rd blob tower\nB: stay inside to break, then take 4rd chain tower',
          imageUrl: './m12s/p1-toxic-act2-break2.webp',
          url: {
            'Second break': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#15',
            'Fourth towers': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#20'
          },
        },
        {
          mechanic: '3 (III) Debuffs',
          description: 'Take towers inside snake, get back center, break chains\nA: take 1st blob tower, then run out of snake to break\nB: take 1st chain tower, then stay inside to break',
          imageUrl: './m12s/p1-toxic-act2-towers1.webp',
          url: {
            'First towers': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#14',
            'Third break': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#17'
          },
        },
        {
          mechanic: '4 (IV) Debuffs',
          description: 'Take towers inside snake, get back center, break chains\nA: take 2nd blob tower, then run out of snake to break\nB: take 2nd chain tower, then stay inside to break',
          imageUrl: './m12s/p1-toxic-act2-towers2.webp',
          url: {
            'Second towers': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#16',
            'Fourth break': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#19'
          },
        },
      ]
    },
    {
      phaseName: 'Grotesquerie: Act 3',
      tag: 'p1',
      description: 'Downtime Phase\nEach platform has 1 support and 1 DPS\nTowers spawn in blob direction like DSR P3',
      mechs: [
        {
          mechanic: 'Platforms Cheatsheet',
          description: '',
          imageUrl: './m12s/p1-toxic-act3-cheatsheet.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#28'

        },
        {
          mechanic: 'Cardinal Platforms',
          description: 'Go to platform depending on your blob direction',
          imageUrl: './m12s/p1-toxic-act3-card-platforms.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#22'
        },
        {
          mechanic: 'Cardinal TBs',
          description: 'Bait tankbusters north',
          imageUrl: './m12s/p1-toxic-act3-card-tb.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#23'
        },
        {
          mechanic: 'Cardinal AOEs',
          description: '3 eastmost and 3 westmost bait AOEs',
          imageUrl: './m12s/p1-toxic-act3-card-aoe.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#24'
        },
        {
          mechanic: 'Intercard Platforms',
          description: 'Go to platform depending on your blob direction\nRotate CW from your cardinal spot if intercards',
          imageUrl: './m12s/p1-toxic-act3-inter-platforms.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#25'
        },
        {
          mechanic: 'Intercard TBs',
          description: 'Bait tankbusters diagonally north',
          imageUrl: './m12s/p1-toxic-act3-inter-tb.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#26'
        },
        {
          mechanic: 'Intercard AOEs',
          description: '3 eastmost and 3 westmost bait AOEs',
          imageUrl: './m12s/p1-toxic-act3-inter-aoe.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#27'
        }
      ]
    },
    {
      phaseName: 'Grotesquerie: Curtain Call',
      tag: 'p1',
      mechs: [
        {
          mechanic: 'Cardinal Puddles',
          description: 'Group starts NW and baits 5 AOEs around North edge',
          imageUrl: './m12s/p1-toxic-cc-card-puddles.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#29'
        },
        {
          mechanic: 'Cardinal Spreads',
          description: 'Purple debuffs spread and get cleaved by head\nYellow debuffs spread in safespot',
          imageUrl: './m12s/p1-toxic-cc-card-spreads.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#30'
        },
        {
          mechanic: 'Intercard Puddles',
          description: 'Group baits 5 AOEs around NW platform',
          imageUrl: './m12s/p1-toxic-cc-inter-puddles.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#31'
        },
        {
          mechanic: 'Intercard Spreads',
          description: 'Purple debuffs spread and get cleaved by head\nYellow debuffs spread in safespot',
          imageUrl: './m12s/p1-toxic-cc-inter-spreads.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#32'
        },
        {
          mechanic: 'Chain Start',
          description: 'Stack middle and wait for chain to snapshot',
          imageUrl: './m12s/p1-toxic-cc-chain-start.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#33'
        },
        {
          mechanic: 'Chain Break',
          description: 'Spread to break chains\nSupports West, DPS East\nFrom N to S MT-OT-H1-H2, M1-M2-R1-R2',
          imageUrl: './m12s/p1-toxic-cc-chain-break.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#34'
        },
        {
          mechanic: 'Blob Dodge',
          description: 'Dodge to safe corners\nMelees/tanks can sprint in for uptime',
          imageUrl: './m12s/p1-toxic-cc-blobs.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#35'
        }
      ]
    },
    {
      phaseName: 'Slaughtershed',
      tag: 'p1',
      description: 'Repeats 3x',
      mechs: [
        {
          mechanic: 'Start',
          description: 'One role gets spread, one role gets stack\nBlobs spawn, leaving two safe corners North',
          imageUrl: './m12s/p1-toxic-slaughter-start.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#36'
        },
        {
          mechanic: 'Stack/Spread',
          description: 'Spreads in North corner with no blob\nStack in North corner with blob',
          imageUrl: './m12s/p1-toxic-slaughter-stackspread.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#37'
        },
        {
          mechanic: 'Dragon Arms',
          description: 'Dragons = half room cleaves',
          imageUrl: './m12s/p1-toxic-slaughter-dragons.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#38'
        },
        {
          mechanic: 'Hands',
          description: 'Hands = BIG knockback from corner',
          imageUrl: './m12s/p1-toxic-slaughter-hands.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#39'
        },
      ]
    },
    // P2: Lindwurm II
    {
      phaseName: 'Replication 1',
      tag: 'p2',
      mechs: [
        {
          mechanic: 'Setup',
          description: 'G1 N, G2 S\nMelees NE/SW, Ranged NW/SE',
          imageUrl: "./m12s/dn-rep1-1.webp"
        },
        {
          mechanic: 'First Clones',
          description: '2 pairs get Dark, 1 pair gets Fire',
          imageUrl: "./m12s/dn-rep1-5.webp"
        },
        {
          mechanic: 'Second Clone Jump',
          description: 'Clones jump to intercard, will be Dark/Fire/Dark/Fire or Fire/Dark/Fire/Dark',
          imageUrl: "./m12s/dn-rep1-10.webp"
        },
        {
          mechanic: 'Dark Debuff',
          description: 'Dark Debuffs need to take pair Fire hits',
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Go dead center of arena",
              imageUrl: "./m12s/dn-rep1-17.webp",
            },
            {
              role: "Tank",
              party: 2,
              description: "Go dead center of arena",
              imageUrl: "./m12s/dn-rep1-17.webp",
            },
            {
              role: "Healer",
              party: 1,
              description: "Find Fire clone on wall\nGo N/CW and stand on letter marker next to Fire clone with ranged",
              imageUrl: "./m12s/dn-rep1-12.webp",
            },
            {
              role: "Healer",
              party: 2,
              description: "Find Fire clone on wall\nGo N/CW and stand on letter marker next to Fire clone with ranged",
              imageUrl: "./m12s/dn-rep1-12.webp",
            },
            {
              role: "Melee",
              party: 1,
              description: "Go dead center of arena",
              imageUrl: "./m12s/dn-rep1-17.webp",
            },
            {
              role: "Melee",
              party: 2,
              description: "Go dead center of arena",
              imageUrl: "./m12s/dn-rep1-17.webp",
            },
            {
              role: "Ranged",
              party: 1,
              description: "Find Fire clone on wall\nGo N/CW and stand on letter marker next to Fire clone with healer",
              imageUrl: "./m12s/dn-rep1-12.webp",
            },
            {
              role: "Ranged",
              party: 2,
              description: "Find Fire clone on wall\nGo N/CW and stand on letter marker next to Fire clone with healer",
              imageUrl: "./m12s/dn-rep1-12.webp",
            }
          ]
        },
        {
          mechanic: 'Fire/No Debuff',
          description: 'Fire/No Debuffs need to take solo Dark hits',
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Find inner Dark clone\nGo N/CW to number marker next to Dark clone\nStand on corner closest to boss and away from clone",
              imageUrl: "./m12s/dn-rep1-19.webp",
            },
            {
              role: "Tank",
              party: 2,
              description: "Find inner Dark clone\nGo N/CW to number marker next to Dark clone\nStand on corner closest to boss and away from clone",
              imageUrl: "./m12s/dn-rep1-19.webp",
            },
            {
              role: "Healer",
              party: 1,
              description: "Find Dark clone on wall\nGo N/CW and stand on letter marker next to Dark clone",
              imageUrl: "./m12s/dn-rep1-14.webp",
            },
            {
              role: "Healer",
              party: 2,
              description: "Find Dark clone on wall\nGo N/CW and stand on letter marker next to Dark clone",
              imageUrl: "./m12s/dn-rep1-14.webp",
            },
            {
              role: "Melee",
              party: 1,
              description: "Find inner Dark clone\nGo NW/CCW to number marker next to Dark clone\nStand on corner closest to boss and away from clone",
              imageUrl: "./m12s/dn-rep1-19.webp",
            },
            {
              role: "Melee",
              party: 2,
              description: "Find inner Dark clone\nGo NW/CCW to number marker next to Dark clone\nStand on corner closest to boss and away from clone",
              imageUrl: "./m12s/dn-rep1-19.webp",
            },
            {
              role: "Ranged",
              party: 1,
              description: "Find Dark clone on wall\nGo NW/CCW and stand on letter marker next to Dark clone",
              imageUrl: "./m12s/dn-rep1-14.webp",
            },
            {
              role: "Ranged",
              party: 2,
              description: "Find Dark clone on wall\nGo NW/CCW and stand on letter marker next to Dark clone",
              imageUrl: "./m12s/dn-rep1-14.webp",
            }
          ]
        },

      ]
    },
    {
      phaseName: 'Replication 2',
      tag: 'replication2',
      mechs: replication2Mechs
    },
    {
      phaseName: 'Superchain',
      tag: 'p2',
      mechs: [
        {
          mechanic: 'Debuffs',
          description: 'Alpha: MUST NOT take damage\nBeta: MUST take damage',
          imageUrl: "./m12s/superchain-0.webp",
        },
        {
          mechanic: 'Blood Mana',
          description: 'Spawns 2 black holes with Donut, PBAOE, Vertical cleave, and Horizontal cleave on each side',
          imageUrl: "./m12s/superchain-1.webp",
        },
        {
          mechanic: 'Black Holes',
          description: 'Look at side with with 2 objects closer to the hole\nBeta debuffs go to the OTHER side\nTank North, DPS + Healer South',
          imageUrl: "./m12s/superchain-2.webp",
        },
        {
          mechanic: 'Beta Soaks',
          description: 'Beta debuffs soak the objects that match the 2 close objects on the other side',
          imageUrl: "./m12s/superchain-3.webp",
        },
        {
          mechanic: 'First Hole',
          description: 'Move to the hole that sucked in Green + Red first and dodge cleaves N/S\nAlpha/Beta debuffs will swap',
          imageUrl: "./m12s/superchain-5.webp",
        },
        {
          mechanic: 'Second Hole',
          description: 'Move to the other hole and dodge cleaves N/S',
          imageUrl: "./m12s/superchain-6.webp",
        },
        {
          mechanic: 'Netherwar Far/Near',
          description: '4 Beta debuffs bait Far or Near stack',
          imageUrl: "./m12s/superchain-7.webp",
        }
      ]
    },
    {
      phaseName: 'Idyllic Dream - Clones and Tethers I',
      tag: 'p2',
      mechs: [
        {
          mechanic: 'First Clone Spawn',
          description: '📌🐦 REMEMBER: Whether initial clones spawned Cardinal or Intercardinal first'
        },
        {
          mechanic: 'Player Clones',
          description: 'N to SE: will need to take Stacks from boss clones\nS to NW: will need to take Defamations from boss clones',
          imageUrl: "./m12s/dn-idyllic-3.webp",
        },
        {
          mechanic: 'Cone Zone',
          description: '📌🍦 REMEMBER: whether South or North is safe from cones (E/W safe)',
          imageUrl: "./m12s/dn-idyllic-4.webp",
        },
        {
          mechanic: 'Defamation/Stack Tethers',
          description: 'Boss clones spawn alternating tethers\nPre-position based on player clone positions',
          imageUrl: "./m12s/dn-idyllic-6.webp",
        },
        {
          mechanic: 'Tether Swaps',
          description: 'Swap with your partner to get the tether you need',
          imageUrl: "./m12s/dn-idyllic-7.webp",
        },
        {
          mechanic: 'Remember (Use Macro)',
          description: '📌🤔 REMEMBER:\nWhether North clone was Stack or Defamation\nTemporary light parties\nIf you were 1st or 2nd Defamation or a Stack',
          imageUrl: "./m12s/dn-idyllic-8.webp",
        },
        {
          mechanic: 'Cones Resolve',
          description: '💡🍦 RECALL: Whether South or North is safe from cones\nGo to Cone safespots (South or North) with True G1 West/G2 East\nMove to platforms right after',
          imageUrl: "./m12s/dn-idyllic-10.webp",
        }
      ]
    },
    {
      phaseName: 'Idyllic Dream - Platforms and Towers I',
      tag: 'p2',
      mechs: [
        {
          mechanic: 'Platform Setup',
          description: 'True G1 West/G2 East\nSupports Left, DPS Right\nMelees close, Ranged far',
          imageUrl: "./m12s/dn-idyllic-11.webp",
        },
        {
          mechanic: 'Towers',
          description: 'Towers can be Earth (twister), Fire (pyretic), Wind (Light-aspected, knockback), Doom (Light-aspected, baited laser)',
          imageUrl: "./m12s/dn-idyllic-12.webp",
        },
        {
          mechanic: 'Swaps',
          description: 'One role gets hit with light spreads, light must swap out of Wind or Doom\nRanged swap with Ranged, Melee swap with Melee',
          imageUrl: "./m12s/dn-idyllic-13.webp",
        },
        {
          mechanic: 'Remember Your Tower',
          description: '📌🗼 REMEMBER: your tower post-swap',
          imageUrl: "./m12s/dn-idyllic-14.webp",
        }
      ]
    },
    {
      phaseName: 'Idyllic Dream - Clones and Tethers II',
      tag: 'p2',
      mechs: [
        {
          mechanic: 'Recall Clones and Tethers',
          description: '💡🤔 RECALL:\nWhether North clone was Stack or Defamation\nTemporary light parties\nIf you were 1st or 2nd Defamation or a Stack',
          imageUrl: "./m12s/dn-idyllic-15.webp",
        },
        {
          mechanic: 'Defamations/Stacks',
          description: 'Defamations will be on D and B\nStacks will be on 1 and 3',
          imageUrl: "./m12s/dn-idyllic-17.webp",
        },
      ]
    },
    {
      phaseName: 'Idyllic Dream - Platforms and Towers II',
      tag: 'p2',
      mechs: [
        {
          mechanic: 'Back to Platforms',
          description: '💡🗼 RECALL: your tower assignments',
          imageUrl: "./m12s/dn-idyllic-22.webp",
        },
        {
          mechanic: 'Elements',
          description: "Wind: Get KB to the other platform\nDoom: Point line away\nFire: Don't move (can still attack)\nEarth: Move out of twister",
          imageUrl: "./m12s/dn-idyllic-24.webp",
        },
        {
          mechanic: 'Setup for Cones',
          description: 'Wind: E/W of boss touching hitbox\nDoom: North edge of platform touching hitbox\nRanged Fire/Earth: South edge of platform\nMelee Ranged/Earth: Center north of platform between Doom/Wind',
          imageUrl: "./m12s/dn-idyllic-26.webp",
        }
      ]
    },
    {
      phaseName: 'Idyllic Dream - Black Holes and Revelations',
      tag: 'p2',
      mechs: [
        {
          mechanic: 'Clone Spawns',
          description: '💡🍦 RECALL: whether South or North is safe from cones (E/W safe) from beginning of the mech',
          imageUrl: "./m12s/dn-idyllic-29.webp",
        },
        {
          mechanic: 'Black Hole Clone',
          description: '📌🍦🕳️ REMEMBER: Whether clone that jumps into the black hole is N/S or E/W safe',
          imageUrl: "./m12s/dn-idyllic-30.webp",
        },
        {
          mechanic: 'Clone Jumps',
          description: '📌🍦🐇 REMEMBER: Which platform the remaining N/S clone jumps to and which direction is safe',
          imageUrl: "./m12s/dn-idyllic-31.webp",
        },
        {
          mechanic: '1st Defamations/Stacks',
          description: '💡🐦 RECALL: Whether initial clones spawned Cardinal or Intercardinal first\nCardinal: Party to A marker, Tanks to B marker, slightly towards NE\nIntercard: Party NE, Tanks SE, slightly towards B',
          imageUrl: "./m12s/dn-idyllic-34.webp",
        },
        {
          mechanic: 'Platform + Cone',
          description: '💡🍦🐇 REMEMBER: Which platform the remaining N/S clone jumps to and which direction is safe\nGo to the platform where clone jumped to and dodge cones',
          imageUrl: "./m12s/dn-idyllic-35.webp",
        },
        {
          mechanic: '2nd Defamations/Stacks',
          description: 'Do the other variation from the 1st one\nCardinal: Party to A marker, Tanks to B marker, slightly towards NE\nIntercard: Party NE, Tanks SE, slightly towards B',
          imageUrl: "./m12s/dn-idyllic-36.webp",
        },
        {
          mechanic: 'Black Hole Clone Resolves',
          description: '💡🍦🕳️ RECALL: Whether clone that jumps into the black hole is N/S or E/W safe\nDodge black hole clone cleaves from North',
          imageUrl: "./m12s/dn-idyllic-37.webp",
        }
      ]
    }
  ]
};

const modifiedStrat: Strat = {
  stratName: 'modified',
  description: 'pastebin.com/qXLm3VJ0 - Identical to Shabin for P1 (Toxic/Role Mortal)',
  notes: '',
  stratUrl: {
    'Modified Pastebin': 'https://pastebin.com/qXLm3VJ0',
    'Role Mortal Slayer': 'https://raidplan.io/plan/KbxeCHoPkzWbt_HB',
    'Toxic Friends P1 Raidplan (original)': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn',
    'Toxic Friends P1 Raidplan (minus Mortal Slayer)': 'https://raidplan.io/plan/m1AMDbG_jxkgkPRc',
    'P2: DN Replication Raidplan': 'https://raidplan.io/plan/9ncP6UIDURcWuRuO',
    'P2: Clone Zone': 'https://raidplan.io/plan/SFa6J6wDrU9PlCJ4',
    'P2: Superchain Theory': 'https://raidplan.io/plan/OnhUS061LkI3xlmg',
    'P2: DN Idyllic Dream': 'https://raidplan.io/plan/zoeminUT6l2gaOWp'
  },
  strats: shabinStrat.strats,
};

export const m12sStrats: Strat[] = [modifiedStrat, shabinStrat];

export const m12sFightConfig: FightConfig = {
  fightKey: "m12s",
  title: "AAC Heavyweight M4 (Savage)",
  abbreviatedTitle: "M12S",
  subtitle: "M12S Patch 7.4",
  cheatsheetTitle: "M12S Cheatsheet",
  useModernCheatsheet: true,
  strats: {
    modified: {
      label: "Modified (3VJ0)",
      defaults: {
        mortalslayer: "role",
        replication2: "clonezone",
      },
    },
    shabin: {
      label: "Shabin (D1y4)",
      defaults: {
        mortalslayer: "role",
        replication2: "dn",
      },
    },
  },
  toggles: [
    {
      key: "mortalslayer",
      label: "Mortal Slayer",
      defaultValue: "role",
      options: [
        {
          value: "role",
          label: "Role",
          url: {
            name: 'Role Mortal Slayer Raidplan',
            url: 'https://raidplan.io/plan/KbxeCHoPkzWbt_HB'
          }
        },
        {
          value: "toxic",
          label: "Toxic"
        }
      ]
    },
    {
      key: "replication2",
      label: "Replication 2",
      defaultValue: "dn",
      options: [
        {
          value: "dn",
          label: "DN"
        },
        {
          value: "clonezone",
          label: "Clone Zone"
        }
      ]
    }
  ],
  tabTags: {
    "P1: Lindwurm": ["mortalslayer", "p1"],
    "P2: Lindwurm II": ["p2", "replication2"]
  },
  useMainPageTabs: true,
  defaultStratName: "modified",
  timeline: []
};
