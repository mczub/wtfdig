import type { Strat, FightConfig, StratRecord, PlayerMechStrat, MechanicStrat } from '$lib/types';
import {
  getStringObject,
  getStratArray,
  getCircleMaskUrl,
  getMultiCircleMaskUrl,
  getRectMaskUrl
} from '$lib/utils';

export const m9sFightConfig: FightConfig = {
  fightKey: 'm9s',
  title: 'AAC Heavyweight M1 (Savage)',
  abbreviatedTitle: 'M9S',
  subtitle: 'M9S Patch 7.4',
  cheatsheetTitle: 'M9S Cheatsheet',
  useModernCheatsheet: true,
  strats: {
    toxic: {
      label: 'Toxic/Hector',
      badges: [
        { text: 'NA', class: 'na-badge' },
        { text: 'EU', class: 'eu-badge' },
        { text: 'OCE', class: 'oce-badge' }
      ]
    },
    game8: {
      label: 'Game8/ぬけまる (English)',
      jpRoles: true,
      badges: [
        { text: 'JP', class: 'jp-badge' }
      ]
    },
    game8jp: {
      label: 'Game8/ぬけまる (日本語)',
      jpRoles: true,
      badges: [
        { text: 'JP', class: 'jp-badge' }
      ]
    }
  },
  defaultStratName: 'toxic',
  timeline: [
    {
      mechName: 'Start',
      mechType: 'Start',
      startTimeMs: 0
    },
    {
      mechName: 'Killer Voice',
      mechType: 'Raidwide',
      startTimeMs: 10000
    },
    {
      mechName: 'Hardcore',
      mechType: 'Tankbuster',
      startTimeMs: 20000
    },
    {
      mechName: 'Vamp Stomp',
      mechType: 'Mechanic',
      startTimeMs: 30000
    },
    {
      mechName: 'Brutal Rain',
      mechType: 'Raidwide',
      startTimeMs: 46000
    },
    {
      mechName: 'Sadistic Screech',
      mechType: 'Raidwide',
      startTimeMs: 61000
    },
    {
      mechName: '1st Cleaves',
      mechType: 'Mechanic',
      startTimeMs: 68000
    },
    {
      mechName: '2nd Cleaves',
      mechType: 'Mechanic',
      startTimeMs: 86000
    },
    {
      mechName: '3rd Cleaves',
      mechType: 'Mechanic',
      startTimeMs: 103000
    },
    {
      mechName: 'Sadistic Screech',
      mechType: 'Raidwide',
      startTimeMs: 138000
    },
    {
      mechName: 'Crowd Kill',
      mechType: 'Raidwide',
      startTimeMs: 153000
    },
    {
      mechName: 'Finale Fatale',
      mechType: 'Raidwide',
      startTimeMs: 171000
    },
    {
      mechName: 'Pulping Pulse',
      mechType: 'Mechanic',
      startTimeMs: 177000
    },
    {
      mechName: 'Aetherletting',
      mechType: 'Mechanic',
      startTimeMs: 178000
    },
    {
      mechName: '1st Spreads',
      mechType: 'Mechanic',
      startTimeMs: 193000
    },
    {
      mechName: '2nd Spreads',
      mechType: 'Mechanic',
      startTimeMs: 195000
    },
    {
      mechName: '3rd Spreads',
      mechType: 'Mechanic',
      startTimeMs: 197000
    },
    {
      mechName: '4th Spreads',
      mechType: 'Mechanic',
      startTimeMs: 199000
    },
    {
      mechName: 'Plus/Cross',
      mechType: 'Mechanic',
      startTimeMs: 207000
    },
    {
      mechName: 'Hardcore',
      mechType: 'Tankbuster',
      startTimeMs: 220000
    },
    {
      mechName: 'Pulping Pulse',
      mechType: 'Mechanic',
      startTimeMs: 225000
    },
    {
      mechName: 'Vamp Stomp',
      mechType: 'Mechanic',
      startTimeMs: 231000
    },
    {
      mechName: 'Half Moon',
      mechType: 'Mechanic',
      startTimeMs: 247000
    },
    {
      mechName: 'Brutal Rain',
      mechType: 'Raidwide',
      startTimeMs: 257000
    },
    {
      mechName: 'Insatiable Thirst',
      mechType: 'Raidwide',
      startTimeMs: 271000
    },
    {
      mechName: 'Sadistic Screech 2',
      mechType: 'Raidwide',
      startTimeMs: 284000
    },
    {
      mechName: '1st Towers',
      mechType: 'Mechanic',
      startTimeMs: 296000
    },
    {
      mechName: 'Killer Voice',
      mechType: 'Raidwide',
      startTimeMs: 305000
    },
    {
      mechName: '2nd Towers',
      mechType: 'Mechanic',
      startTimeMs: 315000
    },
    {
      mechName: 'Killer Voice',
      mechType: 'Raidwide',
      startTimeMs: 324000
    },
    {
      mechName: '3rd Towers',
      mechType: 'Mechanic',
      startTimeMs: 333000
    },
    {
      mechName: 'Sadistic Screech',
      mechType: 'Raidwide',
      startTimeMs: 357000
    },
    {
      mechName: 'Crowd Kill',
      mechType: 'Raidwide',
      startTimeMs: 371000
    },
    {
      mechName: 'Finale Fatale',
      mechType: 'Raidwide',
      startTimeMs: 389000
    },
    {
      mechName: 'Pulping Pulse',
      mechType: 'Mechanic',
      startTimeMs: 395000
    },
    {
      mechName: 'Hell in a Cell 1',
      mechType: 'Mechanic',
      startTimeMs: 401000
    },
    {
      mechName: 'Ultrasonic Spread/Amp',
      mechType: 'Mechanic',
      startTimeMs: 409000
    },
    {
      mechName: 'Ultrasonic Spread/Amp',
      mechType: 'Mechanic',
      startTimeMs: 416000
    },
    {
      mechName: 'Hell in a Cell 2',
      mechType: 'Mechanic',
      startTimeMs: 423000
    },
    {
      mechName: 'Ultrasonic Spread/Amp',
      mechType: 'Mechanic',
      startTimeMs: 431000
    },
    {
      mechName: 'Ultrasonic Spread/Amp',
      mechType: 'Mechanic',
      startTimeMs: 438000
    },
    {
      mechName: 'Pulping Pulse',
      mechType: 'Mechanic',
      startTimeMs: 444000
    },
    {
      mechName: 'Pulping Pulse',
      mechType: 'Mechanic',
      startTimeMs: 448000
    },
    {
      mechName: 'Undead Deathmatch',
      mechType: 'Mechanic',
      startTimeMs: 454000
    },
    {
      mechName: 'Sanguine Scratch',
      mechType: 'Mechanic',
      startTimeMs: 461000
    },
    {
      mechName: 'Sanguine Scratch',
      mechType: 'Mechanic',
      startTimeMs: 479000
    },
    {
      mechName: 'Brutal Rain',
      mechType: 'Raidwide',
      startTimeMs: 499000
    },
    {
      mechName: 'Vamp Stomp',
      mechType: 'Mechanic',
      startTimeMs: 512000
    },
    {
      mechName: 'Half Moon',
      mechType: 'Mechanic',
      startTimeMs: 528000
    },
    {
      mechName: 'Hardcore',
      mechType: 'Tankbuster',
      startTimeMs: 538000
    },
    {
      mechName: 'Pulping Pulse',
      mechType: 'Mechanic',
      startTimeMs: 543000
    },
    {
      mechName: 'Sanguine Scratch 2',
      mechType: 'Mechanic',
      startTimeMs: 551000
    },
    {
      mechName: 'Insatiable Thirst',
      mechType: 'Raidwide',
      startTimeMs: 571000
    },
    {
      mechName: 'Crowd Kill',
      mechType: 'Raidwide',
      startTimeMs: 585000
    },
    {
      mechName: 'Enrage',
      mechType: 'Enrage',
      startTimeMs: 605000
    }
  ]
};

export const toxic: Strat = {
  stratName: 'toxic',
  description: '',
  stratUrl: {
    'Video by Hector Hectorson': 'https://www.youtube.com/watch?v=cR3wuG8VQ0o',
    'Toxic Friends Raidplan': 'https://raidplan.io/plan/c2L5iJfuYIWXk1v7',
    'Detailed Visual Guide by Hyulia': 'https://raidplan.io/plan/D8fCeim7LDLuEFmu',
    'Cheatsheet by Hyulia': 'https://drive.google.com/file/d/1AL0cGcu9b51u6AvWiyUxwyApQLzFrYlW/view?usp=sharing',
  },
  strats: [
    {
      phaseName: 'Vamp Stomp',
      description: 'Expanding ring + bats\nMelees E/W, Healers SE/SW',
      boardCode: '0CLaPtcXk6NGi',
      mechs: [
        {
          mechanic: 'Start',
          description: 'Dodge near your marker',
          url: 'https://raidplan.io/plan/c2L5iJfuYIWXk1v7#1',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Dodge near A marker',
              imageUrl: './m9s/toxic-vamp-1.webp',
              mask: getCircleMaskUrl(49.9, 20.1, 10)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Dodge near C marker',
              imageUrl: './m9s/toxic-vamp-1.webp',
              mask: getCircleMaskUrl(49.9, 80.4, 10)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Dodge near 4 marker',
              imageUrl: './m9s/toxic-vamp-1.webp',
              mask: getCircleMaskUrl(38.7, 70.1, 10)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Dodge near 3 marker',
              imageUrl: './m9s/toxic-vamp-1.webp',
              mask: getCircleMaskUrl(61.2, 70.2, 10)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Dodge near D marker',
              imageUrl: './m9s/toxic-vamp-1.webp',
              mask: getCircleMaskUrl(33.2, 50.1, 10)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Dodge near B marker',
              imageUrl: './m9s/toxic-vamp-1.webp',
              mask: getCircleMaskUrl(66.8, 50.4, 10)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Dodge near 1 marker',
              imageUrl: './m9s/toxic-vamp-1.webp',
              mask: getCircleMaskUrl(38.6, 30.2, 10)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Dodge near 2 marker',
              imageUrl: './m9s/toxic-vamp-1.webp',
              mask: getCircleMaskUrl(61.2, 30.2, 10)
            }
          ]
        },
        {
          mechanic: 'Continue',
          description: 'Dodge near your marker',
          url: 'https://raidplan.io/plan/c2L5iJfuYIWXk1v7#2',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Dodge near A marker',
              imageUrl: './m9s/toxic-vamp-2.webp',
              mask: getCircleMaskUrl(49.9, 20.1, 10)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Dodge near C marker',
              imageUrl: './m9s/toxic-vamp-2.webp',
              mask: getCircleMaskUrl(49.9, 80.4, 10)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Dodge near 4 marker',
              imageUrl: './m9s/toxic-vamp-2.webp',
              mask: getCircleMaskUrl(38.7, 70.1, 10)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Dodge near 3 marker',
              imageUrl: './m9s/toxic-vamp-2.webp',
              mask: getCircleMaskUrl(61.2, 70.2, 10)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Dodge near D marker',
              imageUrl: './m9s/toxic-vamp-2.webp',
              mask: getCircleMaskUrl(33.2, 50.1, 10)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Dodge near B marker',
              imageUrl: './m9s/toxic-vamp-2.webp',
              mask: getCircleMaskUrl(66.8, 50.4, 10)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Dodge near 1 marker',
              imageUrl: './m9s/toxic-vamp-2.webp',
              mask: getCircleMaskUrl(38.6, 30.2, 10)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Dodge near 2 marker',
              imageUrl: './m9s/toxic-vamp-2.webp',
              mask: getCircleMaskUrl(61.2, 30.2, 10)
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Sadistic Screech',
      mechs: [
        {
          mechanic: 'First Cleave',
          description: 'Dodge into non-glowing area\nBoss will cleave N or S',
          imageUrl: './m9s/toxic-sadistic-1.webp',
          url: 'https://raidplan.io/plan/c2L5iJfuYIWXk1v7#3'
        },
        {
          mechanic: 'Second Cleave',
          description: 'Boss will cleave other half\nDodge into non-glowing lane',
          imageUrl: './m9s/toxic-sadistic-2.webp',
          url: 'https://raidplan.io/plan/c2L5iJfuYIWXk1v7#4'
        },
        {
          mechanic: 'Third Cleave',
          description: 'Boss will cleave from South side\nOne tile will be safe',
          imageUrl: './m9s/toxic-sadistic-3.webp',
          url: 'https://raidplan.io/plan/c2L5iJfuYIWXk1v7#5'
        }
      ]
    },
    {
      phaseName: 'Aetherletting',
      mechs: [
        {
          mechanic: 'Start',
          description:
            "Static, start slightly CCW of standard clock spot\nDrop AOE at edge of arena when it's your turn",
          url: 'https://raidplan.io/plan/c2L5iJfuYIWXk1v7#6',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'NNW between A and 1',
              imageUrl: './m9s/toxic-aetherletting-1.webp',
              mask: getCircleMaskUrl(41.5, 14.9, 7)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'SSE between 3 and C',
              imageUrl: './m9s/toxic-aetherletting-1.webp',
              mask: getCircleMaskUrl(58.8, 86.7, 7)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'WSW between 4 and D',
              imageUrl: './m9s/toxic-aetherletting-1.webp',
              mask: getCircleMaskUrl(29.4, 68.1, 7)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'ENE between 2 and B',
              imageUrl: './m9s/toxic-aetherletting-1.webp',
              mask: getCircleMaskUrl(70.6, 33.1, 7)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'SSW between C and 4',
              imageUrl: './m9s/toxic-aetherletting-1.webp',
              mask: getCircleMaskUrl(40.7, 87.3, 7)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'ESE between B and 3',
              imageUrl: './m9s/toxic-aetherletting-1.webp',
              mask: getCircleMaskUrl(71.3, 64.9, 7)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'WNW between D and 1',
              imageUrl: './m9s/toxic-aetherletting-1.webp',
              mask: getCircleMaskUrl(28.8, 34.8, 7)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'NNE between A and 2',
              imageUrl: './m9s/toxic-aetherletting-1.webp',
              mask: getCircleMaskUrl(58.2, 12.4, 7)
            }
          ]
        },
        {
          mechanic: 'Mech 2',
          description: 'Stack center to dodge crosses',
          imageUrl: './m9s/toxic-aetherletting-2.webp',
          url: 'https://raidplan.io/plan/c2L5iJfuYIWXk1v7#7'
        }
      ]
    },
    {
      phaseName: 'Half Moon',
      description: 'Dodge 2 half rooms (hitbox width if 8 or more stacks)',
      imageUrl: './m9s/toxic-halfmoon.webp',
      url: 'https://raidplan.io/plan/c2L5iJfuYIWXk1v7#8'
    },
    {
      phaseName: 'Sadistic Screech 2',
      description: 'Repeats 3x',
      mechs: [
        {
          mechanic: 'Towers',
          description: 'MT take North, OT take South',
          url: 'https://raidplan.io/plan/c2L5iJfuYIWXk1v7#9',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Take North tower',
              imageUrl: './m9s/toxic-sadistic2-1.webp',
              mask: getCircleMaskUrl(55.9, 38.9, 6)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Take South tower',
              imageUrl: './m9s/toxic-sadistic2-1.webp',
              mask: getCircleMaskUrl(44.3, 80.3, 6)
            },
            {
              role: 'Healer',
              party: 1,
              description: "Don't stand in red circle",
              imageUrl: './m9s/toxic-sadistic2-1.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: "Don't stand in red circle",
              imageUrl: './m9s/toxic-sadistic2-1.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: "Don't stand in red circle",
              imageUrl: './m9s/toxic-sadistic2-1.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: "Don't stand in red circle",
              imageUrl: './m9s/toxic-sadistic2-1.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: "Don't stand in red circle",
              imageUrl: './m9s/toxic-sadistic2-1.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: "Don't stand in red circle",
              imageUrl: './m9s/toxic-sadistic2-1.webp'
            }
          ]
        },
        {
          mechanic: 'Flails + Nails',
          description:
            'Towers spawn flails, Circle spawns doornail\nTanks hit flails, everyone else focus doornail',
          url: 'https://raidplan.io/plan/c2L5iJfuYIWXk1v7#10',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Hit North flail',
              imageUrl: './m9s/toxic-sadistic2-2.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Hit South flail',
              imageUrl: './m9s/toxic-sadistic2-2.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Focus doornail',
              imageUrl: './m9s/toxic-sadistic2-2.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Focus doornail',
              imageUrl: './m9s/toxic-sadistic2-2.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Focus doornail\nIf doornail expands too much, switch to flail',
              imageUrl: './m9s/toxic-sadistic2-2.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Focus doornail\nIf doornail expands too much, switch to flail',
              imageUrl: './m9s/toxic-sadistic2-2.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Focus doornail',
              imageUrl: './m9s/toxic-sadistic2-2.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Focus doornail',
              imageUrl: './m9s/toxic-sadistic2-2.webp'
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Hell in a Cell',
      mechs: [
        {
          mechanic: '1st Towers',
          description: 'G1 takes first set of towers\nCW Prio (from North) T-H-M-R',
          url: 'https://raidplan.io/plan/c2L5iJfuYIWXk1v7#11',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Take 1st tower CW from N',
              imageUrl: './m9s/toxic-hell-towers-1.webp',
              mask: getCircleMaskUrl(59.5, 33, 5)
            },
            {
              role: 'Tank',
              party: 2,
              description: "Don't take 1st tower, do mechanics",
              imageUrl: './m9s/toxic-hell-towers-1.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Take 2nd tower CW from N',
              imageUrl: './m9s/toxic-hell-towers-1.webp',
              mask: getCircleMaskUrl(63.8, 49.9, 5)
            },
            {
              role: 'Healer',
              party: 2,
              description: "Don't take 1st tower, do mechanics",
              imageUrl: './m9s/toxic-hell-towers-1.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Take 3rd tower CW from N',
              imageUrl: './m9s/toxic-hell-towers-1.webp',
              mask: getCircleMaskUrl(40.9, 66.1, 5)
            },
            {
              role: 'Melee',
              party: 2,
              description: "Don't take 1st tower, do mechanics",
              imageUrl: './m9s/toxic-hell-towers-1.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Take 4th tower CW from N',
              imageUrl: './m9s/toxic-hell-towers-1.webp',
              mask: getCircleMaskUrl(40.8, 33.7, 5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: "Don't take 1st tower, do mechanics",
              imageUrl: './m9s/toxic-hell-towers-1.webp'
            }
          ]
        },
        {
          mechanic: 'Ultrasonic Spread',
          description:
            'Towers kill adds, other group does role cleaves\nTank in wide safespot, Healer CW from tank, DPS CCW from tank',
          url: 'https://raidplan.io/plan/c2L5iJfuYIWXk1v7#12',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: '1st: Kill tower add\n2nd: Take role cleave in wide safespot',
              imageUrl: './m9s/toxic-hell-spread.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: '1st: Take role cleave in wide safespot\n2nd: Kill tower add',
              imageUrl: './m9s/toxic-hell-spread.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: '1st: Kill tower add\n2nd: Take role cleave CW from OT',
              imageUrl: './m9s/toxic-hell-spread.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: '1st: Take role cleave CW from OT\n2nd: Kill tower add',
              imageUrl: './m9s/toxic-hell-spread.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: '1st: Kill tower add\n2nd: Take role cleave CCW from OT (stack with R2)',
              imageUrl: './m9s/toxic-hell-spread.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: '1st: Take role cleave CCW from OT (stack with R2)\n2nd: Kill tower add',
              imageUrl: './m9s/toxic-hell-spread.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: '1st: Kill tower add\n2nd: Take role cleave CCW from OT (stack with M2)',
              imageUrl: './m9s/toxic-hell-spread.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: '1st: Take role cleave CCW from OT (stack with M2)\n2nd: Kill tower add',
              imageUrl: './m9s/toxic-hell-spread.webp'
            }
          ]
        },
        {
          mechanic: 'Ultrasonic Amp',
          description: 'Light party stack in wide safespot',
          url: 'https://raidplan.io/plan/c2L5iJfuYIWXk1v7#13',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: '1st: Kill tower add\n2nd: Take stack in wide safespot',
              imageUrl: './m9s/toxic-hell-amp.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: '1st: Take stack in wide safespot\n2nd: Kill tower add',
              imageUrl: './m9s/toxic-hell-amp.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: '1st: Kill tower add\n2nd: Take stack in wide safespot',
              imageUrl: './m9s/toxic-hell-amp.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: '1st: Take stack in wide safespot\n2nd: Kill tower add',
              imageUrl: './m9s/toxic-hell-amp.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: '1st: Kill tower add\n2nd: Take stack in wide safespot',
              imageUrl: './m9s/toxic-hell-amp.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: '1st: Take stack in wide safespot\n2nd: Kill tower add',
              imageUrl: './m9s/toxic-hell-amp.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: '1st: Kill tower add\n2nd: Take stack in wide safespot',
              imageUrl: './m9s/toxic-hell-amp.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: '1st: Take stack in wide safespot\n2nd: Kill tower add',
              imageUrl: './m9s/toxic-hell-amp.webp'
            }
          ]
        },
        {
          mechanic: '2nd Towers',
          description: 'G2 take towers, G1 do mechanics',
          url: 'https://raidplan.io/plan/c2L5iJfuYIWXk1v7#14',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: "Don't take 2nd tower, do mechanics",
              imageUrl: './m9s/toxic-hell-towers-2.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Take 1st tower CW from N',
              imageUrl: './m9s/toxic-hell-towers-2.webp',
              mask: getCircleMaskUrl(50, 26, 5)
            },
            {
              role: 'Healer',
              party: 1,
              description: "Don't take 2nd tower, do mechanics",
              imageUrl: './m9s/toxic-hell-towers-2.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Take 2nd tower CW from N',
              imageUrl: './m9s/toxic-hell-towers-2.webp',
              mask: getCircleMaskUrl(59.1, 66.6, 5)
            },
            {
              role: 'Melee',
              party: 1,
              description: "Don't take 2nd tower, do mechanics",
              imageUrl: './m9s/toxic-hell-towers-2.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Take 3rd tower CW from N',
              imageUrl: './m9s/toxic-hell-towers-2.webp',
              mask: getCircleMaskUrl(50.1, 75.6, 5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: "Don't take 2nd tower, do mechanics",
              imageUrl: './m9s/toxic-hell-towers-2.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Take 4th tower CW from N',
              imageUrl: './m9s/toxic-hell-towers-2.webp',
              mask: getCircleMaskUrl(36.5, 49.9, 5)
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Undead Deathmatch',
      mechs: [
        {
          mechanic: 'Towers',
          description: 'G1 N/W, G2 S/E',
          url: 'https://raidplan.io/plan/c2L5iJfuYIWXk1v7#15',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'North/West',
              imageUrl: './m9s/toxic-undead.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'South/East',
              imageUrl: './m9s/toxic-undead.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'North/West',
              imageUrl: './m9s/toxic-undead.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'South/East',
              imageUrl: './m9s/toxic-undead.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'North/West',
              imageUrl: './m9s/toxic-undead.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'South/East',
              imageUrl: './m9s/toxic-undead.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'North/West',
              imageUrl: './m9s/toxic-undead.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'South/East',
              imageUrl: './m9s/toxic-undead.webp'
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Sanguine Scratch',
      description: 'Repeats 2x',
      mechs: [
        {
          mechanic: 'Cleaves',
          description:
            'Boss will alternate cleaves\nFollow tether to Donut/Circle while dodging cleaves',
          imageUrl: './m9s/toxic-sanguine-1.webp',
          url: 'https://raidplan.io/plan/c2L5iJfuYIWXk1v7#16'
        },
        {
          mechanic: 'Donut + Circle',
          description: 'Donut or circle will resolve once you reach the other side',
          imageUrl: './m9s/toxic-sanguine-2.webp',
          url: 'https://raidplan.io/plan/c2L5iJfuYIWXk1v7#17'
        }
      ]
    },
    {
      phaseName: 'Sanguine Scratch 2',
      description: 'Dodge alternating cleaves',
      imageUrl: './m9s/toxic-sanguine2.webp',
      url: 'https://raidplan.io/plan/c2L5iJfuYIWXk1v7#18'
    }
  ]
};

export const game8: Strat = {
  stratName: 'game8',
  description: '',
  stratUrl: {
    'Game8': 'https://game8.jp/ff14/754895',
    'Video by ぬけまる': 'https://www.youtube.com/watch?v=m4_8a0N8GcM'
  },
  strats: [
    {
      phaseName: 'Markers Setup',
      boardCode: 'vpvsEMAW6djuh',
      description: 'Markers are set up for Aetherletting drops',
      imageUrl: './m9s/game8-markers.webp'
    },
    {
      phaseName: 'Vamp Stomp',
      description: 'Expanding ring + bats\nMelees E/W, Healers SE/SW',
      url: 'https://game8.jp/ff14/754895#hm_5',
      mechs: [
        {
          mechanic: 'Start',
          description: 'Dodge near your clock spot',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Dodge close near North',
              imageUrl: './m9s/game8-vamp.webp',
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Dodge close near South',
              imageUrl: './m9s/game8-vamp.webp',
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Dodge far near Southwest (between D and 3)',
              imageUrl: './m9s/game8-vamp.webp',
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Dodge far near Southeast (between 2 and C)',
              imageUrl: './m9s/game8-vamp.webp',
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Dodge close near West',
              imageUrl: './m9s/game8-vamp.webp',
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Dodge cloes near East',
              imageUrl: './m9s/game8-vamp.webp',
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Dodge far near Northwest (between 4 and A)',
              imageUrl: './m9s/game8-vamp.webp',
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Dodge far near Northeast (between 1 and B)',
              imageUrl: './m9s/game8-vamp.webp',
            }
          ]
        },
      ]
    },
    {
      phaseName: 'Sadistic Screech',
      mechs: [
        {
          mechanic: 'First Cleave',
          description: 'Dodge into non-glowing area\nBoss will cleave N or S',
          url: 'https://game8.jp/ff14/754895#hm_6',
          imageUrl: './m9s/toxic-sadistic-1.webp',
        },
        {
          mechanic: 'Second Cleave',
          description: 'Boss will cleave other half\nDodge into non-glowing lane',
          url: 'https://game8.jp/ff14/754895#hm_6',
          imageUrl: './m9s/toxic-sadistic-2.webp',
        },
        {
          mechanic: 'Third Cleave',
          description: 'Boss will cleave from South side\nOne tile will be safe',
          url: 'https://game8.jp/ff14/754895#hm_6',
          imageUrl: './m9s/toxic-sadistic-3.webp',
        }
      ]
    },
    {
      phaseName: 'Aetherletting',
      mechs: [
        {
          mechanic: 'Start',
          description:
            "Static, start on marker CCW of your clock spot, drop AOE at edge of arena\nStack center to dodge crosses",
          url: 'https://game8.jp/ff14/754895#hm_7',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'A marker',
              imageUrl: './m9s/game8-aetherletting.webp',
            },
            {
              role: 'Tank',
              party: 2,
              description: 'C marker',
              imageUrl: './m9s/game8-aetherletting.webp',
            },
            {
              role: 'Healer',
              party: 1,
              description: 'D marker',
              imageUrl: './m9s/game8-aetherletting.webp',
            },
            {
              role: 'Healer',
              party: 2,
              description: 'B marker',
              imageUrl: './m9s/game8-aetherletting.webp',
            },
            {
              role: 'Melee',
              party: 1,
              description: '3 Marker',
              imageUrl: './m9s/game8-aetherletting.webp',
            },
            {
              role: 'Melee',
              party: 2,
              description: '2 Marker',
              imageUrl: './m9s/game8-aetherletting.webp',
            },
            {
              role: 'Ranged',
              party: 1,
              description: '4 Marker',
              imageUrl: './m9s/game8-aetherletting.webp',
            },
            {
              role: 'Ranged',
              party: 2,
              description: '1 Marker',
              imageUrl: './m9s/game8-aetherletting.webp',
            }
          ]
        },
      ]
    },
    {
      phaseName: 'Sadistic Screech 2',
      description: 'Repeats 3x',
      mechs: [
        {
          mechanic: 'Towers',
          description: 'MT group (G1) take North, ST group (G2) take South',
          url: 'https://game8.jp/ff14/754895#hm_8',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Take North tower, then focus Flail',
              imageUrl: './m9s/game8-sadistic2.webp',
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Take South tower, then focus Flail',
              imageUrl: './m9s/game8-sadistic2.webp',
            },
            {
              role: 'Healer',
              party: 1,
              description: "Avoid circle, focus Doornail",
              imageUrl: './m9s/game8-sadistic2.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: "Avoid circle, focus Doornail",
              imageUrl: './m9s/game8-sadistic2.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: "Avoid circle, focus Flail North",
              imageUrl: './m9s/game8-sadistic2.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: "Avoid circle, focus Flail South",
              imageUrl: './m9s/game8-sadistic2.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: "Avoid circle, focus Doornail",
              imageUrl: './m9s/game8-sadistic2.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: "Avoid circle, focus Doornail",
              imageUrl: './m9s/game8-sadistic2.webp'
            }
          ]
        },
      ]
    },
    {
      phaseName: 'Hell in a Cell',
      mechs: [
        {
          mechanic: 'Tower Priority',
          description: 'CW Prio (from North) T-M-R-H',
          url: 'https://game8.jp/ff14/754895#hm_9',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Take 1st tower CW from N',
              imageUrl: './m9s/game8-hell-towers.webp',
            },
            {
              role: 'Tank',
              party: 2,
              description: "Take 1st tower CW from N",
              imageUrl: './m9s/game8-hell-towers.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Take 4th tower CW from N',
              imageUrl: './m9s/game8-hell-towers.webp',
            },
            {
              role: 'Healer',
              party: 2,
              description: "Take 4th tower CW from N",
              imageUrl: './m9s/game8-hell-towers.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Take 2nd tower CW from N',
              imageUrl: './m9s/game8-hell-towers.webp',
            },
            {
              role: 'Melee',
              party: 2,
              description: "Take 2nd tower CW from N",
              imageUrl: './m9s/game8-hell-towers.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Take 3rd tower CW from N',
              imageUrl: './m9s/game8-hell-towers.webp',
            },
            {
              role: 'Ranged',
              party: 2,
              description: "Take 3rd tower CW from N",
              imageUrl: './m9s/game8-hell-towers.webp'
            }
          ]
        },
        {
          mechanic: '1st Towers (Spread)',
          description: 'MT group (G1) takes first set of towers\nOT group (G2) Spread is T>D>H CW from wide (Tank) gap',
          url: 'https://game8.jp/ff14/754895#hm_9',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Take 1st tower CW from N',
              imageUrl: './m9s/game8-hell-spread1.webp',
            },
            {
              role: 'Tank',
              party: 2,
              description: "Take cleave in wide gap",
              imageUrl: './m9s/game8-hell-spread1.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Take 4th tower CW from N',
              imageUrl: './m9s/game8-hell-spread1.webp',
            },
            {
              role: 'Healer',
              party: 2,
              description: "Take cleave in 2nd gap CW of wide gap",
              imageUrl: './m9s/game8-hell-spread1.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Take 2nd tower CW from N',
              imageUrl: './m9s/game8-hell-spread1.webp',
            },
            {
              role: 'Melee',
              party: 2,
              description: "Take cleave in 1st gap CW of wide gap",
              imageUrl: './m9s/game8-hell-spread1.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Take 3rd tower CW from N',
              imageUrl: './m9s/game8-hell-spread1.webp',
            },
            {
              role: 'Ranged',
              party: 2,
              description: "Take cleave in 1st gap CW of wide gap",
              imageUrl: './m9s/game8-hell-spread1.webp'
            }
          ]
        },
        {
          mechanic: '1st Towers (Stack)',
          description: 'MT group (G1) takes first set of towers\nOT group (G2) Stack in wide gap',
          url: 'https://game8.jp/ff14/754895#hm_9',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Take 1st tower CW from N',
              imageUrl: './m9s/game8-hell-stack1.webp',
            },
            {
              role: 'Tank',
              party: 2,
              description: "Stack in wide gap",
              imageUrl: './m9s/game8-hell-stack1.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Take 4th tower CW from N',
              imageUrl: './m9s/game8-hell-stack1.webp',
            },
            {
              role: 'Healer',
              party: 2,
              description: "Stack in wide gap",
              imageUrl: './m9s/game8-hell-stack1.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Take 2nd tower CW from N',
              imageUrl: './m9s/game8-hell-stack1.webp',
            },
            {
              role: 'Melee',
              party: 2,
              description: "Stack in wide gap",
              imageUrl: './m9s/game8-hell-stack1.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Take 3rd tower CW from N',
              imageUrl: './m9s/game8-hell-stack1.webp',
            },
            {
              role: 'Ranged',
              party: 2,
              description: "Stack in wide gap",
              imageUrl: './m9s/game8-hell-stack1.webp'
            }
          ]
        },
        {
          mechanic: '2nd Towers (Spread)',
          description: 'OT group (G2) takes second set of towers\nMT group (G1) Spread is T>D>H CW from wide (Tank) gap',
          url: 'https://game8.jp/ff14/754895#hm_9',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: "Take cleave in wide gap",
              imageUrl: './m9s/game8-hell-spread2.webp',
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Take 1st tower CW from N',
              imageUrl: './m9s/game8-hell-spread2.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: "Take cleave in 2nd gap CW of wide gap",
              imageUrl: './m9s/game8-hell-spread2.webp',
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Take 4th tower CW from N',
              imageUrl: './m9s/game8-hell-spread2.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: "Take cleave in 1st gap CW of wide gap",
              imageUrl: './m9s/game8-hell-spread2.webp',
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Take 2nd tower CW from N',
              imageUrl: './m9s/game8-hell-spread2.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: "Take cleave in 1st gap CW of wide gap",
              imageUrl: './m9s/game8-hell-spread2.webp',
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Take 3rd tower CW from N',
              imageUrl: './m9s/game8-hell-spread2.webp'
            }
          ]
        },
        {
          mechanic: '2nd Towers (Stack)',
          description: 'OT group (G2) takes second set of towers\nMT group (G1) Stack in wide gap',
          url: 'https://game8.jp/ff14/754895#hm_9',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: "Stack in wide gap",
              imageUrl: './m9s/game8-hell-stack2.webp',
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Take 1st tower CW from N',
              imageUrl: './m9s/game8-hell-stack2.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: "Stack in wide gap",
              imageUrl: './m9s/game8-hell-stack2.webp',
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Take 4th tower CW from N',
              imageUrl: './m9s/game8-hell-stack2.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: "Stack in wide gap",
              imageUrl: './m9s/game8-hell-stack2.webp',
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Take 2nd tower CW from N',
              imageUrl: './m9s/game8-hell-stack2.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: "Stack in wide gap",
              imageUrl: './m9s/game8-hell-stack2.webp',
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Take 3rd tower CW from N',
              imageUrl: './m9s/game8-hell-stack2.webp'
            }
          ]
        },
      ]
    },
    {
      phaseName: 'Undead Deathmatch',
      mechs: [
        {
          mechanic: 'Towers',
          description: 'MT group (G1) N/W, ST group (G2) S/E',
          url: 'https://game8.jp/ff14/754895#hm_10',
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
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Sanguine Scratch',
      description: 'Repeats 2x',
      mechs: [
        {
          mechanic: 'Cleaves + Tethers',
          description:
            'Boss will alternate cleaves\nFollow tether to Donut/Circle while dodging cleaves\nGraphic shows maximum tether range',
          imageUrl: './m9s/game8-sanguine-range.webp',
          url: 'https://game8.jp/ff14/754895#hm_10'
        },
        {
          mechanic: 'Donut + Circle',
          description: 'Donut or circle will resolve once you reach the other side',
          imageUrl: './m9s/game8-sanguine-2.webp',
          url: 'https://game8.jp/ff14/754895#hm_10'
        }
      ]
    },
    {
      phaseName: 'Sanguine Scratch 2',
      description: 'Dodge alternating cleaves',
      url: 'https://game8.jp/ff14/754895#hm_11'
    }
  ]
};

export const game8jp: Strat = {
  stratName: 'game8jp',
  description: '',
  stratUrl: {
    'Game8': 'https://game8.jp/ff14/754895',
    'ぬけまる様の解説動画': 'https://www.youtube.com/watch?v=m4_8a0N8GcM'
  },
  strats: [
    {
      phaseName: 'フィールドマーカー',
      boardCode: 'vpvsEMAW6djuh',
      description: 'エーテルレッティングの範囲を捨てる場所のマーカー',
      imageUrl: './m9s/game8-markers.webp'
    },
    {
      phaseName: 'ヴァンプストンプ',
      description: 'コウモリが輪に当たると円範囲が発生\n重なると即死',
      url: 'https://game8.jp/ff14/754895#hm_5',
      mechs: [
        {
          mechanic: '散開',
          description: '各自の散開位置で回避',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: '北(内側)',
              imageUrl: './m9s/game8-vamp.webp',
            },
            {
              role: 'Tank',
              party: 2,
              description: '南(内側)',
              imageUrl: './m9s/game8-vamp.webp',
            },
            {
              role: 'Healer',
              party: 1,
              description: '南西(外側、Dと3の間)',
              imageUrl: './m9s/game8-vamp.webp',
            },
            {
              role: 'Healer',
              party: 2,
              description: '南東(外側、2とCの間)',
              imageUrl: './m9s/game8-vamp.webp',
            },
            {
              role: 'Melee',
              party: 1,
              description: '西(内側)',
              imageUrl: './m9s/game8-vamp.webp',
            },
            {
              role: 'Melee',
              party: 2,
              description: '東(内側)',
              imageUrl: './m9s/game8-vamp.webp',
            },
            {
              role: 'Ranged',
              party: 1,
              description: '北西(外側、4とAの間)',
              imageUrl: './m9s/game8-vamp.webp',
            },
            {
              role: 'Ranged',
              party: 2,
              description: '北東(外側、1とBの間)',
              imageUrl: './m9s/game8-vamp.webp',
            }
          ]
        },
      ]
    },
    {
      phaseName: 'サディスティック・スクリーチ',
      mechs: [
        {
          mechanic: '1回目',
          description: '光っていない方向へ回避\nボスから北か南への半面範囲',
          url: 'https://game8.jp/ff14/754895#hm_6',
          imageUrl: './m9s/toxic-sadistic-1.webp',
        },
        {
          mechanic: '2回目',
          description: 'ボスから逆の半面範囲\n光っていないレーンへ回避',
          url: 'https://game8.jp/ff14/754895#hm_6',
          imageUrl: './m9s/toxic-sadistic-2.webp',
        },
        {
          mechanic: '3回目',
          description: 'ボスから南側への半面範囲\n1マスのみ安置',
          url: 'https://game8.jp/ff14/754895#hm_6',
          imageUrl: './m9s/toxic-sadistic-3.webp',
        }
      ]
    },
    {
      phaseName: 'エーテルレッティング',
      mechs: [
        {
          mechanic: '範囲捨て',
          description:
            '指定マーカーへ扇範囲を避けつつ向かい、範囲を捨てる\n処理後、中央に集合',
          url: 'https://game8.jp/ff14/754895#hm_7',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Aマーカー',
              imageUrl: './m9s/game8-aetherletting.webp',
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Cマーカー',
              imageUrl: './m9s/game8-aetherletting.webp',
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Dマーカー',
              imageUrl: './m9s/game8-aetherletting.webp',
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Bマーカー',
              imageUrl: './m9s/game8-aetherletting.webp',
            },
            {
              role: 'Melee',
              party: 1,
              description: '3マーカー',
              imageUrl: './m9s/game8-aetherletting.webp',
            },
            {
              role: 'Melee',
              party: 2,
              description: '2マーカー',
              imageUrl: './m9s/game8-aetherletting.webp',
            },
            {
              role: 'Ranged',
              party: 1,
              description: '4マーカー',
              imageUrl: './m9s/game8-aetherletting.webp',
            },
            {
              role: 'Ranged',
              party: 2,
              description: '1マーカー',
              imageUrl: './m9s/game8-aetherletting.webp',
            }
          ]
        },
      ]
    },
    {
      phaseName: 'サディスティック・スクリーチ2回目',
      description: '3セット繰り返す',
      mechs: [
        {
          mechanic: '塔とノコギリ',
          description: 'MT組(G1)は北、ST組(G2)は南',
          url: 'https://game8.jp/ff14/754895#hm_8',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: '北の塔を踏む→鉄球を破壊',
              imageUrl: './m9s/game8-sadistic2.webp',
            },
            {
              role: 'Tank',
              party: 2,
              description: '南の塔を踏む→鉄球を破壊',
              imageUrl: './m9s/game8-sadistic2.webp',
            },
            {
              role: 'Healer',
              party: 1,
              description: 'ノコギリを回避→鉄塔(ロッド)を破壊',
              imageUrl: './m9s/game8-sadistic2.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'ノコギリを回避→鉄塔(ロッド)を破壊',
              imageUrl: './m9s/game8-sadistic2.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'ノコギリを回避→北の鉄球を破壊',
              imageUrl: './m9s/game8-sadistic2.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'ノコギリを回避→南の鉄球を破壊',
              imageUrl: './m9s/game8-sadistic2.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'ノコギリを回避→鉄塔(ロッド)を破壊',
              imageUrl: './m9s/game8-sadistic2.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'ノコギリを回避→鉄塔(ロッド)を破壊',
              imageUrl: './m9s/game8-sadistic2.webp'
            }
          ]
        },
      ]
    },
    {
      phaseName: 'ヘル・イン・ア・セル',
      mechs: [
        {
          mechanic: '塔優先度',
          description: '12時から時計回りでT＞近接＞遠隔＞H',
          url: 'https://game8.jp/ff14/754895#hm_9',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: '北から時計回り1番目の塔',
              imageUrl: './m9s/game8-hell-towers.webp',
            },
            {
              role: 'Tank',
              party: 2,
              description: '北から時計回り1番目の塔',
              imageUrl: './m9s/game8-hell-towers.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: '北から時計回り4番目の塔',
              imageUrl: './m9s/game8-hell-towers.webp',
            },
            {
              role: 'Healer',
              party: 2,
              description: '北から時計回り4番目の塔',
              imageUrl: './m9s/game8-hell-towers.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: '北から時計回り2番目の塔',
              imageUrl: './m9s/game8-hell-towers.webp',
            },
            {
              role: 'Melee',
              party: 2,
              description: '北から時計回り2番目の塔',
              imageUrl: './m9s/game8-hell-towers.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: '北から時計回り3番目の塔',
              imageUrl: './m9s/game8-hell-towers.webp',
            },
            {
              role: 'Ranged',
              party: 2,
              description: '北から時計回り3番目の塔',
              imageUrl: './m9s/game8-hell-towers.webp'
            }
          ]
        },
        {
          mechanic: '1回目の塔(スプレッド散開)',
          description: 'MT組(G1)が塔を踏む\nST組(G2)は広い安置から時計回りでT＞D＞H',
          url: 'https://game8.jp/ff14/754895#hm_9',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: '北から時計回り1番目の塔',
              imageUrl: './m9s/game8-hell-spread1.webp',
            },
            {
              role: 'Tank',
              party: 2,
              description: '広い安置で散開',
              imageUrl: './m9s/game8-hell-spread1.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: '北から時計回り4番目の塔',
              imageUrl: './m9s/game8-hell-spread1.webp',
            },
            {
              role: 'Healer',
              party: 2,
              description: '広い安置から時計回り2番目で散開',
              imageUrl: './m9s/game8-hell-spread1.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: '北から時計回り2番目の塔',
              imageUrl: './m9s/game8-hell-spread1.webp',
            },
            {
              role: 'Melee',
              party: 2,
              description: '広い安置から時計回り1番目で散開',
              imageUrl: './m9s/game8-hell-spread1.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: '北から時計回り3番目の塔',
              imageUrl: './m9s/game8-hell-spread1.webp',
            },
            {
              role: 'Ranged',
              party: 2,
              description: '広い安置から時計回り1番目で散開',
              imageUrl: './m9s/game8-hell-spread1.webp'
            }
          ]
        },
        {
          mechanic: '1回目の塔(アグリゲート散開)',
          description: 'MT組(G1)が塔を踏む\nST組(G2)は広い安置で頭割り',
          url: 'https://game8.jp/ff14/754895#hm_9',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: '北から時計回り1番目の塔',
              imageUrl: './m9s/game8-hell-stack1.webp',
            },
            {
              role: 'Tank',
              party: 2,
              description: '広い安置で頭割り',
              imageUrl: './m9s/game8-hell-stack1.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: '北から時計回り4番目の塔',
              imageUrl: './m9s/game8-hell-stack1.webp',
            },
            {
              role: 'Healer',
              party: 2,
              description: '広い安置で頭割り',
              imageUrl: './m9s/game8-hell-stack1.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: '北から時計回り2番目の塔',
              imageUrl: './m9s/game8-hell-stack1.webp',
            },
            {
              role: 'Melee',
              party: 2,
              description: '広い安置で頭割り',
              imageUrl: './m9s/game8-hell-stack1.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: '北から時計回り3番目の塔',
              imageUrl: './m9s/game8-hell-stack1.webp',
            },
            {
              role: 'Ranged',
              party: 2,
              description: '広い安置で頭割り',
              imageUrl: './m9s/game8-hell-stack1.webp'
            }
          ]
        },
        {
          mechanic: '2回目の塔(スプレッド散開)',
          description: 'ST組(G2)が塔を踏む\nMT組(G1)は広い安置から時計回りでT＞D＞H',
          url: 'https://game8.jp/ff14/754895#hm_9',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: '広い安置で散開',
              imageUrl: './m9s/game8-hell-spread2.webp',
            },
            {
              role: 'Tank',
              party: 2,
              description: '北から時計回り1番目の塔',
              imageUrl: './m9s/game8-hell-spread2.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: '広い安置から時計回り2番目で散開',
              imageUrl: './m9s/game8-hell-spread2.webp',
            },
            {
              role: 'Healer',
              party: 2,
              description: '北から時計回り4番目の塔',
              imageUrl: './m9s/game8-hell-spread2.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: '広い安置から時計回り1番目で散開',
              imageUrl: './m9s/game8-hell-spread2.webp',
            },
            {
              role: 'Melee',
              party: 2,
              description: '北から時計回り2番目の塔',
              imageUrl: './m9s/game8-hell-spread2.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: '広い安置から時計回り1番目で散開',
              imageUrl: './m9s/game8-hell-spread2.webp',
            },
            {
              role: 'Ranged',
              party: 2,
              description: '北から時計回り3番目の塔',
              imageUrl: './m9s/game8-hell-spread2.webp'
            }
          ]
        },
        {
          mechanic: '2回目の塔(アグリゲート散開)',
          description: 'ST組(G2)が塔を踏む\nMT組(G1)は広い安置で頭割り',
          url: 'https://game8.jp/ff14/754895#hm_9',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: '広い安置で頭割り',
              imageUrl: './m9s/game8-hell-stack2.webp',
            },
            {
              role: 'Tank',
              party: 2,
              description: '北から時計回り1番目の塔',
              imageUrl: './m9s/game8-hell-stack2.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: '広い安置で頭割り',
              imageUrl: './m9s/game8-hell-stack2.webp',
            },
            {
              role: 'Healer',
              party: 2,
              description: '北から時計回り4番目の塔',
              imageUrl: './m9s/game8-hell-stack2.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: '広い安置で頭割り',
              imageUrl: './m9s/game8-hell-stack2.webp',
            },
            {
              role: 'Melee',
              party: 2,
              description: '北から時計回り2番目の塔',
              imageUrl: './m9s/game8-hell-stack2.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: '広い安置で頭割り',
              imageUrl: './m9s/game8-hell-stack2.webp',
            },
            {
              role: 'Ranged',
              party: 2,
              description: '北から時計回り3番目の塔',
              imageUrl: './m9s/game8-hell-stack2.webp'
            }
          ]
        },
      ]
    },
    {
      phaseName: 'バット・デスマッチ',
      mechs: [
        {
          mechanic: '塔踏み',
          description: 'MT組(G1)は北/西、ST組(G2)は南/東\nコウモリとの線を離しすぎないように追従',
          url: 'https://game8.jp/ff14/754895#hm_10',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: '北/西',
            },
            {
              role: 'Tank',
              party: 2,
              description: '南/東',
            },
            {
              role: 'Healer',
              party: 1,
              description: '北/西',
            },
            {
              role: 'Healer',
              party: 2,
              description: '南/東',
            },
            {
              role: 'Melee',
              party: 1,
              description: '北/西',
            },
            {
              role: 'Melee',
              party: 2,
              description: '南/東',
            },
            {
              role: 'Ranged',
              party: 1,
              description: '北/西',
            },
            {
              role: 'Ranged',
              party: 2,
              description: '南/東',
            }
          ]
        }
      ]
    },
    {
      phaseName: 'サングインスクラッチ',
      description: '2回繰り返す',
      mechs: [
        {
          mechanic: '扇回避＋線追従',
          description:
            'ボスの扇範囲を交互に避けつつ、コウモリの線を追従\n画像は線の最大距離',
          imageUrl: './m9s/game8-sanguine-range.webp',
          url: 'https://game8.jp/ff14/754895#hm_10'
        },
        {
          mechanic: 'ドーナツ/円範囲',
          description: 'コウモリからのドーナツ範囲か円範囲が発動\n円範囲はボスに寄って回避、ドーナツはコウモリの足元',
          imageUrl: './m9s/game8-sanguine-2.webp',
          url: 'https://game8.jp/ff14/754895#hm_10'
        }
      ]
    },
    {
      phaseName: 'サングインスクラッチ2回目',
      description: '線がないため自由に移動可能\n扇範囲を避けるのみ',
      url: 'https://game8.jp/ff14/754895#hm_11'
    }
  ]
};

// All strats as an array
export const m9sStrats: Strat[] = [toxic, game8, game8jp];
