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
          'Supports West, DPS East\nTether = knockback\nFake Fire (top ring) = opposite of stack/spread marker\nFake Ice (bottom ring) = stand in purple',
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
        description: 'Supports West, DPS East',
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
        description: 'Supports West, DPS East\nTanks/Melees on hitbox',
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
        description: 'HHTTMMRR Conga\n2 DPS + 2 Supports get hit and spawn towers',
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
        description:
          'Everyone go North for first puddles\nCenter tether = Gravity Stack + Puddle\nRight side tether = Rocks',
        imageUrl: './umad/puddles-first-puddle.webp'
      },
      {
        mechanic: 'First Rocks',
        description:
          'G1 go Left, G2 go Right\nMelees/Tanks can go E/W of boss hitbox\nGravity players can go middle',
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
        description: 'Go South to place second puddles',
        imageUrl: './umad/puddles-second-puddle.webp'
      },
      {
        mechanic: 'Second Rocks',
        description:
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
        description:
          'Supports North, DPS South\nParty stack on inside of hitbox\nConfetti move out into puddle buttcrack',
        imageUrl: './umad/confetti2-knockback.webp'
      },
      {
        mechanic: 'Puddle Soak',
        description:
          'Get knocked back through the puddles, then stand in the venn diagram to soak\nConfettis step back to help soak',
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
          description: 'Supports NW, DPS SE for Confetti KB\nConfetti debuffs on the 1/3 markers',
          imageUrl: './umad/p1-arrows-freaky-5.webp'
        },
        {
          mechanic: 'Sleep/Confuse (Tethers matter)',
          description:
            'Each role gets Upper (Outside/Confuse) or Lower (Inside/Sleep)\nLower: stay inside and get slept\nUpper: go outside and get confused',

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
        description: 'After teleports, preposition in shown spots',
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
          'Make sure to solve Gaze (on statue) + Lightning lines\nMelee on unsafe half move under boss',
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
        description: 'Supports on 3\nDPS on 1',
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
                '<b>Tower 1 - Help Stack</b><br><b>REMEMBER DEBUFF</b><br>Left Tower, Out + Front edge<br><br><b>Tower 2 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Help Stack</b><br>Left Tower, Out + Front edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower Prio, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Tank',
              party: 2,
              description:
                '<b>Tower 1 - Help Stack</b><br><b>REMEMBER DEBUFF</b><br>Left Tower, Out + Front edge<br><br><b>Tower 2 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Help Stack</b><br>Left Tower, Out + Front edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Left Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Left Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower Prio, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Clone</b><br>Bait Left Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b>'
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
                '<b>Tower 1 - Help Stack</b><br><b>REMEMBER DEBUFF</b><br>Right Tower, Out + Front edge<br><br><b>Tower 2 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower Prio, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b>'
            },
            {
              role: 'Melee',
              party: 2,
              description:
                '<b>Tower 1 - Help Stack</b><br><b>REMEMBER DEBUFF</b><br>Right Tower, Out + Front edge<br><br><b>Tower 2 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 3 - Help Stack</b><br>Right Tower, Out + Front edge<br><br><b>Tower 4 - Take Tower</b><br>{{forsaken-cone}} Cone → Right Tower, inner ring at tower edge<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 5 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 6 - Take Tower</b><br>{{forsaken-cone}} Cone → HTMR Tower Prio, inner ring at tower edge<br>{{forsaken-circle}} Circle → HTMR Tower Prio, South<br><br><b>BAIT FUTURE/PAST</b><br><br><b>Tower 7 - Take Tower</b><br>{{forsaken-stack}} Stack → HTMR Tower Prio, North-ish<br>{{forsaken-cone}} Cone → Left Tower, South<br>{{forsaken-circle}} Circle → Right Tower, South<br><br><b>Tower 8 - Bait Clone</b><br>Bait Right Clone, Far North (outer ring)<br><br><b>BAIT FUTURE/PAST</b>'
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
            'Find role/group partner\nGroup A if one has a stack\nGroup B if both the same',
          imageUrl: './umad/p2-forsaken-kr-3.webp'
        },
        {
          mechanic: 'Odd Towers',
          description:
            'Left Tower: {{forsaken-stack}} Stack + {{forsaken-cone}} Cone, Right Tower: {{forsaken-stack}} Stack + {{forsaken-circle}} Spread\nNon-tower Tank front edge, Non-tower Healer back off edge\nTower Tank/Melee flex if partner matches',
          imageUrl: './umad/p2-forsaken-kr-4.webp'
        },
        {
          mechanic: 'Even Towers (Diamond Box Markers)',
          description:
            'Both Towers: {{forsaken-cone}} Cone North + {{forsaken-circle}} Spread South\nNon-tower Tank/Melee North on OUTER RING of boss hitbox to bait Clones\nNon-Tower Healer/Ranged bait cones on Marker\nNumber Marker = Back corner, Letter Marker = Front edge\nTower Tank/Melee flex if partner matches',
          imageUrl: './umad/p2-forsaken-kr-6.webp'
        },
        {
          mechanic: 'Even Towers (Number Markers, Left)',
          description:
            'Left tower (Boss is North)\nCone = Front edge towards Left on inner hitbox ring, Baiter = Back corner of Number Markers\nSpread = South edge, slightly toward other tower',
          imageUrl: './umad/p2-forsaken-kr-7.webp'
        },
        {
          mechanic: 'Even Towers (Letter Markers, Right)',
          description:
            'Right tower (Boss is North)\nCone = Front edge towards Right on inner hitbox ring, Baiter = Front edge of Letter Markers\nSpread = South edge, slightly toward other tower',
          imageUrl: './umad/p2-forsaken-kr-10.webp'
        },
        {
          mechanic: 'Future/Past Baits',
          description:
            'Everyone baits Past/Future at max melee\nPast = Between towers, Future = Away from towers\nCast after every odd tower, bait after every even tower\nSouth tower players will flex if debuff matches North player',
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
          '3 sets of Trines spawn: 3/1/3\nHalf room while 3rd set is landing\nStart Mid, then dodge into first explosion\nTanks move into 1st CCW from 1\nParty movies into 1st CW from A',
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
        description: 'One tank tucked into middle trine, one tank far, party in midrange safespot',
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
        description: 'G1 Supports + Melee -> Chaos\nG2 Supports + Ranged -> Exdeath'
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
            '1 Sup + 1 DPS: Entropy (fire/spread)\n1 Sup + 1 DPS: Dynamic Fluid (water/donut)\nOne Short (20s), one Long (45s)\nEveryone gets Headwind or Tailwind\nHeadwind = face AWAY, Tailwind = face TOWARD the source',
          imageUrl: './umad/p3-lb-4.webp'
        },
        {
          mechanic: 'Setup',
          description:
            'MT: drag Chaos to the wall at Wind crystal\nOT: keep Exdeath middle\nMelees + Healers stack at the Wind crystal\nRanged spread at the Short debuff crystal',
          imageUrl: './umad/p3-lb-5.webp'
        },
        {
          mechanic: 'First Resolve (Short)',
          description:
            'Exdeath defam, Firewall debuffs drop, Short element resolves\nShort Fire: Melee spread from Supports\nShort Water: Melee + Supports stack\nCrystal AOE hits ranged',
          imageUrl: './umad/p3-lb-6.webp'
        },
        {
          mechanic: 'Tankbuster + Implosion',
          description:
            'MT drag Chaos to the wall, Exdeath Thunder III 2-hit tankbuster\nRanged swap to the other crystal, stay off Exdeath so you do not bait it\nDrag Exdeath to the wall, Chaos tank point Chaos out on intercard\nLatitude = sides first, Longitude = front/back first',
          imageUrl: './umad/p3-lb-10.webp'
        },
        {
          mechanic: 'Second Resolve (Long)',
          description:
            'Resolve Long debuffs after 2nd implosion hit\nRanged spread, Melee + Supports stack or spread depending on debuff',
          imageUrl: './umad/p3-lb-11.webp'
        },
        {
          mechanic: 'Superjump',
          description:
            'Drag Exdeath on the Wind crystal\nPhys Ranged go opposite Wind crystal to bait Superjump\nEveryone stack on Exdeath',
          imageUrl: './umad/p3-lb-13.webp'
        },
      ],
      sg3k: [
        {
          mechanic: 'Debuffs',
          description:
            '1 Sup + 1 DPS: Entropy (fire/spread)\n1 Sup + 1 DPS: Dynamic Fluid (water/donut)\nOne Short (20s), one Long (45s)\nEveryone gets Headwind or Tailwind\nHeadwind = face AWAY, Tailwind = face TOWARD the source',
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
            'Short: stay for the second hit\nLong: get knocked back\nFire = dead center, Water = inner ring on the floor\nWind baiters align with intercard waymark, DPS slightly further from Wind crystal',
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
            'Dodge 2nd cleave into your element spots (same prio)\nShort: get knocked back by crystal hit\nFire = dead center, Water = inner ring on the floor\nWind baiters return to the same side and bait again',
          imageUrl: './umad/p3-sg3k-9.webp'
        },
        {
          mechanic: 'Superjump',
          description:
            'Drag both bosses opposite wind crystal\nPhys Ranged stand at the wall behind the Wind crystal to bait Superjump',
          imageUrl: './umad/p3-sg3k-11.webp'
        },
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
          description:
            'Watch Kefka dashes\nREMEMBER start + CW or CCW rotation for Limit Cut',
          imageUrl: './umad/p3-lb-14.webp'
        },
        {
          mechanic: 'Vacuum Wave + Tank LB',
          description:
            'Exdeath Vacuum Wave KB: Supports Left, DPS Right, each with your role partner\nResolve Head/Tailwind\nTANK LB toward the end of the cast bar\nMove to your Wind stack location',
          imageUrl: './umad/p3-lb-15.webp'
        },
        {
          mechanic: 'Numbers',
          description:
            'Relative North = opposite Kefka’s FIRST dash\nStand on the inter-inter-cardinals in number order from Rel N, rotating OPPOSITE Kefka’s dash direction\nAlign with the waymark or between markers\nExdeath Thunder III tankbuster after',
          imageUrl: './umad/p3-lb-17.webp'
        }
      ],
      sg3k: [
        {
          mechanic: 'Kefka Dashes',
          description:
            'Watch Kefka dashes\nREMEMBER start + CW or CCW rotation for Limit Cut',
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
    phaseName: 'Earthquake: Conga',
    tag: 'p3',
    mechs: [
      {
        mechanic: 'Re-split',
        description:
          'G1 Supports + Melee -> Chaos\nG2 Supports + Ranged -> Exdeath\nExdeath Thunder III tankbuster',
        imageUrl: './umad/p3-lb-21.webp'
      },
      {
        mechanic: 'Conga + Debuffs',
        description:
          'Stack bosses mid, then conga; HP set to 1\nAll: Primordial Crust (cleanse by dying -> survive at 1 hp)\n1 DPS + 1 Healer: Accretion (cleanse by full heal)\nRaidwide + 4s Earth vuln each time an Earth debuff expires\n3x First / 3x Second / 2x Third in Line',
        imageUrl: './umad/p3-lb-24.webp'
      },
      {
        mechanic: 'Order Setup',
        description:
          'Healers top everyone up; single-target the First-in-line Accretion, then the other\nDPS = 1st tether CW from Kefka, Supports = 2nd, Accretion = 3rd',
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
        description:
          'Kefka = Relative North\nLeft side unsafe (facing boss) = Party Stack\nRight side unsafe = Role Spread',
        imageUrl: './umad/p3-lb-26.webp'
      },
      {
        mechanic: 'Laser Tethers',
        description:
          '4 tether sets, each player soaks 3 lasers\nDPS = 1st tether CW from Kefka, Supports = 2nd, Accretion = 3rd\nPoint every laser clockwise\nNeed to get hit 3 times to cleanse',
        imageUrl: './umad/p3-lb-30.webp'
      },
      {
        mechanic: 'Tethers',
        description:
          '<b>Tether CW Order = #1 DPS, #2 Supports, #3 Accretion</b>\n<b>Set 1 (1 Laser, 1 hit)</b>: I DPS\n<b>Set 2 (2 Lasers, 1 hit)</b>: I DPS + I Support\nExdeath Tankbuster\nChaos Edict + Kefka Hand\n<b>Set 3 (3 Lasers, 3 hits)</b>\nSet 3 1st hit: I DPS, I Support, I Accretion\nSet 3 2nd hit: II DPS take 1st tether\nSet 3 3rd hit: II Support take 2nd tether\nChaos Edict + Kefka Hand + Exdeath Tankbuster\n<b>Set 4 (3 tethers, 3 hits)</b>\nSet 4 1st hit: II DPS, II Support, II Accretion\nSet 4 2nd hit: III DPS take 1st tether\nSet 4 3rd hit: III Support take 2nd tether',
        imageUrl: './umad/p3-lb-36.webp'
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
        imageUrl: './umad/p3-lb-54.webp'
      },
      {
        mechanic: 'Towers + Enrage',
        description:
          'Stacked role returns mid after the 2nd puddle bait; other role takes the Rel E/W tower (G1 West, G2 East)\nSwap: opposite role gets the stack, take towers again\nBlizzard III = keep moving\nKill both bosses before enrage',
        imageUrl: './umad/p3-lb-56.webp'
      }
    ]
  }
];

const allP4: PhaseStrats[] = [
  {
    phaseName: 'Kefka Says',
    tag: 'p4',
    description: 'Under construction - phases will be added as teams discover and refine them.'
  }
];

const allP5: PhaseStrats[] = [
  {
    phaseName: '???',
    tag: 'p5',
    description: 'Under construction - phases will be added as teams discover and refine them.'
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
      'https://docs.google.com/presentation/d/1HfyKo8SZB3ToEVDEPWn3kl64HBqzs8JojdDsNnGeXoM/edit'
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
    kefkabin: { label: 'Kefkabin', defaults: { arrows: 'freaky', forsaken: 'kr', bowels: 'sg3k' } }
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
        },
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
        { value: 'lb', label: 'LB3 Cheese' },
      ]
    }
  ],
  tabTags: {
    'P1: Kefka': ['p1', 'arrows'],
    'P2: Forsaken Kefka': ['p2', 'forsaken'],
    'P3: Chaos and Exdeath': ['p3', 'bowels'],
    'P4: Kefka Says': ['p4'],
    'P5: ???': ['p5']
  },
  inProgressTabs: ['P4: Kefka Says', 'P5: ???'],
  useMainPageTabs: true,
  defaultStratName: 'kefkabin',
  timeline: [],
  posterEnabled: true,
  posterLayout: umadPosterLayout
};
