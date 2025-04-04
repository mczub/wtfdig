import type { PageLoad } from "./$types";

export const load: PageLoad = ({params}) => {
    return {
        strats: [latteStrat, toxicStrat, sunStrat, evansithStrat, hectorStrat, game8Strat],
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
            description: 'Color Partners\nSupports bait first',
            mechs: [
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
                            imageUrl: './m5s/toxic/twist-aside.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'North',
                            imageUrl: './m5s/toxic/twist-aside.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'E/W',
                            imageUrl: './m5s/toxic/twist-aside.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'E/W',
                            imageUrl: './m5s/toxic/twist-aside.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'South',
                            imageUrl: './m5s/toxic/twist-aside.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/toxic/twist-aside.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'South',
                            imageUrl: './m5s/toxic/twist-aside.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/toxic/twist-aside.png',
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
                            imageUrl: './m5s/toxic/twist-bside.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/toxic/twist-bside.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/toxic/twist-bside.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/toxic/twist-bside.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/toxic/twist-bside.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/toxic/twist-bside.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/toxic/twist-bside.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/toxic/twist-bside.png',
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
                            imageUrl: './m5s/toxic/disco-infernal-1-supports.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'S/E, close to boss',
                            imageUrl: './m5s/toxic/disco-infernal-1-supports.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West half, far from boss',
                            imageUrl: './m5s/toxic/disco-infernal-1-supports.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East half, far from boss',
                            imageUrl: './m5s/toxic/disco-infernal-1-supports.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'N/W, close to boss',
                            imageUrl: './m5s/toxic/disco-infernal-1-dps.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'S/E, close to boss',
                            imageUrl: './m5s/toxic/disco-infernal-1-dps.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West half, far from boss',
                            imageUrl: './m5s/toxic/disco-infernal-1-dps.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East half, far from boss',
                            imageUrl: './m5s/toxic/disco-infernal-1-dps.png',
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
                            imageUrl: './m5s/toxic/arcady-proteans.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'South-Southwest (Middle North)',
                            imageUrl: './m5s/toxic/arcady-proteans.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West-Northwest (Middle South)',
                            imageUrl: './m5s/toxic/arcady-proteans.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'West-Southwest (Furthest South)',
                            imageUrl: './m5s/toxic/arcady-proteans.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'East-Southeast (Middle South)',
                            imageUrl: './m5s/toxic/arcady-proteans.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South-Southeast (Furthest South)',
                            imageUrl: './m5s/toxic/arcady-proteans.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'North-Northeast (Furthest North)',
                            imageUrl: './m5s/toxic/arcady-proteans.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East-Northeast (Middle North)',
                            imageUrl: './m5s/toxic/arcady-proteans.png',
                        },
                    ]
                },
                {
                    mechanic: 'Debuffs',
                    description: 'Stack with your debuff timer partner\nShortest north, longest south\n10-15-20-25',
                    imageUrl: './m5s/toxic/arcady-debuffs.png',
                },
            ]
        },
        {
            phaseName: 'Ride the Waves', 
            description: 'Melee Close Ranged Far Lanes\nG1 N G2 S',
            mechs: [
                {
                    mechanic: 'Stacks/Spreads',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Close lane, north side\nStack with M1',
                            imageUrl: './m5s/toxic/ride-the-wave.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Close lane, south side\nStack with M2',
                            imageUrl: './m5s/toxic/ride-the-wave.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Far lane, north side\nStack with R1',
                            imageUrl: './m5s/toxic/ride-the-wave.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Far lane, south side\nStack with R2',
                            imageUrl: './m5s/toxic/ride-the-wave.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Close lane, north side\nStack with MT',
                            imageUrl: './m5s/toxic/ride-the-wave.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Close lane, south side\nStack with OT',
                            imageUrl: './m5s/toxic/ride-the-wave.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Far lane, north side\nStack with H1',
                            imageUrl: './m5s/toxic/ride-the-wave.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Far lane, south side\nStack with H2',
                            imageUrl: './m5s/toxic/ride-the-wave.png',
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
                            imageUrl: './m5s/toxic/frogtourage-1.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'South or East\nFront left facing boss\nStack with M2',
                            imageUrl: './m5s/toxic/frogtourage-1.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'North or West\nBack left facing boss\nStack with R1',
                            imageUrl: './m5s/toxic/frogtourage-1.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South or East\nBack left facing boss\nStack with R2',
                            imageUrl: './m5s/toxic/frogtourage-1.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'North or West\nFront right facing boss\nStack with MT',
                            imageUrl: './m5s/toxic/frogtourage-1.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South or East\nFront right facing boss\nStack with OT',
                            imageUrl: './m5s/toxic/frogtourage-1.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'North or West\nBack right facing boss\nStack with H1',
                            imageUrl: './m5s/toxic/frogtourage-1.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South or East\nBack right facing boss\nStack with H2',
                            imageUrl: './m5s/toxic/frogtourage-1.png',
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
                            imageUrl: './m5s/toxic/disco-infernal-2-supports.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/toxic/disco-infernal-2-supports.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/toxic/disco-infernal-2-supports.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/toxic/disco-infernal-2-supports.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/toxic/disco-infernal-2-dps.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/toxic/disco-infernal-2-dps.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/toxic/disco-infernal-2-dps.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/toxic/disco-infernal-2-dps.png',
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
                            imageUrl: './m5s/toxic/disco-infernal-2-dps.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/toxic/disco-infernal-2-dps.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/toxic/disco-infernal-2-dps.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/toxic/disco-infernal-2-dps.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/toxic/disco-infernal-2-supports.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/toxic/disco-infernal-2-supports.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/toxic/disco-infernal-2-supports.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/toxic/disco-infernal-2-supports.png',
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
                            imageUrl: './m5s/toxic/more-amphibians-supports.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/toxic/more-amphibians-supports.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/toxic/more-amphibians-supports.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/toxic/more-amphibians-supports.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/toxic/more-amphibians-dps.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/toxic/more-amphibians-dps.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/toxic/more-amphibians-dps.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/toxic/more-amphibians-dps.png',
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
                            imageUrl: './m5s/toxic/funky-floor-2.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Stack with M2',
                            imageUrl: './m5s/toxic/funky-floor-2.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Stack with R1',
                            imageUrl: './m5s/toxic/funky-floor-2.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Stack with R2',
                            imageUrl: './m5s/toxic/funky-floor-2.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Stack with MT',
                            imageUrl: './m5s/toxic/funky-floor-2.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Stack with OT',
                            imageUrl: './m5s/toxic/funky-floor-2.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Stack with H1',
                            imageUrl: './m5s/toxic/funky-floor-2.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Stack with H2',
                            imageUrl: './m5s/toxic/funky-floor-2.png',
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
                            imageUrl: './m5s/hector/twist-aside.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'North',
                            imageUrl: './m5s/hector/twist-aside.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'E/W',
                            imageUrl: './m5s/hector/twist-aside.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'E/W',
                            imageUrl: './m5s/hector/twist-aside.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'South',
                            imageUrl: './m5s/hector/twist-aside.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/hector/twist-aside.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'South',
                            imageUrl: './m5s/hector/twist-aside.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/hector/twist-aside.png',
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
                            imageUrl: './m5s/hector/twist-bside.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/hector/twist-bside.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/hector/twist-bside.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/hector/twist-bside.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/hector/twist-bside.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/hector/twist-bside.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/hector/twist-bside.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/hector/twist-bside.png',
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
                            imageUrl: './m5s/hector/disco-infernal-1-supports.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'East half, close to boss',
                            imageUrl: './m5s/hector/disco-infernal-1-supports.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West half, far from boss',
                            imageUrl: './m5s/hector/disco-infernal-1-supports.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East half, far from boss',
                            imageUrl: './m5s/hector/disco-infernal-1-supports.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'West half, close to boss',
                            imageUrl: './m5s/hector/disco-infernal-1-dps.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'East half, close to boss',
                            imageUrl: './m5s/hector/disco-infernal-1-dps.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West half, far from boss',
                            imageUrl: './m5s/hector/disco-infernal-1-dps.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East half, far from boss',
                            imageUrl: './m5s/hector/disco-infernal-1-dps.png',
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
                            imageUrl: './m5s/hector/arcady-proteans.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'North-Northeast',
                            imageUrl: './m5s/hector/arcady-proteans.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West-Northwest',
                            imageUrl: './m5s/hector/arcady-proteans.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East-Northeast',
                            imageUrl: './m5s/hector/arcady-proteans.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'South-Southwest',
                            imageUrl: './m5s/hector/arcady-proteans.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South-Southeast',
                            imageUrl: './m5s/hector/arcady-proteans.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West-Southwest',
                            imageUrl: './m5s/hector/arcady-proteans.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East-Southeast',
                            imageUrl: './m5s/hector/arcady-proteans.png',
                        },
                    ]
                },
                {
                    mechanic: 'Debuffs',
                    description: 'Stack with your debuff timer partner\nShortest north, longest south\n10-15-20-25',
                    imageUrl: './m5s/hector/arcady-debuffs.png',
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
                            imageUrl: './m5s/hector/ride-the-wave.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'East lane, north side, close to boss\nStack with R2',
                            imageUrl: './m5s/hector/ride-the-wave.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West lane, south side, far from boss\nStack with M1',
                            imageUrl: './m5s/hector/ride-the-wave.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East lane, north side, far from boss\nStack with M2',
                            imageUrl: './m5s/hector/ride-the-wave.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'West lane, south side, close to boss\nStack with H1',
                            imageUrl: './m5s/hector/ride-the-wave.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'East lane, north side, close to boss\nStack with H2',
                            imageUrl: './m5s/hector/ride-the-wave.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West lane, north side, far from boss\nStack with MT',
                            imageUrl: './m5s/hector/ride-the-wave.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East lane, north side, far from boss\nStack with OT',
                            imageUrl: './m5s/hector/ride-the-wave.png',
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
                            imageUrl: './m5s/hector/frogtourage-1.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'South or East\nFront left facing boss\nStack with M2',
                            imageUrl: './m5s/hector/frogtourage-1.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'North or West\nBack left facing boss\nStack with R1',
                            imageUrl: './m5s/hector/frogtourage-1.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South or East\nBack left facing boss\nStack with R2',
                            imageUrl: './m5s/hector/frogtourage-1.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'North or West\nFront right facing boss\nStack with MT',
                            imageUrl: './m5s/hector/frogtourage-1.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South or East\nFront right facing boss\nStack with OT',
                            imageUrl: './m5s/hector/frogtourage-1.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'North or West\nBack right facing boss\nStack with H1',
                            imageUrl: './m5s/hector/frogtourage-1.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South or East\nBack right facing boss\nStack with H2',
                            imageUrl: './m5s/hector/frogtourage-1.png',
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
                            imageUrl: './m5s/hector/disco-infernal-2-supports.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/hector/disco-infernal-2-supports.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/hector/disco-infernal-2-supports.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/hector/disco-infernal-2-supports.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/hector/disco-infernal-2-dps.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/hector/disco-infernal-2-dps.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/hector/disco-infernal-2-dps.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/hector/disco-infernal-2-dps.png',
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
                            imageUrl: './m5s/hector/disco-infernal-2-dps.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/hector/disco-infernal-2-dps.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/hector/disco-infernal-2-dps.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/hector/disco-infernal-2-dps.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/hector/disco-infernal-2-supports.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/hector/disco-infernal-2-supports.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/hector/disco-infernal-2-supports.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/hector/disco-infernal-2-supports.png',
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
                            imageUrl: './m5s/hector/more-amphibians-supports.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/hector/more-amphibians-supports.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/hector/more-amphibians-supports.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/hector/more-amphibians-supports.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Near Purple markers (W or SW)',
                            imageUrl: './m5s/hector/more-amphibians-dps.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Near Blue markers (S or SE)',
                            imageUrl: './m5s/hector/more-amphibians-dps.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Near Red markers (N or NW)',
                            imageUrl: './m5s/hector/more-amphibians-dps.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Near Yellow markers (E or NE)',
                            imageUrl: './m5s/hector/more-amphibians-dps.png',
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
                            imageUrl: './m5s/hector/funky-floor-2.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Stack with R2',
                            imageUrl: './m5s/hector/funky-floor-2.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Stack with M1',
                            imageUrl: './m5s/hector/funky-floor-2.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Stack with M2',
                            imageUrl: './m5s/hector/funky-floor-2.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Stack with H1',
                            imageUrl: './m5s/hector/funky-floor-2.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Stack with H2',
                            imageUrl: './m5s/hector/funky-floor-2.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Stack with MT',
                            imageUrl: './m5s/hector/funky-floor-2.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Stack with OT',
                            imageUrl: './m5s/hector/funky-floor-2.png',
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
                            imageUrl: './m5s/game8/twist-aside.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Southwest',
                            imageUrl: './m5s/game8/twist-aside.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/game8/twist-aside.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/game8/twist-aside.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Southeast',
                            imageUrl: './m5s/game8/twist-aside.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Southeast',
                            imageUrl: './m5s/game8/twist-aside.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Northeast',
                            imageUrl: './m5s/game8/twist-aside.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Northeast',
                            imageUrl: './m5s/game8/twist-aside.png',
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
                            imageUrl: './m5s/game8/twist-bside.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Southwest',
                            imageUrl: './m5s/game8/twist-bside.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'North',
                            imageUrl: './m5s/game8/twist-bside.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South',
                            imageUrl: './m5s/game8/twist-bside.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Southeast',
                            imageUrl: './m5s/game8/twist-bside.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Southeast',
                            imageUrl: './m5s/game8/twist-bside.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Northeast',
                            imageUrl: './m5s/game8/twist-bside.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Northeast',
                            imageUrl: './m5s/game8/twist-bside.png',
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
                            imageUrl: './m5s/game8/disco-infernal-1.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'East half, close to boss',
                            imageUrl: './m5s/game8/disco-infernal-1.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West half, far from boss',
                            imageUrl: './m5s/game8/disco-infernal-1.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East half, far from boss',
                            imageUrl: './m5s/game8/disco-infernal-1.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'West half, close to boss',
                            imageUrl: './m5s/game8/disco-infernal-1.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'East half, close to boss',
                            imageUrl: './m5s/game8/disco-infernal-1.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West half, far from boss',
                            imageUrl: './m5s/game8/disco-infernal-1.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East half, far from boss',
                            imageUrl: './m5s/game8/disco-infernal-1.png',
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
                            imageUrl: './m5s/latte/arcady-proteans.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'North-Northeast',
                            imageUrl: './m5s/latte/arcady-proteans.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West-Northwest',
                            imageUrl: './m5s/latte/arcady-proteans.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East-Northeast',
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
                    description: 'Stack with your debuff timer partner\nShortest north, longest south\n8-13-18-23',
                    imageUrl: './m5s/game8/arcady-debuffs.png',
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
                            imageUrl: './m5s/game8/ride-the-wave.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'East lane, far North\nStack with D2',
                            imageUrl: './m5s/game8/ride-the-wave.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West lane, middle South\nStack with D3',
                            imageUrl: './m5s/game8/ride-the-wave.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East lane, middle South\nStack with D4',
                            imageUrl: './m5s/game8/ride-the-wave.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'West lane, middle North\nStack with MT',
                            imageUrl: './m5s/game8/ride-the-wave.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'East lane, middle North\nStack with ST',
                            imageUrl: './m5s/game8/ride-the-wave.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West lane, far South\nStack with H1',
                            imageUrl: './m5s/game8/ride-the-wave.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East lane, far South\nStack with H2',
                            imageUrl: './m5s/game8/ride-the-wave.png',
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
                            imageUrl: './m5s/game8/frogtourage-1.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'South or East\nFront left facing boss\nStack with D2',
                            imageUrl: './m5s/game8/frogtourage-1.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'North or West\nBack left facing boss\nStack with D3',
                            imageUrl: './m5s/game8/frogtourage-1.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South or East\nBack left facing boss\nStack with D4',
                            imageUrl: './m5s/game8/frogtourage-1.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'North or West\nFront right facing boss\nStack with MT',
                            imageUrl: './m5s/game8/frogtourage-1.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South or East\nFront right facing boss\nStack with ST',
                            imageUrl: './m5s/game8/frogtourage-1.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'North or West\nBack right facing boss\nStack with H1',
                            imageUrl: './m5s/game8/frogtourage-1.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South or East\nBack right facing boss\nStack with H2',
                            imageUrl: './m5s/game8/frogtourage-1.png',
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
                            imageUrl: './m5s/game8/disco-infernal-2-supports.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Near S or SE (with D2)',
                            imageUrl: './m5s/game8/disco-infernal-2-supports.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Near W or SW (with D1)',
                            imageUrl: './m5s/game8/disco-infernal-2-supports.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Near E or NE (with D4)',
                            imageUrl: './m5s/game8/disco-infernal-2-supports.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Near W or SW (with H1)',
                            imageUrl: './m5s/game8/disco-infernal-2-dps.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Near S or SE (with ST)',
                            imageUrl: './m5s/game8/disco-infernal-2-dps.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Near N or NW (with MT)',
                            imageUrl: './m5s/game8/disco-infernal-2-dps.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Near E or NE (with H2)',
                            imageUrl: './m5s/game8/disco-infernal-2-dps.png',
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
                            imageUrl: './m5s/game8/disco-infernal-2-dps.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Near S or SE (with D2)',
                            imageUrl: './m5s/game8/disco-infernal-2-dps.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Near W or SW (with D1)',
                            imageUrl: './m5s/game8/disco-infernal-2-dps.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Near E or NE (with D4)',
                            imageUrl: './m5s/game8/disco-infernal-2-dps.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Near W or SW (with H1)',
                            imageUrl: './m5s/game8/disco-infernal-2-supports.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Near S or SE (with ST)',
                            imageUrl: './m5s/game8/disco-infernal-2-supports.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Near N or NW (with MT)',
                            imageUrl: './m5s/game8/disco-infernal-2-supports.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Near E or NE (with H2)',
                            imageUrl: './m5s/game8/disco-infernal-2-supports.png',
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
                            imageUrl: './m5s/game8/more-amphibians-supports.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Northeast',
                            imageUrl: './m5s/game8/more-amphibians-supports.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Southwest',
                            imageUrl: './m5s/game8/more-amphibians-supports.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Southeast',
                            imageUrl: './m5s/game8/more-amphibians-supports.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Southwest',
                            imageUrl: './m5s/game8/more-amphibians-dps.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Southeast',
                            imageUrl: './m5s/game8/more-amphibians-dps.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Northwest',
                            imageUrl: './m5s/game8/more-amphibians-dps.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Northeast',
                            imageUrl: './m5s/game8/more-amphibians-dps.png',
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
                            imageUrl: './m5s/game8/funky-floor-2.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Stack with D2',
                            imageUrl: './m5s/game8/funky-floor-2.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Stack with D1',
                            imageUrl: './m5s/game8/funky-floor-2.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Stack with D4',
                            imageUrl: './m5s/game8/funky-floor-2.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Stack with H1',
                            imageUrl: './m5s/game8/funky-floor-2.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Stack with ST',
                            imageUrl: './m5s/game8/funky-floor-2.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Stack with MT',
                            imageUrl: './m5s/game8/funky-floor-2.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Stack with H2',
                            imageUrl: './m5s/game8/funky-floor-2.png',
                        },
                    ]
                },
            ]
        }
    ]
}
