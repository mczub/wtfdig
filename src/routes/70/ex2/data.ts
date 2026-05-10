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
      label: 'Conga/Hector',
      badges: [{ text: 'NA', class: 'na-badge' }]
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
    'Projection of Turmoil braindead Raidplan': 'https://raidplan.io/plan/kOzWlEJdezZxbmL9',
    'Icy Veins Guide': 'https://www.icy-veins.com/ffxiv/everkeep-extreme-trial-guide'
  },
  strats: [
    {
      phaseName: 'Setup',
      mechs: [
        {
          mechanic: 'Light Parties',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: '',
              imageUrl: './ex2/setup-partners.webp',
              mask: getCircleMaskUrl(45.4, 78.7, 7)
            },
            {
              role: 'Tank',
              party: 2,
              description: '',
              imageUrl: './ex2/setup-partners.webp',
              mask: getCircleMaskUrl(55.8, 78, 7)
            },
            {
              role: 'Healer',
              party: 1,
              description: '',
              imageUrl: './ex2/setup-partners.webp',
              mask: getCircleMaskUrl(45.4, 78.7, 7)
            },
            {
              role: 'Healer',
              party: 2,
              description: '',
              imageUrl: './ex2/setup-partners.webp',
              mask: getCircleMaskUrl(55.8, 78, 7)
            },
            {
              role: 'Melee',
              party: 1,
              description: '',
              imageUrl: './ex2/setup-partners.webp',
              mask: getCircleMaskUrl(45.4, 78.7, 7)
            },
            {
              role: 'Melee',
              party: 2,
              description: '',
              imageUrl: './ex2/setup-partners.webp',
              mask: getCircleMaskUrl(55.8, 78, 7)
            },
            {
              role: 'Ranged',
              party: 1,
              description: '',
              imageUrl: './ex2/setup-partners.webp',
              mask: getCircleMaskUrl(45.4, 78.7, 7)
            },
            {
              role: 'Ranged',
              party: 2,
              description: '',
              imageUrl: './ex2/setup-partners.webp',
              mask: getCircleMaskUrl(55.8, 78, 7)
            }
          ]
        },
        {
          mechanic: 'Partners (HTTH/RMMR)',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Middle North w/ M1',
              imageUrl: './ex2/setup-htth.webp',
              mask: getCircleMaskUrl(52.3, 45.2, 6)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Middle South w/ M2',
              imageUrl: './ex2/setup-htth.webp',
              mask: getCircleMaskUrl(52.3, 54.6, 6)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'North w/ R1',
              imageUrl: './ex2/setup-htth.webp',
              mask: getCircleMaskUrl(52.3, 35.9, 6)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'South w/ R2',
              imageUrl: './ex2/setup-htth.webp',
              mask: getCircleMaskUrl(52.3, 63.9, 6)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Middle North w/ MT',
              imageUrl: './ex2/setup-htth.webp',
              mask: getCircleMaskUrl(52.3, 45.2, 6)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Middle South w/ OT',
              imageUrl: './ex2/setup-htth.webp',
              mask: getCircleMaskUrl(52.3, 54.6, 6)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'North w/ H1',
              imageUrl: './ex2/setup-htth.webp',
              mask: getCircleMaskUrl(52.3, 35.9, 6)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'South w/ H2',
              imageUrl: './ex2/setup-htth.webp',
              mask: getCircleMaskUrl(52.3, 63.9, 6)
            }
          ]
        },
        {
          mechanic: 'Conga',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'North edge, slightly West',
              imageUrl: './ex2/conga-setup.webp',
              mask: getCircleMaskUrl(45.8, 12.8, 4)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'North edge, slightly East',
              imageUrl: './ex2/conga-setup.webp',
              mask: getCircleMaskUrl(56.6, 12.8, 4)
            },
            {
              role: 'Melee',
              party: 1,
              description: '1st in line',
              imageUrl: './ex2/conga-setup.webp',
              mask: getCircleMaskUrl(51.3, 24.0, 4)
            },
            {
              role: 'Melee',
              party: 2,
              description: '2nd in line',
              imageUrl: './ex2/conga-setup.webp',
              mask: getCircleMaskUrl(51.2, 35.4, 4)
            },
            {
              role: 'Healer',
              party: 1,
              description: '3rd in line',
              imageUrl: './ex2/conga-setup.webp',
              mask: getCircleMaskUrl(51.2, 46.9, 4)
            },
            {
              role: 'Healer',
              party: 2,
              description: '4th in line',
              imageUrl: './ex2/conga-setup.webp',
              mask: getCircleMaskUrl(51.2, 57.9, 4)
            },
            {
              role: 'Ranged',
              party: 1,
              description: '5th in line',
              imageUrl: './ex2/conga-setup.webp',
              mask: getCircleMaskUrl(51.3, 69.8, 4)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Last in line',
              imageUrl: './ex2/conga-setup.webp',
              mask: getCircleMaskUrl(51.2, 80.4, 4)
            }
          ]
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
          imageUrl: './ex2/half-full-platform.webp'
        },
        {
          mechanic: 'Greater Gateway',
          description: 'Fire = expands to 3 lanes\nWind = 2-square knockback from lane',
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
              description: 'Take 1st wall hit solo with heavy mit',
              imageUrl: './ex2/projection-of-turmoil-conga.webp',
              mask: getCircleMaskUrl(45.8, 12.8, 4)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Take 1st wall hit solo with personal mit',
              imageUrl: './ex2/projection-of-turmoil-conga.webp',
              mask: getCircleMaskUrl(56.3, 12.8, 4)
            },
            {
              role: 'Melee',
              party: 1,
              description: '1st in line with tanks\nFollow line after your hit',
              imageUrl: './ex2/projection-of-turmoil-conga.webp',
              mask: getCircleMaskUrl(51.6, 24.0, 4)
            },
            {
              role: 'Melee',
              party: 2,
              description: '2nd in line behind M1\nFollow line after your hit',
              imageUrl: './ex2/projection-of-turmoil-conga.webp',
              mask: getCircleMaskUrl(51.5, 35.0, 4)
            },
            {
              role: 'Healer',
              party: 1,
              description: '3rd in line\nFollow line after your hit',
              imageUrl: './ex2/projection-of-turmoil-conga.webp',
              mask: getCircleMaskUrl(51.2, 46.7, 4)
            },
            {
              role: 'Healer',
              party: 2,
              description: '4th in line\nFollow line after your hit',
              imageUrl: './ex2/projection-of-turmoil-conga.webp',
              mask: getCircleMaskUrl(51.2, 58.3, 4)
            },
            {
              role: 'Ranged',
              party: 1,
              description: '5th in line\nFollow line after your hit',
              imageUrl: './ex2/projection-of-turmoil-conga.webp',
              mask: getCircleMaskUrl(51.3, 70.0, 4)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Last in line, can plant',
              imageUrl: './ex2/projection-of-turmoil-conga.webp',
              mask: getCircleMaskUrl(51.2, 81.6, 4)
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
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'MT pair w/ M1\nKnocks M1 across to other platform',
              imageUrl: './ex2/drum-of-vollok.webp',
              mask: getCircleMaskUrl(35.5, 45.8, 6)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'OT pair w/ M2\nKnocks M2 across to other platform',
              imageUrl: './ex2/drum-of-vollok.webp',
              mask: getCircleMaskUrl(35.9, 55.1, 6)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'H1 pair w/ R1\nKnocks R1 across to other platform',
              imageUrl: './ex2/drum-of-vollok.webp',
              mask: getCircleMaskUrl(35.6, 35.9, 6)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'H2 pair w/ R2\nKnocks R2 across to other platform',
              imageUrl: './ex2/drum-of-vollok.webp',
              mask: getCircleMaskUrl(35.6, 64.2, 6)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'M1 pair w/ MT\nGet knocked across to other platform',
              imageUrl: './ex2/drum-of-vollok.webp',
              mask: getCircleMaskUrl(35.5, 45.8, 6)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'M2 pair w/ OT\nGet knocked across to other platform',
              imageUrl: './ex2/drum-of-vollok.webp',
              mask: getCircleMaskUrl(35.9, 55.1, 6)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'R1 pair w/ H1\nGet knocked across to other platform',
              imageUrl: './ex2/drum-of-vollok.webp',
              mask: getCircleMaskUrl(35.6, 35.9, 6)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'R2 pair w/ H2\nGet knocked across to other platform',
              imageUrl: './ex2/drum-of-vollok.webp',
              mask: getCircleMaskUrl(35.6, 64.2, 6)
            }
          ]
        },
        {
          mechanic: 'Vollok',
          description: '2 giant swords each cover a quadrant',
          imageUrl: './ex2/vollok-p2.webp'
        },
        {
          mechanic: 'Sync + Pyramids',
          description: 'Swords and yellow pyramids project onto other platform',
          imageUrl: './ex2/sync-pyramids.webp'
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
          description: 'Party stacks behind boss, tanks grab tethers',
          imageUrl: './ex2/regicidal-rage-p3.webp'
        },
        {
          mechanic: 'Projection of Turmoil',
          description: 'Same conga as before\nDodge half-room cleaves',
          imageUrl: './ex2/turmoil-half-full.webp'
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
