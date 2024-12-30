import type { Url } from "url";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({params}) => {
    return {
        strats: [raidplanStrat],
    }
}

export type Role = 'Tank' | 'Healer' | 'Melee' | 'Ranged'; 
export type StartingArea = 'Tiles' | 'Platform';
export type Alliance = 'A' | 'B' | 'C';
interface MechanicStrat {
    mechanic: string;
    description: string;
}

export interface PlayerStrats {
    alliance: Alliance;
    role: Role;
    party: number;
    notes: string;
    startingArea: StartingArea;
    strats: MechanicStrat[];
}

interface Strat {
    stratName: string;
    stratUrl: URL;
    description: string;
    notes: string;
    strats: PlayerStrats[];
}

const raidplanStrat: Strat = {
    stratName: 'raidplan',
    stratUrl: new URL('https://raidplan.io/plan/o1ZfvSL3dCiqjwfJ'),
    description: 'raidplan',
    notes: '',
    strats: [
        {
            alliance: 'A',
            role: 'Tank',
            party: 1,
            notes: '',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'start',
                    description: 'Left/West platform, Face boss North'
                },
                {
                    mechanic: 'pairs',
                    description: 'Inside North'
                },
                {
                    mechanic: 'spread',
                    description: 'North'
                },
                {
                    mechanic: 'towers',
                    description: 'North/East'
                },
                {
                    mechanic: 'bramble',
                    description: 'NONE'
                },
                {
                    mechanic: 'swap',
                    description: 'Outside North'
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Tank',
            party: 2,
            notes: '',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'start',
                    description: 'SW/Back Left tiles'
                },
                {
                    mechanic: 'idle',
                    description: 'SW inner tile'
                },
                {
                    mechanic: 'swap',
                    description: 'SW inner tile'
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Healer',
            party: 1,
            notes: '',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'start',
                    description: 'Left/West platform, Boss faces North'
                },
                {
                    mechanic: 'pairs',
                    description: 'Inside North'
                },
                {
                    mechanic: 'spread',
                    description: 'North'
                },
                {
                    mechanic: 'towers',
                    description: 'North/East'
                },
                {
                    mechanic: 'bramble',
                    description: 'NONE'
                },
                {
                    mechanic: 'swap',
                    description: 'Outside North'
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Healer',
            party: 2,
            notes: '',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'start',
                    description: 'SW/Back Left tiles'
                },
                {
                    mechanic: 'idle',
                    description: 'SW West cubby'
                },
                {
                    mechanic: 'swap',
                    description: 'SW West cubby'
                },
            ]
        }, 
        {
            alliance: 'A',
            role: 'Melee',
            party: 1,
            notes: '',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'start',
                    description: 'Left/West platform, Boss faces North'
                },
                {
                    mechanic: 'pairs',
                    description: 'Outside North'
                },
                {
                    mechanic: 'spread',
                    description: 'NNW'
                },
                {
                    mechanic: 'towers',
                    description: 'North/East'
                },
                {
                    mechanic: 'bramble',
                    description: 'Inside North'
                },
                {
                    mechanic: 'swap',
                    description: 'Inside North'
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Melee',
            party: 2,
            notes: '',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'start',
                    description: 'Left/West platform, Boss faces North'
                },
                {
                    mechanic: 'pairs',
                    description: 'Outside South'
                },
                {
                    mechanic: 'spread',
                    description: 'SSW'
                },
                {
                    mechanic: 'towers',
                    description: 'South/West'
                },
                {
                    mechanic: 'bramble',
                    description: 'Inside South'
                },
                {
                    mechanic: 'swap',
                    description: 'Inside South'
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Ranged',
            party: 1,
            notes: '',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'start',
                    description: 'Left/West platform, Boss faces North'
                },
                {
                    mechanic: 'pairs',
                    description: 'Inside West'
                },
                {
                    mechanic: 'spread',
                    description: 'WNW'
                },
                {
                    mechanic: 'towers',
                    description: 'North/East'
                },
                {
                    mechanic: 'bramble',
                    description: 'Outside North'
                },
                {
                    mechanic: 'swap',
                    description: 'Outside South'
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Ranged',
            party: 2,
            notes: '',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'start',
                    description: 'Left/West platform, Boss faces North'
                },
                {
                    mechanic: 'pairs',
                    description: 'Outside West'
                },
                {
                    mechanic: 'spread',
                    description: 'WSW'
                },
                {
                    mechanic: 'towers',
                    description: 'South/West'
                },
                {
                    mechanic: 'bramble',
                    description: 'Outside South'
                },
                {
                    mechanic: 'swap',
                    description: 'Inside Middle'
                },
            ]
        },
    ]
}
