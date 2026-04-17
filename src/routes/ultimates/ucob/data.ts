import type { FightConfig, PlayerMechStrat, PhaseStrats, Strat, StratRecord } from '$lib/types';
import { diagram, player, boss, waymark, aoeCircle, aoeRect, text, arrow } from '$lib/arena';

function getStringObject(
  stratRecord: Record<string, StratRecord>,
  mechanic: string,
  property: string,
  role?: string
): Record<string, string> {
  let stringObject: Record<string, string> = {};
  for (const [key, strat] of Object.entries(stratRecord)) {
    if (role) {
      // @ts-ignore
      stringObject[key] = (strat[mechanic][role][property] as string) || '';
    } else {
      // @ts-ignore
      stringObject[key] = (strat[mechanic][property] as string) || '';
    }
  }
  return stringObject;
}

const setup: PhaseStrats[] = [
  {
    phaseName: 'Setup',
    tag: 'setup',
    mechs: [
      {
        mechanic: 'Quickmarch Spots',
        strats: [
          { role: 'Tank', party: 1, description: 'L1 (Left Northmost)', imageUrl: '' },
          { role: 'Tank', party: 2, description: 'R1 (Right Northmost)', imageUrl: '' },
          { role: 'Healer', party: 1, description: 'L2 (Left 2nd Northmost)', imageUrl: '' },
          { role: 'Healer', party: 2, description: 'R2 (Right 2nd Northmost)', imageUrl: '' },
          { role: 'Melee', party: 1, description: 'L3 (Left 3rd Northmost)', imageUrl: '' },
          { role: 'Melee', party: 2, description: 'R3 (Right 3rd Northmost)', imageUrl: '' },
          { role: 'Ranged', party: 1, description: 'L4 (Left Southmost)', imageUrl: '' },
          { role: 'Ranged', party: 2, description: 'R4 (Right Southmost)', imageUrl: '' }
        ]
      }
    ]
  }
];

const allP1: PhaseStrats[] = [
  {
    phaseName: 'Twintania: Opening',
    tag: 'p1',
    mechs: [
      {
        mechanic: 'Twisters',
        description: 'Rough spread to bait twisters, then run in for stack',
        strats: [
          { role: 'Tank', party: 1, description: '', imageUrl: './ucob/twin-0.webp' },
          { role: 'Tank', party: 2, description: '', imageUrl: './ucob/twin-0.webp' },
          { role: 'Healer', party: 1, description: '', imageUrl: './ucob/twin-0.webp' },
          { role: 'Healer', party: 2, description: '', imageUrl: './ucob/twin-0.webp' },
          { role: 'Melee', party: 1, description: '', imageUrl: './ucob/twin-0.webp' },
          { role: 'Melee', party: 2, description: '', imageUrl: './ucob/twin-0.webp' },
          { role: 'Ranged', party: 1, description: '', imageUrl: './ucob/twin-0.webp' },
          { role: 'Ranged', party: 2, description: '', imageUrl: './ucob/twin-0.webp' }
        ]
      },
      {
        mechanic: 'Fireball Stack',
        description: 'Both tanks and one healer stay out of stack for LB',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: '‼️Stay out of stack',
            imageUrl: './ucob/twin-1.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: '‼️Stay out of stack',
            imageUrl: './ucob/twin-1.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'One healer stay out of stack',
            imageUrl: './ucob/twin-1.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'One healer stay out of stack',
            imageUrl: './ucob/twin-1.webp'
          },
          { role: 'Melee', party: 1, description: '', imageUrl: './ucob/twin-1.webp' },
          { role: 'Melee', party: 2, description: '', imageUrl: './ucob/twin-1.webp' },
          { role: 'Ranged', party: 1, description: '', imageUrl: './ucob/twin-1.webp' },
          { role: 'Ranged', party: 2, description: '', imageUrl: './ucob/twin-1.webp' }
        ]
      }
    ]
  },
  {
    phaseName: 'Twintania: 74%',
    tag: 'p1',
    mechs: [
      {
        mechanic: 'Liquid Hells 1',
        description: 'Phys Ranged bait puddles',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Boss can be tanked between 1 and 2 for first Hatch',
            imageUrl: './ucob/twin-2.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Boss can be tanked between 1 and 2 for first Hatch',
            imageUrl: './ucob/twin-2.webp'
          },
          { role: 'Healer', party: 1, description: '', imageUrl: './ucob/twin-2.webp' },
          { role: 'Healer', party: 2, description: '', imageUrl: './ucob/twin-2.webp' },
          { role: 'Melee', party: 1, description: '', imageUrl: './ucob/twin-2.webp' },
          { role: 'Melee', party: 2, description: '', imageUrl: './ucob/twin-2.webp' },
          { role: 'Ranged', party: 1, description: '', imageUrl: './ucob/twin-2.webp' },
          { role: 'Ranged', party: 2, description: '', imageUrl: './ucob/twin-2.webp' }
        ]
      },
      {
        mechanic: 'Hatch + Liquid Hells 2',
        description: 'Caster intercept Hatch if on Phys Ranged',
        strats: [
          { role: 'Tank', party: 1, description: '', imageUrl: './ucob/baits-6.webp' },
          { role: 'Tank', party: 2, description: '', imageUrl: './ucob/baits-6.webp' },
          { role: 'Healer', party: 1, description: '', imageUrl: './ucob/baits-6.webp' },
          { role: 'Healer', party: 2, description: '', imageUrl: './ucob/baits-6.webp' },
          { role: 'Melee', party: 1, description: '', imageUrl: './ucob/baits-6.webp' },
          { role: 'Melee', party: 2, description: '', imageUrl: './ucob/baits-6.webp' },
          { role: 'Ranged', party: 1, description: '', imageUrl: './ucob/baits-6.webp' },
          { role: 'Ranged', party: 2, description: '', imageUrl: './ucob/baits-6.webp' }
        ]
      },
      {
        mechanic: 'Hatch + Twister',
        description: 'Make sure to drop twister outside Neurolink'
      }
    ]
  },
  {
    phaseName: 'Twintania: 44%',
    tag: 'p1',
    mechs: [
      {
        mechanic: 'Liquid Hells 3 + Hatches',
        description:
          'Phys Ranged continue baiting puddles\nSet of double Hatches as puddles finish',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Boss can be tanked Mid until Stack',
            imageUrl: './ucob/twin-5.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Boss can be tanked Mid until Stack',
            imageUrl: './ucob/twin-5.webp'
          },
          { role: 'Healer', party: 1, description: '', imageUrl: './ucob/twin-5.webp' },
          { role: 'Healer', party: 2, description: '', imageUrl: './ucob/twin-5.webp' },
          { role: 'Melee', party: 1, description: '', imageUrl: './ucob/twin-5.webp' },
          { role: 'Melee', party: 2, description: '', imageUrl: './ucob/twin-5.webp' },
          { role: 'Ranged', party: 1, description: '', imageUrl: './ucob/twin-5.webp' },
          { role: 'Ranged', party: 2, description: '', imageUrl: './ucob/twin-5.webp' }
        ]
      },
      {
        mechanic: 'Fireball Stack + Random Puddles',
        description: 'Make sure not to drop puddles on the stack',
        strats: [
          { role: 'Tank', party: 1, description: '', imageUrl: '' },
          { role: 'Tank', party: 2, description: '', imageUrl: '' },
          { role: 'Healer', party: 1, description: '', imageUrl: '' },
          { role: 'Healer', party: 2, description: '', imageUrl: '' },
          { role: 'Melee', party: 1, description: '', imageUrl: '' },
          { role: 'Melee', party: 2, description: '', imageUrl: '' },
          { role: 'Ranged', party: 1, description: '', imageUrl: '' },
          { role: 'Ranged', party: 2, description: '', imageUrl: '' }
        ]
      },
      {
        mechanic: 'Hatches + Liquid Hells 4',
        description: 'Phys Ranged continue baiting puddles',
        strats: [
          { role: 'Tank', party: 1, description: '', imageUrl: '' },
          { role: 'Tank', party: 2, description: '', imageUrl: '' },
          { role: 'Healer', party: 1, description: '', imageUrl: '' },
          { role: 'Healer', party: 2, description: '', imageUrl: '' },
          { role: 'Melee', party: 1, description: '', imageUrl: '' },
          { role: 'Melee', party: 2, description: '', imageUrl: '' },
          { role: 'Ranged', party: 1, description: '', imageUrl: '' },
          { role: 'Ranged', party: 2, description: '', imageUrl: '' }
        ]
      }
    ]
  }
];

const allP2: PhaseStrats[] = [
  {
    phaseName: 'Nael: Transition',
    tag: 'p2',
    mechs: [
      {
        mechanic: 'Spreads',
        description: 'Stack on D marker for KB, then spread roughly into QM spots',
        strats: [
          { role: 'Tank', party: 1, description: '', imageUrl: './ucob/nael-1.webp' },
          { role: 'Tank', party: 2, description: '', imageUrl: './ucob/nael-1.webp' },
          { role: 'Healer', party: 1, description: '', imageUrl: './ucob/nael-1.webp' },
          { role: 'Healer', party: 2, description: '', imageUrl: './ucob/nael-1.webp' },
          { role: 'Melee', party: 1, description: '', imageUrl: './ucob/nael-1.webp' },
          { role: 'Melee', party: 2, description: '', imageUrl: './ucob/nael-1.webp' },
          { role: 'Ranged', party: 1, description: '', imageUrl: './ucob/nael-1.webp' },
          { role: 'Ranged', party: 2, description: '', imageUrl: './ucob/nael-1.webp' }
        ]
      },
      {
        mechanic: 'Dive',
        description: 'Tank with aggro takes dive on D marker',
        strats: [
          { role: 'Tank', party: 1, description: '', imageUrl: './ucob/nael-4.webp' },
          { role: 'Tank', party: 2, description: '', imageUrl: './ucob/nael-4.webp' },
          { role: 'Healer', party: 1, description: '', imageUrl: './ucob/nael-4.webp' },
          { role: 'Healer', party: 2, description: '', imageUrl: './ucob/nael-4.webp' },
          { role: 'Melee', party: 1, description: '', imageUrl: './ucob/nael-4.webp' },
          { role: 'Melee', party: 2, description: '', imageUrl: './ucob/nael-4.webp' },
          { role: 'Ranged', party: 1, description: '', imageUrl: './ucob/nael-4.webp' },
          { role: 'Ranged', party: 2, description: '', imageUrl: './ucob/nael-4.webp' }
        ]
      }
    ]
  },
  {
    phaseName: 'Nael: Cleanse 1',
    tag: 'p2',
    mechs: [
      {
        mechanic: 'Quote + Thunders',
        description:
          'Quote is In + Stack or In + Out\nThunders make a Mickey Mouse shape opposite the party inside the first Chariot',
        imageUrl: './ucob/nael-7.webp'
      },
      {
        mechanic: 'Tether 1 + Cleanse 1',
        description: 'Tether 1 is IN\nParty rotate CW to drop puddles',
        imageUrl: './ucob/nael-9.webp'
      }
    ]
  },
  {
    phaseName: 'Nael: Cleanse 2',
    tag: 'p2',
    mechs: [
      {
        mechanic: 'Tether 2',
        description: '‼️2nd Tether is OUT',
        imageUrl: './ucob/nael-12.webp'
      },
      {
        mechanic: 'Thunders',
        description: 'Thunders resolve before quote, drop thunders then join stack',
        imageUrl: './ucob/nael-13.webp'
      },
      {
        mechanic: 'Quote + Cleanse 2',
        description: 'Quote is Stack + In or Stack + Out\nParty rotate CW to drop puddles',
        imageUrl: './ucob/nael-15.webp'
      }
    ]
  },
  {
    phaseName: 'Nael: Cleanse 3',
    tag: 'p2',
    mechs: [
      {
        mechanic: 'Thunders + Tether 3',
        description:
          'Tether 3 is IN (unless you got Tether 2)\n❗⚡Thunder will resolve BEFORE Tether 3\n⚡Join tether stack after fireball',
        imageUrl: './ucob/nael-16.webp'
      },
      {
        mechanic: 'Quote',
        description: `Quote is Spread + In or Spread + Out\nLoose spread, don't go too far if it's Spread + In`,
        imageUrl: './ucob/nael-17.webp'
      },
      {
        mechanic: 'Cleanse 3 + Tether 4 + Thunders',
        description:
          'Tether 4 is IN\n❗⚡Thunder will resolve AFTER Tether 4\n⚡Take fire then move CCW or away from boss',
        imageUrl: './ucob/nael-19.webp'
      }
    ]
  },
  {
    phaseName: 'Nael: Divebombs',
    tag: 'p2',
    mechs: [
      {
        mechanic: 'Dive 1',
        description:
          'Bait first 2 dragons CW from N\nA marker unless cursed\nFirst dive snapshots on first puddle',
        imageUrl: './ucob/divebombs-2.webp'
      },
      {
        mechanic: 'Dive 2',
        description:
          'Bait 3rd dragon CW from N\nB marker unless cursed\nFirst dive snapshots on THIRD puddle',
        imageUrl: './ucob/divebombs-4.webp'
      },
      {
        mechanic: 'Dive 3',
        description:
          'Bait 4th and 5th dragon CW from N\nC marker unless cursed\nMove in when marker disappears\nHealer can rescue if quote is Stack',
        imageUrl: './ucob/divebombs-6.webp'
      },
      {
        mechanic: 'Quote (Stack)',
        description: 'Stack Mid\nTank away from the party for Nael dive before Stack',
        imageUrl: './ucob/divebombs-13.webp'
      },
      {
        mechanic: 'Quote (Spread)',
        description:
          'Spread West-ish\nSave room for dive baits to spread mid\nTank away from the party for Nael dive after Spread',
        imageUrl: './ucob/divebombs-9.webp'
      }
    ]
  }
];

const allP3: PhaseStrats[] = [
  {
    phaseName: 'Bahamut: Quickmarch',
    tag: 'p3',
    mechs: [
      {
        mechanic: 'Dive + Spreads',
        description: 'Dragon spawn is new North\n❗Twisters when dive goes off',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'L1 (Left Northmost)',
            imageUrl: './ucob/quickmarch-0.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'R1 (Right Northmost)',
            imageUrl: './ucob/quickmarch-0.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'L2 (Left 2nd Northmost)',
            imageUrl: './ucob/quickmarch-0.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'R2 (Right 2nd Northmost)',
            imageUrl: './ucob/quickmarch-0.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'L3 (Left 3rd Northmost)',
            imageUrl: './ucob/quickmarch-0.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'R3 (Right 3rd Northmost)',
            imageUrl: './ucob/quickmarch-0.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'L4 (Left Southmost)',
            imageUrl: './ucob/quickmarch-0.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'R4 (Right Southmost)',
            imageUrl: './ucob/quickmarch-0.webp'
          }
        ]
      },
      {
        mechanic: 'Earthshakers + Stack',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Take tether, go NW-ish',
            imageUrl: './ucob/quickmarch-3.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Take tether, go NE-ish',
            imageUrl: './ucob/quickmarch-3.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Take Earthshaker NW',
            imageUrl: './ucob/quickmarch-3.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Take Earthshaker NE',
            imageUrl: './ucob/quickmarch-3.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stack SW\nIf you get Earthshaker, take it SE',
            imageUrl: './ucob/quickmarch-3.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stack SW\nIf you get Earthshaker, take it SE',
            imageUrl: './ucob/quickmarch-3.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Stack SW\nIf you get Earthshaker, take it SE',
            imageUrl: './ucob/quickmarch-3.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Stack SW\nIf you get Earthshaker, take it SE',
            imageUrl: './ucob/quickmarch-3.webp'
          }
        ]
      }
    ]
  },
  {
    phaseName: 'Bahamut: Blackfire',
    tag: 'p3',
    mechs: [
      {
        mechanic: 'Puddles',
        description: 'Run towards Nael\nDPS CCW, Supports CW',
        strats: [
          { role: 'Tank', party: 1, description: '', imageUrl: './ucob/blackfire-2.webp' },
          { role: 'Tank', party: 2, description: '', imageUrl: './ucob/blackfire-2.webp' },
          { role: 'Healer', party: 1, description: '', imageUrl: './ucob/blackfire-2.webp' },
          { role: 'Healer', party: 2, description: '', imageUrl: './ucob/blackfire-2.webp' },
          { role: 'Melee', party: 1, description: '', imageUrl: './ucob/blackfire-2.webp' },
          { role: 'Melee', party: 2, description: '', imageUrl: './ucob/blackfire-2.webp' },
          { role: 'Ranged', party: 1, description: '', imageUrl: './ucob/blackfire-2.webp' },
          { role: 'Ranged', party: 2, description: '', imageUrl: './ucob/blackfire-2.webp' }
        ]
      },
      {
        mechanic: 'Towers/Stack',
        description:
          'DPS CCW, Supports CW\nWait for 2 puddles before taking tower\nStack near the first Liquid Hell drop',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Tank takes tower closer to Nael',
            imageUrl: './ucob/blackfire-4.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Tank takes tower closer to Nael',
            imageUrl: './ucob/blackfire-4.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Healer takes tower closer to stack',
            imageUrl: './ucob/blackfire-4.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Healer takes tower closer to stack',
            imageUrl: './ucob/blackfire-4.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'DPS towers use eyes',
            imageUrl: './ucob/blackfire-4.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'DPS towers use eyes',
            imageUrl: './ucob/blackfire-4.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'DPS towers use eyes',
            imageUrl: './ucob/blackfire-4.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'DPS towers use eyes',
            imageUrl: './ucob/blackfire-4.webp'
          }
        ]
      }
    ]
  },
  {
    phaseName: 'Bahamut: Fellruin',
    tag: 'p3',
    mechs: [
      {
        mechanic: 'Quote',
        description: 'Stack center',
        imageUrl: './ucob/fellruin-0.webp'
      },
      {
        mechanic: 'In -> Spread',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Stay in front of party to grab tethers',
            imageUrl: './ucob/fellruin-2.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Stay in front of party to grab tethers',
            imageUrl: './ucob/fellruin-2.webp'
          },
          { role: 'Healer', party: 1, description: '', imageUrl: './ucob/fellruin-2.webp' },
          { role: 'Healer', party: 2, description: '', imageUrl: './ucob/fellruin-2.webp' },
          { role: 'Melee', party: 1, description: '', imageUrl: './ucob/fellruin-2.webp' },
          { role: 'Melee', party: 2, description: '', imageUrl: './ucob/fellruin-2.webp' },
          { role: 'Ranged', party: 1, description: '', imageUrl: './ucob/fellruin-2.webp' },
          { role: 'Ranged', party: 2, description: '', imageUrl: './ucob/fellruin-2.webp' }
        ]
      },
      {
        mechanic: 'Spread -> In',
        description: 'Loose Quickmarch spread around mid facing Bahamut',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Grab tether',
            imageUrl: './ucob/fellruin-6.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Grab tether',
            imageUrl: './ucob/fellruin-6.webp'
          },
          { role: 'Healer', party: 1, description: '', imageUrl: './ucob/fellruin-6.webp' },
          { role: 'Healer', party: 2, description: '', imageUrl: './ucob/fellruin-6.webp' },
          { role: 'Melee', party: 1, description: '', imageUrl: './ucob/fellruin-6.webp' },
          { role: 'Melee', party: 2, description: '', imageUrl: './ucob/fellruin-6.webp' },
          { role: 'Ranged', party: 1, description: '', imageUrl: './ucob/fellruin-6.webp' },
          { role: 'Ranged', party: 2, description: '', imageUrl: './ucob/fellruin-6.webp' }
        ]
      },
      {
        mechanic: 'Tethers + Stack',
        description:
          'Party in Neurolink opposite Bahamut\n❗Spread right after Aetheric Profusion cast',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Take tether, stand in Left Neurolink facing Bahamut',
            imageUrl: './ucob/fellruin-9.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Take tether, stand in Right Neurolink facing Bahamut',
            imageUrl: './ucob/fellruin-9.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Stand in Neurolink opposite Bahamut',
            imageUrl: './ucob/fellruin-9.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Stand in Neurolink opposite Bahamut',
            imageUrl: './ucob/fellruin-9.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stand in Neurolink opposite Bahamut',
            imageUrl: './ucob/fellruin-9.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stand in Neurolink opposite Bahamut',
            imageUrl: './ucob/fellruin-9.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Stand in Neurolink opposite Bahamut',
            imageUrl: './ucob/fellruin-9.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Stand in Neurolink opposite Bahamut',
            imageUrl: './ucob/fellruin-9.webp'
          }
        ]
      }
    ]
  },
  {
    phaseName: 'Bahamut: Heavensfall',
    tag: 'p3',
    mechs: [
      {
        mechanic: 'Dives',
        description:
          'Nael is new North\nStack center, can move as soon as markers appear\n❗Twisters when dive goes off',
        imageUrl: '',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Towards Nael',
            imageUrl: './ucob/heavensfall-1.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Towards Nael',
            imageUrl: './ucob/heavensfall-1.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Left of bosses',
            imageUrl: './ucob/heavensfall-1.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Right of bosses',
            imageUrl: './ucob/heavensfall-1.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Left of bosses',
            imageUrl: './ucob/heavensfall-1.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Right of bosses',
            imageUrl: './ucob/heavensfall-1.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Opposite Nael',
            imageUrl: './ucob/heavensfall-1.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Opposite Nael',
            imageUrl: './ucob/heavensfall-1.webp'
          }
        ]
      },
      {
        mechanic: 'Towers',
        description:
          'Bait pepperonis near the outside\nTowers are R1 R2 R3 R4 Under/CW, L1 L2 L3 L4 CCW\n❗Tower under Nael is R1 tower\nSafe distance is near Neurolinks',
        imageUrl: './ucob/heavensfall-6.webp'
      },
      {
        mechanic: 'Toilet',
        description: '4 bleed puddles on random people\nSpiral inwards towards center for stack',
        imageUrl: './ucob/heavensfall-12.webp'
      }
    ]
  },
  {
    phaseName: 'Bahamut: Tenstrike',
    tag: 'p3',
    mechs: [
      {
        mechanic: 'Initial Spreads',
        description: '❗1 is always NORTH\nQuickmarch spread facing North',
        strats: [
          { role: 'Tank', party: 1, description: '', imageUrl: './ucob/tenstrike-0.webp' },
          { role: 'Tank', party: 2, description: '', imageUrl: './ucob/tenstrike-0.webp' },
          { role: 'Healer', party: 1, description: '', imageUrl: './ucob/tenstrike-0.webp' },
          { role: 'Healer', party: 2, description: '', imageUrl: './ucob/tenstrike-0.webp' },
          { role: 'Melee', party: 1, description: '', imageUrl: './ucob/tenstrike-0.webp' },
          { role: 'Melee', party: 2, description: '', imageUrl: './ucob/tenstrike-0.webp' },
          { role: 'Ranged', party: 1, description: '', imageUrl: './ucob/tenstrike-0.webp' },
          { role: 'Ranged', party: 2, description: '', imageUrl: './ucob/tenstrike-0.webp' }
        ]
      },
      {
        mechanic: 'First Hatches',
        description:
          'Use your eyes, one Hatch per Neurolink\n❗Spread for Nael dives\nIf no marker, stay away from Hatch explosions',
        imageUrl: './ucob/tenstrike-2.webp'
      },
      {
        mechanic: 'Second Hatches',
        description: `Hatch players soak, then move straight backwards towards wall\nJump to signal that you're taking a second Hatch\nApproach hatch from side to soak`,
        imageUrl: './ucob/tenstrike-6.webp'
      },
      {
        mechanic: 'Earthshakers',
        description: `1 Marker is safe\nStand on corners of 1 Marker to signal 2nd Earthshakers`,
        imageUrl: './ucob/tenstrike-9.webp'
      }
    ]
  },
  {
    phaseName: 'Bahamut: Grand Octet',
    tag: 'p3',
    mechs: [
      {
        mechanic: 'Run',
        description:
          'Bahamut on Cardinal = CCW\nBahamut on Intercard = CW\nParty opposite Bahamut unless Nael is there, then one dragon over in the direction you run',
        imageUrl: './ucob/octet-1.webp'
      },
      {
        mechanic: 'Keep Running',
        description:
          '❗Sprint after 2nd dive\nMove center after Bahamut (orange) marker appears\nTank LB3 when Bahamut dives',
        imageUrl: './ucob/octet-5.webp'
      },
      {
        mechanic: 'Twin Bait',
        description: `If you didn't get a marker, bait Twin CCW against the wall`,
        imageUrl: './ucob/octet-9.webp'
      },
      {
        mechanic: 'Towers + Twisters',
        description: `Twisters spawn when towers go off\nArm's Length/Surecast just in case\n❗Don't run into a twister afterwards`,
        imageUrl: './ucob/octet-11.webp'
      }
    ]
  }
];

const allP4: PhaseStrats[] = [
  {
    phaseName: 'Adds: Mechanic Order',
    tag: 'p4',
    description:
      'Mini Busters -> Liquid Hells\nHatch -> Twister\nQuote -> Twister\nMegaflare\n❗Swap\nMini Busters -> Liquid Hells\nHatch -> Twister\nQuote -> Twister\n❗Swap\nMegaflare\nEnrage'
  },
  {
    phaseName: 'Adds: Start',
    tag: 'p4',
    mechs: [
      {
        mechanic: 'Spawn',
        description: 'Tank adds between 1 and 3',
        imageUrl: './ucob/adds-2.webp'
      },
      {
        mechanic: 'Liquid Hells',
        strats: [
          { role: 'Tank', party: 1, description: '', imageUrl: './ucob/adds-4.webp' },
          { role: 'Tank', party: 2, description: '', imageUrl: './ucob/adds-4.webp' },
          {
            role: 'Healer',
            party: 1,
            description: `Don't go too far from bosses`,
            imageUrl: './ucob/adds-4.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: `Don't go too far from bosses`,
            imageUrl: './ucob/adds-4.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: `Don't go too far from bosses`,
            imageUrl: './ucob/adds-4.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: `Don't go too far from bosses`,
            imageUrl: './ucob/adds-4.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: `Phys Ranged bait Liquid Hells, end up near 2`,
            imageUrl: './ucob/adds-4.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: `Phys Ranged bait Liquid Hells, end up near 2`,
            imageUrl: './ucob/adds-4.webp'
          }
        ]
      },
      {
        mechanic: 'Hatch + Twisters',
        description:
          '❗Close Hatches (1 & 3) are Hatch then Twister\n❗Far Hatch (2) is Twister then Hatch',
        strats: [
          { role: 'Tank', party: 1, description: '', imageUrl: './ucob/adds-6.webp' },
          { role: 'Tank', party: 2, description: '', imageUrl: './ucob/adds-6.webp' },
          { role: 'Healer', party: 1, description: '', imageUrl: './ucob/adds-6.webp' },
          { role: 'Healer', party: 2, description: '', imageUrl: './ucob/adds-6.webp' },
          {
            role: 'Melee',
            party: 1,
            description: 'Always go to 1 marker if Hatch',
            imageUrl: './ucob/adds-6.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Always go to 3 marker if Hatch',
            imageUrl: './ucob/adds-6.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Phys Ranged always go to 2 marker, Caster flex',
            imageUrl: './ucob/adds-6.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Phys Ranged always go to 2 marker, Caster flex',
            imageUrl: './ucob/adds-6.webp'
          }
        ]
      },
      {
        mechanic: 'Triple Quote + Twister',
        description: '❗Stack is always Mid',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Spread far North, Left side',
            imageUrl: './ucob/adds-11.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Spread far North, Right side',
            imageUrl: './ucob/adds-11.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Spread towards East',
            imageUrl: './ucob/adds-11.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Spread towards West',
            imageUrl: './ucob/adds-11.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Spread towards 1 marker Neurolink',
            imageUrl: './ucob/adds-11.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Spread towards 3 marker Neurolink',
            imageUrl: './ucob/adds-11.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Spread far Left side',
            imageUrl: './ucob/adds-11.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Spread far Right side',
            imageUrl: './ucob/adds-11.webp'
          }
        ]
      }
    ]
  },
  {
    phaseName: 'Adds: Swap',
    tag: 'p4',
    mechs: [
      {
        mechanic: 'Swap',
        description: 'Tanks only use Provoke, no Shirk normally',
        imageUrl: './ucob/adds-15.webp'
      }
    ]
  }
];

const allP5: PhaseStrats[] = [
  {
    phaseName: 'Golden: Mechanic Order',
    tag: 'p5',
    description:
      '1. Morn Afah -> Akh Morn -> Exaflares\n2.❗Akh Morn -> Morn Afah -> Exaflares\n3. Morn Afah -> Akh Morn -> Exaflares\n4. Morn Afah -> Akh Morn -> Exaflares\n5. Morn Afah -> Enrage'
  },
  {
    phaseName: 'Golden: Morn Afah',
    tag: 'p5',
    mechs: [
      {
        mechanic: 'Morn Afah (Stack)',
        description: 'Take Morn Afahs in center of boss hitbox',
        imageUrl: './ucob/golden-0.webp'
      }
    ]
  },
  {
    phaseName: 'Golden: Akh Morn',
    tag: 'p5',
    mechs: [
      {
        mechanic: 'Akh Morn (Shared Tankbuster)',
        description: 'Take Akh Morns where boss is already facing',
        imageUrl: './ucob/golden-1.webp'
      }
    ]
  },
  {
    phaseName: 'Golden: Exaflares',
    tag: 'p5',
    mechs: [
      {
        mechanic: 'Exaflares',
        description: 'Exaflares can spawn on any card/intercard',
        imageUrl: './ucob/golden-3.webp'
      }
    ]
  }
];

const naurStrat: Strat = {
  stratName: 'naur',
  description: 'From NA Ultimate Raiding (NAUR)',
  stratUrl: {
    'P1: Twintania': 'https://raidplan.io/plan/9WEG4AEGVdru3hyF',
    'P1: Liquid Hells': 'https://raidplan.io/plan/19yavfslOUU0l1Gp',
    'P2: Nael': 'https://raidplan.io/plan/DpoJr4oE_kGz_gRU',
    'P2: Divebombs': 'https://raidplan.io/plan/vi2rSC6mwW_d_QJF',
    'P3: Quickmarch': 'https://raidplan.io/plan/3zSKK0DXeJgCLadx',
    'P3: Blackfire': 'https://raidplan.io/plan/BJPnHRQMEsmOyapB',
    'P3: Fellruin': 'https://raidplan.io/plan/-83d6AilbZGqba3j',
    'P3: Heavensfall': 'https://raidplan.io/plan/NGpZ9S-3kiLsDzAY',
    'P3: Tenstrike': 'https://raidplan.io/plan/2wu2LOy8wKhG29Tr',
    'P3: Grand Octet': 'https://raidplan.io/plan/iunTUxGNwjAGF_7K',
    'P4: Adds': 'https://raidplan.io/plan/AMEhnLbUmlTb7ij3',
    'P5: Golden Bahamut': 'https://raidplan.io/plan/Y4WRFLhdHSQ7oLN_'
  },
  notes: '',
  strats: [...setup, ...allP1, ...allP2, ...allP3, ...allP4, ...allP5]
};

export const ucobStrats: Strat[] = [naurStrat];

export const ucobFightConfig: FightConfig = {
  fightKey: 'ucob',
  title: 'The Unending Coil of Bahamut (Ultimate)',
  abbreviatedTitle: 'UCOB',
  subtitle: 'UCOB Patch 4.11',
  cheatsheetTitle: 'UCOB Cheatsheet',
  strats: {
    naur: {
      label: 'NAUR'
    }
  },
  toggles: [],
  tabTags: {
    'P1: Twintania': ['setup', 'p1'],
    'P2: Nael': ['p2'],
    'P3: Bahamut Prime': ['p3'],
    'P4: Adds': ['p4'],
    'P5: Golden': ['p5']
  },
  useMainPageTabs: true,
  defaultStratName: 'naur',
  timeline: [],
  posterLayout: {
      cols: 16,
      rows: 9,
      title: 'UCOB Cheatsheet',
      subtitle: 'Based on NAUR Strats',
      sections: [
        {
          title: 'Twintania',
          col: 1, row: 1, w: 2, h: 3,
          accentColor: '#5b8fb9',
          arena: diagram('square', [
            text('L1\n \nL2\n \nL3\n \nL4', 2, 29, { fontSize: 6, anchor: 'start' }),
            player('MT', 18, 7),
            player('H1', 18, 22),
            player('M1', 18, 36),
            player('R1', 18, 51),
            text('R1\n \nR2\n \nR3\n \nR4', 48, 29, { fontSize: 6, anchor: 'end' }),
            player('OT', 32, 7),
            player('H2', 32, 22),
            player('M2', 32, 36),
            player('R2', 32, 51),
          ], { bgColor: 'transparent' })
        },
        {
          title: 'Nael',
          col: 3, row: 1, w: 2, h: 3,
          accentColor: '#c0392b',
          arena: diagram('square', [
            text('Fireball Order\n1. In \n2. Out \n3. In (2nd stay out)\n4. In', 1.75, 18, { fontSize: 5, anchor: 'start' }),
            text('Quotes\n1. In/Out or In/Stack\n2. Stack/In or Stack/Out\n3. Spread/In or Spread/Out\nDivebombs\nTank/Stack or Spread/Tank\nLast 2 are random', 1.25, 60.25, { fontSize: 4.6, anchor: 'start' }),
          ], { bgColor: 'transparent', scale: 0.8 })
        },
        {
          title: 'Quickmarch Trio',
          col: 5, row: 1, w: 4, h: 3,
          accentColor: '#e74c3c',
          arena: // Grid: 4w × 6h
            diagram('circle', [
              player('MT', 55, 40),
              player('H1', 42, 28, { marker: 'green' }),
              player('H2', 88, 27, { marker: 'green' }),
              player('OT', 76, 40),
              player('M1', 46, 76),
              player('R1', 47, 69),
              player('R2', 53, 72),
              player('M2', 86, 69, { marker: 'green' }),
              boss(67, -6, 180),
              text('Dragon is new North', 68, 9, { fontSize: 6 }),
            ], { scale: 0.75 })
        },
        {
          title: 'Blackfire Trio',
          col: 9, row: 1, w: 4, h: 3,
          accentColor: '#e67e22',
          arena: diagram('circle', [
            text('Supps CW', 107, 7, { fontSize: 6 }),
            text('DPS CCW', 107, 14, { fontSize: 6 }),
            boss(63, -2, 180),
            aoeCircle(62, 47, 12),
            aoeCircle(62, 40, 12),
            aoeCircle(62, 28, 12),
            aoeCircle(62, 12, 12),
            player('M1', 38, 30),
            player('M2', 58, 73),
            player('R2', 38, 62),
            player('MT', 86, 30),
            player('H2', 86, 62),
            player('H1', 65, 73),
            player('R1', 58, 79),
            player('OT', 65, 79),
          ], { scale: 0.8 })
        },
        {
          title: 'Fellruin Trio',
          col: 13, row: 1, w: 4, h: 3,
          accentColor: '#e91e63',
          arena: diagram('circle', [
            text('Party in Neuro', 97, 49, { fontSize: 6 }),
            text('opposite Bahamut', 97, 56, { fontSize: 6 }),
            boss(63, 22, 180),
            player('MT', 43, 36),
            player('OT', 82, 36),
            player('H1', 57, 60),
            player('H2', 57, 66),
            player('M1', 61, 64),
            player('M2', 63, 57),
            player('R1', 63, 68),
            player('R2', 69, 64),
          ], { scale: 0.8 })
        },
        {
          title: 'Heavensfall Dives',
          col: 1, row: 4, w: 4, h: 3,
          accentColor: '#f39c12',
          arena: diagram('circle', [
            boss(66.33333333333333, 0, 180),
            boss(100, 16.6666, 225),
            boss(33.333333, 16.6666666, 135),
            aoeRect(66.6666, 50, 30, 200, { rotation: 45 }),
            aoeRect(66.6666666, 50, 30, 200, { rotation: 135 }),
            player('MT', 59.00000000000001, 12),
            player('OT', 73.66666666666669, 11.666666666666664),
            text('Nael is safe\nTanks can go under Nael\nRanged can go across from Nael', 132, 75, { fontSize: 6, anchor: 'end' }),
            player('H2', 107.66666666666667, 44.333333333333336),
            player('M2', 107.66666666666667, 57.666666666666664),
            player('R1', 59.666666666666664, 91),
            player('R2', 73.33333333333333, 91),
            player('H1', 25, 43.666666666666664),
            player('M1', 25.333333333333332, 58.333333333333336),
          ], { scale: 0.75 })
        },
        {
          title: 'Heavensfall Towers',
          col: 5, row: 4, w: 4, h: 3,
          accentColor: '#3498db',
          arena: diagram('circle', [
            player('MT', 83, 22),
            player('H1', 103, 28),
            player('M1', 122, 62.5),
            player('R1', 82.5, 102),
            player('R2', 62, 96),
            player('H2', 43, 62.5),
            player('M2', 46, 81),
            player('OT', 62, 28),
            boss(82.5, 0, 180),
            aoeCircle(82.5, 9, 4),
            aoeCircle(110, 18, 4),
            aoeCircle(135, 62.5, 4),
            aoeCircle(82.5, 115, 4),
            aoeCircle(55, 106, 4),
            aoeCircle(36, 87.5, 4),
            aoeCircle(30, 62.5, 4),
            aoeCircle(55, 18, 4),
            text('Nael is new North\nTower under Nael\nis R1 (MT) position', 82.5, 62, { fontSize: 6 }),
          ], { scale: 0.6 })
        },
        {
          title: 'Tenstrike Preposition',
          col: 9, row: 4, w: 4, h: 3,
          accentColor: '#1abc9c',
          arena: diagram('circle', [
            player('MT', 55, 27),
            player('OT', 79, 27),
            player('H1', 45, 38),
            player('H2', 92, 38),
            player('M1', 44, 54),
            player('M2', 92, 54),
            player('R1', 57, 72),
            player('R2', 74, 72),
            aoeCircle(83, 63, 6),
            aoeCircle(50, 63, 6),
            aoeCircle(67, 33, 6),
            waymark('1', 67, 33),
            waymark('2', 50, 63),
            waymark('3', 83, 63),
            text('Loose Quickmarch spread', 131, 7, { fontSize: 5, anchor: 'end' }),
            text('Use eyes, jump to signal intercept', 131, 13, { fontSize: 5, anchor: 'end' }),
          ], { scale: 0.75 })
        },
        {
          title: 'Tenstrike Shakers',
          col: 13, row: 4, w: 4, h: 3,
          accentColor: '#d4ac0d',
          arena: diagram('circle', [
            waymark('1', 66, 27),
            player('H1', 57.33333333333333, 17.666666666666668),
            player('M1', 74.33333333333336, 36.333333333333336),
            player('M2', 57.33333333333333, 36),
            player('OT', 73.66666666666667, 17.333333333333336),
            player('H2', 49.333333333333336, 74.66666666666667, { marker: 'green' }),
            player('R1', 38.66666666666667, 44.99999999999999, { marker: 'green' }),
            player('MT', 95.66666666666667, 45, { marker: 'green' }),
            player('R2', 81.66666666666667, 73.66666666666667, { marker: 'green' }),
            text('1 marker is safe', 105, 8, { fontSize: 6 }),
          ], { scale: 0.75 })
        },
        {
          title: 'Grand Octet',
          col: 1, row: 7, w: 4, h: 3,
          accentColor: '#7d3cff',
          arena: diagram('square', [
            boss(42, 10.333333333333329, 180),
            boss(150, 22.000000000000004, 225),
            aoeCircle(41.333333333333336, 46.33333333333333, 35),
            aoeCircle(124.66666666666667, 46.33333333333333, 35),
            arrow(44.666666666666686, 78, 68, 62, { width: 2 }),
            arrow(41.666666666666664, 46, 41.666666666666664, 76.33333333333333, { width: 2 }),
            arrow(125, 48, 101.66666666666667, 70, { width: 2 }),
            arrow(100, 68.33333333333334, 94.66666666666667, 41.666666666666664, { width: 2 }),
            text('Stack mid then go opposite Bahamut\nIf Bahamut is Cardinal, go CCW\nIf Bahamut is Intercard, go CW\nIf Nael is opposite Bahamut, skip Nael\nSprint after 2nd dive', 78.33333333333333, 103.00000000000001, { fontSize: 6.7 }),
          ], { bgColor: 'transparent', scale: 0.6 })
        },
        {
          title: 'Adds Hatches',
          col: 5, row: 7, w: 4, h: 3,
          accentColor: '#00b8d4',
          arena: diagram('circle', [
            player('MT', 93.66666666666667, 25.333333333333332),
            player('OT', 101.33333333333333, 36),
            player('H1', 45, 13),
            player('H2', 78.33333333333333, 90.66666666666667),
            player('R2', 67, 75),
            player('M2', 93.66666666666667, 66.33333333333333),
            player('R1', 41.333333333333336, 69.33333333333333),
            player('M1', 66.33333333333333, 22.666666666666668),
            waymark('1', 66.66666666, 33.3333333),
            waymark('2', 50, 62.666666660000004),
            waymark('3', 83.33333333, 62.666666000000006),
            aoeCircle(83.3333333, 62.666666666666664, 6),
            aoeCircle(50, 62.66666666, 6),
            aoeCircle(66.66666, 33.33333, 6),
            text('L3 (M1) take 1 Neuro\nR3 (M2) take 3 Neuro\nP.Range take 2 Neuro\nCaster flexes', 2.333333333333333, 42.666666666666664, { fontSize: 5, anchor: 'start' }),
            text('Take Stacks Mid', 29, 93, { fontSize: 7 }),
          ], { scale: 0.75 })
        },
        {
          title: 'Adds Mechs',
          col: 9, row: 7, w: 2, h: 3,
          accentColor: '#78909c',
          arena: diagram('square', [
            text('Mini Busters → Liquid Hells\nHatch → Twister\nQuote → Twister\nMegaflare\n❗Swap\nMini Busters → Liquid Hells\nHatch → Twister\nQuote → Twister\n❗Swap\nMegaflare\nEnrage', 2.857142857142855, 50.142857142857146, { fontSize: 6, anchor: 'start' }),
          ], { bgColor: 'transparent', scale: 0.7 })
        },
        {
          title: 'Golden',
          col: 11, row: 7, w: 6, h: 3,
          accentColor: '#ffd700',
          arena: diagram('square', [
            text('Morn Afah 1\nAkh Morn 1\nExaflare\nAkh Morn 2\nMorn Afah 2\nExaflare\nMorn Afah 3\nAkh Morn 3\nExaflare\nMorn Afah 4\nAkh Morn 4\nExaflare\nMorn Afah 5\nMorn Afah (Enrage)\n', 2.6666666666666665, 53, { fontSize: 5.8, anchor: 'start' }),
            player('MT', 52, 16),
            player('OT', 66, 16),
            text('Share → MT Invuln → OT Invuln → Share', 75.66666666666667, 15.666666666666668, { fontSize: 6, anchor: 'start' }),
            player('M1', 52, 56),
            player('M2', 66, 56),
            player('R1', 52, 72),
            player('R2', 66, 72),
            text('60s/90s CDs: Morn Afah 1/3/5 or 2/4\n2m CDs: Morn Afah 1/4 or 2/5', 76.66666666666667, 64.66666666666666, { fontSize: 6, anchor: 'start' }),
          ], { bgColor: 'transparent', scale: 0.75 })
        }
      ]
    }
};
