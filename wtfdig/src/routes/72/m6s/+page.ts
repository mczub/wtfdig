import type { PageLoad } from "./$types";

export const load: PageLoad = ({params}) => {
    return {
        strats: [latteStrat, yukizuriStrat, toxicStrat],
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
    stratUrl: 'https://raidplan.io/plan/0066fd3CVp1_G36R',
    strats: [
        {
            phaseName: 'Wingmark/Double Style', 
            mechs: [
                {
                    mechanic: 'Stack/Spread',
                    description: 'G1 Left, G2 Right Facing Boss',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'LPs Left\nPartners Front with M1',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'LPs Right\nPartners Back with M2',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'LPs Left\nPartners Left with R1',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'LPs Right\nPartners Right with R2',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'LPs Left\nPartners Front with MT',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'LPs Right\nPartners Back with OT',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'LPs Left\nPartners Left with H1',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'LPs Right\nPartners Right with H2',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Sticky Mousse', 
            mechs: [
                {
                    mechanic: 'Stacks',
                    description: 'LPs -> Distance CW',
                },
            ]
        },
        {
            phaseName: 'Cactus Dodges', 
            mechs: [
                {
                    mechanic: 'Dodges',
                    description: 'North-ish',
                },
                {
                    mechanic: 'Short Defamations',
                    description: 'Tanks North-ish, DPS South-ish',
                },
            ]
        },
        {
            phaseName: 'Quicksand + Healer Defamations', 
            description: 'True North',
            mechs: [
                {
                    mechanic: 'Party + Healer Defamations',
                    description: 'Party across from unsafe corner\nH1 West, H2 East',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Across from unsafe corner',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Across from unsafe corner',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West corner next to cactus',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East corner next to cactus',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Across from unsafe corner',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Across from unsafe corner',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Across from unsafe corner',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Across from unsafe corner',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Quicksand + Bombs', 
            description: 'True North RMMR\nBlue tether goes in quicksand',
            mechs: [
                {
                    mechanic: 'Bombs',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'West close to boss',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'East close to boss',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West far from boss',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East far from boss',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'West close to boss',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'East close to boss',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West far from boss',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East far from boss',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Adds', 
            description: '',
            mechs: [
                {
                    mechanic: 'Wave 1',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: '1. Pull boss and 2 squirrels east\n2. Mitigate and AoE\n3. If cat jumps near, dodge AoE.',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: `1. Pull ram away from adds to avoid buffs.\n2. Mitigate and focus the ram until dead.\n3. If cat jumps near, focus the cat instead.`,
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: '1. Focus the cat.\n2. Once cat is dead, focus the ram.\n3. Then, join the MT and AoE the squirrels.',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: '1. Focus the cat.\n2. Once cat is dead, focus the ram.\n3. Then, join the MT and AoE the squirrels.',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: '1. Focus the ram.\n2. If cat jumps near ram, focus the cat instead.\n3. Then, join the MT and AoE the squirrels.',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: '1. Focus the ram.\n2. If cat jumps near ram, focus the cat instead.\n3. Then, join the MT and AoE the squirrels.',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West far from boss',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East far from boss',
                        },
                    ]
                },
                {
                    mechanic: 'Wave 2',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: '1. Grab 2 new squirrels.\n2. Wait for ranged to tether East ray.\n3. Bring everything to that ray.\n4. Mitigate and AoE.\n5. If you have AoE damage reduction on actions, target the rays.',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: '1. Once ram is dead, help AoE boss/squirrels.\n2. Wait for ranged to tether east ray.\n3. Kill east ray.\n4. Help ranged kill west ray.\n5. If you have AoE damage reduction on actions, target rays.',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: '1. Once ray targets a ranged, join MT and AoE all of them.\n2. Once this ray is dead, focus the other ray.',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: '1. Once ray targets a ranged, join MT and AoE all of them.\n2. Once this ray is dead, focus the other ray.',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: '1. Once ray targets a ranged, join MT and AoE all of them.\n2. Once this ray is dead, focus the other ray.',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: '1. Once ray targets a ranged, join MT and AoE all of them.\n2. Once this ray is dead, focus the other ray.',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West far from boss',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East far from boss',
                        },
                    ]
                },
                {
                    mechanic: 'Wave 3',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: `1. Jabber becomes targetable, bring adds and ST focus.\n2. Make sure ram is dead so it doesn't buff your adds.\n3. Stun priority is MT --> M1 --> M2.\n4. Kill squirrels before enrage.\n5. Kill cat.`,
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: '1. The party will deal with the jabber.\n2. Focus the new ram that spawns.',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: '1. If targeted by jabber, camp southeast.\n2. Free healer will ST jabber until dead.\n3. If out of range of any add, heal others.\n4. When within range, ST the jabber.\n5. AoE when jabber is dead.',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: '1. If targeted by jabber, camp southeast.\n2. Free healer will ST jabber until dead.\n3. If out of range of any add, heal others.\n4. When within range, ST the jabber.\n5. AoE when jabber is dead.',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: `1. Jabber becomes targetable, ST focus.\n2. Make sure ram is dead so it doesn't buff your adds.\n3. Stun priority is MT --> M1 --> M2.\n4. Kill squirrels before enrage. 5. Kill cat.`,
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: `1. Jabber becomes targetable, ST focus.\n2. Make sure ram is dead so it doesn't buff your adds.\n3. Stun priority is MT --> M1 --> M2.\n4. Kill squirrels before enrage. 5. Kill cat.`,
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West far from boss',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East far from boss',
                        },
                    ]
                },
                {
                    mechanic: 'Wave 4',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: `1. Pull boss and 2 new squirrels to the new jabber NORTH.\n2. Mitigate and AoE.\n3. Focus the jabber.\n4. Same stun priority.\n5. After jabber, kill east ray.\n6. Then kill west ray or cat.\n7. Dodge lines then focus rams.`,
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: '1. Another ram will spawn.\n2. Pull both rams SW to avoid buffs on other adds.\n3. Wait till every other add is dead (squirrels last to die), then bring rams to boss.',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: `1. Another jabber will spawn, ignore cat.\n2. If targeted by jabber,  camp southeast again.\n3. ST jabber and/or AoE anyone you can within range.\n4. Targeted healer leaves corner when jabber is dead.\n5. After jabber, focus east ray, then west ray or cat.\n6. Mitigate/heal raidwide, dodge lines, then AoE rams.`,
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: `1. Another jabber will spawn, ignore cat.\n2. If targeted by jabber,  camp southeast again.\n3. ST jabber and/or AoE anyone you can within range.\n4. Targeted healer leaves corner when jabber is dead.\n5. After jabber, focus east ray, then west ray or cat.\n6. Mitigate/heal raidwide, dodge lines, then AoE rams.`,
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: `1. Assist MT in killing new squirrels.\n2. ST focus the jabber once targetable.\n3. Same stun priority.\n4. After jabber, kill east ray.\n5. Then kill west ray or cat.\n6. Dodge lines then focus rams.`,
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: `1. Assist MT in killing new squirrels.\n2. ST focus the jabber once targetable.\n3. Same stun priority.\n4. After jabber, kill east ray.\n5. Then kill west ray or cat.\n6. Dodge lines then focus rams.`,
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West far from boss',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East far from boss',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Sugarscape (River)', 
            description: '',
            mechs: [
                {
                    mechanic: 'Lightning (Spreads)',
                    description: 'Modified clocks',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'West close to boss',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'East close to boss',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West far from boss',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East far from boss',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'West close to boss',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'East close to boss',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West far from boss',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East far from boss',
                        },
                    ]
                },
                {
                    mechanic: 'Fire (Spreads)',
                    description: 'G1 N/W G2 S/E',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'North/West',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'South/East',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'North/West',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South/East',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'North/West',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South/East',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'North/West',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South/East',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Lightning Storm', 
            description: 'Party stays on bridge\nFacing cloud, Supports Left, DPS Right',
        },
        {
            phaseName: 'Pudding Party', 
            description: 'Facing boss G1 Left, G2 Right',
            mechs: [
                {
                    mechanic: 'Towers',
                    notes: 'Remember to bait the Twister-style AoE when the Lightning flash happens',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Take Left tower closest to wall',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Take Right tower closest to wall',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Left platform\nTake the tower closest to the final puddle drop',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Right platform\nTake the tower closest to the final puddle drop',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Take Left tower near marker',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Take Right tower near marker',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Left platform\nTake the tower furthest from the final puddle drop',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Right platform\nTake the tower furthest from the final puddle drop',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Wingmark + Towers', 
            description: 'Melees + Tanks in the 4 tower platform',
            mechs: [
                {
                    mechanic: '4-2-2',
                    description: 'Healers + Melees closest to river\nFacing boss G1 Left, G2 Right',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Take Left tower furthest from river',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Take Right tower furthest from river',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Left platform\nTake the tower closest to river',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Right platform\nTake the tower closest to river',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Take Left tower closest to river',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Take Right tower closest to river',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Left platform\nTake the tower furthest from river',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Right platform\nTake the tower furthest from river',
                        },
                    ]
                },
                {
                    mechanic: '8-0-0',
                    description: 'True North',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Center North',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Center South',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Close South West',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Close South East',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'West',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'East',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Far South West',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Far South East',
                        },
                    ]
                },
            ]
        },
    ]
}

const yukizuriStrat: Strat = {
    stratName: 'yukizuri',
    description: 'Source: Video by Yukizuri',
    notes: '',
    stratUrl: 'https://www.youtube.com/watch?v=3IXGB5fqC4A',
    strats: [
        {
            phaseName: 'Under Construction', 
        }
    ],
}

const toxicStrat: Strat = {
    stratName: 'toxic',
    description: 'Source: Raidplan by Cute Animal @ Omega and Toxic Friends',
    notes: '',
    stratUrl: {
        'Start + Adds': 'https://raidplan.io/plan/Pgj53K49w8LAZpI6',
        'Desert': 'https://raidplan.io/plan/NWiAOP4kdekXg9mg',
        'Bridges': 'https://raidplan.io/plan/f0forhkOQMkVL3-I'
    },
    strats: [
        {
            phaseName: 'Under Construction', 
        }
    ],
}