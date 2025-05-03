import type { TimelineItem } from "$lib/types";
import { getCircleMaskUrl, getRectMaskUrl } from "$lib/utils";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({params}) => {
    return {
        strats: [latteStrat, toxicStrat, sunStrat, evansithStrat, hectorStrat, game8Strat, oceStrat],
        timeline: timeline,
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

const timeline: TimelineItem[] = [
    {
        mechName: 'Start',
        mechType: 'Start',
        startTimeMs: 0,
    },
    {
        mechName: 'Deep Cut',
        mechType: 'Tankbuster',
        startTimeMs: 15246,
    },
    {
        mechName: 'A/B-Side (Cast)',
        mechType: 'StoredMechanic',
        startTimeMs: 23415,
    },
    {
        mechName: '#-snap Twist + A/B',
        mechType: 'Mechanic',
        startTimeMs: 29523,
    },
    {
        mechName: 'A/B-Side (Cast)',
        mechType: 'StoredMechanic',
        startTimeMs: 42764,
    },
    {
        mechName: '#-snap Twist + A/B',
        mechType: 'Mechanic',
        startTimeMs: 48868,
    },
    {
        mechName: 'Celebrate',
        mechType: 'Raidwide',
        startTimeMs: 65084,
    },
    {
        mechName: 'Disco Infernal 1',
        mechType: 'Mechanic',
        startTimeMs: 77483,
    },
    {
        mechName: 'A/B-Side (Cast)',
        mechType: 'StoredMechanic',
        startTimeMs: 95711,
    },
    {
        mechName: '#-snap Twist + A/B',
        mechType: 'Mechanic',
        startTimeMs: 112275,
    },
    {
        mechName: 'Celebrate',
        mechType: 'Raidwide',
        startTimeMs: 128490,
    },
    {
        mechName: 'Deep Cut',
        mechType: 'Tankbuster',
        startTimeMs: 135941,
    },
    {
        mechName: 'Ensemble Assemble 1',
        mechType: 'Mechanic',
        startTimeMs: 144232,
    },
    {
        mechName: 'Arcady Night Fever 1',
        mechType: 'Mechanic',
        startTimeMs: 155150,
    },
    {
        mechName: `Let's Dance 1`,
        mechType: 'Mechanic',
        startTimeMs: 177184,
    },
    {
        mechName: 'A/B-Side (Cast)',
        mechType: 'StoredMechanic',
        startTimeMs: 223625,
    },
    {
        mechName: 'Ride the Waves',
        mechType: 'Mechanic',
        startTimeMs: 233208,
    },
    {
        mechName: '#-snap Twist + A/B',
        mechType: 'Mechanic',
        startTimeMs: 266994,
    },
    {
        mechName: 'Deep Cut',
        mechType: 'Tankbuster',
        startTimeMs: 284552,
    },
    {
        mechName: 'Celebrate',
        mechType: 'Raidwide',
        startTimeMs: 291365,
    },
    {
        mechName: 'Frogtourage 1',
        mechType: 'Mechanic',
        startTimeMs: 302737,
    },
    {
        mechName: 'Disco Infernal 2',
        mechType: 'Mechanic',
        startTimeMs: 325013,
    },
    {
        mechName: 'A/B-Side (Cast)',
        mechType: 'StoredMechanic',
        startTimeMs: 342306,
    },
    {
        mechName: '#-snap Twist + A/B',
        mechType: 'Mechanic',
        startTimeMs: 348415,
    },
    {
        mechName: 'Celebrate',
        mechType: 'Raidwide',
        startTimeMs: 364636,
    },
    {
        mechName: 'Ensemble Assemble 2',
        mechType: 'Mechanic',
        startTimeMs: 373241,
    },
    {
        mechName: 'Arcady Night Fever 2',
        mechType: 'Mechanic',
        startTimeMs: 384163,
    },
    {
        mechName: `Let's Dance 2`,
        mechType: 'Mechanic',
        startTimeMs: 406205,
    },
    {
        mechName: 'Frogtourage 2',
        mechType: 'Mechanic',
        startTimeMs: 449952,
    },
    {
        mechName: 'Deep Cut',
        mechType: 'Tankbuster',
        startTimeMs: 515082,
    },
    {
        mechName: 'Funky Floor 2',
        mechType: 'Mechanic',
        startTimeMs: 525650,
    },
    {
        mechName: 'Celebrate',
        mechType: 'Raidwide',
        startTimeMs: 561080,
    },
    {
        mechName: 'Celebrate',
        mechType: 'Raidwide',
        startTimeMs: 571240,
    },
    {
        mechName: 'Enrage',
        mechType: 'Enrage',
        startTimeMs: 606421
    }
]

const latteStrat: Strat = {
    stratName: 'latte',
    description: 'Source: Raidplan by Lalatte Latte',
    notes: '',
    stratUrl: 'https://raidplan.io/plan/X-fxE5sxTx2JXd5m',
    strats: [
        {
            phaseName: '#-snap Twist', 
            mechs: [
                {
                    mechanic: 'A-Side',
                    description: 'Role stacks',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/latte/twist-aside.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'North',
                            imageUrl: './m5s/latte/twist-aside.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'E/W',
                            imageUrl: './m5s/latte/twist-aside.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'E/W',
                            imageUrl: './m5s/latte/twist-aside.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'South',
                            imageUrl: './m5s/latte/twist-aside.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/latte/twist-aside.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'South',
                            imageUrl: './m5s/latte/twist-aside.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/latte/twist-aside.webp',
                        },
                    ]
                },
                {
                    mechanic: 'B-Side',
                    description: 'Light party stacks\nG1 North, G2 South',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/latte/twist-bside.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/latte/twist-bside.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/latte/twist-bside.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/latte/twist-bside.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/latte/twist-bside.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/latte/twist-bside.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/latte/twist-bside.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/latte/twist-bside.webp',
                        },
                    ]
                }
            ]
        },
        {
            phaseName: 'Disco Infernal 1', 
            description: 'Safe spotlight starts on an unsafe tile',
            mechs: [
                {
                    mechanic: 'Spotlights',
                    description: 'G1 North, G2 South',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'North half, close to boss',
                            imageUrl: './m5s/latte/disco-infernal-1.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'South half, close to boss',
                            imageUrl: './m5s/latte/disco-infernal-1.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'North half, far from boss',
                            imageUrl: './m5s/latte/disco-infernal-1.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South half, far from boss',
                            imageUrl: './m5s/latte/disco-infernal-1.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'North half, close to boss',
                            imageUrl: './m5s/latte/disco-infernal-1.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South half, close to boss',
                            imageUrl: './m5s/latte/disco-infernal-1.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'North half, far from boss',
                            imageUrl: './m5s/latte/disco-infernal-1.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South half, far from boss',
                            imageUrl: './m5s/latte/disco-infernal-1.webp',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Arcady Night Fever 1/2', 
            description: 'HTTH North, RMMR South\nRotten Debuffs',
            mechs: [
                {
                    mechanic: 'Proteans',
                    description: 'Dodge East or West after getting hit',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'North-Northeast',
                            imageUrl: './m5s/latte/arcady-proteans.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'North-Northwest',
                            imageUrl: './m5s/latte/arcady-proteans.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'East-Northeast',
                            imageUrl: './m5s/latte/arcady-proteans.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'West-Northwest',
                            imageUrl: './m5s/latte/arcady-proteans.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'South-Southwest',
                            imageUrl: './m5s/latte/arcady-proteans.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South-Southeast',
                            imageUrl: './m5s/latte/arcady-proteans.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West-Southwest',
                            imageUrl: './m5s/latte/arcady-proteans.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East-Southeast',
                            imageUrl: './m5s/latte/arcady-proteans.webp',
                        },
                    ]
                },
                {
                    mechanic: 'Debuffs',
                    description: 'Party stacks South\nMeet North to resolve debuffs at 5s',
                    imageUrl: './m5s/latte/arcady-debuffs.webp',
                },
            ]
        },
        {
            phaseName: 'Ride the Waves', 
            description: 'G1 West G2 East',
            mechs: [
                {
                    mechanic: 'Stacks/Spreads',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'West lane, north side, close to boss\nStack with R1',
                            imageUrl: './m5s/latte/ride-the-wave.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'East lane, north side, close to boss\nStack with R2',
                            imageUrl: './m5s/latte/ride-the-wave.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West lane, south side, far from boss\nStack with M1',
                            imageUrl: './m5s/latte/ride-the-wave.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East lane, north side, far from boss\nStack with M2',
                            imageUrl: './m5s/latte/ride-the-wave.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'West lane, south side, close to boss\nStack with H1',
                            imageUrl: './m5s/latte/ride-the-wave.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'East lane, north side, close to boss\nStack with H2',
                            imageUrl: './m5s/latte/ride-the-wave.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West lane, north side, far from boss\nStack with MT',
                            imageUrl: './m5s/latte/ride-the-wave.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East lane, north side, far from boss\nStack with OT',
                            imageUrl: './m5s/latte/ride-the-wave.webp',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Frogtourage 1', 
            description: 'G1 North/West G2 South/East',
            mechs: [
                {
                    mechanic: 'Stacks/Spreads',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'North or West\nFront left facing boss\nStack with M1',
                            imageUrl: './m5s/latte/frogtourage-1.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'South or East\nFront right facing boss\nStack with M2',
                            imageUrl: './m5s/latte/frogtourage-1.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'North or West\nBack right facing boss\nStack with R1',
                            imageUrl: './m5s/latte/frogtourage-1.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South or East\nBack left facing boss\nStack with R2',
                            imageUrl: './m5s/latte/frogtourage-1.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'North or West\nFront right facing boss\nStack with MT',
                            imageUrl: './m5s/latte/frogtourage-1.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South or East\nBack left facing boss\nStack with OT',
                            imageUrl: './m5s/latte/frogtourage-1.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'North or West\nBack left facing boss\nStack with H1',
                            imageUrl: './m5s/latte/frogtourage-1.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South or East\nBack right facing boss\nStack with H2',
                            imageUrl: './m5s/latte/frogtourage-1.webp',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Disco Infernal 2', 
            description: 'Color Partners\nShort debuffs take spotlights first',
            mechs: [
                {
                    mechanic: 'Spotlights',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/latte/disco-infernal-2-supports.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/latte/disco-infernal-2-supports.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/latte/disco-infernal-2-supports.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/latte/disco-infernal-2-supports.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/latte/disco-infernal-2-dps.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/latte/disco-infernal-2-dps.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/latte/disco-infernal-2-dps.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/latte/disco-infernal-2-dps.webp',
                        },
                    ]
                },
                {
                    mechanic: 'Baits',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/latte/disco-infernal-2-dps.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/latte/disco-infernal-2-dps.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/latte/disco-infernal-2-dps.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/latte/disco-infernal-2-dps.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/latte/disco-infernal-2-supports.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/latte/disco-infernal-2-supports.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/latte/disco-infernal-2-supports.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/latte/disco-infernal-2-supports.webp',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'More Amphibians', 
            description: 'Color Partners\nSupports bait first',
            mechs: [
                {
                    mechanic: 'Baits',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/latte/more-amphibians.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/latte/more-amphibians.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/latte/more-amphibians.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/latte/more-amphibians.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/latte/more-amphibians.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/latte/more-amphibians.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/latte/more-amphibians.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/latte/more-amphibians.webp',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Funky Floor 2', 
            description: 'Melee close, Ranged far\nColor partners for stacks',
            mechs: [
                {
                    mechanic: 'Stack/Spread',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Stack with R1',
                            imageUrl: './m5s/latte/funky-floor-2.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Stack with M2',
                            imageUrl: './m5s/latte/funky-floor-2.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Stack with M1',
                            imageUrl: './m5s/latte/funky-floor-2.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Stack with R2',
                            imageUrl: './m5s/latte/funky-floor-2.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Stack with H1',
                            imageUrl: './m5s/latte/funky-floor-2.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Stack with OT',
                            imageUrl: './m5s/latte/funky-floor-2.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Stack with MT',
                            imageUrl: './m5s/latte/funky-floor-2.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Stack with H2',
                            imageUrl: './m5s/latte/funky-floor-2.webp',
                        },
                    ]
                },
            ]
        }
    ]
}

const toxicStrat: Strat = {
    stratName: 'toxic',
    description: 'Source: Raidplan by Cute Animal@Omega and Toxic Friends',
    notes: '',
    stratUrl: 'https://raidplan.io/plan/pztjVHnzfhEkg6pH',
    strats: [
        {
            phaseName: '#-snap Twist', 
            mechs: [
                {
                    mechanic: 'A-Side',
                    description: 'Role stacks',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/toxic/twist-aside.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'North',
                            imageUrl: './m5s/toxic/twist-aside.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'E/W',
                            imageUrl: './m5s/toxic/twist-aside.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'E/W',
                            imageUrl: './m5s/toxic/twist-aside.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'South',
                            imageUrl: './m5s/toxic/twist-aside.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/toxic/twist-aside.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'South',
                            imageUrl: './m5s/toxic/twist-aside.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/toxic/twist-aside.webp',
                        },
                    ]
                },
                {
                    mechanic: 'B-Side',
                    description: 'Light party stacks\nG1 North, G2 South',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/toxic/twist-bside.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/toxic/twist-bside.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/toxic/twist-bside.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/toxic/twist-bside.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/toxic/twist-bside.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/toxic/twist-bside.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/toxic/twist-bside.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/toxic/twist-bside.webp',
                        },
                    ]
                }
            ]
        },
        {
            phaseName: 'Disco Infernal 1', 
            description: 'Safe spotlight starts on an unsafe tile',
            mechs: [
                {
                    mechanic: 'Spotlights',
                    description: 'Melee G1 N/W G2 S/E\nRanged G1 West, G2 East',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'N/W, close to boss',
                            imageUrl: './m5s/toxic/disco-infernal-1-supports.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'S/E, close to boss',
                            imageUrl: './m5s/toxic/disco-infernal-1-supports.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West half, far from boss',
                            imageUrl: './m5s/toxic/disco-infernal-1-supports.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East half, far from boss',
                            imageUrl: './m5s/toxic/disco-infernal-1-supports.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'N/W, close to boss',
                            imageUrl: './m5s/toxic/disco-infernal-1-dps.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'S/E, close to boss',
                            imageUrl: './m5s/toxic/disco-infernal-1-dps.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West half, far from boss',
                            imageUrl: './m5s/toxic/disco-infernal-1-dps.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East half, far from boss',
                            imageUrl: './m5s/toxic/disco-infernal-1-dps.webp',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Arcady Night Fever 1/2', 
            description: 'THHT West, RRMM East\nConga Debuffs',
            mechs: [
                {
                    mechanic: 'Proteans',
                    description: 'Dodge out of protean after getting hit',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'North-Northwest (Furthest North)',
                            imageUrl: './m5s/toxic/arcady-proteans.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'South-Southwest (Middle North)',
                            imageUrl: './m5s/toxic/arcady-proteans.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West-Northwest (Middle South)',
                            imageUrl: './m5s/toxic/arcady-proteans.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'West-Southwest (Furthest South)',
                            imageUrl: './m5s/toxic/arcady-proteans.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'East-Southeast (Middle South)',
                            imageUrl: './m5s/toxic/arcady-proteans.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South-Southeast (Furthest South)',
                            imageUrl: './m5s/toxic/arcady-proteans.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'North-Northeast (Furthest North)',
                            imageUrl: './m5s/toxic/arcady-proteans.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East-Northeast (Middle North)',
                            imageUrl: './m5s/toxic/arcady-proteans.webp',
                        },
                    ]
                },
                {
                    mechanic: 'Debuffs',
                    description: 'Stack with your debuff timer partner\nShortest north, longest south\n10-15-20-25',
                    imageUrl: './m5s/toxic/arcady-debuffs.webp',
                },
            ]
        },
        {
            phaseName: 'Ride the Waves', 
            description: 'G1 West, G2 East\nRanged Far, Melee Close\nTR HM Stacks',
            mechs: [
                {
                    mechanic: 'Stacks/Spreads',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'West lane, North side, Close\nStack with R1',
                            imageUrl: './m5s/toxic/ride-the-wave.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'East lane, North side, Close\nStack with R2',
                            imageUrl: './m5s/toxic/ride-the-wave.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West lane, South side, Far\nStack with M1',
                            imageUrl: './m5s/toxic/ride-the-wave.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East lane, South side, Far\nStack with M2',
                            imageUrl: './m5s/toxic/ride-the-wave.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'West lane, South side, Close\nStack with H1',
                            imageUrl: './m5s/toxic/ride-the-wave.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'East lane, South side, Close\nStack with H2',
                            imageUrl: './m5s/toxic/ride-the-wave.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West lane, North side, Far\nStack with MT',
                            imageUrl: './m5s/toxic/ride-the-wave.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East lane, North side, Far\nStack with OT',
                            imageUrl: './m5s/toxic/ride-the-wave.webp',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Frogtourage 1', 
            description: 'G1 North/West G2 South/East\nSupports Left DPS Right',
            mechs: [
                {
                    mechanic: 'Stacks/Spreads',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'North or West\nFront left facing boss\nStack with M1',
                            imageUrl: './m5s/toxic/frogtourage-1.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'South or East\nFront left facing boss\nStack with M2',
                            imageUrl: './m5s/toxic/frogtourage-1.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'North or West\nBack left facing boss\nStack with R1',
                            imageUrl: './m5s/toxic/frogtourage-1.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South or East\nBack left facing boss\nStack with R2',
                            imageUrl: './m5s/toxic/frogtourage-1.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'North or West\nFront right facing boss\nStack with MT',
                            imageUrl: './m5s/toxic/frogtourage-1.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South or East\nFront right facing boss\nStack with OT',
                            imageUrl: './m5s/toxic/frogtourage-1.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'North or West\nBack right facing boss\nStack with H1',
                            imageUrl: './m5s/toxic/frogtourage-1.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South or East\nBack right facing boss\nStack with H2',
                            imageUrl: './m5s/toxic/frogtourage-1.webp',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Disco Infernal 2', 
            description: 'Color Partners\nShort debuffs take spotlights first',
            mechs: [
                {
                    mechanic: 'Spotlights',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/toxic/disco-infernal-2-supports.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/toxic/disco-infernal-2-supports.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/toxic/disco-infernal-2-supports.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/toxic/disco-infernal-2-supports.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/toxic/disco-infernal-2-dps.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/toxic/disco-infernal-2-dps.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/toxic/disco-infernal-2-dps.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/toxic/disco-infernal-2-dps.webp',
                        },
                    ]
                },
                {
                    mechanic: 'Baits',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/toxic/disco-infernal-2-dps.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/toxic/disco-infernal-2-dps.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/toxic/disco-infernal-2-dps.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/toxic/disco-infernal-2-dps.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/toxic/disco-infernal-2-supports.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/toxic/disco-infernal-2-supports.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/toxic/disco-infernal-2-supports.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/toxic/disco-infernal-2-supports.webp',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'More Amphibians', 
            description: 'Color Partners\nSupports bait first',
            mechs: [
                {
                    mechanic: 'Baits',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/toxic/more-amphibians-supports.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/toxic/more-amphibians-supports.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/toxic/more-amphibians-supports.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/toxic/more-amphibians-supports.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/toxic/more-amphibians-dps.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/toxic/more-amphibians-dps.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/toxic/more-amphibians-dps.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/toxic/more-amphibians-dps.webp',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Funky Floor 2', 
            description: 'Melee close, Ranged far\nT/M H/R for stacks',
            mechs: [
                {
                    mechanic: 'Stack/Spread',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Stack with M1',
                            imageUrl: './m5s/toxic/funky-floor-2.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Stack with M2',
                            imageUrl: './m5s/toxic/funky-floor-2.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Stack with R1',
                            imageUrl: './m5s/toxic/funky-floor-2.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Stack with R2',
                            imageUrl: './m5s/toxic/funky-floor-2.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Stack with MT',
                            imageUrl: './m5s/toxic/funky-floor-2.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Stack with OT',
                            imageUrl: './m5s/toxic/funky-floor-2.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Stack with H1',
                            imageUrl: './m5s/toxic/funky-floor-2.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Stack with H2',
                            imageUrl: './m5s/toxic/funky-floor-2.webp',
                        },
                    ]
                },
            ]
        }
    ]
}

const sunStrat: Strat = {
    stratName: 'sun',
    description: 'Source: Sun Strat Raidplan',
    notes: '',
    stratUrl: 'https://raidplan.io/plan/h-WjosHQoM7oJR0n',
    strats: [
        {
            phaseName: '#-snap Twist', 
            mechs: [
                {
                    mechanic: 'A-Side',
                    description: 'Role stacks',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'North',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'North',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'E/W',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'E/W',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'South',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'South',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South',
                        },
                    ]
                },
                {
                    mechanic: 'B-Side',
                    description: 'Light party stacks\nG1 North, G2 South',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'North',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'South',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'North',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'North',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'North',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South',
                        },
                    ]
                }
            ]
        },
        {
            phaseName: 'Disco Infernal 1', 
            description: 'Safe spotlight starts on an unsafe tile',
            mechs: [
                {
                    mechanic: 'Spotlights',
                    description: 'G1 West, G2 East',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'West half, close to boss',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'East half, close to boss',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West half, far from boss',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East half, far from boss',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'West half, close to boss',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'East half, close to boss',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West half, far from boss',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East half, far from boss',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Arcady Night Fever 1/2', 
            description: 'HTTH North, RMMR South\nConga Debuffs',
            mechs: [
                {
                    mechanic: 'Proteans',
                    description: 'Dodge out of protean after getting hit',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'North-Northwest',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'North-Northeast',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West-Northwest',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East-Northeast',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'South-Southwest',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South-Southeast',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West-Southwest',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East-Southeast',
                        },
                    ]
                },
                {
                    mechanic: 'Debuffs',
                    description: 'Stack with your debuff timer partner\nShortest north, longest south\n10-15-20-25',
                },
            ]
        },
        {
            phaseName: 'Ride the Waves', 
            description: 'Melee close, Ranged far',
            mechs: [
                {
                    mechanic: 'Stacks/Spreads',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Close lane, north side, close to boss\nStack with M1',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Close lane, south side, close to boss\nStack with M2',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Far lane, north side, close from boss\nStack with R1',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Far lane, south side, close from boss\nStack with R2',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Close lane, north side, far from boss\nStack with MT',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Close lane, south side, far from boss\nStack with OT',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Far lane, north side, close to boss\nStack with H1',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Far lane, south side, close from boss\nStack with H2',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Frogtourage 1', 
            description: 'G1 North/West G2 South/East\nSupports Left DPS Right facing boss',
            mechs: [
                {
                    mechanic: 'Stacks/Spreads',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'North or West\nFront left facing boss\nStack with M1',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'South or East\nFront left facing boss\nStack with M2',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'North or West\nBack left facing boss\nStack with R1',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South or East\nBack left facing boss\nStack with R2',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'North or West\nFront right facing boss\nStack with MT',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South or East\nFront right facing boss\nStack with OT',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'North or West\nBack right facing boss\nStack with H1',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South or East\nBack right facing boss\nStack with H2',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Disco Infernal 2', 
            description: 'Color Partners\nShort debuffs take spotlights first',
            mechs: [
                {
                    mechanic: 'Spotlights',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                        },
                    ]
                },
                {
                    mechanic: 'Baits',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'More Amphibians', 
            description: 'Color Partners\nSupports bait first',
            mechs: [
                {
                    mechanic: 'Baits',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Funky Floor 2', 
            description: 'Melee close, Ranged far\nColor partners for stacks',
            mechs: [
                {
                    mechanic: 'Stack/Spread',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Stack with R1',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Stack with R2',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Stack with M1',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Stack with M2',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Stack with H1',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Stack with H2',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Stack with MT',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Stack with OT',
                        },
                    ]
                },
            ]
        }
    ]
}

const evansithStrat: Strat = {
    stratName: 'evansith',
    description: 'Source: Raidplan by Evansith',
    notes: '',
    stratUrl: {
        'Part 1': 'https://raidplan.io/plan/xLodsjMOZ3jGmopK',
        'Part 2': 'https://raidplan.io/plan/iZdwA3hbQkp6HEsp'
    },
    strats: [
        {
            phaseName: 'Under Construction', 
        }
    ],
}

const hectorStrat: Strat = {
    stratName: 'hector',
    description: 'Source: Video by Hector Hectorson',
    notes: 'This strat uses non-standard "Color Partners" that place OT on Yellow (East) and H2 on Blue (South)',
    stratUrl: 'https://www.youtube.com/watch?v=6ibKI011KjA',
    strats: [
        {
            phaseName: '#-snap Twist', 
            mechs: [
                {
                    mechanic: 'A-Side',
                    description: 'Role stacks',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/hector/twist-aside.webp',
                            mask: getCircleMaskUrl(50, 35, 10)
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'North',
                            imageUrl: './m5s/hector/twist-aside.webp',
                            mask: getCircleMaskUrl(50, 35, 10)
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'E/W',
                            imageUrl: './m5s/hector/twist-aside.webp',
                            mask: getRectMaskUrl(30, 70, 44, 58)
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'E/W',
                            imageUrl: './m5s/hector/twist-aside.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'South',
                            imageUrl: './m5s/hector/twist-aside.webp',
                            mask: getCircleMaskUrl(50, 65, 10)
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/hector/twist-aside.webp',
                            mask: getCircleMaskUrl(50, 65, 10)
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'South',
                            imageUrl: './m5s/hector/twist-aside.webp',
                            mask: getCircleMaskUrl(50, 65, 10)
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/hector/twist-aside.webp',
                            mask: getCircleMaskUrl(50, 65, 10)
                        },
                    ]
                },
                {
                    mechanic: 'B-Side',
                    description: 'Light party stacks\nG1 North, G2 South',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/hector/twist-bside.webp',
                            mask: getRectMaskUrl(36, 64, 20, 51)
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/hector/twist-bside.webp',
                            mask: getRectMaskUrl(36, 64, 51, 82)
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/hector/twist-bside.webp',
                            mask: getRectMaskUrl(36, 64, 20, 51)
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/hector/twist-bside.webp',
                            mask: getRectMaskUrl(36, 64, 51, 82)
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/hector/twist-bside.webp',
                            mask: getRectMaskUrl(36, 64, 20, 51)
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/hector/twist-bside.webp',
                            mask: getRectMaskUrl(36, 64, 51, 82)
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/hector/twist-bside.webp',
                            mask: getRectMaskUrl(36, 64, 20, 51)
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/hector/twist-bside.webp',
                            mask: getRectMaskUrl(36, 64, 51, 82)
                        },
                    ]
                }
            ]
        },
        {
            phaseName: 'Disco Infernal 1', 
            description: 'Safe spotlight starts on an unsafe tile',
            mechs: [
                {
                    mechanic: 'Spotlights',
                    description: 'G1 West, G2 East',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'West half, close to boss',
                            imageUrl: './m5s/hector/disco-infernal-1-supports.webp',
                            mask: getRectMaskUrl(29, 50, 30.5, 72)
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'East half, close to boss',
                            imageUrl: './m5s/hector/disco-infernal-1-supports.webp',
                            mask: getRectMaskUrl(50, 71, 30.5, 72)
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West half, far from boss',
                            imageUrl: './m5s/hector/disco-infernal-1-supports.webp',
                            mask: getRectMaskUrl(18.5, 29.5, 20, 82.5)
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East half, far from boss',
                            imageUrl: './m5s/hector/disco-infernal-1-supports.webp',
                            mask: getRectMaskUrl(70.5, 81.5, 20, 82.5)
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'West half, close to boss',
                            imageUrl: './m5s/hector/disco-infernal-1-dps.webp',
                            mask: getRectMaskUrl(29, 50, 30.5, 72)
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'East half, close to boss',
                            imageUrl: './m5s/hector/disco-infernal-1-dps.webp',
                            mask: getRectMaskUrl(50, 71, 30.5, 72)
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West half, far from boss',
                            imageUrl: './m5s/hector/disco-infernal-1-dps.webp',
                            mask: getRectMaskUrl(18.5, 29.5, 20, 82.5)
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East half, far from boss',
                            imageUrl: './m5s/hector/disco-infernal-1-dps.webp',
                            mask: getRectMaskUrl(70.5, 81.5, 20, 82.5)
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Arcady Night Fever 1/2', 
            description: 'HTTH North, RMMR South\nConga Debuffs',
            mechs: [
                {
                    mechanic: 'Proteans',
                    description: 'Dodge out of protean after getting hit',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'North-Northwest',
                            imageUrl: './m5s/hector/arcady-proteans.webp',
                            mask: getCircleMaskUrl(43, 33, 7)
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'North-Northeast',
                            imageUrl: './m5s/hector/arcady-proteans.webp',
                            mask: getCircleMaskUrl(57.5, 33, 7)
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West-Northwest',
                            imageUrl: './m5s/hector/arcady-proteans.webp',
                            mask: getCircleMaskUrl(34, 41, 7)
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East-Northeast',
                            imageUrl: './m5s/hector/arcady-proteans.webp',
                            mask: getCircleMaskUrl(65.5, 41, 7)
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'South-Southwest',
                            imageUrl: './m5s/hector/arcady-proteans.webp',
                            mask: getCircleMaskUrl(42.5, 69.5, 7)
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South-Southeast',
                            imageUrl: './m5s/hector/arcady-proteans.webp',
                            mask: getCircleMaskUrl(57.5, 69.5, 7)
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West-Southwest',
                            imageUrl: './m5s/hector/arcady-proteans.webp',
                            mask: getCircleMaskUrl(33, 61.5, 7)
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East-Southeast',
                            imageUrl: './m5s/hector/arcady-proteans.webp',
                            mask: getCircleMaskUrl(67, 61.5, 7)
                        },
                    ]
                },
                {
                    mechanic: 'Debuffs',
                    description: 'Stack with your debuff timer partner\nShortest north, longest south\n10-15-20-25',
                    imageUrl: './m5s/hector/arcady-debuffs.webp',
                },
            ]
        },
        {
            phaseName: 'Ride the Waves', 
            description: 'G1 West G2 East',
            mechs: [
                {
                    mechanic: 'Stacks/Spreads',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'West lane, north side, close to boss\nStack with R1',
                            imageUrl: './m5s/hector/ride-the-wave.webp',
                            mask: getRectMaskUrl(15, 45, 30, 50)
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'East lane, north side, close to boss\nStack with R2',
                            imageUrl: './m5s/hector/ride-the-wave.webp',
                            mask: getRectMaskUrl(45, 75, 30, 50)
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West lane, south side, far from boss\nStack with M1',
                            imageUrl: './m5s/hector/ride-the-wave.webp',
                            mask: getRectMaskUrl(15, 45, 55, 90)
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East lane, north side, far from boss\nStack with M2',
                            imageUrl: './m5s/hector/ride-the-wave.webp',
                            mask: getRectMaskUrl(45, 75, 55, 90)
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'West lane, south side, close to boss\nStack with H1',
                            imageUrl: './m5s/hector/ride-the-wave.webp',
                            mask: getRectMaskUrl(15, 45, 55, 80)
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'East lane, north side, close to boss\nStack with H2',
                            imageUrl: './m5s/hector/ride-the-wave.webp',
                            mask: getRectMaskUrl(45, 75, 55, 80)
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West lane, north side, far from boss\nStack with MT',
                            imageUrl: './m5s/hector/ride-the-wave.webp',
                            mask: getRectMaskUrl(15, 45, 10, 45)
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East lane, north side, far from boss\nStack with OT',
                            imageUrl: './m5s/hector/ride-the-wave.webp',
                            mask: getRectMaskUrl(45, 75, 10, 45)
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Frogtourage 1', 
            description: 'G1 North/West G2 South/East\nSupports Left DPS Right facing boss',
            mechs: [
                {
                    mechanic: 'Stacks/Spreads',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'North or West\nFront left facing boss\nStack with M1',
                            imageUrl: './m5s/hector/frogtourage-1.webp',
                            mask: getCircleMaskUrl(58.5, 27.5, 7)
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'South or East\nFront left facing boss\nStack with M2',
                            imageUrl: './m5s/hector/frogtourage-1.webp',
                            mask: getCircleMaskUrl(41.5, 74.5, 7)
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'North or West\nBack left facing boss\nStack with R1',
                            imageUrl: './m5s/hector/frogtourage-1.webp',
                            mask: getCircleMaskUrl(58.5, 11, 7)
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South or East\nBack left facing boss\nStack with R2',
                            imageUrl: './m5s/hector/frogtourage-1.webp',
                            mask: getCircleMaskUrl(41.5, 90.5, 7)
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'North or West\nFront right facing boss\nStack with MT',
                            imageUrl: './m5s/hector/frogtourage-1.webp',
                            mask: getCircleMaskUrl(41.5, 27.5, 7)
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South or East\nFront right facing boss\nStack with OT',
                            imageUrl: './m5s/hector/frogtourage-1.webp',
                            mask: getCircleMaskUrl(58.5, 74.5, 7)
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'North or West\nBack right facing boss\nStack with H1',
                            imageUrl: './m5s/hector/frogtourage-1.webp',
                            mask: getCircleMaskUrl(41.5, 11, 7)
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South or East\nBack right facing boss\nStack with H2',
                            imageUrl: './m5s/hector/frogtourage-1.webp',
                            mask: getCircleMaskUrl(58.5, 90.5, 7)
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Disco Infernal 2', 
            description: 'Color Partners\nShort debuffs take spotlights first',
            mechs: [
                {
                    mechanic: 'Spotlights',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/hector/disco-infernal-2-supports.webp',
                            mask: getRectMaskUrl(12, 55, 12, 45)
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/hector/disco-infernal-2-supports.webp',
                            mask: getRectMaskUrl(55, 88, 12, 57)
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/hector/disco-infernal-2-supports.webp',
                            mask: getRectMaskUrl(12, 45, 47, 90)
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/hector/disco-infernal-2-supports.webp',
                            mask: getRectMaskUrl(45, 88, 57, 90)
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/hector/disco-infernal-2-dps.webp',
                            mask: getRectMaskUrl(12, 45, 47, 90)
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/hector/disco-infernal-2-dps.webp',
                            mask: getRectMaskUrl(45, 88, 57, 90)
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/hector/disco-infernal-2-dps.webp',
                            mask: getRectMaskUrl(12, 55, 12, 45)
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/hector/disco-infernal-2-dps.webp',
                            mask: getRectMaskUrl(55, 88, 12, 57)
                        },
                    ]
                },
                {
                    mechanic: 'Baits',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/hector/disco-infernal-2-dps.webp',
                            mask: getRectMaskUrl(12, 55, 12, 45)
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/hector/disco-infernal-2-dps.webp',
                            mask: getRectMaskUrl(55, 88, 12, 57)
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/hector/disco-infernal-2-dps.webp',
                            mask: getRectMaskUrl(12, 45, 47, 90)
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/hector/disco-infernal-2-dps.webp',
                            mask: getRectMaskUrl(45, 88, 57, 90)
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/hector/disco-infernal-2-supports.webp',
                            mask: getRectMaskUrl(12, 45, 47, 90)
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/hector/disco-infernal-2-supports.webp',
                            mask: getRectMaskUrl(45, 88, 57, 90)
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/hector/disco-infernal-2-supports.webp',
                            mask: getRectMaskUrl(12, 55, 12, 45)
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/hector/disco-infernal-2-supports.webp',
                            mask: getRectMaskUrl(55, 88, 12, 57)
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'More Amphibians', 
            description: 'Color Partners\nSupports bait first',
            mechs: [
                {
                    mechanic: 'Baits',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/hector/more-amphibians-supports.webp',
                            mask: getRectMaskUrl(28, 54, 22, 47)
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/hector/more-amphibians-supports.webp',
                            mask: getRectMaskUrl(54, 79, 22, 54)
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/hector/more-amphibians-supports.webp',
                            mask: getRectMaskUrl(22, 46, 47, 86)
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/hector/more-amphibians-supports.webp',
                            mask: getRectMaskUrl(46, 79, 54, 86)
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/hector/more-amphibians-dps.webp',
                            mask: getRectMaskUrl(22, 46, 47, 86)
                            
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/hector/more-amphibians-dps.webp',
                            mask: getRectMaskUrl(46, 72, 54, 86)
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/hector/more-amphibians-dps.webp',
                            mask: getRectMaskUrl(28, 55, 22, 48)
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/hector/more-amphibians-dps.webp',
                            mask: getRectMaskUrl(54, 79, 22, 54)
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Funky Floor 2', 
            description: 'Melee close, Ranged far\nColor partners for stacks',
            mechs: [
                {
                    mechanic: 'Stack/Spread',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Stack with R1',
                            imageUrl: './m5s/hector/funky-floor-2.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Stack with R2',
                            imageUrl: './m5s/hector/funky-floor-2.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Stack with M1',
                            imageUrl: './m5s/hector/funky-floor-2.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Stack with M2',
                            imageUrl: './m5s/hector/funky-floor-2.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Stack with H1',
                            imageUrl: './m5s/hector/funky-floor-2.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Stack with H2',
                            imageUrl: './m5s/hector/funky-floor-2.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Stack with MT',
                            imageUrl: './m5s/hector/funky-floor-2.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Stack with OT',
                            imageUrl: './m5s/hector/funky-floor-2.webp',
                        },
                    ]
                },
            ]
        }
    ]
}

const game8Strat: Strat = {
    stratName: 'game8',
    description: 'Source: Game8/Nukemaru',
    notes: '',
    stratUrl: {
        'Game8': 'https://game8.jp/ff14/680424',
        'Nukemaru': 'https://www.youtube.com/watch?v=s5CACs9ey9o'
    },
    strats: [
        {
            phaseName: '#-snap Twist', 
            description: 'Static stacks',
            mechs: [
                {
                    mechanic: 'A-Side',
                    description: 'Role stacks\nStatic positions',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Northwest',
                            imageUrl: './m5s/game8/twist-aside.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Southwest',
                            imageUrl: './m5s/game8/twist-aside.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/game8/twist-aside.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/game8/twist-aside.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Southeast',
                            imageUrl: './m5s/game8/twist-aside.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Southeast',
                            imageUrl: './m5s/game8/twist-aside.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Northeast',
                            imageUrl: './m5s/game8/twist-aside.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Northeast',
                            imageUrl: './m5s/game8/twist-aside.webp',
                        },
                    ]
                },
                {
                    mechanic: 'B-Side',
                    description: 'Light party stacks\nStatic positions',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Northwest',
                            imageUrl: './m5s/game8/twist-bside.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Southwest',
                            imageUrl: './m5s/game8/twist-bside.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/game8/twist-bside.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/game8/twist-bside.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Southeast',
                            imageUrl: './m5s/game8/twist-bside.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Southeast',
                            imageUrl: './m5s/game8/twist-bside.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Northeast',
                            imageUrl: './m5s/game8/twist-bside.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Northeast',
                            imageUrl: './m5s/game8/twist-bside.webp',
                        },
                    ]
                }
            ]
        },
        {
            phaseName: 'Disco Infernal 1', 
            description: 'Safe spotlight starts on an unsafe tile',
            mechs: [
                {
                    mechanic: 'Spotlights',
                    description: 'G1 West, G2 East',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'West half, close to boss',
                            imageUrl: './m5s/game8/disco-infernal-1.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'East half, close to boss',
                            imageUrl: './m5s/game8/disco-infernal-1.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West half, far from boss',
                            imageUrl: './m5s/game8/disco-infernal-1.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East half, far from boss',
                            imageUrl: './m5s/game8/disco-infernal-1.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'West half, close to boss',
                            imageUrl: './m5s/game8/disco-infernal-1.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'East half, close to boss',
                            imageUrl: './m5s/game8/disco-infernal-1.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West half, far from boss',
                            imageUrl: './m5s/game8/disco-infernal-1.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East half, far from boss',
                            imageUrl: './m5s/game8/disco-infernal-1.webp',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Arcady Night Fever 1/2', 
            description: 'HTTH North, RMMR South\nConga Debuffs',
            mechs: [
                {
                    mechanic: 'Proteans',
                    description: 'Dodge out of protean after getting hit',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'North-Northwest',
                            imageUrl: './m5s/latte/arcady-proteans.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'North-Northeast',
                            imageUrl: './m5s/latte/arcady-proteans.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West-Northwest',
                            imageUrl: './m5s/latte/arcady-proteans.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East-Northeast',
                            imageUrl: './m5s/latte/arcady-proteans.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'South-Southwest',
                            imageUrl: './m5s/latte/arcady-proteans.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South-Southeast',
                            imageUrl: './m5s/latte/arcady-proteans.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West-Southwest',
                            imageUrl: './m5s/latte/arcady-proteans.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East-Southeast',
                            imageUrl: './m5s/latte/arcady-proteans.webp',
                        },
                    ]
                },
                {
                    mechanic: 'Debuffs',
                    description: 'Stack with your debuff timer partner\nShortest north, longest south\n8-13-18-23',
                    imageUrl: './m5s/game8/arcady-debuffs.webp',
                },
            ]
        },
        {
            phaseName: 'Ride the Waves', 
            description: 'G1 West G2 East\nMelees North Ranged South',
            mechs: [
                {
                    mechanic: 'Stacks/Spreads',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'West lane, far North\nStack with D1',
                            imageUrl: './m5s/game8/ride-the-wave.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'East lane, far North\nStack with D2',
                            imageUrl: './m5s/game8/ride-the-wave.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West lane, middle South\nStack with D3',
                            imageUrl: './m5s/game8/ride-the-wave.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East lane, middle South\nStack with D4',
                            imageUrl: './m5s/game8/ride-the-wave.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'West lane, middle North\nStack with MT',
                            imageUrl: './m5s/game8/ride-the-wave.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'East lane, middle North\nStack with ST',
                            imageUrl: './m5s/game8/ride-the-wave.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West lane, far South\nStack with H1',
                            imageUrl: './m5s/game8/ride-the-wave.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East lane, far South\nStack with H2',
                            imageUrl: './m5s/game8/ride-the-wave.webp',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Frogtourage 1', 
            description: 'G1 North/West G2 South/East\nSupports Left DPS Right facing boss',
            mechs: [
                {
                    mechanic: 'Stacks/Spreads',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'North or West\nFront left facing boss\nStack with D1',
                            imageUrl: './m5s/game8/frogtourage-1.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'South or East\nFront left facing boss\nStack with D2',
                            imageUrl: './m5s/game8/frogtourage-1.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'North or West\nBack left facing boss\nStack with D3',
                            imageUrl: './m5s/game8/frogtourage-1.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South or East\nBack left facing boss\nStack with D4',
                            imageUrl: './m5s/game8/frogtourage-1.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'North or West\nFront right facing boss\nStack with MT',
                            imageUrl: './m5s/game8/frogtourage-1.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South or East\nFront right facing boss\nStack with ST',
                            imageUrl: './m5s/game8/frogtourage-1.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'North or West\nBack right facing boss\nStack with H1',
                            imageUrl: './m5s/game8/frogtourage-1.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South or East\nBack right facing boss\nStack with H2',
                            imageUrl: './m5s/game8/frogtourage-1.webp',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Disco Infernal 2', 
            description: 'MTD3/H2D4/H1D1/STD2 Partners\nShort debuffs take spotlights first',
            mechs: [
                {
                    mechanic: 'Spotlights',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Near N or NW (with D3)',
                            imageUrl: './m5s/game8/disco-infernal-2-supports.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Near S or SE (with D2)',
                            imageUrl: './m5s/game8/disco-infernal-2-supports.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Near W or SW (with D1)',
                            imageUrl: './m5s/game8/disco-infernal-2-supports.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Near E or NE (with D4)',
                            imageUrl: './m5s/game8/disco-infernal-2-supports.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Near W or SW (with H1)',
                            imageUrl: './m5s/game8/disco-infernal-2-dps.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Near S or SE (with ST)',
                            imageUrl: './m5s/game8/disco-infernal-2-dps.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Near N or NW (with MT)',
                            imageUrl: './m5s/game8/disco-infernal-2-dps.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Near E or NE (with H2)',
                            imageUrl: './m5s/game8/disco-infernal-2-dps.webp',
                        },
                    ]
                },
                {
                    mechanic: 'Baits',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Near N or NW (with D3)',
                            imageUrl: './m5s/game8/disco-infernal-2-dps.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Near S or SE (with D2)',
                            imageUrl: './m5s/game8/disco-infernal-2-dps.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Near W or SW (with D1)',
                            imageUrl: './m5s/game8/disco-infernal-2-dps.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Near E or NE (with D4)',
                            imageUrl: './m5s/game8/disco-infernal-2-dps.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Near W or SW (with H1)',
                            imageUrl: './m5s/game8/disco-infernal-2-supports.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Near S or SE (with ST)',
                            imageUrl: './m5s/game8/disco-infernal-2-supports.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Near N or NW (with MT)',
                            imageUrl: './m5s/game8/disco-infernal-2-supports.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Near E or NE (with H2)',
                            imageUrl: './m5s/game8/disco-infernal-2-supports.webp',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'More Amphibians', 
            description: 'G1 East G2 West\nT/R North H/M South\nSupports bait first',
            mechs: [
                {
                    mechanic: 'Baits',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Northwest',
                            imageUrl: './m5s/game8/more-amphibians-supports.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Northeast',
                            imageUrl: './m5s/game8/more-amphibians-supports.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Southwest',
                            imageUrl: './m5s/game8/more-amphibians-supports.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Southeast',
                            imageUrl: './m5s/game8/more-amphibians-supports.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Southwest',
                            imageUrl: './m5s/game8/more-amphibians-dps.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Southeast',
                            imageUrl: './m5s/game8/more-amphibians-dps.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Northwest',
                            imageUrl: './m5s/game8/more-amphibians-dps.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Northeast',
                            imageUrl: './m5s/game8/more-amphibians-dps.webp',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Funky Floor 2', 
            description: 'Melee close, Ranged far\nMTD3/H2D4/H1D1/STD2 Partners for stacks',
            mechs: [
                {
                    mechanic: 'Stack/Spread',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Stack with D3',
                            imageUrl: './m5s/game8/funky-floor-2.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Stack with D2',
                            imageUrl: './m5s/game8/funky-floor-2.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Stack with D1',
                            imageUrl: './m5s/game8/funky-floor-2.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Stack with D4',
                            imageUrl: './m5s/game8/funky-floor-2.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Stack with H1',
                            imageUrl: './m5s/game8/funky-floor-2.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Stack with ST',
                            imageUrl: './m5s/game8/funky-floor-2.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Stack with MT',
                            imageUrl: './m5s/game8/funky-floor-2.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Stack with H2',
                            imageUrl: './m5s/game8/funky-floor-2.webp',
                        },
                    ]
                },
            ]
        }
    ]
}

const oceStrat: Strat = {
    stratName: 'oce',
    description: 'Source: MR/Raidplan by Valyntine Arkani',
    notes: '',
    stratUrl: {
        'Materia Raiding': 'https://materiaraiding.com/savage/m5s',
        'Raidplan': 'https://raidplan.io/plan/nDb_1x1B_dTpLoPu'
    },
    strats: [
        {
            phaseName: '#-snap Twist', 
            description: 'Fixed stacks',
            mechs: [
                {
                    mechanic: 'A-Side',
                    description: 'Role stacks\nFixed positions',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/oce/twist-aside.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'North',
                            imageUrl: './m5s/oce/twist-aside.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Northwest',
                            imageUrl: './m5s/oce/twist-aside.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Southeast',
                            imageUrl: './m5s/oce/twist-aside.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'South',
                            imageUrl: './m5s/oce/twist-aside.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/oce/twist-aside.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'South',
                            imageUrl: './m5s/oce/twist-aside.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/oce/twist-aside.webp',
                        },
                    ]
                },
                {
                    mechanic: 'B-Side',
                    description: 'Light party stacks\nStatic positions',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/oce/twist-bside.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'North',
                            imageUrl: './m5s/oce/twist-bside.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Northwest',
                            imageUrl: './m5s/oce/twist-bside.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Southeast',
                            imageUrl: './m5s/oce/twist-bside.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'South',
                            imageUrl: './m5s/oce/twist-bside.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/oce/twist-bside.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'South',
                            imageUrl: './m5s/oce/twist-bside.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/oce/twist-bside.webp',
                        },
                    ]
                }
            ]
        },
        {
            phaseName: 'Disco Infernal 1', 
            description: 'Safe spotlight starts on an unsafe tile',
            mechs: [
                {
                    mechanic: 'Spotlights',
                    description: 'G1 West, G2 East',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'West half, close to boss',
                            imageUrl: './m5s/oce/disco-infernal-1.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'East half, close to boss',
                            imageUrl: './m5s/oce/disco-infernal-1.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West half, far from boss',
                            imageUrl: './m5s/oce/disco-infernal-1.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East half, far from boss',
                            imageUrl: './m5s/oce/disco-infernal-1.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'West half, close to boss',
                            imageUrl: './m5s/oce/disco-infernal-1.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'East half, close to boss',
                            imageUrl: './m5s/oce/disco-infernal-1.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West half, far from boss',
                            imageUrl: './m5s/oce/disco-infernal-1.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East half, far from boss',
                            imageUrl: './m5s/oce/disco-infernal-1.webp',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Arcady Night Fever 1/2', 
            description: 'HTTH North, RMMR South\nConga Debuffs',
            mechs: [
                {
                    mechanic: 'Proteans',
                    description: 'Dodge out of protean after getting hit',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'North-Northwest',
                            imageUrl: './m5s/oce/arcady-proteans.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'North-Northeast',
                            imageUrl: './m5s/oce/arcady-proteans.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West-Northwest',
                            imageUrl: './m5s/oce/arcady-proteans.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East-Northeast',
                            imageUrl: './m5s/oce/arcady-proteans.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'South-Southwest',
                            imageUrl: './m5s/oce/arcady-proteans.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South-Southeast',
                            imageUrl: './m5s/oce/arcady-proteans.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West-Southwest',
                            imageUrl: './m5s/oce/arcady-proteans.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East-Southeast',
                            imageUrl: './m5s/oce/arcady-proteans.webp',
                        },
                    ]
                },
                {
                    mechanic: 'Debuffs',
                    description: 'Stack with your debuff timer partner\nShortest north, longest south\n8-13-18-23',
                    imageUrl: './m5s/oce/arcady-debuffs.webp',
                },
            ]
        },
        {
            phaseName: 'Ride the Waves', 
            description: 'Melees Close, Ranged Far\nG1 North, G2 South',
            mechs: [
                {
                    mechanic: 'Stacks/Spreads',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Close lane, far North\nStack with D1',
                            imageUrl: './m5s/oce/ride-the-wave.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Close lane, far South\nStack with D2',
                            imageUrl: './m5s/oce/ride-the-wave.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Far lane, far North\nStack with D3',
                            imageUrl: './m5s/oce/ride-the-wave.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Far lane, far South\nStack with D4',
                            imageUrl: './m5s/oce/ride-the-wave.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Close lane, close North\nStack with MT',
                            imageUrl: './m5s/oce/ride-the-wave.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Close lane, close South\nStack with ST',
                            imageUrl: './m5s/oce/ride-the-wave.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Far lane, close North\nStack with H1',
                            imageUrl: './m5s/oce/ride-the-wave.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Far lane, close South\nStack with H2',
                            imageUrl: './m5s/oce/ride-the-wave.webp',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Frogtourage 1', 
            description: 'Take closest safespot to intercard\nMelees close, Ranged far',
            mechs: [
                {
                    mechanic: 'Stacks/Spreads',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Northwest, Close\nStack with D3',
                            imageUrl: './m5s/oce/frogtourage-1.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Northeast, Close\nStack with D4',
                            imageUrl: './m5s/oce/frogtourage-1.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Southwest, Far\nStack with D1',
                            imageUrl: './m5s/oce/frogtourage-1.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Southeast, Far\nStack with D2',
                            imageUrl: './m5s/oce/frogtourage-1.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Southwest, Close\nStack with H1',
                            imageUrl: './m5s/oce/frogtourage-1.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Southeast, Close\nStack with H2',
                            imageUrl: './m5s/oce/frogtourage-1.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Northwest, Far\nStack with MT',
                            imageUrl: './m5s/oce/frogtourage-1.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Northeast, Far\nStack with ST',
                            imageUrl: './m5s/oce/frogtourage-1.webp',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Disco Infernal 2', 
            description: 'MTD3/STD4/H1D1/H2D2 Partners\nShort debuffs take spotlights first',
            mechs: [
                {
                    mechanic: 'Spotlights',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Near N or NW (with D3)',
                            imageUrl: './m5s/oce/disco-infernal-2-supports.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Near E or NE (with D4)',
                            imageUrl: './m5s/oce/disco-infernal-2-supports.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Near W or SW (with D1)',
                            imageUrl: './m5s/oce/disco-infernal-2-supports.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Near S or SE (with D2)',
                            imageUrl: './m5s/oce/disco-infernal-2-supports.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Near W or SW (with H1)',
                            imageUrl: './m5s/oce/disco-infernal-2-dps.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Near S or SE (with ST)',
                            imageUrl: './m5s/oce/disco-infernal-2-dps.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Near N or NW (with MT)',
                            imageUrl: './m5s/oce/disco-infernal-2-dps.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Near E or NE (with H2)',
                            imageUrl: './m5s/oce/disco-infernal-2-dps.webp',
                        },
                    ]
                },
                {
                    mechanic: 'Baits',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Near N or NW (with D3)',
                            imageUrl: './m5s/oce/disco-infernal-2-dps.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Near E or NE (with D4)',
                            imageUrl: './m5s/oce/disco-infernal-2-dps.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Near W or SW (with D1)',
                            imageUrl: './m5s/oce/disco-infernal-2-dps.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Near S or SE (with D2)',
                            imageUrl: './m5s/oce/disco-infernal-2-dps.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Near W or SW (with H1)',
                            imageUrl: './m5s/oce/disco-infernal-2-supports.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Near S or SE (with ST)',
                            imageUrl: './m5s/oce/disco-infernal-2-supports.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Near N or NW (with MT)',
                            imageUrl: './m5s/oce/disco-infernal-2-supports.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Near E or NE (with H2)',
                            imageUrl: './m5s/oce/disco-infernal-2-supports.webp',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'More Amphibians', 
            description: 'G1 East G2 West\nT/R North H/M South\nSupports bait first',
            mechs: [
                {
                    mechanic: 'Baits',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Northwest',
                            imageUrl: './m5s/oce/more-amphibians-supports.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Northeast',
                            imageUrl: './m5s/oce/more-amphibians-supports.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Southwest',
                            imageUrl: './m5s/oce/more-amphibians-supports.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Southeast',
                            imageUrl: './m5s/oce/more-amphibians-supports.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Southwest',
                            imageUrl: './m5s/oce/more-amphibians-dps.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Southeast',
                            imageUrl: './m5s/oce/more-amphibians-dps.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Northwest',
                            imageUrl: './m5s/oce/more-amphibians-dps.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Northeast',
                            imageUrl: './m5s/oce/more-amphibians-dps.webp',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Funky Floor 2', 
            description: 'Melee close, Ranged far\nMTD3/STD4/H1D1/H2D2 Partners for stacks',
            mechs: [
                {
                    mechanic: 'Stack/Spread',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Stack with D3',
                            imageUrl: './m5s/oce/funky-floor-2.webp',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Stack with D4',
                            imageUrl: './m5s/oce/funky-floor-2.webp',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Stack with D1',
                            imageUrl: './m5s/oce/funky-floor-2.webp',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Stack with D2',
                            imageUrl: './m5s/oce/funky-floor-2.webp',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Stack with H1',
                            imageUrl: './m5s/oce/funky-floor-2.webp',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Stack with ST',
                            imageUrl: './m5s/oce/funky-floor-2.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Stack with MT',
                            imageUrl: './m5s/oce/funky-floor-2.webp',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Stack with H2',
                            imageUrl: './m5s/oce/funky-floor-2.webp',
                        },
                    ]
                },
            ]
        }
    ]
}
