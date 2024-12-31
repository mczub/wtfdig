import type { Url } from "url";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({params}) => {
    return {
        strats: [raidplanStrat, codcarStrat],
    }
}

export type Role = 'Tank' | 'Healer' | 'Melee' | 'Ranged'; 
export type StartingArea = 'Tiles' | 'Platform';
export type Alignment = 'original' | 'truenorth' | 'addrelative';
export type Alliance = 'A' | 'B' | 'C';
interface MechanicStrat {
    mechanic: string;
    description: string;
    imageUrl: string;
    mask?: string;
    transform?: string;
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
    stratUrl: string;
    description: string;
    notes: string;
    strats: PlayerStrats[];
}

const raidplanStrat: Strat = {
    stratName: 'raidplan',
    stratUrl: 'https://raidplan.io/plan/o1ZfvSL3dCiqjwfJ',
    description: 'Taken from Raidplan by Aurelia Netcash',
    notes: '',
    strats: [
        {
            alliance: 'A',
            role: 'Tank',
            party: 1,
            notes: 'Left/West platform, Face boss North',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inside North',
                    imageUrl: '/strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 57.8% 31.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'North',
                    imageUrl: '/strats/raidplan/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 57.8% 19.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/East',
                    imageUrl: '/strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 55.4% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 67% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'None, stay on boss',
                    imageUrl: '/strats/raidplan/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 40% 48%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Inside North',
                    imageUrl: '/strats/raidplan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 78% 36%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Outside North',
                    imageUrl: '/strats/raidplan/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 24% 26%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Tank',
            party: 2,
            notes: 'SW/Back Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'SW inner tile',
                    imageUrl: '/strats/raidplan/tiles-southwest-idle.png',
                    mask: 'radial-gradient(circle at 81% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'SW inner tile',
                    imageUrl: '/strats/raidplan/tiles-southwest-swap.png',
                    mask: 'radial-gradient(circle at 82% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Healer',
            party: 1,
            notes: 'Left/West platform, Boss faces North',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inside South',
                    imageUrl: '/strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 56% 68%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'South',
                    imageUrl: '/strats/raidplan/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 58% 82%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'towers',
                    description: 'South/West',
                    imageUrl: '/strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 54.3% 33.8%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 35% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'None, stay on boss',
                    imageUrl: '/strats/raidplan/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 40% 48%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Inside South',
                    imageUrl: '/strats/raidplan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 79% 59%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Outside Middle',
                    imageUrl: '/strats/raidplan/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 23% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Healer',
            party: 2,
            notes: 'SW/Back Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'SW West cubby',
                    imageUrl: '/strats/raidplan/tiles-southwest-idle.png',
                    mask: 'radial-gradient(circle at 21% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'SW West cubby',
                    imageUrl: '/strats/raidplan/tiles-southwest-swap.png',
                    mask: 'radial-gradient(circle at 19% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ]
        }, 
        {
            alliance: 'A',
            role: 'Melee',
            party: 1,
            notes: 'Left/West platform, Boss faces North',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outside North',
                    imageUrl: '/strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 57.8% 18.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'NNW',
                    imageUrl: '/strats/raidplan/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 38.8% 24.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/East',
                    imageUrl: '/strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 55.4% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 67% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Inside North',
                    imageUrl: '/strats/raidplan/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 60% 33%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Outside North',
                    imageUrl: '/strats/raidplan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 38% 36%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Inside North',
                    imageUrl: '/strats/raidplan/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 68% 24%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Melee',
            party: 2,
            notes: 'Left/West platform, Boss faces North',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outside South',
                    imageUrl: '/strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 57% 80%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'SSW',
                    imageUrl: '/strats/raidplan/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 37% 80%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'towers',
                    description: 'South/West',
                    imageUrl: '/strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 54.3% 33.8%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 35% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Inside South',
                    imageUrl: '/strats/raidplan/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 60% 61%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Outside South',
                    imageUrl: '/strats/raidplan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 39% 61%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Inside South',
                    imageUrl: '/strats/raidplan/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 68% 76%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Ranged',
            party: 1,
            notes: 'Left/West platform, Boss faces North',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inside West',
                    imageUrl: '/strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 41% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'spread',
                    description: 'WNW',
                    imageUrl: '/strats/raidplan/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 30% 43%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/East',
                    imageUrl: '/strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 55.4% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 67% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Outside North',
                    imageUrl: '/strats/raidplan/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 17% 35%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Ring Outside North',
                    imageUrl: '/strats/raidplan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 34% 15%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Outside South',
                    imageUrl: '/strats/raidplan/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 22% 76%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Ranged',
            party: 2,
            notes: 'Left/West platform, Boss faces North',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outside West',
                    imageUrl: '/strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 28% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'spread',
                    description: 'WSW',
                    imageUrl: '/strats/raidplan/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 31% 63%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'South/West',
                    imageUrl: '/strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 54.3% 33.8%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 35% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Outside South',
                    imageUrl: '/strats/raidplan/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 20% 55%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Ring Outside South',
                    imageUrl: '/strats/raidplan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 33% 83%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Inside Middle',
                    imageUrl: '/strats/raidplan/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 67% 51%, black 18%, rgba(0, 0, 0, 0.4) 18%)'
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Tank',
            party: 1,
            notes: 'NW/Front Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'NW inner tile',
                    imageUrl: '/strats/raidplan/tiles-northwest-idle.png',
                    mask: 'radial-gradient(circle at 79% 53%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'NW inner tile',
                    imageUrl: '/strats/raidplan/tiles-northwest-swap.png',
                    mask: 'radial-gradient(circle at 81% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Tank',
            party: 2,
            notes: 'NE/Front Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'NE inner tile',
                    imageUrl: '/strats/raidplan/tiles-northeast-idle.png',
                    mask: 'radial-gradient(circle at 21% 54%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'NE inner tile',
                    imageUrl: '/strats/raidplan/tiles-northeast-swap.png',
                    mask: 'radial-gradient(circle at 18% 51%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Healer',
            party: 1,
            notes: 'NW/Front Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'NW West cubby',
                    imageUrl: '/strats/raidplan/tiles-northwest-idle.png',
                    mask: 'radial-gradient(circle at 21% 53%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'NW West cubby',
                    imageUrl: '/strats/raidplan/tiles-northwest-swap.png',
                    mask: 'radial-gradient(circle at 20% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Healer',
            party: 2,
            notes: 'NE/Front Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'NE East cubby',
                    imageUrl: '/strats/raidplan/tiles-northeast-idle.png',
                    mask: 'radial-gradient(circle at 81% 54%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'NE East cubby',
                    imageUrl: '/strats/raidplan/tiles-northeast-swap.png',
                    mask: 'radial-gradient(circle at 81% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ]
        }, 
        {
            alliance: 'B',
            role: 'Melee',
            party: 1,
            notes: 'NW/Front Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'NW North cubby',
                    imageUrl: '/strats/raidplan/tiles-northwest-idle.png',
                    mask: 'radial-gradient(circle at 51% 24%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'NW between Tank and Healer',
                    imageUrl: '/strats/raidplan/tiles-northwest-swap.png',
                    mask: 'radial-gradient(circle at 51% 50%, black 26%, rgba(0, 0, 0, 0.4) 26%)'
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Melee',
            party: 2,
            notes: 'NE/Front Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'NE North cubby',
                    imageUrl: '/strats/raidplan/tiles-northeast-idle.png',
                    mask: 'radial-gradient(circle at 51% 26%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'NE between Tank and Healer',
                    imageUrl: '/strats/raidplan/tiles-northeast-swap.png',
                    mask: 'radial-gradient(circle at 50% 52%, black 26%, rgba(0, 0, 0, 0.4) 26%)'
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Ranged',
            party: 1,
            notes: 'SW/Back Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'SW South cubby',
                    imageUrl: '/strats/raidplan/tiles-southwest-idle.png',
                    mask: 'radial-gradient(circle at 50% 81%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'SW between Tank and Healer',
                    imageUrl: '/strats/raidplan/tiles-southwest-swap.png',
                    mask: 'radial-gradient(circle at 50% 50%, black 28%, rgba(0, 0, 0, 0.4) 28%)'
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Ranged',
            party: 2,
            notes: 'SE/Back Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'SE South cubby',
                    imageUrl: '/strats/raidplan/tiles-southeast-idle.png',
                    mask: 'radial-gradient(circle at 50% 81%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'SE between Tank and Healer',
                    imageUrl: '/strats/raidplan/tiles-southeast-swap.png',
                    mask: 'radial-gradient(circle at 50% 50%, black 28%, rgba(0, 0, 0, 0.4) 28%)'
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Tank',
            party: 1,
            notes: 'Right/East platform, Face boss North',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inside North',
                    imageUrl: '/strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 47% 34.4%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'North',
                    imageUrl: '/strats/raidplan/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 36% 19%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/East',
                    imageUrl: '/strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 44.8% 19.6%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 65% 79.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'None, stay on boss',
                    imageUrl: '/strats/raidplan/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 62% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Inside North',
                    imageUrl: '/strats/raidplan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 19% 34%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Outside North',
                    imageUrl: '/strats/raidplan/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 78% 32%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Tank',
            party: 2,
            notes: 'SE/Back Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'SE inner tile',
                    imageUrl: '/strats/raidplan/tiles-southeast-idle.png',
                    mask: 'radial-gradient(circle at 21% 53%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'SE inner tile',
                    imageUrl: '/strats/raidplan/tiles-southeast-swap.png',
                    mask: 'radial-gradient(circle at 19% 51%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Healer',
            party: 1,
            notes: 'Right/East platform, Boss faces North',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inside South',
                    imageUrl: '/strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 46% 69%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'South',
                    imageUrl: '/strats/raidplan/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 37% 81%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'towers',
                    description: 'South/West',
                    imageUrl: '/strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 43.7% 36.2%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 33% 79.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'None, stay on boss',
                    imageUrl: '/strats/raidplan/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 62% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Inside South',
                    imageUrl: '/strats/raidplan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 19% 57%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Outside Middle',
                    imageUrl: '/strats/raidplan/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 78% 55%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Healer',
            party: 2,
            notes: 'SE/Back Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'SE East cubby',
                    imageUrl: '/strats/raidplan/tiles-southeast-idle.png',
                    mask: 'radial-gradient(circle at 78% 53%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'SE East cubby',
                    imageUrl: '/strats/raidplan/tiles-southeast-swap.png',
                    mask: 'radial-gradient(circle at 81% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ]
        }, 
        {
            alliance: 'C',
            role: 'Melee',
            party: 1,
            notes: 'Right/East platform, Boss faces North',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outside North',
                    imageUrl: '/strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 47% 22.4%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'NNE',
                    imageUrl: '/strats/raidplan/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 53% 21%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/East',
                    imageUrl: '/strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 44.8% 19.6%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 65% 79.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Inside North',
                    imageUrl: '/strats/raidplan/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 47% 41%, black 14%, rgba(0, 0, 0, 0.4) 14%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Outside North',
                    imageUrl: '/strats/raidplan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 57% 34%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Inside North',
                    imageUrl: '/strats/raidplan/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 36% 28%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Melee',
            party: 2,
            notes: 'Right/East platform, Boss faces North',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outside South',
                    imageUrl: '/strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 46% 81%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'SSE',
                    imageUrl: '/strats/raidplan/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 58% 80%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'towers',
                    description: 'South/West',
                    imageUrl: '/strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 43.7% 36.2%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 33% 79.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Inside South',
                    imageUrl: '/strats/raidplan/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 50% 64%, black 14%, rgba(0, 0, 0, 0.4) 14%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Outside South',
                    imageUrl: '/strats/raidplan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 60% 59%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Inside South',
                    imageUrl: '/strats/raidplan/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 36% 79%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Ranged',
            party: 1,
            notes: 'Right/East platform, Boss faces North',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inside East',
                    imageUrl: '/strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 60% 53%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'spread',
                    description: 'ENE',
                    imageUrl: '/strats/raidplan/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 64% 40%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/East',
                    imageUrl: '/strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 44.8% 19.6%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 65% 79.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Outside North',
                    imageUrl: '/strats/raidplan/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 88% 44%, black 9%, rgba(0, 0, 0, 0.4) 9%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Ring Outside North',
                    imageUrl: '/strats/raidplan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 69% 15%, black 7%, rgba(0, 0, 0, 0.4) 7%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Outside South',
                    imageUrl: '/strats/raidplan/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 77% 79%, black 13%, rgba(0, 0, 0, 0.4) 13%)'
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Ranged',
            party: 2,
            notes: 'Right/East platform, Boss faces North',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outside East',
                    imageUrl: '/strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 70% 53%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'ESE',
                    imageUrl: '/strats/raidplan/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 65% 59%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'South/West',
                    imageUrl: '/strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 43.7% 36.2%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 33% 79.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Outside South',
                    imageUrl: '/strats/raidplan/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 86% 56%, black 9%, rgba(0, 0, 0, 0.4) 9%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Ring Outside South',
                    imageUrl: '/strats/raidplan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 65% 85%, black 7%, rgba(0, 0, 0, 0.4) 7%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Inside Middle',
                    imageUrl: '/strats/raidplan/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 36% 52%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
    ]
}

const codcarStrat: Strat = {
    stratName: 'codcar',
    stratUrl: 'https://docs.google.com/presentation/d/1SM88CrlJC1cF1gSbNRjn1v26QmDbmKV2yyGJZaGLRnE/preview?slide=id.g321eb6ebf82_10_0',
    description: 'Taken from CODCAR by RADAR',
    notes: 'All platform add-related mechanics are Wall/Add Relative',
    strats: [
        {
            alliance: 'A',
            role: 'Tank',
            party: 1,
            notes: 'Left/West platform, Face boss Outside',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inside North',
                    imageUrl: '/strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 49.8% 41.6%, black 13%, rgba(0, 0, 0, 0.4) 13%)'
                },
                {
                    mechanic: 'spread',
                    description: 'North',
                    imageUrl: '/strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 50% 17%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/CW',
                    imageUrl: '/strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 66% 36%, black 29%, rgba(0, 0, 0, 0.2) 29%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'None, stay on boss',
                    imageUrl: '/strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 44% 60%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Inside True South',
                    imageUrl: '/strats/codcar/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 66% 59%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Outside Middle',
                    imageUrl: '/strats/codcar/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 28% 50%, black 19%, rgba(0, 0, 0, 0.4) 19%)'
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Tank',
            party: 2,
            notes: 'Right/East platform, Face boss Outside',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inside North',
                    imageUrl: '/strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 49.8% 41.6%, black 13%, rgba(0, 0, 0, 0.4) 13%)'
                },
                {
                    mechanic: 'spread',
                    description: 'North',
                    imageUrl: '/strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 50% 17%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/CW',
                    imageUrl: '/strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 66% 36%, black 29%, rgba(0, 0, 0, 0.2) 29%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'None, stay on boss',
                    imageUrl: '/strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 44% 60%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    transform: 'rotate(180deg)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Inside True South',
                    imageUrl: '/strats/codcar/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 35% 60%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Outside Middle',
                    imageUrl: '/strats/codcar/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 72% 51%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Healer',
            party: 1,
            notes: 'Left/West platform, Boss faces Outside',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outside North',
                    imageUrl: '/strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 50% 25%, black 13%, rgba(0, 0, 0, 0.4) 13%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Northeast',
                    imageUrl: '/strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 75% 24%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/CW',
                    imageUrl: '/strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 66% 36%, black 29%, rgba(0, 0, 0, 0.2) 29%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Outside True North',
                    imageUrl: '/strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 22% 38%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Outside True South',
                    imageUrl: '/strats/codcar/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 15% 62%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Outside True North',
                    imageUrl: '/strats/codcar/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 27% 24%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Healer',
            party: 2,
            notes: 'Right/East platform, Boss faces Outside',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outside North',
                    imageUrl: '/strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 50% 25%, black 13%, rgba(0, 0, 0, 0.4) 13%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Northeast',
                    imageUrl: '/strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 75% 24%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/CW',
                    imageUrl: '/strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 66% 36%, black 29%, rgba(0, 0, 0, 0.2) 29%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Outside True South',
                    imageUrl: '/strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 22% 38%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    transform: 'rotate(180deg)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Outside True North',
                    imageUrl: '/strats/codcar/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 81% 39%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Outside True South',
                    imageUrl: '/strats/codcar/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 72% 72%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        }, 
        {
            alliance: 'A',
            role: 'Melee',
            party: 1,
            notes: 'Left/West platform, Boss faces Outside',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inside SW',
                    imageUrl: '/strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 40% 60%, black 13%, rgba(0, 0, 0, 0.4) 13%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Northwest',
                    imageUrl: '/strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 26% 24%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/CW',
                    imageUrl: '/strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 66% 36%, black 29%, rgba(0, 0, 0, 0.2) 29%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'None, stay on boss',
                    imageUrl: '/strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 52% 38%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Inside True North',
                    imageUrl: '/strats/codcar/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 73% 41%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Outside True South',
                    imageUrl: '/strats/codcar/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 27% 76%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Melee',
            party: 2,
            notes: 'Right/East platform, Boss faces Outside',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inside SW',
                    imageUrl: '/strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 40% 60%, black 13%, rgba(0, 0, 0, 0.4) 13%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Northwest',
                    imageUrl: '/strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 26% 24%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/CW',
                    imageUrl: '/strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 66% 36%, black 29%, rgba(0, 0, 0, 0.2) 29%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'None, stay on boss',
                    imageUrl: '/strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 52% 38%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    transform: 'rotate(180deg)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Inside True South',
                    imageUrl: '/strats/codcar/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 32% 41%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Outside True North',
                    imageUrl: '/strats/codcar/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 73% 26%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Ranged',
            party: 1,
            notes: 'Left/West platform, Boss faces Outside, R1 is generally Caster in the diagrams',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outside SW',
                    imageUrl: '/strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 31% 74%, black 13%, rgba(0, 0, 0, 0.4) 13%)'
                },
                {
                    mechanic: 'spread',
                    description: 'West',
                    imageUrl: '/strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 18% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'South/CW',
                    imageUrl: '/strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 36% 66%, black 29%, rgba(0, 0, 0, 0.2) 29%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Outside True South',
                    imageUrl: '/strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 22% 65%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Outside True North',
                    imageUrl: '/strats/codcar/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 21% 38%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Inside True South',
                    imageUrl: '/strats/codcar/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 68% 77%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Ranged',
            party: 2,
            notes: 'Right/East platform, Boss faces Outside, R2 is generally Phys Ranged in the diagrams',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outside SW',
                    imageUrl: '/strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 31% 74%, black 13%, rgba(0, 0, 0, 0.4) 13%)'
                },
                {
                    mechanic: 'spread',
                    description: 'West',
                    imageUrl: '/strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 18% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'South/CW',
                    imageUrl: '/strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 36% 66%, black 29%, rgba(0, 0, 0, 0.2) 29%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Outside True North',
                    imageUrl: '/strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 22% 65%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    transform: 'rotate(180deg)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Outside True South',
                    imageUrl: '/strats/codcar/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 87% 63%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Inside True North',
                    imageUrl: '/strats/codcar/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 30% 22%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Tank',
            party: 1,
            notes: 'NW/Front Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'NW inner tile',
                    imageUrl: '/strats/codcar/tiles-northwest-idle.png',
                    mask: 'radial-gradient(circle at 81% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'NW East inner tile',
                    imageUrl: '/strats/codcar/tiles-northwest-swap.png',
                    mask: 'radial-gradient(circle at 81% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Tank',
            party: 2,
            notes: 'SW/Back Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'SW inner tile',
                    imageUrl: '/strats/codcar/tiles-southwest-idle.png',
                    mask: 'radial-gradient(circle at 82% 51%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'SW East inner tile',
                    imageUrl: '/strats/codcar/tiles-southwest-swap.png',
                    mask: 'radial-gradient(circle at 81% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Healer',
            party: 1,
            notes: 'NW/Front Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'NW West cubby',
                    imageUrl: '/strats/codcar/tiles-northwest-idle.png',
                    mask: 'radial-gradient(circle at 17% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'NW South inner tile',
                    imageUrl: '/strats/codcar/tiles-northwest-swap.png',
                    mask: 'radial-gradient(circle at 48% 82%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Healer',
            party: 2,
            notes: 'SW/Back Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'SW West cubby',
                    imageUrl: '/strats/codcar/tiles-southwest-idle.png',
                    mask: 'radial-gradient(circle at 17% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'SW North inner tile',
                    imageUrl: '/strats/codcar/tiles-southwest-swap.png',
                    mask: 'radial-gradient(circle at 49% 19%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ]
        }, 
        {
            alliance: 'B',
            role: 'Melee',
            party: 1,
            notes: 'NW/Front Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'NW North cubby',
                    imageUrl: '/strats/codcar/tiles-northwest-idle.png',
                    mask: 'radial-gradient(circle at 49% 19%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'NW central tile',
                    imageUrl: '/strats/codcar/tiles-northwest-swap.png',
                    mask: 'radial-gradient(circle at 49% 50%, black 28%, rgba(0, 0, 0, 0.4) 28%)'
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Melee',
            party: 2,
            notes: 'SW/Back Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'SW South cubby',
                    imageUrl: '/strats/codcar/tiles-southwest-idle.png',
                    mask: 'radial-gradient(circle at 49% 82%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'SW central tile',
                    imageUrl: '/strats/codcar/tiles-southwest-swap.png',
                    mask: 'radial-gradient(circle at 49% 50%, black 28%, rgba(0, 0, 0, 0.4) 28%)'
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Ranged',
            party: 1,
            notes: 'Left/West platform, Boss faces Outside, R1 is generally Caster in the diagrams',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inside SE',
                    imageUrl: '/strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 61% 60%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'spread',
                    description: 'South',
                    imageUrl: '/strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 50% 83%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'South/CW',
                    imageUrl: '/strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 36% 66%, black 29%, rgba(0, 0, 0, 0.2) 29%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Inside True South',
                    imageUrl: '/strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 72% 65%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Ring Outside True North',
                    imageUrl: '/strats/codcar/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 30% 14%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Inside Middle',
                    imageUrl: '/strats/codcar/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 68% 50%, black 18%, rgba(0, 0, 0, 0.4) 18%)'
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Ranged',
            party: 2,
            notes: 'Left/West platform, Boss faces Outside, R2 is generally Phys Ranged in the diagrams',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outside SE',
                    imageUrl: '/strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 61% 60%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'spread',
                    description: 'East',
                    imageUrl: '/strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 50% 83%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'South/CW',
                    imageUrl: '/strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 36% 66%, black 29%, rgba(0, 0, 0, 0.2) 29%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Inside True North',
                    imageUrl: '/strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 75% 37%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Ring Outside True South',
                    imageUrl: '/strats/codcar/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 32% 84%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Inside True North',
                    imageUrl: '/strats/codcar/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 69% 22%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Tank',
            party: 1,
            notes: 'NE/Front Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'NE inner tile',
                    imageUrl: '/strats/codcar/tiles-northeast-idle.png',
                    mask: 'radial-gradient(circle at 21% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'NE West inner tile',
                    imageUrl: '/strats/codcar/tiles-northeast-swap.png',
                    mask: 'radial-gradient(circle at 17% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Tank',
            party: 2,
            notes: 'SE/Back Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'SE inner tile',
                    imageUrl: '/strats/codcar/tiles-southeast-idle.png',
                    mask: 'radial-gradient(circle at 20% 51%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'SE West inner tile',
                    imageUrl: '/strats/codcar/tiles-southeast-swap.png',
                    mask: 'radial-gradient(circle at 18% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Healer',
            party: 1,
            notes: 'NE/Front Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'NE East cubby',
                    imageUrl: '/strats/codcar/tiles-northeast-idle.png',
                    mask: 'radial-gradient(circle at 83% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'NE South inner tile',
                    imageUrl: '/strats/codcar/tiles-northeast-swap.png',
                    mask: 'radial-gradient(circle at 48% 82%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Healer',
            party: 2,
            notes: 'SE/Back Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'SE East cubby',
                    imageUrl: '/strats/codcar/tiles-southeast-idle.png',
                    mask: 'radial-gradient(circle at 82% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'SE North inner tile',
                    imageUrl: '/strats/codcar/tiles-southeast-swap.png',
                    mask: 'radial-gradient(circle at 49% 19%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ]
        }, 
        {
            alliance: 'C',
            role: 'Melee',
            party: 1,
            notes: 'NE/Front Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'NE North cubby',
                    imageUrl: '/strats/codcar/tiles-northeast-idle.png',
                    mask: 'radial-gradient(circle at 49% 19%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'NE central tile',
                    imageUrl: '/strats/codcar/tiles-northeast-swap.png',
                    mask: 'radial-gradient(circle at 49% 50%, black 28%, rgba(0, 0, 0, 0.4) 28%)'
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Melee',
            party: 2,
            notes: 'SE/Back Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'SE South cubby',
                    imageUrl: '/strats/codcar/tiles-southeast-idle.png',
                    mask: 'radial-gradient(circle at 49% 82%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'SE central tile',
                    imageUrl: '/strats/codcar/tiles-southeast-swap.png',
                    mask: 'radial-gradient(circle at 49% 50%, black 28%, rgba(0, 0, 0, 0.4) 28%)'
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Ranged',
            party: 1,
            notes: 'Right/East platform, Boss faces Outside',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inside SE',
                    imageUrl: '/strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 61% 60%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'spread',
                    description: 'South',
                    imageUrl: '/strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 50% 83%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'South/CW',
                    imageUrl: '/strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 36% 66%, black 29%, rgba(0, 0, 0, 0.2) 29%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Inside True North',
                    imageUrl: '/strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 72% 65%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    transform: 'rotate(180deg)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Ring Outside True South',
                    imageUrl: '/strats/codcar/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 73% 85%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Inside Middle',
                    imageUrl: '/strats/codcar/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 30% 48%, black 18%, rgba(0, 0, 0, 0.4) 18%)'
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Ranged',
            party: 2,
            notes: 'Right/East platform, Boss faces Outside',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outside SE',
                    imageUrl: '/strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 61% 60%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'spread',
                    description: 'East',
                    imageUrl: '/strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 50% 83%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'South/CW',
                    imageUrl: '/strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 36% 66%, black 29%, rgba(0, 0, 0, 0.2) 29%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Inside True South',
                    imageUrl: '/strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 75% 37%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    transform: 'rotate(180deg)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Ring Outside True North',
                    imageUrl: '/strats/codcar/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 72% 13%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Inside True South',
                    imageUrl: '/strats/codcar/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 30% 73%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
    ]
}
