import type { FightConfig, PhaseStrats, Strat } from '$lib/types';

const allP1: PhaseStrats[] = [
  {
    phaseName: 'Setup',
    tag: 'p1',
    description:
      'G1 = Red/Purple, G2 = Yellow/Blue\nUtopian Sky: Role + Fixed Tether (default)\nFall of Faith: Light Party Conga',
    imageUrl: './fru/naur-setup.webp'
  },
  {
    phaseName: 'Cyclonic Break',
    tag: 'p1',
    mechs: [
      {
        mechanic: 'Cyclonic Break (Lightning)',
        description: 'Lightning = Spreads\nSupports CCW, DPS CW\nCones repeat - dodge Back after 2nd',
        imageUrl: './fru/naur-cyclonic-lightning.webp'
      },
      {
        mechanic: 'Cyclonic Break (Fire)',
        description: 'Fire = Partners\nSupports CCW, DPS CW\nCones repeat - dodge Back after 2nd',
        imageUrl: './fru/naur-cyclonic-fire.webp'
      }
    ]
  },
  {
    phaseName: 'Utopian Sky',
    tag: 'p1',
    mechs: [
      {
        mechanic: 'Utopian Sky (Tank Buster)',
        description:
          'MT/OT debuff - AoE on expire hits closest player\nTanks stack 1 wall-notch toward each other',
        imageUrl: './fru/naur-utopia-tb.webp'
      },
      {
        mechanic: 'Clones + Element',
        description:
          'Fire = Light Parties, Lightning = Spreads\nClone Hand Up = move In toward boss\nDPS spread 4 wall-notches from shurikens',
        imageUrl: './fru/naur-utopia-clones.webp'
      },
      {
        mechanic: 'Burnt Strike + Tethers',
        description:
          'Burnt Strike KB through Middle\n2 players tethered w/ 4-player Fire stacks\nShort Tether = South, Long Tether = North',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'If 2 DPS tethered: MT flex South',
            imageUrl: './fru/naur-utopia-tethers.webp'
          },
          { role: 'Tank', party: 2, description: '', imageUrl: './fru/naur-utopia-tethers.webp' },
          { role: 'Healer', party: 1, description: '', imageUrl: './fru/naur-utopia-tethers.webp' },
          { role: 'Healer', party: 2, description: '', imageUrl: './fru/naur-utopia-tethers.webp' },
          {
            role: 'Melee',
            party: 1,
            description: 'If 2 Supports tethered: M1 flex North',
            imageUrl: './fru/naur-utopia-tethers.webp'
          },
          { role: 'Melee', party: 2, description: '', imageUrl: './fru/naur-utopia-tethers.webp' },
          { role: 'Ranged', party: 1, description: '', imageUrl: './fru/naur-utopia-tethers.webp' },
          { role: 'Ranged', party: 2, description: '', imageUrl: './fru/naur-utopia-tethers.webp' }
        ]
      }
    ]
  },
  {
    phaseName: 'Fall of Faith',
    tag: 'p1',
    mechs: [
      {
        mechanic: 'Fall of Faith',
        description:
          'G1 West, G2 East\nTether order: R1, H1, M1, MT, OT, M2, H2, R2\n1, 3 → West / 2, 4 → East\nLightning = 3 Cones, Fire = 1 Stack Cone\nOnly Melee/Tanks flex sides',
        imageUrl: './fru/naur-fof.webp'
      },
      {
        mechanic: 'Bait Positions',
        description:
          'Tether positions: 1st = Boss, 2nd = NW, 3rd = N, 4th = NE\nOther Tether = Middle Bait\nFiller closest to E/W = North Bait\nFiller furthest from E/W = South Bait',
        imageUrl: './fru/naur-fof-baits.webp'
      }
    ]
  },
  {
    phaseName: 'Final Towers',
    tag: 'p1',
    mechs: [
      {
        mechanic: 'Towers',
        description:
          'Lightning = Stay Out, Fire = KB into tower\nFixed N→S: H1, Caster, H2\nFills N→S: M1, M2, Phys Ranged',
        imageUrl: './fru/naur-final-towers.webp'
      }
    ]
  }
];

const allP2: PhaseStrats[] = [
  {
    phaseName: 'Diamond Dust',
    tag: 'p2',
    mechs: [
      {
        mechanic: 'Partner Swap',
        description:
          'Color pairs\nIf 1st circles are on Letters, Unmarked close on Letters, Marked on Numbers\nIf 1st circles on Numbers, Unmarked close on Numbers, Marked on Letters',
        imageUrl: './fru/naur-dd-partner-swap.webp'
      },
      {
        mechanic: 'Scythe Kick',
        description:
          'Reap = Scythe Kick = Close Safe\nProteans bait super close\nMarked: Drop starburst on inner ring after Scythe, dodge back Center',
        imageUrl: './fru/naur-dd-scythe.webp'
      },
      {
        mechanic: 'Axe Kick',
        description:
          'Cleave = Axe Kick = Far Safe\nProteans bait just beyond outer ring\nProteans can move in as soon as Axe Kick castbar finishes\nMarked: Drop starburst on edge, then move in',
        imageUrl: './fru/naur-dd-axe.webp'
      },
      {
        mechanic: 'Knockback',
        description: 'Get KBed to 1st circles\nG1 = Red/Purple, G2 = Yellow/Blue',
        imageUrl: './fru/naur-dd-stacks.webp'
      },
      {
        mechanic: 'After Knockback',
        description:
          '4-stacks with group\nRotate AWAY from the Shiva inside the arena unless cursed\nLook away from Shiva clone outside the arena',
        imageUrl: './fru/naur-dd-rotate.webp'
      },
      {
        mechanic: 'Cursed Pattern',
        description:
          'Shiva sits on top of one group at KB\nBoth groups rotate CW after Star AoEs\nGroup rotating TOWARD Shiva slides across before Silence/Stillness',
        imageUrl: './fru/naur-dd-cursed.webp'
      },
      {
        mechanic: 'Silence / Stillness',
        description:
          'Silence - slide TOWARD after cast bar finishes\nStillness - slide TOWARD as soon as you recognize, then slide AWAY after cast\nFollowed by Hallowed Ray line-stack',
        imageUrl: './fru/naur-dd-silence.webp'
      },
    ]
  },
  {
    phaseName: 'Mirror Mirror',
    tag: 'p2',
    mechs: [
      {
        mechanic: 'Mirror Mirror',
        description:
          'Move to nearest Red Mirror - repeats Scythe donut + Proteans\nIf 2 Red Mirrors equidistant: rotate CW to Red\nH1/T1 careful not to cleave each other\nR1/M1 point Proteans Middle',
        imageUrl: './fru/naur-mirror.webp'
      },
      {
        mechanic: 'Banish III',
        description:
          '1 Orb = Partner Stacks\n4 Orbs = Spreads\nHealers spread toward Middle for post-Protean healing',
        imageUrl: './fru/naur-banish.webp'
      }
    ]
  },
  {
    phaseName: 'Light Rampant',
    tag: 'p2',
    mechs: [
      {
        mechanic: 'Setup',
        description:
          'Supports North, DPS South (arc around inner circle)\nH/R West, T/M East\nAOEs use eyes or rotate CW for E/W puddles\nRemaining 6 players adjust to solve tethers',
        imageUrl: './fru/naur-lr-setup.webp'
      },
      {
        mechanic: '3 Support/3 DPS Tethers',
        description:
          '3 Supports/3 DPS = No rotate, adjust so each side has a clear West/Middle/East',
        imageUrl: './fru/naur-lr-3-3.webp'
      },
      {
        mechanic: '2 Support/4 DPS Tethers',
        description:
          '2 Supports/4 DPS = R1 rotate CW to North side\nTethered supports rotate CW to make room',
        imageUrl: './fru/naur-lr-2-4.webp'
      },
      {
        mechanic: '4 Support/2 DPS Tethers',
        description:
          '4 Supports/2 DPS = T2 rotate CW to South side\nTethered DPS rotate CW to make room',
        imageUrl: './fru/naur-lr-4-2.webp'
      },
      {
        mechanic: 'Tether Adjusts',
        description: 'N/S Tethers swap\nNW/NE Tethers swap',
        imageUrl: './fru/naur-lr-swap.webp'
      },
      {
        mechanic: 'Towers + Puddles',
        description: 'Tethers go out to towers\nPuddles go towards Middle, then turn Left after 3rd drop\nMeet up N/S in 4-stacks',
        imageUrl: './fru/naur-lr-towers.webp'
      },
      {
        mechanic: 'Orb Explosions + Final Tower',
        description: 'Dodge into first orb explosions\nGo into tower if you have 2 stacks',
        imageUrl: './fru/naur-lr-explosions.webp'
      },
      {
        mechanic: 'Banish III + Proteans',
        description: 'Banish III (Partners/Spread), then clocks for Proteans after',
        imageUrl: './fru/naur-lr-banish.webp'
      }
    ]
  },
  {
    phaseName: 'Intermission',
    tag: 'p2',
    mechs: [
      {
        mechanic: 'Setup',
        description:
          'T/M out on Cards\nH/R in on Intercards\nDark = small cone, Light = circle AoE (both target closest)',
        imageUrl: './fru/naur-iv-setup.webp'
      },
      {
        mechanic: 'Bait + Tether',
        description: 'Bait AoE, then dodge\nT/M tethered to crystal - leaves puddle\nDon\'t cone Light with Dark',
        imageUrl: './fru/naur-iv-bait.webp'
      },
      {
        mechanic: 'Kill Order',
        description:
          'Only kill Light Crystals\nRanged rotate CW\nH help Melee, R help Tanks\nIce Veil < 50% (Melee LB if needed)',
        imageUrl: './fru/naur-iv-kill.webp'
      }
    ]
  },
];

const allP3: PhaseStrats[] = [
  {
    phaseName: 'UR Cheatsheet',
    tag: 'p3',
    mechs: [
      {
        mechanic: 'Cheatsheet',
        description:
          '',
        strats: [
          { role: 'Tank', party: 1, description: '', imageUrl: './fru/naur-ur-cheat-supp.webp' },
          { role: 'Tank', party: 2, description: '', imageUrl: './fru/naur-ur-cheat-supp.webp' },
          { role: 'Healer', party: 1, description: '', imageUrl: './fru/naur-ur-cheat-supp.webp' },
          { role: 'Healer', party: 2, description: '', imageUrl: './fru/naur-ur-cheat-supp.webp' },
          { role: 'Melee', party: 1, description: '', imageUrl: './fru/naur-ur-cheat-dps.webp' },
          { role: 'Melee', party: 2, description: '', imageUrl: './fru/naur-ur-cheat-dps.webp' },
          { role: 'Ranged', party: 1, description: '', imageUrl: './fru/naur-ur-cheat-dps.webp' },
          { role: 'Ranged', party: 2, description: '', imageUrl: './fru/naur-ur-cheat-dps.webp' }
        ]
      },
    ]
  },
  {
    phaseName: 'Ultimate Relativity',
    tag: 'p3',
    mechs: [
      {
        mechanic: 'Setup',
        description:
          'Healers NW, Tanks NE\nRanged SW, Melees SE\nG1 adjusts for G2 if roles doubled\nYellow Tether Y = North',
        imageUrl: './fru/naur-ur-setup.webp'
      },
      {
        mechanic: '1st Fire / Stack',
        description: '10s Fire spread to spots\nOthers stack Mid',
        imageUrl: './fru/naur-ur-fire1.webp'
      },
      {
        mechanic: '1st Bait / Rewind',
        description:
          '30s bait rotation beams\nOthers place rewind OUT\nWater = tight to beam\nEruption = past traffic light\n20s Supp place rewind inside traffic',
        imageUrl: './fru/naur-ur-bait1.webp'
      },
      {
        mechanic: '2nd Fire / Stack',
        description: '20s Fire spread to spots (move at 4s)\nOthers stack Mid\nIce resolves',
        imageUrl: './fru/naur-ur-fire2.webp'
      },
      {
        mechanic: '2nd Bait / Rewind',
        description: '10s bait beams\n30s place rewind\nEyes face IN (2nd rewinds = all eyes)',
        imageUrl: './fru/naur-ur-bait2.webp'
      },
      {
        mechanic: '3rd Fire / Stack',
        description: '30s Fire spread to spots\nOthers stack Mid',
        imageUrl: './fru/naur-ur-fire3.webp'
      },
      {
        mechanic: '3rd Bait',
        description: '20s bait beams\nEveryone else stay Mid, face Out toward traffic light',
        imageUrl: './fru/naur-ur-bait3.webp'
      },
      {
        mechanic: 'Rewind Time',
        description: 'Eruptions explode Out\nWater stack + Gazes resolve Mid',
        imageUrl: './fru/naur-ur-rewind.webp'
      },
      {
        mechanic: 'Shell Crusher → Pulsar → Dark Halo',
        description: 'Stack Mid for Shell Crusher\nShockwave Pulsar (raidwide)\nDark Halo = shared TB cone',
        imageUrl: './fru/naur-ur-shell.webp'
      }
    ]
  },
  {
    phaseName: 'Sextuple Apoc',
    tag: 'p3',
    mechs: [
      {
        mechanic: 'Setup + Swaps',
        description:
          'Start in boxes - G1 Left, G2 Right (facing Middle)\n6 players get timers: 10s, 29s, 38s\nNeed 1 of each per group\nSwap prio: T1 > T2 > H1 > H2 | M1 > M2 > R1 > R2',
        imageUrl: './fru/naur-apoc-1.webp'
      },
      {
        mechanic: 'Apoc Lights',
        description:
          '2 lights rotate CW or CCW from opposite Cards/Intercards\n2 more lights spawn Mid following same rotation\nMarkers opposite rotation = safe\nT/H = Red/Purple, DPS = Yellow/Blue',
        imageUrl: './fru/naur-apoc-5.webp'
      },
      {
        mechanic: 'Spirit Taker',
        description: 'Spread to your starting box\nMove to your color marker without a light on it',
        imageUrl: './fru/naur-apoc-7.webp'
      },
      {
        mechanic: '1st Explosions',
        description: 'Move to safe markers\nFront-spread: line up on safe marker + opposite-of-origin marker',
        imageUrl: './fru/naur-apoc-8.webp'
      },
      {
        mechanic: '2nd Explosions (Dark Eruption)',
        description: 'Spread near your marker\nIn front = within pizza-slice lines\nBehind = 2.5 wall-notches out\nG1 Left, G2 Right',
        imageUrl: './fru/naur-apoc-9.webp'
      },
      {
        mechanic: '3rd Explosions',
        description: 'Move In to Center\nUse pizza-slice line to avoid 3rd Apocs',
        imageUrl: './fru/naur-apoc-10.webp'
      },
      {
        mechanic: '4th Explosions',
        description: 'Stack in groups of 4\nRe-swap earlier swappers',
        imageUrl: './fru/naur-apoc-11.webp'
      },
      {
        mechanic: '5th Explosions',
        description: '29s 4-stacks resolve\nDarkest Dance - T2 baits TB out',
        imageUrl: './fru/naur-apoc-12.webp'
      },
      {
        mechanic: '6th Explosions (Far Bait)',
        description: 'Lights started on Letters → other Letters safe\nCloser Letter is the bait',
        imageUrl: './fru/naur-apoc-13.webp'
      },
      {
        mechanic: 'Knockback',
        description:
          'G1 Left, G2 Right facing Gaia\nDon\'t get knocked into the wall',
        imageUrl: './fru/naur-apoc-15.webp'
      },
      {
        mechanic: 'Final Stacks',
        description: 'Melee/Tanks can gap close\nStep back to meet Ranged for the stack',
        imageUrl: './fru/naur-apoc-16.webp'
      }
    ]
  }
];

const allP4: PhaseStrats[] = [
  {
    phaseName: 'Darklit Dragonsong',
    tag: 'p4',
    mechs: [
      {
        mechanic: 'Setup',
        description: 'Memory Crystal spawns N\nTank pull Shiva to Mid',
        imageUrl: './fru/naur-dl-setup.webp'
      },
      {
        mechanic: 'Akh Rhai',
        description:
          'Stack Mid, dodge when wings sprout to Darklit spots\nHealers NW, Tanks NE\nRanged SW, Melees SE',
        imageUrl: './fru/naur-dl-akh-rhai.webp'
      },
      {
        mechanic: 'Darklit Start',
        description:
          '1 Healer, 1 Tank, 2 DPS get tethered\nNeed to form Botwie with tethers',
        imageUrl: './fru/naur-dl-akh-rhai.webp'
      },
      {
        mechanic: 'Bowtie',
        description: 'Tethers start as Bowtie → no swaps',
        imageUrl: './fru/naur-dl-bowtie.webp'
      },
      {
        mechanic: 'Hourglass',
        description: 'Tethers start as Hourglass → NE + SW swap\n(West DPS + Tank swap)',
        imageUrl: './fru/naur-dl-hourglass.webp'
      },
      {
        mechanic: 'Box',
        description: 'Tethers start as Box → East-most swap\n(East DPS + Tank swap)',
        imageUrl: './fru/naur-dl-box.webp'
      },
      {
        mechanic: 'Protean Adjusts',
        description:
          'Untethered Tank = always East\nUntethered Healer = always West\nIf 2 DPS untethered: G1 DPS adjust other side\n',
        imageUrl: './fru/naur-dl-same-role.webp'
      },
      {
        mechanic: 'Water Swap',
        description: 'If both Waters are on the same side North/South, non-tethers swap vertically\nSwap during Path of Light cast',
        imageUrl: './fru/naur-dl-towers.webp'
      },
      {
        mechanic: 'Towers + Proteans',
        description: 'Tethers soak Towers N/S\nNon-Tethers close-bait Proteans from Shiva',
        imageUrl: './fru/naur-dl-towers.webp'
      },
      {
        mechanic: 'Spirit Taker',
        description:
          'Spread for random Spirit Taker - avoid Crystal N\nTethered → Intercards\nUntethered DPS In, Untethered Supp Out\nEast DPS can hide under boss',
        imageUrl: './fru/naur-dl-spirit-taker.webp'
      },
      {
        mechanic: 'Water Stacks',
        description:
          'Watch Shiva for half room\nWater stacks on safe side number markers\nNorth stack avoid Crystal',
        imageUrl: './fru/naur-dl-somber.webp'
      },
      {
        mechanic: 'Somber Dance',
        description:
          'TB hits Furthest, then Closest\nT1 Far bait (W or E from Gaia), T2 Close follow\nParty move with Gaia - don\'t break tether',
        imageUrl: './fru/naur-dl-somber.webp'
      },
      {
        mechanic: 'Akh Morn 7-1',
        description:
          'Party Center, Tank Out\n7 + 1 stacks - discuss which tank baits first\nMT = Shiva aggro, OT = Gaia aggro',
        imageUrl: './fru/naur-dl-akh-morn.webp'
      },
      {
        mechanic: 'Morn Afah',
        description: 'Full party stack\nRyne/Gaia HP within 5% or wipe\nTargets player with aggro from Ryne',
        imageUrl: './fru/naur-dl-morn-afah.webp'
      }
    ]
  }
];

const allP5: PhaseStrats[] = [
  {
    phaseName: 'P5: Pandora',
    tag: 'p5'
  }
];

const naurStrat: Strat = {
  stratName: 'naur',
  description: 'From NA Ultimate Raiding (NAUR)',
  stratUrl: {
    'P1: Fatebreaker': 'https://tinyurl.com/lesbin-p1',
    'P2: Diamond Dust / Light Rampant': 'https://tinyurl.com/lesbin-p2',
    'P2: Ice Veil Intermission': 'https://tinyurl.com/lesbin-intermission',
    'P3: Ultimate Relativity': 'https://tinyurl.com/lesbin-ur',
    'P3: Sextuple Apoc': 'https://raidplan.io/plan/gU44027CtpmKs-sC',
    'P4: Darklit Dragonsong': 'https://tinyurl.com/lesbin-darklit',
    'P4: Crystalize Time': 'https://tinyurl.com/lesbin-ct',
    'P5: Pandora': 'https://slides.com/ultiproject/frup5/scroll'
  },
  notes: '',
  strats: [...allP1, ...allP2, ...allP3, ...allP4, ...allP5]
};

export const fruStrats: Strat[] = [naurStrat];

export const fruFightConfig: FightConfig = {
  fightKey: 'fru',
  title: 'Futures Rewritten (Ultimate)',
  abbreviatedTitle: 'FRU',
  subtitle: 'FRU Patch 7.2',
  cheatsheetTitle: 'FRU Cheatsheet',
  strats: {
    naur: {
      label: 'NAUR'
    }
  },
  toggles: [],
  tabTags: {
    'P1: Fatebreaker': ['p1'],
    'P2: Usurper of Frost': ['p2'],
    'P3: Oracle of Darkness': ['p3'],
    'P4: Roommates': ['p4'],
    'P5: Pandora': ['p5']
  },
  useMainPageTabs: true,
  defaultStratName: 'naur',
  timeline: [],
  posterEnabled: false
};
