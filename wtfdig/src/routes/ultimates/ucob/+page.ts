import type { TimelineItem } from "$lib/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({params}) => {
    return {
        strats: [naurStrat],
        timeline: [],
    }
}

export type Role = 'Tank' | 'Healer' | 'Melee' | 'Ranged'; 
export type Alignment = 'original' | 'truenorth' | 'relative';
export type StratRecord = Record<string, string | Record<string, string | PlayerMechStrat>>;

export interface PlayerMechStrat {
    role: Role;
    party: number;
    description: string | Record<string, string>;
    imageUrl?: string | Record<string, string>;
    imageRotated?: string;
    mask?: string | Record<string,string>;
    transform?: string;
    alignmentTransforms?: Record<Alignment, string>;
    alignmentImages?: Record<Alignment, string>;
    alignmentMasks?: Record<Alignment, string>;
}

export interface MechanicStrat {
    mechanic: string;
    description?: string | Record<string, string>;
    notes?: string;
    strats?: PlayerMechStrat[];
    imageUrl?: string | Record<string, string>;
}


export interface PhaseStrats {
    phaseName: string;
    tag?: string;
    description?: string | Record<string, string>;
    imageUrl?: string | Record<string, string>;
    mask?: string | Record<string,string>;
    mechs?: MechanicStrat[];
}

export interface Strat {
    stratName: string;
    stratUrl: string | Record<string, string>;
    description: string | Record<string, string>;
    notes: string;
    strats: PhaseStrats[];
}

function getStringObject(stratRecord: Record<string, StratRecord>, mechanic: string, property: string, role?: string): Record<string, string> {
    let stringObject = {};
    for (const [key, strat] of Object.entries(stratRecord)) {
        if (role) {
            stringObject[key] = strat[mechanic][role][property] as string || '';
        } else {
            stringObject[key] = strat[mechanic][property] as string || '';
        }
        
    };
    return stringObject;
}

function getStratArray(stratRecord: Record<string, StratRecord>, mechanic: string): PlayerMechStrat[] {
    return [
        {
            role: 'Tank',
            party: 1,
            description: getStringObject(stratRecord, mechanic, 'description', 'MT'),
            imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'MT'),
        },
        {
            role: 'Tank',
            party: 2,
            description: getStringObject(stratRecord, mechanic, 'description', 'OT'),
            imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'OT'),
        },
        {
            role: 'Healer',
            party: 1,
            description: getStringObject(stratRecord, mechanic, 'description', 'H1'),
            imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'H1'),
        },
        {
            role: 'Healer',
            party: 2,
            description: getStringObject(stratRecord, mechanic, 'description', 'H2'),
            imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'H2'),
        },
        {
            role: 'Melee',
            party: 1,
            description: getStringObject(stratRecord, mechanic, 'description', 'M1'),
            imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'M1'),
        },
        {
            role: 'Melee',
            party: 2,
            description: getStringObject(stratRecord, mechanic, 'description', 'M2'),
            imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'M2'),
        },
        {
            role: 'Ranged',
            party: 1,
            description: getStringObject(stratRecord, mechanic, 'description', 'R1'),
            imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'R1'),
        },
        {
            role: 'Ranged',
            party: 2,
            description: getStringObject(stratRecord, mechanic, 'description', 'R2'),
            imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'R2'),
        },
    ]
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
                    { role: 'Ranged', party: 2, description: 'R4 (Left Southmost)', imageUrl: '' },
                ]
            }
        ]
    }
]

const allP1: PhaseStrats[] = [
    {
        phaseName: 'Twintania: Opening',
        tag: 'p1',
        mechs: [
            {
                mechanic: 'Twisters',
                description: 'Rough spread to bait twisters, then run in for stack',
                strats: [
                    { role: 'Tank', party: 1, description: '', imageUrl: '' },
                    { role: 'Tank', party: 2, description: '', imageUrl: '' },
                    { role: 'Healer', party: 1, description: '', imageUrl: '' },
                    { role: 'Healer', party: 2, description: '', imageUrl: '' },
                    { role: 'Melee', party: 1, description: '', imageUrl: '' },
                    { role: 'Melee', party: 2, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 1, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
                ]
            },
            {
                mechanic: 'Fireball Stack',
                description: 'Both tanks and one healer stay out of stack for LB',
                strats: [
                    { role: 'Tank', party: 1, description: '!! Stay out of stack', imageUrl: '' },
                    { role: 'Tank', party: 2, description: '!! Stay out of stack', imageUrl: '' },
                    { role: 'Healer', party: 1, description: 'One healer stay out of stack', imageUrl: '' },
                    { role: 'Healer', party: 2, description: 'One healer stay out of stack', imageUrl: '' },
                    { role: 'Melee', party: 1, description: '', imageUrl: '' },
                    { role: 'Melee', party: 2, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 1, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
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
                    { role: 'Tank', party: 1, description: '', imageUrl: '' },
                    { role: 'Tank', party: 2, description: '', imageUrl: '' },
                    { role: 'Healer', party: 1, description: '', imageUrl: '' },
                    { role: 'Healer', party: 2, description: '', imageUrl: '' },
                    { role: 'Melee', party: 1, description: '', imageUrl: '' },
                    { role: 'Melee', party: 2, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 1, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
                ]
            },
            {
                mechanic: 'Hatch + Liquid Hells 2',
                description: 'Caster intercept Hatch if on Phys Ranged',
                strats: [
                    { role: 'Tank', party: 1, description: '', imageUrl: '' },
                    { role: 'Tank', party: 2, description: '', imageUrl: '' },
                    { role: 'Healer', party: 1, description: '', imageUrl: '' },
                    { role: 'Healer', party: 2, description: '', imageUrl: '' },
                    { role: 'Melee', party: 1, description: '', imageUrl: '' },
                    { role: 'Melee', party: 2, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 1, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
                ]
            },
            {
                mechanic: 'Hatch + Twister',
                description: 'Make sure to drop twister outside Neurolink',
            }
        ]
    },
    {
        phaseName: 'Twintania: 44%',
        tag: 'p1',
        mechs: [
            {
                mechanic: 'Liquid Hells 3 + Hatches',
                description: 'Phys Ranged continue baiting puddles\nSet of double Hatches as puddles finish',
                strats: [
                    { role: 'Tank', party: 1, description: '', imageUrl: '' },
                    { role: 'Tank', party: 2, description: '', imageUrl: '' },
                    { role: 'Healer', party: 1, description: '', imageUrl: '' },
                    { role: 'Healer', party: 2, description: '', imageUrl: '' },
                    { role: 'Melee', party: 1, description: '', imageUrl: '' },
                    { role: 'Melee', party: 2, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 1, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
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
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
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
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
                ]
            }
        ]
    }
]

const allP2: PhaseStrats[] = [
    {
        phaseName: 'Nael: Transition',
        tag: 'p2',
        mechs: [
            {
                mechanic: 'Spreads',
                description: 'Knockback, then spread roughly into QM spots',
                strats: [
                    { role: 'Tank', party: 1, description: '', imageUrl: '' },
                    { role: 'Tank', party: 2, description: '', imageUrl: '' },
                    { role: 'Healer', party: 1, description: '', imageUrl: '' },
                    { role: 'Healer', party: 2, description: '', imageUrl: '' },
                    { role: 'Melee', party: 1, description: '', imageUrl: '' },
                    { role: 'Melee', party: 2, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 1, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
                ]
            },
            {
                mechanic: 'Dive',
                description: 'Tank with aggro takes dive on D marker',
                strats: [
                    { role: 'Tank', party: 1, description: '', imageUrl: '' },
                    { role: 'Tank', party: 2, description: '', imageUrl: '' },
                    { role: 'Healer', party: 1, description: '', imageUrl: '' },
                    { role: 'Healer', party: 2, description: '', imageUrl: '' },
                    { role: 'Melee', party: 1, description: '', imageUrl: '' },
                    { role: 'Melee', party: 2, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 1, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
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
                description: 'Quote is In + Stack or In + Out\nThunders make a Mickey Mouse shape opposite the party inside the first Chariot'
            },
            {
                mechanic: 'Tether 1 + Cleanse 1',
                description: 'Tether 1 is IN\nParty rotate CW to drop puddles'
            }
        ]
    },
    {
        phaseName: 'Nael: Cleanse 2',
        tag: 'p2',
        mechs: [
            {
                mechanic: 'Tether 2',
                description: '‼️2nd Tether is OUT'
            },
            {
                mechanic: 'Thunders',
                description: 'Thunders resolve before quote, drop thunders then join stack'
            },
            {
                mechanic: 'Quote + Cleanse 2',
                description: 'Quote is Stack + In or Stack + Out\nParty rotate CW to drop puddles'
            }
        ]
    },
    {
        phaseName: 'Nael: Cleanse 3',
        tag: 'p2',
        mechs: [
            {
                mechanic: 'Thunders + Tether 3',
                description: 'Tether 3 is IN (unless you got Tether 2)\n❗⚡Thunder will resolve BEFORE Tether 3\n⚡Join tether stack after fireball'
            },
            {
                mechanic: 'Quote',
                description: `Quote is Spread + In or Spread + Out\nLoose spread, don't go too far if it's Spread + In`
            },
            {
                mechanic: 'Cleanse 3 + Tether 4 + Thunders',
                description: 'Tether 4 is IN\n❗⚡Thunder will resolve AFTER Tether 4\n⚡Take fire then move CCW or away from boss'
            }
        ]
    },
    {
        phaseName: 'Nael: Divebombs',
        tag: 'p2',
        mechs: [
            {
                mechanic: 'Dive 1',
                description: 'A marker unless cursed\nFirst dive snapshots on first puddle'
            },
            {
                mechanic: 'Dive 2',
                description: 'B marker unless cursed\nFirst dive snapshots on THIRD puddle'
            },
            {
                mechanic: 'Dive 3',
                description: 'C marker unless cursed\nMove in when marker disappears\nHealer can rescue if quote is Stack'
            },
            {
                mechanic: 'Quote (Stack/Spread)',
                description: 'Tank away from the party for Nael dive after Spread or before Stack'
            }
        ]
    }
]

const allP3: PhaseStrats[] = [
    {
        phaseName: 'Bahamut: Quickmarch',
        tag: 'p3',
        mechs: [
            {
                mechanic: 'Dive + Spreads',
                strats: [
                    { role: 'Tank', party: 1, description: '', imageUrl: '' },
                    { role: 'Tank', party: 2, description: '', imageUrl: '' },
                    { role: 'Healer', party: 1, description: '', imageUrl: '' },
                    { role: 'Healer', party: 2, description: '', imageUrl: '' },
                    { role: 'Melee', party: 1, description: '', imageUrl: '' },
                    { role: 'Melee', party: 2, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 1, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
                ]
            },
            {
                mechanic: 'Earthshakers + Stack',
                strats: [
                    { role: 'Tank', party: 1, description: '', imageUrl: '' },
                    { role: 'Tank', party: 2, description: '', imageUrl: '' },
                    { role: 'Healer', party: 1, description: '', imageUrl: '' },
                    { role: 'Healer', party: 2, description: '', imageUrl: '' },
                    { role: 'Melee', party: 1, description: '', imageUrl: '' },
                    { role: 'Melee', party: 2, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 1, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
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
                strats: [
                    { role: 'Tank', party: 1, description: '', imageUrl: '' },
                    { role: 'Tank', party: 2, description: '', imageUrl: '' },
                    { role: 'Healer', party: 1, description: '', imageUrl: '' },
                    { role: 'Healer', party: 2, description: '', imageUrl: '' },
                    { role: 'Melee', party: 1, description: '', imageUrl: '' },
                    { role: 'Melee', party: 2, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 1, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
                ]
            },
            {
                mechanic: 'Towers',
                strats: [
                    { role: 'Tank', party: 1, description: '', imageUrl: '' },
                    { role: 'Tank', party: 2, description: '', imageUrl: '' },
                    { role: 'Healer', party: 1, description: '', imageUrl: '' },
                    { role: 'Healer', party: 2, description: '', imageUrl: '' },
                    { role: 'Melee', party: 1, description: '', imageUrl: '' },
                    { role: 'Melee', party: 2, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 1, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
                ]
            },
            {
                mechanic: 'Stack',
                strats: [
                    { role: 'Tank', party: 1, description: '', imageUrl: '' },
                    { role: 'Tank', party: 2, description: '', imageUrl: '' },
                    { role: 'Healer', party: 1, description: '', imageUrl: '' },
                    { role: 'Healer', party: 2, description: '', imageUrl: '' },
                    { role: 'Melee', party: 1, description: '', imageUrl: '' },
                    { role: 'Melee', party: 2, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 1, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
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
                strats: [
                    { role: 'Tank', party: 1, description: '', imageUrl: '' },
                    { role: 'Tank', party: 2, description: '', imageUrl: '' },
                    { role: 'Healer', party: 1, description: '', imageUrl: '' },
                    { role: 'Healer', party: 2, description: '', imageUrl: '' },
                    { role: 'Melee', party: 1, description: '', imageUrl: '' },
                    { role: 'Melee', party: 2, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 1, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
                ]
            },
            {
                mechanic: 'In -> Spread',
                strats: [
                    { role: 'Tank', party: 1, description: '', imageUrl: '' },
                    { role: 'Tank', party: 2, description: '', imageUrl: '' },
                    { role: 'Healer', party: 1, description: '', imageUrl: '' },
                    { role: 'Healer', party: 2, description: '', imageUrl: '' },
                    { role: 'Melee', party: 1, description: '', imageUrl: '' },
                    { role: 'Melee', party: 2, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 1, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
                ]
            },
            {
                mechanic: 'Spread -> In',
                strats: [
                    { role: 'Tank', party: 1, description: '', imageUrl: '' },
                    { role: 'Tank', party: 2, description: '', imageUrl: '' },
                    { role: 'Healer', party: 1, description: '', imageUrl: '' },
                    { role: 'Healer', party: 2, description: '', imageUrl: '' },
                    { role: 'Melee', party: 1, description: '', imageUrl: '' },
                    { role: 'Melee', party: 2, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 1, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
                ]
            },
            {
                mechanic: 'Tethers + Stack',
                strats: [
                    { role: 'Tank', party: 1, description: '', imageUrl: '' },
                    { role: 'Tank', party: 2, description: '', imageUrl: '' },
                    { role: 'Healer', party: 1, description: '', imageUrl: '' },
                    { role: 'Healer', party: 2, description: '', imageUrl: '' },
                    { role: 'Melee', party: 1, description: '', imageUrl: '' },
                    { role: 'Melee', party: 2, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 1, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
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
                strats: [
                    { role: 'Tank', party: 1, description: '', imageUrl: '' },
                    { role: 'Tank', party: 2, description: '', imageUrl: '' },
                    { role: 'Healer', party: 1, description: '', imageUrl: '' },
                    { role: 'Healer', party: 2, description: '', imageUrl: '' },
                    { role: 'Melee', party: 1, description: '', imageUrl: '' },
                    { role: 'Melee', party: 2, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 1, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
                ]
            },
            {
                mechanic: 'Towers',
                strats: [
                    { role: 'Tank', party: 1, description: '', imageUrl: '' },
                    { role: 'Tank', party: 2, description: '', imageUrl: '' },
                    { role: 'Healer', party: 1, description: '', imageUrl: '' },
                    { role: 'Healer', party: 2, description: '', imageUrl: '' },
                    { role: 'Melee', party: 1, description: '', imageUrl: '' },
                    { role: 'Melee', party: 2, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 1, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
                ]
            },
            {
                mechanic: 'Toilet',
                strats: [
                    { role: 'Tank', party: 1, description: '', imageUrl: '' },
                    { role: 'Tank', party: 2, description: '', imageUrl: '' },
                    { role: 'Healer', party: 1, description: '', imageUrl: '' },
                    { role: 'Healer', party: 2, description: '', imageUrl: '' },
                    { role: 'Melee', party: 1, description: '', imageUrl: '' },
                    { role: 'Melee', party: 2, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 1, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
                ]
            }
        ]
    },
    {
        phaseName: 'Bahamut: Tenstrike',
        tag: 'p3',
        mechs: [
            {
                mechanic: 'Initial Spreads',
                strats: [
                    { role: 'Tank', party: 1, description: '', imageUrl: '' },
                    { role: 'Tank', party: 2, description: '', imageUrl: '' },
                    { role: 'Healer', party: 1, description: '', imageUrl: '' },
                    { role: 'Healer', party: 2, description: '', imageUrl: '' },
                    { role: 'Melee', party: 1, description: '', imageUrl: '' },
                    { role: 'Melee', party: 2, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 1, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
                ]
            },
            {
                mechanic: 'First Hatches',
                strats: [
                    { role: 'Tank', party: 1, description: '', imageUrl: '' },
                    { role: 'Tank', party: 2, description: '', imageUrl: '' },
                    { role: 'Healer', party: 1, description: '', imageUrl: '' },
                    { role: 'Healer', party: 2, description: '', imageUrl: '' },
                    { role: 'Melee', party: 1, description: '', imageUrl: '' },
                    { role: 'Melee', party: 2, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 1, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
                ]
            },
            {
                mechanic: 'Second Hatches',
                strats: [
                    { role: 'Tank', party: 1, description: '', imageUrl: '' },
                    { role: 'Tank', party: 2, description: '', imageUrl: '' },
                    { role: 'Healer', party: 1, description: '', imageUrl: '' },
                    { role: 'Healer', party: 2, description: '', imageUrl: '' },
                    { role: 'Melee', party: 1, description: '', imageUrl: '' },
                    { role: 'Melee', party: 2, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 1, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
                ]
            },
            {
                mechanic: 'Earthshakers',
                strats: [
                    { role: 'Tank', party: 1, description: '', imageUrl: '' },
                    { role: 'Tank', party: 2, description: '', imageUrl: '' },
                    { role: 'Healer', party: 1, description: '', imageUrl: '' },
                    { role: 'Healer', party: 2, description: '', imageUrl: '' },
                    { role: 'Melee', party: 1, description: '', imageUrl: '' },
                    { role: 'Melee', party: 2, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 1, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
                ]
            }
        ]
    },
    {
        phaseName: 'Bahamut: Grand Octet',
        tag: 'p3',
        mechs: [
            {
                mechanic: 'Run',
                strats: [
                    { role: 'Tank', party: 1, description: '', imageUrl: '' },
                    { role: 'Tank', party: 2, description: '', imageUrl: '' },
                    { role: 'Healer', party: 1, description: '', imageUrl: '' },
                    { role: 'Healer', party: 2, description: '', imageUrl: '' },
                    { role: 'Melee', party: 1, description: '', imageUrl: '' },
                    { role: 'Melee', party: 2, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 1, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
                ]
            },
            {
                mechanic: 'Keep Running',
                strats: [
                    { role: 'Tank', party: 1, description: '', imageUrl: '' },
                    { role: 'Tank', party: 2, description: '', imageUrl: '' },
                    { role: 'Healer', party: 1, description: '', imageUrl: '' },
                    { role: 'Healer', party: 2, description: '', imageUrl: '' },
                    { role: 'Melee', party: 1, description: '', imageUrl: '' },
                    { role: 'Melee', party: 2, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 1, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
                ]
            },
            {
                mechanic: 'Twin Bait',
                strats: [
                    { role: 'Tank', party: 1, description: '', imageUrl: '' },
                    { role: 'Tank', party: 2, description: '', imageUrl: '' },
                    { role: 'Healer', party: 1, description: '', imageUrl: '' },
                    { role: 'Healer', party: 2, description: '', imageUrl: '' },
                    { role: 'Melee', party: 1, description: '', imageUrl: '' },
                    { role: 'Melee', party: 2, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 1, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
                ]
            },
            {
                mechanic: 'Towers + Twisters',
                strats: [
                    { role: 'Tank', party: 1, description: '', imageUrl: '' },
                    { role: 'Tank', party: 2, description: '', imageUrl: '' },
                    { role: 'Healer', party: 1, description: '', imageUrl: '' },
                    { role: 'Healer', party: 2, description: '', imageUrl: '' },
                    { role: 'Melee', party: 1, description: '', imageUrl: '' },
                    { role: 'Melee', party: 2, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 1, description: '', imageUrl: '' },
                    { role: 'Ranged', party: 2, description: '', imageUrl: '' },
                ]
            }
        ]
    }
]

const naurStrat: Strat = {
    stratName: 'naur',
    description: 'NAUR',
    stratUrl: 'https://raidplan.io/plan/46uVU6o49FPuYXOs',
    notes: '',
    strats: [
        ...allP1,
        ...allP2,
        ...allP3,
    ]
}
