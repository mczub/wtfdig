import type { Strat, FightConfig, StratRecord, PlayerMechStrat, MechanicStrat } from '$lib/types';
import { getStringObject, getStratArray, getCircleMaskUrl, getMultiCircleMaskUrl, getRectMaskUrl } from '$lib/utils';

const toxicFirewatersnaking: MechanicStrat[] = [
  {
    mechanic: "Debuffs",
    description: "Proximity bait debuff\nG1 near Blue, G2 near Red\nSwap to boss that matches your color",
    imageUrl: "./m10s/toxic-snaking-debuffs.webp"
  },
  {
    mechanic: "Puddles + Proteans",
    description: "🔥 Place puddles on east wall in box shape\n💦 Giga tight spread in SW corner",
    imageUrl: "./m10s/toxic-snaking-pp.webp"
  },
  {
    mechanic: "Wide Cleave",
    description: "Blue jumps to N or S and does wide cleave\n💦 1 ball = Stack, 4 balls = spread\nTrue North, 🔥 East, 💦 West",
    imageUrl: "./m10s/toxic-snaking-cleave.webp"
  },
  {
    mechanic: "Far Jumps",
    description: "🔥 Boss jumps on furthest fire player 4x\nIntercard markers for bait\n1 = Tank, 2 = Healer, 3 = Melee, 4 = Ranged\nMove to middle after bait\nKB + 💦 Stack/Spread after Fire baits",
    imageUrl: "./m10s/toxic-snaking-far.webp"
  },
  {
    mechanic: "Cutback Blaze + TB",
    description: "Pull Fire mid\nParty stack South to bait Cutback Blaze\nParty stay under boss\nTank run North to bait TB",
    imageUrl: "./m10s/toxic-snaking-cb.webp"
  }
];

const nomnomFirewatersnaking: MechanicStrat[] = [
  {
    mechanic: "Debuffs",
    description: "Proximity bait debuff\nG1 near Blue, G2 near Red\nSwap to boss that matches your color",
    imageUrl: "./m10s/nomnom-snaking-debuffs.webp"
  },
  {
    mechanic: "Puddles + Proteans",
    description: "🔥 Place puddles on east wall in box shape\n💦 Protean spread in SW corner",
    imageUrl: "./m10s/nomnom-snaking-pp.webp"
  },
  {
    mechanic: "Wide Cleave",
    description: "Blue jumps to N or S and does wide cleave\n💦 1 ball = Stack, 4 balls = spread\nTrue North, 🔥 East, 💦 West",
    imageUrl: "./m10s/nomnom-snaking-wide.webp"
  },
  {
    mechanic: "Far Jumps",
    description: "🔥 Boss jumps on furthest fire player 4x\nTHMR\n1/3 (T/M) North 2/4 (H/R) South\nStay near center if not baiting\nImmediately run mid after bait",
    imageUrl: "./m10s/nomnom-snaking-far.webp"
  },
  {
    mechanic: "Sickest Take-off",
    description: "KB Immune + 💦 Watch Stack/Spread telegraph",
    imageUrl: "./m10s/nomnom-snaking-sickest.webp"
  },
  {
    mechanic: "Stacks/Spreads",
    description: "Position Red near middle and Blue away from Take-off cleave lane\n💦 Resolve Stack/Spread\n🔥 Behind Red on unsafe side to bait pie slice E or W",
    imageUrl: "./m10s/nomnom-snaking-stacks.webp"
  },
  {
    mechanic: "Cutback Blaze + TB",
    description: "Move into safespot\nBlue tank bait TB far",
    imageUrl: "./m10s/nomnom-snaking-tb.webp"
  }
];

const firewatersnakingMechs: Record<string, MechanicStrat[]> = { toxic: toxicFirewatersnaking, nomnom: nomnomFirewatersnaking };

export const m10sFightConfig: FightConfig = {
  fightKey: "m10s",
  title: "AAC Heavyweight M2 (Savage)",
  abbreviatedTitle: "M10S",
  subtitle: "M10S Patch 7.4",
  cheatsheetTitle: "M10S Cheatsheet",
  useModernCheatsheet: true,
  strats: {
    toxic: {
      label: "Toxic Friends",
      defaults: {
        snaking: "toxic"
      },
      badges: [
        {
          text: "NA",
          class: "bg-blue-600 text-white"
        }
      ]
    }
  },
  toggles: [
    {
      key: "snaking",
      label: "Fire/Watersnaking",
      defaultValue: "toxic",
      options: [
        {
          value: "toxic",
          label: "Toxic"
        },
        {
          value: "nomnom",
          label: "nomnom"
        }
      ]
    }
  ],
  defaultStratName: "toxic"
};

export const toxic: Strat = {
  stratName: "toxic",
  stratUrl: {
    Raidplan: "https://raidplan.io/plan/syjvfhacdxz7awet",
    "Improved (by Cake Shake)": "https://raidplan.io/plan/uE1jm_M3oD-P6Ww8"
  },
  description: "Last updated from Raidplan 1/7/2026 7pm PST",
  strats: [
    {
      phaseName: "Opening",
      mechs: [
        {
          mechanic: "Flame Floater",
          description: "1st: CCW corner\n2nd: CCW wall\n3rd: Back in corner\n4th: Back at start",
          imageUrl: "./m10s/toxic-floater.webp"
        },
        {
          mechanic: "Alley-oop Inferno",
          description: "Melee close, ranged far/yolo\nPull enemy back to mid ASAP after",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Close to boss",
              imageUrl: "./m10s/toxic-inferno.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "Close to boss",
              imageUrl: "./m10s/toxic-inferno.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "Far from boss",
              imageUrl: "./m10s/toxic-inferno.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "Far from boss",
              imageUrl: "./m10s/toxic-inferno.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "Close to boss",
              imageUrl: "./m10s/toxic-inferno.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "Close to boss",
              imageUrl: "./m10s/toxic-inferno.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "Far from boss",
              imageUrl: "./m10s/toxic-inferno.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "Far from boss",
              imageUrl: "./m10s/toxic-inferno.webp"
            }
          ]
        },
        {
          mechanic: "Cutback Blaze",
          description: "Stack between boss and fire\nBait narrow slice behind boss",
          imageUrl: "./m10s/toxic-cutback1.webp"

        },
        {
          mechanic: "Pyrotation",
          description: "3 hit party stack\nEach stack leaves a puddle",
          imageUrl: "./m10s/toxic-pyrotation.webp"
        }
      ]
    },
    {
      phaseName: "Sickest Take-off",
      mechs: [
        {
          mechanic: "2 Balls",
          description: "Light parties\nG1 Left, G2 Right facing boss",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Left/Relative West",
              imageUrl: "./m10s/toxic-2balls.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "Right/Relative East",
              imageUrl: "./m10s/toxic-2balls.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "Left/Relative West",
              imageUrl: "./m10s/toxic-2balls.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "Right/Relative East",
              imageUrl: "./m10s/toxic-2balls.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "Left/Relative West",
              imageUrl: "./m10s/toxic-2balls.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "Right/Relative East",
              imageUrl: "./m10s/toxic-2balls.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "Left/Relative West",
              imageUrl: "./m10s/toxic-2balls.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "Right/Relative East",
              imageUrl: "./m10s/toxic-2balls.webp"
            }
          ]
        },
        {
          mechanic: "8 Balls",
          description: "Spread\nG1 Left, G2 Right facing boss",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Left/Relative West",
              imageUrl: "./m10s/toxic-8balls.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "Right/Relative East",
              imageUrl: "./m10s/toxic-8balls.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "Left/Relative West",
              imageUrl: "./m10s/toxic-8balls.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "Right/Relative East",
              imageUrl: "./m10s/toxic-8balls.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "Left/Relative West",
              imageUrl: "./m10s/toxic-8balls.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "Right/Relative East",
              imageUrl: "./m10s/toxic-8balls.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "Left/Relative West",
              imageUrl: "./m10s/toxic-8balls.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "Right/Relative East",
              imageUrl: "./m10s/toxic-8balls.webp"
            }
          ]
        }
      ]
    },
    {
      phaseName: "Reverse/Double-dip",
      mechs: [
        {
          mechanic: "Proteans",
          description: "‼️BOSS RELATIVE CLOCK SPOTS",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Relative North",
              imageUrl: "./m10s/toxic-protean1.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "Relative South",
              imageUrl: "./m10s/toxic-protean1.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "Relative West",
              imageUrl: "./m10s/toxic-protean1.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "Relative East",
              imageUrl: "./m10s/toxic-protean1.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "Relative Southwest",
              imageUrl: "./m10s/toxic-protean1.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "Relative Southeast",
              imageUrl: "./m10s/toxic-protean1.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "Relative Northwest",
              imageUrl: "./m10s/toxic-protean1.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "Relative Northeast",
              imageUrl: "./m10s/toxic-protean1.webp"
            }
          ]
        },
        {
          mechanic: "2nd Hit",
          description: "Double-dip = Dodge into empty slice\nReverse = Stay",
          imageUrl: "./m10s/toxic-protean1.webp"
        }
      ]
    },
    {
      phaseName: "Deep Impact",
      description: "Tankbuster baited on furthest player\nDoes a small KB",
      imageUrl: "./m10s/toxic-impact.webp"
    },
    {
      phaseName: "Insane Air 1",
      mechs: [
        {
          mechanic: "Start",
          description: "G1 Northwest, G2 Southeast",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Northwest (Deep Blue)",
              imageUrl: "./m10s/toxic-insane1-start.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "Southeast (Red Hot)",
              imageUrl: "./m10s/toxic-insane1-start.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "Northwest (Deep Blue)",
              imageUrl: "./m10s/toxic-insane1-start.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "Southeast (Red Hot)",
              imageUrl: "./m10s/toxic-insane1-start.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "Northwest (Deep Blue)",
              imageUrl: "./m10s/toxic-insane1-start.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "Southeast (Red Hot)",
              imageUrl: "./m10s/toxic-insane1-start.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "Northwest (Deep Blue)",
              imageUrl: "./m10s/toxic-insane1-start.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "Southeast (Red Hot)",
              imageUrl: "./m10s/toxic-insane1-start.webp"
            }
          ]
        },
        {
          mechanic: "Surfboards",
          description: "Down-left: Proteans\nLeft: Light party stack\nUp-left: Tankbuster on closest\n🔥 Fire leaves stuff on the ground",
          imageUrl: "./m10s/natus-surfboards.webp"
        },
        {
          mechanic: "1st Hit",
          description: "Can be any of the 3",
          imageUrl: "./m10s/toxic-insane1-1.webp"
        },
        {
          mechanic: "2nd Hit",
          description: "Can be any of the 3",
          imageUrl: "./m10s/toxic-insane1-2.webp"
        },
        {
          mechanic: "3rd Hit",
          description: "Can be any of the 3",
          imageUrl: "./m10s/toxic-insane1-3.webp"
        },
        {
          mechanic: "4th Hit",
          description: "Can be any of the 3",
          imageUrl: "./m10s/toxic-insane1-4.webp"
        }
      ]
    },
    {
      phaseName: "Fire/Watersnaking",
      tag: "snaking",
      mechs: firewatersnakingMechs
    },
    {
      phaseName: "Deep Aerial",
      mechs: [
        {
          mechanic: "Tethers",
          description: "Healers take ball\n🔥 Fire tether hit the ball\n💦 Water tether don't hit the ball",
          imageUrl: "./m10s/toxic-deep.webp"
        }
      ]
    },
    {
      phaseName: "Arena Split",
      mechs: [
        {
          mechanic: "Start + Puddles",
          description: "G1 West\nG2 East",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Northwest corner, south of R1",
              imageUrl: "./m10s/toxic-split-start.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "Northeast corner, south of R2",
              imageUrl: "./m10s/toxic-split-start.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "Southwest corner",
              imageUrl: "./m10s/toxic-split-start.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "Southeast corner",
              imageUrl: "./m10s/toxic-split-start.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "Southwest corner, north of H1",
              imageUrl: "./m10s/toxic-split-start.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "Southeast corner, north of H2",
              imageUrl: "./m10s/toxic-split-start.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "Northwest corner",
              imageUrl: "./m10s/toxic-split-start.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "Northeast corner",
              imageUrl: "./m10s/toxic-split-start.webp"
            }
          ]
        },
        {
          mechanic: "Proteans",
          description: "Deep Blue jumps to one side\nBait proteans\nDouble-dip = dodge into intercard\nReverse = dodge to cardinal",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "North of middle",
              imageUrl: "./m10s/toxic-split-proteans.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "North of middle",
              imageUrl: "./m10s/toxic-split-proteans.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "South",
              imageUrl: "./m10s/toxic-split-proteans.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "South",
              imageUrl: "./m10s/toxic-split-proteans.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "South of middle",
              imageUrl: "./m10s/toxic-split-proteans.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "South of middle",
              imageUrl: "./m10s/toxic-split-proteans.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "North",
              imageUrl: "./m10s/toxic-split-proteans.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "North",
              imageUrl: "./m10s/toxic-split-proteans.webp"
            }
          ]
        },
        {
          mechanic: "Stacks",
          description: "Pair stacks, then resolve KB + Stack/Spread",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Stack near 1 with R1",
              imageUrl: "./m10s/toxic-split-stacks.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "Stack near 2 with R2",
              imageUrl: "./m10s/toxic-split-stacks.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "Stack near 4 with M1",
              imageUrl: "./m10s/toxic-split-stacks.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "Stack near 3 with M2",
              imageUrl: "./m10s/toxic-split-stacks.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "Stack near 4 with H1",
              imageUrl: "./m10s/toxic-split-stacks.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "Stack near 3 with H2",
              imageUrl: "./m10s/toxic-split-stacks.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "Stack near 1 with MT",
              imageUrl: "./m10s/toxic-split-stacks.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "Stack near 2 with OT",
              imageUrl: "./m10s/toxic-split-stacks.webp"
            }
          ]
        }
      ]
    },
    {
      phaseName: "Insane Air 2",
      mechs: [
        {
          mechanic: "Debuffs",
          description: "Start at boss matching debuff color except Healers",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Start at boss matching debuff color",
              imageUrl: "./m10s/toxic-insane2-debuffs.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "Start at boss matching debuff color",
              imageUrl: "./m10s/toxic-insane2-debuffs.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "Start at boss OPPOSITE debuff color",
              imageUrl: "./m10s/toxic-insane2-debuffs.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "Start at boss OPPOSITE debuff color",
              imageUrl: "./m10s/toxic-insane2-debuffs.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "Start at boss matching debuff color",
              imageUrl: "./m10s/toxic-insane2-debuffs.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "Start at boss matching debuff color",
              imageUrl: "./m10s/toxic-insane2-debuffs.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "Start at boss matching debuff color",
              imageUrl: "./m10s/toxic-insane2-debuffs.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "Start at boss matching debuff color",
              imageUrl: "./m10s/toxic-insane2-debuffs.webp"
            }
          ]
        },
        {
          mechanic: "Cleanses + Swaps",
          description: "Cleanse order: H > M > R\nSwap order: M > R\nTanks will swap if it's tankbuster\nM/R swap after mech if next is non-tankbuster\nStay after you cleanse",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "Swap if it's tankbuster\nMake sure to insta-swap if it's TB first",
              imageUrl: "./m10s/toxic-insane2-debuffs.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "Swap if it's tankbuster\nMake sure to insta-swap if it's TB first",
              imageUrl: "./m10s/toxic-insane2-debuffs.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "Just do mechanics and chill",
              imageUrl: "./m10s/toxic-insane2-debuffs.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "Just do mechanics and chill",
              imageUrl: "./m10s/toxic-insane2-debuffs.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "Swap after Healer cleanses for 2nd cleanse",
              imageUrl: "./m10s/toxic-insane2-debuffs.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "Swap after Healer cleanses for 2nd cleanse",
              imageUrl: "./m10s/toxic-insane2-debuffs.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "Swap after Melee cleanses for 3rd cleanse",
              imageUrl: "./m10s/toxic-insane2-debuffs.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "Swap after Melee cleanses for 3rd cleanse",
              imageUrl: "./m10s/toxic-insane2-debuffs.webp"
            }
          ]
        }
      ]
    },
    {
      phaseName: "Double Alley-oop 2",
      mechs: [
        {
          mechanic: "Proteans + Puddles",
          description: "Clock spots\nProteans first, then drop puddles at wall during 2nd hit\nDouble-dip = rotate clockwise\nReverse = Stay",
          strats: [
            {
              role: "Tank",
              party: 1,
              description: "North (A marker)",
              imageUrl: "./m10s/toxic-alley2-proteans.webp"
            },
            {
              role: "Tank",
              party: 2,
              description: "South (C marker)",
              imageUrl: "./m10s/toxic-alley2-proteans.webp"
            },
            {
              role: "Healer",
              party: 1,
              description: "West (D marker)",
              imageUrl: "./m10s/toxic-alley2-proteans.webp"
            },
            {
              role: "Healer",
              party: 2,
              description: "East (B marker)",
              imageUrl: "./m10s/toxic-alley2-proteans.webp"
            },
            {
              role: "Melee",
              party: 1,
              description: "Southwest (4 marker)",
              imageUrl: "./m10s/toxic-alley2-proteans.webp"
            },
            {
              role: "Melee",
              party: 2,
              description: "Southeast (3 marker)",
              imageUrl: "./m10s/toxic-alley2-proteans.webp"
            },
            {
              role: "Ranged",
              party: 1,
              description: "Northwest (1 marker)",
              imageUrl: "./m10s/toxic-alley2-proteans.webp"
            },
            {
              role: "Ranged",
              party: 2,
              description: "Northeast (2 marker)",
              imageUrl: "./m10s/toxic-alley2-proteans.webp"
            }
          ]
        },
        {
          mechanic: "TB + Party Stacks",
          description: "Tank bait TB far\nPuddles will explode, stay center\nStack under Deep Blue, rotate CW around Red Hot",
          imageUrl: "./m10s/toxic-alley2-tb.webp"
        }
      ]
    }
  ]
};

// All strats as an array
export const m10sStrats: Strat[] = [toxic];
