import type { Strat, FightConfig, StratRecord, PlayerMechStrat } from '$lib/types';
import { getStringObject, getStratArray, getCircleMaskUrl, getMultiCircleMaskUrl, getRectMaskUrl } from '$lib/utils';

const autocadSunrise: StratRecord = {
    cannonbaits: {
        MT: {
            role: "Tank",
            party: 1,
            description: "Opposite color, snake prio (NW CCW)",
            imageUrl: "./m4s/sunrise-autocad.webp"
        },
        OT: {
            role: "Tank",
            party: 2,
            description: "Opposite color, snake prio (NW CCW)",
            imageUrl: "./m4s/sunrise-autocad.webp"
        },
        H1: {
            role: "Healer",
            party: 1,
            description: "Opposite color, snake prio (NW CCW)",
            imageUrl: "./m4s/sunrise-autocad.webp"
        },
        H2: {
            role: "Healer",
            party: 2,
            description: "Opposite color, snake prio (NW CCW)",
            imageUrl: "./m4s/sunrise-autocad.webp"
        },
        M1: {
            role: "Melee",
            party: 1,
            description: "Opposite color, snake prio (N CW)",
            imageUrl: "./m4s/sunrise-autocad.webp"
        },
        M2: {
            role: "Melee",
            party: 2,
            description: "Opposite color, snake prio (N CW)",
            imageUrl: "./m4s/sunrise-autocad.webp"
        },
        R1: {
            role: "Ranged",
            party: 1,
            description: "Opposite color, snake prio (N CW)",
            imageUrl: "./m4s/sunrise-autocad.webp"
        },
        R2: {
            role: "Ranged",
            party: 2,
            description: "Opposite color, snake prio (N CW)",
            imageUrl: "./m4s/sunrise-autocad.webp"
        },
        description: "Bait cannon TOWARDS nearest tower\nN/S towers = N/S side of marker\nE/W towers = E/W side of marker",
        notes: "Bait positioning is very precise for this mechanic\nStand in the center of the edge of the marker"
    },
    towers: {
        MT: {
            role: "Tank",
            party: 1,
            description: "Soak W/S tower w/ other support",
            imageUrl: "./m4s/sunrise-towers.webp"
        },
        OT: {
            role: "Tank",
            party: 2,
            description: "Soak W/S tower w/ other support",
            imageUrl: "./m4s/sunrise-towers.webp"
        },
        H1: {
            role: "Healer",
            party: 1,
            description: "Soak W/S tower w/ other support",
            imageUrl: "./m4s/sunrise-towers.webp"
        },
        H2: {
            role: "Healer",
            party: 2,
            description: "Soak W/S tower w/ other support",
            imageUrl: "./m4s/sunrise-towers.webp"
        },
        M1: {
            role: "Melee",
            party: 1,
            description: "Soak N/E tower w/ other DPS",
            imageUrl: "./m4s/sunrise-towers.webp"
        },
        M2: {
            role: "Melee",
            party: 2,
            description: "Soak N/E tower w/ other DPS",
            imageUrl: "./m4s/sunrise-towers.webp"
        },
        R1: {
            role: "Ranged",
            party: 1,
            description: "Soak N/E tower w/ other DPS",
            imageUrl: "./m4s/sunrise-towers.webp"
        },
        R2: {
            role: "Ranged",
            party: 2,
            description: "Soak N/E tower w/ other DPS",
            imageUrl: "./m4s/sunrise-towers.webp"
        },
        description: "Towers are also snake prio\nSupports W/S, DPS N/E"
    }
};

const normalSunrise: StratRecord = {
    cannonbaits: {
        MT: {
            role: "Tank",
            party: 1,
            description: "Opposite color, snake prio (NW CCW)",
            imageUrl: "./m4s/sunrise-normal.webp"
        },
        OT: {
            role: "Tank",
            party: 2,
            description: "Opposite color, snake prio (NW CCW)",
            imageUrl: "./m4s/sunrise-normal.webp"
        },
        H1: {
            role: "Healer",
            party: 1,
            description: "Opposite color, snake prio (NW CCW)",
            imageUrl: "./m4s/sunrise-normal.webp"
        },
        H2: {
            role: "Healer",
            party: 2,
            description: "Opposite color, snake prio (NW CCW)",
            imageUrl: "./m4s/sunrise-normal.webp"
        },
        M1: {
            role: "Melee",
            party: 1,
            description: "Opposite color, snake prio (NW CCW)",
            imageUrl: "./m4s/sunrise-normal.webp"
        },
        M2: {
            role: "Melee",
            party: 2,
            description: "Opposite color, snake prio (NW CCW)",
            imageUrl: "./m4s/sunrise-normal.webp"
        },
        R1: {
            role: "Ranged",
            party: 1,
            description: "Opposite color, snake prio (NW CCW)",
            imageUrl: "./m4s/sunrise-normal.webp"
        },
        R2: {
            role: "Ranged",
            party: 2,
            description: "Opposite color, snake prio (NW CCW)",
            imageUrl: "./m4s/sunrise-normal.webp"
        },
        description: "Bait cannon into death wall AWAY from tower"
    },
    towers: {
        MT: {
            role: "Tank",
            party: 1,
            description: "Soak W/S tower w/ other support",
            imageUrl: "./m4s/sunrise-towers.webp"
        },
        OT: {
            role: "Tank",
            party: 2,
            description: "Soak W/S tower w/ other support",
            imageUrl: "./m4s/sunrise-towers.webp"
        },
        H1: {
            role: "Healer",
            party: 1,
            description: "Soak W/S tower w/ other support",
            imageUrl: "./m4s/sunrise-towers.webp"
        },
        H2: {
            role: "Healer",
            party: 2,
            description: "Soak W/S tower w/ other support",
            imageUrl: "./m4s/sunrise-towers.webp"
        },
        M1: {
            role: "Melee",
            party: 1,
            description: "Soak N/E tower w/ other DPS",
            imageUrl: "./m4s/sunrise-towers.webp"
        },
        M2: {
            role: "Melee",
            party: 2,
            description: "Soak N/E tower w/ other DPS",
            imageUrl: "./m4s/sunrise-towers.webp"
        },
        R1: {
            role: "Ranged",
            party: 1,
            description: "Soak N/E tower w/ other DPS",
            imageUrl: "./m4s/sunrise-towers.webp"
        },
        R2: {
            role: "Ranged",
            party: 2,
            description: "Soak N/E tower w/ other DPS",
            imageUrl: "./m4s/sunrise-towers.webp"
        },
        description: "Towers are also snake prio\nSupports W/S, DPS N/E"
    }
};

const sunriseStrats: Record<string, StratRecord> = { autocad: autocadSunrise, normal: normalSunrise };

export const m4sFightConfig: FightConfig = {
    fightKey: "m4s",
    title: "AAC Light-Heavyweight M4 (Savage)",
    abbreviatedTitle: "M4S",
    subtitle: "M4S Patch 7.0",
    cheatsheetTitle: "M4S Cheatsheet",
    strats: {
        shabin: {
            label: "Shabin/Hector",
            defaults: {
                sunrise: "autocad"
            },
            badges: [
                {
                    text: "NA",
                    class: "na-badge"
                }
            ]
        }
    },
    toggles: [
        {
            key: "sunrise",
            label: "Sunrise",
            defaultValue: "autocad",
            options: [
                {
                    value: "autocad",
                    label: "AutoCAD",
                    url: {
                        name: "AutoCAD Sunrise",
                        url: "https://raidplan.io/plan/OnQXobwatopL1G8u"
                    }
                },
                {
                    value: "normal",
                    label: "Normal",
                    url: {
                        name: "Normal Sunrise",
                        url: "https://raidplan.io/plan/DGafL6v7CUTkx_5c"
                    }
                }
            ]
        }
    ],
    tabTags: {
        P1: [
            "p1"
        ],
        P2: [
            "p2",
            "sunrise"
        ]
    },
    useMainPageTabs: false,
    defaultStratName: "shabin"
};

export const shabin: Strat = {
    stratName: "shabin",
    stratUrl: {
        Shabin: "https://pastebin.com/teF90QGm",
        Hector: "https://www.youtube.com/watch?v=xEX0kAIfTKo"
    },
    description: "Source: Shabin Pastebin/Hector",
    strats: [
        {
            phaseName: "Bewitching Flight",
            tag: "p1",
            mechs: [
                {
                    mechanic: "Line AoEs",
                    description: "5 beams from boss (north) and 5 from cubes (west)\nStand in safe intersections",
                    imageUrl: "./m4s/bewitching.webp"
                }
            ]
        },
        {
            phaseName: "Electrifying Witch Hunt",
            tag: "p1",
            mechs: [
                {
                    mechanic: "First spreads",
                    description: "RTMH North to South\nG1 West, G2 East",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "Northwest, close to boss",
                            imageUrl: "./m4s/witch-hunt-spreads.webp",
                            mask: getCircleMaskUrl(42.1, 36.7, 5)
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "Northeast, close to boss",
                            imageUrl: "./m4s/witch-hunt-spreads.webp",
                            mask: getCircleMaskUrl(54.9, 36.1, 5)
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "Southwest, far from boss",
                            imageUrl: "./m4s/witch-hunt-spreads.webp",
                            mask: getCircleMaskUrl(40.7, 75.7, 5)
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "Southeast, far from boss",
                            imageUrl: "./m4s/witch-hunt-spreads.webp",
                            mask: getCircleMaskUrl(55.3, 75, 5)
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "Southwest, close to boss",
                            imageUrl: "./m4s/witch-hunt-spreads.webp",
                            mask: getCircleMaskUrl(41.5, 56.3, 5)
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "Southeast, close to boss",
                            imageUrl: "./m4s/witch-hunt-spreads.webp",
                            mask: getCircleMaskUrl(56, 56.5, 5)
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "Northwest, far from boss",
                            imageUrl: "./m4s/witch-hunt-spreads.webp",
                            mask: getCircleMaskUrl(40.5, 12.6, 5)
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "Northeast, far from boss",
                            imageUrl: "./m4s/witch-hunt-spreads.webp",
                            mask: getCircleMaskUrl(55.3, 12, 5)
                        }
                    ]
                },
                {
                    mechanic: "Second spreads",
                    description: "Second hit will target close (pink) or far (purple)\nTake second hit if you DIDN'T get hit on first hits\nSwap with your quadrant if you need",
                    imageUrl: "./m4s/witch-hunt-second.webp"
                }
            ]
        },
        {
            phaseName: "Narrowing/Widening Witch Hunt",
            tag: "p1",
            mechs: [
                {
                    mechanic: "Modified Clocks",
                    description: "Melees will be W/E\nHealers will be SW/SE",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "North",
                            imageUrl: "./m4s/witch-hunt-clocks.webp",
                            mask: getCircleMaskUrl(50, 29.9, 4)
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "South",
                            imageUrl: "./m4s/witch-hunt-clocks.webp",
                            mask: getCircleMaskUrl(50, 70.1, 4)
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "Southwest",
                            imageUrl: "./m4s/witch-hunt-clocks.webp",
                            mask: getCircleMaskUrl(42.5, 63.9, 4)
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "Southeast",
                            imageUrl: "./m4s/witch-hunt-clocks.webp",
                            mask: getCircleMaskUrl(57.3, 64, 4)
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "West",
                            imageUrl: "./m4s/witch-hunt-clocks.webp",
                            mask: getCircleMaskUrl(39.6, 50, 4)
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "East",
                            imageUrl: "./m4s/witch-hunt-clocks.webp",
                            mask: getCircleMaskUrl(59.2, 50.1, 4)
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "Northwest",
                            imageUrl: "./m4s/witch-hunt-clocks.webp",
                            mask: getCircleMaskUrl(42.6, 33.9, 4)
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "Northeast",
                            imageUrl: "./m4s/witch-hunt-clocks.webp",
                            mask: getCircleMaskUrl(57.7, 34, 4)
                        }
                    ]
                },
                {
                    mechanic: "In/Out + Baits",
                    description: "Narrowing = In Out In Out, Widening = Out In Out In\nSupports bait 1st & 2nd, DPS bait 3rd & 4th\nRanged far baits, Melee close baits",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "First close bait",
                            imageUrl: "./m4s/narrowing-widening.webp",
                            mask: getCircleMaskUrl(50, 27.6, 5)
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "First close bait",
                            imageUrl: "./m4s/narrowing-widening.webp",
                            mask: getCircleMaskUrl(49.9, 73.2, 5)
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "First far bait",
                            imageUrl: "./m4s/narrowing-widening.webp",
                            mask: getCircleMaskUrl(37.9, 71, 5)
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "First far bait",
                            imageUrl: "./m4s/narrowing-widening.webp",
                            mask: getCircleMaskUrl(62.6, 71, 5)
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "Second close bait",
                            imageUrl: "./m4s/narrowing-widening.webp",
                            mask: getCircleMaskUrl(36.9, 50, 5)
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "Second close bait",
                            imageUrl: "./m4s/narrowing-widening.webp",
                            mask: getCircleMaskUrl(62.7, 50, 5)
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "Second far bait",
                            imageUrl: "./m4s/narrowing-widening.webp",
                            mask: getCircleMaskUrl(40.5, 33.6, 5)
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "Second far bait",
                            imageUrl: "./m4s/narrowing-widening.webp",
                            mask: getCircleMaskUrl(59.5, 32.8, 5)
                        }
                    ]
                }
            ]
        },
        {
            phaseName: "Electrope Edge 1",
            tag: "p1",
            mechs: [
                {
                    mechanic: "Cubes",
                    description: "Track which cubes hit 1x vs 2x\n2x = unsafe quadrant, 1x = safe quadrant\n8 orbs = spread, 4 orbs = partners",
                    imageUrl: "./m4s/ee1-cubes.webp"
                },
                {
                    mechanic: "Spread (8 orbs)",
                    description: "Go to safe quadrant after cleave",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "Under boss",
                            imageUrl: "./m4s/ee1-spread.webp",
                            mask: getCircleMaskUrl(48.9, 51.2, 5)
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "Corner between melees",
                            imageUrl: "./m4s/ee1-spread.webp",
                            mask: getCircleMaskUrl(40.6, 67.2, 5)
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "Near cube, left facing boss",
                            imageUrl: "./m4s/ee1-spread.webp",
                            mask: getCircleMaskUrl(27.7, 68.6, 5)
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "Near cube, right facing boss",
                            imageUrl: "./m4s/ee1-spread.webp",
                            mask: getCircleMaskUrl(39.4, 89.5, 5)
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "Max melee, left facing boss",
                            imageUrl: "./m4s/ee1-spread.webp",
                            mask: getCircleMaskUrl(39.5, 51.1, 5)
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "Max melee, right facing boss",
                            imageUrl: "./m4s/ee1-spread.webp",
                            mask: getCircleMaskUrl(49.3, 68.9, 5)
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "Far corner, left facing boss",
                            imageUrl: "./m4s/ee1-spread.webp",
                            mask: getCircleMaskUrl(27.7, 51.5, 5)
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "Far corner, right facing boss",
                            imageUrl: "./m4s/ee1-spread.webp",
                            mask: getCircleMaskUrl(49.2, 89.1, 5)
                        }
                    ]
                },
                {
                    mechanic: "Partners (4 orbs)",
                    description: "Go to safe quadrant after cleave",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "Left facing boss, close with M1",
                            imageUrl: "./m4s/ee1-partners.webp"
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "Right facing boss, close with M2",
                            imageUrl: "./m4s/ee1-partners.webp"
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "Left facing boss, far with R1",
                            imageUrl: "./m4s/ee1-partners.webp"
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "Right facing boss, far with R2",
                            imageUrl: "./m4s/ee1-partners.webp"
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "Left facing boss, close with MT",
                            imageUrl: "./m4s/ee1-partners.webp"
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "Right facing boss, close with OT",
                            imageUrl: "./m4s/ee1-partners.webp"
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "Left facing boss, far with H1",
                            imageUrl: "./m4s/ee1-partners.webp"
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "Right facing boss, far with H2",
                            imageUrl: "./m4s/ee1-partners.webp"
                        }
                    ]
                }
            ]
        },
        {
            phaseName: "Electrope Edge 2",
            tag: "p1",
            mechs: [
                {
                    mechanic: "Debuffs",
                    description: "Count hits (2 or 3), longs add +1\nSupports left, DPS right\nChill north if it's not your turn",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "2 = NW Corner\n3 = SW Corner",
                            imageUrl: "./m4s/ee2-debuffs.webp"
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "2 = NW Corner\n3 = SW Corner",
                            imageUrl: "./m4s/ee2-debuffs.webp"
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "2 = NW Corner\n3 = SW Corner",
                            imageUrl: "./m4s/ee2-debuffs.webp"
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "2 = NW Corner\n3 = SW Corner",
                            imageUrl: "./m4s/ee2-debuffs.webp"
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "2 = NE Corner\n3 = SE Corner",
                            imageUrl: "./m4s/ee2-debuffs.webp"
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "2 = NE Corner\n3 = SE Corner",
                            imageUrl: "./m4s/ee2-debuffs.webp"
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "2 = NE Corner\n3 = SE Corner",
                            imageUrl: "./m4s/ee2-debuffs.webp"
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "2 = NE Corner\n3 = SE Corner",
                            imageUrl: "./m4s/ee2-debuffs.webp"
                        }
                    ],
                    notes: "Go back to your normal clocks to take line AOEs"
                },
                {
                    mechanic: "Spread",
                    description: "Half room cleave \n8 orbs = spread, 4 orbs = partners",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "Left max melee facing unsafe half",
                            imageUrl: "./m4s/ee2-spread.webp"
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "Right max melee facing unsafe half",
                            imageUrl: "./m4s/ee2-spread.webp"
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "Bottom left far facing unsafe half",
                            imageUrl: "./m4s/ee2-spread.webp"
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "Bottom right far facing unsafe half",
                            imageUrl: "./m4s/ee2-spread.webp"
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "Under boss",
                            imageUrl: "./m4s/ee2-spread.webp"
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "Max melee center",
                            imageUrl: "./m4s/ee2-spread.webp"
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "Left far facing unsafe half",
                            imageUrl: "./m4s/ee2-spread.webp"
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "Right far facing unsafe half",
                            imageUrl: "./m4s/ee2-spread.webp"
                        }
                    ]
                },
                {
                    mechanic: "Partners",
                    description: "Half room cleave \n8 orbs = spread, 4 orbs = partners\nSupports N/S, DPS under/side",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "2s South, 3s North max melee",
                            imageUrl: "./m4s/ee2-partners.webp"
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "2s South, 3s North max melee",
                            imageUrl: "./m4s/ee2-partners.webp"
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "2s South, 3s North max melee",
                            imageUrl: "./m4s/ee2-partners.webp"
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "2s South, 3s North max melee",
                            imageUrl: "./m4s/ee2-partners.webp"
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "2s under, 3s side max melee",
                            imageUrl: "./m4s/ee2-partners.webp"
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "2s under, 3s side max melee",
                            imageUrl: "./m4s/ee2-partners.webp"
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "2s under, 3s side max melee",
                            imageUrl: "./m4s/ee2-partners.webp"
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "2s under, 3s side max melee",
                            imageUrl: "./m4s/ee2-partners.webp"
                        }
                    ],
                    notes: "Each pair must have one short and one long"
                }
            ],
            description: "Short debuffs (22s), then spread/partners, then long debuffs (42s)"
        },
        {
            phaseName: "Ion Cannons",
            tag: "p1",
            mechs: [
                {
                    mechanic: "Electron Stream",
                    description: "Stand in opposite color of debuff\nTanks must be in front\nRepeats 3x",
                    imageUrl: "./m4s/ion-cannon-stream.webp"
                },
                {
                    mechanic: "Cannon Debuffs",
                    description: "Supports left, DPS right facing boss\nPurple circle = center of tile\nTether = in front of purple\nBlue circles = sides",
                    imageUrl: "./m4s/ion-cannon-debuffs.webp",
                    notes: "Positioning is exact, use the tile graphics"
                }
            ]
        },
        {
            phaseName: "Transition",
            tag: "p1",
            mechs: [
                {
                    mechanic: "Cones + Wild Charge",
                    description: "H+M north, T+R south\nDodge cones at intercards + left between markers\nTake wild charge if you DON'T get hit",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "Southeast, start close w/ R1\n3 or between 3+C",
                            imageUrl: "./m4s/transition.webp"
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "Southwest, start close w/ R2\n4 or between 4+D",
                            imageUrl: "./m4s/transition.webp"
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "Northeast, start far w/ M1\n2 or between 2+B",
                            imageUrl: "./m4s/transition.webp"
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "Northwest, start far w/ M2\n1 or between 1+A",
                            imageUrl: "./m4s/transition.webp"
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "Northeast, start close w/ H1\n2 or between 2+B",
                            imageUrl: "./m4s/transition.webp"
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "Northwest, start close w/ H2\n1 or between 1+A",
                            imageUrl: "./m4s/transition.webp"
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "Southeast, start far w/ MT\n3 or between 3+C",
                            imageUrl: "./m4s/transition.webp"
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "Southwest, start close w/ OT\n4 or between 4+D",
                            imageUrl: "./m4s/transition.webp"
                        }
                    ]
                }
            ]
        },
        {
            phaseName: "Cross Tail Switch",
            tag: "p2",
            description: "9 hits, Tank LB3 recommended\nUse heavy mitigation"
        },
        {
            phaseName: "Exaflares",
            tag: "p2",
            mechs: [
                {
                    mechanic: "LP Stacks",
                    description: "G1 West, G2 East\nFind row with two flares going away\nHealers have stack markers",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "G1 West edge",
                            imageUrl: "./m4s/exaflares.webp"
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "G2 East edge",
                            imageUrl: "./m4s/exaflares.webp"
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "G1 West edge",
                            imageUrl: "./m4s/exaflares.webp"
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "G2 East edge",
                            imageUrl: "./m4s/exaflares.webp"
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "G1 West edge",
                            imageUrl: "./m4s/exaflares.webp"
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "G2 East edge",
                            imageUrl: "./m4s/exaflares.webp"
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "G1 West edge",
                            imageUrl: "./m4s/exaflares.webp"
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "G2 East edge",
                            imageUrl: "./m4s/exaflares.webp"
                        }
                    ]
                }
            ]
        },
        {
            phaseName: "Wicked Special",
            tag: "p2",
            description: "Flame sword = center unsafe\nLightning lasers = sides unsafe"
        },
        {
            phaseName: "Mustard Bomb",
            tag: "p2",
            mechs: [
                {
                    mechanic: "Spread + Rot",
                    description: "MTTM row 1, RHHR row 2\nTanks pass to leftmost/rightmost safe player",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "Front row, close left\nPass tether to leftmost safe",
                            imageUrl: "./m4s/mustard-bomb.webp"
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "Front row, close right\nPass tether to leftmost safe",
                            imageUrl: "./m4s/mustard-bomb.webp"
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "Back row, close left",
                            imageUrl: "./m4s/mustard-bomb.webp"
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "Back row, close right",
                            imageUrl: "./m4s/mustard-bomb.webp"
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "Front row, far left",
                            imageUrl: "./m4s/mustard-bomb.webp"
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "Front row, far right",
                            imageUrl: "./m4s/mustard-bomb.webp"
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "Back row, far left",
                            imageUrl: "./m4s/mustard-bomb.webp"
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "Back row, far right",
                            imageUrl: "./m4s/mustard-bomb.webp"
                        }
                    ]
                }
            ],
            description: "Reset center so tanks can pick up tethers"
        },
        {
            phaseName: "Aetherial Conversion",
            tag: "p2",
            description: "Fire = large circle, dodge along north edge\nWater = knockback from red dots"
        },
        {
            phaseName: "Twilight Sabbath",
            tag: "p2",
            description: "Drop puddles center\nWatch rings to dodge into safe quadrant\nMove to 2nd quadrant + Wicked Special (center or sides)",
            imageUrl: "./m4s/twilight.webp"
        },
        {
            phaseName: "Midnight Sabbath",
            tag: "p2",
            mechs: [
                {
                    mechanic: "Clone Cannon/Wings",
                    description: "Pairs at intercards (MT/HR)\nRotate CCW if needed\nSupports left DPS right facing center for spreads",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "NW or W with M1\nLeft facing center if spread",
                            imageUrl: "./m4s/midnight.webp"
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "NE or N with M2\nLeft facing center if spread",
                            imageUrl: "./m4s/midnight.webp"
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "SW or S with R1\nLeft facing center if spread",
                            imageUrl: "./m4s/midnight.webp"
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "SE or E with R2\nLeft facing center if spread",
                            imageUrl: "./m4s/midnight.webp"
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "NW or W with MT\nRight facing center if spread",
                            imageUrl: "./m4s/midnight.webp"
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "NE or N with OT\nRight facing center if spread",
                            imageUrl: "./m4s/midnight.webp"
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "SW or S with R1\nRight facing center if spread",
                            imageUrl: "./m4s/midnight.webp"
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "SE or E with R2\nRight facing center if spread",
                            imageUrl: "./m4s/midnight.webp"
                        }
                    ]
                }
            ],
            description: "Cannon = move away, Wings = move under\nBurst = stack, Scattered = spread"
        },
        {
            phaseName: "Chain Lightning",
            tag: "p2",
            mechs: [
                {
                    mechanic: "Towers + Swords",
                    description: "G1 West, G2 East\nSoak towers TMHR north to south\nNote sword safe order, move to each safe sword",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "G1 West\nSoak 1st tower (North)",
                            imageUrl: "./m4s/chain-lightning.webp",
                            mask: getCircleMaskUrl(26, 28.5, 5)
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "G2 East\nSoak 1st tower (North)",
                            imageUrl: "./m4s/chain-lightning.webp",
                            mask: getCircleMaskUrl(72, 28.2, 5)
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "G1 West\nSoak 4th tower (South)",
                            imageUrl: "./m4s/chain-lightning.webp",
                            mask: getCircleMaskUrl(26, 69.4, 5)
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "G2 East\nSoak 4th tower (South)",
                            imageUrl: "./m4s/chain-lightning.webp",
                            mask: getCircleMaskUrl(72.1, 69.3, 5)
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "G1 West\nSoak 2nd tower",
                            imageUrl: "./m4s/chain-lightning.webp",
                            mask: getCircleMaskUrl(25.7, 49.3, 5)
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "G2 East\nSoak 2nd tower",
                            imageUrl: "./m4s/chain-lightning.webp",
                            mask: getCircleMaskUrl(72, 49.3, 5)
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "G1 West\nSoak 3rd tower",
                            imageUrl: "./m4s/chain-lightning.webp",
                            mask: getCircleMaskUrl(26, 89.7, 5)
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "G2 East\nSoak 3rd tower",
                            imageUrl: "./m4s/chain-lightning.webp",
                            mask: getCircleMaskUrl(72.3, 89.5, 5)
                        }
                    ]
                }
            ]
        },
        {
            phaseName: "Sunrise Sabbath",
            tag: "sunrise",
            mechs: [
                {
                    mechanic: "Cannon Baits",
                    description: getStringObject(sunriseStrats, 'cannonbaits', 'description'),
                    strats: getStratArray(sunriseStrats, 'cannonbaits'),
                    notes: getStringObject(sunriseStrats, 'cannonbaits', 'notes')
                },
                {
                    mechanic: "Towers",
                    description: getStringObject(sunriseStrats, 'towers', 'description'),
                    strats: getStratArray(sunriseStrats, 'towers')
                }
            ],
            description: {
                autocad: "Birds point at where towers spawn\nShort = cannon first, tower second\nLong = tower first, cannon second\nBait opposite color cannon",
                normal: "Birds point at where towers spawn\nShort = cannon first, tower second\nLong = tower first, cannon second\nBait opposite color cannon"
            }
        },
        {
            phaseName: "Sword Quiver (Enrage)",
            tag: "p2",
            mechs: [
                {
                    mechanic: "Partner Stacks",
                    description: "Melee pairs north, Ranged pairs south\nFirst 3 lines are constant, watch 4th line for safespot",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "North, stack with M1",
                            imageUrl: "./m4s/sword-quiver.webp"
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "North, stack with M2",
                            imageUrl: "./m4s/sword-quiver.webp"
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "South, stack with R1",
                            imageUrl: "./m4s/sword-quiver.webp"
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "South, stack with R2",
                            imageUrl: "./m4s/sword-quiver.webp"
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "North, stack with MT",
                            imageUrl: "./m4s/sword-quiver.webp"
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "North, stack with OT",
                            imageUrl: "./m4s/sword-quiver.webp"
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "South, stack with H1",
                            imageUrl: "./m4s/sword-quiver.webp"
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "South, stack with H2",
                            imageUrl: "./m4s/sword-quiver.webp"
                        }
                    ]
                }
            ]
        }
    ]
};

// All strats as an array
export const m4sStrats: Strat[] = [shabin];
