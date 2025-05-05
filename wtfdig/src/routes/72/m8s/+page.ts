import type { TimelineItem } from "$lib/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({params}) => {
    return {
        strats: [toxicStrat, pbeQ3, pbr, r84ddog],
        timeline: timeline,
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

const timeline: TimelineItem[] = [
    {
      mechName: 'Start',
      mechType: 'Start',
      mechTag: 'p1',
      startTimeMs: 0,
    },
    {
      mechName: 'Extraplanar Pursuit',
      mechType: 'Raidwide',
      mechTag: 'p1',
      startTimeMs: 14000,
    },
    {
      mechName: 'Wind/Stonefang',
      mechType: 'Mechanic',
      mechTag: 'p1',
      startTimeMs: 29000,
    },
    {
      mechName: 'Reign',
      mechType: 'Mechanic',
      mechTag: 'p1',
      startTimeMs: 41000,
    },
    {
      mechName: 'Millenial Decay',
      mechType: 'Mechanic',
      mechTag: 'p1',
      startTimeMs: 66000,
    },
    {
      mechName: 'Tracking Tremors',
      mechType: 'Raidwide',
      mechTag: 'p1',
      startTimeMs: 101000,
    },
    {
      mechName: 'Extraplanar Pursuit',
      mechType: 'Raidwide',
      mechTag: 'p1',
      startTimeMs: 115000,
    },
    {
      mechName: 'Great Divide',
      mechType: 'Tankbuster',
      mechTag: 'p1',
      startTimeMs: 124000,
    },
    {
      mechName: 'Terrestrial Titans',
      mechType: 'Mechanic',
      mechTag: 'p1',
      startTimeMs: 139000,
    },
    {
      mechName: 'Reign',
      mechType: 'Mechanic',
      mechTag: 'p1',
      startTimeMs: 161000,
    },
    {
      mechName: 'Tactical Pack',
      mechType: 'StoredMechanic',
      mechTag: 'p1',
      startTimeMs: 179000,
    },
    {
      mechName: 'Adds Targetable',
      mechType: 'Mechanic',
      mechTag: 'p1',
      startTimeMs: 190000,
    },
    {
      mechName: 'Ravenous Saber',
      mechType: 'Raidwide',
      mechTag: 'p1',
      startTimeMs: 260000,
    },
    {
      mechName: 'Terrestrial Rage',
      mechType: 'Mechanic',
      mechTag: 'p1',
      startTimeMs: 281000,
    },
    {
      mechName: 'Reign + Heads',
      mechType: 'Mechanic',
      mechTag: 'p1',
      startTimeMs: 307000,
    },
    {
      mechName: 'Great Divide',
      mechType: 'Tankbuster',
      mechTag: 'p1',
      startTimeMs: 326000,
    },
    {
      mechName: 'Beckon Moonlight',
      mechType: 'StoredMechanic',
      mechTag: 'p1',
      startTimeMs: 341000,
    },
    {
      mechName: 'Moonlight #1',
      mechType: 'Mechanic',
      mechTag: 'p1',
      startTimeMs: 353000,
    },
    {
      mechName: 'Moonlight #2',
      mechType: 'Mechanic',
      mechTag: 'p1',
      startTimeMs: 361000,
    },
    {
      mechName: 'Wind/Stonefang',
      mechType: 'Mechanic',
      mechTag: 'p1',
      startTimeMs: 371000,
    },
    {
      mechName: 'Tracking Tremors',
      mechType: 'Raidwide',
      mechTag: 'p1',
      startTimeMs: 380000,
    },
    {
      mechName: 'Extraplanar Pursuit',
      mechType: 'Raidwide',
      mechTag: 'p1',
      startTimeMs: 394000,
    },
    {
      mechName: 'Extraplanar Pursuit',
      mechType: 'Raidwide',
      mechTag: 'p1',
      startTimeMs: 404000,
    },
    {
      mechName: 'Enrage',
      mechType: 'Enrage',
      mechTag: 'p1',
      startTimeMs: 408000,
    },
    {
      mechName: 'Cutscene',
      mechType: 'Start',
      mechTag: 'p2',
      startTimeMs: 0,
    },
    {
      mechName: 'Boss Targetable',
      mechType: 'Start',
      mechTag: 'p2',
      startTimeMs: 45000,
    },
    {
      mechName: 'Quake III',
      mechType: 'Raidwide',
      mechTag: 'p2',
      startTimeMs: 58000,
    },
    {
      mechName: 'Ultraviolent Ray 1',
      mechType: 'Mechanic',
      mechTag: 'p2',
      startTimeMs: 70000,
    },
    {
      mechName: 'Twinbite',
      mechType: 'Tankbuster',
      mechTag: 'p2',
      startTimeMs: 81000,
    },
    {
      mechName: `Hero's Blow`,
      mechType: 'Mechanic',
      mechTag: 'p2',
      startTimeMs: 94000,
    },
    {
      mechName: `Ultraviolent Ray 2`,
      mechType: 'Mechanic',
      mechTag: 'p2',
      startTimeMs: 104000,
    },
    {
      mechName: `Quake III`,
      mechType: 'Raidwide',
      mechTag: 'p2',
      startTimeMs: 115000,
    },
    {
      mechName: `Mooncleaver`,
      mechType: 'Mechanic',
      mechTag: 'p2',
      startTimeMs: 126000,
    },
    {
      mechName: `Prowling Gale`,
      mechType: 'Mechanic',
      mechTag: 'p2',
      startTimeMs: 152000,
    },
    {
      mechName: `Twofold Tempest #1`,
      mechType: 'Mechanic',
      mechTag: 'p2',
      startTimeMs: 163000,
    },
    {
      mechName: `Twofold Tempest #2`,
      mechType: 'Mechanic',
      mechTag: 'p2',
      startTimeMs: 170000,
    },
    {
      mechName: `Twofold Tempest #3`,
      mechType: 'Mechanic',
      mechTag: 'p2',
      startTimeMs: 177000,
    },
    {
      mechName: `Twofold Tempest #4`,
      mechType: 'Mechanic',
      mechTag: 'p2',
      startTimeMs: 184000,
    },
    {
      mechName: `Champion's Circuit`,
      mechType: 'Mechanic',
      mechTag: 'p2',
      startTimeMs: 208000,
    },
    {
      mechName: `Quake III`,
      mechType: 'Raidwide',
      mechTag: 'p2',
      startTimeMs: 236000,
    },
    {
      mechName: `Ultraviolent Ray 3`,
      mechType: 'Mechanic',
      mechTag: 'p2',
      startTimeMs: 252000,
    },
    {
      mechName: 'Twinbite',
      mechType: 'Tankbuster',
      mechTag: 'p2',
      startTimeMs: 263000,
    },
    {
      mechName: `Lone Wolf's Lament`,
      mechType: 'Mechanic',
      mechTag: 'p2',
      startTimeMs: 284000,
    },
    {
      mechName: `Hero's Blow`,
      mechType: 'Mechanic',
      mechTag: 'p2',
      startTimeMs: 312000,
    },
    {
      mechName: `Ultraviolent Ray 4`,
      mechType: 'Mechanic',
      mechTag: 'p2',
      startTimeMs: 326000,
    },
    {
      mechName: `Howling Eight 1`,
      mechType: 'Mechanic',
      mechTag: 'p2',
      startTimeMs: 341000,
    },
    {
      mechName: `Mooncleaver 1`,
      mechType: 'Mechanic',
      mechTag: 'p2',
      startTimeMs: 352000,
    },
    {
      mechName: `Howling Eight 2`,
      mechType: 'Mechanic',
      mechTag: 'p2',
      startTimeMs: 360000,
    },
    {
      mechName: `Mooncleaver 2`,
      mechType: 'Mechanic',
      mechTag: 'p2',
      startTimeMs: 372000,
    },
    {
      mechName: `Howling Eight 3`,
      mechType: 'Mechanic',
      mechTag: 'p2',
      startTimeMs: 380000,
    },
    {
      mechName: `Mooncleaver 3`,
      mechType: 'Mechanic',
      mechTag: 'p2',
      startTimeMs: 392000,
    },
    {
      mechName: `Howling Eight 4`,
      mechType: 'Mechanic',
      mechTag: 'p2',
      startTimeMs: 400000,
    },
    {
      mechName: `Mooncleaver 4`,
      mechType: 'Mechanic',
      mechTag: 'p2',
      startTimeMs: 412000,
    },
    {
      mechName: `Howling Eight 5`,
      mechType: 'Mechanic',
      mechTag: 'p2',
      startTimeMs: 420000,
    },
    {
      mechName: 'Enrage',
      mechType: 'Enrage',
      mechTag: 'p2',
      startTimeMs: 438000,
    },
]

const feringDecay: StratRecord = {
    'start': {
        'description': 'H/M West, T/R East, G1 N, G2 S\nRotate with line AOEs',
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
                description: 'Ranged without AOEs can stay between melee AOEs to give more space',
                imageUrl: './m8s/p1/fer-decay-start.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Ranged without AOEs can stay between melee AOEs to give more space',
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
                description: 'Ranged without AOEs can stay between melee AOEs to give more space',
                imageUrl: './m8s/p1/fer-decay-start.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Ranged without AOEs can stay between melee AOEs to give more space',
                imageUrl: './m8s/p1/fer-decay-start.webp',
        },
    },
    'spreads': {
        'description': 'Second spreads resolve with third line AOE\nMelee Close, Ranged Far',
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
                description: 'Ranged without AOEs can stay between melee AOEs to give more space',
                imageUrl: './m8s/p1/fer-decay-spreads.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Ranged without AOEs can stay between melee AOEs to give more space',
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
                description: 'Ranged without AOEs can stay between melee AOEs to give more space',
                imageUrl: './m8s/p1/fer-decay-spreads.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Ranged without AOEs can stay between melee AOEs to give more space',
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
        'description': '1 or 2 marker is RELATIVE/NEW NORTH',
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

const fullRinonTerrestrial: StratRecord = {
  'spreads1': {
      'description': 'Wall Laser is RELATIVE/NEW NORTH\nStack South',
      'MT': {
              role: 'Tank',
              party: 1,
              description: 'Left + Inner',
              imageUrl: './m8s/p1/rinon-terrestrial-1.webp',
      },
      'OT': {
              role: 'Tank',
              party: 2,
              description: 'Right + Inner',
              imageUrl: './m8s/p1/rinon-terrestrial-1.webp',
      },
      'H1': {
              role: 'Healer',
              party: 1,
              description: 'Left + Outer',
              imageUrl: './m8s/p1/rinon-terrestrial-1.webp',
      },
      'H2': {
              role: 'Healer',
              party: 2,
              description: 'Right + Outer',
              imageUrl: './m8s/p1/rinon-terrestrial-1.webp',
      },
      'M1': {
              role: 'Melee',
              party: 1,
              description: 'Left + Inner',
              imageUrl: './m8s/p1/rinon-terrestrial-1.webp',
      },
      'M2': {
              role: 'Melee',
              party: 2,
              description: 'Right + Inner',
              imageUrl: './m8s/p1/rinon-terrestrial-1.webp',
      },
      'R1': {
              role: 'Ranged',
              party: 1,
              description: 'Left + Outer',
              imageUrl: './m8s/p1/rinon-terrestrial-1.webp',
      },
      'R2': {
              role: 'Ranged',
              party: 2,
              description: 'Right + Outer',
              imageUrl: './m8s/p1/rinon-terrestrial-1.webp',
      },
  },
  'stack1': {
      'description': 'Center, a couple steps towards safe lane',
  },
  'spreads2': {
      'description': 'Stack will be at the previous new north\nRotate CW if needed\nG1 Left, G2 Right',
      'MT': {
              role: 'Tank',
              party: 1,
              description: 'Left + Close',
              imageUrl: './m8s/p1/rinon-terrestrial-2.webp',
      },
      'OT': {
              role: 'Tank',
              party: 2,
              description: 'Right + Close',
              imageUrl: './m8s/p1/rinon-terrestrial-2.webp',
      },
      'H1': {
              role: 'Healer',
              party: 1,
              description: 'Left + Far',
              imageUrl: './m8s/p1/rinon-terrestrial-2.webp',
      },
      'H2': {
              role: 'Healer',
              party: 2,
              description: 'Right + Far',
              imageUrl: './m8s/p1/rinon-terrestrial-2.webp',
      },
      'M1': {
              role: 'Melee',
              party: 1,
              description: 'Left + Close',
              imageUrl: './m8s/p1/rinon-terrestrial-2.webp',
      },
      'M2': {
              role: 'Melee',
              party: 2,
              description: 'Right + Close',
              imageUrl: './m8s/p1/rinon-terrestrial-2.webp',
      },
      'R1': {
              role: 'Ranged',
              party: 1,
              description: 'Left + Far',
              imageUrl: './m8s/p1/rinon-terrestrial-2.webp',
      },
      'R2': {
              role: 'Ranged',
              party: 2,
              description: 'Right + Far',
              imageUrl: './m8s/p1/rinon-terrestrial-2.webp',
      },
  },
  'stack2': {
      'description': 'Stack on new north',
  },
}

const halfRinonTerrestrial: StratRecord = {
  'spreads1': {
      'description': 'Wall Laser is RELATIVE/NEW NORTH\nStack South',
      'MT': {
              role: 'Tank',
              party: 1,
              description: 'Left + Inner',
              imageUrl: './m8s/p1/rinon-terrestrial-1.webp',
      },
      'OT': {
              role: 'Tank',
              party: 2,
              description: 'Right + Inner',
              imageUrl: './m8s/p1/rinon-terrestrial-1.webp',
      },
      'H1': {
              role: 'Healer',
              party: 1,
              description: 'Left + Outer',
              imageUrl: './m8s/p1/rinon-terrestrial-1.webp',
      },
      'H2': {
              role: 'Healer',
              party: 2,
              description: 'Right + Outer',
              imageUrl: './m8s/p1/rinon-terrestrial-1.webp',
      },
      'M1': {
              role: 'Melee',
              party: 1,
              description: 'Left + Inner',
              imageUrl: './m8s/p1/rinon-terrestrial-1.webp',
      },
      'M2': {
              role: 'Melee',
              party: 2,
              description: 'Right + Inner',
              imageUrl: './m8s/p1/rinon-terrestrial-1.webp',
      },
      'R1': {
              role: 'Ranged',
              party: 1,
              description: 'Left + Outer',
              imageUrl: './m8s/p1/rinon-terrestrial-1.webp',
      },
      'R2': {
              role: 'Ranged',
              party: 2,
              description: 'Right + Outer',
              imageUrl: './m8s/p1/rinon-terrestrial-1.webp',
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
        'description': 'Spreads RMMR G1 Left/G2 Right facing boss',
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
        'description': 'Spreads RMMR G1 Left/G2 Right facing boss',
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
    'champions': {
        'description': 'Reset to South\nCW (Orange): Sides Donut In Out In\nCCW (Blue): Sides In Out In Donut',
        'imageUrl': './m8s/p2/toxic-champions.webp'
    },
    'enrage': {
        'description': 'Start South, go Clockwise\nParty Stack, Tank Invuln, Tanks Share, Tank Invuln, Party Stack',
        'imageUrl': './m8s/p2/toxic-enrage.webp'
    },
}

const originalTwofold: StratRecord = {
    'gale': {
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'SW platform tower w/ M1',
                imageUrl: './m8s/p2/gale-original.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'SE platform tower w/ M2',
                imageUrl: './m8s/p2/gale-original.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'NW platform tower w/ R1',
                imageUrl: './m8s/p2/gale-original.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'NE platform tower w/ R2',
                imageUrl: './m8s/p2/gale-original.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'SW platform tower w/ MT',
                imageUrl: './m8s/p2/gale-original.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'SE platform tower w/ OT',
                imageUrl: './m8s/p2/gale-original.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'NW platform tower w/ H1',
                imageUrl: './m8s/p2/gale-original.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'NE platform tower w/ H2',
                imageUrl: './m8s/p2/gale-original.webp',
        },
    },
    'twofold-tethers': {
        'description': 'DPS handle tethers\nTether baits start on SW or SE\nM1/MT R1/H1 R2/H2 M2/OT Pairs',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Take tether bait far with M1 on SW platform',
                imageUrl: './m8s/p2/twofold-tethers-original.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Take tether bait far with M2 on SE platform',
                imageUrl: './m8s/p2/twofold-tethers-original.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Take tether bait far with R1 on NW platform',
                imageUrl: './m8s/p2/twofold-tethers-original.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Take tether bait far with R2 on NE platform',
                imageUrl: './m8s/p2/twofold-tethers-original.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '1st or 4th Tether\nTake tether from R1 and bait far with MT on SW platform\nHand tether off to R1 (hop platforms if R1 not already there)',
                imageUrl: './m8s/p2/twofold-tethers-original.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '1st or 4th Tether\nTake tether from R2 and bait far with OT on SE platform\nHand tether off to R2 (hop platforms if R2 not already there)',
                imageUrl: './m8s/p2/twofold-tethers-original.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '2nd or 3rd Tether\nTeleport to SW and hand tether off to M1 if needed at start\nTake tether from M1 or M2 and bait far with H1 on NW platform\nHand tether off to R2 or M1',
                imageUrl: './m8s/p2/twofold-tethers-original.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '2nd or 3rd Tether\nTeleport to SE and hand tether off to M2 if needed at start\nTake tether from R1 or M2 and bait far with H2 on NE platform\nHand tether off to M2 or R1',
                imageUrl: './m8s/p2/twofold-tethers-original.webp',
        },
    },
    'twofold-lines': {
        'MT': {
                role: 'Tank',
                party: 1,
                description: '2nd or 3rd Line\nMove close to bait line when tether is NE',
                imageUrl: './m8s/p2/twofold-lines-original.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '2nd or 3rd Line\nMove close to bait line when tether is NW',
                imageUrl: './m8s/p2/twofold-lines-original.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '1st or 4th Line\nMove close to bait line when tether is SE',
                imageUrl: './m8s/p2/twofold-lines-original.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '1st or 4th Line\nMove close to bait line when tether is SW',
                imageUrl: './m8s/p2/twofold-lines-original.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '2nd or 3rd Line\nReset to SW platform\nMove close to bait line when tether is NE',
                imageUrl: './m8s/p2/twofold-lines-original.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '2nd or 3rd Line\nReset to SE platform\nMove close to bait line when tether is NW',
                imageUrl: './m8s/p2/twofold-lines-original.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '1st or 4th Line\nReset to NW platform\nMove close to bait line when tether is SE',
                imageUrl: './m8s/p2/twofold-lines-original.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '1st or 4th Line\nReset to NE platform\nMove close to bait line when tether is SW',
                imageUrl: './m8s/p2/twofold-lines-original.webp',
        },
    },
}

const casterseTwofold: StratRecord = {
    'gale': {
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'SW platform tower w/ M1',
                imageUrl: './m8s/p2/gale-caster-se.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'SE platform tower w/ M2',
                imageUrl: './m8s/p2/gale-caster-se.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'NW platform tower w/ R1',
                imageUrl: './m8s/p2/gale-caster-se.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'NE platform tower w/ R2',
                imageUrl: './m8s/p2/gale-caster-se.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'SW platform tower w/ MT',
                imageUrl: './m8s/p2/gale-caster-se.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'NE platform tower w/ H2',
                imageUrl: './m8s/p2/gale-caster-se.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'NW platform tower w/ H1',
                imageUrl: './m8s/p2/gale-caster-se.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'SE platform tower w/ OT',
                imageUrl: './m8s/p2/gale-caster-se.webp',
        },
    },
    'twofold-tethers': {
        'description': 'DPS handle tethers\nTether baits start on SW or SE\nM1/MT R1/H1 M2/H2 R2/OT Pairs\nNote that M2 and R2 swap for better caster movement',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Take tether bait far with M1 on SW platform',
                imageUrl: './m8s/p2/twofold-tethers-caster-se.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Take tether bait far with M2 on SE platform',
                imageUrl: './m8s/p2/twofold-tethers-caster-se.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Take tether bait far with R1 on NW platform',
                imageUrl: './m8s/p2/twofold-tethers-caster-se.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Take tether bait far with R2 on NE platform',
                imageUrl: './m8s/p2/twofold-tethers-caster-se.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '1st or 4th Tether\nTake tether from R1 and bait far with MT on SW platform\nHand tether off to R1 (hop platforms if R1 not already there)',
                imageUrl: './m8s/p2/twofold-tethers-caster-se.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '2nd or 3rd Tether\nTeleport to SE and hand tether off to R2 if needed at start\nTake tether from R1 or R2 and bait far with H2 on NE platform\nHand tether off to R2 or R1',
                imageUrl: './m8s/p2/twofold-tethers-caster-se.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '2nd or 3rd Tether\nTeleport to SW and hand tether off to M1 if needed at start\nTake tether from M1 or M2 and bait far with H1 on NW platform\nHand tether off to M2 or M1',
                imageUrl: './m8s/p2/twofold-tethers-caster-se.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '1st or 4th Tether\nTake tether from M2 and bait far with OT on SE platform\nHand tether off to M2 (hop platforms if M2 not already there)',
                imageUrl: './m8s/p2/twofold-tethers-caster-se.webp',
        },
    },
    'twofold-lines': {
        'MT': {
                role: 'Tank',
                party: 1,
                description: '2nd or 3rd Line\nMove close to bait line when tether is NE',
                imageUrl: './m8s/p2/twofold-lines-caster-se.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '2nd or 3rd Line\nMove close to bait line when tether is NW',
                imageUrl: './m8s/p2/twofold-lines-caster-se.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '1st or 4th Line\nMove close to bait line when tether is SE',
                imageUrl: './m8s/p2/twofold-lines-caster-se.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '1st or 4th Line\nMove close to bait line when tether is SW',
                imageUrl: './m8s/p2/twofold-lines-caster-se.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '2nd or 3rd Line\nReset to SW platform\nMove close to bait line when tether is NE',
                imageUrl: './m8s/p2/twofold-lines-caster-se.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '1st or 4th Line\nReset to NE platform\nMove close to bait line when tether is SW',
                imageUrl: './m8s/p2/twofold-lines-caster-se.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '1st or 4th Line\nReset to NW platform\nMove close to bait line when tether is SE',
                imageUrl: './m8s/p2/twofold-lines-caster-se.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '2nd or 3rd Line\nReset to SE platform\nMove close to bait line when tether is NW',
                imageUrl: './m8s/p2/twofold-lines-caster-se.webp',
        },
    },
}

const toxicLament: StratRecord = {
    'start': {
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Start Northwest',
                imageUrl: './m8s/p2/toxic-lament-start.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Start Northwest',
                imageUrl: './m8s/p2/toxic-lament-start.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Start South',
                imageUrl: './m8s/p2/toxic-lament-start.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Start South',
                imageUrl: './m8s/p2/toxic-lament-start.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Start Southeast',
                imageUrl: './m8s/p2/toxic-lament-start.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Start Southeast',
                imageUrl: './m8s/p2/toxic-lament-start.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Start Southeast',
                imageUrl: './m8s/p2/toxic-lament-start.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Start Southeast',
                imageUrl: './m8s/p2/toxic-lament-start.webp',
        },
    },
    'tethers': {
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Blue: Take solo tower SW, Let DPS move to SE first\nGreen: Take 2-person tower NW or NE with DPS',
                imageUrl: './m8s/p2/toxic-lament-tethers.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Blue: Take solo tower SW, let DPS move to SE first\nGreen: Take 2-person tower NW or NE with DPS',
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
                description: 'Blue, Healer: Take solo tower NW or NE\nBlue, Tank: Take solo tower SE\nGreen, Healer: Take 3-person tower S\nGreen, Tank: Take 2-person tower NW or NE',
                imageUrl: './m8s/p2/toxic-lament-tethers.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Blue, Healer: Take solo tower NW or NE\nBlue, Tank: Take solo tower SE\nGreen, Healer: Take 3-person tower S\nGreen, Tank: Take 2-person tower NW or NE',
                imageUrl: './m8s/p2/toxic-lament-tethers.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Blue, Healer: Take solo tower NW or NE\nBlue, Tank: Take solo tower SE\nGreen, Healer: Take 3-person tower S\nGreen, Tank: Take 2-person tower NW or NE',
                imageUrl: './m8s/p2/toxic-lament-tethers.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Blue, Healer: Take solo tower NW or NE\nBlue, Tank: Take solo tower SE\nGreen, Healer: Take 3-person tower S\nGreen, Tank: Take 2-person tower NW or NE',
                imageUrl: './m8s/p2/toxic-lament-tethers.webp',
        },
    },
}

const rinonLament: StratRecord = {
    'start': {
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Start Northwest',
                imageUrl: './m8s/p2/rinon-lament-start.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Start Northwest',
                imageUrl: './m8s/p2/rinon-lament-start.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Start South',
                imageUrl: './m8s/p2/rinon-lament-start.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Start South',
                imageUrl: './m8s/p2/rinon-lament-start.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Start East',
                imageUrl: './m8s/p2/rinon-lament-start.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Start East',
                imageUrl: './m8s/p2/rinon-lament-start.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Start East',
                imageUrl: './m8s/p2/rinon-lament-start.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Start East',
                imageUrl: './m8s/p2/rinon-lament-start.webp',
        },
    },
    'tethers': {
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Blue: Immediately move W and take solo tower\nGreen: Immediately move NE, then take 2-person tower NE or NW',
                imageUrl: './m8s/p2/rinon-lament-tethers.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Blue: Immediately move W and take solo tower\nGreen: Immediately move NE, then take 2-person tower NE or NW',
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
                description: 'Blue, Healer: Immediately move NE, then take solo tower NE or NW\nBlue, Tank: Take solo tower E\nGreen, Healer: Immediately move S and take 3-person tower\nGreen, Tank: Immediately move NE, then take 2-person tower NE or NW',
                imageUrl: './m8s/p2/rinon-lament-tethers.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Blue, Healer: Immediately move NE, then take solo tower NE or NW\nBlue, Tank: Take solo tower E\nGreen, Healer: Immediately move S and take 3-person tower\nGreen, Tank: Immediately move NE, then take 2-person tower NE or NW',
                imageUrl: './m8s/p2/rinon-lament-tethers.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Blue, Healer: Immediately move NE, then take solo tower NE or NW\nBlue, Tank: Take solo tower E\nGreen, Healer: Immediately move S and take 3-person tower\nGreen, Tank: Immediately move NE, then take 2-person tower NE or NW',
                imageUrl: './m8s/p2/rinon-lament-tethers.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Blue, Healer: Immediately move NE, then take solo tower NE or NW\nBlue, Tank: Take solo tower E\nGreen, Healer: Immediately move S and take 3-person tower\nGreen, Tank: Immediately move NE, then take 2-person tower NE or NW',
                imageUrl: './m8s/p2/rinon-lament-tethers.webp',
        },
    },
}

const rinonUV4: StratRecord = {
    'uv4': {
        'description': 'DPS from North + Tanks start NW\nDPS from South + Healers start S\nConga with Supports First/Last\nEast-most marker always goes East',
        'imageUrl': './m8s/p2/rinon-uv4.webp'
    },
}

const toxicUV4: StratRecord = {
    'uv4': {
        'description': 'Try to get back to SW/SE\nUse eyes and YOLO',
        'imageUrl': './m8s/p2/toxic-uv4.webp'
    },
}

const decayStrats = {'toxic': toxicDecay, 'fer': feringDecay};
const terrestrialStrats = {'clock': clockTerrestrial, 'dn': dnTerrestrial, 'toxic': toxicTerrestrial, 'fullr': fullRinonTerrestrial, 'halfr': halfRinonTerrestrial};
const moonlightStrats = {'quad': quadMoonlight, 'toxic': toxicMoonlight};
const p2Strats = {'toxic': toxicP2};
const twofoldStrats = {'original': originalTwofold, 'casterse': casterseTwofold};
const lamentStrats = {'toxic': toxicLament, 'rinon': rinonLament}
const uv4Strats = {'toxic': toxicUV4, 'rinon': rinonUV4}

const allP1: PhaseStrats[] = [
    {
        phaseName: 'Windfang + Stonefang',
        tag: 'p1',
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
        tag: 'p1',
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
        phaseName: 'Millennial Decay',
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
        tag: 'p1',
        description: '21/36/54 Timers\nYellow (Square) cleanse first after line\nGreen (Circle) cleanse when vuln drops',
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
        tag: 'twofold',
        mechs: [
            {
                mechanic: 'Towers',
                description: getStringObject(twofoldStrats, 'gale', 'description'),
                strats: getStratArray(twofoldStrats, 'gale'),
            },
        ]
    },
    {
        phaseName: `Twofold Tempest`,
        tag: 'twofold',
        description: getStringObject(twofoldStrats, 'twofold-tethers', 'description'),
        mechs: [
            {
                mechanic: 'Tethers',
                strats: getStratArray(twofoldStrats, 'twofold-tethers'),
            },
            {
                mechanic: 'Line AOEs',
                strats: getStratArray(twofoldStrats, 'twofold-lines'),
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
        mechs: [
            {
                mechanic: 'Start',
                description: getStringObject(lamentStrats, 'start', 'description'),
                strats: getStratArray(lamentStrats, 'start'),
            },
            {
                mechanic: 'Tethers',
                description: getStringObject(lamentStrats, 'tethers', 'description'),
                strats: getStratArray(lamentStrats, 'tethers'),
            },
        ]
    },
    {
        phaseName: `Ultraviolent Ray 4`,
        tag: 'uv4',
        description: getStringObject(uv4Strats, 'uv4', 'description'),
        imageUrl: getStringObject(uv4Strats, 'uv4', 'imageUrl'),
    },
    {
        phaseName: `Enrage`,
        tag: 'p2',
        description: getStringObject(p2Strats, 'enrage', 'description'),
        imageUrl: getStringObject(p2Strats, 'enrage', 'imageUrl'),
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

const pbr: Strat = {
    stratName: 'pb-r',
    description: 'Pastebin + Rinon',
    stratUrl: 'https://pastebin.com/xT2gAw2R',
    strats: [
        ...allP1,
        ...allP2,
    ]
}

const r84ddog: Strat = {
  stratName: '84ddog',
  description: '',
  stratUrl: {
    '84d': 'https://raidplan.io/plan/B5Q3Mk62YKuTy84d',
    'DOG': 'https://raidplan.io/plan/9M-1G-mmOaaroDOG'
  },
  strats: [
      ...allP1,
      ...allP2,
  ]
}
