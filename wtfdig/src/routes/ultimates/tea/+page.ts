import type { TimelineItem } from "$lib/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({params}) => {
    return {
        strats: [elinabinStrat],
        timeline: [],
    }
}

export type Role = 'Tank' | 'Healer' | 'Shield' | 'Regen' | 'Melee' | 'Ranged' | 'Pranged' | 'Caster';
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
                    { role: 'Pranged', party: 1, description: 'Bait East tornado, point protean North', imageUrl: './tea/living-liquid-1.webp' },
                    { role: 'Pranged', party: 2, description: 'Bait East tornado, point protean North', imageUrl: './tea/living-liquid-1.webp' },
                    { role: 'Caster', party: 1, description: 'Bait West tornado, point protean North', imageUrl: './tea/living-liquid-1.webp' },
                    { role: 'Caster', party: 2, description: 'Bait West tornado, point protean North', imageUrl: './tea/living-liquid-1.webp' },
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
                    { role: 'Pranged', party: 1, description: 'Bait East protean, step out, then step back in', imageUrl: './tea/living-liquid-2.webp' },
                    { role: 'Pranged', party: 2, description: 'Bait East protean, step out, then step back in', imageUrl: './tea/living-liquid-2.webp' },
                    { role: 'Caster', party: 1, description: 'Bait West protean, step out, then step back in', imageUrl: './tea/living-liquid-2.webp' },
                    { role: 'Caster', party: 2, description: 'Bait West protean, step out, then step back in', imageUrl: './tea/living-liquid-2.webp' },
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
                    { role: 'Pranged', party: 1, description: 'Take doll in Northeast quadrant', imageUrl: './tea/living-liquid-3.webp' },
                    { role: 'Pranged', party: 2, description: 'Take doll in Northeast quadrant', imageUrl: './tea/living-liquid-3.webp' },
                    { role: 'Caster', party: 1, description: 'Take doll in Northwest quadrant', imageUrl: './tea/living-liquid-3.webp' },
                    { role: 'Caster', party: 2, description: 'Take doll in Northwest quadrant', imageUrl: './tea/living-liquid-3.webp' },
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
                    { role: 'Pranged', party: 1, description: 'Move near Center for heals', imageUrl: './tea/living-liquid-4.webp' },
                    { role: 'Pranged', party: 2, description: 'Move near Center for heals', imageUrl: './tea/living-liquid-4.webp' },
                    { role: 'Caster', party: 1, description: 'Move near Center for heals', imageUrl: './tea/living-liquid-4.webp' },
                    { role: 'Caster', party: 2, description: 'Move near Center for heals', imageUrl: './tea/living-liquid-4.webp' },
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
                    { role: 'Pranged', party: 1, description: 'Feed after second Exhaust\nMake sure to avoid cleaves', imageUrl: './tea/living-liquid-6.webp' },
                    { role: 'Pranged', party: 2, description: 'Feed after second Exhaust\nMake sure to avoid cleaves', imageUrl: './tea/living-liquid-6.webp' },
                    { role: 'Caster', party: 1, description: 'Feed after second Exhaust\nMake sure to avoid cleaves', imageUrl: './tea/living-liquid-6.webp' },
                    { role: 'Caster', party: 2, description: 'Feed after second Exhaust\nMake sure to avoid cleaves', imageUrl: './tea/living-liquid-6.webp' },
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
                    { role: 'Pranged', party: 1, description: 'Bait boss protean North', imageUrl: './tea/living-liquid-7.webp' },
                    { role: 'Pranged', party: 2, description: 'Bait boss protean North', imageUrl: './tea/living-liquid-7.webp' },
                    { role: 'Caster', party: 1, description: 'Bait boss protean North', imageUrl: './tea/living-liquid-7.webp' },
                    { role: 'Caster', party: 2, description: 'Bait boss protean North', imageUrl: './tea/living-liquid-7.webp' },
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
                    { role: 'Pranged', party: 1, description: 'Move out and Northeast to bait puddle', imageUrl: './tea/living-liquid-8.webp' },
                    { role: 'Pranged', party: 2, description: 'Move out and Northeast to bait puddle', imageUrl: './tea/living-liquid-8.webp' },
                    { role: 'Caster', party: 1, description: 'Move out and Northwest to bait puddle', imageUrl: './tea/living-liquid-8.webp' },
                    { role: 'Caster', party: 2, description: 'Move out and Northwest to bait puddle', imageUrl: './tea/living-liquid-8.webp' },
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
                    { role: 'Pranged', party: 1, description: 'Bait boss protean East', imageUrl: './tea/living-liquid-9.webp' },
                    { role: 'Pranged', party: 2, description: 'Bait boss protean East', imageUrl: './tea/living-liquid-9.webp' },
                    { role: 'Caster', party: 1, description: 'Bait boss protean West', imageUrl: './tea/living-liquid-9.webp' },
                    { role: 'Caster', party: 2, description: 'Bait boss protean West', imageUrl: './tea/living-liquid-9.webp' },
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
                    { role: 'Pranged', party: 1, description: 'Bait boss protean South', imageUrl: './tea/living-liquid-12.webp' },
                    { role: 'Pranged', party: 2, description: 'Bait boss protean South', imageUrl: './tea/living-liquid-12.webp' },
                    { role: 'Caster', party: 1, description: 'Bait boss protean North', imageUrl: './tea/living-liquid-12.webp' },
                    { role: 'Caster', party: 2, description: 'Bait boss protean North', imageUrl: './tea/living-liquid-12.webp' },
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
                    { role: 'Pranged', party: 1, description: 'Move Southeast and bait puddles + East tornado protean towards South', imageUrl: './tea/living-liquid-14.webp' },
                    { role: 'Pranged', party: 2, description: 'Move Southeast and bait puddles + East tornado protean towards South', imageUrl: './tea/living-liquid-14.webp' },
                    { role: 'Caster', party: 1, description: 'Move Northwest and bait puddles + West tornado protean towards arena North', imageUrl: './tea/living-liquid-14.webp' },
                    { role: 'Caster', party: 2, description: 'Move Northwest and bait puddles + West tornado protean towards arena North', imageUrl: './tea/living-liquid-14.webp' },
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
                    { role: 'Pranged', party: 1, description: 'Bait boss protean East', imageUrl: './tea/living-liquid-15.webp' },
                    { role: 'Pranged', party: 2, description: 'Bait boss protean East', imageUrl: './tea/living-liquid-15.webp' },
                    { role: 'Caster', party: 1, description: 'Bait boss protean West', imageUrl: './tea/living-liquid-15.webp' },
                    { role: 'Caster', party: 2, description: 'Bait boss protean West', imageUrl: './tea/living-liquid-15.webp' },
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
                    { role: 'Pranged', party: 1, description: 'Hang out near center', imageUrl: './tea/living-liquid-16.webp' },
                    { role: 'Pranged', party: 2, description: 'Hang out near center', imageUrl: './tea/living-liquid-16.webp' },
                    { role: 'Caster', party: 1, description: 'Hang out near center', imageUrl: './tea/living-liquid-16.webp' },
                    { role: 'Caster', party: 2, description: 'Hang out near center', imageUrl: './tea/living-liquid-16.webp' },
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
        phaseName: 'BJCC: Start + Chakrams + First Pass',
        tag: 'p2',
        mechs: [
            {
                mechanic: 'Starting Spots',
                description: 'Clock spots, stand on the green ring',
                strats: [
                    { role: 'Tank', party: 1, description: `❗Provoke BJ and center boss before clock\nNorth`, imageUrl: './tea/bjcc-1.webp' },
                    { role: 'Tank', party: 2, description: '❗Provoke CC and center boss before clock\nSouth', imageUrl: './tea/bjcc-1.webp' },
                    { role: 'Healer', party: 1, description: 'West', imageUrl: './tea/bjcc-1.webp' },
                    { role: 'Healer', party: 2, description: 'East', imageUrl: './tea/bjcc-1.webp' },
                    { role: 'Melee', party: 1, description: 'Northeast', imageUrl: './tea/bjcc-1.webp' },
                    { role: 'Melee', party: 2, description: 'Northwest', imageUrl: './tea/bjcc-1.webp' },
                    { role: 'Pranged', party: 1, description: 'Southwest', imageUrl: './tea/bjcc-1.webp' },
                    { role: 'Pranged', party: 2, description: 'Southwest', imageUrl: './tea/bjcc-1.webp' },
                    { role: 'Caster', party: 1, description: 'Southeast', imageUrl: './tea/bjcc-1.webp' },
                    { role: 'Caster', party: 2, description: 'Southeast', imageUrl: './tea/bjcc-1.webp' },
                ]
            },
            {
                mechanic: 'Chakrams',
                description: `2 Chakrams outside arena opposite each other\nMove to edge of arena to bait explosions\n❗Don't be in the path of the chakrams going through mid\nMove back into center, don't touch Nisis`,
                imageUrl: './tea/bjcc-6.webp'
            },
            {
                mechanic: 'First Nisi Pass',
                description: `After Photon, DPS rotate CCW to pass Nisi to/from Support`,
                imageUrl: './tea/bjcc-8.webp'
            },
        ]
    },
    {
        phaseName: 'BJCC: Water/Lightning 1',
        tag: 'p2',
        mechs: [
            {
                mechanic: 'Setup',
                strats: [
                    { role: 'Tank', party: 1, description: `Tank BJ North near A marker`, imageUrl: './tea/bjcc-9.webp' },
                    { role: 'Tank', party: 2, description: 'Take CC South and point South to bait Spin Crusher', imageUrl: './tea/bjcc-9.webp' },
                    { role: 'Healer', party: 1, description: 'If Water: stand on D marker\nIf no Water: stand N or E of Water', imageUrl: './tea/bjcc-9.webp' },
                    { role: 'Healer', party: 2, description: 'If Water: stand on D marker\nIf no Water: stand N or E of Water', imageUrl: './tea/bjcc-9.webp' },
                    { role: 'Melee', party: 1, description: 'If Lightning: stand next to BJ Tank (MT)\nIf no Lightning: stand near mid and keep hitting BJ', imageUrl: './tea/bjcc-9.webp' },
                    { role: 'Melee', party: 2, description: 'If Lightning: stand next to BJ Tank (MT)\nIf no Lightning: stand near mid and keep hitting BJ', imageUrl: './tea/bjcc-9.webp' },
                    { role: 'Pranged', party: 1, description: 'If Lightning: loop around CW behind water stack and stand next to MT\nIf no Lightning: stand South of Water stack on D', imageUrl: './tea/bjcc-9.webp' },
                    { role: 'Pranged', party: 2, description: 'If Lightning: loop around CW behind water stack and stand next to MT\nIf no Lightning: stand South of Water stack on D', imageUrl: './tea/bjcc-9.webp' },
                    { role: 'Caster', party: 1, description: 'If Lightning: stand next to BJ Tank (MT)\nIf no Lightning: stand SE of Water stack on D', imageUrl: './tea/bjcc-9.webp' },
                    { role: 'Caster', party: 2, description: 'If Lightning: stand next to BJ Tank (MT)\nIf no Lightning: stand SE of Water stack on D', imageUrl: './tea/bjcc-9.webp' },
                ]
            },
            {
                mechanic: 'Resolution',
                description: 'Water + Lightning debuffs get transferred to a random person in that stack\nMake sure to avoid car crashes',
                strats: [
                    { role: 'Tank', party: 1, description: 'Keep tanking BJ on A', imageUrl: './tea/bjcc-11.webp' },
                    { role: 'Tank', party: 2, description: 'Stay S, get ready to bait mines', imageUrl: './tea/bjcc-11.webp' },
                    { role: 'Healer', party: 1, description: 'Move mid to prepare for Enumerations', imageUrl: './tea/bjcc-11.webp' },
                    { role: 'Healer', party: 2, description: 'Move mid to prepare for Enumerations', imageUrl: './tea/bjcc-11.webp' },
                    { role: 'Melee', party: 1, description: 'Move mid to prepare for Enumerations', imageUrl: './tea/bjcc-11.webp' },
                    { role: 'Melee', party: 2, description: 'Move mid to prepare for Enumerations', imageUrl: './tea/bjcc-11.webp' },
                    { role: 'Pranged', party: 1, description: 'Move South to prepare to bait mines with OT', imageUrl: './tea/bjcc-11.webp' },
                    { role: 'Pranged', party: 2, description: 'Move South to prepare to bait mines with OT', imageUrl: './tea/bjcc-11.webp' },
                    { role: 'Caster', party: 1, description: 'Move mid to prepare for Enumerations', imageUrl: './tea/bjcc-11.webp' },
                    { role: 'Caster', party: 2, description: 'Move mid to prepare for Enumerations', imageUrl: './tea/bjcc-11.webp' },
                ]
            },
        ]
    },
    {
        phaseName: 'BJCC: Enumerations',
        tag: 'p2',
        mechs: [
            {
                mechanic: 'Missiles + Mine Baits',
                description: 'BJ shoots missiles then mines at 2 furthest players (OT and Phys Ranged)',
                strats: [
                    { role: 'Tank', party: 1, description: 'Keep tanking BJ on A', imageUrl: './tea/bjcc-13.webp' },
                    { role: 'Tank', party: 2, description: 'Start on South wall, West of Phys Ranged\nBait Missile puddle then step North to bait Mine', imageUrl: './tea/bjcc-13.webp' },
                    { role: 'Healer', party: 1, description: 'Preposition for Enumerations', imageUrl: './tea/bjcc-13.webp' },
                    { role: 'Healer', party: 2, description: 'Preposition for Enumerations', imageUrl: './tea/bjcc-13.webp' },
                    { role: 'Melee', party: 1, description: 'Preposition for Enumerations', imageUrl: './tea/bjcc-13.webp' },
                    { role: 'Melee', party: 2, description: 'Preposition for Enumerations', imageUrl: './tea/bjcc-13.webp' },
                    { role: 'Pranged', party: 1, description: 'Start on South wall, East of OT\nBait Missile puddle then step North to bait Mine', imageUrl: './tea/bjcc-13.webp' },
                    { role: 'Pranged', party: 2, description: 'Start on South wall, East of OT\nBait Missile puddle then step North to bait Mine', imageUrl: './tea/bjcc-13.webp' },
                    { role: 'Caster', party: 1, description: 'Preposition for Enumerations', imageUrl: './tea/bjcc-13.webp' },
                    { role: 'Caster', party: 2, description: 'Preposition for Enumerations', imageUrl: './tea/bjcc-13.webp' },
                ]
            },
            {
                mechanic: 'Enumerations + Mine Pops + Ice',
                description: 'Enums must have 3 players\nM1/Phys Ranged will flex',
                strats: [
                    { role: 'Tank', party: 1, description: 'If Ice, drop near D to freeze Water\nPlace Ice, then try to recenter BJ\nStand still after for Nisi pass', imageUrl: './tea/bjcc-15.webp' },
                    { role: 'Tank', party: 2, description: 'If Ice, drop near D to freeze Water\nPlace Ice, then pop mines\nStand still after for Nisi pass', imageUrl: './tea/bjcc-15.webp' },
                    { role: 'Healer', party: 1, description: 'West Enumeration', imageUrl: './tea/bjcc-15.webp' },
                    { role: 'Healer', party: 2, description: 'East Enumeration', imageUrl: './tea/bjcc-15.webp' },
                    { role: 'Melee', party: 1, description: 'West Enumeration\nIf both Melees or both Ranged get enums, swap with Phys Ranged', imageUrl: './tea/bjcc-15.webp' },
                    { role: 'Melee', party: 2, description: 'West Enumeration', imageUrl: './tea/bjcc-15.webp' },
                    { role: 'Pranged', party: 1, description: 'East Enumeration\nIf both Melees or both Ranged get enums, swap with M1', imageUrl: './tea/bjcc-15.webp' },
                    { role: 'Pranged', party: 2, description: 'East Enumeration\nIf both Melees or both Ranged get enums, swap with M1', imageUrl: './tea/bjcc-15.webp' },
                    { role: 'Caster', party: 1, description: 'East Enumeration', imageUrl: './tea/bjcc-15.webp' },
                    { role: 'Caster', party: 2, description: 'East Enumeration', imageUrl: './tea/bjcc-15.webp' },
                ]
            },
        ]
    },
    {
        phaseName: 'BJCC: Second Pass',
        tag: 'p2',
        mechs: [
            {
                mechanic: 'Second Nisi Pass',
                description: 'Same partners as First Pass\nDPS move',
                strats: [
                    { role: 'Tank', party: 1, description: 'Stay still for pass with M1', imageUrl: './tea/bjcc-18.webp' },
                    { role: 'Tank', party: 2, description: 'Stay still after mine pop for pass with Phys Ranged', imageUrl: './tea/bjcc-18.webp' },
                    { role: 'Healer', party: 1, description: 'Stay still for pass with M2', imageUrl: './tea/bjcc-18.webp' },
                    { role: 'Healer', party: 2, description: 'Stay still for pass with Caster', imageUrl: './tea/bjcc-18.webp' },
                    { role: 'Melee', party: 1, description: 'Pass Nisi to MT (North)', imageUrl: './tea/bjcc-18.webp' },
                    { role: 'Melee', party: 2, description: 'Pass Nisi to H1 (West Mid)', imageUrl: './tea/bjcc-18.webp' },
                    { role: 'Pranged', party: 1, description: 'Pass Nisi to OT (South)\n❗Wait for mine pop to avoid explosion', imageUrl: './tea/bjcc-18.webp' },
                    { role: 'Pranged', party: 2, description: 'Pass Nisi to OT (South)\n❗Wait for mine pop to avoid explosion', imageUrl: './tea/bjcc-18.webp' },
                    { role: 'Caster', party: 1, description: 'Pass Nisi to H2 (East Mid)', imageUrl: './tea/bjcc-18.webp' },
                    { role: 'Caster', party: 2, description: 'Pass Nisi to H2 (East Mid)', imageUrl: './tea/bjcc-18.webp' },
                ]
            },
        ]
    },
    {
        phaseName: 'BJCC: Water/Lightning 2',
        tag: 'p2',
        mechs: [
            {
                mechanic: 'Setup',
                strats: [
                    { role: 'Tank', party: 1, description: `Stay North to drop Lightning`, imageUrl: './tea/bjcc-19.webp' },
                    { role: 'Tank', party: 2, description: 'Tank CC slightly West of C/3\nBe ready to point CC mid for shield', imageUrl: './tea/bjcc-19.webp' },
                    { role: 'Healer', party: 1, description: 'If Water: stand on B marker\nIf you had first Water: stand North with MT to pick up Lightning\nIf no Water: stand SW of B to take Water stack', imageUrl: './tea/bjcc-19.webp' },
                    { role: 'Healer', party: 2, description: 'If Water: stand on B marker\nIf you had first Water: stand North with MT to pick up Lightning\nIf no Water: stand SW of B to take Water stack', imageUrl: './tea/bjcc-19.webp' },
                    { role: 'Melee', party: 1, description: 'Stand near mid and keep hitting BJ\nKeep distance from BJ tank to avoid Lightning AoE', imageUrl: './tea/bjcc-19.webp' },
                    { role: 'Melee', party: 2, description: 'Stand near mid and keep hitting BJ\nKeep distance from BJ tank to avoid Lightning AoE', imageUrl: './tea/bjcc-19.webp' },
                    { role: 'Pranged', party: 1, description: 'If Water: stand on B marker\nIf no Water: stand East of B to take Water stack', imageUrl: './tea/bjcc-19.webp' },
                    { role: 'Pranged', party: 2, description: 'If Water: stand on B marker\nIf no Water: stand East of B to take Water stack', imageUrl: './tea/bjcc-19.webp' },
                    { role: 'Caster', party: 1, description: 'If Water: stand on B marker\nIf no Water: stand South of B to take Water stack', imageUrl: './tea/bjcc-19.webp' },
                    { role: 'Caster', party: 2, description: 'If Water: stand on B marker\nIf no Water: stand South of B to take Water stack', imageUrl: './tea/bjcc-19.webp' },
                ]
            },
            {
                mechanic: 'Resolution',
                description: 'Water + Lightning debuffs get transferred to a random person in that stack\nMake sure to avoid car crashes',
                strats: [
                    { role: 'Tank', party: 1, description: 'Keep tanking BJ on A', imageUrl: './tea/bjcc-20.webp' },
                    { role: 'Tank', party: 2, description: '❗Point CC at Ranged for Plasma Shield', imageUrl: './tea/bjcc-20.webp' },
                    { role: 'Healer', party: 1, description: 'Move mid to prepare for Third Pass\nIf Lightning, end up on North side of center ring\nIf Water, end up on South side of center ring', imageUrl: './tea/bjcc-20.webp' },
                    { role: 'Healer', party: 2, description: 'Move mid to prepare for Third Pass\nIf Lightning, end up on North side of center ring\nIf Water, end up on South side of center ring', imageUrl: './tea/bjcc-20.webp' },
                    { role: 'Melee', party: 1, description: 'Move mid to prepare for Third Pass', imageUrl: './tea/bjcc-20.webp' },
                    { role: 'Melee', party: 2, description: 'Move mid to prepare for Third Pass', imageUrl: './tea/bjcc-20.webp' },
                    { role: 'Pranged', party: 1, description: 'Move mid to prepare for Third Pass\nLoop around near wall since you have more movement', imageUrl: './tea/bjcc-20.webp' },
                    { role: 'Pranged', party: 2, description: 'Move mid to prepare for Third Pass\nLoop around near wall since you have more movement', imageUrl: './tea/bjcc-20.webp' },
                    { role: 'Caster', party: 1, description: 'Move mid to prepare for Third Pass', imageUrl: './tea/bjcc-20.webp' },
                    { role: 'Caster', party: 2, description: 'Move mid to prepare for Third Pass', imageUrl: './tea/bjcc-20.webp' },
                ]
            },
        ]
    },
    {
        phaseName: 'BJCC: Shield + Third Pass',
        tag: 'p2',
        mechs: [
            {
                mechanic: 'Flarethrower + Shield',
                description: 'Make sure to identify the Nisi color you need by the !! debuff',
                strats: [
                    { role: 'Tank', party: 1, description: 'Bait Flarethrower cone so that it hits the Liquid Rage\nMake sure not to clip the Ranged', imageUrl: './tea/bjcc-22.webp' },
                    { role: 'Tank', party: 2, description: 'Make sure CC is pointed at Ranged\nHit the shield from the front until it pops', imageUrl: './tea/bjcc-22.webp' },
                    { role: 'Healer', party: 1, description: 'Chill in your lineup spot on the North or South side of center ring', imageUrl: './tea/bjcc-22.webp' },
                    { role: 'Healer', party: 2, description: 'Chill in your lineup spot on the North or South side of center ring', imageUrl: './tea/bjcc-22.webp' },
                    { role: 'Melee', party: 1, description: 'Keep hitting BJ and get ready for Third Pass', imageUrl: './tea/bjcc-22.webp' },
                    { role: 'Melee', party: 2, description: 'Keep hitting BJ and get ready for Third Pass', imageUrl: './tea/bjcc-22.webp' },
                    { role: 'Pranged', party: 1, description: 'Hit shield from the front until it pops\nGet ready for Third Pass', imageUrl: './tea/bjcc-22.webp' },
                    { role: 'Pranged', party: 2, description: 'Hit shield from the front until it pops\nGet ready for Third Pass', imageUrl: './tea/bjcc-22.webp' },
                    { role: 'Caster', party: 1, description: 'Hit shield from the front until it pops\nGet ready for Third Pass', imageUrl: './tea/bjcc-22.webp' },
                    { role: 'Caster', party: 2, description: 'Hit shield from the front until it pops\nGet ready for Third Pass', imageUrl: './tea/bjcc-22.webp' },
                ]
            },
            {
                mechanic: 'Third Pass',
                description: 'Make sure to identify the Nisi color you need by the !! debuff',
                strats: [
                    { role: 'Tank', party: 1, description: 'Stand in North lineup spot and wait for pass', imageUrl: './tea/bjcc-23.webp' },
                    { role: 'Tank', party: 2, description: 'Stand in South lineup spot and wait for pass', imageUrl: './tea/bjcc-23.webp' },
                    { role: 'Healer', party: 1, description: 'Stand in your lineup spot on the North or South side of center ring and wait for pass', imageUrl: './tea/bjcc-23.webp' },
                    { role: 'Healer', party: 2, description: 'Stand in your lineup spot on the North or South side of center ring and wait for pass', imageUrl: './tea/bjcc-23.webp' },
                    { role: 'Melee', party: 1, description: 'Pass with the support player who has the color you need\n❗Only use the West half for movement', imageUrl: './tea/bjcc-23.webp' },
                    { role: 'Melee', party: 2, description: 'Pass with the support player who has the color you need\n❗Only use the West half for movement', imageUrl: './tea/bjcc-23.webp' },
                    { role: 'Pranged', party: 1, description: 'Pass with the support player who has the color you need\n❗Only use the East half for movement', imageUrl: './tea/bjcc-23.webp' },
                    { role: 'Pranged', party: 2, description: 'Pass with the support player who has the color you need\n❗Only use the East half for movement', imageUrl: './tea/bjcc-23.webp' },
                    { role: 'Caster', party: 1, description: 'Pass with the support player who has the color you need\n❗Only use the East half for movement', imageUrl: './tea/bjcc-23.webp' },
                    { role: 'Caster', party: 2, description: 'Pass with the support player who has the color you need\n❗Only use the East half for movement', imageUrl: './tea/bjcc-23.webp' },
                ]
            },
        ]
    },
    {
        phaseName: 'BJCC: Water/Lightning 3',
        tag: 'p2',
        mechs: [
            {
                mechanic: 'Setup',
                strats: [
                    { role: 'Tank', party: 1, description: 'Stay North\nBe ready to join Water stack on B if <3 people', imageUrl: './tea/bjcc-25.webp' },
                    { role: 'Tank', party: 2, description: 'Stand SW to take Lightning with healer', imageUrl: './tea/bjcc-25.webp' },
                    { role: 'Healer', party: 1, description: 'If Lightning: stack with OT SW or second Water SE\nIf you had second Water: Stand SE\nIf Water: stand on B', imageUrl: './tea/bjcc-25.webp' },
                    { role: 'Healer', party: 2, description: 'If Lightning: stack with OT SW or second Water SE\nIf you had second Water: Stand SE\nIf Water: stand on B', imageUrl: './tea/bjcc-25.webp' },
                    { role: 'Melee', party: 1, description: 'Stand West of B to take Water stack', imageUrl: './tea/bjcc-25.webp' },
                    { role: 'Melee', party: 2, description: 'Stand near mid and keep hitting BJ\nYou can join Water stack if you want', imageUrl: './tea/bjcc-25.webp' },
                    { role: 'Pranged', party: 1, description: 'If Water: stand on B marker\nIf you had second Water: Stand SE\nIf no Water: stand South of B to take Water stack', imageUrl: './tea/bjcc-25.webp' },
                    { role: 'Pranged', party: 2, description: 'If Water: stand on B marker\nIf you had second Water: Stand SE\nIf no Water: stand South of B to take Water stack', imageUrl: './tea/bjcc-25.webp' },
                    { role: 'Caster', party: 1, description: 'If Water: stand on B marker\nIf you had second Water: Stand SE\nIf no Water: stand South of B to take Water stack', imageUrl: './tea/bjcc-25.webp' },
                    { role: 'Caster', party: 2, description: 'If Water: stand on B marker\nIf you had second Water: Stand SE\nIf no Water: stand South of B to take Water stack', imageUrl: './tea/bjcc-25.webp' },
                ]
            },
            {
                mechanic: 'Resolution',
                description: 'Move towards West to get ready for Gavel (BPOG)\n❗Make sure to avoid car crashes',
                imageUrl: './tea/bjcc-26.webp'
            },
        ]
    },
    {
        phaseName: 'BJCC: Gavel (BPOG)',
        tag: 'p2',
        mechs: [
            {
                mechanic: 'BPOG',
                description: 'Line up East of the Ice\nBlue Purple Orange Green\nα γ β δ',
                strats: [
                    { role: 'Tank', party: 1, description: '', imageUrl: './tea/bjcc-28.webp' },
                    { role: 'Tank', party: 2, description: '❗Keep CC behind the ice until Propeller Wind cast', imageUrl: './tea/bjcc-28.webp' },
                    { role: 'Healer', party: 1, description: '', imageUrl: './tea/bjcc-28.webp' },
                    { role: 'Healer', party: 2, description: '', imageUrl: './tea/bjcc-28.webp' },
                    { role: 'Melee', party: 1, description: '', imageUrl: './tea/bjcc-28.webp' },
                    { role: 'Melee', party: 2, description: '', imageUrl: './tea/bjcc-28.webp' },
                    { role: 'Pranged', party: 1, description: '', imageUrl: './tea/bjcc-28.webp' },
                    { role: 'Pranged', party: 2, description: '', imageUrl: './tea/bjcc-28.webp' },
                    { role: 'Caster', party: 1, description: '', imageUrl: './tea/bjcc-28.webp' },
                    { role: 'Caster', party: 2, description: '', imageUrl: './tea/bjcc-28.webp' },
                ]
            },
        ]
    },
    {
        phaseName: 'BJCC: Photon + Punch + Super Jump',
        tag: 'p2',
        mechs: [
            {
                mechanic: 'Photon + Punch',
                description: 'Make sure boss HPs are close to equal',
                strats: [
                    { role: 'Tank', party: 1, description: `Stack bosses together, then stand on top of each other near wall for tankbuster`, imageUrl: './tea/bjcc-30.webp' },
                    { role: 'Tank', party: 2, description: 'Stack bosses together, then stand on top of each other near wall for tankbuster', imageUrl: './tea/bjcc-30.webp' },
                    { role: 'Healer', party: 1, description: '', imageUrl: './tea/bjcc-30.webp' },
                    { role: 'Healer', party: 2, description: '', imageUrl: './tea/bjcc-30.webp' },
                    { role: 'Melee', party: 1, description: '', imageUrl: './tea/bjcc-30.webp' },
                    { role: 'Melee', party: 2, description: '', imageUrl: './tea/bjcc-30.webp' },
                    { role: 'Pranged', party: 1, description: 'Get ready to move towards East wall to bait Super Jump', imageUrl: './tea/bjcc-30.webp' },
                    { role: 'Pranged', party: 2, description: 'Get ready to move towards East wall to bait Super Jump', imageUrl: './tea/bjcc-30.webp' },
                    { role: 'Caster', party: 1, description: '', imageUrl: './tea/bjcc-30.webp' },
                    { role: 'Caster', party: 2, description: '', imageUrl: './tea/bjcc-30.webp' },
                ]
            },
            {
                mechanic: 'Super Jump',
                description: '',
                strats: [
                    { role: 'Tank', party: 1, description: `Stay on West side of arena until Apocalyptic Ray finishes`, imageUrl: './tea/bjcc-33.webp' },
                    { role: 'Tank', party: 2, description: 'Stay on West side of arena until Apocalyptic Ray finishes', imageUrl: './tea/bjcc-33.webp' },
                    { role: 'Healer', party: 1, description: 'Stay on West side of arena until Apocalyptic Ray finishes', imageUrl: './tea/bjcc-33.webp' },
                    { role: 'Healer', party: 2, description: 'Stay on West side of arena until Apocalyptic Ray finishes', imageUrl: './tea/bjcc-33.webp' },
                    { role: 'Melee', party: 1, description: 'Stay on West side of arena until Apocalyptic Ray finishes', imageUrl: './tea/bjcc-33.webp' },
                    { role: 'Melee', party: 2, description: 'Stay on West side of arena until Apocalyptic Ray finishes', imageUrl: './tea/bjcc-33.webp' },
                    { role: 'Pranged', party: 1, description: 'Bait Super Jump against East wall\nMove slightly North or South after jump to avoid Apocalyptic Ray', imageUrl: './tea/bjcc-33.webp' },
                    { role: 'Pranged', party: 2, description: 'Bait Super Jump against East wall\nMove slightly North or South after jump to avoid Apocalyptic Ray', imageUrl: './tea/bjcc-33.webp' },
                    { role: 'Caster', party: 1, description: 'Stay on West side of arena until Apocalyptic Ray finishes', imageUrl: './tea/bjcc-33.webp' },
                    { role: 'Caster', party: 2, description: 'Stay on West side of arena until Apocalyptic Ray finishes', imageUrl: './tea/bjcc-33.webp' },
                ]
            },
        ]
    },
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
