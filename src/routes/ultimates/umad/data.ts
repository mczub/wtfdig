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
    phaseName: 'Chaos and Exdeath',
    tag: 'p3',
    description: 'Under construction - phases will be added as teams discover and refine them.'
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
    'P2 Trines': 'https://raidplan.io/plan/apkh6ytq72w8pt3v'
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
    kefkabin: { label: 'Kefkabin', defaults: { arrows: 'mgr', forsaken: 'kr' } }
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
    }
  ],
  tabTags: {
    'P1: Kefka': ['p1', 'arrows'],
    'P2: Forsaken Kefka': ['p2', 'forsaken'],
    'P3: Chaos and Exdeath': ['p3'],
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
