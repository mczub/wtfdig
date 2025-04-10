import type { PageLoad } from "./$types";

export const load: PageLoad = ({params}) => {
    return {
        strats: [toxicStrat, uptimeStrat],
    }
}

export type Role = 'Tank' | 'Healer' | 'Melee' | 'Ranged'; 
export type Alignment = 'original' | 'truenorth' | 'relative';

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
    description: string;
    notes: string;
    strats: PhaseStrats[];
}

const toxicP2: Record<string, string | Record<string, string | PlayerMechStrat>> = {
    'url': 'https://raidplan.io/plan/gIcsj6_cyedVQON7',
    'swing1spreads': {
        'description': 'MT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
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
        'description': 'MT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
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
        'description': 'MT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
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
        'description': 'Not specified in Bili P2 raidplan, discuss with group',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
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
    'flares': {
        'description': 'Not specified in Bili P2 raidplan, discuss with group',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
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
    'swing2spreads': {
        'description': 'Not specified in Bili P2 raidplan, discuss with group',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
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
        'description': 'Not specified in Bili P2 raidplan, discuss with group',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
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
        'description': 'MT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
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
        'description': 'Not specified in Zenith P2 raidplan, discuss with group',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
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
    'flares': {
        'description': 'Not specified in Zenith P2 raidplan, discuss with group',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
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
    'swing2spreads': {
        'description': 'Not specified in Zenith P2 raidplan, discuss with group',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
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
        'description': 'Not specified in Zenith P2 raidplan, discuss with group',
        'MT': {
                role: 'Tank',
                party: 1,
                description: '',
                imageUrl: '',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: ``,
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

const allP2: PhaseStrats[] = [
    {
        phaseName: 'Brutish Swing 1',
        tag: 'p2',
        description: {
            toxic: 'MT M1 R1 edge of arena\nOT M2 R2 middle of arena\nHealers middle of arena',
            bili: biliP2['swing1spreads']['description'] as string,
            alpha: alphaP2['swing1spreads']['description'] as string,
            zenith: zenithP2['swing1spreads']['description'] as string,
            alpha2: alpha2P2['swing1spreads']['description'] as string,
        },
        mechs: [
            {
                mechanic: 'Spreads',
                strats: [
                    {
                        role: 'Tank',
                        party: 1,
                        description: {
                            toxic: toxicP2['swing1spreads']['MT']['description'] as string,
                            bili: biliP2['swing1spreads']['MT']['description'] as string,
                            alpha: alphaP2['swing1spreads']['MT']['description'] as string,
                            zenith: zenithP2['swing1spreads']['MT']['description'] as string,
                            alpha2: alpha2P2['swing1spreads']['MT']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['swing1spreads']['MT']['imageUrl'] as string,
                            bili: biliP2['swing1spreads']['MT']['imageUrl'] as string,
                            alpha: alphaP2['swing1spreads']['MT']['imageUrl'] as string,
                            zenith: zenithP2['swing1spreads']['MT']['imageUrl'] as string,
                            alpha2: alpha2P2['swing1spreads']['MT']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Tank',
                        party: 2,
                        description: {
                            toxic: toxicP2['swing1spreads']['OT']['description'] as string,
                            bili: biliP2['swing1spreads']['OT']['description'] as string,
                            alpha: alphaP2['swing1spreads']['OT']['description'] as string,
                            zenith: zenithP2['swing1spreads']['OT']['description'] as string,
                            alpha2: alpha2P2['swing1spreads']['OT']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['swing1spreads']['OT']['imageUrl'] as string,
                            bili: biliP2['swing1spreads']['OT']['imageUrl'] as string,
                            alpha: alphaP2['swing1spreads']['OT']['imageUrl'] as string,
                            zenith: zenithP2['swing1spreads']['OT']['imageUrl'] as string,
                            alpha2: alpha2P2['swing1spreads']['OT']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Healer',
                        party: 1,
                        description: {
                            toxic: toxicP2['swing1spreads']['H1']['description'] as string,
                            bili: biliP2['swing1spreads']['H1']['description'] as string,
                            alpha: alphaP2['swing1spreads']['H1']['description'] as string,
                            zenith: zenithP2['swing1spreads']['H1']['description'] as string,
                            alpha2: alpha2P2['swing1spreads']['H1']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['swing1spreads']['H1']['imageUrl'] as string,
                            bili: biliP2['swing1spreads']['H1']['imageUrl'] as string,
                            alpha: alphaP2['swing1spreads']['H1']['imageUrl'] as string,
                            zenith: zenithP2['swing1spreads']['H1']['imageUrl'] as string,
                            alpha2: alpha2P2['swing1spreads']['H1']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Healer',
                        party: 2,
                        description: {
                            toxic: toxicP2['swing1spreads']['H2']['description'] as string,
                            bili: biliP2['swing1spreads']['H2']['description'] as string,
                            alpha: alphaP2['swing1spreads']['H2']['description'] as string,
                            zenith: zenithP2['swing1spreads']['H2']['description'] as string,
                            alpha2: alpha2P2['swing1spreads']['H2']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['swing1spreads']['H2']['imageUrl'] as string,
                            bili: biliP2['swing1spreads']['H2']['imageUrl'] as string,
                            alpha: alphaP2['swing1spreads']['H2']['imageUrl'] as string,
                            zenith: zenithP2['swing1spreads']['H2']['imageUrl'] as string,
                            alpha2: alpha2P2['swing1spreads']['H2']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Melee',
                        party: 1,
                        description: {
                            toxic: toxicP2['swing1spreads']['M1']['description'] as string,
                            bili: biliP2['swing1spreads']['M1']['description'] as string,
                            alpha: alphaP2['swing1spreads']['M1']['description'] as string,
                            zenith: zenithP2['swing1spreads']['M1']['description'] as string,
                            alpha2: alpha2P2['swing1spreads']['M1']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['swing1spreads']['M1']['imageUrl'] as string,
                            bili: biliP2['swing1spreads']['M1']['imageUrl'] as string,
                            alpha: alphaP2['swing1spreads']['M1']['imageUrl'] as string,
                            zenith: zenithP2['swing1spreads']['M1']['imageUrl'] as string,
                            alpha2: alpha2P2['swing1spreads']['M1']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Melee',
                        party: 2,
                        description: {
                            toxic: toxicP2['swing1spreads']['M2']['description'] as string,
                            bili: biliP2['swing1spreads']['M2']['description'] as string,
                            alpha: alphaP2['swing1spreads']['M2']['description'] as string,
                            zenith: zenithP2['swing1spreads']['M2']['description'] as string,
                            alpha2: alpha2P2['swing1spreads']['M2']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['swing1spreads']['M2']['imageUrl'] as string,
                            bili: biliP2['swing1spreads']['M2']['imageUrl'] as string,
                            alpha: alphaP2['swing1spreads']['M2']['imageUrl'] as string,
                            zenith: zenithP2['swing1spreads']['M2']['imageUrl'] as string,
                            alpha2: alpha2P2['swing1spreads']['M2']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Ranged',
                        party: 1,
                        description: {
                            toxic: toxicP2['swing1spreads']['R1']['description'] as string,
                            bili: biliP2['swing1spreads']['R1']['description'] as string,
                            alpha: alphaP2['swing1spreads']['R1']['description'] as string,
                            zenith: zenithP2['swing1spreads']['R1']['description'] as string,
                            alpha2: alpha2P2['swing1spreads']['R1']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['swing1spreads']['R1']['imageUrl'] as string,
                            bili: biliP2['swing1spreads']['R1']['imageUrl'] as string,
                            alpha: alphaP2['swing1spreads']['R1']['imageUrl'] as string,
                            zenith: zenithP2['swing1spreads']['R1']['imageUrl'] as string,
                            alpha2: alpha2P2['swing1spreads']['R1']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Ranged',
                        party: 2,
                        description: {
                            toxic: toxicP2['swing1spreads']['R2']['description'] as string,
                            bili: biliP2['swing1spreads']['R2']['description'] as string,
                            alpha: alphaP2['swing1spreads']['R2']['description'] as string,
                            zenith: zenithP2['swing1spreads']['R2']['description'] as string,
                            alpha2: alpha2P2['swing1spreads']['R2']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['swing1spreads']['R2']['imageUrl'] as string,
                            bili: biliP2['swing1spreads']['R2']['imageUrl'] as string,
                            alpha: alphaP2['swing1spreads']['R2']['imageUrl'] as string,
                            zenith: zenithP2['swing1spreads']['R2']['imageUrl'] as string,
                            alpha2: alpha2P2['swing1spreads']['R2']['imageUrl'] as string,
                        }
                    },
                ]
            },
        ]
    },
    {
        phaseName: 'Abominable Blink',
        tag: 'p2',
        description: {
            toxic: 'MT M1 R1 edge of arena\nOT M2 R2 middle of arena\nHealers middle of arena',
            bili: biliP2['flares']['description'] as string,
            alpha: alphaP2['flares']['description'] as string,
            zenith: zenithP2['flares']['description'] as string,
            alpha2: alpha2P2['flares']['description'] as string,
        },
        mechs: [
            {
                mechanic: 'Flare',
                strats: [
                    {
                        role: 'Tank',
                        party: 1,
                        description: {
                            toxic: toxicP2['flares']['MT']['description'] as string,
                            bili: biliP2['flares']['MT']['description'] as string,
                            alpha: alphaP2['flares']['MT']['description'] as string,
                            zenith: zenithP2['flares']['MT']['description'] as string,
                            alpha2: alpha2P2['flares']['MT']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['flares']['MT']['imageUrl'] as string,
                            bili: biliP2['flares']['MT']['imageUrl'] as string,
                            alpha: alphaP2['flares']['MT']['imageUrl'] as string,
                            zenith: zenithP2['flares']['MT']['imageUrl'] as string,
                            alpha2: alpha2P2['flares']['MT']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Tank',
                        party: 2,
                        description: {
                            toxic: toxicP2['flares']['OT']['description'] as string,
                            bili: biliP2['flares']['OT']['description'] as string,
                            alpha: alphaP2['flares']['OT']['description'] as string,
                            zenith: zenithP2['flares']['OT']['description'] as string,
                            alpha2: alpha2P2['flares']['OT']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['flares']['OT']['imageUrl'] as string,
                            bili: biliP2['flares']['OT']['imageUrl'] as string,
                            alpha: alphaP2['flares']['OT']['imageUrl'] as string,
                            zenith: zenithP2['flares']['OT']['imageUrl'] as string,
                            alpha2: alpha2P2['flares']['OT']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Healer',
                        party: 1,
                        description: {
                            toxic: toxicP2['flares']['H1']['description'] as string,
                            bili: biliP2['flares']['H1']['description'] as string,
                            alpha: alphaP2['flares']['H1']['description'] as string,
                            zenith: zenithP2['flares']['H1']['description'] as string,
                            alpha2: alpha2P2['flares']['H1']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['flares']['H1']['imageUrl'] as string,
                            bili: biliP2['flares']['H1']['imageUrl'] as string,
                            alpha: alphaP2['flares']['H1']['imageUrl'] as string,
                            zenith: zenithP2['flares']['H1']['imageUrl'] as string,
                            alpha2: alpha2P2['flares']['H1']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Healer',
                        party: 2,
                        description: {
                            toxic: toxicP2['flares']['H2']['description'] as string,
                            bili: biliP2['flares']['H2']['description'] as string,
                            alpha: alphaP2['flares']['H2']['description'] as string,
                            zenith: zenithP2['flares']['H2']['description'] as string,
                            alpha2: alpha2P2['flares']['H2']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['flares']['H2']['imageUrl'] as string,
                            bili: biliP2['flares']['H2']['imageUrl'] as string,
                            alpha: alphaP2['flares']['H2']['imageUrl'] as string,
                            zenith: zenithP2['flares']['H2']['imageUrl'] as string,
                            alpha2: alpha2P2['flares']['H2']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Melee',
                        party: 1,
                        description: {
                            toxic: toxicP2['flares']['M1']['description'] as string,
                            bili: biliP2['flares']['M1']['description'] as string,
                            alpha: alphaP2['flares']['M1']['description'] as string,
                            zenith: zenithP2['flares']['M1']['description'] as string,
                            alpha2: alpha2P2['flares']['M1']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['flares']['M1']['imageUrl'] as string,
                            bili: biliP2['flares']['M1']['imageUrl'] as string,
                            alpha: alphaP2['flares']['M1']['imageUrl'] as string,
                            zenith: zenithP2['flares']['M1']['imageUrl'] as string,
                            alpha2: alpha2P2['flares']['M1']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Melee',
                        party: 2,
                        description: {
                            toxic: toxicP2['flares']['M2']['description'] as string,
                            bili: biliP2['flares']['M2']['description'] as string,
                            alpha: alphaP2['flares']['M2']['description'] as string,
                            zenith: zenithP2['flares']['M2']['description'] as string,
                            alpha2: alpha2P2['flares']['M2']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['flares']['M2']['imageUrl'] as string,
                            bili: biliP2['flares']['M2']['imageUrl'] as string,
                            alpha: alphaP2['flares']['M2']['imageUrl'] as string,
                            zenith: zenithP2['flares']['M2']['imageUrl'] as string,
                            alpha2: alpha2P2['flares']['M2']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Ranged',
                        party: 1,
                        description: {
                            toxic: toxicP2['flares']['R1']['description'] as string,
                            bili: biliP2['flares']['R1']['description'] as string,
                            alpha: alphaP2['flares']['R1']['description'] as string,
                            zenith: zenithP2['flares']['R1']['description'] as string,
                            alpha2: alpha2P2['flares']['R1']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['flares']['R1']['imageUrl'] as string,
                            bili: biliP2['flares']['R1']['imageUrl'] as string,
                            alpha: alphaP2['flares']['R1']['imageUrl'] as string,
                            zenith: zenithP2['flares']['R1']['imageUrl'] as string,
                            alpha2: alpha2P2['flares']['R1']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Ranged',
                        party: 2,
                        description: {
                            toxic: toxicP2['flares']['R2']['description'] as string,
                            bili: biliP2['flares']['R2']['description'] as string,
                            alpha: alphaP2['flares']['R2']['description'] as string,
                            zenith: zenithP2['flares']['R2']['description'] as string,
                            alpha2: alpha2P2['flares']['R2']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['flares']['R2']['imageUrl'] as string,
                            bili: biliP2['flares']['R2']['imageUrl'] as string,
                            alpha: alphaP2['flares']['R2']['imageUrl'] as string,
                            zenith: zenithP2['flares']['R2']['imageUrl'] as string,
                            alpha2: alpha2P2['flares']['R2']['imageUrl'] as string,
                        }
                    },
                ]
            },
        ]
    },
    {
        phaseName: 'Brutish Swing 2',
        tag: 'p2',
        description: {
            toxic: 'MT M1 R1 edge of arena\nOT M2 R2 middle of arena\nHealers middle of arena',
            bili: biliP2['swing2spreads']['description'] as string,
            alpha: alphaP2['swing2spreads']['description'] as string,
            zenith: zenithP2['swing2spreads']['description'] as string,
            alpha2: alpha2P2['swing2spreads']['description'] as string,
        },
        mechs: [
            {
                mechanic: 'Spreads',
                strats: [
                    {
                        role: 'Tank',
                        party: 1,
                        description: {
                            toxic: toxicP2['swing2spreads']['MT']['description'] as string,
                            bili: biliP2['swing2spreads']['MT']['description'] as string,
                            alpha: alphaP2['swing2spreads']['MT']['description'] as string,
                            zenith: zenithP2['swing2spreads']['MT']['description'] as string,
                            alpha2: alpha2P2['swing2spreads']['MT']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['swing2spreads']['MT']['imageUrl'] as string,
                            bili: biliP2['swing2spreads']['MT']['imageUrl'] as string,
                            alpha: alphaP2['swing2spreads']['MT']['imageUrl'] as string,
                            zenith: zenithP2['swing2spreads']['MT']['imageUrl'] as string,
                            alpha2: alpha2P2['swing2spreads']['MT']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Tank',
                        party: 2,
                        description: {
                            toxic: toxicP2['swing2spreads']['OT']['description'] as string,
                            bili: biliP2['swing2spreads']['OT']['description'] as string,
                            alpha: alphaP2['swing2spreads']['OT']['description'] as string,
                            zenith: zenithP2['swing2spreads']['OT']['description'] as string,
                            alpha2: alpha2P2['swing2spreads']['OT']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['swing2spreads']['OT']['imageUrl'] as string,
                            bili: biliP2['swing2spreads']['OT']['imageUrl'] as string,
                            alpha: alphaP2['swing2spreads']['OT']['imageUrl'] as string,
                            zenith: zenithP2['swing2spreads']['OT']['imageUrl'] as string,
                            alpha2: alpha2P2['swing2spreads']['OT']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Healer',
                        party: 1,
                        description: {
                            toxic: toxicP2['swing2spreads']['H1']['description'] as string,
                            bili: biliP2['swing2spreads']['H1']['description'] as string,
                            alpha: alphaP2['swing2spreads']['H1']['description'] as string,
                            zenith: zenithP2['swing2spreads']['H1']['description'] as string,
                            alpha2: alpha2P2['swing2spreads']['H1']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['swing2spreads']['H1']['imageUrl'] as string,
                            bili: biliP2['swing2spreads']['H1']['imageUrl'] as string,
                            alpha: alphaP2['swing2spreads']['H1']['imageUrl'] as string,
                            zenith: zenithP2['swing2spreads']['H1']['imageUrl'] as string,
                            alpha2: alpha2P2['swing2spreads']['H1']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Healer',
                        party: 2,
                        description: {
                            toxic: toxicP2['swing2spreads']['H2']['description'] as string,
                            bili: biliP2['swing2spreads']['H2']['description'] as string,
                            alpha: alphaP2['swing2spreads']['H2']['description'] as string,
                            zenith: zenithP2['swing2spreads']['H2']['description'] as string,
                            alpha2: alpha2P2['swing2spreads']['H2']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['swing2spreads']['H2']['imageUrl'] as string,
                            bili: biliP2['swing2spreads']['H2']['imageUrl'] as string,
                            alpha: alphaP2['swing2spreads']['H2']['imageUrl'] as string,
                            zenith: zenithP2['swing2spreads']['H2']['imageUrl'] as string,
                            alpha2: alpha2P2['swing2spreads']['H2']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Melee',
                        party: 1,
                        description: {
                            toxic: toxicP2['swing2spreads']['M1']['description'] as string,
                            bili: biliP2['swing2spreads']['M1']['description'] as string,
                            alpha: alphaP2['swing2spreads']['M1']['description'] as string,
                            zenith: zenithP2['swing2spreads']['M1']['description'] as string,
                            alpha2: alpha2P2['swing2spreads']['M1']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['swing2spreads']['M1']['imageUrl'] as string,
                            bili: biliP2['swing2spreads']['M1']['imageUrl'] as string,
                            alpha: alphaP2['swing2spreads']['M1']['imageUrl'] as string,
                            zenith: zenithP2['swing2spreads']['M1']['imageUrl'] as string,
                            alpha2: alpha2P2['swing2spreads']['M1']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Melee',
                        party: 2,
                        description: {
                            toxic: toxicP2['swing2spreads']['M2']['description'] as string,
                            bili: biliP2['swing2spreads']['M2']['description'] as string,
                            alpha: alphaP2['swing2spreads']['M2']['description'] as string,
                            zenith: zenithP2['swing2spreads']['M2']['description'] as string,
                            alpha2: alpha2P2['swing2spreads']['M2']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['swing2spreads']['M2']['imageUrl'] as string,
                            bili: biliP2['swing2spreads']['M2']['imageUrl'] as string,
                            alpha: alphaP2['swing2spreads']['M2']['imageUrl'] as string,
                            zenith: zenithP2['swing2spreads']['M2']['imageUrl'] as string,
                            alpha2: alpha2P2['swing2spreads']['M2']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Ranged',
                        party: 1,
                        description: {
                            toxic: toxicP2['swing2spreads']['R1']['description'] as string,
                            bili: biliP2['swing2spreads']['R1']['description'] as string,
                            alpha: alphaP2['swing2spreads']['R1']['description'] as string,
                            zenith: zenithP2['swing2spreads']['R1']['description'] as string,
                            alpha2: alpha2P2['swing2spreads']['R1']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['swing2spreads']['R1']['imageUrl'] as string,
                            bili: biliP2['swing2spreads']['R1']['imageUrl'] as string,
                            alpha: alphaP2['swing2spreads']['R1']['imageUrl'] as string,
                            zenith: zenithP2['swing2spreads']['R1']['imageUrl'] as string,
                            alpha2: alpha2P2['swing2spreads']['R1']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Ranged',
                        party: 2,
                        description: {
                            toxic: toxicP2['swing2spreads']['R2']['description'] as string,
                            bili: biliP2['swing2spreads']['R2']['description'] as string,
                            alpha: alphaP2['swing2spreads']['R2']['description'] as string,
                            zenith: zenithP2['swing2spreads']['R2']['description'] as string,
                            alpha2: alpha2P2['swing2spreads']['R2']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['swing2spreads']['R2']['imageUrl'] as string,
                            bili: biliP2['swing2spreads']['R2']['imageUrl'] as string,
                            alpha: alphaP2['swing2spreads']['R2']['imageUrl'] as string,
                            zenith: zenithP2['swing2spreads']['R2']['imageUrl'] as string,
                            alpha2: alpha2P2['swing2spreads']['R2']['imageUrl'] as string,
                        }
                    },
                ]
            },
        ]
    },
    {
        phaseName: 'Strange Seeds (Boss South)',
        tag: 'p2',
        description: {
            toxic: toxicP2['strangeseedsbosssouth']['description'] as string,
            bili: biliP2['strangeseedsbosssouth']['description'] as string,
            alpha: alphaP2['strangeseedsbosssouth']['description'] as string,
            zenith: zenithP2['strangeseedsbosssouth']['description'] as string,
            alpha2: alpha2P2['strangeseedsbosssouth']['description'] as string,
        },
        mechs: [
            {
                mechanic: 'Seeds + Tethers',
                strats: [
                    {
                        role: 'Tank',
                        party: 1,
                        description: {
                            toxic: toxicP2['strangeseedsbosssouth']['MT']['description'] as string,
                            bili: biliP2['strangeseedsbosssouth']['MT']['description'] as string,
                            alpha: alphaP2['strangeseedsbosssouth']['MT']['description'] as string,
                            zenith: zenithP2['strangeseedsbosssouth']['MT']['description'] as string,
                            alpha2: alpha2P2['strangeseedsbosssouth']['MT']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedsbosssouth']['MT']['imageUrl'] as string,
                            bili: biliP2['strangeseedsbosssouth']['MT']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedsbosssouth']['MT']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedsbosssouth']['MT']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedsbosssouth']['MT']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Tank',
                        party: 2,
                        description: {
                            toxic: toxicP2['strangeseedsbosssouth']['OT']['description'] as string,
                            bili: biliP2['strangeseedsbosssouth']['OT']['description'] as string,
                            alpha: alphaP2['strangeseedsbosssouth']['OT']['description'] as string,
                            zenith: zenithP2['strangeseedsbosssouth']['OT']['description'] as string,
                            alpha2: alpha2P2['strangeseedsbosssouth']['OT']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedsbosssouth']['OT']['imageUrl'] as string,
                            bili: biliP2['strangeseedsbosssouth']['OT']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedsbosssouth']['OT']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedsbosssouth']['OT']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedsbosssouth']['OT']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Healer',
                        party: 1,
                        description: {
                            toxic: toxicP2['strangeseedsbosssouth']['H1']['description'] as string,
                            bili: biliP2['strangeseedsbosssouth']['H1']['description'] as string,
                            alpha: alphaP2['strangeseedsbosssouth']['H1']['description'] as string,
                            zenith: zenithP2['strangeseedsbosssouth']['H1']['description'] as string,
                            alpha2: alpha2P2['strangeseedsbosssouth']['H1']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedsbosssouth']['H1']['imageUrl'] as string,
                            bili: biliP2['strangeseedsbosssouth']['H1']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedsbosssouth']['H1']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedsbosssouth']['H1']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedsbosssouth']['H1']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Healer',
                        party: 2,
                        description: {
                            toxic: toxicP2['strangeseedsbosssouth']['H2']['description'] as string,
                            bili: biliP2['strangeseedsbosssouth']['H2']['description'] as string,
                            alpha: alphaP2['strangeseedsbosssouth']['H2']['description'] as string,
                            zenith: zenithP2['strangeseedsbosssouth']['H2']['description'] as string,
                            alpha2: alpha2P2['strangeseedsbosssouth']['H2']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedsbosssouth']['H2']['imageUrl'] as string,
                            bili: biliP2['strangeseedsbosssouth']['H2']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedsbosssouth']['H2']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedsbosssouth']['H2']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedsbosssouth']['H2']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Melee',
                        party: 1,
                        description: {
                            toxic: toxicP2['strangeseedsbosssouth']['M1']['description'] as string,
                            bili: biliP2['strangeseedsbosssouth']['M1']['description'] as string,
                            alpha: alphaP2['strangeseedsbosssouth']['M1']['description'] as string,
                            zenith: zenithP2['strangeseedsbosssouth']['M1']['description'] as string,
                            alpha2: alpha2P2['strangeseedsbosssouth']['M1']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedsbosssouth']['M1']['imageUrl'] as string,
                            bili: biliP2['strangeseedsbosssouth']['M1']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedsbosssouth']['M1']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedsbosssouth']['M1']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedsbosssouth']['M1']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Melee',
                        party: 2,
                        description: {
                            toxic: toxicP2['strangeseedsbosssouth']['M2']['description'] as string,
                            bili: biliP2['strangeseedsbosssouth']['M2']['description'] as string,
                            alpha: alphaP2['strangeseedsbosssouth']['M2']['description'] as string,
                            zenith: zenithP2['strangeseedsbosssouth']['M2']['description'] as string,
                            alpha2: alpha2P2['strangeseedsbosssouth']['M2']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedsbosssouth']['M2']['imageUrl'] as string,
                            bili: biliP2['strangeseedsbosssouth']['M2']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedsbosssouth']['M2']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedsbosssouth']['M2']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedsbosssouth']['M2']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Ranged',
                        party: 1,
                        description: {
                            toxic: toxicP2['strangeseedsbosssouth']['R1']['description'] as string,
                            bili: biliP2['strangeseedsbosssouth']['R1']['description'] as string,
                            alpha: alphaP2['strangeseedsbosssouth']['R1']['description'] as string,
                            zenith: zenithP2['strangeseedsbosssouth']['R1']['description'] as string,
                            alpha2: alpha2P2['strangeseedsbosssouth']['R1']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedsbosssouth']['R1']['imageUrl'] as string,
                            bili: biliP2['strangeseedsbosssouth']['R1']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedsbosssouth']['R1']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedsbosssouth']['R1']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedsbosssouth']['R1']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Ranged',
                        party: 2,
                        description: {
                            toxic: toxicP2['strangeseedsbosssouth']['R2']['description'] as string,
                            bili: biliP2['strangeseedsbosssouth']['R2']['description'] as string,
                            alpha: alphaP2['strangeseedsbosssouth']['R2']['description'] as string,
                            zenith: zenithP2['strangeseedsbosssouth']['R2']['description'] as string,
                            alpha2: alpha2P2['strangeseedsbosssouth']['R2']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedsbosssouth']['R2']['imageUrl'] as string,
                            bili: biliP2['strangeseedsbosssouth']['R2']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedsbosssouth']['R2']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedsbosssouth']['R2']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedsbosssouth']['R2']['imageUrl'] as string,
                        }
                    },
                ]
            },
            {
                mechanic: 'Stacks',
                strats: [
                    {
                        role: 'Tank',
                        party: 1,
                        description: {
                            toxic: toxicP2['strangeseedssouthstacks']['MT']['description'] as string,
                            bili: biliP2['strangeseedssouthstacks']['MT']['description'] as string,
                            alpha: alphaP2['strangeseedssouthstacks']['MT']['description'] as string,
                            zenith: zenithP2['strangeseedssouthstacks']['MT']['description'] as string,
                            alpha2: alpha2P2['strangeseedssouthstacks']['MT']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedssouthstacks']['MT']['imageUrl'] as string,
                            bili: biliP2['strangeseedssouthstacks']['MT']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedssouthstacks']['MT']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedssouthstacks']['MT']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedssouthstacks']['MT']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Tank',
                        party: 2,
                        description: {
                            toxic: toxicP2['strangeseedssouthstacks']['OT']['description'] as string,
                            bili: biliP2['strangeseedssouthstacks']['OT']['description'] as string,
                            alpha: alphaP2['strangeseedssouthstacks']['OT']['description'] as string,
                            zenith: zenithP2['strangeseedssouthstacks']['OT']['description'] as string,
                            alpha2: alpha2P2['strangeseedssouthstacks']['OT']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedssouthstacks']['OT']['imageUrl'] as string,
                            bili: biliP2['strangeseedssouthstacks']['OT']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedssouthstacks']['OT']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedssouthstacks']['OT']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedssouthstacks']['OT']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Healer',
                        party: 1,
                        description: {
                            toxic: toxicP2['strangeseedssouthstacks']['H1']['description'] as string,
                            bili: biliP2['strangeseedssouthstacks']['H1']['description'] as string,
                            alpha: alphaP2['strangeseedssouthstacks']['H1']['description'] as string,
                            zenith: zenithP2['strangeseedssouthstacks']['H1']['description'] as string,
                            alpha2: alpha2P2['strangeseedssouthstacks']['H1']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedssouthstacks']['H1']['imageUrl'] as string,
                            bili: biliP2['strangeseedssouthstacks']['H1']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedssouthstacks']['H1']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedssouthstacks']['H1']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedssouthstacks']['H1']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Healer',
                        party: 2,
                        description: {
                            toxic: toxicP2['strangeseedssouthstacks']['H2']['description'] as string,
                            bili: biliP2['strangeseedssouthstacks']['H2']['description'] as string,
                            alpha: alphaP2['strangeseedssouthstacks']['H2']['description'] as string,
                            zenith: zenithP2['strangeseedssouthstacks']['H2']['description'] as string,
                            alpha2: alpha2P2['strangeseedssouthstacks']['H2']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedssouthstacks']['H2']['imageUrl'] as string,
                            bili: biliP2['strangeseedssouthstacks']['H2']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedssouthstacks']['H2']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedssouthstacks']['H2']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedssouthstacks']['H2']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Melee',
                        party: 1,
                        description: {
                            toxic: toxicP2['strangeseedssouthstacks']['M1']['description'] as string,
                            bili: biliP2['strangeseedssouthstacks']['M1']['description'] as string,
                            alpha: alphaP2['strangeseedssouthstacks']['M1']['description'] as string,
                            zenith: zenithP2['strangeseedssouthstacks']['M1']['description'] as string,
                            alpha2: alpha2P2['strangeseedssouthstacks']['M1']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedssouthstacks']['M1']['imageUrl'] as string,
                            bili: biliP2['strangeseedssouthstacks']['M1']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedssouthstacks']['M1']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedssouthstacks']['M1']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedssouthstacks']['M1']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Melee',
                        party: 2,
                        description: {
                            toxic: toxicP2['strangeseedssouthstacks']['M2']['description'] as string,
                            bili: biliP2['strangeseedssouthstacks']['M2']['description'] as string,
                            alpha: alphaP2['strangeseedssouthstacks']['M2']['description'] as string,
                            zenith: zenithP2['strangeseedssouthstacks']['M2']['description'] as string,
                            alpha2: alpha2P2['strangeseedssouthstacks']['M2']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedssouthstacks']['M2']['imageUrl'] as string,
                            bili: biliP2['strangeseedssouthstacks']['M2']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedssouthstacks']['M2']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedssouthstacks']['M2']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedssouthstacks']['M2']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Ranged',
                        party: 1,
                        description: {
                            toxic: toxicP2['strangeseedssouthstacks']['R1']['description'] as string,
                            bili: biliP2['strangeseedssouthstacks']['R1']['description'] as string,
                            alpha: alphaP2['strangeseedssouthstacks']['R1']['description'] as string,
                            zenith: zenithP2['strangeseedssouthstacks']['R1']['description'] as string,
                            alpha2: alpha2P2['strangeseedssouthstacks']['R1']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedssouthstacks']['R1']['imageUrl'] as string,
                            bili: biliP2['strangeseedssouthstacks']['R1']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedssouthstacks']['R1']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedssouthstacks']['R1']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedssouthstacks']['R1']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Ranged',
                        party: 2,
                        description: {
                            toxic: toxicP2['strangeseedssouthstacks']['R2']['description'] as string,
                            bili: biliP2['strangeseedssouthstacks']['R2']['description'] as string,
                            alpha: alphaP2['strangeseedssouthstacks']['R2']['description'] as string,
                            zenith: zenithP2['strangeseedssouthstacks']['R2']['description'] as string,
                            alpha2: alpha2P2['strangeseedssouthstacks']['R2']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedssouthstacks']['R2']['imageUrl'] as string,
                            bili: biliP2['strangeseedssouthstacks']['R2']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedssouthstacks']['R2']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedssouthstacks']['R2']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedssouthstacks']['R2']['imageUrl'] as string,
                        }
                    },
                ]
            },
        ]
    },
    {
        phaseName: 'Strange Seeds (Boss North)',
        tag: 'p2',
        description: {
            toxic: toxicP2['strangeseedsbossnorth']['description'] as string,
            bili: biliP2['strangeseedsbossnorth']['description'] as string,
            alpha: alphaP2['strangeseedsbossnorth']['description'] as string,
            zenith: zenithP2['strangeseedsbossnorth']['description'] as string,
            alpha2: alpha2P2['strangeseedsbossnorth']['description'] as string,
        },
        mechs: [
            {
                mechanic: 'Seeds + Tethers',
                strats: [
                    {
                        role: 'Tank',
                        party: 1,
                        description: {
                            toxic: toxicP2['strangeseedsbossnorth']['MT']['description'] as string,
                            bili: biliP2['strangeseedsbossnorth']['MT']['description'] as string,
                            alpha: alphaP2['strangeseedsbossnorth']['MT']['description'] as string,
                            zenith: zenithP2['strangeseedsbossnorth']['MT']['description'] as string,
                            alpha2: alpha2P2['strangeseedsbossnorth']['MT']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedsbossnorth']['MT']['imageUrl'] as string,
                            bili: biliP2['strangeseedsbossnorth']['MT']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedsbossnorth']['MT']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedsbossnorth']['MT']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedsbossnorth']['MT']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Tank',
                        party: 2,
                        description: {
                            toxic: toxicP2['strangeseedsbossnorth']['OT']['description'] as string,
                            bili: biliP2['strangeseedsbossnorth']['OT']['description'] as string,
                            alpha: alphaP2['strangeseedsbossnorth']['OT']['description'] as string,
                            zenith: zenithP2['strangeseedsbossnorth']['OT']['description'] as string,
                            alpha2: alpha2P2['strangeseedsbossnorth']['OT']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedsbossnorth']['OT']['imageUrl'] as string,
                            bili: biliP2['strangeseedsbossnorth']['OT']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedsbossnorth']['OT']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedsbossnorth']['OT']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedsbossnorth']['OT']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Healer',
                        party: 1,
                        description: {
                            toxic: toxicP2['strangeseedsbossnorth']['H1']['description'] as string,
                            bili: biliP2['strangeseedsbossnorth']['H1']['description'] as string,
                            alpha: alphaP2['strangeseedsbossnorth']['H1']['description'] as string,
                            zenith: zenithP2['strangeseedsbossnorth']['H1']['description'] as string,
                            alpha2: alpha2P2['strangeseedsbossnorth']['H1']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedsbossnorth']['H1']['imageUrl'] as string,
                            bili: biliP2['strangeseedsbossnorth']['H1']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedsbossnorth']['H1']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedsbossnorth']['H1']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedsbossnorth']['H1']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Healer',
                        party: 2,
                        description: {
                            toxic: toxicP2['strangeseedsbossnorth']['H2']['description'] as string,
                            bili: biliP2['strangeseedsbossnorth']['H2']['description'] as string,
                            alpha: alphaP2['strangeseedsbossnorth']['H2']['description'] as string,
                            zenith: zenithP2['strangeseedsbossnorth']['H2']['description'] as string,
                            alpha2: alpha2P2['strangeseedsbossnorth']['H2']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedsbossnorth']['H2']['imageUrl'] as string,
                            bili: biliP2['strangeseedsbossnorth']['H2']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedsbossnorth']['H2']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedsbossnorth']['H2']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedsbossnorth']['H2']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Melee',
                        party: 1,
                        description: {
                            toxic: toxicP2['strangeseedsbossnorth']['M1']['description'] as string,
                            bili: biliP2['strangeseedsbossnorth']['M1']['description'] as string,
                            alpha: alphaP2['strangeseedsbossnorth']['M1']['description'] as string,
                            zenith: zenithP2['strangeseedsbossnorth']['M1']['description'] as string,
                            alpha2: alpha2P2['strangeseedsbossnorth']['M1']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedsbossnorth']['M1']['imageUrl'] as string,
                            bili: biliP2['strangeseedsbossnorth']['M1']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedsbossnorth']['M1']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedsbossnorth']['M1']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedsbossnorth']['M1']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Melee',
                        party: 2,
                        description: {
                            toxic: toxicP2['strangeseedsbossnorth']['M2']['description'] as string,
                            bili: biliP2['strangeseedsbossnorth']['M2']['description'] as string,
                            alpha: alphaP2['strangeseedsbossnorth']['M2']['description'] as string,
                            zenith: zenithP2['strangeseedsbossnorth']['M2']['description'] as string,
                            alpha2: alpha2P2['strangeseedsbossnorth']['M2']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedsbossnorth']['M2']['imageUrl'] as string,
                            bili: biliP2['strangeseedsbossnorth']['M2']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedsbossnorth']['M2']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedsbossnorth']['M2']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedsbossnorth']['M2']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Ranged',
                        party: 1,
                        description: {
                            toxic: toxicP2['strangeseedsbossnorth']['R1']['description'] as string,
                            bili: biliP2['strangeseedsbossnorth']['R1']['description'] as string,
                            alpha: alphaP2['strangeseedsbossnorth']['R1']['description'] as string,
                            zenith: zenithP2['strangeseedsbossnorth']['R1']['description'] as string,
                            alpha2: alpha2P2['strangeseedsbossnorth']['R1']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedsbossnorth']['R1']['imageUrl'] as string,
                            bili: biliP2['strangeseedsbossnorth']['R1']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedsbossnorth']['R1']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedsbossnorth']['R1']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedsbossnorth']['R1']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Ranged',
                        party: 2,
                        description: {
                            toxic: toxicP2['strangeseedsbossnorth']['R2']['description'] as string,
                            bili: biliP2['strangeseedsbossnorth']['R2']['description'] as string,
                            alpha: alphaP2['strangeseedsbossnorth']['R2']['description'] as string,
                            zenith: zenithP2['strangeseedsbossnorth']['R2']['description'] as string,
                            alpha2: alpha2P2['strangeseedsbossnorth']['R2']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedsbossnorth']['R2']['imageUrl'] as string,
                            bili: biliP2['strangeseedsbossnorth']['R2']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedsbossnorth']['R2']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedsbossnorth']['R2']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedsbossnorth']['R2']['imageUrl'] as string,
                        }
                    },
                ]
            },
            {
                mechanic: 'Stacks',
                strats: [
                    {
                        role: 'Tank',
                        party: 1,
                        description: {
                            toxic: toxicP2['strangeseedsnorthstacks']['MT']['description'] as string,
                            bili: biliP2['strangeseedsnorthstacks']['MT']['description'] as string,
                            alpha: alphaP2['strangeseedsnorthstacks']['MT']['description'] as string,
                            zenith: zenithP2['strangeseedsnorthstacks']['MT']['description'] as string,
                            alpha2: alpha2P2['strangeseedsnorthstacks']['MT']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedsnorthstacks']['MT']['imageUrl'] as string,
                            bili: biliP2['strangeseedsnorthstacks']['MT']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedsnorthstacks']['MT']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedsnorthstacks']['MT']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedsnorthstacks']['MT']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Tank',
                        party: 2,
                        description: {
                            toxic: toxicP2['strangeseedsnorthstacks']['OT']['description'] as string,
                            bili: biliP2['strangeseedsnorthstacks']['OT']['description'] as string,
                            alpha: alphaP2['strangeseedsnorthstacks']['OT']['description'] as string,
                            zenith: zenithP2['strangeseedsnorthstacks']['OT']['description'] as string,
                            alpha2: alpha2P2['strangeseedsnorthstacks']['OT']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedsnorthstacks']['OT']['imageUrl'] as string,
                            bili: biliP2['strangeseedsnorthstacks']['OT']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedsnorthstacks']['OT']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedsnorthstacks']['OT']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedsnorthstacks']['OT']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Healer',
                        party: 1,
                        description: {
                            toxic: toxicP2['strangeseedsnorthstacks']['H1']['description'] as string,
                            bili: biliP2['strangeseedsnorthstacks']['H1']['description'] as string,
                            alpha: alphaP2['strangeseedsnorthstacks']['H1']['description'] as string,
                            zenith: zenithP2['strangeseedsnorthstacks']['H1']['description'] as string,
                            alpha2: alpha2P2['strangeseedsnorthstacks']['H1']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedsnorthstacks']['H1']['imageUrl'] as string,
                            bili: biliP2['strangeseedsnorthstacks']['H1']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedsnorthstacks']['H1']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedsnorthstacks']['H1']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedsnorthstacks']['H1']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Healer',
                        party: 2,
                        description: {
                            toxic: toxicP2['strangeseedsnorthstacks']['H2']['description'] as string,
                            bili: biliP2['strangeseedsnorthstacks']['H2']['description'] as string,
                            alpha: alphaP2['strangeseedsnorthstacks']['H2']['description'] as string,
                            zenith: zenithP2['strangeseedsnorthstacks']['H2']['description'] as string,
                            alpha2: alpha2P2['strangeseedsnorthstacks']['H2']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedsnorthstacks']['H2']['imageUrl'] as string,
                            bili: biliP2['strangeseedsnorthstacks']['H2']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedsnorthstacks']['H2']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedsnorthstacks']['H2']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedsnorthstacks']['H2']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Melee',
                        party: 1,
                        description: {
                            toxic: toxicP2['strangeseedsnorthstacks']['M1']['description'] as string,
                            bili: biliP2['strangeseedsnorthstacks']['M1']['description'] as string,
                            alpha: alphaP2['strangeseedsnorthstacks']['M1']['description'] as string,
                            zenith: zenithP2['strangeseedsnorthstacks']['M1']['description'] as string,
                            alpha2: alpha2P2['strangeseedsnorthstacks']['M1']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedsnorthstacks']['M1']['imageUrl'] as string,
                            bili: biliP2['strangeseedsnorthstacks']['M1']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedsnorthstacks']['M1']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedsnorthstacks']['M1']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedsnorthstacks']['M1']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Melee',
                        party: 2,
                        description: {
                            toxic: toxicP2['strangeseedsnorthstacks']['M2']['description'] as string,
                            bili: biliP2['strangeseedsnorthstacks']['M2']['description'] as string,
                            alpha: alphaP2['strangeseedsnorthstacks']['M2']['description'] as string,
                            zenith: zenithP2['strangeseedsnorthstacks']['M2']['description'] as string,
                            alpha2: alpha2P2['strangeseedsnorthstacks']['M2']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedsnorthstacks']['M2']['imageUrl'] as string,
                            bili: biliP2['strangeseedsnorthstacks']['M2']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedsnorthstacks']['M2']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedsnorthstacks']['M2']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedsnorthstacks']['M2']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Ranged',
                        party: 1,
                        description: {
                            toxic: toxicP2['strangeseedsnorthstacks']['R1']['description'] as string,
                            bili: biliP2['strangeseedsnorthstacks']['R1']['description'] as string,
                            alpha: alphaP2['strangeseedsnorthstacks']['R1']['description'] as string,
                            zenith: zenithP2['strangeseedsnorthstacks']['R1']['description'] as string,
                            alpha2: alpha2P2['strangeseedsnorthstacks']['R1']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedsnorthstacks']['R1']['imageUrl'] as string,
                            bili: biliP2['strangeseedsnorthstacks']['R1']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedsnorthstacks']['R1']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedsnorthstacks']['R1']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedsnorthstacks']['R1']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Ranged',
                        party: 2,
                        description: {
                            toxic: toxicP2['strangeseedsnorthstacks']['R2']['description'] as string,
                            bili: biliP2['strangeseedsnorthstacks']['R2']['description'] as string,
                            alpha: alphaP2['strangeseedsnorthstacks']['R2']['description'] as string,
                            zenith: zenithP2['strangeseedsnorthstacks']['R2']['description'] as string,
                            alpha2: alpha2P2['strangeseedsnorthstacks']['R2']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['strangeseedsnorthstacks']['R2']['imageUrl'] as string,
                            bili: biliP2['strangeseedsnorthstacks']['R2']['imageUrl'] as string,
                            alpha: alphaP2['strangeseedsnorthstacks']['R2']['imageUrl'] as string,
                            zenith: zenithP2['strangeseedsnorthstacks']['R2']['imageUrl'] as string,
                            alpha2: alpha2P2['strangeseedsnorthstacks']['R2']['imageUrl'] as string,
                        }
                    },
                ]
            },
        ]
    },
    {
        phaseName: 'Brutish Swing 3',
        tag: 'p2',
        description: {
            toxic: 'MT M1 R1 edge of arena\nOT M2 R2 middle of arena\nHealers middle of arena',
            bili: biliP2['swing3spreads']['description'] as string,
            alpha: alphaP2['swing3spreads']['description'] as string,
            zenith: zenithP2['swing3spreads']['description'] as string,
            alpha2: alpha2P2['swing3spreads']['description'] as string,
        },
        mechs: [
            {
                mechanic: 'Spreads',
                strats: [
                    {
                        role: 'Tank',
                        party: 1,
                        description: {
                            toxic: toxicP2['swing3spreads']['MT']['description'] as string,
                            bili: biliP2['swing3spreads']['MT']['description'] as string,
                            alpha: alphaP2['swing3spreads']['MT']['description'] as string,
                            zenith: zenithP2['swing3spreads']['MT']['description'] as string,
                            alpha2: alpha2P2['swing3spreads']['MT']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['swing3spreads']['MT']['imageUrl'] as string,
                            bili: biliP2['swing3spreads']['MT']['imageUrl'] as string,
                            alpha: alphaP2['swing3spreads']['MT']['imageUrl'] as string,
                            zenith: zenithP2['swing3spreads']['MT']['imageUrl'] as string,
                            alpha2: alpha2P2['swing3spreads']['MT']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Tank',
                        party: 2,
                        description: {
                            toxic: toxicP2['swing3spreads']['OT']['description'] as string,
                            bili: biliP2['swing3spreads']['OT']['description'] as string,
                            alpha: alphaP2['swing3spreads']['OT']['description'] as string,
                            zenith: zenithP2['swing3spreads']['OT']['description'] as string,
                            alpha2: alpha2P2['swing3spreads']['OT']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['swing3spreads']['OT']['imageUrl'] as string,
                            bili: biliP2['swing3spreads']['OT']['imageUrl'] as string,
                            alpha: alphaP2['swing3spreads']['OT']['imageUrl'] as string,
                            zenith: zenithP2['swing3spreads']['OT']['imageUrl'] as string,
                            alpha2: alpha2P2['swing3spreads']['OT']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Healer',
                        party: 1,
                        description: {
                            toxic: toxicP2['swing3spreads']['H1']['description'] as string,
                            bili: biliP2['swing3spreads']['H1']['description'] as string,
                            alpha: alphaP2['swing3spreads']['H1']['description'] as string,
                            zenith: zenithP2['swing3spreads']['H1']['description'] as string,
                            alpha2: alpha2P2['swing3spreads']['H1']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['swing3spreads']['H1']['imageUrl'] as string,
                            bili: biliP2['swing3spreads']['H1']['imageUrl'] as string,
                            alpha: alphaP2['swing3spreads']['H1']['imageUrl'] as string,
                            zenith: zenithP2['swing3spreads']['H1']['imageUrl'] as string,
                            alpha2: alpha2P2['swing3spreads']['H1']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Healer',
                        party: 2,
                        description: {
                            toxic: toxicP2['swing3spreads']['H2']['description'] as string,
                            bili: biliP2['swing3spreads']['H2']['description'] as string,
                            alpha: alphaP2['swing3spreads']['H2']['description'] as string,
                            zenith: zenithP2['swing3spreads']['H2']['description'] as string,
                            alpha2: alpha2P2['swing3spreads']['H2']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['swing3spreads']['H2']['imageUrl'] as string,
                            bili: biliP2['swing3spreads']['H2']['imageUrl'] as string,
                            alpha: alphaP2['swing3spreads']['H2']['imageUrl'] as string,
                            zenith: zenithP2['swing3spreads']['H2']['imageUrl'] as string,
                            alpha2: alpha2P2['swing3spreads']['H2']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Melee',
                        party: 1,
                        description: {
                            toxic: toxicP2['swing3spreads']['M1']['description'] as string,
                            bili: biliP2['swing3spreads']['M1']['description'] as string,
                            alpha: alphaP2['swing3spreads']['M1']['description'] as string,
                            zenith: zenithP2['swing3spreads']['M1']['description'] as string,
                            alpha2: alpha2P2['swing3spreads']['M1']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['swing3spreads']['M1']['imageUrl'] as string,
                            bili: biliP2['swing3spreads']['M1']['imageUrl'] as string,
                            alpha: alphaP2['swing3spreads']['M1']['imageUrl'] as string,
                            zenith: zenithP2['swing3spreads']['M1']['imageUrl'] as string,
                            alpha2: alpha2P2['swing3spreads']['M1']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Melee',
                        party: 2,
                        description: {
                            toxic: toxicP2['swing3spreads']['M2']['description'] as string,
                            bili: biliP2['swing3spreads']['M2']['description'] as string,
                            alpha: alphaP2['swing3spreads']['M2']['description'] as string,
                            zenith: zenithP2['swing3spreads']['M2']['description'] as string,
                            alpha2: alpha2P2['swing3spreads']['M2']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['swing3spreads']['M2']['imageUrl'] as string,
                            bili: biliP2['swing3spreads']['M2']['imageUrl'] as string,
                            alpha: alphaP2['swing3spreads']['M2']['imageUrl'] as string,
                            zenith: zenithP2['swing3spreads']['M2']['imageUrl'] as string,
                            alpha2: alpha2P2['swing3spreads']['M2']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Ranged',
                        party: 1,
                        description: {
                            toxic: toxicP2['swing3spreads']['R1']['description'] as string,
                            bili: biliP2['swing3spreads']['R1']['description'] as string,
                            alpha: alphaP2['swing3spreads']['R1']['description'] as string,
                            zenith: zenithP2['swing3spreads']['R1']['description'] as string,
                            alpha2: alpha2P2['swing3spreads']['R1']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['swing3spreads']['R1']['imageUrl'] as string,
                            bili: biliP2['swing3spreads']['R1']['imageUrl'] as string,
                            alpha: alphaP2['swing3spreads']['R1']['imageUrl'] as string,
                            zenith: zenithP2['swing3spreads']['R1']['imageUrl'] as string,
                            alpha2: alpha2P2['swing3spreads']['R1']['imageUrl'] as string,
                        }
                    },
                    {
                        role: 'Ranged',
                        party: 2,
                        description: {
                            toxic: toxicP2['swing3spreads']['R2']['description'] as string,
                            bili: biliP2['swing3spreads']['R2']['description'] as string,
                            alpha: alphaP2['swing3spreads']['R2']['description'] as string,
                            zenith: zenithP2['swing3spreads']['R2']['description'] as string,
                            alpha2: alpha2P2['swing3spreads']['R2']['description'] as string,
                        },
                        imageUrl: {
                            toxic: toxicP2['swing3spreads']['R2']['imageUrl'] as string,
                            bili: biliP2['swing3spreads']['R2']['imageUrl'] as string,
                            alpha: alphaP2['swing3spreads']['R2']['imageUrl'] as string,
                            zenith: zenithP2['swing3spreads']['R2']['imageUrl'] as string,
                            alpha2: alpha2P2['swing3spreads']['R2']['imageUrl'] as string,
                        }
                    },
                ]
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
                description: 'R1/MT North, R2/OT South, H1/M1 West, H2/M2 East',
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

