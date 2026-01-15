import type { FightConfig, Strat, MechanicStrat } from '$lib/types';

// Toggle-dependent mechs for Mortal Slayer
const toxicMortalSlayer: MechanicStrat[] = [
    {
        mechanic: 'Conga Prio',
        description: 'Line up H1-M1-R1-R2-M2-H2\nTake balls in pairs in the order they spawned',
        imageUrl: './m12s/p1-toxic-mortal-conga.webp',
        url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#1'
    },
];

const roleMortalSlayer: MechanicStrat[] = [
    {
        mechanic: 'DPS/Support Sides',
        description: 'Support move to side with 2 purple orbs, DPS on 4 green orbs\nDPS: M1-M2-R1-R2\nSupport: H1-H2, Tanks take purples MT-OT',
        imageUrl: './m12s/p1-roles-mortal-sides.webp',
        url: 'https://raidplan.io/plan/KbxeCHoPkzWbt_HB#2',
    },
];

const mortalSlayerMechs: Record<string, MechanicStrat[]> = {
    toxic: toxicMortalSlayer,
    role: roleMortalSlayer
};

const shabinStrat: Strat = {
    stratName: 'shabin',
    description: 'pastebin.com/HzCeD1y4 - Identical to Modified for P1 (Toxic/Role Mortal)',
    notes: 'P2 still under construction, refer to original Pastebin/Raidplans for now',
    stratUrl: {
        'Shabin Pastebin': 'https://pastebin.com/HzCeD1y4',
        'Role Mortal Slayer': 'https://raidplan.io/plan/KbxeCHoPkzWbt_HB',
        'Toxic Friends P1 Raidplan (original)': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn',
        'Toxic Friends P1 Raidplan (minus Mortal Slayer)': 'https://raidplan.io/plan/m1AMDbG_jxkgkPRc',
        'P2: DN Replication Raidplan': 'https://raidplan.io/plan/9ncP6UIDURcWuRuO',
        'P2: DN Staging/Reenactment 1': 'https://raidplan.io/plan/ZacmNyJxptIVKNrK',
        'P2: Superstring Theory 3 Eletric Boogaloo': 'https://raidplan.io/plan/OnhUS061LkI3xlmg',
        'P2: DN Idyllic Dream': 'https://raidplan.io/plan/zoeminUT6l2gaOWp'
    },
    strats: [
        // P1: Lindwurm
        {
            phaseName: 'Mortal Slayer',
            tag: 'mortalslayer',
            description: 'Purple (TB) and Green (Spread) orbs hit the closest players on each side in the order they spawned\nCan hit two players on one side, make sure to watch spawns',
            mechs: mortalSlayerMechs
        },
        {
            phaseName: 'Grotesquerie: Act 1',
            tag: 'p1',
            mechs: [
                {
                    mechanic: 'Debuffs + Starting',
                    description: 'One role gets stack (red or no debuff), one role gets spread (yellow circle debuff)\nLoosely preposition near 1 marker NW for baits\nWatch blob on character model for cleave direction',
                    imageUrl: './m12s/p1-toxic-act1-debuffs.webp',
                    url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#6'
                },
                {
                    mechanic: 'Puddles',
                    description: 'Bait 4 puddles from 1 to A then middle\nMove behind dragon head after last bait',
                    imageUrl: './m12s/p1-toxic-act1-puddles.webp',
                    url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#7'
                },
                {
                    mechanic: 'Stack/Spread (DPS spread)',
                    description: 'If DPS spread, M1-M2-R1-R2 roughly North to South\nSupports on 1 or 2 marker, Tanks on North side, Supports on East/West\nPoint cleaves out of arena',
                    imageUrl: './m12s/p1-toxic-act1-dps.webp',
                    url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#8'
                },
                {
                    mechanic: 'Stack/Spread (Support spread)',
                    description: 'If Support spread, MT-OT-H1-H2 roughly North to South\nDPS on 1 or 2 marker, Melees on North side, Ranged on East/West\nPoint cleaves out of arena',
                    imageUrl: './m12s/p1-toxic-act1-supports.webp',
                    url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#9'
                },
                {
                    mechanic: 'Stack + TB',
                    description: 'Party stays for stack, Tanks sprint to opposite side\nSafe to stack tankbusters',
                    imageUrl: './m12s/p1-toxic-act1-tb.webp',
                    url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#10'
                }
            ]
        },
        {
            phaseName: 'Grotesquerie: Act 2',
            tag: 'p1',
            mechs: [
                {
                    mechanic: 'Cheatsheet',
                    description: '',
                    imageUrl: './m12s/p1-toxic-act2-cheatsheet.webp',
                    url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#21'
                },
                {
                    mechanic: 'Debuffs',
                    description: 'Each player gets a number (I, II, III, IV) and an A or B debuff\nEach player needs to break a chain and take a tower\nChains spawn when debuffs expire\nTowers spawn on chains after chains break and blobs after debuffs expire\nBreak chains in I-II-III-IV order\nTake towers in III-IV-I-II order',
                    imageUrl: './m12s/p1-toxic-act2-debuffs.webp',
                    url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#11'
                },
                {
                    mechanic: 'Blobs',
                    description: '4 blobs spawn in order\nParty gets sucked in and stays stacked',
                    imageUrl: './m12s/p1-toxic-act2-blobs.webp',
                    url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#12'
                },
                {
                    mechanic: '1 (I) Debuffs',
                    description: 'Stay middle until debuffs expire\nA: run out of snake to break, then take 3rd blob tower\nB: stay inside to break, then take 3rd chain tower',
                    imageUrl: './m12s/p1-toxic-act2-break1.webp',
                    url: {
                        'First break': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#13',
                        'Third towers': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#18'
                    },
                },
                {
                    mechanic: '2 (II) Debuffs',
                    description: 'Stay middle until debuffs expire\nA: run out of snake to break, then take 4rd blob tower\nB: stay inside to break, then take 4rd chain tower',
                    imageUrl: './m12s/p1-toxic-act2-break2.webp',
                    url: {
                        'Second break': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#15',
                        'Fourth towers': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#20'
                    },
                },
                {
                    mechanic: '3 (III) Debuffs',
                    description: 'Take towers inside snake, get back center, break chains\nA: take 1st blob tower, then run out of snake to break\nB: take 1st chain tower, then stay inside to break',
                    imageUrl: './m12s/p1-toxic-act2-towers1.webp',
                    url: {
                        'First towers': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#14',
                        'Third break': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#17'
                    },
                },
                {
                    mechanic: '4 (IV) Debuffs',
                    description: 'Take towers inside snake, get back center, break chains\nA: take 2nd blob tower, then run out of snake to break\nB: take 2nd chain tower, then stay inside to break',
                    imageUrl: './m12s/p1-toxic-act2-towers2.webp',
                    url: {
                        'Second towers': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#16',
                        'Fourth break': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#19'
                    },
                },
            ]
        },
        {
            phaseName: 'Grotesquerie: Act 3',
            tag: 'p1',
            description: 'Downtime Phase\nEach platform has 1 support and 1 DPS\nTowers spawn in blob direction like DSR P3',
            mechs: [
                {
                    mechanic: 'Platforms Cheatsheet',
                    description: '',
                    imageUrl: './m12s/p1-toxic-act3-cheatsheet.webp',
                    url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#28'

                },
                {
                    mechanic: 'Cardinal Platforms',
                    description: 'Go to platform depending on your blob direction',
                    imageUrl: './m12s/p1-toxic-act3-card-platforms.webp',
                    url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#22'
                },
                {
                    mechanic: 'Cardinal TBs',
                    description: 'Bait tankbusters north',
                    imageUrl: './m12s/p1-toxic-act3-card-tb.webp',
                    url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#23'
                },
                {
                    mechanic: 'Cardinal AOEs',
                    description: '3 eastmost and 3 westmost bait AOEs',
                    imageUrl: './m12s/p1-toxic-act3-card-aoe.webp',
                    url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#24'
                },
                {
                    mechanic: 'Intercard Platforms',
                    description: 'Go to platform depending on your blob direction\nRotate CW from your cardinal spot if intercards',
                    imageUrl: './m12s/p1-toxic-act3-inter-platforms.webp',
                    url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#25'
                },
                {
                    mechanic: 'Intercard TBs',
                    description: 'Bait tankbusters diagonally north',
                    imageUrl: './m12s/p1-toxic-act3-inter-tb.webp',
                    url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#26'
                },
                {
                    mechanic: 'Intercard AOEs',
                    description: '3 eastmost and 3 westmost bait AOEs',
                    imageUrl: './m12s/p1-toxic-act3-inter-aoe.webp',
                    url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#27'
                }
            ]
        },
        {
            phaseName: 'Grotesquerie: Curtain Call',
            tag: 'p1',
            mechs: [
                {
                    mechanic: 'Cardinal Puddles',
                    description: 'Group starts NW and baits 5 AOEs around North edge',
                    imageUrl: './m12s/p1-toxic-cc-card-puddles.webp',
                    url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#29'
                },
                {
                    mechanic: 'Cardinal Spreads',
                    description: 'Purple debuffs spread and get cleaved by head\nYellow debuffs spread in safespot',
                    imageUrl: './m12s/p1-toxic-cc-card-spreads.webp',
                    url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#30'
                },
                {
                    mechanic: 'Intercard Puddles',
                    description: 'Group baits 5 AOEs around NW platform',
                    imageUrl: './m12s/p1-toxic-cc-inter-puddles.webp',
                    url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#31'
                },
                {
                    mechanic: 'Intercard Spreads',
                    description: 'Purple debuffs spread and get cleaved by head\nYellow debuffs spread in safespot',
                    imageUrl: './m12s/p1-toxic-cc-inter-spreads.webp',
                    url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#32'
                },
                {
                    mechanic: 'Chain Start',
                    description: 'Stack middle and wait for chain to snapshot',
                    imageUrl: './m12s/p1-toxic-cc-chain-start.webp',
                    url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#33'
                },
                {
                    mechanic: 'Chain Break',
                    description: 'Spread to break chains\nSupports West, DPS East\nFrom N to S MT-OT-H1-H2, M1-M2-R1-R2',
                    imageUrl: './m12s/p1-toxic-cc-chain-break.webp',
                    url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#34'
                },
                {
                    mechanic: 'Blob Dodge',
                    description: 'Dodge to safe corners\nMelees/tanks can sprint in for uptime',
                    imageUrl: './m12s/p1-toxic-cc-blobs.webp',
                    url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#35'
                }
            ]
        },
        {
            phaseName: 'Slaughtershed',
            tag: 'p1',
            description: 'Repeats 3x',
            mechs: [
                {
                    mechanic: 'Start',
                    description: 'One role gets spread, one role gets stack\nBlobs spawn, leaving two safe corners North',
                    imageUrl: './m12s/p1-toxic-slaughter-start.webp',
                    url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#36'
                },
                {
                    mechanic: 'Stack/Spread',
                    description: 'Spreads in North corner with no blob\nStack in North corner with blob',
                    imageUrl: './m12s/p1-toxic-slaughter-stackspread.webp',
                    url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#37'
                },
                {
                    mechanic: 'Dragon Arms',
                    description: 'Dragons = half room cleaves',
                    imageUrl: './m12s/p1-toxic-slaughter-dragons.webp',
                    url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#38'
                },
                {
                    mechanic: 'Hands',
                    description: 'Hands = BIG knockback from corner',
                    imageUrl: './m12s/p1-toxic-slaughter-hands.webp',
                    url: 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn#39'
                },
            ]
        },
        // P2: Lindwurm II - placeholder
        {
            phaseName: 'P2 Under Construction',
            tag: 'p2',
            mechs: []
        }
    ]
};

const modifiedStrat: Strat = {
    stratName: 'modified',
    description: 'pastebin.com/qXLm3VJ0 - Identical to Shabin for P1 (Toxic/Role Mortal)',
    notes: 'P2 still under construction, refer to original Pastebin/Raidplans for now',
    stratUrl: {
        'Modified Pastebin': 'https://pastebin.com/qXLm3VJ0',
        'Role Mortal Slayer': 'https://raidplan.io/plan/KbxeCHoPkzWbt_HB',
        'Toxic Friends P1 Raidplan (original)': 'https://raidplan.io/plan/44JJjqZ6Mcgaxnnn',
        'Toxic Friends P1 Raidplan (minus Mortal Slayer)': 'https://raidplan.io/plan/m1AMDbG_jxkgkPRc',
        'P2: DN Replication Raidplan': 'https://raidplan.io/plan/9ncP6UIDURcWuRuO',
        'P2: Clone Zone': 'https://raidplan.io/plan/SFa6J6wDrU9PlCJ4',
        'P2: Superchain Theory': 'https://raidplan.io/plan/OnhUS061LkI3xlmg',
        'P2: DN Idyllic Dream': 'https://raidplan.io/plan/zoeminUT6l2gaOWp'
    },
    strats: shabinStrat.strats,
};

export const m12sStrats: Strat[] = [modifiedStrat, shabinStrat];

export const m12sFightConfig: FightConfig = {
    fightKey: "m12s",
    title: "AAC Heavyweight M4 (Savage)",
    abbreviatedTitle: "M12S",
    subtitle: "M12S Patch 7.4",
    cheatsheetTitle: "M12S Cheatsheet",
    useModernCheatsheet: true,
    strats: {
        modified: {
            label: "Modified (3VJ0)",
            defaults: {
                mortalslayer: "role"
            },
        },
        shabin: {
            label: "Shabin (D1y4)",
            defaults: {
                mortalslayer: "role"
            },
        },
    },
    toggles: [
        {
            key: "mortalslayer",
            label: "Mortal Slayer",
            defaultValue: "role",
            options: [
                {
                    value: "role",
                    label: "Role",
                    url: {
                        name: 'Role Mortal Slayer Raidplan',
                        url: 'https://raidplan.io/plan/KbxeCHoPkzWbt_HB'
                    }
                },
                {
                    value: "toxic",
                    label: "Toxic"
                }
            ]
        }
    ],
    tabTags: {
        "P1: Lindwurm": ["mortalslayer", "p1"],
        //"P2: Lindwurm II (Under Construction)": ["p2"]
    },
    useMainPageTabs: true,
    defaultStratName: "modified",
    timeline: []
};
