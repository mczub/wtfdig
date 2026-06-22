import type { FightConfig, PhaseStrats, Strat } from '$lib/types';
import { umadPosterLayout } from './posterData';

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
        description:
          'Tether = knockback\nFake Fire (top ring) = opposite of stack/spread marker\nFake Ice (bottom ring) = stand in purple',
        action: 'Supports West, DPS East',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'West',
            imageUrl: './umad/fireice-start.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'West',
            imageUrl: './umad/fireice-start.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'West',
            imageUrl: './umad/fireice-start.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'West',
            imageUrl: './umad/fireice-start.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'East',
            imageUrl: './umad/fireice-start.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'East',
            imageUrl: './umad/fireice-start.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'East',
            imageUrl: './umad/fireice-start.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'East',
            imageUrl: './umad/fireice-start.webp'
          }
        ]
      },
      {
        mechanic: 'Stack',
        action: 'Supports West, DPS East',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'West',
            imageUrl: './umad/fireice-stack.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'West',
            imageUrl: './umad/fireice-stack.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'West',
            imageUrl: './umad/fireice-stack.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'West',
            imageUrl: './umad/fireice-stack.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'East',
            imageUrl: './umad/fireice-stack.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'East',
            imageUrl: './umad/fireice-stack.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'East',
            imageUrl: './umad/fireice-stack.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'East',
            imageUrl: './umad/fireice-stack.webp'
          }
        ]
      },
      {
        mechanic: 'Spread',
        action: 'Supports West, DPS East\nTanks/Melees on hitbox',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'West half, N/S on hitbox',
            imageUrl: './umad/fireice-spread.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'West on hitbox',
            imageUrl: './umad/fireice-spread.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Far West',
            imageUrl: './umad/fireice-spread.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Far West',
            imageUrl: './umad/fireice-spread.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'West half, N/S on hitbox',
            imageUrl: './umad/fireice-spread.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'East on hitbox',
            imageUrl: './umad/fireice-spread.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Far East',
            imageUrl: './umad/fireice-spread.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Far East',
            imageUrl: './umad/fireice-spread.webp'
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
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: '3rd from West',
            imageUrl: './umad/lasers-conga.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: '4th from West',
            imageUrl: './umad/lasers-conga.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: '2nd from West',
            imageUrl: './umad/lasers-conga.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: '1st from West',
            imageUrl: './umad/lasers-conga.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: '4th from East',
            imageUrl: './umad/lasers-conga.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: '3rd from East',
            imageUrl: './umad/lasers-conga.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: '2nd from East',
            imageUrl: './umad/lasers-conga.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: '1st from East',
            imageUrl: './umad/lasers-conga.webp'
          }
        ]
      },
      {
        mechanic: 'Towers',
        action: "Use same West -> East prio on your half to soak towers if you didn't get hit",
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
        description:
          'One player from each role will get a Confetti debuff = stack + knockback from that player',
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
        description: 'Center tether = Puddle\nRight side tether = Rocks',
        action: 'North for 1st puddles',
        imageUrl: './umad/puddles-first-puddle.webp'
      },
      {
        mechanic: 'First Rocks',
        action: 'G1 Left, G2 Right\nMelees/Tanks can go E/W of boss hitbox\nGravity players can go middle',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Left, on hitbox',
            imageUrl: './umad/puddles-first-rocks.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Right, on hitbox',
            imageUrl: './umad/puddles-first-rocks.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Left',
            imageUrl: './umad/puddles-first-rocks.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Right',
            imageUrl: './umad/puddles-first-rocks.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Left, on hitbox',
            imageUrl: './umad/puddles-first-rocks.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Right, on hitbox',
            imageUrl: './umad/puddles-first-rocks.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Left',
            imageUrl: './umad/puddles-first-rocks.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Right',
            imageUrl: './umad/puddles-first-rocks.webp'
          }
        ]
      },
      {
        mechanic: 'Tankbuster',
        description: 'Same conal tankbuster as first one',
        imageUrl: './umad/puddles-tankbuster.webp'
      },
      {
        mechanic: 'First Half-room',
        description: 'Boss orb telegraphs half-room cleave',
        imageUrl: './umad/puddles-first-halfroom.webp'
      },
      {
        mechanic: 'Second Puddle',
        action: 'South for 2nd Puddles',
        imageUrl: './umad/puddles-second-puddle.webp'
      },
      {
        mechanic: 'Second Rocks',
        action:
          'G1 go Left, G2 go Right\nMelees/Tanks can go E/W of boss hitbox\nGravity players can go middle',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Left, on hitbox',
            imageUrl: './umad/puddles-second-rocks.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Right, on hitbox',
            imageUrl: './umad/puddles-second-rocks.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Left',
            imageUrl: './umad/puddles-second-rocks.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Right',
            imageUrl: './umad/puddles-second-rocks.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Left, on hitbox',
            imageUrl: './umad/puddles-second-rocks.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Right, on hitbox',
            imageUrl: './umad/puddles-second-rocks.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Left',
            imageUrl: './umad/puddles-second-rocks.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Right',
            imageUrl: './umad/puddles-second-rocks.webp'
          }
        ]
      },
      {
        mechanic: 'Second Half-room',
        description:
          'Boss orb telegraphs half-room cleave\nSupports preposition North\nDPS preposition South',
        imageUrl: './umad/puddles-second-halfroom.webp'
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
        imageUrl: './umad/confetti2-knockback.webp'
      },
      {
        mechanic: 'Puddle Soak',
        action:
          'Get knocked back through boss into opposite puddle\nConfettis step back into puddle',
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
          description: 'Supports NW, DPS SE for Confetti KB\nConfetti debuffs on the 1/3 markers',
          imageUrl: './umad/arrows-knockback.webp'
        },
        {
          mechanic: 'Sleep/Confuse (Fixed positions)',
          description:
            'IGNORE DEBUFFS, use fixed tether spots\nTanks/Melee inside, Healers/Ranged outside',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'North, inside',
              imageUrl: './umad/arrows-sleep-confuse.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'West, inside',
              imageUrl: './umad/arrows-sleep-confuse.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'South, outside',
              imageUrl: './umad/arrows-sleep-confuse.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'East, outside',
              imageUrl: './umad/arrows-sleep-confuse.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'South, inside',
              imageUrl: './umad/arrows-sleep-confuse.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'East, inside',
              imageUrl: './umad/arrows-sleep-confuse.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'North, outside',
              imageUrl: './umad/arrows-sleep-confuse.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'West, outside',
              imageUrl: './umad/arrows-sleep-confuse.webp'
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
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'North',
              imageUrl: './umad/p1-arrows-freaky-6.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'West',
              imageUrl: './umad/p1-arrows-freaky-6.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'South',
              imageUrl: './umad/p1-arrows-freaky-6.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'East',
              imageUrl: './umad/p1-arrows-freaky-6.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'South',
              imageUrl: './umad/p1-arrows-freaky-6.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'East',
              imageUrl: './umad/p1-arrows-freaky-6.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'North',
              imageUrl: './umad/p1-arrows-freaky-6.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'West',
              imageUrl: './umad/p1-arrows-freaky-6.webp'
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
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Northeast, 2 marker',
            imageUrl: './umad/gaze-static-spots.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Southeast, 3 marker',
            imageUrl: './umad/gaze-static-spots.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'South, far',
            imageUrl: './umad/gaze-static-spots.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'East, far',
            imageUrl: './umad/gaze-static-spots.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Northwest, 1 marker',
            imageUrl: './umad/gaze-static-spots.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Southwest, 4 marker',
            imageUrl: './umad/gaze-static-spots.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'North, far',
            imageUrl: './umad/gaze-static-spots.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'West, far',
            imageUrl: './umad/gaze-static-spots.webp'
          }
        ]
      },
      {
        mechanic: 'Spread',
        description:
          'Make sure to solve Gaze (on statue) + Lightning lines',
        action: 'Melee on unsafe half move under boss',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Northeast, 2 marker',
            imageUrl: './umad/gaze-spread.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Southeast, 3 marker',
            imageUrl: './umad/gaze-spread.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'South, far',
            imageUrl: './umad/gaze-spread.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'East, far',
            imageUrl: './umad/gaze-spread.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Northwest, 1 marker',
            imageUrl: './umad/gaze-spread.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Southwest, 4 marker',
            imageUrl: './umad/gaze-spread.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'North, far',
            imageUrl: './umad/gaze-spread.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'West, far',
            imageUrl: './umad/gaze-spread.webp'
          }
        ]
      },
      {
        mechanic: 'Stack',
        action: 'Supports on 3\nDPS on 1',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Southeast, 3 marker',
            imageUrl: './umad/gaze-stack.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Southeast, 3 marker',
            imageUrl: './umad/gaze-stack.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Southeast, 3 marker',
            imageUrl: './umad/gaze-stack.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Southeast, 3 marker',
            imageUrl: './umad/gaze-stack.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Northwest, 1 marker',
            imageUrl: './umad/gaze-stack.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Northwest, 1 marker',
            imageUrl: './umad/gaze-stack.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Northwest, 1 marker',
            imageUrl: './umad/gaze-stack.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Northwest, 1 marker',
            imageUrl: './umad/gaze-stack.webp'
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
          description:
            'Find role/group partner',
          action: 'Group A if one has a stack\nGroup B if both the same',
          imageUrl: './umad/p2-forsaken-kr-3.webp',
        },
        {
          mechanic: 'Odd Towers',
          description:
            'Left Tower: {{forsaken-stack}} Stack + {{forsaken-cone}} Cone, Right Tower: {{forsaken-stack}} Stack + {{forsaken-circle}} Spread',
          action: 'Non-tower Tank front edge, Non-tower Healer back off edge\nTower Tank/Melee flex if partner matches',
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
          description: 'Both Towers: {{forsaken-cone}} Cone North + {{forsaken-circle}} Spread South',
          action: 'Non-tower Tank/Melee North on OUTER RING of boss hitbox to bait Clones\nNon-Tower Healer/Ranged bait cones on Marker\nNumber Marker = Back corner, Letter Marker = Front edge\nTower Tank/Melee flex if partner matches',
          imageUrl: './umad/p2-forsaken-kr-8.webp'
        },
        {
          mechanic: 'Even Towers (Number Markers, Left)',
          description:
            'Left tower (Boss is North)\n{{forsaken-cone}} Cone = Front edge towards Left on inner hitbox ring\nBaiter = Back corner of Number Markers\n{{forsaken-circle}} Spread = South edge, slightly toward other tower',
          imageUrl: './umad/p2-forsaken-kr-9.webp',
          alignmentTransforms: { truenorth: 'rotate(45deg)' }
        },
        {
          mechanic: 'Even Towers (Letter Markers, Right)',
          description:
            'Right tower (Boss is North)\n{{forsaken-cone}} Cone = Front edge towards Right on inner hitbox ring\nBaiter = Front edge of Letter Markers\n{{forsaken-circle}} Spread = South edge, slightly toward other tower',
          imageUrl: './umad/p2-forsaken-kr-12.webp',
          alignmentTransforms: { truenorth: 'rotate(-45deg)' }
        },
        {
          mechanic: 'Future/Past Baits',
          description:
            'Everyone baits Past/Future at max melee\nCast after every odd tower, bait after every even tower',
          action: 'MAX MELEE, Past = Between towers, Future = Away from towers',
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
            'Both Towers: {{forsaken-cone}} Cone (inner ring at tower edge) + {{forsaken-circle}} Spread South\nNon-tower Tank/Melee North on OUTER RING of boss hitbox to bait Clones\nNon-Tower Healer/Ranged bait Cones on Marker\nSpread can cheat slightly away from baiter\nSouth tower players flex for next tower if new debuff matches',
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
          strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Drag Chaos to wall at Wind crystal',
            imageUrl: './umad/p3-lb-5.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Keep Exdeath Middle',
            imageUrl: './umad/p3-lb-5.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Stack at Wind crystal',
            imageUrl: './umad/p3-lb-5.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Stack at Wind crystal',
            imageUrl: './umad/p3-lb-5.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stack at Wind crystal',
            imageUrl: './umad/p3-lb-5.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stack at Wind crystal',
            imageUrl: './umad/p3-lb-5.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Spread at wall near short debuff crystal\nFurther from boss',
            imageUrl: './umad/p3-lb-5.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Spread at wall near short debuff crystal\nCloser to boss',
            imageUrl: './umad/p3-lb-5.webp'
          }
        ]
        },
        {
          mechanic: 'First Resolve (Short)',
          description:
            'Exdeath defam, Firewall debuffs drop, Short element resolves\nShort {{entropy}} Fire: Melee spread from Supports\nShort {{dynamic-fluid}} Water: Melee + Supports stack\nCrystal AOE hits Ranged',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'If short {{entropy}} Fire, be away from Melees\nIf short {{dynamic-fluid}} Water, stack with Melees',
              imageUrl: './umad/p3-lb-6.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'If short {{entropy}} Fire, be away from Melees\nIf short {{dynamic-fluid}} Water, stack with Melees',
              imageUrl: './umad/p3-lb-6.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'If short {{entropy}} Fire, be away from Melees\nIf short {{dynamic-fluid}} Water, stack with Melees',
              imageUrl: './umad/p3-lb-6.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'If short {{entropy}} Fire, be away from Melees\nIf short {{dynamic-fluid}} Water, stack with Melees',
              imageUrl: './umad/p3-lb-6.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'If short {{entropy}} Fire, be away from Supports\nIf short {{dynamic-fluid}} Water, stack with Supports',
              imageUrl: './umad/p3-lb-6.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'If short {{entropy}} Fire, be away from Supports\nIf short {{dynamic-fluid}} Water, stack with Supports',
              imageUrl: './umad/p3-lb-6.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Stay spread at wall, take crystal AoE',
              imageUrl: './umad/p3-lb-6.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Stay spread at wall, take crystal AoE',
              imageUrl: './umad/p3-lb-6.webp'
            }
          ]
        },
        {
          mechanic: 'Tankbuster + Implosion',
          description:
            'Exdeath Thunder III 2-hit tankbuster\nDrag Exdeath to the wall, Chaos tank drag Chaos out + position near intercard for Lat/Long\nLatitude = sides first, Longitude = front/back first',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Take Exdeath Tankbuster, then drag Exdeath/Chaos to wall at Wind',
              imageUrl: './umad/p3-lb-10.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Take Exdeath Tankbuster, then drag Exdeath/Chaos to wall at Wind',
              imageUrl: './umad/p3-lb-10.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Dodge Lat/Long',
              imageUrl: './umad/p3-lb-10.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Dodge Lat/Long',
              imageUrl: './umad/p3-lb-10.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Dodge Lat/Long',
              imageUrl: './umad/p3-lb-10.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Dodge Lat/Long',
              imageUrl: './umad/p3-lb-10.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Move across to other crystal\nWatch Chaos for Lat/Long',
              imageUrl: './umad/p3-lb-10.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Move across to other crystal\nWatch Chaos for Lat/Long',
              imageUrl: './umad/p3-lb-10.webp'
            }
          ]
        },
        {
          mechanic: 'Second Resolve (Long)',
          description:
            'Long debuffs resolve after 2nd Implosion hit\nRanged spread, Melee + Supports stack or spread depending on debuff',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'If short {{entropy}} Fire, be away from Melees\nIf short {{dynamic-fluid}} Water, stack with Melees',
              imageUrl: './umad/p3-lb-11.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'If short {{entropy}} Fire, be away from Melees\nIf short {{dynamic-fluid}} Water, stack with Melees',
              imageUrl: './umad/p3-lb-11.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'If short {{entropy}} Fire, be away from Melees\nIf short {{dynamic-fluid}} Water, stack with Melees',
              imageUrl: './umad/p3-lb-11.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'If short {{entropy}} Fire, be away from Melees\nIf short {{dynamic-fluid}} Water, stack with Melees',
              imageUrl: './umad/p3-lb-11.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'If short {{entropy}} Fire, be away from Supports\nIf short {{dynamic-fluid}} Water, stack with Supports',
              imageUrl: './umad/p3-lb-11.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'If short {{entropy}} Fire, be away from Supports\nIf short {{dynamic-fluid}} Water, stack with Supports',
              imageUrl: './umad/p3-lb-11.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Stay spread at wall, take crystal AoE',
              imageUrl: './umad/p3-lb-11.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Stay spread at wall, take crystal AoE',
              imageUrl: './umad/p3-lb-11.webp'
            }
          ]
        },
        {
          mechanic: 'Superjump',
          description:
            'Drag Exdeath onto the Wind crystal\nPhys Ranged go opposite Wind crystal to bait Superjump\nEveryone stack on Exdeath',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Drag Exdeath onto Wind crystal\nWait for Chaos to jump, then stack behind Exdeath',
              imageUrl: './umad/p3-lb-13.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Drag Exdeath onto Wind crystal\nWait for Chaos to jump, then stack behind Exdeath',
              imageUrl: './umad/p3-lb-13.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Wait for Chaos to jump, then stack behind Exdeath',
              imageUrl: './umad/p3-lb-13.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Wait for Chaos to jump, then stack behind Exdeath',
              imageUrl: './umad/p3-lb-13.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Wait for Chaos to jump, then stack behind Exdeath',
              imageUrl: './umad/p3-lb-13.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Wait for Chaos to jump, then stack behind Exdeath',
              imageUrl: './umad/p3-lb-13.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Go away from Chaos to bait jump\nAs soon as casts start, stack behind Exdeath',
              imageUrl: './umad/p3-lb-13.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Wait for Chaos to jump, then stack behind Exdeath',
              imageUrl: './umad/p3-lb-13.webp'
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
            'Exdeath Thunder III Tankbuster on closest\nChaos tank center, face between Wind and Long crystal\nLatitude = sides first, Longitude = front/back first\nDodge into the first AOE, second crystal happens right after second hit',
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
            'Supports Left, DPS Right, each with your role partner\nResolve {{headwind}}{{tailwind}} Head/Tailwind\nTANK LB toward the end of the cast bar\nMove to your Wind stack location',
          imageUrl: './umad/p3-lb-pairs.webp'
        },
        {
          mechanic: '8-Stack Variant',
          action: 'Resolve {{headwind}}{{tailwind}} Head/Tailwind\nStack all 8 players and mit',
          imageUrl: './umad/p3-lb-8stack.webp'
        },
        {
          mechanic: 'Numbers',
          description:
            'Relative North = opposite Kefka’s FIRST dash\nStand on the inter-inter-cardinals in number order from Rel N, rotating OPPOSITE Kefka’s dash direction\nAlign with the waymark or between markers\nExdeath Thunder III tankbuster after',
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
            'Relative North = opposite Kefka’s FIRST dash\nStand on the inter-inter-cardinals in number order from Rel N, rotating OPPOSITE Kefka’s dash direction\nAlign with the waymark or between markers\nExdeath Thunder III tankbuster after',
          imageUrl: './umad/p3-sg3k-15.webp'
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
          'G1 Supports + Melee -> Chaos\nG2 Supports + Ranged -> Exdeath\nExdeath Thunder III tankbuster',
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
          'Healers single-target the First-in-line {{accretion}} Accretion, then the second\nDPS = 1st tether CW from Kefka, Supports = 2nd, {{accretion}} Accretion = 3rd',
        imageUrl: './umad/p3-lb-25.webp'
      }
    ]
  },
  {
    phaseName: 'Earthquake: Black Holes',
    tag: 'p3',
    mechs: [
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
        mechanic: 'Tether Timeline',
        description:
          '<b>Tether CW Order = #1 DPS, #2 Supports, #3 {{accretion}} Accretion</b>',
        action:
          '<b>Set 1 (1 Laser + 2 Lasers)</b>\nSet 1 1st hit: {{first-in-line}} DPS\nSet 1 2nd hit: {{first-in-line}} DPS + {{first-in-line}} Support\nExdeath Tankbuster\nChaos Edict + Kefka Hand\n<b>Set 2 (3 Lasers, 3 hits)</b>\nSet 2 1st hit: {{first-in-line}} DPS, {{first-in-line}} Support, {{first-in-line}}{{accretion}} Accretion\nSet 2 2nd hit: {{second-in-line}} DPS take 1st tether\nSet 2 3rd hit: {{second-in-line}} Support take 2nd tether\nChaos Edict + Kefka Hand + Exdeath Tankbuster\n<b>Set 3 (3 tethers, 3 hits)</b>\nSet 3 1st hit: {{second-in-line}} DPS, {{second-in-line}} Support, {{second-in-line}}{{accretion}} Accretion\nSet 3 2nd hit: {{third-in-line}} DPS take 1st tether\nSet 3 3rd hit: {{third-in-line}} Support take 2nd tether\n<b>Set 4 (2 Lasers + 1 Laser)</b>\nSet 4 1st hit: {{third-in-line}} DPS + {{third-in-line}} Support\nSet 4 2nd hit: {{third-in-line}} Support',
        imageUrl: './umad/p3-lb-30.webp'
      },
      {
        mechanic: 'White Hole + Dodges',
        description:
          'Dodge Latitude/Longitude then Kefka hand (move to the safe side on the 2nd hit)\nExdeath White Hole: ALL players must be at FULL HP\nKefka Party Stack / Role Spread resolves',
        imageUrl: './umad/p3-lb-46.webp'
      }
    ]
  },
  {
    phaseName: 'Earthquake: Blizzard',
    tag: 'p3',
    mechs: [
      {
        mechanic: 'Blizzard Puddles',
        description:
          'Party stack mid (Kefka = Relative North)\nBlizzard AOEs under everyone -> move to intercards in partners\nSupports Rel N, DPS Rel S; G1 Rel W/Left, G2 Rel E/Right\n1 Support or 1 DPS gets a stack marker',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Spread Relative Northwest',
            imageUrl: './umad/p3-lb-54.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Spread Relative Northeast',
            imageUrl: './umad/p3-lb-54.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Spread Relative Northwest',
            imageUrl: './umad/p3-lb-54.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Spread Relative Northeast',
            imageUrl: './umad/p3-lb-54.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Spread Relative Southwest',
            imageUrl: './umad/p3-lb-54.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Spread Relative Southeast',
            imageUrl: './umad/p3-lb-54.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Spread Relative Southwest',
            imageUrl: './umad/p3-lb-54.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Spread Relative Southeast',
            imageUrl: './umad/p3-lb-54.webp'
          }
        ]
      },
      {
        mechanic: 'Towers + Enrage',
        description:
          'Stacked role returns mid after the 2nd puddle bait; other role takes the Rel E/W tower (G1 West, G2 East)\nSwap: opposite role gets the stack, take towers again\nBlizzard III = keep moving\nKill both bosses before enrage',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'West/Left Tower',
            imageUrl: './umad/p3-lb-56.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'East/Right Tower',
            imageUrl: './umad/p3-lb-56.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'West/Left Tower',
            imageUrl: './umad/p3-lb-56.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'East/Right Tower',
            imageUrl: './umad/p3-lb-56.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'West/Left Tower',
            imageUrl: './umad/p3-lb-56.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'East/Right Tower',
            imageUrl: './umad/p3-lb-56.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'West/Left Tower',
            imageUrl: './umad/p3-lb-56.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'East/Right Tower',
            imageUrl: './umad/p3-lb-56.webp'
          }
        ]
      }
    ]
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
          '{{forked-lightning}}{{compressed-water}} Lightning/Water can have short or long timer\nNeo Exdeath applies 2x Lightning and 2x Water per cast\nOne cast will have Short timer, other will be Long\n{{forked-lightning}} Lightning OR {{kefka-fake}}{{compressed-water}} Fake Water = Spread\n{{compressed-water}} Water OR {{kefka-fake}}{{forked-lightning}} Fake Lightning = Stack\n\nEach player gets 1 {{accel-bomb}} Accel Bomb with a short or long timer\nNeo Exdeath applies 2x Short and 2x Long per cast\n{{accel-bomb}} Accel Bomb = Stillness, {{kefka-fake}} Fake = Motion\n\n1st applied {{cursed-shriek}} Shriek has short timer, 2nd has long timer\n{{cursed-shriek}} Shriek = Look away, {{kefka-fake}} Fake = Look at'
      },
      {
        mechanic: 'Chaos Debuffs',
        description:
          '{{entropy}} Entropy resolves 1st, {{dynamic-fluid}} Dynamic resolves 2nd regardless of order applied\n{{entropy}} Entropy OR {{kefka-fake}}{{dynamic-fluid}} Fake Dynamic = Fire/AOE\n{{dynamic-fluid}} Dynamic OR {{kefka-fake}}{{entropy}} Fake Entropy = Water/Donut'
      },
      {
        mechanic: 'Antilight + Flood of Naught',
        description:
          'Applies {{white-wound}}/{{black-wound}} Wound + 4 {{allagan-field}} Allagan Field, 4 {{beyond-death}} Beyond Death\n{{allagan-field}} Allagan = Stand in Opposite Color\n{{beyond-death}} Beyond Death = Stand in Same Color\nIgnore the Real/Fake on debuff application\nFollow the Real/Fake on Flood of Naught cast'
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
        action: 'Spread: Tanks N, Healers W, DPS E',
        imageUrl: './umad/p5-7.webp'
      },
      {
        mechanic: '1st Hit (Random)',
        description: '1st hit is random\nMT gets 1x Surprise Flare, OT gets 1x Surprise Holy\n3x on Non-tanks',
        imageUrl: './umad/p5-8.webp'
      },
      {
        mechanic: '2nd Hit (Proximity)',
        description: '2nd hit is proximity\nTanks stack together for the shared buster\nParty go out if you got hit',
        action: 'Tanks stack together for the shared buster\nNon-tanks go out if you got hit first',
        imageUrl: './umad/p5-9.webp'
      },
      {
        mechanic: 'Tank Resolve',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Flare; go to the wall North',
            imageUrl: './umad/p5-10.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Holy; invuln max melee\nHoly tank voke before the resolution to take the next 2 autos with invuln',
            imageUrl: './umad/p5-10.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'South',
            imageUrl: './umad/p5-10.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'South',
            imageUrl: './umad/p5-10.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'South',
            imageUrl: './umad/p5-10.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'South',
            imageUrl: './umad/p5-10.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'South',
            imageUrl: './umad/p5-10.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'South',
            imageUrl: './umad/p5-10.webp'
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
        action: 'Earth = IN, Wind = OUT',
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
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Holy; invuln max melee',
            imageUrl: './umad/p5-20.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Flare; go to the wall North',
            imageUrl: './umad/p5-20.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Spread towards West, Close/Far, South',
            imageUrl: './umad/p5-20.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Spread towards West, Close/Far, South',
            imageUrl: './umad/p5-20.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Spread towards East, Close/Far, South',
            imageUrl: './umad/p5-20.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Spread towards East, Close/Far, South',
            imageUrl: './umad/p5-20.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Spread towards East, Close/Far, South',
            imageUrl: './umad/p5-20.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Spread towards East, Close/Far, South',
            imageUrl: './umad/p5-20.webp'
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
      },
      {
        mechanic: 'Adjusts',
        description:
          'If the 3rd set spawns the hole at B, go back toward 1 instead: 4 - 1 - 2 - 1\nIf a void puddle blocks your path, reverse direction',
        action: 'If blocked at B, go back to 1 (4-1-2-1)',
        imageUrl: './umad/p5-enrage-9.webp'
      }
    ]
  }
];

const kefkabinStrat: Strat = {
  stratName: 'kefkabin',
  description: '',
  stratUrl: {
    'Kefka Bin': 'https://pastebin.com/7fs57PyQ',
    'UMAD P1: Merry Go Round by Fae Fiyaa':
      'https://docs.google.com/presentation/d/1-E2rEKa586KKiVNvtt3EAMQY2YAEVBRGcMX0WzORIq8/edit?usp=sharing',
    'P2 Trines': 'https://raidplan.io/plan/apkh6ytq72w8pt3v',
    'UMAD P3 by Fae Fiyaa':
      'https://docs.google.com/presentation/d/1aTnFt8TO4y1P7kd6i-dS2uJobg2auHyu4VWO6Hr6DtM',
    'P4 drate says Raidplan': 'https://raidplan.io/plan/V-r1InYZW7VMRYAU',
    'P5 Raidplan': 'https://raidplan.io/plan/3wqr483tjcsgd6xv',
    'P5 Forsaken Enrage': 'https://raidplan.io/plan/PFAuAaUViJ3vUjqr'
  },
  notes:
    'These strats will likely change! Refer to the original resources for the most up-to-date versions',
  strats: [...allP1, ...allP2, ...allP3, ...allP4, ...allP5]
};

export const dancingMadStrats: Strat[] = [kefkabinStrat];

export const dancingMadFightConfig: FightConfig = {
  fightKey: 'umad',
  title: 'Dancing Mad (Ultimate)',
  abbreviatedTitle: 'Kefka',
  subtitle: 'Kefka 7.51',
  cheatsheetTitle: 'Dancing Mad Cheatsheet',
  showAllToggleUrls: true,
  strats: {
    kefkabin: { label: 'Kefkabin', defaults: { arrows: 'freaky', forsaken: 'kr', bowels: 'lb' } }
  },
  toggles: [
    {
      key: 'arrows',
      label: 'P1 Arrows',
      defaultValue: 'freaky',
      phaseTag: 'arrows',
      options: [
        {
          value: 'freaky',
          label: 'Freaky MGR',
          url: {
            name: 'freaky merry go round arrows',
            url: 'https://raidplan.io/plan/qD9Y_g1caq3l5gD-'
          }
        },
        { value: 'mgr', label: 'Merry-Go-Round' },
        {
          value: 'pinoy',
          label: 'Filipino Box',
          url: { name: 'Filipino Box Graven 3', url: 'https://raidplan.io/plan/5rf2uhud5ztsbud5' }
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
          label: 'Kroxy-Rinon',
          url: {
            name: 'Kroxy-Rinon 3/4/1 (Center/N Stacks)',
            url: 'https://raidplan.io/plan/UATE__aDcw1-bgVv'
          }
        },
        {
          value: 'south',
          label: 'South Adjust',
          url: { name: 'APHORSAKEN (s.flex)', url: 'https://raidplan.io/plan/uq7zdjvuu7uuw8fj' }
        }
      ]
    },
    {
      key: 'bowels',
      label: 'P3 Bowels/LC',
      defaultValue: 'lb',
      phaseTag: 'bowels',
      options: [
        {
          value: 'sg3k',
          label: 'SG3K (No LB)',
          url: {
            name: 'SG3K Bowels/LC by S’vetha Mako',
            url: 'https://raidplan.io/plan/9assfrb4fcvwat9e'
          }
        },
        { value: 'lb', label: 'LB3 Cheese' }
      ]
    }
  ],
  tabTags: {
    'P1: Kefka': ['p1', 'arrows'],
    'P2: Forsaken Kefka': ['p2', 'forsaken'],
    'P3: Chaos and Exdeath': ['p3', 'bowels'],
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
