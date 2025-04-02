import type { PageLoad } from "./$types";

export const load: PageLoad = ({params}) => {
    return {
        strats: [latteStrat, toxicStrat, sunStrat, evansithStrat],
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
                            imageUrl: './m5s/latte/twist-aside.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'North',
                            imageUrl: './m5s/latte/twist-aside.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'E/W',
                            imageUrl: './m5s/latte/twist-aside.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'E/W',
                            imageUrl: './m5s/latte/twist-aside.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'South',
                            imageUrl: './m5s/latte/twist-aside.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/latte/twist-aside.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'South',
                            imageUrl: './m5s/latte/twist-aside.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/latte/twist-aside.png',
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
                            imageUrl: './m5s/latte/twist-bside.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/latte/twist-bside.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/latte/twist-bside.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/latte/twist-bside.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/latte/twist-bside.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/latte/twist-bside.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/latte/twist-bside.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/latte/twist-bside.png',
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
                            imageUrl: './m5s/latte/disco-infernal-1.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'South half, close to boss',
                            imageUrl: './m5s/latte/disco-infernal-1.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'North half, far from boss',
                            imageUrl: './m5s/latte/disco-infernal-1.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South half, far from boss',
                            imageUrl: './m5s/latte/disco-infernal-1.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'North half, close to boss',
                            imageUrl: './m5s/latte/disco-infernal-1.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South half, close to boss',
                            imageUrl: './m5s/latte/disco-infernal-1.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'North half, far from boss',
                            imageUrl: './m5s/latte/disco-infernal-1.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South half, far from boss',
                            imageUrl: './m5s/latte/disco-infernal-1.png',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Arcady Night Fever 1/2', 
            description: 'HTTH North, RMMR South',
            mechs: [
                {
                    mechanic: 'Proteans',
                    description: 'Dodge East or West after getting hit',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'North-Northeast',
                            imageUrl: './m5s/latte/arcady-proteans.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'North-Northwest',
                            imageUrl: './m5s/latte/arcady-proteans.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'East-Northeast',
                            imageUrl: './m5s/latte/arcady-proteans.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'West-Northwest',
                            imageUrl: './m5s/latte/arcady-proteans.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'South-Southwest',
                            imageUrl: './m5s/latte/arcady-proteans.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South-Southeast',
                            imageUrl: './m5s/latte/arcady-proteans.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West-Southwest',
                            imageUrl: './m5s/latte/arcady-proteans.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East-Southeast',
                            imageUrl: './m5s/latte/arcady-proteans.png',
                        },
                    ]
                },
                {
                    mechanic: 'Debuffs',
                    description: 'Party stacks South\nMeet North to resolve debuffs at 5s',
                    imageUrl: './m5s/latte/arcady-debuffs.png',
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
                            imageUrl: './m5s/latte/ride-the-wave.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'East lane, north side, close to boss\nStack with R2',
                            imageUrl: './m5s/latte/ride-the-wave.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West lane, south side, far from boss\nStack with M1',
                            imageUrl: './m5s/latte/ride-the-wave.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East lane, north side, far from boss\nStack with M2',
                            imageUrl: './m5s/latte/ride-the-wave.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'West lane, south side, close to boss\nStack with H1',
                            imageUrl: './m5s/latte/ride-the-wave.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'East lane, north side, close to boss\nStack with H2',
                            imageUrl: './m5s/latte/ride-the-wave.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West lane, north side, far from boss\nStack with MT',
                            imageUrl: './m5s/latte/ride-the-wave.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East lane, north side, far from boss\nStack with OT',
                            imageUrl: './m5s/latte/ride-the-wave.png',
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
                            imageUrl: './m5s/latte/frogtourage-1.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'South or East\nFront right facing boss\nStack with M2',
                            imageUrl: './m5s/latte/frogtourage-1.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'North or West\nBack right facing boss\nStack with R1',
                            imageUrl: './m5s/latte/frogtourage-1.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South or East\nBack left facing boss\nStack with R2',
                            imageUrl: './m5s/latte/frogtourage-1.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'North or West\nFront right facing boss\nStack with MT',
                            imageUrl: './m5s/latte/frogtourage-1.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South or East\nBack left facing boss\nStack with OT',
                            imageUrl: './m5s/latte/frogtourage-1.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'North or West\nBack left facing boss\nStack with H1',
                            imageUrl: './m5s/latte/frogtourage-1.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South or East\nBack right facing boss\nStack with H2',
                            imageUrl: './m5s/latte/frogtourage-1.png',
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
                            imageUrl: './m5s/latte/disco-infernal-2-supports.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/latte/disco-infernal-2-supports.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/latte/disco-infernal-2-supports.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/latte/disco-infernal-2-supports.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/latte/disco-infernal-2-dps.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/latte/disco-infernal-2-dps.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/latte/disco-infernal-2-dps.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/latte/disco-infernal-2-dps.png',
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
                            imageUrl: './m5s/latte/disco-infernal-2-dps.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/latte/disco-infernal-2-dps.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/latte/disco-infernal-2-dps.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/latte/disco-infernal-2-dps.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/latte/disco-infernal-2-supports.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/latte/disco-infernal-2-supports.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/latte/disco-infernal-2-supports.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/latte/disco-infernal-2-supports.png',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'More Amphibians', 
            description: 'Color Partners\nShort debuffs take spotlights first',
            mechs: [
                {
                    mechanic: 'Spotlights',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/latte/more-amphibians.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/latte/more-amphibians.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/latte/more-amphibians.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/latte/more-amphibians.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/latte/more-amphibians.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/latte/more-amphibians.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/latte/more-amphibians.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/latte/more-amphibians.png',
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
                            imageUrl: './m5s/latte/more-amphibians.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/latte/more-amphibians.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/latte/more-amphibians.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/latte/more-amphibians.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/latte/more-amphibians.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/latte/more-amphibians.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/latte/more-amphibians.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/latte/more-amphibians.png',
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
                            imageUrl: './m5s/latte/funky-floor-2.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Stack with M2',
                            imageUrl: './m5s/latte/funky-floor-2.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Stack with M1',
                            imageUrl: './m5s/latte/funky-floor-2.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Stack with R2',
                            imageUrl: './m5s/latte/funky-floor-2.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Stack with H1',
                            imageUrl: './m5s/latte/funky-floor-2.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Stack with OT',
                            imageUrl: './m5s/latte/funky-floor-2.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Stack with MT',
                            imageUrl: './m5s/latte/funky-floor-2.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Stack with H2',
                            imageUrl: './m5s/latte/funky-floor-2.png',
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
            phaseName: 'Under Construction', 
        }
    ],
}

const sunStrat: Strat = {
    stratName: 'sun',
    description: 'Source: Sun Strat Raidplan',
    notes: '',
    stratUrl: 'https://raidplan.io/plan/h-WjosHQoM7oJR0n',
    strats: [
        {
            phaseName: 'Under Construction', 
        }
    ],
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
