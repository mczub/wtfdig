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
    { mechName: 'Aethertithe', mechType: 'Mechanic', startTimeMs: 12000 },
    { mechName: 'Virtual Shift', mechType: 'Raidwide', startTimeMs: 59000 },
    { mechName: 'Laws of Wind', mechType: 'Mechanic', startTimeMs: 64000 },
    { mechName: 'Legitimate Force', mechType: 'Mechanic', startTimeMs: 78000 },
    { mechName: 'World Shatter', mechType: 'Raidwide', startTimeMs: 101000 },
    { mechName: 'Prosecution of War', mechType: 'Tankbuster', startTimeMs: 113000 },
    { mechName: 'Divide and Conquer', mechType: 'Mechanic', startTimeMs: 119000 },
    { mechName: 'Royal Domain', mechType: 'Raidwide', startTimeMs: 146000 },
    { mechName: 'Virtual Shift', mechType: 'Raidwide', startTimeMs: 159000 },
    { mechName: 'Laws of Earth', mechType: 'Mechanic', startTimeMs: 164000 },
    { mechName: 'Legitimate Force', mechType: 'Mechanic', startTimeMs: 171000 },
    { mechName: 'Gravitational Empire', mechType: 'Mechanic', startTimeMs: 192000 },
    { mechName: 'Weighty Blow', mechType: 'Mechanic', startTimeMs: 222000 },
    { mechName: 'World Shatter', mechType: 'Raidwide', startTimeMs: 242000 },
    { mechName: 'Prosecution of War', mechType: 'Tankbuster', startTimeMs: 254000 },
    { mechName: 'Coronation', mechType: 'Mechanic', startTimeMs: 260000 },
    { mechName: 'Atomic Ray', mechType: 'Raidwide', startTimeMs: 277000 },
    { mechName: 'Absolute Authority', mechType: 'Mechanic', startTimeMs: 283000 },
    { mechName: 'Virtual Shift', mechType: 'Raidwide', startTimeMs: 331000 },
    { mechName: 'Laws of Ice', mechType: 'Mechanic', startTimeMs: 336000 },
    { mechName: 'Rush', mechType: 'Mechanic', startTimeMs: 346000 },
    { mechName: 'Legitimate Force', mechType: 'Mechanic', startTimeMs: 358000 },
    { mechName: 'Laws of Ice', mechType: 'Mechanic', startTimeMs: 375000 },
    { mechName: 'Drear Rising', mechType: 'Mechanic', startTimeMs: 385000 },
    { mechName: 'Virtual Shift', mechType: 'Raidwide', startTimeMs: 416000 },
    { mechName: 'Prosecution of War', mechType: 'Tankbuster', startTimeMs: 429000 },
    { mechName: 'Royal Domain', mechType: 'Raidwide', startTimeMs: 444000 },
    { mechName: 'Legitimate Force', mechType: 'Mechanic', startTimeMs: 451000 },
    { mechName: 'Royal Domain', mechType: 'Raidwide', startTimeMs: 470000 },
    { mechName: 'Authority Eternal', mechType: 'Raidwide', startTimeMs: 489000 },
    { mechName: 'Phase 2', mechType: 'Start', startTimeMs: 0 },
    { mechName: 'Radical Shift', mechType: 'Mechanic', startTimeMs: 29000 },
    { mechName: 'Radical Shift', mechType: 'Mechanic', startTimeMs: 48000 },
    { mechName: 'World Shatter', mechType: 'Raidwide', startTimeMs: 72000 },
    { mechName: 'Dimensional Distortion', mechType: 'Mechanic', startTimeMs: 79000 },
    { mechName: "Tyranny's Grasp", mechType: 'Tankbuster', startTimeMs: 94000 },
    { mechName: 'Dying Memory', mechType: 'Raidwide', startTimeMs: 99000 },
    { mechName: 'Royal Banishment', mechType: 'Mechanic', startTimeMs: 109000 },
    { mechName: 'Radical Shift', mechType: 'Mechanic', startTimeMs: 136000 },
    { mechName: 'Radical Shift', mechType: 'Mechanic', startTimeMs: 155000 },
    { mechName: 'World Shatter', mechType: 'Raidwide', startTimeMs: 179000 },
    { mechName: 'Enrage', mechType: 'Enrage', startTimeMs: 200000 }
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
          strats: [
            { role: 'Tank', party: 1, description: 'G1 West', imageUrl: './ex3/light-parties.webp', mask: getCircleMaskUrl(43, 32, 7) },
            { role: 'Tank', party: 2, description: 'G2 East', imageUrl: './ex3/light-parties.webp', mask: getCircleMaskUrl(56, 50, 7) },
            { role: 'Healer', party: 1, description: 'G1 West', imageUrl: './ex3/light-parties.webp', mask: getCircleMaskUrl(43, 32, 7) },
            { role: 'Healer', party: 2, description: 'G2 East', imageUrl: './ex3/light-parties.webp', mask: getCircleMaskUrl(56, 50, 7) },
            { role: 'Melee', party: 1, description: 'G1 West', imageUrl: './ex3/light-parties.webp', mask: getCircleMaskUrl(43, 32, 7) },
            { role: 'Melee', party: 2, description: 'G2 East', imageUrl: './ex3/light-parties.webp', mask: getCircleMaskUrl(56, 50, 7) },
            { role: 'Ranged', party: 1, description: 'G1 West', imageUrl: './ex3/light-parties.webp', mask: getCircleMaskUrl(43, 32, 7) },
            { role: 'Ranged', party: 2, description: 'G2 East', imageUrl: './ex3/light-parties.webp', mask: getCircleMaskUrl(56, 50, 7) }
          ]
        },
        {
          mechanic: 'Fan Spreads',
          strats: [
            { role: 'Tank', party: 1, description: 'Northwest Corner', imageUrl: './ex3/fan-out-spreads.webp', mask: getCircleMaskUrl(28, 21, 4) },
            { role: 'Tank', party: 2, description: 'Northeast Corner', imageUrl: './ex3/fan-out-spreads.webp', mask: getCircleMaskUrl(72, 19, 4) },
            { role: 'Healer', party: 1, description: 'West', imageUrl: './ex3/fan-out-spreads.webp', mask: getCircleMaskUrl(31, 35, 4) },
            { role: 'Healer', party: 2, description: 'East', imageUrl: './ex3/fan-out-spreads.webp', mask: getCircleMaskUrl(68, 33, 4) },
            { role: 'Melee', party: 1, description: 'West of Center', imageUrl: './ex3/fan-out-spreads.webp', mask: getCircleMaskUrl(44, 52, 4) },
            { role: 'Melee', party: 2, description: 'East of Center', imageUrl: './ex3/fan-out-spreads.webp', mask: getCircleMaskUrl(55, 53, 4) },
            { role: 'Ranged', party: 1, description: 'Southwest', imageUrl: './ex3/fan-out-spreads.webp', mask: getCircleMaskUrl(36, 45, 4) },
            { role: 'Ranged', party: 2, description: 'Southeast', imageUrl: './ex3/fan-out-spreads.webp', mask: getCircleMaskUrl(63, 47, 4) }
          ]
        },
        {
          mechanic: 'Earth Spreads',
          strats: [
            { role: 'Tank', party: 1, description: 'West platform, NE', imageUrl: './ex3/yellow-platform-spreads.webp', mask: getCircleMaskUrl(40.9, 31.1, 4) },
            { role: 'Tank', party: 2, description: 'East platform, NW', imageUrl: './ex3/yellow-platform-spreads.webp', mask: getCircleMaskUrl(58.5, 31.1, 4) },
            { role: 'Healer', party: 1, description: 'West platform, SE', imageUrl: './ex3/yellow-platform-spreads.webp', mask: getCircleMaskUrl(40.9, 58.9, 4) },
            { role: 'Healer', party: 2, description: 'East platform, SW', imageUrl: './ex3/yellow-platform-spreads.webp', mask: getCircleMaskUrl(57.6, 58.9, 4) },
            { role: 'Melee', party: 1, description: 'West platform, NW', imageUrl: './ex3/yellow-platform-spreads.webp', mask: getCircleMaskUrl(34.8, 31.1, 4) },
            { role: 'Melee', party: 2, description: 'East platform, NE', imageUrl: './ex3/yellow-platform-spreads.webp', mask: getCircleMaskUrl(64.8, 31.1, 4) },
            { role: 'Ranged', party: 1, description: 'West platform, SW', imageUrl: './ex3/yellow-platform-spreads.webp', mask: getCircleMaskUrl(34.8, 59, 4) },
            { role: 'Ranged', party: 2, description: 'East platform, SE', imageUrl: './ex3/yellow-platform-spreads.webp', mask: getCircleMaskUrl(64.8, 59, 4) }
          ]
        }
      ]
    },
    {
      phaseName: 'Wind Phase',
      mechs: [
        {
          mechanic: 'Aethertithe',
          description: 'LP stacks: G1 W, G2 E',
          strats: [
            { role: 'Tank', party: 1, description: 'G1 West', imageUrl: './ex3/aethertithe.webp', mask: getCircleMaskUrl(36, 38, 7) },
            { role: 'Tank', party: 2, description: 'G2 East', imageUrl: './ex3/aethertithe.webp', mask: getCircleMaskUrl(49, 43, 7) },
            { role: 'Healer', party: 1, description: 'G1 West', imageUrl: './ex3/aethertithe.webp', mask: getCircleMaskUrl(36, 38, 7) },
            { role: 'Healer', party: 2, description: 'G2 East', imageUrl: './ex3/aethertithe.webp', mask: getCircleMaskUrl(49, 43, 7) },
            { role: 'Melee', party: 1, description: 'G1 West', imageUrl: './ex3/aethertithe.webp', mask: getCircleMaskUrl(36, 38, 7) },
            { role: 'Melee', party: 2, description: 'G2 East', imageUrl: './ex3/aethertithe.webp', mask: getCircleMaskUrl(49, 43, 7) },
            { role: 'Ranged', party: 1, description: 'G1 West', imageUrl: './ex3/aethertithe.webp', mask: getCircleMaskUrl(36, 38, 7) },
            { role: 'Ranged', party: 2, description: 'G2 East', imageUrl: './ex3/aethertithe.webp', mask: getCircleMaskUrl(49, 43, 7) }
          ]
        },
        {
          mechanic: 'Laws of Wind',
          description: 'LP stacks',
          strats: [
            { role: 'Tank', party: 1, description: 'G1', imageUrl: './ex3/laws-of-wind.webp', mask: getCircleMaskUrl(42, 33, 7) },
            { role: 'Tank', party: 2, description: 'G2', imageUrl: './ex3/laws-of-wind.webp', mask: getCircleMaskUrl(58, 51, 7) },
            { role: 'Healer', party: 1, description: 'G1', imageUrl: './ex3/laws-of-wind.webp', mask: getCircleMaskUrl(42, 33, 7) },
            { role: 'Healer', party: 2, description: 'G2', imageUrl: './ex3/laws-of-wind.webp', mask: getCircleMaskUrl(58, 51, 7) },
            { role: 'Melee', party: 1, description: 'G1', imageUrl: './ex3/laws-of-wind.webp', mask: getCircleMaskUrl(42, 33, 7) },
            { role: 'Melee', party: 2, description: 'G2', imageUrl: './ex3/laws-of-wind.webp', mask: getCircleMaskUrl(58, 51, 7) },
            { role: 'Ranged', party: 1, description: 'G1', imageUrl: './ex3/laws-of-wind.webp', mask: getCircleMaskUrl(42, 33, 7) },
            { role: 'Ranged', party: 2, description: 'G2', imageUrl: './ex3/laws-of-wind.webp', mask: getCircleMaskUrl(58, 51, 7) }
          ]
        },
        {
          mechanic: 'Chain Debuff',
          description: 'Start center, then DPS N, Supports S',
          strats: [
            { role: 'Tank', party: 1, description: 'South', imageUrl: './ex3/chain-debuff.webp', mask: getCircleMaskUrl(36, 65, 7) },
            { role: 'Tank', party: 2, description: 'South', imageUrl: './ex3/chain-debuff.webp', mask: getCircleMaskUrl(36, 65, 7) },
            { role: 'Healer', party: 1, description: 'South', imageUrl: './ex3/chain-debuff.webp', mask: getCircleMaskUrl(36, 65, 7) },
            { role: 'Healer', party: 2, description: 'South', imageUrl: './ex3/chain-debuff.webp', mask: getCircleMaskUrl(36, 65, 7) },
            { role: 'Melee', party: 1, description: 'North', imageUrl: './ex3/chain-debuff.webp', mask: getCircleMaskUrl(63, 18, 7) },
            { role: 'Melee', party: 2, description: 'North', imageUrl: './ex3/chain-debuff.webp', mask: getCircleMaskUrl(63, 18, 7) },
            { role: 'Ranged', party: 1, description: 'North', imageUrl: './ex3/chain-debuff.webp', mask: getCircleMaskUrl(63, 18, 7) },
            { role: 'Ranged', party: 2, description: 'North', imageUrl: './ex3/chain-debuff.webp', mask: getCircleMaskUrl(63, 18, 7) }
          ]
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
          description: 'Fan spreads, dodge between for second hit',
          strats: [
            { role: 'Tank', party: 1, description: 'Northwest Corner', imageUrl: './ex3/fan-out-spreads.webp', mask: getCircleMaskUrl(28, 21, 4) },
            { role: 'Tank', party: 2, description: 'Northeast Corner', imageUrl: './ex3/fan-out-spreads.webp', mask: getCircleMaskUrl(72, 19, 4) },
            { role: 'Healer', party: 1, description: 'West', imageUrl: './ex3/fan-out-spreads.webp', mask: getCircleMaskUrl(31, 35, 4) },
            { role: 'Healer', party: 2, description: 'East', imageUrl: './ex3/fan-out-spreads.webp', mask: getCircleMaskUrl(68, 33, 4) },
            { role: 'Melee', party: 1, description: 'West of Center', imageUrl: './ex3/fan-out-spreads.webp', mask: getCircleMaskUrl(44, 52, 4) },
            { role: 'Melee', party: 2, description: 'East of Center', imageUrl: './ex3/fan-out-spreads.webp', mask: getCircleMaskUrl(55, 53, 4) },
            { role: 'Ranged', party: 1, description: 'Southwest', imageUrl: './ex3/fan-out-spreads.webp', mask: getCircleMaskUrl(36, 45, 4) },
            { role: 'Ranged', party: 2, description: 'Southeast', imageUrl: './ex3/fan-out-spreads.webp', mask: getCircleMaskUrl(63, 47, 4) }
          ]
        }
      ]
    },
    {
      phaseName: 'Earth Phase',
      mechs: [
        {
          mechanic: 'Laws of Earth',
          description: 'Float to middle',
          imageUrl: './ex3/laws-of-earth.webp'
        },
        {
          mechanic: 'Towers',
          description: 'G1 West, G2 East\nGround before towers',
          strats: [
            { role: 'Tank', party: 1, description: 'West platform, NE', imageUrl: './ex3/8-towers.webp', mask: getCircleMaskUrl(40.9, 31.9, 4) },
            { role: 'Tank', party: 2, description: 'East platform, NW', imageUrl: './ex3/8-towers.webp', mask: getCircleMaskUrl(59.3, 32.3, 4) },
            { role: 'Healer', party: 1, description: 'West platform, SE', imageUrl: './ex3/8-towers.webp', mask: getCircleMaskUrl(40.9, 57.8, 4) },
            { role: 'Healer', party: 2, description: 'East platform, SW', imageUrl: './ex3/8-towers.webp', mask: getCircleMaskUrl(59.2, 57.9, 4) },
            { role: 'Melee', party: 1, description: 'West platform, NW', imageUrl: './ex3/8-towers.webp', mask: getCircleMaskUrl(35.6, 31.9, 4) },
            { role: 'Melee', party: 2, description: 'East platform, NE', imageUrl: './ex3/8-towers.webp', mask: getCircleMaskUrl(64.7, 32, 4) },
            { role: 'Ranged', party: 1, description: 'West platform, SW', imageUrl: './ex3/8-towers.webp', mask: getCircleMaskUrl(35.6, 57.8, 4) },
            { role: 'Ranged', party: 2, description: 'East platform, SE', imageUrl: './ex3/8-towers.webp', mask: getCircleMaskUrl(64.5, 58.2, 4) }
          ]
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
          strats: [
            { role: 'Tank', party: 1, description: 'West platform, NE', imageUrl: './ex3/meteors-1st.webp', mask: getCircleMaskUrl(41.3, 35.9, 4) },
            { role: 'Tank', party: 2, description: 'East platform, NW', imageUrl: './ex3/meteors-1st.webp', mask: getCircleMaskUrl(58.5, 35.9, 4) },
            { role: 'Healer', party: 1, description: 'West platform, SE', imageUrl: './ex3/meteors-1st.webp', mask: getCircleMaskUrl(41.2, 49, 4) },
            { role: 'Healer', party: 2, description: 'East platform, SW', imageUrl: './ex3/meteors-1st.webp', mask: getCircleMaskUrl(58.4, 49, 4) },
            { role: 'Melee', party: 1, description: 'West platform, NW', imageUrl: './ex3/meteors-1st.webp', mask: getCircleMaskUrl(35.3, 35.9, 4) },
            { role: 'Melee', party: 2, description: 'East platform, NE', imageUrl: './ex3/meteors-1st.webp', mask: getCircleMaskUrl(65.1, 35.9, 4) },
            { role: 'Ranged', party: 1, description: 'West platform, SW', imageUrl: './ex3/meteors-1st.webp', mask: getCircleMaskUrl(35.3, 49, 4) },
            { role: 'Ranged', party: 2, description: 'East platform, SE', imageUrl: './ex3/meteors-1st.webp', mask: getCircleMaskUrl(65.1, 49, 4) }
          ]
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
          description: 'Go to tethered triangle\nDiagram has CCW (left), can also be CW (right)\nStand on waymark if you have them',
          imageUrl: './ex3/coronation.webp'
        },
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
          description: 'Stay stacked, mit, ignore flares/doritos\nKBI after',
          imageUrl: './ex3/mit-authority-stack.webp'
        },
      ]
    },
    {
      phaseName: 'Ice Phase',
      description: 'Skippable, will go directly into Radical Shift if low enough before cast',
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
          mechanic: 'Icicles (Fixed bridge)',
          description: 'Outer tethers = North bridge, Inner tethers = South bridge',
          imageUrl: './ex3/icicles-2nd.webp'
        },
        {
          mechanic: 'Stretch Tethers',
          description: 'After, go back mid, use same bridge as before, reverse order',
          imageUrl: './ex3/legitimate-force-ice.webp'
        },
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
      phaseName: 'Radical Shift',
      mechs: [
        {
          mechanic: 'Radical Shift',
          description: 'Read element rotation, adjust to incoming platform\nIf AFK strat, use markers, THMR front to back',
          imageUrl: './ex3/radical-shift-afk.webp'
        },
        {
          mechanic: 'Dimensional Distortion',
          description: 'Dodge Exaflares',
          imageUrl: './ex3/exaflares.webp'
        },
      ]
    }
  ]
};

export const ex3Strats: Strat[] = [hector];
