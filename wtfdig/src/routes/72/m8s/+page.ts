import type { PageLoad } from "./$types";

export const load: PageLoad = ({params}) => {
    return {
        strats: [toxicStrat, pbeQ3],
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
    notes?: string;
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

const feringDecay: StratRecord = {
    'start': {
        'description': 'Healers/Melee West, Tanks/Ranged East\nG1 N, G2 S\nStay in start positions and rotate with heads',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m8s/p1/fer-decay-start.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '',
                imageUrl: './m8s/p1/fer-decay-start.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m8s/p1/fer-decay-start.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m8s/p1/fer-decay-start.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m8s/p1/fer-decay-start.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m8s/p1/fer-decay-start.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m8s/p1/fer-decay-start.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m8s/p1/fer-decay-start.webp',
        },
    },
    'spreads': {
        'description': 'Stay in static positions while rotating\nMelee Close, Ranged Far',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m8s/p1/fer-decay-spreads.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '',
                imageUrl: './m8s/p1/fer-decay-spreads.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m8s/p1/fer-decay-spreads.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m8s/p1/fer-decay-spreads.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m8s/p1/fer-decay-spreads.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m8s/p1/fer-decay-spreads.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m8s/p1/fer-decay-spreads.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m8s/p1/fer-decay-spreads.webp',
        },
    },
    'towers': {
        'description': 'Color partners',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m8s/p1/fer-decay-towers.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '',
                imageUrl: './m8s/p1/fer-decay-towers.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m8s/p1/fer-decay-towers.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m8s/p1/fer-decay-towers.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m8s/p1/fer-decay-towers.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m8s/p1/fer-decay-towers.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m8s/p1/fer-decay-towers.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m8s/p1/fer-decay-towers.webp',
        },
    }
}

const toxicDecay: StratRecord = {
    'start': {
        'description': `If AOE first, get KB'd to color intercard\nIf non-AOE first, stay E/W`,
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m8s/p1/toxic-decay-start.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '',
                imageUrl: './m8s/p1/toxic-decay-start.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m8s/p1/toxic-decay-start.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m8s/p1/toxic-decay-start.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m8s/p1/toxic-decay-start.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m8s/p1/toxic-decay-start.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m8s/p1/toxic-decay-start.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m8s/p1/toxic-decay-start.webp',
        },
    },
    'spreads': {
        'description': 'If second AOE, go to intercard marker on wall\nTanks/Melee go further',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m8s/p1/toxic-decay-spreads.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '',
                imageUrl: './m8s/p1/toxic-decay-spreads.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m8s/p1/toxic-decay-spreads.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m8s/p1/toxic-decay-spreads.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m8s/p1/toxic-decay-spreads.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m8s/p1/toxic-decay-spreads.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m8s/p1/toxic-decay-spreads.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m8s/p1/toxic-decay-spreads.webp',
        },
    },
    'towers': {
        'description': '',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Tower on A or 1 (Red) marker',
                imageUrl: './m8s/p1/toxic-decay-towers.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Tower on C or 3 (Blue) marker',
                imageUrl: './m8s/p1/toxic-decay-towers.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Tower on D or 4 (Purple) marker',
                imageUrl: './m8s/p1/toxic-decay-towers.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Tower on B or 2 (Yellow) marker',
                imageUrl: './m8s/p1/toxic-decay-towers.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Tower on D or 4 (Purple) marker',
                imageUrl: './m8s/p1/toxic-decay-towers.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Tower on C or 3 (Blue) marker',
                imageUrl: './m8s/p1/toxic-decay-towers.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Tower on A or 1 (Red) marker',
                imageUrl: './m8s/p1/toxic-decay-towers.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Tower on B or 2 (Yellow) marker',
                imageUrl: './m8s/p1/toxic-decay-towers.webp',
        },
    }
}

const clockTerrestrial: StratRecord = {
    'spreads1': {
        'description': 'TRUE NORTH\nStay near Color cardinal, place spreads in safe lanes',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Safe lane near A marker',
                imageUrl: './m8s/p1/clock-terrestrial-1.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Safe lane near C marker',
                imageUrl: './m8s/p1/clock-terrestrial-1.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Safe lane near D marker',
                imageUrl: './m8s/p1/clock-terrestrial-1.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Safe lane near B marker',
                imageUrl: './m8s/p1/clock-terrestrial-1.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Safe lane near D marker',
                imageUrl: './m8s/p1/clock-terrestrial-1.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Safe lane near C marker',
                imageUrl: './m8s/p1/clock-terrestrial-1.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Safe lane near A marker',
                imageUrl: './m8s/p1/clock-terrestrial-1.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Safe lane near B marker',
                imageUrl: './m8s/p1/clock-terrestrial-1.webp',
        },
    },
    'stack1': {
        'description': 'Center, a couple steps towards safe lane',
    },
    'spreads2': {
        'description': 'Stack will be on A or 2\nAlign with your marker colors',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Behind clone near 1 Marker',
                imageUrl: './m8s/p1/clock-terrestrial-2.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Behind clone near C/3 Marker',
                imageUrl: './m8s/p1/clock-terrestrial-2.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Behind clone near 4 Marker',
                imageUrl: './m8s/p1/clock-terrestrial-2.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Behind clone near B Marker',
                imageUrl: './m8s/p1/clock-terrestrial-2.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Behind clone near 4 Marker',
                imageUrl: './m8s/p1/clock-terrestrial-2.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Behind clone near C/3 Marker',
                imageUrl: './m8s/p1/clock-terrestrial-2.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Behind clone near 1 Marker',
                imageUrl: './m8s/p1/clock-terrestrial-2.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Behind clone near B Marker',
                imageUrl: './m8s/p1/clock-terrestrial-2.webp',
        },
    },
    'stack2': {
        'description': 'Stack on A or 2',
    },
}

const dnTerrestrial: StratRecord = {
    'spreads1': {
        'description': 'Wall laser is RELATIVE/NEW NORTH\nG1 Left/G2 Right\nMelees close/Ranged far',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Left, Close',
                imageUrl: './m8s/p1/dn-terrestrial-1.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Right, Close',
                imageUrl: './m8s/p1/dn-terrestrial-1.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Left, Far',
                imageUrl: './m8s/p1/dn-terrestrial-1.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Right, Far',
                imageUrl: './m8s/p1/dn-terrestrial-1.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Left, Close',
                imageUrl: './m8s/p1/dn-terrestrial-1.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Right, Close',
                imageUrl: './m8s/p1/dn-terrestrial-1.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Left, Far',
                imageUrl: './m8s/p1/dn-terrestrial-1.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Right, Far',
                imageUrl: './m8s/p1/dn-terrestrial-1.webp',
        },
    },
    'stack1': {
        'description': 'Center, a couple steps towards safe lane',
    },
    'spreads2': {
        'description': 'Stack will be on A or 2\nSnake Prio (G1 CCW/G2 CW from A/2 stack, Ranged first)\nEquivalent to RMMR',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '2nd CCW',
                imageUrl: './m8s/p1/dn-terrestrial-2.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '2nd CW',
                imageUrl: './m8s/p1/dn-terrestrial-2.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '1st CCW',
                imageUrl: './m8s/p1/dn-terrestrial-2.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '1st CW',
                imageUrl: './m8s/p1/dn-terrestrial-2.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '2nd CCW',
                imageUrl: './m8s/p1/dn-terrestrial-2.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '2nd CW',
                imageUrl: './m8s/p1/dn-terrestrial-2.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '1st CCW',
                imageUrl: './m8s/p1/dn-terrestrial-2.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '1st CW',
                imageUrl: './m8s/p1/dn-terrestrial-2.webp',
        },
    },
    'stack2': {
        'description': 'Stack on A or 2',
    },
}

const toxicTerrestrial: StratRecord = {
    'spreads1': {
        'description': 'Wall laser is RELATIVE/NEW NORTH',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Northwest',
                imageUrl: './m8s/p1/toxic-terrestrial-1.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Southeast',
                imageUrl: './m8s/p1/toxic-terrestrial-1.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Southwest',
                imageUrl: './m8s/p1/toxic-terrestrial-1.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Northeast',
                imageUrl: './m8s/p1/toxic-terrestrial-1.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Southwest',
                imageUrl: './m8s/p1/toxic-terrestrial-1.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Southeast',
                imageUrl: './m8s/p1/toxic-terrestrial-1.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Northwest',
                imageUrl: './m8s/p1/toxic-terrestrial-1.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Northeast',
                imageUrl: './m8s/p1/toxic-terrestrial-1.webp',
        },
    },
    'stack1': {
        'description': 'Center, a couple steps towards safe lane',
    },
    'spreads2': {
        'description': 'Stack will be on A or 2\nMT/R1 H1/M1 OT/M2 H2/R2 facing Stack',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Northwest',
                imageUrl: './m8s/p1/toxic-terrestrial-2.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Southeast',
                imageUrl: './m8s/p1/toxic-terrestrial-2.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Southwest',
                imageUrl: './m8s/p1/toxic-terrestrial-2.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Northeast',
                imageUrl: './m8s/p1/toxic-terrestrial-2.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Southwest',
                imageUrl: './m8s/p1/toxic-terrestrial-2.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Southeast',
                imageUrl: './m8s/p1/toxic-terrestrial-2.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Northwest',
                imageUrl: './m8s/p1/toxic-terrestrial-2.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Northeast',
                imageUrl: './m8s/p1/toxic-terrestrial-2.webp',
        },
    },
    'stack2': {
        'description': 'Stack on A or 2',
    },
}

const quadMoonlight: StratRecord = {
    'first': {
        'description': 'Spreads RMMR G1 Right/G2 Left facing boss',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Everyone into 1st/2nd Cleave safe quadrant\nSpread Left Close facing boss\nStack on intercard marker',
                imageUrl: './m8s/p1/quad-moonlight-1.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Everyone into 1st/2nd Cleave safe quadrant\nSpread Right Close facing boss\nStack on intercard marker',
                imageUrl: './m8s/p1/quad-moonlight-1.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Everyone into 1st/2nd Cleave safe quadrant\nSpread Left Far facing boss (on cardinal marker)\nStack on intercard marker',
                imageUrl: './m8s/p1/quad-moonlight-1.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Everyone into 1st/2nd Cleave safe quadrant\nSpread Right Far facing boss (on cardinal marker)\nStack on intercard marker',
                imageUrl: './m8s/p1/quad-moonlight-1.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Everyone into 1st/2nd Cleave safe quadrant\nSpread Left Close facing boss\nStack on intercard marker',
                imageUrl: './m8s/p1/quad-moonlight-1.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Everyone into 1st/2nd Cleave safe quadrant\nSpread Right Close facing boss\nStack on intercard marker',
                imageUrl: './m8s/p1/quad-moonlight-1.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Everyone into 1st/2nd Cleave safe quadrant\nSpread Left Far facing boss (on cardinal marker)\nStack on intercard marker',
                imageUrl: './m8s/p1/quad-moonlight-1.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Everyone into 1st/2nd Cleave safe quadrant\nSpread Right Far facing boss (on cardinal marker)\nStack on intercard marker',
                imageUrl: './m8s/p1/quad-moonlight-1.webp',
        },
    },
    'second': {
        'description': '\nSpreads RMMR G1 Right/G2 Left facing boss',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Pre-position towards 3rd/4th Cleave safe quadrant\nSpread Left Close facing boss\nStack on intercard marker',
                imageUrl: './m8s/p1/quad-moonlight-2.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Pre-position towards 3rd/4th Cleave safe quadrant\nSpread Right Close facing boss\nStack on intercard marker',
                imageUrl: './m8s/p1/quad-moonlight-2.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Pre-position towards 3rd/4th Cleave safe quadrant\nSpread Left Far facing boss (on cardinal marker)\nStack on intercard marker',
                imageUrl: './m8s/p1/quad-moonlight-2.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Pre-position towards 3rd/4th Cleave safe quadrant\nSpread Right Far facing boss (on cardinal marker)\nStack on intercard marker',
                imageUrl: './m8s/p1/quad-moonlight-2.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Pre-position towards 3rd/4th Cleave safe quadrant\nSpread Left Close facing boss\nStack on intercard marker',
                imageUrl: './m8s/p1/quad-moonlight-2.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Pre-position towards 3rd/4th Cleave safe quadrant\nSpread Right Close facing boss\nStack on intercard marker',
                imageUrl: './m8s/p1/quad-moonlight-2.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Pre-position towards 3rd/4th Cleave safe quadrant\nSpread Left Far facing boss (on cardinal marker)\nStack on intercard marker',
                imageUrl: './m8s/p1/quad-moonlight-2.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Pre-position towards 3rd/4th Cleave safe quadrant\nSpread Right Far facing boss (on cardinal marker)\nStack on intercard marker',
                imageUrl: './m8s/p1/quad-moonlight-2.webp',
        },
    },
}

const toxicMoonlight: StratRecord = {
    'first': {
        'description': 'OT/R1 will flex\nEveryone but flexer spread into 1st/2nd Cleave safe quadrant\nStack near center\nSpreads on markers, H2/H1/MT or M2/M1/R2 facing boss\nOT/R1 spread to unsafe quadrant',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m8s/p1/toxic-moonlight-1.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '',
                imageUrl: './m8s/p1/toxic-moonlight-1.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m8s/p1/toxic-moonlight-1.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m8s/p1/toxic-moonlight-1.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m8s/p1/toxic-moonlight-1.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m8s/p1/toxic-moonlight-1.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m8s/p1/toxic-moonlight-1.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m8s/p1/toxic-moonlight-1.webp',
        },
    },
    'second': {
        'description': 'Pre-position towards 3rd/4th Cleave safe quadrant\nStack near center\nSpreads on safe quadrant markers, H2/H1/MT or M2/M1/R2 facing boss\nOT/R1 spread to unsafe quadrant',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m8s/p1/toxic-moonlight-2.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '',
                imageUrl: './m8s/p1/toxic-moonlight-2.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m8s/p1/toxic-moonlight-2.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m8s/p1/toxic-moonlight-2.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m8s/p1/toxic-moonlight-2.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m8s/p1/toxic-moonlight-2.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m8s/p1/toxic-moonlight-2.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m8s/p1/toxic-moonlight-2.webp',
        },
    },
}

const toxicP2: StratRecord = {
    'quake3': {
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Southwest platform',
                imageUrl: './m8s/p2/toxic-quake3.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Southeast platform',
                imageUrl: './m8s/p2/toxic-quake3.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Southwest platform',
                imageUrl: './m8s/p2/toxic-quake3.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Southeast platform',
                imageUrl: './m8s/p2/toxic-quake3.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Southwest platform',
                imageUrl: './m8s/p2/toxic-quake3.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Southeast platform',
                imageUrl: './m8s/p2/toxic-quake3.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Southwest platform',
                imageUrl: './m8s/p2/toxic-quake3.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Southeast platform',
                imageUrl: './m8s/p2/toxic-quake3.webp',
        },
    },
    'uv1': {
        'description': 'THRM conga\nIf 3, split North/Stay/South\nIf 2, split North/Stay\nDodge nouliths',
        'imageUrl': './m8s/p2/toxic-uv.webp'
    },
    'twinbite': {
        'description': 'Party South\nMT SW, OT SE',
        'imageUrl': './m8s/p2/toxic-twinbite.webp'
    },
    'hero': {
        'description': 'Go South for half-room + In/Out',
        'imageUrl': './m8s/p2/toxic-hero.webp'
    },
    'mooncleaver': {
        'description': 'Bait Mooncleaver South',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Move to SW platform\nOT vokes if you get marked',
                imageUrl: './m8s/p2/toxic-mooncleaver.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Move to SE platform\nVoke if MT gets marked',
                imageUrl: './m8s/p2/toxic-mooncleaver.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Party move NW/NE\nStack on platform next to marked tank',
                imageUrl: './m8s/p2/toxic-mooncleaver.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Party move NW/NE\nStack on platform next to marked tank',
                imageUrl: './m8s/p2/toxic-mooncleaver.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Party move NW/NE\nStack on platform next to marked tank',
                imageUrl: './m8s/p2/toxic-mooncleaver.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Party move NW/NE\nStack on platform next to marked tank',
                imageUrl: './m8s/p2/toxic-mooncleaver.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Party move NW/NE\nStack on platform next to marked tank',
                imageUrl: './m8s/p2/toxic-mooncleaver.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Party move NW/NE\nStack on platform next to marked tank',
                imageUrl: './m8s/p2/toxic-mooncleaver.webp',
        },
    },
    'gale': {
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'SW platform tower w/ M1',
                imageUrl: './m8s/p2/toxic-gale.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'SE platform tower w/ M2',
                imageUrl: './m8s/p2/toxic-gale.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'NW platform tower w/ R1',
                imageUrl: './m8s/p2/toxic-gale.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'NE platform tower w/ R2',
                imageUrl: './m8s/p2/toxic-gale.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'SW platform tower w/ MT',
                imageUrl: './m8s/p2/toxic-gale.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'SE platform tower w/ OT',
                imageUrl: './m8s/p2/toxic-gale.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'NW platform tower w/ H1',
                imageUrl: './m8s/p2/toxic-gale.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'NE platform tower w/ H2',
                imageUrl: './m8s/p2/toxic-gale.webp',
        },
    },
    'twofold-tethers': {
        'description': 'DPS handle tethers\nTether baits start on SW or SE\nTether pair bait at the back of platform\nPair 2 platforms over from tether move close to boss to bait line',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Take tether bait far with M1 on SW platform',
                imageUrl: './m8s/p2/toxic-twofold-tethers.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Take tether bait far with M2 on SE platform',
                imageUrl: './m8s/p2/toxic-twofold-tethers.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Take tether bait far with R1 on NW platform',
                imageUrl: './m8s/p2/toxic-twofold-tethers.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Take tether bait far with R2 on NE platform',
                imageUrl: './m8s/p2/toxic-twofold-tethers.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '1st or 4th Tether\nTake tether from R1 and bait far with MT on SW platform\nHand tether off to R1 (hop platforms if R1 not already there)',
                imageUrl: './m8s/p2/toxic-twofold-tethers.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '1st or 4th Tether\nTake tether from R2 and bait far with OT on SE platform\nHand tether off to R2 (hop platforms if R1 not already there)',
                imageUrl: './m8s/p2/toxic-twofold-tethers.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '2nd or 3rd Tether\nTeleport to SW and hand tether off to M1 if needed at start\nTake tether from M1 or R2 and bait far with H1 on NW platform\nHand tether off to R2 or M1',
                imageUrl: './m8s/p2/toxic-twofold-tethers.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '2nd or 3rd Tether\nTeleport to SE and hand tether off to M2 if needed at start\nTake tether from M2 or R1 and bait far with H2 on NE platform\nHand tether off to R1 or M2',
                imageUrl: './m8s/p2/toxic-twofold-tethers.webp',
        },
    },
    'twofold-lines': {
        'MT': {
                role: 'Tank',
                party: 1,
                description: '2nd or 3rd Line\nMove close to bait line when tether is NE',
                imageUrl: './m8s/p2/toxic-twofold-line.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '2nd or 3rd Line\nMove close to bait line when tether is NW',
                imageUrl: './m8s/p2/toxic-twofold-line.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '1st or 4th Line\nMove close to bait line when tether is SE',
                imageUrl: './m8s/p2/toxic-twofold-line.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '1st or 4th Line\nMove close to bait line when tether is SW',
                imageUrl: './m8s/p2/toxic-twofold-line.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '2nd or 3rd Line\nReset to SW platform\nMove close to bait line when tether is NE',
                imageUrl: './m8s/p2/toxic-twofold-line.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '2nd or 3rd Line\nReset to SE platform\nMove close to bait line when tether is NW',
                imageUrl: './m8s/p2/toxic-twofold-line.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '1st or 4th Line\nReset to NW platform\nMove close to bait line when tether is SE',
                imageUrl: './m8s/p2/toxic-twofold-line.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '1st or 4th Line\nReset to NE platform\nMove close to bait line when tether is SW',
                imageUrl: './m8s/p2/toxic-twofold-line.webp',
        },
    },
    'champions': {
        'description': 'Reset to South\nCW (Orange): Sides Donut In Out In\nCCW (Blue): Sides In Out In Donut',
        'imageUrl': './m8s/p2/toxic-champions.webp'
    },
}

const toxicLament: StratRecord = {
    'overall': {
        'description': 'Tanks start NW\nDPS start SW\nHealers start S\nDPS movement priority',
        'imageUrl': './m8s/p2/toxic-lament-start.webp'
    },
    'blue': {
        'description': 'Blue Tether = Stay Far',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Take solo tower Southwest\nLet DPS move to SE first',
                imageUrl: './m8s/p2/toxic-lament-tethers.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Take solo tower Southwest\nLet DPS move to SE first',
                imageUrl: './m8s/p2/toxic-lament-tethers.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Take 3-person tower South',
                imageUrl: './m8s/p2/toxic-lament-tethers.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Take 3-person tower South',
                imageUrl: './m8s/p2/toxic-lament-tethers.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'If tethered to healer, take solo tower Northwest or Northeast\nIf tethered to tank, take solo tower Southeast',
                imageUrl: './m8s/p2/toxic-lament-tethers.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'If tethered to healer, take solo tower Northwest or Northeast\nIf tethered to tank, take solo tower Southeast',
                imageUrl: './m8s/p2/toxic-lament-tethers.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'If tethered to healer, take solo tower Northwest or Northeast\nIf tethered to tank, take solo tower Southeast',
                imageUrl: './m8s/p2/toxic-lament-tethers.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'If tethered to healer, take solo tower Northwest or Northeast\nIf tethered to tank, take solo tower Southeast',
                imageUrl: './m8s/p2/toxic-lament-tethers.webp',
        },
    },
    'green': {
        'description': 'Green Tether = Stay Close',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Take 2-person tower NW or NE with DPS',
                imageUrl: './m8s/p2/toxic-lament-tethers.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Take 2-person tower NW or NE with DPS',
                imageUrl: './m8s/p2/toxic-lament-tethers.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Take 3-person tower South',
                imageUrl: './m8s/p2/toxic-lament-tethers.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Take 3-person tower South',
                imageUrl: './m8s/p2/toxic-lament-tethers.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'If tethered to healer, take 3-person tower South\nIf tethered to tank, take 2-person tower NW or NE',
                imageUrl: './m8s/p2/toxic-lament-tethers.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'If tethered to healer, take 3-person tower South\nIf tethered to tank, take 2-person tower NW or NE',
                imageUrl: './m8s/p2/toxic-lament-tethers.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'If tethered to healer, take 3-person tower South\nIf tethered to tank, take 2-person tower NW or NE',
                imageUrl: './m8s/p2/toxic-lament-tethers.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'If tethered to healer, take 3-person tower South\nIf tethered to tank, take 2-person tower NW or NE',
                imageUrl: './m8s/p2/toxic-lament-tethers.webp',
        },
    },
}

const rinonLament: StratRecord = {
    'overall': {
        'description': 'Tanks start Northwest\nDPS start East\nHealers start South',
        'imageUrl': './m8s/p2/rinon-lament-start.webp'
    },
    'blue': {
        'description': 'Blue Tether = Stay Far',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Immediately move West and take solo tower',
                imageUrl: './m8s/p2/rinon-lament-tethers.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Immediately move West and take solo tower',
                imageUrl: './m8s/p2/rinon-lament-tethers.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Take 3-person tower South',
                imageUrl: './m8s/p2/rinon-lament-tethers.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Take 3-person tower South',
                imageUrl: './m8s/p2/rinon-lament-tethers.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'If tethered to healer, immediately move Northeast, then take solo tower Northeast or Northwest\nIf tethered to tank, stay and take solo tower East',
                imageUrl: './m8s/p2/rinon-lament-tethers.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'If tethered to healer, immediately move Northeast, then take solo tower Northeast or Northwest\nIf tethered to tank, stay and take solo tower East',
                imageUrl: './m8s/p2/rinon-lament-tethers.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'If tethered to healer, immediately move Northeast, then take solo tower Northeast or Northwest\nIf tethered to tank, stay and take solo tower East',
                imageUrl: './m8s/p2/rinon-lament-tethers.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'If tethered to healer, immediately move Northeast, then take solo tower Northeast or Northwest\nIf tethered to tank, stay and take solo tower East',
                imageUrl: './m8s/p2/rinon-lament-tethers.webp',
        },
    },
    'green': {
        'description': 'Green Tether = Stay Close',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Immediately move Northeast, then take 2-person tower Northeast or Northwest',
                imageUrl: './m8s/p2/rinon-lament-tethers.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Immediately move Northeast, then take 2-person tower Northeast or Northwest',
                imageUrl: './m8s/p2/rinon-lament-tethers.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Take 3-person tower South',
                imageUrl: './m8s/p2/rinon-lament-tethers.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Take 3-person tower South',
                imageUrl: './m8s/p2/rinon-lament-tethers.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'If tethered to healer, immediately move South and take 3-person tower\nIf tethered to tank, immediately move Northeast, then take 2-person tower Northeast or Northwest',
                imageUrl: './m8s/p2/rinon-lament-tethers.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'If tethered to healer, immediately move South and take 3-person tower\nIf tethered to tank, immediately move Northeast, then take 2-person tower Northeast or Northwest',
                imageUrl: './m8s/p2/rinon-lament-tethers.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'If tethered to healer, immediately move South and take 3-person tower\nIf tethered to tank, immediately move Northeast, then take 2-person tower Northeast or Northwest',
                imageUrl: './m8s/p2/rinon-lament-tethers.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'If tethered to healer, immediately move South and take 3-person tower\nIf tethered to tank, immediately move Northeast, then take 2-person tower Northeast or Northwest',
                imageUrl: './m8s/p2/rinon-lament-tethers.webp',
        },
    },
}

const feringLament: StratRecord = {
    'overall': {
        'description': 'Tanks start Northeast\nDPS start Southwest\nHealers start Southeast',
        'imageUrl': './m8s/p2/fer-lament-start.webp'
    },
    'blue': {
        'description': 'Blue Tether = Stay Far',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Stay, then take solo tower Northeast or Northwest',
                imageUrl: './m8s/p2/fer-lament-tethers.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Stay, then take solo tower Northeast or Northwest',
                imageUrl: './m8s/p2/fer-lament-tethers.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Take solo tower Southeast',
                imageUrl: './m8s/p2/fer-lament-tethers.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Take solo tower Southeast',
                imageUrl: './m8s/p2/fer-lament-tethers.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'If tethered to healer, stay and take solo tower Southwest\nIf tethered to tank, immediately move South and take 3-person tower',
                imageUrl: './m8s/p2/fer-lament-tethers.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'If tethered to healer, stay and take solo tower Southwest\nIf tethered to tank, immediately move South and take 3-person tower',
                imageUrl: './m8s/p2/fer-lament-tethers.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'If tethered to healer, stay and take solo tower Southwest\nIf tethered to tank, immediately move South and take 3-person tower',
                imageUrl: './m8s/p2/fer-lament-tethers.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'If tethered to healer, stay and take solo tower Southwest\nIf tethered to tank, immediately move South and take 3-person tower',
                imageUrl: './m8s/p2/fer-lament-tethers.webp',
        },
    },
    'green': {
        'description': 'Green Tether = Stay Close',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Immediately move Northwest, then take 2-person tower Northeast or Northwest',
                imageUrl: './m8s/p2/fer-lament-tethers.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Immediately move Northwest, then take 2-person tower Northeast or Northwest',
                imageUrl: './m8s/p2/fer-lament-tethers.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Take 3-person tower South',
                imageUrl: './m8s/p2/fer-lament-tethers.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Take 3-person tower South',
                imageUrl: './m8s/p2/fer-lament-tethers.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'If tethered to healer, immediately move South and take 3-person tower\nIf tethered to tank, immediately move Northwest, then take 2-person tower Northeast or Northwest',
                imageUrl: './m8s/p2/fer-lament-tethers.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'If tethered to healer, immediately move South and take 3-person tower\nIf tethered to tank, immediately move Northwest, then take 2-person tower Northeast or Northwest',
                imageUrl: './m8s/p2/fer-lament-tethers.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'If tethered to healer, immediately move South and take 3-person tower\nIf tethered to tank, immediately move Northwest, then take 2-person tower Northeast or Northwest',
                imageUrl: './m8s/p2/fer-lament-tethers.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'If tethered to healer, immediately move South and take 3-person tower\nIf tethered to tank, immediately move Northwest, then take 2-person tower Northeast or Northwest',
                imageUrl: './m8s/p2/fer-lament-tethers.webp',
        },
    },
}

const tiredLament: StratRecord = {
    'overall': {
        'description': 'Tanks start NW\nDPS start E\nHealers start S',
        'imageUrl': './m8s/p2/tired-lament-start.webp'
    },
    'blue': {
        'description': 'Blue Tether = Stay Far',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Immediately move West and take solo tower',
                imageUrl: './m8s/p2/tired-lament-tethers.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Immediately move West and take solo tower',
                imageUrl: './m8s/p2/tired-lament-tethers.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Take 3-person tower South',
                imageUrl: './m8s/p2/tired-lament-tethers.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Take 3-person tower South',
                imageUrl: './m8s/p2/tired-lament-tethers.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'If tethered to healer, immediately move Northeast, then take 2-person tower Northeast or Northwest\nIf tethered to tank, stay East and take solo tower',
                imageUrl: './m8s/p2/tired-lament-tethers.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'If tethered to healer, immediately move Northeast, then take 2-person tower Northeast or Northwest\nIf tethered to tank, stay East and take solo tower',
                imageUrl: './m8s/p2/tired-lament-tethers.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'If tethered to healer, immediately move Northeast, then take 2-person tower Northeast or Northwest\nIf tethered to tank, stay East and take solo tower',
                imageUrl: './m8s/p2/tired-lament-tethers.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'If tethered to healer, immediately move Northeast, then take 2-person tower Northeast or Northwest\nIf tethered to tank, stay East and take solo tower',
                imageUrl: './m8s/p2/tired-lament-tethers.webp',
        },
    },
    'green': {
        'description': 'Green Tether = Stay Close',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Immediately meet up with DPS Northeast or Northwest, then then take 2-person tower Northeast or Northwest',
                imageUrl: './m8s/p2/tired-lament-tethers.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Immediately meet up with DPS Northeast or Northwest, then then take 2-person tower Northeast or Northwest',
                imageUrl: './m8s/p2/tired-lament-tethers.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Take 3-person tower South',
                imageUrl: './m8s/p2/tired-lament-tethers.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Take 3-person tower South',
                imageUrl: './m8s/p2/tired-lament-tethers.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'If tethered to healer, immediately move South and take 3-person tower\nIf tethered to tank, immediately meet up with them Northeast or Northwest, then take 2-person tower Northeast or Northwest',
                imageUrl: './m8s/p2/tired-lament-tethers.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'If tethered to healer, immediately move South and take 3-person tower\nIf tethered to tank, immediately meet up with them Northeast or Northwest, then take 2-person tower Northeast or Northwest',
                imageUrl: './m8s/p2/tired-lament-tethers.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'If tethered to healer, immediately move South and take 3-person tower\nIf tethered to tank, immediately meet up with them Northeast or Northwest, then take 2-person tower Northeast or Northwest',
                imageUrl: './m8s/p2/tired-lament-tethers.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'If tethered to healer, immediately move South and take 3-person tower\nIf tethered to tank, immediately meet up with them Northeast or Northwest, then take 2-person tower Northeast or Northwest',
                imageUrl: './m8s/p2/tired-lament-tethers.webp',
        },
    },
}

const decayStrats = {'toxic': toxicDecay, 'fer': feringDecay};
const terrestrialStrats = {'clock': clockTerrestrial, 'dn': dnTerrestrial, 'toxic': toxicTerrestrial};
const moonlightStrats = {'quad': quadMoonlight, 'toxic': toxicMoonlight};
const p2Strats = {'toxic': toxicP2};
const lamentStrats = {'toxic': toxicLament, 'rinon': rinonLament, 'fer': feringLament, 'tired': tiredLament}

const allP1: PhaseStrats[] = [
    {
        phaseName: 'Windfang + Stonefang',
        description: 'Spread or stack around safe color marker',
        mechs: [
            {
                mechanic: 'Windfang',
                strats: [
                    {
                        role: 'Tank',
                        party: 1,
                        description: 'A or 1 (Red) marker',
                        imageUrl: './m8s/p1/toxic-windfang.webp',
                    },
                    {
                        role: 'Tank',
                        party: 2,
                        description: 'C or 3 (Blue) marker',
                        imageUrl: './m8s/p1/toxic-windfang.webp',
                    },
                    {
                        role: 'Healer',
                        party: 1,
                        description: 'D or 4 (Purple) marker',
                        imageUrl: './m8s/p1/toxic-windfang.webp',
                    },
                    {
                        role: 'Healer',
                        party: 2,
                        description: 'B or 2 (Yellow) marker',
                        imageUrl: './m8s/p1/toxic-windfang.webp',
                    },
                    {
                        role: 'Melee',
                        party: 1,
                        description: 'D or 4 (Purple) marker',
                        imageUrl: './m8s/p1/toxic-windfang.webp',
                    },
                    {
                        role: 'Melee',
                        party: 2,
                        description: 'C or 3 (Blue) marker',
                        imageUrl: './m8s/p1/toxic-windfang.webp',
                    },
                    {
                        role: 'Ranged',
                        party: 1,
                        description: 'A or 1 (Red) marker',
                        imageUrl: './m8s/p1/toxic-windfang.webp',
                    },
                    {
                        role: 'Ranged',
                        party: 2,
                        description: 'B or 2 (Yellow) marker',
                        imageUrl: './m8s/p1/toxic-windfang.webp',
                    },
                ]
            },
            {
                mechanic: 'Stonefang',
                strats: [
                    {
                        role: 'Tank',
                        party: 1,
                        description: 'Left of A or 1 (Red) marker',
                        imageUrl: './m8s/p1/toxic-stonefang.webp',
                    },
                    {
                        role: 'Tank',
                        party: 2,
                        description: 'Left of C or 3 (Blue) marker',
                        imageUrl: './m8s/p1/toxic-stonefang.webp',
                    },
                    {
                        role: 'Healer',
                        party: 1,
                        description: 'Left of D or 4 (Purple) marker',
                        imageUrl: './m8s/p1/toxic-stonefang.webp',
                    },
                    {
                        role: 'Healer',
                        party: 2,
                        description: 'Left of B or 2 (Yellow) marker',
                        imageUrl: './m8s/p1/toxic-stonefang.webp',
                    },
                    {
                        role: 'Melee',
                        party: 1,
                        description: 'Right of D or 4 (Purple) marker',
                        imageUrl: './m8s/p1/toxic-stonefang.webp',
                    },
                    {
                        role: 'Melee',
                        party: 2,
                        description: 'Right of C or 3 (Blue) marker',
                        imageUrl: './m8s/p1/toxic-stonefang.webp',
                    },
                    {
                        role: 'Ranged',
                        party: 1,
                        description: 'Right of A or 1 (Red) marker',
                        imageUrl: './m8s/p1/toxic-stonefang.webp',
                    },
                    {
                        role: 'Ranged',
                        party: 2,
                        description: 'Right of B or 2 (Yellow) marker',
                        imageUrl: './m8s/p1/toxic-stonefang.webp',
                    },
                ]
            }
        ]
    },
    {
        phaseName: 'Eminent + Revolutionary Reign',
        description: 'Looking at boss from mid, G1 Left, G2 Right',
        mechs: [
            {
                mechanic: 'Eminent',
                strats: [
                    {
                        role: 'Tank',
                        party: 1,
                        description: 'Left side behind boss',
                        imageUrl: './m8s/p1/toxic-eminent.webp',
                    },
                    {
                        role: 'Tank',
                        party: 2,
                        description: 'Right side behind boss',
                        imageUrl: './m8s/p1/toxic-eminent.webp',
                    },
                    {
                        role: 'Healer',
                        party: 1,
                        description: 'Left side with G1',
                        imageUrl: './m8s/p1/toxic-eminent.webp',
                    },
                    {
                        role: 'Healer',
                        party: 2,
                        description: 'Right side with G2',
                        imageUrl: './m8s/p1/toxic-eminent.webp',
                    },
                    {
                        role: 'Melee',
                        party: 1,
                        description: 'Left side with G1',
                        imageUrl: './m8s/p1/toxic-eminent.webp',
                    },
                    {
                        role: 'Melee',
                        party: 2,
                        description: 'Right side with G2',
                        imageUrl: './m8s/p1/toxic-eminent.webp',
                    },
                    {
                        role: 'Ranged',
                        party: 1,
                        description: 'Left side with G1',
                        imageUrl: './m8s/p1/toxic-eminent.webp',
                    },
                    {
                        role: 'Ranged',
                        party: 2,
                        description: 'Right side with G2',
                        imageUrl: './m8s/p1/toxic-eminent.webp',
                    },
                ]
            },
            {
                mechanic: 'Revolutionary',
                strats: [
                    {
                        role: 'Tank',
                        party: 1,
                        description: 'Far left side',
                        imageUrl: './m8s/p1/toxic-revolutionary.webp',
                    },
                    {
                        role: 'Tank',
                        party: 2,
                        description: 'Far right side',
                        imageUrl: './m8s/p1/toxic-revolutionary.webp',
                    },
                    {
                        role: 'Healer',
                        party: 1,
                        description: 'Left side with G1',
                        imageUrl: './m8s/p1/toxic-revolutionary.webp',
                    },
                    {
                        role: 'Healer',
                        party: 2,
                        description: 'Right side with G2',
                        imageUrl: './m8s/p1/toxic-revolutionary.webp',
                    },
                    {
                        role: 'Melee',
                        party: 1,
                        description: 'Left side with G1',
                        imageUrl: './m8s/p1/toxic-revolutionary.webp',
                    },
                    {
                        role: 'Melee',
                        party: 2,
                        description: 'Right side with G2',
                        imageUrl: './m8s/p1/toxic-revolutionary.webp',
                    },
                    {
                        role: 'Ranged',
                        party: 1,
                        description: 'Left side with G1',
                        imageUrl: './m8s/p1/toxic-revolutionary.webp',
                    },
                    {
                        role: 'Ranged',
                        party: 2,
                        description: 'Right side with G2',
                        imageUrl: './m8s/p1/toxic-revolutionary.webp',
                    },
                ]
            }
        ]
    },
    {
        phaseName: 'Millenial Decay',
        tag: 'decay',
        mechs: [
            {
                mechanic: 'Start',
                description: getStringObject(decayStrats, 'start', 'description'),
                strats: [
                    ...getStratArray(decayStrats, 'start')
                ]
            },
            {
                mechanic: 'Spreads',
                description: getStringObject(decayStrats, 'spreads', 'description'),
                strats: [
                    ...getStratArray(decayStrats, 'spreads')
                ]
            },
            {
                mechanic: 'Towers',
                description: getStringObject(decayStrats, 'towers', 'description'),
                strats: [
                    ...getStratArray(decayStrats, 'towers')
                ]
            }
        ]
    },
    {
        phaseName: 'Adds',
        description: '21/36/54 Timers\nYellow cleanse first after line\nGreen cleanse when vuln drops',
        imageUrl: './m8s/p1/toxic-adds.webp'
    },
    {
        phaseName: 'Terrestrial Rage 1',
        tag: 'terrestrial',
        description: getStringObject(terrestrialStrats, 'spreads1', 'description'),
        mechs: [
            {
                mechanic: 'Spreads',
                strats: getStratArray(terrestrialStrats, 'spreads1'),
            },
            {
                mechanic: 'Stacks',
                description: getStringObject(terrestrialStrats, 'stack1', 'description'),
            },
        ]
    },
    {
        phaseName: 'Terrestrial Rage 2',
        tag: 'terrestrial',
        description: getStringObject(terrestrialStrats, 'spreads2', 'description'),
        mechs: [
            {
                mechanic: 'Spreads',
                strats: getStratArray(terrestrialStrats, 'spreads2'),
            },
            {
                mechanic: 'Stacks',
                description: getStringObject(terrestrialStrats, 'stack2', 'description'),
            },
        ]
    },
    {
        phaseName: 'Beckon Moonlight',
        tag: 'moonlight',
        description: getStringObject(moonlightStrats, 'first', 'description'),
        mechs: [
            {
                mechanic: 'First Set (Stack/Spread 1 + Cleaves 1/2)',
                strats: getStratArray(moonlightStrats, 'first'),
            },
            {
                mechanic: 'Second Set (Cleaves 3/4 + Stack/Spread 2)',
                strats: getStratArray(moonlightStrats, 'second'),
            },
        ]
    }
]

const allP2: PhaseStrats[] = [
    {
        phaseName: 'Quake III',
        tag: 'p2',
        description: 'Light party stacks',
        mechs: [
            {
                mechanic: 'Stacks',
                description: getStringObject(p2Strats, 'quake3', 'description'),
                strats: getStratArray(p2Strats, 'quake3'),
            },
        ]
    },
    {
        phaseName: 'Ultraviolet',
        tag: 'p2',
        description: getStringObject(p2Strats, 'uv1', 'description'),
        imageUrl: getStringObject(p2Strats, 'uv1', 'imageUrl'),
    },
    {
        phaseName: `Twinbite`,
        tag: 'p2',
        description: getStringObject(p2Strats, 'twinbite', 'description'),
        imageUrl: getStringObject(p2Strats, 'twinbite', 'imageUrl'),
    },
    {
        phaseName: `Hero's Blow`,
        tag: 'p2',
        description: getStringObject(p2Strats, 'hero', 'description'),
        imageUrl: getStringObject(p2Strats, 'hero', 'imageUrl'),
    },
    {
        phaseName: `Mooncleaver`,
        tag: 'p2',
        mechs: [
            {
                mechanic: 'Mooncleaver',
                description: getStringObject(p2Strats, 'mooncleaver', 'description'),
                strats: getStratArray(p2Strats, 'mooncleaver'),
            },
        ]
    },
    {
        phaseName: `Prowling Gale`,
        tag: 'p2',
        mechs: [
            {
                mechanic: 'Towers',
                description: getStringObject(p2Strats, 'gale', 'description'),
                strats: getStratArray(p2Strats, 'gale'),
            },
        ]
    },
    {
        phaseName: `Twofold Tempest`,
        tag: 'p2',
        description: getStringObject(p2Strats, 'twofold-tethers', 'description'),
        mechs: [
            {
                mechanic: 'Tethers',
                strats: getStratArray(p2Strats, 'twofold-tethers'),
            },
            {
                mechanic: 'Line AOEs',
                strats: getStratArray(p2Strats, 'twofold-lines'),
            },
        ]
    },
    {
        phaseName: `Champion's Circuit`,
        tag: 'p2',
        description: getStringObject(p2Strats, 'champions', 'description'),
        imageUrl: getStringObject(p2Strats, 'champions', 'imageUrl'),
    },
    {
        phaseName: `Lone Wolf's Lament`,
        tag: 'lament',
        description: getStringObject(lamentStrats, 'overall', 'description'),
        imageUrl: getStringObject(lamentStrats, 'overall', 'imageUrl'),
        mechs: [
            {
                mechanic: 'Blue',
                description: getStringObject(lamentStrats, 'blue', 'description'),
                strats: getStratArray(lamentStrats, 'blue'),
            },
            {
                mechanic: 'Green',
                description: getStringObject(lamentStrats, 'green', 'description'),
                strats: getStratArray(lamentStrats, 'green'),
            },
        ]
    },
]

const toxicStrat: Strat = {
    stratName: 'toxic',
    description: 'Toxic',
    stratUrl: 'https://raidplan.io/plan/46uVU6o49FPuYXOs',
    strats: [
        ...allP1,
        ...allP2,
    ]
}

const pbeQ3: Strat = {
    stratName: 'pb-eQ',
    description: 'Pastebin',
    stratUrl: 'https://pastebin.com/eQ3PHFKr',
    strats: [
        ...allP1,
        ...allP2,
    ]
}