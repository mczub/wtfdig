import type { Alignment, FightConfig, PlayerMechStrat, Strat, StratRecord } from '$lib/types';
import { getStratArray, getStringObject } from '$lib/utils';

const normalMM2: Record<string, string | Record<string, string | PlayerMechStrat>> = {
  '4towers': {
    description: 'Melees North, Ranged South',
    MT: {
      role: 'Tank',
      party: 1,
      description: 'North',
      imageUrl: './ex5/mm2-normal-4towers.webp'
    },
    OT: {
      role: 'Tank',
      party: 2,
      description: 'North',
      imageUrl: './ex5/mm2-normal-4towers.webp'
    },
    H1: {
      role: 'Healer',
      party: 1,
      description: 'South',
      imageUrl: './ex5/mm2-normal-4towers.webp'
    },
    H2: {
      role: 'Healer',
      party: 2,
      description: 'South',
      imageUrl: './ex5/mm2-normal-4towers.webp'
    },
    M1: {
      role: 'Melee',
      party: 1,
      description: 'North',
      imageUrl: './ex5/mm2-normal-4towers.webp'
    },
    M2: {
      role: 'Melee',
      party: 2,
      description: 'North',
      imageUrl: './ex5/mm2-normal-4towers.webp'
    },
    R1: {
      role: 'Ranged',
      party: 1,
      description: 'South',
      imageUrl: './ex5/mm2-normal-4towers.webp'
    },
    R2: {
      role: 'Ranged',
      party: 2,
      description: 'South',
      imageUrl: './ex5/mm2-normal-4towers.webp'
    }
  },
  '2towers': {
    description: '‼️Wait for Vuln to fall off\nG1 West, G2 East',
    MT: {
      role: 'Tank',
      party: 1,
      description: 'Northwest with M1',
      imageUrl: './ex5/mm2-normal-2towers.webp'
    },
    OT: {
      role: 'Tank',
      party: 2,
      description: 'Northeast with M2',
      imageUrl: './ex5/mm2-normal-2towers.webp'
    },
    H1: {
      role: 'Healer',
      party: 1,
      description: 'Southwest with R1',
      imageUrl: './ex5/mm2-normal-2towers.webp'
    },
    H2: {
      role: 'Healer',
      party: 2,
      description: 'Southeast with R2',
      imageUrl: './ex5/mm2-normal-2towers.webp'
    },
    M1: {
      role: 'Melee',
      party: 1,
      description: 'Northwest with MT',
      imageUrl: './ex5/mm2-normal-2towers.webp'
    },
    M2: {
      role: 'Melee',
      party: 2,
      description: 'Northeast with OT',
      imageUrl: './ex5/mm2-normal-2towers.webp'
    },
    R1: {
      role: 'Ranged',
      party: 1,
      description: 'Southwest with H1',
      imageUrl: './ex5/mm2-normal-2towers.webp'
    },
    R2: {
      role: 'Ranged',
      party: 2,
      description: 'Southeast with H2',
      imageUrl: './ex5/mm2-normal-2towers.webp'
    }
  },
  '3tower1': {
    description:
      'Deal with Memento Mori (hands from center)\nTanks take busters\nHealers + DPS do towers',
    MT: {
      role: 'Tank',
      party: 1,
      description: 'Take buster in NW corner',
      imageUrl: './ex5/mm2-normal-3tower1.webp'
    },
    OT: {
      role: 'Tank',
      party: 2,
      description: 'Wait in NE corner for second buster',
      imageUrl: './ex5/mm2-normal-3tower1.webp'
    },
    H1: {
      role: 'Healer',
      party: 1,
      description: 'Take South tower first to avoid TB',
      imageUrl: './ex5/mm2-normal-3tower1.webp'
    },
    H2: {
      role: 'Healer',
      party: 2,
      description: 'Take North tower first',
      imageUrl: './ex5/mm2-normal-3tower1.webp'
    },
    M1: {
      role: 'Melee',
      party: 1,
      description: 'Take South tower first to avoid TB',
      imageUrl: './ex5/mm2-normal-3tower1.webp'
    },
    M2: {
      role: 'Melee',
      party: 2,
      description: 'Take North tower first',
      imageUrl: './ex5/mm2-normal-3tower1.webp'
    },
    R1: {
      role: 'Ranged',
      party: 1,
      description: 'Take South tower first to avoid TB',
      imageUrl: './ex5/mm2-normal-3tower1.webp'
    },
    R2: {
      role: 'Ranged',
      party: 2,
      description: 'Take North tower first',
      imageUrl: './ex5/mm2-normal-3tower1.webp'
    }
  },
  '3tower2': {
    description: 'Move towards next tower',
    MT: {
      role: 'Tank',
      party: 1,
      description: 'Chill in NW corner',
      imageUrl: './ex5/mm2-normal-3tower2.webp'
    },
    OT: {
      role: 'Tank',
      party: 2,
      description: 'Take buster in NE corner',
      imageUrl: './ex5/mm2-normal-3tower2.webp'
    },
    H1: {
      role: 'Healer',
      party: 1,
      description: 'Take North tower',
      imageUrl: './ex5/mm2-normal-3tower2.webp'
    },
    H2: {
      role: 'Healer',
      party: 2,
      description: 'Take South tower second to avoid TB\nScoot towards middle for safety',
      imageUrl: './ex5/mm2-normal-3tower2.webp'
    },
    M1: {
      role: 'Melee',
      party: 1,
      description: 'Take North tower',
      imageUrl: './ex5/mm2-normal-3tower2.webp'
    },
    M2: {
      role: 'Melee',
      party: 2,
      description: 'Take South tower second to avoid TB\nScoot towards middle for safety',
      imageUrl: './ex5/mm2-normal-3tower2.webp'
    },
    R1: {
      role: 'Ranged',
      party: 1,
      description: 'Take North tower',
      imageUrl: './ex5/mm2-normal-3tower2.webp'
    },
    R2: {
      role: 'Ranged',
      party: 2,
      description: 'Take South tower second to avoid TB\nScoot towards middle for safety',
      imageUrl: './ex5/mm2-normal-3tower2.webp'
    }
  }
};

const uptimeMM2: Record<string, string | Record<string, string | PlayerMechStrat>> = {
  '4towers': {
    description: 'Melees North, Ranged South',
    MT: {
      role: 'Tank',
      party: 1,
      description: 'North',
      imageUrl: './ex5/mm2-uptime-4towers.webp'
    },
    OT: {
      role: 'Tank',
      party: 2,
      description: 'North',
      imageUrl: './ex5/mm2-uptime-4towers.webp'
    },
    H1: {
      role: 'Healer',
      party: 1,
      description: 'South',
      imageUrl: './ex5/mm2-uptime-4towers.webp'
    },
    H2: {
      role: 'Healer',
      party: 2,
      description: 'South',
      imageUrl: './ex5/mm2-uptime-4towers.webp'
    },
    M1: {
      role: 'Melee',
      party: 1,
      description: 'North',
      imageUrl: './ex5/mm2-uptime-4towers.webp'
    },
    M2: {
      role: 'Melee',
      party: 2,
      description: 'North',
      imageUrl: './ex5/mm2-uptime-4towers.webp'
    },
    R1: {
      role: 'Ranged',
      party: 1,
      description: 'South',
      imageUrl: './ex5/mm2-uptime-4towers.webp'
    },
    R2: {
      role: 'Ranged',
      party: 2,
      description: 'South',
      imageUrl: './ex5/mm2-uptime-4towers.webp'
    }
  },
  '2towers': {
    description:
      '‼️Wait for Vuln to fall off\nM1 & R2 swap\nMT/R2 NW, H1/R1 SW, OT/M2 NE, H2/M1 SE',
    MT: {
      role: 'Tank',
      party: 1,
      description: 'Northwest with R2',
      imageUrl: './ex5/mm2-uptime-2towers.webp'
    },
    OT: {
      role: 'Tank',
      party: 2,
      description: 'Northeast with M2',
      imageUrl: './ex5/mm2-uptime-2towers.webp'
    },
    H1: {
      role: 'Healer',
      party: 1,
      description: 'Southwest with R1',
      imageUrl: './ex5/mm2-uptime-2towers.webp'
    },
    H2: {
      role: 'Healer',
      party: 2,
      description: 'Southeast with M1',
      imageUrl: './ex5/mm2-uptime-2towers.webp'
    },
    M1: {
      role: 'Melee',
      party: 1,
      description: 'Southeast with H2',
      imageUrl: './ex5/mm2-uptime-2towers.webp'
    },
    M2: {
      role: 'Melee',
      party: 2,
      description: 'Northeast with OT',
      imageUrl: './ex5/mm2-uptime-2towers.webp'
    },
    R1: {
      role: 'Ranged',
      party: 1,
      description: 'Southwest with H1',
      imageUrl: './ex5/mm2-uptime-2towers.webp'
    },
    R2: {
      role: 'Ranged',
      party: 2,
      description: 'Northwest with MT',
      imageUrl: './ex5/mm2-uptime-2towers.webp'
    }
  },
  '3tower1': {
    description:
      'Deal with Memento Mori (hands from center)\nTanks take busters\nHealers + DPS do towers',
    MT: {
      role: 'Tank',
      party: 1,
      description: 'Take buster in NW corner',
      imageUrl: './ex5/mm2-uptime-3tower1.webp'
    },
    OT: {
      role: 'Tank',
      party: 2,
      description: 'Wait in NE corner for second buster',
      imageUrl: './ex5/mm2-uptime-3tower1.webp'
    },
    H1: {
      role: 'Healer',
      party: 1,
      description: 'Take Southwest tower first',
      imageUrl: './ex5/mm2-uptime-3tower1.webp'
    },
    H2: {
      role: 'Healer',
      party: 2,
      description: 'Take Northeast tower first',
      imageUrl: './ex5/mm2-uptime-3tower1.webp'
    },
    M1: {
      role: 'Melee',
      party: 1,
      description: 'Take Northeast tower first',
      imageUrl: './ex5/mm2-uptime-3tower1.webp'
    },
    M2: {
      role: 'Melee',
      party: 2,
      description: 'Take Northeast tower first',
      imageUrl: './ex5/mm2-uptime-3tower1.webp'
    },
    R1: {
      role: 'Ranged',
      party: 1,
      description: 'Take Southwest tower first',
      imageUrl: './ex5/mm2-uptime-3tower1.webp'
    },
    R2: {
      role: 'Ranged',
      party: 2,
      description: 'Take Southwest tower first',
      imageUrl: './ex5/mm2-uptime-3tower1.webp'
    }
  },
  '3tower2': {
    description: 'DPS stay on North or South side and take next tower',
    MT: {
      role: 'Tank',
      party: 1,
      description: 'Chill in NW corner',
      imageUrl: './ex5/mm2-uptime-3tower2.webp'
    },
    OT: {
      role: 'Tank',
      party: 2,
      description: 'Take buster in NE corner',
      imageUrl: './ex5/mm2-uptime-3tower2.webp'
    },
    H1: {
      role: 'Healer',
      party: 1,
      description: 'Take Southeast tower\nStay near middle for safety',
      imageUrl: './ex5/mm2-uptime-3tower2.webp'
    },
    H2: {
      role: 'Healer',
      party: 2,
      description: 'Take Northwest tower',
      imageUrl: './ex5/mm2-uptime-3tower2.webp'
    },
    M1: {
      role: 'Melee',
      party: 1,
      description: 'Take Northwest tower',
      imageUrl: './ex5/mm2-uptime-3tower2.webp'
    },
    M2: {
      role: 'Melee',
      party: 2,
      description: 'Take Northwest tower',
      imageUrl: './ex5/mm2-uptime-3tower2.webp'
    },
    R1: {
      role: 'Ranged',
      party: 1,
      description: 'Take Southeast tower\nStay near middle for safety',
      imageUrl: './ex5/mm2-uptime-3tower2.webp'
    },
    R2: {
      role: 'Ranged',
      party: 2,
      description: 'Take Southeast tower\nStay near middle for safety',
      imageUrl: './ex5/mm2-uptime-3tower2.webp'
    }
  }
};

const mm2Strats = { normal: normalMM2, uptime: uptimeMM2 };

const hectorStrat: Strat = {
  stratName: 'hector',
  description: 'Source: Hector',
  notes: 'Color partners are T/M and H/R',
  stratUrl: 'https://www.youtube.com/watch?v=2RsWkk8bxyk',
  strats: [
    {
      phaseName: 'Setup',
      description:
        'Light parties, pairs (T/M, H/R), and spread positions (TMMT RHHR L->R). Assign each pair a color quadrant.',
      mechs: [
        {
          mechanic: 'Spreads',
          description: 'TMMT RHHR from West to East',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'West, Front',
              imageUrl: './ex5/setup-spreads.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'East, Front',
              imageUrl: './ex5/setup-spreads.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'W of center, Back',
              imageUrl: './ex5/setup-spreads.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'E of center, Back',
              imageUrl: './ex5/setup-spreads.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'W of center, Front',
              imageUrl: './ex5/setup-spreads.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'E of center, Front',
              imageUrl: './ex5/setup-spreads.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'W, Back',
              imageUrl: './ex5/setup-spreads.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'E, Back',
              imageUrl: './ex5/setup-spreads.webp'
            }
          ]
        },
        {
          mechanic: 'Pairs/Color Quadrants',
          description: 'MT/M1 Red, OT/M2 Yellow, H2/R2 Blue, H1/R1 Purple',

          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Red (1/A)',
              imageUrl: './ex5/setup-colors.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Yellow (2/B)',
              imageUrl: './ex5/setup-colors.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Purple (4/D)',
              imageUrl: './ex5/setup-colors.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Blue (3/C)',
              imageUrl: './ex5/setup-colors.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Red (A/1)',
              imageUrl: './ex5/setup-colors.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Yellow (2/B)',
              imageUrl: './ex5/setup-colors.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Purple (4/D)',
              imageUrl: './ex5/setup-colors.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Blue (3/C)',
              imageUrl: './ex5/setup-colors.webp'
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Blue Shockwave',
      tag: 'p1',
      description: '2-hit tankbuster with conal cleave, tanks to corners',
      mechs: [
        {
          mechanic: 'Tankbusters',
          description: 'MT takes the first hit, OT takes the second',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Take first buster to NW corner',
              imageUrl: './ex5/blue-shockwave.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Take second buster to NE corner',
              imageUrl: './ex5/blue-shockwave.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Stay mid away from tanks',
              imageUrl: './ex5/blue-shockwave.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Stay mid away from tanks',
              imageUrl: './ex5/blue-shockwave.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Stay mid away from tanks',
              imageUrl: './ex5/blue-shockwave.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Stay mid away from tanks',
              imageUrl: './ex5/blue-shockwave.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Stay mid away from tanks',
              imageUrl: './ex5/blue-shockwave.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Stay mid away from tanks',
              imageUrl: './ex5/blue-shockwave.webp'
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Fear of Death',
      tag: 'p1',
      description: 'Bait line AOEs from purple puddles at spread positions',
      mechs: [
        {
          mechanic: 'Spreads',
          description: 'Each player goes to the purple AoE nearest to their spread position',
          imageUrl: './ex5/fod-spreads.webp'
        },
        {
          mechanic: 'Baits',
          description: 'Bait the line AoE away from the party, preferably out of the arena',
          imageUrl: './ex5/fod-baits.webp'
        }
      ]
    },
    {
      phaseName: 'Cold Grip',
      tag: 'p1',
      description: 'Dodge mid, then towards safe side',
      imageUrl: './ex5/cg-mid.webp'
    },
    {
      phaseName: 'Memento Mori',
      tag: 'p1',
      description:
        'Boss glows light/dark. Dark side fits 2 players, light side fits 6. Adjust to avoid hand line AOEs.',
      mechs: [
        {
          mechanic: 'Spreads',
          description: 'Tanks go to the dark side, everyone else to the light side',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Go to dark side, avoid hands\nSpread towards left',
              imageUrl: './ex5/mm1.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Go to dark side, avoid hands\nSpread towards right',
              imageUrl: './ex5/mm1.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Go to light side, avoid hands\nSpread towards left middle',
              imageUrl: './ex5/mm1.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Go to light side, avoid hands\nSpread towards left middle',
              imageUrl: './ex5/mm1.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Go to light side, avoid hands\nSpread towards left front',
              imageUrl: './ex5/mm1.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Go to light side, avoid hands\nSpread towards right front',
              imageUrl: './ex5/mm1.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Go to light side, avoid hands\nSpread towards left back',
              imageUrl: './ex5/mm1.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Go to light side, avoid hands\nSpread towards right back',
              imageUrl: './ex5/mm1.webp'
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Soul Reaping',
      tag: 'p1',
      description:
        'Combined mechanics: Out/Sides or In/Middle with partner or light party stacks. Second mech stored for later.',
      mechs: [
        {
          mechanic: 'Out/Sides',
          description:
            'Dodge to the sides and out at max melee\nStack in pairs (Four-fold Blight) or light parties (Two-fold Blight).',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Go out to side. Stack with M1 or light party.',
              imageUrl: './ex5/sr-out-sides.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Go out to side. Stack with M2 or light party.',
              imageUrl: './ex5/sr-out-sides.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Go out to side. Stack with R1 or light party.',
              imageUrl: './ex5/sr-out-sides.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Go out to side. Stack with R2 or light party.',
              imageUrl: './ex5/sr-out-sides.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Go out to side. Stack with MT or light party.',
              imageUrl: './ex5/sr-out-sides.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Go out to side. Stack with OT or light party.',
              imageUrl: './ex5/sr-out-sides.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Go out to side. Stack with H1 or light party.',
              imageUrl: './ex5/sr-out-sides.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Go out to side. Stack with H2 or light party.',
              imageUrl: './ex5/sr-out-sides.webp'
            }
          ]
        },
        {
          mechanic: 'In/Middle',
          description:
            'Dodge to the middle\nStack in pairs (Four-fold Blight) or light parties (Two-fold Blight).',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Go in to middle. Stack with M1 or light party.',
              imageUrl: './ex5/sr-in-middle.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Go in to middle. Stack with M2 or light party.',
              imageUrl: './ex5/sr-in-middle.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Go in to middle. Stack with R1 or light party.',
              imageUrl: './ex5/sr-in-middle.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Go in to middle. Stack with R2 or light party.',
              imageUrl: './ex5/sr-in-middle.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Go in to middle. Stack with MT or light party.',
              imageUrl: './ex5/sr-in-middle.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Go in to middle. Stack with OT or light party.',
              imageUrl: './ex5/sr-in-middle.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Go in to middle. Stack with H1 or light party.',
              imageUrl: './ex5/sr-in-middle.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Go in to middle. Stack with H2 or light party.',
              imageUrl: './ex5/sr-in-middle.webp'
            }
          ]
        }
      ]
    },
    {
      phaseName: "End's Embrace 1",
      tag: 'p1',
      description: 'Drop puddles, bait telegraphed hands, then tankbuster.',
      mechs: [
        {
          mechanic: 'Puddles + Baits',
          description:
            'Drop your puddle on the first set of hands, then dodge the telegraphed line AOEs.',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Drop puddle, dodge telegraph. Move to corner for buster',
              imageUrl: './ex5/ee1-baits.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Drop puddle, dodge telegraph. Move to corner for buster',
              imageUrl: './ex5/ee1-baits.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Drop puddle, dodge telegraph. Move to middle',
              imageUrl: './ex5/ee1-baits.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Drop puddle, dodge telegraph. Move to middle',
              imageUrl: './ex5/ee1-baits.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Drop puddle, dodge telegraph. Move to middle',
              imageUrl: './ex5/ee1-baits.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Drop puddle, dodge telegraph. Move to middle',
              imageUrl: './ex5/ee1-baits.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Drop puddle, dodge telegraph. Move to middle',
              imageUrl: './ex5/ee1-baits.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Drop puddle, dodge telegraph. Move to middle',
              imageUrl: './ex5/ee1-baits.webp'
            }
          ]
        },
        {
          mechanic: 'Tankbuster',
          description:
            'Tanks go to corners, others to middle. Resolve the stored Soul Reaping mechanic after.',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Take buster in corner, then do stored Soul Reaping mechanic',
              imageUrl: './ex5/ee1-tb.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Take buster in corner, then do stored Soul Reaping mechanic',
              imageUrl: './ex5/ee1-tb.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Stack middle, then do stored Soul Reaping mechanic',
              imageUrl: './ex5/ee1-tb.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Stack middle, then do stored Soul Reaping mechanic',
              imageUrl: './ex5/ee1-tb.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Stack middle, then do stored Soul Reaping mechanic',
              imageUrl: './ex5/ee1-tb.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Stack middle, then do stored Soul Reaping mechanic',
              imageUrl: './ex5/ee1-tb.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Stack middle, then do stored Soul Reaping mechanic',
              imageUrl: './ex5/ee1-tb.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Stack middle, then do stored Soul Reaping mechanic',
              imageUrl: './ex5/ee1-tb.webp'
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Grand Cross',
      tag: 'p1',
      description: 'Spinning lasers, puddles, towers, and spreads',
      mechs: [
        {
          mechanic: 'Baits',
          description: 'Stack middle, then bait puddles while moving to color intercard',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Stack mid, then move to Red intercardinal (1 marker)',
              imageUrl: './ex5/gc-baits.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Stack mid, then move to Yellow intercardinal (2 marker)',
              imageUrl: './ex5/gc-baits.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Stack mid, then move to Purple intercardinal (4 marker)',
              imageUrl: './ex5/gc-baits.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Stack mid, then move to Blue intercardinal (3 marker)',
              imageUrl: './ex5/gc-baits.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Stack mid, then move to Red intercardinal (1 marker)',
              imageUrl: './ex5/gc-baits.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Stack mid, then move to Yellow intercardinal (2 marker)',
              imageUrl: './ex5/gc-baits.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Stack mid, then move to Purple intercardinal (4 marker)',
              imageUrl: './ex5/gc-baits.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Stack mid, then move to Blue intercardinal (3 marker)',
              imageUrl: './ex5/gc-baits.webp'
            }
          ]
        },
        {
          mechanic: 'First Towers',
          description: 'Wait at intercard for 2 lasers, then soak tower/spread',
          imageUrl: './ex5/gc-tower1.webp'
        },
        {
          mechanic: 'Second Towers',
          description: 'Move to color cardinal, wait for 3 lasers, then soak tower/spread',
          imageUrl: './ex5/gc-tower2.webp'
        },
        {
          mechanic: 'Proximity AOE',
          description:
            'Go back middle, bait puddles while moving to color intercard, then stay for proximity AOE',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Stack mid, then move to Red intercardinal (1 marker)',
              imageUrl: './ex5/gc-proximity.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Stack mid, then move to Yellow intercardinal (2 marker)',
              imageUrl: './ex5/gc-proximity.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Stack mid, then move to Purple intercardinal (4 marker)',
              imageUrl: './ex5/gc-proximity.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Stack mid, then move to Blue intercardinal (3 marker)',
              imageUrl: './ex5/gc-proximity.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Stack mid, then move to Red intercardinal (1 marker)',
              imageUrl: './ex5/gc-proximity.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Stack mid, then move to Yellow intercardinal (2 marker)',
              imageUrl: './ex5/gc-proximity.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Stack mid, then move to Purple intercardinal (4 marker)',
              imageUrl: './ex5/gc-proximity.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Stack mid, then move to Blue intercardinal (3 marker)',
              imageUrl: './ex5/gc-proximity.webp'
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Adds',
      tag: 'adds',
      description:
        'Small adds bait lines onto closest players, Tanks need to pick up the larger adds',
      mechs: [
        {
          mechanic: 'Small Adds',
          description: 'Kill the small adds, bait their line AOEs if necessary',
          imageUrl: './ex5/adds-small.webp'
        },
        {
          mechanic: 'Big Adds',
          description: 'Tanks provoke big adds and face them away for a line tank buster',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Provoke the first large add, face it away, and bait the buster.',
              imageUrl: './ex5/adds-big.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Provoke the second large add, face it away, and bait the buster.',
              imageUrl: './ex5/adds-big.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Continue DPSing adds',
              imageUrl: './ex5/adds-big.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Continue DPSing adds',
              imageUrl: './ex5/adds-big.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Continue DPSing adds',
              imageUrl: './ex5/adds-big.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Continue DPSing adds',
              imageUrl: './ex5/adds-big.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Continue DPSing adds',
              imageUrl: './ex5/adds-big.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Continue DPSing adds',
              imageUrl: './ex5/adds-big.webp'
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Domain Expansion',
      tag: 'adds',
      description: 'Solo add phase based on role. Finish before the 50-second doom timer runs out',
      mechs: [
        {
          mechanic: 'Adds',
          description: 'Each role has a different set of adds and mechanics to handle',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'One add, interrupt "Spreading Fear", survive mini-busters',
              imageUrl: './ex5/solo-add-tank.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'One add, interrupt "Spreading Fear", survive mini-busters',
              imageUrl: './ex5/solo-add-tank.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'One add, heal through heavy bleed, Esuna "Slow"',
              imageUrl: './ex5/solo-add-heal.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'One add. heal through heavy bleed. Esuna "Slow"',
              imageUrl: './ex5/solo-add-heal.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Two adds, dodge line AOEs, kill the one that starts enraging first',
              imageUrl: './ex5/solo-add-dps.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Two adds, dodge line AOEs, kill the one that starts enraging first',
              imageUrl: './ex5/solo-add-dps.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Two adds, dodge line AOEs, kill the one that starts enraging first',
              imageUrl: './ex5/solo-add-dps.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'TTwo adds, dodge line AOEs, kill the one that starts enraging first',
              imageUrl: './ex5/solo-add-dps.webp'
            }
          ]
        }
      ]
    },
    {
      phaseName: "End's Embrace 2",
      tag: 'p2',
      description:
        'Spread in the remaining safe lane, drop hand AOEs, and dodge giant hand attacks.',
      mechs: [
        {
          mechanic: 'Specter of Death',
          description: 'Spread in the safe lane away from the giant hands.',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'West, Front',
              imageUrl: './ex5/ee2-specter.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'East, Front',
              imageUrl: './ex5/ee2-specter.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'W of center, Back',
              imageUrl: './ex5/ee2-specter.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'E of center, Back',
              imageUrl: './ex5/ee2-specter.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'E of center, Front',
              imageUrl: './ex5/ee2-specter.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'W of center, Front',
              imageUrl: './ex5/ee2-specter.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'E, Back',
              imageUrl: './ex5/ee2-specter.webp'
            },
            { role: 'Ranged', party: 2, description: 'W, Back', imageUrl: './ex5/ee2-specter.webp' }
          ]
        },
        {
          mechanic: 'EE2 Spreads',
          description: 'Drop your hand AOEs',
          imageUrl: './ex5/ee2-spreads.webp'
        },
        {
          mechanic: 'EE2 Baits',
          description: 'Bait hands, then do Cold Grip (middle, then safe side)',
          imageUrl: './ex5/ee2-baits.webp'
        }
      ]
    },
    {
      phaseName: 'Relentless Reaping',
      tag: 'p2',
      description: 'Four mechanics in a row, order stays the same, start point will change',
      mechs: [
        {
          mechanic: 'Out/Sides',
          description: 'Dodge to the sides. Stack in pairs or light parties at the end.',
          imageUrl: './ex5/relentless-out.webp',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Go out and to the sides\nStack with partner/LP on last mechanic'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Go out and to the sides\nStack with partner/LP on last mechanic'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Go out and to the sides\nStack with partner/LP on last mechanic'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Go out and to the sides\nStack with partner/LP on last mechanic'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Go out and to the sides\nStack with partner/LP on last mechanic'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Go out and to the sides\nStack with partner/LP on last mechanic'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Go out and to the sides\nStack with partner/LP on last mechanic'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Go out and to the sides\nStack with partner/LP on last mechanic'
            }
          ]
        },
        {
          mechanic: 'In/Middle',
          description: 'Dodge to the middle. Stack in pairs or light parties at the end.',
          imageUrl: './ex5/relentless-in.webp',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Go in\nStack with partner/LP on last mechanic'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Go in\nStack with partner/LP on last mechanic'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Go in\nStack with partner/LP on last mechanic'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Go in\nStack with partner/LP on last mechanic'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Go in\nStack with partner/LP on last mechanic'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Go in\nStack with partner/LP on last mechanic'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Go in\nStack with partner/LP on last mechanic'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Go in\nStack with partner/LP on last mechanic'
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Circle of Lives 1',
      tag: 'p2',
      description: 'Dodge five donut AOEs. First two donuts, then hand cleave, then last 3 donuts',
      mechs: [
        {
          mechanic: 'Donuts 1/2',
          description: 'Run to the first two glowing planets',
          imageUrl: './ex5/circle1-donut12.webp'
        },
        {
          mechanic: 'Side Hand',
          description:
            'The hand cleave goes off just before the third donut\nWait for it to pass before moving',
          imageUrl: './ex5/circle1-hand.webp'
        },
        {
          mechanic: 'Donuts 3/4/5',
          description: 'Move into last 3 donuts',
          imageUrl: './ex5/circle1-donut345.webp'
        },
        {
          mechanic: 'Reaping/Blight',
          description: 'Immediately after the donuts, resolve the loaded Soul Reaping mechanic',
          imageUrl: './ex5/circle1-reaping.webp'
        }
      ]
    },
    {
      phaseName: 'Mass Macabre (MM2)',
      tag: 'mm2',
      description:
        'Tower soaks 4-2-3-3\n‼️Wait for the Vuln to fall off before you take the next tower',
      mechs: [
        {
          mechanic: '4-person Towers',
          description: getStringObject(mm2Strats, '4towers', 'description'),
          strats: getStratArray(mm2Strats, '4towers')
        },
        {
          mechanic: '2-person Towers',
          description: getStringObject(mm2Strats, '2towers', 'description'),
          strats: getStratArray(mm2Strats, '2towers')
        },
        {
          mechanic: '3-person Tower 1/TB',
          description: getStringObject(mm2Strats, '3tower1', 'description'),
          strats: getStratArray(mm2Strats, '3tower1')
        },
        {
          mechanic: '3-person Tower 2/TB',
          description: getStringObject(mm2Strats, '3tower2', 'description'),
          strats: getStratArray(mm2Strats, '3tower2')
        }
      ]
    },
    {
      phaseName: 'Circle of Lives 2',
      tag: 'p2',
      description:
        'Dodge four donut AOEs while avoiding hand cleaves that go through middle or N/S.',
      mechs: [
        {
          mechanic: 'Donut 1/3',
          description: 'Dodge donuts, make sure to watch hands',
          imageUrl: './ex5/circle2-donut13.webp'
        },
        {
          mechanic: 'Donut 2/4 + Hand',
          description: 'Hand cleaves happen concurrently with Donuts 2 and 4',
          imageUrl: './ex5/circle2-donut24.webp'
        }
      ]
    },
    {
      phaseName: 'Repeat',
      tag: 'p2',
      description: 'Rest of the fight is just repeat mechanics\nMM1, Cold Grip, Grand Cross, Enrage'
    }
  ]
};

export const ex5Strats: Strat[] = [hectorStrat];

const mm2ToggleOptions = [
  { value: 'normal', label: 'Normal' },
  { value: 'uptime', label: 'Uptime' }
];

const ex5ToggleConfigs = [
  {
    key: 'mm2',
    label: 'MM2',
    defaultValue: 'normal',
    options: mm2ToggleOptions
  }
];

export const ex5FightConfig: FightConfig = {
  fightKey: 'ex5',
  title: "The Minstrel's Ballad: Necron's Embrace",
  abbreviatedTitle: 'EX5',
  subtitle: 'EX5 Patch 7.3',
  cheatsheetTitle: 'EX5 Cheatsheet',
  strats: {
    hector: {
      label: 'Hector',
      defaults: {
        mm2: 'normal'
      }
    }
  },
  toggles: ex5ToggleConfigs,
  tabTags: {
    P1: ['p1', 'adds'],
    P2: ['p2', 'mm2']
  },
  useMainPageTabs: false,
  defaultStratName: 'hector',
  timeline: []
};
