import type { PageLoad } from "./$types";

export const load: PageLoad = () => {
    return {
        strats: [hectorStrat],
    };
};

export type Role = "Tank" | "Healer" | "Melee" | "Ranged";
export type Alignment = "original" | "truenorth" | "relative";
export type StratRecord = Record<string, string | Record<string, string | PlayerMechStrat>>;

export interface PlayerMechStrat {
    role: Role;
    party: number;
    description: string | Record<string, string>;
    imageUrl?: string | Record<string, string>;
    imageRotated?: string;
    mask?: string | Record<string, string>;
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
    mask?: string | Record<string, string>;
    mechs?: MechanicStrat[];
}

export interface Strat {
    stratName: string;
    stratUrl: string | Record<string, string>;
    description: string | Record<string, string>;
    notes: string;
    strats: PhaseStrats[];
}

const rolePartyPairs: Array<{ role: Role; party: number; label: string }> = [
    { role: "Tank", party: 1, label: "MT" },
    { role: "Tank", party: 2, label: "OT" },
    { role: "Healer", party: 1, label: "H1" },
    { role: "Healer", party: 2, label: "H2" },
    { role: "Melee", party: 1, label: "M1" },
    { role: "Melee", party: 2, label: "M2" },
    { role: "Ranged", party: 1, label: "R1" },
    { role: "Ranged", party: 2, label: "R2" },
];

const placeholderPlayerSpots: PlayerMechStrat[] = rolePartyPairs.map(({ role, party, label }) => ({
    role,
    party,
    description: `${label} instructions coming soon.`,
}));

const placeholderDescription = "Description coming soon.";
const placeholderImageUrl = "/images/placeholder.webp";

function getStringObject(stratRecord: Record<string, StratRecord>, mechanic: string, property: string, role?: string): Record<string, string> {
    let stringObject = {};
    for (const [key, strat] of Object.entries(stratRecord)) {
        if (role) {
            stringObject[key] = strat[mechanic][role][property] as string || '';
        } else {
            stringObject[key] = strat[mechanic][property] as string || '';
        }
        
    };
    return stringObject;
}

function getStratArray(stratRecord: Record<string, StratRecord>, mechanic: string): PlayerMechStrat[] {
    return [
        {
            role: 'Tank',
            party: 1,
            description: getStringObject(stratRecord, mechanic, 'description', 'MT'),
            imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'MT'),
        },
        {
            role: 'Tank',
            party: 2,
            description: getStringObject(stratRecord, mechanic, 'description', 'OT'),
            imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'OT'),
        },
        {
            role: 'Healer',
            party: 1,
            description: getStringObject(stratRecord, mechanic, 'description', 'H1'),
            imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'H1'),
        },
        {
            role: 'Healer',
            party: 2,
            description: getStringObject(stratRecord, mechanic, 'description', 'H2'),
            imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'H2'),
        },
        {
            role: 'Melee',
            party: 1,
            description: getStringObject(stratRecord, mechanic, 'description', 'M1'),
            imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'M1'),
        },
        {
            role: 'Melee',
            party: 2,
            description: getStringObject(stratRecord, mechanic, 'description', 'M2'),
            imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'M2'),
        },
        {
            role: 'Ranged',
            party: 1,
            description: getStringObject(stratRecord, mechanic, 'description', 'R1'),
            imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'R1'),
        },
        {
            role: 'Ranged',
            party: 2,
            description: getStringObject(stratRecord, mechanic, 'description', 'R2'),
            imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'R2'),
        },
    ]
}

const hectorStrat: Strat = {
    stratName: "hector",
    stratUrl: "https://www.youtube.com/watch?v=6q-si8edSTg",
    description: "Source: Hector",
    notes: "Full strategy details are still being compiled.",
    strats: [
        {
            phaseName: "Setup",
            tag: "none",
            description: placeholderDescription,
            mechs: [
                {
                    mechanic: "Light Parties",
                    description: placeholderDescription,
                    strats: placeholderPlayerSpots,
                },
                {
                    mechanic: "Towers",
                    description: placeholderDescription,
                    strats: placeholderPlayerSpots,
                },
            ],
        },
        {
            phaseName: "Roar (Raidwide)",
            tag: "p1",
            description: placeholderDescription,
            mechs: [
                {
                    mechanic: "Telegraph",
                    description: placeholderDescription,
                    imageUrl: placeholderImageUrl,
                },
            ],
        },
        {
            phaseName: "Chainblade Blow (Side to Side)",
            tag: "p1",
            description: placeholderDescription,
            mechs: [
                {
                    mechanic: "Telegraph",
                    description: placeholderDescription,
                    imageUrl: placeholderImageUrl,
                },
            ],
        },
        {
            phaseName: "Wyvern's Siegeflight (Red/White)",
            tag: "p1",
            description: placeholderDescription,
            mechs: [
                {
                    mechanic: "Red",
                    description: placeholderDescription,
                    strats: placeholderPlayerSpots,
                },
                {
                    mechanic: "White",
                    description: placeholderDescription,
                    strats: placeholderPlayerSpots,
                },
                {
                    mechanic: "Exalines",
                    description: placeholderDescription,
                    imageUrl: placeholderImageUrl,
                },
            ],
        },
        {
            phaseName: "Rush (Devour)",
            tag: "p1",
            description: placeholderDescription,
            mechs: [
                {
                    mechanic: "Setup",
                    description: placeholderDescription,
                    imageUrl: placeholderImageUrl,
                },
                {
                    mechanic: "Donuts",
                    description: placeholderDescription,
                    imageUrl: placeholderImageUrl,
                },
            ],
        },
        {
            phaseName: "Half Room + Spread",
            tag: "p1",
            description: placeholderDescription,
            mechs: [
                {
                    mechanic: "Telegraph",
                    description: placeholderDescription,
                    imageUrl: placeholderImageUrl,
                },
                {
                    mechanic: "Spreads",
                    description: placeholderDescription,
                    imageUrl: placeholderImageUrl,
                },
            ],
        },
        {
            phaseName: "Tail + Stack",
            tag: "p1",
            description: placeholderDescription,
            imageUrl: placeholderImageUrl,
        },
        {
            phaseName: "Towers",
            tag: "p1",
            description: placeholderDescription,
            mechs: [
                {
                    mechanic: "Puddles",
                    description: placeholderDescription,
                    imageUrl: placeholderImageUrl,
                },
                {
                    mechanic: "Towers",
                    description: placeholderDescription,
                    strats: placeholderPlayerSpots,
                },
            ],
        },
        {
            phaseName: "Exas + Spreads",
            tag: "p1",
            description: placeholderDescription,
            mechs: [
                {
                    mechanic: "Exas",
                    description: placeholderDescription,
                    imageUrl: placeholderImageUrl,
                },
                {
                    mechanic: "Spreads",
                    description: placeholderDescription,
                    imageUrl: placeholderImageUrl,
                },
            ],
        },
        {
            phaseName: "Limit Cut",
            tag: "p2",
            description: placeholderDescription,
            mechs: [
                {
                    mechanic: "1 To 4",
                    description: placeholderDescription,
                    imageUrl: placeholderImageUrl,
                },
                {
                    mechanic: "5 To 8",
                    description: placeholderDescription,
                    imageUrl: placeholderImageUrl,
                },
            ],
        },
        {
            phaseName: "Towers",
            tag: "p2",
            description: placeholderDescription,
            mechs: [
                {
                    mechanic: "Same as Previous",
                    description: placeholderDescription,
                    imageUrl: placeholderImageUrl,
                },
            ],
        },
        {
            phaseName: "Lasers",
            tag: "p2",
            description: placeholderDescription,
            mechs: [
                {
                    mechanic: "First Laser (Laser Starts Away)",
                    description: placeholderDescription,
                    imageUrl: placeholderImageUrl,
                },
                {
                    mechanic: "Second Laser (With Stacks)",
                    description: placeholderDescription,
                    imageUrl: placeholderImageUrl,
                },
                {
                    mechanic: "Third Laser (With Spread)",
                    description: placeholderDescription,
                    imageUrl: placeholderImageUrl,
                },
            ],
        },
        {
            phaseName: "Exalines",
            tag: "p2",
            description: placeholderDescription,
            mechs: [
                {
                    mechanic: "Exalines (middle to edge)",
                    description: placeholderDescription,
                    imageUrl: placeholderImageUrl,
                },
                {
                    mechanic: "Side to Side",
                    description: placeholderDescription,
                    strats: placeholderPlayerSpots,
                },
                {
                    mechanic: "Exalines (edge to middle to edge)",
                    description: placeholderDescription,
                    imageUrl: placeholderImageUrl,
                },
            ],
        },
        {
            phaseName: "Repeated Mechs",
            tag: "p2",
            description: placeholderDescription,
            mechs: [
                {
                    mechanic: "Rush (Devour)",
                    description: placeholderDescription,
                    imageUrl: placeholderImageUrl,
                },
                {
                    mechanic: "Half Room + Spread",
                    description: placeholderDescription,
                    imageUrl: placeholderImageUrl,
                },
                {
                    mechanic: "Tail + Stack (with a big puddle)",
                    description: placeholderDescription,
                    imageUrl: placeholderImageUrl,
                },
                {
                    mechanic: "Towers",
                    description: placeholderDescription,
                    imageUrl: placeholderImageUrl,
                },
            ],
        },
        {
            phaseName: "Exaflares",
            tag: "p2",
            description: placeholderDescription,
            imageUrl: placeholderImageUrl,
        },
        {
            phaseName: "More Repeated Mechs",
            tag: "p2",
            description: placeholderDescription,
            imageUrl: placeholderImageUrl,
        },
        {
            phaseName: "Enrage",
            tag: "p2",
            description: placeholderDescription,
            imageUrl: placeholderImageUrl,
        },
    ],
};
