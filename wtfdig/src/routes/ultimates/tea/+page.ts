import type { TimelineItem } from "$lib/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({params}) => {
    return {
        strats: [elinabinStrat],
        timeline: [],
    }
}

export type Role = 'Tank' | 'Healer' | 'Melee' | 'Ranged';
export type Alignment = 'original' | 'truenorth' | 'relative';
export type StratRecord = Record<string, string | Record<string, string | PlayerMechStrat>>;

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
    description?: string | Record<string, string>;
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
    description: string | Record<string, string>;
    notes: string;
    strats: PhaseStrats[];
}

const setup: PhaseStrats[] = [
    {
        phaseName: 'Setup',
        tag: 'setup',
        mechs: []
    }
]

const p1: PhaseStrats[] = [
    {
        phaseName: 'Living Liquid: Cascade + Tornadoes',
        tag: 'p1',
        mechs: [
            {
                mechanic: 'Cascade',
                description: 'Open space is new North',
                imageUrl: './tea/living-liquid-0.webp',
            },
            {
                mechanic: 'Split',
                strats: [
                    { role: 'Tank', party: 1, description: 'Take Liquid SW, stand next to South tornado', imageUrl: './tea/living-liquid-1.webp' },
                    { role: 'Tank', party: 2, description: 'Take Hand opposite Liquid, slightly offset from Center', imageUrl: './tea/living-liquid-1.webp' },
                    { role: 'Healer', party: 1, description: 'Stand close to North', imageUrl: './tea/living-liquid-1.webp' },
                    { role: 'Healer', party: 2, description: 'Stand between East and South tornadoes', imageUrl: './tea/living-liquid-1.webp' },
                    { role: 'Melee', party: 1, description: 'Hit either Liquid or Hand', imageUrl: './tea/living-liquid-1.webp' },
                    { role: 'Melee', party: 2, description: 'Hit either Liquid or Hand', imageUrl: './tea/living-liquid-1.webp' },
                    { role: 'Ranged', party: 1, description: 'Bait West tornado, point protean North', imageUrl: './tea/living-liquid-1.webp' },
                    { role: 'Ranged', party: 2, description: 'Bait East tornado, point protean North', imageUrl: './tea/living-liquid-1.webp' },
                ]
            },
            {
                mechanic: 'Proteans',
                strats: [
                    { role: 'Tank', party: 1, description: `Provoke Hand and Invuln\nBait protean from South tornado\nArm's Length if not dodging`, imageUrl: './tea/living-liquid-2.webp' },
                    { role: 'Tank', party: 2, description: 'Stand to the side of bosses to avoid cleave', imageUrl: './tea/living-liquid-2.webp' },
                    { role: 'Healer', party: 1, description: 'Stand close to North', imageUrl: './tea/living-liquid-2.webp' },
                    { role: 'Healer', party: 2, description: 'Stand between East and South tornadoes', imageUrl: './tea/living-liquid-2.webp' },
                    { role: 'Melee', party: 1, description: 'Hit either Liquid or Hand', imageUrl: './tea/living-liquid-2.webp' },
                    { role: 'Melee', party: 2, description: 'Hit either Liquid or Hand', imageUrl: './tea/living-liquid-2.webp' },
                    { role: 'Ranged', party: 1, description: 'Bait West protean, step out, then step back in', imageUrl: './tea/living-liquid-2.webp' },
                    { role: 'Ranged', party: 2, description: 'Bait East protean, step out, then step back in', imageUrl: './tea/living-liquid-2.webp' },
                ]
            },
        ]
    },
    {
        phaseName: 'Living Liquid: Dolls',
        tag: 'p1',
        mechs: [
            {
                mechanic: 'Doll Spawn',
                description: 'Dolls always spawn slightly CCW of cardinals',
                strats: [
                    { role: 'Tank', party: 1, description: 'Take Liquid SW, stand next to South tornado', imageUrl: './tea/living-liquid-3.webp' },
                    { role: 'Tank', party: 2, description: 'Take Hand opposite Liquid, slightly offset from Center', imageUrl: './tea/living-liquid-3.webp' },
                    { role: 'Healer', party: 1, description: 'Stand close to North', imageUrl: './tea/living-liquid-3.webp' },
                    { role: 'Healer', party: 2, description: 'Stand between East and South tornadoes', imageUrl: './tea/living-liquid-3.webp' },
                    { role: 'Melee', party: 1, description: 'Take doll in Southwest quadrant\nStand directly on doll to avoid bait issues', imageUrl: './tea/living-liquid-3.webp' },
                    { role: 'Melee', party: 2, description: 'Take doll in Southeast quadrant\nStand directly on doll to avoid bait issues', imageUrl: './tea/living-liquid-3.webp' },
                    { role: 'Ranged', party: 1, description: 'Take doll in Northwest quadrant', imageUrl: './tea/living-liquid-3.webp' },
                    { role: 'Ranged', party: 2, description: 'Take doll in Northeast quadrant', imageUrl: './tea/living-liquid-3.webp' },
                ]
            },
            {
                mechanic: 'First Feed',
                strats: [
                    { role: 'Tank', party: 1, description: 'Avoid orbs, bring bosses to middle', imageUrl: './tea/living-liquid-4.webp' },
                    { role: 'Tank', party: 2, description: 'Avoid orbs, bring bosses to middle', imageUrl: './tea/living-liquid-4.webp' },
                    { role: 'Healer', party: 1, description: 'Move Center to heal', imageUrl: './tea/living-liquid-4.webp' },
                    { role: 'Healer', party: 2, description: 'Move Center to heal', imageUrl: './tea/living-liquid-4.webp' },
                    { role: 'Melee', party: 1, description: 'Feed after first Exhaust\nAvoid orbs', imageUrl: './tea/living-liquid-4.webp' },
                    { role: 'Melee', party: 2, description: 'Feed after first Exhaust\nAvoid orbs', imageUrl: './tea/living-liquid-4.webp' },
                    { role: 'Ranged', party: 1, description: 'Move near Center for heals', imageUrl: './tea/living-liquid-4.webp' },
                    { role: 'Ranged', party: 2, description: 'Move near Center for heals', imageUrl: './tea/living-liquid-4.webp' },
                ]
            },
            {
                mechanic: 'Second Feed',
                strats: [
                    { role: 'Tank', party: 1, description: `Point Liquid Southeast and take cleave`, imageUrl: './tea/living-liquid-6.webp' },
                    { role: 'Tank', party: 2, description: 'Point Hand Southwest and take cleave', imageUrl: './tea/living-liquid-6.webp' },
                    { role: 'Healer', party: 1, description: 'Stand North-ish to avoid cleaves', imageUrl: './tea/living-liquid-6.webp' },
                    { role: 'Healer', party: 2, description: 'Stand North-ish to avoid cleaves', imageUrl: './tea/living-liquid-6.webp' },
                    { role: 'Melee', party: 1, description: 'Stand North-ish to avoid cleaves', imageUrl: './tea/living-liquid-6.webp' },
                    { role: 'Melee', party: 2, description: 'Stand North-ish to avoid cleaves', imageUrl: './tea/living-liquid-6.webp' },
                    { role: 'Ranged', party: 1, description: 'Feed after second Exhaust\nMake sure to avoid cleaves', imageUrl: './tea/living-liquid-6.webp' },
                    { role: 'Ranged', party: 2, description: 'Feed after second Exhaust\nMake sure to avoid cleaves', imageUrl: './tea/living-liquid-6.webp' },
                ]
            },
        ]
    },
    {
        phaseName: 'Living Liquid: Protean 1',
        tag: 'p1',
        mechs: [
            {
                mechanic: 'N/S Bait',
                description: 'Tanks South, everyone else North',
                strats: [
                    { role: 'Tank', party: 1, description: 'Bait boss protean South', imageUrl: './tea/living-liquid-7.webp' },
                    { role: 'Tank', party: 2, description: 'Bait boss protean South', imageUrl: './tea/living-liquid-7.webp' },
                    { role: 'Healer', party: 1, description: 'Bait boss protean North', imageUrl: './tea/living-liquid-7.webp' },
                    { role: 'Healer', party: 2, description: 'Bait boss protean North', imageUrl: './tea/living-liquid-7.webp' },
                    { role: 'Melee', party: 1, description: 'Bait boss protean North', imageUrl: './tea/living-liquid-7.webp' },
                    { role: 'Melee', party: 2, description: 'Bait boss protean North', imageUrl: './tea/living-liquid-7.webp' },
                    { role: 'Ranged', party: 1, description: 'Bait boss protean North', imageUrl: './tea/living-liquid-7.webp' },
                    { role: 'Ranged', party: 2, description: 'Bait boss protean North', imageUrl: './tea/living-liquid-7.webp' },
                ]
            },
            {
                mechanic: 'Melee Baits',
                description: 'Melees close to bait proteans, Ranged far to bait puddles',
                strats: [
                    { role: 'Tank', party: 1, description: 'Bait boss protean Southwest', imageUrl: './tea/living-liquid-8.webp' },
                    { role: 'Tank', party: 2, description: 'Bait boss protean Southeast', imageUrl: './tea/living-liquid-8.webp' },
                    { role: 'Healer', party: 1, description: 'Move out and Northwest to bait puddle', imageUrl: './tea/living-liquid-8.webp' },
                    { role: 'Healer', party: 2, description: 'Move out and Northeast to bait puddle', imageUrl: './tea/living-liquid-8.webp' },
                    { role: 'Melee', party: 1, description: 'Bait boss protean West', imageUrl: './tea/living-liquid-8.webp' },
                    { role: 'Melee', party: 2, description: 'Bait boss protean East', imageUrl: './tea/living-liquid-8.webp' },
                    { role: 'Ranged', party: 1, description: 'Move out and Northwest to bait puddle', imageUrl: './tea/living-liquid-8.webp' },
                    { role: 'Ranged', party: 2, description: 'Move out and Northeast to bait puddle', imageUrl: './tea/living-liquid-8.webp' },
                ]
            },
            {
                mechanic: 'Ranged Baits',
                description: 'Ranged close to bait proteans, Melees max melee to avoid baiting',
                strats: [
                    { role: 'Tank', party: 1, description: `Stand max melee Southwest`, imageUrl: './tea/living-liquid-9.webp' },
                    { role: 'Tank', party: 2, description: 'Stand max melee Southeast', imageUrl: './tea/living-liquid-9.webp' },
                    { role: 'Healer', party: 1, description: 'Bait boss protean Northwest', imageUrl: './tea/living-liquid-9.webp' },
                    { role: 'Healer', party: 2, description: 'Bait boss protean Northeast', imageUrl: './tea/living-liquid-9.webp' },
                    { role: 'Melee', party: 1, description: 'Stand max melee Southwest', imageUrl: './tea/living-liquid-9.webp' },
                    { role: 'Melee', party: 2, description: 'Stand max melee Southeast', imageUrl: './tea/living-liquid-9.webp' },
                    { role: 'Ranged', party: 1, description: 'Bait boss protean West', imageUrl: './tea/living-liquid-9.webp' },
                    { role: 'Ranged', party: 2, description: 'Bait boss protean East', imageUrl: './tea/living-liquid-9.webp' },
                ]
            },
            {
                mechanic: 'Drainage',
                description: 'Party North, tanks slightly separated to avoid clipping with AoEs',
                imageUrl: './tea/living-liquid-10.webp'
            },
        ]
    },
    {
        phaseName: 'Living Liquid: Protean 2',
        tag: 'p1',
        mechs: [
            {
                mechanic: 'N/S Bait',
                description: 'MT + OT + Regen Healer + Caster N, Shield Healer + Phys Ranged + Melees S',
                strats: [
                    { role: 'Tank', party: 1, description: 'Bait boss protean North', imageUrl: './tea/living-liquid-12.webp' },
                    { role: 'Tank', party: 2, description: 'Bait boss protean North', imageUrl: './tea/living-liquid-12.webp' },
                    { role: 'Healer', party: 1, description: 'Bait boss protean North', imageUrl: './tea/living-liquid-12.webp' },
                    { role: 'Healer', party: 2, description: 'Bait boss protean South', imageUrl: './tea/living-liquid-12.webp' },
                    { role: 'Melee', party: 1, description: 'Bait boss protean South', imageUrl: './tea/living-liquid-12.webp' },
                    { role: 'Melee', party: 2, description: 'Bait boss protean South', imageUrl: './tea/living-liquid-12.webp' },
                    { role: 'Ranged', party: 1, description: 'Bait boss protean North', imageUrl: './tea/living-liquid-12.webp' },
                    { role: 'Ranged', party: 2, description: 'Bait boss protean South', imageUrl: './tea/living-liquid-12.webp' },
                ]
            },
            {
                mechanic: 'Melee Boss Baits',
                description: 'Melees close to boss to bait boss proteans, Ranged bait puddles + tornado proteans',
                strats: [
                    { role: 'Tank', party: 1, description: 'Bait boss protean Northeast', imageUrl: './tea/living-liquid-14.webp' },
                    { role: 'Tank', party: 2, description: 'Bait boss protean West', imageUrl: './tea/living-liquid-14.webp' },
                    { role: 'Healer', party: 1, description: 'Move Northwest and bait puddles + West tornado protean towards arena North', imageUrl: './tea/living-liquid-14.webp' },
                    { role: 'Healer', party: 2, description: 'Move Southwest and bait puddles + South tornado protean towards West', imageUrl: './tea/living-liquid-14.webp' },
                    { role: 'Melee', party: 1, description: 'Bait boss protean South', imageUrl: './tea/living-liquid-14.webp' },
                    { role: 'Melee', party: 2, description: 'Bait boss protean East', imageUrl: './tea/living-liquid-14.webp' },
                    { role: 'Ranged', party: 1, description: 'Move Northwest and bait puddles + West tornado protean towards arena North', imageUrl: './tea/living-liquid-14.webp' },
                    { role: 'Ranged', party: 2, description: 'Move Southeast and bait puddles + East tornado protean towards South', imageUrl: './tea/living-liquid-14.webp' },
                ]
            },
            {
                mechanic: 'Ranged Boss Baits',
                description: 'Ranged close to bait proteans, Melees max melee to avoid baiting',
                strats: [
                    { role: 'Tank', party: 1, description: 'Stand max melee Northeast', imageUrl: './tea/living-liquid-15.webp' },
                    { role: 'Tank', party: 2, description: 'Stand max melee Southwest, get ready to bait West tornado protean', imageUrl: './tea/living-liquid-15.webp' },
                    { role: 'Healer', party: 1, description: 'Bait boss protean Northwest', imageUrl: './tea/living-liquid-15.webp' },
                    { role: 'Healer', party: 2, description: 'Bait boss protean South', imageUrl: './tea/living-liquid-15.webp' },
                    { role: 'Melee', party: 1, description: 'Stand max melee Southeast, get ready to bait South tornado protean', imageUrl: './tea/living-liquid-15.webp' },
                    { role: 'Melee', party: 2, description: 'Stand max melee Northeast, get ready to bait East tornado protean', imageUrl: './tea/living-liquid-15.webp' },
                    { role: 'Ranged', party: 1, description: 'Bait boss protean West', imageUrl: './tea/living-liquid-15.webp' },
                    { role: 'Ranged', party: 2, description: 'Bait boss protean East', imageUrl: './tea/living-liquid-15.webp' },
                ]
            },
            {
                mechanic: 'Melee Tornado Baits + Hand of Parting',
                description: '',
                strats: [
                    { role: 'Tank', party: 1, description: `Pull Liquid Northeast, don't get hit by M2's protean`, imageUrl: './tea/living-liquid-16.webp' },
                    { role: 'Tank', party: 2, description: 'Pull Hand Southwest, bait West tornado protean towards South', imageUrl: './tea/living-liquid-16.webp' },
                    { role: 'Healer', party: 1, description: 'Hang out near center', imageUrl: './tea/living-liquid-16.webp' },
                    { role: 'Healer', party: 2, description: 'Bait boss protean South', imageUrl: './tea/living-liquid-16.webp' },
                    { role: 'Melee', party: 1, description: 'Stand Southeast, bait South tornado protean towards East', imageUrl: './tea/living-liquid-16.webp' },
                    { role: 'Melee', party: 2, description: 'Stand Northeast, bait East tornado protean towards North', imageUrl: './tea/living-liquid-16.webp' },
                    { role: 'Ranged', party: 1, description: 'Hang out near center', imageUrl: './tea/living-liquid-16.webp' },
                    { role: 'Ranged', party: 2, description: 'Hang out near center', imageUrl: './tea/living-liquid-16.webp' },
                ]
            },
        ]
    }
];

const intermission1: PhaseStrats[] = [
    {
        phaseName: 'Start',
        tag: 'i1',
        mechs: [
            {
                mechanic: 'Starting Spots',
                description: '1256 between W and NE, 3478 between E and SW',
                imageUrl: './tea/limit-cut-start.webp'
            },
            {
                mechanic: 'First Explosions',
                description: '1234 on inner ring, 5678 on outer ring\nLower number in front',
                imageUrl: './tea/limit-cut-4.webp'
            },
        ]
    },
    {
        phaseName: 'Limit Cut',
        tag: 'i1',
        mechs: [
            {
                mechanic: '1 + 2',
                description: '1 gets slash as 4th explosion goes off\n2 gets dash as Center explosion goes off\n5/6 swap places with 1/2\n❗3/4 make sure to wait',
                imageUrl: './tea/limit-cut-6.webp'
            },
            {
                mechanic: '3 + 4',
                description: '3 + 4 get slash + dash\n7/8 swap places with 3/4\n1256 keep moving',
                imageUrl: './tea/limit-cut-7.webp'
            },
            {
                mechanic: '5 + 6',
                description: '5 + 6 get slash + dash\n3478 keep moving',
                imageUrl: './tea/limit-cut-9.webp'
            },
            {
                mechanic: '7 + 8',
                description: '7 + 8 get slash + dash\nMove into center after final center explosion goes off\nMake sure not to get hit by 7 or 8 mechanics',
                imageUrl: './tea/limit-cut-11.webp'
            },
        ]
    }
];

const p2: PhaseStrats[] = [
    {
        phaseName: 'P2: BJCC',
        tag: 'p2',
        mechs: []
    }
];

const intermission2: PhaseStrats[] = [
    {
        phaseName: 'Intermission: Temporal Stasis',
        tag: 'i2',
        mechs: []
    }
];

const p3: PhaseStrats[] = [
    {
        phaseName: 'P3: Alexander Prime',
        tag: 'p3',
        mechs: []
    }
];

const p4: PhaseStrats[] = [
    {
        phaseName: 'P4: Perfect Alexander',
        tag: 'p4',
        mechs: []
    }
];


const elinabinStrat: Strat = {
    stratName: 'elina',
    description: 'Elinabin',
    stratUrl: {
        'Elinabin': 'https://pastebin.com/uxVnJm7R',
        'P1: Living Liquid': 'https://ff14.toolboxgaming.space/?id=725383877116761&preview=1',
        'Intermission: Limit Cut': 'https://ff14.toolboxgaming.space/?id=803293127441961&preview=1',
        'P2: BJCC': 'https://ff14.toolboxgaming.space/?id=492297437831961&preview=1',
        'Timestop + P3: Alexander Prime': 'https://ff14.toolboxgaming.space/?id=860745463802461&preview=1',
        'Wormhole': 'https://ff14.toolboxgaming.space/?id=537197026169861&preview=1',
        'P4: Perfect Alexander': 'https://ff14.toolboxgaming.space/?id=170875560147661&preview=1',
    },
    notes: '',
    strats: [
        ...setup,
        ...p1,
        ...intermission1,
        ...p2,
        ...intermission2,
        ...p3,
        ...p4,
    ]
}
