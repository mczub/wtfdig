import type { PageLoad } from "./$types";

export const load: PageLoad = ({params}) => {
    return {
        strats: [hectorStrat],
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
    description?: string;
    notes?: string;
    strats: PlayerMechStrat[];
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
    description: string;
    notes: string;
    strats: PhaseStrats[];
}

const normalMM2: Record<string, string | Record<string, string | PlayerMechStrat>> = {
    '4towers': {
        'description': '',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: '',
        },
    },
    '2towers': {
        'description': '',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: '',
        },
    },
    '3tower1': {
        'description': '',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: '',
        },
    },
    '3tower2': {
        'description': '',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: '',
        },
    },
}

const uptimeMM2: Record<string, string | Record<string, string | PlayerMechStrat>> = {
    '4towers': {
        'description': '',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: '',
        },
    },
    '2towers': {
        'description': '',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: '',
        },
    },
    '3tower1': {
        'description': '',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: '',
        },
    },
    '3tower2': {
        'description': '',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: '',
        },
    },
}

const skipMM2: Record<string, string | Record<string, string | PlayerMechStrat>> = {
    '4towers': {
        'description': '',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: '',
        },
    },
    '2towers': {
        'description': '',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: '',
        },
    },
    '3tower1': {
        'description': '',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: '',
        },
    },
    '3tower2': {
        'description': '',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: '',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: '',
        },
    },
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

const mm2Strats = {normal: normalMM2, uptime: uptimeMM2, skip: skipMM2}

const hectorStrat: Strat = {
    stratName: 'hector',
    description: 'Source: Hector',
    notes: '',
    stratUrl: '',
    strats: [
        {
            phaseName: 'Setup',
            description: '',
            mechs: [
                {
                    mechanic: 'Clock Spots',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: 'North' },
                        { role: 'Tank', party: 2, description: 'South' },
                        { role: 'Healer', party: 1, description: 'West' },
                        { role: 'Healer', party: 2, description: 'East' },
                        { role: 'Melee', party: 1, description: 'Southwest' },
                        { role: 'Melee', party: 2, description: 'Southeast' },
                        { role: 'Ranged', party: 1, description: 'Northwest' },
                        { role: 'Ranged', party: 2, description: 'Northeast' },
                    ]
                }
            ]
        },
        {
            phaseName: 'Blue Shockwave',
            tag: 'p1',
            description: '',
            mechs: [
                {
                    mechanic: 'Tankbusters',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: '' },
                        { role: 'Tank', party: 2, description: '' },
                        { role: 'Healer', party: 1, description: '' },
                        { role: 'Healer', party: 2, description: '' },
                        { role: 'Melee', party: 1, description: '' },
                        { role: 'Melee', party: 2, description: '' },
                        { role: 'Ranged', party: 1, description: '' },
                        { role: 'Ranged', party: 2, description: '' },
                    ]
                }
            ]
        },
        {
            phaseName: 'Fear of Death',
            tag: 'p1',
            description: '',
            mechs: [
                {
                    mechanic: 'Spreads',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: '' },
                        { role: 'Tank', party: 2, description: '' },
                        { role: 'Healer', party: 1, description: '' },
                        { role: 'Healer', party: 2, description: '' },
                        { role: 'Melee', party: 1, description: '' },
                        { role: 'Melee', party: 2, description: '' },
                        { role: 'Ranged', party: 1, description: '' },
                        { role: 'Ranged', party: 2, description: '' },
                    ]
                },
                {
                    mechanic: 'Baits',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: '' },
                        { role: 'Tank', party: 2, description: '' },
                        { role: 'Healer', party: 1, description: '' },
                        { role: 'Healer', party: 2, description: '' },
                        { role: 'Melee', party: 1, description: '' },
                        { role: 'Melee', party: 2, description: '' },
                        { role: 'Ranged', party: 1, description: '' },
                        { role: 'Ranged', party: 2, description: '' },
                    ]
                }
            ]
        },
        {
            phaseName: 'Memento Mori',
            tag: 'p1',
            description: '',
            mechs: [
                {
                    mechanic: 'Spreads',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: '' },
                        { role: 'Tank', party: 2, description: '' },
                        { role: 'Healer', party: 1, description: '' },
                        { role: 'Healer', party: 2, description: '' },
                        { role: 'Melee', party: 1, description: '' },
                        { role: 'Melee', party: 2, description: '' },
                        { role: 'Ranged', party: 1, description: '' },
                        { role: 'Ranged', party: 2, description: '' },
                    ]
                }
            ]
        },
        {
            phaseName: 'Soul Reaping',
            tag: 'p1',
            description: '',
            mechs: [
                {
                    mechanic: 'Out/Sides',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: '' },
                        { role: 'Tank', party: 2, description: '' },
                        { role: 'Healer', party: 1, description: '' },
                        { role: 'Healer', party: 2, description: '' },
                        { role: 'Melee', party: 1, description: '' },
                        { role: 'Melee', party: 2, description: '' },
                        { role: 'Ranged', party: 1, description: '' },
                        { role: 'Ranged', party: 2, description: '' },
                    ]
                },
                {
                    mechanic: 'In/Middle',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: '' },
                        { role: 'Tank', party: 2, description: '' },
                        { role: 'Healer', party: 1, description: '' },
                        { role: 'Healer', party: 2, description: '' },
                        { role: 'Melee', party: 1, description: '' },
                        { role: 'Melee', party: 2, description: '' },
                        { role: 'Ranged', party: 1, description: '' },
                        { role: 'Ranged', party: 2, description: '' },
                    ]
                }
            ]
        },
        {
            phaseName: 'End\'s Embrace 1',
            tag: 'p1',
            description: '',
            mechs: [
                {
                    mechanic: 'Puddles + Baits',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: '' },
                        { role: 'Tank', party: 2, description: '' },
                        { role: 'Healer', party: 1, description: '' },
                        { role: 'Healer', party: 2, description: '' },
                        { role: 'Melee', party: 1, description: '' },
                        { role: 'Melee', party: 2, description: '' },
                        { role: 'Ranged', party: 1, description: '' },
                        { role: 'Ranged', party: 2, description: '' },
                    ]
                },
                {
                    mechanic: 'Tankbuster',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: '' },
                        { role: 'Tank', party: 2, description: '' },
                        { role: 'Healer', party: 1, description: '' },
                        { role: 'Healer', party: 2, description: '' },
                        { role: 'Melee', party: 1, description: '' },
                        { role: 'Melee', party: 2, description: '' },
                        { role: 'Ranged', party: 1, description: '' },
                        { role: 'Ranged', party: 2, description: '' },
                    ]
                }
            ]
        },
        {
            phaseName: 'Grand Cross',
            tag: 'p1',
            description: '',
            mechs: [
                {
                    mechanic: 'Baits',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: '' },
                        { role: 'Tank', party: 2, description: '' },
                        { role: 'Healer', party: 1, description: '' },
                        { role: 'Healer', party: 2, description: '' },
                        { role: 'Melee', party: 1, description: '' },
                        { role: 'Melee', party: 2, description: '' },
                        { role: 'Ranged', party: 1, description: '' },
                        { role: 'Ranged', party: 2, description: '' },
                    ]
                },
                {
                    mechanic: 'First Towers',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: '' },
                        { role: 'Tank', party: 2, description: '' },
                        { role: 'Healer', party: 1, description: '' },
                        { role: 'Healer', party: 2, description: '' },
                        { role: 'Melee', party: 1, description: '' },
                        { role: 'Melee', party: 2, description: '' },
                        { role: 'Ranged', party: 1, description: '' },
                        { role: 'Ranged', party: 2, description: '' },
                    ]
                },
                {
                    mechanic: 'Second Towers',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: '' },
                        { role: 'Tank', party: 2, description: '' },
                        { role: 'Healer', party: 1, description: '' },
                        { role: 'Healer', party: 2, description: '' },
                        { role: 'Melee', party: 1, description: '' },
                        { role: 'Melee', party: 2, description: '' },
                        { role: 'Ranged', party: 1, description: '' },
                        { role: 'Ranged', party: 2, description: '' },
                    ]
                },
                {
                    mechanic: 'Proximity AOE',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: '' },
                        { role: 'Tank', party: 2, description: '' },
                        { role: 'Healer', party: 1, description: '' },
                        { role: 'Healer', party: 2, description: '' },
                        { role: 'Melee', party: 1, description: '' },
                        { role: 'Melee', party: 2, description: '' },
                        { role: 'Ranged', party: 1, description: '' },
                        { role: 'Ranged', party: 2, description: '' },
                    ]
                }
            ]
        },
        {
            phaseName: 'Adds',
            tag: 'adds',
            description: '',
            mechs: [
                {
                    mechanic: 'Small Adds',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: '' },
                        { role: 'Tank', party: 2, description: '' },
                        { role: 'Healer', party: 1, description: '' },
                        { role: 'Healer', party: 2, description: '' },
                        { role: 'Melee', party: 1, description: '' },
                        { role: 'Melee', party: 2, description: '' },
                        { role: 'Ranged', party: 1, description: '' },
                        { role: 'Ranged', party: 2, description: '' },
                    ]
                },
                {
                    mechanic: 'Big Adds',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: '' },
                        { role: 'Tank', party: 2, description: '' },
                        { role: 'Healer', party: 1, description: '' },
                        { role: 'Healer', party: 2, description: '' },
                        { role: 'Melee', party: 1, description: '' },
                        { role: 'Melee', party: 2, description: '' },
                        { role: 'Ranged', party: 1, description: '' },
                        { role: 'Ranged', party: 2, description: '' },
                    ]
                }
            ]
        },
        {
            phaseName: 'Domain Expansion',
            tag: 'adds',
            description: '',
            mechs: [
                {
                    mechanic: 'Adds',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: '' },
                        { role: 'Tank', party: 2, description: '' },
                        { role: 'Healer', party: 1, description: '' },
                        { role: 'Healer', party: 2, description: '' },
                        { role: 'Melee', party: 1, description: '' },
                        { role: 'Melee', party: 2, description: '' },
                        { role: 'Ranged', party: 1, description: '' },
                        { role: 'Ranged', party: 2, description: '' },
                    ]
                },
                {
                    mechanic: 'Role Mechs',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: '' },
                        { role: 'Tank', party: 2, description: '' },
                        { role: 'Healer', party: 1, description: '' },
                        { role: 'Healer', party: 2, description: '' },
                        { role: 'Melee', party: 1, description: '' },
                        { role: 'Melee', party: 2, description: '' },
                        { role: 'Ranged', party: 1, description: '' },
                        { role: 'Ranged', party: 2, description: '' },
                    ]
                }
            ]
        },
        {
            phaseName: 'End\'s Embrace 2',
            tag: 'p2',
            description: '',
            mechs: [
                {
                    mechanic: 'Specter of Death',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: '' },
                        { role: 'Tank', party: 2, description: '' },
                        { role: 'Healer', party: 1, description: '' },
                        { role: 'Healer', party: 2, description: '' },
                        { role: 'Melee', party: 1, description: '' },
                        { role: 'Melee', party: 2, description: '' },
                        { role: 'Ranged', party: 1, description: '' },
                        { role: 'Ranged', party: 2, description: '' },
                    ]
                },
                {
                    mechanic: 'EE2 Spreads',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: '' },
                        { role: 'Tank', party: 2, description: '' },
                        { role: 'Healer', party: 1, description: '' },
                        { role: 'Healer', party: 2, description: '' },
                        { role: 'Melee', party: 1, description: '' },
                        { role: 'Melee', party: 2, description: '' },
                        { role: 'Ranged', party: 1, description: '' },
                        { role: 'Ranged', party: 2, description: '' },
                    ]
                },
                {
                    mechanic: 'EE2 Baits',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: '' },
                        { role: 'Tank', party: 2, description: '' },
                        { role: 'Healer', party: 1, description: '' },
                        { role: 'Healer', party: 2, description: '' },
                        { role: 'Melee', party: 1, description: '' },
                        { role: 'Melee', party: 2, description: '' },
                        { role: 'Ranged', party: 1, description: '' },
                        { role: 'Ranged', party: 2, description: '' },
                    ]
                }
            ]
        },
        {
            phaseName: 'Relentless Reaping',
            tag: 'p2',
            description: '',
            mechs: [
                {
                    mechanic: 'Out/Sides',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: '' },
                        { role: 'Tank', party: 2, description: '' },
                        { role: 'Healer', party: 1, description: '' },
                        { role: 'Healer', party: 2, description: '' },
                        { role: 'Melee', party: 1, description: '' },
                        { role: 'Melee', party: 2, description: '' },
                        { role: 'Ranged', party: 1, description: '' },
                        { role: 'Ranged', party: 2, description: '' },
                    ]
                },
                {
                    mechanic: 'In/Middle',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: '' },
                        { role: 'Tank', party: 2, description: '' },
                        { role: 'Healer', party: 1, description: '' },
                        { role: 'Healer', party: 2, description: '' },
                        { role: 'Melee', party: 1, description: '' },
                        { role: 'Melee', party: 2, description: '' },
                        { role: 'Ranged', party: 1, description: '' },
                        { role: 'Ranged', party: 2, description: '' },
                    ]
                },
                {
                    mechanic: 'Second/Fourth',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: '' },
                        { role: 'Tank', party: 2, description: '' },
                        { role: 'Healer', party: 1, description: '' },
                        { role: 'Healer', party: 2, description: '' },
                        { role: 'Melee', party: 1, description: '' },
                        { role: 'Melee', party: 2, description: '' },
                        { role: 'Ranged', party: 1, description: '' },
                        { role: 'Ranged', party: 2, description: '' },
                    ]
                }
            ]
        },
        {
            phaseName: 'Circle of Lives 1',
            tag: 'p2',
            description: '',
            mechs: [
                {
                    mechanic: 'Donuts 1/2',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: '' },
                        { role: 'Tank', party: 2, description: '' },
                        { role: 'Healer', party: 1, description: '' },
                        { role: 'Healer', party: 2, description: '' },
                        { role: 'Melee', party: 1, description: '' },
                        { role: 'Melee', party: 2, description: '' },
                        { role: 'Ranged', party: 1, description: '' },
                        { role: 'Ranged', party: 2, description: '' },
                    ]
                },
                {
                    mechanic: 'Side Hand',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: '' },
                        { role: 'Tank', party: 2, description: '' },
                        { role: 'Healer', party: 1, description: '' },
                        { role: 'Healer', party: 2, description: '' },
                        { role: 'Melee', party: 1, description: '' },
                        { role: 'Melee', party: 2, description: '' },
                        { role: 'Ranged', party: 1, description: '' },
                        { role: 'Ranged', party: 2, description: '' },
                    ]
                },
                {
                    mechanic: 'Donuts 3/4/5',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: '' },
                        { role: 'Tank', party: 2, description: '' },
                        { role: 'Healer', party: 1, description: '' },
                        { role: 'Healer', party: 2, description: '' },
                        { role: 'Melee', party: 1, description: '' },
                        { role: 'Melee', party: 2, description: '' },
                        { role: 'Ranged', party: 1, description: '' },
                        { role: 'Ranged', party: 2, description: '' },
                    ]
                },
                {
                    mechanic: 'Reaping/Blight',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: '' },
                        { role: 'Tank', party: 2, description: '' },
                        { role: 'Healer', party: 1, description: '' },
                        { role: 'Healer', party: 2, description: '' },
                        { role: 'Melee', party: 1, description: '' },
                        { role: 'Melee', party: 2, description: '' },
                        { role: 'Ranged', party: 1, description: '' },
                        { role: 'Ranged', party: 2, description: '' },
                    ]
                }
            ]
        },
        {
            phaseName: 'Mass Macabre (MM2)',
            tag: 'mm2',
            description: '',
            mechs: [
                {
                    mechanic: '4-person Towers',
                    description: '',
                    strats: getStratArray(mm2Strats, '4towers')
                },
                {
                    mechanic: '2-person Towers',
                    description: '',
                    strats: getStratArray(mm2Strats, '2towers')
                },
                {
                    mechanic: '3-person Tower 1/TB',
                    description: '',
                    strats: getStratArray(mm2Strats, '3tower1')
                },
                {
                    mechanic: '3-person Tower 2/TB',
                    description: '',
                    strats: getStratArray(mm2Strats, '3tower2')
                }
            ]
        },
        {
            phaseName: 'Circle of Lives 2',
            tag: 'p2',
            description: '',
            mechs: [
                {
                    mechanic: 'Donut 1/3',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: '' },
                        { role: 'Tank', party: 2, description: '' },
                        { role: 'Healer', party: 1, description: '' },
                        { role: 'Healer', party: 2, description: '' },
                        { role: 'Melee', party: 1, description: '' },
                        { role: 'Melee', party: 2, description: '' },
                        { role: 'Ranged', party: 1, description: '' },
                        { role: 'Ranged', party: 2, description: '' },
                    ]
                },
                {
                    mechanic: 'Donut 2/4 + Hand',
                    description: '',
                    strats: [
                        { role: 'Tank', party: 1, description: '' },
                        { role: 'Tank', party: 2, description: '' },
                        { role: 'Healer', party: 1, description: '' },
                        { role: 'Healer', party: 2, description: '' },
                        { role: 'Melee', party: 1, description: '' },
                        { role: 'Melee', party: 2, description: '' },
                        { role: 'Ranged', party: 1, description: '' },
                        { role: 'Ranged', party: 2, description: '' },
                    ]
                }
            ]
        }
    ]
}
