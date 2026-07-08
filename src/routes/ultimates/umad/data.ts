import type { FightConfig, MechanicStrat, PhaseStrats, Strat } from '$lib/types';
import { umadPosterLayout } from './posterData';

const allP1: PhaseStrats[] = [
  {
    phaseName: 'Graven 1: Fire + Ice',
    tag: 'p1',
    mechs: [
      {
        mechanic: 'Tankbuster',
        description: 'Hits 1st in threat, then 2nd in threat',
        imageUrl: {
          default: './umad/fireice-tankbuster.webp',
          alt: {
            eupf: './umad/fireice-tankbuster-eupf.webp',
            lpdu: './umad/fireice-tankbuster-lpdu.webp'
          }
        }
      },
      {
        mechanic: 'Start',
        description:
          'Tether = knockback\nFake Fire (top ring) = opposite of stack/spread marker\nFake Ice (bottom ring) = stand in purple',
        action: 'Supports West, DPS East',
        imageUrl: {
          default: './umad/fireice-start.webp',
          alt: {
            eupf: './umad/fireice-start-eupf.webp',
            lpdu: './umad/fireice-start-lpdu.webp'
          }
        },
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'West'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'West'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'West'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'West'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'East'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'East'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'East'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'East'
          }
        ]
      },
      {
        mechanic: 'Stack',
        action: 'Supports West, DPS East',
        imageUrl: {
          default: './umad/fireice-stack.webp',
          alt: {
            eupf: './umad/fireice-stack-eupf.webp',
            lpdu: './umad/fireice-stack-lpdu.webp'
          }
        },
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'West'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'West'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'West'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'West'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'East'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'East'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'East'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'East'
          }
        ]
      },
      {
        mechanic: 'Spread',
        action: 'Supports West, DPS East\nTanks/Melees on hitbox',
        imageUrl: {
          default: './umad/fireice-spread.webp',
          alt: {
            eupf: './umad/fireice-spread-eupf.webp',
            lpdu: './umad/fireice-spread-lpdu.webp'
          }
        },
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'West half, N/S on hitbox'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'West on hitbox'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'West, middle of safe quadrant'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Far West edge'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'West half, N/S on hitbox'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'East on hitbox'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'East, middle of safe quadrant'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Far East edge'
          }
        ]
      }
    ]
  },
  {
    phaseName: 'Graven 1: Lasers + Towers',
    tag: 'p1',
    mechs: [
      {
        mechanic: 'Conga',
        description: '2 DPS + 2 Supports get hit and spawn towers',
        action: 'HHTTMMRR Conga',
        imageUrl: {
          default: './umad/lasers-conga.webp',
          alt: { eupf: './umad/lasers-conga-eupf.webp', lpdu: './umad/lasers-conga-lpdu.webp' }
        },
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: '3rd from West'
          },
          {
            role: 'Tank',
            party: 2,
            description: '4th from West'
          },
          {
            role: 'Healer',
            party: 1,
            description: '2nd from West'
          },
          {
            role: 'Healer',
            party: 2,
            description: '1st from West'
          },
          {
            role: 'Melee',
            party: 1,
            description: '4th from East'
          },
          {
            role: 'Melee',
            party: 2,
            description: '3rd from East'
          },
          {
            role: 'Ranged',
            party: 1,
            description: '2nd from East'
          },
          {
            role: 'Ranged',
            party: 2,
            description: '1st from East'
          }
        ]
      },
      {
        mechanic: 'Towers',
        action: "Use same West -> East prio on your half to soak towers if you didn't get hit",
        imageUrl: {
          default: './umad/lasers-towers.webp',
          alt: { eupf: './umad/lasers-towers-eupf.webp', lpdu: './umad/lasers-towers-lpdu.webp' }
        }
      }
    ]
  },
  {
    phaseName: 'Graven 1: First Confetti',
    tag: 'p1',
    mechs: [
      {
        mechanic: 'Knockback',
        description:
          'One player from each role will get a Confetti debuff = stack + knockback from that player',
        imageUrl: {
          default: './umad/confetti1-knockback.webp',
          alt: {
            eupf: './umad/confetti1-knockback-eupf.webp',
            lpdu: './umad/confetti1-knockback-lpdu.webp'
          }
        }
      },
      {
        mechanic: 'Lightning + Ice',
        description: 'Lightning = top ring & lines\nIce = bottom ring & quadrants',
        imageUrl: {
          default: './umad/confetti1-lightning-ice.webp',
          alt: {
            eupf: './umad/confetti1-lightning-ice-eupf.webp',
            lpdu: './umad/confetti1-lightning-ice-lpdu.webp'
          }
        }
      }
    ]
  },
  {
    phaseName: 'Graven 2: Puddles',
    tag: 'p1',
    mechs: [
      {
        mechanic: 'First Puddle',
        description: 'Center tether = Puddle\nRight side tether = Rocks',
        action: 'North for 1st puddles',
        imageUrl: {
          default: './umad/puddles-first-puddle.webp',
          alt: {
            eupf: './umad/puddles-first-puddle-eupf.webp',
            lpdu: './umad/puddles-first-puddle-lpdu.webp'
          }
        }
      },
      {
        mechanic: 'First Rocks',
        action:
          'G1 Left, G2 Right\nMelees/Tanks can go E/W of boss hitbox\nGravity players can go middle',
        imageUrl: {
          default: './umad/puddles-first-rocks.webp',
          alt: {
            eupf: './umad/puddles-first-rocks-eupf.webp',
            lpdu: './umad/puddles-first-rocks-lpdu.webp'
          }
        },
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Left, on hitbox'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Right, on hitbox'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Left'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Right'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Left, on hitbox'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Right, on hitbox'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Left'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Right'
          }
        ]
      },
      {
        mechanic: 'Tankbuster',
        description: 'Same conal tankbuster as first one',
        imageUrl: {
          default: './umad/puddles-tankbuster.webp',
          alt: {
            eupf: './umad/puddles-tankbuster-eupf.webp',
            lpdu: './umad/puddles-tankbuster-lpdu.webp'
          }
        }
      },
      {
        mechanic: 'First Half-room',
        description: 'Boss orb telegraphs half-room cleave',
        imageUrl: {
          default: './umad/puddles-first-halfroom.webp',
          alt: {
            eupf: './umad/puddles-first-halfroom-eupf.webp',
            lpdu: './umad/puddles-first-halfroom-lpdu.webp'
          }
        }
      },
      {
        mechanic: 'Second Puddle',
        action: 'South for 2nd Puddles',
        imageUrl: {
          default: './umad/puddles-second-puddle.webp',
          alt: {
            eupf: './umad/puddles-second-puddle-eupf.webp',
            lpdu: './umad/puddles-second-puddle-lpdu.webp'
          }
        }
      },
      {
        mechanic: 'Second Rocks',
        action:
          'G1 go Left, G2 go Right\nMelees/Tanks can go E/W of boss hitbox\nGravity players can go middle',
        imageUrl: {
          default: './umad/puddles-second-rocks.webp',
          alt: {
            eupf: './umad/puddles-second-rocks-eupf.webp',
            lpdu: './umad/puddles-second-rocks-lpdu.webp'
          }
        },
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Left, on hitbox'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Right, on hitbox'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Left'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Right'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Left, on hitbox'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Right, on hitbox'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Left'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Right'
          }
        ]
      },
      {
        mechanic: 'Second Half-room',
        description:
          'Boss orb telegraphs half-room cleave\nSupports preposition North\nDPS preposition South',
        imageUrl: {
          default: './umad/puddles-second-halfroom.webp',
          alt: {
            eupf: './umad/puddles-second-halfroom-eupf.webp',
            lpdu: './umad/puddles-second-halfroom-lpdu.webp'
          }
        }
      }
    ]
  },
  {
    phaseName: 'Graven 2: Second Confetti',
    tag: 'p1',
    mechs: [
      {
        mechanic: 'Knockback',
        action:
          'Supports North, DPS South\nParty stack on inside of hitbox\nConfetti on edge of puddles',
        imageUrl: {
          default: './umad/confetti2-knockback.webp',
          alt: {
            eupf: './umad/confetti2-knockback-eupf.webp',
            lpdu: './umad/confetti2-knockback-lpdu.webp'
          }
        }
      },
      {
        mechanic: 'Puddle Soak',
        action:
          'Get knocked back through boss into opposite puddle\nConfettis step back into puddle',
        imageUrl: {
          default: './umad/confetti2-puddle-soak.webp',
          alt: {
            eupf: './umad/confetti2-puddle-soak-eupf.webp',
            lpdu: './umad/confetti2-puddle-soak-lpdu.webp'
          }
        }
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
          description:
            'Everyone gets 2 Arrow debuffs\nOne role gets 2x same, one role gets 2x different\nPlace arrows rotating CLOCKWISE using markers',
          imageUrl: './umad/arrows-placement.webp'
        },
        {
          mechanic: 'Arrow Solve',
          description:
            'Same Arrows: Place on Letter + 1 CCW of Letter\nDifferent Arrows: Use Leftmost debuff to solve side\nPlace depending on debuff timers',
          imageUrl: './umad/arrows-arrow-solve.webp'
        },
        {
          mechanic: 'Knockback',
          action: 'Supports NW, DPS SE for Confetti KB\nConfetti debuffs on the 1/3 markers',
          imageUrl: './umad/arrows-knockback.webp'
        },
        {
          mechanic: 'Sleep/Confuse (Fixed positions)',
          description:
            'IGNORE DEBUFFS, use fixed tether spots\nTanks/Melee inside, Healers/Ranged outside',
          imageUrl: './umad/arrows-sleep-confuse.webp',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'North, inside'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'West, inside'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'South, outside'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'East, outside'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'South, inside'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'East, inside'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'North, outside'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'West, outside'
            }
          ]
        }
      ],
      pinoy: [
        {
          mechanic: 'Placement',
          description:
            'Everyone gets 2 Arrow debuffs\nOne role gets 2x same, one role gets 2x different\nPlace arrows in a box on intercards',
          imageUrl: './umad/p1-arrows-pinoy-0.webp'
        },
        {
          mechanic: 'Arrow Solve',
          description:
            'Same Arrows: Place on outside intercard facing CCW\nDifferent Arrows: Arrows point towards your corner\nPlace on marker + outside depending on debuff timers',
          imageUrl: './umad/p1-arrows-pinoy-4.webp'
        },
        {
          mechanic: 'Knockback',
          description:
            'Supports North, DPS South Confetti KB\nNon-Confetti on boss hitbox\nGet knocked through boss',
          imageUrl: './umad/p1-arrows-pinoy-5.webp'
        },
        {
          mechanic: 'Sleep/Confuse (Fixed positions)',
          description:
            'IGNORE DEBUFFS, use fixed spots\nG1 West, G2 East\nTank/Range North, Healer/Melee South\nRanged inside the arrow box, Melees on boss hitbox intercards',
          imageUrl: './umad/p1-arrows-pinoy-7.webp'
        }
      ],
      freaky: [
        {
          mechanic: 'Placement',
          description:
            'Everyone gets 2 Arrow debuffs\nOne role gets 2x same, one role gets 2x different\nPlace arrows in a ring CLOCKWISE, only one spot per player',
          imageUrl: './umad/p1-arrows-freaky-1.webp'
        },
        {
          mechanic: 'Arrow Solve',
          description:
            'Cardinal (Letter) arrows go on the INNER EDGE of the waymark\nSame Arrows: drop 1st on the Letter marker + 1 spot CCW\nDifferent Arrows: use the timer to see which drops first',
          imageUrl: './umad/p1-arrows-freaky-2.webp'
        },
        {
          mechanic: 'Knockback',
          action: 'Supports NW, DPS SE for Confetti KB\nConfetti debuffs on the 1/3 markers',
          imageUrl: './umad/p1-arrows-freaky-5.webp'
        },
        {
          mechanic: 'Sleep/Confuse (Tethers matter)',
          description:
            'Each role gets Upper/Left (Outside/Confuse) or Lower/Right (Inside/Sleep) tether',
          action: 'Sleep = Inside\nConfuse = Outside',
          imageUrl: './umad/p1-arrows-freaky-6.webp',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'North'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'West'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'South'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'East'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'South'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'East'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'North'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'West'
            }
          ]
        }
      ],
      stfr: [
        {
          mechanic: 'Placement',
          description:
            'Everyone gets 2 Arrow debuffs\nOne role gets 2x same, one role gets 2x different\nPlace arrows rotating CLOCKWISE using markers',
          imageUrl: './umad/arrows-stfr-2.webp'
        },
        {
          mechanic: 'Arrow Solve',
          description:
            'Same Arrows: Place on Letter + 1 CCW of Letter\nDifferent Arrows: Use Leftmost debuff to solve side\nPlace depending on debuff timers',
          imageUrl: './umad/arrows-stfr-3.webp'
        },
        {
          mechanic: 'Knockback',
          action: 'Supports NW, DPS SE for Confetti KB\nConfetti debuffs on the 1/3 markers',
          imageUrl: './umad/arrows-knockback.webp'
        },
        {
          mechanic: 'Sleep/Confuse (Fixed positions)',
          description:
            'IGNORE DEBUFFS, use fixed tether spots\nTanks/Melee inside, Healers/Ranged outside',
          imageUrl: './umad/arrows-stfr-6.webp',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'North, inside'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'West, inside'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'South, outside'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'East, outside'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'South, inside'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'East, inside'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'North, outside'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'West, outside'
            }
          ]
        }
      ]
    }
  },
  {
    phaseName: 'Gaze + Fire + Lightning',
    tag: 'p1',
    mechs: [
      {
        mechanic: 'Static Spots',
        action: 'After teleports, preposition in shown spots',
        imageUrl: {
          default: './umad/gaze-static-spots.webp',
          alt: {
            eupf: './umad/gaze-static-spots-eupf.webp',
            lpdu: './umad/gaze-static-spots-lpdu.webp'
          }
        },
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Northeast, 2 marker'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Southeast, 3 marker'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'South, far'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'East, far'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Northwest, 1 marker'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Southwest, 4 marker'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'North, far'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'West, far'
          }
        ]
      },
      {
        mechanic: 'Spread',
        description: 'Make sure to solve Gaze (on statue) + Lightning lines',
        action: 'Melee on unsafe half move under boss',
        imageUrl: {
          default: './umad/gaze-spread.webp',
          alt: { eupf: './umad/gaze-spread-eupf.webp', lpdu: './umad/gaze-spread-lpdu.webp' }
        },
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Northeast, 2 marker'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Southeast, 3 marker'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'South, far'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'East, far'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Northwest, 1 marker'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Southwest, 4 marker'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'North, far'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'West, far'
          }
        ]
      },
      {
        mechanic: 'Stack',
        action: 'Supports on 3\nDPS on 1',
        imageUrl: {
          default: './umad/gaze-stack.webp',
          alt: { eupf: './umad/gaze-stack-eupf.webp', lpdu: './umad/gaze-stack-lpdu.webp' }
        },
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Southeast, 3 marker'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Southeast, 3 marker'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Southeast, 3 marker'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Southeast, 3 marker'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Northwest, 1 marker'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Northwest, 1 marker'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Northwest, 1 marker'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Northwest, 1 marker'
          }
        ]
      }
    ]
  }
];

const allP2: PhaseStrats[] = [
  {
    phaseName: 'Forsaken Overview',
    tag: 'forsaken',
    mechs: {
      kr: [
        {
          mechanic: 'Group A (Different Debuffs)',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, Northwest<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Help Stack</b><br>Left Tower, Out + Front edge<br><br><b>Tower 6 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Help Stack</b><br>Left Tower, Out + Front edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower, South<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Tank',
              party: 2,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, Northwest<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Help Stack</b><br>Left Tower, Out + Front edge<br><br><b>Tower 6 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Help Stack</b><br>Left Tower, Out + Front edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower, South<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Healer',
              party: 1,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, Northwest<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Bait Cone</b><br>Left Tower, Out + Back edge<br><br><b>Tower 6 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Bait Cone</b><br>Left Tower, Out + Back edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Healer',
              party: 2,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, Northwest<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Bait Cone</b><br>Left Tower, Out + Back edge<br><br><b>Tower 6 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Bait Cone</b><br>Left Tower, Out + Back edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Melee',
              party: 1,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower Prio, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 6 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower Prio, South<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Melee',
              party: 2,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower Prio, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 6 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower Prio, South<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Ranged',
              party: 1,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 6 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Ranged',
              party: 2,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 6 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b>'
            }
          ]
        },
        {
          mechanic: 'Group B (Same Debuffs)',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description:
                '<b>Tower 1 - Help Stack</b><br><b>REMEMBER DEBUFF</b><br>Left Tower, Out + Front edge<br><br><b>Tower 2 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Help Stack</b><br>Left Tower, Out + Front edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower Prio, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Tank',
              party: 2,
              description:
                '<b>Tower 1 - Help Stack</b><br><b>REMEMBER DEBUFF</b><br>Left Tower, Out + Front edge<br><br><b>Tower 2 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Help Stack</b><br>Left Tower, Out + Front edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower Prio, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Healer',
              party: 1,
              description:
                '<b>Tower 1 - Bait Cone</b><br><b>REMEMBER DEBUFF</b><br>Left Tower, Out + Back edge<br><br><b>Tower 2 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Bait Cone</b><br>Left Tower, Out + Back edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Healer',
              party: 2,
              description:
                '<b>Tower 1 - Bait Cone</b><br><b>REMEMBER DEBUFF</b><br>Left Tower, Out + Back edge<br><br><b>Tower 2 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Bait Cone</b><br>Left Tower, Out + Back edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Melee',
              party: 1,
              description:
                '<b>Tower 1 - Help Stack</b><br><b>REMEMBER DEBUFF</b><br>Right Tower, Out + Front edge<br><br><b>Tower 2 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower Prio, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Melee',
              party: 2,
              description:
                '<b>Tower 1 - Help Stack</b><br><b>REMEMBER DEBUFF</b><br>Right Tower, Out + Front edge<br><br><b>Tower 2 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower Prio, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Ranged',
              party: 1,
              description:
                '<b>Tower 1 - Help Stack</b><br><b>REMEMBER DEBUFF</b><br>Right Tower, Out + Front edge<br><br><b>Tower 2 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Ranged',
              party: 2,
              description:
                '<b>Tower 1 - Help Stack</b><br><b>REMEMBER DEBUFF</b><br>Right Tower, Out + Front edge<br><br><b>Tower 2 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b>'
            }
          ]
        }
      ],
      south: [
        {
          mechanic: 'Group A (Different Debuffs)',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, Northwest<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → Tower 1 South Adjust, inner ring at tower edge<br>{{forsaken-circle}} Circle → Tower 1 South Adjust, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → Tower 2 South Adjust, North<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Help Stack</b><br>Left Tower, Out + Front edge<br><br><b>Tower 6 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Help Stack</b><br>Left Tower, Out + Front edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → Tower 3 South Adjust, inner ring at tower edge<br>{{forsaken-circle}} Circle → Tower 3 South Adjust, South<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Tank',
              party: 2,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, Northwest<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → Tower 1 South Adjust, inner ring at tower edge<br>{{forsaken-circle}} Circle → Tower 1 South Adjust, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → Tower 2 South Adjust, North<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Help Stack</b><br>Left Tower, Out + Front edge<br><br><b>Tower 6 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Help Stack</b><br>Left Tower, Out + Front edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → Tower 3 South Adjust, inner ring at tower edge<br>{{forsaken-circle}} Circle → Tower 3 South Adjust, South<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Healer',
              party: 1,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, Northwest<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → Tower 1 South Adjust, inner ring at tower edge<br>{{forsaken-circle}} Circle → Tower 1 South Adjust, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → Tower 2 South Adjust, North<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Bait Cone</b><br>Left Tower, Out + Back edge<br><br><b>Tower 6 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Bait Cone</b><br>Left Tower, Out + Back edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → Tower 3 South Adjust, inner ring at tower edge<br>{{forsaken-circle}} Circle → Tower 3 South Adjust, South<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Healer',
              party: 2,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, Northwest<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → Tower 1 South Adjust, inner ring at tower edge<br>{{forsaken-circle}} Circle → Tower 1 South Adjust, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → Tower 2 South Adjust, North<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Bait Cone</b><br>Left Tower, Out + Back edge<br><br><b>Tower 6 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Bait Cone</b><br>Left Tower, Out + Back edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → Tower 3 South Adjust, inner ring at tower edge<br>{{forsaken-circle}} Circle → Tower 3 South Adjust, South<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Melee',
              party: 1,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → Tower 1 South Adjust, inner ring at tower edge<br>{{forsaken-circle}} Circle → Tower 1 South Adjust, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → Tower 2 South Adjust, North<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 6 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → Tower 3 South Adjust, inner ring at tower edge<br>{{forsaken-circle}} Circle → Tower 3 South Adjust, South<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Melee',
              party: 2,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → Tower 1 South Adjust, inner ring at tower edge<br>{{forsaken-circle}} Circle → Tower 1 South Adjust, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → Tower 2 South Adjust, North<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 6 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → Tower 3 South Adjust, inner ring at tower edge<br>{{forsaken-circle}} Circle → Tower 3 South Adjust, South<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Ranged',
              party: 1,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → Tower 1 South Adjust, inner ring at tower edge<br>{{forsaken-circle}} Circle → Tower 1 South Adjust, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → Tower 2 South Adjust, North<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 6 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → Tower 3 South Adjust, inner ring at tower edge<br>{{forsaken-circle}} Circle → Tower 3 South Adjust, South<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Ranged',
              party: 2,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → Tower 1 South Adjust, inner ring at tower edge<br>{{forsaken-circle}} Circle → Tower 1 South Adjust, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → Tower 2 South Adjust, North<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 6 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → Tower 3 South Adjust, inner ring at tower edge<br>{{forsaken-circle}} Circle → Tower 3 South Adjust, South<br><br><b>BAIT FUTURE/PAST</b>'
            }
          ]
        },
        {
          mechanic: 'Group B (Same Debuffs)',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description:
                '<b>Tower 1 - Help Stack</b><br><b>REMEMBER DEBUFF</b><br>Left Tower, Out + Front edge<br><br><b>Tower 2 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Help Stack</b><br>Left Tower, Out + Front edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → Tower 4 South Adjust, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → Tower 5 South Adjust, inner ring at tower edge<br>{{forsaken-circle}} Circle → Tower 5 South Adjust, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → Tower 6 South Adjust, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Tank',
              party: 2,
              description:
                '<b>Tower 1 - Help Stack</b><br><b>REMEMBER DEBUFF</b><br>Left Tower, Out + Front edge<br><br><b>Tower 2 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Help Stack</b><br>Left Tower, Out + Front edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → Tower 4 South Adjust, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → Tower 5 South Adjust, inner ring at tower edge<br>{{forsaken-circle}} Circle → Tower 5 South Adjust, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → Tower 6 South Adjust, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Healer',
              party: 1,
              description:
                '<b>Tower 1 - Bait Cone</b><br><b>REMEMBER DEBUFF</b><br>Left Tower, Out + Back edge<br><br><b>Tower 2 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Bait Cone</b><br>Left Tower, Out + Back edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → Tower 4 South Adjust, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → Tower 5 South Adjust, inner ring at tower edge<br>{{forsaken-circle}} Circle → Tower 5 South Adjust, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → Tower 6 South Adjust, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Healer',
              party: 2,
              description:
                '<b>Tower 1 - Bait Cone</b><br><b>REMEMBER DEBUFF</b><br>Left Tower, Out + Back edge<br><br><b>Tower 2 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Bait Cone</b><br>Left Tower, Out + Back edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → Tower 4 South Adjust, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → Tower 5 South Adjust, inner ring at tower edge<br>{{forsaken-circle}} Circle → Tower 5 South Adjust, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → Tower 6 South Adjust, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Melee',
              party: 1,
              description:
                '<b>Tower 1 - Help Stack</b><br><b>REMEMBER DEBUFF</b><br>Right Tower, Out + Front edge<br><br><b>Tower 2 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → Tower 4 South Adjust, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → Tower 5 South Adjust, inner ring at tower edge<br>{{forsaken-circle}} Circle → Tower 5 South Adjust, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → Tower 6 South Adjust, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Melee',
              party: 2,
              description:
                '<b>Tower 1 - Help Stack</b><br><b>REMEMBER DEBUFF</b><br>Right Tower, Out + Front edge<br><br><b>Tower 2 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → Tower 4 South Adjust, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → Tower 5 South Adjust, inner ring at tower edge<br>{{forsaken-circle}} Circle → Tower 5 South Adjust, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → Tower 6 South Adjust, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Ranged',
              party: 1,
              description:
                '<b>Tower 1 - Help Stack</b><br><b>REMEMBER DEBUFF</b><br>Right Tower, Out + Front edge<br><br><b>Tower 2 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → Tower 4 South Adjust, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → Tower 5 South Adjust, inner ring at tower edge<br>{{forsaken-circle}} Circle → Tower 5 South Adjust, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → Tower 6 South Adjust, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Ranged',
              party: 2,
              description:
                '<b>Tower 1 - Help Stack</b><br><b>REMEMBER DEBUFF</b><br>Right Tower, Out + Front edge<br><br><b>Tower 2 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → Tower 4 South Adjust, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → Tower 5 South Adjust, inner ring at tower edge<br>{{forsaken-circle}} Circle → Tower 5 South Adjust, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → Tower 6 South Adjust, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b>'
            }
          ]
        }
      ],
      p3Z: [
        {
          mechanic: 'Group A (Different Debuffs)',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, Northwest<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Help Stack</b><br>Left Tower, Out + Front edge<br><br><b>Tower 6 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Help Stack</b><br>Left Tower, Out + Front edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower, South<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Tank',
              party: 2,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, Northwest<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Help Stack</b><br>Left Tower, Out + Front edge<br><br><b>Tower 6 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Help Stack</b><br>Left Tower, Out + Front edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower, South<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Healer',
              party: 1,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, Northwest<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Bait Cone</b><br>Left Tower, Out + Back edge<br><br><b>Tower 6 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Bait Cone</b><br>Left Tower, Out + Back edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Healer',
              party: 2,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, Northwest<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Bait Cone</b><br>Left Tower, Out + Back edge<br><br><b>Tower 6 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Bait Cone</b><br>Left Tower, Out + Back edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Melee',
              party: 1,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower Prio, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 6 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower Prio, South<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Melee',
              party: 2,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower Prio, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 6 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower Prio, South<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Ranged',
              party: 1,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 6 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Ranged',
              party: 2,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 6 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b>'
            }
          ]
        },
        {
          mechanic: 'Group B (Same Debuffs)',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description:
                '<b>Tower 1 - Help Stack</b><br><b>REMEMBER DEBUFF</b><br>Left Tower, Out + Front edge<br><br><b>Tower 2 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Help Stack</b><br>Left Tower, Out + Front edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower Prio, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Tank',
              party: 2,
              description:
                '<b>Tower 1 - Help Stack</b><br><b>REMEMBER DEBUFF</b><br>Left Tower, Out + Front edge<br><br><b>Tower 2 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Help Stack</b><br>Left Tower, Out + Front edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower Prio, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Healer',
              party: 1,
              description:
                '<b>Tower 1 - Bait Cone</b><br><b>REMEMBER DEBUFF</b><br>Left Tower, Out + Back edge<br><br><b>Tower 2 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Bait Cone</b><br>Left Tower, Out + Back edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Healer',
              party: 2,
              description:
                '<b>Tower 1 - Bait Cone</b><br><b>REMEMBER DEBUFF</b><br>Left Tower, Out + Back edge<br><br><b>Tower 2 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Bait Cone</b><br>Left Tower, Out + Back edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Melee',
              party: 1,
              description:
                '<b>Tower 1 - Help Stack</b><br><b>REMEMBER DEBUFF</b><br>Right Tower, Out + Front edge<br><br><b>Tower 2 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower Prio, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Melee',
              party: 2,
              description:
                '<b>Tower 1 - Help Stack</b><br><b>REMEMBER DEBUFF</b><br>Right Tower, Out + Front edge<br><br><b>Tower 2 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower Prio, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Ranged',
              party: 1,
              description:
                '<b>Tower 1 - Help Stack</b><br><b>REMEMBER DEBUFF</b><br>Right Tower, Out + Front edge<br><br><b>Tower 2 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Ranged',
              party: 2,
              description:
                '<b>Tower 1 - Help Stack</b><br><b>REMEMBER DEBUFF</b><br>Right Tower, Out + Front edge<br><br><b>Tower 2 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b>'
            }
          ]
        }
      ],
      lpdu: [
        {
          mechanic: 'Group A (Different Debuffs)',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, Northwest<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Help Stack</b><br>Left Tower, Out + Front edge<br><br><b>Tower 6 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Help Stack</b><br>Left Tower, Out + Front edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower, South<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Tank',
              party: 2,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, Northwest<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Help Stack</b><br>Left Tower, Out + Front edge<br><br><b>Tower 6 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Help Stack</b><br>Left Tower, Out + Front edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower, South<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Healer',
              party: 1,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, Northwest<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Bait Cone</b><br>Left Tower, Out + Back edge<br><br><b>Tower 6 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Bait Cone</b><br>Left Tower, Out + Back edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Healer',
              party: 2,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, Northwest<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Bait Cone</b><br>Left Tower, Out + Back edge<br><br><b>Tower 6 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Bait Cone</b><br>Left Tower, Out + Back edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Melee',
              party: 1,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower Prio, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 6 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower Prio, South<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Melee',
              party: 2,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower Prio, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 6 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower Prio, South<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Ranged',
              party: 1,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 6 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Ranged',
              party: 2,
              description:
                '<b>Tower 1 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 2 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><b>REMEMBER NEW DEBUFF</b><br><br><b>Tower 4 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 6 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 8 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b>'
            }
          ]
        },
        {
          mechanic: 'Group B (Same Debuffs)',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description:
                '<b>Tower 1 - Help Stack</b><br><b>REMEMBER DEBUFF</b><br>Left Tower, Out + Front edge<br><br><b>Tower 2 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Help Stack</b><br>Left Tower, Out + Front edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower Prio, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Tank',
              party: 2,
              description:
                '<b>Tower 1 - Help Stack</b><br><b>REMEMBER DEBUFF</b><br>Left Tower, Out + Front edge<br><br><b>Tower 2 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Help Stack</b><br>Left Tower, Out + Front edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower Prio, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Healer',
              party: 1,
              description:
                '<b>Tower 1 - Bait Cone</b><br><b>REMEMBER DEBUFF</b><br>Left Tower, Out + Back edge<br><br><b>Tower 2 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Bait Cone</b><br>Left Tower, Out + Back edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Healer',
              party: 2,
              description:
                '<b>Tower 1 - Bait Cone</b><br><b>REMEMBER DEBUFF</b><br>Left Tower, Out + Back edge<br><br><b>Tower 2 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Bait Cone</b><br>Left Tower, Out + Back edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → Left Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Cone</b><br>Bait Left Cone onto Left marker<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Melee',
              party: 1,
              description:
                '<b>Tower 1 - Help Stack</b><br><b>REMEMBER DEBUFF</b><br>Right Tower, Out + Front edge<br><br><b>Tower 2 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower Prio, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Melee',
              party: 2,
              description:
                '<b>Tower 1 - Help Stack</b><br><b>REMEMBER DEBUFF</b><br>Right Tower, Out + Front edge<br><br><b>Tower 2 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower Prio, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Ranged',
              party: 1,
              description:
                '<b>Tower 1 - Help Stack</b><br><b>REMEMBER DEBUFF</b><br>Right Tower, Out + Front edge<br><br><b>Tower 2 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Ranged',
              party: 2,
              description:
                '<b>Tower 1 - Help Stack</b><br><b>REMEMBER DEBUFF</b><br>Right Tower, Out + Front edge<br><br><b>Tower 2 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → Right Tower, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Cone</b><br>Bait Right Cone onto Right marker<br><br><b>BAIT FUTURE/PAST</b>'
            }
          ]
        }
      ]
    }
  },
  {
    phaseName: 'Forsaken',
    tag: 'forsaken',
    mechs: {
      kr: [
        {
          mechanic: 'Overview',
          description:
            'AAABBBBA order\nOdd towers: Cones Left, Spreads Right\nLeft stack = boss hitbox ring, Right stack = front toward "new north"\nEven towers: one spread, one cone per tower\nTanks/Melees will flex if partner matches',
          imageUrl: './umad/p2-forsaken-kr-0.webp'
        },
        {
          mechanic: 'Start',
          description: 'Find role/group partner',
          action: 'Group A if one has a stack\nGroup B if both the same',
          imageUrl: './umad/p2-forsaken-kr-3.webp'
        },
        {
          mechanic: 'Odd Towers',
          description:
            'Left Tower: {{forsaken-stack}} Stack + {{forsaken-cone}} Cone, Right Tower: {{forsaken-stack}} Stack + {{forsaken-circle}} Spread',
          action:
            'Non-tower Tank front edge, Non-tower Healer back off edge\nTower Tank/Melee flex if partner matches',
          imageUrl: './umad/p2-forsaken-kr-4.webp'
        },
        {
          mechanic: 'Odd Towers (Left)',
          description:
            '{{forsaken-stack}} Stack on the boss hitbox (fixed); Stack Tank stands right in front\n{{forsaken-cone}} Cone = away from the Stack, just off the tower edge (not the back wall)',
          imageUrl: './umad/p2-forsaken-kr-odd-left.webp',
          alignmentTransforms: { truenorth: 'rotate(45deg)' }
        },
        {
          mechanic: 'Odd Towers (Right)',
          description:
            '{{forsaken-stack}} Stack = between the outer hitbox and tower edge, before the midpoint (not the "eye" corner, not the Even cone spot)\n{{forsaken-circle}} Spread = South of the tower, away from boss (opposite the Stack)',
          imageUrl: './umad/p2-forsaken-kr-odd-right.webp',
          alignmentTransforms: { truenorth: 'rotate(-45deg)' }
        },
        {
          mechanic: 'Even Towers (Diamond Box Markers)',
          description:
            'Both Towers: {{forsaken-cone}} Cone North + {{forsaken-circle}} Spread South',
          action:
            'Non-tower Tank/Melee North on OUTER RING of boss hitbox to bait Clones\n❗<b>BE ON THE OUTER RING, DO NOT GO FURTHER OUT</b>\nNon-tower Healer/Ranged bait cones on Marker\nNumber Marker = Back corner, Letter Marker = Front edge\nTower Tank/Melee flex if partner matches',
          imageUrl: './umad/p2-forsaken-kr-8.webp'
        },
        {
          mechanic: 'Even Towers (Number Markers, Left)',
          description:
            'Left tower (Boss is North)\n{{forsaken-cone}} Cone = Front edge towards Left on <b>INNER</b> hitbox ring at <b>TOWER EDGE</b>\n{{forsaken-circle}} Spread = South edge, directly across tower from Cone\nBaiter = Back corner of Number Markers',
          imageUrl: './umad/p2-forsaken-kr-9.webp',
          alignmentTransforms: { truenorth: 'rotate(45deg)' }
        },
        {
          mechanic: 'Even Towers (Letter Markers, Right)',
          description:
            'Right tower (Boss is North)\n{{forsaken-cone}} Cone = Front edge towards Right on <b>INNER</b> hitbox ring at <b>TOWER EDGE</b>\n{{forsaken-circle}} Spread = South edge, directly across tower from Cone\nBaiter = Front edge of Letter Markers',
          imageUrl: './umad/p2-forsaken-kr-12.webp',
          alignmentTransforms: { truenorth: 'rotate(-45deg)' }
        },
        {
          mechanic: 'Future/Past Baits',
          description:
            'Everyone baits Past/Future at max melee\nCast after every odd tower, bait after every even tower',
          action: '<b>BE AT LEAST MAX MELEE</b>\nPast = Between towers, Future = Away from towers',
          imageUrl: './umad/p2-forsaken-kr-2.webp'
        }
      ],
      south: [
        {
          mechanic: 'Overview',
          description:
            'AAABBBBA order\nOdd towers: Cones Left, Spreads Right\nLeft stack = boss hitbox ring, Right stack = front toward "new north"\nEven towers: one spread, one cone per tower\nSouth tower players flex for next tower if new debuff matches',
          imageUrl: './umad/p2-forsaken-south-1.webp'
        },
        {
          mechanic: 'Start',
          description:
            'Find role/group partner\nGroup A if one has a stack\nGroup B if both the same',
          imageUrl: './umad/p2-forsaken-south-0.webp'
        },
        {
          mechanic: 'Odd Towers',
          description:
            'Left Tower: {{forsaken-stack}} Stack + {{forsaken-cone}} Cone, Right Tower: {{forsaken-stack}} Stack + {{forsaken-circle}} Spread\nNon-tower Tank front edge, Non-tower Healer back off edge\nSouth tower players flex for next tower if new debuff matches',
          imageUrl: './umad/p2-forsaken-south-5.webp'
        },
        {
          mechanic: 'Even Towers',
          description:
            'Both Towers: {{forsaken-cone}} Cone (inner ring at tower edge) + {{forsaken-circle}} Spread South\nNon-tower Tank/Melee North on OUTER RING of boss hitbox to bait Clones\nNon-tower Healer/Ranged bait Cones on Marker\nSpread can cheat slightly away from baiter\nSouth tower players flex for next tower if new debuff matches',
          imageUrl: './umad/p2-forsaken-south-7.webp'
        },
        {
          mechanic: 'Even Towers (Number Markers)',
          description:
            'Boss is North\nNumber Marker baiter = Outside corner of marker\nCone = inner ring at tower edge, Spread = South, slightly toward other tower',
          imageUrl: './umad/p2-forsaken-south-3.webp'
        },
        {
          mechanic: 'Even Towers (Letter Markers)',
          description:
            'Boss is North\nLetter Marker baiter = Inside of marker\nCone = inner ring at tower edge, Spread = South, slightly toward other tower',
          imageUrl: './umad/p2-forsaken-south-4.webp'
        },
        {
          mechanic: 'Future/Past Baits',
          description:
            'Everyone baits Past/Future at max melee\nPast = Between towers, Future = Away from towers\nCast after every odd tower, bait after every even tower',
          imageUrl: './umad/p2-forsaken-kr-2.webp'
        }
      ],
      p3Z: [
        {
          mechanic: 'Overview',
          description:
            'AAABBBBA order\nOdd towers: Cones Left, Spreads Right\nLeft stack = boss hitbox ring, Right stack = front toward "new north"\nEven towers: one spread, one cone per tower\nTanks/Melees will flex if partner matches',
          imageUrl: './umad/p2-forsaken-p3Z-1.webp'
        },
        {
          mechanic: 'Start',
          description: 'Find role/group partner',
          action: 'Group A if one has a stack\nGroup B if both the same',
          imageUrl: './umad/p2-forsaken-p3Z-1.webp'
        },
        {
          mechanic: 'Odd Towers',
          description:
            'Left Tower: {{forsaken-stack}} Stack + {{forsaken-cone}} Cone, Right Tower: {{forsaken-stack}} Stack + {{forsaken-circle}} Spread',
          action:
            'Non-tower Tank front edge, Non-tower Healer back off edge\nTower Tank/Melee flex if partner matches',
          imageUrl: './umad/p2-forsaken-p3Z-14.webp'
        },
        {
          mechanic: 'Odd Towers (Left)',
          description:
            '{{forsaken-stack}} Stack on the boss hitbox (fixed); Stack Tank stands right in front\n{{forsaken-cone}} Cone = away from the Stack, just off the tower edge (not the back wall)',
          imageUrl: './umad/p2-forsaken-p3Z-5.webp',
          alignmentTransforms: { truenorth: 'rotate(45deg)' }
        },
        {
          mechanic: 'Odd Towers (Right)',
          description:
            '{{forsaken-stack}} Stack = between the outer hitbox and tower edge, before the midpoint (not the "eye" corner, not the Even cone spot)\n{{forsaken-circle}} Spread = South of the tower, away from boss (opposite the Stack)',
          imageUrl: './umad/p2-forsaken-p3Z-5.webp',
          alignmentTransforms: { truenorth: 'rotate(-45deg)' }
        },
        {
          mechanic: 'Odd Set 1 (Special)',
          description:
            'Set 1 ONLY: if you take a tower, FOLLOW your buddy into it (this set is special)\n{{forsaken-stack}} Left Stack sits slightly off-center toward the helper Tank (NEish)\nSets 3/5/7 use the fixed Left/Right spots above',
          imageUrl: './umad/p2-forsaken-p3Z-4.webp'
        },
        {
          mechanic: 'Even Towers (Diamond Box Markers)',
          description:
            'Both Towers: {{forsaken-cone}} Cone North + {{forsaken-circle}} Spread South',
          action:
            'Non-tower Tank/Melee North on OUTER RING of boss hitbox to bait Clones\n❗<b>BE ON THE OUTER RING, DO NOT GO FURTHER OUT</b>\nNon-tower Healer/Ranged bait cones on Marker\nNumber Marker = Back corner, Letter Marker = Front edge\nTower Tank/Melee flex if partner matches',
          imageUrl: './umad/p2-forsaken-p3Z-9.webp'
        },
        {
          mechanic: 'Even Towers (Number Markers, Left)',
          description:
            'Left tower (Boss is North)\n{{forsaken-cone}} Cone = Front edge towards Left on <b>INNER</b> hitbox ring at <b>TOWER EDGE</b>\n{{forsaken-circle}} Spread = South edge, directly across tower from Cone\nBaiter = Back corner of Number Markers',
          imageUrl: './umad/p2-forsaken-p3Z-8.webp',
          alignmentTransforms: { truenorth: 'rotate(45deg)' }
        },
        {
          mechanic: 'Even Towers (Letter Markers, Right)',
          description:
            'Right tower (Boss is North)\n{{forsaken-cone}} Cone = Front edge towards Right on <b>INNER</b> hitbox ring at <b>TOWER EDGE</b>\n{{forsaken-circle}} Spread = South edge, directly across tower from Cone\nBaiter = Front edge of Letter Markers',
          imageUrl: './umad/p2-forsaken-p3Z-8.webp',
          alignmentTransforms: { truenorth: 'rotate(-45deg)' }
        },
        {
          mechanic: 'Future/Past Baits',
          description:
            'Everyone baits Past/Future at max melee\nCast after every odd tower, bait after every even tower',
          action: '<b>BE AT LEAST MAX MELEE</b>\nPast = Between towers, Future = Away from towers',
          imageUrl: './umad/p2-forsaken-p3Z-13.webp'
        }
      ],
      lpdu: [
        {
          mechanic: 'Overview',
          description:
            'AAABBBBA order\nOdd towers: Cones Left, Spreads Right\nLeft stack = boss hitbox ring, Right stack = front toward "new north"\nEven towers: one spread, one cone per tower\nTanks/Melees will flex if partner matches',
          imageUrl: './umad/p2-forsaken-lpdu-0.webp'
        },
        {
          mechanic: 'Start',
          description: 'Find role/group partner',
          action: 'Group A if one has a stack\nGroup B if both the same',
          imageUrl: './umad/p2-forsaken-lpdu-2.webp'
        },
        {
          mechanic: 'Odd Towers',
          description:
            'Left Tower: {{forsaken-stack}} Stack + {{forsaken-cone}} Cone, Right Tower: {{forsaken-stack}} Stack + {{forsaken-circle}} Spread',
          action:
            'Non-tower Tank front edge, Non-tower Healer back off edge\nTower Tank/Melee flex if partner matches',
          imageUrl: './umad/p2-forsaken-lpdu-5.webp'
        },
        {
          mechanic: 'Odd Towers (Left)',
          description:
            '{{forsaken-stack}} Stack on the boss hitbox (fixed); Stack Tank stands right in front\n{{forsaken-cone}} Cone = away from the Stack, just off the tower edge (not the back wall)',
          imageUrl: './umad/p2-forsaken-lpdu-5.webp',
          alignmentTransforms: { truenorth: 'rotate(45deg)' }
        },
        {
          mechanic: 'Odd Towers (Right)',
          description:
            '{{forsaken-stack}} Stack = between the outer hitbox and tower edge, before the midpoint (not the "eye" corner, not the Even cone spot)\n{{forsaken-circle}} Spread = South of the tower, away from boss (opposite the Stack)',
          imageUrl: './umad/p2-forsaken-lpdu-5.webp',
          alignmentTransforms: { truenorth: 'rotate(-45deg)' }
        },
        {
          mechanic: 'Even Towers',
          description:
            'Both Towers: {{forsaken-cone}} Cone in front + {{forsaken-circle}} Spread in back\n{{forsaken-cone}} Cone = front, on the INNER hitbox ring where the ring meets the tower edge\n{{forsaken-circle}} Spread = opposite side of the tower, max distance from the Cone',
          action:
            '<b>Big box markers are NOT made for Forsaken - do NOT use the markers to position</b>\nTower Tank/Melee flex if partner matches',
          imageUrl: './umad/p2-forsaken-lpdu-9.webp'
        },
        {
          mechanic: 'Even Towers (Clone Baits)',
          description:
            'Non-tower Tank/Melee (North players) bait Clones on the INNER hitbox ring, NE/NW of the new relative south (the towers)\nFixed spots - keeps the Clones spawning as close to middle as possible',
          imageUrl: './umad/p2-forsaken-lpdu-10.webp'
        },
        {
          mechanic: 'Even Towers (Ranged Helpers)',
          description:
            'Cone baiter (Healer/Ranged): stand at a 90 degree angle from the in-tower Cone player\n<b>Do NOT use the box markers to position</b> - a top-down camera helps you see the angle',
          imageUrl: './umad/p2-forsaken-lpdu-11.webp'
        },
        {
          mechanic: 'Future/Past Baits',
          description:
            'Everyone baits Past/Future at max melee\nCast after every odd tower, bait after every even tower',
          action: '<b>BE AT LEAST MAX MELEE</b>\nPast = Between towers, Future = Away from towers',
          imageUrl: './umad/p2-forsaken-lpdu-14.webp'
        }
      ]
    }
  },
  {
    phaseName: 'Trines',
    tag: 'p2',
    mechs: [
      {
        mechanic: 'Overview',
        description:
          '3 sets of Trines spawn: 3/1/3\nHalf room while 3rd set is landing\nStart Mid, then dodge into first explosion',
        action: 'Wait Mid\nTanks move into 1st CCW from 1\nParty move into 1st CW from A',
        imageUrl: './umad/p2-trines-0.webp'
      },
      {
        mechanic: 'Tankbusters',
        description:
          'Near/Far tankbuster snapshots at 3rd explosion\n2 arena rings from edge = safe from both for party',
        imageUrl: './umad/p2-trines-4.webp'
      },
      {
        mechanic: 'Final',
        action: 'One tank tuck into middle trine, one tank far, party 2 rings from edge',
        imageUrl: './umad/p2-trines-15.webp'
      }
    ]
  }
];

const doubleBH: MechanicStrat[] = [
  {
    mechanic: 'Hand Attacks',
    action:
      'Kefka = Relative North\nLeft side unsafe (facing boss) = Party Stack\nRight side unsafe = Role Spread',
    imageUrl: './umad/p3-lb-26.webp'
  },
  {
    mechanic: 'Hand Attacks (Roles)',
    action: 'If Role Spread, Tanks Front, Healers Mid, DPS Back',
    imageUrl: './umad/p3-lb-roles.webp'
  },
  {
    mechanic: 'Laser Tethers',
    description:
      '4 tether sets, each player soaks 3 lasers\nDPS = 1st tether CW from Kefka, Supports = 2nd, {{accretion}} Accretion = 3rd\nPoint every laser clockwise\nNeed to get hit 3 times to cleanse\n1st DPS takes Set 1 Double, 3rd Support takes Set 4 Double',
    imageUrl: './umad/p3-lb-36.webp'
  },
  {
    mechanic: 'Tether Timeline (DSA Double)',
    description:
      '<b>Tether CW Order = #1 DPS, #2 Supports, #3 {{accretion}} Accretion</b>\n<b>1st DPS takes Set 1 Double, 3rd Support takes Set 4 Double</b>',
    action:
      '<b>Set 1 (1 Laser + 2 Lasers)</b>\nSet 1 1st hit: {{first-in-line}} Support\nSet 1 2nd hit: {{first-in-line}} DPS (BOTH TETHERS)\nExdeath Tankbuster (TB 4/5)\nChaos Edict + Kefka Hand\n<b>Set 2 (3 Lasers, 3 hits)</b>\nSet 2 1st hit: {{first-in-line}} DPS, {{first-in-line}} Support, {{first-in-line}}{{accretion}} Accretion\nSet 2 2nd hit: {{second-in-line}} DPS take 1st tether\nSet 2 3rd hit: {{second-in-line}} Support take 2nd tether\nChaos Edict + Kefka Hot Tail + Exdeath Tankbuster (TB 5/5)\n<b>Set 3 (3 tethers, 3 hits)</b>\nSet 3 1st hit: {{second-in-line}} DPS, {{second-in-line}} Support, {{second-in-line}}{{accretion}} Accretion\nSet 3 2nd hit: {{third-in-line}} DPS take 1st tether\nSet 3 3rd hit: {{third-in-line}} Support take 2nd tether\nChaos Lat/Long + Kefka Hand\n<b>Set 4 (2 Lasers + 1 Laser)</b>\nSet 4 1st hit: {{third-in-line}} Support (BOTH TETHERS)\nKefka Hot Tail\nSet 4 2nd hit: {{third-in-line}} DPS',
    imageUrl: './umad/p3-bh-double-table.webp'
  },
  {
    mechanic: 'White Hole + Dodges',
    description:
      'Dodge Latitude/Longitude then Kefka hand (move to the safe side on the 2nd hit)\nExdeath White Hole: ALL players must be at FULL HP\nKefka Party Stack / Role Spread resolves',
    imageUrl: './umad/p3-lb-46.webp'
  }
];

const splitStomps: MechanicStrat[] = [
  {
    mechanic: 'Blizzard Puddles',
    description:
      'Kefka = Relative North\nSupports start Relative North, DPS start Relative South\nBlizzard AOEs under everyone -> move to intercards in partners\nG1 Rel West/Left, G2 Rel East/Right\n1 Support or 1 DPS gets a stack marker',
    imageUrl: './umad/p3-lb-54.webp',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Start Relative North, Spread Northwest'
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Start Relative North, Spread Northeast'
      },
      {
        role: 'Healer',
        party: 1,
        description: 'Start Relative North, Spread Northwest'
      },
      {
        role: 'Healer',
        party: 2,
        description: 'Start Relative North, Spread Northeast'
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Start Relative South, Spread Southwest'
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Start Relative South, Spread Southeast'
      },
      {
        role: 'Ranged',
        party: 1,
        description: 'Start Relative South, Spread Southwest'
      },
      {
        role: 'Ranged',
        party: 2,
        description: 'Start Relative South, Spread Southeast'
      }
    ]
  },
  {
    mechanic: 'Towers + Enrage',
    description:
      'Stacked role returns mid after the 2nd puddle bait; other role takes towers (G1 West, G2 East)\nSwap: opposite role gets the stack, take towers again\nBlizzard III = keep moving\nKill both bosses before enrage',
    imageUrl: './umad/p3-lb-56.webp',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'West/Left Tower'
      },
      {
        role: 'Tank',
        party: 2,
        description: 'East/Right Tower'
      },
      {
        role: 'Healer',
        party: 1,
        description: 'West/Left Tower'
      },
      {
        role: 'Healer',
        party: 2,
        description: 'East/Right Tower'
      },
      {
        role: 'Melee',
        party: 1,
        description: 'West/Left Tower'
      },
      {
        role: 'Melee',
        party: 2,
        description: 'East/Right Tower'
      },
      {
        role: 'Ranged',
        party: 1,
        description: 'West/Left Tower'
      },
      {
        role: 'Ranged',
        party: 2,
        description: 'East/Right Tower'
      }
    ]
  }
];

const dsaBH: MechanicStrat[] = [
  {
    mechanic: 'Hand Attacks',
    action:
      'Kefka = Relative North\nLeft side unsafe (facing boss) = Party Stack\nRight side unsafe = Role Spread',
    imageUrl: './umad/p3-lb-26.webp'
  },
  {
    mechanic: 'Hand Attacks (Roles)',
    action: 'If Role Spread, Tanks Front, Healers Mid, DPS Back',
    imageUrl: './umad/p3-lb-roles.webp'
  },
  {
    mechanic: 'Laser Tethers',
    description:
      '4 tether sets, each player soaks 3 lasers\nDPS = 1st tether CW from Kefka, Supports = 2nd, {{accretion}} Accretion = 3rd\nPoint every laser clockwise\nNeed to get hit 3 times to cleanse',
    imageUrl: './umad/p3-lb-36.webp'
  },
  {
    mechanic: 'Tether Timeline (D>S>A)',
    description: '<b>Tether CW Order = #1 DPS, #2 Supports, #3 {{accretion}} Accretion</b>',
    action:
      '<b>Set 1 (1 Laser + 2 Lasers)</b>\nSet 1 1st hit: {{first-in-line}} DPS\nSet 1 2nd hit: {{first-in-line}} DPS + {{first-in-line}} Support\nExdeath Tankbuster (TB 4/5)\nChaos Edict + Kefka Hand\n<b>Set 2 (3 Lasers, 3 hits)</b>\nSet 2 1st hit: {{first-in-line}} DPS, {{first-in-line}} Support, {{first-in-line}}{{accretion}} Accretion\nSet 2 2nd hit: {{second-in-line}} DPS take 1st tether\nSet 2 3rd hit: {{second-in-line}} Support take 2nd tether\nChaos Edict + Kefka Hot Tail + Exdeath Tankbuster (TB 5/5)\n<b>Set 3 (3 tethers, 3 hits)</b>\nSet 3 1st hit: {{second-in-line}} DPS, {{second-in-line}} Support, {{second-in-line}}{{accretion}} Accretion\nSet 3 2nd hit: {{third-in-line}} DPS take 1st tether\nSet 3 3rd hit: {{third-in-line}} Support take 2nd tether\nChaos Lat/Long + Kefka Hand\n<b>Set 4 (2 Lasers + 1 Laser)</b>\nSet 4 1st hit: {{third-in-line}} DPS + {{third-in-line}} Support\nKefka Hot Tail\nSet 4 2nd hit: {{third-in-line}} Support',
    imageUrl: './umad/p3-bh-dsa-table.webp'
  },
  {
    mechanic: 'White Hole + Dodges',
    description:
      'Dodge Latitude/Longitude then Kefka hand (move to the safe side on the 2nd hit)\nExdeath White Hole: ALL players must be at FULL HP\nKefka Party Stack / Role Spread resolves',
    imageUrl: './umad/p3-lb-46.webp'
  }
];

const sdaBH: MechanicStrat[] = [
  {
    mechanic: 'Hand Attacks',
    action:
      'Kefka = Relative North\nLeft side unsafe (facing boss) = Party Stack\nRight side unsafe = Role Spread',
    imageUrl: './umad/p3-lb-26.webp'
  },
  {
    mechanic: 'Hand Attacks (Roles)',
    action: 'If Role Spread, Tanks Front, Healers Mid, DPS Back',
    imageUrl: './umad/p3-lb-roles.webp'
  },
  {
    mechanic: 'Laser Tethers',
    description:
      '4 tether sets, each player soaks 3 lasers\nSupports = 1st tether CW from Kefka, DPS = 2nd, {{accretion}} Accretion = 3rd\nPoint every laser clockwise\nNeed to get hit 3 times to cleanse',
    imageUrl: './umad/p3-lb-36.webp'
  },
  {
    mechanic: 'Tether Timeline (S>D>A)',
    description: '<b>Tether CW Order = #1 Supports, #2 DPS, #3 {{accretion}} Accretion</b>',
    action:
      '<b>Set 1 (1 Laser + 2 Lasers)</b>\nSet 1 1st hit: {{first-in-line}} Support\nSet 1 2nd hit: {{first-in-line}} Support + {{first-in-line}} DPS\nExdeath Tankbuster (TB 4/5)\nChaos Edict + Kefka Hand\n<b>Set 2 (3 Lasers, 3 hits)</b>\nSet 2 1st hit: {{first-in-line}} Support, {{first-in-line}} DPS, {{first-in-line}}{{accretion}} Accretion\nSet 2 2nd hit: {{second-in-line}} Support take 1st tether\nSet 2 3rd hit: {{second-in-line}} DPS take 2nd tether\nChaos Edict + Kefka Hot Tail + Exdeath Tankbuster (TB 5/5)\n<b>Set 3 (3 tethers, 3 hits)</b>\nSet 3 1st hit: {{second-in-line}} Support, {{second-in-line}} DPS, {{second-in-line}}{{accretion}} Accretion\nSet 3 2nd hit: {{third-in-line}} Support take 1st tether\nSet 3 3rd hit: {{third-in-line}} DPS take 2nd tether\nChaos Lat/Long + Kefka Hand\n<b>Set 4 (2 Lasers + 1 Laser)</b>\nSet 4 1st hit: {{third-in-line}} Support + {{third-in-line}} DPS\nKefka Hot Tail\nSet 4 2nd hit: {{third-in-line}} DPS',
    imageUrl: './umad/p3-bh-sda-table.webp'
  },
  {
    mechanic: 'White Hole + Dodges',
    description:
      'Dodge Latitude/Longitude then Kefka hand (move to the safe side on the 2nd hit)\nExdeath White Hole: ALL players must be at FULL HP\nKefka Party Stack / Role Spread resolves',
    imageUrl: './umad/p3-lb-46.webp'
  }
];

const zsqBH: MechanicStrat[] = [
  {
    mechanic: 'Hand Attacks',
    action:
      'Kefka = Relative North\nLeft side unsafe (facing boss) = Party Stack\nRight side unsafe = Role Spread',
    imageUrl: './umad/p3-zsq-13.webp'
  },
  {
    mechanic: 'Hand Attacks (Roles)',
    action: 'If Role Spread, Tanks Front, Healers Mid, DPS Back',
    imageUrl: './umad/p3-zsq-17.webp'
  },
  {
    mechanic: 'Laser Tethers',
    description:
      '4 tether sets, each player soaks 3 lasers\nDPS = 1st tether CW from Kefka, Supports = 2nd, {{accretion}} Accretion = 3rd\nPoint every laser clockwise\nNeed to get hit 3 times to cleanse',
    imageUrl: './umad/p3-zsq-7.webp'
  },
  {
    mechanic: 'Tether Timeline (D>S>A)',
    description: '<b>Tether CW Order = #1 DPS, #2 Supports, #3 {{accretion}} Accretion</b>',
    action:
      '<b>Set 1 (1 Laser + 2 Lasers)</b>\nSet 1 1st hit: {{first-in-line}} DPS\nSet 1 2nd hit: {{first-in-line}} DPS + {{first-in-line}} Support\nExdeath Tankbuster (TB 4/5)\nChaos Edict + Kefka Hand\n<b>Set 2 (3 Lasers, 3 hits)</b>\nSet 2 1st hit: {{first-in-line}} DPS, {{first-in-line}} Support, {{first-in-line}}{{accretion}} Accretion\nSet 2 2nd hit: {{second-in-line}} DPS take 1st tether\nSet 2 3rd hit: {{second-in-line}} Support take 2nd tether\nChaos Edict + Kefka Hot Tail + Exdeath Tankbuster (TB 5/5)\n<b>Set 3 (3 tethers, 3 hits)</b>\nSet 3 1st hit: {{second-in-line}} DPS, {{second-in-line}} Support, {{second-in-line}}{{accretion}} Accretion\nSet 3 2nd hit: {{third-in-line}} DPS take 1st tether\nSet 3 3rd hit: {{third-in-line}} Support take 2nd tether\nChaos Lat/Long + Kefka Hand\n<b>Set 4 (2 Lasers + 1 Laser)</b>\nSet 4 1st hit: {{third-in-line}} DPS + {{third-in-line}} Support\nKefka Hot Tail\nSet 4 2nd hit: {{third-in-line}} Support',
    imageUrl: './umad/p3-zsq-3.webp'
  },
  {
    mechanic: 'White Hole + Dodges',
    description:
      'Dodge Latitude/Longitude then Kefka hand (move to the safe side on the 2nd hit)\nExdeath White Hole: ALL players must be at FULL HP\nKefka Party Stack / Role Spread resolves',
    imageUrl: './umad/p3-zsq-31.webp'
  }
];

const zsqStomps: MechanicStrat[] = [
  {
    mechanic: 'Earthquake Stomps (Setup)',
    description:
      'Drag both bosses middle after the Kefka middle slam\nSupports North, DPS South (orient by Kefka heels: white feet = West, black feet = East)\nKefka = 2 two-person towers East/West, Exdeath = Blizzard III (2 AoEs under all players), Chaos = 4-person stack',
    imageUrl: './umad/p3-zsq-stomps-setup.webp'
  },
  {
    mechanic: 'Earthquake Stomps (Resolve)',
    description:
      'Plant the 4-person stack dead middle (it is BIG, do not clip the tower players)\nG1 Support/DPS move into the tower spots right after the 2nd puddle - the towers resolve at the same time as the stack\nDodge both puddle sets, do NOT cover the towers/stacks, then switch roles for the next set',
    imageUrl: './umad/p3-zsq-stomps.webp'
  }
];

const lpduBH: MechanicStrat[] = [
  {
    mechanic: 'Hand Attacks',
    action:
      'Kefka = Relative North\nLeft side unsafe (facing boss) = Party Stack\nRight side unsafe = Role Spread',
    imageUrl: './umad/p3-lpdu-bh-13.webp'
  },
  {
    mechanic: 'Hand Attacks (Roles)',
    action: 'If Role Spread, Tanks Front, Healers Mid, DPS Back',
    imageUrl: './umad/p3-lpdu-bh-17.webp'
  },
  {
    mechanic: 'Laser Tethers',
    description:
      '4 tether sets, each player soaks 3 lasers\nDPS = 1st tether CW from Kefka, Supports = 2nd, {{accretion}} Accretion = 3rd\nPoint every laser clockwise\nNeed to get hit 3 times to cleanse',
    imageUrl: './umad/p3-lpdu-bh-8.webp'
  },
  {
    mechanic: 'Tether Timeline (D>S>A)',
    description: '<b>Tether CW Order = #1 DPS, #2 Supports, #3 {{accretion}} Accretion</b>',
    action:
      '<b>Set 1 (1 Laser + 2 Lasers)</b>\nSet 1 1st hit: {{first-in-line}} DPS\nSet 1 2nd hit: {{first-in-line}} DPS + {{first-in-line}} Support\nExdeath Tankbuster (TB 4/5)\nChaos Edict + Kefka Hand\n<b>Set 2 (3 Lasers, 3 hits)</b>\nSet 2 1st hit: {{first-in-line}} DPS, {{first-in-line}} Support, {{first-in-line}}{{accretion}} Accretion\nSet 2 2nd hit: {{second-in-line}} DPS take 1st tether\nSet 2 3rd hit: {{second-in-line}} Support take 2nd tether\nChaos Edict + Kefka Hot Tail + Exdeath Tankbuster (TB 5/5)\n<b>Set 3 (3 tethers, 3 hits)</b>\nSet 3 1st hit: {{second-in-line}} DPS, {{second-in-line}} Support, {{second-in-line}}{{accretion}} Accretion\nSet 3 2nd hit: {{third-in-line}} DPS take 1st tether\nSet 3 3rd hit: {{third-in-line}} Support take 2nd tether\nChaos Lat/Long + Kefka Hand\n<b>Set 4 (2 Lasers + 1 Laser)</b>\nSet 4 1st hit: {{third-in-line}} DPS + {{third-in-line}} Support\nKefka Hot Tail\nSet 4 2nd hit: {{third-in-line}} Support',
    imageUrl: './umad/p3-lpdu-bh-3.webp'
  },
  {
    mechanic: 'White Hole + Dodges',
    description:
      'Dodge Latitude/Longitude then Kefka hand (move to the safe side on the 2nd hit)\nExdeath White Hole: ALL players must be at FULL HP\nKefka Party Stack / Role Spread resolves',
    imageUrl: './umad/p3-lpdu-bh-31.webp'
  }
];

const lpduStomps: MechanicStrat[] = [
  {
    mechanic: 'Earthquake Stomps (Setup)',
    description:
      'Drag both bosses middle after the Kefka middle slam\nSupports North, DPS South (orient by Kefka heels: white feet = West, black feet = East)\nKefka = 2 two-person towers East/West, Exdeath = Blizzard III (2 AoEs under all players), Chaos = 4-person stack',
    imageUrl: './umad/p3-lpdu-stomps-setup.webp'
  },
  {
    mechanic: 'Earthquake Stomps (Resolve)',
    description:
      'Plant the stack dead middle (it is BIG, do not clip the tower players)\nDodge both puddle sets, do NOT cover the towers/stacks\n<b>Role split:</b> the 4-person stack breaks into two 2-person stacks - Tanks/Melees Left, Healers/Ranged Right\nSwitch roles after the towers and stacks resolve',
    imageUrl: './umad/p3-lpdu-stomps.webp'
  }
];

const allP3: PhaseStrats[] = [
  {
    phaseName: 'The Decisive Battle',
    tag: 'p3',
    mechs: [
      {
        mechanic: 'Opener Split',
        action: 'G1 Supports + Melee -> Chaos\nG2 Supports + Ranged -> Exdeath'
      }
    ]
  },
  {
    phaseName: 'Bowels of Agony',
    tag: 'bowels',
    mechs: {
      lb: [
        {
          mechanic: 'Debuffs',
          description:
            '1 Sup + 1 DPS: {{entropy}} Entropy (fire/spread)\n1 Sup + 1 DPS: {{dynamic-fluid}} Dynamic Fluid (water/donut)\nOne Short (20s), one Long (45s)\nEveryone gets {{headwind}} Headwind or {{tailwind}} Tailwind\n{{headwind}} Headwind = face AWAY, {{tailwind}} Tailwind = face TOWARD',
          imageUrl: './umad/p3-lb-4.webp'
        },
        {
          mechanic: 'Setup',
          imageUrl: './umad/p3-lb-5.webp',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Drag Chaos to wall at Wind crystal'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Keep Exdeath Middle'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Stack at Wind crystal'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Stack at Wind crystal'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Stack at Wind crystal'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Stack at Wind crystal'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Spread at wall near short debuff crystal\nFurther from boss'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Spread at wall near short debuff crystal\nCloser to boss'
            }
          ]
        },
        {
          mechanic: 'First Resolve (Short)',
          description:
            'Exdeath defam, Firewall debuffs drop, Short element resolves\nShort {{entropy}} Fire: Melee spread from Supports\nShort {{dynamic-fluid}} Water: Melee + Supports stack\nCrystal AOE hits Ranged',
          imageUrl: './umad/p3-lb-6.webp',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description:
                'If short {{entropy}} Fire, be away from Melees\nIf short {{dynamic-fluid}} Water, stack with Melees'
            },
            {
              role: 'Tank',
              party: 2,
              description:
                'If short {{entropy}} Fire, be away from Melees\nIf short {{dynamic-fluid}} Water, stack with Melees'
            },
            {
              role: 'Healer',
              party: 1,
              description:
                'If short {{entropy}} Fire, be away from Melees\nIf short {{dynamic-fluid}} Water, stack with Melees'
            },
            {
              role: 'Healer',
              party: 2,
              description:
                'If short {{entropy}} Fire, be away from Melees\nIf short {{dynamic-fluid}} Water, stack with Melees'
            },
            {
              role: 'Melee',
              party: 1,
              description:
                'If short {{entropy}} Fire, be away from Supports\nIf short {{dynamic-fluid}} Water, stack with Supports'
            },
            {
              role: 'Melee',
              party: 2,
              description:
                'If short {{entropy}} Fire, be away from Supports\nIf short {{dynamic-fluid}} Water, stack with Supports'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Stay spread at wall, take crystal AoE'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Stay spread at wall, take crystal AoE'
            }
          ]
        },
        {
          mechanic: 'Tankbuster + Implosion',
          description:
            'Exdeath Thunder III 2-hit tankbuster (TB 1/5)\nDrag Exdeath to the wall, Chaos tank drag Chaos out + position near intercard for Lat/Long\nLatitude = sides first, Longitude = front/back first',
          imageUrl: './umad/p3-lb-10.webp',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Take Exdeath Tankbuster, then drag Exdeath/Chaos to wall at Wind'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Take Exdeath Tankbuster, then drag Exdeath/Chaos to wall at Wind'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Dodge Lat/Long'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Dodge Lat/Long'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Dodge Lat/Long'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Dodge Lat/Long'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Move across to other crystal\nWatch Chaos for Lat/Long'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Move across to other crystal\nWatch Chaos for Lat/Long'
            }
          ]
        },
        {
          mechanic: 'Second Resolve (Long)',
          description:
            'Long debuffs resolve after 2nd Implosion hit\nRanged spread, Melee + Supports stack or spread depending on debuff',
          imageUrl: './umad/p3-lb-11.webp',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description:
                'If short {{entropy}} Fire, be away from Melees\nIf short {{dynamic-fluid}} Water, stack with Melees'
            },
            {
              role: 'Tank',
              party: 2,
              description:
                'If short {{entropy}} Fire, be away from Melees\nIf short {{dynamic-fluid}} Water, stack with Melees'
            },
            {
              role: 'Healer',
              party: 1,
              description:
                'If short {{entropy}} Fire, be away from Melees\nIf short {{dynamic-fluid}} Water, stack with Melees'
            },
            {
              role: 'Healer',
              party: 2,
              description:
                'If short {{entropy}} Fire, be away from Melees\nIf short {{dynamic-fluid}} Water, stack with Melees'
            },
            {
              role: 'Melee',
              party: 1,
              description:
                'If short {{entropy}} Fire, be away from Supports\nIf short {{dynamic-fluid}} Water, stack with Supports'
            },
            {
              role: 'Melee',
              party: 2,
              description:
                'If short {{entropy}} Fire, be away from Supports\nIf short {{dynamic-fluid}} Water, stack with Supports'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Stay spread at wall, take crystal AoE'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Stay spread at wall, take crystal AoE'
            }
          ]
        },
        {
          mechanic: 'Superjump',
          description:
            'Drag Exdeath onto the Wind crystal\nPhys Ranged go opposite Wind crystal to bait Superjump\nEveryone stack on Exdeath',
          imageUrl: './umad/p3-lb-13.webp',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description:
                'Drag Exdeath onto Wind crystal\nWait for Chaos to jump, then stack behind Exdeath'
            },
            {
              role: 'Tank',
              party: 2,
              description:
                'Drag Exdeath onto Wind crystal\nWait for Chaos to jump, then stack behind Exdeath'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Wait for Chaos to jump, then stack behind Exdeath'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Wait for Chaos to jump, then stack behind Exdeath'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Wait for Chaos to jump, then stack behind Exdeath'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Wait for Chaos to jump, then stack behind Exdeath'
            },
            {
              role: 'Ranged',
              party: 1,
              description:
                'Go away from Chaos to bait jump\nAs soon as casts start, stack behind Exdeath'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Wait for Chaos to jump, then stack behind Exdeath'
            }
          ]
        }
      ],
      sg3k: [
        {
          mechanic: 'Debuffs',
          description:
            '1 Sup + 1 DPS: {{entropy}} Entropy (fire/spread)\n1 Sup + 1 DPS: {{dynamic-fluid}} Dynamic Fluid (water/donut)\nOne Short (20s), one Long (45s)\nEveryone gets {{headwind}} Headwind or {{tailwind}} Tailwind\n{{headwind}} Headwind = face AWAY, {{tailwind}} Tailwind = face TOWARD',
          imageUrl: './umad/p3-sg3k-3.webp'
        },
        {
          mechanic: 'Boss Pulls',
          description:
            'Pull Exdeath AWAY from the Short crystal, hug the wall\nPull Chaos between Wind and Short crystals, as close to the wall as possible',
          imageUrl: './umad/p3-sg3k-4.webp'
        },
        {
          mechanic: 'First Resolve (Short)',
          description:
            'Exdeath PBAOE + Short element resolves\nShort: Support at the wall, DPS near center next to crystal (just outside the waymark)\nLong: stand beside Short DPS and resolve Head/Tailwind\nNon-element: pairs to bait Wind\nSupports close (bait nearest), DPS further, ranged/G2 away from Chaos',
          imageUrl: './umad/p3-sg3k-5.webp'
        },
        {
          mechanic: 'Short Crystal AOE',
          description:
            'Short: stay for the second hit\nLong: get knocked back\n{{entropy}} Fire = dead center, {{dynamic-fluid}} Water = inner ring on the floor\nWind baiters align with intercard waymark, DPS slightly further from Wind crystal',
          imageUrl: './umad/p3-sg3k-6.webp'
        },
        {
          mechanic: 'Tankbuster + Implosion',
          description:
            'Exdeath Thunder III Tankbuster on closest (TB 1/5)\nChaos tank center, face between Wind and Long crystal\nLatitude = sides first, Longitude = front/back first\nDodge into the first AOE, second crystal happens right after second hit',
          imageUrl: './umad/p3-sg3k-8.webp'
        },
        {
          mechanic: 'Second Resolve (Long)',
          description:
            'Dodge 2nd cleave into your element spots (same prio)\nShort: get knocked back by crystal hit\n{{entropy}} Fire = dead center, {{dynamic-fluid}} Water = inner ring on the floor\nWind baiters return to the same side and bait again',
          imageUrl: './umad/p3-sg3k-9.webp'
        },
        {
          mechanic: 'Superjump',
          description:
            'Drag both bosses opposite wind crystal\nPhys Ranged stand at the wall behind the Wind crystal to bait Superjump',
          imageUrl: './umad/p3-sg3k-11.webp'
        }
      ],
      Eq0: [
        {
          mechanic: 'Debuffs',
          description:
            '1 Sup + 1 DPS: {{entropy}} Entropy (fire/spread)\n1 Sup + 1 DPS: {{dynamic-fluid}} Dynamic Fluid (water/donut)\nOne Short (20s), one Long (45s)\nEveryone gets {{headwind}} Headwind or {{tailwind}} Tailwind\n{{headwind}} Headwind = face AWAY, {{tailwind}} Tailwind = face TOWARD',
          imageUrl: './umad/p3-Eq0-4.webp'
        },
        {
          mechanic: 'Setup',
          description:
            'Use the Wind crystal as North for the whole mechanic (ignore debuffs for positioning)\nMT/H1/Melees take Chaos (kept mid), OT/H2/Ranged take Exdeath\nDrag Exdeath relative South (opposite Wind)\nHealers always on the Water side, Ranged always on the Fire side\nMelees stack North with the tanks',
          imageUrl: './umad/p3-Eq0-3.webp'
        },
        {
          mechanic: 'First Resolve (Short)',
          description:
            'Short element resolves as the Exdeath defamation drops\nShort {{entropy}} Fire: Melees spread away from Supports\nShort {{dynamic-fluid}} Water: Melees + Supports stack\nCrystal AoE hits the Ranged on the Fire side',
          imageUrl: './umad/p3-Eq0-6.webp'
        },
        {
          mechanic: 'Tankbuster + Implosion',
          description:
            'Proximity Tankbuster on Exdeath - one tank invulns both hits (refer to tank mit sheet)\nBe inside or South of Exdeath\nDodge Chaos Implosion: Latitude = sides first, Longitude = front/back first',
          imageUrl: './umad/p3-Eq0-7.webp'
        },
        {
          mechanic: 'Second Resolve (Long)',
          description:
            'Long debuffs resolve after the 2nd Implosion hit\nStay in your static position and resolve the same way as the Short (Fire spread / Water stack)',
          imageUrl: './umad/p3-Eq0-10.webp'
        },
        {
          mechanic: 'Superjump',
          description:
            'Phys Ranged bait the Chaos Superjump, then move back North as the castbar starts\nEveryone stack on Exdeath',
          imageUrl: './umad/p3-Eq0-11.webp'
        }
      ],
      lpdu: [
        {
          mechanic: 'Debuffs',
          description:
            '1 Sup + 1 DPS: {{entropy}} Entropy (fire/spread)\n1 Sup + 1 DPS: {{dynamic-fluid}} Dynamic Fluid (water/donut)\nOne Short (20s), one Long (45s)\nEveryone gets {{headwind}} Headwind or {{tailwind}} Tailwind\n{{headwind}} Headwind = face AWAY, {{tailwind}} Tailwind = face TOWARD',
          imageUrl: './umad/p3-lpdu-1.webp'
        },
        {
          mechanic: 'Setup',
          description:
            'Use the Wind crystal as the new North for the whole mechanic (ignore debuffs for positioning)\nMT/H1/Melees take Chaos, OT/H2/Ranged take Exdeath\nKeep both Exdeath AND Chaos stacked mid (Exdeath tank drifts North during the cast)\nHealers always on the Water side, Ranged always on the Fire side\nMelees stack North with the tanks (Water = stay stacked, Fire = Melees NW / Tank NE)',
          imageUrl: './umad/p3-lpdu-2.webp'
        },
        {
          mechanic: 'First Resolve (Short)',
          description:
            'Short element resolves as the Exdeath defamation drops\nShort {{entropy}} Fire: Melees spread away from Supports\nShort {{dynamic-fluid}} Water: Melees + Supports stack\nCrystal AoE hits the Ranged on the Fire side',
          imageUrl: './umad/p3-lpdu-4.webp'
        },
        {
          mechanic: 'Tankbuster + Implosion',
          description:
            'Proximity Tankbuster on Exdeath (kept mid) - one tank invulns/mits both hits (refer to tank mit sheet)\nBe inside or South of Exdeath\nDodge Chaos Implosion: Latitude = sides first, Longitude = front/back first',
          imageUrl: './umad/p3-lpdu-8.webp'
        },
        {
          mechanic: 'Second Resolve (Long)',
          description:
            'Long debuffs resolve after the 2nd Implosion hit\nStay in your static position and resolve the same way as the Short (Fire spread / Water stack)',
          imageUrl: './umad/p3-lpdu-12.webp'
        },
        {
          mechanic: 'Superjump',
          description:
            'Phys Ranged bait the Chaos Superjump after the 2nd debuffs, then move back North as the castbar starts\nEveryone stack on Exdeath (mid)',
          imageUrl: './umad/p3-lpdu-16.webp'
        }
      ]
    }
  },
  {
    phaseName: 'Vacuum Wave + Limit Cut',
    tag: 'bowels',
    mechs: {
      lb: [
        {
          mechanic: 'Kefka Dashes',
          action: 'Watch Kefka dashes\nREMEMBER start + CW or CCW rotation for Limit Cut',
          imageUrl: './umad/p3-lb-14.webp'
        },
        {
          mechanic: 'Vacuum Wave + Tank LB',
          action:
            'Resolve {{headwind}}{{tailwind}} Head/Tailwind\nStack all 8 players and mit\nNon-LB tank can also step out to 7-1 for extra LB gen',
          imageUrl: './umad/p3-lb-8stack.webp'
        },
        {
          mechanic: 'Pairs Variant',
          action:
            'Supports Left, DPS Right, each with your role partner\nResolve {{headwind}}{{tailwind}} Head/Tailwind\nTANK LB toward the end of the cast bar\nMove to your Wind stack location',
          imageUrl: './umad/p3-lb-pairs.webp'
        },
        {
          mechanic: 'Numbers',
          description:
            'Relative North = opposite Kefka’s FIRST dash\nStand on the inter-inter-cardinals in number order from Rel N, rotating OPPOSITE Kefka’s dash direction\nAlign with the waymark or between markers\nExdeath Thunder III tankbuster after (TB 2/5)',
          action: 'Align with the waymark or between markers',
          imageUrl: './umad/p3-lb-17.webp'
        }
      ],
      sg3k: [
        {
          mechanic: 'Kefka Dashes',
          description: 'Watch Kefka dashes\nREMEMBER start + CW or CCW rotation for Limit Cut',
          imageUrl: './umad/p3-sg3k-12.webp'
        },
        {
          mechanic: 'Static Wind Baits',
          description:
            'Resolve Head/Tailwind with Exdeath Vacuum Wave\nAfter KB, bait Wind in static spots around Chaos\nSupports Left / DPS Right (facing wall), 4 Melees closest on Chaos hitbox, LP1 on the wall, Ranged a few steps out',
          imageUrl: './umad/p3-sg3k-13.webp'
        },
        {
          mechanic: 'Numbers',
          description:
            'Relative North = opposite Kefka’s FIRST dash\nStand on the inter-inter-cardinals in number order from Rel N, rotating OPPOSITE Kefka’s dash direction\nAlign with the waymark or between markers\nExdeath Thunder III tankbuster after (TB 2/5)',
          imageUrl: './umad/p3-sg3k-15.webp'
        }
      ],
      Eq0: [
        {
          mechanic: 'Kefka Dashes',
          description: 'Watch Kefka dashes\nREMEMBER start + CW or CCW rotation for Limit Cut',
          imageUrl: './umad/p3-Eq0-12.webp'
        },
        {
          mechanic: 'Vacuum Wave + Tank LB',
          description:
            'Resolve {{headwind}}{{tailwind}} Head/Tailwind as you get knocked back\nStand in role pairs (no one uses anti-knockback)\nTank LB3 toward the end of the Vacuum Wave cast',
          imageUrl: './umad/p3-Eq0-13.webp'
        },
        {
          mechanic: 'Numbers',
          description:
            'Relative North = opposite Kefka’s FIRST dash\nStand on the inter-inter-cardinals in number order from Rel N, rotating OPPOSITE Kefka’s dash direction\nAlign with the waymark or between markers\nExdeath Thunder III tankbuster after (TB 2/5)',
          imageUrl: './umad/p3-Eq0-15.webp'
        }
      ],
      lpdu: [
        {
          mechanic: 'Kefka Dashes',
          description: 'Watch Kefka dashes\nREMEMBER start + CW or CCW rotation for Limit Cut',
          imageUrl: './umad/p3-lpdu-17.webp'
        },
        {
          mechanic: 'Vacuum Wave + Tank LB',
          description:
            'Target Exdeath and resolve {{headwind}}{{tailwind}} Head/Tailwind as you get knocked back\nStand in role pairs (no one uses anti-knockback)\nTank LB3 toward the end of the Vacuum Wave cast',
          imageUrl: './umad/p3-lpdu-18.webp'
        },
        {
          mechanic: 'Numbers',
          description:
            'Relative North = opposite Kefka’s FIRST dash\nStand on the inter-inter-cardinals in number order from Rel N, rotating OPPOSITE Kefka’s dash direction\nAlign with the waymark or between markers\nExdeath Thunder III tankbuster after (TB 2/5)',
          imageUrl: './umad/p3-lpdu-20.webp'
        }
      ]
    }
  },
  {
    phaseName: 'Earthquake: Accretion',
    tag: 'p3',
    mechs: [
      {
        mechanic: 'Re-split',
        action:
          'G1 Supports + Melee -> Chaos\nG2 Supports + Ranged -> Exdeath\nExdeath Thunder III tankbuster (TB 3/5)',
        imageUrl: './umad/p3-lb-21.webp'
      },
      {
        mechanic: 'Conga + Debuffs',
        description:
          'Stack bosses mid, then conga; HP set to 1\nAll: Primordial Crust (cleanse by dying -> survive at 1 hp)\n1 DPS + 1 Healer: {{accretion}} Accretion (cleanse by full heal)\nRaidwide + 4s Earth vuln each time an Earth debuff expires\n3x {{first-in-line}} First / 3x {{second-in-line}} Second / 2x {{third-in-line}} Third in Line',
        imageUrl: './umad/p3-lb-24.webp'
      },
      {
        mechanic: 'Tether Order',
        description:
          'Healers single-target the First-in-line {{accretion}} Accretion, then the second',
        imageUrl: './umad/p3-lb-25.webp'
      }
    ]
  },
  {
    phaseName: 'Earthquake: Black Holes',
    tag: 'blackhole',
    mechs: {
      double: doubleBH,
      dsa: dsaBH,
      sda: sdaBH,
      ZsQ: zsqBH,
      lpdu: lpduBH
    }
  },
  {
    phaseName: 'Earthquake: Stompies',
    tag: 'blackhole',
    mechs: {
      double: splitStomps,
      dsa: splitStomps,
      sda: splitStomps,
      ZsQ: zsqStomps,
      lpdu: lpduStomps
    }
  }
];

const allP4: PhaseStrats[] = [
  {
    phaseName: 'Timeline',
    tag: 'p4',
    description:
      '<a href="/tools/p4-helper" target="_blank" rel="noopener noreferrer" class="btn preset-filled-primary-500 text-lg font-bold no-underline">Open the P4 Helper<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/></svg></a>',
    mechs: [
      {
        mechanic: 'Timeline',
        action:
          '<b>1st Debuffs</b>\nKefka Mystery Magic + Neo Exdeath Debuffs {{forked-lightning}}{{compressed-water}}/{{accel-bomb}}/{{cursed-shriek}} + Chaos Debuffs {{entropy}}{{dynamic-fluid}}\nINDIVIDUALS remember if you have Short or Long Spread + Stillness/Motion\nGROUP remember if 1st Shriek is Real/Fake + if Inferno/Tsunami is Real/Fake\n<b>2nd Debuffs</b>\nKefka Mystery Magic + Neo Exdeath Debuffs {{forked-lightning}}{{compressed-water}}/{{accel-bomb}}/{{cursed-shriek}} + Chaos Debuffs {{entropy}}{{dynamic-fluid}}\nINDIVIDUALS remember if you have Short or Long Spread + Stillness/Motion\nGROUP remember if 2nd Shriek is Real/Fake + if Inferno/Tsunami is Real/Fake\n<b>3rd Debuffs</b>\nKefka Mystery Magic + Neo Exdeath Antilight {{white-wound}}{{black-wound}}/{{allagan-field}}{{beyond-death}}\n<b>Flood of Naught</b>\nFollow {{white-wound}}{{black-wound}}/{{allagan-field}}{{beyond-death}}, stand in correct half\n<b>1st Resolve</b>\n1st Stacks N/S + {{forked-lightning}}/{{kefka-fake}}{{compressed-water}} Spreads E/W + {{accel-bomb}} Accel Bombs\n1st Kefka Mana Charge + 1st {{cursed-shriek}} Shrieks\n{{entropy}} Inferno (Can be Fake)\n<b>2nd Resolve</b>\n2nd Kefka Mana Charge + 2nd Stacks N/S + {{forked-lightning}}/{{kefka-fake}}{{compressed-water}} Spreads E/W + {{accel-bomb}} Accel Bombs\n2nd {{cursed-shriek}} Shrieks\nKefka Mana Release + {{dynamic-fluid}} Tsunami (Can be Fake)'
      }
    ]
  },
  {
    phaseName: 'Kefka Says (Debuffs)',
    tag: 'p4',
    mechs: [
      {
        mechanic: 'Overview',
        description:
          'Kefka targetable, enrages at 25%\nChaos + Neo Exdeath apply debuffs\n{{kefka-fake}} orb on a cast = FAKE (effect reversed), {{kefka-real}} = real'
      },
      {
        mechanic: 'Neo Exdeath Debuffs',
        description:
          '{{forked-lightning}}{{compressed-water}} Lightning/Water can have short or long timer\nNeo Exdeath applies 2x Lightning and 2x Water per cast\nOne cast will have Short timer, other will be Long\n{{forked-lightning}} Lightning OR {{kefka-fake}}{{compressed-water}} Fake Water = Spread\n{{compressed-water}} Water OR {{kefka-fake}}{{forked-lightning}} Fake Lightning = Stack\n\nEach player gets 1 {{accel-bomb}} Accel Bomb with a short or long timer\nNeo Exdeath applies 2x Short and 2x Long per cast\n{{accel-bomb}} Accel Bomb = Stillness, {{kefka-fake}} Fake = Motion\n\n1st applied {{cursed-shriek}} Shriek has short timer, 2nd has long timer\n{{cursed-shriek}} Shriek = Look away, {{kefka-fake}} Fake = Look at',
        imageUrl: './umad/p4-exdeath-debuffs.webp'
      },
      {
        mechanic: 'Chaos Debuffs',
        description:
          '{{entropy}} Entropy resolves 1st, {{dynamic-fluid}} Dynamic resolves 2nd regardless of order applied\n{{entropy}} Entropy OR {{kefka-fake}}{{dynamic-fluid}} Fake Dynamic = Fire/AOE\n{{dynamic-fluid}} Dynamic OR {{kefka-fake}}{{entropy}} Fake Entropy = Water/Donut',
        imageUrl: './umad/p4-chaos-debuffs.webp'
      },
      {
        mechanic: 'Antilight + Flood of Naught',
        description:
          'Applies {{white-wound}}/{{black-wound}} Wound + 4 {{allagan-field}} Allagan Field, 4 {{beyond-death}} Beyond Death\n{{allagan-field}} Allagan = Stand in Opposite Color\n{{beyond-death}} Beyond Death = Stand in Same Color\nIgnore the Real/Fake on debuff application\nFollow the Real/Fake on Flood of Naught cast',
        imageUrl: './umad/p4-antilight.webp'
      },
      {
        mechanic: 'Mana Charge / Release',
        description:
          'Mana Charge banks the next Real/Fake for that element\nMana Release applies the banked Real/Fake along with the displayed one\nTwo {{kefka-fake}} Fakes = {{kefka-real}} Real'
      },
      {
        mechanic: 'Debuff Resolution',
        description:
          "Stacks {{compressed-water}}/{{kefka-fake}}{{forked-lightning}}: Supports North, DPS South\nSpreads: {{forked-lightning}}/{{kefka-fake}}{{compressed-water}} Supports West, DPS East\n\nShriek {{cursed-shriek}}: Shrieks in, party look away, debuffs don't look at each other\nFake Shriek {{kefka-fake}}{{cursed-shriek}}: Shrieks in, party look in, debuffs look at each other\n\nInferno {{entropy}}/{{kefka-fake}}{{dynamic-fluid}}: Drop twister AOE middle, then spread\nTsunami {{dynamic-fluid}}/{{kefka-fake}}{{entropy}}: Drop twister donut middle, then stay"
      }
    ]
  },
  {
    phaseName: 'Kefka Says (Resolution)',
    tag: 'p4',
    mechs: [
      {
        mechanic: 'Stack/Spread',
        action:
          '{{forked-lightning}} Lightning OR {{kefka-fake}}{{compressed-water}} Fake Water = Spread (Supports West, DPS East)\n{{compressed-water}} Water OR {{kefka-fake}}{{forked-lightning}} Fake Lightning = Stack (Supports North, DPS South)',
        imageUrl: './umad/p4-stack-spread.webp'
      },
      {
        mechanic: 'Gazes',
        action:
          'Shrieks {{cursed-shriek}} under boss, Support Left, DPS Right\nIf {{kefka-real}} Real, everyone look away\n If {{kefka-fake}}, party look in, debuffs look at each other',
        imageUrl: './umad/p4-gazes-1.webp'
      }
    ]
  }
];

const allP5: PhaseStrats[] = [
  {
    phaseName: 'Autos',
    tag: 'p5',
    mechs: [
      {
        mechanic: 'Ultima Repeater',
        description: '4x raidwide\nStand in your role spot to prep for the autos after'
      },
      {
        mechanic: 'Fell Forces',
        description: 'Role-based autos',
        action: 'Tanks N, Healers SW, DPS SE',
        imageUrl: './umad/p5-autos.webp'
      }
    ]
  },
  {
    phaseName: 'Chaotic Flood',
    tag: 'p5',
    mechs: [
      {
        mechanic: 'Rotating Quadrants',
        description:
          'Dodge around mid\nLook at first 2 lines for safe cardinals\nCan also do single dodge, 2x dodge is safer',
        imageUrl: './umad/p5-3.webp'
      }
    ]
  },
  {
    phaseName: 'Maddening Orchestra',
    tag: 'p5',
    mechs: [
      {
        mechanic: 'Spread',
        action: 'Spread: Tanks North, Healers South, G1 DPS West, G2 DPS East',
        imageUrl: './umad/p5-7.webp'
      },
      {
        mechanic: '1st Hit (Random)',
        description:
          '1st hit is random\nMT gets 1x Surprise Flare, OT gets 1x Surprise Holy\n3x on Non-tanks',
        imageUrl: './umad/p5-8.webp'
      },
      {
        mechanic: '2nd Hit (Proximity)',
        description:
          '2nd hit is proximity\nTanks stack together for the shared buster\nParty go out if you got hit',
        action: 'Tanks stack together for the shared buster\nNon-tanks go out if you got hit first',
        imageUrl: './umad/p5-9.webp'
      },
      {
        mechanic: 'Tank Resolve',
        imageUrl: './umad/p5-10.webp',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Flare; go to the wall North'
          },
          {
            role: 'Tank',
            party: 2,
            description:
              'Holy; invuln max melee\nHoly tank voke before the resolution to take the next 2 autos with invuln'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'South'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'South'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'South'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'South'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'South'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'South'
          }
        ]
      }
    ]
  },
  {
    phaseName: 'Celestriad (Towers)',
    tag: 'p5',
    mechs: [
      {
        mechanic: 'Overview',
        description:
          '4 towers active per set, 3 sets total\nVulns applied randomly: 2x ice, 2x lightning, 2x fire, 2x nothing\n2x nothing will always fill the double',
        action: 'For 1st + 3rd, Earth = OUT safe, Wind = IN safe',
        imageUrl: './umad/p5-12.webp'
      },
      {
        mechanic: 'Resolution',
        action:
          'Debuffs: 1st safe tower CW from your vuln, then rotate CW\nNo debuff: 1st CCW of double element',
        imageUrl: './umad/p5-13.webp'
      }
    ]
  },
  {
    phaseName: 'Stray Apocalypse',
    tag: 'p5',
    mechs: [
      {
        mechanic: 'Exaflares',
        description:
          '6x sets of exaflares, always start NW => NE and repeat\nDodge however you like, just be at your spread spot after',
        imageUrl: './umad/p5-18.webp'
      },
      {
        mechanic: 'Stray Entropy',
        description: 'Ends with Stray Entropy = spreads\nSpread out around the arena',
        imageUrl: './umad/p5-19.webp'
      }
    ]
  },
  {
    phaseName: 'Maddening Orchestra 2',
    tag: 'p5',
    mechs: [
      {
        mechanic: 'Resolve',
        description:
          'Resolve the same as the first Maddening Orchestra\nOT should have aggro during the 1st hit to get the flare',
        imageUrl: './umad/p5-20.webp',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Holy; invuln max melee'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Flare; go to the wall North'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Spread towards West, Close/Far, South'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Spread towards West, Close/Far, South'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Spread towards East, Close/Far, South'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Spread towards East, Close/Far, South'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Spread towards East, Close/Far, South'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Spread towards East, Close/Far, South'
          }
        ]
      }
    ]
  },
  {
    phaseName: 'Forsaken (Enrage)',
    tag: 'p5',
    mechs: [
      {
        mechanic: 'Overview',
        description:
          'LONG enrage cast (~20%+ at cast start clears)\n4x stacks as Kefka places void holes around the arena\nStep in a hole or get clipped by the orange AOE = shadow realm',
        imageUrl: './umad/p5-22.webp'
      },
      {
        mechanic: 'Stack Pattern',
        description:
          'Always start at C, then rotate inter/cards: 4 - 1 - 2 - 3\nOrange AOE markers bait onto the card/inter closest to a random player\n1st stack is CW from the 1st orange marker, then keep rotating CW\nStay after each stack until the next AOEs show to bait them',
        action: 'Start C, rotate CW (4-1-2-3)',
        imageUrl: './umad/p5-23.webp'
      }
    ]
  }
];

const kefkabinStrat: Strat = {
  stratName: 'kefkabin',
  description: '',
  stratUrl: {
    'Kefka Bin': 'https://tinyurl.com/kefkabin',
    'UMAD P1: Merry Go Round by Fae Fiyaa':
      'https://docs.google.com/presentation/d/1-E2rEKa586KKiVNvtt3EAMQY2YAEVBRGcMX0WzORIq8/edit?usp=sharing',
    'Kroxy-Rinon 3/4/1 (Center/N Stacks)': 'https://raidplan.io/plan/UATE__aDcw1-bgVv',
    'P2 Trines': 'https://raidplan.io/plan/apkh6ytq72w8pt3v',
    'DMU P3: Dank Feet DSA BH':
      'https://docs.google.com/presentation/d/1w05ez7GscxTflgaMgVET42gjGryI2QSPR0zqRWXdWgI/edit?usp=sharing',
    'P4 Kefka Says Gazes Mid by Dank': 'https://raidplan.io/plan/ChcTBFAcFMZKFVKo',
    'Kefkabin P5': 'https://raidplan.io/plan/3wODYtApXBtYAdu0'
  },
  strats: [...allP1, ...allP2, ...allP3, ...allP4, ...allP5]
};

const euPfStrat: Strat = {
  stratName: 'eupf',
  description: 'P1: X13 + uptime graven + static freaky, P2: p3Z, P3: Eq0 + ZsQ, P4: 7pj, P5: 4px',
  stratUrl: {
    'P1: X13 (modified xolo)': 'https://raidplan.io/plan/p8JvSSs1_QKMVX13',
    'P1: Static Freaky (LPDU Tele-Trouncing)': 'https://raidplan.io/plan/saC2CjTaXmSApm6y',
    "P2: p3Z (Meow³'s Braindead P2 Buddy)": 'https://raidplan.io/plan/lZWqxfxvyhF9sp3Z',
    'P3: Eq0 (P3 but tank lb)': 'https://raidplan.io/plan/cyHdnCaTdIkh4Eq0',
    'P3: ZsQ (Kefka Relative AM-less Earthquakes)': 'https://raidplan.io/plan/ZhNPOdHVgc48yZsQ',
    'P4: 7pj (UMAD p4)': 'https://raidplan.io/plan/guufe9q559evt7pj',
    'P5: 4px (Okayge p5)': 'https://raidplan.io/plan/gkep6rkvtygyk4px'
  },
  strats: [...allP1, ...allP2, ...allP3, ...allP4, ...allP5]
};

const lpduStrat: Strat = {
  stratName: 'lpdu',
  description: '',
  stratUrl: {
    'P1: LPDU P1': 'https://raidplan.io/plan/_5FyPYATLhNYkq8S',
    'P1: LPDU Tele-Trouncing': 'https://raidplan.io/plan/saC2CjTaXmSApm6y',
    'P2: LPDU P2': 'https://raidplan.io/plan/142oXOZpPc_jh3dd',
    'P2: LPDU Trines': 'https://raidplan.io/plan/9aBIH3XPTrBlP2H9',
    'P3: LPDU P3 - Bowels Exdeath Mid': 'https://raidplan.io/plan/-j_AAEyx6yACuTve',
    'P3: LPDU P3': 'https://raidplan.io/plan/vO5T6KpnHKV4tOXo',
    'P4: 7pj (UMAD p4)': 'https://raidplan.io/plan/guufe9q559evt7pj',
    'P4: LPDU Kefka says in a nutshell': 'https://raidplan.io/plan/VvVCuABdEYe1LnGO',
    'P5: n4a (LPDU P5)': 'https://raidplan.io/plan/oUzw_Lko7EgVVn4a'
  },
  strats: [...allP1, ...allP2, ...allP3, ...allP4, ...allP5]
};

export const dancingMadStrats: Strat[] = [kefkabinStrat, euPfStrat, lpduStrat];

export const dancingMadFightConfig: FightConfig = {
  fightKey: 'umad',
  title: 'Dancing Mad (Ultimate)',
  abbreviatedTitle: 'Kefka',
  subtitle: 'Kefka 7.51',
  cheatsheetTitle: 'Dancing Mad Cheatsheet',
  showAllToggleUrls: true,
  strats: {
    kefkabin: {
      label: 'Kefkabin',
      defaults: { arrows: 'mgr', forsaken: 'kr', bowels: 'lb', blackhole: 'dsa' },
      badges: [
        {
          text: 'NA',
          class: 'na-badge'
        }
      ]
    },
    eupf: {
      label: 'X13/p3Z/eq0/ZsQ',
      defaults: { arrows: 'stfr', forsaken: 'p3Z', bowels: 'Eq0', blackhole: 'ZsQ' },
      badges: [
        {
          text: 'EU',
          class: 'eu-badge'
        }
      ]
    },
    lpdu: {
      label: 'LPDU',
      defaults: { arrows: 'stfr', forsaken: 'lpdu', bowels: 'lpdu', blackhole: 'lpdu' },
      badges: [
        {
          text: 'EU',
          class: 'eu-badge'
        }
      ]
    }
  },
  toggles: [
    {
      key: 'arrows',
      label: 'P1 Arrows',
      defaultValue: 'mgr',
      phaseTag: 'arrows',
      options: [
        { value: 'mgr', label: 'Merry-Go-Round' },
        {
          value: 'pinoy',
          label: 'Filipino',
          url: { name: 'Filipino Box Graven 3', url: 'https://raidplan.io/plan/5rf2uhud5ztsbud5' }
        },
        {
          value: 'stfr',
          label: 'Static Freaky',
          url: { name: 'LPDU Tele-Trouncing', url: 'https://raidplan.io/plan/saC2CjTaXmSApm6y' }
        },
        {
          value: 'freaky',
          label: 'Freaky MGR',
          url: {
            name: 'freaky merry go round arrows',
            url: 'https://raidplan.io/plan/qD9Y_g1caq3l5gD-'
          }
        }
      ]
    },
    {
      key: 'forsaken',
      label: 'P2 Forsaken',
      defaultValue: 'rmmr',
      phaseTag: 'forsaken',
      options: [
        {
          value: 'kr',
          label: 'Kroxy-Rinon'
        },
        {
          value: 'south',
          label: 'South Adjust',
          url: { name: 'APHORSAKEN (s.flex)', url: 'https://raidplan.io/plan/uq7zdjvuu7uuw8fj' }
        },
        {
          value: 'p3Z',
          label: 'p3Z',
          url: {
            name: "Meow³'s Braindead P2 Buddy",
            url: 'https://raidplan.io/plan/lZWqxfxvyhF9sp3Z'
          }
        },
        {
          value: 'lpdu',
          label: 'LPDU',
          url: { name: 'LPDU P2', url: 'https://raidplan.io/plan/142oXOZpPc_jh3dd' }
        }
      ]
    },
    {
      key: 'bowels',
      label: 'P3 Bowels/LC',
      defaultValue: 'lb',
      phaseTag: 'bowels',
      options: [
        { value: 'lb', label: 'LB3 Cheese' },
        {
          value: 'sg3k',
          label: 'SG3K (No LB)',
          url: {
            name: 'SG3K Bowels/LC by S’vetha Mako',
            url: 'https://raidplan.io/plan/9assfrb4fcvwat9e'
          }
        },
        {
          value: 'Eq0',
          label: 'Eq0 (Walldeath)',
          url: { name: 'P3 but tank lb', url: 'https://raidplan.io/plan/cyHdnCaTdIkh4Eq0' }
        },
        {
          value: 'lpdu',
          label: 'LPDU (Middeath)',
          url: {
            name: 'LPDU P3 - Bowels Exdeath Mid',
            url: 'https://raidplan.io/plan/-j_AAEyx6yACuTve'
          }
        }
      ]
    },
    {
      key: 'blackhole',
      label: 'Black Hole',
      defaultValue: 'dsa',
      phaseTag: 'blackhole',
      options: [
        {
          value: 'dsa',
          label: 'D>S>A (Old)'
        },
        {
          value: 'double',
          label: 'DSA Double',
          url: {
            name: 'DMU - P3 BH Modified DSA (Double Tether)',
            url: 'https://tinyurl.com/DTHoles'
          }
        },
        {
          value: 'sda',
          label: 'S>D>A',
          url: {
            name: 'S>D>A Blackhole',
            url: 'https://tinyurl.com/SDAHoles'
          }
        },
        {
          value: 'ZsQ',
          label: 'ZsQ (LP Stomps)',
          url: {
            name: 'Kefka Relative AM-less Earthquakes',
            url: 'https://raidplan.io/plan/ZhNPOdHVgc48yZsQ'
          }
        },
        {
          value: 'lpdu',
          label: 'LPDU (Role Stomps)',
          url: {
            name: 'LPDU P3',
            url: 'https://raidplan.io/plan/vO5T6KpnHKV4tOXo'
          }
        }
      ]
    }
  ],
  stratDifferences: [
    {
      tab: 'P1: Kefka',
      label: 'Merry-Go-Round',
      tag: 'arrows',
      value: 'mgr',
      description: 'Arrows arranged in one large box clockwise, aka Big Box.',
      badges: [
        {
          text: 'NA',
          class: 'na-badge'
        }
      ]
    },
    {
      tab: 'P1: Kefka',
      label: 'Static Freaky',
      tag: 'arrows',
      value: 'stfr',
      description: 'EU naming for Merry-Go-Round/Big Box',
      badges: [
        {
          text: 'EU',
          class: 'eu-badge'
        }
      ]
    },
    {
      tab: 'P1: Kefka',
      label: 'Filipino',
      tag: 'arrows',
      value: 'pinoy',
      description: 'Arrows arranged in four small boxes on each intercard, aka Small Box.'
    },
    {
      tab: 'P1: Kefka',
      label: 'Freaky',
      tag: 'arrows',
      value: 'freaky',
      description:
        'Obsolete modification of Merry-Go-Round to compensate for original snapshot behavior. No longer in use, kept here for archival purposes.'
    },
    {
      tab: 'P2: Forsaken Kefka',
      label: 'Kroxy-Rinon',
      tag: 'forsaken',
      value: 'kr',
      description:
        'AAABBBBA, Tanks and Melees are the only flexers. May be difficult to find original partners to determine flex, but takes burden off healers.',
      badges: [
        {
          text: 'NA',
          class: 'na-badge'
        }
      ]
    },
    {
      tab: 'P2: Forsaken Kefka',
      label: 'South Adjust',
      tag: 'forsaken',
      value: 'south',
      description:
        'AAABBBBA. If both players in a given tower match after new debuffs, the south player will flex for the next tower they need to soak. Everybody needs to flex + remember, but easier to visualize.'
    },
    {
      tab: 'P2: Forsaken Kefka',
      label: 'p3Z (Meow)',
      tag: 'forsaken',
      value: 'p3Z',
      description:
        'AAABBBBA, Tanks and Melees are the only flexers. Set 1 uses slightly different positioning to the other odd towers.',
      badges: [
        {
          text: 'EU',
          class: 'eu-badge'
        }
      ]
    },
    {
      tab: 'P2: Forsaken Kefka',
      label: 'LPDU',
      tag: 'forsaken',
      value: 'lpdu',
      description:
        'Mostly identical to p3Z, but changes the Set 1 positioning to be consistent with all other odd towers.',
      badges: [
        {
          text: 'EU',
          class: 'eu-badge'
        }
      ]
    },
    {
      tab: 'P3: Chaos and Exdeath',
      label: 'LB3 Cheese',
      category: 'Bowels',
      tag: 'bowels',
      value: 'lb',
      description:
        'All 8 players cleanse their Headwind/Tailwind on Vacuum Wave, then use Tank LB3 to take all 8 Wind AOEs simultaneously. Requires use of LB3 and heavy mit.',
      badges: [
        {
          text: 'NA',
          class: 'na-badge'
        }
      ]
    },
    {
      tab: 'P3: Chaos and Exdeath',
      label: 'SG3K (No LB)',
      category: 'Bowels',
      tag: 'bowels',
      value: 'sg3k',
      description:
        '2 players cleanse their Headwind/Tailwind on each crystal activation. The remaining 4 cleanse on Vacuum Wave, taking Wind AOEs as pair stacks. More difficult to execute, but no LB required.'
    },
    {
      tab: 'P3: Chaos and Exdeath',
      label: 'Eq0 (Walldeath)',
      category: 'Bowels',
      tag: 'bowels',
      value: 'Eq0',
      description:
        'LB3 Cheese, OT takes Exdeath opposite Wind, Healers on Water, Ranged on Fire. 4x 2-person role stacks for Wind AoEs.',
      badges: [
        {
          text: 'EU',
          class: 'eu-badge'
        }
      ]
    },
    {
      tab: 'P3: Chaos and Exdeath',
      label: 'LPDU (Middeath)',
      category: 'Bowels',
      tag: 'bowels',
      value: 'lpdu',
      description:
        'Modified Eq0 to keep Exdeath Mid instead of far South. Same otherwise (Healers on Water, Ranged on Fire, 4x 2-person role stacks for Wind AoEs)',
      badges: [
        {
          text: 'EU',
          class: 'eu-badge'
        }
      ]
    },
    {
      tab: 'P3: Chaos and Exdeath',
      label: 'D>S>A',
      category: 'Black Hole',
      tag: 'blackhole',
      value: 'dsa',
      description:
        "Original Kefkabin plan with DPS > Support > Accretion tether order. Watch 2nd-in-Line Tank after Set 3 to make sure they're healed up after going to 1HP.",
      badges: [
        {
          text: 'NA',
          class: 'na-badge'
        }
      ]
    },
    {
      tab: 'P3: Chaos and Exdeath',
      label: 'DSA Double',
      category: 'Black Hole',
      tag: 'blackhole',
      value: 'double',
      description:
        '2-tether hits in sets 1 and 4 are taken by a single player, D>S>A order otherwise. Avoids boss positioning issues and potential 1HP tank autos.',
      badges: [
        {
          text: 'NA',
          class: 'na-badge'
        }
      ]
    },
    {
      tab: 'P3: Chaos and Exdeath',
      label: 'S>D>A',
      category: 'Black Hole',
      tag: 'blackhole',
      value: 'sda',
      description:
        'Modified plan with Support > DPS > Accretion tether order. Swaps DPS and Supports from original plan to solve 1HP tank autos.'
    },
    {
      tab: 'P3: Chaos and Exdeath',
      label: 'ZsQ (LP Stomps)',
      category: 'Black Hole',
      tag: 'blackhole',
      value: 'ZsQ',
      description:
        "DPS > Support > Accretion tether order, Kefka Relative. Watch 2nd-in-Line Tank after Set 3 to make sure they're healed up after going to 1HP. Stomps start Supports N, DPS S, then split G1 Left, G2 Right.",
      badges: [
        {
          text: 'EU',
          class: 'eu-badge'
        }
      ]
    },
    {
      tab: 'P3: Chaos and Exdeath',
      label: 'LPDU (Role Stomps)',
      category: 'Black Hole',
      tag: 'blackhole',
      value: 'lpdu',
      description:
        'Same DPS > Support > Accretion order as ZsQ, but role-based Left/Right split for stomps (Tanks/Melees Left, Healers/Ranged Right)',
      badges: [
        {
          text: 'EU',
          class: 'eu-badge'
        }
      ]
    }
  ],
  tabTags: {
    'P1: Kefka': ['p1', 'arrows'],
    'P2: Forsaken Kefka': ['p2', 'forsaken'],
    'P3: Chaos and Exdeath': ['p3', 'bowels', 'blackhole'],
    'P4: Kefka Says': ['p4'],
    'P5: Ultima Kefka': ['p5']
  },
  useMainPageTabs: true,
  separateDescriptionAction: true,
  alignmentOptions: [
    { value: 'original', label: 'Boss North' },
    { value: 'truenorth', label: 'Tower North' }
  ],
  defaultStratName: 'kefkabin',
  timeline: [],
  posterEnabled: true,
  posterLayout: umadPosterLayout
};
