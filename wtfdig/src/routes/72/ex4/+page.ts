import type { Url } from "url";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({params}) => {
    return {
        strats: [raidplanStrat, hectorStrat, happyStrat, yukizuriStrat],
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
    mask?: string;
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
    mechs?: MechanicStrat[];
}

export interface Strat {
    stratName: string;
    stratUrl: string | Record<string, string>;
    description: string;
    notes: string;
    strats: PhaseStrats[];
}

const raidplanStrat: Strat = {
    stratName: 'raidplan',
    description: 'Source: Raidplan by (Rai) Kira Milana',
    notes: '',
    stratUrl: {
        'Shock + Adds + EF': 'https://raidplan.io/plan/k9Vc_KRu9PVl0F-G',
        'Blooms': 'https://raidplan.io/plan/-Wj9LY4RpWBtEnpX'
    },
    strats: [
        {
            phaseName: 'Setup',
            mechs: [
                {
                    mechanic: 'Clock Spots',
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
                            description: 'West',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Southwest',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Southeast',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Northwest',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Northeast',
                        },
                    ]
                }
            ]
        },
        {
            phaseName: `Escelons' Fall 1 (Witch Hunt)`,
            tag: 'ef1',
            description: {
                supports: 'Supports bait first',
                dps: 'DPS bait first',
                dpsin: 'DPS in first'
            },
            mechs: [
                {
                    mechanic: 'Witch Hunt',
                    description: 'Start on clock spot',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                supports: 'Follow symbol on 1 & 3',
                                dps: 'Follow symbol on 2 & 4',
                                dpsin: 'Always start out\nDodge either once or twice',
                            },
                            imageUrl: './ex4/raidplan/ef1.png'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                supports: 'Follow symbol on 1 & 3',
                                dps: 'Follow symbol on 2 & 4',
                                dpsin: 'Always start out\nDodge either once or twice'
                            },
                            imageUrl: './ex4/raidplan/ef1.png'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                supports: 'Follow symbol on 1 & 3',
                                dps: 'Follow symbol on 2 & 4',
                                dpsin: 'Always start out\nDodge either once or twice'
                            },
                            imageUrl: './ex4/raidplan/ef1.png'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                supports: 'Follow symbol on 1 & 3',
                                dps: 'Follow symbol on 2 & 4',
                                dpsin: 'Always start out\nDodge either once or twice'
                            },
                            imageUrl: './ex4/raidplan/ef1.png'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                supports: 'Follow symbol on 2 & 4',
                                dps: 'Follow symbol on 1 & 3',
                                dpsin: 'Always start in\nDodge either once or twice'
                            },
                            imageUrl: './ex4/raidplan/ef1.png'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                supports: 'Follow symbol on 2 & 4',
                                dps: 'Follow symbol on 1 & 3',
                                dpsin: 'Always start in\nDodge either once or twice'
                            },
                            imageUrl: './ex4/raidplan/ef1.png'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                supports: 'Follow symbol on 2 & 4',
                                dps: 'Follow symbol on 1 & 3',
                                dpsin: 'Always start in\nDodge either once or twice'
                            }, 
                            imageUrl: './ex4/raidplan/ef1.png'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                supports: 'Follow symbol on 2 & 4',
                                dps: 'Follow symbol on 1 & 3',
                                dpsin: 'Always start in\nDodge either once or twice'
                            },
                            imageUrl: './ex4/raidplan/ef1.png'
                        },
                    ]
                }
            ]
        },
        {
            phaseName: `Adds`,
            description: 'Supports W, DPS E',
            imageUrl: './ex4/raidplan/adds.png',
        },
        {
            phaseName: `Bloom 3`,
            tag: 'bloom3',
            description: {
                relative: 'Relative (single inner slice is new North)',
                color: 'True North (Colors)'
            },
            imageUrl: {
                relative: './ex4/raidplan/bloom3-relative.png',
                color: '',
            },
            mechs: [
                {
                    mechanic: 'Roses',
                    description: 'Place rose in inner tiles',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                relative: 'Inner slice North',
                                color: 'Inner slice near North'
                            },
                            imageUrl: './ex4/raidplan/bloom3-arena.png'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                relative: 'Inner slice South',
                                color: 'Inner slice near South'
                            },
                            imageUrl: './ex4/raidplan/bloom3-arena.png'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                relative: 'Inner slice Southwest',
                                color: 'Inner slice near West'
                            },
                            imageUrl: './ex4/raidplan/bloom3-arena.png'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                relative: 'Inner slice Southeast',
                                color: 'Inner slice near East'
                            },
                            imageUrl: './ex4/raidplan/bloom3-arena.png'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                relative: 'Inner slice South',
                                color: 'Inner slice near Southwest'
                            },
                            imageUrl: './ex4/raidplan/bloom3-arena.png'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                relative: 'Inner slice Southeast',
                                color: 'Inner slice near Southeast'
                            },
                            imageUrl: './ex4/raidplan/bloom3-arena.png'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                relative: 'Inner slice Southwest',
                                color: 'Inner slice near Northwest'
                            },
                            imageUrl: './ex4/raidplan/bloom3-arena.png'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                relative: 'Inner slice North',
                                color: 'Inner slice near Northeast'
                            },
                            imageUrl: './ex4/raidplan/bloom3-arena.png'
                        },
                    ]
                },
                {
                    mechanic: 'Towers',
                    description: 'Take tower in outer tiles',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                relative: 'Outer slice North',
                                color: 'Outer slice touching North'
                            },
                            imageUrl: './ex4/raidplan/bloom3-arena.png'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                relative: 'Outer slice South',
                                color: 'Outer slice touching South'
                            },
                            imageUrl: './ex4/raidplan/bloom3-arena.png'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                relative: 'Outer slice West',
                                color: 'Outer slice touching West'
                            },
                            imageUrl: './ex4/raidplan/bloom3-arena.png'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                relative: 'Outer slice East',
                                color: 'Outer slice touching East'
                            },
                            imageUrl: './ex4/raidplan/bloom3-arena.png'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                relative: 'Outer slice West',
                                color: 'Outer slice touching West'
                            },
                            imageUrl: './ex4/raidplan/bloom3-arena.png'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                relative: 'Outer slice South',
                                color: 'Outer slice touching South'
                            },
                            imageUrl: './ex4/raidplan/bloom3-arena.png'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                relative: 'Outer slice North',
                                color: 'Outer slice touching North'
                            },
                            imageUrl: './ex4/raidplan/bloom3-arena.png'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                relative: 'Outer slice East',
                                color: 'Outer slice touching East'
                            },
                            imageUrl: './ex4/raidplan/bloom3-arena.png'
                        },
                    ]
                }
            ]
        },
        {
            phaseName: `Escelons' Fall 2`,
            tag: 'ef2',
            description: {
                braindead: 'Braindead (Clocks)',
                ns: 'Supports N / DPS S',
                we: 'Supports W / DPS E'
            },
            mechs: [
                {
                    mechanic: 'Donut + Stacks',
                    description: '',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack North on hitbox',
                                we: 'Stack West on hitbox'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: './ex4/raidplan/ef2-ns-stacks.png',
                                we: '',
                            }
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack North on hitbox',
                                we: 'Stack West on hitbox'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: './ex4/raidplan/ef2-ns-stacks.png',
                                we: '',
                            }
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack North on hitbox',
                                we: 'Stack West on hitbox'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: './ex4/raidplan/ef2-ns-stacks.png',
                                we: '',
                            }
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack North on hitbox',
                                we: 'Stack West on hitbox'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: './ex4/raidplan/ef2-ns-stacks.png',
                                we: '',
                            }
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack South on hitbox',
                                we: 'Stack East on hitbox'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: './ex4/raidplan/ef2-ns-stacks.png',
                                we: '',
                            }
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack South on hitbox',
                                we: 'Stack East on hitbox'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: './ex4/raidplan/ef2-ns-stacks.png',
                                we: '',
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack South on hitbox',
                                we: 'Stack East on hitbox'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: './ex4/raidplan/ef2-ns-stacks.png',
                                we: '',
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack South on hitbox',
                                we: 'Stack East on hitbox'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: './ex4/raidplan/ef2-ns-stacks.png',
                                we: '',
                            }
                        },
                    ]
                },
                {
                    mechanic: 'Witch Hunt',
                    description: '',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out NNW for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out WNW for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: './ex4/raidplan/ef2-ns-witchhunt.png',
                                we: '',
                            }
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out NNE for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out WSW for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: './ex4/raidplan/ef2-ns-witchhunt.png',
                                we: '',
                            }
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out WNW for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out NNW for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: './ex4/raidplan/ef2-ns-witchhunt.png',
                                we: '',
                            }
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out ENE for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out SSW for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: './ex4/raidplan/ef2-ns-witchhunt.png',
                                we: '',
                            }
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out SSW for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out ENE for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: './ex4/raidplan/ef2-ns-witchhunt.png',
                                we: '',
                            }
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out SSE for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out ESE for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: './ex4/raidplan/ef2-ns-witchhunt.png',
                                we: '',
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out WSW for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out NNE for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: './ex4/raidplan/ef2-ns-witchhunt.png',
                                we: '',
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out ESE for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out SSE for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: './ex4/raidplan/ef2-ns-witchhunt.png',
                                we: '',
                            }
                        },
                    ]
                }
            ]
        },
        {
            phaseName: `Bloom 4`,
            tag: 'bloom4',
            description: {
                relative: 'Relative (4 empty tiles are new South)',
                tn: 'True North'
            },
            mechs: [
                {
                    mechanic: 'Roses',
                    description: '',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                relative: 'Drop rose on inner left tile',
                                tn: 'Drop rose on inner East tile'
                            },
                            imageUrl: './ex4/raidplan/bloom4-roses.png'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                relative: 'Drop rose on inner right tile',
                                tn: 'Drop rose on inner West tile'
                            },
                            imageUrl: './ex4/raidplan/bloom4-roses.png'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                relative: 'Drop rose on outer left tile',
                                tn: 'Drop rose on outer East tile'
                            },
                            imageUrl: './ex4/raidplan/bloom4-roses.png'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                relative: 'Drop rose on outer right tile',
                                tn: 'Drop rose on outer West tile'
                            },
                            imageUrl: './ex4/raidplan/bloom4-roses.png'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                relative: 'Drop rose on inner left tile',
                                tn: 'Drop rose on inner East tile'
                            },
                            imageUrl: './ex4/raidplan/bloom4-roses.png'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                relative: 'Drop rose on inner right tile',
                                tn: 'Drop rose on inner West tile'
                            },
                            imageUrl: './ex4/raidplan/bloom4-roses.png'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                relative: 'Drop rose on outer left tile',
                                tn: 'Drop rose on outer East tile'
                            },
                            imageUrl: './ex4/raidplan/bloom4-roses.png'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                relative: 'Drop rose on outer right tile',
                                tn: 'Drop rose on outer West tile'
                            },
                            imageUrl: './ex4/raidplan/bloom4-roses.png'
                        },
                    ]
                },
                {
                    mechanic: 'Thorns',
                    description: 'Meet up near center on 2 empty slices',
                    notes: 'Make sure you end up on the red slices after stretching tethers',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                relative: 'Facing boss\nGo left to stretch tethers',
                                tn: 'Go West to stretch tethers'
                            },
                            imageUrl: './ex4/raidplan/bloom4-thorns.png'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                relative: 'Facing boss\nGo left to stretch tethers',
                                tn: 'Go West to stretch tethers'
                            },
                            imageUrl: './ex4/raidplan/bloom4-thorns.png'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                relative: 'Facing boss\nGo left to stretch tethers',
                                tn: 'Go West to stretch tethers'
                            },
                            imageUrl: './ex4/raidplan/bloom4-thorns.png'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                relative: 'Facing boss\nGo left to stretch tethers',
                                tn: 'Go West to stretch tethers'
                            },
                            imageUrl: './ex4/raidplan/bloom4-thorns.png'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                relative: 'Facing boss\nGo right to stretch tethers',
                                tn: 'Go East to stretch tethers'
                            },
                            imageUrl: './ex4/raidplan/bloom4-thorns.png'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                relative: 'Facing boss\nGo right to stretch tethers',
                                tn: 'Go East to stretch tethers'
                            },
                            imageUrl: './ex4/raidplan/bloom4-thorns.png'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                relative: 'Facing boss\nGo right to stretch tethers',
                                tn: 'Go East to stretch tethers'
                            },
                            imageUrl: './ex4/raidplan/bloom4-thorns.png'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                relative: 'Facing boss\nGo right to stretch tethers',
                                tn: 'Go East to stretch tethers'
                            },
                            imageUrl: './ex4/raidplan/bloom4-thorns.png'
                        },
                    ]
                }
            ]
        },
        {
            phaseName: `Bloom 6`,
            tag: 'bloom6',
            description: {
                lb3: 'Tank LB3 (RMMR towers)',
                ns: 'G1 N, G2 S',
                we: 'G1 W, G2 E',
            },
            mechs: [
                {
                    mechanic: 'Roses',
                    description: '',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                lb3: 'Drop rose on inner SSW tile',
                                ns: 'Drop rose on inner or outer SSW tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer SSW tile\nLink to the tower not being hit by 1st cleave',
                            },
                            imageUrl: {
                                lb3: './ex4/raidplan/bloom6-lb3.png',
                                ns: './ex4/raidplan/bloom6-ns.png',
                                we: '',
                            }
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                lb3: 'Drop rose on inner SSE tile',
                                ns: 'Drop rose on inner or outer NNE tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer SSE tile\nLink to the tower not being hit by 1st cleave',
                            },
                            imageUrl: {
                                lb3: './ex4/raidplan/bloom6-lb3.png',
                                ns: './ex4/raidplan/bloom6-ns.png',
                                we: '',
                            }
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                lb3: 'Drop rose on inner NNW tile',
                                ns: 'Drop rose on inner or outer NNW tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer NNW tile\nLink to the tower not being hit by 1st cleave',
                            },
                            imageUrl: {
                                lb3: './ex4/raidplan/bloom6-lb3.png',
                                ns: './ex4/raidplan/bloom6-ns.png',
                                we: '',
                            }
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                lb3: 'Drop rose on inner NNE tile',
                                ns: 'Drop rose on inner or outer SSE tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer NNE tile\nLink to the tower not being hit by 1st cleave',
                            },
                            imageUrl: {
                                lb3: './ex4/raidplan/bloom6-lb3.png',
                                ns: './ex4/raidplan/bloom6-ns.png',
                                we: '',
                            }
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                lb3: 'Drop rose on inner SSW tile',
                                ns: 'Drop rose on inner or outer SSW tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer SSW tile\nLink to the tower not being hit by 1st cleave',
                            },
                            imageUrl: {
                                lb3: './ex4/raidplan/bloom6-lb3.png',
                                ns: './ex4/raidplan/bloom6-ns.png',
                                we: '',
                            }
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                lb3: 'Drop rose on inner SSE tile',
                                ns: 'Drop rose on inner or outer NNE tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer SSE tile\nLink to the tower not being hit by 1st cleave',
                            },
                            imageUrl: {
                                lb3: './ex4/raidplan/bloom6-lb3.png',
                                ns: './ex4/raidplan/bloom6-ns.png',
                                we: '',
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                lb3: 'Drop rose on inner NNW tile',
                                ns: 'Drop rose on inner or outer NNW tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer NNW tile\nLink to the tower not being hit by 1st cleave',
                            },
                            imageUrl: {
                                lb3: './ex4/raidplan/bloom6-lb3.png',
                                ns: './ex4/raidplan/bloom6-ns.png',
                                we: '',
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                lb3: 'Drop rose on inner NNE tile',
                                ns: 'Drop rose on inner or outer SSE tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer NNE tile\nLink to the tower not being hit by 1st cleave',
                            },
                            imageUrl: {
                                lb3: './ex4/raidplan/bloom6-lb3.png',
                                ns: './ex4/raidplan/bloom6-ns.png',
                                we: '',
                            }
                        },
                    ]
                },
                {
                    mechanic: 'Towers',
                    description: '',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                lb3: 'Take inner West tower\nRemember to LB!',
                                ns: 'Take inner North tower',
                                we: 'Take inner West tower',
                            },
                            imageUrl: {
                                lb3: './ex4/raidplan/bloom6-lb3.png',
                                ns: './ex4/raidplan/bloom6-ns.png',
                                we: '',
                            }
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                lb3: 'Take inner East tower\nRemember to LB!',
                                ns: 'Take inner South tower',
                                we: 'Take inner East tower',
                            },
                            imageUrl: {
                                lb3: './ex4/raidplan/bloom6-lb3.png',
                                ns: './ex4/raidplan/bloom6-ns.png',
                                we: '',
                            }
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                lb3: 'Take outer West tower',
                                ns: 'Take outer North tower',
                                we: 'Take outer West tower',
                            },
                            imageUrl: {
                                lb3: './ex4/raidplan/bloom6-lb3.png',
                                ns: './ex4/raidplan/bloom6-ns.png',
                                we: '',
                            }
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                lb3: 'Take outer East tower',
                                ns: 'Take outer South tower',
                                we: 'Take outer East tower',
                            },
                            imageUrl: {
                                lb3: './ex4/raidplan/bloom6-lb3.png',
                                ns: './ex4/raidplan/bloom6-ns.png',
                                we: '',
                            }
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                lb3: 'Take inner West tower',
                                ns: 'Take inner North tower',
                                we: 'Take inner West tower',
                            },
                            imageUrl: {
                                lb3: './ex4/raidplan/bloom6-lb3.png',
                                ns: './ex4/raidplan/bloom6-ns.png',
                                we: '',
                            }
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                lb3: 'Take inner East tower',
                                ns: 'Take inner South tower',
                                we: 'Take inner East tower',
                            },
                            imageUrl: {
                                lb3: './ex4/raidplan/bloom6-lb3.png',
                                ns: './ex4/raidplan/bloom6-ns.png',
                                we: '',
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                lb3: 'Take outer West tower',
                                ns: 'Take outer North tower',
                                we: 'Take outer West tower',
                            },
                            imageUrl: {
                                lb3: './ex4/raidplan/bloom6-lb3.png',
                                ns: './ex4/raidplan/bloom6-ns.png',
                                we: '',
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                lb3: 'Take outer East tower',
                                ns: 'Take outer South tower',
                                we: 'Take outer East tower',
                            },
                            imageUrl: {
                                lb3: './ex4/raidplan/bloom6-lb3.png',
                                ns: './ex4/raidplan/bloom6-ns.png',
                                we: '',
                            }
                        },
                    ]
                }
            ]
        },
    ]
}

const hectorStrat: Strat = {
    stratName: 'hector',
    description: 'Source: Video by Hector Hectorson',
    notes: '',
    stratUrl: 'https://www.youtube.com/watch?v=AFaiOZK78tM',
    strats: [
        {
            phaseName: 'Setup',
            mechs: [
                {
                    mechanic: 'Clock Spots',
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
                            description: 'West',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Southwest',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Southeast',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Northwest',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Northeast',
                        },
                    ]
                }
            ]
        },
        {
            phaseName: `Escelons' Fall 1 (Witch Hunt)`,
            tag: 'ef1',
            description: {
                supports: 'Supports bait first',
                dps: 'DPS bait first',
                dpsin: 'DPS in first',
            },
            mechs: [
                {
                    mechanic: 'Witch Hunt',
                    description: 'Start on clock spot',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                supports: 'Follow symbol on 1 & 3',
                                dps: 'Follow symbol on 2 & 4',
                                dpsin: 'Always start out\nDodge either once or twice'
                            },
                            imageUrl: './ex4/hector/ef1.png',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                supports: 'Follow symbol on 1 & 3',
                                dps: 'Follow symbol on 2 & 4',
                                dpsin: 'Always start out\nDodge either once or twice'
                            },
                            imageUrl: './ex4/hector/ef1.png',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                supports: 'Follow symbol on 1 & 3',
                                dps: 'Follow symbol on 2 & 4',
                                dpsin: 'Always start out\nDodge either once or twice'
                            },
                            imageUrl: './ex4/hector/ef1.png',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                supports: 'Follow symbol on 1 & 3',
                                dps: 'Follow symbol on 2 & 4',
                                dpsin: 'Always start out\nDodge either once or twice'
                            },
                            imageUrl: './ex4/hector/ef1.png',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                supports: 'Follow symbol on 2 & 4',
                                dps: 'Follow symbol on 1 & 3',
                                dpsin: 'Always start in\nDodge either once or twice'
                            },
                            imageUrl: './ex4/hector/ef1.png',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                supports: 'Follow symbol on 2 & 4',
                                dps: 'Follow symbol on 1 & 3',
                                dpsin: 'Always start in\nDodge either once or twice'
                            },
                            imageUrl: './ex4/hector/ef1.png',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                supports: 'Follow symbol on 2 & 4',
                                dps: 'Follow symbol on 1 & 3',
                                dpsin: 'Always start in\nDodge either once or twice'
                            },
                            imageUrl: './ex4/hector/ef1.png',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                supports: 'Follow symbol on 2 & 4',
                                dps: 'Follow symbol on 1 & 3',
                                dpsin: 'Always start in\nDodge either once or twice'
                            },
                            imageUrl: './ex4/hector/ef1.png',
                        },
                    ]
                }
            ]
        },
        {
            phaseName: `Adds`,
            description: 'Supports W, DPS E',
            imageUrl: './ex4/hector/adds.png',
        },
        {
            phaseName: `Bloom 3`,
            tag: 'bloom3',
            description: {
                relative: 'Relative (single inner slice is new North)',
                color: 'True North (Colors)'
            },
            mechs: [
                {
                    mechanic: 'Roses',
                    description: 'Place rose in inner tiles',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                relative: 'Inner slice North',
                                color: 'Inner slice near North'
                            },
                            imageUrl: './ex4/hector/bloom3-relative.png'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                relative: 'Inner slice South',
                                color: 'Inner slice near South'
                            },
                            imageUrl: './ex4/hector/bloom3-relative.png'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                relative: 'Inner slice Southwest',
                                color: 'Inner slice near West'
                            },
                            imageUrl: './ex4/hector/bloom3-relative.png'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                relative: 'Inner slice Southeast',
                                color: 'Inner slice near East'
                            },
                            imageUrl: './ex4/hector/bloom3-relative.png'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                relative: 'Inner slice Southwest',
                                color: 'Inner slice near Southwest'
                            },
                            imageUrl: './ex4/hector/bloom3-relative.png'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                relative: 'Inner slice South',
                                color: 'Inner slice near Southeast'
                            },
                            imageUrl: './ex4/hector/bloom3-relative.png'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                relative: 'Inner slice North',
                                color: 'Inner slice near Northwest'
                            },
                            imageUrl: './ex4/hector/bloom3-relative.png'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                relative: 'Inner slice Southeast',
                                color: 'Inner slice near Northeast'
                            },
                            imageUrl: './ex4/hector/bloom3-relative.png'
                        },
                    ]
                },
                {
                    mechanic: 'Towers',
                    description: 'Take tower in outer tiles',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                relative: 'Outer slice North',
                                color: 'Outer slice touching North'
                            },
                            imageUrl: './ex4/hector/bloom3-relative.png'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                relative: 'Outer slice South',
                                color: 'Outer slice touching South'
                            },
                            imageUrl: './ex4/hector/bloom3-relative.png'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                relative: 'Outer slice West',
                                color: 'Outer slice touching West'
                            },
                            imageUrl: './ex4/hector/bloom3-relative.png'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                relative: 'Outer slice East',
                                color: 'Outer slice touching East'
                            },
                            imageUrl: './ex4/hector/bloom3-relative.png'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                relative: 'Outer slice West',
                                color: 'Outer slice touching West'
                            },
                            imageUrl: './ex4/hector/bloom3-relative.png'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                relative: 'Outer slice South',
                                color: 'Outer slice touching South'
                            },
                            imageUrl: './ex4/hector/bloom3-relative.png'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                relative: 'Outer slice North',
                                color: 'Outer slice touching North'
                            },
                            imageUrl: './ex4/hector/bloom3-relative.png'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                relative: 'Outer slice East',
                                color: 'Outer slice touching East'
                            },
                            imageUrl: './ex4/hector/bloom3-relative.png'
                        },
                    ]
                }
            ]
        },
        {
            phaseName: `Escelons' Fall 2`,
            tag: 'ef2',
            description: {
                braindead: 'Braindead (Clocks)',
                ns: 'Supports N / DPS S',
                we: 'Supports W / DPS E'
            },
            mechs: [
                {
                    mechanic: 'Donut + Stacks',
                    description: '',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack North on hitbox',
                                we: 'Stack West on hitbox'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: '',
                                we: './ex4/hector/ef2-we-stacks.png'
                            }
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack North on hitbox',
                                we: 'Stack West on hitbox'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: '',
                                we: './ex4/hector/ef2-we-stacks.png'
                            }
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack North on hitbox',
                                we: 'Stack West on hitbox'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: '',
                                we: './ex4/hector/ef2-we-stacks.png'
                            }
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack North on hitbox',
                                we: 'Stack West on hitbox'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: '',
                                we: './ex4/hector/ef2-we-stacks.png'
                            }
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack South on hitbox',
                                we: 'Stack East on hitbox'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: '',
                                we: './ex4/hector/ef2-we-stacks.png'
                            }
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack South on hitbox',
                                we: 'Stack East on hitbox'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: '',
                                we: './ex4/hector/ef2-we-stacks.png'
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack South on hitbox',
                                we: 'Stack East on hitbox'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: '',
                                we: './ex4/hector/ef2-we-stacks.png'
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack South on hitbox',
                                we: 'Stack East on hitbox'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: '',
                                we: './ex4/hector/ef2-we-stacks.png'
                            }
                        },
                    ]
                },
                {
                    mechanic: 'Witch Hunt',
                    description: '',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out for proteans on North half\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out for proteans on West half\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: '',
                                we: './ex4/hector/ef2-we-witchhunt.png'
                            }
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out for proteans on North half\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out for proteans on West half\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: '',
                                we: './ex4/hector/ef2-we-witchhunt.png'
                            }
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out for proteans on North half\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out for proteans on West half\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: '',
                                we: './ex4/hector/ef2-we-witchhunt.png'
                            }
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out for proteans on North half\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out for proteans on West half\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: '',
                                we: './ex4/hector/ef2-we-witchhunt.png'
                            }
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out for proteans on South half\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out for proteans on East half\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: '',
                                we: './ex4/hector/ef2-we-witchhunt.png'
                            }
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out for proteans on South half\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out for proteans on East half\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: '',
                                we: './ex4/hector/ef2-we-witchhunt.png'
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out for proteans on South half\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out for proteans on East half\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: '',
                                we: './ex4/hector/ef2-we-witchhunt.png'
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out for proteans on South half\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out for proteans on East half\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                            imageUrl: {
                                braindead: '',
                                ns: '',
                                we: './ex4/hector/ef2-we-witchhunt.png'
                            }
                        },
                    ]
                }
            ]
        },
        {
            phaseName: `Bloom 4`,
            tag: 'bloom4',
            description: {
                relative: 'Relative (4 empty tiles are new South)',
                tn: 'True North'
            },
            mechs: [
                {
                    mechanic: 'Roses',
                    description: '',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                relative: 'Drop rose on inner left tile',
                                tn: 'Drop rose on inner West tile'
                            },
                            imageUrl: './ex4/hector/bloom4-roses.png'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                relative: 'Drop rose on inner right tile',
                                tn: 'Drop rose on inner East tile'
                            },
                            imageUrl: './ex4/hector/bloom4-roses.png'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                relative: 'Drop rose on outer left tile',
                                tn: 'Drop rose on outer West tile'
                            },
                            imageUrl: './ex4/hector/bloom4-roses.png'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                relative: 'Drop rose on outer right tile',
                                tn: 'Drop rose on outer East tile'
                            },
                            imageUrl: './ex4/hector/bloom4-roses.png'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                relative: 'Drop rose on inner left tile',
                                tn: 'Drop rose on inner West tile'
                            },
                            imageUrl: './ex4/hector/bloom4-roses.png'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                relative: 'Drop rose on inner right tile',
                                tn: 'Drop rose on inner East tile'
                            },
                            imageUrl: './ex4/hector/bloom4-roses.png'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                relative: 'Drop rose on outer left tile',
                                tn: 'Drop rose on outer West tile'
                            },
                            imageUrl: './ex4/hector/bloom4-roses.png'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                relative: 'Drop rose on outer right tile',
                                tn: 'Drop rose on outer East tile'
                            },
                            imageUrl: './ex4/hector/bloom4-roses.png'
                        },
                    ]
                },
                {
                    mechanic: 'Thorns',
                    description: 'Meet up near center on 2 empty slices',
                    notes: 'Make sure you end up on the red slices after stretching tethers',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                relative: 'Facing boss\nGo left to stretch tethers',
                                tn: 'Go West to stretch tethers'
                            },
                            imageUrl: './ex4/hector/bloom4-thorns.png'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                relative: 'Facing boss\nGo left to stretch tethers',
                                tn: 'Go West to stretch tethers'
                            },
                            imageUrl: './ex4/hector/bloom4-thorns.png'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                relative: 'Facing boss\nGo left to stretch tethers',
                                tn: 'Go West to stretch tethers'
                            },
                            imageUrl: './ex4/hector/bloom4-thorns.png'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                relative: 'Facing boss\nGo left to stretch tethers',
                                tn: 'Go West to stretch tethers'
                            },
                            imageUrl: './ex4/hector/bloom4-thorns.png'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                relative: 'Facing boss\nGo right to stretch tethers',
                                tn: 'Go East to stretch tethers'
                            },
                            imageUrl: './ex4/hector/bloom4-thorns.png'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                relative: 'Facing boss\nGo right to stretch tethers',
                                tn: 'Go East to stretch tethers'
                            },
                            imageUrl: './ex4/hector/bloom4-thorns.png'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                relative: 'Facing boss\nGo right to stretch tethers',
                                tn: 'Go East to stretch tethers'
                            },
                            imageUrl: './ex4/hector/bloom4-thorns.png'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                relative: 'Facing boss\nGo right to stretch tethers',
                                tn: 'Go East to stretch tethers'
                            },
                            imageUrl: './ex4/hector/bloom4-thorns.png'
                        },
                    ]
                }
            ]
        },
        {
            phaseName: `Bloom 6`,
            tag: 'bloom6',
            description: {
                lb3: 'Tank LB3 (RMMR towers)',
                ns: 'G1 N, G2 S',
                we: 'G1 W, G2 E',
            },
            mechs: [
                {
                    mechanic: 'Roses',
                    description: '',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                lb3: 'Drop rose on inner NNW tile',
                                ns: 'Drop rose on inner or outer SSW tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer SSW tile\nLink to the tower not being hit by 1st cleave',
                            },
                            imageUrl: {
                                lb3: './ex4/hector/bloom6-we-support-roses.png',
                                ns: '',
                                we: './ex4/hector/bloom6-we-support-roses.png',
                            }
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                lb3: 'Drop rose on inner SSE tile',
                                ns: 'Drop rose on inner or outer NNE tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer SSE tile\nLink to the tower not being hit by 1st cleave',
                            },
                            imageUrl: {
                                lb3: './ex4/hector/bloom6-we-support-roses.png',
                                ns: '',
                                we: './ex4/hector/bloom6-we-support-roses.png',
                            }
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                lb3: 'Drop rose on inner SSW tile',
                                ns: 'Drop rose on inner or outer NNW tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer NNW tile\nLink to the tower not being hit by 1st cleave',
                            },
                            imageUrl: {
                                lb3: './ex4/hector/bloom6-we-support-roses.png',
                                ns: '',
                                we: './ex4/hector/bloom6-we-support-roses.png',
                            }
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                lb3: 'Drop rose on inner NNE tile',
                                ns: 'Drop rose on inner or outer SSE tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer NNE tile\nLink to the tower not being hit by 1st cleave',
                            },
                            imageUrl: {
                                lb3: './ex4/hector/bloom6-we-support-roses.png',
                                ns: '',
                                we: './ex4/hector/bloom6-we-support-roses.png',
                            }
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                lb3: 'Drop rose on inner SSW tile',
                                ns: 'Drop rose on inner or outer SSW tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer SSW tile\nLink to the tower not being hit by 1st cleave',
                            },
                            imageUrl: {
                                lb3: './ex4/hector/bloom6-we-dps-roses.png',
                                ns: '',
                                we: './ex4/hector/bloom6-we-dps-roses.png',
                            }
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                lb3: 'Drop rose on inner SSE tile',
                                ns: 'Drop rose on inner or outer NNE tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer SSE tile\nLink to the tower not being hit by 1st cleave',
                            },
                            imageUrl: {
                                lb3: './ex4/hector/bloom6-we-dps-roses.png',
                                ns: '',
                                we: './ex4/hector/bloom6-we-dps-roses.png',
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                lb3: 'Drop rose on inner NNW tile',
                                ns: 'Drop rose on inner or outer NNW tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer NNW tile\nLink to the tower not being hit by 1st cleave',
                            },
                            imageUrl: {
                                lb3: './ex4/hector/bloom6-we-dps-roses.png',
                                ns: '',
                                we: './ex4/hector/bloom6-we-dps-roses.png',
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                lb3: 'Drop rose on inner NNE tile',
                                ns: 'Drop rose on inner or outer SSE tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer NNE tile\nLink to the tower not being hit by 1st cleave',
                            },
                            imageUrl: {
                                lb3: './ex4/hector/bloom6-we-dps-roses.png',
                                ns: '',
                                we: './ex4/hector/bloom6-we-dps-roses.png',
                            }
                        },
                    ]
                },
                {
                    mechanic: 'Towers',
                    description: '',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                lb3: 'Take inner West tower\nRemember to LB!',
                                ns: 'Take inner North tower',
                                we: 'Take inner West tower',
                            },
                            imageUrl: {
                                lb3: './ex4/hector/bloom6-we-dps-roses.png',
                                ns: '',
                                we: './ex4/hector/bloom6-we-dps-roses.png',
                            }
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                lb3: 'Take inner East tower\nRemember to LB!',
                                ns: 'Take inner South tower',
                                we: 'Take inner East tower',
                            },
                            imageUrl: {
                                lb3: './ex4/hector/bloom6-we-dps-roses.png',
                                ns: '',
                                we: './ex4/hector/bloom6-we-dps-roses.png',
                            }
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                lb3: 'Take outer West tower',
                                ns: 'Take outer North tower',
                                we: 'Take outer West tower',
                            },
                            imageUrl: {
                                lb3: './ex4/hector/bloom6-we-dps-roses.png',
                                ns: '',
                                we: './ex4/hector/bloom6-we-dps-roses.png',
                            }
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                lb3: 'Take outer East tower',
                                ns: 'Take outer South tower',
                                we: 'Take outer East tower',
                            },
                            imageUrl: {
                                lb3: './ex4/hector/bloom6-we-dps-roses.png',
                                ns: '',
                                we: './ex4/hector/bloom6-we-dps-roses.png',
                            }
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                lb3: 'Take inner West tower',
                                ns: 'Take inner North tower',
                                we: 'Take inner West tower',
                            },
                            imageUrl: {
                                lb3: './ex4/hector/bloom6-we-support-roses.png',
                                ns: '',
                                we: './ex4/hector/bloom6-we-support-roses.png',
                            }
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                lb3: 'Take inner East tower',
                                ns: 'Take inner South tower',
                                we: 'Take inner East tower',
                            },
                            imageUrl: {
                                lb3: './ex4/hector/bloom6-we-support-roses.png',
                                ns: '',
                                we: './ex4/hector/bloom6-we-support-roses.png',
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                lb3: 'Take outer West tower',
                                ns: 'Take outer North tower',
                                we: 'Take outer West tower',
                            },
                            imageUrl: {
                                lb3: './ex4/hector/bloom6-we-support-roses.png',
                                ns: '',
                                we: './ex4/hector/bloom6-we-support-roses.png',
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                lb3: 'Take outer East tower',
                                ns: 'Take outer South tower',
                                we: 'Take outer East tower',
                            },
                            imageUrl: {
                                lb3: './ex4/hector/bloom6-we-support-roses.png',
                                ns: '',
                                we: './ex4/hector/bloom6-we-support-roses.png',
                            }
                        },
                    ]
                }
            ]
        },
    ]
}

const happyStrat: Strat = {
    stratName: 'happy',
    description: 'Source: Video by Mrhappy1227',
    notes: '',
    stratUrl: 'https://www.youtube.com/watch?v=uop1Zzv8Clo',
    strats: [
        {
            phaseName: 'Setup',
            mechs: [
                {
                    mechanic: 'Clock Spots',
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
                            description: 'West',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Southwest',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Southeast',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Northwest',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Northeast',
                        },
                    ]
                }
            ]
        },
        {
            phaseName: `Escelons' Fall 1 (Witch Hunt)`,
            tag: 'ef1',
            description: {
                supports: 'Supports bait first',
                dps: 'DPS bait first',
                dpsin: 'DPS in first'
            },
            mechs: [
                {
                    mechanic: 'Witch Hunt',
                    description: 'Start on clock spot',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                supports: 'Follow symbol on 1 & 3',
                                dps: 'Follow symbol on 2 & 4',
                                dpsin: 'Always start out\nDodge either once or twice'
                                
                            }
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                supports: 'Follow symbol on 1 & 3',
                                dps: 'Follow symbol on 2 & 4',
                                dpsin: 'Always start out\nDodge either once or twice'
                            }
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                supports: 'Follow symbol on 1 & 3',
                                dps: 'Follow symbol on 2 & 4',
                                dpsin: 'Always start out\nDodge either once or twice'
                            }
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                supports: 'Follow symbol on 1 & 3',
                                dps: 'Follow symbol on 2 & 4',
                                dpsin: 'Always start out\nDodge either once or twice'
                            }
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                supports: 'Follow symbol on 2 & 4',
                                dps: 'Follow symbol on 1 & 3',
                                dpsin: 'Always start in\nDodge either once or twice'
                            }
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                supports: 'Follow symbol on 2 & 4',
                                dps: 'Follow symbol on 1 & 3',
                                dpsin: 'Always start in\nDodge either once or twice'
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                supports: 'Follow symbol on 2 & 4',
                                dps: 'Follow symbol on 1 & 3',
                                dpsin: 'Always start in\nDodge either once or twice'
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                supports: 'Follow symbol on 2 & 4',
                                dps: 'Follow symbol on 1 & 3',
                                dpsin: 'Always start in\nDodge either once or twice'
                            }
                        },
                    ]
                }
            ]
        },
        {
            phaseName: `Adds`,
            description: 'Supports W, DPS E',
        },
        {
            phaseName: `Bloom 3`,
            tag: 'bloom3',
            description: {
                relative: 'Relative (single inner slice is new North)',
                color: 'True North (Colors)'
            },
            mechs: [
                {
                    mechanic: 'Roses',
                    description: 'Place rose in inner tiles',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                relative: 'Inner slice North',
                                color: 'Inner slice near North'
                            }
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                relative: 'Inner slice South',
                                color: 'Inner slice near South'
                            }
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                relative: 'Inner slice Southwest',
                                color: 'Inner slice near West'
                            }
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                relative: 'Inner slice Southeast',
                                color: 'Inner slice near East'
                            }
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                relative: 'Inner slice Southwest',
                                color: 'Inner slice near Southwest'
                            }
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                relative: 'Inner slice South',
                                color: 'Inner slice near Southeast'
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                relative: 'Inner slice North',
                                color: 'Inner slice near Northwest'
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                relative: 'Inner slice Southeast',
                                color: 'Inner slice near Northeast'
                            }
                        },
                    ]
                },
                {
                    mechanic: 'Towers',
                    description: 'Take tower in outer tiles',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                relative: 'Outer slice North',
                                color: 'Outer slice touching North'
                            }
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                relative: 'Outer slice South',
                                color: 'Outer slice touching South'
                            }
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                relative: 'Outer slice West',
                                color: 'Outer slice touching West'
                            }
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                relative: 'Outer slice East',
                                color: 'Outer slice touching East'
                            }
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                relative: 'Outer slice West',
                                color: 'Outer slice touching West'
                            }
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                relative: 'Outer slice South',
                                color: 'Outer slice touching South'
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                relative: 'Outer slice North',
                                color: 'Outer slice touching North'
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                relative: 'Outer slice East',
                                color: 'Outer slice touching East'
                            }
                        },
                    ]
                }
            ]
        },
        {
            phaseName: `Escelons' Fall 2`,
            tag: 'ef2',
            description: {
                braindead: 'Braindead (Clocks)',
                ns: 'Supports N / DPS S',
                we: 'Supports W / DPS E'
            },
            mechs: [
                {
                    mechanic: 'Donut + Stacks',
                    description: '',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack North on hitbox',
                                we: 'Stack West on hitbox'
                            },
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack North on hitbox',
                                we: 'Stack West on hitbox'
                            },
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack North on hitbox',
                                we: 'Stack West on hitbox'
                            },
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack North on hitbox',
                                we: 'Stack West on hitbox'
                            },
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack South on hitbox',
                                we: 'Stack East on hitbox'
                            },
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack South on hitbox',
                                we: 'Stack East on hitbox'
                            },
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack South on hitbox',
                                we: 'Stack East on hitbox'
                            },
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack South on hitbox',
                                we: 'Stack East on hitbox'
                            },
                        },
                    ]
                },
                {
                    mechanic: 'Witch Hunt',
                    description: '',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                        },
                    ]
                }
            ]
        },
        {
            phaseName: `Bloom 4`,
            tag: 'bloom4',
            description: {
                relative: 'Relative (4 empty tiles are new South)',
                tn: 'True North'
            },
            mechs: [
                {
                    mechanic: 'Roses',
                    description: '',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                relative: 'Drop rose on inner left tile',
                                tn: 'Drop rose on inner East tile'
                            },
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                relative: 'Drop rose on inner right tile',
                                tn: 'Drop rose on inner West tile'
                            },
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                relative: 'Drop rose on outer left tile',
                                tn: 'Drop rose on outer East tile'
                            },
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                relative: 'Drop rose on outer right tile',
                                tn: 'Drop rose on outer West tile'
                            },
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                relative: 'Drop rose on inner left tile',
                                tn: 'Drop rose on inner East tile'
                            },
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                relative: 'Drop rose on inner right tile',
                                tn: 'Drop rose on inner West tile'
                            },
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                relative: 'Drop rose on outer left tile',
                                tn: 'Drop rose on outer East tile'
                            },
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                relative: 'Drop rose on outer right tile',
                                tn: 'Drop rose on outer West tile'
                            },
                        },
                    ]
                },
                {
                    mechanic: 'Thorns',
                    description: 'Meet up near center on rose tile slices',
                    notes: 'Make sure you end up on the red slices after stretching tethers',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                relative: 'Facing boss\nGo left to stretch tethers',
                                tn: 'Go West to stretch tethers'
                            },
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                relative: 'Facing boss\nGo left to stretch tethers',
                                tn: 'Go West to stretch tethers'
                            },
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                relative: 'Facing boss\nGo left to stretch tethers',
                                tn: 'Go West to stretch tethers'
                            },
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                relative: 'Facing boss\nGo left to stretch tethers',
                                tn: 'Go West to stretch tethers'
                            },
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                relative: 'Facing boss\nGo right to stretch tethers',
                                tn: 'Go East to stretch tethers'
                            },
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                relative: 'Facing boss\nGo right to stretch tethers',
                                tn: 'Go East to stretch tethers'
                            },
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                relative: 'Facing boss\nGo right to stretch tethers',
                                tn: 'Go East to stretch tethers'
                            },
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                relative: 'Facing boss\nGo right to stretch tethers',
                                tn: 'Go East to stretch tethers'
                            },
                        },
                    ]
                }
            ]
        },
        {
            phaseName: `Bloom 6`,
            tag: 'bloom6',
            description: {
                lb3: 'Tank LB3 (RMMR towers)',
                ns: 'G1 N, G2 S',
                we: 'G1 W, G2 E',
            },
            mechs: [
                {
                    mechanic: 'Roses',
                    description: '',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                lb3: 'Drop rose on inner SSW tile',
                                ns: 'Drop rose on inner or outer SSW tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer SSW tile\nLink to the tower not being hit by 1st cleave',
                            },
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                lb3: 'Drop rose on inner SSE tile',
                                ns: 'Drop rose on inner or outer NNE tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer SSE tile\nLink to the tower not being hit by 1st cleave',
                            },
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                lb3: 'Drop rose on inner NNW tile',
                                ns: 'Drop rose on inner or outer NNW tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer NNW tile\nLink to the tower not being hit by 1st cleave',
                            },
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                lb3: 'Drop rose on inner NNE tile',
                                ns: 'Drop rose on inner or outer SSE tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer NNE tile\nLink to the tower not being hit by 1st cleave',
                            },
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                lb3: 'Drop rose on inner SSW tile',
                                ns: 'Drop rose on inner or outer SSW tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer SSW tile\nLink to the tower not being hit by 1st cleave',
                            },
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                lb3: 'Drop rose on inner SSE tile',
                                ns: 'Drop rose on inner or outer NNE tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer SSE tile\nLink to the tower not being hit by 1st cleave',
                            },
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                lb3: 'Drop rose on inner NNW tile',
                                ns: 'Drop rose on inner or outer NNW tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer NNW tile\nLink to the tower not being hit by 1st cleave',
                            },
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                lb3: 'Drop rose on inner NNE tile',
                                ns: 'Drop rose on inner or outer SSE tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer NNE tile\nLink to the tower not being hit by 1st cleave',
                            },
                        },
                    ]
                },
                {
                    mechanic: 'Towers',
                    description: '',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                lb3: 'Take inner West tower\nRemember to LB!',
                                ns: 'Take inner North tower',
                                we: 'Take inner West tower',
                            },
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                lb3: 'Take inner East tower\nRemember to LB!',
                                ns: 'Take inner South tower',
                                we: 'Take inner East tower',
                            },
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                lb3: 'Take outer West tower',
                                ns: 'Take outer North tower',
                                we: 'Take outer West tower',
                            },
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                lb3: 'Take outer East tower',
                                ns: 'Take outer South tower',
                                we: 'Take outer East tower',
                            },
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                lb3: 'Take inner West tower',
                                ns: 'Take inner North tower',
                                we: 'Take inner West tower',
                            },
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                lb3: 'Take inner East tower',
                                ns: 'Take inner South tower',
                                we: 'Take inner East tower',
                            },
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                lb3: 'Take outer West tower',
                                ns: 'Take outer North tower',
                                we: 'Take outer West tower',
                            },
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                lb3: 'Take outer East tower',
                                ns: 'Take outer South tower',
                                we: 'Take outer East tower',
                            },
                        },
                    ]
                }
            ]
        },
    ]
}

const yukizuriStrat: Strat = {
    stratName: 'yukizuri',
    description: 'Source: Video by Yukizuri',
    notes: '',
    stratUrl: 'https://www.youtube.com/watch?v=q9thzM1m0As',
    strats: [
        {
            phaseName: 'Setup',
            mechs: [
                {
                    mechanic: 'Clock Spots',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'North',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'East',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Southwest',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Southeast',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Northwest',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Northeast',
                        },
                    ]
                }
            ]
        },
        {
            phaseName: `Escelons' Fall 1 (Witch Hunt)`,
            tag: 'ef1',
            description: {
                supports: 'Supports bait first',
                dps: 'DPS bait first',
                dpsin: 'DPS in first'
            },
            mechs: [
                {
                    mechanic: 'Witch Hunt',
                    description: 'Start on clock spot',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                supports: 'Follow symbol on 1 & 3',
                                dps: 'Follow symbol on 2 & 4',
                                dpsin: 'Always start out\nDodge either once or twice'
                            }
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                supports: 'Follow symbol on 1 & 3',
                                dps: 'Follow symbol on 2 & 4',
                                dpsin: 'Always start out\nDodge either once or twice'
                            }
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                supports: 'Follow symbol on 1 & 3',
                                dps: 'Follow symbol on 2 & 4',
                                dpsin: 'Always start out\nDodge either once or twice'
                            }
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                supports: 'Follow symbol on 1 & 3',
                                dps: 'Follow symbol on 2 & 4',
                                dpsin: 'Always start out\nDodge either once or twice'
                            }
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                supports: 'Follow symbol on 2 & 4',
                                dps: 'Follow symbol on 1 & 3',
                                dpsin: 'Always start in\nDodge either once or twice'
                            }
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                supports: 'Follow symbol on 2 & 4',
                                dps: 'Follow symbol on 1 & 3',
                                dpsin: 'Always start in\nDodge either once or twice'
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                supports: 'Follow symbol on 2 & 4',
                                dps: 'Follow symbol on 1 & 3',
                                dpsin: 'Always start in\nDodge either once or twice'
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                supports: 'Follow symbol on 2 & 4',
                                dps: 'Follow symbol on 1 & 3',
                                dpsin: 'Always start in\nDodge either once or twice'
                            }
                        },
                    ]
                }
            ]
        },
        {
            phaseName: `Adds`,
            description: 'Supports W, DPS E',
        },
        {
            phaseName: `Bloom 3`,
            tag: 'bloom3',
            description: {
                relative: 'Relative (single inner slice is new North)',
                color: 'True North (Colors)'
            },
            mechs: [
                {
                    mechanic: 'Roses',
                    description: 'Place rose in inner tiles',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                relative: 'Inner slice North',
                                color: 'Inner slice near North'
                            }
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                relative: 'Inner slice Southeast',
                                color: 'Inner slice near East'
                            }
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                relative: 'Inner slice Southwest',
                                color: 'Inner slice near West'
                            }
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                relative: 'Inner slice South',
                                color: 'Inner slice near South'
                            }
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                relative: 'Inner slice Southwest',
                                color: 'Inner slice near Southwest'
                            }
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                relative: 'Inner slice South',
                                color: 'Inner slice near Southeast'
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                relative: 'Inner slice North',
                                color: 'Inner slice near Northwest'
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                relative: 'Inner slice Southeast',
                                color: 'Inner slice near Northeast'
                            }
                        },
                    ]
                },
                {
                    mechanic: 'Towers',
                    description: 'Take tower in outer tiles',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                relative: 'Outer slice North',
                                color: 'Outer slice touching North'
                            }
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                relative: 'Outer slice East',
                                color: 'Outer slice touching East'
                            }
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                relative: 'Outer slice West',
                                color: 'Outer slice touching West'
                            }
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                relative: 'Outer slice South',
                                color: 'Outer slice touching South'
                            }
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                relative: 'Outer slice West',
                                color: 'Outer slice touching West'
                            }
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                relative: 'Outer slice South',
                                color: 'Outer slice touching South'
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                relative: 'Outer slice North',
                                color: 'Outer slice touching North'
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                relative: 'Outer slice East',
                                color: 'Outer slice touching East'
                            }
                        },
                    ]
                }
            ]
        },
        {
            phaseName: `Escelons' Fall 2`,
            tag: 'ef2',
            description: {
                braindead: 'Braindead (Clocks)',
                ns: 'Supports N / DPS S',
                we: 'Supports W / DPS E'
            },
            mechs: [
                {
                    mechanic: 'Donut + Stacks',
                    description: '',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack North on hitbox',
                                we: 'Stack West on hitbox'
                            },
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack North on hitbox',
                                we: 'Stack West on hitbox'
                            },
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack North on hitbox',
                                we: 'Stack West on hitbox'
                            },
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack North on hitbox',
                                we: 'Stack West on hitbox'
                            },
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack South on hitbox',
                                we: 'Stack East on hitbox'
                            },
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack South on hitbox',
                                we: 'Stack East on hitbox'
                            },
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack South on hitbox',
                                we: 'Stack East on hitbox'
                            },
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                braindead: 'Donuts out to clock spots\nEveryone else center',
                                ns: 'Stack South on hitbox',
                                we: 'Stack East on hitbox'
                            },
                        },
                    ]
                },
                {
                    mechanic: 'Witch Hunt',
                    description: '',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                braindead: 'Same as first Witch Hunt',
                                ns: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4',
                                we: 'Fan out for proteans\nNon-Donuts follow symbol on 1 & 3\nDonuts follow symbol on 2 & 4'
                            },
                        },
                    ]
                }
            ]
        },
        {
            phaseName: `Bloom 4`,
            tag: 'bloom4',
            description: {
                relative: 'Relative (4 empty tiles are new South)',
                tn: 'True North'
            },
            mechs: [
                {
                    mechanic: 'Roses',
                    description: '',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                relative: 'Drop rose on inner left tile',
                                tn: 'Drop rose on inner East tile'
                            },
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                relative: 'Drop rose on inner right tile',
                                tn: 'Drop rose on inner West tile'
                            },
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                relative: 'Drop rose on outer left tile',
                                tn: 'Drop rose on outer East tile'
                            },
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                relative: 'Drop rose on outer right tile',
                                tn: 'Drop rose on outer West tile'
                            },
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                relative: 'Drop rose on inner left tile',
                                tn: 'Drop rose on inner East tile'
                            },
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                relative: 'Drop rose on inner right tile',
                                tn: 'Drop rose on inner West tile'
                            },
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                relative: 'Drop rose on outer left tile',
                                tn: 'Drop rose on outer East tile'
                            },
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                relative: 'Drop rose on outer right tile',
                                tn: 'Drop rose on outer West tile'
                            },
                        },
                    ]
                },
                {
                    mechanic: 'Thorns',
                    description: 'Meet up near center on 2 empty slices',
                    notes: 'Make sure you end up on the red slices after stretching tethers',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                relative: 'Facing boss\nGo left to stretch tethers',
                                tn: 'Go West to stretch tethers'
                            },
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                relative: 'Facing boss\nGo left to stretch tethers',
                                tn: 'Go West to stretch tethers'
                            },
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                relative: 'Facing boss\nGo left to stretch tethers',
                                tn: 'Go West to stretch tethers'
                            },
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                relative: 'Facing boss\nGo left to stretch tethers',
                                tn: 'Go West to stretch tethers'
                            },
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                relative: 'Facing boss\nGo right to stretch tethers',
                                tn: 'Go East to stretch tethers'
                            },
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                relative: 'Facing boss\nGo right to stretch tethers',
                                tn: 'Go East to stretch tethers'
                            },
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                relative: 'Facing boss\nGo right to stretch tethers',
                                tn: 'Go East to stretch tethers'
                            },
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                relative: 'Facing boss\nGo right to stretch tethers',
                                tn: 'Go East to stretch tethers'
                            },
                        },
                    ]
                }
            ]
        },
        {
            phaseName: `Bloom 6`,
            tag: 'bloom6',
            description: {
                lb3: 'Tank LB3 (RMMR towers)',
                ns: 'G1 N, G2 S',
                we: 'G1 W, G2 E',
            },
            mechs: [
                {
                    mechanic: 'Roses',
                    description: '',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                lb3: 'Drop rose on inner SSW tile',
                                ns: 'Drop rose on inner or outer SSW tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer SSW tile\nLink to the tower not being hit by 1st cleave',
                            },
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                lb3: 'Drop rose on inner SSE tile',
                                ns: 'Drop rose on inner or outer NNE tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer SSE tile\nLink to the tower not being hit by 1st cleave',
                            },
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                lb3: 'Drop rose on inner NNW tile',
                                ns: 'Drop rose on inner or outer NNW tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer NNW tile\nLink to the tower not being hit by 1st cleave',
                            },
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                lb3: 'Drop rose on inner NNE tile',
                                ns: 'Drop rose on inner or outer SSE tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer NNE tile\nLink to the tower not being hit by 1st cleave',
                            },
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                lb3: 'Drop rose on inner SSW tile',
                                ns: 'Drop rose on inner or outer SSW tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer SSW tile\nLink to the tower not being hit by 1st cleave',
                            },
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                lb3: 'Drop rose on inner SSE tile',
                                ns: 'Drop rose on inner or outer NNE tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer SSE tile\nLink to the tower not being hit by 1st cleave',
                            },
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                lb3: 'Drop rose on inner NNW tile',
                                ns: 'Drop rose on inner or outer NNW tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer NNW tile\nLink to the tower not being hit by 1st cleave',
                            },
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                lb3: 'Drop rose on inner NNE tile',
                                ns: 'Drop rose on inner or outer SSE tile\nLink to the tower not being hit by 1st cleave',
                                we: 'Drop rose on inner or outer NNE tile\nLink to the tower not being hit by 1st cleave',
                            },
                        },
                    ]
                },
                {
                    mechanic: 'Towers',
                    description: '',
                    notes: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                lb3: 'Take inner West tower\nRemember to LB!',
                                ns: 'Take inner North tower',
                                we: 'Take inner West tower',
                            },
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                lb3: 'Take inner East tower\nRemember to LB!',
                                ns: 'Take inner South tower',
                                we: 'Take inner East tower',
                            },
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                lb3: 'Take outer West tower',
                                ns: 'Take outer North tower',
                                we: 'Take outer West tower',
                            },
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                lb3: 'Take outer East tower',
                                ns: 'Take outer South tower',
                                we: 'Take outer East tower',
                            },
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                lb3: 'Take inner West tower',
                                ns: 'Take inner North tower',
                                we: 'Take inner West tower',
                            },
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                lb3: 'Take inner East tower',
                                ns: 'Take inner South tower',
                                we: 'Take inner East tower',
                            },
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                lb3: 'Take outer West tower',
                                ns: 'Take outer North tower',
                                we: 'Take outer West tower',
                            },
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                lb3: 'Take outer East tower',
                                ns: 'Take outer South tower',
                                we: 'Take outer East tower',
                            },
                        },
                    ]
                }
            ]
        },
    ]
}