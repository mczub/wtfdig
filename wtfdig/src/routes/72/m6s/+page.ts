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

const toxicAdds: Record<string,Record<string, PlayerMechStrat>> = {
    'wave1': {
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Grab squirrels East, tank between C and 3',
                imageUrl: './m6s/adds/toxic-wave1.png',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `Grab Yan West`,
                imageUrl: './m6s/adds/toxic-wave1.png',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Stack on Boss + Squirrels to bait Cat, AOE Squirrels',
                imageUrl: './m6s/adds/toxic-wave1.png',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Stack on Boss + Squirrels to bait Cat, AOE Squirrels',
                imageUrl: './m6s/adds/toxic-wave1.png',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Hit Yan',
                imageUrl: './m6s/adds/toxic-wave1.png',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Hit Yan',
                imageUrl: './m6s/adds/toxic-wave1.png',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Stack on Boss + Squirrels to bait Cat, kill Cat',
                imageUrl: './m6s/adds/toxic-wave1.png',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Stack on Boss + Squirrels to bait Cat, kill Cat',
                imageUrl: './m6s/adds/toxic-wave1.png',
        },
    },
    'wave2': {
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Pick up Squirrels South, bring them to NE Manta as soon as possible',
                imageUrl: './m6s/adds/toxic-wave2.png',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'If Yan is alive, bring it to NW Manta\nAfter Yan dies, Kill NW Manta then NE Manta',
                imageUrl: './m6s/adds/toxic-wave2.png',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Stand NE with Squirrels\nKill NW Manta first, then cleave NE Manta',
                imageUrl: './m6s/adds/toxic-wave2.png',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Stand NE with Squirrels\nKill NW Manta first, then cleave NE Manta',
                imageUrl: './m6s/adds/toxic-wave2.png',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Make sure Yan dies\nKill NW Manta first, then cleave NE Manta\nCleave the squirrels as much as possible',
                imageUrl: './m6s/adds/toxic-wave2.png',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Make sure Yan dies\nKill NW Manta first, then cleave NE Manta\nCleave the squirrels as much as possible',
                imageUrl: './m6s/adds/toxic-wave2.png',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Take NE Manta\nDrop first puddle in NE corner, then move South\nKill NW Manta first, then cleave NE Manta',
                imageUrl: './m6s/adds/toxic-wave2.png',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Take NW Manta\nDrop first puddle in NW corner, then move South\nKill NW Manta first, then cleave NE Manta',
                imageUrl: './m6s/adds/toxic-wave2.png',
        },
    },
    'wave3':{
        'MT': {
                role: 'Tank',
                party: 1,
                description: `Take squirrels to South, then to Jabber spawn West\nFirst stun on Jabber\nKill remaining Squirrels`,
                imageUrl: './m6s/adds/toxic-wave3.png',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Pick up Yan North and chill',
                imageUrl: './m6s/adds/toxic-wave3.png',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'If targeted by Jabber, go Southeast and single target\nKill Jabber, then Squirrels, then Cat',
                imageUrl: './m6s/adds/toxic-wave3.png',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'If targeted by Jabber, go Southeast and single target\nKill Jabber, then Squirrels, then Cat',
                imageUrl: './m6s/adds/toxic-wave3.png',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: `Damage squirrels until Jabber spawns\nPrioritize Jabber, take second stun\nKill remaining Squirrels`,
                imageUrl: './m6s/adds/toxic-wave3.png',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: `Damage squirrels until Jabber spawns\nPrioritize Jabber, take third stun\nKill remaining Squirrels`,
                imageUrl: './m6s/adds/toxic-wave3.png',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: `Damage squirrels until Jabber spawns\nPrioritize Jabber\nKill remaining Squirrels before enrage\nKill cat before enrage`,
                imageUrl: './m6s/adds/toxic-wave3.png',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: `Damage squirrels until Jabber spawns\nPrioritize Jabber\nKill remaining Squirrels before enrage\nKill cat before enrage`,
                imageUrl: './m6s/adds/toxic-wave3.png',
        },
    },
    'wave4':{
        'MT': {
                role: 'Tank',
                party: 1,
                description: `Take Squirrels to 2 marker, then to Jabber\nPrioritize Jabber, take first stun\nStack and kill SE Manta\nStack and kill SW Manta\nKill Squirrels\nKill Yans`,
                imageUrl: './m6s/adds/toxic-wave4.png',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Take Yans to 4 marker\nOnce Jabber dies, take Yans deep into SW corner\nAfter Squirrels die, take Yans to boss and kill',
                imageUrl: './m6s/adds/toxic-wave4.png',
        },
        'H1': {
                role: 'Healer',
                party: 1,
                description: `If targeted by Jabber, go Southeast and single target\nMake sure to keep OT alive\nKill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,
                imageUrl: './m6s/adds/toxic-wave4.png',
        },
        'H2': {
                role: 'Healer',
                party: 2,
                description: `If targeted by Jabber, go Southeast and single target\nMake sure to keep OT alive\nKill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,
                imageUrl: './m6s/adds/toxic-wave4.png',
        },
        'M1': {
                role: 'Melee',
                party: 1,
                description: `Hit Squirrels until Jabber spawns\nPrioritize Jabber, take second stun\nKill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,
                imageUrl: './m6s/adds/toxic-wave4.png',
        },
        'M2': {
                role: 'Melee',
                party: 2,
                description: `Hit Squirrels until Jabber spawns\nPrioritize Jabber, take second stun\nKill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,
                imageUrl: './m6s/adds/toxic-wave4.png',
        },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: `Take SW Manta\nKeep deep SW clear of puddles, feel free to use North\nHit Squirrels until Jabber spawns\nPrioritize Jabber\nKill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,
                imageUrl: './m6s/adds/toxic-wave4.png',
        },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: `Take SE Manta\nDrop puddles along East wall\nHit Squirrels until Jabber spawns\nPrioritize Jabber\nKill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,
                imageUrl: './m6s/adds/toxic-wave4.png',
        },
    }
}

const latteAdds: Record<string,Record<string, PlayerMechStrat>> = {
    'wave1': {
        'MT': {
                role: 'Tank',
                party: 1,
                description: '1. Pull boss and 2 squirrels east\n2. Mitigate and AoE\n3. If cat jumps near, dodge AoE.',
                imageUrl: './m6s/adds/latte-mt.png',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `1. Pull ram away from adds to avoid buffs.\n2. Mitigate and focus the ram until dead.\n3. If cat jumps near, focus the cat instead.`,
                imageUrl: './m6s/adds/latte-ot.png',
            },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '1. Focus the cat.\n2. Once cat is dead, focus the ram.\n3. Then, join the MT and AoE the squirrels.',
                imageUrl: './m6s/adds/latte-healer.png',
            },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '1. Focus the cat.\n2. Once cat is dead, focus the ram.\n3. Then, join the MT and AoE the squirrels.',
                imageUrl: './m6s/adds/latte-healer.png',
            },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '1. Focus the ram.\n2. If cat jumps near ram, focus the cat instead.\n3. Then, join the MT and AoE the squirrels.',
                imageUrl: './m6s/adds/latte-melee.png',
            },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '1. Focus the ram.\n2. If cat jumps near ram, focus the cat instead.\n3. Then, join the MT and AoE the squirrels.',
                imageUrl: './m6s/adds/latte-melee.png',
            },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '1. Focus the cat.\n2. Once cat is dead, focus the ram.\n3. Then, join the MT and AoE the squirrels.',
            },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '1. Focus the cat.\n2. Once cat is dead, focus the ram.\n3. Then, join the MT and AoE the squirrels.',
            },
    },
    'wave2': {
        'MT': {
                role: 'Tank',
                party: 1,
                description: '1. Grab 2 new squirrels.\n2. Wait for ranged to tether East ray.\n3. Bring everything to that ray.\n4. Mitigate and AoE.\n5. If you have AoE damage reduction on actions, target the rays.',
                imageUrl: './m6s/adds/latte-mt.png',
            },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '1. Once ram is dead, help AoE boss/squirrels.\n2. Wait for ranged to tether east ray.\n3. Kill east ray.\n4. Help ranged kill west ray.\n5. If you have AoE damage reduction on actions, target rays.',
                imageUrl: './m6s/adds/latte-ot.png',
            },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '1. Once ray targets a ranged, join MT and AoE all of them.\n2. Once this ray is dead, focus the other ray.',
                imageUrl: './m6s/adds/latte-healer.png',
            },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '1. Once ray targets a ranged, join MT and AoE all of them.\n2. Once this ray is dead, focus the other ray.',
                imageUrl: './m6s/adds/latte-healer.png',
            },
        'M1': {
                role: 'Melee',
                party: 1,
                description: '1. Once ray targets a ranged, join MT and AoE all of them.\n2. Once this ray is dead, focus the other ray.',
                imageUrl: './m6s/adds/latte-melee.png',
            },
        'M2': {
                role: 'Melee',
                party: 2,
                description: '1. Once ray targets a ranged, join MT and AoE all of them.\n2. Once this ray is dead, focus the other ray.',
                imageUrl: './m6s/adds/latte-melee.png',
            },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '1. Target Northwest ray.\n2. Bait puddles from north to south on the arena sides while attacking rays.\n3. If your targeted ray is dead, focus the other.\n4. Join MT and AoE squirrels until third spawn.',
                imageUrl: './m6s/adds/latte-ranged.png',
            },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '1. Target Northeast ray.\n2. Bait puddles from north to south on the arena sides while attacking rays.\n3. If your targeted ray is ead, focus the other.\n4. Join MT and AoE squirrels until third spawn.',
                imageUrl: './m6s/adds/latte-ranged.png',
            },
    },
    'wave3':{
        'MT': {
                role: 'Tank',
                party: 1,
                description: `1. Jabber becomes targetable, bring adds and ST focus.\n2. Make sure ram is dead so it doesn't buff your adds.\n3. Stun priority is MT --> M1 --> M2.\n4. Kill squirrels before enrage.\n5. Kill cat.`,
                imageUrl: './m6s/adds/latte-mt.png',
            },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '1. The party will deal with the jabber.\n2. Focus the new ram that spawns.',
                imageUrl: './m6s/adds/latte-ot.png',
            },
        'H1': {
                role: 'Healer',
                party: 1,
                description: '1. If targeted by jabber, camp southeast.\n2. Free healer will ST jabber until dead.\n3. If out of range of any add, heal others.\n4. When within range, ST the jabber.\n5. AoE when jabber is dead.',
                imageUrl: './m6s/adds/latte-healer.png',
            },
        'H2': {
                role: 'Healer',
                party: 2,
                description: '1. If targeted by jabber, camp southeast.\n2. Free healer will ST jabber until dead.\n3. If out of range of any add, heal others.\n4. When within range, ST the jabber.\n5. AoE when jabber is dead.',
                imageUrl: './m6s/adds/latte-healer.png',
            },
        'M1': {
                role: 'Melee',
                party: 1,
                description: `1. Jabber becomes targetable, ST focus.\n2. Make sure ram is dead so it doesn't buff your adds.\n3. Stun priority is MT --> M1 --> M2.\n4. Kill squirrels before enrage. 5. Kill cat.`,
                imageUrl: './m6s/adds/latte-melee.png',
            },
        'M2': {
                role: 'Melee',
                party: 2,
                description: `1. Jabber becomes targetable, ST focus.\n2. Make sure ram is dead so it doesn't buff your adds.\n3. Stun priority is MT --> M1 --> M2.\n4. Kill squirrels before enrage. 5. Kill cat.`,
                imageUrl: './m6s/adds/latte-melee.png',
            },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: `1. Jabber becomes targetable, ST focus.\n2. Make sure ram is dead so it doesn't buff your adds.\n3. Kill squirrels before enrage.\n4. Kill cat before fourth spawn.`,
                imageUrl: './m6s/adds/latte-ranged.png',
            },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: `1. Jabber becomes targetable, ST focus.\n2. Make sure ram is dead so it doesn't buff your adds.\n3. Kill squirrels before enrage.\n4. Kill cat before fourth spawn.`,
                imageUrl: './m6s/adds/latte-ranged.png',
            },
    },
    'wave4':{
        'MT': {
                role: 'Tank',
                party: 1,
                description: `1. Pull boss and 2 new squirrels to the new jabber NORTH.\n2. Mitigate and AoE.\n3. Focus the jabber.\n4. Same stun priority.\n5. After jabber, kill east ray.\n6. Kill cat then Southwest ray.\n7. Dodge lines then focus rams.`,
                imageUrl: './m6s/adds/latte-mt.png',
            },
        'OT': {
                role: 'Tank',
                party: 2,
                description: '1. Another ram will spawn.\n2. Pull both rams SW to avoid buffs on other adds.\n3. Wait till every other add is dead (squirrels last to die), then bring rams to boss.',
                imageUrl: './m6s/adds/latte-ot.png',
            },
        'H1': {
                role: 'Healer',
                party: 1,
                description: `1. Another jabber will spawn, ignore cat.\n2. If targeted by jabber,  camp southeast again.\n3. ST jabber and/or AoE anyone you can within range.\n4. Targeted healer leaves corner when jabber is dead.\n5. After jabber, focus east ray, then cat, then west ray.\n6. Mitigate/heal raidwide, dodge lines, then AoE rams.`,
                imageUrl: './m6s/adds/latte-healer.png',
            },
        'H2': {
                role: 'Healer',
                party: 2,
                description: `1. Another jabber will spawn, ignore cat.\n2. If targeted by jabber,  camp southeast again.\n3. ST jabber and/or AoE anyone you can within range.\n4. Targeted healer leaves corner when jabber is dead.\n5. After jabber, focus east ray, then cat, then west ray.\n6. Mitigate/heal raidwide, dodge lines, then AoE rams.`,
                imageUrl: './m6s/adds/latte-healer.png',
            },
        'M1': {
                role: 'Melee',
                party: 1,
                description: `1. Assist MT in killing new squirrels.\n2. ST focus the jabber once targetable.\n3. Same stun priority.\n4. After jabber, kill east ray.\n5. Kill cat then Southwest ray.\n6. Dodge lines then focus rams.`,
                imageUrl: './m6s/adds/latte-melee.png',
            },
        'M2': {
                role: 'Melee',
                party: 2,
                description: `1. Assist MT in killing new squirrels.\n2. ST focus the jabber once targetable.\n3. Same stun priority.\n4. After jabber, kill east ray.\n5. Kill cat then Southwest ray.\n6. Dodge lines then focus rams.`,
                imageUrl: './m6s/adds/latte-melee.png',
            },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '1. Ignore cat.\n2. New rays spawn, take Southwest ray.\n3. Continue baiting the puddles.\n4. When jabber is targetable, ST focus it.\n5. After jabber is dead, focus Southeast ray.\n6. Kill cat then Southwest ray.\n7. Dodge lines, AoE rams.',
                imageUrl: './m6s/adds/latte-ranged.png',
            },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: '1. Ignore cat.\n2. New rays spawn, take Southeast ray.\n3. Continue baiting the puddles.\n4. When jabber is targetable, ST focus it.\n5. After jabber is dead, focus Southeast ray.\n6. Kill cat then Southwest ray.\n7. Dodge lines, AoE rams.',
                imageUrl: './m6s/adds/latte-ranged.png',
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
                imageUrl: './m6s/adds/cleave-wave1.png',
        },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `Tank Yan West`,
                imageUrl: './m6s/adds/cleave-wave1.png',
            },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'Stack on Yan to bait Cat jump\nFocus Yan, then focus Cat',
                imageUrl: './m6s/adds/cleave-wave1.png',
            },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'Stack on Yan to bait Cat jump\nFocus Yan, then focus Cat',
                imageUrl: './m6s/adds/cleave-wave1.png',
            },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Stack on Yan to bait Cat jump\nFocus Yan, then focus Cat',
                imageUrl: './m6s/adds/cleave-wave1.png',
            },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Stack on Yan to bait Cat jump\nFocus Yan, then focus Cat',
                imageUrl: './m6s/adds/cleave-wave1.png',
            },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Stack on Yan to bait Cat jump\nFocus Yan, then focus Yan',
                imageUrl: './m6s/adds/cleave-wave1.png',
            },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Stack on Yan to bait Cat jump\nFocus Yan, then focus Yan',
                imageUrl: './m6s/adds/cleave-wave1.png',
            },
    },
    'wave2': {
        'MT': {
                role: 'Tank',
                party: 1,
                description: 'Pick up Squirrels South, bring them to NE Manta as soon as possible\nBring Squirrels to NW Manta when NE Manta dies',
                imageUrl: './m6s/adds/cleave-wave2.png',
            },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Kill NE Manta while cleaving Squirrels\nKill NW Manta, then move North for Wave 3',
                imageUrl: './m6s/adds/cleave-wave2.png',
            },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'One healer take NE Manta\nDrop first puddle Northeast, move south if a second drops\nIf not taking Manta, stand NE with Squirrels\nKill NE Manta while cleaving Squirrels, then kill NW Manta',
                imageUrl: './m6s/adds/cleave-wave2.png',
            },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'One healer take NE Manta\nDrop first puddle Northeast, move south if a second drops\nIf not taking Manta, stand NE with Squirrels\nKill NE Manta while cleaving Squirrels, then kill NW Manta',
                imageUrl: './m6s/adds/cleave-wave2.png',
            },
        'M1': {
                role: 'Melee',
                party: 1,
                description: 'Stand NE with Squirrels\nKill NE Manta while cleaving Squirrels, then continue cleaving Squirrels',
                imageUrl: './m6s/adds/cleave-wave2.png',
            },
        'M2': {
                role: 'Melee',
                party: 2,
                description: 'Stand NE with Squirrels\nKill NE Manta while cleaving Squirrels, then continue cleaving Squirrels',
                imageUrl: './m6s/adds/cleave-wave2.png',
            },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: '\nKill NE Manta first while cleaving, then kill NW Manta',
                imageUrl: './m6s/adds/cleave-wave2.png',
            },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Take NW Manta\nDrop first puddle Northwest-ish, but leave room in the far corner for the second\nKill NE Manta first while cleaving, then kill NW Manta',
                imageUrl: './m6s/adds/cleave-wave2.png',
            },
    },
    'wave3':{
        'MT': {
                role: 'Tank',
                party: 1,
                description: `Take squirrels to South, then to Jabber spawn West\nFirst stun on Jabber\nOnce Jabber is dead, kill remaining Squirrels before they enrage`,
                imageUrl: './m6s/adds/cleave-wave3.png',
            },
        'OT': {
                role: 'Tank',
                party: 2,
                description: 'Pick up Yan North and chill',
                imageUrl: './m6s/adds/cleave-wave3.png',
            },
        'H1': {
                role: 'Healer',
                party: 1,
                description: 'If targeted by Jabber, go Southeast and single target\nKill Jabber\nKill Squirrels before they enrage\nKill Cat before 4th wave',
                imageUrl: './m6s/adds/cleave-wave3.png',
            },
        'H2': {
                role: 'Healer',
                party: 2,
                description: 'If targeted by Jabber, go Southeast and single target\nKill Jabber\nKill Squirrels before they enrage\nKill Cat before 4th wave',
                imageUrl: './m6s/adds/cleave-wave3.png',
            },
        'M1': {
                role: 'Melee',
                party: 1,
                description: `Damage squirrels until Jabber spawns\nPrioritize Jabber, take second stun\nKill Squirrels before they enrage\nKill Cat before 4th wave\nHit boss if you can't hit the Cat`,
                imageUrl: './m6s/adds/cleave-wave3.png',
            },
        'M2': {
                role: 'Melee',
                party: 2,
                description: `Damage squirrels until Jabber spawns\nPrioritize Jabber, take second stun\nKill Squirrels before they enrage\nKill Cat before 4th wave\nHit boss if you can't hit the Cat`,
                imageUrl: './m6s/adds/cleave-wave3.png',
            },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: `Damage squirrels until Jabber spawns\nPrioritize Jabber\nKill Squirrels before they enrage\nKill Cat before 4th wave`,
                imageUrl: './m6s/adds/cleave-wave3.png',
            },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: `Damage squirrels until Jabber spawns\nPrioritize Jabber\nKill Squirrels before they enrage\nKill Cat before 4th wave`,
                imageUrl: './m6s/adds/cleave-wave3.png',
            },
    },
    'wave4':{
        'MT': {
                role: 'Tank',
                party: 1,
                description: `Pick up new Squirrels, take them to Jabber\nPrioritize Jabber, take first stun\nStack and kill SE Manta\nStack and kill SW Manta and Cat in either order\nKill Squirrels\nKill Yans`,
                imageUrl: './m6s/adds/cleave-wave4.png',
            },
        'OT': {
                role: 'Tank',
                party: 2,
                description: `Pick up new Yan, take them to 4 marker\nDon't get hit by Manta puddles\nAfter Squirrels die, take Yans to boss and kill\nCURRENT OBJECTIVE: SURVIVE`,
                imageUrl: './m6s/adds/cleave-wave4.png',
            },
        'H1': {
                role: 'Healer',
                party: 1,
                description: `If targeted by Jabber, go Southeast and single target\nMake sure to keep OT alive\nKill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,
                imageUrl: './m6s/adds/cleave-wave4.png',
            },
        'H2': {
                role: 'Healer',
                party: 2,
                description: `If targeted by Jabber, go Southeast and single target\nMake sure to keep OT alive\nKill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,
                imageUrl: './m6s/adds/cleave-wave4.png',
            },
        'M1': {
                role: 'Melee',
                party: 1,
                description: `Hit Squirrels until Jabber spawns\nPrioritize Jabber, take second stun\nKill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,
                imageUrl: './m6s/adds/cleave-wave4.png',
            },
        'M2': {
                role: 'Melee',
                party: 2,
                description: `Hit Squirrels until Jabber spawns\nPrioritize Jabber, take second stun\nKill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,
                imageUrl: './m6s/adds/cleave-wave4.png',
            },
        'R1': {
                role: 'Ranged',
                party: 1,
                description: 'Take SW Manta\nDrop puddles along West wall, then go East once you hit the corner\nHit Squirrels until Jabber spawns\nPrioritize Jabber\nKill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans',
                imageUrl: './m6s/adds/cleave-wave4.png',
            },
        'R2': {
                role: 'Ranged',
                party: 2,
                description: 'Take SE Manta\nDrop puddles along East wall, then go West once you hit the corner\nHit Squirrels until Jabber spawns\nPrioritize Jabber\nKill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans',
                imageUrl: './m6s/adds/cleave-wave4.png',
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
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Right',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Left',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Right',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Left',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Right',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Left',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Right',
                        },
                    ]
                },{
                    mechanic: 'Partners',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Front with M1',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Back with M2',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Left with R1',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Right with R2',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: ' Front with MT',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Back with OT',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Left with H1',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Right with H2',
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
                    description: 'Tanks NW-ish, DPS NE-ish',
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
            description: 'Relative North Facing Quicksand RMMR\nBlue tether goes in quicksand',
            mechs: [
                {
                    mechanic: 'Bombs',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Left close to boss',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Right close to boss',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Left far from boss',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Right far from boss',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Left close to boss',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'EaRightst close to boss',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Left far from boss',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'EaRightst far from boss',
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
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Take Right tower closest to wall',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West platform\nTake the tower closest to the final puddle drop',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East platform\nTake the tower closest to the final puddle drop',
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
                            description: 'West platform\nTake the tower furthest from the final puddle drop',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East platform\nTake the tower furthest from the final puddle drop',
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
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Right',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Left',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Right',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Left',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Right',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Left',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Right',
                        },
                    ]
                },{
                    mechanic: 'Partners',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Front with M1',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Back with M2',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Left with R1',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Right with R2',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Front with MT',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Back with OT',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Left with H1',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Right with H2',
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
                },
            ]
        },
        {
            phaseName: 'Cactus Dodges', 
            mechs: [
                {
                    mechanic: 'Dodges',
                    description: 'West-ish',
                },
                {
                    mechanic: 'Short Defamations',
                    description: 'Tanks NW-ish, DPS SW-ish',
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
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Across from unsafe corner',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Clockwise from cactus corner',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Counter-Clockwise from cactus corner',
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
            description: 'True North\nG1 W, G2 E, RMMR',
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
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Northwest',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Northeast',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Northwest',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Northwest',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Northeast',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'South',
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
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Far behind safe bridge',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Middle',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Far behind safe bridge',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Middle',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Middle',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Far behind safe bridge',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Far behind safe bridge',
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Lightning Storm', 
            description: 'Party stays on bridge\nDPS CCW, Support CW',
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
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Bait proteans\nTake East tower closest to wall',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West platform\nTake the tower closer to the middle',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East platform\nTake the tower closer to the middle',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Bait proteans\nTake West tower near marker',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Bait proteans\nTake East tower near marker',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West platform\nTake the tower further from the middle',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East platform\nTake the tower further from the middle',
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
                    description: 'Static positions',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Far West',
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Center South',
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Close Southeast',
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Center North',
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Close Southwest',
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Close Northwest (near 4 marker)',
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Far East',
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Close Northeast (near 3 marker)',
                        },
                    ]
                },
            ]
        },
    ]
}

