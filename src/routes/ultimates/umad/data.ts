import type { FightConfig, PhaseStrats, Strat } from '$lib/types';

// P1: Kefka. Descriptions/images intentionally left blank for now - the phase
// and mechanic scaffolding goes in first, details get filled in as teams refine.
const allP1: PhaseStrats[] = [
  {
    phaseName: 'Graven 1: Fire + Ice',
    tag: 'p1',
    mechs: [
      {
        mechanic: 'Tankbuster',
        description: 'Hits 1st in threat, then 2nd in threat',
        imageUrl: './umad/fireice-tankbuster.webp'
      },
      {
        mechanic: 'Start',
        description: 'Supports West, DPS East\nTether = knockback\nFake Fire (top ring) = opposite of stack/spread marker\nFake Ice (bottom ring) = stand in purple',
        imageUrl: './umad/fireice-start.webp'
      },
      {
        mechanic: 'Stack',
        description: 'Supports West, DPS East',
        imageUrl: './umad/fireice-stack.webp'
      },
      {
        mechanic: 'Spread',
        description: 'Supports West, DPS East\nMT/M1 spread N/S on hitbox\nOT/M2 spread E/W on hitbox',
        imageUrl: './umad/fireice-spread.webp'
      },
    ]
  },
  {
    phaseName: 'Graven 1: Lasers + Towers',
    tag: 'p1',
    mechs: [
      {
        mechanic: 'Conga',
        description: "HHTTMMRR Conga\n2 DPS + 2 Supports get hit and spawn towers",
        imageUrl: './umad/lasers-conga.webp'
      },
      {
        mechanic: 'Towers',
        description: "Use same West -> East prio on your half to soak towers if you didn't get hit",
        imageUrl: './umad/lasers-towers.webp'
      }
    ]
  },
  {
    phaseName: 'Graven 1: First Confetti',
    tag: 'p1',
    mechs: [
      {
        mechanic: 'Knockback',
        description: 'One player from each role will get a Confetti debuff = stack + knockback from that player',
        imageUrl: './umad/confetti1-knockback.webp'
      },
      {
        mechanic: 'Lightning + Ice',
        description: 'Lightning = top ring & lines\nIce = bottom ring & quadrants',
        imageUrl: './umad/confetti1-lightning-ice.webp'
      }
    ]
  },
  {
    phaseName: 'Graven 2: Puddles',
    tag: 'p1',
    mechs: [
      {
        mechanic: 'First Puddle',
        description: "G1 stack North, G2 stack South in safe quadrant\nCenter tether = Gravity Stack + Puddle\nRight side tether = Rocks",
        imageUrl: './umad/puddles-first-puddle.webp'
      },
      {
        mechanic: 'First Rocks',
        description: "Gravity goes off, rocks spread on their half\nMelees/Tanks can go E/W of boss hitbox\nGravity players can go middle",
        imageUrl: './umad/puddles-first-rocks.webp'
      },
      {
        mechanic: 'Tankbuster',
        description: "Same conal tankbuster as first one",
        imageUrl: './umad/puddles-tankbuster.webp'
      },
      {
        mechanic: 'First Half-room',
        description: "Boss orb telegraphs half-room cleave",
        imageUrl: './umad/puddles-first-halfroom.webp'
      },
      {
        mechanic: 'Second Puddle',
        description: "Go back out to place second puddles next to first ones",
        imageUrl: './umad/puddles-second-puddle.webp'
      },
      {
        mechanic: 'Second Rocks',
        description: "Gravity goes off, rocks spread on their half\nMelees/Tanks can go E/W of boss hitbox\nGravity players can go middle",
        imageUrl: './umad/puddles-second-rocks.webp'
      },
      {
        mechanic: 'Second Half-room',
        description: "Boss orb telegraphs half-room cleave\nSupports preposition North\nDPS preposition South",
        imageUrl: './umad/puddles-second-halfroom.webp'
      },
    ]
  },
  {
    phaseName: 'Graven 2: Second Confetti',
    tag: 'p1',
    mechs: [
      {
        mechanic: 'Knockback',
        description: "Supports North, DPS South\nParty stack on inside of hitbox\nConfetti move out into puddle buttcrack",
        imageUrl: './umad/confetti2-knockback.webp'
      },
      {
        mechanic: 'Puddle Soak',
        description: "Get knocked back through the puddles, then stand in the venn diagram to soak\nConfettis step back to help soak",
        imageUrl: './umad/confetti2-puddle-soak.webp'
      }
    ]
  },
  {
    phaseName: 'Graven 3: Arrows',
    tag: 'arrows',
    mechs: {
      mgr: [
        {
          mechanic: 'Placement',
          description: "Everyone gets 2 Arrow debuffs\nOne role gets 2x same, one role gets 2x different\nPlace arrows rotating CLOCKWISE using markers",
          imageUrl: './umad/arrows-placement.webp'
        },
        {
          mechanic: 'Arrow Solve',
          description: "Same Arrows: Place on Letter + 1 CCW of Letter\nDifferent Arrows: Use Leftmost debuff to solve side\nPlace depending on debuff timers",
          imageUrl: './umad/arrows-arrow-solve.webp'
        },
        {
          mechanic: 'Knockback',
          description: "Supports NW, DPS SE for Confetti KB\nConfetti debuffs on the 1/3 markers",
          imageUrl: './umad/arrows-knockback.webp'
        },
        {
          mechanic: 'Sleep/Confuse (Fixed positions)',
          description: "IGNORE DEBUFFS, use fixed tether spots\nLeft tether = Confuse, Right tether = Sleep",
          imageUrl: './umad/arrows-sleep-confuse.webp'
        },
      ],
      pinoy: [
        {
          mechanic: 'Placement',
          description: "Everyone gets 2 Arrow debuffs\nOne role gets 2x same, one role gets 2x different\nPlace arrows in a box on intercards",
          imageUrl: './umad/arrows-pinoy-placement-1.webp'
        },
        {
          mechanic: 'Arrow Solve',
          description: "Same Arrows: Place on outside intercard facing CCW\nDifferent Arrows: Arrows point towards your corner\nPlace on marker + outside depending on debuff timers",
          imageUrl: './umad/arrows-pinoy-solve-2.webp'
        },
        {
          mechanic: 'Knockback',
          description: "Supports North, DPS South Confetti KB\nNon-Confetti on boss hitbox\nGet knocked through boss",
          imageUrl: './umad/arrows-pinoy-knockback-1.webp'
        },
        {
          mechanic: 'Sleep/Confuse (Fixed positions)',
          description: "IGNORE DEBUFFS, use fixed spots\nG1 West, G2 East\nTank/Range North, Healer/Melee South\nRanged inside the arrow box, Melees on boss hitbox intercards",
          imageUrl: './umad/arrows-pinoy-sleep-confuse.webp'
        },
      ]
    }
  },
  {
    phaseName: 'Gaze + Fire + Lightning',
    tag: 'p1',
    mechs: [
      {
        mechanic: 'Static Spots',
        description: "After teleports, preposition in shown spots",
        imageUrl: './umad/gaze-static-spots.webp'
      },
      {
        mechanic: 'Spread',
        description: "Make sure to solve Gaze (on statue) + Lightning lines\nMelee on unsafe half move under boss",
        imageUrl: './umad/gaze-spread.webp'
      },
      {
        mechanic: 'Stack',
        description: "Supports on 3 > 2 waymark\nDPS on 1 > 4 waymark",
        imageUrl: './umad/gaze-stack.webp'
      }
    ]
  }
];

// P2: God Kefka - placeholder until phases are discovered.
const allP2: PhaseStrats[] = [
  {
    phaseName: 'God Kefka',
    tag: 'p2',
    description: 'Under construction - phases will be added as teams discover and refine them.'
  }
];

const allP3: PhaseStrats[] = [
  {
    phaseName: 'Chaos and Exdeath',
    tag: 'p3',
    description: 'Under construction - phases will be added as teams discover and refine them.'
  }
];

const kefkabinStrat: Strat = {
  stratName: 'kefkabin',
  description: '',
  stratUrl: {
    'Kefka Bin': 'https://pastebin.com/7fs57PyQ',
    'UMAD P1: Merry Go Round by Fae Fiyaa': 'https://docs.google.com/presentation/d/1-E2rEKa586KKiVNvtt3EAMQY2YAEVBRGcMX0WzORIq8/edit?usp=sharing',
  },
  notes: 'This strat will likely change! Refer to the original resources for the most up-to-date versions',
  strats: [...allP1, ...allP2, ...allP3]
};

export const dancingMadStrats: Strat[] = [kefkabinStrat];

export const dancingMadFightConfig: FightConfig = {
  fightKey: 'umad',
  title: 'Dancing Mad (Ultimate)',
  abbreviatedTitle: 'Kefka',
  subtitle: 'Kefka 7.51',
  cheatsheetTitle: 'Dancing Mad Cheatsheet',
  strats: {
    kefkabin: { label: 'Kefkabin', defaults: { arrows: 'mgr' } }
  },
  toggles: [
    {
      key: 'arrows',
      label: 'Arrows',
      defaultValue: 'mgr',
      isMechToggle: true,
      phaseTag: 'arrows',
      options: [
        { value: 'mgr', label: 'Merry-Go-Round' },
        { value: 'pinoy', label: 'Filipino Box', url: {name: 'Filipino Box Graven 3', url: 'https://raidplan.io/plan/5rf2uhud5ztsbud5' }},
      ]
    }
  ],
  tabTags: {
    'P1: Kefka': ['p1', 'arrows'],
    'P2: God Kefka': ['p2'],
    'P3: Chaos and Exdeath': ['p3']
  },
  useMainPageTabs: true,
  defaultStratName: 'pf',
  timeline: []
};
