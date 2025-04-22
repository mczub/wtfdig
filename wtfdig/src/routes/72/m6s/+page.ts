import type { PageLoad } from "./$types";

export const load: PageLoad = ({params}) => {
    return {
        strats: [latteStrat, yukizuriStrat, toxicStrat],
        timeline: timeline,
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

export interface TimelineItem {
    mechName: string;
    mechType: string;
    startTimeMs: number;
}

const timeline: TimelineItem[] = [
    {
        mechName: 'Start',
        mechType: 'Start',
        startTimeMs: 0,
    },
    {
        mechName: 'Mousse Mural',
        mechType: 'Raidwide',
        startTimeMs: 11970
    },
    {
        mechName: 'Color Riot',
        mechType: 'Tankbuster',
        startTimeMs: 23149
    },
    {
        mechName: 'Wingmark (Cast)',
        mechType: 'StoredMechanic',
        startTimeMs: 35784
    },
    {
        mechName: 'Wingmark + Clash',
        mechType: 'Mechanic',
        startTimeMs: 56784
    },
    {
        mechName: 'Sticky Mousse',
        mechType: 'Mechanic',
        startTimeMs: 70872
    },
    {
        mechName: 'Color Riot',
        mechType: 'Tankbuster',
        startTimeMs: 82663
    },
    {
        mechName: 'Desert',
        mechType: 'Phase',
        startTimeMs: 91200
    },
    {
        mechName: 'Cactus Dodges',
        mechType: 'Mechanic',
        startTimeMs: 107545
    },
    {
        mechName: 'Brulee (Tank + DPS)',
        mechType: 'Mechanic',
        startTimeMs: 142318
    },
    {
        mechName: 'Sticky Mousse',
        mechType: 'Mechanic',
        startTimeMs: 150435
    },
    {
        mechName: 'Brulee (Healers)',
        mechType: 'Mechanic',
        startTimeMs: 177539
    },
    {
        mechName: 'Bombs',
        mechType: 'Mechanic',
        startTimeMs: 191002
    },
    {
        mechName: 'Mousse Mural',
        mechType: 'Raidwide',
        startTimeMs: 200135
    },
    {
        mechName: 'Color Riot',
        mechType: 'Tankbuster',
        startTimeMs: 208280
    },
    {
        mechName: 'Adds',
        mechType: 'Phase',
        startTimeMs: 218532
    },
    {
        mechName: 'Adds Wave 1',
        mechType: 'Mechanic',
        startTimeMs: 228798
    },
    {
        mechName: 'Adds Wave 2',
        mechType: 'Mechanic',
        startTimeMs: 257987
    },
    {
        mechName: 'Adds Wave 3',
        mechType: 'Mechanic',
        startTimeMs: 280149
    },
    {
        mechName: 'Jabber 1 Targetable',
        mechType: 'Mechanic',
        startTimeMs: 288248
    },
    {
        mechName: 'Ready Ore Not',
        mechType: 'Raidwide',
        startTimeMs: 307192
    },
    {
        mechName: 'Adds Wave 4',
        mechType: 'Mechanic',
        startTimeMs: 319455
    },
    {
        mechName: 'Jabber 2 Targetable',
        mechType: 'Mechanic',
        startTimeMs: 327648
    },
    {
        mechName: 'Ready Ore Not',
        mechType: 'Raidwide',
        startTimeMs: 390497
    },
    {
        mechName: 'Color Riot',
        mechType: 'Tankbuster',
        startTimeMs: 412855
    },
    {
        mechName: 'Mousse Mural',
        mechType: 'Raidwide',
        startTimeMs: 421004
    },
    {
        mechName: 'River',
        mechType: 'Phase',
        startTimeMs: 429535
    },
    {
        mechName: 'Double Style (Cast)',
        mechType: 'StoredMechanic',
        startTimeMs: 444697
    },
    {
        mechName: 'Fire/Lightning',
        mechType: 'Mechanic',
        startTimeMs: 454866
    },
    {
        mechName: 'Thunderstorm 1',
        mechType: 'Mechanic',
        startTimeMs: 481012
    },
    {
        mechName: 'Thunderstorm 2',
        mechType: 'Mechanic',
        startTimeMs: 491751
    },
    {
        mechName: 'Thunderstorm 3',
        mechType: 'Mechanic',
        startTimeMs: 502298
    },
    {
        mechName: 'Thunderstorm 4',
        mechType: 'Mechanic',
        startTimeMs: 513125
    },
    {
        mechName: 'Pudding Party',
        mechType: 'Raidwide',
        startTimeMs: 518217
    },
    {
        mechName: 'Lava',
        mechType: 'Phase',
        startTimeMs: 531646
    },
    {
        mechName: 'Puddles x4',
        mechType: 'Mechanic',
        startTimeMs: 548778
    },
    {
        mechName: 'Towers 1',
        mechType: 'Mechanic',
        startTimeMs: 567843
    },
    {
        mechName: 'Wingmark (Cast)',
        mechType: 'StoredMechanic',
        startTimeMs: 572104
    },
    {
        mechName: 'Wingmark',
        mechType: 'Mechanic',
        startTimeMs: 582104
    },
    {
        mechName: 'Towers 2',
        mechType: 'Mechanic',
        startTimeMs: 594372
    },
    {
        mechName: 'Mousse Mural',
        mechType: 'Raidwide',
        startTimeMs: 599304
    },
    {
        mechName: 'Sticky Mousse',
        mechType: 'Mechanic',
        startTimeMs: 609860
    },
    {
        mechName: 'Color Riot',
        mechType: 'Tankbuster',
        startTimeMs: 621624
    },
    {
        mechName: 'Wingmark (Cast)',
        mechType: 'StoredMechanic',
        startTimeMs: 634276
    },
    {
        mechName: 'Wingmark + Clash',
        mechType: 'Mechanic',
        startTimeMs: 651276
    },
    {
        mechName: 'Enrage',
        mechType: 'Enrage',
        startTimeMs: 684419,
    },
]

const toxicAdds: Record<string,Record<string, PlayerMechStrat>> = {
    'wave1': {
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Grab squirrels East, tank between C and 3',
                imageUrl: './m6s/adds/toxic-wave1.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `Grab Yan West`,
                imageUrl: './m6s/adds/toxic-wave1.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Stack on Boss + Squirrels to bait Cat, AOE Squirrels',
                imageUrl: './m6s/adds/toxic-wave1.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Stack on Boss + Squirrels to bait Cat, AOE Squirrels',
                imageUrl: './m6s/adds/toxic-wave1.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Hit Yan',
                imageUrl: './m6s/adds/toxic-wave1.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Hit Yan',
                imageUrl: './m6s/adds/toxic-wave1.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Stack on Boss + Squirrels to bait Cat, kill Cat',
                imageUrl: './m6s/adds/toxic-wave1.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Stack on Boss + Squirrels to bait Cat, kill Cat',
                imageUrl: './m6s/adds/toxic-wave1.webp',
        },
    },
    'wave2': {
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Pick up Squirrels South, bring them to NE Manta as soon as possible',
                imageUrl: './m6s/adds/toxic-wave2.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'If Yan is alive, bring it to NW Manta\nAfter Yan dies, Kill NW Manta then NE Manta',
                imageUrl: './m6s/adds/toxic-wave2.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Stand NE with Squirrels\nKill NW Manta first, then cleave NE Manta',
                imageUrl: './m6s/adds/toxic-wave2.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Stand NE with Squirrels\nKill NW Manta first, then cleave NE Manta',
                imageUrl: './m6s/adds/toxic-wave2.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Make sure Yan dies\nKill NW Manta first, then cleave NE Manta\nCleave the squirrels as much as possible',
                imageUrl: './m6s/adds/toxic-wave2.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Make sure Yan dies\nKill NW Manta first, then cleave NE Manta\nCleave the squirrels as much as possible',
                imageUrl: './m6s/adds/toxic-wave2.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Take NE Manta\nDrop first puddle in NE corner, then move South\nKill NW Manta first, then cleave NE Manta',
                imageUrl: './m6s/adds/toxic-wave2.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Take NW Manta\nDrop first puddle in NW corner, then move South\nKill NW Manta first, then cleave NE Manta',
                imageUrl: './m6s/adds/toxic-wave2.webp',
        },
    },
    'wave3':{
        'MT': {
                role: 'Tank',
                party: 1,
                description: `Take squirrels to South, then to Jabber spawn West\nFirst stun on Jabber\nKill remaining Squirrels`,
                imageUrl: './m6s/adds/toxic-wave3.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Pick up Yan North and chill',
                imageUrl: './m6s/adds/toxic-wave3.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'If targeted by Jabber, go Southeast and single target\nKill Jabber, then Squirrels, then Cat',
                imageUrl: './m6s/adds/toxic-wave3.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'If targeted by Jabber, go Southeast and single target\nKill Jabber, then Squirrels, then Cat',
                imageUrl: './m6s/adds/toxic-wave3.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: `Damage squirrels until Jabber spawns\nPrioritize Jabber, take second stun\nKill remaining Squirrels`,
                imageUrl: './m6s/adds/toxic-wave3.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: `Damage squirrels until Jabber spawns\nPrioritize Jabber, take third stun\nKill remaining Squirrels`,
                imageUrl: './m6s/adds/toxic-wave3.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: `Damage squirrels until Jabber spawns\nPrioritize Jabber\nKill remaining Squirrels before enrage\nKill cat before enrage`,
                imageUrl: './m6s/adds/toxic-wave3.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: `Damage squirrels until Jabber spawns\nPrioritize Jabber\nKill remaining Squirrels before enrage\nKill cat before enrage`,
                imageUrl: './m6s/adds/toxic-wave3.webp',
        },
    },
    'wave4':{
        'MT': {
                role: 'Tank',
                party: 1,
                description: `Take Squirrels to 2 marker, then to Jabber\nPrioritize Jabber, take first stun\nStack and kill SE Manta\nStack and kill SW Manta\nKill Squirrels\nKill Yans`,
                imageUrl: './m6s/adds/toxic-wave4.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Take Yans to 4 marker\nOnce Jabber dies, take Yans deep into SW corner\nAfter Squirrels die, take Yans to boss and kill\nCURRENT OBJECTIVE: SURVIVE',
                imageUrl: './m6s/adds/toxic-wave4.webp',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: `If targeted by Jabber, go Southeast and single target\nMake sure to keep OT alive\nKill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,
                imageUrl: './m6s/adds/toxic-wave4.webp',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: `If targeted by Jabber, go Southeast and single target\nMake sure to keep OT alive\nKill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,
                imageUrl: './m6s/adds/toxic-wave4.webp',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: `Hit Squirrels until Jabber spawns\nPrioritize Jabber, take second stun\nKill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,
                imageUrl: './m6s/adds/toxic-wave4.webp',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: `Hit Squirrels until Jabber spawns\nPrioritize Jabber, take second stun\nKill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,
                imageUrl: './m6s/adds/toxic-wave4.webp',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: `Take SW Manta\nKeep deep SW clear of puddles, feel free to use North\nHit Squirrels until Jabber spawns\nPrioritize Jabber\nKill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,
                imageUrl: './m6s/adds/toxic-wave4.webp',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: `Take SE Manta\nDrop puddles along East wall\nHit Squirrels until Jabber spawns\nPrioritize Jabber\nKill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,
                imageUrl: './m6s/adds/toxic-wave4.webp',
        },
    }
}

const latteAdds: Record<string,Record<string, PlayerMechStrat>> = {
    'wave1': {
        'MT': {
                role: 'Tank',
                party: 1,
                description: '1. Pull boss and 2 squirrels east\n2. Mitigate and AoE\n3. If cat jumps near, dodge AoE.',
                imageUrl: './m6s/adds/latte-mt.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `1. Pull ram away from adds to avoid buffs.\n2. Mitigate and focus the ram until dead.\n3. If cat jumps near, focus the cat instead.`,
                imageUrl: './m6s/adds/latte-ot.webp',
            },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '1. Focus the cat.\n2. Once cat is dead, focus the ram.\n3. Then, join the MT and AoE the squirrels.',
                imageUrl: './m6s/adds/latte-healer.webp',
            },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '1. Focus the cat.\n2. Once cat is dead, focus the ram.\n3. Then, join the MT and AoE the squirrels.',
                imageUrl: './m6s/adds/latte-healer.webp',
            },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '1. Focus the ram.\n2. If cat jumps near ram, focus the cat instead.\n3. Then, join the MT and AoE the squirrels.',
                imageUrl: './m6s/adds/latte-melee.webp',
            },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '1. Focus the ram.\n2. If cat jumps near ram, focus the cat instead.\n3. Then, join the MT and AoE the squirrels.',
                imageUrl: './m6s/adds/latte-melee.webp',
            },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '1. Focus the cat.\n2. Once cat is dead, focus the ram.\n3. Then, join the MT and AoE the squirrels.',
                imageUrl: './m6s/adds/latte-ranged.webp',
            },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '1. Focus the cat.\n2. Once cat is dead, focus the ram.\n3. Then, join the MT and AoE the squirrels.',
                imageUrl: './m6s/adds/latte-ranged.webp',
            },
    },
    'wave2': {
        'MT': {
                role: 'Tank',
                party: 1,
                description: '1. Grab 2 new squirrels.\n2. Wait for ranged to tether East ray.\n3. Bring everything to that ray.\n4. Mitigate and AoE.\n5. If you have AoE damage reduction on actions, target the rays.',
                imageUrl: './m6s/adds/latte-mt.webp',
            },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '1. Once ram is dead, help AoE boss/squirrels.\n2. Wait for ranged to tether east ray.\n3. Kill east ray.\n4. Help ranged kill west ray.\n5. If you have AoE damage reduction on actions, target rays.',
                imageUrl: './m6s/adds/latte-ot.webp',
            },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '1. Once ray targets a ranged, join MT and AoE all of them.\n2. Once this ray is dead, focus the other ray.',
                imageUrl: './m6s/adds/latte-healer.webp',
            },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '1. Once ray targets a ranged, join MT and AoE all of them.\n2. Once this ray is dead, focus the other ray.',
                imageUrl: './m6s/adds/latte-healer.webp',
            },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '1. Once ray targets a ranged, join MT and AoE all of them.\n2. Once this ray is dead, focus the other ray.',
                imageUrl: './m6s/adds/latte-melee.webp',
            },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '1. Once ray targets a ranged, join MT and AoE all of them.\n2. Once this ray is dead, focus the other ray.',
                imageUrl: './m6s/adds/latte-melee.webp',
            },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '1. Target Northwest ray.\n2. Bait puddles from north to south on the arena sides while attacking rays.\n3. If your targeted ray is dead, focus the other.\n4. Join MT and AoE squirrels until third spawn.',
                imageUrl: './m6s/adds/latte-ranged.webp',
            },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '1. Target Northeast ray.\n2. Bait puddles from north to south on the arena sides while attacking rays.\n3. If your targeted ray is ead, focus the other.\n4. Join MT and AoE squirrels until third spawn.',
                imageUrl: './m6s/adds/latte-ranged.webp',
            },
    },
    'wave3':{
        'MT': {
                role: 'Tank',
                party: 1,
                description: `1. Jabber becomes targetable, bring adds and ST focus.\n2. Make sure ram is dead so it doesn't buff your adds.\n3. Stun priority is MT --> M1 --> M2.\n4. Kill squirrels before enrage.\n5. Kill cat.`,
                imageUrl: './m6s/adds/latte-mt.webp',
            },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '1. The party will deal with the jabber.\n2. Focus the new ram that spawns.',
                imageUrl: './m6s/adds/latte-ot.webp',
            },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '1. If targeted by jabber, camp southeast.\n2. Free healer will ST jabber until dead.\n3. If out of range of any add, heal others.\n4. When within range, ST the jabber.\n5. AoE when jabber is dead.',
                imageUrl: './m6s/adds/latte-healer.webp',
            },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '1. If targeted by jabber, camp southeast.\n2. Free healer will ST jabber until dead.\n3. If out of range of any add, heal others.\n4. When within range, ST the jabber.\n5. AoE when jabber is dead.',
                imageUrl: './m6s/adds/latte-healer.webp',
            },
        'M1': {
                role: 'Melee',
                party: 1,
                description: `1. Jabber becomes targetable, ST focus.\n2. Make sure ram is dead so it doesn't buff your adds.\n3. Stun priority is MT --> M1 --> M2.\n4. Kill squirrels before enrage. 5. Kill cat.`,
                imageUrl: './m6s/adds/latte-melee.webp',
            },
        'M2': {
                role: 'Melee',
                party: 2,
                description: `1. Jabber becomes targetable, ST focus.\n2. Make sure ram is dead so it doesn't buff your adds.\n3. Stun priority is MT --> M1 --> M2.\n4. Kill squirrels before enrage. 5. Kill cat.`,
                imageUrl: './m6s/adds/latte-melee.webp',
            },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: `1. Jabber becomes targetable, ST focus.\n2. Make sure ram is dead so it doesn't buff your adds.\n3. Kill squirrels before enrage.\n4. Kill cat before fourth spawn.`,
                imageUrl: './m6s/adds/latte-ranged.webp',
            },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: `1. Jabber becomes targetable, ST focus.\n2. Make sure ram is dead so it doesn't buff your adds.\n3. Kill squirrels before enrage.\n4. Kill cat before fourth spawn.`,
                imageUrl: './m6s/adds/latte-ranged.webp',
            },
    },
    'wave4':{
        'MT': {
                role: 'Tank',
                party: 1,
                description: `1. Pull boss and 2 new squirrels to the new jabber NORTH.\n2. Mitigate and AoE.\n3. Focus the jabber.\n4. Same stun priority.\n5. After jabber, kill east ray.\n6. Kill cat then Southwest ray.\n7. Dodge lines then focus rams.`,
                imageUrl: './m6s/adds/latte-mt.webp',
            },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '1. Another ram will spawn.\n2. Pull both rams SW to avoid buffs on other adds.\n3. Wait till every other add is dead (squirrels last to die), then bring rams to boss.\nCURRENT OBJECTIVE: SURVIVE',
                imageUrl: './m6s/adds/latte-ot.webp',
            },
        'H1': {
                role: 'Healer',
                party: 1,
                description: `1. Another jabber will spawn, ignore cat.\n2. If targeted by jabber,  camp southeast again.\n3. ST jabber and/or AoE anyone you can within range.\n4. Targeted healer leaves corner when jabber is dead.\n5. After jabber, focus east ray, then cat, then west ray.\n6. Mitigate/heal raidwide, dodge lines, then AoE rams.`,
                imageUrl: './m6s/adds/latte-healer.webp',
            },
        'H2': {
                role: 'Healer',
                party: 2,
                description: `1. Another jabber will spawn, ignore cat.\n2. If targeted by jabber,  camp southeast again.\n3. ST jabber and/or AoE anyone you can within range.\n4. Targeted healer leaves corner when jabber is dead.\n5. After jabber, focus east ray, then cat, then west ray.\n6. Mitigate/heal raidwide, dodge lines, then AoE rams.`,
                imageUrl: './m6s/adds/latte-healer.webp',
            },
        'M1': {
                role: 'Melee',
                party: 1,
                description: `1. Assist MT in killing new squirrels.\n2. ST focus the jabber once targetable.\n3. Same stun priority.\n4. After jabber, kill east ray.\n5. Kill cat then Southwest ray.\n6. Dodge lines then focus rams.`,
                imageUrl: './m6s/adds/latte-melee.webp',
            },
        'M2': {
                role: 'Melee',
                party: 2,
                description: `1. Assist MT in killing new squirrels.\n2. ST focus the jabber once targetable.\n3. Same stun priority.\n4. After jabber, kill east ray.\n5. Kill cat then Southwest ray.\n6. Dodge lines then focus rams.`,
                imageUrl: './m6s/adds/latte-melee.webp',
            },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '1. Ignore cat.\n2. New rays spawn, take Southwest ray.\n3. Continue baiting the puddles.\n4. When jabber is targetable, ST focus it.\n5. After jabber is dead, focus Southeast ray.\n6. Kill cat then Southwest ray.\n7. Dodge lines, AoE rams.',
                imageUrl: './m6s/adds/latte-ranged.webp',
            },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '1. Ignore cat.\n2. New rays spawn, take Southeast ray.\n3. Continue baiting the puddles.\n4. When jabber is targetable, ST focus it.\n5. After jabber is dead, focus Southeast ray.\n6. Kill cat then Southwest ray.\n7. Dodge lines, AoE rams.',
                imageUrl: './m6s/adds/latte-ranged.webp',
            },
    }
}

const yukizuriAdds: Record<string,Record<string, PlayerMechStrat>> = {
    'wave1': {
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Tank boss and Squirrels East',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `Tank Yan West`,
            },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Stack on Yan to bait Cat jump\nFocus Cat, then focus Yan',
            },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Stack on Yan to bait Cat jump\nFocus Cat, then focus Yan',
            },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Stack on Yan to bait Cat jump\nFocus Cat if in range, if not focus Yan',
            },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Stack on Yan to bait Cat jump\nFocus Cat if in range, if not focus Yan',
            },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Stack on Yan to bait Cat jump\nFocus Cat, then focus Yan',
            },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Stack on Yan to bait Cat jump\nFocus Cat, then focus Yan',
            },
    },
    'wave2': {
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Pick up Squirrels South, bring them to NE Manta as soon as possible\n',
            },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'If Yan is alive, bring it to NW Manta\nAfter Yan dies, Kill NE Manta while cleaving Squirrels\nKill NW Manta, then move North for Wave 3',
            },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Stand NE with Squirrels\nKill NE Manta while cleaving Squirrels, then kill NW Manta',
            },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Stand NE with Squirrels\nKill NE Manta while cleaving Squirrels, then kill NW Manta',
            },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Stand NE with Squirrels\nKill NE Manta while cleaving Squirrels, then continue cleaving Squirrels'
            },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Stand NE with Squirrels\nKill NE Manta while cleaving Squirrels, then continue cleaving Squirrels',
            },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Take NW Manta\nDrop first puddle Northwest-ish, but leave room in the far corner for the second\nKill NE Manta first while cleaving, then kill NW Manta',
            },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Take NE Manta\nDrop first puddle Northeast, move south if a second drops\nKill NE Manta first while cleaving, then kill NW Manta',
            },
    },
    'wave3':{
        'MT': {
                role: 'Tank',
                party: 1,
                description: `Take squirrels to South, then to Jabber spawn West\nFirst stun on Jabber\nOnce Jabber is dead, kill remaining Squirrels before they enrage`,
            },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Pick up Yan North and chill',
            },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'If targeted by Jabber, go Southeast and single target\nKill Jabber\nKill Squirrels before they enrage\nKill Cat before 4th wave',
            },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'If targeted by Jabber, go Southeast and single target\nKill Jabber\nKill Squirrels before they enrage\nKill Cat before 4th wave',
            },
        'M1': {
                role: 'Melee',
                party: 1,
                description: `Damage squirrels until Jabber spawns\nPrioritize Jabber, take second stun\nKill Squirrels before they enrage\nKill Cat before 4th wave`,
            },
        'M2': {
                role: 'Melee',
                party: 2,
                description: `Damage squirrels until Jabber spawns\nPrioritize Jabber, take second stun\nKill Squirrels before they enrage\nKill Cat before 4th wave`,
            },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: `Damage squirrels until Jabber spawns\nPrioritize Jabber\nKill Squirrels before they enrage\nKill Cat before 4th wave`,
            },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: `Damage squirrels until Jabber spawns\nPrioritize Jabber\nKill Squirrels before they enrage\nKill Cat before 4th wave`,
            },
    },
    'wave4':{
        'MT': {
                role: 'Tank',
                party: 1,
                description: `Pick up new Squirrels, take them to Jabber\nPrioritize Jabber, take first stun\nStack and kill SE Manta\nStack and kill SW Manta and Cat in either order\nKill Squirrels\nKill Yans`,
            },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Pick up new Yan, take them to 4 marker\nOnce Jabber dies, take Yans deep into SW corner\nAfter Squirrels die, take Yans to boss and kill\nCURRENT OBJECTIVE: SURVIVE',
            },
        'H1': {
                role: 'Healer',
                party: 1,
                description: `If targeted by Jabber, go Southeast and single target\nMake sure to keep OT alive\nKill Jabber, SE Manta, SW Manta + Cat in either order, Squirrels, Yans`,
            },
        'H2': {
                role: 'Healer',
                party: 2,
                description: `If targeted by Jabber, go Southeast and single target\nMake sure to keep OT alive\nKill Jabber, SE Manta, SW Manta + Cat in either order, Squirrels, Yans`,
            },
        'M1': {
                role: 'Melee',
                party: 1,
                description: `Hit Squirrels until Jabber spawns\nPrioritize Jabber, take second stun\nKill Jabber, SE Manta, Cat, Squirrels, Yans`,
            },
        'M2': {
                role: 'Melee',
                party: 2,
                description: `Hit Squirrels until Jabber spawns\nPrioritize Jabber, take second stun\nKill Jabber, SE Manta, Cat, Squirrels, Yans`,
            },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Take SW Manta\nKeep deep SW clear of puddles, feel free to use North\nHit Squirrels until Jabber spawns\nPrioritize Jabber\nKill Jabber, SE Manta, SW Manta + Cat in either order, Squirrels, Yans',
            },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Take SE Manta\nDrop puddles along East wall\nHit Squirrels until Jabber spawns\nPrioritize Jabber\nKill Jabber, SE Manta, SW Manta + Cat in either order, Squirrels, Yans',
            },
    }
}

const cleaveAdds: Record<string,Record<string, PlayerMechStrat>> = {
    'wave1': {
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Tank boss and Squirrels East',
                imageUrl: './m6s/adds/cleave-wave1.webp',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `Tank Yan West`,
                imageUrl: './m6s/adds/cleave-wave1.webp',
            },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Stack on Yan to bait Cat jump\nFocus Yan, then focus Cat',
                imageUrl: './m6s/adds/cleave-wave1.webp',
            },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Stack on Yan to bait Cat jump\nFocus Yan, then focus Cat',
                imageUrl: './m6s/adds/cleave-wave1.webp',
            },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Stack on Yan to bait Cat jump\nFocus Yan, then focus Cat',
                imageUrl: './m6s/adds/cleave-wave1.webp',
            },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Stack on Yan to bait Cat jump\nFocus Yan, then focus Cat',
                imageUrl: './m6s/adds/cleave-wave1.webp',
            },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Stack on Yan to bait Cat jump\nFocus Yan, then focus Cat',
                imageUrl: './m6s/adds/cleave-wave1.webp',
            },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Stack on Yan to bait Cat jump\nFocus Yan, then focus Cat',
                imageUrl: './m6s/adds/cleave-wave1.webp',
            },
    },
    'wave2': {
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Pick up Squirrels South, bring them to NE Manta as soon as possible\nBring Squirrels to NW Manta when NE Manta dies',
                imageUrl: './m6s/adds/cleave-wave2.webp',
            },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Kill NE Manta while cleaving Squirrels\nKill NW Manta, then move North for Wave 3',
                imageUrl: './m6s/adds/cleave-wave2.webp',
            },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'One healer take NE Manta\nDrop first puddle Northeast, move south if a second drops\nIf not taking Manta, stand NE with Squirrels\nKill NE Manta while cleaving Squirrels, then kill NW Manta',
                imageUrl: './m6s/adds/cleave-wave2.webp',
            },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'One healer take NE Manta\nDrop first puddle Northeast, move south if a second drops\nIf not taking Manta, stand NE with Squirrels\nKill NE Manta while cleaving Squirrels, then kill NW Manta',
                imageUrl: './m6s/adds/cleave-wave2.webp',
            },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Stand NE with Squirrels\nKill NE Manta while cleaving Squirrels, then kill NW Manta\nContinue cleaving Squirrels',
                imageUrl: './m6s/adds/cleave-wave2.webp',
            },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Stand NE with Squirrels\nKill NE Manta while cleaving Squirrels, then kill NW Manta\nContinue cleaving Squirrels',
                imageUrl: './m6s/adds/cleave-wave2.webp',
            },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '\nKill NE Manta first while cleaving, then kill NW Manta',
                imageUrl: './m6s/adds/cleave-wave2.webp',
            },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Take NW Manta\nDrop first puddle Northwest-ish, but leave room in the far corner for the second\nKill NE Manta first while cleaving, then kill NW Manta',
                imageUrl: './m6s/adds/cleave-wave2.webp',
            },
    },
    'wave3':{
        'MT': {
                role: 'Tank',
                party: 1,
                description: `Take squirrels to South, then to Jabber spawn West\nFirst stun on Jabber\nOnce Jabber is dead, kill remaining Squirrels before they enrage`,
                imageUrl: './m6s/adds/cleave-wave3.webp',
            },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Pick up Yan North and chill',
                imageUrl: './m6s/adds/cleave-wave3.webp',
            },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'If targeted by Jabber, go Southeast and single target\nKill Jabber\nKill Squirrels before they enrage\nKill Cat before 4th wave',
                imageUrl: './m6s/adds/cleave-wave3.webp',
            },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'If targeted by Jabber, go Southeast and single target\nKill Jabber\nKill Squirrels before they enrage\nKill Cat before 4th wave',
                imageUrl: './m6s/adds/cleave-wave3.webp',
            },
        'M1': {
                role: 'Melee',
                party: 1,
                description: `Damage squirrels until Jabber spawns\nPrioritize Jabber, take second stun\nKill Squirrels before they enrage\nKill Cat before 4th wave\nHit boss if you can't hit the Cat`,
                imageUrl: './m6s/adds/cleave-wave3.webp',
            },
        'M2': {
                role: 'Melee',
                party: 2,
                description: `Damage squirrels until Jabber spawns\nPrioritize Jabber, take second stun\nKill Squirrels before they enrage\nKill Cat before 4th wave\nHit boss if you can't hit the Cat`,
                imageUrl: './m6s/adds/cleave-wave3.webp',
            },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: `Damage squirrels until Jabber spawns\nPrioritize Jabber\nKill Squirrels before they enrage\nKill Cat before 4th wave`,
                imageUrl: './m6s/adds/cleave-wave3.webp',
            },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: `Damage squirrels until Jabber spawns\nPrioritize Jabber\nKill Squirrels before they enrage\nKill Cat before 4th wave`,
                imageUrl: './m6s/adds/cleave-wave3.webp',
            },
    },
    'wave4':{
        'MT': {
                role: 'Tank',
                party: 1,
                description: `Pick up new Squirrels, take them to Jabber\nPrioritize Jabber, take first stun\nStack and kill SE Manta\nStack and kill SW Manta and Cat in either order\nKill Squirrels\nKill Yans`,
                imageUrl: './m6s/adds/cleave-wave4.webp',
            },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `Pick up new Yan, take them to 4 marker\nDon't get hit by Manta puddles\nAfter Squirrels die, take Yans to boss and kill\nCURRENT OBJECTIVE: SURVIVE`,
                imageUrl: './m6s/adds/cleave-wave4.webp',
            },
        'H1': {
                role: 'Healer',
                party: 1,
                description: `If targeted by Jabber, go South and single target\nMake sure to keep OT alive\nKill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,
                imageUrl: './m6s/adds/cleave-wave4.webp',
            },
        'H2': {
                role: 'Healer',
                party: 2,
                description: `If targeted by Jabber, go South and single target\nMake sure to keep OT alive\nKill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,
                imageUrl: './m6s/adds/cleave-wave4.webp',
            },
        'M1': {
                role: 'Melee',
                party: 1,
                description: `Hit Squirrels until Jabber spawns\nPrioritize Jabber, take second stun\nKill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,
                imageUrl: './m6s/adds/cleave-wave4.webp',
            },
        'M2': {
                role: 'Melee',
                party: 2,
                description: `Hit Squirrels until Jabber spawns\nPrioritize Jabber, take second stun\nKill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,
                imageUrl: './m6s/adds/cleave-wave4.webp',
            },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Take SW Manta\nDrop puddles along West wall, then go East once you hit the corner\nHit Squirrels until Jabber spawns\nPrioritize Jabber\nKill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans',
                imageUrl: './m6s/adds/cleave-wave4.webp',
            },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Take SE Manta\nDrop puddles along East wall, then go West once you hit the corner\nHit Squirrels until Jabber spawns\nPrioritize Jabber\nKill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans',
                imageUrl: './m6s/adds/cleave-wave4.webp',
            },
    }
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
                    mechanic: 'Light Parties',
                    description: 'G1 Left, G2 Right Facing Boss',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Left',
                            imageUrl: './m6s/toxic/double-lps.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Right',
                            imageUrl: './m6s/toxic/double-lps.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Left',
                            imageUrl: './m6s/toxic/double-lps.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Right',
                            imageUrl: './m6s/toxic/double-lps.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Left',
                            imageUrl: './m6s/toxic/double-lps.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Right',
                            imageUrl: './m6s/toxic/double-lps.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Left',
                            imageUrl: './m6s/toxic/double-lps.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Right',
                            imageUrl: './m6s/toxic/double-lps.webp'
                        },
                    ]
                },{
                    mechanic: 'Partners',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Front with M1',
                            imageUrl: './m6s/latte/double-partners.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Back with M2',
                            imageUrl: './m6s/latte/double-partners.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Left with R1',
                            imageUrl: './m6s/latte/double-partners.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Right with R2',
                            imageUrl: './m6s/latte/double-partners.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Front with MT',
                            imageUrl: './m6s/latte/double-partners.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Back with OT',
                            imageUrl: './m6s/latte/double-partners.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Left with H1',
                            imageUrl: './m6s/latte/double-partners.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Right with H2',
                            imageUrl: './m6s/latte/double-partners.webp'
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Sticky Mousse',
            description: 'Modified clocks, Tanks stack center',
            mechs: [
                {
                    mechanic: 'Stacks',
                    description: 'Distance prio, use eyes',
                    imageUrl: './m6s/latte/sticky.webp'
                },
            ]
        },
        {
            phaseName: 'Cactus Dodges', 
            mechs: [
                {
                    mechanic: 'Dodges',
                    description: 'North-ish, then stack Center',
                    imageUrl: './m6s/latte/desert-dodges.webp'
                },
                {
                    mechanic: 'Short Defamations',
                    description: 'Tanks NW-ish, DPS NE-ish',
                    imageUrl: './m6s/latte/desert-dodges.webp'
                },
            ]
        },
        {
            phaseName: 'Quicksand + Healer Defamations', 
            description: 'True North, H1 West, H2 East',
            mechs: [
                {
                    mechanic: 'Party + Healer Defamations',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Across from unsafe corner',
                            imageUrl: './m6s/latte/desert-healers.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Across from unsafe corner',
                            imageUrl: './m6s/latte/desert-healers.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West corner next to cactus',
                            imageUrl: './m6s/latte/desert-healers.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East corner next to cactus',
                            imageUrl: './m6s/latte/desert-healers.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Across from unsafe corner',
                            imageUrl: './m6s/latte/desert-healers.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Across from unsafe corner',
                            imageUrl: './m6s/latte/desert-healers.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Across from unsafe corner',
                            imageUrl: './m6s/latte/desert-healers.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Across from unsafe corner',
                            imageUrl: './m6s/latte/desert-healers.webp'
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
                            imageUrl: './m6s/latte/desert-bombs.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'East close to boss',
                            imageUrl: './m6s/latte/desert-bombs.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West far from boss',
                            imageUrl: './m6s/latte/desert-bombs.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East far from boss',
                            imageUrl: './m6s/latte/desert-bombs.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'West close to boss',
                            imageUrl: './m6s/latte/desert-bombs.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'East close to boss',
                            imageUrl: './m6s/latte/desert-bombs.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West far from boss',
                            imageUrl: './m6s/latte/desert-bombs.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East far from boss',
                            imageUrl: './m6s/latte/desert-bombs.webp'
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Adds', 
            tag: 'adds',
            description: '',
            mechs: [
                {
                    mechanic: 'Wave 1',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave1']['MT']['description'] as string,
                                latte: latteAdds['wave1']['MT']['description'] as string,
                                yukizuri: yukizuriAdds['wave1']['MT']['description'] as string,
                                cleave: cleaveAdds['wave1']['MT']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave1']['MT']['imageUrl'] as string,
                                latte: latteAdds['wave1']['MT']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave1']['MT']['imageUrl'] as string,
                                cleave: cleaveAdds['wave1']['MT']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave1']['OT']['description'] as string,
                                latte: latteAdds['wave1']['OT']['description'] as string,
                                yukizuri: yukizuriAdds['wave1']['OT']['description'] as string,
                                cleave: cleaveAdds['wave1']['OT']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave1']['OT']['imageUrl'] as string,
                                latte: latteAdds['wave1']['OT']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave1']['OT']['imageUrl'] as string,
                                cleave: cleaveAdds['wave1']['OT']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave1']['H1']['description'] as string,
                                latte: latteAdds['wave1']['H1']['description'] as string,
                                yukizuri: yukizuriAdds['wave1']['H1']['description'] as string,
                                cleave: cleaveAdds['wave1']['H1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave1']['H1']['imageUrl'] as string,
                                latte: latteAdds['wave1']['H1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave1']['H1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave1']['H1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave1']['H2']['description'] as string,
                                latte: latteAdds['wave1']['H2']['description'] as string,
                                yukizuri: yukizuriAdds['wave1']['H2']['description'] as string,
                                cleave: cleaveAdds['wave1']['H2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave1']['H2']['imageUrl'] as string,
                                latte: latteAdds['wave1']['H2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave1']['H2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave1']['H2']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave1']['M1']['description'] as string,
                                latte: latteAdds['wave1']['M1']['description'] as string,
                                yukizuri: yukizuriAdds['wave1']['M1']['description'] as string,
                                cleave: cleaveAdds['wave1']['M1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave1']['M1']['imageUrl'] as string,
                                latte: latteAdds['wave1']['M1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave1']['M1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave1']['M1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave1']['M2']['description'] as string,
                                latte: latteAdds['wave1']['M2']['description'] as string,
                                yukizuri: yukizuriAdds['wave1']['M2']['description'] as string,
                                cleave: cleaveAdds['wave1']['M2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave1']['M2']['imageUrl'] as string,
                                latte: latteAdds['wave1']['M2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave1']['M2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave1']['M2']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave1']['R1']['description'] as string,
                                latte: latteAdds['wave1']['R1']['description'] as string,
                                yukizuri: yukizuriAdds['wave1']['R1']['description'] as string,
                                cleave: cleaveAdds['wave1']['R1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave1']['R1']['imageUrl'] as string,
                                latte: latteAdds['wave1']['R1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave1']['R1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave1']['R1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave1']['R2']['description'] as string,
                                latte: latteAdds['wave1']['R2']['description'] as string,
                                yukizuri: yukizuriAdds['wave1']['R2']['description'] as string,
                                cleave: cleaveAdds['wave1']['R2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave1']['R2']['imageUrl'] as string,
                                latte: latteAdds['wave1']['R2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave1']['R2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave1']['R2']['imageUrl'] as string,
                            }
                        },
                    ]
                },
                {
                    mechanic: 'Wave 2',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave2']['MT']['description'] as string,
                                latte: latteAdds['wave2']['MT']['description'] as string,
                                yukizuri: yukizuriAdds['wave2']['MT']['description'] as string,
                                cleave: cleaveAdds['wave2']['MT']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave2']['MT']['imageUrl'] as string,
                                latte: latteAdds['wave2']['MT']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave2']['MT']['imageUrl'] as string,
                                cleave: cleaveAdds['wave2']['MT']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave2']['OT']['description'] as string,
                                latte: latteAdds['wave2']['OT']['description'] as string,
                                yukizuri: yukizuriAdds['wave2']['OT']['description'] as string,
                                cleave: cleaveAdds['wave2']['OT']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave2']['OT']['imageUrl'] as string,
                                latte: latteAdds['wave2']['OT']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave2']['OT']['imageUrl'] as string,
                                cleave: cleaveAdds['wave2']['OT']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave2']['H1']['description'] as string,
                                latte: latteAdds['wave2']['H1']['description'] as string,
                                yukizuri: yukizuriAdds['wave2']['H1']['description'] as string,
                                cleave: cleaveAdds['wave2']['H1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave2']['H1']['imageUrl'] as string,
                                latte: latteAdds['wave2']['H1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave2']['H1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave2']['H1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave2']['H2']['description'] as string,
                                latte: latteAdds['wave2']['H2']['description'] as string,
                                yukizuri: yukizuriAdds['wave2']['H2']['description'] as string,
                                cleave: cleaveAdds['wave2']['H2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave2']['H2']['imageUrl'] as string,
                                latte: latteAdds['wave2']['H2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave2']['H2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave2']['H2']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave2']['M1']['description'] as string,
                                latte: latteAdds['wave2']['M1']['description'] as string,
                                yukizuri: yukizuriAdds['wave2']['M1']['description'] as string,
                                cleave: cleaveAdds['wave2']['M1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave2']['M1']['imageUrl'] as string,
                                latte: latteAdds['wave2']['M1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave2']['M1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave2']['M1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave2']['M2']['description'] as string,
                                latte: latteAdds['wave2']['M2']['description'] as string,
                                yukizuri: yukizuriAdds['wave2']['M2']['description'] as string,
                                cleave: cleaveAdds['wave2']['M2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave2']['M2']['imageUrl'] as string,
                                latte: latteAdds['wave2']['M2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave2']['M2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave2']['M2']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave2']['R1']['description'] as string,
                                latte: latteAdds['wave2']['R1']['description'] as string,
                                yukizuri: yukizuriAdds['wave2']['R1']['description'] as string,
                                cleave: cleaveAdds['wave2']['R1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave2']['R1']['imageUrl'] as string,
                                latte: latteAdds['wave2']['R1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave2']['R1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave2']['R1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave2']['R2']['description'] as string,
                                latte: latteAdds['wave2']['R2']['description'] as string,
                                yukizuri: yukizuriAdds['wave2']['R2']['description'] as string,
                                cleave: cleaveAdds['wave2']['R2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave2']['R2']['imageUrl'] as string,
                                latte: latteAdds['wave2']['R2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave2']['R2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave2']['R2']['imageUrl'] as string,
                            }
                        },
                    ]
                },
                {
                    mechanic: 'Wave 3',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave3']['MT']['description'] as string,
                                latte: latteAdds['wave3']['MT']['description'] as string,
                                yukizuri: yukizuriAdds['wave3']['MT']['description'] as string,
                                cleave: cleaveAdds['wave3']['MT']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave3']['MT']['imageUrl'] as string,
                                latte: latteAdds['wave3']['MT']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave3']['MT']['imageUrl'] as string,
                                cleave: cleaveAdds['wave3']['MT']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave3']['OT']['description'] as string,
                                latte: latteAdds['wave3']['OT']['description'] as string,
                                yukizuri: yukizuriAdds['wave3']['OT']['description'] as string,
                                cleave: cleaveAdds['wave3']['OT']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave3']['OT']['imageUrl'] as string,
                                latte: latteAdds['wave3']['OT']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave3']['OT']['imageUrl'] as string,
                                cleave: cleaveAdds['wave3']['OT']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave3']['H1']['description'] as string,
                                latte: latteAdds['wave3']['H1']['description'] as string,
                                yukizuri: yukizuriAdds['wave3']['H1']['description'] as string,
                                cleave: cleaveAdds['wave3']['H1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave3']['H1']['imageUrl'] as string,
                                latte: latteAdds['wave3']['H1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave3']['H1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave3']['H1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave3']['H2']['description'] as string,
                                latte: latteAdds['wave3']['H2']['description'] as string,
                                yukizuri: yukizuriAdds['wave3']['H2']['description'] as string,
                                cleave: cleaveAdds['wave3']['H2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave3']['H2']['imageUrl'] as string,
                                latte: latteAdds['wave3']['H2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave3']['H2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave3']['H2']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave3']['M1']['description'] as string,
                                latte: latteAdds['wave3']['M1']['description'] as string,
                                yukizuri: yukizuriAdds['wave3']['M1']['description'] as string,
                                cleave: cleaveAdds['wave3']['M1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave3']['M1']['imageUrl'] as string,
                                latte: latteAdds['wave3']['M1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave3']['M1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave3']['M1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave3']['M2']['description'] as string,
                                latte: latteAdds['wave3']['M2']['description'] as string,
                                yukizuri: yukizuriAdds['wave3']['M2']['description'] as string,
                                cleave: cleaveAdds['wave3']['M2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave3']['M2']['imageUrl'] as string,
                                latte: latteAdds['wave3']['M2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave3']['M2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave3']['M2']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave3']['R1']['description'] as string,
                                latte: latteAdds['wave3']['R1']['description'] as string,
                                yukizuri: yukizuriAdds['wave3']['R1']['description'] as string,
                                cleave: cleaveAdds['wave3']['R1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave3']['R1']['imageUrl'] as string,
                                latte: latteAdds['wave3']['R1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave3']['R1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave3']['R1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave3']['R2']['description'] as string,
                                latte: latteAdds['wave3']['R2']['description'] as string,
                                yukizuri: yukizuriAdds['wave3']['R2']['description'] as string,
                                cleave: cleaveAdds['wave3']['R2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave3']['R2']['imageUrl'] as string,
                                latte: latteAdds['wave3']['R2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave3']['R2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave3']['R2']['imageUrl'] as string,
                            }
                        },
                    ]
                },
                {
                    mechanic: 'Wave 4',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave4']['MT']['description'] as string,
                                latte: latteAdds['wave4']['MT']['description'] as string,
                                yukizuri: yukizuriAdds['wave4']['MT']['description'] as string,
                                cleave: cleaveAdds['wave4']['MT']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave4']['MT']['imageUrl'] as string,
                                latte: latteAdds['wave4']['MT']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave4']['MT']['imageUrl'] as string,
                                cleave: cleaveAdds['wave4']['MT']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave4']['OT']['description'] as string,
                                latte: latteAdds['wave4']['OT']['description'] as string,
                                yukizuri: yukizuriAdds['wave4']['OT']['description'] as string,
                                cleave: cleaveAdds['wave4']['OT']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave4']['OT']['imageUrl'] as string,
                                latte: latteAdds['wave4']['OT']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave4']['OT']['imageUrl'] as string,
                                cleave: cleaveAdds['wave4']['OT']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave4']['H1']['description'] as string,
                                latte: latteAdds['wave4']['H1']['description'] as string,
                                yukizuri: yukizuriAdds['wave4']['H1']['description'] as string,
                                cleave: cleaveAdds['wave4']['H1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave4']['H1']['imageUrl'] as string,
                                latte: latteAdds['wave4']['H1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave4']['H1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave4']['H1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave4']['H2']['description'] as string,
                                latte: latteAdds['wave4']['H2']['description'] as string,
                                yukizuri: yukizuriAdds['wave4']['H2']['description'] as string,
                                cleave: cleaveAdds['wave4']['H2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave4']['H2']['imageUrl'] as string,
                                latte: latteAdds['wave4']['H2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave4']['H2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave4']['H2']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave4']['M1']['description'] as string,
                                latte: latteAdds['wave4']['M1']['description'] as string,
                                yukizuri: yukizuriAdds['wave4']['M1']['description'] as string,
                                cleave: cleaveAdds['wave4']['M1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave4']['M1']['imageUrl'] as string,
                                latte: latteAdds['wave4']['M1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave4']['M1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave4']['M1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave4']['M2']['description'] as string,
                                latte: latteAdds['wave4']['M2']['description'] as string,
                                yukizuri: yukizuriAdds['wave4']['M2']['description'] as string,
                                cleave: cleaveAdds['wave4']['M2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave4']['M2']['imageUrl'] as string,
                                latte: latteAdds['wave4']['M2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave4']['M2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave4']['M2']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave4']['R1']['description'] as string,
                                latte: latteAdds['wave4']['R1']['description'] as string,
                                yukizuri: yukizuriAdds['wave4']['R1']['description'] as string,
                                cleave: cleaveAdds['wave4']['R1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave4']['R1']['imageUrl'] as string,
                                latte: latteAdds['wave4']['R1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave4']['R1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave4']['R1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave4']['R2']['description'] as string,
                                latte: latteAdds['wave4']['R2']['description'] as string,
                                yukizuri: yukizuriAdds['wave4']['R2']['description'] as string,
                                cleave: cleaveAdds['wave4']['R2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave4']['R2']['imageUrl'] as string,
                                latte: latteAdds['wave4']['R2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave4']['R2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave4']['R2']['imageUrl'] as string,
                            }
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
                            description: 'Center',
                            imageUrl: './m6s/latte/river-lightning.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'North (near A marker)',
                            imageUrl: './m6s/latte/river-lightning.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Southwest (near 4 marker)',
                            imageUrl: './m6s/latte/river-lightning.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Southeast (near 3 marker)',
                            imageUrl: './m6s/latte/river-lightning.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'West (near D marker)',
                            imageUrl: './m6s/latte/river-lightning.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'East (near B marker)',
                            imageUrl: './m6s/latte/river-lightning.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Northwest (near 1 marker)',
                            imageUrl: './m6s/latte/river-lightning.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Northeast (near 2 marker)',
                            imageUrl: './m6s/latte/river-lightning.webp'
                        },
                    ]
                },
                {
                    mechanic: 'Fire (Stacks)',
                    description: 'MT H1 Melee Center, OT H2 Ranged Far',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Middle',
                            imageUrl: './m6s/latte/river-fire.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Far',
                            imageUrl: './m6s/latte/river-fire.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Middle',
                            imageUrl: './m6s/latte/river-fire.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Far',
                            imageUrl: './m6s/latte/river-fire.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Middle',
                            imageUrl: './m6s/latte/river-fire.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Middle',
                            imageUrl: './m6s/latte/river-fire.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Far',
                            imageUrl: './m6s/latte/river-fire.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Far',
                            imageUrl: './m6s/latte/river-fire.webp'
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Lightning Storm', 
            description: 'Party stays on bridge\nFacing cloud, Supports Left, DPS Right',
            imageUrl: './m6s/latte/storm.webp'
        },
        {
            phaseName: 'Pudding Party', 
            description: 'True North\nG1 West G2 East',
            mechs: [
                {
                    mechanic: 'Towers',
                    notes: 'Remember to bait the Twister-style AoE when the Lightning flash happens',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Take Left tower closest to wall',
                            imageUrl: './m6s/latte/pudding-towers.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Take Right tower closest to wall',
                            imageUrl: './m6s/latte/pudding-towers.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West platform\nTake the tower closest to the final puddle drop',
                            imageUrl: './m6s/latte/pudding-towers.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East platform\nTake the tower closest to the final puddle drop',
                            imageUrl: './m6s/latte/pudding-towers.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Take Left tower near marker',
                            imageUrl: './m6s/latte/pudding-towers.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Take Right tower near marker',
                            imageUrl: './m6s/latte/pudding-towers.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West platform\nTake the tower furthest from the final puddle drop',
                            imageUrl: './m6s/latte/pudding-towers.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East platform\nTake the tower furthest from the final puddle drop',
                            imageUrl: './m6s/latte/pudding-towers.webp'
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Wingmark + Towers', 
            description: 'Melees + Tanks in the 4 tower platform\nEveryone rotate the same direction',
            mechs: [
                {
                    mechanic: '4-2-2',
                    description: 'Healers + Melees closest to river',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Take Left tower furthest from river',
                            imageUrl: './m6s/latte/pudding-422.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Take Right tower furthest from river',
                            imageUrl: './m6s/latte/pudding-422.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Left platform\nTake the tower closest to river',
                            imageUrl: './m6s/latte/pudding-422.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Right platform\nTake the tower closest to river',
                            imageUrl: './m6s/latte/pudding-422.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Take Left tower closest to river',
                            imageUrl: './m6s/latte/pudding-422.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Take Right tower closest to river',
                            imageUrl: './m6s/latte/pudding-422.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Left platform\nTake the tower furthest from river',
                            imageUrl: './m6s/latte/pudding-422.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Right platform\nTake the tower furthest from river',
                            imageUrl: './m6s/latte/pudding-422.webp'
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
                            description: 'West',
                            imageUrl: './m6s/latte/pudding-800.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Center South',
                            imageUrl: './m6s/latte/pudding-800.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Close South East',
                            imageUrl: './m6s/latte/pudding-800.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Center North',
                            imageUrl: './m6s/latte/pudding-800.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Close South West',
                            imageUrl: './m6s/latte/pudding-800.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Close North West',
                            imageUrl: './m6s/latte/pudding-800.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Far North East',
                            imageUrl: './m6s/latte/pudding-800.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Far South East',
                            imageUrl: './m6s/latte/pudding-800.webp'
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
            phaseName: 'Adds', 
            tag: 'adds',
            description: '',
            mechs: [
                {
                    mechanic: 'Wave 1',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave1']['MT']['description'] as string,
                                latte: latteAdds['wave1']['MT']['description'] as string,
                                yukizuri: yukizuriAdds['wave1']['MT']['description'] as string,
                                cleave: cleaveAdds['wave1']['MT']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave1']['MT']['imageUrl'] as string,
                                latte: latteAdds['wave1']['MT']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave1']['MT']['imageUrl'] as string,
                                cleave: cleaveAdds['wave1']['MT']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave1']['OT']['description'] as string,
                                latte: latteAdds['wave1']['OT']['description'] as string,
                                yukizuri: yukizuriAdds['wave1']['OT']['description'] as string,
                                cleave: cleaveAdds['wave1']['OT']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave1']['OT']['imageUrl'] as string,
                                latte: latteAdds['wave1']['OT']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave1']['OT']['imageUrl'] as string,
                                cleave: cleaveAdds['wave1']['OT']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave1']['H1']['description'] as string,
                                latte: latteAdds['wave1']['H1']['description'] as string,
                                yukizuri: yukizuriAdds['wave1']['H1']['description'] as string,
                                cleave: cleaveAdds['wave1']['H1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave1']['H1']['imageUrl'] as string,
                                latte: latteAdds['wave1']['H1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave1']['H1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave1']['H1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave1']['H2']['description'] as string,
                                latte: latteAdds['wave1']['H2']['description'] as string,
                                yukizuri: yukizuriAdds['wave1']['H2']['description'] as string,
                                cleave: cleaveAdds['wave1']['H2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave1']['H2']['imageUrl'] as string,
                                latte: latteAdds['wave1']['H2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave1']['H2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave1']['H2']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave1']['M1']['description'] as string,
                                latte: latteAdds['wave1']['M1']['description'] as string,
                                yukizuri: yukizuriAdds['wave1']['M1']['description'] as string,
                                cleave: cleaveAdds['wave1']['M1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave1']['M1']['imageUrl'] as string,
                                latte: latteAdds['wave1']['M1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave1']['M1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave1']['M1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave1']['M2']['description'] as string,
                                latte: latteAdds['wave1']['M2']['description'] as string,
                                yukizuri: yukizuriAdds['wave1']['M2']['description'] as string,
                                cleave: cleaveAdds['wave1']['M2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave1']['M2']['imageUrl'] as string,
                                latte: latteAdds['wave1']['M2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave1']['M2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave1']['M2']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave1']['R1']['description'] as string,
                                latte: latteAdds['wave1']['R1']['description'] as string,
                                yukizuri: yukizuriAdds['wave1']['R1']['description'] as string,
                                cleave: cleaveAdds['wave1']['R1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave1']['R1']['imageUrl'] as string,
                                latte: latteAdds['wave1']['R1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave1']['R1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave1']['R1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave1']['R2']['description'] as string,
                                latte: latteAdds['wave1']['R2']['description'] as string,
                                yukizuri: yukizuriAdds['wave1']['R2']['description'] as string,
                                cleave: cleaveAdds['wave1']['R2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave1']['R2']['imageUrl'] as string,
                                latte: latteAdds['wave1']['R2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave1']['R2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave1']['R2']['imageUrl'] as string,
                            }
                        },
                    ]
                },
                {
                    mechanic: 'Wave 2',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave2']['MT']['description'] as string,
                                latte: latteAdds['wave2']['MT']['description'] as string,
                                yukizuri: yukizuriAdds['wave2']['MT']['description'] as string,
                                cleave: cleaveAdds['wave2']['MT']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave2']['MT']['imageUrl'] as string,
                                latte: latteAdds['wave2']['MT']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave2']['MT']['imageUrl'] as string,
                                cleave: cleaveAdds['wave2']['MT']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave2']['OT']['description'] as string,
                                latte: latteAdds['wave2']['OT']['description'] as string,
                                yukizuri: yukizuriAdds['wave2']['OT']['description'] as string,
                                cleave: cleaveAdds['wave2']['OT']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave2']['OT']['imageUrl'] as string,
                                latte: latteAdds['wave2']['OT']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave2']['OT']['imageUrl'] as string,
                                cleave: cleaveAdds['wave2']['OT']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave2']['H1']['description'] as string,
                                latte: latteAdds['wave2']['H1']['description'] as string,
                                yukizuri: yukizuriAdds['wave2']['H1']['description'] as string,
                                cleave: cleaveAdds['wave2']['H1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave2']['H1']['imageUrl'] as string,
                                latte: latteAdds['wave2']['H1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave2']['H1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave2']['H1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave2']['H2']['description'] as string,
                                latte: latteAdds['wave2']['H2']['description'] as string,
                                yukizuri: yukizuriAdds['wave2']['H2']['description'] as string,
                                cleave: cleaveAdds['wave2']['H2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave2']['H2']['imageUrl'] as string,
                                latte: latteAdds['wave2']['H2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave2']['H2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave2']['H2']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave2']['M1']['description'] as string,
                                latte: latteAdds['wave2']['M1']['description'] as string,
                                yukizuri: yukizuriAdds['wave2']['M1']['description'] as string,
                                cleave: cleaveAdds['wave2']['M1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave2']['M1']['imageUrl'] as string,
                                latte: latteAdds['wave2']['M1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave2']['M1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave2']['M1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave2']['M2']['description'] as string,
                                latte: latteAdds['wave2']['M2']['description'] as string,
                                yukizuri: yukizuriAdds['wave2']['M2']['description'] as string,
                                cleave: cleaveAdds['wave2']['M2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave2']['M2']['imageUrl'] as string,
                                latte: latteAdds['wave2']['M2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave2']['M2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave2']['M2']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave2']['R1']['description'] as string,
                                latte: latteAdds['wave2']['R1']['description'] as string,
                                yukizuri: yukizuriAdds['wave2']['R1']['description'] as string,
                                cleave: cleaveAdds['wave2']['R1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave2']['R1']['imageUrl'] as string,
                                latte: latteAdds['wave2']['R1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave2']['R1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave2']['R1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave2']['R2']['description'] as string,
                                latte: latteAdds['wave2']['R2']['description'] as string,
                                yukizuri: yukizuriAdds['wave2']['R2']['description'] as string,
                                cleave: cleaveAdds['wave2']['R2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave2']['R2']['imageUrl'] as string,
                                latte: latteAdds['wave2']['R2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave2']['R2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave2']['R2']['imageUrl'] as string,
                            }
                        },
                    ]
                },
                {
                    mechanic: 'Wave 3',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave3']['MT']['description'] as string,
                                latte: latteAdds['wave3']['MT']['description'] as string,
                                yukizuri: yukizuriAdds['wave3']['MT']['description'] as string,
                                cleave: cleaveAdds['wave3']['MT']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave3']['MT']['imageUrl'] as string,
                                latte: latteAdds['wave3']['MT']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave3']['MT']['imageUrl'] as string,
                                cleave: cleaveAdds['wave3']['MT']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave3']['OT']['description'] as string,
                                latte: latteAdds['wave3']['OT']['description'] as string,
                                yukizuri: yukizuriAdds['wave3']['OT']['description'] as string,
                                cleave: cleaveAdds['wave3']['OT']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave3']['OT']['imageUrl'] as string,
                                latte: latteAdds['wave3']['OT']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave3']['OT']['imageUrl'] as string,
                                cleave: cleaveAdds['wave3']['OT']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave3']['H1']['description'] as string,
                                latte: latteAdds['wave3']['H1']['description'] as string,
                                yukizuri: yukizuriAdds['wave3']['H1']['description'] as string,
                                cleave: cleaveAdds['wave3']['H1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave3']['H1']['imageUrl'] as string,
                                latte: latteAdds['wave3']['H1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave3']['H1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave3']['H1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave3']['H2']['description'] as string,
                                latte: latteAdds['wave3']['H2']['description'] as string,
                                yukizuri: yukizuriAdds['wave3']['H2']['description'] as string,
                                cleave: cleaveAdds['wave3']['H2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave3']['H2']['imageUrl'] as string,
                                latte: latteAdds['wave3']['H2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave3']['H2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave3']['H2']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave3']['M1']['description'] as string,
                                latte: latteAdds['wave3']['M1']['description'] as string,
                                yukizuri: yukizuriAdds['wave3']['M1']['description'] as string,
                                cleave: cleaveAdds['wave3']['M1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave3']['M1']['imageUrl'] as string,
                                latte: latteAdds['wave3']['M1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave3']['M1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave3']['M1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave3']['M2']['description'] as string,
                                latte: latteAdds['wave3']['M2']['description'] as string,
                                yukizuri: yukizuriAdds['wave3']['M2']['description'] as string,
                                cleave: cleaveAdds['wave3']['M2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave3']['M2']['imageUrl'] as string,
                                latte: latteAdds['wave3']['M2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave3']['M2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave3']['M2']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave3']['R1']['description'] as string,
                                latte: latteAdds['wave3']['R1']['description'] as string,
                                yukizuri: yukizuriAdds['wave3']['R1']['description'] as string,
                                cleave: cleaveAdds['wave3']['R1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave3']['R1']['imageUrl'] as string,
                                latte: latteAdds['wave3']['R1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave3']['R1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave3']['R1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave3']['R2']['description'] as string,
                                latte: latteAdds['wave3']['R2']['description'] as string,
                                yukizuri: yukizuriAdds['wave3']['R2']['description'] as string,
                                cleave: cleaveAdds['wave3']['R2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave3']['R2']['imageUrl'] as string,
                                latte: latteAdds['wave3']['R2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave3']['R2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave3']['R2']['imageUrl'] as string,
                            }
                        },
                    ]
                },
                {
                    mechanic: 'Wave 4',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave4']['MT']['description'] as string,
                                latte: latteAdds['wave4']['MT']['description'] as string,
                                yukizuri: yukizuriAdds['wave4']['MT']['description'] as string,
                                cleave: cleaveAdds['wave4']['MT']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave4']['MT']['imageUrl'] as string,
                                latte: latteAdds['wave4']['MT']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave4']['MT']['imageUrl'] as string,
                                cleave: cleaveAdds['wave4']['MT']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave4']['OT']['description'] as string,
                                latte: latteAdds['wave4']['OT']['description'] as string,
                                yukizuri: yukizuriAdds['wave4']['OT']['description'] as string,
                                cleave: cleaveAdds['wave4']['OT']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave4']['OT']['imageUrl'] as string,
                                latte: latteAdds['wave4']['OT']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave4']['OT']['imageUrl'] as string,
                                cleave: cleaveAdds['wave4']['OT']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave4']['H1']['description'] as string,
                                latte: latteAdds['wave4']['H1']['description'] as string,
                                yukizuri: yukizuriAdds['wave4']['H1']['description'] as string,
                                cleave: cleaveAdds['wave4']['H1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave4']['H1']['imageUrl'] as string,
                                latte: latteAdds['wave4']['H1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave4']['H1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave4']['H1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave4']['H2']['description'] as string,
                                latte: latteAdds['wave4']['H2']['description'] as string,
                                yukizuri: yukizuriAdds['wave4']['H2']['description'] as string,
                                cleave: cleaveAdds['wave4']['H2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave4']['H2']['imageUrl'] as string,
                                latte: latteAdds['wave4']['H2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave4']['H2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave4']['H2']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave4']['M1']['description'] as string,
                                latte: latteAdds['wave4']['M1']['description'] as string,
                                yukizuri: yukizuriAdds['wave4']['M1']['description'] as string,
                                cleave: cleaveAdds['wave4']['M1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave4']['M1']['imageUrl'] as string,
                                latte: latteAdds['wave4']['M1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave4']['M1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave4']['M1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave4']['M2']['description'] as string,
                                latte: latteAdds['wave4']['M2']['description'] as string,
                                yukizuri: yukizuriAdds['wave4']['M2']['description'] as string,
                                cleave: cleaveAdds['wave4']['M2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave4']['M2']['imageUrl'] as string,
                                latte: latteAdds['wave4']['M2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave4']['M2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave4']['M2']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave4']['R1']['description'] as string,
                                latte: latteAdds['wave4']['R1']['description'] as string,
                                yukizuri: yukizuriAdds['wave4']['R1']['description'] as string,
                                cleave: cleaveAdds['wave4']['R1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave4']['R1']['imageUrl'] as string,
                                latte: latteAdds['wave4']['R1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave4']['R1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave4']['R1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave4']['R2']['description'] as string,
                                latte: latteAdds['wave4']['R2']['description'] as string,
                                yukizuri: yukizuriAdds['wave4']['R2']['description'] as string,
                                cleave: cleaveAdds['wave4']['R2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave4']['R2']['imageUrl'] as string,
                                latte: latteAdds['wave4']['R2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave4']['R2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave4']['R2']['imageUrl'] as string,
                            }
                        },
                    ]
                },
            ]
        },
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
            phaseName: 'Wingmark/Double Style', 
            mechs: [
                {
                    mechanic: 'Light Parties',
                    description: 'G1 Left, G2 Right Facing Boss',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Left',
                            imageUrl: './m6s/toxic/double-lps.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Right',
                            imageUrl: './m6s/toxic/double-lps.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Left',
                            imageUrl: './m6s/toxic/double-lps.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Right',
                            imageUrl: './m6s/toxic/double-lps.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Left',
                            imageUrl: './m6s/toxic/double-lps.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Right',
                            imageUrl: './m6s/toxic/double-lps.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Left',
                            imageUrl: './m6s/toxic/double-lps.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Right',
                            imageUrl: './m6s/toxic/double-lps.webp'
                        },
                    ]
                },{
                    mechanic: 'Partners',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Front with M1',
                            imageUrl: './m6s/toxic/double-partners.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Back with M2',
                            imageUrl: './m6s/toxic/double-partners.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Left with R1',
                            imageUrl: './m6s/toxic/double-partners.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Right with R2',
                            imageUrl: './m6s/toxic/double-partners.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Front with MT',
                            imageUrl: './m6s/toxic/double-partners.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Back with OT',
                            imageUrl: './m6s/toxic/double-partners.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Left with H1',
                            imageUrl: './m6s/toxic/double-partners.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Right with H2',
                            imageUrl: './m6s/toxic/double-partners.webp'
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
                    description: 'LP prio, use eyes',
                    imageUrl: './m6s/toxic/sticky.webp'
                },
            ]
        },
        {
            phaseName: 'Cactus Dodges', 
            mechs: [
                {
                    mechanic: 'Stack + Short Defamations',
                    notes: 'This is the only difference between Toxic and Hector strats',
                    description: 'Toxic: Stack North, Tanks SW, DPS SE\nHector: Stack Mid, Tanks NW, DPS SW',
                    imageUrl: './m6s/toxic/desert-dodges.webp'
                },
            ]
        },
        {
            phaseName: 'Quicksand + Healer Defamations', 
            description: 'H1 CW, H2 CCW from cactus',
            mechs: [
                {
                    mechanic: 'Party + Healer Defamations',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Across from unsafe corner',
                            imageUrl: './m6s/toxic/desert-healers.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Across from unsafe corner',
                            imageUrl: './m6s/toxic/desert-healers.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Clockwise from cactus corner',
                            imageUrl: './m6s/toxic/desert-healers.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Counter-Clockwise from cactus corner',
                            imageUrl: './m6s/toxic/desert-healers.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Across from unsafe corner',
                            imageUrl: './m6s/toxic/desert-healers.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Across from unsafe corner',
                            imageUrl: './m6s/toxic/desert-healers.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Across from unsafe corner',
                            imageUrl: './m6s/toxic/desert-healers.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Across from unsafe corner',
                            imageUrl: './m6s/toxic/desert-healers.webp'
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Quicksand + Bombs', 
            description: 'True North\nG1 W, G2 E, RMMR',
            mechs: [
                {
                    mechanic: 'Bombs',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'West close to boss',
                            imageUrl: './m6s/toxic/desert-bombs.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'East close to boss',
                            imageUrl: './m6s/toxic/desert-bombs.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West far from boss',
                            imageUrl: './m6s/toxic/desert-bombs.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East far from boss',
                            imageUrl: './m6s/toxic/desert-bombs.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'West close to boss',
                            imageUrl: './m6s/toxic/desert-bombs.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'East close to boss',
                            imageUrl: './m6s/toxic/desert-bombs.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West far from boss',
                            imageUrl: './m6s/toxic/desert-bombs.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East far from boss',
                            imageUrl: './m6s/toxic/desert-bombs.webp'
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Adds', 
            tag: 'adds',
            description: '',
            mechs: [
                {
                    mechanic: 'Wave 1',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave1']['MT']['description'] as string,
                                latte: latteAdds['wave1']['MT']['description'] as string,
                                yukizuri: yukizuriAdds['wave1']['MT']['description'] as string,
                                cleave: cleaveAdds['wave1']['MT']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave1']['MT']['imageUrl'] as string,
                                latte: latteAdds['wave1']['MT']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave1']['MT']['imageUrl'] as string,
                                cleave: cleaveAdds['wave1']['MT']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave1']['OT']['description'] as string,
                                latte: latteAdds['wave1']['OT']['description'] as string,
                                yukizuri: yukizuriAdds['wave1']['OT']['description'] as string,
                                cleave: cleaveAdds['wave1']['OT']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave1']['OT']['imageUrl'] as string,
                                latte: latteAdds['wave1']['OT']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave1']['OT']['imageUrl'] as string,
                                cleave: cleaveAdds['wave1']['OT']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave1']['H1']['description'] as string,
                                latte: latteAdds['wave1']['H1']['description'] as string,
                                yukizuri: yukizuriAdds['wave1']['H1']['description'] as string,
                                cleave: cleaveAdds['wave1']['H1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave1']['H1']['imageUrl'] as string,
                                latte: latteAdds['wave1']['H1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave1']['H1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave1']['H1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave1']['H2']['description'] as string,
                                latte: latteAdds['wave1']['H2']['description'] as string,
                                yukizuri: yukizuriAdds['wave1']['H2']['description'] as string,
                                cleave: cleaveAdds['wave1']['H2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave1']['H2']['imageUrl'] as string,
                                latte: latteAdds['wave1']['H2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave1']['H2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave1']['H2']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave1']['M1']['description'] as string,
                                latte: latteAdds['wave1']['M1']['description'] as string,
                                yukizuri: yukizuriAdds['wave1']['M1']['description'] as string,
                                cleave: cleaveAdds['wave1']['M1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave1']['M1']['imageUrl'] as string,
                                latte: latteAdds['wave1']['M1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave1']['M1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave1']['M1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave1']['M2']['description'] as string,
                                latte: latteAdds['wave1']['M2']['description'] as string,
                                yukizuri: yukizuriAdds['wave1']['M2']['description'] as string,
                                cleave: cleaveAdds['wave1']['M2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave1']['M2']['imageUrl'] as string,
                                latte: latteAdds['wave1']['M2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave1']['M2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave1']['M2']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave1']['R1']['description'] as string,
                                latte: latteAdds['wave1']['R1']['description'] as string,
                                yukizuri: yukizuriAdds['wave1']['R1']['description'] as string,
                                cleave: cleaveAdds['wave1']['R1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave1']['R1']['imageUrl'] as string,
                                latte: latteAdds['wave1']['R1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave1']['R1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave1']['R1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave1']['R2']['description'] as string,
                                latte: latteAdds['wave1']['R2']['description'] as string,
                                yukizuri: yukizuriAdds['wave1']['R2']['description'] as string,
                                cleave: cleaveAdds['wave1']['R2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave1']['R2']['imageUrl'] as string,
                                latte: latteAdds['wave1']['R2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave1']['R2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave1']['R2']['imageUrl'] as string,
                            }
                        },
                    ]
                },
                {
                    mechanic: 'Wave 2',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave2']['MT']['description'] as string,
                                latte: latteAdds['wave2']['MT']['description'] as string,
                                yukizuri: yukizuriAdds['wave2']['MT']['description'] as string,
                                cleave: cleaveAdds['wave2']['MT']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave2']['MT']['imageUrl'] as string,
                                latte: latteAdds['wave2']['MT']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave2']['MT']['imageUrl'] as string,
                                cleave: cleaveAdds['wave2']['MT']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave2']['OT']['description'] as string,
                                latte: latteAdds['wave2']['OT']['description'] as string,
                                yukizuri: yukizuriAdds['wave2']['OT']['description'] as string,
                                cleave: cleaveAdds['wave2']['OT']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave2']['OT']['imageUrl'] as string,
                                latte: latteAdds['wave2']['OT']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave2']['OT']['imageUrl'] as string,
                                cleave: cleaveAdds['wave2']['OT']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave2']['H1']['description'] as string,
                                latte: latteAdds['wave2']['H1']['description'] as string,
                                yukizuri: yukizuriAdds['wave2']['H1']['description'] as string,
                                cleave: cleaveAdds['wave2']['H1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave2']['H1']['imageUrl'] as string,
                                latte: latteAdds['wave2']['H1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave2']['H1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave2']['H1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave2']['H2']['description'] as string,
                                latte: latteAdds['wave2']['H2']['description'] as string,
                                yukizuri: yukizuriAdds['wave2']['H2']['description'] as string,
                                cleave: cleaveAdds['wave2']['H2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave2']['H2']['imageUrl'] as string,
                                latte: latteAdds['wave2']['H2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave2']['H2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave2']['H2']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave2']['M1']['description'] as string,
                                latte: latteAdds['wave2']['M1']['description'] as string,
                                yukizuri: yukizuriAdds['wave2']['M1']['description'] as string,
                                cleave: cleaveAdds['wave2']['M1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave2']['M1']['imageUrl'] as string,
                                latte: latteAdds['wave2']['M1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave2']['M1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave2']['M1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave2']['M2']['description'] as string,
                                latte: latteAdds['wave2']['M2']['description'] as string,
                                yukizuri: yukizuriAdds['wave2']['M2']['description'] as string,
                                cleave: cleaveAdds['wave2']['M2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave2']['M2']['imageUrl'] as string,
                                latte: latteAdds['wave2']['M2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave2']['M2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave2']['M2']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave2']['R1']['description'] as string,
                                latte: latteAdds['wave2']['R1']['description'] as string,
                                yukizuri: yukizuriAdds['wave2']['R1']['description'] as string,
                                cleave: cleaveAdds['wave2']['R1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave2']['R1']['imageUrl'] as string,
                                latte: latteAdds['wave2']['R1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave2']['R1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave2']['R1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave2']['R2']['description'] as string,
                                latte: latteAdds['wave2']['R2']['description'] as string,
                                yukizuri: yukizuriAdds['wave2']['R2']['description'] as string,
                                cleave: cleaveAdds['wave2']['R2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave2']['R2']['imageUrl'] as string,
                                latte: latteAdds['wave2']['R2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave2']['R2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave2']['R2']['imageUrl'] as string,
                            }
                        },
                    ]
                },
                {
                    mechanic: 'Wave 3',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave3']['MT']['description'] as string,
                                latte: latteAdds['wave3']['MT']['description'] as string,
                                yukizuri: yukizuriAdds['wave3']['MT']['description'] as string,
                                cleave: cleaveAdds['wave3']['MT']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave3']['MT']['imageUrl'] as string,
                                latte: latteAdds['wave3']['MT']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave3']['MT']['imageUrl'] as string,
                                cleave: cleaveAdds['wave3']['MT']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave3']['OT']['description'] as string,
                                latte: latteAdds['wave3']['OT']['description'] as string,
                                yukizuri: yukizuriAdds['wave3']['OT']['description'] as string,
                                cleave: cleaveAdds['wave3']['OT']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave3']['OT']['imageUrl'] as string,
                                latte: latteAdds['wave3']['OT']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave3']['OT']['imageUrl'] as string,
                                cleave: cleaveAdds['wave3']['OT']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave3']['H1']['description'] as string,
                                latte: latteAdds['wave3']['H1']['description'] as string,
                                yukizuri: yukizuriAdds['wave3']['H1']['description'] as string,
                                cleave: cleaveAdds['wave3']['H1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave3']['H1']['imageUrl'] as string,
                                latte: latteAdds['wave3']['H1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave3']['H1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave3']['H1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave3']['H2']['description'] as string,
                                latte: latteAdds['wave3']['H2']['description'] as string,
                                yukizuri: yukizuriAdds['wave3']['H2']['description'] as string,
                                cleave: cleaveAdds['wave3']['H2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave3']['H2']['imageUrl'] as string,
                                latte: latteAdds['wave3']['H2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave3']['H2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave3']['H2']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave3']['M1']['description'] as string,
                                latte: latteAdds['wave3']['M1']['description'] as string,
                                yukizuri: yukizuriAdds['wave3']['M1']['description'] as string,
                                cleave: cleaveAdds['wave3']['M1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave3']['M1']['imageUrl'] as string,
                                latte: latteAdds['wave3']['M1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave3']['M1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave3']['M1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave3']['M2']['description'] as string,
                                latte: latteAdds['wave3']['M2']['description'] as string,
                                yukizuri: yukizuriAdds['wave3']['M2']['description'] as string,
                                cleave: cleaveAdds['wave3']['M2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave3']['M2']['imageUrl'] as string,
                                latte: latteAdds['wave3']['M2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave3']['M2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave3']['M2']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave3']['R1']['description'] as string,
                                latte: latteAdds['wave3']['R1']['description'] as string,
                                yukizuri: yukizuriAdds['wave3']['R1']['description'] as string,
                                cleave: cleaveAdds['wave3']['R1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave3']['R1']['imageUrl'] as string,
                                latte: latteAdds['wave3']['R1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave3']['R1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave3']['R1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave3']['R2']['description'] as string,
                                latte: latteAdds['wave3']['R2']['description'] as string,
                                yukizuri: yukizuriAdds['wave3']['R2']['description'] as string,
                                cleave: cleaveAdds['wave3']['R2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave3']['R2']['imageUrl'] as string,
                                latte: latteAdds['wave3']['R2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave3']['R2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave3']['R2']['imageUrl'] as string,
                            }
                        },
                    ]
                },
                {
                    mechanic: 'Wave 4',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave4']['MT']['description'] as string,
                                latte: latteAdds['wave4']['MT']['description'] as string,
                                yukizuri: yukizuriAdds['wave4']['MT']['description'] as string,
                                cleave: cleaveAdds['wave4']['MT']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave4']['MT']['imageUrl'] as string,
                                latte: latteAdds['wave4']['MT']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave4']['MT']['imageUrl'] as string,
                                cleave: cleaveAdds['wave4']['MT']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave4']['OT']['description'] as string,
                                latte: latteAdds['wave4']['OT']['description'] as string,
                                yukizuri: yukizuriAdds['wave4']['OT']['description'] as string,
                                cleave: cleaveAdds['wave4']['OT']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave4']['OT']['imageUrl'] as string,
                                latte: latteAdds['wave4']['OT']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave4']['OT']['imageUrl'] as string,
                                cleave: cleaveAdds['wave4']['OT']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave4']['H1']['description'] as string,
                                latte: latteAdds['wave4']['H1']['description'] as string,
                                yukizuri: yukizuriAdds['wave4']['H1']['description'] as string,
                                cleave: cleaveAdds['wave4']['H1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave4']['H1']['imageUrl'] as string,
                                latte: latteAdds['wave4']['H1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave4']['H1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave4']['H1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave4']['H2']['description'] as string,
                                latte: latteAdds['wave4']['H2']['description'] as string,
                                yukizuri: yukizuriAdds['wave4']['H2']['description'] as string,
                                cleave: cleaveAdds['wave4']['H2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave4']['H2']['imageUrl'] as string,
                                latte: latteAdds['wave4']['H2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave4']['H2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave4']['H2']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave4']['M1']['description'] as string,
                                latte: latteAdds['wave4']['M1']['description'] as string,
                                yukizuri: yukizuriAdds['wave4']['M1']['description'] as string,
                                cleave: cleaveAdds['wave4']['M1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave4']['M1']['imageUrl'] as string,
                                latte: latteAdds['wave4']['M1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave4']['M1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave4']['M1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave4']['M2']['description'] as string,
                                latte: latteAdds['wave4']['M2']['description'] as string,
                                yukizuri: yukizuriAdds['wave4']['M2']['description'] as string,
                                cleave: cleaveAdds['wave4']['M2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave4']['M2']['imageUrl'] as string,
                                latte: latteAdds['wave4']['M2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave4']['M2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave4']['M2']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: {
                                toxic: toxicAdds['wave4']['R1']['description'] as string,
                                latte: latteAdds['wave4']['R1']['description'] as string,
                                yukizuri: yukizuriAdds['wave4']['R1']['description'] as string,
                                cleave: cleaveAdds['wave4']['R1']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave4']['R1']['imageUrl'] as string,
                                latte: latteAdds['wave4']['R1']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave4']['R1']['imageUrl'] as string,
                                cleave: cleaveAdds['wave4']['R1']['imageUrl'] as string,
                            }
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: {
                                toxic: toxicAdds['wave4']['R2']['description'] as string,
                                latte: latteAdds['wave4']['R2']['description'] as string,
                                yukizuri: yukizuriAdds['wave4']['R2']['description'] as string,
                                cleave: cleaveAdds['wave4']['R2']['description'] as string,
                            },
                            imageUrl: {
                                toxic: toxicAdds['wave4']['R2']['imageUrl'] as string,
                                latte: latteAdds['wave4']['R2']['imageUrl'] as string,
                                yukizuri: yukizuriAdds['wave4']['R2']['imageUrl'] as string,
                                cleave: cleaveAdds['wave4']['R2']['imageUrl'] as string,
                            }
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
                    description: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Northwest',
                            imageUrl: './m6s/toxic/river-lightning.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Northwest',
                            imageUrl: './m6s/toxic/river-lightning.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Northeast',
                            imageUrl: './m6s/toxic/river-lightning.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South',
                            imageUrl: './m6s/toxic/river-lightning.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Northwest',
                            imageUrl: './m6s/toxic/river-lightning.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Northwest',
                            imageUrl: './m6s/toxic/river-lightning.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Northeast',
                            imageUrl: './m6s/toxic/river-lightning.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South',
                            imageUrl: './m6s/toxic/river-lightning.webp'
                        },
                    ]
                },
                {
                    mechanic: 'Fire (Stacks)',
                    description: '',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Middle',
                            imageUrl: './m6s/toxic/river-fire.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Far behind safe bridge',
                            imageUrl: './m6s/toxic/river-fire.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Middle',
                            imageUrl: './m6s/toxic/river-fire.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Far behind safe bridge',
                            imageUrl: './m6s/toxic/river-fire.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Middle',
                            imageUrl: './m6s/toxic/river-fire.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Middle',
                            imageUrl: './m6s/toxic/river-fire.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Far behind safe bridge',
                            imageUrl: './m6s/toxic/river-fire.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Far behind safe bridge',
                            imageUrl: './m6s/toxic/river-fire.webp'
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Lightning Storm', 
            description: 'Party stays on bridge\nDPS CCW, Support CW',
            imageUrl: './m6s/toxic/storm.webp'
        },
        {
            phaseName: 'Pudding Party', 
            description: 'True North\nG1 West G2 East',
            mechs: [
                {
                    mechanic: 'Towers',
                    notes: 'Remember to bait the Twister-style AoE when the Lightning flash happens',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Bait proteans\nTake West tower closest to wall',
                            imageUrl: './m6s/toxic/pudding-towers.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Bait proteans\nTake East tower closest to wall',
                            imageUrl: './m6s/toxic/pudding-towers.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West platform\nTake the tower closer to the middle',
                            imageUrl: './m6s/toxic/pudding-towers.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East platform\nTake the tower closer to the middle',
                            imageUrl: './m6s/toxic/pudding-towers.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Bait proteans\nTake West tower near marker',
                            imageUrl: './m6s/toxic/pudding-towers.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Bait proteans\nTake East tower near marker',
                            imageUrl: './m6s/toxic/pudding-towers.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West platform\nTake the tower further from the middle',
                            imageUrl: './m6s/toxic/pudding-towers.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East platform\nTake the tower further from the middle',
                            imageUrl: './m6s/toxic/pudding-towers.webp'
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Wingmark + Towers', 
            description: 'Melees + Tanks in the 4 tower platform\nEveryone rotate the same direction',
            mechs: [
                {
                    mechanic: '4-2-2',
                    description: 'Healers + Melees closest to river',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Take Left tower furthest from river',
                            imageUrl: './m6s/toxic/pudding-422.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Take Right tower furthest from river',
                            imageUrl: './m6s/toxic/pudding-422.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Left platform\nTake the tower closest to river',
                            imageUrl: './m6s/toxic/pudding-422.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Right platform\nTake the tower closest to river',
                            imageUrl: './m6s/toxic/pudding-422.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Take Left tower closest to river',
                            imageUrl: './m6s/toxic/pudding-422.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Take Right tower closest to river',
                            imageUrl: './m6s/toxic/pudding-422.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Left platform\nTake the tower furthest from river',
                            imageUrl: './m6s/toxic/pudding-422.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Right platform\nTake the tower furthest from river',
                            imageUrl: './m6s/toxic/pudding-422.webp'
                        },
                    ]
                },
                {
                    mechanic: '8-0-0',
                    description: 'Static positions',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Far West',
                            imageUrl: './m6s/toxic/pudding-800.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Center South',
                            imageUrl: './m6s/toxic/pudding-800.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Close Southeast',
                            imageUrl: './m6s/toxic/pudding-800.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Center North',
                            imageUrl: './m6s/toxic/pudding-800.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Close Southwest',
                            imageUrl: './m6s/toxic/pudding-800.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Close Northwest (near 4 marker)',
                            imageUrl: './m6s/toxic/pudding-800.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Far East',
                            imageUrl: './m6s/toxic/pudding-800.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Close Northeast (near 3 marker)',
                            imageUrl: './m6s/toxic/pudding-800.webp'
                        },
                    ]
                },
            ]
        },
    ]
}

