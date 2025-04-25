import type { PageLoad } from "./$types";

export const load: PageLoad = ({params}) => {
    return {
        strats: [toxicStrat, uptimeStrat],
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
    description?: string;
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

export interface TimelineItem {
    mechName: string;
    mechType: string;
    startTimeMs: number;
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
        startTimeMs: 0,
    },
    {
        mechName: 'Brutal Impact',
        mechType: 'Raidwide',
        startTimeMs: 10000,
    },
    {
        mechName: 'Stoneringer',
        mechType: 'StoredMechanic',
        startTimeMs: 21000,
    },
    {
        mechName: 'Smash Here/There',
        mechType: 'Tankbuster',
        startTimeMs: 33000,
    },
    {
        mechName: 'Spore Sac',
        mechType: 'Mechanic',
        startTimeMs: 48000,
    },
    {
        mechName: 'Sinister Seeds',
        mechType: 'Mechanic',
        startTimeMs: 53000,
    },
    {
        mechName: 'Quarry Swamp',
        mechType: 'Mechanic',
        startTimeMs: 93000,
    },
    {
        mechName: 'Gigaflare',
        mechType: 'Raidwide',
        startTimeMs: 105000,
    },
    {
        mechName: 'Stoneringer',
        mechType: 'StoredMechanic',
        startTimeMs: 107000,
    },
    {
        mechName: 'Smash Here/There',
        mechType: 'Tankbuster',
        startTimeMs: 118000,
    },
    {
        mechName: 'Pulp Smash',
        mechType: 'Mechanic',
        startTimeMs: 127000,
    },
    {
        mechName: 'Neo Bombarian Special',
        mechType: 'Raidwide',
        startTimeMs: 148000,
    },
    {
        mechName: 'Stoneringer',
        mechType: 'StoredMechanic',
        startTimeMs: 168000,
    },
    {
        mechName: 'Brutish Swing',
        mechType: 'Mechanic',
        startTimeMs: 184000,
    },
    {
        mechName: 'Revenge of the Vines',
        mechType: 'Raidwide',
        startTimeMs: 195000,
    },
    {
        mechName: 'Thorny Deathmatch',
        mechType: 'Mechanic',
        startTimeMs: 203000,
    },
    {
        mechName: 'Stoneringer',
        mechType: 'StoredMechanic',
        startTimeMs: 208000,
    },
    {
        mechName: 'Abominable Blink',
        mechType: 'Mechanic',
        startTimeMs: 222000,
    },
    {
        mechName: 'Sporesplosion',
        mechType: 'Mechanic',
        startTimeMs: 228000,
    },
    {
        mechName: 'Brutish Swing',
        mechType: 'Mechanic',
        startTimeMs: 247000,
    },
    {
        mechName: 'Revenge of the Vines',
        mechType: 'Raidwide',
        startTimeMs: 258000,
    },
    {
        mechName: 'Demolition Deathmatch',
        mechType: 'Mechanic',
        startTimeMs: 264000,
    },
    {
        mechName: 'Abominable Blink',
        mechType: 'Mechanic',
        startTimeMs: 280000,
    },
    {
        mechName: 'Strange Seeds',
        mechType: 'Mechanic',
        startTimeMs: 288000,
    },
    {
        mechName: 'Stoneringer',
        mechType: 'StoredMechanic',
        startTimeMs: 294000,
    },
    {
        mechName: 'Killer Seeds',
        mechType: 'Mechanic',
        startTimeMs: 320000,
    },
    {
        mechName: 'Brutish Swing',
        mechType: 'Mechanic',
        startTimeMs: 330000,
    },
    {
        mechName: 'Revenge of the Vines',
        mechType: 'Raidwide',
        startTimeMs: 340000,
    },
    {
        mechName: 'Powerslam',
        mechType: 'Raidwide',
        startTimeMs: 353000,
    },
    {
        mechName: 'Brutal Impact x7',
        mechType: 'Raidwide',
        startTimeMs: 382000,
    },
    {
        mechName: 'Stoneringer 2',
        mechType: 'StoredMechanic',
        startTimeMs: 394000,
    },
    {
        mechName: 'Brutish Swing',
        mechType: 'Mechanic',
        startTimeMs: 409000,
    },
    {
        mechName: 'Lashing Lariat',
        mechType: 'Mechanic',
        startTimeMs: 416000,
    },
    {
        mechName: 'Brutish Swing',
        mechType: 'Mechanic',
        startTimeMs: 425000,
    },
    {
        mechName: 'Slaminator',
        mechType: 'Mechanic',
        startTimeMs: 434000,
    },
    {
        mechName: 'Brutal Impact x8',
        mechType: 'Raidwide',
        startTimeMs: 443000,
    },
    {
        mechName: 'Stoneringer',
        mechType: 'StoredMechanic',
        startTimeMs: 453000,
    },
    {
        mechName: 'Smash Here/There',
        mechType: 'Tankbuster',
        startTimeMs: 465000,
    },
    {
        mechName: 'Debris Deathmatch',
        mechType: 'Mechanic',
        startTimeMs: 478000,
    },
    {
        mechName: 'Spore Sac',
        mechType: 'Mechanic',
        startTimeMs: 488000,
    },
    {
        mechName: 'Killer Seeds',
        mechType: 'Mechanic',
        startTimeMs: 497000,
    },
    {
        mechName: 'Quarry Swamp',
        mechType: 'Mechanic',
        startTimeMs: 514000,
    },
    {
        mechName: 'Sinister Seeds',
        mechType: 'Mechanic',
        startTimeMs: 525000,
    },
    {
        mechName: 'Pulp Smash',
        mechType: 'Mechanic',
        startTimeMs: 543000,
    },
    {
        mechName: 'Brutal Impact x8',
        mechType: 'Raidwide',
        startTimeMs: 553000,
    },
    {
        mechName: 'Stoneringer 2',
        mechType: 'StoredMechanic',
        startTimeMs: 570000,
    },
    {
        mechName: 'Strange Seeds',
        mechType: 'Mechanic',
        startTimeMs: 582000,
    },
    {
        mechName: 'Tendrils + Brutish',
        mechType: 'Mechanic',
        startTimeMs: 593000,
    },
    {
        mechName: 'Lashing Lariat',
        mechType: 'Mechanic',
        startTimeMs: 598000,
    },
    {
        mechName: 'Strange Seeds',
        mechType: 'Mechanic',
        startTimeMs: 602000,
    },
    {
        mechName: 'Tendrils + Brutish',
        mechType: 'Mechanic',
        startTimeMs: 607000,
    },
    {
        mechName: 'Slaminator',
        mechType: 'Mechanic',
        startTimeMs: 614000,
    },
    {
        mechName: 'Stoneringer',
        mechType: 'StoredMechanic',
        startTimeMs: 620000,
    },
    {
        mechName: 'Smash Here/There',
        mechType: 'Tankbuster',
        startTimeMs: 630000,
    },
    {
        mechName: 'Brutal Impact x8',
        mechType: 'Raidwide',
        startTimeMs: 640000,
    },
    {
        mechName: 'Enrage',
        mechType: 'Enrage',
        startTimeMs: 661100,
    },
]

const toxicP2: Record<string, string | Record<string, string | PlayerMechStrat>> = {
    'url': 'https://raidplan.io/plan/gIcsj6_cyedVQON7',
    'swing1spreads': {
        'description': 'MT M1 R1 edge of arena\nOT M2 R2 middle of arena\nHealers middle of arena',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Small safe area (edge), deep in corner',
                imageUrl: './m7s/p2/toxic-swing1-spreads.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `Large safe area (middle), close to boss on wall`,
                imageUrl: './m7s/p2/toxic-swing1-spreads.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Large safe area, far from boss, close to danger zone',
                imageUrl: './m7s/p2/toxic-swing1-spreads.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Large safe area, far from boss and danger zone',
                imageUrl: './m7s/p2/toxic-swing1-spreads.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Small safe area (edge), between tank and ranged',
                imageUrl: './m7s/p2/toxic-swing1-spreads.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Large safe area (middle), close to boss, close to cleave',
                imageUrl: './m7s/p2/toxic-swing1-spreads.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Small safe area (edge), far from boss',
                imageUrl: './m7s/p2/toxic-swing1-spreads.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Large safe area (middle), between tank and healers, far from cleave',
                imageUrl: './m7s/p2/toxic-swing1-spreads.webp',
        },
    },
    'flares': {
        'description': 'Group in corner near boss, tether away\nSwap if tank tether gets flare',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Away from boss if you get flare\nProvoke and stay on boss if no flare',
                imageUrl: './m7s/p2/toxic-flares.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `Away from boss if you get flare\nProvoke and stay on boss if no flare`,
                imageUrl: './m7s/p2/toxic-flares.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Stack in corner near boss',
                imageUrl: './m7s/p2/toxic-flares.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Stack in corner near boss',
                imageUrl: './m7s/p2/toxic-flares.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Stack in corner near boss',
                imageUrl: './m7s/p2/toxic-flares.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Stack in corner near boss',
                imageUrl: './m7s/p2/toxic-flares.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Stack in corner near boss',
                imageUrl: './m7s/p2/toxic-flares.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Stack in corner near boss',
                imageUrl: './m7s/p2/toxic-flares.webp',
        },
    },
    'swing2spreads': {
        'description': 'MT M1 R1 edge of arena\nOT M2 R2 middle of arena\nHealers middle of arena',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Small safe area (edge), deep in corner',
                imageUrl: './m7s/p2/toxic-swing2-spreads.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `Large safe area (middle), close to boss on wall`,
                imageUrl: './m7s/p2/toxic-swing2-spreads.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Large safe area, far from boss, close to danger zone',
                imageUrl: './m7s/p2/toxic-swing2-spreads.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Large safe area, far from boss and danger zone',
                imageUrl: './m7s/p2/toxic-swing2-spreads.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Small safe area (edge), between tank and ranged',
                imageUrl: './m7s/p2/toxic-swing2-spreads.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Large safe area (middle), close to boss, close to cleave',
                imageUrl: './m7s/p2/toxic-swing2-spreads.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Small safe area (edge), far from boss',
                imageUrl: './m7s/p2/toxic-swing2-spreads.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Large safe area (middle), between tank and healers, far from cleave',
                imageUrl: './m7s/p2/toxic-swing2-spreads.webp',
        },
    },
    'strangeseedsbossnorth': {
        'description': 'Alternate seed drops on Corner and next to/on inner rivets',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-bossnorth.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/toxic-seeds-bossnorth.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-bossnorth.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-bossnorth.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-bossnorth.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-bossnorth.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-bossnorth.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-bossnorth.webp',
        },
    },
    'strangeseedsnorthtethers': {
        'description': 'Caster short wall tether, Ranged long wall tether',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-tethers-bossnorth.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/toxic-seeds-tethers-bossnorth.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-tethers-bossnorth.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-tethers-bossnorth.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-tethers-bossnorth.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-tethers-bossnorth.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-tethers-bossnorth.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-tethers-bossnorth.webp',
        },
    },
    'strangeseedsnorthstacks': {
        'description': 'MT M1 left of boss, OT M2 right of boss, Healers + Ranged away from boss',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-stacks-bossnorth.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/toxic-seeds-stacks-bossnorth.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-stacks-bossnorth.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-stacks-bossnorth.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-stacks-bossnorth.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-stacks-bossnorth.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-stacks-bossnorth.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-stacks-bossnorth.webp',
        },
    },
    'strangeseedsbosssouth': {
        'description': 'Alternate seed drops on Corner and next to/on inner rivets',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-bosssouth.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/toxic-seeds-bosssouth.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-bosssouth.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-bosssouth.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-bosssouth.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-bosssouth.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-bosssouth.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-bosssouth.webp',
        },
    },
    'strangeseedssouthtethers': {
        'description': 'Caster short wall tether, Ranged long wall tether',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-tethers-bosssouth.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/toxic-seeds-tethers-bosssouth.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-tethers-bosssouth.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-tethers-bosssouth.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-tethers-bosssouth.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-tethers-bosssouth.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-tethers-bosssouth.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-tethers-bosssouth.webp',
        },
    },
    'strangeseedssouthstacks': {
        'description': 'MT M1 left of boss, OT M2 right of boss, Healers + Ranged away from boss',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-stacks-bosssouth.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/toxic-seeds-stacks-bosssouth.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-stacks-bosssouth.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-stacks-bosssouth.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-stacks-bosssouth.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-stacks-bosssouth.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-stacks-bosssouth.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/toxic-seeds-stacks-bosssouth.webp',
        },
    },
    'swing3spreads': {
        'description': 'MT M1 R1 edge of arena\nOT M2 R2 middle of arena\nHealers middle of arena',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/toxic-swing3.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/toxic-swing3.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/toxic-swing3.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/toxic-swing3.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/toxic-swing3.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/toxic-swing3.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/toxic-swing3.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/toxic-swing3.webp',
        },
    },
}

const biliP2: Record<string,Record<string, string | PlayerMechStrat>> = {
    'swing1spreads': {
        'description': 'Not specified in Bili P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Small safe area (edge), deep in corner',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `Large safe area (middle), close to boss on wall`,
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Large safe area, far from boss, close to danger zone',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Large safe area, far from boss and danger zone',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Small safe area (edge), between tank and ranged',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Large safe area (middle), close to boss, close to cleave',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Small safe area (edge), far from boss',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Large safe area (middle), between tank and healers, far from cleave',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
    },
    'flares': {
        'description': 'Not specified in Bili P2 raidplan, Alpha P2 as reference\nFlare in corner near boss, group away\nSwap if tank tether gets flare',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'In corner near boss if you get flare\nProvoke and go to opposite side of boss hitbox if no flare',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `In corner near boss if you get flare\nProvoke and go to opposite side of boss hitbox if no flare`,
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
    },
    'swing2spreads': {
        'description': 'Not specified in Bili P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Small safe area (edge), deep in corner',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `Large safe area (middle), close to boss on wall`,
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Large safe area, far from boss, close to danger zone',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Large safe area, far from boss and danger zone',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Small safe area (edge), between tank and ranged',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Large safe area (middle), close to boss, close to cleave',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Small safe area (edge), far from boss',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Large safe area (middle), between tank and healers, far from cleave',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
    },
    'strangeseedsbossnorth': {
        'description': 'Drop seeds on positions\nDodge to neighbor if needed',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
    },
    'strangeseedsnorthtethers': {
        'description': 'H1 take long wall tether, H2 take short wall tether',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
    },
    'strangeseedsnorthstacks': {
        'description': 'MT M1 left of boss\nOT M2 right of boss\nH1 R1 center of far long wall\nH2 R2 center of far short wall',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
    },
    'strangeseedsbosssouth': {
        'description': 'Drop seeds on positions\nDodge to neighbor if needed',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
    },
    'strangeseedssouthtethers': {
        'description': 'Caster short wall tether, Ranged long wall tether',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
    },
    'strangeseedssouthstacks': {
        'description': 'MT M1 left of boss, OT M2 right of boss, Healers + Ranged away from boss',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
    },
    'swing3spreads': {
        'description': 'Not specified in Bili P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle\nIf North, G1 Left G2 Right, TMHR',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
    },
}

const alphaP2: Record<string, string | Record<string, string | PlayerMechStrat>> = {
    'url': 'https://raidplan.io/plan/jtQenPvoJy7hsV-x',
    'swing1spreads': {
        'description': 'MT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Small safe area (edge), deep in corner',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `Large safe area (middle), close to boss on wall`,
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Large safe area, far from boss, close to danger zone',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Large safe area, far from boss and danger zone',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Small safe area (edge), between tank and ranged',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Large safe area (middle), close to boss, close to cleave',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Small safe area (edge), far from boss',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Large safe area (middle), between tank and healers, far from cleave',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
    },
    'flares': {
        'description': 'Flare in corner near boss, group away\nSwap if tank tether gets flare',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'In corner near boss if you get flare\nProvoke and go to opposite side of boss hitbox if no flare',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `In corner near boss if you get flare\nProvoke and go to opposite side of boss hitbox if no flare`,
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
    },
    'swing2spreads': {
        'description': 'MT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Small safe area (edge), deep in corner',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `Large safe area (middle), close to boss on wall`,
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Large safe area, far from boss, close to danger zone',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Large safe area, far from boss and danger zone',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Small safe area (edge), between tank and ranged',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Large safe area (middle), close to boss, close to cleave',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Small safe area (edge), far from boss',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Large safe area (middle), between tank and healers, far from cleave',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
    },
    'strangeseedsbossnorth': {
        'description': 'Alternate seed drops between green and red spots\nBlue spots are safe',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
    },
    'strangeseedsnorthtethers': {
        'description': 'Ranged long wall tether, Tank short wall tether',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
    },
    'strangeseedsnorthstacks': {
        'description': 'Take stacks on green spots\nDodge to any red spot',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-stacks-bossnorth.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/alpha-seeds-stacks-bossnorth.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-stacks-bossnorth.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-stacks-bossnorth.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-stacks-bossnorth.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-stacks-bossnorth.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-stacks-bossnorth.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-stacks-bossnorth.webp',
        },
    },
    'strangeseedsbosssouth': {
        'description': 'Alternate seed drops between green and red spots\nBlue spots are safe',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
    },
    'strangeseedssouthtethers': {
        'description': 'Ranged long wall tether, Healer short wall tether',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
    },
    'strangeseedssouthstacks': {
        'description': 'Take stacks on green spots\nDodge to any red spot',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-stacks-bosssouth.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/alpha-seeds-stacks-bosssouth.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-stacks-bosssouth.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-stacks-bosssouth.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-stacks-bosssouth.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-stacks-bosssouth.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-stacks-bosssouth.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-seeds-stacks-bosssouth.webp',
        },
    },
    'swing3spreads': {
        'description': 'MT M1 R1 Edge, OT M2 R2 Middle, Healers Middle\nIf North, G1 Left G2 Right, TMHR',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
    },
}

const alpha2P2: Record<string, string | Record<string, string | PlayerMechStrat>> = {
    'url': 'https://raidplan.io/plan/jtQenPvoJy7hsV-x',
    'swing1spreads': {
        'description': 'MT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Small safe area (edge), deep in corner',
                imageUrl: './m7s/p2/alpha2-swing1-spreads.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `Large safe area (middle), close to boss on wall`,
                imageUrl: './m7s/p2/alpha2-swing1-spreads.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Large safe area, far from boss, close to danger zone',
                imageUrl: './m7s/p2/alpha2-swing1-spreads.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Large safe area, far from boss and danger zone',
                imageUrl: './m7s/p2/alpha2-swing1-spreads.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Small safe area (edge), between tank and ranged',
                imageUrl: './m7s/p2/alpha2-swing1-spreads.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Large safe area (middle), close to boss, close to cleave',
                imageUrl: './m7s/p2/alpha2-swing1-spreads.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Small safe area (edge), far from boss',
                imageUrl: './m7s/p2/alpha2-swing1-spreads.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Large safe area (middle), between tank and healers, far from cleave',
                imageUrl: './m7s/p2/alpha2-swing1-spreads.webp',
        },
    },
    'flares': {
        'description': 'Flare in corner near boss, group away\nSwap if tank tether gets flare',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'In corner near boss if you get flare\nProvoke and go to opposite side of boss hitbox if no flare',
                imageUrl: './m7s/p2/alpha2-flares.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `In corner near boss if you get flare\nProvoke and go to opposite side of boss hitbox if no flare`,
                imageUrl: './m7s/p2/alpha2-flares.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha2-flares.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha2-flares.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha2-flares.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha2-flares.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha2-flares.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha2-flares.webp',
        },
    },
    'swing2spreads': {
        'description': 'MT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Small safe area (edge), deep in corner',
                imageUrl: './m7s/p2/alpha2-swing2-spreads.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `Large safe area (middle), close to boss on wall`,
                imageUrl: './m7s/p2/alpha2-swing2-spreads.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Large safe area, far from boss, close to danger zone',
                imageUrl: './m7s/p2/alpha2-swing2-spreads.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Large safe area, far from boss and danger zone',
                imageUrl: './m7s/p2/alpha2-swing2-spreads.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Small safe area (edge), between tank and ranged',
                imageUrl: './m7s/p2/alpha2-swing2-spreads.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Large safe area (middle), close to boss, close to cleave',
                imageUrl: './m7s/p2/alpha2-swing2-spreads.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Small safe area (edge), far from boss',
                imageUrl: './m7s/p2/alpha2-swing2-spreads.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Large safe area (middle), between tank and healers, far from cleave',
                imageUrl: './m7s/p2/alpha2-swing2-spreads.webp',
        },
    },
    'strangeseedsbossnorth': {
        'description': 'Alternate seed drops between green and red spots\nBlue spots are safe\nBoth Healers take tethers',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha2-seeds-boss-north.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/alpha2-seeds-boss-north.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha2-seeds-boss-north.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha2-seeds-boss-north.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha2-seeds-boss-north.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha2-seeds-boss-north.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha2-seeds-boss-north.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha2-seeds-boss-north.webp',
        },
    },
    'strangeseedsnorthstacks': {
        'description': 'Take stacks on green spots\nDodge to any red spot',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
    },
    'strangeseedsbosssouth': {
        'description': 'Alternate seed drops between green and red spots\nBlue spots are safe\nHealer take far tether, Tank take close tether',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha2-seeds-setup.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/alpha2-seeds-setup.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha2-seeds-setup.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha2-seeds-setup.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha2-seeds-setup.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha2-seeds-setup.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha2-seeds-setup.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha2-seeds-setup.webp',
        },
    },
    'strangeseedssouthstacks': {
        'description': 'Take stacks on green spots\nDodge to any red spot',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
    },
    'swing3spreads': {
        'description': 'MT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha2-swing3-spreads.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/alpha2-swing3-spreads.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha2-swing3-spreads.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha2-swing3-spreads.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha2-swing3-spreads.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha2-swing3-spreads.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha2-swing3-spreads.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha2-swing3-spreads.webp',
        },
    },
}

const zenithP2: Record<string, string | Record<string, string | PlayerMechStrat>> = {
    'url': 'https://raidplan.io/plan/2Y1HT42osFhYD6Pe',
    'swing1spreads': {
        'description': 'Not specified in Zenith P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Small safe area (edge), deep in corner',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `Large safe area (middle), close to boss on wall`,
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Large safe area, far from boss, close to danger zone',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Large safe area, far from boss and danger zone',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Small safe area (edge), between tank and ranged',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Large safe area (middle), close to boss, close to cleave',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Small safe area (edge), far from boss',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Large safe area (middle), between tank and healers, far from cleave',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
    },
    'flares': {
        'description': 'Not specified in Zenith P2 raidplan, Alpha P2 as reference\nFlare in corner near boss, group away\nSwap if tank tether gets flare',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'In corner near boss if you get flare\nProvoke and go to opposite side of boss hitbox if no flare',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `In corner near boss if you get flare\nProvoke and go to opposite side of boss hitbox if no flare`,
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
    },
    'swing2spreads': {
        'description': 'Not specified in Zenith P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Small safe area (edge), deep in corner',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `Large safe area (middle), close to boss on wall`,
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Large safe area, far from boss, close to danger zone',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Large safe area, far from boss and danger zone',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Small safe area (edge), between tank and ranged',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Large safe area (middle), close to boss, close to cleave',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Small safe area (edge), far from boss',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Large safe area (middle), between tank and healers, far from cleave',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
    },
    'strangeseedsbossnorth': {
        'description': 'Alternate seed drops on Green and Red spots\nTethers have prio on highlighted spots',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
    },
    'strangeseedsnorthtethers': {
        'description': 'Healer short wall tether, Ranged long wall tether',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
    },
    'strangeseedsnorthstacks': {
        'description': 'Take pairs on Green spots, dodge into Red spots',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
    },
    'strangeseedsbosssouth': {
        'description': 'Alternate seed drops on Green and Red spots\nTethers have prio on highlighted spots',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
    },
    'strangeseedssouthtethers': {
        'description': 'Tank short wall tether, Ranged long wall tether',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
    },
    'strangeseedssouthstacks': {
        'description': 'Take pairs on Green spots, dodge into Red spots',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
    },
    'swing3spreads': {
        'description': 'Not specified in Zenith P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle\nIf North, G1 Left G2 Right, TMHR',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
    },
}

const cuteP2: Record<string, string | Record<string, string | PlayerMechStrat>> = {
    'url': 'https://raidplan.io/plan/q_qH0crFmPZqrY4L',
    'swing1spreads': {
        'description': 'Not specified in Cute P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Small safe area (edge), deep in corner',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `Large safe area (middle), close to boss on wall`,
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Large safe area, far from boss, close to danger zone',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Large safe area, far from boss and danger zone',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Small safe area (edge), between tank and ranged',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Large safe area (middle), close to boss, close to cleave',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Small safe area (edge), far from boss',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Large safe area (middle), between tank and healers, far from cleave',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
    },
    'flares': {
        'description': 'Flare in corner near boss, group away\nSwap if tank tether gets flare',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'In corner near boss if you get flare\nProvoke and go to opposite side of boss hitbox if no flare',
                imageUrl: './m7s/p2/cute-flares.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `In corner near boss if you get flare\nProvoke and go to opposite side of boss hitbox if no flare`,
                imageUrl: './m7s/p2/cute-flares.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Away from boss',
                imageUrl: './m7s/p2/cute-flares.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Away from boss',
                imageUrl: './m7s/p2/cute-flares.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Away from boss',
                imageUrl: './m7s/p2/cute-flares.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Away from boss',
                imageUrl: './m7s/p2/cute-flares.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Away from boss',
                imageUrl: './m7s/p2/cute-flares.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Away from boss',
                imageUrl: './m7s/p2/cute-flares.webp',
        },
    },
    'swing2spreads': {
        'description': 'Not specified in Cute P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Small safe area (edge), deep in corner',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `Large safe area (middle), close to boss on wall`,
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Large safe area, far from boss, close to danger zone',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Large safe area, far from boss and danger zone',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Small safe area (edge), between tank and ranged',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Large safe area (middle), close to boss, close to cleave',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Small safe area (edge), far from boss',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Large safe area (middle), between tank and healers, far from cleave',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
    },
    'strangeseedsbossnorth': {
        'description': 'Alternate seed drops on Red and Green dots\nUntethered party members stay near boss',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/cute-seeds.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/cute-seeds.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/cute-seeds.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/cute-seeds.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/cute-seeds.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/cute-seeds.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/cute-seeds.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/cute-seeds.webp',
        },
    },
    'strangeseedsnorthtethers': {
        'description': 'H2 grab far tether, OT grab close tether',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/cute-seeds-tethers-boss-north.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/cute-seeds-tethers-boss-north.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/cute-seeds-tethers-boss-north.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/cute-seeds-tethers-boss-north.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/cute-seeds-tethers-boss-north.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/cute-seeds-tethers-boss-north.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/cute-seeds-tethers-boss-north.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/cute-seeds-tethers-boss-north.webp',
        },
    },
    'strangeseedsnorthstacks': {
        'description': 'MT M1 center near boss\nOT M2 corner near boss\nH1 R1 far corner on same edge as melees\nH2 R2 Center away from boss',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
    },
    'strangeseedsbosssouth': {
        'description': 'Alternate seed drops on Red and Green dots\nUntethered party members stay near boss',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/cute-seeds.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/cute-seeds.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/cute-seeds.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/cute-seeds.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/cute-seeds.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/cute-seeds.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/cute-seeds.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/cute-seeds.webp',
        },
    },
    'strangeseedssouthtethers': {
        'description': 'H2 grab long wall tether, R1 or R2 grab short wall tether',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/cute-seeds-tethers-boss-south.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/cute-seeds-tethers-boss-south.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/cute-seeds-tethers-boss-south.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/cute-seeds-tethers-boss-south.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/cute-seeds-tethers-boss-south.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/cute-seeds-tethers-boss-south.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/cute-seeds-tethers-boss-south.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/cute-seeds-tethers-boss-south.webp',
        },
    },
    'strangeseedssouthstacks': {
        'description': 'MT M1 center near boss\nOT M2 corner near boss\nH1 R1 far corner on same edge as melees\nH2 R2 center of long edge away from boss',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
    },
    'swing3spreads': {
        'description': 'Not specified in Cute P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle\nIf North, G1 Left G2 Right, TMHR',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
    },
}

const lockedP2: Record<string, string | Record<string, string | PlayerMechStrat>> = {
    'url': 'https://raidplan.io/plan/FGvPnlaAe1fwlsIB',
    'swing1spreads': {
        'description': 'Not specified in Locked P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Small safe area (edge), deep in corner',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `Large safe area (middle), close to boss on wall`,
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Large safe area, far from boss, close to danger zone',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Large safe area, far from boss and danger zone',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Small safe area (edge), between tank and ranged',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Large safe area (middle), close to boss, close to cleave',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Small safe area (edge), far from boss',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Large safe area (middle), between tank and healers, far from cleave',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
    },
    'flares': {
        'description': 'Not specified in Locked P2 raidplan, Alpha P2 as reference\nFlare in corner near boss, group away\nSwap if tank tether gets flare',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'In corner near boss if you get flare\nProvoke and go to opposite side of boss hitbox if no flare',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `In corner near boss if you get flare\nProvoke and go to opposite side of boss hitbox if no flare`,
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
    },
    'swing2spreads': {
        'description': 'Not specified in Locked P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Small safe area (edge), deep in corner',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `Large safe area (middle), close to boss on wall`,
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Large safe area, far from boss, close to danger zone',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Large safe area, far from boss and danger zone',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Small safe area (edge), between tank and ranged',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Large safe area (middle), close to boss, close to cleave',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Small safe area (edge), far from boss',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Large safe area (middle), between tank and healers, far from cleave',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
    },
    'strangeseedsbossnorth': {
        'description': 'Alternate seed drops on Green and Red dots\nUntethered party members stay near boss',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
    },
    'strangeseedsnorthtethers': {
        'description': 'R1 grab far tether, Healer grab close tether',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
    },
    'strangeseedsnorthstacks': {
        'description': 'MT M1 corner near boss\nOT M2 mid near boss\nR1 + non-Tether Healer to mid edge\nR2 + Tether Healer to NW Corner',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/locked-stacks-boss-north.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/locked-stacks-boss-north.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/locked-stacks-boss-north.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/locked-stacks-boss-north.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/locked-stacks-boss-north.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/locked-stacks-boss-north.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/locked-stacks-boss-north.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/locked-stacks-boss-north.webp',
        },
    },
    'strangeseedsbosssouth': {
        'description': 'Alternate seed drops on Green and Red dots\nUntethered party members stay near boss',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/locked-seeds.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/locked-seeds.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/locked-seeds.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/locked-seeds.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/locked-seeds.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/locked-seeds.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/locked-seeds.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/locked-seeds.webp',
        },
    },
    'strangeseedssouthtethers': {
        'description': 'Healer grab North wall tether, R1 grab long wall tether',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/locked-seeds.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/locked-seeds.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/locked-seeds.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/locked-seeds.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/locked-seeds.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/locked-seeds.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/locked-seeds.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/locked-seeds.webp',
        },
    },
    'strangeseedssouthstacks': {
        'description': 'MT M1 corner near boss\nOT M2 mid near boss\nR1 + non-Tether Healer to mid edge\nR2 + Tether Healer to NW Corner',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/locked-stacks-boss-south.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/locked-stacks-boss-south.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/locked-stacks-boss-south.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/locked-stacks-boss-south.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/locked-stacks-boss-south.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/locked-stacks-boss-south.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/locked-stacks-boss-south.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/locked-stacks-boss-south.webp',
        },
    },
    'swing3spreads': {
        'description': 'Not specified in Locked P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle\nIf North, G1 Left G2 Right, TMHR',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
    },
}

const fixedP2: Record<string, string | Record<string, string | PlayerMechStrat>> = {
    'url': 'https://raidplan.io/plan/-lZai2v34Y8bC15S',
    'swing1spreads': {
        'description': 'Not specified in Fixed P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Small safe area (edge), deep in corner',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `Large safe area (middle), close to boss on wall`,
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Large safe area, far from boss, close to danger zone',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Large safe area, far from boss and danger zone',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Small safe area (edge), between tank and ranged',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Large safe area (middle), close to boss, close to cleave',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Small safe area (edge), far from boss',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Large safe area (middle), between tank and healers, far from cleave',
                imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
    },
    'flares': {
        'description': 'Not specified in Fixed P2 raidplan, Alpha P2 as reference\nFlare in corner near boss, group away\nSwap if tank tether gets flare',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'In corner near boss if you get flare\nProvoke and go to opposite side of boss hitbox if no flare',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `In corner near boss if you get flare\nProvoke and go to opposite side of boss hitbox if no flare`,
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Away from boss',
                imageUrl: './m7s/p2/alpha-flares.webp',
        },
    },
    'swing2spreads': {
        'description': 'Not specified in Fixed P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Small safe area (edge), deep in corner',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `Large safe area (middle), close to boss on wall`,
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Large safe area, far from boss, close to danger zone',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Large safe area, far from boss and danger zone',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Small safe area (edge), between tank and ranged',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Large safe area (middle), close to boss, close to cleave',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Small safe area (edge), far from boss',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Large safe area (middle), between tank and healers, far from cleave',
                imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
    },
    'strangeseedsbossnorth': {
        'description': `Wait for your bait to go off\nMove to another person's spot if they're not baiting next or use eyes\nGo back and chill at your spot`,
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
    },
    'strangeseedsnorthtethers': {
        'description': 'OT grab close tether, R1 grab far tether',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
    },
    'strangeseedsnorthstacks': {
        'description': 'OT M1 corner near boss\nMT M2 mid near boss\nH1 R1 to mid edge\nH2 R2 to SE corner',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
    },
    'strangeseedsbosssouth': {
        'description': `Wait for your bait to go off\nMove to another person's spot if they're not baiting next or use eyes\nGo back and chill at your spot`,
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
    },
    'strangeseedssouthtethers': {
        'description': 'R1 grab long side tether\nR2 grab North side tether',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
    },
    'strangeseedssouthstacks': {
        'description': 'OT M1 corner near boss\nMT M2 mid near boss\nH1 R1 mid edge\nH2 R2 NW corner',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
    },
    'swing3spreads': {
        'description': 'Not specified in Fixed P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle\nIf North, G1 Left G2 Right, TMHR',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '',
                imageUrl: './m7s/p2/alpha-swing3.webp',
        },
    },
}


const p2Strats = {toxic: toxicP2, bili: biliP2, alpha: alphaP2, zenith: zenithP2, alpha2: alpha2P2, cute: cuteP2, locked: lockedP2, fixed: fixedP2}

const allP2: PhaseStrats[] = [
    {
        phaseName: 'Brutish Swing 1',
        tag: 'p2',
        description: getStringObject(p2Strats, 'swing1spreads', 'description'),
        mechs: [
            {
                mechanic: 'Spreads',
                strats: getStratArray(p2Strats, 'swing1spreads'),
            },
        ]
    },
    {
        phaseName: 'Abominable Blink',
        tag: 'p2',
        description: getStringObject(p2Strats, 'flares', 'description'),
        mechs: [
            {
                mechanic: 'Flare',
                strats: getStratArray(p2Strats, 'flares'),
            },
        ]
    },
    {
        phaseName: 'Brutish Swing 2',
        tag: 'p2',
        description: getStringObject(p2Strats, 'swing2spreads', 'description'),
        mechs: [
            {
                mechanic: 'Spreads',
                strats: getStratArray(p2Strats, 'swing2spreads'),
            },
        ]
    },
    {
        phaseName: 'Strange Seeds (Boss South)',
        tag: 'p2',
        description: getStringObject(p2Strats, 'strangeseedsbosssouth', 'description'),
        mechs: [
            {
                mechanic: 'Seeds + Tethers',
                strats: getStratArray(p2Strats, 'strangeseedsbosssouth'),
            },
            {
                mechanic: 'Stacks',
                strats: getStratArray(p2Strats, 'strangeseedssouthstacks'),
            },
        ]
    },
    {
        phaseName: 'Strange Seeds (Boss North)',
        tag: 'p2',
        description: getStringObject(p2Strats, 'strangeseedsbossnorth', 'description'),
        mechs: [
            {
                mechanic: 'Seeds + Tethers',
                strats: getStratArray(p2Strats, 'strangeseedsbossnorth'),
            },
            {
                mechanic: 'Stacks',
                strats: getStratArray(p2Strats, 'strangeseedsnorthstacks'),
            },
        ]
    },
    {
        phaseName: 'Brutish Swing 3',
        tag: 'p2',
        description: getStringObject(p2Strats, 'swing3spreads', 'description'),
        mechs: [
            {
                mechanic: 'Spreads',
                strats: getStratArray(p2Strats, 'swing3spreads'),
            },
        ]
    },
]

const toxicP3: PhaseStrats[] = [
    {
        phaseName: 'Stoneringers 1', 
        mechs: [
            {
                mechanic: 'Glower Spreads',
                description: 'G1 Left G2 Right facing boss',
                strats: [
                    {
                        role: 'Tank',
                        party: 1,
                        description: 'Front, Far left',
                        imageUrl: './m7s/p3/toxic-stoneringers1-spread.webp'
                    },
                    {
                        role: 'Tank',
                        party: 2,
                        description: 'Front, Far right',
                        imageUrl: './m7s/p3/toxic-stoneringers1-spread.webp'
                    },
                    {
                        role: 'Healer',
                        party: 1,
                        description: 'Back, Close left',
                        imageUrl: './m7s/p3/toxic-stoneringers1-spread.webp'
                    },
                    {
                        role: 'Healer',
                        party: 2,
                        description: 'Back, Close right',
                        imageUrl: './m7s/p3/toxic-stoneringers1-spread.webp'
                    },
                    {
                        role: 'Melee',
                        party: 1,
                        description: 'Front, Close left',
                        imageUrl: './m7s/p3/toxic-stoneringers1-spread.webp'
                    },
                    {
                        role: 'Melee',
                        party: 2,
                        description: 'Front, Close right',
                        imageUrl: './m7s/p3/toxic-stoneringers1-spread.webp'
                    },
                    {
                        role: 'Ranged',
                        party: 1,
                        description: 'Back, Far left',
                        imageUrl: './m7s/p3/toxic-stoneringers1-spread.webp'
                    },
                    {
                        role: 'Ranged',
                        party: 2,
                        description: 'Back, Far right',
                        imageUrl: './m7s/p3/toxic-stoneringers1-spread.webp'
                    },
                ]
            },
        ]
    },
    {
        phaseName: 'Debris Deathmatch', 
        mechs: [
            {
                mechanic: 'Tethers',
                description: 'R1 North, R2 South, H1 West, H2 East',
                strats: [
                    {
                        role: 'Tank',
                        party: 1,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-tethers.webp'
                    },
                    {
                        role: 'Tank',
                        party: 2,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-tethers.webp'
                    },
                    {
                        role: 'Healer',
                        party: 1,
                        description: 'West tether',
                        imageUrl: './m7s/p3/toxic-debris-tethers.webp'
                    },
                    {
                        role: 'Healer',
                        party: 2,
                        description: 'East tether',
                        imageUrl: './m7s/p3/toxic-debris-tethers.webp'
                    },
                    {
                        role: 'Melee',
                        party: 1,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-tethers.webp'
                    },
                    {
                        role: 'Melee',
                        party: 2,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-tethers.webp'
                    },
                    {
                        role: 'Ranged',
                        party: 1,
                        description: 'North tether',
                        imageUrl: './m7s/p3/toxic-debris-tethers.webp'
                    },
                    {
                        role: 'Ranged',
                        party: 2,
                        description: 'South tether',
                        imageUrl: './m7s/p3/toxic-debris-tethers.webp'
                    },
                ]
            },
            {
                mechanic: 'Stacks',
                description: 'R1/MT North, R2/OT South, H1/M1 West, H2/M2 East\nPlace stacks 1 tile away from the wall',
                strats: [
                    {
                        role: 'Tank',
                        party: 1,
                        description: 'North',
                        imageUrl: './m7s/p3/toxic-debris-stacks.webp'
                    },
                    {
                        role: 'Tank',
                        party: 2,
                        description: 'South',
                        imageUrl: './m7s/p3/toxic-debris-stacks.webp'
                    },
                    {
                        role: 'Healer',
                        party: 1,
                        description: 'West',
                        imageUrl: './m7s/p3/toxic-debris-stacks.webp'
                    },
                    {
                        role: 'Healer',
                        party: 2,
                        description: 'East',
                        imageUrl: './m7s/p3/toxic-debris-stacks.webp'
                    },
                    {
                        role: 'Melee',
                        party: 1,
                        description: 'West',
                        imageUrl: './m7s/p3/toxic-debris-stacks.webp'
                    },
                    {
                        role: 'Melee',
                        party: 2,
                        description: 'East',
                        imageUrl: './m7s/p3/toxic-debris-stacks.webp'
                    },
                    {
                        role: 'Ranged',
                        party: 1,
                        description: 'North',
                        imageUrl: './m7s/p3/toxic-debris-stacks.webp'
                    },
                    {
                        role: 'Ranged',
                        party: 2,
                        description: 'South',
                        imageUrl: './m7s/p3/toxic-debris-stacks.webp'
                    },
                ]
            },
        ]
    },
    {
        phaseName: 'Debris Deathmatch (Ranged Puddles)', 
        mechs: [
            {
                mechanic: 'Puddles and Seeds',
                description: 'Ranged start on left side and bait puddles CCW\nMelees drop seeds on color markers',
                strats: [
                    {
                        role: 'Tank',
                        party: 1,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-ranged-puddles.webp'
                    },
                    {
                        role: 'Tank',
                        party: 2,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-ranged-puddles.webp'
                    },
                    {
                        role: 'Healer',
                        party: 1,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-ranged-puddles.webp'
                    },
                    {
                        role: 'Healer',
                        party: 2,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-ranged-puddles.webp'
                    },
                    {
                        role: 'Melee',
                        party: 1,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-ranged-puddles.webp'
                    },
                    {
                        role: 'Melee',
                        party: 2,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-ranged-puddles.webp'
                    },
                    {
                        role: 'Ranged',
                        party: 1,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-ranged-puddles.webp'
                    },
                    {
                        role: 'Ranged',
                        party: 2,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-ranged-puddles.webp'
                    },
                ]
            },
            {
                mechanic: 'Stack',
                description: 'Dodge vines and stack in center',
                imageUrl: './m7s/p3/toxic-debris-ranged-puddles-stack.webp'
            },
            {
                mechanic: 'Proteans',
                description: 'True North clock spots',
                strats: [
                    {
                        role: 'Tank',
                        party: 1,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-ranged-puddles-proteans.webp'
                    },
                    {
                        role: 'Tank',
                        party: 2,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-ranged-puddles-proteans.webp'
                    },
                    {
                        role: 'Healer',
                        party: 1,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-ranged-puddles-proteans.webp'
                    },
                    {
                        role: 'Healer',
                        party: 2,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-ranged-puddles-proteans.webp'
                    },
                    {
                        role: 'Melee',
                        party: 1,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-ranged-puddles-proteans.webp'
                    },
                    {
                        role: 'Melee',
                        party: 2,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-ranged-puddles-proteans.webp'
                    },
                    {
                        role: 'Ranged',
                        party: 1,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-ranged-puddles-proteans.webp'
                    },
                    {
                        role: 'Ranged',
                        party: 2,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-ranged-puddles-proteans.webp'
                    },
                ]
            },
        ]
    },
    {
        phaseName: 'Debris Deathmatch (Melee Puddles)', 
        mechs: [
            {
                mechanic: 'Puddles and Seeds',
                description: 'Melee bait AOEs CW around the boss\nRanged drop seeds on cardinals at the walls',
                strats: [
                    {
                        role: 'Tank',
                        party: 1,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-melee-puddles.webp'
                    },
                    {
                        role: 'Tank',
                        party: 2,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-melee-puddles.webp'
                    },
                    {
                        role: 'Healer',
                        party: 1,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-melee-puddles.webp'
                    },
                    {
                        role: 'Healer',
                        party: 2,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-melee-puddles.webp'
                    },
                    {
                        role: 'Melee',
                        party: 1,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-melee-puddles.webp'
                    },
                    {
                        role: 'Melee',
                        party: 2,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-melee-puddles.webp'
                    },
                    {
                        role: 'Ranged',
                        party: 1,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-melee-puddles.webp'
                    },
                    {
                        role: 'Ranged',
                        party: 2,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-melee-puddles.webp'
                    },
                ]
            },
            {
                mechanic: 'Stack',
                description: 'Run to SW as quickly as possible\nPlace stack on front half of boss hitbox',
                imageUrl: './m7s/p3/toxic-debris-melee-puddles-stack.webp'
            },
            {
                mechanic: 'Proteans',
                description: 'BOSS RELATIVE clock spots',
                strats: [
                    {
                        role: 'Tank',
                        party: 1,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-melee-puddles-proteans.webp'
                    },
                    {
                        role: 'Tank',
                        party: 2,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-melee-puddles-proteans.webp'
                    },
                    {
                        role: 'Healer',
                        party: 1,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-melee-puddles-proteans.webp'
                    },
                    {
                        role: 'Healer',
                        party: 2,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-melee-puddles-proteans.webp'
                    },
                    {
                        role: 'Melee',
                        party: 1,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-melee-puddles-proteans.webp'
                    },
                    {
                        role: 'Melee',
                        party: 2,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-melee-puddles-proteans.webp'
                    },
                    {
                        role: 'Ranged',
                        party: 1,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-melee-puddles-proteans.webp'
                    },
                    {
                        role: 'Ranged',
                        party: 2,
                        description: '',
                        imageUrl: './m7s/p3/toxic-debris-melee-puddles-proteans.webp'
                    },
                ]
            },
        ]
    },
    {
        phaseName: 'Stoneringers 2', 
        mechs: [
            {
                mechanic: 'Seeds',
                description: 'Color Markers',
                strats: [
                    {
                        role: 'Tank',
                        party: 1,
                        description: 'A (Red) Marker',
                        imageUrl: './m7s/p3/toxic-stoneringers2-supports.webp'
                    },
                    {
                        role: 'Tank',
                        party: 2,
                        description: 'C (Blue) Marker',
                        imageUrl: './m7s/p3/toxic-stoneringers2-supports.webp'
                    },
                    {
                        role: 'Healer',
                        party: 1,
                        description: 'B (Yellow) Marker',
                        imageUrl: './m7s/p3/toxic-stoneringers2-supports.webp'
                    },
                    {
                        role: 'Healer',
                        party: 2,
                        description: 'D (Purple) Marker',
                        imageUrl: './m7s/p3/toxic-stoneringers2-supports.webp'
                    },
                    {
                        role: 'Melee',
                        party: 1,
                        description: 'D (Purple) Marker',
                        imageUrl: './m7s/p3/toxic-stoneringers2-dps.webp'
                    },
                    {
                        role: 'Melee',
                        party: 2,
                        description: 'C (Blue) Marker',
                        imageUrl: './m7s/p3/toxic-stoneringers2-dps.webp'
                    },
                    {
                        role: 'Ranged',
                        party: 1,
                        description: 'A (Red) Marker',
                        imageUrl: './m7s/p3/toxic-stoneringers2-dps.webp'
                    },
                    {
                        role: 'Ranged',
                        party: 2,
                        description: 'B (Yellow) Marker',
                        imageUrl: './m7s/p3/toxic-stoneringers2-dps.webp'
                    },
                ]
            },
        ]
    },
]

const toxicStrat: Strat = {
    stratName: 'toxic',
    description: 'Source: Raidplan by Cute Animal @ Omega and Toxic Friends',
    notes: '',
    stratUrl: 'https://raidplan.io/plan/PWFgPfz0vL7runO2',
    strats: [
        {
            phaseName: 'Sinister Seeds', 
            mechs: [
                {
                    mechanic: 'Safespots',
                    description: 'Southwest or Southeast close\nMelees close, Ranged far',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Close',
                            imageUrl: './m7s/p1/toxic-sinister.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Close',
                            imageUrl: './m7s/p1/toxic-sinister.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Far',
                            imageUrl: './m7s/p1/toxic-sinister.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Far',
                            imageUrl: './m7s/p1/toxic-sinister.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Close',
                            imageUrl: './m7s/p1/toxic-sinister.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Close',
                            imageUrl: './m7s/p1/toxic-sinister.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Far',
                            imageUrl: './m7s/p1/toxic-sinister.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Far',
                            imageUrl: './m7s/p1/toxic-sinister.webp'
                        },
                    ]
                },
                {
                    mechanic: 'Puddles',
                    description: 'Bait one puddle towards corner\nThen G1 CW G2 CCW',
                    imageUrl: './m7s/p1/toxic-sinister-puddles.webp'
                },
                {
                    mechanic: 'Seeds',
                    description: 'Dodge puddles, then stand on marker or rivet',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Northwest\n1 Marker',
                            imageUrl: './m7s/p1/toxic-sinister-seeds.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Northeast\n2 Marker',
                            imageUrl: './m7s/p1/toxic-sinister-seeds.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Northwest\n1 Marker',
                            imageUrl: './m7s/p1/toxic-sinister-seeds.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Northeast\n2 Marker',
                            imageUrl: './m7s/p1/toxic-sinister-seeds.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Southwest\n4 marker',
                            imageUrl: './m7s/p1/toxic-sinister-seeds.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Southeast\n3 marker',
                            imageUrl: './m7s/p1/toxic-sinister-seeds.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Southwest\n4 marker',
                            imageUrl: './m7s/p1/toxic-sinister-seeds.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Southeast\n3 marker',
                            imageUrl: './m7s/p1/toxic-sinister-seeds.webp'
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Adds',
            description: 'Take adds north\nInterrupt priority on Winding Wildwinds',
            imageUrl: './m7s/p1/toxic-adds.webp'
        },
        {
            phaseName: 'Pulp Smash',
            description: 'True North clock spots',
            imageUrl: './m7s/p1/toxic-pulp.webp'
        },
        ...allP2,
        ...toxicP3
    ]
}

const uptimeStrat: Strat = {
    stratName: 'uptime',
    description: 'Source: UPTIME SEEDING Raidplan and Kindred VODs',
    notes: '',
    stratUrl: 'https://raidplan.io/plan/-OMZSfpCVSPeJdIu',
    strats: [
        {
            phaseName: 'Sinister Seeds', 
            mechs: [
                {
                    mechanic: 'Safespots',
                    description: 'G1 West G2 East\nRanged Out Melee In',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister.webp'
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Sinister Seeds (Melee Seeds, Ranged Puddles)', 
            mechs: [
                {
                    mechanic: 'Start',
                    description: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-start.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-start.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-start.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-start.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-start.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-start.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-start.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-start.webp'
                        },
                    ]
                },
                {
                    mechanic: 'Seed and Puddle Drops',
                    description: 'Ranged drop puddles CW\nMelee end on Intercards\nRanged end East/West',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-drop.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-drop.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-drop.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-drop.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-drop.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-drop.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-drop.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-drop.webp'
                        },
                    ]
                },
                {
                    mechanic: 'Stacks',
                    description: 'Ranged ends up opposite where they started\nMelee collapse E/W',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-stacks.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-stacks.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-stacks.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-stacks.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-stacks.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-stacks.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-stacks.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-stacks.webp'
                        },
                    ]
                },
                {
                    mechanic: 'Adds',
                    description: 'Middle of arena is safe\nnInterrupt priority on Winding Wildwinds\nTanks first, ranged last',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-adds.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-adds.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-adds.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-adds.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-adds.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-adds.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-adds.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-adds.webp'
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Sinister Seeds (Ranged Seeds, Melee Puddles)', 
            mechs: [
                {
                    mechanic: 'Start',
                    description: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-start.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-start.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-start.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-start.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-start.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-start.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-start.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-start.webp'
                        },
                    ]
                },
                {
                    mechanic: 'Seed and Puddle Drops',
                    description: 'Ranged drop seeds on Cardinals\nHealers CW, Ranged CCW\nMelee drop puddles CW, end 1 spot CCW from start',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-drop.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-drop.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-drop.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-drop.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-drop.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-drop.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-drop.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-drop.webp'
                        },
                    ]
                },
                {
                    mechanic: 'Stacks',
                    description: 'Stack on 1/3 or 2/4 intercards',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-stacks.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-stacks.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-stacks.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-stacks.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-stacks.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-stacks.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-stacks.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-stacks.webp'
                        },
                    ]
                },
                {
                    mechanic: 'Adds',
                    description: 'Only corners are safe\nInterrupt priority on Winding Wildwinds\nTanks first, ranged last',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-adds.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-adds.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-adds.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-adds.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-adds.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-adds.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-adds.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-adds.webp'
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Pulp Smash',
            description: 'True North clock spots',
            imageUrl: './m7s/p1/uptime-pulp.webp'
        },
        ...allP2,
        ...toxicP3
    ]
}

