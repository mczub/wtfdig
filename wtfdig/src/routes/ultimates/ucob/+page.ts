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

const allP1: PhaseStrats[] = [
    {
        phaseName: 'Twintania: Twisters + Fireball',
        tag: 'p1',
        mechs: [
            {
                mechanic: 'Twisters',
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
        phaseName: 'Twintania: Neurolink 2',
        tag: 'p1',
        mechs: [
            {
                mechanic: 'Liquid Hells 1',
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
        phaseName: 'Twintania: Neurolink 3',
        tag: 'p1',
        mechs: [
            {
                mechanic: 'Liquid Hells 3 + Hatches',
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
                mechanic: 'Liquid Hells 4',
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
                mechanic: 'Tether 1 + Cleanse 1',
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
        phaseName: 'Nael: Cleanse 2',
        tag: 'p2',
        mechs: [
            {
                mechanic: 'Tether 2',
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
                mechanic: 'Thunders',
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
                mechanic: 'Quote + Cleanse 2',
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
        phaseName: 'Nael: Cleanse 3',
        tag: 'p2',
        mechs: [
            {
                mechanic: 'Thunders + Tether 3',
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
                mechanic: 'Cleanse 3 + Tether 4 + Thunders',
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
        phaseName: 'Nael: Divebombs',
        tag: 'p2',
        mechs: [
            {
                mechanic: 'Divebombs',
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
