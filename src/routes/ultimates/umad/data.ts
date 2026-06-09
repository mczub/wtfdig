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
        description: 'G1 Supports + Melee -> Chaos (A)\nG2 Supports + Ranged -> Exdeath (B)'
      }
    ]
  },
  {
    phaseName: 'Bowels of Agony',
    tag: 'bowels',
    mechs: {
      tb: [
        {
          mechanic: 'Debuffs',
          description:
            'Everyone: Headwind or Tailwind (knockback)\n1 Support + 1 DPS: Entropy (spread / fire)\n1 Support + 1 DPS: Dynamic Fluid (donut / water)\nOne element is Short (20s), the other Long (45s)'
        },
        {
          mechanic: 'Head / Tailwind',
          description:
            'Headwind = face AWAY from the source (butt on icon)\nTailwind = face TOWARD the source (head on icon)'
        },
        {
          mechanic: 'Crystals',
          description:
            '3 crystals on intercards: Wind opposite the empty spot, Fire/Water can swap\nWind = 2+ stack, Fire = donut + KB, Water = spread + KB\nMT: Chaos to wall between Wind and SHORT crystal\nOT: Exdeath to wall on the LONG crystal'
        },
        {
          mechanic: 'First Resolve (Short)',
          description:
            'No Fire/Water: stack at Wind crystal, Supports Left / DPS Right facing Chaos (1 closer to bait)\nShort Fire/Water: diagonal, max melee from Chaos\nLong Fire/Water: inside, next to the Short player\nShort explodes; Longs take the crystal AOE (Fire=donut, Water=spread) to get KB to mid, facing to resolve Head/Tailwind'
        },
        {
          mechanic: 'Short Explosion',
          description:
            'Short debuffs explode\nLong debuffs get hit by Short AOE + get knocked to mid\nLong debuffs also resolve Headwind/Tailwind from Short player\n'
        },
        {
          mechanic: 'Tankbuster + Reposition',
          description:
            'MT drag Chaos middle\nExdeath: Thunder III 2-hit tankbuster on closest\nOT drag Exdeath to wall between Wind and LONG crystal, face Chaos North'
        },
        {
          mechanic: 'Latitude / Longitude',
          description:
            'Chaos casts Implosion (2 hits)\nLatitude = sides first, then front/back\nLongitude = front/back first, then sides\nNo debuff: near Wind crystal. Debuff players: by the Long crystal'
        },
        {
          mechanic: 'Second Resolve (Long)',
          description:
            'Long explodes; Short ride the crystal AOE (Fire = donut, Water = spread) to mid\nShort resolve Head/Tailwind from Long player\nNo debuff stack the Wind crystal (Sup Left / DPS Right)'
        }
      ],
      sg3k: [
        {
          mechanic: 'Debuffs',
          description:
            'Everyone Head/Tailwind; 1 Sup + 1 DPS Entropy (fire/spread), 1 Sup + 1 DPS Dynamic Fluid (water/donut)\nIdentify Short (20s) vs Long (45s) element\nHeadwind = face AWAY, Tailwind = face TOWARD the source'
        },
        {
          mechanic: 'Boss Pulls',
          description:
            'Exdeath tank: pull AWAY from the Short crystal, hug the wall\nChaos tank: pull between the Wind and Short crystals, hook around the corner to the wall'
        },
        {
          mechanic: 'First Resolve (Short)',
          description:
            'Thunder III; Short element resolves\nElement Supports at the wall, element DPS near center beside their crystal (just outside the waymark)\nOther 2 element players stand beside the Short DPS and aim Head/Tailwind\nNon-element bait Wind on Chaos: Supports close (bait nearest), DPS farther out; ranged/G2 away from Chaos'
        },
        {
          mechanic: 'Short Crystal AOE',
          description:
            'Short stay put for the second hit (the crystal AOE)\nLong get knocked back: Fire = dead center, Water = inner ring on the floor\nWind baiters line up on the intercard waymark to the Wind crystal (Supports in, DPS a step out)'
        },
        {
          mechanic: 'Tankbuster + Implosion',
          description:
            'Exdeath Thunder III 2-hit on closest -> invuln, or Chaos tank eats hit 1 then swap\nChaos tank center, face between Wind and Long crystal\nChaos Implosion: Latitudinal = front/back safe first, Longitudinal = sides safe first\nDodge into the first AOE, on the side next to your crystal'
        },
        {
          mechanic: 'Second Resolve (Long)',
          description:
            'Dodge the 2nd cleave into your element spots (same prio)\nLong ride the crystal AOE to mid: Fire = dead center, Water = inner ring; resolve Head/Tailwind\nWind baiters return to the same side and bait again'
        }
      ]
    }
  },
  {
    phaseName: 'Superjump + Dashes',
    tag: 'bowels',
    mechs: {
      tb: [
        {
          mechanic: 'Superjump',
          description:
            'Drag Exdeath onto the Wind crystal\nChaos Superjumps the furthest player -> Ranged bait out, opposite the Wind crystal\nStack on Exdeath to avoid Chaos AOE'
        },
        {
          mechanic: 'Kefka Dashes',
          description:
            'Kefka dashes from a random cardinal/intercard, rotating CW or CCW\nREMEMBER the start point + rotation for Limit Cut'
        }
      ],
      sg3k: [
        {
          mechanic: 'Superjump',
          description:
            'Pull both bosses off the Wind crystal toward the wall\nPhys range stand at the wall behind the Wind crystal to bait Chaos Superjump (Umbra Smash), rejoin once he turns to cast'
        },
        {
          mechanic: 'Kefka Dashes',
          description:
            'Kefka divebombs across the arena, rotating CW or CCW\nREMEMBER his FIRST end spot + rotation (for Limit Cut)'
        }
      ]
    }
  },
  {
    phaseName: 'Vacuum Wave',
    tag: 'bowels',
    mechs: {
      tb: [
        {
          mechanic: 'Knockback Pairs',
          description:
            'Exdeath Vacuum Wave knocks everyone back\nSupports Left, DPS Right; G1 Left, G2 Right -> 4 pairs\nHead/Tailwind: face toward/away Exdeath\nFire/Water: use knockback immunity\nLand on your Wind stack spot; Ranged stay off the crystal (Red ring = max melee)'
        }
      ],
      sg3k: [
        {
          mechanic: 'Static Wind Baits',
          description:
            'Exdeath Vacuum Wave knocks everyone back; resolve Head/Tailwind\nDo NOT use knockback immunity (gapclose back if needed)\nAfter the KB, bait Wind in static spots around Chaos: Supports Left / DPS Right (facing wall), 4 Melees closest on Chaos hitbox, LP1 on the wall\nRanged a few steps out, do not greed if Chaos is off-center'
        }
      ]
    }
  },
  {
    phaseName: 'Limit Cut',
    tag: 'bowels',
    mechs: {
      tb: [
        {
          mechanic: 'Numbers',
          description:
            'Relative North = opposite Kefka’s FIRST dash\nStand on the inter-inter-cardinals in number order from new North, rotating OPPOSITE Kefka’s dash direction\nLine up with waymark\nExdeath Thunder III proximity TB after'
        }
      ],
      sg3k: [
        {
          mechanic: 'Numbers',
          description:
            'Relative North = Kefka’s first dash end spot\nLC numbers fill from Rel N, rotating OPPOSITE Kefka’s dash direction\nGo to the wall, line up between the cardinal/intercard marks (between markers = safe, spots are small)\nExdeath Thunder III tankbuster after (invuln/swap)'
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
          'G1 Supports + Melee -> Chaos\nG2 Supports + Ranged -> Exdeath\nAnother Exdeath Thunder III tankbuster'
      },
      {
        mechanic: 'Conga + Debuffs',
        description:
          'Stack bosses mid, then conga; HP set to 1\nAll: Primordial Crust (cleanse by dying -> survive at 1 hp)\n2 players: Accretion (cleanse by full heal)\nEarth Crystal: raidwide + 4s Earth vuln each time an Earth debuff expires\n3x First / 3x Second / 2x Third in Line'
      },
      {
        mechanic: 'Order Setup',
        description:
          'Healers top everyone up; single-target the First-in-line Accretion, then the other once its vuln drops\nFirst in Line step forward, Third step back\nRemember Left to Right order of your debuff'
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
          'Kefka raises hand: 3 AOEs on that half, then a center slam\nLeft side unsafe = Party Stack\nRight side unsafe = Role Spread'
      },
      {
        mechanic: 'Laser Tethers',
        description:
          '4 tether sets, everyone needs to soak 3\nLeftmost = 1st tower CW from Kefka, Middle = 2nd CW, Rightmost = 3rd CW\nPoint every laser clockwise'
      },
      {
        mechanic: 'Tethers',
        description:
          '<b>Set 1 (1 Laser, 1 hit)</b>: I #1\n<b>Set 2 (2 Lasers, 1 hit)</b>: I #1 + I #2\nExdeath Tankbuster\nChaos Edict + Kefka Hand\n<b>Set 3 (3 Lasers, 3 hits)</b>\nSet 3 1st hit: I #1, I #2, I #3\nSet 3 2nd hit: II #1 take 1st tether\nSet 3 3rd hit: II #2 take 2nd tether\nChaos Edict + Kefka Hand + Exdeath Tankbuster\n<b>Set 4 (3 tethers, 3 hits)</b>\nSet 4 1st hit: II #1, II #2, II #3\nSet 4 2nd hit: III #1 take 1st tether\nSet 4 3rd hit: III #2 take 2nd tether'
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
          'Party stack mid (Kefka = Relative North)\nBlizzard AOEs under everyone -> move to intercards in partners\nSupports Rel N, DPS Rel S; G1 Rel W/Left, G2 Rel E/Right\n1 Support or 1 DPS gets a stack marker'
      },
      {
        mechanic: 'Towers + Enrage',
        description:
          'Stacked role returns mid after the 2nd puddle bait; other role takes the Rel E/W tower (G1 West, G2 East)\nSwap: opposite role gets the stack, take towers again\nBlizzard III = keep moving\nKill both bosses before enrage'
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
    kefkabin: { label: 'Kefkabin', defaults: { arrows: 'mgr', forsaken: 'kr', bowels: 'fae' } }
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
      defaultValue: 'tb',
      phaseTag: 'bowels',
      options: [
        {
          value: 'sg3k',
          label: 'SG3K',
          url: {
            name: 'SG3K Bowels/LC by S’vetha Mako',
            url: 'https://raidplan.io/plan/9assfrb4fcvwat9e'
          }
        },
        { value: 'fae', label: 'Fae Slides' },
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
  inProgressTabs: ['P3: Chaos and Exdeath', 'P4: Kefka Says', 'P5: ???'],
  useMainPageTabs: true,
  defaultStratName: 'kefkabin',
  timeline: [],
  posterEnabled: true,
  posterLayout: umadPosterLayout
};
