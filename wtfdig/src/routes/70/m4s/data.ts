import type { Strat, FightConfig } from '$lib/types';

export const m4sFightConfig: FightConfig = {
    "fightKey": "m4s",
    "title": "AAC Light-Heavyweight M4 (Savage)",
    "abbreviatedTitle": "M4S",
    "subtitle": "M4S Patch 7.0",
    "cheatsheetTitle": "M4S Cheatsheet",
    "strats": {
        "shabin": {
            "label": "Shabin/Hector",
            "defaults": {
                "sunrise": "autocad"
            }
        }
    },
    "toggles": [
        {
            "key": "sunrise",
            "label": "Sunrise",
            "defaultValue": "autocad",
            "options": [
                {
                    "value": "autocad",
                    "label": "AutoCAD"
                },
                {
                    "value": "normal",
                    "label": "Normal"
                }
            ]
        }
    ],
    "tabTags": {
        "P1": [
            "p1"
        ],
        "P2": [
            "p2",
            "sunrise"
        ]
    },
    "useMainPageTabs": false,
    "defaultStratName": "shabin",
    "timeline": []
};

export const m4sStrats: Strat[] = [
    {
        "stratName": "shabin",
        "stratUrl": "https://pastebin.com/teF90QGm",
        "description": "Source: Shabin Pastebin / Hector",
        "strats": [
            {
                "phaseName": "Bewitching Flight",
                "tag": "p1",
                "mechs": [
                    {
                        "mechanic": "Line AoEs",
                        "description": "5 beams from boss (north) and 5 from cubes (west)\nStand in safe intersections",
                        "strats": [
                            {
                                "role": "Tank",
                                "party": 1,
                                "description": "Stand in safe intersection",
                                "imageUrl": "./m4s/bewitching-flight.webp"
                            },
                            {
                                "role": "Tank",
                                "party": 2,
                                "description": "Stand in safe intersection",
                                "imageUrl": "./m4s/bewitching-flight.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 1,
                                "description": "Stand in safe intersection",
                                "imageUrl": "./m4s/bewitching-flight.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 2,
                                "description": "Stand in safe intersection",
                                "imageUrl": "./m4s/bewitching-flight.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 1,
                                "description": "Stand in safe intersection",
                                "imageUrl": "./m4s/bewitching-flight.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 2,
                                "description": "Stand in safe intersection",
                                "imageUrl": "./m4s/bewitching-flight.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 1,
                                "description": "Stand in safe intersection",
                                "imageUrl": "./m4s/bewitching-flight.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 2,
                                "description": "Stand in safe intersection",
                                "imageUrl": "./m4s/bewitching-flight.webp"
                            }
                        ]
                    }
                ]
            },
            {
                "phaseName": "Electrifying Witch Hunt",
                "tag": "p1",
                "mechs": [
                    {
                        "mechanic": "Spreads",
                        "description": "RTMH north to south\nRanged far, melee close\nDodge floor lines",
                        "strats": [
                            {
                                "role": "Tank",
                                "party": 1,
                                "description": "North",
                                "imageUrl": "./m4s/witch-hunt-spreads.webp"
                            },
                            {
                                "role": "Tank",
                                "party": 2,
                                "description": "North",
                                "imageUrl": "./m4s/witch-hunt-spreads.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 1,
                                "description": "South",
                                "imageUrl": "./m4s/witch-hunt-spreads.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 2,
                                "description": "South",
                                "imageUrl": "./m4s/witch-hunt-spreads.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 1,
                                "description": "Close to boss",
                                "imageUrl": "./m4s/witch-hunt-spreads.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 2,
                                "description": "Close to boss",
                                "imageUrl": "./m4s/witch-hunt-spreads.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 1,
                                "description": "Far from boss",
                                "imageUrl": "./m4s/witch-hunt-spreads.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 2,
                                "description": "Far from boss",
                                "imageUrl": "./m4s/witch-hunt-spreads.webp"
                            }
                        ]
                    }
                ]
            },
            {
                "phaseName": "Witch Hunt",
                "tag": "p1",
                "mechs": [
                    {
                        "mechanic": "Clone Baits",
                        "description": "4 triangles close = near bait\n3 triangles far = far bait\nPlayers not hit first must take baits",
                        "imageUrl": "./m4s/witch-hunt.webp"
                    }
                ]
            },
            {
                "phaseName": "Narrowing/Widening Witch Hunt",
                "tag": "p1",
                "mechs": [
                    {
                        "mechanic": "In/Out + Baits",
                        "description": "Narrowing = start in, Widening = start out\nSupports bait 1st & 2nd, DPS bait 3rd & 4th\nRanged far, Melee close",
                        "strats": [
                            {
                                "role": "Tank",
                                "party": 1,
                                "description": "North, close bait 2nd",
                                "imageUrl": "./m4s/narrowing-widening.webp"
                            },
                            {
                                "role": "Tank",
                                "party": 2,
                                "description": "North, close bait 2nd",
                                "imageUrl": "./m4s/narrowing-widening.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 1,
                                "description": "East, far bait 1st",
                                "imageUrl": "./m4s/narrowing-widening.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 2,
                                "description": "West, far bait 1st",
                                "imageUrl": "./m4s/narrowing-widening.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 1,
                                "description": "South, close bait 4th",
                                "imageUrl": "./m4s/narrowing-widening.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 2,
                                "description": "South, close bait 4th",
                                "imageUrl": "./m4s/narrowing-widening.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 1,
                                "description": "East, far bait 3rd",
                                "imageUrl": "./m4s/narrowing-widening.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 2,
                                "description": "West, far bait 3rd",
                                "imageUrl": "./m4s/narrowing-widening.webp"
                            }
                        ]
                    }
                ]
            },
            {
                "phaseName": "Electrope Edge 1",
                "tag": "p1",
                "mechs": [
                    {
                        "mechanic": "Cubes",
                        "description": "Track which cubes hit 1x vs 2x\n2x = unsafe quadrant, 1x = safe quadrant\n8 orbs = spread, 4 orbs = partners",
                        "imageUrl": "./m4s/electrope-edge-1-cubes.webp"
                    },
                    {
                        "mechanic": "Spread (8 orbs)",
                        "description": "Go to safe quadrant after cleave",
                        "strats": [
                            {
                                "role": "Tank",
                                "party": 1,
                                "description": "Under boss",
                                "imageUrl": "./m4s/electrope-edge-1-spread.webp"
                            },
                            {
                                "role": "Tank",
                                "party": 2,
                                "description": "Corner between melees",
                                "imageUrl": "./m4s/electrope-edge-1-spread.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 1,
                                "description": "Near cube, G1 left",
                                "imageUrl": "./m4s/electrope-edge-1-spread.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 2,
                                "description": "Near cube, G2 right",
                                "imageUrl": "./m4s/electrope-edge-1-spread.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 1,
                                "description": "Max melee left",
                                "imageUrl": "./m4s/electrope-edge-1-spread.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 2,
                                "description": "Max melee right",
                                "imageUrl": "./m4s/electrope-edge-1-spread.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 1,
                                "description": "Edge, G1 left",
                                "imageUrl": "./m4s/electrope-edge-1-spread.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 2,
                                "description": "Edge, G2 right",
                                "imageUrl": "./m4s/electrope-edge-1-spread.webp"
                            }
                        ]
                    },
                    {
                        "mechanic": "Partners (4 orbs)",
                        "description": "Go to safe quadrant after cleave",
                        "strats": [
                            {
                                "role": "Tank",
                                "party": 1,
                                "description": "Under boss with R1",
                                "imageUrl": "./m4s/electrope-edge-1-partners.webp"
                            },
                            {
                                "role": "Tank",
                                "party": 2,
                                "description": "Corner with R2",
                                "imageUrl": "./m4s/electrope-edge-1-partners.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 1,
                                "description": "Near cube with M1",
                                "imageUrl": "./m4s/electrope-edge-1-partners.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 2,
                                "description": "Near cube with M2",
                                "imageUrl": "./m4s/electrope-edge-1-partners.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 1,
                                "description": "Near cube with H1",
                                "imageUrl": "./m4s/electrope-edge-1-partners.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 2,
                                "description": "Near cube with H2",
                                "imageUrl": "./m4s/electrope-edge-1-partners.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 1,
                                "description": "Under boss with MT",
                                "imageUrl": "./m4s/electrope-edge-1-partners.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 2,
                                "description": "Corner with OT",
                                "imageUrl": "./m4s/electrope-edge-1-partners.webp"
                            }
                        ]
                    }
                ]
            },
            {
                "phaseName": "Electrope Edge 2",
                "tag": "p1",
                "mechs": [
                    {
                        "mechanic": "Debuffs",
                        "description": "Count hits (2 or 3), longs add +1\nSmiley face pattern appears\n2s = N corners, 3s = S corners, Longs = top",
                        "strats": [
                            {
                                "role": "Tank",
                                "party": 1,
                                "description": "Count hits, 2s=N corner, 3s=S corner\nLongs to top of smiley",
                                "imageUrl": "./m4s/electrope-edge-2.webp"
                            },
                            {
                                "role": "Tank",
                                "party": 2,
                                "description": "Count hits, 2s=N corner, 3s=S corner\nLongs to top of smiley",
                                "imageUrl": "./m4s/electrope-edge-2.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 1,
                                "description": "Count hits, 2s=N corner, 3s=S corner\nSupports left",
                                "imageUrl": "./m4s/electrope-edge-2.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 2,
                                "description": "Count hits, 2s=N corner, 3s=S corner\nSupports left",
                                "imageUrl": "./m4s/electrope-edge-2.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 1,
                                "description": "Count hits, 2s=N corner, 3s=S corner\nDPS right",
                                "imageUrl": "./m4s/electrope-edge-2.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 2,
                                "description": "Count hits, 2s=N corner, 3s=S corner\nDPS right",
                                "imageUrl": "./m4s/electrope-edge-2.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 1,
                                "description": "Count hits, 2s=N corner, 3s=S corner\nDPS right",
                                "imageUrl": "./m4s/electrope-edge-2.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 2,
                                "description": "Count hits, 2s=N corner, 3s=S corner\nDPS right",
                                "imageUrl": "./m4s/electrope-edge-2.webp"
                            }
                        ]
                    },
                    {
                        "mechanic": "Spread/Partners",
                        "description": "After first debuffs resolve:\n8 orbs = spread, 4 orbs = partners (longs only)\nRoles swap corners for second debuffs",
                        "imageUrl": "./m4s/electrope-edge-2-resolve.webp"
                    }
                ]
            },
            {
                "phaseName": "Ion Cannons",
                "tag": "p1",
                "mechs": [
                    {
                        "mechanic": "Color Debuffs",
                        "description": "Get hit by opposite color cannon\nTanks always first in line\n3 sets total, debuff color can change",
                        "strats": [
                            {
                                "role": "Tank",
                                "party": 1,
                                "description": "First in line for cannon\nOpposite color of your debuff",
                                "imageUrl": "./m4s/ion-cannons.webp"
                            },
                            {
                                "role": "Tank",
                                "party": 2,
                                "description": "First in line for cannon\nOpposite color of your debuff",
                                "imageUrl": "./m4s/ion-cannons.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 1,
                                "description": "Opposite color of debuff\nPurple=center, Tether=in front, Circle=small circles",
                                "imageUrl": "./m4s/ion-cannons.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 2,
                                "description": "Opposite color of debuff\nPurple=center, Tether=in front, Circle=small circles",
                                "imageUrl": "./m4s/ion-cannons.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 1,
                                "description": "Opposite color of debuff\nPurple=center, Tether=in front, Circle=small circles",
                                "imageUrl": "./m4s/ion-cannons.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 2,
                                "description": "Opposite color of debuff\nPurple=center, Tether=in front, Circle=small circles",
                                "imageUrl": "./m4s/ion-cannons.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 1,
                                "description": "Opposite color of debuff\nPurple=center, Tether=in front, Circle=small circles",
                                "imageUrl": "./m4s/ion-cannons.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 2,
                                "description": "Opposite color of debuff\nPurple=center, Tether=in front, Circle=small circles",
                                "imageUrl": "./m4s/ion-cannons.webp"
                            }
                        ]
                    },
                    {
                        "mechanic": "Cannon Debuffs",
                        "description": "Purple circle = center of tile\nTether = in front of purple\nBlue circle = small circles on tile edge",
                        "imageUrl": "./m4s/ion-cannon-debuffs.webp"
                    }
                ]
            },
            {
                "phaseName": "Transition",
                "tag": "p1",
                "mechs": [
                    {
                        "mechanic": "Cones + Wild Charge",
                        "description": "H+M north, T+R south\nDodge cones at intercards\nBlock for vuln partners on wild charges",
                        "strats": [
                            {
                                "role": "Tank",
                                "party": 1,
                                "description": "South, melee in front\nBlock for vuln partner if needed",
                                "imageUrl": "./m4s/transition.webp"
                            },
                            {
                                "role": "Tank",
                                "party": 2,
                                "description": "South, melee in front\nBlock for vuln partner if needed",
                                "imageUrl": "./m4s/transition.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 1,
                                "description": "North, ranged behind\nBlock for vuln partner if needed",
                                "imageUrl": "./m4s/transition.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 2,
                                "description": "North, ranged behind\nBlock for vuln partner if needed",
                                "imageUrl": "./m4s/transition.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 1,
                                "description": "North, melee in front\nBlock for vuln partner if needed",
                                "imageUrl": "./m4s/transition.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 2,
                                "description": "North, melee in front\nBlock for vuln partner if needed",
                                "imageUrl": "./m4s/transition.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 1,
                                "description": "South, ranged behind\nBlock for vuln partner if needed",
                                "imageUrl": "./m4s/transition.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 2,
                                "description": "South, ranged behind\nBlock for vuln partner if needed",
                                "imageUrl": "./m4s/transition.webp"
                            }
                        ]
                    }
                ]
            },
            {
                "phaseName": "Cross Tail Switch",
                "tag": "p2",
                "mechs": [
                    {
                        "mechanic": "Raidwide",
                        "description": "9 hits, Tank LB3 recommended\nUse heavy mitigation",
                        "imageUrl": "./m4s/cross-tail.webp"
                    }
                ]
            },
            {
                "phaseName": "Exaflares",
                "tag": "p2",
                "mechs": [
                    {
                        "mechanic": "LP Stacks",
                        "description": "G1 West, G2 East\nFind row going into wall, dodge into it\nHealers have stack markers",
                        "strats": [
                            {
                                "role": "Tank",
                                "party": 1,
                                "description": "G1 West edge",
                                "imageUrl": "./m4s/exaflares.webp"
                            },
                            {
                                "role": "Tank",
                                "party": 2,
                                "description": "G2 East edge",
                                "imageUrl": "./m4s/exaflares.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 1,
                                "description": "G1 West edge, stack on H1",
                                "imageUrl": "./m4s/exaflares.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 2,
                                "description": "G2 East edge, stack on H2",
                                "imageUrl": "./m4s/exaflares.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 1,
                                "description": "G1 West edge",
                                "imageUrl": "./m4s/exaflares.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 2,
                                "description": "G2 East edge",
                                "imageUrl": "./m4s/exaflares.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 1,
                                "description": "G1 West edge",
                                "imageUrl": "./m4s/exaflares.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 2,
                                "description": "G2 East edge",
                                "imageUrl": "./m4s/exaflares.webp"
                            }
                        ]
                    }
                ]
            },
            {
                "phaseName": "Wicked Special",
                "tag": "p2",
                "mechs": [
                    {
                        "mechanic": "Cleave",
                        "description": "Flame sword = center unsafe\nLightning tendrils = sides unsafe",
                        "imageUrl": "./m4s/wicked-special.webp"
                    }
                ]
            },
            {
                "phaseName": "Mustard Bomb",
                "tag": "p2",
                "mechs": [
                    {
                        "mechanic": "Spread + Rot",
                        "description": "MTTM row 1, RHHR row 2\nTanks pick up tethers, pass to leftmost/rightmost safe player",
                        "strats": [
                            {
                                "role": "Tank",
                                "party": 1,
                                "description": "Row 1, left\nPick up tether, pass to leftmost safe",
                                "imageUrl": "./m4s/mustard-bomb.webp"
                            },
                            {
                                "role": "Tank",
                                "party": 2,
                                "description": "Row 1, right\nPick up tether, pass to rightmost safe",
                                "imageUrl": "./m4s/mustard-bomb.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 1,
                                "description": "Row 2, left",
                                "imageUrl": "./m4s/mustard-bomb.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 2,
                                "description": "Row 2, right",
                                "imageUrl": "./m4s/mustard-bomb.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 1,
                                "description": "Row 1, inner left",
                                "imageUrl": "./m4s/mustard-bomb.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 2,
                                "description": "Row 1, inner right",
                                "imageUrl": "./m4s/mustard-bomb.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 1,
                                "description": "Row 2, inner left",
                                "imageUrl": "./m4s/mustard-bomb.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 2,
                                "description": "Row 2, inner right",
                                "imageUrl": "./m4s/mustard-bomb.webp"
                            }
                        ]
                    }
                ]
            },
            {
                "phaseName": "Aetherial Conversion",
                "tag": "p2",
                "mechs": [
                    {
                        "mechanic": "Tail Thrust",
                        "description": "Fire = large circle, dodge along north edge\nWater = knockback from red dots",
                        "imageUrl": "./m4s/aetherial-conversion.webp"
                    }
                ]
            },
            {
                "phaseName": "Twilight Sabbath",
                "tag": "p2",
                "mechs": [
                    {
                        "mechanic": "Clone Cleaves",
                        "description": "Drop puddles center\nWatch which ring drops first\nDodge to safe quadrant, then adjust for 2nd set + Wicked Special",
                        "strats": [
                            {
                                "role": "Tank",
                                "party": 1,
                                "description": "Drop puddles center\nDodge to safe quadrant",
                                "imageUrl": "./m4s/twilight-sabbath.webp"
                            },
                            {
                                "role": "Tank",
                                "party": 2,
                                "description": "Drop puddles center\nDodge to safe quadrant",
                                "imageUrl": "./m4s/twilight-sabbath.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 1,
                                "description": "Drop puddles center\nDodge to safe quadrant",
                                "imageUrl": "./m4s/twilight-sabbath.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 2,
                                "description": "Drop puddles center\nDodge to safe quadrant",
                                "imageUrl": "./m4s/twilight-sabbath.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 1,
                                "description": "Drop puddles center\nDodge to safe quadrant",
                                "imageUrl": "./m4s/twilight-sabbath.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 2,
                                "description": "Drop puddles center\nDodge to safe quadrant",
                                "imageUrl": "./m4s/twilight-sabbath.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 1,
                                "description": "Drop puddles center\nDodge to safe quadrant",
                                "imageUrl": "./m4s/twilight-sabbath.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 2,
                                "description": "Drop puddles center\nDodge to safe quadrant",
                                "imageUrl": "./m4s/twilight-sabbath.webp"
                            }
                        ]
                    }
                ]
            },
            {
                "phaseName": "Midnight Sabbath",
                "tag": "p2",
                "mechs": [
                    {
                        "mechanic": "Clone Cannon/Wings",
                        "description": "Pairs at intercards (MT/HR)\nCannon = move away, Wings = move under\nRotate CCW if needed\nBurst = stack, Scattered = spread",
                        "strats": [
                            {
                                "role": "Tank",
                                "party": 1,
                                "description": "NW intercard with M1\nCannon=move away, Wings=move under\nRotate CCW if needed",
                                "imageUrl": "./m4s/midnight-sabbath.webp"
                            },
                            {
                                "role": "Tank",
                                "party": 2,
                                "description": "SE intercard with M2\nCannon=move away, Wings=move under\nRotate CCW if needed",
                                "imageUrl": "./m4s/midnight-sabbath.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 1,
                                "description": "SW intercard with R1\nCannon=move away, Wings=move under\nRotate CCW if needed",
                                "imageUrl": "./m4s/midnight-sabbath.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 2,
                                "description": "NE intercard with R2\nCannon=move away, Wings=move under\nRotate CCW if needed",
                                "imageUrl": "./m4s/midnight-sabbath.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 1,
                                "description": "NW intercard with MT, in front\nCannon=move away, Wings=move under",
                                "imageUrl": "./m4s/midnight-sabbath.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 2,
                                "description": "SE intercard with OT, in front\nCannon=move away, Wings=move under",
                                "imageUrl": "./m4s/midnight-sabbath.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 1,
                                "description": "SW intercard with H1, behind\nCannon=move away, Wings=move under",
                                "imageUrl": "./m4s/midnight-sabbath.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 2,
                                "description": "NE intercard with H2, behind\nCannon=move away, Wings=move under",
                                "imageUrl": "./m4s/midnight-sabbath.webp"
                            }
                        ]
                    }
                ]
            },
            {
                "phaseName": "Chain Lightning",
                "tag": "p2",
                "mechs": [
                    {
                        "mechanic": "Towers + Swords",
                        "description": "G1 West, G2 East\nSoak towers TMHR north to south\nNote sword safe order, move to each safe sword",
                        "strats": [
                            {
                                "role": "Tank",
                                "party": 1,
                                "description": "G1 West\nSoak 1st tower (North)",
                                "imageUrl": "./m4s/chain-lightning.webp"
                            },
                            {
                                "role": "Tank",
                                "party": 2,
                                "description": "G2 East\nSoak 1st tower (North)",
                                "imageUrl": "./m4s/chain-lightning.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 1,
                                "description": "G1 West\nSoak 4th tower (South)",
                                "imageUrl": "./m4s/chain-lightning.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 2,
                                "description": "G2 East\nSoak 4th tower (South)",
                                "imageUrl": "./m4s/chain-lightning.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 1,
                                "description": "G1 West\nSoak 2nd tower",
                                "imageUrl": "./m4s/chain-lightning.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 2,
                                "description": "G2 East\nSoak 2nd tower",
                                "imageUrl": "./m4s/chain-lightning.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 1,
                                "description": "G1 West\nSoak 3rd tower",
                                "imageUrl": "./m4s/chain-lightning.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 2,
                                "description": "G2 East\nSoak 3rd tower",
                                "imageUrl": "./m4s/chain-lightning.webp"
                            }
                        ]
                    }
                ]
            },
            {
                "phaseName": "Sunrise Sabbath",
                "tag": "sunrise",
                "mechs": [
                    {
                        "mechanic": "AutoCAD",
                        "description": "Bait cannon on marker edge toward nearest tower\nN/S safe = N/S side of marker\nE/W safe = E/W side of marker",
                        "strats": [
                            {
                                "role": "Tank",
                                "party": 1,
                                "description": "Short: Bait cannon (opposite color)\nLong: Soak N/E tower (DPS)",
                                "imageUrl": "./m4s/sunrise-autocad.webp"
                            },
                            {
                                "role": "Tank",
                                "party": 2,
                                "description": "Short: Bait cannon (opposite color)\nLong: Soak N/E tower (DPS)",
                                "imageUrl": "./m4s/sunrise-autocad.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 1,
                                "description": "Short: Bait cannon (snake prio NW CCW)\nLong: Soak W/S tower (Supports)",
                                "imageUrl": "./m4s/sunrise-autocad.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 2,
                                "description": "Short: Bait cannon (snake prio NW CCW)\nLong: Soak W/S tower (Supports)",
                                "imageUrl": "./m4s/sunrise-autocad.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 1,
                                "description": "Short: Bait cannon (snake prio N CW)\nLong: Soak N/E tower (DPS)",
                                "imageUrl": "./m4s/sunrise-autocad.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 2,
                                "description": "Short: Bait cannon (snake prio N CW)\nLong: Soak N/E tower (DPS)",
                                "imageUrl": "./m4s/sunrise-autocad.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 1,
                                "description": "Short: Bait cannon (snake prio N CW)\nLong: Soak N/E tower (DPS)",
                                "imageUrl": "./m4s/sunrise-autocad.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 2,
                                "description": "Short: Bait cannon (snake prio N CW)\nLong: Soak N/E tower (DPS)",
                                "imageUrl": "./m4s/sunrise-autocad.webp"
                            }
                        ],
                        "alignmentKey": "sunrise",
                        "alignmentValue": "autocad"
                    },
                    {
                        "mechanic": "Normal",
                        "description": "Bait cannon into death wall away from tower\nStand near needle patterns",
                        "strats": [
                            {
                                "role": "Tank",
                                "party": 1,
                                "description": "Short: Bait cannon into wall\nLong: Soak N/E tower (DPS)",
                                "imageUrl": "./m4s/sunrise-normal.webp"
                            },
                            {
                                "role": "Tank",
                                "party": 2,
                                "description": "Short: Bait cannon into wall\nLong: Soak N/E tower (DPS)",
                                "imageUrl": "./m4s/sunrise-normal.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 1,
                                "description": "Short: Bait cannon into wall (snake prio)\nLong: Soak W/S tower (Supports)",
                                "imageUrl": "./m4s/sunrise-normal.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 2,
                                "description": "Short: Bait cannon into wall (snake prio)\nLong: Soak W/S tower (Supports)",
                                "imageUrl": "./m4s/sunrise-normal.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 1,
                                "description": "Short: Bait cannon into wall (snake prio)\nLong: Soak N/E tower (DPS)",
                                "imageUrl": "./m4s/sunrise-normal.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 2,
                                "description": "Short: Bait cannon into wall (snake prio)\nLong: Soak N/E tower (DPS)",
                                "imageUrl": "./m4s/sunrise-normal.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 1,
                                "description": "Short: Bait cannon into wall (snake prio)\nLong: Soak N/E tower (DPS)",
                                "imageUrl": "./m4s/sunrise-normal.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 2,
                                "description": "Short: Bait cannon into wall (snake prio)\nLong: Soak N/E tower (DPS)",
                                "imageUrl": "./m4s/sunrise-normal.webp"
                            }
                        ],
                        "alignmentKey": "sunrise",
                        "alignmentValue": "normal"
                    },
                    {
                        "mechanic": "Tower Priority",
                        "description": "Supports = W/S towers\nDPS = N/E towers\nSnake priority for cannon baits",
                        "imageUrl": "./m4s/sunrise-towers.webp"
                    }
                ]
            },
            {
                "phaseName": "Sword Quiver (Enrage)",
                "tag": "p2",
                "mechs": [
                    {
                        "mechanic": "Partner Stacks",
                        "description": "Melee pairs north, Ranged pairs south\n3 sets of line patterns, dodge the 4th line",
                        "strats": [
                            {
                                "role": "Tank",
                                "party": 1,
                                "description": "North, stack with M1",
                                "imageUrl": "./m4s/sword-quiver.webp"
                            },
                            {
                                "role": "Tank",
                                "party": 2,
                                "description": "North, stack with M2",
                                "imageUrl": "./m4s/sword-quiver.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 1,
                                "description": "South, stack with R1",
                                "imageUrl": "./m4s/sword-quiver.webp"
                            },
                            {
                                "role": "Healer",
                                "party": 2,
                                "description": "South, stack with R2",
                                "imageUrl": "./m4s/sword-quiver.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 1,
                                "description": "North, stack with MT",
                                "imageUrl": "./m4s/sword-quiver.webp"
                            },
                            {
                                "role": "Melee",
                                "party": 2,
                                "description": "North, stack with OT",
                                "imageUrl": "./m4s/sword-quiver.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 1,
                                "description": "South, stack with H1",
                                "imageUrl": "./m4s/sword-quiver.webp"
                            },
                            {
                                "role": "Ranged",
                                "party": 2,
                                "description": "South, stack with H2",
                                "imageUrl": "./m4s/sword-quiver.webp"
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
