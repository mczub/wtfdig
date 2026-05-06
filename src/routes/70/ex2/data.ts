import type { Strat, FightConfig, MechanicStrat } from '$lib/types';
import { getCircleMaskUrl, getMultiCircleMaskUrl, getRectMaskUrl } from '$lib/utils';

// ============================================================
// Fight Config
// ============================================================

export const ex2FightConfig: FightConfig = {
  fightKey: 'ex2',
  title: 'Everkeep (Extreme)',
  abbreviatedTitle: 'EX2',
  subtitle: 'EX2 Patch 7.0',
  cheatsheetTitle: 'EX2 Cheatsheet',
  strats: {
    conga: {
      label: 'Conga/Hector'
    }
  },
  defaultStratName: 'conga',
  timeline: [
    { mechName: 'Start', mechType: 'Start', startTimeMs: 0 },
    { mechName: 'Actualize', mechType: 'Raidwide', startTimeMs: 11000 },
    { mechName: 'Multidirectional Divide', mechType: 'Mechanic', startTimeMs: 21000 },
    { mechName: 'Forward/Backward Half', mechType: 'Mechanic', startTimeMs: 28000 },
    { mechName: 'Multidirectional Divide', mechType: 'Mechanic', startTimeMs: 43000 },
    { mechName: 'Regicidal Rage', mechType: 'Tankbuster', startTimeMs: 51000 },
    { mechName: 'Dawn of an Age', mechType: 'Raidwide', startTimeMs: 67000 },
    { mechName: 'Vollok', mechType: 'Mechanic', startTimeMs: 84000 },
    { mechName: 'Sync', mechType: 'Mechanic', startTimeMs: 93000 },
    { mechName: 'Half Full', mechType: 'Mechanic', startTimeMs: 102000 },
    { mechName: 'Chasm of Vollok', mechType: 'Mechanic', startTimeMs: 107000 },
    { mechName: 'Greater Gateway', mechType: 'Mechanic', startTimeMs: 113000 },
    { mechName: 'Blade Warp', mechType: 'Mechanic', startTimeMs: 121000 },
    { mechName: 'Forged Track', mechType: 'Mechanic', startTimeMs: 129000 },
    { mechName: 'Actualize', mechType: 'Raidwide', startTimeMs: 146000 },
    { mechName: 'Projection of Triumph', mechType: 'Mechanic', startTimeMs: 159000 },
    { mechName: 'Forward/Backward Half', mechType: 'Mechanic', startTimeMs: 183000 },
    { mechName: 'Projection of Turmoil', mechType: 'Mechanic', startTimeMs: 209000 },
    { mechName: 'Bitter Whirlwind', mechType: 'Tankbuster', startTimeMs: 260000 },
    { mechName: 'Dawn of an Age', mechType: 'Raidwide', startTimeMs: 279000 },
    { mechName: 'Drum of Vollok', mechType: 'Mechanic', startTimeMs: 296000 },
    { mechName: 'Vollok', mechType: 'Mechanic', startTimeMs: 311000 },
    { mechName: 'Sync', mechType: 'Mechanic', startTimeMs: 320000 },
    { mechName: 'Chasm of Vollok + Aero III', mechType: 'Mechanic', startTimeMs: 334000 },
    { mechName: 'Forward/Backward Half', mechType: 'Mechanic', startTimeMs: 340000 },
    { mechName: "Duty's Edge", mechType: 'Mechanic', startTimeMs: 352000 },
    { mechName: 'Burning Chains', mechType: 'Mechanic', startTimeMs: 366000 },
    { mechName: 'Actualize', mechType: 'Raidwide', startTimeMs: 386000 },
    { mechName: 'Projection of Triumph', mechType: 'Mechanic', startTimeMs: 399000 },
    { mechName: 'Half Circuit', mechType: 'Mechanic', startTimeMs: 419000 },
    { mechName: 'Regicidal Rage', mechType: 'Tankbuster', startTimeMs: 435000 },
    { mechName: 'Projection of Turmoil', mechType: 'Mechanic', startTimeMs: 450000 },
    { mechName: 'Half Full', mechType: 'Mechanic', startTimeMs: 471000 },
    { mechName: 'Half Full', mechType: 'Mechanic', startTimeMs: 480000 },
    { mechName: 'Half Full', mechType: 'Mechanic', startTimeMs: 491000 },
    { mechName: 'Bitter Whirlwind', mechType: 'Tankbuster', startTimeMs: 501000 },
    { mechName: 'Dawn of an Age', mechType: 'Raidwide', startTimeMs: 521000 },
    { mechName: 'Vollok', mechType: 'Mechanic', startTimeMs: 538000 },
    { mechName: 'Sync', mechType: 'Mechanic', startTimeMs: 546000 },
    { mechName: 'Chasm of Vollok', mechType: 'Mechanic', startTimeMs: 560000 },
    { mechName: "Duty's Edge", mechType: 'Mechanic', startTimeMs: 563000 },
    { mechName: 'Greater Gateway', mechType: 'Mechanic', startTimeMs: 580000 },
    { mechName: 'Blade Warp', mechType: 'Mechanic', startTimeMs: 588000 },
    { mechName: 'Forged Track', mechType: 'Mechanic', startTimeMs: 596000 },
    { mechName: 'Chasm of Vollok', mechType: 'Mechanic', startTimeMs: 614000 },
    { mechName: 'Actualize', mechType: 'Raidwide', startTimeMs: 614000 },
    { mechName: 'Multidirectional Divide', mechType: 'Mechanic', startTimeMs: 627000 },
    { mechName: 'Forward/Backward Half', mechType: 'Mechanic', startTimeMs: 643000 },
    { mechName: 'Enrage', mechType: 'Enrage', startTimeMs: 650000 }
  ]
};

// ============================================================
// Strat: Conga/Hector
// ============================================================

export const conga: Strat = {
  stratName: 'conga',
  description: '',
  stratUrl: {
    'Video by Hector Hectorson': 'https://www.youtube.com/watch?v=Du3QNaUkIt0',
    'Conga Turmoil Raidplan': 'https://raidplan.io/plan/kOzWlEJdezZxbmL9',
    'Icy Veins Guide': 'https://www.icy-veins.com/ffxiv/everkeep-extreme-trial-guide'
  },
  strats: [
    {
      phaseName: 'Setup',
      mechs: [
        {
          mechanic: 'Light Parties',
          imageUrl: './ex1/hector-setup-1.webp'
        },
        {
          mechanic: 'Partners (HTTH/RMMR)',
          imageUrl: './ex1/hector-setup-2.webp'
        },
        {
          mechanic: 'Conga',
          imageUrl: './ex1/hector-setup-3.webp'
        }
      ]
    },
    {
      phaseName: 'Phase 1',
      mechs: [
        {
          mechanic: 'Multidirectional Divide',
          description:
            'Thick + thin line AoEs from intercardinals\nDodge to checkerboard safe spot in a quadrant',
          imageUrl: './ex2/multidirectional-divide.webp'
        },
        {
          mechanic: 'Backward Half',
          description: 'Behind boss, non-glowing side',
          imageUrl: './ex2/backward-half.webp'
        },
        {
          mechanic: 'Forward Half',
          description: 'Front of boss, glowing side',
          imageUrl: './ex2/forward-half.webp'
        },
        {
          mechanic: 'Regicidal Rage',
          description: 'Tanks grab tethers away from party',
          imageUrl: './ex2/regicidal-rage.webp'
        }
      ]
    },
    {
      phaseName: 'Phase 1: Platform',
      mechs: [
        {
          mechanic: 'Vollok + Sync + Half Full',
          description:
            'Sword patterns spawn on 4 outer platforms\nBoss picks 2, swords project onto main platform\nBoss does half-room cleave simultaneously',
          imageUrl: './ex2/vollok-p1.webp'
        },
        {
          mechanic: 'Greater Gateway',
          description: 'Fire = expands to 3 lanes\nWind = 2-square knockback from lane',
          imageUrl: './ex2/greater-gateway.webp'
        },
        {
          mechanic: 'Forged Track',
          description: 'Position on safe tiles\nUse KBI or take wind knockback to safe',
          imageUrl: './ex2/forged-track.webp'
        },
        {
          mechanic: 'Chasm of Vollok',
          description: 'One player per tile',
          imageUrl: './ex2/chasm-of-vollok.webp'
        }
      ]
    },
    {
      phaseName: 'Phase 2: Triumph',
      mechs: [
        {
          mechanic: 'Projection of Triumph',
          description:
            'One side starts donut, other side circle\nAvoid donuts on swords, avoid circles between swords',
          imageUrl: './ex2/projection-of-triumph.webp'
        },
        {
          mechanic: 'Triumph + Half Cleave',
          description: 'After 3rd set of AoEs, Backward/Forward Half',
          imageUrl: './ex2/triumph-cleave-combo.webp'
        }
      ]
    },
    {
      phaseName: 'Projection of Turmoil',
      mechs: [
        {
          mechanic: 'Setup',
          description: 'Tanks at top take first hits solo\nWait for vulns to fall off',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'MT — north position\nTake 1st wall hit solo with heavy mit',
              imageUrl: './ex2/conga-setup.webp',
              mask: getCircleMaskUrl(61.9, 2.2, 5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'OT — east position\nTake your wall hit solo with personal mit',
              imageUrl: './ex2/conga-setup.webp',
              mask: getCircleMaskUrl(92.3, 22.7, 5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Stack with tank after their solo hit\nFollow line after your hit',
              imageUrl: './ex2/conga-setup.webp',
              mask: getCircleMaskUrl(67.6, 23.7, 5)
            },
            {
              role: 'Melee',
              party: 2,
              description: '2nd in line behind M1\nFollow line after your hit',
              imageUrl: './ex2/conga-setup.webp',
              mask: getCircleMaskUrl(57.3, 34.8, 5)
            },
            {
              role: 'Healer',
              party: 1,
              description: '3rd in line\nFollow line after your hit',
              imageUrl: './ex2/conga-setup.webp',
              mask: getCircleMaskUrl(48.7, 47.4, 5)
            },
            {
              role: 'Healer',
              party: 2,
              description: '4th in line\nFollow line after your hit',
              imageUrl: './ex2/conga-setup.webp',
              mask: getCircleMaskUrl(38.4, 58.5, 5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: '5th in line\nFollow line after your hit',
              imageUrl: './ex2/conga-setup.webp',
              mask: getCircleMaskUrl(28.9, 69.4, 5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Last in line, can plant',
              imageUrl: './ex2/conga-setup.webp',
              mask: getCircleMaskUrl(21.0, 79.7, 5)
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Phase 2: Platform',
      mechs: [
        {
          mechanic: 'Drum of Vollok',
          description:
            '2-person stacks on 4 players\nKnocks back partner to other platform\nLine up HTTH/RMMR',
          imageUrl: './ex2/drum-of-vollok.webp'
        },
        {
          mechanic: 'Vollok',
          description: '2 giant swords each cover a quadrant',
          imageUrl: './ex2/vollok-p2.webp'
        },
        {
          mechanic: 'Sync + Pyramids',
          description: 'Swords and yellow pyramids project onto other platform'
        },
        {
          mechanic: 'Half + Tornado',
          description:
            'Random Forward/Backward Half faces a platform\nUse tornado to get knocked to other platform if needed',
          imageUrl: './ex2/tornado-tile.webp'
        },
        {
          mechanic: 'Burning Chains',
          description: `Supports tethered to DPS\nUse tornado to stretch if you didn't before`,
          imageUrl: './ex2/burning-chains.webp'
        }
      ]
    },
    {
      phaseName: 'Phase 3',
      mechs: [
        {
          mechanic: 'Triumph + Half Circuit',
          description: 'Same Triumph dodge\nAfter 2nd set, either donut or circle AoE',
          imageUrl: './ex2/half-circuit.webp'
        },
        {
          mechanic: 'Regicidal Rage',
          description: 'Party stacks behind boss, tanks grab tethers'
        },
        {
          mechanic: 'Projection of Turmoil',
          description: 'Same conga as before\nDodge half-room cleaves'
        },
        {
          mechanic: 'Vollok + Pyramids',
          description: 'Same as Phase 1 platforms'
        },
        {
          mechanic: "Duty's Edge",
          description: 'Big line stack'
        },
        {
          mechanic: 'Greater Gateway',
          description: 'Same as Phase 1 platforms'
        },
        {
          mechanic: 'Enrage',
          description: 'Final Actualize — kill before resolution'
        }
      ]
    }
  ]
};

export const ex2Strats: Strat[] = [conga];
