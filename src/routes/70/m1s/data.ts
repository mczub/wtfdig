import type { Strat, FightConfig, StratRecord, PlayerMechStrat } from '$lib/types';
import {
  getStringObject,
  getStratArray,
  getCircleMaskUrl,
  getMultiCircleMaskUrl,
  getRectMaskUrl
} from '$lib/utils';

export const m1sFightConfig: FightConfig = {
  fightKey: 'm1s',
  title: 'AAC Light-Heavyweight M1 (Savage)',
  abbreviatedTitle: 'M1S',
  subtitle: 'M1S Patch 7.0',
  cheatsheetTitle: 'M1S Cheatsheet',
  strats: {
    hector: {
      label: 'Hector Mouser by Hector Hectorson',
      badges: [
        {
          text: 'NA',
          class: 'na-badge'
        }
      ]
    }
  },
  useMainPageTabs: false,
  useModernCheatsheet: true,
  defaultStratName: 'hector'
};

export const hector: Strat = {
  stratName: 'hector',
  stratUrl: {
    'The Hardest Mechanic in FFXIV History - Guide': 'https://www.youtube.com/watch?v=xEX0kAIfTKo'
  },
  description: 'The Hardest Mechanic in FFXIV History by Hector Hectorson (Courtesy Hector Hectorson)',
  strats: [
    {
      phaseName: 'Mouser',
      mechs: [
        {
          mechanic: 'Setup',
          description:
            'Stand on 4 marker',
          imageUrl: './m1s/hector-mouser.webp'
        },
        {
          mechanic: 'If 3 is hit once',
          description:
            'Wipe, GG go next',
          imageUrl: './m1s/hector-3-once.webp'
        },
        {
          mechanic: 'If 3 is hit twice',
          description:
            'Damage down, good to go, wear that crown proudly',
          imageUrl: './m1s/hector-3-twice.webp'
        }
      ]
    },
  ]
};

// All strats as an array
export const m1sStrats: Strat[] = [hector];
