import type { Strat, FightConfig, StratRecord, PlayerMechStrat, MechanicStrat } from '$lib/types';
import { getStringObject, getStratArray, getCircleMaskUrl, getMultiCircleMaskUrl, getRectMaskUrl } from '$lib/utils';

export const m9sFightConfig: FightConfig = {
    fightKey: "m9s",
    title: "AAC Heavyweight M1 (Savage)",
    abbreviatedTitle: "M9S",
    subtitle: "M9S Patch 7.4",
    cheatsheetTitle: "M9S Cheatsheet",
    useModernCheatsheet: true,
    strats: {
        toxic: {
            label: "Toxic Friends",
            badges: [
                {
                    text: "NA",
                    class: "bg-blue-600 text-white"
                }
            ]
        }
    },
    defaultStratName: "toxic",
    timeline: [
        {
            mechName: "Start",
            mechType: "Start",
            startTimeMs: 0
        },
        {
            mechName: "Killer Voice",
            mechType: "Raidwide",
            startTimeMs: 10000
        },
        {
            mechName: "Hardcore",
            mechType: "Tankbuster",
            startTimeMs: 20000
        },
        {
            mechName: "Vamp Stomp",
            mechType: "Mechanic",
            startTimeMs: 30000
        },
        {
            mechName: "Brutal Rain",
            mechType: "Raidwide",
            startTimeMs: 46000
        },
        {
            mechName: "Sadistic Screech",
            mechType: "Raidwide",
            startTimeMs: 61000
        },
        {
            mechName: "1st Cleaves",
            mechType: "Mechanic",
            startTimeMs: 68000
        },
        {
            mechName: "2nd Cleaves",
            mechType: "Mechanic",
            startTimeMs: 86000
        },
        {
            mechName: "3rd Cleaves",
            mechType: "Mechanic",
            startTimeMs: 103000
        },
        {
            mechName: "Sadistic Screech",
            mechType: "Raidwide",
            startTimeMs: 138000
        },
        {
            mechName: "Crowd Kill",
            mechType: "Raidwide",
            startTimeMs: 153000
        },
        {
            mechName: "Finale Fatale",
            mechType: "Raidwide",
            startTimeMs: 171000
        },
        {
            mechName: "Pulping Pulse",
            mechType: "Mechanic",
            startTimeMs: 177000
        },
        {
            mechName: "Aetherletting",
            mechType: "Mechanic",
            startTimeMs: 178000
        },
        {
            mechName: "1st Spreads",
            mechType: "Mechanic",
            startTimeMs: 193000
        },
        {
            mechName: "2nd Spreads",
            mechType: "Mechanic",
            startTimeMs: 195000
        },
        {
            mechName: "3rd Spreads",
            mechType: "Mechanic",
            startTimeMs: 197000
        },
        {
            mechName: "4th Spreads",
            mechType: "Mechanic",
            startTimeMs: 199000
        },
        {
            mechName: "Plus/Cross",
            mechType: "Mechanic",
            startTimeMs: 207000
        },
        {
            mechName: "Hardcore",
            mechType: "Tankbuster",
            startTimeMs: 220000
        },
        {
            mechName: "Pulping Pulse",
            mechType: "Mechanic",
            startTimeMs: 225000
        },
        {
            mechName: "Vamp Stomp",
            mechType: "Mechanic",
            startTimeMs: 231000
        },
        {
            mechName: "Half Moon",
            mechType: "Mechanic",
            startTimeMs: 247000
        },
        {
            mechName: "Brutal Rain",
            mechType: "Raidwide",
            startTimeMs: 257000
        },
        {
            mechName: "Insatiable Thirst",
            mechType: "Raidwide",
            startTimeMs: 271000
        },
        {
            mechName: "Sadistic Screech 2",
            mechType: "Raidwide",
            startTimeMs: 284000
        },
        {
            mechName: "1st Towers",
            mechType: "Mechanic",
            startTimeMs: 296000
        },
        {
            mechName: "Killer Voice",
            mechType: "Raidwide",
            startTimeMs: 305000
        },
        {
            mechName: "2nd Towers",
            mechType: "Mechanic",
            startTimeMs: 315000
        },
        {
            mechName: "Killer Voice",
            mechType: "Raidwide",
            startTimeMs: 324000
        },
        {
            mechName: "3rd Towers",
            mechType: "Mechanic",
            startTimeMs: 333000
        },
        {
            mechName: "Sadistic Screech",
            mechType: "Raidwide",
            startTimeMs: 357000
        },
        {
            mechName: "Crowd Kill",
            mechType: "Raidwide",
            startTimeMs: 371000
        },
        {
            mechName: "Finale Fatale",
            mechType: "Raidwide",
            startTimeMs: 389000
        },
        {
            mechName: "Pulping Pulse",
            mechType: "Mechanic",
            startTimeMs: 395000
        },
        {
            mechName: "Hell in a Cell 1",
            mechType: "Mechanic",
            startTimeMs: 401000
        },
        {
            mechName: "Ultrasonic Spread/Amp",
            mechType: "Mechanic",
            startTimeMs: 409000
        },
        {
            mechName: "Ultrasonic Spread/Amp",
            mechType: "Mechanic",
            startTimeMs: 416000
        },
        {
            mechName: "Hell in a Cell 2",
            mechType: "Mechanic",
            startTimeMs: 423000
        },
        {
            mechName: "Ultrasonic Spread/Amp",
            mechType: "Mechanic",
            startTimeMs: 431000
        },
        {
            mechName: "Ultrasonic Spread/Amp",
            mechType: "Mechanic",
            startTimeMs: 438000
        },
        {
            mechName: "Pulping Pulse",
            mechType: "Mechanic",
            startTimeMs: 444000
        },
        {
            mechName: "Pulping Pulse",
            mechType: "Mechanic",
            startTimeMs: 448000
        },
        {
            mechName: "Undead Deathmatch",
            mechType: "Mechanic",
            startTimeMs: 454000
        },
        {
            mechName: "Sanguine Scratch",
            mechType: "Mechanic",
            startTimeMs: 461000
        },
        {
            mechName: "Sanguine Scratch",
            mechType: "Mechanic",
            startTimeMs: 479000
        },
        {
            mechName: "Brutal Rain",
            mechType: "Raidwide",
            startTimeMs: 499000
        },
        {
            mechName: "Vamp Stomp",
            mechType: "Mechanic",
            startTimeMs: 512000
        },
        {
            mechName: "Half Moon",
            mechType: "Mechanic",
            startTimeMs: 528000
        },
        {
            mechName: "Hardcore",
            mechType: "Tankbuster",
            startTimeMs: 538000
        },
        {
            mechName: "Pulping Pulse",
            mechType: "Mechanic",
            startTimeMs: 543000
        },
        {
            mechName: "Sanguine Scratch 2",
            mechType: "Mechanic",
            startTimeMs: 551000
        },
        {
            mechName: "Insatiable Thirst",
            mechType: "Raidwide",
            startTimeMs: 571000
        },
        {
            mechName: "Crowd Kill",
            mechType: "Raidwide",
            startTimeMs: 585000
        },
        {
            mechName: "Enrage",
            mechType: "Enrage",
            startTimeMs: 605000
        },
    ]
};

export const toxic: Strat = {
    stratName: "toxic",
    description: "Last updated from Raidplan 1/6/2026 5pm PST",
    stratUrl: {
        Raidplan: "https://raidplan.io/plan/c2L5iJfuYIWXk1v7"
    },
    strats: [
        {
            phaseName: "Vamp Stomp",
            description: "Expanding ring + bats\nMelees E/W, Healers SE/SW",
            mechs: [
                {
                    mechanic: "Start",
                    description: "Dodge near your marker",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "Dodge near A marker",
                            imageUrl: "./m9s/toxic-vamp-1.webp",
                            mask: getCircleMaskUrl(49.9, 20.1, 10)
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "Dodge near C marker",
                            imageUrl: "./m9s/toxic-vamp-1.webp",
                            mask: getCircleMaskUrl(49.9, 80.4, 10)
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "Dodge near 4 marker",
                            imageUrl: "./m9s/toxic-vamp-1.webp",
                            mask: getCircleMaskUrl(38.7, 70.1, 10)
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "Dodge near 3 marker",
                            imageUrl: "./m9s/toxic-vamp-1.webp",
                            mask: getCircleMaskUrl(61.2, 70.2, 10)
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "Dodge near D marker",
                            imageUrl: "./m9s/toxic-vamp-1.webp",
                            mask: getCircleMaskUrl(33.2, 50.1, 10)
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "Dodge near B marker",
                            imageUrl: "./m9s/toxic-vamp-1.webp",
                            mask: getCircleMaskUrl(66.8, 50.4, 10)
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "Dodge near 1 marker",
                            imageUrl: "./m9s/toxic-vamp-1.webp",
                            mask: getCircleMaskUrl(38.6, 30.2, 10)
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "Dodge near 2 marker",
                            imageUrl: "./m9s/toxic-vamp-1.webp",
                            mask: getCircleMaskUrl(61.2, 30.2, 10)
                        }
                    ]
                },
                {
                    mechanic: "Continue",
                    description: "Dodge near your marker",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "Dodge near A marker",
                            imageUrl: "./m9s/toxic-vamp-2.webp",
                            mask: getCircleMaskUrl(49.9, 20.1, 10)
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "Dodge near C marker",
                            imageUrl: "./m9s/toxic-vamp-2.webp",
                            mask: getCircleMaskUrl(49.9, 80.4, 10)
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "Dodge near 4 marker",
                            imageUrl: "./m9s/toxic-vamp-2.webp",
                            mask: getCircleMaskUrl(38.7, 70.1, 10)
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "Dodge near 3 marker",
                            imageUrl: "./m9s/toxic-vamp-2.webp",
                            mask: getCircleMaskUrl(61.2, 70.2, 10)
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "Dodge near D marker",
                            imageUrl: "./m9s/toxic-vamp-2.webp",
                            mask: getCircleMaskUrl(33.2, 50.1, 10)
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "Dodge near B marker",
                            imageUrl: "./m9s/toxic-vamp-2.webp",
                            mask: getCircleMaskUrl(66.8, 50.4, 10)
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "Dodge near 1 marker",
                            imageUrl: "./m9s/toxic-vamp-2.webp",
                            mask: getCircleMaskUrl(38.6, 30.2, 10)
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "Dodge near 2 marker",
                            imageUrl: "./m9s/toxic-vamp-2.webp",
                            mask: getCircleMaskUrl(61.2, 30.2, 10)
                        }
                    ]
                }
            ]
        },
        {
            phaseName: "Sadistic Screech",
            mechs: [
                {
                    mechanic: "First Cleave",
                    description: "Dodge into non-glowing area\nBoss will cleave N or S\nG1 W, G2 E",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "West",
                            imageUrl: "./m9s/toxic-sadistic-1.webp",
                            mask: getRectMaskUrl(44.1, 49.8, 30.2, 49.9)
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "East",
                            imageUrl: "./m9s/toxic-sadistic-1.webp",
                            mask: getRectMaskUrl(55.3, 61.2, 30.2, 49.9)
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "West",
                            imageUrl: "./m9s/toxic-sadistic-1.webp",
                            mask: getRectMaskUrl(44.1, 49.8, 30.2, 49.9)
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "East",
                            imageUrl: "./m9s/toxic-sadistic-1.webp",
                            mask: getRectMaskUrl(55.3, 61.2, 30.2, 49.9)
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "West",
                            imageUrl: "./m9s/toxic-sadistic-1.webp",
                            mask: getRectMaskUrl(44.1, 49.8, 30.2, 49.9)
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "East",
                            imageUrl: "./m9s/toxic-sadistic-1.webp",
                            mask: getRectMaskUrl(55.3, 61.2, 30.2, 49.9)
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "West",
                            imageUrl: "./m9s/toxic-sadistic-1.webp",
                            mask: getRectMaskUrl(44.1, 49.8, 30.2, 49.9)
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "East",
                            imageUrl: "./m9s/toxic-sadistic-1.webp",
                            mask: getRectMaskUrl(55.3, 61.2, 30.2, 49.9)
                        }
                    ]
                },
                {
                    mechanic: "Second Cleave",
                    description: "Boss will cleave other half\nDodge into non-glowing lane\nG1 W, G2 E",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "West",
                            imageUrl: "./m9s/toxic-sadistic-2.webp",
                            mask: getRectMaskUrl(38.8, 44.5, 50.4, 89.9)
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "East",
                            imageUrl: "./m9s/toxic-sadistic-2.webp",
                            mask: getRectMaskUrl(50, 55.9, 50.4, 89.8)
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "West",
                            imageUrl: "./m9s/toxic-sadistic-2.webp",
                            mask: getRectMaskUrl(38.8, 44.5, 50.4, 89.9)
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "East",
                            imageUrl: "./m9s/toxic-sadistic-2.webp",
                            mask: getRectMaskUrl(50, 55.9, 50.4, 89.8)
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "West",
                            imageUrl: "./m9s/toxic-sadistic-2.webp",
                            mask: getRectMaskUrl(38.8, 44.5, 50.4, 89.9)
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "East",
                            imageUrl: "./m9s/toxic-sadistic-2.webp",
                            mask: getRectMaskUrl(50, 55.9, 50.4, 89.8)
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "West",
                            imageUrl: "./m9s/toxic-sadistic-2.webp",
                            mask: getRectMaskUrl(38.8, 44.5, 50.4, 89.9)
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "East",
                            imageUrl: "./m9s/toxic-sadistic-2.webp",
                            mask: getRectMaskUrl(50, 55.9, 50.4, 89.8)
                        }
                    ]
                },
                {
                    mechanic: "Third Cleave",
                    description: "Boss will cleave from South side\nOne tile will be safe",
                    imageUrl: "./m9s/toxic-sadistic-3.webp"
                }
            ]
        },
        {
            phaseName: "Aetherletting",
            mechs: [
                {
                    mechanic: "Start",
                    description: "Static, start slightly CCW of standard clock spot\nDrop AOE at edge of arena when it's your turn",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "NNW between A and 1",
                            imageUrl: "./m9s/toxic-aetherletting-1.webp",
                            mask: getCircleMaskUrl(41.5, 14.9, 7)
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "SSE between 3 and C",
                            imageUrl: "./m9s/toxic-aetherletting-1.webp",
                            mask: getCircleMaskUrl(58.8, 86.7, 7)
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "WSW between 4 and D",
                            imageUrl: "./m9s/toxic-aetherletting-1.webp",
                            mask: getCircleMaskUrl(29.4, 68.1, 7)
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "ENE between 2 and B",
                            imageUrl: "./m9s/toxic-aetherletting-1.webp",
                            mask: getCircleMaskUrl(70.6, 33.1, 7)
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "SSW between C and 4",
                            imageUrl: "./m9s/toxic-aetherletting-1.webp",
                            mask: getCircleMaskUrl(40.7, 87.3, 7)
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "ESE between B and 3",
                            imageUrl: "./m9s/toxic-aetherletting-1.webp",
                            mask: getCircleMaskUrl(71.3, 64.9, 7)
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "WNW between D and 1",
                            imageUrl: "./m9s/toxic-aetherletting-1.webp",
                            mask: getCircleMaskUrl(28.8, 34.8, 7)
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "NNE between A and 2",
                            imageUrl: "./m9s/toxic-aetherletting-1.webp",
                            mask: getCircleMaskUrl(58.2, 12.4, 7)
                        }
                    ]
                },
                {
                    mechanic: "Mech 2",
                    description: "Stack center to dodge crosses",
                    imageUrl: "./m9s/toxic-aetherletting-2.webp"
                }
            ]
        },
        {
            phaseName: "Half Moon",
            description: "Dodge 2 half rooms (hitbox width)",
            imageUrl: "./m9s/toxic-halfmoon.webp"
        },
        {
            phaseName: "Sadistic Screech 2",
            description: "Repeats 3x",
            mechs: [
                {
                    mechanic: "Towers",
                    description: "MT take North, OT take South",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "Take North tower",
                            imageUrl: "./m9s/toxic-sadistic2-1.webp",
                            mask: getCircleMaskUrl(55.9, 38.9, 6)
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "Take South tower",
                            imageUrl: "./m9s/toxic-sadistic2-1.webp",
                            mask: getCircleMaskUrl(44.3, 80.3, 6)
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "Don't stand in red circle",
                            imageUrl: "./m9s/toxic-sadistic2-1.webp"
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "Don't stand in red circle",
                            imageUrl: "./m9s/toxic-sadistic2-1.webp"
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "Don't stand in red circle",
                            imageUrl: "./m9s/toxic-sadistic2-1.webp"
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "Don't stand in red circle",
                            imageUrl: "./m9s/toxic-sadistic2-1.webp"
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "Don't stand in red circle",
                            imageUrl: "./m9s/toxic-sadistic2-1.webp"
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "Don't stand in red circle",
                            imageUrl: "./m9s/toxic-sadistic2-1.webp"
                        }
                    ]
                },
                {
                    mechanic: "Flails + Nails",
                    description: "Towers spawn flails, Circle spawns doornail\nTanks hit flails, everyone else focus doornail",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "Hit North flail",
                            imageUrl: "./m9s/toxic-sadistic2-2.webp"
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "Hit South flail",
                            imageUrl: "./m9s/toxic-sadistic2-2.webp"
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "Focus doornail",
                            imageUrl: "./m9s/toxic-sadistic2-2.webp"
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "Focus doornail",
                            imageUrl: "./m9s/toxic-sadistic2-2.webp"
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "Focus doornail\nIf doornail expands too much, switch to flail",
                            imageUrl: "./m9s/toxic-sadistic2-2.webp"
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "Focus doornail\nIf doornail expands too much, switch to flail",
                            imageUrl: "./m9s/toxic-sadistic2-2.webp"
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "Focus doornail",
                            imageUrl: "./m9s/toxic-sadistic2-2.webp"
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "Focus doornail",
                            imageUrl: "./m9s/toxic-sadistic2-2.webp"
                        }
                    ]
                }
            ]
        },
        {
            phaseName: "Hell in a Cell",
            mechs: [
                {
                    mechanic: "1st Towers",
                    description: "G1 takes first set of towers\nCW Prio (from North) T-H-M-R",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "Take 1st tower CW from N",
                            imageUrl: "./m9s/toxic-hell-towers-1.webp",
                            mask: getCircleMaskUrl(59.5, 33, 5)
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "Don't take 1st tower, do mechanics",
                            imageUrl: "./m9s/toxic-hell-towers-1.webp"
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "Take 2nd tower CW from N",
                            imageUrl: "./m9s/toxic-hell-towers-1.webp",
                            mask: getCircleMaskUrl(63.8, 49.9, 5)
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "Don't take 1st tower, do mechanics",
                            imageUrl: "./m9s/toxic-hell-towers-1.webp"
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "Take 3rd tower CW from N",
                            imageUrl: "./m9s/toxic-hell-towers-1.webp",
                            mask: getCircleMaskUrl(40.9, 66.1, 5)
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "Don't take 1st tower, do mechanics",
                            imageUrl: "./m9s/toxic-hell-towers-1.webp"
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "Take 4th tower CW from N",
                            imageUrl: "./m9s/toxic-hell-towers-1.webp",
                            mask: getCircleMaskUrl(40.8, 33.7, 5)
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "Don't take 1st tower, do mechanics",
                            imageUrl: "./m9s/toxic-hell-towers-1.webp"
                        }
                    ]
                },
                {
                    mechanic: "Ultrasonic Spread",
                    description: "Towers kill adds, other group does role cleaves\nTank in wide safespot, Healer CW from tank, DPS CCW from tank",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "1st: Kill tower add\n2nd: Take role cleave in wide safespot",
                            imageUrl: "./m9s/toxic-hell-spread.webp"
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "1st: Take role cleave in wide safespot\n2nd: Kill tower add",
                            imageUrl: "./m9s/toxic-hell-spread.webp"
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "1st: Kill tower add\n2nd: Take role cleave CW from OT",
                            imageUrl: "./m9s/toxic-hell-spread.webp"
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "1st: Take role cleave CW from OT\n2nd: Kill tower add",
                            imageUrl: "./m9s/toxic-hell-spread.webp"
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "1st: Kill tower add\n2nd: Take role cleave CCW from OT (stack with R2)",
                            imageUrl: "./m9s/toxic-hell-spread.webp"
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "1st: Take role cleave CCW from OT (stack with R2)\n2nd: Kill tower add",
                            imageUrl: "./m9s/toxic-hell-spread.webp"
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "1st: Kill tower add\n2nd: Take role cleave CCW from OT (stack with M2)",
                            imageUrl: "./m9s/toxic-hell-spread.webp"
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "1st: Take role cleave CCW from OT (stack with M2)\n2nd: Kill tower add",
                            imageUrl: "./m9s/toxic-hell-spread.webp"
                        }
                    ]
                },
                {
                    mechanic: "Ultrasonic Amp",
                    description: "Light party stack in wide safespot",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "1st: Kill tower add\n2nd: Take stack in wide safespot",
                            imageUrl: "./m9s/toxic-hell-amp.webp"
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "1st: Take stack in wide safespot\n2nd: Kill tower add",
                            imageUrl: "./m9s/toxic-hell-amp.webp"
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "1st: Kill tower add\n2nd: Take stack in wide safespot",
                            imageUrl: "./m9s/toxic-hell-amp.webp"
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "1st: Take stack in wide safespot\n2nd: Kill tower add",
                            imageUrl: "./m9s/toxic-hell-amp.webp"
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "1st: Kill tower add\n2nd: Take stack in wide safespot",
                            imageUrl: "./m9s/toxic-hell-amp.webp"
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "1st: Take stack in wide safespot\n2nd: Kill tower add",
                            imageUrl: "./m9s/toxic-hell-amp.webp"
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "1st: Kill tower add\n2nd: Take stack in wide safespot",
                            imageUrl: "./m9s/toxic-hell-amp.webp"
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "1st: Take stack in wide safespot\n2nd: Kill tower add",
                            imageUrl: "./m9s/toxic-hell-amp.webp"
                        }
                    ]
                },
                {
                    mechanic: "2nd Towers",
                    description: "G2 take towers, G1 do mechanics",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "Don't take 2nd tower, do mechanics",
                            imageUrl: "./m9s/toxic-hell-towers-2.webp"
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "Take 1st tower CW from N",
                            imageUrl: "./m9s/toxic-hell-towers-2.webp",
                            mask: getCircleMaskUrl(50, 26, 5)
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "Don't take 2nd tower, do mechanics",
                            imageUrl: "./m9s/toxic-hell-towers-2.webp"
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "Take 2nd tower CW from N",
                            imageUrl: "./m9s/toxic-hell-towers-2.webp",
                            mask: getCircleMaskUrl(59.1, 66.6, 5)
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "Don't take 2nd tower, do mechanics",
                            imageUrl: "./m9s/toxic-hell-towers-2.webp"
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "Take 3rd tower CW from N",
                            imageUrl: "./m9s/toxic-hell-towers-2.webp",
                            mask: getCircleMaskUrl(50.1, 75.6, 5)
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "Don't take 2nd tower, do mechanics",
                            imageUrl: "./m9s/toxic-hell-towers-2.webp"
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "Take 4th tower CW from N",
                            imageUrl: "./m9s/toxic-hell-towers-2.webp",
                            mask: getCircleMaskUrl(36.5, 49.9, 5)
                        }
                    ]
                }
            ]
        },
        {
            phaseName: "Undead Deathmatch",
            mechs: [
                {
                    mechanic: "Towers",
                    description: "G1 N/W, G2 S/E",
                    strats: [
                        {
                            role: "Tank",
                            party: 1,
                            description: "North/West",
                            imageUrl: "./m9s/toxic-undead.webp"
                        },
                        {
                            role: "Tank",
                            party: 2,
                            description: "South/East",
                            imageUrl: "./m9s/toxic-undead.webp"
                        },
                        {
                            role: "Healer",
                            party: 1,
                            description: "North/West",
                            imageUrl: "./m9s/toxic-undead.webp"
                        },
                        {
                            role: "Healer",
                            party: 2,
                            description: "South/East",
                            imageUrl: "./m9s/toxic-undead.webp"
                        },
                        {
                            role: "Melee",
                            party: 1,
                            description: "North/West",
                            imageUrl: "./m9s/toxic-undead.webp"
                        },
                        {
                            role: "Melee",
                            party: 2,
                            description: "South/East",
                            imageUrl: "./m9s/toxic-undead.webp"
                        },
                        {
                            role: "Ranged",
                            party: 1,
                            description: "North/West",
                            imageUrl: "./m9s/toxic-undead.webp"
                        },
                        {
                            role: "Ranged",
                            party: 2,
                            description: "South/East",
                            imageUrl: "./m9s/toxic-undead.webp"
                        }
                    ]
                }
            ]
        },
        {
            phaseName: "Sanguine Scratch",
            description: "Repeats 2x",
            mechs: [
                {
                    mechanic: "Cleaves",
                    description: "Boss will alternate cleaves\nFollow tether to Donut/Circle while dodging cleaves",
                    imageUrl: "./m9s/toxic-sanguine-1.webp"
                },
                {
                    mechanic: "Donut + Circle",
                    description: "Donut or circle will resolve once you reach the other side",
                    imageUrl: "./m9s/toxic-sanguine-2.webp"
                }
            ]
        },
        {
            phaseName: "Sanguine Scratch 2",
            description: "Dodge alternating cleaves",
            imageUrl: "./m9s/toxic-sanguine2.webp"
        }
    ]
};

// All strats as an array
export const m9sStrats: Strat[] = [toxic];
