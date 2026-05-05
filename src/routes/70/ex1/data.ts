import type { Strat, FightConfig, MechanicStrat } from '$lib/types';
import {
  getCircleMaskUrl,
  getMultiCircleMaskUrl,
  getRectMaskUrl
} from '$lib/utils';

// ============================================================
// Fight Config
// ============================================================

export const ex1FightConfig: FightConfig = {
  fightKey: 'ex1',
  title: 'Worqor Lar Dor (Extreme)',
  abbreviatedTitle: 'EX1',
  subtitle: 'EX1 Patch 7.0',
  cheatsheetTitle: 'EX1 Cheatsheet',
  strats: {
    hector: {
      label: 'Hector',
      badges: [{ text: 'NA', class: 'na-badge' }]
    }
  },
  defaultStratName: 'hector',
};

export const hector: Strat = {
  stratName: 'hector',
  description: '',
  stratUrl: {
    'Video by Hector Hectorson': 'https://www.youtube.com/watch?v=8HV2dk3jvNo',
    'Icy Veins Guide': 'https://www.icy-veins.com/ffxiv/worqor-lar-dor-extreme-trial-guide'
  },
  strats: [
    {
      phaseName: 'Setup',
      mechs: [
        {
          mechanic: 'Light Parties',
          description: '',
          imageUrl: './ex1/hector-setup-1.webp'
        },
        {
          mechanic: 'Partners (Out)',
          description: 'Tell: Valigarmanda gathers its strength...',
          imageUrl: './ex1/hector-setup-2.webp'
        },
        {
          mechanic: 'Partners (Cone)',
          description: `Tell: Blinding energies build within Valigarmanda's wide-open beak...`,
          imageUrl: './ex1/hector-setup-3.webp'
        },
        {
          mechanic: 'Partners (Donut)',
          description: 'Tell: A tempestuous wind surrounds Valigarmanda...',
          imageUrl: './ex1/hector-setup-4.webp'
        },
        {
          mechanic: 'Spreads',
          imageUrl: './ex1/hector-setup-5.webp'
        }
      ]
    },
    {
      phaseName: 'Spikesicle',
      mechs: [
        {
          mechanic: 'Read Telegraph',
          description: 'Watch the 2nd line AoE side\nHug middle wall on that side',
          imageUrl: './ex1/hector-spikesicle-1.webp'
        },
        {
          mechanic: 'Dodge',
          description: 'After 2 lines fire, cross to opposite side of arrow\nAfter 2 explosions, sit at top of arrow\nWait there for the rest',
          imageUrl: './ex1/hector-spikesicle-4.webp'
        }
      ]
    },
    {
      phaseName: 'Fire Phase',
      mechs: [
        {
          mechanic: 'Volcanic Drop',
          description: 'Run opposite the erupting volcano\nDodge two sets of player puddles',
          imageUrl: './ex1/hector-volcanic-drop.webp'
        },
        {
          mechanic: 'Scourge of Ice',
          description: 'Keep moving for ~2s after debuff expires or freeze',
          imageUrl: './ex1/hector-triscourge-fire.webp'
        },
        {
          mechanic: 'Mountain Fire',
          description: 'MT/OT alternate every soak (6 swaps)\nVuln + DoT — invuln cheese kills you (DoT outlasts)\n1st tower North — party hides directly behind tank\nBoss randomly shifts L/R after each — adjust behind tank from boss',
          imageUrl: './ex1/hector-mountain-fire.webp'
        },
        {
          mechanic: 'Scourge of Fire',
          description: 'Party stack w/ fire puddles\nLight parties go C/D, walk forward each hit\nMove off final puddle',
          imageUrl: './ex1/hector-calamitys-inferno.webp'
        },
        {
          mechanic: 'Scourge of Thunder',
          description: 'Thunder spread on every player\nLoose YOLO spread',
          imageUrl: './ex1/hector-calamitys-bolt.webp'
        },
      ]
    },
    {
      phaseName: 'Adds',
      mechs: [
        {
          mechanic: 'Calamitous Cry',
          description: 'G1 Left, G2 Right\nStacks are wild charges, tanks in front',
          imageUrl: './ex1/hector-calamitous-cry.webp'
        },
      ]
    },
    {
      phaseName: 'Thunder Phase',
      mechs: [
        {
          mechanic: 'Fire Stacks',
          description: 'Single hit light party stacks\nAll players should be either floating or on the ground',
          imageUrl: './ex1/hector-lightning-fire.webp'
        },
        {
          mechanic: 'Hail of Feathers',
          description: '6 prox AoEs start L/R, circle the stage\nBurn 1st (or 2nd) feather ASAP',
          imageUrl: './ex1/hector-lightning-hail.webp'
        },
        {
          mechanic: 'Blighted Bolt',
          description: 'Stay on tile of feather you killed',
          imageUrl: './ex1/hector-lightning-blighted.webp'
        },
        {
          mechanic: 'Thunder/Ice Spread',
          description: 'Thunder = ground, Ice = floating\nSpread loosely on separate tiles',
          imageUrl: './ex1/hector-lightning-debuffs.webp'
        },
        {
          mechanic: 'Crackling Cataclysm',
          description: 'Out/Cone/Donut telegraph + Twister AoE\nMove after Out/Cone/Donut goes off',
          imageUrl: './ex1/hector-lightning-crackling.webp'
        },
        {
          mechanic: 'Thunderous Breath',
          description: 'Float to avoid cone in safe lane',
          imageUrl: './ex1/hector-lightning-breath.webp'
        },
        {
          mechanic: 'Knockback Tower',
          description: 'Everyone pop KBI and ignore KB\nBoth tanks soak tower',
          imageUrl: './ex1/hector-ruinfall.webp'
        },
      ]
    },
    {
      phaseName: 'Ice Phase',
      mechs: [
        {
          mechanic: 'Fire/Ice',
          description: 'Tanks go towards boss on 2/3\nLight party 3-person stacks on C/D',
          imageUrl: './ex1/hector-ice-fire-ice.webp'
        },
        {
          mechanic: 'Avalanche',
          description: 'Dodge avalanche + Out/Cone/Donut',
          imageUrl: './ex1/hector-ice-avalanche.webp'
        },
        {
          mechanic: 'Northern Cross',
          description: 'Find the North ice star AoE\nDodge to the opposite side\nSafe spot is inline with 1 and 4 waymarks',
          imageUrl: './ex1/hector-ice-cross.webp'
        },
        {
          mechanic: 'Thunder Spread',
          description: 'One role gets thunder spreads',
          imageUrl: './ex1/hector-ice-thunder.webp'
        },
        {
          mechanic: 'Spikesicle',
          description: 'Same Spikesicle dodge as before with avalanche\nIf avalanche is north, adjust slightly left',
          imageUrl: './ex1/hector-ice-spike.webp'
        },
        {
          mechanic: 'Freezing Dust',
          description: 'Keep moving ~2s after castbar or freeze\n4 more thunder spreads after'
        },
        {
          mechanic: 'Ice Talon',
          description: 'AoE Tankbuster on top 2 aggro (not role-based)',
          imageUrl: './ex1/hector-ice-talon.webp'
        }
      ]
    },
    {
      phaseName: 'Enrage',
      mechs: [
        {
          mechanic: 'Tulidisaster',
          description: '3rd cast is Enrage'
        }
      ]
    }
  ]
};

export const ex1Strats: Strat[] = [hector];
