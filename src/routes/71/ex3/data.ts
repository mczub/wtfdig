import type { Strat, FightConfig, MechanicStrat } from '$lib/types';
import { getCircleMaskUrl, getMultiCircleMaskUrl, getRectMaskUrl } from '$lib/utils';

// ============================================================
// Fight Config
// ============================================================

export const ex3FightConfig: FightConfig = {
  fightKey: 'ex3',
  title: "The Minstrel's Ballad: Sphene's Burden",
  abbreviatedTitle: 'EX3',
  subtitle: 'EX3 Patch 7.1',
  cheatsheetTitle: 'EX3 Cheatsheet',
  strats: {
    hector: {
      label: 'Hector',
      badges: [{ text: 'NA', class: 'na-badge' }]
    }
  },
  defaultStratName: 'hector',
  timeline: [
    { mechName: 'Start', mechType: 'Start', startTimeMs: 0 },
    { mechName: 'Aethertithe', mechType: 'Mechanic', startTimeMs: 10000 },
    { mechName: 'Virtual Shift', mechType: 'Raidwide', startTimeMs: 55000 },
    { mechName: 'Laws of Wind', mechType: 'Mechanic', startTimeMs: 75000 },
    { mechName: 'Chain Debuff', mechType: 'Mechanic', startTimeMs: 95000 },
    { mechName: 'Legitimate Force', mechType: 'Mechanic', startTimeMs: 110000 },
    { mechName: 'Knockback', mechType: 'Mechanic', startTimeMs: 130000 },
    { mechName: 'World Shatter', mechType: 'Raidwide', startTimeMs: 150000 },
    { mechName: 'Prosecution of War', mechType: 'Tankbuster', startTimeMs: 165000 },
    { mechName: 'Divide and Conquer', mechType: 'Mechanic', startTimeMs: 180000 },
    { mechName: 'Royal Domain', mechType: 'Raidwide', startTimeMs: 205000 },
    { mechName: 'Virtual Shift', mechType: 'Raidwide', startTimeMs: 220000 },
    { mechName: 'Laws of Earth', mechType: 'Mechanic', startTimeMs: 240000 },
    { mechName: 'Legitimate Force', mechType: 'Mechanic', startTimeMs: 255000 },
    { mechName: '8 Towers', mechType: 'Mechanic', startTimeMs: 270000 },
    { mechName: 'Gravitational Empire', mechType: 'Mechanic', startTimeMs: 295000 },
    { mechName: 'Meteors', mechType: 'Mechanic', startTimeMs: 325000 },
    { mechName: 'Weighty Blow', mechType: 'Mechanic', startTimeMs: 360000 },
    { mechName: 'World Shatter', mechType: 'Raidwide', startTimeMs: 385000 },
    { mechName: 'Prosecution of War', mechType: 'Tankbuster', startTimeMs: 400000 },
    { mechName: 'Coronation', mechType: 'Mechanic', startTimeMs: 415000 },
    { mechName: 'Absolute Authority', mechType: 'Mechanic', startTimeMs: 450000 },
    { mechName: 'Virtual Shift', mechType: 'Raidwide', startTimeMs: 525000 },
    { mechName: 'Laws of Ice', mechType: 'Mechanic', startTimeMs: 540000 },
    { mechName: 'Icicles (T+H)', mechType: 'Mechanic', startTimeMs: 560000 },
    { mechName: 'Icicles (DPS)', mechType: 'Mechanic', startTimeMs: 580000 },
    { mechName: 'Legitimate Force', mechType: 'Mechanic', startTimeMs: 605000 },
    { mechName: 'Laws of Ice', mechType: 'Mechanic', startTimeMs: 625000 },
    { mechName: 'MTTT (4 tethers)', mechType: 'Mechanic', startTimeMs: 645000 },
    { mechName: 'World Shatter', mechType: 'Raidwide', startTimeMs: 720000 },
    { mechName: 'Prosecution of War', mechType: 'Tankbuster', startTimeMs: 735000 },
    { mechName: 'Royal Domain', mechType: 'Raidwide', startTimeMs: 750000 },
    { mechName: 'Legitimate Force', mechType: 'Mechanic', startTimeMs: 765000 },
    { mechName: 'Royal Domain', mechType: 'Raidwide', startTimeMs: 785000 },
    { mechName: 'Authority Eternal', mechType: 'Raidwide', startTimeMs: 800000 },
    { mechName: 'Radical Shift', mechType: 'Mechanic', startTimeMs: 830000 },
    { mechName: 'Radical Shift', mechType: 'Mechanic', startTimeMs: 850000 },
    { mechName: 'World Shatter', mechType: 'Raidwide', startTimeMs: 870000 },
    { mechName: 'Dimensional Distortion', mechType: 'Mechanic', startTimeMs: 885000 },
    { mechName: "Tyranny's Grasp", mechType: 'Tankbuster', startTimeMs: 905000 },
    { mechName: 'Ground Slams', mechType: 'Raidwide', startTimeMs: 925000 },
    { mechName: 'Royal Banishment', mechType: 'Mechanic', startTimeMs: 955000 },
    { mechName: 'Radical Shift', mechType: 'Mechanic', startTimeMs: 985000 },
    { mechName: 'Radical Shift', mechType: 'Mechanic', startTimeMs: 1005000 },
    { mechName: 'World Shatter', mechType: 'Raidwide', startTimeMs: 1025000 },
    { mechName: 'Enrage', mechType: 'Enrage', startTimeMs: 1040000 }
  ]
};

// ============================================================
// Strat: Hector
// ============================================================

export const hector: Strat = {
  stratName: 'hector',
  description: '',
  stratUrl: {
    'Video by Hector Hectorson': 'https://www.youtube.com/watch?v=yfvfhuEEMCY',
    'Naur Guide': 'https://naurffxiv.com/extreme/sphenes-burden',
    'Icy Veins Guide': 'https://www.icy-veins.com/ffxiv/sphenes-burden-extreme-trial-guide'
  },
  strats: [
    {
      phaseName: 'Setup',
      mechs: [
        {
          mechanic: 'Light Parties',
          imageUrl: './ex3/light-parties.webp'
        },
        {
          mechanic: 'Fan Spreads',
          imageUrl: './ex3/fan-out-spreads.webp'
        },
        {
          mechanic: 'Yellow Platform Spreads',
          imageUrl: './ex3/yellow-platform-spreads.webp'
        },
      ]
    },
    {
      phaseName: 'Wind',
      mechs: [
        {
          mechanic: 'Aethertithe',
          description: 'LP stacks: G1 W, G2 E',
          imageUrl: './ex3/aethertithe.webp'
        },
        {
          mechanic: 'Laws of Wind',
          description: 'LP stacks',
          imageUrl: './ex3/laws-of-wind.webp'
        },
        {
          mechanic: 'Chain Debuff',
          description: 'Start center, then DPS N, Supports S',
          imageUrl: './ex3/chain-debuff.webp'
        },
        {
          mechanic: 'Legitimate Force',
          description: 'Dodge half room cleaves',
          imageUrl: './ex3/legitimate-force.webp'
        },
        {
          mechanic: 'Knockback',
          description: 'Get knocked back in arrow direction',
          imageUrl: './ex3/knockback.webp'
        },
        {
          mechanic: 'Divide and Conquer',
          description: 'Fan out, dodge between for second hit',
          imageUrl: './ex3/divide-and-conquer.webp'
        }
      ]
    },
    {
      phaseName: 'Earth',
      mechs: [
        {
          mechanic: 'Laws of Earth',
          description: 'Float to middle',
          imageUrl: './ex3/laws-of-earth.webp'
        },
        {
          mechanic: 'Towers',
          description: 'G1 West, G2 East\nGround before towers',
          imageUrl: './ex3/8-towers.webp'
        },
        {
          mechanic: 'Gravitational Empire',
          description: 'Tether Float N corner\nAoE Float to sides\nOthers Ground + Towers',
          imageUrl: './ex3/gravitational-empire.webp'
        }
      ]
    },
    {
      phaseName: 'Meteors',
      mechs: [
        {
          mechanic: '1st Meteors',
          imageUrl: './ex3/meteors-1st.webp'
        },
        {
          mechanic: '2nd Meteors',
          description: 'Float and drop into the hole',
          imageUrl: './ex3/meteors-2nd.webp'
        },
        {
          mechanic: 'Weighty Blow',
          description: 'Use meteors to block hits',
          imageUrl: './ex3/weighty-blow.webp'
        },
      ]
    },
    {
      phaseName: 'Coronation',
      mechs: [
        {
          mechanic: 'Resolution',
          description: 'Run toward triangle, drag right (CW)\nStand on waymark if you have them',
          imageUrl: './ex3/coronation.webp'
        },
        {
          mechanic: 'Atomic Ray',
          description: 'Spread AoE — resolves from spread positions'
        }
      ]
    },
    {
      phaseName: 'Absolute Authority (Cheese)',
      mechs: [
        {
          mechanic: 'Bait Path',
          description: 'Stack NW, run across to NE\nDrop puddles along North wall',
          imageUrl: './ex3/mit-authority-bait.webp'
        },
        {
          mechanic: 'Stack + Mit',
          description: 'Stay stacked, mit, ignore flares/doritos',
          imageUrl: './ex3/mit-authority-stack.webp'
        },
        {
          mechanic: 'Knockback',
          description: 'KBI',
        }
      ]
    },
    {
      phaseName: 'Ice',
      mechs: [
        {
          mechanic: 'Laws of Ice',
          description: 'Keep moving or freeze',
          imageUrl: './ex3/mit-authority-knockback.webp'
        },
        {
          mechanic: 'Ice Bridges',
          description: '1 player at a time',
          imageUrl: './ex3/ice-bridges.webp'
        },
        {
          mechanic: '1st Icicles (T+H)',
          description: 'Outer tether = N bridge, inner = S bridge\nGo',
          imageUrl: './ex3/icicles-1st.webp'
        },
        {
          mechanic: '2nd Icicles (DPS)',
          description: 'Cross bridge directly opposite your icicle',
          imageUrl: './ex3/icicles-2nd.webp'
        },
        {
          mechanic: 'Stretch Tethers',
          description: 'Unstretched = knockoff death'
        },
        {
          mechanic: 'Legitimate Force',
          description: 'Return middle\n2nd-out role crosses first, same bridge',
          imageUrl: './ex3/legitimate-force-ice.webp'
        }
      ]
    },
    {
      phaseName: 'Tethers (MTTT)',
      mechs: [
        {
          mechanic: '1st Tethers (Melees)',
          description: 'Melees take N bridge to NE/NW corners',
          imageUrl: './ex3/mttt-melees.webp'
        },
        {
          mechanic: '2nd-4th Tethers (Tanks)',
          description: 'Take 2nd, then invuln 3rd and 4th',
          imageUrl: './ex3/mttt-tanks.webp'
        },
      ]
    },
    {
      phaseName: 'Phase 2',
      mechs: [
        {
          mechanic: 'Radical Shift',
          description: 'Read background rotation → step onto incoming color\nSpread on land'
        },
        {
          mechanic: 'Radical Shift (AFK Strat)',
          description: 'Stay on current color, prep next\nMay overlap on landing — spread out'
        },
        {
          mechanic: 'Dimensional Distortion',
          description: 'Exaflares — stand in 2nd wave spot, dodge after 2 hits'
        },
      ]
    }
  ]
};

export const ex3Strats: Strat[] = [hector];
