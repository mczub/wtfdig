import type { Strat, FightConfig, StratRecord, PlayerMechStrat } from '$lib/types';
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
        }
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
            description: "Take TB Right towards Ghost Train"
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
        }
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
        }
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

export const ex7FightConfig: FightConfig = {
    fightKey: "ex7",
    title: "Hell on Rails (Extreme)",
    abbreviatedTitle: "EX7",
    subtitle: "EX7 Patch 7.4",
    cheatsheetTitle: "EX7 Cheatsheet",
    strats: {
        hector: {
            label: "Hector",
            defaults: {
                runaway: "alt"
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
            label: "Spreads",
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
        }
    ],
    useMainPageTabs: false,
    defaultStratName: "hector"
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
            phaseName: "Phase 1",
            tag: "p1",
            mechs: [
                {
                    mechanic: "Order",
                    description: "Overdraught (stored stack/spread)\nExpress (KB + lasers)\nStack/spread goes off\nOverdraught (stored stack/spread)\nWindpipe (Suck)\nStack/spread goes off"
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
            phaseName: "Phase 2",
            tag: "p2",
            mechs: [
                {
                    mechanic: "Order",
                    description: "Overdraught (stored stack/spread)\nTurrets\nExpress (KB + lasers)\nStack/spread goes off\nOverdraught (stored stack/spread)\nTurrets\nLightning Burst (tankbusters)\nTurrets\nWindpipe (Suck)\nStack/spread goes off"
                }
            ]
        },
        {
            phaseName: "Runaway Train",
            tag: "runaway",
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
                    description: {
                        alt: "G1 towards Ghost Train\nG2 away from Ghost Train",
                        raidplan: "G1 towards Ghost Train\nG2 away from Ghost Train",
                        static: "Static stacks, G1 North G2 South"
                    },
                    strats: getStratArray(runawayStrats, 'stacks')
                },
                {
                    mechanic: "Spreads",
                    strats: getStratArray(runawayStrats, 'spreads'),
                    description: {
                        alt: "",
                        raidplan: "",
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
            phaseName: "Phase 4",
            tag: "p4",
            mechs: [
                {
                    mechanic: "Order",
                    description: "Twisters\nHigh/Low\nArcane Revelation x3\nHigh/Low + Twisters\nTower (MT Invuln)\nTeleport"
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
            mechs: [
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
            ]
        },
        {
            phaseName: "Phase 5",
            tag: "p5",
            mechs: [
                {
                    mechanic: "Order",
                    description: "Boxes removed\n2x AOEs\nTwisters\nBoxes removed\n3x AOEs\nLightning Burst (tankbusters)\nBoxes removed\n5x AOEs (Big Spread)\nTwisters\nTower (OT Invuln)\nTeleport"
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
            phaseName: "Phase 6",
            tag: "p6",
            mechs: [
                {
                    mechanic: "Order",
                    description: "Overdraught (stored stack/spread)\nTurrets\nHigh/Low\nTurrets (BOXES GO AWAY)\n4x AOEs (Big Spread or YOLO)\nTwisters\nTurrets\nWindpipe (Suck) or Express (KB + lasers)\nStack/spread goes off\nLightning Burst (tankbusters)\nOverdraught (stored stack/spread)\nArcane Revelation 2 x2\nTwisters\nExpress (KB + lasers) or Windpipe (Suck)\nStack/spread goes off"
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
                    mechanic: "More Repeated Mechs",
                    description: "High/Low\nLightning Burst (tankbusters)\nTwisters\nTower (6x hits)"
                }
            ]
        }
    ]
};

// All strats as an array
export const ex7Strats: Strat[] = [hector];
