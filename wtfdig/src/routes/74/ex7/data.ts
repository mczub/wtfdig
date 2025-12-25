import type { Strat, FightConfig, StratRecord, PlayerMechStrat, MechanicStrat } from '$lib/types';
import { getStringObject, getStratArray, getCircleMaskUrl, getMultiCircleMaskUrl, getRectMaskUrl } from '$lib/utils';

const altRunaway: StratRecord = {
    ghosttraintb: {
        MT: {
            role: "Tank",
            party: 1,
            description: "Take TB Left towards Ghost Train",
            imageUrl: "./ex7/p3-ghost-train.webp"
        },
        OT: {
            role: "Tank",
            party: 2,
            description: "Take TB Right towards Ghost Train",
            imageUrl: "./ex7/p3-ghost-train.webp"
        },
        H1: {
            role: "Healer",
            party: 1,
            description: "Center, avoid tankbusters",
            imageUrl: "./ex7/p3-ghost-train.webp"
        },
        H2: {
            role: "Healer",
            party: 2,
            description: "Center, avoid tankbusters",
            imageUrl: "./ex7/p3-ghost-train.webp"
        },
        M1: {
            role: "Melee",
            party: 1,
            description: "Center, avoid tankbusters",
            imageUrl: "./ex7/p3-ghost-train.webp"
        },
        M2: {
            role: "Melee",
            party: 2,
            description: "Center, avoid tankbusters",
            imageUrl: "./ex7/p3-ghost-train.webp"
        },
        R1: {
            role: "Ranged",
            party: 1,
            description: "Center, avoid tankbusters",
            imageUrl: "./ex7/p3-ghost-train.webp"
        },
        R2: {
            role: "Ranged",
            party: 2,
            description: "Center, avoid tankbusters",
            imageUrl: "./ex7/p3-ghost-train.webp"
        }
    },
    stacks: {
        MT: {
            role: "Tank",
            party: 1,
            description: "TB Left towards Ghost Train",
            imageUrl: "./ex7/p3-stacks.webp"
        },
        OT: {
            role: "Tank",
            party: 2,
            description: "TB Right towards Ghost Train",
            imageUrl: "./ex7/p3-stacks.webp"
        },
        H1: {
            role: "Healer",
            party: 1,
            description: "Center towards Ghost Train",
            imageUrl: "./ex7/p3-stacks.webp"
        },
        H2: {
            role: "Healer",
            party: 2,
            description: "Center away from Ghost Train",
            imageUrl: "./ex7/p3-stacks.webp"
        },
        M1: {
            role: "Melee",
            party: 1,
            description: "Center towards Ghost Train",
            imageUrl: "./ex7/p3-stacks.webp"
        },
        M2: {
            role: "Melee",
            party: 2,
            description: "Center away from Ghost Train",
            imageUrl: "./ex7/p3-stacks.webp"
        },
        R1: {
            role: "Ranged",
            party: 1,
            description: "Center towards Ghost Train",
            imageUrl: "./ex7/p3-stacks.webp"
        },
        R2: {
            role: "Ranged",
            party: 2,
            description: "Center away from Ghost Train",
            imageUrl: "./ex7/p3-stacks.webp"
        },
        description: "G1 towards Ghost Train\nG2 away from Ghost Train"
    },
    spreads: {
        MT: {
            role: "Tank",
            party: 1,
            description: "TB Left towards Ghost Train",
            imageUrl: "./ex7/p3-spread.webp"
        },
        OT: {
            role: "Tank",
            party: 2,
            description: "TB Right towards Ghost Train",
            imageUrl: "./ex7/p3-spread.webp"
        },
        H1: {
            role: "Healer",
            party: 1,
            description: "Center close to Ghost Train",
            imageUrl: "./ex7/p3-spread.webp"
        },
        H2: {
            role: "Healer",
            party: 2,
            description: "Center far from Ghost Train",
            imageUrl: "./ex7/p3-spread.webp"
        },
        M1: {
            role: "Melee",
            party: 1,
            description: "Center slightly towards Ghost Train",
            imageUrl: "./ex7/p3-spread.webp"
        },
        M2: {
            role: "Melee",
            party: 2,
            description: "Center slightly away from Ghost Train",
            imageUrl: "./ex7/p3-spread.webp"
        },
        R1: {
            role: "Ranged",
            party: 1,
            description: "Back Left facing Ghost Train",
            imageUrl: "./ex7/p3-spread.webp"
        },
        R2: {
            role: "Ranged",
            party: 2,
            description: "Back Right facing Ghost Train",
            imageUrl: "./ex7/p3-spread.webp"
        }
    }
};

const raidplanRunaway: StratRecord = {
    ghosttraintb: {
        MT: {
            role: "Tank",
            party: 1,
            description: "Take TB Left towards Ghost Train",
            imageUrl: "./ex7/p3-ghost-train.webp"
        },
        OT: {
            role: "Tank",
            party: 2,
            description: "Take TB Right towards Ghost Train",
            imageUrl: "./ex7/p3-ghost-train.webp"
        },
        H1: {
            role: "Healer",
            party: 1,
            description: "Center, avoid tankbusters",
            imageUrl: "./ex7/p3-ghost-train.webp"
        },
        H2: {
            role: "Healer",
            party: 2,
            description: "Center, avoid tankbusters",
            imageUrl: "./ex7/p3-ghost-train.webp"
        },
        M1: {
            role: "Melee",
            party: 1,
            description: "Center, avoid tankbusters",
            imageUrl: "./ex7/p3-ghost-train.webp"
        },
        M2: {
            role: "Melee",
            party: 2,
            description: "Center, avoid tankbusters",
            imageUrl: "./ex7/p3-ghost-train.webp"
        },
        R1: {
            role: "Ranged",
            party: 1,
            description: "Center, avoid tankbusters",
            imageUrl: "./ex7/p3-ghost-train.webp"
        },
        R2: {
            role: "Ranged",
            party: 2,
            description: "Center, avoid tankbusters",
            imageUrl: "./ex7/p3-ghost-train.webp"
        }
    },
    stacks: {
        MT: {
            role: "Tank",
            party: 1,
            description: "TB Left towards Ghost Train",
            imageUrl: "./ex7/p3-stacks.webp"
        },
        OT: {
            role: "Tank",
            party: 2,
            description: "TB Right towards Ghost Train",
            imageUrl: "./ex7/p3-stacks.webp"
        },
        H1: {
            role: "Healer",
            party: 1,
            description: "Center towards Ghost Train",
            imageUrl: "./ex7/p3-stacks.webp"
        },
        H2: {
            role: "Healer",
            party: 2,
            description: "Center away from Ghost Train",
            imageUrl: "./ex7/p3-stacks.webp"
        },
        M1: {
            role: "Melee",
            party: 1,
            description: "Center towards Ghost Train",
            imageUrl: "./ex7/p3-stacks.webp"
        },
        M2: {
            role: "Melee",
            party: 2,
            description: "Center away from Ghost Train",
            imageUrl: "./ex7/p3-stacks.webp"
        },
        R1: {
            role: "Ranged",
            party: 1,
            description: "Center towards Ghost Train",
            imageUrl: "./ex7/p3-stacks.webp"
        },
        R2: {
            role: "Ranged",
            party: 2,
            description: "Center away from Ghost Train",
            imageUrl: "./ex7/p3-stacks.webp"
        },
        description: "G1 towards Ghost Train\nG2 away from Ghost Train"
    },
    spreads: {
        MT: {
            role: "Tank",
            party: 1,
            description: "TB Left towards Ghost Train",
            imageUrl: "./ex7/p3-raidplan-spread.webp"
        },
        OT: {
            role: "Tank",
            party: 2,
            description: "TB Right towards Ghost Train",
            imageUrl: "./ex7/p3-raidplan-spread.webp"
        },
        H1: {
            role: "Healer",
            party: 1,
            description: "Center close to Ghost Train",
            imageUrl: "./ex7/p3-raidplan-spread.webp"
        },
        H2: {
            role: "Healer",
            party: 2,
            description: "Back Left facing Ghost Train",
            imageUrl: "./ex7/p3-raidplan-spread.webp"
        },
        M1: {
            role: "Melee",
            party: 1,
            description: "Max Melee Left of Orb",
            imageUrl: "./ex7/p3-raidplan-spread.webp"
        },
        M2: {
            role: "Melee",
            party: 2,
            description: "Max Melee Right of Orb",
            imageUrl: "./ex7/p3-raidplan-spread.webp"
        },
        R1: {
            role: "Ranged",
            party: 1,
            description: "Center slightly towards Ghost Train",
            imageUrl: "./ex7/p3-raidplan-spread.webp"
        },
        R2: {
            role: "Ranged",
            party: 2,
            description: "Back Right facing Ghost Train",
            imageUrl: "./ex7/p3-raidplan-spread.webp"
        }
    }
};

const staticRunaway: StratRecord = {
    ghosttraintb: {
        MT: {
            role: "Tank",
            party: 1,
            description: "Take TB Left towards Ghost Train",
            imageUrl: "./ex7/p3-ghost-train.webp"
        },
        OT: {
            role: "Tank",
            party: 2,
            description: "Take TB Right towards Ghost Train",
            imageUrl: "./ex7/p3-ghost-train.webp"
        },
        H1: {
            role: "Healer",
            party: 1,
            description: "Center, avoid tankbusters",
            imageUrl: "./ex7/p3-ghost-train.webp"
        },
        H2: {
            role: "Healer",
            party: 2,
            description: "Center, avoid tankbusters",
            imageUrl: "./ex7/p3-ghost-train.webp"
        },
        M1: {
            role: "Melee",
            party: 1,
            description: "Center, avoid tankbusters",
            imageUrl: "./ex7/p3-ghost-train.webp"
        },
        M2: {
            role: "Melee",
            party: 2,
            description: "Center, avoid tankbusters",
            imageUrl: "./ex7/p3-ghost-train.webp"
        },
        R1: {
            role: "Ranged",
            party: 1,
            description: "Center, avoid tankbusters",
            imageUrl: "./ex7/p3-ghost-train.webp"
        },
        R2: {
            role: "Ranged",
            party: 2,
            description: "Center, avoid tankbusters",
            imageUrl: "./ex7/p3-ghost-train.webp"
        }
    },
    stacks: {
        MT: {
            role: "Tank",
            party: 1,
            description: "TB Left towards Ghost Train",
            imageUrl: "./ex7/p3-static-stacks.webp"
        },
        OT: {
            role: "Tank",
            party: 2,
            description: "TB Right towards Ghost Train",
            imageUrl: "./ex7/p3-static-stacks.webp"
        },
        H1: {
            role: "Healer",
            party: 1,
            description: "❗STATIC North Max Melee",
            imageUrl: "./ex7/p3-static-stacks.webp"
        },
        H2: {
            role: "Healer",
            party: 2,
            description: "❗STATIC South Max Melee",
            imageUrl: "./ex7/p3-static-stacks.webp"
        },
        M1: {
            role: "Melee",
            party: 1,
            description: "❗STATIC North Max Melee",
            imageUrl: "./ex7/p3-static-stacks.webp"
        },
        M2: {
            role: "Melee",
            party: 2,
            description: "❗STATIC South Max Melee",
            imageUrl: "./ex7/p3-static-stacks.webp"
        },
        R1: {
            role: "Ranged",
            party: 1,
            description: "❗STATIC North Max Melee",
            imageUrl: "./ex7/p3-static-stacks.webp"
        },
        R2: {
            role: "Ranged",
            party: 2,
            description: "❗STATIC South Max Melee",
            imageUrl: "./ex7/p3-static-stacks.webp"
        },
        description: "Static stacks, G1 North G2 South"
    },
    spreads: {
        MT: {
            role: "Tank",
            party: 1,
            description: "TB Left towards Ghost Train",
            imageUrl: "./ex7/p3-static-spread.webp"
        },
        OT: {
            role: "Tank",
            party: 2,
            description: "TB Right towards Ghost Train",
            imageUrl: "./ex7/p3-static-spread.webp"
        },
        H1: {
            role: "Healer",
            party: 1,
            description: "❗STATIC North Max Melee",
            imageUrl: "./ex7/p3-static-spread.webp"
        },
        H2: {
            role: "Healer",
            party: 2,
            description: "❗STATIC South Max Melee",
            imageUrl: "./ex7/p3-static-spread.webp"
        },
        M1: {
            role: "Melee",
            party: 1,
            description: "❗STATIC West Max Melee",
            imageUrl: "./ex7/p3-static-spread.webp"
        },
        M2: {
            role: "Melee",
            party: 2,
            description: "❗STATIC East Max Melee",
            imageUrl: "./ex7/p3-static-spread.webp"
        },
        R1: {
            role: "Ranged",
            party: 1,
            description: "Front close to Ghost Train",
            imageUrl: "./ex7/p3-static-spread.webp"
        },
        R2: {
            role: "Ranged",
            party: 2,
            description: "Back far from Ghost Train",
            imageUrl: "./ex7/p3-static-spread.webp"
        },
        description: "Healers and Melee are static, ignore train direction\nRanged and Tanks will rotate"
    }
};

const runawayStrats: Record<string, StratRecord> = { alt: altRunaway, raidplan: raidplanRunaway, static: staticRunaway };

const normalArcane: MechanicStrat[] = [
    {
        mechanic: "Diamond",
        description: "Big AOE moves in diamond pattern\nCan move 2, 3, or 4 spots\nWatch hands or listen for timing",
        notes: "Stacks are REALLY BIG",
        imageUrl: "./ex7/arcane-start.webp"
    },
    {
        mechanic: "East/West",
        description: "Tank/Melee North/East-ish\nHealer/Ranged South/West-ish",
        strats: [
            {
                role: "Tank",
                party: 1,
                description: "North/East-ish",
                imageUrl: "./ex7/arcane-stacks-ew.webp",
                mask: getMultiCircleMaskUrl([35.2, 14.5, 5], [62.9, 15.8, 5])
            },
            {
                role: "Tank",
                party: 2,
                description: "North/East-ish",
                imageUrl: "./ex7/arcane-stacks-ew.webp",
                mask: getMultiCircleMaskUrl([35.2, 14.5, 5], [62.9, 15.8, 5])
            },
            {
                role: "Healer",
                party: 1,
                description: "South/West-ish",
                imageUrl: "./ex7/arcane-stacks-ew.webp",
                mask: getMultiCircleMaskUrl([35.4, 83.5, 5], [61.1, 87.3, 5])
            },
            {
                role: "Healer",
                party: 2,
                description: "South/West-ish",
                imageUrl: "./ex7/arcane-stacks-ew.webp",
                mask: getMultiCircleMaskUrl([35.4, 83.5, 5], [61.1, 87.3, 5])
            },
            {
                role: "Melee",
                party: 1,
                description: "North/East-ish",
                imageUrl: "./ex7/arcane-stacks-ew.webp",
                mask: getMultiCircleMaskUrl([35.2, 14.5, 5], [62.9, 15.8, 5])
            },
            {
                role: "Melee",
                party: 2,
                description: "North/East-ish",
                imageUrl: "./ex7/arcane-stacks-ew.webp",
                mask: getMultiCircleMaskUrl([35.2, 14.5, 5], [62.9, 15.8, 5])
            },
            {
                role: "Ranged",
                party: 1,
                description: "South/West-ish",
                imageUrl: "./ex7/arcane-stacks-ew.webp",
                mask: getMultiCircleMaskUrl([35.4, 83.5, 5], [61.1, 87.3, 5])
            },
            {
                role: "Ranged",
                party: 2,
                description: "South/West-ish",
                imageUrl: "./ex7/arcane-stacks-ew.webp",
                mask: getMultiCircleMaskUrl([35.4, 83.5, 5], [61.1, 87.3, 5])
            }
        ],
        notes: "Everyone in the stack must be on the same level (low or high)"
    },
    {
        mechanic: "North/South",
        description: "Tank/Melee North/East-ish\nHealer/Ranged South/West-ish",
        strats: [
            {
                role: "Tank",
                party: 1,
                description: "North/East-ish",
                imageUrl: "./ex7/arcane-stacks-ns.webp",
                mask: getMultiCircleMaskUrl([38.2, 63.6, 5], [88.3, 15.1, 5])
            },
            {
                role: "Tank",
                party: 2,
                description: "North/East-ish",
                imageUrl: "./ex7/arcane-stacks-ns.webp",
                mask: getMultiCircleMaskUrl([38.2, 63.6, 5], [88.3, 15.1, 5])
            },
            {
                role: "Healer",
                party: 1,
                description: "South/West-ish",
                imageUrl: "./ex7/arcane-stacks-ns.webp",
                mask: getMultiCircleMaskUrl([8.7, 85.8, 5], [61.5, 20.6, 5])
            },
            {
                role: "Healer",
                party: 2,
                description: "South/West-ish",
                imageUrl: "./ex7/arcane-stacks-ns.webp",
                mask: getMultiCircleMaskUrl([8.7, 85.8, 5], [61.5, 20.6, 5])
            },
            {
                role: "Melee",
                party: 1,
                description: "North/East-ish",
                imageUrl: "./ex7/arcane-stacks-ns.webp",
                mask: getMultiCircleMaskUrl([38.2, 63.6, 5], [88.3, 15.1, 5])
            },
            {
                role: "Melee",
                party: 2,
                description: "North/East-ish",
                imageUrl: "./ex7/arcane-stacks-ns.webp",
                mask: getMultiCircleMaskUrl([38.2, 63.6, 5], [88.3, 15.1, 5])
            },
            {
                role: "Ranged",
                party: 1,
                description: "South/West-ish",
                imageUrl: "./ex7/arcane-stacks-ns.webp",
                mask: getMultiCircleMaskUrl([8.7, 85.8, 5], [61.5, 20.6, 5])
            },
            {
                role: "Ranged",
                party: 2,
                description: "South/West-ish",
                imageUrl: "./ex7/arcane-stacks-ns.webp",
                mask: getMultiCircleMaskUrl([8.7, 85.8, 5], [61.5, 20.6, 5])
            }
        ],
        notes: "Everyone in the stack must be on the same level (low or high)"
    }
];

const cheeseArcane: MechanicStrat[] = [
    {
        mechanic: "2/6 Cheese",
        description: "Completely ignore the big moving AOE\nTanks go NE, everyone else NW",
        imageUrl: "./ex7/arcane-cheese.webp"
    },
    {
        mechanic: "Mitigation",
        description: "Stack 1: Group 1 mits\nStack 2: Group 2 mits\nStack 3: Tank LB",
        notes: "Tanks invulning 2nd and 3rd towers is strongly recommended"
    },
];

const arcaneStrats: Record<string, MechanicStrat[]> = { normal: normalArcane, cheese: cheeseArcane };

export const ex7FightConfig: FightConfig = {
    fightKey: "ex7",
    title: "Hell on Rails (Extreme)",
    abbreviatedTitle: "EX7",
    subtitle: "EX7 Patch 7.4",
    cheatsheetTitle: "EX7 Cheatsheet",
    cheatsheetLayout: {
        rows: 3,
        columns: 6
    },
    strats: {
        hector: {
            label: "Hector",
            defaults: {
                runaway: "alt",
                arcane: "normal"
            },
            badges: [
                {
                    text: "NA",
                    class: "bg-blue-600 text-white"
                }
            ]
        }
    },
    toggles: [
        {
            key: "runaway",
            label: "Intermission",
            defaultValue: "alt",
            options: [
                {
                    value: "alt",
                    label: "Alt/Hector (Slide 30)",
                    badges: [
                        {
                            text: "NA",
                            class: "bg-blue-600 text-white"
                        }
                    ],
                    url: {
                        name: "Hector",
                        url: "https://www.youtube.com/watch?v=fGGI8MM-wKM"
                    }
                },
                {
                    value: "raidplan",
                    label: "Slide 6",
                    url: {
                        name: "Raidplan by Kroxy Cat (pg. 6)",
                        url: "https://raidplan.io/plan/5yf4k7f25gcptpc7"
                    }
                },
                {
                    value: "static",
                    label: "Static",
                    url: {
                        name: "Raidplan by Aetherbound",
                        url: "https://raidplan.io/plan/ufh89gdss7gkkttq"
                    }
                }
            ]
        },
        {
            key: "arcane",
            label: "Arcane",
            defaultValue: "normal",
            options: [
                {
                    value: "normal",
                    label: "Normal"
                },
                {
                    value: "cheese",
                    label: "Cheese"
                }
            ]
        }
    ],
    tabTags: {
        "Pre-Intermission": [
            "setup",
            "p1",
            "p2",
            "runaway",
            "pre"
        ],
        "Post-Intermission": [
            "p4",
            "arcane",
            "p5",
            "p6",
            "post"
        ]
    },
    useMainPageTabs: false,
    defaultStratName: "hector",
    timeline: [
        {
            mechName: "Start",
            mechType: "Start",
            mechTag: "pre",
            startTimeMs: 0
        },
        {
            mechName: "Store Stack/Spread",
            mechType: "StoredMechanic",
            mechTag: "pre",
            startTimeMs: 9000
        },
        {
            mechName: "Express (KB)",
            mechType: "Mechanic",
            mechTag: "pre",
            startTimeMs: 15000
        },
        {
            mechName: "Stack/Spread",
            mechType: "Mechanic",
            mechTag: "pre",
            startTimeMs: 27000
        },
        {
            mechName: "Store Stack/Spread",
            mechType: "StoredMechanic",
            mechTag: "pre",
            startTimeMs: 28000
        },
        {
            mechName: "Windpipe (Suck)",
            mechType: "Mechanic",
            mechTag: "pre",
            startTimeMs: 34000
        },
        {
            mechName: "Stack/Spread",
            mechType: "Mechanic",
            mechTag: "pre",
            startTimeMs: 46000
        },
        {
            mechName: "Raidwide -> Car 2",
            mechType: "Raidwide",
            mechTag: "pre",
            startTimeMs: 53000
        },
        {
            mechName: "Store Stack/Spread",
            mechType: "StoredMechanic",
            mechTag: "pre",
            startTimeMs: 61000
        },
        {
            mechName: "Turret Lasers",
            mechType: "Mechanic",
            mechTag: "pre",
            startTimeMs: 78000
        },
        {
            mechName: "Express/Windpipe",
            mechType: "Mechanic",
            mechTag: "pre",
            startTimeMs: 75000
        },
        {
            mechName: "Stack/Spread",
            mechType: "Mechanic",
            mechTag: "pre",
            startTimeMs: 86000
        },
        {
            mechName: "Store Stack/Spread",
            mechType: "StoredMechanic",
            mechTag: "pre",
            startTimeMs: 88000
        },
        {
            mechName: "Turret Lasers",
            mechType: "Mechanic",
            mechTag: "pre",
            startTimeMs: 95000
        },
        {
            mechName: "Lightning Burst",
            mechType: "Tankbuster",
            mechTag: "pre",
            startTimeMs: 99000
        },
        {
            mechName: "Turret Lasers",
            mechType: "Mechanic",
            mechTag: "pre",
            startTimeMs: 105000
        },
        {
            mechName: "Express/Windpipe",
            mechType: "Mechanic",
            mechTag: "pre",
            startTimeMs: 108000
        },
        {
            mechName: "Stack/Spread",
            mechType: "Mechanic",
            mechTag: "pre",
            startTimeMs: 114000
        },
        {
            mechName: "Raidwide -> Car 3",
            mechType: "Raidwide",
            mechTag: "pre",
            startTimeMs: 122000
        },
        {
            mechName: "Lightning Burst",
            mechType: "Tankbuster",
            mechTag: "pre",
            startTimeMs: 137000
        },
        {
            mechName: "Runaway Train",
            mechType: "Raidwide",
            mechTag: "pre",
            startTimeMs: 150000
        },
        {
            mechName: "Aether Targetable",
            mechType: "Mechanic",
            mechTag: "pre",
            startTimeMs: 161000
        },
        {
            mechName: "Train AoEs 1",
            mechType: "Mechanic",
            mechTag: "pre",
            startTimeMs: 177000
        },
        {
            mechName: "Train AoEs 2",
            mechType: "Mechanic",
            mechTag: "pre",
            startTimeMs: 193000
        },
        {
            mechName: "Train AoEs 3",
            mechType: "Mechanic",
            mechTag: "pre",
            startTimeMs: 205000
        },
        {
            mechName: "Train AoEs 4",
            mechType: "Mechanic",
            mechTag: "pre",
            startTimeMs: 219000
        },
        {
            mechName: "Train AoEs 5",
            mechType: "Mechanic",
            mechTag: "pre",
            startTimeMs: 233000
        },
        {
            mechName: "Enrage??",
            mechType: "Enrage",
            mechTag: "pre",
            startTimeMs: 240000
        },
        {
            mechName: "Runaway Train",
            mechType: "Start",
            mechTag: "post",
            startTimeMs: 0
        },
        {
            mechName: "Targetable",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 11000
        },
        {
            mechName: "Shockwave",
            mechType: "Raidwide",
            mechTag: "post",
            startTimeMs: 18000
        },
        {
            mechName: "Lightning Burst",
            mechType: "Tankbuster",
            mechTag: "post",
            startTimeMs: 28000
        },
        {
            mechName: "Tower x3",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 30000
        },
        {
            mechName: "Derail -> Car 4",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 40000
        },
        {
            mechName: "Twisters Snap",
            mechType: "StoredMechanic",
            mechTag: "post",
            startTimeMs: 56000
        },
        {
            mechName: "Twisters Hit",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 60000
        },
        {
            mechName: "High/Low",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 69000
        },
        {
            mechName: "Arcane Revelation",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 78000
        },
        {
            mechName: "Arcane 1",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 90000
        },
        {
            mechName: "Arcane 2",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 104000
        },
        {
            mechName: "Arcane 3",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 118000
        },
        {
            mechName: "High/Low",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 130000
        },
        {
            mechName: "Twisters Snap",
            mechType: "StoredMechanic",
            mechTag: "post",
            startTimeMs: 136000
        },
        {
            mechName: "Twisters Hit",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 140000
        },
        {
            mechName: "Lightning Burst",
            mechType: "Tankbuster",
            mechTag: "post",
            startTimeMs: 148000
        },
        {
            mechName: "Tower x4",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 152000
        },
        {
            mechName: "Derail -> Car 5",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 164000
        },
        {
            mechName: "2x AOEs",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 187000
        },
        {
            mechName: "Twisters Snap",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 188000
        },
        {
            mechName: "Twisters Hit",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 192000
        },
        {
            mechName: "3x AOEs",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 202000
        },
        {
            mechName: "Lightning Burst",
            mechType: "Tankbuster",
            mechTag: "post",
            startTimeMs: 208000
        },
        {
            mechName: "5x AOEs",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 219000
        },
        {
            mechName: "Twisters Snap",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 220000
        },
        {
            mechName: "Twisters HF",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 224000
        },
        {
            mechName: "Tower x5",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 229000
        },
        {
            mechName: "Derail -> Car 6",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 231000
        },
        {
            mechName: "Store Stack/Spread",
            mechType: "StoredMechanic",
            mechTag: "post",
            startTimeMs: 257000
        },
        {
            mechName: "Turret Lasers",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 275000
        },
        {
            mechName: "High/Low",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 278000
        },
        {
            mechName: "Turret Lasers",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 286000
        },
        {
            mechName: "4x AOEs",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 295000
        },
        {
            mechName: "Twisters Snap",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 296000
        },
        {
            mechName: "Twisters Hit",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 300000
        },
        {
            mechName: "Turret Lasers",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 308000
        },
        {
            mechName: "Express/Windpipe",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 310000
        },
        {
            mechName: "Stack/Spread",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 315000
        },
        {
            mechName: "Lightning Burst",
            mechType: "Tankbuster",
            mechTag: "post",
            startTimeMs: 322000
        },
        {
            mechName: "Store Stack/Spread",
            mechType: "StoredMechanic",
            mechTag: "post",
            startTimeMs: 326000
        },
        {
            mechName: "Arcane Revelation",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 332000
        },
        {
            mechName: "Arcane 1",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 346000
        },
        {
            mechName: "Arcane 2",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 360000
        },
        {
            mechName: "Twisters Snap",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 362000
        },
        {
            mechName: "Twisters Hit",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 366000
        },
        {
            mechName: "Express/Windpipe",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 376000
        },
        {
            mechName: "Stack/Spread",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 382000
        },
        {
            mechName: "High/Low",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 390000
        },
        {
            mechName: "Lightning Burst",
            mechType: "Tankbuster",
            mechTag: "post",
            startTimeMs: 400000
        },
        {
            mechName: "Twisters Snap",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 403000
        },
        {
            mechName: "Twisters Hit",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 407000
        },
        {
            mechName: "Tower x6",
            mechType: "Mechanic",
            mechTag: "post",
            startTimeMs: 418000
        },
        {
            mechName: "Enrage",
            mechType: "Enrage",
            mechTag: "post",
            startTimeMs: 440000
        }
    ],
    splitTimeline: true,
    useEvenTimelineSpacing: true
};

export const hector: Strat = {
    stratName: "hector",
    description: "Source: Hector Hectorson",
    stratUrl: {
        "Video by Hector Hectorson": "https://www.youtube.com/watch?v=fGGI8MM-wKM",
        "Raidplan by Kroxy Cat": "https://raidplan.io/plan/5yf4k7f25gcptpc7"
    },
    strats: [
        {
            phaseName: "Setup",
            tag: "setup",
            mechs: [
                {
                    mechanic: "Spreads",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "Northwest corner",
                            imageUrl: "./ex7/spreads.webp",
                            mask: getCircleMaskUrl(36.7, 24.4, 5)
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "Northeast corner",
                            imageUrl: "./ex7/spreads.webp",
                            mask: getCircleMaskUrl(64.1, 24, 5)
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "Southwest corner",
                            imageUrl: "./ex7/spreads.webp",
                            mask: getCircleMaskUrl(36.5, 97.5, 5)
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "Southeast corner",
                            imageUrl: "./ex7/spreads.webp",
                            mask: getCircleMaskUrl(64, 97.6, 5)
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "Middle northwest",
                            imageUrl: "./ex7/spreads.webp",
                            mask: getCircleMaskUrl(44.1, 42.4, 5)
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "Middle northeast",
                            imageUrl: "./ex7/spreads.webp",
                            mask: getCircleMaskUrl(55.7, 42.6, 5)
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "South center",
                            imageUrl: "./ex7/spreads.webp",
                            mask: getCircleMaskUrl(48.9, 97.6, 5)
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "Middle south-ish",
                            imageUrl: "./ex7/spreads.webp",
                            mask: getCircleMaskUrl(53.9, 65.3, 5)
                        }
                    ]
                },
                {
                    mechanic: "Pairs",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "Northwest with M1",
                            imageUrl: "./ex7/pairs.webp",
                            mask: getCircleMaskUrl(40.1, 35.4, 5)
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "Northeast with M2",
                            imageUrl: "./ex7/pairs.webp",
                            mask: getCircleMaskUrl(60.3, 35.3, 5)
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "Southwest with R1",
                            imageUrl: "./ex7/pairs.webp",
                            mask: getCircleMaskUrl(38.6, 74.6, 5)
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "Southeast with R2",
                            imageUrl: "./ex7/pairs.webp",
                            mask: getCircleMaskUrl(60.2, 73.2, 5)
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "Northwest with MT",
                            imageUrl: "./ex7/pairs.webp",
                            mask: getCircleMaskUrl(40.1, 35.5, 5)
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "Northeast with OT",
                            imageUrl: "./ex7/pairs.webp",
                            mask: getCircleMaskUrl(60.3, 35.1, 5)
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "Southwest with H1",
                            imageUrl: "./ex7/pairs.webp",
                            mask: getCircleMaskUrl(38.6, 74.5, 5)
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "Southeast H2",
                            imageUrl: "./ex7/pairs.webp",
                            mask: getCircleMaskUrl(60.1, 73, 5)
                        }
                    ]
                },
                {
                    mechanic: "Big Spreads",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "Northwest",
                            imageUrl: "./ex7/big-spreads.webp",
                            mask: getCircleMaskUrl(36.6, 24, 5)
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "Northeast",
                            imageUrl: "./ex7/big-spreads.webp",
                            mask: getCircleMaskUrl(64, 24, 5)
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "Southwest",
                            imageUrl: "./ex7/big-spreads.webp",
                            mask: getCircleMaskUrl(36.5, 71.7, 5)
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "Southeast",
                            imageUrl: "./ex7/big-spreads.webp",
                            mask: getCircleMaskUrl(64, 71.6, 5)
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "North",
                            imageUrl: "./ex7/big-spreads.webp",
                            mask: getCircleMaskUrl(50.3, 23.8, 5)
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "Center",
                            imageUrl: "./ex7/big-spreads.webp",
                            mask: getCircleMaskUrl(50.4, 46.5, 5)
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "West",
                            imageUrl: "./ex7/big-spreads.webp",
                            mask: getCircleMaskUrl(36.5, 47.9, 5)
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "East",
                            imageUrl: "./ex7/big-spreads.webp",
                            mask: getCircleMaskUrl(64, 47.8, 5)
                        }
                    ]
                }
            ]
        },
        {
            phaseName: "Car 1",
            tag: "p1",
            boardCode: 'YJJzg701CLDgj',
            mechs: [
                {
                    mechanic: "Overview",
                    description: "<ul class=\"overview\">\n<li><strong>Overdraught</strong> (stored stack/spread)</li>\n<li><strong>Express</strong> (KB + lasers)</li>\n<li>Stack/spread goes off</li>\n<br>\n<li><strong>Overdraught</strong> (stored opposite stack/spread)</li>\n<li><strong>Windpipe</strong> (Suck)</li>\n<li>Stack/spread goes off</li>\n</ul>"
                },
                {
                    mechanic: "Overdraught",
                    description: "Stores stack/spread that fires later",
                    imageUrl: "./ex7/p1-orbs.webp"
                },
                {
                    mechanic: "Express",
                    description: "KB + stand in high laser lane",
                    imageUrl: "./ex7/p1-express.webp"
                },
                {
                    mechanic: "Windpipe",
                    description: "Suck, first 2 rows are unsafe",
                    imageUrl: "./ex7/p1-windpipe.webp"
                }
            ]
        },
        {
            phaseName: "Car 2",
            tag: "p2",
            mechs: [
                {
                    mechanic: "Overview",
                    description: "<ul class=\"overview\">\n<li><strong>Overdraught</strong> (stored stack/spread)</li>\n<li>Turrets</li>\n<li><strong>Express</strong> (KB + lasers) OR <strong>Windpipe</strong> (Suck)</li>\n<li>Stack/spread goes off</li>\n<br>\n<li><strong>Overdraught</strong> (stored opposite stack/spread)</li>\n<li>Turrets</li>\n<li><strong>Lightning Burst</strong> (tankbusters)</li>\n<li>Turrets</li>\n<li><strong>Windpipe</strong> OR <strong>Express</strong> (opposite)</li>\n<li>Stack/spread goes off</li>\n</ul>"
                }
            ]
        },
        {
            phaseName: "Runaway Train",
            tag: "runaway",
            boardCode: {
                'alt': 'esjq9TWtfvc_U',
                'static': 'p1EfvtcHTHBAj',
                'raidplan': 'SeqxDs6FKT7kK',
            },
            mechs: [
                {
                    mechanic: "Ghost Train (TB)",
                    description: "Targets both tanks with conal tankbusters\nTanks go towards train, MT left OT right",
                    strats: getStratArray(runawayStrats, 'ghosttraintb')
                },
                {
                    mechanic: "Doom Train (Stack/Spread)",
                    description: "2 puffs = LP stacks\n3 puffs = spread",
                    imageUrl: "./ex7/p3-stack-spread-audio.webp",
                    strats: getStratArray(runawayStrats, 'doomtrainstackspread')
                },
                {
                    mechanic: "Stacks",
                    description: getStringObject(runawayStrats, 'stacks', 'description'),
                    strats: getStratArray(runawayStrats, 'stacks')
                },
                {
                    mechanic: "Spreads",
                    strats: getStratArray(runawayStrats, 'spreads'),
                    description: {
                        static: "Healers and Melee are static, ignore train direction\nRanged and Tanks will rotate"
                    }
                },
                {
                    mechanic: "Tower + Derail",
                    description: "3-hit group stack, then run south to teleporter",
                    imageUrl: "./ex7/p3-tower.webp",
                    strats: getStratArray(runawayStrats, 'towerderail')
                }
            ]
        },
        {
            phaseName: "Car 4",
            tag: "p4",
            mechs: [
                {
                    mechanic: "Overview",
                    description: "<ul class=\"overview\">\n<li>Twisters</li>\n<li>High/Low</li>\n<br>\n<li><strong>Arcane Revelation</strong> x3 (total of 8 circle moves)</li>\n<br>\n<li>High/Low</li>\n<li>Twisters</li>\n<br>\n<li><strong>Derailment Siege</strong> (4x tower; MT Invuln)</li>\n<li><strong>Derail</strong></li>\n</ul>"
                },
                {
                    mechanic: "Twisters",
                    description: "Wait for sound, then move out of puddle baits",
                    imageUrl: "./ex7/p4-twisters.webp"
                },
                {
                    mechanic: "High/Low",
                    description: "Cleave will hit High/Low or Low/High",
                    imageUrl: "./ex7/p4-levels.webp"
                }
            ]
        },
        {
            phaseName: "Arcane Revelation",
            tag: "arcane",
            boardCode: {
                'normal': 'DXHyZygbWxTfc',
                'cheese': 'B_9QEgSTY1bAR'
            },
            mechs: {
                normal: normalArcane,
                cheese: cheeseArcane
            }
        },
        {
            phaseName: "Car 5",
            tag: "p5",
            boardCode: 'nptkmmB60ixvD',
            mechs: [
                {
                    mechanic: "Overview",
                    description: "<ul class=\"overview\">\n<li>Boxes removed</li>\n<li><strong>Psychokinesis</strong> (2x big AoEs)</li>\n<li>Twisters</li>\n<br>\n<li>Boxes removed</li>\n<li><strong>Psychokinesis</strong> (3x big AoEs)</li>\n<li><strong>Lightning Burst</strong> (tankbusters)</li>\n<br>\n<li>Boxes removed</li>\n<li><strong>Psychokinesis</strong> (5x AoEs (Big Spread/YOLO))</li>\n<li>Twisters</li>\n<br>\n<li><strong>Derailment Siege</strong> (5x tower; OT Invuln)</li>\n<li><strong>Derail</li>\n</ul>"
                },
                {
                    mechanic: "5x AOE (Big Spread)",
                    description: "Use big spread positions from setup",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "Northwest",
                            imageUrl: "./ex7/p5-big-spread.webp",
                            mask: getCircleMaskUrl(36, 22.9, 5)
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "Northeast",
                            imageUrl: "./ex7/p5-big-spread.webp",
                            mask: getCircleMaskUrl(63.9, 22.8, 5)
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "Southwest",
                            imageUrl: "./ex7/p5-big-spread.webp",
                            mask: getCircleMaskUrl(41.3, 70.3, 5)
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "Southeast",
                            imageUrl: "./ex7/p5-big-spread.webp",
                            mask: getCircleMaskUrl(62.6, 69.9, 5)
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "North",
                            imageUrl: "./ex7/p5-big-spread.webp",
                            mask: getCircleMaskUrl(50.3, 22.9, 5)
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "Center",
                            imageUrl: "./ex7/p5-big-spread.webp",
                            mask: getCircleMaskUrl(49.8, 46.9, 5)
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "West",
                            imageUrl: "./ex7/p5-big-spread.webp",
                            mask: getCircleMaskUrl(36.1, 49.4, 5)
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "East",
                            imageUrl: "./ex7/p5-big-spread.webp",
                            mask: getCircleMaskUrl(63.9, 46.8, 5)
                        }
                    ]
                }
            ]
        },
        {
            phaseName: "Car 6",
            tag: "p6",
            mechs: [
                {
                    mechanic: "Overview",
                    description: "<ul class=\"overview\">\n<li><strong>Overdraught</strong> (stored stack/spread)</li>\n<li>Turrets</li>\n<li>High/Low</li>\n<li>Turrets (BOXES GO AWAY)</li>\n<li><strong>Psychokinesis</strong> (4x big AoEs (Big Spread/YOLO))</li>\n<li>Twisters</li>\n<li>Turrets</li>\n<li><strong>Windpipe</strong> (Suck) OR <strong>Express</strong> (KB + lasers)</li>\n<li>Stack/spread goes off</li>\n<br>\n<li><strong>Lightning Burst</strong> (tankbusters)</li>\n<br>\n<li><strong>Overdraught</strong> (stored opposite stack/spread)</li>\n<li><strong>Arcane Revelation</strong> x2 (total of 5 circle moves)</li>\n<li>Twisters</li>\n<li><strong>Express</strong> OR <strong>Windpipe</strong> (opposite)</li>\n<li>Stack/spread goes off</li>\n</ul>"
                },
                {
                    mechanic: "Arcane Revelation 2 (East/West)",
                    description: "Ranged/Healers can stay on platform",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "North/East-ish",
                            imageUrl: "./ex7/p6-arcane-ew.webp",
                            mask: getMultiCircleMaskUrl([35.1, 14.4, 5], [63, 15.9, 5])
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "North/East-ish",
                            imageUrl: "./ex7/p6-arcane-ew.webp",
                            mask: getMultiCircleMaskUrl([35.1, 14.4, 5], [63, 15.9, 5])
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "Stay on platform",
                            imageUrl: "./ex7/p6-arcane-ew.webp",
                            mask: getMultiCircleMaskUrl([35.4, 83.6, 5], [61, 87.4, 5])
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "Stay on platform",
                            imageUrl: "./ex7/p6-arcane-ew.webp",
                            mask: getMultiCircleMaskUrl([35.4, 83.6, 5], [61, 87.4, 5])
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "North/East-ish",
                            imageUrl: "./ex7/p6-arcane-ew.webp",
                            mask: getMultiCircleMaskUrl([35.1, 14.4, 5], [63, 15.9, 5])
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "North/East-ish",
                            imageUrl: "./ex7/p6-arcane-ew.webp",
                            mask: getMultiCircleMaskUrl([35.1, 14.4, 5], [63, 15.9, 5])
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "Stay on platform",
                            imageUrl: "./ex7/p6-arcane-ew.webp",
                            mask: getMultiCircleMaskUrl([35.4, 83.6, 5], [61, 87.4, 5])
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "Stay on platform",
                            imageUrl: "./ex7/p6-arcane-ew.webp",
                            mask: getMultiCircleMaskUrl([35.4, 83.6, 5], [61, 87.4, 5])
                        }
                    ]
                },
                {
                    mechanic: "Arcane Revelation 2 (North/South)",
                    description: "Ranged/Healers can stay on platform\nTank/Melees stay low",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "North/East-ish",
                            imageUrl: "./ex7/p6-arcane-ns.webp",
                            mask: getMultiCircleMaskUrl([36.6, 87.2, 5], [88.6, 18.2, 5])
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "North/East-ish",
                            imageUrl: "./ex7/p6-arcane-ns.webp",
                            mask: getMultiCircleMaskUrl([36.6, 87.2, 5], [88.6, 18.2, 5])
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "Stay on platform",
                            imageUrl: "./ex7/p6-arcane-ns.webp",
                            mask: getMultiCircleMaskUrl([8.9, 87.2, 5], [59.6, 38.6, 5])
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "Stay on platform",
                            imageUrl: "./ex7/p6-arcane-ns.webp",
                            mask: getMultiCircleMaskUrl([8.9, 87.2, 5], [59.6, 38.6, 5])
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "North/East-ish",
                            imageUrl: "./ex7/p6-arcane-ns.webp",
                            mask: getMultiCircleMaskUrl([36.6, 87.2, 5], [88.6, 18.2, 5])
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "North/East-ish",
                            imageUrl: "./ex7/p6-arcane-ns.webp",
                            mask: getMultiCircleMaskUrl([36.6, 87.2, 5], [88.6, 18.2, 5])
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "Stay on platform",
                            imageUrl: "./ex7/p6-arcane-ns.webp",
                            mask: getMultiCircleMaskUrl([8.9, 87.2, 5], [59.6, 38.6, 5])
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "Stay on platform",
                            imageUrl: "./ex7/p6-arcane-ns.webp",
                            mask: getMultiCircleMaskUrl([8.9, 87.2, 5], [59.6, 38.6, 5])
                        }
                    ]
                },
                {
                    mechanic: "Final Sequence",
                    description: "<ul class=\"overview\">\n<li>High/Low</li>\n<li><strong>Lightning Burst</strong> (tankbusters)</li>\n<li>Twisters</li>\n<li><strong>Derailment Siege</strong> (6x tower)</li>\n<li><strong>Derail</strong> (hard enrage)</li>\n</ul>"
                }
            ]
        }
    ]
};

// All strats as an array
export const ex7Strats: Strat[] = [hector];
