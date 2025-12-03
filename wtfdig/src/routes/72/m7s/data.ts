// @ts-nocheck
import type { FightConfig, Strat, TimelineItem, StratRecord, PlayerMechStrat, MechanicStrat, PhaseStrats } from '$lib/types';

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

const timeline: TimelineItem[] = [
    {
        mechName: 'Start',
        mechType: 'Start',
        mechTag: 'p1',
        startTimeMs: 0,
    },
    {
        mechName: 'Brutal Impact',
        mechType: 'Raidwide',
        mechTag: 'p1',
        startTimeMs: 10000,
    },
    {
        mechName: 'Stoneringer',
        mechType: 'StoredMechanic',
        mechTag: 'p1',
        startTimeMs: 21000,
    },
    {
        mechName: 'Smash Here/There',
        mechType: 'Tankbuster',
        mechTag: 'p1',
        startTimeMs: 33000,
    },
    {
        mechName: 'Spore Sac',
        mechType: 'Mechanic',
        mechTag: 'p1',
        startTimeMs: 48000,
    },
    {
        mechName: 'Sinister Seeds',
        mechType: 'Mechanic',
        mechTag: 'p1',
        startTimeMs: 53000,
    },
    {
        mechName: 'Quarry Swamp',
        mechType: 'Mechanic',
        mechTag: 'p1',
        startTimeMs: 93000,
    },
    {
        mechName: 'Gigaflare',
        mechType: 'Raidwide',
        mechTag: 'p1',
        startTimeMs: 105000,
    },
    {
        mechName: 'Stoneringer',
        mechType: 'StoredMechanic',
        mechTag: 'p1',
        startTimeMs: 107000,
    },
    {
        mechName: 'Smash Here/There',
        mechType: 'Tankbuster',
        mechTag: 'p1',
        startTimeMs: 118000,
    },
    {
        mechName: 'Pulp Smash',
        mechType: 'Mechanic',
        mechTag: 'p1',
        startTimeMs: 127000,
    },
    {
        mechName: 'Neo Bombarian Special',
        mechType: 'Raidwide',
        mechTag: 'p1',
        startTimeMs: 148000,
    },
    {
        mechName: 'Stoneringer',
        mechType: 'StoredMechanic',
        mechTag: 'p2',
        startTimeMs: 168000,
    },
    {
        mechName: 'Brutish Swing',
        mechType: 'Mechanic',
        mechTag: 'p2',
        startTimeMs: 184000,
    },
    {
        mechName: 'Revenge of the Vines',
        mechType: 'Raidwide',
        mechTag: 'p2',
        startTimeMs: 195000,
    },
    {
        mechName: 'Thorny Deathmatch',
        mechType: 'Mechanic',
        mechTag: 'p2',
        startTimeMs: 203000,
    },
    {
        mechName: 'Stoneringer',
        mechType: 'StoredMechanic',
        mechTag: 'p2',
        startTimeMs: 208000,
    },
    {
        mechName: 'Abominable Blink',
        mechType: 'Mechanic',
        mechTag: 'p2',
        startTimeMs: 222000,
    },
    {
        mechName: 'Sporesplosion',
        mechType: 'Mechanic',
        mechTag: 'p2',
        startTimeMs: 228000,
    },
    {
        mechName: 'Brutish Swing',
        mechType: 'Mechanic',
        mechTag: 'p2',
        startTimeMs: 247000,
    },
    {
        mechName: 'Revenge of the Vines',
        mechType: 'Raidwide',
        mechTag: 'p2',
        startTimeMs: 258000,
    },
    {
        mechName: 'Demolition Deathmatch',
        mechType: 'Mechanic',
        mechTag: 'p2',
        startTimeMs: 264000,
    },
    {
        mechName: 'Abominable Blink',
        mechType: 'Mechanic',
        mechTag: 'p2',
        startTimeMs: 280000,
    },
    {
        mechName: 'Strange Seeds',
        mechType: 'Mechanic',
        mechTag: 'p2',
        startTimeMs: 288000,
    },
    {
        mechName: 'Stoneringer',
        mechType: 'StoredMechanic',
        startTimeMs: 294000,
        mechTag: 'p2',
    },
    {
        mechName: 'Killer Seeds',
        mechType: 'Mechanic',
        mechTag: 'p2',
        startTimeMs: 320000,
    },
    {
        mechName: 'Brutish Swing',
        mechType: 'Mechanic',
        mechTag: 'p2',
        startTimeMs: 330000,
    },
    {
        mechName: 'Revenge of the Vines',
        mechType: 'Raidwide',
        mechTag: 'p2',
        startTimeMs: 340000,
    },
    {
        mechName: 'Powerslam',
        mechType: 'Raidwide',
        mechTag: 'p2',
        startTimeMs: 353000,
    },
    {
        mechName: 'Brutal Impact x7',
        mechType: 'Raidwide',
        mechTag: 'p3',
        startTimeMs: 382000,
    },
    {
        mechName: 'Stoneringer 2',
        mechType: 'StoredMechanic',
        mechTag: 'p3',
        startTimeMs: 394000,
    },
    {
        mechName: 'Brutish Swing',
        mechType: 'Mechanic',
        mechTag: 'p3',
        startTimeMs: 409000,
    },
    {
        mechName: 'Lashing Lariat',
        mechType: 'Mechanic',
        mechTag: 'p3',
        startTimeMs: 416000,
    },
    {
        mechName: 'Brutish Swing',
        mechType: 'Mechanic',
        mechTag: 'p3',
        startTimeMs: 425000,
    },
    {
        mechName: 'Slaminator',
        mechType: 'Mechanic',
        mechTag: 'p3',
        startTimeMs: 434000,
    },
    {
        mechName: 'Brutal Impact x8',
        mechType: 'Raidwide',
        mechTag: 'p3',
        startTimeMs: 443000,
    },
    {
        mechName: 'Stoneringer',
        mechType: 'StoredMechanic',
        mechTag: 'p3',
        startTimeMs: 453000,
    },
    {
        mechName: 'Smash Here/There',
        mechType: 'Tankbuster',
        mechTag: 'p3',
        startTimeMs: 465000,
    },
    {
        mechName: 'Debris Deathmatch',
        mechType: 'Mechanic',
        mechTag: 'p3',
        startTimeMs: 478000,
    },
    {
        mechName: 'Spore Sac',
        mechType: 'Mechanic',
        mechTag: 'p3',
        startTimeMs: 488000,
    },
    {
        mechName: 'Killer Seeds',
        mechType: 'Mechanic',
        mechTag: 'p3',
        startTimeMs: 497000,
    },
    {
        mechName: 'Quarry Swamp',
        mechType: 'Mechanic',
        mechTag: 'p3',
        startTimeMs: 514000,
    },
    {
        mechName: 'Sinister Seeds',
        mechType: 'Mechanic',
        mechTag: 'p3',
        startTimeMs: 525000,
    },
    {
        mechName: 'Pulp Smash',
        mechType: 'Mechanic',
        mechTag: 'p3',
        startTimeMs: 543000,
    },
    {
        mechName: 'Brutal Impact x8',
        mechType: 'Raidwide',
        mechTag: 'p3',
        startTimeMs: 553000,
    },
    {
        mechName: 'Stoneringer 2',
        mechType: 'StoredMechanic',
        mechTag: 'p3',
        startTimeMs: 570000,
    },
    {
        mechName: 'Strange Seeds',
        mechType: 'Mechanic',
        mechTag: 'p3',
        startTimeMs: 582000,
    },
    {
        mechName: 'Tendrils + Brutish',
        mechType: 'Mechanic',
        mechTag: 'p3',
        startTimeMs: 593000,
    },
    {
        mechName: 'Lashing Lariat',
        mechType: 'Mechanic',
        mechTag: 'p3',
        startTimeMs: 598000,
    },
    {
        mechName: 'Strange Seeds',
        mechType: 'Mechanic',
        mechTag: 'p3',
        startTimeMs: 602000,
    },
    {
        mechName: 'Tendrils + Brutish',
        mechType: 'Mechanic',
        mechTag: 'p3',
        startTimeMs: 607000,
    },
    {
        mechName: 'Slaminator',
        mechType: 'Mechanic',
        mechTag: 'p3',
        startTimeMs: 614000,
    },
    {
        mechName: 'Stoneringer',
        mechType: 'StoredMechanic',
        mechTag: 'p3',
        startTimeMs: 620000,
    },
    {
        mechName: 'Smash Here/There',
        mechType: 'Tankbuster',
        mechTag: 'p3',
        startTimeMs: 630000,
    },
    {
        mechName: 'Brutal Impact x8',
        mechType: 'Raidwide',
        mechTag: 'p3',
        startTimeMs: 640000,
    },
    {
        mechName: 'Enrage',
        mechType: 'Enrage',
        mechTag: 'p3',
        startTimeMs: 661100,
    },
]

const toxicP2: Record<string, string | Record<string, string | PlayerMechStrat>> = {
    'url': 'https://raidplan.io/plan/gIcsj6_cyedVQON7',
    'swing1spreads': {
        'description': 'MT M1 R1 edge of arena\nOT M2 R2 middle of arena\nHealers middle of arena',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Small safe area (edge), deep in corner',
            imageUrl: './m7s/p2/toxic-swing1-spreads.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `Large safe area (middle), close to boss on wall`,
            imageUrl: './m7s/p2/toxic-swing1-spreads.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Large safe area, far from boss, close to danger zone',
            imageUrl: './m7s/p2/toxic-swing1-spreads.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Large safe area, far from boss and danger zone',
            imageUrl: './m7s/p2/toxic-swing1-spreads.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Small safe area (edge), between tank and ranged',
            imageUrl: './m7s/p2/toxic-swing1-spreads.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Large safe area (middle), close to boss, close to cleave',
            imageUrl: './m7s/p2/toxic-swing1-spreads.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Small safe area (edge), far from boss',
            imageUrl: './m7s/p2/toxic-swing1-spreads.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Large safe area (middle), between tank and healers, far from cleave',
            imageUrl: './m7s/p2/toxic-swing1-spreads.webp',
        },
    },
    'flares': {
        'description': 'Group in corner near boss, tether away\nSwap if tank tether gets flare',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Away from boss if you get flare\nProvoke and stay on boss if no flare',
            imageUrl: './m7s/p2/toxic-flares.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `Away from boss if you get flare\nProvoke and stay on boss if no flare`,
            imageUrl: './m7s/p2/toxic-flares.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Stack in corner near boss',
            imageUrl: './m7s/p2/toxic-flares.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Stack in corner near boss',
            imageUrl: './m7s/p2/toxic-flares.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Stack in corner near boss',
            imageUrl: './m7s/p2/toxic-flares.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Stack in corner near boss',
            imageUrl: './m7s/p2/toxic-flares.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Stack in corner near boss',
            imageUrl: './m7s/p2/toxic-flares.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Stack in corner near boss',
            imageUrl: './m7s/p2/toxic-flares.webp',
        },
    },
    'swing2spreads': {
        'description': 'MT M1 R1 edge of arena\nOT M2 R2 middle of arena\nHealers middle of arena',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Small safe area (edge), deep in corner',
            imageUrl: './m7s/p2/toxic-swing2-spreads.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `Large safe area (middle), close to boss on wall`,
            imageUrl: './m7s/p2/toxic-swing2-spreads.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Large safe area, far from boss, close to danger zone',
            imageUrl: './m7s/p2/toxic-swing2-spreads.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Large safe area, far from boss and danger zone',
            imageUrl: './m7s/p2/toxic-swing2-spreads.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Small safe area (edge), between tank and ranged',
            imageUrl: './m7s/p2/toxic-swing2-spreads.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Large safe area (middle), close to boss, close to cleave',
            imageUrl: './m7s/p2/toxic-swing2-spreads.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Small safe area (edge), far from boss',
            imageUrl: './m7s/p2/toxic-swing2-spreads.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Large safe area (middle), between tank and healers, far from cleave',
            imageUrl: './m7s/p2/toxic-swing2-spreads.webp',
        },
    },
    'strangeseedsbossnorth': {
        'description': 'Alternate seed drops on Corner and next to/on inner rivets',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-bossnorth.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/toxic-seeds-bossnorth.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-bossnorth.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-bossnorth.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-bossnorth.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-bossnorth.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-bossnorth.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-bossnorth.webp',
        },
    },
    'strangeseedsnorthtethers': {
        'description': 'Caster short wall tether, Ranged long wall tether',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-tethers-bossnorth.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/toxic-seeds-tethers-bossnorth.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-tethers-bossnorth.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-tethers-bossnorth.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-tethers-bossnorth.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-tethers-bossnorth.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-tethers-bossnorth.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-tethers-bossnorth.webp',
        },
    },
    'strangeseedsnorthstacks': {
        'description': 'MT M1 left of boss, OT M2 right of boss, Healers + Ranged away from boss',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-stacks-bossnorth.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/toxic-seeds-stacks-bossnorth.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-stacks-bossnorth.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-stacks-bossnorth.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-stacks-bossnorth.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-stacks-bossnorth.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-stacks-bossnorth.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-stacks-bossnorth.webp',
        },
    },
    'strangeseedsbosssouth': {
        'description': 'Alternate seed drops on Corner and next to/on inner rivets',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-bosssouth.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/toxic-seeds-bosssouth.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-bosssouth.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-bosssouth.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-bosssouth.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-bosssouth.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-bosssouth.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-bosssouth.webp',
        },
    },
    'strangeseedssouthtethers': {
        'description': 'Caster short wall tether, Ranged long wall tether',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-tethers-bosssouth.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/toxic-seeds-tethers-bosssouth.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-tethers-bosssouth.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-tethers-bosssouth.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-tethers-bosssouth.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-tethers-bosssouth.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-tethers-bosssouth.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-tethers-bosssouth.webp',
        },
    },
    'strangeseedssouthstacks': {
        'description': 'MT M1 left of boss, OT M2 right of boss, Healers + Ranged away from boss',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-stacks-bosssouth.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/toxic-seeds-stacks-bosssouth.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-stacks-bosssouth.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-stacks-bosssouth.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-stacks-bosssouth.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-stacks-bosssouth.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-stacks-bosssouth.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/toxic-seeds-stacks-bosssouth.webp',
        },
    },
    'swing3spreads': {
        'description': 'MT M1 R1 edge of arena\nOT M2 R2 middle of arena\nHealers middle of arena',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/toxic-swing3.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/toxic-swing3.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/toxic-swing3.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/toxic-swing3.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/toxic-swing3.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/toxic-swing3.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/toxic-swing3.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/toxic-swing3.webp',
        },
    },
}

const biliP2: Record<string, Record<string, string | PlayerMechStrat>> = {
    'swing1spreads': {
        'description': 'Not specified in Bili P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Small safe area (edge), deep in corner',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `Large safe area (middle), close to boss on wall`,
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Large safe area, far from boss, close to danger zone',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Large safe area, far from boss and danger zone',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Small safe area (edge), between tank and ranged',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Large safe area (middle), close to boss, close to cleave',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Small safe area (edge), far from boss',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Large safe area (middle), between tank and healers, far from cleave',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
    },
    'flares': {
        'description': 'Not specified in Bili P2 raidplan, Alpha P2 as reference\nFlare in corner near boss, group away\nSwap if tank tether gets flare',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'In corner near boss if you get flare\nProvoke and go to opposite side of boss hitbox if no flare',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `In corner near boss if you get flare\nProvoke and go to opposite side of boss hitbox if no flare`,
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
    },
    'swing2spreads': {
        'description': 'Not specified in Bili P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Small safe area (edge), deep in corner',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `Large safe area (middle), close to boss on wall`,
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Large safe area, far from boss, close to danger zone',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Large safe area, far from boss and danger zone',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Small safe area (edge), between tank and ranged',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Large safe area (middle), close to boss, close to cleave',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Small safe area (edge), far from boss',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Large safe area (middle), between tank and healers, far from cleave',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
    },
    'strangeseedsbossnorth': {
        'description': 'Drop seeds on positions\nDodge to neighbor if needed',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
    },
    'strangeseedsnorthtethers': {
        'description': 'H1 take long wall tether, H2 take short wall tether',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-bossnorth.webp',
        },
    },
    'strangeseedsnorthstacks': {
        'description': 'MT M1 left of boss\nOT M2 right of boss\nH1 R1 center of far long wall\nH2 R2 center of far short wall',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
    },
    'strangeseedsbosssouth': {
        'description': 'Drop seeds on positions\nDodge to neighbor if needed',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
    },
    'strangeseedssouthtethers': {
        'description': 'Caster short wall tether, Ranged long wall tether',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-bosssouth.webp',
        },
    },
    'strangeseedssouthstacks': {
        'description': 'MT M1 left of boss, OT M2 right of boss, Healers + Ranged away from boss',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/bili-seeds-stacks.webp',
        },
    },
    'swing3spreads': {
        'description': 'Not specified in Bili P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle\nIf North, G1 Left G2 Right, TMHR',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
    },
}

const alphaP2: Record<string, string | Record<string, string | PlayerMechStrat>> = {
    'url': 'https://raidplan.io/plan/jtQenPvoJy7hsV-x',
    'swing1spreads': {
        'description': 'MT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Small safe area (edge), deep in corner',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `Large safe area (middle), close to boss on wall`,
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Large safe area, far from boss, close to danger zone',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Large safe area, far from boss and danger zone',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Small safe area (edge), between tank and ranged',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Large safe area (middle), close to boss, close to cleave',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Small safe area (edge), far from boss',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Large safe area (middle), between tank and healers, far from cleave',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
    },
    'flares': {
        'description': 'Flare in corner near boss, group away\nSwap if tank tether gets flare',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'In corner near boss if you get flare\nProvoke and go to opposite side of boss hitbox if no flare',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `In corner near boss if you get flare\nProvoke and go to opposite side of boss hitbox if no flare`,
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
    },
    'swing2spreads': {
        'description': 'MT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Small safe area (edge), deep in corner',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `Large safe area (middle), close to boss on wall`,
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Large safe area, far from boss, close to danger zone',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Large safe area, far from boss and danger zone',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Small safe area (edge), between tank and ranged',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Large safe area (middle), close to boss, close to cleave',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Small safe area (edge), far from boss',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Large safe area (middle), between tank and healers, far from cleave',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
    },
    'strangeseedsbossnorth': {
        'description': 'Alternate seed drops between green and red spots\nBlue spots are safe',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
    },
    'strangeseedsnorthtethers': {
        'description': 'Ranged long wall tether, Tank short wall tether',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-bossnorth.webp',
        },
    },
    'strangeseedsnorthstacks': {
        'description': 'Take stacks on green spots\nDodge to any red spot',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-stacks-bossnorth.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/alpha-seeds-stacks-bossnorth.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-stacks-bossnorth.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-stacks-bossnorth.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-stacks-bossnorth.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-stacks-bossnorth.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-stacks-bossnorth.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-stacks-bossnorth.webp',
        },
    },
    'strangeseedsbosssouth': {
        'description': 'Alternate seed drops between green and red spots\nBlue spots are safe',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
    },
    'strangeseedssouthtethers': {
        'description': 'Ranged long wall tether, Healer short wall tether',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-bosssouth.webp',
        },
    },
    'strangeseedssouthstacks': {
        'description': 'Take stacks on green spots\nDodge to any red spot',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-stacks-bosssouth.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/alpha-seeds-stacks-bosssouth.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-stacks-bosssouth.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-stacks-bosssouth.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-stacks-bosssouth.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-stacks-bosssouth.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-stacks-bosssouth.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-seeds-stacks-bosssouth.webp',
        },
    },
    'swing3spreads': {
        'description': 'MT M1 R1 Edge, OT M2 R2 Middle, Healers Middle\nIf North, G1 Left G2 Right, TMHR',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
    },
}

const alpha2P2: Record<string, string | Record<string, string | PlayerMechStrat>> = {
    'url': 'https://raidplan.io/plan/jtQenPvoJy7hsV-x',
    'swing1spreads': {
        'description': 'MT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Small safe area (edge), deep in corner',
            imageUrl: './m7s/p2/alpha2-swing1-spreads.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `Large safe area (middle), close to boss on wall`,
            imageUrl: './m7s/p2/alpha2-swing1-spreads.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Large safe area, far from boss, close to danger zone',
            imageUrl: './m7s/p2/alpha2-swing1-spreads.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Large safe area, far from boss and danger zone',
            imageUrl: './m7s/p2/alpha2-swing1-spreads.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Small safe area (edge), between tank and ranged',
            imageUrl: './m7s/p2/alpha2-swing1-spreads.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Large safe area (middle), close to boss, close to cleave',
            imageUrl: './m7s/p2/alpha2-swing1-spreads.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Small safe area (edge), far from boss',
            imageUrl: './m7s/p2/alpha2-swing1-spreads.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Large safe area (middle), between tank and healers, far from cleave',
            imageUrl: './m7s/p2/alpha2-swing1-spreads.webp',
        },
    },
    'flares': {
        'description': 'Flare in corner near boss, group away\nSwap if tank tether gets flare',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'In corner near boss if you get flare\nProvoke and go to opposite side of boss hitbox if no flare',
            imageUrl: './m7s/p2/alpha2-flares.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `In corner near boss if you get flare\nProvoke and go to opposite side of boss hitbox if no flare`,
            imageUrl: './m7s/p2/alpha2-flares.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha2-flares.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha2-flares.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha2-flares.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha2-flares.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha2-flares.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha2-flares.webp',
        },
    },
    'swing2spreads': {
        'description': 'MT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Small safe area (edge), deep in corner',
            imageUrl: './m7s/p2/alpha2-swing2-spreads.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `Large safe area (middle), close to boss on wall`,
            imageUrl: './m7s/p2/alpha2-swing2-spreads.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Large safe area, far from boss, close to danger zone',
            imageUrl: './m7s/p2/alpha2-swing2-spreads.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Large safe area, far from boss and danger zone',
            imageUrl: './m7s/p2/alpha2-swing2-spreads.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Small safe area (edge), between tank and ranged',
            imageUrl: './m7s/p2/alpha2-swing2-spreads.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Large safe area (middle), close to boss, close to cleave',
            imageUrl: './m7s/p2/alpha2-swing2-spreads.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Small safe area (edge), far from boss',
            imageUrl: './m7s/p2/alpha2-swing2-spreads.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Large safe area (middle), between tank and healers, far from cleave',
            imageUrl: './m7s/p2/alpha2-swing2-spreads.webp',
        },
    },
    'strangeseedsbossnorth': {
        'description': 'Alternate seed drops between green and red spots\nBlue spots are safe\nBoth Healers take tethers',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha2-seeds-boss-north.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/alpha2-seeds-boss-north.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha2-seeds-boss-north.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha2-seeds-boss-north.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha2-seeds-boss-north.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha2-seeds-boss-north.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha2-seeds-boss-north.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha2-seeds-boss-north.webp',
        },
    },
    'strangeseedsnorthstacks': {
        'description': 'Take stacks on green spots\nDodge to any red spot',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
    },
    'strangeseedsbosssouth': {
        'description': 'Alternate seed drops between green and red spots\nBlue spots are safe\nHealer take far tether, Tank take close tether',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha2-seeds-setup.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/alpha2-seeds-setup.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha2-seeds-setup.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha2-seeds-setup.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha2-seeds-setup.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha2-seeds-setup.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha2-seeds-setup.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha2-seeds-setup.webp',
        },
    },
    'strangeseedssouthstacks': {
        'description': 'Take stacks on green spots\nDodge to any red spot',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha2-seeds-stacks.webp',
        },
    },
    'swing3spreads': {
        'description': 'MT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha2-swing3-spreads.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/alpha2-swing3-spreads.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha2-swing3-spreads.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha2-swing3-spreads.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha2-swing3-spreads.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha2-swing3-spreads.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha2-swing3-spreads.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha2-swing3-spreads.webp',
        },
    },
}

const zenithP2: Record<string, string | Record<string, string | PlayerMechStrat>> = {
    'url': 'https://raidplan.io/plan/2Y1HT42osFhYD6Pe',
    'swing1spreads': {
        'description': 'Not specified in Zenith P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Small safe area (edge), deep in corner',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `Large safe area (middle), close to boss on wall`,
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Large safe area, far from boss, close to danger zone',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Large safe area, far from boss and danger zone',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Small safe area (edge), between tank and ranged',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Large safe area (middle), close to boss, close to cleave',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Small safe area (edge), far from boss',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Large safe area (middle), between tank and healers, far from cleave',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
    },
    'flares': {
        'description': 'Not specified in Zenith P2 raidplan, Alpha P2 as reference\nFlare in corner near boss, group away\nSwap if tank tether gets flare',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'In corner near boss if you get flare\nProvoke and go to opposite side of boss hitbox if no flare',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `In corner near boss if you get flare\nProvoke and go to opposite side of boss hitbox if no flare`,
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
    },
    'swing2spreads': {
        'description': 'Not specified in Zenith P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Small safe area (edge), deep in corner',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `Large safe area (middle), close to boss on wall`,
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Large safe area, far from boss, close to danger zone',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Large safe area, far from boss and danger zone',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Small safe area (edge), between tank and ranged',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Large safe area (middle), close to boss, close to cleave',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Small safe area (edge), far from boss',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Large safe area (middle), between tank and healers, far from cleave',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
    },
    'strangeseedsbossnorth': {
        'description': 'Alternate seed drops on Green and Red spots\nTethers have prio on highlighted spots',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
    },
    'strangeseedsnorthtethers': {
        'description': 'Healer short wall tether, Ranged long wall tether',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-boss-north.webp',
        },
    },
    'strangeseedsnorthstacks': {
        'description': 'Take pairs on Green spots, dodge into Red spots',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
    },
    'strangeseedsbosssouth': {
        'description': 'Alternate seed drops on Green and Red spots\nTethers have prio on highlighted spots',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
    },
    'strangeseedssouthtethers': {
        'description': 'Tank short wall tether, Ranged long wall tether',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-boss-south.webp',
        },
    },
    'strangeseedssouthstacks': {
        'description': 'Take pairs on Green spots, dodge into Red spots',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/zenith-seeds-stacks.webp',
        },
    },
    'swing3spreads': {
        'description': 'Not specified in Zenith P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle\nIf North, G1 Left G2 Right, TMHR',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
    },
}

const cuteP2: Record<string, string | Record<string, string | PlayerMechStrat>> = {
    'url': 'https://raidplan.io/plan/q_qH0crFmPZqrY4L',
    'swing1spreads': {
        'description': 'Not specified in Cute P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Small safe area (edge), deep in corner',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `Large safe area (middle), close to boss on wall`,
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Large safe area, far from boss, close to danger zone',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Large safe area, far from boss and danger zone',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Small safe area (edge), between tank and ranged',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Large safe area (middle), close to boss, close to cleave',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Small safe area (edge), far from boss',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Large safe area (middle), between tank and healers, far from cleave',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
    },
    'flares': {
        'description': 'Flare in corner near boss, group away\nSwap if tank tether gets flare',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'In corner near boss if you get flare\nProvoke and go to opposite side of boss hitbox if no flare',
            imageUrl: './m7s/p2/cute-flares.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `In corner near boss if you get flare\nProvoke and go to opposite side of boss hitbox if no flare`,
            imageUrl: './m7s/p2/cute-flares.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Away from boss',
            imageUrl: './m7s/p2/cute-flares.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Away from boss',
            imageUrl: './m7s/p2/cute-flares.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Away from boss',
            imageUrl: './m7s/p2/cute-flares.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Away from boss',
            imageUrl: './m7s/p2/cute-flares.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Away from boss',
            imageUrl: './m7s/p2/cute-flares.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Away from boss',
            imageUrl: './m7s/p2/cute-flares.webp',
        },
    },
    'swing2spreads': {
        'description': 'Not specified in Cute P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Small safe area (edge), deep in corner',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `Large safe area (middle), close to boss on wall`,
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Large safe area, far from boss, close to danger zone',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Large safe area, far from boss and danger zone',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Small safe area (edge), between tank and ranged',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Large safe area (middle), close to boss, close to cleave',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Small safe area (edge), far from boss',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Large safe area (middle), between tank and healers, far from cleave',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
    },
    'strangeseedsbossnorth': {
        'description': 'Alternate seed drops on Red and Green dots\nUntethered party members stay near boss',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/cute-seeds.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/cute-seeds.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/cute-seeds.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/cute-seeds.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/cute-seeds.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/cute-seeds.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/cute-seeds.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/cute-seeds.webp',
        },
    },
    'strangeseedsnorthtethers': {
        'description': 'H2 grab far tether, OT grab close tether',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/cute-seeds-tethers-boss-north.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/cute-seeds-tethers-boss-north.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/cute-seeds-tethers-boss-north.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/cute-seeds-tethers-boss-north.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/cute-seeds-tethers-boss-north.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/cute-seeds-tethers-boss-north.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/cute-seeds-tethers-boss-north.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/cute-seeds-tethers-boss-north.webp',
        },
    },
    'strangeseedsnorthstacks': {
        'description': 'MT M1 center near boss\nOT M2 corner near boss\nH1 R1 far corner on same edge as melees\nH2 R2 Center away from boss',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
    },
    'strangeseedsbosssouth': {
        'description': 'Alternate seed drops on Red and Green dots\nUntethered party members stay near boss',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/cute-seeds.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/cute-seeds.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/cute-seeds.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/cute-seeds.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/cute-seeds.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/cute-seeds.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/cute-seeds.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/cute-seeds.webp',
        },
    },
    'strangeseedssouthtethers': {
        'description': 'H2 grab long wall tether, R1 or R2 grab short wall tether',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/cute-seeds-tethers-boss-south.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/cute-seeds-tethers-boss-south.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/cute-seeds-tethers-boss-south.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/cute-seeds-tethers-boss-south.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/cute-seeds-tethers-boss-south.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/cute-seeds-tethers-boss-south.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/cute-seeds-tethers-boss-south.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/cute-seeds-tethers-boss-south.webp',
        },
    },
    'strangeseedssouthstacks': {
        'description': 'MT M1 center near boss\nOT M2 corner near boss\nH1 R1 far corner on same edge as melees\nH2 R2 center of long edge away from boss',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/cute-seeds-stacks.webp',
        },
    },
    'swing3spreads': {
        'description': 'Not specified in Cute P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle\nIf North, G1 Left G2 Right, TMHR',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
    },
}

const lockedP2: Record<string, string | Record<string, string | PlayerMechStrat>> = {
    'url': 'https://raidplan.io/plan/FGvPnlaAe1fwlsIB',
    'swing1spreads': {
        'description': 'Not specified in Locked P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Small safe area (edge), deep in corner',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `Large safe area (middle), close to boss on wall`,
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Large safe area, far from boss, close to danger zone',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Large safe area, far from boss and danger zone',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Small safe area (edge), between tank and ranged',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Large safe area (middle), close to boss, close to cleave',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Small safe area (edge), far from boss',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Large safe area (middle), between tank and healers, far from cleave',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
    },
    'flares': {
        'description': 'Not specified in Locked P2 raidplan, Alpha P2 as reference\nFlare in corner near boss, group away\nSwap if tank tether gets flare',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'In corner near boss if you get flare\nProvoke and go to opposite side of boss hitbox if no flare',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `In corner near boss if you get flare\nProvoke and go to opposite side of boss hitbox if no flare`,
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
    },
    'swing2spreads': {
        'description': 'Not specified in Locked P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Small safe area (edge), deep in corner',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `Large safe area (middle), close to boss on wall`,
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Large safe area, far from boss, close to danger zone',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Large safe area, far from boss and danger zone',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Small safe area (edge), between tank and ranged',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Large safe area (middle), close to boss, close to cleave',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Small safe area (edge), far from boss',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Large safe area (middle), between tank and healers, far from cleave',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
    },
    'strangeseedsbossnorth': {
        'description': 'Alternate seed drops on Green and Red dots\nUntethered party members stay near boss',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
    },
    'strangeseedsnorthtethers': {
        'description': 'R1 grab far tether, Healer grab close tether',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/locked-seeds-boss-north.webp',
        },
    },
    'strangeseedsnorthstacks': {
        'description': 'MT M1 corner near boss\nOT M2 mid near boss\nR1 + non-Tether Healer to mid edge\nR2 + Tether Healer to NW Corner',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/locked-stacks-boss-north.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/locked-stacks-boss-north.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/locked-stacks-boss-north.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/locked-stacks-boss-north.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/locked-stacks-boss-north.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/locked-stacks-boss-north.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/locked-stacks-boss-north.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/locked-stacks-boss-north.webp',
        },
    },
    'strangeseedsbosssouth': {
        'description': 'Alternate seed drops on Green and Red dots\nUntethered party members stay near boss',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/locked-seeds.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/locked-seeds.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/locked-seeds.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/locked-seeds.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/locked-seeds.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/locked-seeds.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/locked-seeds.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/locked-seeds.webp',
        },
    },
    'strangeseedssouthtethers': {
        'description': 'Healer grab North wall tether, R1 grab long wall tether',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/locked-seeds.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/locked-seeds.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/locked-seeds.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/locked-seeds.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/locked-seeds.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/locked-seeds.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/locked-seeds.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/locked-seeds.webp',
        },
    },
    'strangeseedssouthstacks': {
        'description': 'MT M1 corner near boss\nOT M2 mid near boss\nR1 + non-Tether Healer to mid edge\nR2 + Tether Healer to NW Corner',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/locked-stacks-boss-south.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/locked-stacks-boss-south.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/locked-stacks-boss-south.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/locked-stacks-boss-south.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/locked-stacks-boss-south.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/locked-stacks-boss-south.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/locked-stacks-boss-south.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/locked-stacks-boss-south.webp',
        },
    },
    'swing3spreads': {
        'description': 'Not specified in Locked P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle\nIf North, G1 Left G2 Right, TMHR',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
    },
}

const fixedP2: Record<string, string | Record<string, string | PlayerMechStrat>> = {
    'url': 'https://raidplan.io/plan/-lZai2v34Y8bC15S',
    'swing1spreads': {
        'description': 'Not specified in Fixed P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Small safe area (edge), deep in corner',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `Large safe area (middle), close to boss on wall`,
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Large safe area, far from boss, close to danger zone',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Large safe area, far from boss and danger zone',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Small safe area (edge), between tank and ranged',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Large safe area (middle), close to boss, close to cleave',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Small safe area (edge), far from boss',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Large safe area (middle), between tank and healers, far from cleave',
            imageUrl: './m7s/p2/alpha-swing1-spreads.webp',
        },
    },
    'flares': {
        'description': 'Not specified in Fixed P2 raidplan, Alpha P2 as reference\nFlare in corner near boss, group away\nSwap if tank tether gets flare',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'In corner near boss if you get flare\nProvoke and go to opposite side of boss hitbox if no flare',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `In corner near boss if you get flare\nProvoke and go to opposite side of boss hitbox if no flare`,
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Away from boss',
            imageUrl: './m7s/p2/alpha-flares.webp',
        },
    },
    'swing2spreads': {
        'description': 'Not specified in Fixed P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Small safe area (edge), deep in corner',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `Large safe area (middle), close to boss on wall`,
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Large safe area, far from boss, close to danger zone',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Large safe area, far from boss and danger zone',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Small safe area (edge), between tank and ranged',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Large safe area (middle), close to boss, close to cleave',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Small safe area (edge), far from boss',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Large safe area (middle), between tank and healers, far from cleave',
            imageUrl: './m7s/p2/alpha-swing2-spreads.webp',
        },
    },
    'strangeseedsbossnorth': {
        'description': `Wait for your bait to go off\nMove to another person's spot if they're not baiting next or use eyes\nGo back and chill at your spot`,
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
    },
    'strangeseedsnorthtethers': {
        'description': 'OT grab close tether, R1 grab far tether',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-boss-north.webp',
        },
    },
    'strangeseedsnorthstacks': {
        'description': 'OT M1 corner near boss\nMT M2 mid near boss\nH1 R1 to mid edge\nH2 R2 to SE corner',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
    },
    'strangeseedsbosssouth': {
        'description': `Wait for your bait to go off\nMove to another person's spot if they're not baiting next or use eyes\nGo back and chill at your spot`,
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
    },
    'strangeseedssouthtethers': {
        'description': 'R1 grab long side tether\nR2 grab North side tether',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-boss-south.webp',
        },
    },
    'strangeseedssouthstacks': {
        'description': 'OT M1 corner near boss\nMT M2 mid near boss\nH1 R1 mid edge\nH2 R2 NW corner',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/fixed-seeds-stacks.webp',
        },
    },
    'swing3spreads': {
        'description': 'Not specified in Fixed P2 raidplan, Alpha P2 as reference\nMT M1 R1 Edge, OT M2 R2 Middle, Healers Middle\nIf North, G1 Left G2 Right, TMHR',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/alpha-swing3.webp',
        },
    },
}

const game8P2: Record<string, string | Record<string, string | PlayerMechStrat>> = {
    'swing1spreads': {
        'description': 'G1 Left, G2 Right facing boss\nMTHR',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Left facing boss, 2nd',
            imageUrl: './m7s/p2/game8-swing-spreads.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `Right facing boss, 2nd`,
            imageUrl: './m7s/p2/game8-swing-spreads.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Left facing boss, 3rd',
            imageUrl: './m7s/p2/game8-swing-spreads.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Right facing boss, 3rd',
            imageUrl: './m7s/p2/game8-swing-spreads.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Left facing boss, 1st',
            imageUrl: './m7s/p2/game8-swing-spreads.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Right facing boss, 1st',
            imageUrl: './m7s/p2/game8-swing-spreads.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Left facing boss, 4th',
            imageUrl: './m7s/p2/game8-swing-spreads.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Right facing boss, 4th',
            imageUrl: './m7s/p2/game8-swing-spreads.webp',
        },
    },
    'flares': {
        'description': 'Tank run flare away from boss',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Run far if flare',
            imageUrl: '',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `Provoke if no flare\nRun far if flare`,
            imageUrl: '',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Stay near boss',
            imageUrl: '',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Stay near boss',
            imageUrl: '',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Stay near boss',
            imageUrl: '',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Stay near boss',
            imageUrl: '',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Stay near boss',
            imageUrl: '',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Stay near boss',
            imageUrl: '',
        },
    },
    'swing2spreads': {
        'description': 'G1 Left, G2 Right facing boss\nMTHR',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Left facing boss, 2nd',
            imageUrl: './m7s/p2/game8-swing-spreads.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `Right facing boss, 2nd`,
            imageUrl: './m7s/p2/game8-swing-spreads.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Left facing boss, 3rd',
            imageUrl: './m7s/p2/game8-swing-spreads.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Right facing boss, 3rd',
            imageUrl: './m7s/p2/game8-swing-spreads.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Left facing boss, 1st',
            imageUrl: './m7s/p2/game8-swing-spreads.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Right facing boss, 1st',
            imageUrl: './m7s/p2/game8-swing-spreads.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Left facing boss, 4th',
            imageUrl: './m7s/p2/game8-swing-spreads.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Right facing boss, 4th',
            imageUrl: './m7s/p2/game8-swing-spreads.webp',
        },
    },
    'strangeseedsbossnorth': {
        'description': 'Alternate seed drops between 1/3 and 2/4 spots\nSafe spots are in blue',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/game8-seeds-setup.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/game8-seeds-setup.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/game8-seeds-setup.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/game8-seeds-setup.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/game8-seeds-setup.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/game8-seeds-setup.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Take short side tether',
            imageUrl: './m7s/p2/game8-seeds-setup.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Take long side tether',
            imageUrl: './m7s/p2/game8-seeds-setup.webp',
        },
    },
    'strangeseedsnorthtethers': {
        'description': 'D3 take short side tether, D4 take long side tether',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: '',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: '',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: '',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: '',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: '',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: '',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Take short side tether',
            imageUrl: '',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Take long side tether',
            imageUrl: '',
        },
    },
    'strangeseedsnorthstacks': {
        'description': 'MT D1 corner near boss\nST D2 mid near boss\nH2 D4 mid away from boss\nH1 D3 NW corner',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/game8-seeds-stacks.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/game8-seeds-stacks.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/game8-seeds-stacks.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/game8-seeds-stacks.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/game8-seeds-stacks.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/game8-seeds-stacks.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/game8-seeds-stacks.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/game8-seeds-stacks.webp',
        },
    },
    'strangeseedsbosssouth': {
        'description': 'Alternate seed drops between 1/3 and 2/4 spots\nSafe spots are in blue',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/game8-seeds-setup.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/game8-seeds-setup.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/game8-seeds-setup.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/game8-seeds-setup.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/game8-seeds-setup.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/game8-seeds-setup.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Take short side tether',
            imageUrl: './m7s/p2/game8-seeds-setup.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Take long side tether',
            imageUrl: './m7s/p2/game8-seeds-setup.webp',
        },
    },
    'strangeseedssouthtethers': {
        'description': 'D3 take short side tether, D4 take long side tether',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: '',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: '',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: '',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: '',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: '',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: '',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Take short side tether',
            imageUrl: '',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Take long side tether',
            imageUrl: '',
        },
    },
    'strangeseedssouthstacks': {
        'description': 'MT D1 corner near boss\nST D2 mid near boss\nH2 D4 mid away from boss\nH1 D3 NW corner',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/game8-seeds-stacks.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/game8-seeds-stacks.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/game8-seeds-stacks.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/game8-seeds-stacks.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/game8-seeds-stacks.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/game8-seeds-stacks.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/game8-seeds-stacks.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/game8-seeds-stacks.webp',
        },
    },
    'swing3spreads': {
        'description': 'G1 Left, G2 Right facing boss\nMTHR',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Left facing boss, 2nd',
            imageUrl: './m7s/p2/game8-swing-spreads.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `Right facing boss, 2nd`,
            imageUrl: './m7s/p2/game8-swing-spreads.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Left facing boss, 3rd',
            imageUrl: './m7s/p2/game8-swing-spreads.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Right facing boss, 3rd',
            imageUrl: './m7s/p2/game8-swing-spreads.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Left facing boss, 1st',
            imageUrl: './m7s/p2/game8-swing-spreads.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Right facing boss, 1st',
            imageUrl: './m7s/p2/game8-swing-spreads.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Left facing boss, 4th',
            imageUrl: './m7s/p2/game8-swing-spreads.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Right facing boss, 4th',
            imageUrl: './m7s/p2/game8-swing-spreads.webp',
        },
    },
}

const mrP2: Record<string, string | Record<string, string | PlayerMechStrat>> = {
    'swing1spreads': {
        'description': 'MT D1 H1 D3 edge of arena\nOT D2 H2 D4 middle of arena',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Edge, 1st',
            imageUrl: './m7s/p2/mr-swing1-spreads.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `Middle, 1st`,
            imageUrl: './m7s/p2/mr-swing1-spreads.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Edge, 3rd',
            imageUrl: './m7s/p2/mr-swing1-spreads.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Middle, 3rd',
            imageUrl: './m7s/p2/mr-swing1-spreads.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Edge, 2nd',
            imageUrl: './m7s/p2/mr-swing1-spreads.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Middle, 2nd',
            imageUrl: './m7s/p2/mr-swing1-spreads.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Edge, 4th',
            imageUrl: './m7s/p2/mr-swing1-spreads.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Middle, 4th',
            imageUrl: './m7s/p2/mr-swing1-spreads.webp',
        },
    },
    'flares': {
        'description': 'Flare in corner near boss, group away\nSwap if tank tether gets flare',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'In corner near boss if flare\nProvoke and go to opposite side of boss hitbox if no flare',
            imageUrl: './m7s/p2/mr-flares.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `In corner near boss if flare\nProvoke and go to opposite side of boss hitbox if no flare`,
            imageUrl: './m7s/p2/mr-flares.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Away from flare corner',
            imageUrl: './m7s/p2/mr-flares.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Away from flare corner',
            imageUrl: './m7s/p2/mr-flares.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Away from flare corner',
            imageUrl: './m7s/p2/mr-flares.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Away from flare corner',
            imageUrl: './m7s/p2/mr-flares.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Away from flare corner',
            imageUrl: './m7s/p2/mr-flares.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Away from flare corner',
            imageUrl: './m7s/p2/mr-flares.webp',
        },
    },
    'swing2spreads': {
        'description': 'MT D1 H1 D3 edge of arena\nOT D2 H2 D4 middle of arena',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Edge, 1st',
            imageUrl: './m7s/p2/mr-swing2-spreads.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `Middle, 1st`,
            imageUrl: './m7s/p2/mr-swing2-spreads.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Edge, 3rd',
            imageUrl: './m7s/p2/mr-swing2-spreads.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Middle, 3rd',
            imageUrl: './m7s/p2/mr-swing2-spreads.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Edge, 2nd',
            imageUrl: './m7s/p2/mr-swing2-spreads.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Middle, 2nd',
            imageUrl: './m7s/p2/mr-swing2-spreads.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Edge, 4th',
            imageUrl: './m7s/p2/mr-swing2-spreads.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Middle, 4th',
            imageUrl: './m7s/p2/mr-swing2-spreads.webp',
        },
    },
    'strangeseedsbossnorth': {
        'description': 'Alternate seed drops between red and green spots\nFront of boss hitbox is safe',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/mr-seeds-boss-north.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/mr-seeds-boss-north.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Take Middle Wall Tether',
            imageUrl: './m7s/p2/mr-seeds-boss-north.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Take Far Wall Tether',
            imageUrl: './m7s/p2/mr-seeds-boss-north.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/mr-seeds-boss-north.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/mr-seeds-boss-north.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/mr-seeds-boss-north.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/mr-seeds-boss-north.webp',
        },
    },
    'strangeseedsnorthtethers': {
        'description': 'H1 take Middle Wall Tether, H2 take Far Wall Tether',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: '',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: '',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Take Middle Wall Tether',
            imageUrl: '',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Take Far Wall Tether',
            imageUrl: '',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: '',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: '',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: '',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: '',
        },
    },
    'strangeseedsnorthstacks': {
        'description': 'MT D1 Corner\nST D2 Middle near boss\nH2 D4 Middle away from boss\nH1 D3 Corner away from boss',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/mr-seeds-boss-north-stacks.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/mr-seeds-boss-north-stacks.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/mr-seeds-boss-north-stacks.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/mr-seeds-boss-north-stacks.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/mr-seeds-boss-north-stacks.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/mr-seeds-boss-north-stacks.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/mr-seeds-boss-north-stacks.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/mr-seeds-boss-north-stacks.webp',
        },
    },
    'strangeseedsbosssouth': {
        'description': 'Alternate seed drops between 1/3 and 2/4 spots\nSafe spots are in blue',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/mr-seeds-boss-south.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/mr-seeds-boss-south.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Take Middle Wall Tether',
            imageUrl: './m7s/p2/mr-seeds-boss-south.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Take Far Wall Tether',
            imageUrl: './m7s/p2/mr-seeds-boss-south.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/mr-seeds-boss-south.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/mr-seeds-boss-south.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/mr-seeds-boss-south.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/mr-seeds-boss-south.webp',
        },
    },
    'strangeseedssouthtethers': {
        'description': 'H1 take Middle Wall Tether, H2 take Far Wall Tether',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: '',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: '',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Take Middle Wall Tether',
            imageUrl: '',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Take Far Wall Tether',
            imageUrl: '',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: '',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: '',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: '',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: '',
        },
    },
    'strangeseedssouthstacks': {
        'description': 'MT D1 Corner\nST D2 Middle near boss\nH2 D4 Middle away from boss\nH1 D3 Corner away from boss',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/mr-seeds-boss-south-stacks.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: ``,
            imageUrl: './m7s/p2/mr-seeds-boss-south-stacks.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/mr-seeds-boss-south-stacks.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/mr-seeds-boss-south-stacks.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/mr-seeds-boss-south-stacks.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/mr-seeds-boss-south-stacks.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p2/mr-seeds-boss-south-stacks.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p2/mr-seeds-boss-south-stacks.webp',
        },
    },
    'swing3spreads': {
        'description': 'G1 Left, G2 Right facing boss\nTMHR',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Left facing boss, 1st',
            imageUrl: './m7s/p2/mr-swing3.webp',
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: `Right facing boss, 1st`,
            imageUrl: './m7s/p2/mr-swing3.webp',
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Left facing boss, 3rd',
            imageUrl: './m7s/p2/mr-swing3.webp',
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Right facing boss, 3rd',
            imageUrl: './m7s/p2/mr-swing3.webp',
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Left facing boss, 2nd',
            imageUrl: './m7s/p2/mr-swing3.webp',
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Right facing boss, 2nd',
            imageUrl: './m7s/p2/mr-swing3.webp',
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Left facing boss, 4th',
            imageUrl: './m7s/p2/mr-swing3.webp',
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Right facing boss, 4th',
            imageUrl: './m7s/p2/mr-swing3.webp',
        },
    },
}

const hectorP3: Record<string, string | Record<string, string | PlayerMechStrat>> = {
    'stoneringers1': {
        'description': 'G1 Left G2 Right facing boss',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Front, Far left',
            imageUrl: './m7s/p3/hector-stoneringers1-spread.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: 'Front, Far right',
            imageUrl: './m7s/p3/hector-stoneringers1-spread.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Back, Close left',
            imageUrl: './m7s/p3/hector-stoneringers1-spread.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Back, Close right',
            imageUrl: './m7s/p3/hector-stoneringers1-spread.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Front, Close left',
            imageUrl: './m7s/p3/hector-stoneringers1-spread.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Front, Close right',
            imageUrl: './m7s/p3/hector-stoneringers1-spread.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Back, Far left',
            imageUrl: './m7s/p3/hector-stoneringers1-spread.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Back, Far right',
            imageUrl: './m7s/p3/hector-stoneringers1-spread.webp'
        },
    },
    'debris-tethers': {
        'description': 'R1 North, R2 South, H1 West, H2 East',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/hector-debris-tethers.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/hector-debris-tethers.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'West tether',
            imageUrl: './m7s/p3/hector-debris-tethers.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'East tether',
            imageUrl: './m7s/p3/hector-debris-tethers.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/hector-debris-tethers.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/hector-debris-tethers.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'North tether',
            imageUrl: './m7s/p3/hector-debris-tethers.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'South tether',
            imageUrl: './m7s/p3/hector-debris-tethers.webp'
        },
    },
    'debris-stacks': {
        'description': 'R1/MT North, R2/OT South, H1/M1 West, H2/M2 East\nPlace stacks on the wall',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'North',
            imageUrl: './m7s/p3/hector-debris-stacks.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: 'South',
            imageUrl: './m7s/p3/hector-debris-stacks.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'West',
            imageUrl: './m7s/p3/hector-debris-stacks.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'East',
            imageUrl: './m7s/p3/hector-debris-stacks.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'West',
            imageUrl: './m7s/p3/hector-debris-stacks.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'East',
            imageUrl: './m7s/p3/hector-debris-stacks.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'North',
            imageUrl: './m7s/p3/hector-debris-stacks.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'South',
            imageUrl: './m7s/p3/hector-debris-stacks.webp'
        },
    },
    'debris-ranged-puddles': {
        'description': 'Ranged start on left side and bait puddles CCW\nMelees drop seeds on color markers',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/hector-debris-ranged-puddles.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/hector-debris-ranged-puddles.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/hector-debris-ranged-puddles.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/hector-debris-ranged-puddles.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/hector-debris-ranged-puddles.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/hector-debris-ranged-puddles.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/hector-debris-ranged-puddles.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/hector-debris-ranged-puddles.webp'
        },
    },
    'debris-ranged-stack': {
        'description': 'Dodge vines and stack in center',
        'imageUrl': './m7s/p3/hector-debris-ranged-puddles-stack.webp'
    },
    'debris-ranged-proteans': {
        'description': 'True North clock spots',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/hector-debris-ranged-puddles-proteans.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/hector-debris-ranged-puddles-proteans.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/hector-debris-ranged-puddles-proteans.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/hector-debris-ranged-puddles-proteans.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/hector-debris-ranged-puddles-proteans.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/hector-debris-ranged-puddles-proteans.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/hector-debris-ranged-puddles-proteans.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/hector-debris-ranged-puddles-proteans.webp'
        },
    },
    'debris-melee-puddles': {
        'description': 'Melee bait AOEs CW around the boss\nRanged drop seeds on cardinals at the walls',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/hector-debris-melee-puddles.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/hector-debris-melee-puddles.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/hector-debris-melee-puddles.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/hector-debris-melee-puddles.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/hector-debris-melee-puddles.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/hector-debris-melee-puddles.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/hector-debris-melee-puddles.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/hector-debris-melee-puddles.webp'
        },
    },
    'debris-melee-stack': {
        'description': 'Dodge vines and stack Southwest',
        'imageUrl': './m7s/p3/hector-debris-melee-puddles-stack.webp'
    },
    'debris-melee-proteans': {
        'description': 'Boss Relative clock spots',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/hector-debris-melee-puddles-proteans.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/hector-debris-melee-puddles-proteans.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/hector-debris-melee-puddles-proteans.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/hector-debris-melee-puddles-proteans.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/hector-debris-melee-puddles-proteans.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/hector-debris-melee-puddles-proteans.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/hector-debris-melee-puddles-proteans.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/hector-debris-melee-puddles-proteans.webp'
        },
    },
    'stoneringers2': {
        'description': 'Hector Color Markers',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'A (Red) Marker',
            imageUrl: './m7s/p3/hector-stoneringers2-supports.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: 'B (Yellow) Marker',
            imageUrl: './m7s/p3/hector-stoneringers2-supports.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'D (Purple) Marker',
            imageUrl: './m7s/p3/hector-stoneringers2-supports.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'C (Blue) Marker',
            imageUrl: './m7s/p3/hector-stoneringers2-supports.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'D (Purple) Marker',
            imageUrl: './m7s/p3/hector-stoneringers2-dps.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'C (Blue) Marker',
            imageUrl: './m7s/p3/hector-stoneringers2-dps.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'A (Red) Marker',
            imageUrl: './m7s/p3/hector-stoneringers2-dps.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'B (Yellow) Marker',
            imageUrl: './m7s/p3/hector-stoneringers2-dps.webp'
        },
    },
}

const toxicP3: Record<string, string | Record<string, string | PlayerMechStrat>> = {
    'stoneringers1': {
        'description': 'G1 Left G2 Right facing boss',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Front, Far left',
            imageUrl: './m7s/p3/toxic-stoneringers1-spread.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: 'Front, Far right',
            imageUrl: './m7s/p3/toxic-stoneringers1-spread.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Back, Close left',
            imageUrl: './m7s/p3/toxic-stoneringers1-spread.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Back, Close right',
            imageUrl: './m7s/p3/toxic-stoneringers1-spread.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Front, Close left',
            imageUrl: './m7s/p3/toxic-stoneringers1-spread.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Front, Close right',
            imageUrl: './m7s/p3/toxic-stoneringers1-spread.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Back, Far left',
            imageUrl: './m7s/p3/toxic-stoneringers1-spread.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Back, Far right',
            imageUrl: './m7s/p3/toxic-stoneringers1-spread.webp'
        },
    },
    'debris-tethers': {
        'description': 'R1 North, R2 South, H1 West, H2 East',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-tethers.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-tethers.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'West tether',
            imageUrl: './m7s/p3/toxic-debris-tethers.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'East tether',
            imageUrl: './m7s/p3/toxic-debris-tethers.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-tethers.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-tethers.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'North tether',
            imageUrl: './m7s/p3/toxic-debris-tethers.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'South tether',
            imageUrl: './m7s/p3/toxic-debris-tethers.webp'
        },
    },
    'debris-stacks': {
        'description': 'R1/MT North, R2/OT South, H1/M1 West, H2/M2 East\nPlace stacks 1 tile away from the wall',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'North',
            imageUrl: './m7s/p3/toxic-debris-stacks.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: 'South',
            imageUrl: './m7s/p3/toxic-debris-stacks.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'West',
            imageUrl: './m7s/p3/toxic-debris-stacks.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'East',
            imageUrl: './m7s/p3/toxic-debris-stacks.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'West',
            imageUrl: './m7s/p3/toxic-debris-stacks.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'East',
            imageUrl: './m7s/p3/toxic-debris-stacks.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'North',
            imageUrl: './m7s/p3/toxic-debris-stacks.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'South',
            imageUrl: './m7s/p3/toxic-debris-stacks.webp'
        },
    },
    'debris-ranged-puddles': {
        'description': 'Ranged start on left side and bait puddles CCW\nMelees drop seeds on color markers',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-ranged-puddles.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-ranged-puddles.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-ranged-puddles.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-ranged-puddles.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-ranged-puddles.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-ranged-puddles.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-ranged-puddles.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-ranged-puddles.webp'
        },
    },
    'debris-ranged-stack': {
        'description': 'Dodge vines and stack in center',
        'imageUrl': './m7s/p3/toxic-debris-ranged-puddles-stack.webp'
    },
    'debris-ranged-proteans': {
        'description': 'True North clock spots',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-ranged-puddles-proteans.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-ranged-puddles-proteans.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-ranged-puddles-proteans.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-ranged-puddles-proteans.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-ranged-puddles-proteans.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-ranged-puddles-proteans.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-ranged-puddles-proteans.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-ranged-puddles-proteans.webp'
        },
    },
    'debris-melee-puddles': {
        'description': 'Melee bait AOEs CW around the boss\nRanged drop seeds on cardinals at the walls',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-melee-puddles.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-melee-puddles.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-melee-puddles.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-melee-puddles.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-melee-puddles.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-melee-puddles.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-melee-puddles.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-melee-puddles.webp'
        },
    },
    'debris-melee-stack': {
        'description': 'Dodge vines and stack Southwest',
        'imageUrl': './m7s/p3/toxic-debris-melee-puddles-stack.webp'
    },
    'debris-melee-proteans': {
        'description': 'Boss Relative clock spots',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-melee-puddles-proteans.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-melee-puddles-proteans.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-melee-puddles-proteans.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-melee-puddles-proteans.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-melee-puddles-proteans.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-melee-puddles-proteans.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-melee-puddles-proteans.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/toxic-debris-melee-puddles-proteans.webp'
        },
    },
    'stoneringers2': {
        'description': 'Color Markers',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'A (Red) Marker',
            imageUrl: './m7s/p3/toxic-stoneringers2-supports.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: 'C (Blue) Marker',
            imageUrl: './m7s/p3/toxic-stoneringers2-supports.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'D (Purple) Marker',
            imageUrl: './m7s/p3/toxic-stoneringers2-supports.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'B (Yellow) Marker',
            imageUrl: './m7s/p3/toxic-stoneringers2-supports.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'D (Purple) Marker',
            imageUrl: './m7s/p3/toxic-stoneringers2-dps.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'C (Blue) Marker',
            imageUrl: './m7s/p3/toxic-stoneringers2-dps.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'A (Red) Marker',
            imageUrl: './m7s/p3/toxic-stoneringers2-dps.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'B (Yellow) Marker',
            imageUrl: './m7s/p3/toxic-stoneringers2-dps.webp'
        },
    },
}

const game8P3: Record<string, string | Record<string, string | PlayerMechStrat>> = {
    'stoneringers1': {
        'description': 'G1 Left, G2 Right facing boss\nMTHR',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Left facing boss, 2nd',
            imageUrl: './m7s/p3/game8-stoneringers1-spread.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: 'Right facing boss, 2nd',
            imageUrl: './m7s/p3/game8-stoneringers1-spread.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Left facing boss, 3rd',
            imageUrl: './m7s/p3/game8-stoneringers1-spread.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Right facing boss, 3rd',
            imageUrl: './m7s/p3/game8-stoneringers1-spread.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Left facing boss, 1st',
            imageUrl: './m7s/p3/game8-stoneringers1-spread.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Right facing boss, 1st',
            imageUrl: './m7s/p3/game8-stoneringers1-spread.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Left facing boss, 4th',
            imageUrl: './m7s/p3/game8-stoneringers1-spread.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Right facing boss, 4th',
            imageUrl: './m7s/p3/game8-stoneringers1-spread.webp'
        },
    },
    'debris-tethers': {
        'description': 'D3 North, D4 South, H1 West, H2 East',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/game8-debris-tethers.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/game8-debris-tethers.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'West tether',
            imageUrl: './m7s/p3/game8-debris-tethers.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'East tether',
            imageUrl: './m7s/p3/game8-debris-tethers.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/game8-debris-tethers.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/game8-debris-tethers.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'North tether',
            imageUrl: './m7s/p3/game8-debris-tethers.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'South tether',
            imageUrl: './m7s/p3/game8-debris-tethers.webp'
        },
    },
    'debris-stacks': {
        'description': 'MT/D3 North, ST/D4 South, H1/D1 West, H2/D2 East\nPlace stacks on the wall',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'North',
            imageUrl: './m7s/p3/game8-debris-stacks.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: 'South',
            imageUrl: './m7s/p3/game8-debris-stacks.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'West',
            imageUrl: './m7s/p3/game8-debris-stacks.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'East',
            imageUrl: './m7s/p3/game8-debris-stacks.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'West',
            imageUrl: './m7s/p3/game8-debris-stacks.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'East',
            imageUrl: './m7s/p3/game8-debris-stacks.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'North',
            imageUrl: './m7s/p3/game8-debris-stacks.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'South',
            imageUrl: './m7s/p3/game8-debris-stacks.webp'
        },
    },
    'debris-ranged-puddles': {
        'description': 'Ranged start on South/West side and bait puddles towards North/East\nMelees drop seeds on cardinals',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/game8-debris-ranged-puddles.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/game8-debris-ranged-puddles.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/game8-debris-ranged-puddles.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/game8-debris-ranged-puddles.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/game8-debris-ranged-puddles.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/game8-debris-ranged-puddles.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/game8-debris-ranged-puddles.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/game8-debris-ranged-puddles.webp'
        },
    },
    'debris-ranged-stack': {
        'description': 'Dodge vines and stack in center',
        'imageUrl': './m7s/p3/game8-debris-ranged-puddles-stack.webp'
    },
    'debris-ranged-proteans': {
        'description': 'Boss Relative clock spots',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/game8-debris-ranged-puddles-proteans.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/game8-debris-ranged-puddles-proteans.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/game8-debris-ranged-puddles-proteans.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/game8-debris-ranged-puddles-proteans.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/game8-debris-ranged-puddles-proteans.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/game8-debris-ranged-puddles-proteans.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/game8-debris-ranged-puddles-proteans.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/game8-debris-ranged-puddles-proteans.webp'
        },
    },
    'debris-melee-puddles': {
        'description': 'Melees start NW and bait AOEs CW around the boss\nRanged drop seeds on cardinals at the walls',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/game8-debris-melee-puddles.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/game8-debris-melee-puddles.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/game8-debris-melee-puddles.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/game8-debris-melee-puddles.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/game8-debris-melee-puddles.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/game8-debris-melee-puddles.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/game8-debris-melee-puddles.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/game8-debris-melee-puddles.webp'
        },
    },
    'debris-melee-stack': {
        'description': 'Dodge vines and stack Southwest',
        'imageUrl': './m7s/p3/game8-debris-melee-puddles-stack.webp'
    },
    'debris-melee-proteans': {
        'description': 'Boss Relative clock spots',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/game8-debris-melee-puddles-proteans.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/game8-debris-melee-puddles-proteans.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/game8-debris-melee-puddles-proteans.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/game8-debris-melee-puddles-proteans.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/game8-debris-melee-puddles-proteans.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/game8-debris-melee-puddles-proteans.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/game8-debris-melee-puddles-proteans.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/game8-debris-melee-puddles-proteans.webp'
        },
    },
    'stoneringers2': {
        'description': '',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Northwest',
            imageUrl: './m7s/p3/game8-stoneringers2.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: 'Northeast',
            imageUrl: './m7s/p3/game8-stoneringers2.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Southwest',
            imageUrl: './m7s/p3/game8-stoneringers2.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Southeast',
            imageUrl: './m7s/p3/game8-stoneringers2.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Southwest',
            imageUrl: './m7s/p3/game8-stoneringers2.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Southeast',
            imageUrl: './m7s/p3/game8-stoneringers2.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Northwest',
            imageUrl: './m7s/p3/game8-stoneringers2.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Northeast',
            imageUrl: './m7s/p3/game8-stoneringers2.webp'
        },
    },
}

const mrP3: Record<string, string | Record<string, string | PlayerMechStrat>> = {
    'stoneringers1': {
        'description': 'G1 Left G2 Right facing boss',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'Front, Far left',
            imageUrl: './m7s/p3/mr-stoneringers1-spread.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: 'Front, Far right',
            imageUrl: './m7s/p3/mr-stoneringers1-spread.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'Back, Close left',
            imageUrl: './m7s/p3/mr-stoneringers1-spread.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'Back, Close right',
            imageUrl: './m7s/p3/mr-stoneringers1-spread.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'Front, Close left',
            imageUrl: './m7s/p3/mr-stoneringers1-spread.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'Front, Close right',
            imageUrl: './m7s/p3/mr-stoneringers1-spread.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'Back, Far left',
            imageUrl: './m7s/p3/mr-stoneringers1-spread.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'Back, Far right',
            imageUrl: './m7s/p3/mr-stoneringers1-spread.webp'
        },
    },
    'debris-tethers': {
        'description': 'D3 North, D4 South, H1 West, H2 East',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/mr-debris-tethers.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/mr-debris-tethers.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'West tether',
            imageUrl: './m7s/p3/mr-debris-tethers.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'East tether',
            imageUrl: './m7s/p3/mr-debris-tethers.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/mr-debris-tethers.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/mr-debris-tethers.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'North tether',
            imageUrl: './m7s/p3/mr-debris-tethers.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'South tether',
            imageUrl: './m7s/p3/mr-debris-tethers.webp'
        },
    },
    'debris-stacks': {
        'description': 'D3/MT North, D4/OT South, H1/D1 West, H2/D2 East\nPlace stacks 1 tile away from the wall',
        'MT': {
            role: 'Tank',
            party: 1,
            description: 'North',
            imageUrl: './m7s/p3/mr-debris-stacks.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: 'South',
            imageUrl: './m7s/p3/mr-debris-stacks.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: 'West',
            imageUrl: './m7s/p3/mr-debris-stacks.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: 'East',
            imageUrl: './m7s/p3/mr-debris-stacks.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: 'West',
            imageUrl: './m7s/p3/mr-debris-stacks.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: 'East',
            imageUrl: './m7s/p3/mr-debris-stacks.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: 'North',
            imageUrl: './m7s/p3/mr-debris-stacks.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: 'South',
            imageUrl: './m7s/p3/mr-debris-stacks.webp'
        },
    },
    'debris-ranged-puddles': {
        'description': 'Ranged start on left side and bait puddles CCW\nMelees drop seeds on markers',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '1 (Red) Marker',
            imageUrl: './m7s/p3/mr-debris-ranged-puddles.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: '2 (Yellow) Marker',
            imageUrl: './m7s/p3/mr-debris-ranged-puddles.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/mr-debris-ranged-puddles.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/mr-debris-ranged-puddles.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '4 (Purple) Marker',
            imageUrl: './m7s/p3/mr-debris-ranged-puddles.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '3 (Blue) Marker',
            imageUrl: './m7s/p3/mr-debris-ranged-puddles.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/mr-debris-ranged-puddles.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/mr-debris-ranged-puddles.webp'
        },
    },
    'debris-ranged-stack': {
        'description': 'Dodge vines and stack in center',
        'imageUrl': './m7s/p3/mr-debris-ranged-puddles-stack.webp'
    },
    'debris-ranged-proteans': {
        'description': 'True North clock spots',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/mr-debris-ranged-puddles-proteans.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/mr-debris-ranged-puddles-proteans.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/mr-debris-ranged-puddles-proteans.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/mr-debris-ranged-puddles-proteans.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/mr-debris-ranged-puddles-proteans.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/mr-debris-ranged-puddles-proteans.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/mr-debris-ranged-puddles-proteans.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/mr-debris-ranged-puddles-proteans.webp'
        },
    },
    'debris-melee-puddles': {
        'description': 'Melee bait AOEs CW around the boss\nRanged drop seeds on cardinals at the walls',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/mr-debris-melee-puddles.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/mr-debris-melee-puddles.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/mr-debris-melee-puddles.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/mr-debris-melee-puddles.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/mr-debris-melee-puddles.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/mr-debris-melee-puddles.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/mr-debris-melee-puddles.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/mr-debris-melee-puddles.webp'
        },
    },
    'debris-melee-stack': {
        'description': 'Dodge vines and stack Southwest',
        'imageUrl': './m7s/p3/mr-debris-melee-puddles-stack.webp'
    },
    'debris-melee-proteans': {
        'description': 'Corner Relative clock spots',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/mr-debris-melee-puddles-proteans.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/mr-debris-melee-puddles-proteans.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/mr-debris-melee-puddles-proteans.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/mr-debris-melee-puddles-proteans.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/mr-debris-melee-puddles-proteans.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/mr-debris-melee-puddles-proteans.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './m7s/p3/mr-debris-melee-puddles-proteans.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './m7s/p3/mr-debris-melee-puddles-proteans.webp'
        },
    },
    'stoneringers2': {
        'description': 'Color Markers',
        'MT': {
            role: 'Tank',
            party: 1,
            description: '1 (Red) Marker',
            imageUrl: './m7s/p3/mr-stoneringers2-supports.webp'
        },
        'OT': {
            role: 'Tank',
            party: 2,
            description: '2 (Yellow) Marker',
            imageUrl: './m7s/p3/mr-stoneringers2-supports.webp'
        },
        'H1': {
            role: 'Healer',
            party: 1,
            description: '4 (Purple) Marker',
            imageUrl: './m7s/p3/mr-stoneringers2-supports.webp'
        },
        'H2': {
            role: 'Healer',
            party: 2,
            description: '3 (Blue) Marker',
            imageUrl: './m7s/p3/mr-stoneringers2-supports.webp'
        },
        'M1': {
            role: 'Melee',
            party: 1,
            description: '4 (Purple) Marker',
            imageUrl: './m7s/p3/mr-stoneringers2-dps.webp'
        },
        'M2': {
            role: 'Melee',
            party: 2,
            description: '3 (Blue) Marker',
            imageUrl: './m7s/p3/mr-stoneringers2-dps.webp'
        },
        'R1': {
            role: 'Ranged',
            party: 1,
            description: '1 (Red) Marker',
            imageUrl: './m7s/p3/mr-stoneringers2-dps.webp'
        },
        'R2': {
            role: 'Ranged',
            party: 2,
            description: '2 (Yellow) Marker',
            imageUrl: './m7s/p3/mr-stoneringers2-dps.webp'
        },
    },
}



const p2Strats = { toxic: toxicP2, bili: biliP2, alpha: alphaP2, zenith: zenithP2, alpha2: alpha2P2, cute: cuteP2, locked: lockedP2, fixed: fixedP2, game8: game8P2, mr: mrP2 }
const p3Strats = { toxic: toxicP3, hector: hectorP3, game8: game8P3, mr: mrP3 }

const allP2: PhaseStrats[] = [
    {
        phaseName: 'Brutish Swing 1',
        tag: 'p2',
        description: getStringObject(p2Strats, 'swing1spreads', 'description'),
        mechs: [
            {
                mechanic: 'Spreads',
                strats: getStratArray(p2Strats, 'swing1spreads'),
            },
        ]
    },
    {
        phaseName: 'Abominable Blink',
        tag: 'p2',
        description: getStringObject(p2Strats, 'flares', 'description'),
        mechs: [
            {
                mechanic: 'Flare',
                strats: getStratArray(p2Strats, 'flares'),
            },
        ]
    },
    {
        phaseName: 'Brutish Swing 2',
        tag: 'p2',
        description: getStringObject(p2Strats, 'swing2spreads', 'description'),
        mechs: [
            {
                mechanic: 'Spreads',
                strats: getStratArray(p2Strats, 'swing2spreads'),
            },
        ]
    },
    {
        phaseName: 'Strange Seeds (Boss South)',
        tag: 'p2',
        description: getStringObject(p2Strats, 'strangeseedsbosssouth', 'description'),
        mechs: [
            {
                mechanic: 'Seeds + Tethers',
                strats: getStratArray(p2Strats, 'strangeseedsbosssouth'),
            },
            {
                mechanic: 'Stacks',
                strats: getStratArray(p2Strats, 'strangeseedssouthstacks'),
            },
        ]
    },
    {
        phaseName: 'Strange Seeds (Boss North)',
        tag: 'p2',
        description: getStringObject(p2Strats, 'strangeseedsbossnorth', 'description'),
        mechs: [
            {
                mechanic: 'Seeds + Tethers',
                strats: getStratArray(p2Strats, 'strangeseedsbossnorth'),
            },
            {
                mechanic: 'Stacks',
                strats: getStratArray(p2Strats, 'strangeseedsnorthstacks'),
            },
        ]
    },
    {
        phaseName: 'Brutish Swing 3',
        tag: 'p2',
        description: getStringObject(p2Strats, 'swing3spreads', 'description'),
        mechs: [
            {
                mechanic: 'Spreads',
                strats: getStratArray(p2Strats, 'swing3spreads'),
            },
        ]
    },
]

const allP3: PhaseStrats[] = [
    {
        phaseName: 'Stoneringers 1',
        tag: 'p3',
        mechs: [
            {
                mechanic: 'Glower Spreads',
                description: getStringObject(p3Strats, 'stoneringers1', 'description'),
                strats: getStratArray(p3Strats, 'stoneringers1'),
            },
        ]
    },
    {
        phaseName: 'Debris Deathmatch',
        tag: 'p3',
        mechs: [
            {
                mechanic: 'Tethers',
                description: getStringObject(p3Strats, 'debris-tethers', 'description'),
                strats: getStratArray(p3Strats, 'debris-tethers'),
            },
            {
                mechanic: 'Stacks',
                description: getStringObject(p3Strats, 'debris-stacks', 'description'),
                strats: getStratArray(p3Strats, 'debris-stacks'),
            },
        ]
    },
    {
        phaseName: 'Debris Deathmatch (Ranged Puddles)',
        tag: 'p3',
        mechs: [
            {
                mechanic: 'Puddles and Seeds',
                description: getStringObject(p3Strats, 'debris-ranged-puddles', 'description'),
                strats: getStratArray(p3Strats, 'debris-ranged-puddles'),
            },
            {
                mechanic: 'Stack',
                description: getStringObject(p3Strats, 'debris-ranged-stack', 'description'),
                imageUrl: getStringObject(p3Strats, 'debris-ranged-stack', 'imageUrl'),
            },
            {
                mechanic: 'Proteans',
                description: getStringObject(p3Strats, 'debris-ranged-proteans', 'description'),
                strats: getStratArray(p3Strats, 'debris-ranged-proteans'),
            },
        ]
    },
    {
        phaseName: 'Debris Deathmatch (Melee Puddles)',
        tag: 'p3',
        mechs: [
            {
                mechanic: 'Puddles and Seeds',
                description: getStringObject(p3Strats, 'debris-melee-puddles', 'description'),
                strats: getStratArray(p3Strats, 'debris-melee-puddles'),
            },
            {
                mechanic: 'Stack',
                description: getStringObject(p3Strats, 'debris-melee-stack', 'description'),
                imageUrl: getStringObject(p3Strats, 'debris-melee-stack', 'imageUrl'),
            },
            {
                mechanic: 'Proteans',
                description: getStringObject(p3Strats, 'debris-melee-proteans', 'description'),
                strats: getStratArray(p3Strats, 'debris-melee-proteans'),
            },
        ]
    },
    {
        phaseName: 'Stoneringers 2',
        tag: 'p3',
        mechs: [
            {
                mechanic: 'Seeds',
                description: getStringObject(p3Strats, 'stoneringers2', 'description'),
                strats: getStratArray(p3Strats, 'stoneringers2'),
            },
        ]
    },
]

const toxicStrat: Strat = {
    stratName: 'toxic',
    description: 'Source: Raidplan by Cute Animal @ Omega and Toxic Friends',
    notes: '',
    stratUrl: 'https://raidplan.io/plan/PWFgPfz0vL7runO2',
    strats: [
        {
            phaseName: 'Sinister Seeds',
            tag: 'p1',
            mechs: [
                {
                    mechanic: 'Safespots',
                    description: 'Southwest or Southeast close\nMelees close, Ranged far',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Close',
                            imageUrl: './m7s/p1/toxic-sinister.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Close',
                            imageUrl: './m7s/p1/toxic-sinister.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Far',
                            imageUrl: './m7s/p1/toxic-sinister.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Far',
                            imageUrl: './m7s/p1/toxic-sinister.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Close',
                            imageUrl: './m7s/p1/toxic-sinister.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Close',
                            imageUrl: './m7s/p1/toxic-sinister.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Far',
                            imageUrl: './m7s/p1/toxic-sinister.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Far',
                            imageUrl: './m7s/p1/toxic-sinister.webp'
                        },
                    ]
                },
                {
                    mechanic: 'Puddles',
                    description: 'Bait one puddle towards corner\nThen G1 CW G2 CCW',
                    imageUrl: './m7s/p1/toxic-sinister-puddles.webp'
                },
                {
                    mechanic: 'Seeds',
                    description: 'Dodge puddles, then stand on marker or rivet',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Northwest\n1 Marker',
                            imageUrl: './m7s/p1/toxic-sinister-seeds.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Northeast\n2 Marker',
                            imageUrl: './m7s/p1/toxic-sinister-seeds.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Northwest\n1 Marker',
                            imageUrl: './m7s/p1/toxic-sinister-seeds.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Northeast\n2 Marker',
                            imageUrl: './m7s/p1/toxic-sinister-seeds.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Southwest\n4 marker',
                            imageUrl: './m7s/p1/toxic-sinister-seeds.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Southeast\n3 marker',
                            imageUrl: './m7s/p1/toxic-sinister-seeds.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Southwest\n4 marker',
                            imageUrl: './m7s/p1/toxic-sinister-seeds.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Southeast\n3 marker',
                            imageUrl: './m7s/p1/toxic-sinister-seeds.webp'
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Adds',
            tag: 'p1',
            description: 'Take adds north\nInterrupt priority on Winding Wildwinds',
            imageUrl: './m7s/p1/toxic-adds.webp'
        },
        {
            phaseName: 'Pulp Smash',
            tag: 'p1',
            description: 'True North clock spots',
            imageUrl: './m7s/p1/toxic-pulp.webp'
        },
        ...allP2,
        ...allP3
    ]
}

const kindredStrat: Strat = {
    stratName: 'kindred',
    description: 'Source: UPTIME SEEDING Raidplan and Kindred VODs',
    notes: '',
    stratUrl: 'https://raidplan.io/plan/-OMZSfpCVSPeJdIu',
    strats: [
        {
            phaseName: 'Sinister Seeds (Melee Seeds, Ranged Puddles)',
            tag: 'p1',
            mechs: [
                {
                    mechanic: 'Start',
                    description: 'G1 West G2 East\nRanged Out Melee In',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-start.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-start.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-start.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-start.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-start.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-start.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-start.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-start.webp'
                        },
                    ]
                },
                {
                    mechanic: 'Seed and Puddle Drops',
                    description: 'Ranged drop puddles CW\nMelee end on Intercards\nRanged end East/West',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-drop.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-drop.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-drop.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-drop.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-drop.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-drop.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-drop.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-drop.webp'
                        },
                    ]
                },
                {
                    mechanic: 'Stacks',
                    description: 'Ranged ends up opposite where they started\nMelee collapse E/W',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-stacks.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-stacks.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-stacks.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-stacks.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-stacks.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-stacks.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-stacks.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-stacks.webp'
                        },
                    ]
                },
                {
                    mechanic: 'Adds',
                    description: 'Middle of arena is safe\nnInterrupt priority on Winding Wildwinds\nTanks first, ranged last',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-adds.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-adds.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-adds.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-adds.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-adds.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-adds.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-adds.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-melee-seeds-adds.webp'
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Sinister Seeds (Ranged Seeds, Melee Puddles)',
            tag: 'p1',
            mechs: [
                {
                    mechanic: 'Start',
                    description: 'G1 West G2 East\nRanged Out Melee In',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-start.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-start.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-start.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-start.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-start.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-start.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-start.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-start.webp'
                        },
                    ]
                },
                {
                    mechanic: 'Seed and Puddle Drops',
                    description: 'Ranged drop seeds on Cardinals\nHealers CW, Ranged CCW\nMelee drop puddles CW, end 1 spot CCW from start',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-drop.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-drop.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-drop.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-drop.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-drop.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Close',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-drop.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-drop.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Far',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-drop.webp'
                        },
                    ]
                },
                {
                    mechanic: 'Stacks',
                    description: 'Stack on 1/3 or 2/4 intercards',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-stacks.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-stacks.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-stacks.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-stacks.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-stacks.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-stacks.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-stacks.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-stacks.webp'
                        },
                    ]
                },
                {
                    mechanic: 'Adds',
                    description: 'Only corners are safe\nInterrupt priority on Winding Wildwinds\nTanks first, ranged last',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-adds.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-adds.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-adds.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-adds.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-adds.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-adds.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-adds.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/uptime-sinister-ranged-seeds-adds.webp'
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Pulp Smash',
            tag: 'p1',
            description: 'True North clock spots',
            imageUrl: './m7s/p1/uptime-pulp.webp'
        },
        ...allP2,
        ...allP3,
    ]
}

const game8Strat: Strat = {
    stratName: 'game8',
    description: 'Source: Game8',
    notes: '',
    stratUrl: 'https://game8.jp/ff14/681274',
    strats: [
        {
            phaseName: 'Sinister Seeds (Melee Seeds, Ranged Puddles)',
            tag: 'p1',
            mechs: [
                {
                    mechanic: 'Start',
                    description: 'Melee South + Close\nH1H2 South + Far\nD3D4 North + Far',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'South + Close',
                            imageUrl: './m7s/p1/game8-sinister-melee-seeds-start.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'South + Close',
                            imageUrl: './m7s/p1/game8-sinister-melee-seeds-start.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'South + Far',
                            imageUrl: './m7s/p1/game8-sinister-melee-seeds-start.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South + Far',
                            imageUrl: './m7s/p1/game8-sinister-melee-seeds-start.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'South + Close',
                            imageUrl: './m7s/p1/game8-sinister-melee-seeds-start.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South + Close',
                            imageUrl: './m7s/p1/game8-sinister-melee-seeds-start.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'North + Far',
                            imageUrl: './m7s/p1/game8-sinister-melee-seeds-start.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'North + Far',
                            imageUrl: './m7s/p1/game8-sinister-melee-seeds-start.webp'
                        },
                    ]
                },
                {
                    mechanic: 'Seed and Puddle Drops',
                    description: 'Ranged drop puddles towards N/S then in\nMelee place seeds on intercard rivets',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Northwest',
                            imageUrl: './m7s/p1/game8-sinister-melee-seeds-drop.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Northeast',
                            imageUrl: './m7s/p1/game8-sinister-melee-seeds-drop.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Drop puddles towards South',
                            imageUrl: './m7s/p1/game8-sinister-melee-seeds-drop.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Drop puddles towards South',
                            imageUrl: './m7s/p1/game8-sinister-melee-seeds-drop.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Southwest',
                            imageUrl: './m7s/p1/game8-sinister-melee-seeds-drop.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Southeast',
                            imageUrl: './m7s/p1/game8-sinister-melee-seeds-drop.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Drop puddles towards North',
                            imageUrl: './m7s/p1/game8-sinister-melee-seeds-drop.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Drop puddles towards North',
                            imageUrl: './m7s/p1/game8-sinister-melee-seeds-drop.webp'
                        },
                    ]
                },
                {
                    mechanic: 'Stacks',
                    description: 'G1 West/G2 East',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'West',
                            imageUrl: './m7s/p1/game8-sinister-stacks.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'East',
                            imageUrl: './m7s/p1/game8-sinister-stacks.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West',
                            imageUrl: './m7s/p1/game8-sinister-stacks.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East',
                            imageUrl: './m7s/p1/game8-sinister-stacks.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'West',
                            imageUrl: './m7s/p1/game8-sinister-stacks.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'East',
                            imageUrl: './m7s/p1/game8-sinister-stacks.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West',
                            imageUrl: './m7s/p1/game8-sinister-stacks.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East',
                            imageUrl: './m7s/p1/game8-sinister-stacks.webp'
                        },
                    ]
                },
                {
                    mechanic: 'Adds',
                    description: 'Pull adds far West\nInterrupt priority on Winding Wildwinds\nTanks first, Ranged last',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/game8-sinister-melee-seeds-adds.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/game8-sinister-melee-seeds-adds.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/game8-sinister-melee-seeds-adds.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/game8-sinister-melee-seeds-adds.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/game8-sinister-melee-seeds-adds.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/game8-sinister-melee-seeds-adds.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/game8-sinister-melee-seeds-adds.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/game8-sinister-melee-seeds-adds.webp'
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Sinister Seeds (Ranged Seeds, Melee Puddles)',
            tag: 'p1',
            mechs: [
                {
                    mechanic: 'Start',
                    description: 'Melee South + Close\nH1H2 South + Far\nD3D4 North + Far',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'South + Close',
                            imageUrl: './m7s/p1/game8-sinister-ranged-seeds-start.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'South + Close',
                            imageUrl: './m7s/p1/game8-sinister-ranged-seeds-start.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'South + Far',
                            imageUrl: './m7s/p1/game8-sinister-ranged-seeds-start.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South + Far',
                            imageUrl: './m7s/p1/game8-sinister-ranged-seeds-start.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'South + Close',
                            imageUrl: './m7s/p1/game8-sinister-ranged-seeds-start.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South + Close',
                            imageUrl: './m7s/p1/game8-sinister-ranged-seeds-start.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'North + Far',
                            imageUrl: './m7s/p1/game8-sinister-ranged-seeds-start.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'North + Far',
                            imageUrl: './m7s/p1/game8-sinister-ranged-seeds-start.webp'
                        },
                    ]
                },
                {
                    mechanic: 'Seed and Puddle Drops',
                    description: 'Ranged place seeds on intercard rivets\nMelee drop puddles Clockwise tight in the center',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Drop puddles Clockwise tight in the center',
                            imageUrl: './m7s/p1/game8-sinister-ranged-seeds-drop.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Drop puddles Clockwise tight in the center',
                            imageUrl: './m7s/p1/game8-sinister-ranged-seeds-drop.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Southwest',
                            imageUrl: './m7s/p1/game8-sinister-ranged-seeds-drop.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Southeast',
                            imageUrl: './m7s/p1/game8-sinister-ranged-seeds-drop.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Drop puddles Clockwise tight in the center',
                            imageUrl: './m7s/p1/game8-sinister-ranged-seeds-drop.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Drop puddles Clockwise tight in the center',
                            imageUrl: './m7s/p1/game8-sinister-ranged-seeds-drop.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Northwest',
                            imageUrl: './m7s/p1/game8-sinister-ranged-seeds-drop.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Northeast',
                            imageUrl: './m7s/p1/game8-sinister-ranged-seeds-drop.webp'
                        },
                    ]
                },
                {
                    mechanic: 'Stacks',
                    description: 'G1 West/G2 East',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'West',
                            imageUrl: './m7s/p1/game8-sinister-stacks.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'East',
                            imageUrl: './m7s/p1/game8-sinister-stacks.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West',
                            imageUrl: './m7s/p1/game8-sinister-stacks.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East',
                            imageUrl: './m7s/p1/game8-sinister-stacks.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'West',
                            imageUrl: './m7s/p1/game8-sinister-stacks.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'East',
                            imageUrl: './m7s/p1/game8-sinister-stacks.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West',
                            imageUrl: './m7s/p1/game8-sinister-stacks.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East',
                            imageUrl: './m7s/p1/game8-sinister-stacks.webp'
                        },
                    ]
                },
                {
                    mechanic: 'Adds',
                    description: 'Pull adds far Northwest\nInterrupt priority on Winding Wildwinds\nTanks first, Ranged last',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/game8-sinister-ranged-seeds-adds.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/game8-sinister-ranged-seeds-adds.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/game8-sinister-ranged-seeds-adds.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/game8-sinister-ranged-seeds-adds.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/game8-sinister-ranged-seeds-adds.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/game8-sinister-ranged-seeds-adds.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/game8-sinister-ranged-seeds-adds.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/game8-sinister-ranged-seeds-adds.webp'
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Pulp Smash',
            tag: 'p1',
            description: 'Boss Relative clock spots',
            imageUrl: './m7s/p1/game8-pulp.webp'
        },
        ...allP2,
        ...allP3,
    ]
}

const mrStrat: Strat = {
    stratName: 'mr',
    description: 'Source: Materia Raiding/Raidplan by Valyntine Arkani',
    notes: '',
    stratUrl: {
        'Materia Raiding': 'https://materiaraiding.com/savage/m7s',
        'P1': 'https://raidplan.io/plan/a0GWxSrH01rbXxmS',
        'P2': 'https://raidplan.io/plan/QeESzBHNANmJAkDv',
        'P3': 'https://raidplan.io/plan/XJ7zmjNpEWKtuqdJ',
    },
    strats: [
        {
            phaseName: 'Sinister Seeds (Melee Seeds, Ranged Puddles)',
            tag: 'p1',
            mechs: [
                {
                    mechanic: 'Start',
                    description: 'Melee South + Close\nH1H2 South + Far\nD3D4 North + Far',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'South + Close',
                            imageUrl: './m7s/p1/mr-sinister-start.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'South + Close',
                            imageUrl: './m7s/p1/mr-sinister-start.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'South + Far',
                            imageUrl: './m7s/p1/mr-sinister-start.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South + Far',
                            imageUrl: './m7s/p1/mr-sinister-start.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'South + Close',
                            imageUrl: './m7s/p1/mr-sinister-start.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South + Close',
                            imageUrl: './m7s/p1/mr-sinister-start.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'North + Far',
                            imageUrl: './m7s/p1/mr-sinister-start.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'North + Far',
                            imageUrl: './m7s/p1/mr-sinister-start.webp'
                        },
                    ]
                },
                {
                    mechanic: 'Seed and Puddle Drops',
                    description: 'Ranged drop puddles towards N/S then in\nMelee place seeds on intercard rivets',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Northwest',
                            imageUrl: './m7s/p1/mr-sinister-melee-seeds-drop.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Northeast',
                            imageUrl: './m7s/p1/mr-sinister-melee-seeds-drop.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Drop puddles towards South',
                            imageUrl: './m7s/p1/mr-sinister-melee-seeds-drop.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Drop puddles towards South',
                            imageUrl: './m7s/p1/mr-sinister-melee-seeds-drop.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Southwest',
                            imageUrl: './m7s/p1/mr-sinister-melee-seeds-drop.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Southeast',
                            imageUrl: './m7s/p1/mr-sinister-melee-seeds-drop.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Drop puddles towards North',
                            imageUrl: './m7s/p1/mr-sinister-melee-seeds-drop.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Drop puddles towards North',
                            imageUrl: './m7s/p1/mr-sinister-melee-seeds-drop.webp'
                        },
                    ]
                },
                {
                    mechanic: 'Stacks',
                    description: 'G1 West/G2 East',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'West',
                            imageUrl: './m7s/p1/mr-sinister-stacks.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'East',
                            imageUrl: './m7s/p1/mr-sinister-stacks.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West',
                            imageUrl: './m7s/p1/mr-sinister-stacks.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East',
                            imageUrl: './m7s/p1/mr-sinister-stacks.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'West',
                            imageUrl: './m7s/p1/mr-sinister-stacks.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'East',
                            imageUrl: './m7s/p1/mr-sinister-stacks.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West',
                            imageUrl: './m7s/p1/mr-sinister-stacks.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East',
                            imageUrl: './m7s/p1/mr-sinister-stacks.webp'
                        },
                    ]
                },
                {
                    mechanic: 'Adds',
                    description: 'Pull adds far East\nInterrupt priority MT ST D3',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/mr-sinister-melee-seeds-adds.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/mr-sinister-melee-seeds-adds.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/mr-sinister-melee-seeds-adds.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/mr-sinister-melee-seeds-adds.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/mr-sinister-melee-seeds-adds.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/mr-sinister-melee-seeds-adds.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/mr-sinister-melee-seeds-adds.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/mr-sinister-melee-seeds-adds.webp'
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Sinister Seeds (Ranged Seeds, Melee Puddles)',
            tag: 'p1',
            mechs: [
                {
                    mechanic: 'Start',
                    description: 'Melee South + Close\nH1H2 South + Far\nD3D4 North + Far',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'South + Close',
                            imageUrl: './m7s/p1/mr-sinister-start.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'South + Close',
                            imageUrl: './m7s/p1/mr-sinister-start.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'South + Far',
                            imageUrl: './m7s/p1/mr-sinister-start.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'South + Far',
                            imageUrl: './m7s/p1/mr-sinister-start.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'South + Close',
                            imageUrl: './m7s/p1/mr-sinister-start.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'South + Close',
                            imageUrl: './m7s/p1/mr-sinister-start.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'North + Far',
                            imageUrl: './m7s/p1/mr-sinister-start.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'North + Far',
                            imageUrl: './m7s/p1/mr-sinister-start.webp'
                        },
                    ]
                },
                {
                    mechanic: 'Seed and Puddle Drops',
                    description: 'Ranged place seeds on intercard rivets\nMelee drop puddles up, then middle, then south',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'Drop puddles Clockwise tight in the center',
                            imageUrl: './m7s/p1/mr-sinister-ranged-seeds-drop.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'Drop puddles Clockwise tight in the center',
                            imageUrl: './m7s/p1/mr-sinister-ranged-seeds-drop.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'Southwest',
                            imageUrl: './m7s/p1/mr-sinister-ranged-seeds-drop.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'Southeast',
                            imageUrl: './m7s/p1/mr-sinister-ranged-seeds-drop.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'Drop puddles Clockwise tight in the center',
                            imageUrl: './m7s/p1/mr-sinister-ranged-seeds-drop.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'Drop puddles Clockwise tight in the center',
                            imageUrl: './m7s/p1/mr-sinister-ranged-seeds-drop.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'Northwest',
                            imageUrl: './m7s/p1/mr-sinister-ranged-seeds-drop.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'Northeast',
                            imageUrl: './m7s/p1/mr-sinister-ranged-seeds-drop.webp'
                        },
                    ]
                },
                {
                    mechanic: 'Stacks',
                    description: 'G1 West/G2 East',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: 'West',
                            imageUrl: './m7s/p1/mr-sinister-stacks.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: 'East',
                            imageUrl: './m7s/p1/mr-sinister-stacks.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: 'West',
                            imageUrl: './m7s/p1/mr-sinister-stacks.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: 'East',
                            imageUrl: './m7s/p1/mr-sinister-stacks.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: 'West',
                            imageUrl: './m7s/p1/mr-sinister-stacks.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: 'East',
                            imageUrl: './m7s/p1/mr-sinister-stacks.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: 'West',
                            imageUrl: './m7s/p1/mr-sinister-stacks.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: 'East',
                            imageUrl: './m7s/p1/mr-sinister-stacks.webp'
                        },
                    ]
                },
                {
                    mechanic: 'Adds',
                    description: 'Pull adds far East\nInterrupt priority MT ST D3',
                    strats: [
                        {
                            role: 'Tank',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/mr-sinister-ranged-seeds-adds.webp'
                        },
                        {
                            role: 'Tank',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/mr-sinister-ranged-seeds-adds.webp'
                        },
                        {
                            role: 'Healer',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/mr-sinister-ranged-seeds-adds.webp'
                        },
                        {
                            role: 'Healer',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/mr-sinister-ranged-seeds-adds.webp'
                        },
                        {
                            role: 'Melee',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/mr-sinister-ranged-seeds-adds.webp'
                        },
                        {
                            role: 'Melee',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/mr-sinister-ranged-seeds-adds.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 1,
                            description: '',
                            imageUrl: './m7s/p1/mr-sinister-ranged-seeds-adds.webp'
                        },
                        {
                            role: 'Ranged',
                            party: 2,
                            description: '',
                            imageUrl: './m7s/p1/mr-sinister-ranged-seeds-adds.webp'
                        },
                    ]
                },
            ]
        },
        {
            phaseName: 'Pulp Smash',
            tag: 'p1',
            description: 'True North clock spots',
            imageUrl: './m7s/p1/mr-pulp.webp'
        },
        ...allP2,
        ...allP3,
    ]
}


export const m7sStrats = [toxicStrat, game8Strat, mrStrat, kindredStrat];

export const m7sFightConfig: FightConfig = {
    fightKey: 'm7s',
    title: 'AAC Cruiserweight M3 (Savage)',
    abbreviatedTitle: 'M7S',
    subtitle: 'M7S Patch 7.2',
    cheatsheetTitle: 'M7S Cheatsheet',
    cheatsheetLayout: { rows: 3, columns: 5 },
    strats: {
        toxic: {
            label: 'Toxic',
            badges: [{ text: 'NA', class: 'na-badge' }, { text: 'EU', class: 'eu-badge' }],
            defaults: {
                p2: 'locked',
                p3: 'toxic'
            }
        },
        kindred: {
            label: 'Kindred',
            defaults: {
                p2: 'locked',
                p3: 'toxic'
            }
        },
        game8: {
            label: 'Game8',
            badges: [{ text: 'JP', class: 'jp-badge' }],
            jpRoles: true,
            defaults: {
                p2: 'game8',
                p3: 'game8'
            }
        },
        mr: {
            label: 'MR',
            badges: [{ text: 'OCE', class: 'oce-badge' }],
            jpRoles: true,
            defaults: {
                p2: 'mr',
                p3: 'mr'
            }
        }
    },
    toggles: [
        {
            key: 'p2',
            label: 'P2/Seeds',
            defaultValue: null,
            options: [
                {
                    value: 'locked',
                    label: 'Locked',
                    badges: [{ text: 'NA', class: 'na-badge' }],
                    url: { name: 'Locked P2', url: 'https://raidplan.io/plan/FGvPnlaAe1fwlsIB' }
                },
                {
                    value: 'fixed',
                    label: 'Fixed',
                    badges: [{ text: 'EU', class: 'eu-badge' }],
                    url: { name: 'Fixed P2', url: 'https://raidplan.io/plan/-lZai2v34Y8bC15S' }
                },
                {
                    value: 'game8',
                    label: 'Game8/さり式',
                    badges: [{ text: 'JP', class: 'jp-badge' }]
                },
                {
                    value: 'mr',
                    label: 'MR',
                    badges: [{ text: 'OCE', class: 'oce-badge' }],
                    url: { name: 'MR P2', url: 'https://raidplan.io/plan/QeESzBHNANmJAkDv' }
                },
                {
                    value: 'bili',
                    label: 'Bilibili',
                    url: { name: 'Bilibili P2', url: 'https://raidplan.io/plan/s_q_kuYAhHcOLcxb' }
                },
                {
                    value: 'cute',
                    label: 'Cute',
                    url: { name: 'Cute P2', url: 'https://raidplan.io/plan/q_qH0crFmPZqrY4L' }
                },
            ]
        },
        {
            key: 'p3',
            label: 'P3',
            defaultValue: null,
            options: [
                {
                    value: 'toxic',
                    label: 'Toxic',
                    badges: [
                        { text: 'NA', class: 'na-badge' },
                        { text: 'EU', class: 'eu-badge' }
                    ],
                    url: { name: 'Toxic P3', url: 'https://raidplan.io/plan/DEijc3hhq_CNGaRg' }
                },
                {
                    value: 'game8',
                    label: 'Game8',
                    badges: [{ text: 'JP', class: 'jp-badge' }]
                },
                {
                    value: 'mr',
                    label: 'MR',
                    badges: [{ text: 'OCE', class: 'oce-badge' }],
                    url: { name: 'MR P3', url: 'https://raidplan.io/plan/XJ7zmjNpEWKtuqdJ' }
                },
                {
                    value: 'hector',
                    label: 'Hector',
                    url: {
                        name: 'Hector P3',
                        url: 'https://www.youtube.com/watch?v=fIYMPk54cJc&t=994s'
                    }
                }
            ]
        }
    ],
    tabTags: {
        P1: ['p1'],
        P2: ['p2'],
        P3: ['p3']
    },
    useMainPageTabs: false,
    additionalResources: {
        title: 'Additional or Outdated Strats',
        description:
            "These strats are relatively unused in PF, either because they're new or outdated. If you see a strat here that's picking up steam in PF, please let me know!",
        links: [
            { text: 'LA Uptime P1', url: 'https://raidplan.io/plan/9q3NYbwkt64Wswif' },
            { text: 'Shenpai P1', url: 'https://raidplan.io/plan/fU48afCXIw8Sbb30' },
            { text: 'QR Seeds', url: 'https://raidplan.io/plan/xqt73wqsyzeykudf' },
            { text: 'Cute Debris Deathmatch', url: 'https://raidplan.io/plan/tFbTaL_Noj4ePdly' }
        ]
    },
    timeline: timeline
};
