import type { FightConfig, Strat, MechanicStrat } from '$lib/types';

// Toggle-dependent mechs for Mortal Slayer
const toxicMortalSlayer: MechanicStrat[] = [
  {
    mechanic: 'Conga Prio',
    description: 'Line up H1-M1-R1-R2-M2-H2\nTake balls in pairs in the order they spawned',
    imageUrl: './m12s/p1-toxic-mortal-conga.webp',
    url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#1'
  }
];

const roleMortalSlayer: MechanicStrat[] = [
  {
    mechanic: 'DPS/Support Sides',
    description:
      'Support move to side with 2 purple orbs, DPS on 4 green orbs\nDPS: M1-M2-R1-R2\nSupport: H1-H2, Tanks take purples MT-OT',
    imageUrl: './m12s/p1-roles-mortal-sides.webp',
    url: 'https://raidplan.io/plan/KbxeCHoPkzWbt_HB#2'
  }
];

const mortalSlayerMechs: Record<string, MechanicStrat[]> = {
  toxic: toxicMortalSlayer,
  role: roleMortalSlayer
};

// Toggle-dependent mechs for Replication 1
const dnReplication1: MechanicStrat[] = [
  {
    mechanic: 'Setup',
    description: 'G1 N, G2 S\nMelees NE/SW, Ranged NW/SE',
    imageUrl: './m12s/dn-rep1-1.webp',
    url: 'https://raidplan.io/plan/9ncP6UIDURcWuRuO#2'
  },
  {
    mechanic: 'Dark Debuff',
    description: 'Dark Debuffs need to take pair Fire hits',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Go dead center of arena',
        imageUrl: './m12s/dn-rep1-17.webp'
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Go dead center of arena',
        imageUrl: './m12s/dn-rep1-17.webp'
      },
      {
        role: 'Healer',
        party: 1,
        description:
          'Find Fire clone on wall\nGo N/CW and stand on letter marker next to Fire clone with ranged',
        imageUrl: './m12s/dn-rep1-12.webp'
      },
      {
        role: 'Healer',
        party: 2,
        description:
          'Find Fire clone on wall\nGo N/CW and stand on letter marker next to Fire clone with ranged',
        imageUrl: './m12s/dn-rep1-12.webp'
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Go dead center of arena',
        imageUrl: './m12s/dn-rep1-17.webp'
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Go dead center of arena',
        imageUrl: './m12s/dn-rep1-17.webp'
      },
      {
        role: 'Ranged',
        party: 1,
        description:
          'Find Fire clone on wall\nGo N/CW and stand on letter marker next to Fire clone with healer',
        imageUrl: './m12s/dn-rep1-12.webp'
      },
      {
        role: 'Ranged',
        party: 2,
        description:
          'Find Fire clone on wall\nGo N/CW and stand on letter marker next to Fire clone with healer',
        imageUrl: './m12s/dn-rep1-12.webp'
      }
    ]
  },
  {
    mechanic: 'Fire/No Debuff',
    description: 'Fire/No Debuffs need to take solo Dark hits',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description:
          'Find inner Dark clone\nGo N/CW to number marker next to Dark clone\nStand on corner closest to boss and away from clone',
        imageUrl: './m12s/dn-rep1-19.webp'
      },
      {
        role: 'Tank',
        party: 2,
        description:
          'Find inner Dark clone\nGo N/CW to number marker next to Dark clone\nStand on corner closest to boss and away from clone',
        imageUrl: './m12s/dn-rep1-19.webp'
      },
      {
        role: 'Healer',
        party: 1,
        description:
          'Find Dark clone on wall\nGo N/CW and stand on letter marker next to Dark clone',
        imageUrl: './m12s/dn-rep1-14.webp'
      },
      {
        role: 'Healer',
        party: 2,
        description:
          'Find Dark clone on wall\nGo N/CW and stand on letter marker next to Dark clone',
        imageUrl: './m12s/dn-rep1-14.webp'
      },
      {
        role: 'Melee',
        party: 1,
        description:
          'Find inner Dark clone\nGo NW/CCW to number marker next to Dark clone\nStand on corner closest to boss and away from clone',
        imageUrl: './m12s/dn-rep1-19.webp'
      },
      {
        role: 'Melee',
        party: 2,
        description:
          'Find inner Dark clone\nGo NW/CCW to number marker next to Dark clone\nStand on corner closest to boss and away from clone',
        imageUrl: './m12s/dn-rep1-19.webp'
      },
      {
        role: 'Ranged',
        party: 1,
        description:
          'Find Dark clone on wall\nGo NW/CCW and stand on letter marker next to Dark clone',
        imageUrl: './m12s/dn-rep1-14.webp'
      },
      {
        role: 'Ranged',
        party: 2,
        description:
          'Find Dark clone on wall\nGo NW/CCW and stand on letter marker next to Dark clone',
        imageUrl: './m12s/dn-rep1-14.webp'
      }
    ]
  }
];

const bcReplication1: MechanicStrat[] = [
  {
    mechanic: 'Setup',
    description: 'Stand on corners of markers\nG1 N, G2 S\nTanks on 4, Healers on 1, Ranged on 3, Melees on 2',
    imageUrl: './m12s/bc-rep1-1.webp',
    url: 'https://raidplan.io/plan/jaakesbessc2uv7h#2'
  },
  {
    mechanic: 'Dark Debuff',
    description: 'Dark Debuffs need to take pair Fire hits',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Go to inner Fire clone\nBait Fire stack inside of light diamond N or S',
        imageUrl: './m12s/bc-rep1-8.webp'
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Go to inner Fire clone\nBait Fire stack inside of light diamond N or S',
        imageUrl: './m12s/bc-rep1-8.webp'
      },
      {
        role: 'Healer',
        party: 1,
        description:
          'Go to outer Fire clone\nBait Fire stack on wall while dodging proteans',
        imageUrl: './m12s/bc-rep1-7.webp'
      },
      {
        role: 'Healer',
        party: 2,
        description:
          'Go to outer Fire clone\nBait Fire stack on wall while dodging proteans',
        imageUrl: './m12s/bc-rep1-7.webp'
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Go to inner Fire clone\nBait Fire stack inside of light diamond N or S',
        imageUrl: './m12s/bc-rep1-8.webp'
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Go to inner Fire clone\nBait Fire stack inside of light diamond N or S',
        imageUrl: './m12s/bc-rep1-8.webp'
      },
      {
        role: 'Ranged',
        party: 1,
        description:
          'Go to outer Fire clone\nBait Fire stack on wall while dodging proteans',
        imageUrl: './m12s/bc-rep1-7.webp'
      },
      {
        role: 'Ranged',
        party: 2,
        description:
          'Go to outer Fire clone\nBait Fire stack on wall while dodging proteans',
        imageUrl: './m12s/bc-rep1-7.webp'
      }
    ]
  },
  {
    mechanic: 'Fire/No Debuff',
    description: 'Fire/No Debuffs need to take solo Dark spreads',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description:
          'Go to inner Dark clone\nBait Dark spread inside of light diamond N or S',
        imageUrl: './m12s/bc-rep1-8.webp'
      },
      {
        role: 'Tank',
        party: 2,
        description:
          'Go to inner Dark clone\nBait Dark spread inside of light diamond E or W',
        imageUrl: './m12s/bc-rep1-8.webp'
      },
      {
        role: 'Healer',
        party: 1,
        description:
          'Go to outer Dark clone\nBait Dark spread while dodging proteans',
        imageUrl: './m12s/bc-rep1-7.webp'
      },
      {
        role: 'Healer',
        party: 2,
        description:
          'Go to outer Dark clone\nBait Dark spread while dodging proteans',
        imageUrl: './m12s/bc-rep1-7.webp'
      },
      {
        role: 'Melee',
        party: 1,
        description:
          'Go to inner Dark clone\nBait Dark spread inside of light diamond N or S',
        imageUrl: './m12s/bc-rep1-8.webp'
      },
      {
        role: 'Melee',
        party: 2,
        description:
          'Go to inner Dark clone\nBait Dark spread inside of light diamond E or W',
        imageUrl: './m12s/bc-rep1-8.webp'
      },
      {
        role: 'Ranged',
        party: 1,
        description:
          'Go to outer Dark clone\nBait Dark spread while dodging proteans',
        imageUrl: './m12s/bc-rep1-7.webp'
      },
      {
        role: 'Ranged',
        party: 2,
        description:
          'Go to outer Dark clone\nBait Dark spread while dodging proteans',
        imageUrl: './m12s/bc-rep1-7.webp'
      }
    ]
  }
];

const caroReplication1: MechanicStrat[] = [
  {
    mechanic: 'Setup',
    description: 'Ranged and Healers on corners of 1 and 3 markers\nMelees and Tanks max melee on 2 and 4 markers',
    imageUrl: './m12s/caro-rep1-0.webp',
    url: 'https://raidplan.io/plan/4P_QGHnBZ-nW8yH4#1'
  },
  {
    mechanic: 'Dark Debuff',
    description: 'Dark Debuffs need to take pair Fire hits',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Go to inner Fire clone\nBait Fire max melee E/W if horizontal or N/S if vertical',
        imageUrl: './m12s/caro-rep1-8.webp'
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Go to inner Fire clone\nBait Fire max melee E/W if horizontal or N/S if vertical',
        imageUrl: './m12s/caro-rep1-8.webp'
      },
      {
        role: 'Healer',
        party: 1,
        description:
          'Go to outer Fire clone\nBait Fire stack on wall while dodging proteans',
        imageUrl: './m12s/caro-rep1-8.webp'
      },
      {
        role: 'Healer',
        party: 2,
        description:
          'Go to outer Fire clone\nBait Fire stack on wall while dodging proteans',
        imageUrl: './m12s/caro-rep1-8.webp'
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Go to inner Fire clone\nBait Fire max melee E/W if horizontal or N/S if vertical',
        imageUrl: './m12s/caro-rep1-8.webp'
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Go to inner Fire clone\nBait Fire max melee E/W if horizontal or N/S if vertical',
        imageUrl: './m12s/caro-rep1-8.webp'
      },
      {
        role: 'Ranged',
        party: 1,
        description:
          'Go to outer Fire clone\nBait Fire stack on wall while dodging proteans',
        imageUrl: './m12s/caro-rep1-8.webp'
      },
      {
        role: 'Ranged',
        party: 2,
        description:
          'Go to outer Fire clone\nBait Fire stack on wall while dodging proteans',
        imageUrl: './m12s/caro-rep1-8.webp'
      }
    ]
  },
  {
    mechanic: 'Fire/No Debuff',
    description: 'Fire/No Debuffs need to take solo Dark hits',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description:
          'Go to inner Dark clone\nBait Dark spread under boss (cheat to your side) or max melee E/W (horizontal)/N/S (vertical)',
        imageUrl: './m12s/caro-rep1-9.webp'
      },
      {
        role: 'Tank',
        party: 2,
        description:
          'Go to inner Dark clone\nBait Dark spread under boss (cheat to your side) or max melee E/W (horizontal)/N/S (vertical)',
        imageUrl: './m12s/caro-rep1-9.webp'
      },
      {
        role: 'Healer',
        party: 1,
        description:
          'Go to outer Dark clone\nBait Dark spread while dodging proteans',
        imageUrl: './m12s/caro-rep1-9.webp'
      },
      {
        role: 'Healer',
        party: 2,
        description:
          'Go to outer Dark clone\nBait Dark spread while dodging proteans',
        imageUrl: './m12s/caro-rep1-9.webp'
      },
      {
        role: 'Melee',
        party: 1,
        description:
          'Go to inner Dark clone\nBait Dark spread under boss (cheat to your side) or max melee E/W (horizontal)/N/S (vertical)',
        imageUrl: './m12s/caro-rep1-9.webp'
      },
      {
        role: 'Melee',
        party: 2,
        description:
          'Go to inner Dark clone\nBait Dark spread under boss (cheat to your side) or max melee E/W (horizontal)/N/S (vertical)',
        imageUrl: './m12s/caro-rep1-9.webp'
      },
      {
        role: 'Ranged',
        party: 1,
        description:
          'Go to outer Dark clone\nBait Dark spread while dodging proteans',
        imageUrl: './m12s/caro-rep1-9.webp'
      },
      {
        role: 'Ranged',
        party: 2,
        description:
          'Go to outer Dark clone\nBait Dark spread while dodging proteans',
        imageUrl: './m12s/caro-rep1-9.webp'
      }
    ]
  }
];

const staticReplication1: MechanicStrat[] = [
  {
    mechanic: 'Setup',
    description: 'Ranged and Healers on corners of 1 and 3 markers\nMelees and Tanks max melee on 2 and 4 markers',
    imageUrl: './m12s/static-rep1-0.webp',
    url: 'https://raidplan.io/plan/3g95apsey4t987bz#1'
  },
  {
    mechanic: 'Dark Debuff',
    description: 'Far Dark is new North\nDark Debuffs need to take pair Fire hits',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Stack on Relative North line of center box\nDo not go past the line or you will bait Far Dark',
        imageUrl: './m12s/static-rep1-3.webp'
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Stack on Relative North line of center box\nDo not go past the line or you will bait Far Dark',
        imageUrl: './m12s/static-rep1-3.webp'
      },
      {
        role: 'Healer',
        party: 1,
        description:
          'Stack center of white box Relative Southwest',
        imageUrl: './m12s/static-rep1-3.webp'
      },
      {
        role: 'Healer',
        party: 2,
        description:
          'Stack center of white box Relative Southwest',
        imageUrl: './m12s/static-rep1-3.webp'
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Stack on Relative North line of center box\nDo not go past the line or you will bait Far Dark',
        imageUrl: './m12s/static-rep1-3.webp'
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Stack on Relative North line of center box\nDo not go past the line or you will bait Far Dark',
        imageUrl: './m12s/static-rep1-3.webp'
      },
      {
        role: 'Ranged',
        party: 1,
        description:
          'Stack center of white box Relative Southwest',
        imageUrl: './m12s/static-rep1-3.webp'
      },
      {
        role: 'Ranged',
        party: 2,
        description:
          'Stack center of white box Relative Southwest',
        imageUrl: './m12s/static-rep1-3.webp'
      }
    ]
  },
  {
    mechanic: 'Fire/No Debuff',
    description: 'Far Dark is new North\nFire/No Debuffs need to take solo Dark hits',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description:
          'Go one box away from the middle Relative South of the white line + Relative West of the boss',
        imageUrl: './m12s/static-rep1-3.webp'
      },
      {
        role: 'Tank',
        party: 2,
        description:
          'Go one box away from the middle Relative South of the white line + Relative East of the boss',
        imageUrl: './m12s/static-rep1-3.webp'
      },
      {
        role: 'Healer',
        party: 1,
        description:
          'Go center of the white box Relative Northwest',
        imageUrl: './m12s/static-rep1-3.webp'
      },
      {
        role: 'Healer',
        party: 2,
        description:
          'Go center of the white box Relative Northeast',
        imageUrl: './m12s/static-rep1-3.webp'
      },
      {
        role: 'Melee',
        party: 1,
        description:
          'Go one box away from the middle Relative South of the white line + Relative West of the boss',
        imageUrl: './m12s/static-rep1-3.webp'
      },
      {
        role: 'Melee',
        party: 2,
        description:
          'Go one box away from the middle Relative South of the white line + Relative East of the boss',
        imageUrl: './m12s/static-rep1-3.webp'
      },
      {
        role: 'Ranged',
        party: 1,
        description:
          'Go center of the white box Relative Northwest',
        imageUrl: './m12s/static-rep1-3.webp'
      },
      {
        role: 'Ranged',
        party: 2,
        description:
          'Go center of the white box Relative Northeast',
        imageUrl: './m12s/static-rep1-3.webp'
      }
    ]
  }
];

const replication1Mechs: Record<string, MechanicStrat[]> = {
  dn: dnReplication1,
  caro: caroReplication1,
  static: staticReplication1,
  bc: bcReplication1,
};

// Toggle-dependent mechs for Replication 2
const cloneZoneRep2Overview: MechanicStrat[] = [
  {
    mechanic: 'What does my tether do?',
    strats: [
      // Generic info - shows when 'All' is selected (or no selection)
      {
        toggleKey: 'rep2tether',
        toggleValue: '',
        description: "Select 'Rep 2 Tether' to see your assignments"
      },
      // Position-specific instructions
      {
        toggleKey: 'rep2tether',
        toggleValue: 'N',
        description:
          '<strong>N Clone</strong>\nActing LP2\nBoss Tether\nStand on Diamond under A\nJoin LP2 stack\nDodge Snaking Kick\nTake LP2 Netherwrath with LP2 Defam'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NE',
        description:
          '<strong>NE Clone</strong>\nActing LP2\nCleave Tether N/CW\nBait protean inner East\nJoin LP2 stack\nPoint cleave out of arena\nDodge Snaking Kick\nBait protean inner East'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'E',
        description:
          '<strong>E Clone</strong>\nActing LP2\nStack Tether N/CW\nBait protean outer East\nTake LP2 stack\nDodge Snaking Kick\nBait protean outer East'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SE',
        description:
          '<strong>SE Clone</strong>\nActing LP2\nDefam Tether N/CW\nTake Defam ESE\nJoin LP2 stack\nDodge Snaking Kick\nBait LP2 Netherwrath'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'S',
        description:
          '<strong>S Clone</strong>\nActing LP1\nNo Tether\nTake Defam S\nJoin LP1 stack\nDodge Snaking Kick\nTake LP1 Netherwrath with LP1 Defam'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SW',
        description:
          '<strong>SW Clone</strong>\nActing LP1\nDefam Tether NW/CCW\nTake Defam WSW\nJoin LP1 stack\nDodge Snaking Kick\nBait LP1 Netherwrath'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'W',
        description:
          '<strong>W Clone</strong>\nActing LP1\nStack Tether NW/CCW\nBait protean outer West\nTake LP1 stack\nDodge Snaking Kick\nBait protean outer West'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NW',
        description:
          '<strong>NW Clone</strong>\nActing LP1\nCleave Tether NW/CCW\nBait protean inner West\nJoin LP1 stack\nPoint cleave out of arena\nDodge Snaking Kick\nBait protean inner West'
      }
    ]
  }
];

const cloneZoneReplication2: MechanicStrat[] = [
  {
    mechanic: 'Acting Light Parties',
    description: 'South to NW: Acting LP1\nNorth to SE: Acting LP2',
    url: 'https://raidplan.io/plan/SFa6J6wDrU9PlCJ4#3',
    strats: [
      {
        toggleKey: 'rep2tether',
        toggleValue: '',
        description: '',
        imageUrl: './m12s/cz-rep2-2.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'N',
        description: 'Acting LP2',
        imageUrl: './m12s/cz-rep2-2.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NE',
        description: 'Acting LP2',
        imageUrl: './m12s/cz-rep2-2.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'E',
        description: 'Acting LP2',
        imageUrl: './m12s/cz-rep2-2.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SE',
        description: 'Acting LP2',
        imageUrl: './m12s/cz-rep2-2.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'S',
        description: 'Acting LP1',
        imageUrl: './m12s/cz-rep2-2.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SW',
        description: 'Acting LP1',
        imageUrl: './m12s/cz-rep2-2.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'W',
        description: 'Acting LP1',
        imageUrl: './m12s/cz-rep2-2.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NW',
        description: 'Acting LP1',
        imageUrl: './m12s/cz-rep2-2.webp'
      }
    ]
  },
  {
    mechanic: 'Tether Assignments',
    description:
      'Based on initial clone spawn, take a tether (1x Boss tether, 2x Cleaves, 2x Stacks, 2x Defamations)\nSouth clone will take nothing',
    url: 'https://raidplan.io/plan/SFa6J6wDrU9PlCJ4#5',
    strats: [
      {
        toggleKey: 'rep2tether',
        toggleValue: '',
        description: '',
        imageUrl: './m12s/cz-rep2-4.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'N',
        description: 'Boss tether',
        imageUrl: './m12s/cz-rep2-4.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NE',
        description: 'Cleave Tether N/CW',
        imageUrl: './m12s/cz-rep2-4.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'E',
        description: 'Stack Tether N/CW',
        imageUrl: './m12s/cz-rep2-4.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SE',
        description: 'Defam Tether N/CW',
        imageUrl: './m12s/cz-rep2-4.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'S',
        description: 'No Tether',
        imageUrl: './m12s/cz-rep2-4.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SW',
        description: 'Defam Tether NW/CCW',
        imageUrl: './m12s/cz-rep2-4.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'W',
        description: 'Stack Tether NW/CCW',
        imageUrl: './m12s/cz-rep2-4.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NW',
        description: 'Cleave Tether NW/CCW',
        imageUrl: './m12s/cz-rep2-4.webp'
      }
    ]
  },
  {
    mechanic: 'Player Defamations',
    description:
      'Defamations go ESE and WSW\nNothing player go South\nBoss tether goes on the diamond under A\nStacks and Cleaves go to North edge',
    url: 'https://raidplan.io/plan/SFa6J6wDrU9PlCJ4#6',
    strats: [
      {
        toggleKey: 'rep2tether',
        toggleValue: '',
        description: '',
        imageUrl: './m12s/cz-rep2-5.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'N',
        description: 'Stand on Diamond under A',
        imageUrl: './m12s/cz-rep2-5.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NE',
        description: 'Go inner East on North edge',
        imageUrl: './m12s/cz-rep2-5.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'E',
        description: 'Go outer East on North edge',
        imageUrl: './m12s/cz-rep2-5.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SE',
        description: 'Take Defam ESE',
        imageUrl: './m12s/cz-rep2-5.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'S',
        description: 'Take Defam S',
        imageUrl: './m12s/cz-rep2-5.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SW',
        description: 'Take Defam WSW',
        imageUrl: './m12s/cz-rep2-5.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'W',
        description: 'Go outer West on North edge',
        imageUrl: './m12s/cz-rep2-5.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NW',
        description: 'Go inner West on North edge',
        imageUrl: './m12s/cz-rep2-5.webp'
      }
    ]
  },
  {
    mechanic: 'Player Stacks',
    description: 'Light party stacks on stack players NW and NE',
    url: 'https://raidplan.io/plan/SFa6J6wDrU9PlCJ4#8',
    strats: [
      {
        toggleKey: 'rep2tether',
        toggleValue: '',
        description: '',
        imageUrl: './m12s/cz-rep2-7.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'N',
        description: 'Join LP2 stack',
        imageUrl: './m12s/cz-rep2-7.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NE',
        description: 'Join LP2 stack',
        imageUrl: './m12s/cz-rep2-7.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'E',
        description: 'Take LP2 stack',
        imageUrl: './m12s/cz-rep2-7.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SE',
        description: 'Join LP2 stack',
        imageUrl: './m12s/cz-rep2-7.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'S',
        description: 'Join LP1 stack',
        imageUrl: './m12s/cz-rep2-7.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SW',
        description: 'Join LP1 stack',
        imageUrl: './m12s/cz-rep2-7.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'W',
        description: 'Take LP1 stack',
        imageUrl: './m12s/cz-rep2-7.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NW',
        description: 'Join LP1 stack',
        imageUrl: './m12s/cz-rep2-7.webp'
      }
    ]
  },
  {
    mechanic: 'Player Cleaves',
    description: 'Cleave players go between party and boss to bait cleaves out of North of arena',
    url: 'https://raidplan.io/plan/SFa6J6wDrU9PlCJ4#9',
    strats: [
      {
        toggleKey: 'rep2tether',
        toggleValue: '',
        description: '',
        imageUrl: './m12s/cz-rep2-8.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'N',
        description: 'Stay in LP2 stack',
        imageUrl: './m12s/cz-rep2-8.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NE',
        description: 'Point cleave out of arena',
        imageUrl: './m12s/cz-rep2-8.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'E',
        description: 'Stay in LP2 stack',
        imageUrl: './m12s/cz-rep2-8.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SE',
        description: 'Stay in LP2 stack',
        imageUrl: './m12s/cz-rep2-8.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'S',
        description: 'Stay in LP1 stack',
        imageUrl: './m12s/cz-rep2-8.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SW',
        description: 'Stay in LP1 stack',
        imageUrl: './m12s/cz-rep2-8.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'W',
        description: 'Stay in LP1 stack',
        imageUrl: './m12s/cz-rep2-8.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NW',
        description: 'Point cleave out of arena',
        imageUrl: './m12s/cz-rep2-8.webp'
      }
    ]
  },
  {
    mechanic: 'Snaking Kick',
    description: 'Dodge behind frontal cleave\nA marker always safe',
    imageUrl: './m12s/cz-rep2-9.webp',
    url: 'https://raidplan.io/plan/SFa6J6wDrU9PlCJ4#10'
  },
  {
    mechanic: 'Netherwrath Far',
    description:
      'Defamation players bait far pairs on NW/NE arena floor diamonds\nStack/Cleave players bait boss proteans North',
    url: 'https://raidplan.io/plan/SFa6J6wDrU9PlCJ4#14',
    strats: [
      {
        toggleKey: 'rep2tether',
        toggleValue: '',
        description: '',
        imageUrl: './m12s/cz-rep2-13.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'N',
        description: 'Take pair stack near 2 marker',
        imageUrl: './m12s/cz-rep2-13.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NE',
        description: 'Bait protean inner East',
        imageUrl: './m12s/cz-rep2-13.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'E',
        description: 'Bait protean outer East',
        imageUrl: './m12s/cz-rep2-13.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SE',
        description: 'Bait pair stack far on diamond around 2 marker',
        imageUrl: './m12s/cz-rep2-13.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'S',
        description: 'Take pair stack near 4 marker',
        imageUrl: './m12s/cz-rep2-13.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SW',
        description: 'Bait pair stack far on diamond around 4 marker',
        imageUrl: './m12s/cz-rep2-13.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'W',
        description: 'Bait protean outer West',
        imageUrl: './m12s/cz-rep2-13.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NW',
        description: 'Bait protean inner West',
        imageUrl: './m12s/cz-rep2-13.webp'
      }
    ]
  },
  {
    mechanic: 'Netherwrath Near',
    description:
      'Defamation players bait pairs on boss hitbox\nStack/Cleave players bait boss proteans North',
    url: 'https://raidplan.io/plan/SFa6J6wDrU9PlCJ4#15',
    strats: [
      {
        toggleKey: 'rep2tether',
        toggleValue: '',
        description: '',
        imageUrl: './m12s/cz-rep2-14.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'N',
        description: 'Take pair stack near 2 marker',
        imageUrl: './m12s/cz-rep2-14.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NE',
        description: 'Bait protean inner East',
        imageUrl: './m12s/cz-rep2-14.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'E',
        description: 'Bait protean outer East',
        imageUrl: './m12s/cz-rep2-14.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SE',
        description: 'Bait pair stack on boss hitbox',
        imageUrl: './m12s/cz-rep2-14.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'S',
        description: 'Take pair stack near 4 marker',
        imageUrl: './m12s/cz-rep2-14.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SW',
        description: 'Bait pair stack on boss hitbox',
        imageUrl: './m12s/cz-rep2-14.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'W',
        description: 'Bait protean outer West',
        imageUrl: './m12s/cz-rep2-14.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NW',
        description: 'Bait protean inner West',
        imageUrl: './m12s/cz-rep2-14.webp'
      }
    ]
  },
  {
    mechanic: 'Clone First Defam + Cleave',
    description:
      'Ranged will end up West\nMelees will end up East\nRanged be careful of first Clone defamation',
    imageUrl: './m12s/cz-rep2-16.webp',
    url: 'https://raidplan.io/plan/SFa6J6wDrU9PlCJ4#17'
  },
  {
    mechanic: 'Clone Stacks',
    description: 'Ranged stack West, Melee stack East',
    imageUrl: './m12s/cz-rep2-17.webp',
    url: 'https://raidplan.io/plan/SFa6J6wDrU9PlCJ4#18'
  },
  {
    mechanic: 'Clone Second Defam + Cleave',
    description: 'Melees dodge back NE to avoid second Clone defamation',
    imageUrl: './m12s/cz-rep2-18.webp',
    url: 'https://raidplan.io/plan/SFa6J6wDrU9PlCJ4#19'
  }
];

const dnRep2Overview: MechanicStrat[] = [
  {
    mechanic: 'What does my tether do?',
    strats: [
      // Generic info - shows when 'All' is selected (or no selection)
      {
        toggleKey: 'rep2tether',
        toggleValue: '',
        description: "Select 'Rep 2 Tether' to see your assignments"
      },
      // Position-specific instructions
      {
        toggleKey: 'rep2tether',
        toggleValue: 'N',
        description:
          '<strong>N Clone</strong>\nActing LP2\nBoss Tether\nBait boss jump between A and 1\nJoin LP2 stack\nDodge Snaking Kick\nTake SW Netherwrath with LP1 Defam'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NE',
        description:
          '<strong>NE Clone</strong>\nActing LP2\nCleave Tether N/CW\nBait protean outer East\nJoin LP2 stack\nPoint cleave out of arena\nDodge Snaking Kick\nBait protean outer East'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'E',
        description:
          '<strong>E Clone</strong>\nActing LP2\nStack Tether N/CW\nBait protean inner East\nTake LP2 stack\nDodge Snaking Kick\nBait protean inner East'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SE',
        description:
          '<strong>SE Clone</strong>\nActing LP2\nDefam Tether N/CW\nTake Defam ESE\nJoin LP2 stack\nDodge Snaking Kick\nBait LP2 Netherwrath'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'S',
        description:
          '<strong>S Clone</strong>\nActing LP1\nNo Tether\nTake Defam S\nJoin LP1 stack\nDodge Snaking Kick\nTake SE Netherwrath with LP2 Defam'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SW',
        description:
          '<strong>SW Clone</strong>\nActing LP1\nDefam Tether NW/CCW\nTake Defam WSW\nJoin LP1 stack\nDodge Snaking Kick\nBait LP1 Netherwrath'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'W',
        description:
          '<strong>W Clone</strong>\nActing LP1\nStack Tether NW/CCW\nBait protean inner West\nTake LP1 stack\nDodge Snaking Kick\nBait protean inner West'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NW',
        description:
          '<strong>NW Clone</strong>\nActing LP1\nCleave Tether NW/CCW\nBait protean outer West\nJoin LP1 stack\nPoint cleave out of arena\nDodge Snaking Kick\nBait protean outer West'
      }
    ]
  }
];

const dnReplication2: MechanicStrat[] = [
  {
    mechanic: 'Acting Light Parties',
    description: 'South to NW: Acting LP1\nNorth to SE: Acting LP2',
    url: 'https://raidplan.io/plan/ZacmNyJxptIVKNrK#4',
    strats: [
      {
        toggleKey: 'rep2tether',
        toggleValue: '',
        description: '',
        imageUrl: './m12s/dn-rep2-3.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'N',
        description: 'Acting LP2',
        imageUrl: './m12s/dn-rep2-3.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NE',
        description: 'Acting LP2',
        imageUrl: './m12s/dn-rep2-3.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'E',
        description: 'Acting LP2',
        imageUrl: './m12s/dn-rep2-3.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SE',
        description: 'Acting LP2',
        imageUrl: './m12s/dn-rep2-3.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'S',
        description: 'Acting LP1',
        imageUrl: './m12s/dn-rep2-3.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SW',
        description: 'Acting LP1',
        imageUrl: './m12s/dn-rep2-3.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'W',
        description: 'Acting LP1',
        imageUrl: './m12s/dn-rep2-3.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NW',
        description: 'Acting LP1',
        imageUrl: './m12s/dn-rep2-3.webp'
      }
    ]
  },
  {
    mechanic: 'Tether Assignments',
    description:
      'Based on initial clone spawn, take a tether (1x Boss tether, 2x Cleaves, 2x Stacks, 2x Defamations)\nSouth clone will take nothing',
    url: 'https://raidplan.io/plan/ZacmNyJxptIVKNrK#5',
    strats: [
      {
        toggleKey: 'rep2tether',
        toggleValue: '',
        description: '',
        imageUrl: './m12s/dn-rep2-4.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'N',
        description: 'Boss tether',
        imageUrl: './m12s/dn-rep2-4.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NE',
        description: 'Cleave Tether N/CW',
        imageUrl: './m12s/dn-rep2-4.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'E',
        description: 'Stack Tether N/CW',
        imageUrl: './m12s/dn-rep2-4.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SE',
        description: 'Defam Tether N/CW',
        imageUrl: './m12s/dn-rep2-4.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'S',
        description: 'No Tether',
        imageUrl: './m12s/dn-rep2-4.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SW',
        description: 'Defam Tether NW/CCW',
        imageUrl: './m12s/dn-rep2-4.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'W',
        description: 'Stack Tether NW/CCW',
        imageUrl: './m12s/dn-rep2-4.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NW',
        description: 'Cleave Tether NW/CCW',
        imageUrl: './m12s/dn-rep2-4.webp'
      }
    ]
  },
  {
    mechanic: 'Player Defamations',
    description:
      'Defamations go West and East\nNothing player go South\nBoss tether goes between A and 1\nStacks and Cleaves go to North edge',
    url: 'https://raidplan.io/plan/ZacmNyJxptIVKNrK#10',
    strats: [
      {
        toggleKey: 'rep2tether',
        toggleValue: '',
        description: '',
        imageUrl: './m12s/dn-rep2-9.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'N',
        description: 'Stand between A and 1',
        imageUrl: './m12s/dn-rep2-9.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NE',
        description: 'Go outer East on North edge',
        imageUrl: './m12s/dn-rep2-9.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'E',
        description: 'Go inner East on North edge',
        imageUrl: './m12s/dn-rep2-9.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SE',
        description: 'Take Defam East',
        imageUrl: './m12s/dn-rep2-9.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'S',
        description: 'Take Defam S',
        imageUrl: './m12s/dn-rep2-9.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SW',
        description: 'Take Defam West',
        imageUrl: './m12s/dn-rep2-9.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'W',
        description: 'Go inner West on North edge',
        imageUrl: './m12s/dn-rep2-9.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NW',
        description: 'Go outer West on North edge',
        imageUrl: './m12s/dn-rep2-9.webp'
      }
    ]
  },
  {
    mechanic: 'Player Stacks',
    description: 'Light party stacks on stack players West and East of boss',
    url: 'https://raidplan.io/plan/ZacmNyJxptIVKNrK#14',
    strats: [
      {
        toggleKey: 'rep2tether',
        toggleValue: '',
        description: '',
        imageUrl: './m12s/dn-rep2-13.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'N',
        description: 'Join LP2 stack',
        imageUrl: './m12s/dn-rep2-13.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NE',
        description: 'Join LP2 stack',
        imageUrl: './m12s/dn-rep2-13.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'E',
        description: 'Take LP2 stack',
        imageUrl: './m12s/dn-rep2-13.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SE',
        description: 'Join LP2 stack',
        imageUrl: './m12s/dn-rep2-13.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'S',
        description: 'Join LP1 stack',
        imageUrl: './m12s/dn-rep2-13.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SW',
        description: 'Join LP1 stack',
        imageUrl: './m12s/dn-rep2-13.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'W',
        description: 'Take LP1 stack',
        imageUrl: './m12s/dn-rep2-13.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NW',
        description: 'Join LP1 stack',
        imageUrl: './m12s/dn-rep2-13.webp'
      }
    ]
  },
  {
    mechanic: 'Player Cleaves',
    description: 'Cleave players be northmost and bait cleaves out of North out of arena',
    url: 'https://raidplan.io/plan/ZacmNyJxptIVKNrK#14',
    strats: [
      {
        toggleKey: 'rep2tether',
        toggleValue: '',
        description: '',
        imageUrl: './m12s/dn-rep2-13.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'N',
        description: 'Stay in LP2 stack',
        imageUrl: './m12s/dn-rep2-13.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NE',
        description: 'Point cleave out of arena',
        imageUrl: './m12s/dn-rep2-13.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'E',
        description: 'Stay in LP2 stack',
        imageUrl: './m12s/dn-rep2-13.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SE',
        description: 'Stay in LP2 stack',
        imageUrl: './m12s/dn-rep2-13.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'S',
        description: 'Stay in LP1 stack',
        imageUrl: './m12s/dn-rep2-13.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SW',
        description: 'Stay in LP1 stack',
        imageUrl: './m12s/dn-rep2-13.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'W',
        description: 'Stay in LP1 stack',
        imageUrl: './m12s/dn-rep2-13.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NW',
        description: 'Point cleave out of arena',
        imageUrl: './m12s/dn-rep2-13.webp'
      }
    ]
  },
  {
    mechanic: 'Snaking Kick',
    description: 'Dodge behind frontal cleave',
    imageUrl: './m12s/dn-rep2-14.webp',
    url: 'https://raidplan.io/plan/ZacmNyJxptIVKNrK#15'
  },
  {
    mechanic: 'Netherwrath Far/Near',
    description: 'Defamation players bait pairs\nStack/Cleave players bait boss proteans North',
    url: 'https://raidplan.io/plan/ZacmNyJxptIVKNrK#18',
    strats: [
      {
        toggleKey: 'rep2tether',
        toggleValue: '',
        description: '',
        imageUrl: './m12s/dn-rep2-17.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'N',
        description: 'Take pair stack SW of boss',
        imageUrl: './m12s/dn-rep2-17.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NE',
        description: 'Bait protean outer East',
        imageUrl: './m12s/dn-rep2-17.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'E',
        description: 'Bait protean inner East',
        imageUrl: './m12s/dn-rep2-17.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SE',
        description: 'Bait pair stack SW of boss',
        imageUrl: './m12s/dn-rep2-17.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'S',
        description: 'Take pair stack SE of boss',
        imageUrl: './m12s/dn-rep2-17.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SW',
        description: 'Bait pair stack SE of boss',
        imageUrl: './m12s/dn-rep2-17.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'W',
        description: 'Bait protean inner West',
        imageUrl: './m12s/dn-rep2-17.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NW',
        description: 'Bait protean outer West',
        imageUrl: './m12s/dn-rep2-17.webp'
      }
    ]
  },
  {
    mechanic: 'Clone First Defam + Cleave',
    description:
      'Chill North to dodge first cleave/defamation\nNote: original raidplan has these in opposite order',
    imageUrl: './m12s/dn-rep2-21.webp',
    url: 'https://raidplan.io/plan/ZacmNyJxptIVKNrK#22'
  },
  {
    mechanic: 'Clone Stacks',
    description: 'Ranged stack West, Melee stack East',
    imageUrl: './m12s/dn-rep2-19.webp',
    url: 'https://raidplan.io/plan/ZacmNyJxptIVKNrK#20'
  },
  {
    mechanic: 'Clone Second Defam + Cleave',
    description: 'Dodge back North to dodge second cleave/defamation',
    imageUrl: './m12s/dn-rep2-18.webp',
    url: 'https://raidplan.io/plan/ZacmNyJxptIVKNrK#19'
  }
];

const bcRep2Overview: MechanicStrat[] = [
  {
    mechanic: 'What does my tether do?',
    strats: [
      // Generic info - shows when 'All' is selected (or no selection)
      {
        toggleKey: 'rep2tether',
        toggleValue: '',
        description: "Select 'Rep 2 Tether' to see your assignments"
      },
      // Position-specific instructions
      {
        toggleKey: 'rep2tether',
        toggleValue: 'N',
        description:
          '<strong>N Clone</strong>\nRelative E/LP2\nCleave Tether D/CW\nBait protean outer East\nJoin East stack on 4\nBe inside boss ring + look at boss\nDodge Snaking Kick\nStand max melee near 4 for Near/Far\nBait protean outer East'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NE',
        description:
          '<strong>NE Clone</strong>\nRelative SE/LP2\nDefam Tether D/CW\nTake Defam East (A)\nJoin East stack on 4\nDodge Snaking Kick\nStand North exactly on boss ring\nTake 3 clone stack, then move to 4 clone to take stack'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'E',
        description:
          '<strong>E Clone</strong>\nRelative S\nNo Tether\nTake Defam South (B)\nJoin East stack on 4\nDodge Snaking Kick\nStand North exactly on boss ring\nTake 3 clone stack, then move to 4 clone to take stack'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SE',
        description:
          '<strong>SE Clone</strong>\nRelative SW/LP1\nDefam Tether D/CCW\nTake Defam West (C)\nJoin West stack on 3\nDodge Snaking Kick\nStand North exactly on boss ring\nTake 3 clone stack, then move to 4 clone to take stack'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'S',
        description:
          '<strong>S Clone</strong>\nRelative W/LP1\nCleave Tether D/CCW\nBait protean outer West\nJoin West stack on 3\nBe inside boss ring + look at boss\nDodge Snaking Kick\nStand max melee near 3 for Near/Far\nBait protean outer West'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SW',
        description:
          '<strong>SW Clone</strong>\nRelative NW/LP1\nStack Tether D/CCW\nBait protean inner West\nTake West stack on 3\nDodge Snaking Kick\nStand on inner boss ring slightly north of SW for Near/Far\nBait protean inner West'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'W',
        description:
          '<strong>W Clone</strong>\nRelative N\nBoss Tether\nStand on D\nJoin West stack on 3\nDodge Snaking Kick\nStand North exactly on boss ring\nTake 3 clone stack, then move to 4 clone to take stack'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NW',
        description:
          '<strong>NW Clone</strong>\nRelative NE/LP2\nStack Tether D/CW\nBait protean inner East\nTake East stack on 4\nDodge Snaking Kick\nStand on inner boss ring slightly north of SE for Near/Far\nBait protean inner East'
      }
    ]
  }
];

const bcReplication2: MechanicStrat[] = [
  {
    mechanic: 'Tether Assignments',
    description:
      'D is new Relative North\nPurple/Red take tether D/CW\nBlue/Yellow take tether D/CCW',
    url: 'https://raidplan.io/plan/SFa6J6wDrU9PlCJ4#5',
    strats: [
      {
        toggleKey: 'rep2tether',
        toggleValue: '',
        description: '',
        imageUrl: './m12s/bc-rep1-16.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'N',
        description: 'Cleave Tether D/CW',
        imageUrl: './m12s/bc-rep1-16.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NE',
        description: 'Defam Tether D/CW',
        imageUrl: './m12s/bc-rep1-16.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'E',
        description: 'No Tether',
        imageUrl: './m12s/bc-rep1-16.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SE',
        description: 'Defam Tether D/CCW',
        imageUrl: './m12s/bc-rep1-16.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'S',
        description: 'Cleave Tether D/CCW',
        imageUrl: './m12s/bc-rep1-16.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SW',
        description: 'Stack Tether D/CCW',
        imageUrl: './m12s/bc-rep1-16.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'W',
        description: 'Boss Tether',
        imageUrl: './m12s/bc-rep1-16.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NW',
        description: 'Stack Tether D/CW',
        imageUrl: './m12s/bc-rep1-16.webp'
      }
    ]
  },
  {
    mechanic: 'Player Defamations',
    description:
      'Defamations go Relative W and E\nNothing player go South\nBoss tether goes on D marker\nStacks and Cleaves go to North edge',
    url: 'https://raidplan.io/plan/SFa6J6wDrU9PlCJ4#6',
    strats: [
      {
        toggleKey: 'rep2tether',
        toggleValue: '',
        description: '',
        imageUrl: './m12s/bc-rep1-18.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'N',
        description: 'Go outer East on North edge',
        imageUrl: './m12s/bc-rep1-18.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NE',
        description: 'Take Defam East (A)',
        imageUrl: './m12s/bc-rep1-18.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'E',
        description: 'Take Defam South (B)',
        imageUrl: './m12s/bc-rep1-18.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SE',
        description: 'Take Defam West (C)',
        imageUrl: './m12s/bc-rep1-18.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'S',
        description: 'Go outer West on North edge',
        imageUrl: './m12s/bc-rep1-18.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SW',
        description: 'Go inner West on North edge',
        imageUrl: './m12s/bc-rep1-18.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'W',
        description: 'Stand on D',
        imageUrl: './m12s/bc-rep1-18.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NW',
        description: 'Go inner East on North edge',
        imageUrl: './m12s/bc-rep1-18.webp'
      }
    ]
  },
  {
    mechanic: 'Player Stacks',
    description: 'Light party stacks on stack players on 3 and 4 markers',
    url: 'https://raidplan.io/plan/SFa6J6wDrU9PlCJ4#8',
    strats: [
      {
        toggleKey: 'rep2tether',
        toggleValue: '',
        description: '',
        imageUrl: './m12s/bc-rep1-20.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'N',
        description: 'Join East stack on 4',
        imageUrl: './m12s/bc-rep1-20.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NE',
        description: 'Join East stack on 4',
        imageUrl: './m12s/bc-rep1-20.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'E',
        description: 'Join East stack on 4',
        imageUrl: './m12s/bc-rep1-20.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SE',
        description: 'Join West stack on 3',
        imageUrl: './m12s/bc-rep1-20.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'S',
        description: 'Join West stack on 3',
        imageUrl: './m12s/bc-rep1-20.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SW',
        description: 'Take West stack on 3',
        imageUrl: './m12s/bc-rep1-20.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'W',
        description: 'Join West stack on 3',
        imageUrl: './m12s/bc-rep1-20.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NW',
        description: 'Take East stack on 4',
        imageUrl: './m12s/bc-rep1-20.webp'
      }
    ]
  },
  {
    mechanic: 'Player Cleaves',
    description: 'Cleave players stand inside boss ring and look at boss to fire cleaves',
    url: 'https://raidplan.io/plan/SFa6J6wDrU9PlCJ4#9',
    strats: [
      {
        toggleKey: 'rep2tether',
        toggleValue: '',
        description: '',
        imageUrl: './m12s/bc-rep1-20.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'N',
        description: 'Be inside boss ring + look at boss for cleave',
        imageUrl: './m12s/bc-rep1-20.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NE',
        description: 'Stay on 4',
        imageUrl: './m12s/bc-rep1-20.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'E',
        description: 'Stay on 4',
        imageUrl: './m12s/bc-rep1-20.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SE',
        description: 'Stay on 3',
        imageUrl: './m12s/bc-rep1-20.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'S',
        description: 'Be inside boss ring + look at boss for cleave',
        imageUrl: './m12s/bc-rep1-20.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SW',
        description: 'Stay on 3',
        imageUrl: './m12s/bc-rep1-20.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'W',
        description: 'Stay on 3',
        imageUrl: './m12s/bc-rep1-20.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NW',
        description: 'Stay on 4',
        imageUrl: './m12s/bc-rep1-20.webp'
      }
    ]
  },
  {
    mechanic: 'Snaking Kick',
    description: 'Dodge behind frontal cleave\nA marker always safe',
    imageUrl: './m12s/bc-rep1-21.webp',
    url: 'https://raidplan.io/plan/SFa6J6wDrU9PlCJ4#10'
  },
  {
    mechanic: 'Netherwrath Near/Far + Clone Cleaves',
    description:
      'Stack and Cleave players bait Near/Far\nEveryone else stand North exactly on boss ring\nClones will cleave E/W',
    url: 'https://raidplan.io/plan/SFa6J6wDrU9PlCJ4#14',
    strats: [
      {
        toggleKey: 'rep2tether',
        toggleValue: '',
        description: '',
        imageUrl: './m12s/bc-rep1-24.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'N',
        description: 'Stand max melee near 4',
        imageUrl: './m12s/bc-rep1-24.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NE',
        description: 'Stand North exactly on boss ring',
        imageUrl: './m12s/bc-rep1-24.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'E',
        description: 'Stand North exactly on boss ring',
        imageUrl: './m12s/bc-rep1-24.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SE',
        description: 'Stand North exactly on boss ring',
        imageUrl: './m12s/bc-rep1-24.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'S',
        description: 'Stand max melee near 3',
        imageUrl: './m12s/bc-rep1-24.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'SW',
        description: 'Stand on inner boss ring slightly north of SW',
        imageUrl: './m12s/bc-rep1-24.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'W',
        description: 'Stand North exactly on boss ring',
        imageUrl: './m12s/bc-rep1-24.webp'
      },
      {
        toggleKey: 'rep2tether',
        toggleValue: 'NW',
        description: 'Stand on inner boss ring slightly north of SE',
        imageUrl: './m12s/bc-rep1-24.webp'
      }
    ]
  },
  {
    mechanic: 'Clone First Defam + Stack',
    description:
      'Defams/Boss/Nothing move to 3 clone for stack\nCleave + Stack take proteans North',
    imageUrl: './m12s/bc-rep1-28.webp',
    url: 'https://raidplan.io/plan/SFa6J6wDrU9PlCJ4#17'
  },
  {
    mechanic: 'Clone Second Defam + Stack',
    description: 'Defams/Boss/Nothing move to 4 clone for second stack',
    imageUrl: './m12s/bc-rep1-30.webp',
    url: 'https://raidplan.io/plan/SFa6J6wDrU9PlCJ4#19'
  }
];

const rep2OverviewMechs: Record<string, MechanicStrat[]> = {
  clonezone: cloneZoneRep2Overview,
  bc: bcRep2Overview
};

const replication2Mechs: Record<string, MechanicStrat[]> = {
  clonezone: cloneZoneReplication2,
  bc: bcReplication2
};

const idyllicOverview: string =
  '<div class="flex flex-col"><ul class="overview">\n<li><strong>Player clones spawn</strong>\n<ul><li>📌🐦 Remember if Cardinals or Intercards first</li></ul></li>\n<li><strong>Player clones tether</strong>\n<ul><li>📌🧑‍🤝‍🧑 Remember your clone position</li></ul></li>\n<li><strong>Cone telegraphs</strong>\n<ul><li>📌🍦 Remember whether North or South is E/W safe</li></ul></li>\n<li><strong>Boss clones spawn</strong></li>\n<li><strong>Take boss tethers (stack or defam)</strong>\n<ul><li>📌🤔 Remember if North clone is Stack or Defam</li></ul></li>\n<li><strong>Cones resolve</strong><ul><li>💡🍦 Recall whether North or South was E/W safe</li></ul></li>\n</ul>\n\n<p class="arena-change"><em>ARENA CHANGES TO PLATFORMS</em></p>\n<ul class="overview">\n<li><strong>Platforms and towers appear</strong></li>\n<li><strong>Light spreads go off, swap if needed</strong></li>\n<li>📌🗼 Remember tower spots</li>\n</ul>\n\n<p class="arena-change"><em>ARENA CHANGES BACK</em></p>\n<ul class="overview">\n<li><strong>💡🤔🧑‍🤝‍🧑 Recall</strong>\n<ul class="flex flex-col"><li>If North clone was Stack or Defam</li>\n<li>Your clone position (determines LP and Stack/Defam)</li></ul></li>\n<li><strong>Resolve Stacks and Defams</strong></li>\n</ul></div>';
const idyllicOverview2: string =
  '<div class="flex flex-col"><p class="arena-change"><em>ARENA CHANGES TO PLATFORMS</em></p>\n<ul class="overview">\n<li><strong>💡🗼 Recall tower spots</strong></li>\n<li><strong>Resolve tower elements</strong></li>\n<li><strong>Position for cleaves</strong></li>\n<li><strong>Boss clones spawn</strong>\n<ul><li>💡🍦 Recall whether North or South clone was E/W safe</li></ul></li>\n<li><strong>Boss clone jumps into black hole</strong>\n<ul><li>📌🍦🕳️ Remember whether N/S safe or E/W safe clone goes in</li></ul></li>\n<li><strong>Boss clones jump to platforms</strong>\n<ul><li>📌🍦🐇 Remember which platform is safe and whether it\'s N/S or E/W safe</li></ul></li>\n</ul>\n\n<p class="arena-change"><em>ARENA CHANGES BACK</em></p>\n<ul class="overview">\n<li><strong>1st Stacks/Defams</strong>\n<ul><li>💡🐦 Recall whether initial clones were Cardinals or Intercards first</li></ul></li>\n</ul>\n\n<p class="arena-change"><em>ARENA CHANGES TO PLATFORMS</em></p>\n<ul class="overview">\n<li><strong>Platform + clone cone resolves</strong>\n<ul><li>💡🍦🐇 Recall which platform was safe and whether it\'s N/S or E/W safe</li></ul></li>\n</ul>\n\n<p class="arena-change"><em>ARENA CHANGES BACK</em></p>\n<ul class="overview">\n<li><strong>2nd Stacks/Defams</strong></li>\n<li><strong>Black hole clone cone resolves</strong>\n<ul><li>💡🍦🕳️ Recall whether black hole clone was N/S or E/W safe</li></ul></li>\n</ul></div>';

const dnIdyllic: Record<string, MechanicStrat[]> = {
  overview: [
    {
      mechanic: 'Overview (Start)',
      description: idyllicOverview
    },
    {
      mechanic: 'Overview (Post Stacks and Defams)',
      description: idyllicOverview2
    },
    {
      mechanic: 'What Does My Tether Do?',
      strats: [
        // Generic info - shows when 'All' is selected (or no selection)
        {
          toggleKey: 'idyllictether',
          toggleValue: '',
          description: "Select 'Idyllic Tether' to see your assignments"
        },
        // Position-specific instructions
        {
          toggleKey: 'idyllictether',
          toggleValue: 'N',
          description:
            '<strong>N Clone</strong>\nTop Right Stack for boss tethers (A + CW)\nStack on A/1'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'NE',
          description:
            '<strong>NE Clone</strong>\nBottom Right Stack for boss tethers (B + CW)\nStack on A/1'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'E',
          description:
            '<strong>E Clone</strong>\nBottom Left Stack for boss tethers (C + CW)\nStack on C/3'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'SE',
          description:
            '<strong>SE Clone</strong>\nBottom Right Stack for boss tethers (D + CW)\nStack on C/3'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'S',
          description:
            '<strong>S Clone</strong>\nTop Right Defam for boss tethers (A + CW)\n1st Defam on B\nStack on A/1'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'SW',
          description:
            '<strong>SW Clone</strong>\nBottom Right Defam for boss tethers (B + CW)\n2nd Defam on B\nStack on A/1'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'W',
          description:
            '<strong>W Clone</strong>\nBottom Left Defam for boss tethers (C + CW)\n1st Defam on D\nStack on C/3'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'NW',
          description:
            '<strong>NW Clone</strong>\nTop Left Defam for boss tethers (D + CW)\n2nd Defam on D\nStack on C/3'
        }
      ]
    }
  ],
  clones1: [
    {
      mechanic: 'Player Clones',
      description:
        '📌🐦 REMEMBER: Whether initial clones spawned Cardinal or Intercardinal first\n📌🧑‍🤝‍🧑 REMEMBER: your clone position\nN to SE: will need to take Stacks from boss clones\nS to NW: will need to take Defamations from boss clones',
      url: 'https://raidplan.io/plan/zoeminUT6l2gaOWp#4',
      strats: [
        // Generic info - shows when 'All' is selected (or no selection)
        {
          toggleKey: 'idyllictether',
          toggleValue: '',
          description: '',
          imageUrl: './m12s/dn-idyllic-3.webp'
        },
        // Position-specific instructions
        {
          toggleKey: 'idyllictether',
          toggleValue: 'N',
          description: 'Take Stack from boss clone',
          imageUrl: './m12s/dn-idyllic-3.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'NE',
          description: 'Take Stack from boss clone',
          imageUrl: './m12s/dn-idyllic-3.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'E',
          description: 'Take Stack from boss clone',
          imageUrl: './m12s/dn-idyllic-3.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'SE',
          description: 'Take Stack from boss clone',
          imageUrl: './m12s/dn-idyllic-3.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'S',
          description: 'Take Defamation from boss clone',
          imageUrl: './m12s/dn-idyllic-3.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'SW',
          description: 'Take Defamation from boss clone',
          imageUrl: './m12s/dn-idyllic-3.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'W',
          description: 'Take Defamation from boss clone',
          imageUrl: './m12s/dn-idyllic-3.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'NW',
          description: 'Take Defamation from boss clone',
          imageUrl: './m12s/dn-idyllic-3.webp'
        }
      ]
    },
    {
      mechanic: 'Cone Zone',
      description: '📌🍦 REMEMBER: whether North or South is safe from cones (E/W safe)',
      imageUrl: './m12s/dn-idyllic-4.webp',
      url: 'https://raidplan.io/plan/zoeminUT6l2gaOWp#5'
    },
    {
      mechanic: 'Tether Swaps',
      description: 'Swap with your partner in your quadrant to get the tether you need',
      url: 'https://raidplan.io/plan/zoeminUT6l2gaOWp#8',
      strats: [
        // Generic info - shows when 'All' is selected (or no selection)
        {
          toggleKey: 'idyllictether',
          toggleValue: '',
          description: '',
          imageUrl: './m12s/dn-idyllic-7.webp'
        },
        // Position-specific instructions
        {
          toggleKey: 'idyllictether',
          toggleValue: 'N',
          description: 'Take Stack from Top Right (Red/A + CW)',
          imageUrl: './m12s/dn-idyllic-7.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'NE',
          description: 'Take Stack from Bottom Right (Yellow/B + CW)',
          imageUrl: './m12s/dn-idyllic-7.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'E',
          description: 'Take Stack from Bottom Left (Blue/C + CW)',
          imageUrl: './m12s/dn-idyllic-7.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'SE',
          description: 'Take Stack from Top Left (Purple/D + CW)',
          imageUrl: './m12s/dn-idyllic-7.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'S',
          description: 'Take Defamation from Top Right (Red/A + CW)',
          imageUrl: './m12s/dn-idyllic-7.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'SW',
          description: 'Take Defamation from Bottom Right (Yellow/B + CW)',
          imageUrl: './m12s/dn-idyllic-7.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'W',
          description: 'Take Defamation from Bottom Left (Blue/C + CW)',
          imageUrl: './m12s/dn-idyllic-7.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'NW',
          description: 'Take Defamation from Top Left (Purple/D + CW)',
          imageUrl: './m12s/dn-idyllic-7.webp'
        }
      ]
    },
    {
      mechanic: 'Boss Clones Spawn + Take Tethers',
      description: '📌🤔 REMEMBER: Whether North clone was Stack or Defamation',
      imageUrl: './m12s/dn-idyllic-8.webp',
      url: 'https://raidplan.io/plan/zoeminUT6l2gaOWp#9'
    },
    {
      mechanic: 'Cones Resolve',
      description:
        '💡🍦 RECALL: Whether South or North is safe from cones\nGo to Cone safespots (South or North) with True G1 West/G2 East\nMove to platforms right after',
      imageUrl: './m12s/dn-idyllic-10.webp',
      url: 'https://raidplan.io/plan/zoeminUT6l2gaOWp#11'
    }
  ],
  platforms1: [
    {
      mechanic: 'Platform Setup',
      description: 'True G1 West/G2 East\nSupports Left, DPS Right\nMelees close, Ranged far',
      url: 'https://raidplan.io/plan/zoeminUT6l2gaOWp#12',
      strats: [
        {
          role: 'Tank',
          party: 1,
          description: 'West platform (D marker)\nFront Left looking at boss',
          imageUrl: './m12s/dn-idyllic-11.webp'
        },
        {
          role: 'Tank',
          party: 2,
          description: 'East platform (B marker)\nFront Left looking at boss',
          imageUrl: './m12s/dn-idyllic-11.webp'
        },
        {
          role: 'Healer',
          party: 1,
          description: 'West platform (D marker)\nBack Left looking at boss',
          imageUrl: './m12s/dn-idyllic-11.webp'
        },
        {
          role: 'Healer',
          party: 2,
          description: 'East platform (B marker)\nBack Left looking at boss',
          imageUrl: './m12s/dn-idyllic-11.webp'
        },
        {
          role: 'Melee',
          party: 1,
          description: 'West platform (D marker)\nFront Right looking at boss',
          imageUrl: './m12s/dn-idyllic-11.webp'
        },
        {
          role: 'Melee',
          party: 2,
          description: 'East platform (B marker)\nFront Right looking at boss',
          imageUrl: './m12s/dn-idyllic-11.webp'
        },
        {
          role: 'Ranged',
          party: 1,
          description: 'West platform (D marker)\nBack Right looking at boss',
          imageUrl: './m12s/dn-idyllic-11.webp'
        },
        {
          role: 'Ranged',
          party: 2,
          description: 'East platform (B marker)\nBack Right looking at boss',
          imageUrl: './m12s/dn-idyllic-11.webp'
        }
      ]
    },
    {
      mechanic: 'Towers',
      description:
        'Towers can be Earth (twister), Fire (pyretic), Wind (Light-aspected, knockback), Doom (Light-aspected, baited laser)',
      imageUrl: './m12s/dn-idyllic-12.webp',
      url: 'https://raidplan.io/plan/zoeminUT6l2gaOWp#13'
    },
    {
      mechanic: 'Swaps',
      description:
        'One role gets hit with light spreads, light must swap out of Wind or Doom\nRanged swap with Ranged, Melee swap with Melee\n📌🗼 REMEMBER: your tower post-swap',
      imageUrl: './m12s/dn-idyllic-13.webp',
      url: 'https://raidplan.io/plan/zoeminUT6l2gaOWp#14'
    }
  ],
  clones2: [
    {
      mechanic: 'Recall Clones and Tethers',
      description:
        '💡🤔🧑‍🤝‍🧑 RECALL:\nWhether North clone was Stack or Defamation\nTemporary light parties\nIf you were 1st or 2nd Defamation or a Stack',
      imageUrl: './m12s/dn-idyllic-15.webp',
      url: 'https://raidplan.io/plan/zoeminUT6l2gaOWp#16'
    },
    {
      mechanic: 'Defamations/Stacks',
      description: 'Defamations will be on D and B\nStacks will be on 1 and 3',
      url: 'https://raidplan.io/plan/zoeminUT6l2gaOWp#18',
      strats: [
        // Generic info - shows when 'All' is selected (or no selection)
        {
          toggleKey: 'idyllictether',
          toggleValue: '',
          description: '',
          imageUrl: './m12s/dn-idyllic-17.webp'
        },
        // Position-specific instructions
        {
          toggleKey: 'idyllictether',
          toggleValue: 'N',
          description: 'Take Stacks on 1',
          imageUrl: './m12s/dn-idyllic-17.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'NE',
          description: 'Take Stacks on 1',
          imageUrl: './m12s/dn-idyllic-17.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'E',
          description: 'Take Stacks on 3',
          imageUrl: './m12s/dn-idyllic-17.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'SE',
          description: 'Take Stacks on 3',
          imageUrl: './m12s/dn-idyllic-17.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'S',
          description: '1st Defamation on B\nTake Stacks on 1',
          imageUrl: './m12s/dn-idyllic-17.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'SW',
          description: '2nd Defamation on B\nTake Stacks on 1',
          imageUrl: './m12s/dn-idyllic-17.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'W',
          description: '1st Defamation on D\nTake Stacks on 3',
          imageUrl: './m12s/dn-idyllic-17.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'NW',
          description: '2nd Defamation on D\nTake Stacks on 3',
          imageUrl: './m12s/dn-idyllic-17.webp'
        }
      ]
    }
  ],
  platforms2: [
    {
      mechanic: 'Elements',
      description:
        "💡🗼 RECALL: your tower assignments\nWind: Get KB to the other platform\nDoom: Point line away\nFire: Don't move (can still attack)\nEarth: Move out of twister",
      imageUrl: './m12s/dn-idyllic-24.webp',
      url: 'https://raidplan.io/plan/zoeminUT6l2gaOWp#25'
    },
    {
      mechanic: 'Setup for Cones',
      description:
        'Wind: E/W of boss touching hitbox\nDoom: North edge of platform touching hitbox\nRanged Fire/Earth: South edge of platform\nMelee Fire/Earth: Center north of platform between Doom/Wind',
      imageUrl: './m12s/dn-idyllic-26.webp',
      url: 'https://raidplan.io/plan/zoeminUT6l2gaOWp#27'
    }
  ],
  blackhole: [
    {
      mechanic: 'Clone Spawns',
      description:
        '💡🍦 RECALL: whether South or North is safe from cones (E/W safe) from beginning of the mech',
      imageUrl: './m12s/dn-idyllic-29.webp',
      url: 'https://raidplan.io/plan/zoeminUT6l2gaOWp#30'
    },
    {
      mechanic: 'Black Hole Clone',
      description:
        '📌🍦🕳️ REMEMBER: Whether clone that jumps into the black hole is N/S or E/W safe\n📌🍦🐇 REMEMBER: Which platform the remaining N/S clone jumps to and which direction is safe',
      imageUrl: './m12s/dn-idyllic-30.webp',
      url: 'https://raidplan.io/plan/zoeminUT6l2gaOWp#31'
    },
    {
      mechanic: '1st Defamations/Stacks',
      description:
        '💡🐦 RECALL: Whether initial clones spawned Cardinal or Intercardinal first\nCardinal: Party to A marker, Tanks to B marker, slightly towards NE\nIntercard: Party NE, Tanks SE, slightly towards B',
      url: 'https://raidplan.io/plan/zoeminUT6l2gaOWp#35',
      strats: [
        {
          role: 'Tank',
          party: 1,
          description:
            'Cardinal: B marker slightly towards NE\nIntercard: SE slightly towards B',
          imageUrl: './m12s/dn-idyllic-34.webp'
        },
        {
          role: 'Tank',
          party: 2,
          description:
            'Cardinal: B marker slightly towards NE\nIntercard: SE slightly towards B',
          imageUrl: './m12s/dn-idyllic-34.webp'
        },
        {
          role: 'Healer',
          party: 1,
          description:
            'Cardinal: A marker slightly towards NE\nIntercard: NE slightly towards B',
          imageUrl: './m12s/dn-idyllic-34.webp'
        },
        {
          role: 'Healer',
          party: 2,
          description:
            'Cardinal: A marker slightly towards NE\nIntercard: NE slightly towards B',
          imageUrl: './m12s/dn-idyllic-34.webp'
        },
        {
          role: 'Melee',
          party: 1,
          description:
            'Cardinal: A marker slightly towards NE\nIntercard: NE slightly towards B',
          imageUrl: './m12s/dn-idyllic-34.webp'
        },
        {
          role: 'Melee',
          party: 2,
          description:
            'Cardinal: A marker slightly towards NE\nIntercard: NE slightly towards B',
          imageUrl: './m12s/dn-idyllic-34.webp'
        },
        {
          role: 'Ranged',
          party: 1,
          description:
            'Cardinal: A marker slightly towards NE\nIntercard: NE slightly towards B',
          imageUrl: './m12s/dn-idyllic-34.webp'
        },
        {
          role: 'Ranged',
          party: 2,
          description:
            'Cardinal: A marker slightly towards NE\nIntercard: NE slightly towards B',
          imageUrl: './m12s/dn-idyllic-34.webp'
        }
      ]
    },
    {
      mechanic: 'Platform + Cone',
      description:
        '💡🍦🐇 RECALL: Which platform the remaining N/S clone jumps to and which direction is safe\nGo to the platform where clone jumped to and dodge cones',
      imageUrl: './m12s/dn-idyllic-35.webp',
      url: 'https://raidplan.io/plan/zoeminUT6l2gaOWp#36'
    },
    {
      mechanic: '2nd Defamations/Stacks',
      description:
        'Do the other variation from the 1st one\nCardinal: Party to A marker, Tanks to B marker, slightly towards NE\nIntercard: Party NE, Tanks SE, slightly towards B',
      url: 'https://raidplan.io/plan/zoeminUT6l2gaOWp#37',
      strats: [
        {
          role: 'Tank',
          party: 1,
          description:
            'Cardinal: B marker slightly towards NE\nIntercard: SE slightly towards B',
          imageUrl: './m12s/dn-idyllic-36.webp'
        },
        {
          role: 'Tank',
          party: 2,
          description:
            'Cardinal: B marker slightly towards NE\nIntercard: SE slightly towards B',
          imageUrl: './m12s/dn-idyllic-36.webp'
        },
        {
          role: 'Healer',
          party: 1,
          description:
            'Cardinal: A marker slightly towards NE\nIntercard: NE slightly towards B',
          imageUrl: './m12s/dn-idyllic-36.webp'
        },
        {
          role: 'Healer',
          party: 2,
          description:
            'Cardinal: A marker slightly towards NE\nIntercard: NE slightly towards B',
          imageUrl: './m12s/dn-idyllic-36.webp'
        },
        {
          role: 'Melee',
          party: 1,
          description:
            'Cardinal: A marker slightly towards NE\nIntercard: NE slightly towards B',
          imageUrl: './m12s/dn-idyllic-36.webp'
        },
        {
          role: 'Melee',
          party: 2,
          description:
            'Cardinal: A marker slightly towards NE\nIntercard: NE slightly towards B',
          imageUrl: './m12s/dn-idyllic-36.webp'
        },
        {
          role: 'Ranged',
          party: 1,
          description:
            'Cardinal: A marker slightly towards NE\nIntercard: NE slightly towards B',
          imageUrl: './m12s/dn-idyllic-36.webp'
        },
        {
          role: 'Ranged',
          party: 2,
          description:
            'Cardinal: A marker slightly towards NE\nIntercard: NE slightly towards B',
          imageUrl: './m12s/dn-idyllic-36.webp'
        }
      ]
    },
    {
      mechanic: 'Black Hole Clone Resolves',
      description:
        '💡🍦🕳️ RECALL: Whether clone that jumped into the black hole was N/S or E/W safe\nDodge black hole clone cleaves from North',
      imageUrl: './m12s/dn-idyllic-37.webp',
      url: 'https://raidplan.io/plan/zoeminUT6l2gaOWp#38'
    }
  ]
};

const caroIdyllic: Record<string, MechanicStrat[]> = {
  overview: [
    {
      mechanic: 'Overview (Start)',
      description: idyllicOverview
    },
    {
      mechanic: 'Overview (Post Stacks and Defams)',
      description: idyllicOverview2
    },
    {
      mechanic: 'What Does My Tether Do?',
      strats: [
        // Generic info - shows when 'All' is selected (or no selection)
        {
          toggleKey: 'idyllictether',
          toggleValue: '',
          description: "Select 'Idyllic Tether' to see your assignments"
        },
        // Position-specific instructions
        {
          toggleKey: 'idyllictether',
          toggleValue: 'N',
          description:
            '<strong>N Clone</strong>\nRed Defamation for boss tethers\n1st Defam on A\nStack on B'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'NE',
          description:
            '<strong>NE Clone</strong>\nRed Stack for boss tethers\nStack on B'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'E',
          description:
            '<strong>E Clone</strong>\nYellow Stack for boss tethers\nStack on B'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'SE',
          description:
            '<strong>SE Clone</strong>\nYellow Defamation for boss tethers\n2nd Defam on A\nStack on B'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'S',
          description:
            '<strong>S Clone</strong>\nBlue Defamation for boss tethers\n1st Defam on C\nStack on D'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'SW',
          description:
            '<strong>SW Clone</strong>\nBlue Stack for boss tethers\nStack on D'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'W',
          description:
            '<strong>W Clone</strong>\nPurple Stack for boss tethers\nStack on D'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'NW',
          description:
            '<strong>NW Clone</strong>\nBlue Defamation for boss tethers\n2nd Defam on C\nStack on D'
        }
      ]
    }
  ],
  clones1: [
    {
      mechanic: 'Player Clones',
      description:
        '📌🐦 REMEMBER: Whether initial clones spawned Cardinal or Intercardinal first\n📌🧑‍🤝‍🧑 REMEMBER: your clone position',
      url: 'https://raidplan.io/plan/9zpa6vu5kxgtuwqc#3',
      imageUrl: './m12s/caro-id-2.webp'
    },
    {
      mechanic: 'Cone Zone',
      description: '📌🍦 REMEMBER: whether North or South is safe from cones (E/W safe)',
      imageUrl: './m12s/caro-id-4.webp',
      url: 'https://raidplan.io/plan/9zpa6vu5kxgtuwqc#5'
    },
    {
      mechanic: 'Tether Grabs',
      description: 'Grab the tether from your color pair that you need',
      url: 'https://raidplan.io/plan/9zpa6vu5kxgtuwqc#9',
      strats: [
        // Generic info - shows when 'All' is selected (or no selection)
        {
          toggleKey: 'idyllictether',
          toggleValue: '',
          description: '',
          imageUrl: './m12s/caro-id-8.webp'
        },
        // Position-specific instructions
        {
          toggleKey: 'idyllictether',
          toggleValue: 'N',
          description: 'Take Defamation from boss clone on Red markers (A/1)',
          imageUrl: './m12s/caro-id-8.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'NE',
          description: 'Take Stack from boss clone on Red markers (A/1)',
          imageUrl: './m12s/caro-id-8.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'E',
          description: 'Take Stack from boss clone on Yellow markers (B/2)',
          imageUrl: './m12s/caro-id-8.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'SE',
          description: 'Take Defamation from boss clone on Yellow markers (B/2)',
          imageUrl: './m12s/caro-id-8.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'S',
          description: 'Take Defamation from boss clone on Blue markers (C/3)',
          imageUrl: './m12s/caro-id-8.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'SW',
          description: 'Take Stack from boss clone on Blue markers (C/3)',
          imageUrl: './m12s/caro-id-8.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'W',
          description: 'Take Stack from boss clone on Purple markers (D/4)',
          imageUrl: './m12s/caro-id-8.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'NW',
          description: 'Take Defamation from boss clone on Purple markers (D/4)',
          imageUrl: './m12s/caro-id-8.webp'
        }
      ]
    },
    {
      mechanic: 'Boss Clones Spawn + Take Tethers',
      description: '📌🤔 REMEMBER: Whether North clone was Stack or Defamation',
      imageUrl: './m12s/caro-id-11.webp',
      url: 'https://raidplan.io/plan/9zpa6vu5kxgtuwqc#12'
    },
    {
      mechanic: 'Cones Resolve',
      description:
        '💡🍦 RECALL: Whether South or North is safe from cones\nGo to Cone safespots (South or North) with True G1 West/G2 East\nMove to platforms right after',
      imageUrl: './m12s/caro-id-12.webp',
      url: 'https://raidplan.io/plan/9zpa6vu5kxgtuwqc#13'
    }
  ],
  platforms1: [
    {
      mechanic: 'Platform Setup',
      description: 'True G1 West/G2 East\nSupports Left, DPS Right facing boss\nMelees close, Ranged far',
      url: 'https://raidplan.io/plan/9zpa6vu5kxgtuwqc#14',
      strats: [
        {
          role: 'Tank',
          party: 1,
          description: 'West platform (D marker)\nFront Left looking at boss',
          imageUrl: './m12s/caro-id-13.webp'
        },
        {
          role: 'Tank',
          party: 2,
          description: 'East platform (B marker)\nFront Left looking at boss',
          imageUrl: './m12s/caro-id-13.webp'
        },
        {
          role: 'Healer',
          party: 1,
          description: 'West platform (D marker)\nBack Left looking at boss',
          imageUrl: './m12s/caro-id-13.webp'
        },
        {
          role: 'Healer',
          party: 2,
          description: 'East platform (B marker)\nBack Left looking at boss',
          imageUrl: './m12s/caro-id-13.webp'
        },
        {
          role: 'Melee',
          party: 1,
          description: 'West platform (D marker)\nFront Right looking at boss',
          imageUrl: './m12s/caro-id-13.webp'
        },
        {
          role: 'Melee',
          party: 2,
          description: 'East platform (B marker)\nFront Right looking at boss',
          imageUrl: './m12s/caro-id-13.webp'
        },
        {
          role: 'Ranged',
          party: 1,
          description: 'West platform (D marker)\nBack Right looking at boss',
          imageUrl: './m12s/caro-id-13.webp'
        },
        {
          role: 'Ranged',
          party: 2,
          description: 'East platform (B marker)\nBack Right looking at boss',
          imageUrl: './m12s/caro-id-13.webp'
        }
      ]
    },
    {
      mechanic: 'Towers',
      description:
        'Towers can be Earth (twister), Fire (pyretic), Wind (Light-aspected, knockback), Doom (Light-aspected, baited laser)',
      imageUrl: './m12s/caro-id-15.webp',
      url: 'https://raidplan.io/plan/9zpa6vu5kxgtuwqc#16'
    },
    {
      mechanic: 'Swaps',
      description:
        'One role gets hit with light spreads, light must swap out of Wind or Doom\nRanged swap with Ranged, Melee swap with Melee\n📌🗼 REMEMBER: your tower post-swap',
      imageUrl: './m12s/caro-id-16.webp',
      url: 'https://raidplan.io/plan/9zpa6vu5kxgtuwqc#17'
    }
  ],
  clones2: [
    {
      mechanic: 'Recall Clones and Tethers',
      description:
        '💡🤔🧑‍🤝‍🧑 RECALL:\nWhether North clone was Stack or Defamation\nTemporary light parties\nIf you were 1st or 2nd Defamation or a Stack',
      imageUrl: './m12s/caro-id-18.webp',
      url: 'https://raidplan.io/plan/9zpa6vu5kxgtuwqc#19'
    },
    {
      mechanic: 'Defamations/Stacks',
      description: 'Defamations will be on D and B\nStacks will be on 1 and 3',
      url: 'https://raidplan.io/plan/9zpa6vu5kxgtuwqc#20',
      strats: [
        // Generic info - shows when 'All' is selected (or no selection)
        {
          toggleKey: 'idyllictether',
          toggleValue: '',
          description: '',
          imageUrl: './m12s/caro-id-19.webp'
        },
        // Position-specific instructions
        {
          toggleKey: 'idyllictether',
          toggleValue: 'N',
          description: '1st Defamation on A\nTake Stacks on B',
          imageUrl: './m12s/caro-id-19.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'NE',
          description: 'Take Stacks on B',
          imageUrl: './m12s/caro-id-19.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'E',
          description: 'Take Stacks on B',
          imageUrl: './m12s/caro-id-19.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'SE',
          description: '2nd Defamation on A\nTake Stacks on B',
          imageUrl: './m12s/caro-id-19.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'S',
          description: '1st Defamation on C\nTake Stacks on D',
          imageUrl: './m12s/caro-id-19.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'SW',
          description: 'Take Stacks on D',
          imageUrl: './m12s/caro-id-19.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'W',
          description: 'Take Stacks on D',
          imageUrl: './m12s/caro-id-19.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'NW',
          description: '2nd Defamation on C\nTake Stacks on D',
          imageUrl: './m12s/caro-id-19.webp'
        }
      ]
    }
  ],
  platforms2: [
    {
      mechanic: 'Elements',
      description:
        "💡🗼 RECALL: your tower assignments\nWind: Get KB to the other platform\nDoom: Point line away\nFire: Don't move (can still attack)\nEarth: Move out of twister",
      imageUrl: './m12s/caro-id-24.webp',
      url: 'https://raidplan.io/plan/9zpa6vu5kxgtuwqc#25'
    },
    {
      mechanic: 'Setup for Cones',
      description:
        'Wind: North edge of platform max melee\nDoom: Middle slightly North on hitbox\nEarth: Middle slightly North max melee behind Doom\nFire: South edge of platform max melee',
      imageUrl: './m12s/caro-id-26.webp',
      url: 'https://raidplan.io/plan/9zpa6vu5kxgtuwqc#27'
    }
  ],
  blackhole: [
    {
      mechanic: 'Clone Spawns',
      description:
        '💡🍦 RECALL: whether South or North is safe from cones (E/W safe) from beginning of the mech',
      imageUrl: './m12s/caro-id-27.webp',
      url: 'https://raidplan.io/plan/9zpa6vu5kxgtuwqc#28'
    },
    {
      mechanic: 'Black Hole Clone',
      description:
        '📌🍦🕳️ REMEMBER: Whether clone that jumps into the black hole is N/S or E/W safe\n📌🍦🐇 REMEMBER: Which platform the remaining N/S clone jumps to and which direction is safe',
      imageUrl: './m12s/caro-id-28.webp',
      url: 'https://raidplan.io/plan/9zpa6vu5kxgtuwqc#29'
    },
    {
      mechanic: '1st Defamations/Stacks',
      description:
        '💡🐦 RECALL: Whether initial clones spawned Cardinal or Intercardinal first\nCardinal: G1 to D, G2 to B between clone and wall\nIntercard: G1 to 3, G2 to 1 between clone and wall',
      url: 'https://raidplan.io/plan/9zpa6vu5kxgtuwqc#31',
      strats: [
        {
          role: 'Tank',
          party: 1,
          description:
            'Cardinal: D marker between clone and wall\nIntercard: 3 marker between clone and wall',
          imageUrl: './m12s/caro-id-30.webp'
        },
        {
          role: 'Tank',
          party: 2,
          description:
            'Cardinal: B marker between clone and wall\nIntercard: 1 marker between clone and wall',
          imageUrl: './m12s/caro-id-30.webp'
        },
        {
          role: 'Healer',
          party: 1,
          description:
            'Cardinal: D marker between clone and wall\nIntercard: 3 marker between clone and wall',
          imageUrl: './m12s/caro-id-30.webp'
        },
        {
          role: 'Healer',
          party: 2,
          description:
            'Cardinal: B marker between clone and wall\nIntercard: 1 marker between clone and wall',
          imageUrl: './m12s/caro-id-30.webp'
        },
        {
          role: 'Melee',
          party: 1,
          description:
            'Cardinal: D marker between clone and wall\nIntercard: 3 marker between clone and wall',
          imageUrl: './m12s/caro-id-30.webp'
        },
        {
          role: 'Melee',
          party: 2,
          description:
            'Cardinal: B marker between clone and wall\nIntercard: 1 marker between clone and wall',
          imageUrl: './m12s/caro-id-30.webp'
        },
        {
          role: 'Ranged',
          party: 1,
          description:
            'Cardinal: D marker between clone and wall\nIntercard: 3 marker between clone and wall',
          imageUrl: './m12s/caro-id-30.webp'
        },
        {
          role: 'Ranged',
          party: 2,
          description:
            'Cardinal: B marker between clone and wall\nIntercard: 1 marker between clone and wall',
          imageUrl: './m12s/caro-id-30.webp'
        }
      ]
    },
    {
      mechanic: 'Platform + Cone',
      description:
        '💡🍦🐇 RECALL: Which platform the remaining N/S clone jumps to and which direction is safe\nGo to the platform where clone jumped to and dodge cones',
      imageUrl: './m12s/caro-id-32.webp',
      url: 'https://raidplan.io/plan/9zpa6vu5kxgtuwqc#33'
    },
    {
      mechanic: '2nd Defamations/Stacks',
      description:
        'Do the other variation from the 1st one\nCardinal: Party to A marker, Tanks to B marker, slightly towards NE\nIntercard: Party NE, Tanks SE, slightly towards B',
      url: 'https://raidplan.io/plan/9zpa6vu5kxgtuwqc#34',
      strats: [
        {
          role: 'Tank',
          party: 1,
          description:
            'Cardinal: D marker between clone and wall\nIntercard: 3 marker between clone and wall',
          imageUrl: './m12s/caro-id-33.webp'
        },
        {
          role: 'Tank',
          party: 2,
          description:
            'Cardinal: B marker between clone and wall\nIntercard: 1 marker between clone and wall',
          imageUrl: './m12s/caro-id-33.webp'
        },
        {
          role: 'Healer',
          party: 1,
          description:
            'Cardinal: D marker between clone and wall\nIntercard: 3 marker between clone and wall',
          imageUrl: './m12s/caro-id-33.webp'
        },
        {
          role: 'Healer',
          party: 2,
          description:
            'Cardinal: B marker between clone and wall\nIntercard: 1 marker between clone and wall',
          imageUrl: './m12s/caro-id-33.webp'
        },
        {
          role: 'Melee',
          party: 1,
          description:
            'Cardinal: D marker between clone and wall\nIntercard: 3 marker between clone and wall',
          imageUrl: './m12s/caro-id-33.webp'
        },
        {
          role: 'Melee',
          party: 2,
          description:
            'Cardinal: B marker between clone and wall\nIntercard: 1 marker between clone and wall',
          imageUrl: './m12s/caro-id-33.webp'
        },
        {
          role: 'Ranged',
          party: 1,
          description:
            'Cardinal: D marker between clone and wall\nIntercard: 3 marker between clone and wall',
          imageUrl: './m12s/caro-id-33.webp'
        },
        {
          role: 'Ranged',
          party: 2,
          description:
            'Cardinal: B marker between clone and wall\nIntercard: 1 marker between clone and wall',
          imageUrl: './m12s/caro-id-33.webp'
        }
      ]
    },
    {
      mechanic: 'Black Hole Clone Resolves',
      description:
        '💡🍦🕳️ RECALL: Whether clone that jumped into the black hole was N/S or E/W safe\nDodge black hole clone cleaves from North',
      imageUrl: './m12s/caro-id-34.webp',
      url: 'https://raidplan.io/plan/9zpa6vu5kxgtuwqc#35'
    }
  ]
};

const cozyIdyllic: Record<string, MechanicStrat[]> = {
  overview: [
    {
      mechanic: 'Overview (Start)',
      description: idyllicOverview
    },
    {
      mechanic: 'Overview (Post Stacks and Defams)',
      description: idyllicOverview2
    },
    {
      mechanic: 'What Does My Tether Do?',
      strats: [
        // Generic info - shows when 'All' is selected (or no selection)
        {
          toggleKey: 'idyllictether',
          toggleValue: '',
          description: "Select 'Idyllic Tether' to see your assignments"
        },
        // Position-specific instructions
        {
          toggleKey: 'idyllictether',
          toggleValue: 'N',
          description:
            '<strong>N Clone</strong>\nTake Stack tether from Top Right (A/1 + CW)\nStack North (1)'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'NE',
          description:
            '<strong>NE Clone</strong>\nTake Stack tether from Bottom Right (B/2 + CW)\nStack North (1)'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'E',
          description:
            '<strong>E Clone</strong>\nTake Stack tether from Bottom Left (C/3 + CW)\nStack East (2)'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'SE',
          description:
            '<strong>SE Clone</strong>\nTake Stack tether from Bottom Right (D/4 + CW)\nStack East (2)'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'S',
          description:
            '<strong>S Clone</strong>\nTake Defam tether from Top Right (A/1 + CW)\n1st Defam South (C)\nStack East (2)'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'SW',
          description:
            '<strong>SW Clone</strong>\nTake Defam tether from Bottom Right (B/2 + CW)\n2nd Defam South (C)\nStack East (2)'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'W',
          description:
            '<strong>W Clone</strong>\nTake Defam tether from Bottom Left (C/3 + CW)\n1st Defam West (D)\nStack North (1)'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'NW',
          description:
            '<strong>NW Clone</strong>\nTake Defam tether from Top Left (D/4 + CW)\n2nd Defam West (D)\nStack North (1)'
        }
      ]
    }
  ],
  clones2: [
    {
      mechanic: 'Recall Clones and Tethers',
      description:
        '💡🤔🧑‍🤝‍🧑 RECALL:\nWhether North clone was Stack or Defamation\nTemporary light parties\nIf you were 1st or 2nd Defamation or a Stack',
      imageUrl: './m12s/cozy-id-10.webp',
      url: 'https://raidplan.io/plan/txtzacv3uvbjzuku#11'
    },
    {
      mechanic: 'Defamations',
      description: 'Take Stacks/Defams near your original clone positions\nDefamations will be on the edge near D and C',
      url: 'https://raidplan.io/plan/txtzacv3uvbjzuku#12',
      strats: [
        // Generic info - shows when 'All' is selected (or no selection)
        {
          toggleKey: 'idyllictether',
          toggleValue: '',
          description: '',
          imageUrl: './m12s/cozy-id-11.webp'
        },
        // Position-specific instructions
        {
          toggleKey: 'idyllictether',
          toggleValue: 'N',
          description: 'Stay NE to avoid defamations',
          imageUrl: './m12s/cozy-id-11.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'NE',
          description: 'Stay NE to avoid defamations',
          imageUrl: './m12s/cozy-id-11.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'E',
          description: 'Stay NE to avoid defamations',
          imageUrl: './m12s/cozy-id-11.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'SE',
          description: 'Stay NE to avoid defamations',
          imageUrl: './m12s/cozy-id-11.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'S',
          description: '1st Defamation South (C)',
          imageUrl: './m12s/cozy-id-11.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'SW',
          description: '2nd Defamation South (C)',
          imageUrl: './m12s/cozy-id-11.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'W',
          description: '1st Defamation West (D)',
          imageUrl: './m12s/cozy-id-11.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'NW',
          description: '2nd Defamation West (D)',
          imageUrl: './m12s/cozy-id-11.webp'
        }
      ]
    },
    {
      mechanic: 'Stacks',
      description: 'Take Stacks/Defams near your original clone positions\nStacks will be near 1 and 2',
      url: 'https://raidplan.io/plan/txtzacv3uvbjzuku#13',
      strats: [
        // Generic info - shows when 'All' is selected (or no selection)
        {
          toggleKey: 'idyllictether',
          toggleValue: '',
          description: '',
          imageUrl: './m12s/cozy-id-12.webp'
        },
        // Position-specific instructions
        {
          toggleKey: 'idyllictether',
          toggleValue: 'N',
          description: 'Take Stacks North (1)',
          imageUrl: './m12s/cozy-id-12.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'NE',
          description: 'Take Stacks North (1)',
          imageUrl: './m12s/cozy-id-12.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'E',
          description: 'Take Stacks East (2)',
          imageUrl: './m12s/cozy-id-12.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'SE',
          description: 'Take Stacks East (2)',
          imageUrl: './m12s/cozy-id-12.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'S',
          description: 'Take Stacks East (2)',
          imageUrl: './m12s/cozy-id-12.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'SW',
          description: 'Take Stacks East (2)',
          imageUrl: './m12s/cozy-id-12.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'W',
          description: 'Take Stacks North (1)',
          imageUrl: './m12s/cozy-id-12.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'NW',
          description: 'Take Stacks North (1)',
          imageUrl: './m12s/cozy-id-12.webp'
        }
      ]
    }
  ],
};

const emIdyllic: Record<string, MechanicStrat[]> = {
  overview: [
    {
      mechanic: 'Overview (Start)',
      description: idyllicOverview
    },
    {
      mechanic: 'Overview (Post Stacks and Defams)',
      description: idyllicOverview2
    },
    {
      mechanic: 'What Does My Tether Do?',
      strats: [
        // Generic info - shows when 'All' is selected (or no selection)
        {
          toggleKey: 'idyllictether',
          toggleValue: '',
          description: "Select 'Idyllic Tether' to see your assignments"
        },
        // Position-specific instructions
        {
          toggleKey: 'idyllictether',
          toggleValue: 'N',
          description:
            '<strong>N Clone</strong>\nTake Stack boss tether, swap partner is Southwest (4)\nStack Northwest (1)'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'NE',
          description:
            '<strong>NE Clone</strong>\nTake Stack boss tether, swap partner is South (C)\nStack Northeast (2)'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'E',
          description:
            '<strong>E Clone</strong>\nTake Stack boss tether, swap partner is Southeast (3)\nStack Northeast (2)'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'SE',
          description:
            '<strong>SE Clone</strong>\nTake Defam boss tether, swap partner is East (B)\n2nd Defam Southeast (3)\nStack Northeast (2)'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'S',
          description:
            '<strong>S Clone</strong>\nTake Defam boss tether, swap partner is Northeast (2)\n1st Defam Southeast (3)\nStack Northeast (2)'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'SW',
          description:
            '<strong>SW Clone</strong>\nTake Defam boss tether, swap partner is North (A)\n1st Defam Southwest (4)\nStack Northwest (1)'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'W',
          description:
            '<strong>W Clone</strong>\nTake Defam boss tether, swap partner is Northwest (1)\n2nd Defam Southwest (4)\nStack Northwest (1)'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'NW',
          description:
            '<strong>NW Clone</strong>\nTake Stack boss tether, swap partner is West (D)\nStack Northwest (1)'
        }
      ]
    }
  ],
  clones1: [
    {
      mechanic: 'Player Clones',
      description:
        '📌🐦 REMEMBER: Whether initial clones spawned Cardinal or Intercardinal first\n📌🧑‍🤝‍🧑 REMEMBER: your clone position',
      url: 'https://raidplan.io/plan/buBeeLVDS9lTlLt2#3',
      imageUrl: './m12s/em-id-2.webp'
    },
    {
      mechanic: 'Cone Zone',
      description: '📌🍦 REMEMBER: whether North or South is safe from cones (E/W safe)',
      imageUrl: './m12s/dn-idyllic-4.webp',
      url: 'https://raidplan.io/plan/buBeeLVDS9lTlLt2#5'
    },
    {
      mechanic: 'Tether Grabs',
      description: 'Grab the tether at your spot if it matches your assignment\nSwap with your partner if not',
      url: 'https://raidplan.io/plan/buBeeLVDS9lTlLt2#3',
      strats: [
        // Generic info - shows when 'All' is selected (or no selection)
        {
          toggleKey: 'idyllictether',
          toggleValue: '',
          description: '',
          imageUrl: './m12s/em-id-2.webp'
        },
        // Position-specific instructions
        {
          toggleKey: 'idyllictether',
          toggleValue: 'N',
          description: 'Take Stack boss tether, swap partner is Southwest (4)',
          imageUrl: './m12s/em-id-2.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'NE',
          description: 'Take Stack boss tether, swap partner is South (C)',
          imageUrl: './m12s/em-id-2.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'E',
          description: 'TakTake Stack boss tether, swap partner is Southeast (3)',
          imageUrl: './m12s/em-id-2.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'SE',
          description: 'Take Defam boss tether, swap partner is East (B)',
          imageUrl: './m12s/em-id-2.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'S',
          description: 'Take Defam boss tether, swap partner is Northeast (2)',
          imageUrl: './m12s/em-id-2.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'SW',
          description: 'Take Defam boss tether, swap partner is North (A)',
          imageUrl: './m12s/em-id-2.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'W',
          description: 'Take Defam boss tether, swap partner is Northwest (1)',
          imageUrl: './m12s/em-id-2.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'NW',
          description: 'Take Stack boss tether, swap partner is West (D)',
          imageUrl: './m12s/em-id-2.webp'
        }
      ]
    },
    {
      mechanic: 'Boss Clones Spawn + Take Tethers',
      description: '📌🤔 REMEMBER: Whether North clone was Stack or Defamation',
      imageUrl: './m12s/em-id-5.webp',
      url: 'https://raidplan.io/plan/buBeeLVDS9lTlLt2#6'
    },
    {
      mechanic: 'Cones Resolve',
      description:
        '💡🍦 RECALL: Whether South or North is safe from cones\nGo to Cone safespots (South or North) with True G1 West/G2 East\nMove to platforms right after',
      imageUrl: './m12s/dn-idyllic-10.webp',
      url: 'https://raidplan.io/plan/buBeeLVDS9lTlLt2#5'
    }
  ],
  clones2: [
    {
      mechanic: 'Recall Clones and Tethers',
      description:
        '💡🤔🧑‍🤝‍🧑 RECALL:\nWhether North clone was Stack or Defamation\nTemporary light parties\nIf you were 1st or 2nd Defamation or a Stack',
      imageUrl: './m12s/em-id-5.webp',
      url: 'https://raidplan.io/plan/buBeeLVDS9lTlLt2#6'
    },
    {
      mechanic: 'Defamations',
      description: 'Take Stacks/Defams near your original clone positions\nDefamations will be on the edge near D and C',
      url: 'https://raidplan.io/plan/buBeeLVDS9lTlLt2#8',
      strats: [
        // Generic info - shows when 'All' is selected (or no selection)
        {
          toggleKey: 'idyllictether',
          toggleValue: '',
          description: '',
          imageUrl: './m12s/em-id-7.webp'
        },
        // Position-specific instructions
        {
          toggleKey: 'idyllictether',
          toggleValue: 'N',
          description: 'Stay North-ish of 1 to avoid Defamations',
          imageUrl: './m12s/em-id-7.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'NE',
          description: 'Stay North-ish of 2 to avoid Defamations',
          imageUrl: './m12s/em-id-7.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'E',
          description: 'Stay North-ish of 2 to avoid Defamations',
          imageUrl: './m12s/em-id-7.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'SE',
          description: '2nd Defam Southeast (3)\nStay North-ish of 2 to avoid Defamations',
          imageUrl: './m12s/em-id-7.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'S',
          description: '1st Defam Southeast (3)\nStay North-ish of 2 to avoid Defamations',
          imageUrl: './m12s/em-id-7.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'SW',
          description: '1st Defam Southwest (4)\nStay North-ish of 1 to avoid Defamations',
          imageUrl: './m12s/em-id-7.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'W',
          description: '2nd Defam Southwest (4)\nStay North-ish of 1 to avoid Defamations',
          imageUrl: './m12s/em-id-7.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'NW',
          description: 'Stay North-ish of 1 to avoid Defamations',
          imageUrl: './m12s/em-id-7.webp'
        }
      ]
    },
    {
      mechanic: 'Stacks',
      description: 'Take Stacks/Defams near your original clone positions\nStacks will be near 1 and 2 max melee',
      url: 'https://raidplan.io/plan/buBeeLVDS9lTlLt2#9',
      strats: [
        // Generic info - shows when 'All' is selected (or no selection)
        {
          toggleKey: 'idyllictether',
          toggleValue: '',
          description: '',
          imageUrl: './m12s/em-id-8.webp'
        },
        // Position-specific instructions
        {
          toggleKey: 'idyllictether',
          toggleValue: 'N',
          description: 'Stack Northwest (1)',
          imageUrl: './m12s/em-id-8.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'NE',
          description: 'Stack Northeast (2)',
          imageUrl: './m12s/em-id-8.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'E',
          description: 'Stack Northeast (2)',
          imageUrl: './m12s/em-id-8.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'SE',
          description: 'Stack Northeast (2)',
          imageUrl: './m12s/em-id-8.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'S',
          description: 'Stack Northeast (2)',
          imageUrl: './m12s/em-id-8.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'SW',
          description: 'Stack Northwest (1)',
          imageUrl: './m12s/em-id-8.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'W',
          description: 'Stack Northwest (1)',
          imageUrl: './m12s/em-id-8.webp'
        },
        {
          toggleKey: 'idyllictether',
          toggleValue: 'NW',
          description: 'Stack Northwest (1)',
          imageUrl: './m12s/em-id-8.webp'
        }
      ]
    }
  ],
  platforms2: [
    {
      mechanic: 'Elements',
      description:
        "💡🗼 RECALL: your tower assignments\nWind: Get KB to the other platform\nDoom: Point line away\nFire: Don't move (can still attack)\nEarth: Move out of twister",
      imageUrl: './m12s/dn-idyllic-24.webp',
      url: 'https://raidplan.io/plan/buBeeLVDS9lTlLt2#7'
    },
    {
      mechanic: 'Setup for Cones',
      description:
        'Wind: on NE/NW (1/2)\nDoom: on hitbox between 1/D or 2/B\nFire: Slightly outside of Doom\nMEarth: on SE/SW (3/4)',
      imageUrl: './m12s/em-id-6.webp',
      url: 'https://raidplan.io/plan/buBeeLVDS9lTlLt2#7'
    }
  ],
  blackhole: [
    {
      mechanic: 'Clone Spawns',
      description:
        '💡🍦 RECALL: whether South or North is safe from cones (E/W safe) from beginning of the mech',
      imageUrl: './m12s/dn-idyllic-29.webp',
      url: 'https://raidplan.io/plan/buBeeLVDS9lTlLt2#10'
    },
    {
      mechanic: 'Black Hole Clone',
      description:
        '📌🍦🕳️ REMEMBER: Whether clone that jumps into the black hole is N/S or E/W safe\n📌🍦🐇 REMEMBER: Which platform the remaining N/S clone jumps to and which direction is safe',
      imageUrl: './m12s/dn-idyllic-30.webp',
      url: 'https://raidplan.io/plan/buBeeLVDS9lTlLt2#10'
    },
    {
      mechanic: '1st Defamations/Stacks',
      description:
        '💡🐦 RECALL: Whether initial clones spawned Cardinal or Intercardinal first\nCardinal: Party to A marker, Tanks to B marker, slightly towards NE\nIntercard: Party NE, Tanks SE, slightly towards B',
      url: 'https://raidplan.io/plan/buBeeLVDS9lTlLt2#10',
      strats: [
        {
          role: 'Tank',
          party: 1,
          description:
            'Cardinal: Outside of North (A) clone\nIntercard: Outside of Northwest (1) clone',
          imageUrl: './m12s/em-id-9.webp'
        },
        {
          role: 'Tank',
          party: 2,
          description:
            'Cardinal: Outside of East (B) clone\nIntercard: Outside of Northeast (2) clone',
          imageUrl: './m12s/em-id-9.webp'
        },
        {
          role: 'Healer',
          party: 1,
          description:
            'Cardinal: Outside of North (A) clone\nIntercard: Outside of Northwest (1) clone',
          imageUrl: './m12s/em-id-9.webp'
        },
        {
          role: 'Healer',
          party: 2,
          description:
            'Cardinal: Outside of East (B) clone\nIntercard: Outside of Northeast (2) clone',
          imageUrl: './m12s/em-id-9.webp'
        },
        {
          role: 'Melee',
          party: 1,
          description:
            'Cardinal: Outside of North (A) clone\nIntercard: Outside of Northwest (1) clone',
          imageUrl: './m12s/em-id-9.webp'
        },
        {
          role: 'Melee',
          party: 2,
          description:
            'Cardinal: Outside of East (B) clone\nIntercard: Outside of Northeast (2) clone',
          imageUrl: './m12s/em-id-9.webp'
        },
        {
          role: 'Ranged',
          party: 1,
          description:
            'Cardinal: Outside of North (A) clone\nIntercard: Outside of Northwest (1) clone',
          imageUrl: './m12s/em-id-9.webp'
        },
        {
          role: 'Ranged',
          party: 2,
          description:
            'Cardinal: Outside of East (B) clone\nIntercard: Outside of Northeast (2) clone',
          imageUrl: './m12s/em-id-9.webp'
        }
      ]
    },
    {
      mechanic: 'Platform + Cone',
      description:
        '💡🍦🐇 RECALL: Which platform the remaining N/S clone jumps to and which direction is safe\nGo to the platform where clone jumped to and dodge cones',
      imageUrl: './m12s/dn-idyllic-35.webp',
      url: 'https://raidplan.io/plan/buBeeLVDS9lTlLt2#10'
    },
    {
      mechanic: '2nd Defamations/Stacks',
      description:
        'Do the other variation from the 1st one\nCardinal: Party to A marker, Tanks to B marker, slightly towards NE\nIntercard: Party NE, Tanks SE, slightly towards B',
      url: 'https://raidplan.io/plan/buBeeLVDS9lTlLt2#11',
      strats: [
        {
          role: 'Tank',
          party: 1,
          description:
            'Cardinal: Outside of North (A) clone\nIntercard: Outside of Northwest (1) clone',
          imageUrl: './m12s/em-id-10.webp'
        },
        {
          role: 'Tank',
          party: 2,
          description:
            'Cardinal: Outside of East (B) clone\nIntercard: Outside of Northeast (2) clone',
          imageUrl: './m12s/em-id-10.webp'
        },
        {
          role: 'Healer',
          party: 1,
          description:
            'Cardinal: Outside of North (A) clone\nIntercard: Outside of Northwest (1) clone',
          imageUrl: './m12s/em-id-10.webp'
        },
        {
          role: 'Healer',
          party: 2,
          description:
            'Cardinal: Outside of East (B) clone\nIntercard: Outside of Northeast (2) clone',
          imageUrl: './m12s/em-id-10.webp'
        },
        {
          role: 'Melee',
          party: 1,
          description:
            'Cardinal: Outside of North (A) clone\nIntercard: Outside of Northwest (1) clone',
          imageUrl: './m12s/em-id-10.webp'
        },
        {
          role: 'Melee',
          party: 2,
          description:
            'Cardinal: Outside of East (B) clone\nIntercard: Outside of Northeast (2) clone',
          imageUrl: './m12s/em-id-10.webp'
        },
        {
          role: 'Ranged',
          party: 1,
          description:
            'Cardinal: Outside of North (A) clone\nIntercard: Outside of Northwest (1) clone',
          imageUrl: './m12s/em-id-10.webp'
        },
        {
          role: 'Ranged',
          party: 2,
          description:
            'Cardinal: Outside of East (B) clone\nIntercard: Outside of Northeast (2) clone',
          imageUrl: './m12s/em-id-10.webp'
        }
      ]
    },
    {
      mechanic: 'Black Hole Clone Resolves',
      description:
        '💡🍦🕳️ RECALL: Whether clone that jumped into the black hole was N/S or E/W safe\nDodge black hole clone cleaves from North',
      imageUrl: './m12s/dn-idyllic-37.webp',
      url: 'https://raidplan.io/plan/buBeeLVDS9lTlLt2#11'
    }
  ]
};

const idyllicOverviewMechs: Record<string, MechanicStrat[]> = {
  dn: dnIdyllic.overview,
  caro: caroIdyllic.overview,
  cozy: cozyIdyllic.overview,
  em: emIdyllic.overview
};

const idyllicClones1Mechs: Record<string, MechanicStrat[]> = {
  dn: dnIdyllic.clones1,
  caro: caroIdyllic.clones1,
  cozy: dnIdyllic.clones1,
  em: emIdyllic.clones1
};

const idyllicPlatforms1Mechs: Record<string, MechanicStrat[]> = {
  dn: dnIdyllic.platforms1,
  caro: caroIdyllic.platforms1,
  cozy: dnIdyllic.platforms1,
  em: dnIdyllic.platforms1,
};

const idyllicClones2Mechs: Record<string, MechanicStrat[]> = {
  dn: dnIdyllic.clones2,
  caro: caroIdyllic.clones2,
  cozy: cozyIdyllic.clones2,
  em: emIdyllic.clones2
};

const idyllicPlatforms2Mechs: Record<string, MechanicStrat[]> = {
  dn: dnIdyllic.platforms2,
  caro: caroIdyllic.platforms2,
  cozy: dnIdyllic.platforms2,
  em: emIdyllic.platforms2,
};

const idyllicBlackholeMechs: Record<string, MechanicStrat[]> = {
  dn: dnIdyllic.blackhole,
  caro: caroIdyllic.blackhole,
  cozy: dnIdyllic.blackhole,
  em: emIdyllic.blackhole
};

const modifiedStrat: Strat = {
  stratName: 'modified',
  description: 'pastebin.com/qXLm3VJ0 - Identical to Shabin for P1 (Toxic/Role Mortal)',
  notes: '',
  stratUrl: {
    'Modified Pastebin': 'https://pastebin.com/qXLm3VJ0',
    'P1: Role Mortal Slayer': 'https://raidplan.io/plan/KbxeCHoPkzWbt_HB',
    'P1: Toxic Friends Raidplan (original)': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn',
    'P1: Toxic Friends Raidplan (minus Mortal Slayer)': 'https://raidplan.io/plan/m1AMDbG_jxkgkPRc',
    'P2: DN Replication 1 Raidplan': 'https://raidplan.io/plan/9ncP6UIDURcWuRuO',
    'P2: Clone Zone Rep 2': 'https://raidplan.io/plan/SFa6J6wDrU9PlCJ4',
    'P2: Superchain Theory': 'https://raidplan.io/plan/OnhUS061LkI3xlmg',
    'P2: DN Idyllic Dream': 'https://raidplan.io/plan/zoeminUT6l2gaOWp'
  },
  strats: [
    // P1: Lindwurm
    {
      phaseName: 'Mortal Slayer',
      tag: 'mortalslayer',
      description:
        'Purple (TB) and Green (Spread) orbs hit the closest players on each side in the order they spawned\nCan hit two players on one side, make sure to watch spawns',
      mechs: mortalSlayerMechs
    },
    {
      phaseName: 'Grotesquerie: Act 1',
      tag: 'p1',
      mechs: [
        {
          mechanic: 'Debuffs + Starting',
          description:
            'One role gets stack (red or no debuff), one role gets spread (yellow circle debuff)\nLoosely preposition near 1 marker NW for baits\nWatch blob on character model for cleave direction',
          imageUrl: './m12s/p1-toxic-act1-debuffs.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#6'
        },
        {
          mechanic: 'Puddles',
          description:
            'Bait 4 puddles from 1 to A then middle\nMove behind dragon head after last bait',
          imageUrl: './m12s/p1-toxic-act1-puddles.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#7'
        },
        {
          mechanic: 'Stack/Spread (DPS spread)',
          description:
            'If DPS spread, M1-M2-R1-R2 roughly North to South\nSupports on 1 or 2 marker, Tanks on North side, Supports on East/West\nPoint cleaves out of arena',
          imageUrl: './m12s/p1-toxic-act1-dps-zoomed.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#8'
        },
        {
          mechanic: 'Stack/Spread (Support spread)',
          description:
            'If Support spread, MT-OT-H1-H2 roughly North to South\nDPS on 1 or 2 marker, Melees on North side, Ranged on East/West\nPoint cleaves out of arena',
          imageUrl: './m12s/p1-toxic-act1-supports-zoomed.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#9'
        },
        {
          mechanic: 'Stack + TB',
          description:
            'Party stays for stack, Tanks sprint to opposite side\nSafe to stack tankbusters',
          imageUrl: './m12s/p1-toxic-act1-tb.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#10'
        }
      ]
    },
    {
      phaseName: 'Grotesquerie: Act 2 (Glooper)',
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
          description:
            'Each player gets a number (I, II, III, IV) and an A or B debuff\nEach player needs to break a chain and take a tower\nChains spawn when debuffs expire\nTowers spawn on chains after chains break and blobs after debuffs expire\nBreak chains in I-II-III-IV order\nTake towers in III-IV-I-II order',
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
          description:
            'Stay middle until debuffs expire\nA: run out of snake to break, then take 3rd blob tower\nB: stay inside to break, then take 3rd chain tower',
          imageUrl: './m12s/p1-toxic-act2-break1.webp',
          url: {
            'First break': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#13',
            'Third towers': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#18'
          }
        },
        {
          mechanic: '2 (II) Debuffs',
          description:
            'Stay middle until debuffs expire\nA: run out of snake to break, then take 4rd blob tower\nB: stay inside to break, then take 4rd chain tower',
          imageUrl: './m12s/p1-toxic-act2-break2.webp',
          url: {
            'Second break': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#15',
            'Fourth towers': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#20'
          }
        },
        {
          mechanic: '3 (III) Debuffs',
          description:
            'Take towers inside snake, get back center, break chains\nA: take 1st blob tower, then run out of snake to break\nB: take 1st chain tower, then stay inside to break',
          imageUrl: './m12s/p1-toxic-act2-towers1.webp',
          url: {
            'First towers': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#14',
            'Third break': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#17'
          }
        },
        {
          mechanic: '4 (IV) Debuffs',
          description:
            'Take towers inside snake, get back center, break chains\nA: take 2nd blob tower, then run out of snake to break\nB: take 2nd chain tower, then stay inside to break',
          imageUrl: './m12s/p1-toxic-act2-towers2.webp',
          url: {
            'Second towers': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#16',
            'Fourth break': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#19'
          }
        }
      ]
    },
    {
      phaseName: 'Grotesquerie: Act 3',
      tag: 'p1',
      description:
        'Downtime Phase\nEach platform has 1 support and 1 DPS\nTowers spawn in blob direction like DSR P3',
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
          description:
            'Go to platform depending on your blob direction\nRotate CW from your cardinal spot if intercards',
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
          description:
            'Purple debuffs spread and get cleaved by head\nYellow debuffs spread in safespot',
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
          description:
            'Purple debuffs spread and get cleaved by head\nYellow debuffs spread in safespot',
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
          description:
            'Spread to break chains\nSupports West, DPS East\nFrom N to S MT-OT-H1-H2, M1-M2-R1-R2',
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
          description:
            'One role gets spread, one role gets stack\nBlobs spawn, leaving two safe corners North',
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
        }
      ]
    },
    // P2: Lindwurm II
    {
      phaseName: 'Replication 1',
      tag: 'replication1',
      mechs: replication1Mechs
    },
    {
      phaseName: 'Replication 2 Overview',
      tag: 'replication2',
      mechs: rep2OverviewMechs
    },
    {
      phaseName: 'Replication 2 Details',
      tag: 'replication2',
      mechs: replication2Mechs
    },
    {
      phaseName: 'Superchain',
      tag: 'p2',
      mechs: [
        {
          mechanic: 'Alpha Debuffs',
          description:
            'Chill mid while Betas pop objects\nDo both dodges while debuff switches to Beta\nBait Netherwar Near/Far',
          imageUrl: './m12s/superchain-1.webp',
          url: 'https://raidplan.io/plan/OnhUS061LkI3xlmg#2'
        },
        {
          mechanic: 'Beta Debuffs',
          description:
            'Go to side with all objects far\nTank N, Others S to pop 2 close objects\nDo both dodges while debuff switches to Alpha\nAvoid Netherwar Near/Far',
          imageUrl: './m12s/superchain-3.webp',
          url: 'https://raidplan.io/plan/OnhUS061LkI3xlmg#4'
        },
        {
          mechanic: 'Dodges',
          description:
            'If Purple and Blue were popped, stay on Beta side for N/S dodges\nIf Red and Green were popped, go to other side for N/S dodges',
          imageUrl: './m12s/superchain-5.webp',
          url: 'https://raidplan.io/plan/OnhUS061LkI3xlmg#6'
        }
      ]
    },
    {
      phaseName: 'Idyllic Dream Overview',
      tag: 'idyllic',
      mechs: idyllicOverviewMechs
    },
    {
      phaseName: 'Idyllic Dream - Clones and Tethers I',
      tag: 'idyllic',
      mechs: idyllicClones1Mechs
    },
    {
      phaseName: 'Idyllic Dream - Platforms and Towers I',
      tag: 'idyllic',
      mechs: idyllicPlatforms1Mechs
    },
    {
      phaseName: 'Idyllic Dream - Clones and Tethers II',
      tag: 'idyllic',
      mechs: idyllicClones2Mechs
    },
    {
      phaseName: 'Idyllic Dream - Platforms and Towers II',
      tag: 'idyllic',
      mechs: idyllicPlatforms2Mechs
    },
    {
      phaseName: 'Idyllic Dream - Black Holes and Revelations',
      tag: 'idyllic',
      mechs: idyllicBlackholeMechs
    },
  ]
};

const caroStrat: Strat = {
  stratName: 'caro',
  description: 'pastebin.com/c9FBSa3V - nnn P1, Caro/Zenith P2',
  notes: '',
  stratUrl: {
    'Caro Pastebin (a3V)': 'https://pastebin.com/c9FBSa3V',
    'P1: Toxic Friends P1 Raidplan (nnn)': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn',
    'P2: Zenith Rep1 Raidplan (yH4)': 'https://raidplan.io/plan/4P_QGHnBZ-nW8yH4',
    'P2: Clone Zone Rep2 (CJ4)': 'https://raidplan.io/plan/SFa6J6wDrU9PlCJ4',
    'P2: CaroKanndies Superchain Raidplan (xc9)': 'https://raidplan.io/plan/tr2jrddp4hkebxc9',
    'P2: Caro Idyllic Dream (wqc)': 'https://raidplan.io/plan/9zpa6vu5kxgtuwqc'
  },
  strats: [
    // P1: Lindwurm
    {
      phaseName: 'Mortal Slayer',
      tag: 'mortalslayer',
      description:
        'Purple (TB) and Green (Spread) orbs hit the closest players on each side in the order they spawned\nCan hit two players on one side, make sure to watch spawns',
      mechs: mortalSlayerMechs
    },
    {
      phaseName: 'Grotesquerie: Act 1',
      tag: 'p1',
      mechs: [
        {
          mechanic: 'Debuffs + Starting',
          description:
            'One role gets stack (red or no debuff), one role gets spread (yellow circle debuff)\nLoosely preposition near 1 marker NW for baits\nWatch blob on character model for cleave direction',
          imageUrl: './m12s/p1-toxic-act1-debuffs.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#6'
        },
        {
          mechanic: 'Puddles',
          description:
            'Bait 4 puddles from 1 to A then middle\nMove behind dragon head after last bait',
          imageUrl: './m12s/p1-toxic-act1-puddles.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#7'
        },
        {
          mechanic: 'Stack/Spread (DPS spread)',
          description:
            'If DPS spread, M1-M2-R1-R2 roughly North to South\nSupports on 1 or 2 marker, Tanks on North side, Supports on East/West\nPoint cleaves out of arena',
          imageUrl: './m12s/p1-toxic-act1-dps-zoomed.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#8'
        },
        {
          mechanic: 'Stack/Spread (Support spread)',
          description:
            'If Support spread, MT-OT-H1-H2 roughly North to South\nDPS on 1 or 2 marker, Melees on North side, Ranged on East/West\nPoint cleaves out of arena',
          imageUrl: './m12s/p1-toxic-act1-supports-zoomed.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#9'
        },
        {
          mechanic: 'Stack + TB',
          description:
            'Party stays for stack, Tanks sprint to opposite side\nSafe to stack tankbusters',
          imageUrl: './m12s/p1-toxic-act1-tb.webp',
          url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#10'
        }
      ]
    },
    {
      phaseName: 'Grotesquerie: Act 2 (Glooper)',
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
          description:
            'Each player gets a number (I, II, III, IV) and an A or B debuff\nEach player needs to break a chain and take a tower\nChains spawn when debuffs expire\nTowers spawn on chains after chains break and blobs after debuffs expire\nBreak chains in I-II-III-IV order\nTake towers in III-IV-I-II order',
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
          description:
            'Stay middle until debuffs expire\nA: run out of snake to break, then take 3rd blob tower\nB: stay inside to break, then take 3rd chain tower',
          imageUrl: './m12s/p1-toxic-act2-break1.webp',
          url: {
            'First break': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#13',
            'Third towers': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#18'
          }
        },
        {
          mechanic: '2 (II) Debuffs',
          description:
            'Stay middle until debuffs expire\nA: run out of snake to break, then take 4rd blob tower\nB: stay inside to break, then take 4rd chain tower',
          imageUrl: './m12s/p1-toxic-act2-break2.webp',
          url: {
            'Second break': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#15',
            'Fourth towers': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#20'
          }
        },
        {
          mechanic: '3 (III) Debuffs',
          description:
            'Take towers inside snake, get back center, break chains\nA: take 1st blob tower, then run out of snake to break\nB: take 1st chain tower, then stay inside to break',
          imageUrl: './m12s/p1-toxic-act2-towers1.webp',
          url: {
            'First towers': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#14',
            'Third break': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#17'
          }
        },
        {
          mechanic: '4 (IV) Debuffs',
          description:
            'Take towers inside snake, get back center, break chains\nA: take 2nd blob tower, then run out of snake to break\nB: take 2nd chain tower, then stay inside to break',
          imageUrl: './m12s/p1-toxic-act2-towers2.webp',
          url: {
            'Second towers': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#16',
            'Fourth break': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#19'
          }
        }
      ]
    },
    {
      phaseName: 'Grotesquerie: Act 3',
      tag: 'p1',
      description:
        'Downtime Phase\nEach platform has 1 support and 1 DPS\nTowers spawn in blob direction like DSR P3',
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
          description:
            'Go to platform depending on your blob direction\nRotate CW from your cardinal spot if intercards',
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
          description:
            'Purple debuffs spread and get cleaved by head\nYellow debuffs spread in safespot',
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
          description:
            'Purple debuffs spread and get cleaved by head\nYellow debuffs spread in safespot',
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
          description:
            'Spread to break chains\nSupports West, DPS East\nFrom N to S MT-OT-H1-H2, M1-M2-R1-R2',
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
          description:
            'One role gets spread, one role gets stack\nBlobs spawn, leaving two safe corners North',
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
        }
      ]
    },
    // P2: Lindwurm II
    {
      phaseName: 'Replication 1',
      tag: 'replication1',
      mechs: replication1Mechs
    },
    {
      phaseName: 'Replication 2 Overview',
      tag: 'replication2',
      mechs: rep2OverviewMechs
    },
    {
      phaseName: 'Replication 2 Details',
      tag: 'replication2',
      mechs: replication2Mechs
    },
    {
      phaseName: 'Superchain',
      tag: 'p2',
      mechs: [
        {
          mechanic: 'Alpha Debuffs',
          description:
            'Chill mid while Betas pop objects\nDo both dodges while debuff switches to Beta\nBait Netherwar Near/Far',
          imageUrl: './m12s/superchain-1.webp',
          url: 'https://raidplan.io/plan/OnhUS061LkI3xlmg#2'
        },
        {
          mechanic: 'Beta Debuffs',
          description:
            'Go to side with all objects far\nTank N, Others S to pop 2 close objects\nDo both dodges while debuff switches to Alpha\nAvoid Netherwar Near/Far',
          imageUrl: './m12s/superchain-3.webp',
          url: 'https://raidplan.io/plan/OnhUS061LkI3xlmg#4'
        },
        {
          mechanic: 'Dodges',
          description:
            'If Purple and Blue were popped, stay on Beta side for N/S dodges\nIf Red and Green were popped, go to other side for N/S dodges',
          imageUrl: './m12s/superchain-5.webp',
          url: 'https://raidplan.io/plan/OnhUS061LkI3xlmg#6'
        }
      ]
    },
    {
      phaseName: 'Idyllic Dream Overview',
      tag: 'idyllic',
      mechs: idyllicOverviewMechs
    },
    {
      phaseName: 'Idyllic Dream - Clones and Tethers I',
      tag: 'idyllic',
      mechs: idyllicClones1Mechs
    },
    {
      phaseName: 'Idyllic Dream - Platforms and Towers I',
      tag: 'idyllic',
      mechs: idyllicPlatforms1Mechs
    },
    {
      phaseName: 'Idyllic Dream - Clones and Tethers II',
      tag: 'idyllic',
      mechs: idyllicClones2Mechs
    },
    {
      phaseName: 'Idyllic Dream - Platforms and Towers II',
      tag: 'idyllic',
      mechs: idyllicPlatforms2Mechs
    },
    {
      phaseName: 'Idyllic Dream - Black Holes and Revelations',
      tag: 'idyllic',
      mechs: idyllicBlackholeMechs
    },
  ]
};

export const m12sStrats: Strat[] = [modifiedStrat, caroStrat];

export const m12sFightConfig: FightConfig = {
  fightKey: 'm12s',
  title: 'AAC Heavyweight M4 (Savage)',
  abbreviatedTitle: 'M12S',
  subtitle: 'M12S Patch 7.4',
  cheatsheetTitle: 'M12S Cheatsheet',
  useModernCheatsheet: true,
  strats: {
    modified: {
      label: 'Modified (3VJ0)',
      defaults: {
        mortalslayer: 'role',
        replication1: 'dn',
        replication2: 'clonezone',
        idyllic: 'dn',
      }
    },
    caro: {
      label: 'Caro/Zenith (a3V)',
      defaults: {
        mortalslayer: 'toxic',
        replication1: 'caro',
        replication2: 'clonezone',
        idyllic: 'caro'
      }
    }
  },
  toggles: [
    {
      key: 'mortalslayer',
      label: 'Mortal Slayer',
      defaultValue: 'role',
      options: [
        {
          value: 'role',
          label: 'Role (_HB)',
          url: {
            name: 'Role Mortal Slayer Raidplan',
            url: 'https://raidplan.io/plan/KbxeCHoPkzWbt_HB'
          }
        },
        {
          value: 'toxic',
          label: 'Toxic (nnn)'
        }
      ]
    },
    {
      key: 'replication1',
      label: 'Rep 1',
      defaultValue: 'dn',
      options: [
        {
          value: 'dn',
          label: 'DN',
          url: {
            name: 'DN replication Raidplan',
            url: 'https://raidplan.io/plan/9ncP6UIDURcWuRuO'
          }
        },
        {
          value: 'caro',
          label: 'Caro/Zenith (yH4)',
          url: {
            name: 'Caro/Zenith Replication 1 Raidplan',
            url: 'https://raidplan.io/plan/4P_QGHnBZ-nW8yH4'
          }
        },
        {
          value: 'static',
          label: 'Static (7bz)',
          url: {
            name: 'Braindead (cleaveless/static) Replication 1 Raidplan',
            url: 'https://raidplan.io/plan/3g95apsey4t987bz'
          }
        },
        {
          value: 'bc',
          label: 'Banana Codex',
          url: {
            name: 'Banana Codex Raidplan',
            url: 'https://raidplan.io/plan/jaakesbessc2uv7h'
          }
        },
      ]
    },
    {
      key: 'replication2',
      label: 'Rep 2',
      defaultValue: 'clonezone',
      options: [
        {
          value: 'clonezone',
          label: 'Clone Zone/Caro (CJ4)',
          url: {
            name: 'Clone Zone Raidplan',
            url: 'https://raidplan.io/plan/9ncP6UIDURcWuRuO'
          }
        },
        {
          value: 'bc',
          label: 'Banana Codex',
          url: {
            name: 'Banana Codex Raidplan',
            url: 'https://raidplan.io/plan/jaakesbessc2uv7h'
          }
        },
      ]
    },
    {
      key: 'idyllic',
      label: 'Idyllic',
      defaultValue: 'dn',
      options: [
        {
          value: 'dn',
          label: 'DN',
          url: {
            name: 'DN Idyllic Dream Raidplan',
            url: 'https://raidplan.io/plan/zoeminUT6l2gaOWp'
          }
        },
        {
          value: 'caro',
          label: 'Caro (wqc)',
          url: {
            name: 'Caro Idyllic Dream Raidplan',
            url: 'https://raidplan.io/plan/9zpa6vu5kxgtuwqc'
          }
        },
        {
          value: 'cozy',
          label: 'DN + Cozy Clone',
          url: {
            name: 'Cozy Clone Raidplan by ItsBexy',
            url: 'https://raidplan.io/plan/txtzacv3uvbjzuku'
          }
        },
        {
          value: 'em',
          label: 'Emergency Meeting',
          url: {
            name: 'Emergency Meeting Raidplan',
            url: 'https://raidplan.io/plan/buBeeLVDS9lTlLt2'
          }
        },
      ]
    },
    {
      key: 'rep2tether',
      label: 'Rep 2 Tether',
      defaultValue: '',
      excludeFromUrl: true,
      isMechToggle: true,
      phaseTag: 'p2',
      options: [
        { value: '', label: 'All' },
        { value: 'N', label: 'N' },
        { value: 'NE', label: 'NE' },
        { value: 'E', label: 'E' },
        { value: 'SE', label: 'SE' },
        { value: 'S', label: 'S' },
        { value: 'SW', label: 'SW' },
        { value: 'W', label: 'W' },
        { value: 'NW', label: 'NW' }
      ]
    },
    {
      key: 'idyllictether',
      label: 'Idyllic Tether',
      defaultValue: '',
      excludeFromUrl: true,
      isMechToggle: true,
      phaseTag: 'p2',
      options: [
        { value: '', label: 'All' },
        { value: 'N', label: 'N' },
        { value: 'NE', label: 'NE' },
        { value: 'E', label: 'E' },
        { value: 'SE', label: 'SE' },
        { value: 'S', label: 'S' },
        { value: 'SW', label: 'SW' },
        { value: 'W', label: 'W' },
        { value: 'NW', label: 'NW' }
      ]
    }
  ],
  tabTags: {
    'P1: Lindwurm': ['mortalslayer', 'p1'],
    'P2: Lindwurm II': ['replication1', 'p2', 'replication2', 'idyllic']
  },
  useMainPageTabs: true,
  defaultStratName: 'modified',
  timeline: []
};
