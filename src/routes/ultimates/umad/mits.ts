import type { MitPlan } from '$lib/types';

// Ikuya's Dancing Mad (Ultimate) mitigation plan, generated from the sheet's phase tabs.
// Times are phase-relative. MT/OT = Tank 1/2, D1/D2 = Melee 1/2, D3/D4 = Ranged 1/2.

export const ikuyaMitPlan: MitPlan = {
  planName: 'ikuya',
  label: 'Ikuya Mitty (DMU)',
  url: 'https://tinyurl.com/ikuyamittydmu',
  phaseNotes: {
    p1: 'All mechanics require shields!\nMitigation for the first Mystery Magic should carry over till the first Double-Trouble trap unless there is a different usage timing below. Targeted mitigation does not work on Wave Cannon, but does apply to Double-Trouble Trap.\nUse mitigation for Light of Judgment late into the castbar so it will cover Hyperdrive.',
    p2: 'All mechanics require shields!',
    p3: 'All mechanics require shields!\nTargeted mitigation must be on your firewalled target unless the firewall is down. For the most part, most targeted mitigation is mostly filler and does not work on raidwides. It is mainly used for minimizing tank autos and/or busters.\nBoth tanks will get attacked for moderately high damage throughout the entire phase, ensure you are rolling mitigation and heals on them.\nAccretions: Healer Accretion 1st | DPS Accretion 2nd\nTanks and DPS should not use any abilities that boosts HP such as Second Wind and Curing Waltz.\nTank busters: Regardless of who is MT or OT, the invulnerability priority overrides this. You will still mitigate (Reprisal & Party Mit) based on whether you are MT or OT on the main page. This is for middle Exdeath only.\nTank busters: Tanks should use their short mitigation for the autos throughout the phase (WAR use Nascent).\nTank busters: Chaos tank priority WAR > DRK > GNB > PLD, Exdeath tank PLD > GNB > DRK > WAR.',
    p4: 'All mechanics require shields!\nTargeted mitigation (Reprisal, Addle, etc) only works on Ultima Upsurge, the rest is used to assist in mitigating tank auto attacks.\nTank busters: Kefka does not do any busters throughout the phase, but he does continously auto the main threat dealing around 75k without any mitigation. Ensure CDs are available for P5.',
    p5: 'All mechanics require shields!\nForsaken: For Forsaken, use any timed mitigation as late as possible unless otherwise noted.\nIt is important that the new round of mitigation for the 5th hit are applied as the first round of mitigation will fall off.\nTank busters: Regardless of who is MT or OT, the invulnerability priority overrides this. You will still mitigate (Reprisal & Party Mit) based on whether you are MT or OT on the main page.\nThe tank who is not invulning first must have main threat to not get Holy.\nTank busters: 1st invuln priority WAR > DRK > GNB > PLD, 2nd invuln (starts with boss) PLD > GNB > DRK > WAR.'
  },
  mechs: [
    {
      phase: 'p1',
      startTimeMs: 16000,
      mechanic: 'Revolting Ruin',
      mits: [
        { role: 'Tank', party: 1, label: '3rd hit', self: true, mitigation: 'Kitchen Sink' },
        {
          role: 'Tank',
          party: 2,
          label: '3rd hit',
          self: true,
          mitigation: 'Buddy Mit + Provoke During Castbar'
        }
      ],
      noteRoles: ['Tank'],
      noteSelf: true,
      note: 'Revolting Ruin III targets first in enmity and retargets to second in enmity when the castbar ends.'
    },
    {
      phase: 'p1',
      startTimeMs: 38000,
      mechanic: 'Mystery Magic',
      mits: [
        { role: 'Tank', party: 1, jobs: ['DRK', 'GNB'], mitigation: 'Party Mit' },
        {
          role: 'Tank',
          party: 2,
          mitigation: 'Reprisal + Party Mit',
          note: 'Use your 90s party mitigation as Kefka re-centres to cast the first Graven Image (WAR/PLD can use after Revolting Ruin III finishes).'
        },
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Temperance' },
        { role: 'Healer', jobs: ['AST'], mitigation: 'Neutral Sect + Sun Sign' },
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Spreadlo + Expedient' },
        {
          role: 'Healer',
          jobs: ['SGE'],
          mitigation: 'Kerachole + Zoe Shields',
          note: 'Use your 30s mitigation for the first Mystery Magic after the Graven Image castbar.'
        },
        { role: 'Melee', party: 1, mitigation: 'Feint' },
        {
          role: 'Ranged',
          party: 1,
          mitigation: 'Party Mit',
          note: 'Use your 90s party mitigation as Kefka re-centres to cast the first Graven Image.'
        }
      ]
    },
    {
      phase: 'p1',
      startTimeMs: 43000,
      mechanic: 'Wave Cannon',
      mits: [
        { role: 'Tank', party: 1, jobs: ['PLD', 'WAR'], mitigation: 'Party Mit' },
        { role: 'Tank', party: 1, jobs: ['DRK', 'GNB'], carryOver: 'Party Mit' },
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Divine Caress', carryOver: 'Temperance' },
        { role: 'Healer', jobs: ['AST'], carryOver: 'Neutral Sect + Sun Sign' },
        { role: 'Healer', jobs: ['SCH'], carryOver: 'Expedient' },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Holos', carryOver: 'Kerachole' },
        { role: 'Melee', party: 1, carryOver: 'Feint' }
      ]
    },
    {
      phase: 'p1',
      startTimeMs: 50000,
      mechanic: 'Double-Trouble Trap',
      mits: [
        { role: 'Tank', party: 1, jobs: ['DRK', 'GNB'], carryOver: 'Party Mit' },
        { role: 'Healer', jobs: ['WHM'], carryOver: 'Temperance' },
        { role: 'Healer', jobs: ['AST'], carryOver: 'Neutral Sect + Sun Sign' },
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Sacred Soil', carryOver: 'Expedient' },
        { role: 'Healer', jobs: ['SGE'], carryOver: 'Holos' },
        { role: 'Melee', party: 1, carryOver: 'Feint' },
        { role: 'Ranged', party: 2, mitigation: 'Addle' }
      ]
    },
    {
      phase: 'p1',
      startTimeMs: 63000,
      mechanic: 'Light of Judgment',
      extras: true,
      mits: [
        { role: 'Tank', party: 1, mitigation: 'Reprisal' },
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Plenary Indulgence' },
        { role: 'Healer', jobs: ['AST'], mitigation: 'Collective Unconscious' },
        { role: 'Healer', jobs: ['SCH'], carryOver: 'Sacred Soil' },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Kerachole' },
        { role: 'Melee', party: 2, mitigation: 'Feint' },
        { role: 'Ranged', party: 2, carryOver: 'Addle' }
      ]
    },
    {
      phase: 'p1',
      startTimeMs: 65000,
      mechanic: 'Hyperdrive (3x)',
      mits: [
        { role: 'Tank', party: 1, self: true, mitigation: 'Buddy Mit' },
        { role: 'Tank', party: 2, self: true, mitigation: 'Kitchen Sink' }
      ],
      noteRoles: ['Tank'],
      noteSelf: true,
      note: 'Hyperdrive does not have a castbar and occurs immediately after Light of Judgment.'
    },
    {
      phase: 'p1',
      startTimeMs: 88000,
      mechanic: 'Gravitas II (Part I)',
      mits: [
        { role: 'Healer', jobs: ['AST'], mitigation: 'Macrocosmos' },
        {
          role: 'Healer',
          jobs: ['SCH'],
          mitigation: 'Sacred Soil + Seraphism',
          note: 'If you plan to use Dissipation in your opener, use it before Aetherflow. If you use the first Spreadlo earlier, you will get it back for the Double-Trouble Trap in the second Graven Image and be able to use Seraphism earlier/later.'
        }
      ]
    },
    {
      phase: 'p1',
      startTimeMs: 98000,
      mechanic: 'Revolting Ruin',
      mits: [
        {
          role: 'Tank',
          party: 1,
          label: '3rd hit',
          self: true,
          mitigation: 'Provoke During Castbar'
        },
        { role: 'Tank', party: 2, label: '3rd hit', self: true, mitigation: 'Invulnerability' }
      ],
      noteRoles: ['Tank'],
      noteSelf: true,
      note: 'Revolting Ruin III targets first in enmity and retargets to second in enmity when the castbar ends.'
    },
    {
      phase: 'p1',
      startTimeMs: 106000,
      mechanic: 'Gravitas II (Part II)',
      mits: [
        {
          role: 'Healer',
          jobs: ['WHM'],
          mitigation: 'Liturgy of the Bell',
          note: 'You can alternatively use Bell just before the first set of puddles which will provide an immediate heal when the second set of puddles occurs as the Bell will expire shortly after.'
        },
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Seraph + Fey Illumination' },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Kerachole + Philosophia' }
      ]
    },
    {
      phase: 'p1',
      startTimeMs: 118000,
      mechanic: 'Double-Trouble Trap',
      mits: [
        { role: 'Tank', party: 2, mitigation: 'Reprisal + Party Mit' },
        {
          role: 'Healer',
          jobs: ['SCH'],
          mitigation: 'Spreadlo + Sacred Soil',
          carryOver: 'Seraph + Fey Illumination'
        },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Panhaima + Zoe Shields' },
        { role: 'Ranged', party: 1, mitigation: 'Party Mit' }
      ]
    },
    {
      phase: 'p1',
      startTimeMs: 132000,
      mechanic: 'Light of Judgment',
      mits: [
        { role: 'Tank', party: 1, mitigation: 'Reprisal + Party Mit' },
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Plenary Indulgence' },
        { role: 'Healer', jobs: ['AST'], mitigation: 'Collective Unconscious' },
        { role: 'Healer', jobs: ['SCH'], carryOver: 'Sacred Soil' },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Kerachole', carryOver: 'Panhaima' },
        { role: 'Melee', party: 1, mitigation: 'Feint' }
      ]
    },
    {
      phase: 'p1',
      startTimeMs: 136000,
      mechanic: 'Hyperdrive (3x)',
      mits: [
        {
          role: 'Tank',
          party: 1,
          self: true,
          mitigation: 'Invulnerability',
          note: 'WAR can alternatively kitchen sink this and Holmgang the first Ultimate Embrace, let your party know if you plan to do this.'
        }
      ],
      noteRoles: ['Tank'],
      noteSelf: true,
      note: 'Hyperdrive does not have a castbar and occurs immediately after Light of Judgment.'
    },
    {
      phase: 'p1',
      startTimeMs: 165000,
      mechanic: 'Double-Trouble Trap',
      mits: [
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Temperance' },
        { role: 'Healer', jobs: ['AST'], mitigation: 'Neutral Sect' },
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Expedient' }
      ]
    },
    {
      phase: 'p1',
      startTimeMs: 173000,
      mechanic: 'Indulgent Will',
      mits: [
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Divine Caress', carryOver: 'Temperance' },
        { role: 'Healer', jobs: ['AST'], mitigation: 'Sun Sign' },
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Sacred Soil', carryOver: 'Expedient' },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Kerachole' }
      ]
    },
    {
      phase: 'p1',
      startTimeMs: 187000,
      mechanic: 'Mystery Magic',
      mits: [
        { role: 'Tank', party: 2, mitigation: 'Reprisal' },
        { role: 'Healer', jobs: ['WHM'], carryOver: 'Temperance' },
        { role: 'Healer', jobs: ['AST'], carryOver: 'Sun Sign' },
        { role: 'Healer', jobs: ['SCH'], carryOver: 'Sacred Soil' },
        { role: 'Healer', jobs: ['SGE'], carryOver: 'Kerachole' }
      ]
    },
    {
      phase: 'p2',
      startTimeMs: 24000,
      mechanic: 'Ultimate Embrace',
      mits: [
        {
          role: 'Healer',
          jobs: ['WHM'],
          mitigation: 'Assist Tanks',
          note: 'Provide single target mitigation and GCD shield both tanks in the phase transition for Ultimate Embrace. Also assist tanks with the last Ultimate Embrace.'
        },
        {
          role: 'Healer',
          jobs: ['SCH'],
          mitigation: 'Spreadlo',
          note: 'Prepare Spreadlo either on the OT shortly beforehand or the MT during Ultimate Embrace to assist the tanks.'
        },
        {
          role: 'Healer',
          jobs: ['SGE'],
          mitigation: 'Holos',
          note: 'Use Holos during the first Ultimate Embrace so it is back for Light of Judgment and provides mitigation to the tanks. Alternatively, you can use Holos for the Wings of Destruction + Ultimate Embrace.'
        },
        { role: 'Melee', party: 2, mitigation: 'Feint' },
        { role: 'Tank', party: 1, self: true, mitigation: 'Kitchen Sink' },
        { role: 'Tank', party: 2, self: true, mitigation: 'Kitchen Sink' }
      ]
    },
    {
      phase: 'p2',
      startTimeMs: 39000,
      mechanic: 'Forsaken',
      extras: true,
      mits: [
        { role: 'Tank', party: 1, mitigation: 'Reprisal' },
        { role: 'Tank', party: 2, mitigation: 'Party Mit' },
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Plenary Indulgence' },
        { role: 'Healer', jobs: ['AST'], mitigation: 'Collective Unconscious' },
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Sacred Soil', carryOver: 'Spreadlo' },
        {
          role: 'Healer',
          jobs: ['SGE'],
          mitigation: 'Kerachole + Zoe Shields',
          carryOver: 'Holos'
        },
        { role: 'Melee', party: 1, mitigation: 'Feint' },
        { role: 'Ranged', party: 1, mitigation: 'Party Mit' },
        { role: 'Ranged', party: 2, mitigation: 'Addle' }
      ]
    },
    {
      phase: 'p2',
      startTimeMs: 53000,
      mechanic: 'Towers I',
      mits: [
        { role: 'Tank', party: 1, carryOver: 'Reprisal' },
        { role: 'Tank', party: 2, jobs: ['DRK', 'GNB'], mitigation: 'Party Mit' },
        {
          role: 'Healer',
          jobs: ['SCH'],
          mitigation: 'Seraph + Fey Illumination',
          carryOver: 'Sacred Soil'
        },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Panhaima', carryOver: 'Kerachole' },
        { role: 'Melee', party: 1, carryOver: 'Feint' },
        { role: 'Ranged', party: 1, carryOver: 'Party Mit' },
        { role: 'Ranged', party: 2, carryOver: 'Addle' }
      ]
    },
    {
      phase: 'p2',
      startTimeMs: 63000,
      mechanic: "Towers II (Past/Future's End)",
      mits: [
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Seraph', carryOver: 'Fey Illumination' },
        { role: 'Healer', jobs: ['SGE'], carryOver: 'Panhaima' }
      ]
    },
    {
      phase: 'p2',
      startTimeMs: 74000,
      mechanic: 'Towers III (All Things Ending)',
      mits: [
        { role: 'Tank', party: 1, mitigation: 'Party Mit' },
        { role: 'Tank', party: 2, mitigation: 'Reprisal' },
        { role: 'Healer', jobs: ['AST'], mitigation: 'Macrocosmos' },
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Sacred Soil' },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Kerachole' }
      ]
    },
    {
      phase: 'p2',
      startTimeMs: 84000,
      mechanic: "Towers IV (Past/Future's End)",
      mits: [
        { role: 'Tank', party: 1, jobs: ['DRK', 'GNB'], carryOver: 'Party Mit' },
        { role: 'Healer', jobs: ['SCH'], carryOver: 'Sacred Soil' },
        { role: 'Healer', jobs: ['SGE'], carryOver: 'Kerachole' }
      ]
    },
    {
      phase: 'p2',
      startTimeMs: 95000,
      mechanic: 'Towers V (All Things Ending)',
      mits: [
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Liturgy of the Bell' },
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Expedient' }
      ]
    },
    {
      phase: 'p2',
      startTimeMs: 105000,
      mechanic: "Towers VI (Past/Future's End)",
      mits: [
        { role: 'Tank', party: 1, mitigation: 'Reprisal' },
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Plenary Indulgence + Temperance' },
        { role: 'Healer', jobs: ['AST'], mitigation: 'Collective Unconscious + Neutral Sect' },
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Seraphism', carryOver: 'Expedient' },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Philosophia' }
      ]
    },
    {
      phase: 'p2',
      startTimeMs: 115000,
      mechanic: 'Towers VII (All Things Ending)',
      mits: [
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Divine Caress', carryOver: 'Temperance' },
        { role: 'Healer', jobs: ['AST'], mitigation: 'Sun Sign' },
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Sacred Soil' },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Kerachole' }
      ]
    },
    {
      phase: 'p2',
      startTimeMs: 126000,
      mechanic: "Towers VIII (Past/Future's End)",
      mits: [
        { role: 'Healer', jobs: ['WHM'], carryOver: 'Temperance' },
        { role: 'Healer', jobs: ['AST'], carryOver: 'Sun Sign' },
        { role: 'Healer', jobs: ['SCH'], carryOver: 'Sacred Soil' },
        { role: 'Healer', jobs: ['SGE'], carryOver: 'Kerachole' }
      ]
    },
    {
      phase: 'p2',
      startTimeMs: 146000,
      mechanic: 'Light of Judgment',
      mits: [
        { role: 'Tank', party: 2, mitigation: 'Reprisal + Party Mit' },
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Spreadlo + Sacred Soil' },
        {
          role: 'Healer',
          jobs: ['SGE'],
          mitigation: 'Kerachole + Holos + Zoe Shields',
          note: 'Use Holos during the first Ultimate Embrace so it is back for Light of Judgment and provides mitigation to the tanks. Alternatively, you can use Holos for the Wings of Destruction + Ultimate Embrace.'
        },
        { role: 'Melee', party: 1, mitigation: 'Feint' },
        { role: 'Ranged', party: 1, mitigation: 'Party Mit' },
        { role: 'Ranged', party: 2, mitigation: 'Addle' }
      ]
    },
    {
      phase: 'p2',
      startTimeMs: 174000,
      mechanic: 'Wings of Destruction',
      mits: [
        {
          role: 'Tank',
          party: 1,
          mitigation: 'Reprisal + Party Mit',
          note: 'Use early to avoid shaking off mitigation if playing WAR.'
        },
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Plenary Indulgence' },
        { role: 'Healer', jobs: ['AST'], mitigation: 'Collective Unconscious' },
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Sacred Soil + Fey Illumination + Seraph' },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Kerachole + Panhaima' },
        { role: 'Melee', party: 2, mitigation: 'Feint' },
        { role: 'Tank', party: 1, self: true, mitigation: 'Rampart + 40% + 90s (Close)' },
        { role: 'Tank', party: 2, self: true, mitigation: 'Rampart + 40% + 90s (Far)' }
      ],
      note: 'Rampart end of first Wings of Destruction (halfroom) cast, 40% two GCDs later and 10s mitigation at the end of second Wings of Destruction cast. PLD can take the Wings of Destruction at the wall to assist their co-tank with no downtime (discuss beforehand if MT).',
      noteRoles: ['Tank'],
      noteSelf: true
    },
    {
      phase: 'p2',
      startTimeMs: 181000,
      mechanic: 'Ultimate Embrace',
      mits: [
        { role: 'Tank', party: 1, carryOver: 'Reprisal + Party Mit' },
        { role: 'Healer', jobs: ['WHM'], carryOver: 'Plenary Indulgence' },
        { role: 'Healer', jobs: ['AST'], carryOver: 'Collective Unconscious' },
        { role: 'Healer', jobs: ['SCH'], carryOver: 'Sacred Soil + Fey Illumination + Seraph' },
        { role: 'Healer', jobs: ['SGE'], carryOver: 'Kerachole + Panhaima' },
        { role: 'Melee', party: 2, carryOver: 'Feint' },
        {
          role: 'Tank',
          party: 1,
          self: true,
          mitigation: 'Short Mit',
          carryOver: 'Rampart + 40% + 90s'
        },
        {
          role: 'Tank',
          party: 2,
          self: true,
          mitigation: 'Short Mit',
          carryOver: 'Rampart + 40% + 90s'
        }
      ],
      note: 'Short mitigation before Ultimate Embrace finishes casting.',
      noteRoles: ['Tank'],
      noteSelf: true
    },
    {
      phase: 'p3',
      startTimeMs: 68000,
      mechanic: 'Bowels of Agony (Chaos)',
      mits: [
        {
          role: 'Tank',
          party: 1,
          mitigation: 'Reprisal',
          note: 'If you are holding Exdeath instead of Chaos at the beginning, use Reprisal on both before The Decisive Battle finishes.'
        },
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Plenary Indulgence' },
        { role: 'Healer', jobs: ['AST'], mitigation: 'Collective Unconscious' },
        {
          role: 'Healer',
          jobs: ['SCH'],
          mitigation: 'Sacred Soil',
          note: 'At the beginning of the phase, use 30s mitigation after (when the textbox disappears) Kefka says, "Oh! What other toys can I throw in here..." to get tank autos and the raidwide + an additional usage for Stray Flames/Tsunami.'
        },
        {
          role: 'Healer',
          jobs: ['SGE'],
          mitigation: 'Kerachole',
          note: 'At the beginning of the phase, use 30s mitigation after (when the textbox disappears) Kefka says, "Oh! What other toys can I throw in here..." to get tank autos and the raidwide + an additional usage for Stray Flames/Tsunami.'
        },
        { role: 'Melee', party: 1, mitigation: 'Feint (Chaos)' }
      ]
    },
    {
      phase: 'p3',
      startTimeMs: 88000,
      mechanic: 'Stray Flames/Tsunami',
      extras: true,
      mits: [
        { role: 'Tank', party: 1, mitigation: 'Party Mit' },
        { role: 'Tank', party: 2, mitigation: 'Reprisal' },
        {
          role: 'Healer',
          jobs: ['SCH'],
          mitigation: 'Spreadlo + Sacred Soil',
          note: 'Prepare immediately after Bowels of Agony.'
        },
        {
          role: 'Healer',
          jobs: ['SGE'],
          mitigation: 'Zoe Shields + Kerachole',
          note: 'Prepare immediately after Bowels of Agony.'
        }
      ]
    },
    {
      phase: 'p3',
      startTimeMs: 96000,
      mechanic: 'Thunder III (1st Set)',
      extras: true,
      mits: [
        { role: 'Tank', party: 2, carryOver: 'Reprisal' },
        {
          role: 'Healer',
          jobs: ['SCH'],
          mitigation: 'Expedient',
          note: 'There is a very small period where you can cover both hits of Thunder III and the next Stray Flames/Tsunami, if you miss the timing, you can use it next GCD.'
        },
        {
          role: 'Healer',
          jobs: ['SGE'],
          mitigation: 'Holos',
          note: 'There is a very small period where you can cover both hits of Thunder III and the next Stray Flames/Tsunami, if you miss the timing, you can use it next GCD.'
        },
        { role: 'Ranged', party: 2, mitigation: 'Addle (Exdeath)' },
        {
          role: 'Tank',
          boss: 'Chaos',
          label: 'first hit',
          self: true,
          mitigation: 'Rampart + 90s + Short Mit'
        },
        {
          role: 'Tank',
          boss: 'Exdeath',
          label: 'second hit',
          self: true,
          mitigation: 'Rampart + 90s + Short Mit'
        }
      ]
    },
    {
      phase: 'p3',
      startTimeMs: 115000,
      mechanic: 'Stray Flames/Tsunami',
      mits: [
        { role: 'Tank', party: 2, mitigation: 'Party Mit' },
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Temperance' },
        { role: 'Healer', jobs: ['AST'], mitigation: 'Neutral Sect' },
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Seraph', carryOver: 'Expedient' },
        { role: 'Healer', jobs: ['SGE'], carryOver: 'Holos' }
      ]
    },
    {
      phase: 'p3',
      startTimeMs: 125000,
      mechanic: 'Ultima Blaster',
      mits: [
        { role: 'Tank', party: 1, mitigation: 'Reprisal' },
        { role: 'Healer', jobs: ['WHM'], carryOver: 'Temperance' },
        { role: 'Healer', jobs: ['AST'], mitigation: 'Sun Sign', carryOver: 'Neutral Sect' },
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Sacred Soil + Fey Illumination + Seraphism' },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Kerachole + Panhaima' },
        { role: 'Melee', party: 2, mitigation: 'Feint (Chaos)' },
        { role: 'Ranged', party: 1, mitigation: 'Party Mit' }
      ]
    },
    {
      phase: 'p3',
      startTimeMs: 132000,
      mechanic: 'Vacuum Wave',
      mits: [
        {
          role: 'Tank',
          party: 1,
          mitigation: 'LB3',
          carryOver: 'Reprisal',
          note: 'Use LB3 at the W of Vacuum Wave. Either tank can press it, discuss beforehand.'
        },
        {
          role: 'Tank',
          party: 2,
          mitigation: 'LB3',
          note: 'Use LB3 at the W of Vacuum Wave. Either tank can press it, discuss beforehand.'
        },
        {
          role: 'Healer',
          jobs: ['WHM'],
          mitigation: 'Plenary Indulgence',
          carryOver: 'Temperance'
        },
        {
          role: 'Healer',
          jobs: ['AST'],
          mitigation: 'Collective Unconscious',
          carryOver: 'Neutral Sect + Sun Sign'
        },
        { role: 'Healer', jobs: ['SCH'], carryOver: 'Sacred Soil + Fey Illumination' },
        { role: 'Healer', jobs: ['SGE'], carryOver: 'Kerachole + Panhaima' },
        { role: 'Melee', party: 2, carryOver: 'Feint' },
        { role: 'Ranged', party: 1, carryOver: 'Party Mit' }
      ]
    },
    {
      phase: 'p3',
      startTimeMs: 136000,
      mechanic: 'Cyclone',
      mits: [
        { role: 'Tank', party: 1, carryOver: 'Reprisal' },
        {
          role: 'Healer',
          jobs: ['WHM'],
          mitigation: 'Divine Caress',
          carryOver: 'Plenary Indulgence'
        },
        { role: 'Healer', jobs: ['AST'], carryOver: 'Collective Unconscious + Sun Sign' },
        { role: 'Healer', jobs: ['SCH'], carryOver: 'Sacred Soil + Fey Illumination' },
        { role: 'Healer', jobs: ['SGE'], carryOver: 'Kerachole + Panhaima' },
        { role: 'Melee', party: 2, carryOver: 'Feint' },
        { role: 'Ranged', party: 1, carryOver: 'Party Mit' }
      ]
    },
    {
      phase: 'p3',
      startTimeMs: 154000,
      mechanic: 'Thunder III (2nd Set)',
      mits: [
        { role: 'Tank', boss: 'Chaos', label: '3rd hit', self: true, mitigation: 'Invulnerability' }
      ]
    },
    {
      phase: 'p3',
      startTimeMs: 163000,
      mechanic: 'The Decisive Battle',
      mits: [
        { role: 'Tank', party: 2, mitigation: 'Reprisal (Exdeath)' },
        {
          role: 'Healer',
          jobs: ['SCH'],
          mitigation: 'Spreadlo',
          note: 'Prepare Spreadlo on the tanks, prioritizing WAR > DRK > GNB/PLD.'
        },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Zoe Shields' }
      ]
    },
    {
      phase: 'p3',
      startTimeMs: 172000,
      mechanic: 'Thunder III (3rd Set)',
      mits: [
        {
          role: 'Tank',
          boss: 'Chaos',
          label: 'second hit',
          self: true,
          mitigation: '40% + Short Mit'
        },
        {
          role: 'Tank',
          boss: 'Exdeath',
          label: 'first hit',
          self: true,
          mitigation: '40% + Short Mit'
        }
      ]
    },
    {
      phase: 'p3',
      startTimeMs: 177000,
      mechanic: 'Earthquake',
      mits: [
        { role: 'Tank', party: 1, jobs: ['DRK', 'GNB'], mitigation: 'Party Mit' },
        { role: 'Healer', jobs: ['AST'], mitigation: 'Macrocosmos' },
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Sacred Soil' },
        {
          role: 'Healer',
          jobs: ['SGE'],
          mitigation: 'Kerachole + Philosophia',
          note: 'Philosophia should be used after both Accretions resolves to avoid accidentally popping both at the same time.'
        },
        { role: 'Melee', party: 1, mitigation: 'Feint (Chaos)' }
      ]
    },
    {
      phase: 'p3',
      startTimeMs: 196000,
      mechanic: 'Shocking Impact/Shockwave',
      mits: [
        { role: 'Tank', party: 1, jobs: ['PLD', 'WAR'], mitigation: 'Reprisal + Party Mit' },
        {
          role: 'Tank',
          party: 1,
          jobs: ['DRK', 'GNB'],
          mitigation: 'Reprisal',
          carryOver: 'Party Mit'
        },
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Plenary Indulgence' },
        { role: 'Healer', jobs: ['AST'], mitigation: 'Collective Unconscious' },
        { role: 'Healer', jobs: ['SCH'], carryOver: 'Sacred Soil' },
        { role: 'Healer', jobs: ['SGE'], carryOver: 'Kerachole' }
      ]
    },
    {
      phase: 'p3',
      startTimeMs: 213000,
      mechanic: 'Thunder III (4th Set)',
      mits: [
        {
          role: 'Tank',
          boss: 'Exdeath',
          label: '3rd hit',
          self: true,
          mitigation: 'Invulnerability'
        }
      ]
    },
    {
      phase: 'p3',
      startTimeMs: 227000,
      mechanic: 'Shocking Impact/Shockwave',
      extras: true,
      mits: [
        { role: 'Tank', party: 2, jobs: ['DRK', 'GNB'], mitigation: 'Party Mit' },
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Liturgy of the Bell' },
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Expedient + Seraph + Sacred Soil' },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Holos + Kerachole' }
      ]
    },
    {
      phase: 'p3',
      startTimeMs: 234000,
      mechanic: 'Black Holes II (3rd Tether Set)',
      mits: [
        { role: 'Tank', party: 2, jobs: ['PLD', 'WAR'], mitigation: 'Party Mit' },
        { role: 'Tank', party: 2, jobs: ['DRK', 'GNB'], carryOver: 'Party Mit' },
        {
          role: 'Healer',
          jobs: ['SCH'],
          mitigation: 'Seraph',
          carryOver: 'Expedient + Sacred Soil'
        },
        { role: 'Healer', jobs: ['SGE'], carryOver: 'Holos + Kerachole' }
      ]
    },
    {
      phase: 'p3',
      startTimeMs: 239000,
      mechanic: 'Black Holes II (4th Tether Set)',
      mits: [
        { role: 'Tank', party: 2, jobs: ['DRK', 'GNB'], carryOver: 'Party Mit' },
        { role: 'Healer', jobs: ['SCH'], carryOver: 'Expedient + Sacred Soil' },
        { role: 'Healer', jobs: ['SGE'], carryOver: 'Holos' }
      ]
    },
    {
      phase: 'p3',
      startTimeMs: 244000,
      mechanic: 'Black Holes II (5th Tether Set)',
      mits: [
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Fey Illumination', carryOver: 'Expedient' },
        { role: 'Healer', jobs: ['SGE'], carryOver: 'Holos' }
      ]
    },
    {
      phase: 'p3',
      startTimeMs: 255000,
      mechanic: 'Thunder III (5th Set)',
      mits: [
        { role: 'Tank', party: 1, mitigation: 'Reprisal' },
        {
          role: 'Healer',
          jobs: ['WHM'],
          mitigation: 'Temperance',
          note: 'If you are holding at the end of P3, you can send this for the 6th Tether set.'
        },
        {
          role: 'Healer',
          jobs: ['AST'],
          mitigation: 'Neutral Sect',
          note: 'If you are holding at the end of P3, you can send this for the 6th Tether set.'
        },
        {
          role: 'Healer',
          jobs: ['SCH'],
          mitigation: 'Spreadlo + Sacred Soil',
          carryOver: 'Fey Illumination'
        },
        {
          role: 'Healer',
          jobs: ['SGE'],
          mitigation: 'Zoe Shields + Panhaima + Kerachole',
          note: 'If you are holding at the end of P3, you can send this for the 6th Tether set.'
        },
        { role: 'Melee', party: 2, mitigation: 'Feint (Chaos)' },
        { role: 'Ranged', party: 2, mitigation: 'Addle (Exdeath)' },
        {
          role: 'Tank',
          boss: 'Chaos',
          label: 'second hit',
          self: true,
          mitigation: 'Rampart + 90s + Short Mit'
        },
        {
          role: 'Tank',
          boss: 'Exdeath',
          label: 'first hit',
          self: true,
          mitigation: 'Rampart + 90s + Short Mit'
        }
      ]
    },
    {
      phase: 'p3',
      startTimeMs: 268000,
      mechanic: 'Black Holes III (6th Tether Set)',
      mits: [
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Divine Caress' },
        {
          role: 'Healer',
          jobs: ['AST'],
          mitigation: 'Sun Sign',
          carryOver: 'Sun Sign (7-8th Set)'
        },
        { role: 'Healer', jobs: ['SGE'], carryOver: 'Panhaima' },
        { role: 'Ranged', party: 1, mitigation: 'Party Mit', carryOver: 'Party Mit (7-8th Set)' }
      ]
    },
    {
      phase: 'p3',
      startTimeMs: 295000,
      mechanic: 'Shocking Impact/Shockwave',
      mits: [
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Plenary Indulgence' },
        { role: 'Healer', jobs: ['AST'], mitigation: 'Collective Unconscious' },
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Sacred Soil' },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Kerachole' }
      ]
    },
    {
      phase: 'p3',
      startTimeMs: 309000,
      mechanic: 'Black Holes IV (10th Tether Set)',
      mits: [
        { role: 'Tank', boss: 'Chaos', self: true, mitigation: '40% + Short Mit' },
        { role: 'Tank', boss: 'Exdeath', self: true, mitigation: '40% + Short Mit' }
      ]
    },
    {
      phase: 'p3',
      startTimeMs: 323000,
      mechanic: 'Stomp-a-Mole + Knock Down',
      mits: [
        {
          role: 'Tank',
          party: 1,
          mitigation: 'Reprisal + Party Mit',
          note: 'Use if holding Chaos, otherwise use at the beginning of P4 for autos.'
        },
        {
          role: 'Tank',
          party: 2,
          mitigation: 'Reprisal',
          note: 'Use if holding Chaos, otherwise use at the beginning of P4 for autos.'
        },
        {
          role: 'Healer',
          jobs: ['SCH'],
          mitigation: 'Seraphism + Sacred Soil',
          note: 'Seraphism can be shifted to P4 if you feel you have sufficient mitigation.'
        },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Kerachole' },
        { role: 'Melee', party: 1, mitigation: 'Feint (Chaos)' }
      ],
      note: 'Both healers should have instant cast heals prepared to top up the party between the first and second set of stomps.',
      noteRoles: ['Healer']
    },
    {
      phase: 'p4',
      startTimeMs: 0,
      mechanic: 'Autos',
      mits: [
        { role: 'Tank', party: 1, self: true, mitigation: 'Rampart + 90s + Short Mit' },
        { role: 'Tank', party: 2, self: true, mitigation: 'Buddy Mit' }
      ]
    },
    {
      phase: 'p4',
      startTimeMs: 29000,
      mechanic: 'Grand Cross',
      extras: true,
      mits: [
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Plenary Indulgence' },
        { role: 'Healer', jobs: ['AST'], mitigation: 'Collective Unconscious' },
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Spreadlo + Sacred Soil' },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Kerachole + Philosophia + Holos' },
        {
          role: 'Melee',
          party: 2,
          mitigation: 'Feint',
          note: 'Use at the beginning of the phase for autos.'
        }
      ]
    },
    {
      phase: 'p4',
      startTimeMs: 35000,
      mechanic: 'Inferno/Tsunami',
      mits: [
        { role: 'Healer', jobs: ['WHM'], carryOver: 'Plenary Indulgence' },
        { role: 'Healer', jobs: ['AST'], carryOver: 'Collective Unconscious' },
        { role: 'Healer', jobs: ['SCH'], carryOver: 'Sacred Soil' },
        { role: 'Healer', jobs: ['SGE'], carryOver: 'Kerachole + Holos' },
        { role: 'Ranged', party: 1, mitigation: 'Party Mit' }
      ]
    },
    {
      phase: 'p4',
      startTimeMs: 44000,
      mechanic: 'Grand Cross',
      mits: [
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Temperance' },
        { role: 'Healer', jobs: ['AST'], mitigation: 'Neutral Sect' },
        {
          role: 'Healer',
          jobs: ['SCH'],
          mitigation: 'Expedient + Fey Illumination',
          carryOver: 'Sacred Soil'
        },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Panhaima', carryOver: 'Holos' },
        { role: 'Ranged', party: 1, carryOver: 'Party Mit' }
      ]
    },
    {
      phase: 'p4',
      startTimeMs: 49000,
      mechanic: 'Inferno/Tsunami',
      mits: [
        { role: 'Tank', party: 2, jobs: ['DRK', 'GNB'], mitigation: 'Party Mit' },
        { role: 'Healer', jobs: ['WHM'], carryOver: 'Temperance' },
        { role: 'Healer', jobs: ['AST'], mitigation: 'Sun Sign', carryOver: 'Neutral Sect' },
        {
          role: 'Healer',
          jobs: ['SCH'],
          mitigation: 'Seraph',
          carryOver: 'Expedient + Fey Illumination'
        },
        { role: 'Healer', jobs: ['SGE'], carryOver: 'Panhaima' }
      ]
    },
    {
      phase: 'p4',
      startTimeMs: 59000,
      mechanic: 'Grand Cross',
      mits: [
        { role: 'Tank', party: 2, jobs: ['PLD', 'WAR'], mitigation: 'Party Mit' },
        { role: 'Tank', party: 2, jobs: ['DRK', 'GNB'], carryOver: 'Party Mit' },
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Divine Caress', carryOver: 'Temperance' },
        { role: 'Healer', jobs: ['AST'], carryOver: 'Neutral Sect + Sun Sign' },
        {
          role: 'Healer',
          jobs: ['SCH'],
          mitigation: 'Seraph',
          carryOver: 'Expedient + Fey Illumination'
        },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Zoe Shields' }
      ]
    },
    {
      phase: 'p4',
      startTimeMs: 71000,
      mechanic: 'Flood of Naught',
      mits: [
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Liturgy of the Bell' },
        { role: 'Healer', jobs: ['AST'], mitigation: 'Macrocosmos' },
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Sacred Soil' },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Kerachole' }
      ]
    },
    {
      phase: 'p4',
      startTimeMs: 81000,
      mechanic: 'Death Bolt/Wave',
      mits: [
        { role: 'Tank', party: 1, mitigation: 'Party Mit' },
        { role: 'Healer', jobs: ['SCH'], carryOver: 'Sacred Soil' },
        { role: 'Healer', jobs: ['SGE'], carryOver: 'Kerachole' }
      ]
    },
    {
      phase: 'p4',
      startTimeMs: 99000,
      mechanic: 'Ultima Upsurge',
      mits: [
        { role: 'Tank', party: 1, mitigation: 'Reprisal' },
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Plenary Indulgence' },
        { role: 'Healer', jobs: ['AST'], mitigation: 'Collective Unconscious' },
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Sacred Soil' },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Kerachole' },
        { role: 'Melee', party: 1, mitigation: 'Feint' },
        { role: 'Ranged', party: 2, mitigation: 'Addle' }
      ]
    },
    {
      phase: 'p4',
      startTimeMs: 106000,
      mechanic: 'Death Bolt/Wave',
      mits: [
        { role: 'Healer', jobs: ['WHM'], carryOver: 'Plenary Indulgence' },
        { role: 'Healer', jobs: ['AST'], carryOver: 'Collective Unconscious' },
        { role: 'Healer', jobs: ['SCH'], carryOver: 'Sacred Soil' },
        { role: 'Healer', jobs: ['SGE'], carryOver: 'Kerachole' }
      ]
    },
    {
      phase: 'p4',
      startTimeMs: 138000,
      mechanic: 'Ultima Upsurge',
      mits: [
        { role: 'Tank', party: 2, mitigation: 'Reprisal' },
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Sacred Soil' },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Kerachole' }
      ]
    },
    {
      phase: 'p5',
      startTimeMs: 49000,
      mechanic: 'Ultima Repeater',
      extras: true,
      mits: [
        { role: 'Tank', party: 1, mitigation: 'Reprisal' },
        {
          role: 'Tank',
          party: 2,
          mitigation: 'Party Mit',
          note: 'Use when Kefka brings his staff down to his right side. The subsequent usages should be pressed immediately off cooldown.'
        },
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Plenary Indulgence' },
        { role: 'Healer', jobs: ['AST'], mitigation: 'Collective Unconscious' },
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Spreadlo + Sacred Soil' },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Zoe Shields + Holos + Kerachole' },
        {
          role: 'Ranged',
          party: 1,
          mitigation: 'Party Mit',
          note: 'Use when Kefka brings his staff down to his right side. The subsequent usages should be pressed immediately off cooldown.'
        }
      ]
    },
    {
      phase: 'p5',
      startTimeMs: 54000,
      mechanic: 'Fell Forces (3x)',
      mits: [
        { role: 'Tank', party: 1, carryOver: 'Reprisal' },
        { role: 'Healer', jobs: ['WHM'], carryOver: 'Plenary Indulgence' },
        { role: 'Healer', jobs: ['AST'], carryOver: 'Collective Unconscious' },
        { role: 'Healer', jobs: ['SCH'], carryOver: 'Sacred Soil' },
        { role: 'Healer', jobs: ['SGE'], carryOver: 'Holos + Kerachole' },
        {
          role: 'Tank',
          invuln: 1,
          self: true,
          mitigation: '40% + Short',
          note: 'Use at the end of the Ultima Repeater cast.'
        },
        {
          role: 'Tank',
          invuln: 2,
          self: true,
          mitigation: '40% + Short Mit',
          note: 'Use at the end of the Ultima Repeater cast.'
        }
      ]
    },
    {
      phase: 'p5',
      startTimeMs: 66000,
      mechanic: 'Chaotic Flood',
      mits: [
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Temperance' },
        { role: 'Healer', jobs: ['AST'], mitigation: 'Neutral Sect' },
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Expedient' },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Panhaima', carryOver: 'Holos' }
      ]
    },
    {
      phase: 'p5',
      startTimeMs: 78000,
      mechanic: 'Maddening Orchestra',
      mits: [
        { role: 'Tank', party: 2, mitigation: 'Reprisal' },
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Divine Caress', carryOver: 'Temperance' },
        { role: 'Healer', jobs: ['AST'], mitigation: 'Sun Sign' },
        {
          role: 'Healer',
          jobs: ['SCH'],
          mitigation: 'Sacred Soil + Fey Illumination',
          carryOver: 'Expedient'
        },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Kerachole' },
        { role: 'Melee', party: 2, mitigation: 'Feint' },
        {
          role: 'Tank',
          invuln: 1,
          self: true,
          mitigation: 'Rampart + Short Mit + Provoke',
          note: 'The invulning tank should Provoke as soon Flare/Holy is applied so Kefka is not pulled and they get main threat for the autos.'
        },
        { role: 'Tank', invuln: 2, self: true, mitigation: 'Rampart + Short Mit' }
      ]
    },
    {
      phase: 'p5',
      startTimeMs: 86000,
      mechanic: 'Flare/Holy',
      mits: [
        {
          role: 'Tank',
          invuln: 1,
          self: true,
          mitigation: 'Invulnerability',
          note: 'Invulnerabilities should be used just before the Flare/Holy debuffs expire so that they can cover two autos.'
        },
        { role: 'Tank', invuln: 2, self: true, carryOver: 'Rampart + Short Mit' }
      ]
    },
    {
      phase: 'p5',
      startTimeMs: 91000,
      mechanic: 'Fell Forces (2x)',
      mits: [
        { role: 'Tank', party: 2, carryOver: 'Reprisal' },
        { role: 'Healer', jobs: ['AST'], carryOver: 'Sun Sign' },
        { role: 'Healer', jobs: ['SCH'], carryOver: 'Sacred Soil + Fey Illumination' },
        { role: 'Healer', jobs: ['SGE'], carryOver: 'Kerachole' },
        { role: 'Melee', party: 2, carryOver: 'Feint' },
        { role: 'Tank', invuln: 1, self: true, carryOver: 'Invulnerability (Solo)' }
      ],
      note: 'Healers should monitor the tanks during Maddening Orchestra (especially the Flare tank) and Fell Forces. For WAR/DRK, you will need to have single target burst healing prepared after their invulnerability expires so they can survive the 3rd auto.',
      noteRoles: ['Healer']
    },
    {
      phase: 'p5',
      startTimeMs: 109000,
      mechanic: 'Celestriad',
      mits: [
        { role: 'Tank', party: 1, mitigation: 'Party Mit' },
        {
          role: 'Healer',
          jobs: ['SCH'],
          mitigation: 'Seraph',
          note: 'Use during the Celestriad castbar.'
        }
      ]
    },
    {
      phase: 'p5',
      startTimeMs: 131000,
      mechanic: 'Ultima Repeater',
      mits: [
        { role: 'Tank', party: 1, mitigation: 'Reprisal' },
        { role: 'Tank', party: 2, mitigation: 'Party Mit', note: 'Use immediately off cooldown.' },
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Plenary Indulgence' },
        { role: 'Healer', jobs: ['AST'], mitigation: 'Collective Unconscious' },
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Sacred Soil' },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Kerachole' },
        {
          role: 'Melee',
          party: 1,
          mitigation: 'Feint',
          note: 'Use after the third towers in Celestriad resolves.'
        },
        {
          role: 'Ranged',
          party: 1,
          mitigation: 'Party Mit',
          note: 'Use immediately off cooldown.'
        },
        {
          role: 'Ranged',
          party: 2,
          mitigation: 'Addle',
          note: 'Use after the third towers in Celestriad resolves.'
        }
      ]
    },
    {
      phase: 'p5',
      startTimeMs: 136000,
      mechanic: 'Fell Forces (2x)',
      mits: [
        { role: 'Tank', party: 1, carryOver: 'Reprisal' },
        { role: 'Tank', party: 2, carryOver: 'Party Mit' },
        { role: 'Healer', jobs: ['WHM'], carryOver: 'Plenary Indulgence' },
        { role: 'Healer', jobs: ['AST'], carryOver: 'Collective Unconscious' },
        { role: 'Healer', jobs: ['SCH'], carryOver: 'Sacred Soil' },
        { role: 'Healer', jobs: ['SGE'], carryOver: 'Kerachole' },
        { role: 'Melee', party: 1, carryOver: 'Feint' },
        { role: 'Ranged', party: 1, carryOver: 'Party Mit' },
        { role: 'Ranged', party: 2, carryOver: 'Addle' },
        { role: 'Tank', invuln: 1, self: true, mitigation: '90s + Short Mit' },
        { role: 'Tank', invuln: 2, self: true, mitigation: '90s + Short Mit' }
      ]
    },
    {
      phase: 'p5',
      startTimeMs: 162000,
      mechanic: 'Stray Entropy',
      mits: [
        {
          role: 'Tank',
          party: 2,
          mitigation: 'Reprisal',
          note: 'Use two GCDs after the Stray Apocalypse castbar is completed so it is back for Forsaken.'
        }
      ]
    },
    {
      phase: 'p5',
      startTimeMs: 171000,
      mechanic: 'Maddening Orchestra',
      mits: [
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Sacred Soil' },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Kerachole' },
        {
          role: 'Tank',
          invuln: 1,
          self: true,
          mitigation: 'Rampart + 40%',
          note: 'Rampart should be pressed just before the Maddening Orchestra cast is complete so it carries over to the 3rd auto.'
        },
        {
          role: 'Tank',
          jobs: ['PLD', 'DRK'],
          invuln: 2,
          self: true,
          mitigation: 'Rampart + 40% + Short Mit + Provoke',
          note: 'Rampart should be pressed just before the Maddening Orchestra cast is complete so it carries over to the 3rd auto. The invulning tank should Provoke as soon Flare/Holy is applied so Kefka is not pulled and they get main threat for the autos.'
        },
        {
          role: 'Tank',
          jobs: ['WAR', 'GNB'],
          invuln: 2,
          self: true,
          mitigation: 'Rampart + 40% + Provoke',
          note: 'Rampart should be pressed just before the Maddening Orchestra cast is complete so it carries over to the 3rd auto. The invulning tank should Provoke as soon Flare/Holy is applied so Kefka is not pulled and they get main threat for the autos.'
        }
      ]
    },
    {
      phase: 'p5',
      startTimeMs: 178000,
      mechanic: 'Flare/Holy',
      mits: [
        { role: 'Tank', invuln: 1, self: true, carryOver: 'Rampart + 40%' },
        {
          role: 'Tank',
          invuln: 2,
          self: true,
          mitigation: 'Invulnerability',
          note: 'Invulnerabilities should be used just before the Flare/Holy debuffs expire so that they can cover two autos.'
        }
      ]
    },
    {
      phase: 'p5',
      startTimeMs: 183000,
      mechanic: 'Fell Forces (3x)',
      mits: [
        {
          role: 'Healer',
          jobs: ['WHM'],
          mitigation: 'Assist Tanks',
          note: 'Healers should monitor the tanks during Maddening Orchestra (especially the Flare tank) and Fell Forces. For WAR/DRK, you will need to have single target burst healing prepared after their invulnerability expires so they can survive the 3rd auto.'
        },
        {
          role: 'Tank',
          invuln: 2,
          label: '1st hit',
          self: true,
          carryOver: 'Invulnerability (Solo)'
        },
        {
          role: 'Tank',
          invuln: 2,
          label: '2nd hit',
          self: true,
          carryOver: 'Invulnerability (Solo)'
        },
        {
          role: 'Tank',
          invuln: 1,
          label: '3rd hit',
          self: true,
          mitigation: 'Rampart + Short Mit',
          note: 'Rampart should be pressed just before the Maddening Orchestra cast is complete so it carries over to the 3rd auto.'
        },
        {
          role: 'Tank',
          invuln: 2,
          label: '3rd hit',
          self: true,
          mitigation: 'Rampart + Short Mit',
          note: 'Rampart should be pressed just before the Maddening Orchestra cast is complete so it carries over to the 3rd auto.'
        }
      ],
      note: 'The third auto must be shared as invulnerabilities will run out.',
      noteRoles: ['Tank'],
      noteSelf: true
    },
    {
      phase: 'p5',
      startTimeMs: 200000,
      mechanic: 'Forsaken (1st Hit)',
      extras: true,
      mits: [
        { role: 'Tank', party: 1, mitigation: 'Reprisal + Party Mit' },
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Temperance' },
        { role: 'Healer', jobs: ['AST'], mitigation: 'Neutral Sect + Collective Unconscious' },
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Spreadlo + Fey Illumination + Sacred Soil' },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Zoe Shields + Holos + Kerachole' },
        { role: 'Melee', party: 2, mitigation: 'Feint' }
      ]
    },
    {
      phase: 'p5',
      startTimeMs: 205000,
      mechanic: 'Forsaken Bonds (2nd Hit)',
      mits: [
        { role: 'Tank', party: 1, jobs: ['PLD', 'WAR'], carryOver: 'Reprisal' },
        { role: 'Tank', party: 1, jobs: ['DRK', 'GNB'], carryOver: 'Reprisal + Party Mit' },
        {
          role: 'Healer',
          jobs: ['WHM'],
          mitigation: 'Liturgy of the Bell',
          carryOver: 'Temperance'
        },
        { role: 'Healer', jobs: ['AST'], carryOver: 'Neutral Sect + Collective Unconscious' },
        {
          role: 'Healer',
          jobs: ['SCH'],
          mitigation: 'Seraphism',
          carryOver: 'Fey Illumination + Sacred Soil'
        },
        {
          role: 'Healer',
          jobs: ['SGE'],
          mitigation: 'Philosophia',
          carryOver: 'Holos + Kerachole'
        },
        { role: 'Melee', party: 2, carryOver: 'Feint' }
      ]
    },
    {
      phase: 'p5',
      startTimeMs: 208000,
      mechanic: 'Forsaken (3rd Hit)',
      mits: [
        { role: 'Tank', party: 1, jobs: ['PLD', 'WAR'], carryOver: 'Reprisal' },
        { role: 'Tank', party: 1, jobs: ['DRK', 'GNB'], carryOver: 'Reprisal + Party Mit' },
        { role: 'Healer', jobs: ['WHM'], carryOver: 'Temperance' },
        {
          role: 'Healer',
          jobs: ['AST'],
          mitigation: 'Macrocosmos',
          carryOver: 'Neutral Sect + Collective Unconscious'
        },
        {
          role: 'Healer',
          jobs: ['SCH'],
          mitigation: 'Expedient',
          carryOver: 'Fey Illumination + Sacred Soil'
        },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Panhaima', carryOver: 'Holos + Kerachole' },
        { role: 'Melee', party: 2, carryOver: 'Feint' }
      ]
    },
    {
      phase: 'p5',
      startTimeMs: 214000,
      mechanic: 'Forsaken Bonds (4th Hit)',
      mits: [
        { role: 'Tank', party: 1, jobs: ['PLD', 'WAR'], carryOver: 'Reprisal' },
        { role: 'Tank', party: 1, jobs: ['DRK', 'GNB'], carryOver: 'Reprisal + Party Mit' },
        { role: 'Healer', jobs: ['WHM'], carryOver: 'Temperance' },
        { role: 'Healer', jobs: ['AST'], carryOver: 'Neutral Sect' },
        { role: 'Healer', jobs: ['SCH'], carryOver: 'Fey Illumination + Expedient' },
        { role: 'Healer', jobs: ['SGE'], carryOver: 'Holos + Panhaima' },
        { role: 'Melee', party: 2, carryOver: 'Feint' }
      ]
    },
    {
      phase: 'p5',
      startTimeMs: 217000,
      mechanic: 'Forsaken (5th Hit)',
      mits: [
        { role: 'Tank', party: 2, mitigation: 'Reprisal + Party Mit' },
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Divine Caress', carryOver: 'Temperance' },
        { role: 'Healer', jobs: ['AST'], mitigation: 'Sun Sign' },
        { role: 'Healer', jobs: ['SCH'], carryOver: 'Expedient' },
        { role: 'Healer', jobs: ['SGE'], carryOver: 'Holos + Panhaima' },
        { role: 'Melee', party: 1, mitigation: 'Feint' },
        { role: 'Ranged', party: 1, mitigation: 'Party Mit' },
        { role: 'Ranged', party: 2, mitigation: 'Addle' }
      ]
    },
    {
      phase: 'p5',
      startTimeMs: 222000,
      mechanic: 'Forsaken Bonds (6th Hit)',
      mits: [
        { role: 'Tank', party: 2, jobs: ['PLD', 'WAR'], carryOver: 'Reprisal' },
        { role: 'Tank', party: 2, jobs: ['DRK', 'GNB'], carryOver: 'Reprisal + Party Mit' },
        { role: 'Healer', jobs: ['WHM'], mitigation: 'Plenary Indulgence' },
        { role: 'Healer', jobs: ['AST'], carryOver: 'Sun Sign' },
        { role: 'Healer', jobs: ['SCH'], carryOver: 'Expedient' },
        { role: 'Healer', jobs: ['SGE'], carryOver: 'Panhaima' },
        { role: 'Melee', party: 1, carryOver: 'Feint' },
        { role: 'Ranged', party: 1, carryOver: 'Party Mit' },
        { role: 'Ranged', party: 2, carryOver: 'Addle' }
      ]
    },
    {
      phase: 'p5',
      startTimeMs: 225000,
      mechanic: 'Forsaken (7th Hit)',
      mits: [
        { role: 'Tank', party: 2, jobs: ['PLD', 'WAR'], carryOver: 'Reprisal' },
        { role: 'Tank', party: 2, jobs: ['DRK', 'GNB'], carryOver: 'Reprisal + Party Mit' },
        { role: 'Healer', jobs: ['WHM'], carryOver: 'Plenary Indulgence' },
        { role: 'Healer', jobs: ['AST'], carryOver: 'Sun Sign' },
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Seraph' },
        { role: 'Healer', jobs: ['SGE'], carryOver: 'Panhaima' },
        { role: 'Melee', party: 1, carryOver: 'Feint' },
        { role: 'Ranged', party: 1, carryOver: 'Party Mit' },
        { role: 'Ranged', party: 2, carryOver: 'Addle' }
      ]
    },
    {
      phase: 'p5',
      startTimeMs: 230000,
      mechanic: 'Forsaken Bonds (8th Hit)',
      mits: [
        { role: 'Tank', party: 2, jobs: ['PLD', 'WAR'], carryOver: 'Reprisal' },
        { role: 'Tank', party: 2, jobs: ['DRK', 'GNB'], carryOver: 'Reprisal + Party Mit' },
        { role: 'Healer', jobs: ['WHM'], carryOver: 'Plenary Indulgence' },
        { role: 'Healer', jobs: ['AST'], carryOver: 'Sun Sign' },
        { role: 'Healer', jobs: ['SCH'], mitigation: 'Seraph + Sacred Soil' },
        { role: 'Healer', jobs: ['SGE'], mitigation: 'Kerachole' },
        { role: 'Melee', party: 1, carryOver: 'Feint' },
        { role: 'Ranged', party: 1, carryOver: 'Party Mit' },
        { role: 'Ranged', party: 2, carryOver: 'Addle' }
      ]
    }
  ]
};
