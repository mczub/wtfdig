import type { FightConfig, PhaseStrats, Strat } from '$lib/types';
import { getCircleMaskUrl, getMultiCircleMaskUrl } from '$lib/utils';
import { uwuPosterLayout } from './posterData';

const p1: PhaseStrats[] = [
  {
    phaseName: 'Start',
    tag: 'p1',
    mechs: [
      {
        mechanic: 'Pull',
        action: 'MT pulls Garuda Center facing North\nParty South, OT + Healers East',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Pull Garuda Center, face boss North',
            imageUrl: './uwu/p1-garuda-0.webp',
            mask: getCircleMaskUrl(50, 42.8, 7)
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Stand East with Healers\nPosition to intercept line AOE',
            imageUrl: './uwu/p1-garuda-0.webp',
            mask: getCircleMaskUrl(66.8, 49.6, 7)
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Stand East behind OT',
            imageUrl: './uwu/p1-garuda-0.webp',
            mask: getCircleMaskUrl(74.2, 49.9, 7)
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Stand East behind OT',
            imageUrl: './uwu/p1-garuda-0.webp',
            mask: getCircleMaskUrl(74.2, 49.9, 7)
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stand South behind Garuda',
            imageUrl: './uwu/p1-garuda-0.webp',
            mask: getCircleMaskUrl(50, 60.6, 8.8)
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stand South behind Garuda',
            imageUrl: './uwu/p1-garuda-0.webp',
            mask: getCircleMaskUrl(50, 60.6, 8.8)
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Stand South behind Garuda',
            imageUrl: './uwu/p1-garuda-0.webp',
            mask: getCircleMaskUrl(50, 60.6, 8.8)
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Stand South behind Garuda',
            imageUrl: './uwu/p1-garuda-0.webp',
            mask: getCircleMaskUrl(50, 60.6, 8.8)
          }
        ]
      },
      {
        mechanic: 'Slipstream',
        description: 'Frontal cone on MT',
        action: 'MT sidesteps',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Sidestep the frontal cone during cast',
            imageUrl: './uwu/p1-garuda-1.webp',
            mask: getCircleMaskUrl(42, 49.9, 7)
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Stay East',
            imageUrl: './uwu/p1-garuda-1.webp',
            mask: getCircleMaskUrl(70.7, 49.9, 8.7)
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Stay East',
            imageUrl: './uwu/p1-garuda-1.webp',
            mask: getCircleMaskUrl(70.7, 49.9, 8.7)
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Stay East',
            imageUrl: './uwu/p1-garuda-1.webp',
            mask: getCircleMaskUrl(70.7, 49.9, 8.7)
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stay South behind Garuda',
            imageUrl: './uwu/p1-garuda-1.webp',
            mask: getCircleMaskUrl(50, 60.6, 8.8)
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stay South behind Garuda',
            imageUrl: './uwu/p1-garuda-1.webp',
            mask: getCircleMaskUrl(50, 60.6, 8.8)
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Stay South behind Garuda',
            imageUrl: './uwu/p1-garuda-1.webp',
            mask: getCircleMaskUrl(50, 60.6, 8.8)
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Stay South behind Garuda',
            imageUrl: './uwu/p1-garuda-1.webp',
            mask: getCircleMaskUrl(50, 60.6, 8.8)
          }
        ]
      },
      {
        mechanic: 'Mistral Song',
        description:
          'Line AOE on a healer, need tank to intercept\nCyclone drops under the player hit',
        action: 'OT intercepts, then everyone moves to D',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Hold Garuda, then move her to D',
            imageUrl: './uwu/p1-garuda-2.webp',
            mask: getCircleMaskUrl(34.1, 49.3, 7)
          },
          {
            role: 'Tank',
            party: 2,
            description:
              'Stand between Garuda and the marked healer\nMit Mistral Song, move out of Cyclone to D',
            imageUrl: './uwu/p1-garuda-2.webp',
            mask: getCircleMaskUrl(65.1, 49.6, 7)
          },
          {
            role: 'Healer',
            party: 1,
            description: 'If marked, stay behind OT\nMove to D after Cyclone',
            imageUrl: './uwu/p1-garuda-2.webp',
            mask: getCircleMaskUrl(74.2, 49.9, 7)
          },
          {
            role: 'Healer',
            party: 2,
            description: 'If marked, stay behind OT\nMove to D after Cyclone',
            imageUrl: './uwu/p1-garuda-2.webp',
            mask: getCircleMaskUrl(74.2, 49.9, 7)
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Move to D after Cyclone drops',
            imageUrl: './uwu/p1-garuda-2.webp',
            mask: getCircleMaskUrl(50, 60.6, 8.8)
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Move to D after Cyclone drops',
            imageUrl: './uwu/p1-garuda-2.webp',
            mask: getCircleMaskUrl(50, 60.6, 8.8)
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Move to D after Cyclone drops',
            imageUrl: './uwu/p1-garuda-2.webp',
            mask: getCircleMaskUrl(50, 60.6, 8.8)
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Move to D after Cyclone drops',
            imageUrl: './uwu/p1-garuda-2.webp',
            mask: getCircleMaskUrl(50, 60.6, 8.8)
          }
        ]
      }
    ]
  },
  {
    phaseName: 'Plumes',
    tag: 'p1',
    mechs: [
      {
        mechanic: 'Spawn',
        description:
          'Satin Plumes tether random DPS\nSpiny Plume tethers to the first player to get enmity',
        action: 'OT hits Spiny Plume first\nHold AOEs until OT has the tether',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Tank Garuda next to D',
            imageUrl: './uwu/p1-garuda-4.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Hit Spiny Plume first, Reprisal or Provoke also work\nTake it West of D',
            imageUrl: './uwu/p1-garuda-4.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: "Stay near D\nDon't hit Spiny Plume before OT",
            imageUrl: './uwu/p1-garuda-4.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: "Stay near D\nDon't hit Spiny Plume before OT",
            imageUrl: './uwu/p1-garuda-4.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: "Bring Satin Plume tether to D\nDon't hit Spiny Plume before OT",
            imageUrl: './uwu/p1-garuda-4.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: "Bring Satin Plume tether to D\nDon't hit Spiny Plume before OT",
            imageUrl: './uwu/p1-garuda-4.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: "Bring Satin Plume tether to D\nDon't hit Spiny Plume before OT",
            imageUrl: './uwu/p1-garuda-4.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: "Bring Satin Plume tether to D\nDon't hit Spiny Plume before OT",
            imageUrl: './uwu/p1-garuda-4.webp'
          }
        ]
      },
      {
        mechanic: 'AOE Down',
        description: 'Spiny Plume attacks give Thermal Low',
        action: 'AOE Plumes at D\nOT takes 2 hits for 2 Thermal Low stacks',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Hold Garuda at D, AOE Plumes',
            imageUrl: './uwu/p1-garuda-5.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Take 2 Spiny Plume Cyclones (2 Thermal Low stacks)',
            imageUrl: './uwu/p1-garuda-5.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Heal OT through Cyclones',
            imageUrl: './uwu/p1-garuda-5.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Heal OT through Cyclones',
            imageUrl: './uwu/p1-garuda-5.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: "AOE Plumes at D\nDon't kill Spiny Plume before OT has 2 stacks",
            imageUrl: './uwu/p1-garuda-5.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: "AOE Plumes at D\nDon't kill Spiny Plume before OT has 2 stacks",
            imageUrl: './uwu/p1-garuda-5.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: "AOE Plumes at D\nDon't kill Spiny Plume before OT has 2 stacks",
            imageUrl: './uwu/p1-garuda-5.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: "AOE Plumes at D\nDon't kill Spiny Plume before OT has 2 stacks",
            imageUrl: './uwu/p1-garuda-5.webp'
          }
        ]
      },
      {
        mechanic: 'Slipstream + Downburst',
        description: 'Frontal cone, then cleaving physical TB',
        action: 'MT sidesteps Slipstream, then takes Downburst alone',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Sidestep Slipstream\nTake Downburst alone with mits',
            imageUrl: './uwu/p1-garuda-7.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Stay away from MT for Downburst',
            imageUrl: './uwu/p1-garuda-7.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Stay away from MT for Downburst',
            imageUrl: './uwu/p1-garuda-7.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Stay away from MT for Downburst',
            imageUrl: './uwu/p1-garuda-7.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stay away from MT for Downburst',
            imageUrl: './uwu/p1-garuda-7.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stay away from MT for Downburst',
            imageUrl: './uwu/p1-garuda-7.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Stay away from MT for Downburst',
            imageUrl: './uwu/p1-garuda-7.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Stay away from MT for Downburst',
            imageUrl: './uwu/p1-garuda-7.webp'
          }
        ]
      },
      {
        mechanic: 'Feather Rain',
        description: 'Puddles under every player',
        action: 'Move back to Center as a group',
        imageUrl: './uwu/p1-garuda-8.webp'
      }
    ]
  },
  {
    phaseName: 'Thermal Low',
    tag: 'p1',
    mechs: [
      {
        mechanic: 'Gigastorm',
        description:
          'Spiny Plume leaves ground AOE then bubble on death\nBubble reduces wind damage\nThermal Low players in bubble cleanse + deal raidwide per stack',
        action: 'Everyone except OT in bubble for Mistral Shriek',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Dodge AOE, then stand in bubble for Mistral Shriek',
            imageUrl: './uwu/p1-garuda-9.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Dodge AOE, then stay out of the bubble for Mistral Shriek',
            imageUrl: './uwu/p1-garuda-9.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description:
              'Dodge AOE, then stand in bubble for Mistral Shriek\nHeal extra if the bubble is late',
            imageUrl: './uwu/p1-garuda-9.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description:
              'Dodge AOE, then stand in bubble for Mistral Shriek\nHeal extra if the bubble is late',
            imageUrl: './uwu/p1-garuda-9.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Dodge AOE, then stand in bubble for Mistral Shriek',
            imageUrl: './uwu/p1-garuda-9.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Dodge AOE, then stand in bubble for Mistral Shriek',
            imageUrl: './uwu/p1-garuda-9.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Dodge AOE, then stand in bubble for Mistral Shriek',
            imageUrl: './uwu/p1-garuda-9.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Dodge AOE, then stand in bubble for Mistral Shriek',
            imageUrl: './uwu/p1-garuda-9.webp'
          }
        ]
      },
      {
        mechanic: '1st Cleanse',
        description: 'Each 2-stack cleanse gives Garuda a stack of Aetherically Charged',
        action: 'OT cleanses 2 stacks once the party is topped',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Stay in bubble',
            imageUrl: './uwu/p1-garuda-11.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Step into bubble to cleanse 2 stacks\nWait for party to be topped',
            imageUrl: './uwu/p1-garuda-11.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Top the party before OT cleanses',
            imageUrl: './uwu/p1-garuda-11.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Top the party before OT cleanses',
            imageUrl: './uwu/p1-garuda-11.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stay in bubble',
            imageUrl: './uwu/p1-garuda-11.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stay in bubble',
            imageUrl: './uwu/p1-garuda-11.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Stay in bubble',
            imageUrl: './uwu/p1-garuda-11.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Stay in bubble',
            imageUrl: './uwu/p1-garuda-11.webp'
          }
        ]
      },
      {
        mechanic: 'Friction 1 + 2',
        description:
          'Splash AOE on a random player\nGives Thermal Low to everyone hit outside the bubble',
        action: 'OT + Melees out for Friction 1\nEveryone out for Friction 2',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Stay in bubble for Friction 1\nStep out for Friction 2 to get 1 stack',
            imageUrl: './uwu/p1-garuda-12.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Step out for both Frictions to get 2 stacks',
            imageUrl: './uwu/p1-garuda-12.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Stay in bubble for Friction 1\nStep out for Friction 2 to get 1 stack',
            imageUrl: './uwu/p1-garuda-12.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Stay in bubble for Friction 1\nStep out for Friction 2 to get 1 stack',
            imageUrl: './uwu/p1-garuda-12.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Step out for both Frictions to get 2 stacks',
            imageUrl: './uwu/p1-garuda-12.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Step out for both Frictions to get 2 stacks',
            imageUrl: './uwu/p1-garuda-12.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Stay in bubble for Friction 1\nStep out for Friction 2 to get 1 stack',
            imageUrl: './uwu/p1-garuda-12.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Stay in bubble for Friction 1\nStep out for Friction 2 to get 1 stack',
            imageUrl: './uwu/p1-garuda-12.webp'
          }
        ]
      },
      {
        mechanic: '2nd + 3rd Cleanse',
        action: 'Melees cleanse 2 stacks one at a time\nWait for heals between cleanses',
        notes: 'Discuss melee cleanse order beforehand',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Keep 1 stack',
            imageUrl: './uwu/p1-garuda-16.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Keep 2 stacks for Mesohigh',
            imageUrl: './uwu/p1-garuda-16.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Keep 1 stack\nTop the party before each cleanse',
            imageUrl: './uwu/p1-garuda-16.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Keep 1 stack\nTop the party before each cleanse',
            imageUrl: './uwu/p1-garuda-16.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Cleanse 2 stacks\nDiscuss cleanse order beforehand',
            imageUrl: './uwu/p1-garuda-16.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Cleanse 2 stacks\nDiscuss cleanse order beforehand',
            imageUrl: './uwu/p1-garuda-16.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Keep 1 stack for Mesohigh',
            imageUrl: './uwu/p1-garuda-16.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Keep 1 stack for tether in Ultima',
            imageUrl: './uwu/p1-garuda-16.webp'
          }
        ]
      },
      {
        mechanic: 'Aerial Blast',
        description: 'Feather Rain, then heavy raidwide',
        action: 'Stack Mid for heals',
        imageUrl: './uwu/p1-garuda-19.webp'
      }
    ]
  },
  {
    phaseName: 'Sisters',
    tag: 'p1',
    mechs: [
      {
        mechanic: 'Spawn',
        description: 'Sisters spawn on 2 of the 4 cardinals',
        imageUrl: './uwu/p1-garuda-22.webp'
      },
      {
        mechanic: 'Eye of the Storm + Mistral Song',
        description: 'Each Sister casts Mistral Song line AOE targeting one non-tank',
        action: 'Tanks take a Sister each\nParty stacks SE',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Go to 1st Sister CW from North\nMit Mistral Song',
            imageUrl: './uwu/p1-garuda-23.webp',
            mask: getCircleMaskUrl(49.5, 78.9, 7)
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Go to 1st Sister CCW from North\nMit Mistral Song',
            imageUrl: './uwu/p1-garuda-23.webp',
            mask: getCircleMaskUrl(19.9, 50.3, 7)
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Stack SE',
            imageUrl: './uwu/p1-garuda-23.webp',
            mask: getCircleMaskUrl(71, 71.3, 7)
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Stack SE',
            imageUrl: './uwu/p1-garuda-23.webp',
            mask: getCircleMaskUrl(71, 71.3, 7)
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stack SE',
            imageUrl: './uwu/p1-garuda-23.webp',
            mask: getCircleMaskUrl(71, 71.3, 7)
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stack SE',
            imageUrl: './uwu/p1-garuda-23.webp',
            mask: getCircleMaskUrl(71, 71.3, 7)
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Stack SE',
            imageUrl: './uwu/p1-garuda-23.webp',
            mask: getCircleMaskUrl(71, 71.3, 7)
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Stack SE',
            imageUrl: './uwu/p1-garuda-23.webp',
            mask: getCircleMaskUrl(71, 71.3, 7)
          }
        ]
      },
      {
        mechanic: 'Cyclones + Feather Rain',
        description: 'Cyclones spawn where tanks were hit',
        action: 'Melees bait Feather Rain on cardinals',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Move back in, away from your Cyclone',
            imageUrl: './uwu/p1-garuda-25.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Move back in, away from your Cyclone',
            imageUrl: './uwu/p1-garuda-25.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Stay stacked SE, then dodge Feather Rain',
            imageUrl: './uwu/p1-garuda-25.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Stay stacked SE, then dodge Feather Rain',
            imageUrl: './uwu/p1-garuda-25.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Move back in on a cardinal to bait Feather Rain',
            imageUrl: './uwu/p1-garuda-25.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Move back in on a cardinal to bait Feather Rain',
            imageUrl: './uwu/p1-garuda-25.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Stay stacked SE, then dodge Feather Rain',
            imageUrl: './uwu/p1-garuda-25.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Stay stacked SE, then dodge Feather Rain',
            imageUrl: './uwu/p1-garuda-25.webp'
          }
        ]
      },
      {
        mechanic: 'Plumes',
        description: '4 Satin Plumes spawn',
        action: 'MT pulls Garuda Center facing North\nAOE Plumes at Center behind Garuda',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Pull Garuda Center, face boss North',
            imageUrl: './uwu/p1-garuda-27.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'AOE Plumes\nGet ready to take the D tether',
            imageUrl: './uwu/p1-garuda-27.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Stay behind Garuda',
            imageUrl: './uwu/p1-garuda-27.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Stay behind Garuda',
            imageUrl: './uwu/p1-garuda-27.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'AOE Plumes behind Garuda',
            imageUrl: './uwu/p1-garuda-27.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'AOE Plumes behind Garuda',
            imageUrl: './uwu/p1-garuda-27.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'AOE Plumes\nGet ready to take the B tether',
            imageUrl: './uwu/p1-garuda-27.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'AOE Plumes behind Garuda',
            imageUrl: './uwu/p1-garuda-27.webp'
          }
        ]
      },
      {
        mechanic: 'Mesohigh',
        description:
          'Sisters tether random players from East + West\nTaking a tether cleanses Thermal Low, 4th charge awakens Garuda\nAwoken Downburst has no cast',
        action: 'OT takes D tether, Caster takes B tether',
        notes: 'Make sure not to kill Garuda before tethers go off',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Take Downburst TB alone\n2+ mits + shields',
            imageUrl: './uwu/p1-garuda-28.webp',
            mask: getCircleMaskUrl(49.5, 41.4, 7)
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Grab tether, take Mesohigh at D',
            imageUrl: './uwu/p1-garuda-28.webp',
            mask: getCircleMaskUrl(34.9, 49.1, 7)
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Shield + heal MT for Downburst',
            imageUrl: './uwu/p1-garuda-28.webp',
            mask: getCircleMaskUrl(50.2, 56.7, 10.1)
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Shield + heal MT for Downburst',
            imageUrl: './uwu/p1-garuda-28.webp',
            mask: getCircleMaskUrl(50.2, 56.7, 10.1)
          },
          {
            role: 'Melee',
            party: 1,
            description: 'AOE Plumes behind Garuda',
            imageUrl: './uwu/p1-garuda-28.webp',
            mask: getCircleMaskUrl(50.2, 56.7, 10.1)
          },
          {
            role: 'Melee',
            party: 2,
            description: 'AOE Plumes behind Garuda',
            imageUrl: './uwu/p1-garuda-28.webp',
            mask: getCircleMaskUrl(50.2, 56.7, 10.1)
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Grab tether, take Mesohigh at B',
            imageUrl: './uwu/p1-garuda-28.webp',
            mask: getCircleMaskUrl(64.7, 49.5, 7)
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'AOE Plumes behind Garuda\nKeep your Thermal Low stack',
            imageUrl: './uwu/p1-garuda-28.webp',
            mask: getCircleMaskUrl(50.2, 56.7, 10.1)
          }
        ]
      }
    ]
  },
  {
    phaseName: 'Awoken',
    tag: 'p1',
    description: 'Boss is usually dead before this on a clean pull',
    mechs: [
      {
        mechanic: 'Feather Rain + Slipstream',
        action: 'Dodge puddles while MT pulls North',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Pull Garuda North\nSidestep Slipstream',
            imageUrl: './uwu/p1-garuda-31.webp',
            mask: getCircleMaskUrl(50, 14.2, 7)
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Dodge puddles, stay behind Garuda',
            imageUrl: './uwu/p1-garuda-31.webp',
            mask: getCircleMaskUrl(50.4, 30.9, 13.8)
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Dodge puddles, stay behind Garuda',
            imageUrl: './uwu/p1-garuda-31.webp',
            mask: getCircleMaskUrl(50.4, 30.9, 13.8)
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Dodge puddles, stay behind Garuda',
            imageUrl: './uwu/p1-garuda-31.webp',
            mask: getCircleMaskUrl(50.4, 30.9, 13.8)
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Dodge puddles, stay behind Garuda',
            imageUrl: './uwu/p1-garuda-31.webp',
            mask: getCircleMaskUrl(50.4, 30.9, 13.8)
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Dodge puddles, stay behind Garuda',
            imageUrl: './uwu/p1-garuda-31.webp',
            mask: getCircleMaskUrl(50.4, 30.9, 13.8)
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Dodge puddles, stay behind Garuda',
            imageUrl: './uwu/p1-garuda-31.webp',
            mask: getCircleMaskUrl(50.4, 30.9, 13.8)
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Dodge puddles, stay behind Garuda',
            imageUrl: './uwu/p1-garuda-31.webp',
            mask: getCircleMaskUrl(50.4, 30.9, 13.8)
          }
        ]
      },
      {
        mechanic: 'Wicked Wheel + Tornado',
        description: 'Lethal melee-range AOE, then instant Wicked Tornado donut',
        action: 'Out for Wicked Wheel, then immediately in',
        imageUrl: './uwu/p1-garuda-33.webp'
      },
      {
        mechanic: 'Puddle',
        description:
          'Killing Garuda while Awoken leaves a Beyond Limits puddle\nMT, Healers, Phys Ranged should have 1 Thermal Low left',
        action: 'Healer grabs the puddle\nStack Mid for Ifrit',
        notes: 'Standard NA Beyond Limits order: Healer (Garuda) > Caster (Ifrit) > Melee (Titan)',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Stack Mid for Ifrit',
            imageUrl: './uwu/p1-garuda-37.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Stack Mid for Ifrit',
            imageUrl: './uwu/p1-garuda-37.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'One healer grabs the puddle\nStack Mid for Ifrit',
            imageUrl: './uwu/p1-garuda-37.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'One healer grabs the puddle\nStack Mid for Ifrit',
            imageUrl: './uwu/p1-garuda-37.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stack Mid for Ifrit',
            imageUrl: './uwu/p1-garuda-37.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stack Mid for Ifrit',
            imageUrl: './uwu/p1-garuda-37.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Stack Mid for Ifrit',
            imageUrl: './uwu/p1-garuda-37.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Stack Mid for Ifrit',
            imageUrl: './uwu/p1-garuda-37.webp'
          }
        ]
      }
    ]
  }
];

const p2: PhaseStrats[] = [
  {
    phaseName: 'Start',
    tag: 'p2',
    mechs: [
      {
        mechanic: 'Spawn',
        description: 'Ifrit spawns on a cardinal and dashes',
        action: 'Safe spot is to his Left or Right',
        imageUrl: './uwu/p2-ifrit-1.webp'
      },
      {
        mechanic: 'Hellfire + Vulcan Burst',
        description: 'Raidwide + KB',
        action: 'Keep Ifrit Center facing South\nShield the party to avoid the KB',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Hold Ifrit Center, face him South',
            imageUrl: './uwu/p2-ifrit-3.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Stack North behind Ifrit',
            imageUrl: './uwu/p2-ifrit-3.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'AOE shield + heal CD for Vulcan Burst\nStack North behind Ifrit',
            imageUrl: './uwu/p2-ifrit-3.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'AOE shield + heal CD for Vulcan Burst\nStack North behind Ifrit',
            imageUrl: './uwu/p2-ifrit-3.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stack North behind Ifrit',
            imageUrl: './uwu/p2-ifrit-3.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stack North behind Ifrit',
            imageUrl: './uwu/p2-ifrit-3.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Stack North behind Ifrit',
            imageUrl: './uwu/p2-ifrit-3.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Stack North behind Ifrit',
            imageUrl: './uwu/p2-ifrit-3.webp'
          }
        ]
      },
      {
        mechanic: 'Tankbuster',
        description: 'Triple TB',
        action: 'Invuln or tank swap',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Invuln, or mit 1st hit + invuln (GNB/WAR)\nOr tank swap',
            imageUrl: './uwu/p2-ifrit-4.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Provoke if swapping',
            imageUrl: './uwu/p2-ifrit-4.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Heal MT through 3 hits',
            imageUrl: './uwu/p2-ifrit-4.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Heal MT through 3 hits',
            imageUrl: './uwu/p2-ifrit-4.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stay behind Ifrit',
            imageUrl: './uwu/p2-ifrit-4.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stay behind Ifrit',
            imageUrl: './uwu/p2-ifrit-4.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Stay behind Ifrit',
            imageUrl: './uwu/p2-ifrit-4.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Stay behind Ifrit',
            imageUrl: './uwu/p2-ifrit-4.webp'
          }
        ]
      }
    ]
  },
  {
    phaseName: 'Nails',
    tag: 'p2',
    mechs: [
      {
        mechanic: 'Spawn',
        description: '2 close + 2 far nails\nAlways 2 on cardinals, 2 on intercards',
        imageUrl: './uwu/p2-ifrit-5.webp'
      },
      {
        mechanic: 'Positioning',
        description:
          '2 farthest players get 4 Eruptions\nRandom healer gets Infernal Howl (Searing Wind)\nOT gets tethered to a random DPS',
        action: 'Ranged bait Eruptions on far nails\nSearing Wind healer baits opposite MT',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Pull Ifrit between the 2 close nails',
            imageUrl: './uwu/p2-ifrit-6.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Stay close to your tethered DPS',
            imageUrl: './uwu/p2-ifrit-6.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'If Searing Wind, go opposite MT\nElse stay with party',
            imageUrl: './uwu/p2-ifrit-6.webp',
            mask: getCircleMaskUrl(46.1, 64.8, 7.8)
          },
          {
            role: 'Healer',
            party: 2,
            description: 'If Searing Wind, go opposite MT\nElse stay with party',
            imageUrl: './uwu/p2-ifrit-6.webp',
            mask: getCircleMaskUrl(46.1, 64.8, 7.8)
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stay on Ifrit',
            imageUrl: './uwu/p2-ifrit-6.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stay on Ifrit',
            imageUrl: './uwu/p2-ifrit-6.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Go out toward a far nail to bait 4 Eruptions',
            imageUrl: './uwu/p2-ifrit-6.webp',
            mask: getCircleMaskUrl(3.8, 59.9, 7)
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Go out toward a far nail to bait 4 Eruptions',
            imageUrl: './uwu/p2-ifrit-6.webp',
            mask: getCircleMaskUrl(78.2, 88.1, 7)
          }
        ]
      },
      {
        mechanic: 'Eruptions',
        description: 'Each nail needs 2+ Eruption hits',
        action: 'Last Eruption can overlap both nails',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Hold Ifrit between the close nails',
            imageUrl: './uwu/p2-ifrit-7.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Stay close to your tethered DPS',
            imageUrl: './uwu/p2-ifrit-7.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'If Searing Wind, stay away from party',
            imageUrl: './uwu/p2-ifrit-7.webp',
            mask: getCircleMaskUrl(30.2, 86.4, 7)
          },
          {
            role: 'Healer',
            party: 2,
            description: 'If Searing Wind, stay away from party',
            imageUrl: './uwu/p2-ifrit-7.webp',
            mask: getCircleMaskUrl(30.2, 86.4, 7)
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stay on Ifrit',
            imageUrl: './uwu/p2-ifrit-7.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stay on Ifrit',
            imageUrl: './uwu/p2-ifrit-7.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Drop 2+ Eruptions on each far nail',
            imageUrl: './uwu/p2-ifrit-7.webp',
            mask: getCircleMaskUrl(13.1, 35.8, 7)
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Drop 2+ Eruptions on each far nail',
            imageUrl: './uwu/p2-ifrit-7.webp',
            mask: getCircleMaskUrl(86, 60.8, 7)
          }
        ]
      },
      {
        mechanic: 'Kill Nails',
        description: 'Dash order is dependent on nail kill order',
        action:
          'Some DPS kill nails in order, rest stay on Ifrit\nIf not skipping consistently, make sure to kill in reverse Z order\nRelative SE > SW > NE > NW\nRemember the last nail killed',
        imageUrl: './uwu/p2-ifrit-9.webp'
      },
      {
        mechanic: 'Hellfire',
        description: 'Ifrit jumps away, raidwide',
        action: 'Stack Mid',
        imageUrl: './uwu/p2-ifrit-13.webp'
      }
    ]
  },
  {
    phaseName: 'Dashes',
    tag: 'p2',
    description: 'Boss is usually dead before Dashes go off on a clean pull',
    mechs: [
      {
        mechanic: 'Pull to Intercard',
        action:
          'Pull Ifrit to the intercard where the last nail died\nIf last nail was a cardinal, use 1st intercard CW',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Pull Ifrit to the intercard where the last nail died',
            imageUrl: './uwu/p2-ifrit-14.webp',
            mask: getCircleMaskUrl(75.9, 10.6, 7.7)
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Pull Ifrit to the intercard where the last nail died',
            imageUrl: './uwu/p2-ifrit-14.webp',
            mask: getCircleMaskUrl(75.9, 10.6, 7.7)
          },
          {
            role: 'Healer',
            party: 1,
            description: 'If Searing Wind, get ready to bait',
            imageUrl: './uwu/p2-ifrit-14.webp',
            mask: getCircleMaskUrl(54.2, 44.1, 7.4)
          },
          {
            role: 'Healer',
            party: 2,
            description: 'If Searing Wind, get ready to bait',
            imageUrl: './uwu/p2-ifrit-14.webp',
            mask: getCircleMaskUrl(54.2, 44.1, 7.4)
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Follow Ifrit to the intercard',
            imageUrl: './uwu/p2-ifrit-14.webp',
            mask: getCircleMaskUrl(75.9, 10.6, 7.7)
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Follow Ifrit to the intercard',
            imageUrl: './uwu/p2-ifrit-14.webp',
            mask: getCircleMaskUrl(75.9, 10.6, 7.7)
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Get ready to bait Eruptions',
            imageUrl: './uwu/p2-ifrit-14.webp',
            mask: getCircleMaskUrl(46.5, 53.5, 7.7)
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Get ready to bait Eruptions',
            imageUrl: './uwu/p2-ifrit-14.webp',
            mask: getCircleMaskUrl(46.5, 53.5, 7.7)
          }
        ]
      },
      {
        mechanic: 'Eruptions',
        action:
          'Searing Wind healer: intercard CCW of party\nEruption baiters: cardinal CW of party',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Hold Ifrit on the intercard',
            imageUrl: './uwu/p2-ifrit-15.webp',
            mask: getCircleMaskUrl(77.2, 10.6, 8.7)
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Hold Ifrit on the intercard',
            imageUrl: './uwu/p2-ifrit-15.webp',
            mask: getCircleMaskUrl(77.2, 10.6, 8.7)
          },
          {
            role: 'Healer',
            party: 1,
            description: 'If Searing Wind, go to intercard CCW of party\nElse stay with party',
            imageUrl: './uwu/p2-ifrit-15.webp',
            mask: getMultiCircleMaskUrl([22.7, 11.2, 7], [77.2, 10.6, 8.7])
          },
          {
            role: 'Healer',
            party: 2,
            description: 'If Searing Wind, go to intercard CCW of party\nElse stay with party',
            imageUrl: './uwu/p2-ifrit-15.webp',
            mask: getMultiCircleMaskUrl([22.7, 11.2, 7], [77.2, 10.6, 8.7])
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stay with party',
            imageUrl: './uwu/p2-ifrit-15.webp',
            mask: getCircleMaskUrl(77.2, 10.6, 8.7)
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stay with party',
            imageUrl: './uwu/p2-ifrit-15.webp',
            mask: getCircleMaskUrl(77.2, 10.6, 8.7)
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Bait Eruptions on cardinal CW of party, then move back',
            imageUrl: './uwu/p2-ifrit-15.webp',
            mask: getCircleMaskUrl(73.8, 88.5, 7.4)
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Bait Eruptions on cardinal CW of party, then move back',
            imageUrl: './uwu/p2-ifrit-15.webp',
            mask: getCircleMaskUrl(73.8, 88.5, 7.4)
          }
        ]
      },
      {
        mechanic: 'Dash + Flaming Crush',
        description:
          'Clones dash from cardinals\nFlaming Crush is a shared stack\n2nd healer gets Searing Wind',
        action: 'Stack for Flaming Crush',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Stack for Flaming Crush',
            imageUrl: './uwu/p2-ifrit-19.webp',
            mask: getCircleMaskUrl(77.5, 11.8, 9.7)
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Stack for Flaming Crush',
            imageUrl: './uwu/p2-ifrit-19.webp',
            mask: getCircleMaskUrl(77.5, 11.8, 9.7)
          },
          {
            role: 'Healer',
            party: 1,
            description: 'If 2nd Searing Wind, move away from party\nElse stack for Flaming Crush',
            imageUrl: './uwu/p2-ifrit-19.webp',
            mask: getMultiCircleMaskUrl([78.9, 45.6, 7], [76, 11.4, 9])
          },
          {
            role: 'Healer',
            party: 2,
            description: 'If 2nd Searing Wind, move away from party\nElse stack for Flaming Crush',
            imageUrl: './uwu/p2-ifrit-19.webp',
            mask: getMultiCircleMaskUrl([78.9, 45.6, 7], [76, 11.4, 9])
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stack for Flaming Crush',
            imageUrl: './uwu/p2-ifrit-19.webp',
            mask: getCircleMaskUrl(77.5, 11.8, 9.7)
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stack for Flaming Crush',
            imageUrl: './uwu/p2-ifrit-19.webp',
            mask: getCircleMaskUrl(77.5, 11.8, 9.7)
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Stack for Flaming Crush',
            imageUrl: './uwu/p2-ifrit-19.webp',
            mask: getCircleMaskUrl(77.5, 11.8, 9.7)
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Stack for Flaming Crush',
            imageUrl: './uwu/p2-ifrit-19.webp',
            mask: getCircleMaskUrl(77.5, 11.8, 9.7)
          }
        ]
      },
      {
        mechanic: 'Repositioning',
        description: 'Dashes can be skipped with enough DPS',
        action: 'Party goes to the slice where the last nail died',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Go to the slice where the last nail died',
            imageUrl: './uwu/p2-ifrit-20.webp',
            mask: getCircleMaskUrl(49.4, 4.8, 9)
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Go to the slice where the last nail died',
            imageUrl: './uwu/p2-ifrit-20.webp',
            mask: getCircleMaskUrl(49.4, 4.8, 9)
          },
          {
            role: 'Healer',
            party: 1,
            description:
              'If Searing Wind, mirror the party on the opposite side\nElse go with party',
            imageUrl: './uwu/p2-ifrit-20.webp',
            mask: getMultiCircleMaskUrl([49.4, 4.8, 9], [50.4, 96.4, 7])
          },
          {
            role: 'Healer',
            party: 2,
            description:
              'If Searing Wind, mirror the party on the opposite side\nElse go with party',
            imageUrl: './uwu/p2-ifrit-20.webp',
            mask: getMultiCircleMaskUrl([49.4, 4.8, 9], [50.4, 96.4, 7])
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Go to the slice where the last nail died',
            imageUrl: './uwu/p2-ifrit-20.webp',
            mask: getCircleMaskUrl(49.4, 4.8, 9)
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Go to the slice where the last nail died',
            imageUrl: './uwu/p2-ifrit-20.webp',
            mask: getCircleMaskUrl(49.4, 4.8, 9)
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Go to the slice where the last nail died',
            imageUrl: './uwu/p2-ifrit-20.webp',
            mask: getCircleMaskUrl(49.4, 4.8, 9)
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Go to the slice where the last nail died',
            imageUrl: './uwu/p2-ifrit-20.webp',
            mask: getCircleMaskUrl(49.4, 4.8, 9)
          }
        ]
      },
      {
        mechanic: 'Crimson Cyclone',
        description:
          'Clones dash in nail kill order, Awoken clone glows blue\n1st Awoken: Short + Fast\n2nd: Long + Fast\n3rd: Short + Slow\n4th: Long + Slow',
        action: 'Sprint and follow CCW behind the dashes',
        imageUrl: './uwu/p2-ifrit-21.webp'
      }
    ]
  },
  {
    phaseName: 'Enrage',
    tag: 'p2',
    mechs: [
      {
        mechanic: 'Ifrit Targetable',
        description: 'Final Searing Wind on the healer',
        action: 'Wait for Searing Wind before moving in',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Pull Ifrit to a wall, away from healer + party',
            imageUrl: './uwu/p2-ifrit-27.webp',
            mask: getCircleMaskUrl(28.9, 50.5, 7)
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Wait for Searing Wind before moving in',
            imageUrl: './uwu/p2-ifrit-27.webp',
            mask: getCircleMaskUrl(17.4, 49.7, 11.8)
          },
          {
            role: 'Healer',
            party: 1,
            description: 'If Searing Wind, stay away until it goes off',
            imageUrl: './uwu/p2-ifrit-27.webp',
            mask: getMultiCircleMaskUrl([6.2, 50.1, 7], [96.5, 51.5, 7])
          },
          {
            role: 'Healer',
            party: 2,
            description: 'If Searing Wind, stay away until it goes off',
            imageUrl: './uwu/p2-ifrit-27.webp',
            mask: getMultiCircleMaskUrl([6.2, 50.1, 7], [96.5, 51.5, 7])
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Wait for Searing Wind before moving in',
            imageUrl: './uwu/p2-ifrit-27.webp',
            mask: getCircleMaskUrl(17.4, 49.7, 11.8)
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Wait for Searing Wind before moving in',
            imageUrl: './uwu/p2-ifrit-27.webp',
            mask: getCircleMaskUrl(17.4, 49.7, 11.8)
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Wait for Searing Wind before moving in',
            imageUrl: './uwu/p2-ifrit-27.webp',
            mask: getCircleMaskUrl(5.8, 45.2, 7)
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Wait for Searing Wind before moving in',
            imageUrl: './uwu/p2-ifrit-27.webp',
            mask: getCircleMaskUrl(17.4, 49.7, 11.8)
          }
        ]
      },
      {
        mechanic: 'Tankbuster + Eruptions',
        description: 'Triple TB, then Eruptions on the 2 farthest players',
        action: 'Ranged bait Eruptions opposite the tank',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Face Ifrit into the wall\nInvuln or tank swap for triple TB',
            imageUrl: './uwu/p2-ifrit-28.webp',
            mask: getCircleMaskUrl(9.8, 25, 7)
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Provoke if swapping',
            imageUrl: './uwu/p2-ifrit-28.webp',
            mask: getCircleMaskUrl(22.7, 44.9, 7)
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Stay with party',
            imageUrl: './uwu/p2-ifrit-28.webp',
            mask: getCircleMaskUrl(15, 46.5, 7.7)
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Stay with party',
            imageUrl: './uwu/p2-ifrit-28.webp',
            mask: getCircleMaskUrl(15, 46.5, 7.7)
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stay with party',
            imageUrl: './uwu/p2-ifrit-28.webp',
            mask: getCircleMaskUrl(27.4, 43.8, 7)
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stay with party',
            imageUrl: './uwu/p2-ifrit-28.webp',
            mask: getCircleMaskUrl(15, 46.5, 7.7)
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Bait Eruptions opposite the tank',
            imageUrl: './uwu/p2-ifrit-28.webp',
            mask: getCircleMaskUrl(37.6, 71.8, 8.9)
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Bait Eruptions opposite the tank',
            imageUrl: './uwu/p2-ifrit-28.webp',
            mask: getCircleMaskUrl(37.6, 71.8, 8.9)
          }
        ]
      },
      {
        mechanic: 'Flaming Crush',
        description: 'Shared stack, then Ifrit casts enrage',
        action: 'Stack after Eruptions',
        imageUrl: './uwu/p2-ifrit-30.webp'
      },
      {
        mechanic: 'Puddle',
        description: 'Ifrit leaves a Beyond Limits puddle',
        action: 'Caster grabs the puddle\nStack on the edge for Titan',
        notes: 'Standard NA Beyond Limits order: Healer (Garuda) > Caster (Ifrit) > Melee (Titan)',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Stack on the edge for Titan',
            imageUrl: './uwu/p2-ifrit-31.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Stack on the edge for Titan',
            imageUrl: './uwu/p2-ifrit-31.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Stack on the edge for Titan',
            imageUrl: './uwu/p2-ifrit-31.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Stack on the edge for Titan',
            imageUrl: './uwu/p2-ifrit-31.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stack on the edge for Titan',
            imageUrl: './uwu/p2-ifrit-31.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stack on the edge for Titan',
            imageUrl: './uwu/p2-ifrit-31.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Grab the puddle\nStack on the edge for Titan',
            imageUrl: './uwu/p2-ifrit-31.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Stack on the edge for Titan',
            imageUrl: './uwu/p2-ifrit-31.webp'
          }
        ]
      }
    ]
  }
];

const p3: PhaseStrats[] = [
  {
    phaseName: 'Start',
    tag: 'p3',
    mechs: [
      {
        mechanic: 'Pull',
        description: 'Raidwide as Titan lands',
        action: 'Stay on the edge until Titan lands\nPull away from party',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Pull Titan, face him away from party',
            imageUrl: './uwu/p3-titan-1.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Wait on the edge until Titan lands\nThen stack behind Titan',
            imageUrl: './uwu/p3-titan-1.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Wait on the edge until Titan lands\nThen stack behind Titan',
            imageUrl: './uwu/p3-titan-1.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Wait on the edge until Titan lands\nThen stack behind Titan',
            imageUrl: './uwu/p3-titan-1.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Wait on the edge until Titan lands\nThen stack behind Titan',
            imageUrl: './uwu/p3-titan-1.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Wait on the edge until Titan lands\nThen stack behind Titan',
            imageUrl: './uwu/p3-titan-1.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Wait on the edge until Titan lands\nThen stack behind Titan',
            imageUrl: './uwu/p3-titan-1.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Wait on the edge until Titan lands\nThen stack behind Titan',
            imageUrl: './uwu/p3-titan-1.webp'
          }
        ]
      },
      {
        mechanic: 'Mountain Buster',
        description: 'Cleaving TB',
        action: 'MT uses big mits',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Big mits, TB cleaves',
            imageUrl: './uwu/p3-titan-2.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Stay behind Titan',
            imageUrl: './uwu/p3-titan-2.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Stay behind Titan',
            imageUrl: './uwu/p3-titan-2.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Stay behind Titan',
            imageUrl: './uwu/p3-titan-2.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stay behind Titan',
            imageUrl: './uwu/p3-titan-2.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stay behind Titan',
            imageUrl: './uwu/p3-titan-2.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Stay behind Titan',
            imageUrl: './uwu/p3-titan-2.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Stay behind Titan',
            imageUrl: './uwu/p3-titan-2.webp'
          }
        ]
      },
      {
        mechanic: 'Weight of the Land',
        description: 'Puddles under every player',
        action: 'Rotate to a cardinal, then back for double Weights',
        imageUrl: './uwu/p3-titan-3.webp'
      }
    ]
  },
  {
    phaseName: 'Geocrush 1',
    tag: 'p3',
    mechs: [
      {
        mechanic: 'Geocrush',
        description: 'Titan faces a cardinal and jumps to the edge\nPlatform shrinks',
        action: 'Run opposite where Titan faces\nRun into hitbox once he lands',
        imageUrl: './uwu/p3-titan-6.webp'
      },
      {
        mechanic: 'Upheaval + Bombs',
        description:
          'Bombs drop on the opposite side with 1 safe spot\nA 6th bomb hits the safe spot shortly after',
        action: 'Stand next to Titan on the bomb safe side\nSprint out as soon as bombs explode',
        imageUrl: './uwu/p3-titan-7.webp'
      },
      {
        mechanic: 'Landslide',
        description: 'Double 5-way Landslide',
        action: 'Run up through Center to bait it',
        imageUrl: './uwu/p3-titan-9.webp'
      }
    ]
  },
  {
    phaseName: 'Gaols',
    tag: 'p3',
    mechs: [
      {
        mechanic: 'Gaols',
        description: '3 players marked for Gaols\nAutomarker is standard in NA PF',
        action: 'Gaols line up from Titan in marker order, lean to bomb side\nParty dodges Left',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description:
              'If marked, line up from Titan in marker order (1 closest)\nIf not marked, dodge Left and move up Left side',
            imageUrl: './uwu/p3-titan-11.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description:
              'If marked, line up from Titan in marker order (1 closest)\nIf not marked, dodge Left and move up Left side',
            imageUrl: './uwu/p3-titan-11.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description:
              'If marked, line up from Titan in marker order (1 closest)\nIf not marked, dodge Left and move up Left side',
            imageUrl: './uwu/p3-titan-11.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description:
              'If marked, line up from Titan in marker order (1 closest)\nIf not marked, dodge Left and move up Left side',
            imageUrl: './uwu/p3-titan-11.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description:
              'If marked, line up from Titan in marker order (1 closest)\nIf not marked, dodge Left and move up Left side',
            imageUrl: './uwu/p3-titan-11.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description:
              'If marked, line up from Titan in marker order (1 closest)\nIf not marked, dodge Left and move up Left side',
            imageUrl: './uwu/p3-titan-11.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description:
              'If marked, line up from Titan in marker order (1 closest)\nIf not marked, dodge Left and move up Left side',
            imageUrl: './uwu/p3-titan-11.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description:
              'If marked, line up from Titan in marker order (1 closest)\nIf not marked, dodge Left and move up Left side',
            imageUrl: './uwu/p3-titan-11.webp'
          }
        ]
      },
      {
        mechanic: 'Gaols Resolve',
        description: 'Extra Gaol explodes and chains the other 3',
        action: 'Party moves Left of Titan',
        imageUrl: './uwu/p3-titan-13.webp'
      },
      {
        mechanic: 'Tumults',
        description: 'Small raidwides, healers may be gaoled',
        action: 'Mit and heal through',
        strats: [
          { role: 'Tank', party: 1, description: 'Party mit', imageUrl: './uwu/p3-titan-14.webp' },
          { role: 'Tank', party: 2, description: 'Party mit', imageUrl: './uwu/p3-titan-14.webp' },
          {
            role: 'Healer',
            party: 1,
            description: 'If free, heal through Tumults',
            imageUrl: './uwu/p3-titan-14.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'If free, heal through Tumults',
            imageUrl: './uwu/p3-titan-14.webp'
          },
          { role: 'Melee', party: 1, description: 'Party mit', imageUrl: './uwu/p3-titan-14.webp' },
          { role: 'Melee', party: 2, description: 'Party mit', imageUrl: './uwu/p3-titan-14.webp' },
          {
            role: 'Ranged',
            party: 1,
            description: 'Party mit',
            imageUrl: './uwu/p3-titan-14.webp'
          },
          { role: 'Ranged', party: 2, description: 'Party mit', imageUrl: './uwu/p3-titan-14.webp' }
        ]
      },
      {
        mechanic: 'Weight of the Land',
        description: 'Double Weights',
        action: 'Stack, dodge through boss along the wall\nAvoid Gaol puddles',
        imageUrl: './uwu/p3-titan-16.webp'
      },
      {
        mechanic: 'Awoken Landslide',
        description: 'Hits twice, 2nd hit is untelegraphed',
        action: 'Stay far out of range',
        imageUrl: './uwu/p3-titan-18.webp'
      }
    ]
  },
  {
    phaseName: 'Geocrush 2',
    tag: 'p3',
    mechs: [
      {
        mechanic: 'Geocrush',
        description: 'Titan jumps again, platform shrinks again',
        action: 'Run opposite where Titan faces',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Pull Titan Center so his facing is clear',
            imageUrl: './uwu/p3-titan-22.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Run opposite where Titan faces',
            imageUrl: './uwu/p3-titan-22.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Run opposite where Titan faces',
            imageUrl: './uwu/p3-titan-22.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Run opposite where Titan faces',
            imageUrl: './uwu/p3-titan-22.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Run opposite where Titan faces',
            imageUrl: './uwu/p3-titan-22.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Run opposite where Titan faces',
            imageUrl: './uwu/p3-titan-22.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Run opposite where Titan faces',
            imageUrl: './uwu/p3-titan-22.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Run opposite where Titan faces',
            imageUrl: './uwu/p3-titan-22.webp'
          }
        ]
      },
      {
        mechanic: 'Healer Gaol',
        description: 'Random healer gets gaoled',
        action: 'Break them out ASAP',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Break the Gaol ASAP',
            imageUrl: './uwu/p3-titan-24.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Break the Gaol ASAP',
            imageUrl: './uwu/p3-titan-24.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'If gaoled, wait to be freed\nElse heal solo',
            imageUrl: './uwu/p3-titan-24.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'If gaoled, wait to be freed\nElse heal solo',
            imageUrl: './uwu/p3-titan-24.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Break the Gaol ASAP',
            imageUrl: './uwu/p3-titan-24.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Break the Gaol ASAP',
            imageUrl: './uwu/p3-titan-24.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Break the Gaol ASAP',
            imageUrl: './uwu/p3-titan-24.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Break the Gaol ASAP',
            imageUrl: './uwu/p3-titan-24.webp'
          }
        ]
      },
      {
        mechanic: 'Awoken Landslide',
        description: 'Hits twice',
        action: 'Stay out of melee for both hits',
        imageUrl: './uwu/p3-titan-25.webp'
      },
      {
        mechanic: 'Tumults + Tankbuster',
        description: '6 Tumults, then heavy TB',
        action: 'Face Titan away from party\nTank swap after TB',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Face Titan away from party, mit TB',
            imageUrl: './uwu/p3-titan-29.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Provoke after TB',
            imageUrl: './uwu/p3-titan-29.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Stay away from the TB cleave',
            imageUrl: './uwu/p3-titan-29.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Stay away from the TB cleave',
            imageUrl: './uwu/p3-titan-29.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stay away from the TB cleave',
            imageUrl: './uwu/p3-titan-29.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stay away from the TB cleave',
            imageUrl: './uwu/p3-titan-29.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Stay away from the TB cleave',
            imageUrl: './uwu/p3-titan-29.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Stay away from the TB cleave',
            imageUrl: './uwu/p3-titan-29.webp'
          }
        ]
      }
    ]
  },
  {
    phaseName: 'Weights + Enrage',
    tag: 'p3',
    mechs: [
      {
        mechanic: 'Weight of the Land',
        description: 'Triple Weights baited on the party',
        action: 'Stack on MT to bait\nStop at the edge of each Weight',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: "Dodge Right > Left > Right\nMT: don't pull Titan closer to the wall",
            imageUrl: './uwu/p3-titan-30.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: "Dodge Right > Left > Right\nMT: don't pull Titan closer to the wall",
            imageUrl: './uwu/p3-titan-30.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Dodge CW (Left > Left > Left)',
            imageUrl: './uwu/p3-titan-30.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Dodge CW (Left > Left > Left)',
            imageUrl: './uwu/p3-titan-30.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Dodge Right > Left > Right\nOr CCW (Right > Right > Right)',
            imageUrl: './uwu/p3-titan-30.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Dodge Right > Left > Right\nOr CCW (Right > Right > Right)',
            imageUrl: './uwu/p3-titan-30.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Dodge CW (Left > Left > Left)',
            imageUrl: './uwu/p3-titan-30.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Dodge CW (Left > Left > Left)',
            imageUrl: './uwu/p3-titan-30.webp'
          }
        ]
      },
      {
        mechanic: 'Awoken Landslide',
        description: 'Baited on a ranged player, leaving a safe spot behind Titan',
        action: 'Melees get uptime behind Titan\nAdjust for falling boulders',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Dodge, then move into safe spot behind Titan',
            imageUrl: './uwu/p3-titan-35.webp',
            mask: getCircleMaskUrl(32.9, 32.5, 7)
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Dodge, then move into safe spot behind Titan',
            imageUrl: './uwu/p3-titan-35.webp',
            mask: getCircleMaskUrl(32.9, 32.5, 7)
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Bait Landslide, then dodge',
            imageUrl: './uwu/p3-titan-35.webp',
            mask: getCircleMaskUrl(35.6, 71.9, 9.6)
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Bait Landslide, then dodge',
            imageUrl: './uwu/p3-titan-35.webp',
            mask: getCircleMaskUrl(35.6, 71.9, 9.6)
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Dodge, then move into safe spot behind Titan\nAdjust for boulders',
            imageUrl: './uwu/p3-titan-35.webp',
            mask: getCircleMaskUrl(32.9, 32.5, 7)
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Dodge, then move into safe spot behind Titan\nAdjust for boulders',
            imageUrl: './uwu/p3-titan-35.webp',
            mask: getCircleMaskUrl(32.9, 32.5, 7)
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Bait Landslide, then dodge',
            imageUrl: './uwu/p3-titan-35.webp',
            mask: getCircleMaskUrl(35.6, 71.9, 9.6)
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Bait Landslide, then dodge',
            imageUrl: './uwu/p3-titan-35.webp',
            mask: getCircleMaskUrl(35.6, 71.9, 9.6)
          }
        ]
      },
      {
        mechanic: 'Tankbuster + Enrage',
        description: 'TB, then Weights x3 + Tumults x8 before enrage',
        action: 'Stay stacked until Titan dies',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Face Titan away from party, mit TB',
            imageUrl: './uwu/p3-titan-37.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Provoke after TB if needed',
            imageUrl: './uwu/p3-titan-37.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Stay stacked until Titan dies',
            imageUrl: './uwu/p3-titan-37.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Stay stacked until Titan dies',
            imageUrl: './uwu/p3-titan-37.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stay stacked until Titan dies',
            imageUrl: './uwu/p3-titan-37.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stay stacked until Titan dies',
            imageUrl: './uwu/p3-titan-37.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Stay stacked until Titan dies',
            imageUrl: './uwu/p3-titan-37.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Stay stacked until Titan dies',
            imageUrl: './uwu/p3-titan-37.webp'
          }
        ]
      },
      {
        mechanic: 'Puddle',
        description:
          'Titan leaves a Beyond Limits puddle\nHealer, Caster, Melee should all have Beyond Limits',
        action: 'Melee grabs the puddle\nStack Mid',
        notes: 'Standard NA Beyond Limits order: Healer (Garuda) > Caster (Ifrit) > Melee (Titan)',
        strats: [
          { role: 'Tank', party: 1, description: 'Stack Mid', imageUrl: './uwu/p3-titan-38.webp' },
          { role: 'Tank', party: 2, description: 'Stack Mid', imageUrl: './uwu/p3-titan-38.webp' },
          {
            role: 'Healer',
            party: 1,
            description: 'Stack Mid',
            imageUrl: './uwu/p3-titan-38.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Stack Mid',
            imageUrl: './uwu/p3-titan-38.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'One melee grabs the puddle\nStack Mid',
            imageUrl: './uwu/p3-titan-38.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'One melee grabs the puddle\nStack Mid',
            imageUrl: './uwu/p3-titan-38.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Stack Mid',
            imageUrl: './uwu/p3-titan-38.webp'
          },
          { role: 'Ranged', party: 2, description: 'Stack Mid', imageUrl: './uwu/p3-titan-38.webp' }
        ]
      }
    ]
  }
];

const intermission: PhaseStrats[] = [
  {
    phaseName: 'Magitek Bits',
    tag: 'i1',
    mechs: [
      {
        mechanic: 'Stack Mid',
        description: 'Healer, Caster, Melee have Beyond Limits\nFull LB3 gauge',
        action: 'Stack Mid',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Stack Mid',
            imageUrl: './uwu/intermission-0.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Stack Mid',
            imageUrl: './uwu/intermission-0.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Stack Mid',
            imageUrl: './uwu/intermission-0.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Stack Mid',
            imageUrl: './uwu/intermission-0.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stack Mid',
            imageUrl: './uwu/intermission-0.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stack Mid',
            imageUrl: './uwu/intermission-0.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Stack Mid',
            imageUrl: './uwu/intermission-0.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Stack Mid',
            imageUrl: './uwu/intermission-0.webp'
          }
        ]
      },
      {
        mechanic: 'Caster LB',
        description:
          "Bits start casting Freefire\nCaster LB3 doesn't one-shot, each bit needs extra damage",
        action: 'Caster LB3 Center',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Build gauge, finish off bits',
            imageUrl: './uwu/intermission-1.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Build gauge, finish off bits',
            imageUrl: './uwu/intermission-1.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Build gauge, finish off bits',
            imageUrl: './uwu/intermission-1.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Build gauge, finish off bits',
            imageUrl: './uwu/intermission-1.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Build gauge, finish off bits',
            imageUrl: './uwu/intermission-1.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Build gauge, finish off bits',
            imageUrl: './uwu/intermission-1.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description:
              'LB3 Center once Freefire cast appears\nRecommend standing Center and using a self-target LB macro',
            imageUrl: './uwu/intermission-1.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Build gauge, finish off bits',
            imageUrl: './uwu/intermission-1.webp'
          }
        ]
      },
      {
        mechanic: 'Healer LB',
        description: 'Party drops to critical HP',
        action: 'Healer LB3 ASAP',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Build gauge',
            imageUrl: './uwu/intermission-2.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Build gauge',
            imageUrl: './uwu/intermission-2.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'If Beyond Limits, LB3 ASAP',
            imageUrl: './uwu/intermission-2.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'If Beyond Limits, LB3 ASAP',
            imageUrl: './uwu/intermission-2.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Build gauge',
            imageUrl: './uwu/intermission-2.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Build gauge',
            imageUrl: './uwu/intermission-2.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Build gauge',
            imageUrl: './uwu/intermission-2.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Build gauge',
            imageUrl: './uwu/intermission-2.webp'
          }
        ]
      },
      {
        mechanic: 'Melee LB',
        description: 'Lahabrea spawns, 6 GCDs before he dies',
        action: 'Melee LB3 ASAP',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Build gauge on Lahabrea',
            imageUrl: './uwu/intermission-3.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Build gauge on Lahabrea',
            imageUrl: './uwu/intermission-3.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Build gauge on Lahabrea',
            imageUrl: './uwu/intermission-3.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Build gauge on Lahabrea',
            imageUrl: './uwu/intermission-3.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'If Beyond Limits, LB3 Lahabrea ASAP',
            imageUrl: './uwu/intermission-3.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'If Beyond Limits, LB3 Lahabrea ASAP',
            imageUrl: './uwu/intermission-3.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Build gauge on Lahabrea',
            imageUrl: './uwu/intermission-3.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Build gauge on Lahabrea',
            imageUrl: './uwu/intermission-3.webp'
          }
        ]
      },
      {
        mechanic: 'Tank LB',
        description: 'Ultima appears',
        action: 'Tank LB3 ASAP',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'One tank LB3 ASAP',
            imageUrl: './uwu/intermission-4.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'One tank LB3 ASAP',
            imageUrl: './uwu/intermission-4.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Build gauge',
            imageUrl: './uwu/intermission-4.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Build gauge',
            imageUrl: './uwu/intermission-4.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Build gauge',
            imageUrl: './uwu/intermission-4.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Build gauge',
            imageUrl: './uwu/intermission-4.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Build gauge',
            imageUrl: './uwu/intermission-4.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Build gauge',
            imageUrl: './uwu/intermission-4.webp'
          }
        ]
      },
      {
        mechanic: 'Preposition',
        description:
          '95s of downtime before Ultima is targetable\nPF uses this time to claim Suppression spots on NW wall',
        action: 'Heal up, MT moves North',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Move North for Ultima',
            imageUrl: './uwu/intermission-6.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: '',
            imageUrl: './uwu/intermission-6.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: '',
            imageUrl: './uwu/intermission-6.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: '',
            imageUrl: './uwu/intermission-6.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: '',
            imageUrl: './uwu/intermission-6.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: '',
            imageUrl: './uwu/intermission-6.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: '',
            imageUrl: './uwu/intermission-6.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: '',
            imageUrl: './uwu/intermission-6.webp'
          }
        ]
      }
    ]
  }
];

const predation: PhaseStrats[] = [
  {
    phaseName: 'Ultima',
    tag: 'p4a',
    description: 'Ultima gains 4 duty gauge per death and certain casts, enrage at 100',
    mechs: [
      {
        mechanic: 'Tank Purge',
        description: 'Raidwide',
        action:
          'Optional LB3 cheese: minimal heals after tank LB, mit with shields only to build gauge',
        imageUrl: './uwu/p4-predation-0.webp'
      },
      {
        mechanic: 'Viscous Aetheroplasm',
        description: 'Debuff on MT',
        action: 'MT stays away from party',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Take Aetheroplasm away from party\nMit the small AOE or soak with party',
            imageUrl: './uwu/p4-predation-1.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Move away, get ready for Homing Lasers',
            imageUrl: './uwu/p4-predation-1.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Stay away from MT',
            imageUrl: './uwu/p4-predation-1.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Stay away from MT',
            imageUrl: './uwu/p4-predation-1.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stay away from MT',
            imageUrl: './uwu/p4-predation-1.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stay away from MT',
            imageUrl: './uwu/p4-predation-1.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Stay away from MT',
            imageUrl: './uwu/p4-predation-1.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Stay away from MT',
            imageUrl: './uwu/p4-predation-1.webp'
          }
        ]
      },
      {
        mechanic: 'Homing Lasers',
        description: 'Heavy TB (125k) on 2nd enmity',
        action: 'OT mits away from party',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Stay away from OT',
            imageUrl: './uwu/p4-predation-2.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Mit Homing Lasers away from party',
            imageUrl: './uwu/p4-predation-2.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Stay away from OT',
            imageUrl: './uwu/p4-predation-2.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Stay away from OT',
            imageUrl: './uwu/p4-predation-2.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stay away from OT',
            imageUrl: './uwu/p4-predation-2.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stay away from OT',
            imageUrl: './uwu/p4-predation-2.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Stay away from OT',
            imageUrl: './uwu/p4-predation-2.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Stay away from OT',
            imageUrl: './uwu/p4-predation-2.webp'
          }
        ]
      }
    ]
  },
  {
    phaseName: 'Ultimate Predation',
    tag: 'p4a',
    mechs: [
      {
        mechanic: 'Spawn',
        description:
          'Ultima teleports to a random intercard\nGaruda inside on an intercard, Ifrit on an edge intercard, Titan on a cardinal',
        action: 'Start Mid',
        imageUrl: './uwu/p4-predation-3.webp'
      },
      {
        mechanic: 'Find Safe Spot',
        action:
          'Run away from the 2 cardinals closest to Garuda\nThen go to the cardinal without Titan\nNote where Ultima is',
        imageUrl: './uwu/p4-predation-4.webp'
      },
      {
        mechanic: 'Wave 1',
        description: 'All primals attack at once',
        action:
          'Get to the wall, check Ifrit dash\nDirectly across from Titan: dodge away from Ifrit',
        imageUrl: './uwu/p4-predation-5.webp'
      },
      {
        mechanic: 'Wave 2',
        action: 'Move along the wall away from Ultima\nStop at the 4th rune from the symbol',
        imageUrl: './uwu/p4-predation-7.webp'
      },
      {
        mechanic: 'Resolve',
        description: 'Wave 2 + AOE around Ultima',
        imageUrl: './uwu/p4-predation-8.webp'
      }
    ]
  },
  {
    phaseName: 'Plumes + Landslides',
    tag: 'p4a',
    mechs: [
      {
        mechanic: 'Bait',
        description: 'Ifrit Eruptions on the 2 farthest players',
        action: 'Stack on 2nd line from North\n2 designated Ranged bait Eruptions far South',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Pull Ultima slightly NW to bait Titan',
            imageUrl: './uwu/p4-predation-10.webp',
            mask: getCircleMaskUrl(48.5, 26.5, 11.5)
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Stack on 2nd line from North',
            imageUrl: './uwu/p4-predation-10.webp',
            mask: getCircleMaskUrl(48.5, 26.5, 11.5)
          },
          {
            role: 'Healer',
            party: 1,
            description: 'If baiting, bait Eruptions far South\nElse stack on 2nd line from North',
            imageUrl: './uwu/p4-predation-10.webp',
            mask: getMultiCircleMaskUrl([28.4, 89.6, 7], [48.5, 26.5, 11.5], [71.8, 89.6, 7])
          },
          {
            role: 'Healer',
            party: 2,
            description: 'If baiting, bait Eruptions far South\nElse stack on 2nd line from North',
            imageUrl: './uwu/p4-predation-10.webp',
            mask: getMultiCircleMaskUrl([28.4, 89.6, 7], [48.5, 26.5, 11.5], [71.8, 89.6, 7])
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stack on 2nd line from North',
            imageUrl: './uwu/p4-predation-10.webp',
            mask: getCircleMaskUrl(48.5, 26.5, 11.5)
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stack on 2nd line from North',
            imageUrl: './uwu/p4-predation-10.webp',
            mask: getCircleMaskUrl(48.5, 26.5, 11.5)
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'If baiting, bait Eruptions far South\nElse stack on 2nd line from North',
            imageUrl: './uwu/p4-predation-10.webp',
            mask: getMultiCircleMaskUrl([28.4, 89.6, 7], [48.5, 26.5, 11.5], [71.8, 89.6, 7])
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'If baiting, bait Eruptions far South\nElse stack on 2nd line from North',
            imageUrl: './uwu/p4-predation-10.webp',
            mask: getMultiCircleMaskUrl([28.4, 89.6, 7], [48.5, 26.5, 11.5], [71.8, 89.6, 7])
          }
        ]
      },
      {
        mechanic: 'Radiant Plumes',
        description: 'Plumes on the outside, boulders in Center',
        action: 'Stay on 2nd line, move out to 2 once Plumes resolve',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Stay on 2nd line, move out to 2 once Plumes resolve',
            imageUrl: './uwu/p4-predation-12.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Stay on 2nd line, move out to 2 once Plumes resolve',
            imageUrl: './uwu/p4-predation-12.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'If baiting, rejoin party after 4th Eruption',
            imageUrl: './uwu/p4-predation-12.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'If baiting, rejoin party after 4th Eruption',
            imageUrl: './uwu/p4-predation-12.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stay on 2nd line, move out to 2 once Plumes resolve',
            imageUrl: './uwu/p4-predation-12.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stay on 2nd line, move out to 2 once Plumes resolve',
            imageUrl: './uwu/p4-predation-12.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'If baiting, rejoin party after 4th Eruption',
            imageUrl: './uwu/p4-predation-12.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'If baiting, rejoin party after 4th Eruption',
            imageUrl: './uwu/p4-predation-12.webp'
          }
        ]
      },
      {
        mechanic: 'Landslides',
        description:
          "Titan + Ultima Landslides, only Titan's is Awoken\nTitan's 2nd hit is untelegraphed",
        action: "Dodge to Titan's side, then back after Ultima's Landslide",
        imageUrl: './uwu/p4-predation-14.webp'
      }
    ]
  },
  {
    phaseName: 'Tumults + Aetheroplasm',
    tag: 'p4a',
    mechs: [
      {
        mechanic: 'Positioning',
        action: 'MT on East side of Ultima, party on West',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'East side of Ultima',
            imageUrl: './uwu/p4-predation-17.webp',
            mask: getCircleMaskUrl(55.6, 18.9, 7)
          },
          {
            role: 'Tank',
            party: 2,
            description: 'West side of Ultima\nAvoid boulders in Center',
            imageUrl: './uwu/p4-predation-17.webp',
            mask: getCircleMaskUrl(42.2, 18.4, 7)
          },
          {
            role: 'Healer',
            party: 1,
            description: 'West side of Ultima\nAvoid boulders in Center',
            imageUrl: './uwu/p4-predation-17.webp',
            mask: getCircleMaskUrl(42.2, 18.4, 7)
          },
          {
            role: 'Healer',
            party: 2,
            description: 'West side of Ultima\nAvoid boulders in Center',
            imageUrl: './uwu/p4-predation-17.webp',
            mask: getCircleMaskUrl(42.2, 18.4, 7)
          },
          {
            role: 'Melee',
            party: 1,
            description: 'West side of Ultima\nAvoid boulders in Center',
            imageUrl: './uwu/p4-predation-17.webp',
            mask: getCircleMaskUrl(42.2, 18.4, 7)
          },
          {
            role: 'Melee',
            party: 2,
            description: 'West side of Ultima\nAvoid boulders in Center',
            imageUrl: './uwu/p4-predation-17.webp',
            mask: getCircleMaskUrl(42.2, 18.4, 7)
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'West side of Ultima\nAvoid boulders in Center',
            imageUrl: './uwu/p4-predation-17.webp',
            mask: getCircleMaskUrl(42.2, 18.4, 7)
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'West side of Ultima\nAvoid boulders in Center',
            imageUrl: './uwu/p4-predation-17.webp',
            mask: getCircleMaskUrl(42.2, 18.4, 7)
          }
        ]
      },
      {
        mechanic: 'Tumults + Aetheroplasm',
        description:
          'Titan casts 7x Tumults\nMT gets Viscous Aetheroplasm\nGaruda + Sisters spawn in a line',
        action: 'Heal through Tumults',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Hold Aetheroplasm on East side',
            imageUrl: './uwu/p4-predation-18.webp',
            mask: getCircleMaskUrl(59.2, 17.4, 7)
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Stay on West side',
            imageUrl: './uwu/p4-predation-18.webp',
            mask: getCircleMaskUrl(42.2, 18.4, 7)
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Heal through Tumults',
            imageUrl: './uwu/p4-predation-18.webp',
            mask: getCircleMaskUrl(42.2, 18.4, 7)
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Heal through Tumults',
            imageUrl: './uwu/p4-predation-18.webp',
            mask: getCircleMaskUrl(42.2, 18.4, 7)
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stay on West side',
            imageUrl: './uwu/p4-predation-18.webp',
            mask: getCircleMaskUrl(42.2, 18.4, 7)
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stay on West side',
            imageUrl: './uwu/p4-predation-18.webp',
            mask: getCircleMaskUrl(42.2, 18.4, 7)
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Stay on West side',
            imageUrl: './uwu/p4-predation-18.webp',
            mask: getCircleMaskUrl(42.2, 18.4, 7)
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Stay on West side',
            imageUrl: './uwu/p4-predation-18.webp',
            mask: getCircleMaskUrl(42.2, 18.4, 7)
          }
        ]
      },
      {
        mechanic: 'Homing Laser',
        description: 'Homing Lasers + Aetheroplasm resolve together',
        action: 'Tank swap if MT has invuln, otherwise swap spots',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Invuln Aetheroplasm, or mit it with party',
            imageUrl: './uwu/p4-predation-21.webp',
            mask: getMultiCircleMaskUrl([66.5, 25.7, 7], [35.2, 26.6, 7])
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Take Homing Laser away from party\nInvuln if MT swapped',
            imageUrl: './uwu/p4-predation-21.webp',
            mask: getMultiCircleMaskUrl([66.5, 25.7, 7], [35.2, 26.6, 7])
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Dodge away from OT',
            imageUrl: './uwu/p4-predation-21.webp',
            mask: getCircleMaskUrl(35, 25.8, 7)
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Dodge away from OT',
            imageUrl: './uwu/p4-predation-21.webp',
            mask: getCircleMaskUrl(35, 25.8, 7)
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Dodge away from OT',
            imageUrl: './uwu/p4-predation-21.webp',
            mask: getCircleMaskUrl(35, 25.8, 7)
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Dodge away from OT',
            imageUrl: './uwu/p4-predation-21.webp',
            mask: getCircleMaskUrl(35, 25.8, 7)
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Dodge away from OT',
            imageUrl: './uwu/p4-predation-21.webp',
            mask: getCircleMaskUrl(35, 25.8, 7)
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Dodge away from OT',
            imageUrl: './uwu/p4-predation-21.webp',
            mask: getCircleMaskUrl(35, 25.8, 7)
          }
        ]
      },
      {
        mechanic: 'Feather Rain',
        description: 'Ultima teleports North for Annihilation',
        action: 'Dodge, then stack SW of where Ultima will appear',
        imageUrl: './uwu/p4-predation-22.webp'
      }
    ]
  }
];

const annihilation: PhaseStrats[] = [
  {
    phaseName: 'Ultimate Annihilation',
    tag: 'p4b',
    mechs: [
      {
        mechanic: 'Start',
        description:
          'Thermal Low players (MT, Healers, Phys Ranged) handle Garuda tethers\nOrb soaks are 2-2-1-1',
        action: 'Stack tight SW of Ultima',
        imageUrl: './uwu/p4-annihilation-0.webp'
      },
      {
        mechanic: 'Weights',
        description: 'Titan Weights, Ifrit stack marker appears',
        action: 'Dodge Right, then Left',
        imageUrl: './uwu/p4-annihilation-1.webp'
      },
      {
        mechanic: '1st Orb',
        description:
          '1st orb spawns where the party stacked for Ifrit\nGaruda tethers a random player',
        action: 'Soak Ifrit stack, then split',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Soak 1st orb East',
            imageUrl: './uwu/p4-annihilation-4.webp',
            mask: getCircleMaskUrl(54.4, 36, 7)
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Soak 1st orb East',
            imageUrl: './uwu/p4-annihilation-4.webp',
            mask: getCircleMaskUrl(54.4, 27.3, 7)
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Go West\nIf Searing Wind, go far South next to Garuda',
            imageUrl: './uwu/p4-annihilation-4.webp',
            mask: getCircleMaskUrl(29.1, 32.1, 7.5)
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Go West\nIf Searing Wind, go far South next to Garuda',
            imageUrl: './uwu/p4-annihilation-4.webp',
            mask: getCircleMaskUrl(29.1, 32.1, 7.5)
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Go North',
            imageUrl: './uwu/p4-annihilation-4.webp',
            mask: getCircleMaskUrl(39.2, 19.6, 7.3)
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Go North',
            imageUrl: './uwu/p4-annihilation-4.webp',
            mask: getCircleMaskUrl(39.2, 19.6, 7.3)
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Go North',
            imageUrl: './uwu/p4-annihilation-4.webp',
            mask: getCircleMaskUrl(39.2, 19.6, 7.3)
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Take Garuda tether South',
            imageUrl: './uwu/p4-annihilation-4.webp',
            mask: getCircleMaskUrl(43.1, 45.1, 7)
          }
        ]
      },
      {
        mechanic: '2nd Orb',
        action: 'Party to far North edge',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Soak 2nd orb East',
            imageUrl: './uwu/p4-annihilation-7.webp',
            mask: getCircleMaskUrl(57.1, 33.4, 7)
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Soak 2nd orb East, then go far North',
            imageUrl: './uwu/p4-annihilation-7.webp',
            mask: getCircleMaskUrl(57.1, 33.4, 7)
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Go far North\nIf Searing Wind, stay far South',
            imageUrl: './uwu/p4-annihilation-7.webp',
            mask: getMultiCircleMaskUrl([49.4, 96.5, 7], [49.4, 3.8, 7])
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Go far North\nIf Searing Wind, stay far South',
            imageUrl: './uwu/p4-annihilation-7.webp',
            mask: getMultiCircleMaskUrl([49.4, 96.5, 7], [49.4, 3.8, 7])
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Go far North',
            imageUrl: './uwu/p4-annihilation-7.webp',
            mask: getCircleMaskUrl(49.4, 3.8, 7)
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Go far North',
            imageUrl: './uwu/p4-annihilation-7.webp',
            mask: getCircleMaskUrl(49.4, 3.8, 7)
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Go far North',
            imageUrl: './uwu/p4-annihilation-7.webp',
            mask: getCircleMaskUrl(49.4, 3.8, 7)
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Loop around West to get far North',
            imageUrl: './uwu/p4-annihilation-7.webp',
            mask: getCircleMaskUrl(49.4, 3.8, 7)
          }
        ]
      },
      {
        mechanic: 'Landslides + Dash',
        description: 'Fixed Landslides, Ifrit dashes',
        action: 'Dodge Right (facing Ultima) into Landslide as it goes off',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Can dodge Left to stay near the orbs',
            imageUrl: './uwu/p4-annihilation-9.webp',
            mask: getCircleMaskUrl(58.1, 5, 7)
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Dodge Right (facing Ultima) into Landslide',
            imageUrl: './uwu/p4-annihilation-9.webp',
            mask: getCircleMaskUrl(41.2, 4.9, 7.7)
          },
          {
            role: 'Healer',
            party: 1,
            description:
              'If Searing Wind, go in front of where Ifrit was\nElse dodge Right into Landslide',
            imageUrl: './uwu/p4-annihilation-9.webp',
            mask: getMultiCircleMaskUrl([45, 97, 7], [41.2, 4.9, 7.7])
          },
          {
            role: 'Healer',
            party: 2,
            description:
              'If Searing Wind, go in front of where Ifrit was\nElse dodge Right into Landslide',
            imageUrl: './uwu/p4-annihilation-9.webp',
            mask: getMultiCircleMaskUrl([45, 97, 7], [41.2, 4.9, 7.7])
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Dodge Right (facing Ultima) into Landslide',
            imageUrl: './uwu/p4-annihilation-9.webp',
            mask: getCircleMaskUrl(41.2, 4.9, 7.7)
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Dodge Right (facing Ultima) into Landslide',
            imageUrl: './uwu/p4-annihilation-9.webp',
            mask: getCircleMaskUrl(41.2, 4.9, 7.7)
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Dodge Right (facing Ultima) into Landslide',
            imageUrl: './uwu/p4-annihilation-9.webp',
            mask: getCircleMaskUrl(41.2, 4.9, 7.7)
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Dodge Right (facing Ultima) into Landslide',
            imageUrl: './uwu/p4-annihilation-9.webp',
            mask: getCircleMaskUrl(41.2, 4.9, 7.7)
          }
        ]
      },
      {
        mechanic: '3rd + 4th Orb',
        description: '3rd + 4th orbs spawn in the same spot\n2nd Garuda tether',
        action: 'Party stacks on edge of Ultima hitbox',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Soak 3rd orb, stay for 4th',
            imageUrl: './uwu/p4-annihilation-12.webp',
            mask: getCircleMaskUrl(59.4, 31.6, 7)
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Stack on edge of Ultima hitbox',
            imageUrl: './uwu/p4-annihilation-12.webp',
            mask: getCircleMaskUrl(33.5, 23.1, 8.4)
          },
          {
            role: 'Healer',
            party: 1,
            description:
              'If Searing Wind, intercept Garuda tether and stay South\nElse stack on edge of Ultima hitbox',
            imageUrl: './uwu/p4-annihilation-12.webp',
            mask: getMultiCircleMaskUrl([46.9, 84.4, 7], [33.5, 23.1, 8.4])
          },
          {
            role: 'Healer',
            party: 2,
            description:
              'If Searing Wind, intercept Garuda tether and stay South\nElse stack on edge of Ultima hitbox',
            imageUrl: './uwu/p4-annihilation-12.webp',
            mask: getMultiCircleMaskUrl([46.9, 84.4, 7], [33.5, 23.1, 8.4])
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stack on edge of Ultima hitbox',
            imageUrl: './uwu/p4-annihilation-12.webp',
            mask: getCircleMaskUrl(33.5, 23.1, 8.4)
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stack on edge of Ultima hitbox',
            imageUrl: './uwu/p4-annihilation-12.webp',
            mask: getCircleMaskUrl(33.5, 23.1, 8.4)
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Stack on edge of Ultima hitbox',
            imageUrl: './uwu/p4-annihilation-12.webp',
            mask: getCircleMaskUrl(33.5, 23.1, 8.4)
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Stack on edge of Ultima hitbox',
            imageUrl: './uwu/p4-annihilation-12.webp',
            mask: getCircleMaskUrl(33.5, 23.1, 8.4)
          }
        ]
      },
      {
        mechanic: 'Tank Purge + Feather Rain',
        description: 'Raidwide, then Feather Rain',
        action: 'Dodge Feather Rain, move South of boss',
        imageUrl: './uwu/p4-annihilation-14.webp'
      }
    ]
  },
  {
    phaseName: 'Lasers',
    tag: 'p4b',
    mechs: [
      {
        mechanic: 'Eye of the Storm + Homing Lasers',
        description: 'Larger Eye of the Storm\nHoming Lasers on OT',
        action: 'Healer waits for Searing Wind, then in ASAP',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Hold Ultima',
            imageUrl: './uwu/p4-annihilation-16.webp',
            mask: getCircleMaskUrl(51.6, 33.2, 7)
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Mit Homing Lasers away from party',
            imageUrl: './uwu/p4-annihilation-16.webp',
            mask: getCircleMaskUrl(67, 44.5, 7)
          },
          {
            role: 'Healer',
            party: 1,
            description: 'If Searing Wind, wait for last hit, then in ASAP\nElse stay in',
            imageUrl: './uwu/p4-annihilation-16.webp',
            mask: getMultiCircleMaskUrl([49, 68.9, 7], [36.6, 39.4, 7])
          },
          {
            role: 'Healer',
            party: 2,
            description: 'If Searing Wind, wait for last hit, then in ASAP\nElse stay in',
            imageUrl: './uwu/p4-annihilation-16.webp',
            mask: getMultiCircleMaskUrl([49, 68.9, 7], [36.6, 39.4, 7])
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stay in for Eye of the Storm',
            imageUrl: './uwu/p4-annihilation-16.webp',
            mask: getCircleMaskUrl(35.9, 48.5, 9.3)
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stay in for Eye of the Storm',
            imageUrl: './uwu/p4-annihilation-16.webp',
            mask: getCircleMaskUrl(35.9, 48.5, 9.3)
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Stay in for Eye of the Storm',
            imageUrl: './uwu/p4-annihilation-16.webp',
            mask: getCircleMaskUrl(35.9, 48.5, 9.3)
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Stay in for Eye of the Storm',
            imageUrl: './uwu/p4-annihilation-16.webp',
            mask: getCircleMaskUrl(35.9, 48.5, 9.3)
          }
        ]
      },
      {
        mechanic: 'Radiant Plumes',
        description: 'Eye of the Storm + 4 Radiant Plumes',
        action: 'Wait for Eye of the Storm, then move out',
        imageUrl: './uwu/p4-annihilation-18.webp'
      },
      {
        mechanic: 'Diffractive Laser',
        description: 'Cleaving TB on MT, no cast',
        action: 'Move in',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Mit cleaving TB',
            imageUrl: './uwu/p4-annihilation-20.webp',
            mask: getCircleMaskUrl(50.5, 33.6, 7)
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Move in, stay out of MT cleave',
            imageUrl: './uwu/p4-annihilation-20.webp',
            mask: getCircleMaskUrl(67.6, 49.7, 7)
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Move in, stay out of MT cleave',
            imageUrl: './uwu/p4-annihilation-20.webp',
            mask: getCircleMaskUrl(31.6, 49.3, 9.5)
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Move in, stay out of MT cleave',
            imageUrl: './uwu/p4-annihilation-20.webp',
            mask: getCircleMaskUrl(31.6, 49.3, 9.5)
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Move in, stay out of MT cleave',
            imageUrl: './uwu/p4-annihilation-20.webp',
            mask: getCircleMaskUrl(31.6, 49.3, 9.5)
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Move in, stay out of MT cleave',
            imageUrl: './uwu/p4-annihilation-20.webp',
            mask: getCircleMaskUrl(31.6, 49.3, 9.5)
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Move in, stay out of MT cleave',
            imageUrl: './uwu/p4-annihilation-20.webp',
            mask: getCircleMaskUrl(31.6, 49.3, 9.5)
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Move in, stay out of MT cleave',
            imageUrl: './uwu/p4-annihilation-20.webp',
            mask: getCircleMaskUrl(31.6, 49.3, 9.5)
          }
        ]
      },
      {
        mechanic: 'Knockback',
        description: 'Eye of the Storm + KB\nLoops until Ultima is below 50%',
        action: 'Shield the party to avoid the KB',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Can ignore KB if shielded, otherwise take KB or use KB resist',
            imageUrl: './uwu/p4-annihilation-21.webp',
            mask: getCircleMaskUrl(50.5, 33.6, 7)
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Homing Lasers next, tank swap if needed',
            imageUrl: './uwu/p4-annihilation-21.webp',
            mask: getCircleMaskUrl(67.6, 49.7, 7)
          },
          {
            role: 'Healer',
            party: 1,
            description: 'AOE shield to avoid the KB',
            imageUrl: './uwu/p4-annihilation-21.webp',
            mask: getCircleMaskUrl(31.6, 49.3, 9.5)
          },
          {
            role: 'Healer',
            party: 2,
            description: 'AOE shield to avoid the KB',
            imageUrl: './uwu/p4-annihilation-21.webp',
            mask: getCircleMaskUrl(31.6, 49.3, 9.5)
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Can ignore KB if shielded, otherwise take KB or use KB resist',
            imageUrl: './uwu/p4-annihilation-21.webp',
            mask: getCircleMaskUrl(31.6, 49.3, 9.5)
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Can ignore KB if shielded, otherwise take KB or use KB resist',
            imageUrl: './uwu/p4-annihilation-21.webp',
            mask: getCircleMaskUrl(31.6, 49.3, 9.5)
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Can ignore KB if shielded, otherwise take KB or use KB resist',
            imageUrl: './uwu/p4-annihilation-21.webp',
            mask: getCircleMaskUrl(31.6, 49.3, 9.5)
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Can ignore KB if shielded, otherwise take KB or use KB resist',
            imageUrl: './uwu/p4-annihilation-21.webp',
            mask: getCircleMaskUrl(31.6, 49.3, 9.5)
          }
        ]
      }
    ]
  }
];

const suppression: PhaseStrats[] = [
  {
    phaseName: 'Ultimate Suppression',
    tag: 'p4c',
    mechs: [
      {
        mechanic: 'Preposition',
        description: 'Ultima teleports away, primals always spawn in the same formation',
        action: 'Tanks SW in front of Titan\nParty spreads in front of Garuda',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Stand SW in front of Titan\nIntercept Mistral Songs',
            imageUrl: './uwu/p4-suppression-1.webp',
            mask: getCircleMaskUrl(30.5, 61.1, 7)
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Stand SW in front of Titan\nIntercept Mistral Songs',
            imageUrl: './uwu/p4-suppression-1.webp',
            mask: getCircleMaskUrl(39.8, 68, 7)
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Spread along the NW wall in front of Garuda',
            imageUrl: './uwu/p4-suppression-1.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Spread along the NW wall in front of Garuda',
            imageUrl: './uwu/p4-suppression-1.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Spread along the NW wall in front of Garuda',
            imageUrl: './uwu/p4-suppression-1.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Spread along the NW wall in front of Garuda',
            imageUrl: './uwu/p4-suppression-1.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Spread along the NW wall in front of Garuda',
            imageUrl: './uwu/p4-suppression-1.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Spread along the NW wall in front of Garuda',
            imageUrl: './uwu/p4-suppression-1.webp'
          }
        ]
      },
      {
        mechanic: 'Debuffs',
        description:
          '3 Eruptions, 2 Mistral Song markers, 1 Light Pillar\nNo Eruption or Mistral Song = Light Pillar',
        action: 'Markers + Light Pillar go behind tanks',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Intercept Mistral Songs by Titan',
            imageUrl: './uwu/p4-suppression-3.webp',
            mask: getCircleMaskUrl(30.5, 61.1, 7)
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Intercept Mistral Songs by Titan',
            imageUrl: './uwu/p4-suppression-3.webp',
            mask: getCircleMaskUrl(39.8, 68, 7)
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Eruption: bait with party\nMarker/Light Pillar: go behind tanks by Titan',
            imageUrl: './uwu/p4-suppression-3.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Eruption: bait with party\nMarker/Light Pillar: go behind tanks by Titan',
            imageUrl: './uwu/p4-suppression-3.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Eruption: bait with party\nMarker/Light Pillar: go behind tanks by Titan',
            imageUrl: './uwu/p4-suppression-3.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Eruption: bait with party\nMarker/Light Pillar: go behind tanks by Titan',
            imageUrl: './uwu/p4-suppression-3.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Eruption: bait with party\nMarker/Light Pillar: go behind tanks by Titan',
            imageUrl: './uwu/p4-suppression-3.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Eruption: bait with party\nMarker/Light Pillar: go behind tanks by Titan',
            imageUrl: './uwu/p4-suppression-3.webp'
          }
        ]
      },
      {
        mechanic: 'Gaol',
        description: 'One Eruption player gets Gaol\n4 feathers circle the edge CCW',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Mit and intercept Mistral Songs',
            imageUrl: './uwu/p4-suppression-5.webp',
            mask: getCircleMaskUrl(30.5, 61.1, 7)
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Mit and intercept Mistral Songs',
            imageUrl: './uwu/p4-suppression-5.webp',
            mask: getCircleMaskUrl(39.8, 68, 7)
          },
          {
            role: 'Healer',
            party: 1,
            description:
              'If Gaol, drop it on 4 with the 4th Eruption\nStay away from feathers on walls',
            imageUrl: './uwu/p4-suppression-5.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description:
              'If Gaol, drop it on 4 with the 4th Eruption\nStay away from feathers on walls',
            imageUrl: './uwu/p4-suppression-5.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description:
              'If Gaol, drop it on 4 with the 4th Eruption\nStay away from feathers on walls',
            imageUrl: './uwu/p4-suppression-5.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description:
              'If Gaol, drop it on 4 with the 4th Eruption\nStay away from feathers on walls',
            imageUrl: './uwu/p4-suppression-5.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description:
              'If Gaol, drop it on 4 with the 4th Eruption\nStay away from feathers on walls',
            imageUrl: './uwu/p4-suppression-5.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description:
              'If Gaol, drop it on 4 with the 4th Eruption\nStay away from feathers on walls',
            imageUrl: './uwu/p4-suppression-5.webp'
          }
        ]
      },
      {
        mechanic: 'Light Pillar',
        description: 'Garuda casts a large frontal cone',
        action: 'Wait for Feather Rain before moving onto the Gaol',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Dodge 4th Eruption, group up Mid',
            imageUrl: './uwu/p4-suppression-6.webp',
            mask: getCircleMaskUrl(53, 51.4, 8.8)
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Dodge 4th Eruption, group up Mid',
            imageUrl: './uwu/p4-suppression-6.webp',
            mask: getCircleMaskUrl(53, 51.4, 8.8)
          },
          {
            role: 'Healer',
            party: 1,
            description:
              'If Light Pillar, run CW around the outside, inside the feathers\nElse dodge 4th Eruption, group up Mid',
            imageUrl: './uwu/p4-suppression-6.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description:
              'If Light Pillar, run CW around the outside, inside the feathers\nElse dodge 4th Eruption, group up Mid',
            imageUrl: './uwu/p4-suppression-6.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description:
              'If Light Pillar, run CW around the outside, inside the feathers\nElse dodge 4th Eruption, group up Mid',
            imageUrl: './uwu/p4-suppression-6.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description:
              'If Light Pillar, run CW around the outside, inside the feathers\nElse dodge 4th Eruption, group up Mid',
            imageUrl: './uwu/p4-suppression-6.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description:
              'If Light Pillar, run CW around the outside, inside the feathers\nElse dodge 4th Eruption, group up Mid',
            imageUrl: './uwu/p4-suppression-6.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description:
              'If Light Pillar, run CW around the outside, inside the feathers\nElse dodge 4th Eruption, group up Mid',
            imageUrl: './uwu/p4-suppression-6.webp'
          }
        ]
      },
      {
        mechanic: 'Break Gaol',
        description: 'Gaol is a DPS check',
        action: 'Break it ASAP\nGroup up on B after Garuda jumps',
        imageUrl: './uwu/p4-suppression-8.webp'
      },
      {
        mechanic: 'Mesohigh + Landslide',
        description:
          'Ifrit stack + Mesohigh tether + Landslides\nUltima fires 3 lasers across the arena',
        action: 'Party dodges toward Ifrit\nMT takes Mesohigh toward Garuda',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description:
              'Take Mesohigh tether toward Garuda (cleanses Thermal Low)\nMove into the far Landslide',
            imageUrl: './uwu/p4-suppression-10.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'B > 4 > B to dodge Landslides, stay stacked',
            imageUrl: './uwu/p4-suppression-10.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'B > 4 > B to dodge Landslides, stay stacked',
            imageUrl: './uwu/p4-suppression-10.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'B > 4 > B to dodge Landslides, stay stacked',
            imageUrl: './uwu/p4-suppression-10.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'B > 4 > B to dodge Landslides, stay stacked',
            imageUrl: './uwu/p4-suppression-10.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'B > 4 > B to dodge Landslides, stay stacked',
            imageUrl: './uwu/p4-suppression-10.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'B > 4 > B to dodge Landslides, stay stacked',
            imageUrl: './uwu/p4-suppression-10.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'B > 4 > B to dodge Landslides, stay stacked',
            imageUrl: './uwu/p4-suppression-10.webp'
          }
        ]
      },
      {
        mechanic: 'Tank Purge',
        description: 'Garuda jumps, then heavy raidwide\nUltima teleports back to Center',
        action: 'Head back Mid',
        imageUrl: './uwu/p4-suppression-13.webp'
      }
    ]
  },
  {
    phaseName: 'Ultima + Aetheroplasm',
    tag: 'p4c',
    mechs: [
      {
        mechanic: 'Ultima',
        description: 'Heavy raidwide, damage usually gives LB1 back',
        action: 'Tank LB3 + mits',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'One tank LB3 + party mits',
            imageUrl: './uwu/p4-suppression-14.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'One tank LB3 + party mits',
            imageUrl: './uwu/p4-suppression-14.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Shield + heal up after',
            imageUrl: './uwu/p4-suppression-14.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Shield + heal up after',
            imageUrl: './uwu/p4-suppression-14.webp'
          },
          { role: 'Melee', party: 1, description: 'Mit', imageUrl: './uwu/p4-suppression-14.webp' },
          { role: 'Melee', party: 2, description: 'Mit', imageUrl: './uwu/p4-suppression-14.webp' },
          {
            role: 'Ranged',
            party: 1,
            description: 'Mit',
            imageUrl: './uwu/p4-suppression-14.webp'
          },
          { role: 'Ranged', party: 2, description: 'Mit', imageUrl: './uwu/p4-suppression-14.webp' }
        ]
      },
      {
        mechanic: 'Aetheric Boom',
        description: 'KB, then orbs spawn on both sides\nCan immediately LB1 to mit',
        action: 'Tanks KB SW, party KB SE',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'KB to SW orbs',
            imageUrl: './uwu/p4-suppression-15.webp',
            mask: getCircleMaskUrl(40, 59.7, 7)
          },
          {
            role: 'Tank',
            party: 2,
            description: 'KB to SW orbs',
            imageUrl: './uwu/p4-suppression-15.webp',
            mask: getCircleMaskUrl(40, 59.7, 7)
          },
          {
            role: 'Healer',
            party: 1,
            description: 'KB to SE orbs',
            imageUrl: './uwu/p4-suppression-15.webp',
            mask: getCircleMaskUrl(63.8, 58.4, 7.9)
          },
          {
            role: 'Healer',
            party: 2,
            description: 'KB to SE orbs',
            imageUrl: './uwu/p4-suppression-15.webp',
            mask: getCircleMaskUrl(63.8, 58.4, 7.9)
          },
          {
            role: 'Melee',
            party: 1,
            description: 'KB to SE orbs',
            imageUrl: './uwu/p4-suppression-15.webp',
            mask: getCircleMaskUrl(63.8, 58.4, 7.9)
          },
          {
            role: 'Melee',
            party: 2,
            description: 'KB to SE orbs',
            imageUrl: './uwu/p4-suppression-15.webp',
            mask: getCircleMaskUrl(63.8, 58.4, 7.9)
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'KB to SE orbs',
            imageUrl: './uwu/p4-suppression-15.webp',
            mask: getCircleMaskUrl(63.8, 58.4, 7.9)
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'KB to SE orbs',
            imageUrl: './uwu/p4-suppression-15.webp',
            mask: getCircleMaskUrl(63.8, 58.4, 7.9)
          }
        ]
      },
      {
        mechanic: 'Aetheroplasm',
        description:
          'Orbs explode for heavy damage when soaked\nShorter tether = less time before they wipe you',
        action: 'Soak South orbs, head North\nHeal up, then soak North orbs',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Soak SW orb, then NW orb',
            imageUrl: './uwu/p4-suppression-16.webp',
            mask: getCircleMaskUrl(33.8, 63.6, 7)
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Soak SW orb, then NW orb',
            imageUrl: './uwu/p4-suppression-16.webp',
            mask: getCircleMaskUrl(30.5, 71.4, 7)
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Soak SE orb, then NE orb\nHeal up between soaks',
            imageUrl: './uwu/p4-suppression-16.webp',
            mask: getCircleMaskUrl(70, 66.3, 10.2)
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Soak SE orb, then NE orb\nHeal up between soaks',
            imageUrl: './uwu/p4-suppression-16.webp',
            mask: getCircleMaskUrl(70, 66.3, 10.2)
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Soak SE orb, then NE orb',
            imageUrl: './uwu/p4-suppression-16.webp',
            mask: getCircleMaskUrl(70, 66.3, 10.2)
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Soak SE orb, then NE orb',
            imageUrl: './uwu/p4-suppression-16.webp',
            mask: getCircleMaskUrl(70, 66.3, 10.2)
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Soak SE orb, then NE orb',
            imageUrl: './uwu/p4-suppression-16.webp',
            mask: getCircleMaskUrl(70, 66.3, 10.2)
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Soak SE orb, then NE orb',
            imageUrl: './uwu/p4-suppression-16.webp',
            mask: getCircleMaskUrl(70, 66.3, 10.2)
          }
        ]
      }
    ]
  },
  {
    phaseName: 'Primal Roulette',
    tag: 'p4c',
    mechs: [
      {
        mechanic: 'Positioning',
        description:
          '3 random Viscous Aetheroplasm stacks\nPrimal order can be Garuda > Ifrit > Titan, Ifrit > Garuda > Titan, or Titan > Ifrit > Garuda',
        action: 'Boss North, stack on 2\nReturn to 2 after Titan or Garuda',
        strats: [
          {
            role: 'Tank',
            party: 1,
            description: 'Pull Ultima North, stack on 2',
            imageUrl: './uwu/p4-suppression-19.webp'
          },
          {
            role: 'Tank',
            party: 2,
            description: 'Stack on 2',
            imageUrl: './uwu/p4-suppression-19.webp'
          },
          {
            role: 'Healer',
            party: 1,
            description: 'Stack on 2',
            imageUrl: './uwu/p4-suppression-19.webp'
          },
          {
            role: 'Healer',
            party: 2,
            description: 'Stack on 2',
            imageUrl: './uwu/p4-suppression-19.webp'
          },
          {
            role: 'Melee',
            party: 1,
            description: 'Stack on 2',
            imageUrl: './uwu/p4-suppression-19.webp'
          },
          {
            role: 'Melee',
            party: 2,
            description: 'Stack on 2',
            imageUrl: './uwu/p4-suppression-19.webp'
          },
          {
            role: 'Ranged',
            party: 1,
            description: 'Stack on 2',
            imageUrl: './uwu/p4-suppression-19.webp'
          },
          {
            role: 'Ranged',
            party: 2,
            description: 'Stack on 2',
            imageUrl: './uwu/p4-suppression-19.webp'
          }
        ]
      },
      {
        mechanic: 'Garuda',
        description: 'Wicked Wheel + outer tornado, then raidwide',
        action: 'Stack on North edge of Wicked Wheel, in after\nWait for jump before returning',
        imageUrl: './uwu/p4-suppression-20.webp'
      },
      {
        mechanic: 'Ifrit',
        description: 'Eruptions + dash, then raidwide',
        action: 'Start at 2\nSprint to 3\nStay where you are after Ifrit',
        imageUrl: './uwu/p4-suppression-24.webp'
      },
      {
        mechanic: 'Titan',
        description: 'Triple Weights, then raidwide',
        action: 'Dodge between the 2 and 3 markers',
        imageUrl: './uwu/p4-suppression-28.webp'
      },
      {
        mechanic: 'Enrage',
        description:
          'Ultima gains 2 duty gauge per second\nPlayers get popped in order of damage done',
        action: 'Burn',
        imageUrl: './uwu/p4-suppression-33.webp'
      }
    ]
  }
];

const naurStrat: Strat = {
  stratName: 'naur',
  description: '',
  stratUrl: {
    NAUR: 'https://naurffxiv.com/ultimate/uwu',
    'P1: Garuda': 'https://ff14.toolboxgaming.space/?id=122994122467471&preview=1',
    'P2: Ifrit': 'https://ff14.toolboxgaming.space/?id=562530446784261&preview=1',
    'P3: Titan': 'https://ff14.toolboxgaming.space/?id=463534803605261&preview=1',
    'Intermission: Magitek Bits': 'https://ff14.toolboxgaming.space/?id=430631425646261&preview=1',
    'P4: Predation': 'https://ff14.toolboxgaming.space/?id=222999692467471&preview=1',
    'P4: Annihilation': 'https://ff14.toolboxgaming.space/?id=930637786646261&preview=1',
    'P4: Suppression': 'https://ff14.toolboxgaming.space/?id=830635036646261&preview=1',
    'Icy Veins Guide': 'https://www.icy-veins.com/ffxiv/the-weapons-refrain-ultimate-guides-hub'
  },
  notes: '',
  strats: [...p1, ...p2, ...p3, ...intermission, ...predation, ...annihilation, ...suppression]
};

export const uwuStrats: Strat[] = [naurStrat];

export const uwuFightConfig: FightConfig = {
  fightKey: 'uwu',
  title: "The Weapon's Refrain (Ultimate)",
  abbreviatedTitle: 'UWU',
  subtitle: 'UWU Patch 4.31',
  cheatsheetTitle: 'UWU Cheatsheet',
  strats: {
    naur: {
      label: 'NAUR',
      badges: [{ text: 'NA', class: 'na-badge' }]
    }
  },
  toggles: [],
  tabTags: {
    Garuda: ['p1'],
    Ifrit: ['p2'],
    Titan: ['p3'],
    Intermission: ['i1'],
    Predation: ['p4a'],
    Annihilation: ['p4b'],
    Suppression: ['p4c']
  },
  useMainPageTabs: true,
  separateDescriptionAction: true,
  defaultStratName: 'naur',
  timeline: [],
  posterEnabled: true,
  posterLayout: uwuPosterLayout,
  roleOptions: [
    { label: 'MT', role: 'Tank', party: 1 },
    { label: 'OT', role: 'Tank', party: 2 },
    { label: 'H1', role: 'Healer', party: 1 },
    { label: 'H2', role: 'Healer', party: 2 },
    { label: 'M1', role: 'Melee', party: 1 },
    { label: 'M2', role: 'Melee', party: 2 },
    { label: 'Caster', role: 'Ranged', party: 1, abbrev: 'C' },
    { label: 'Phys', role: 'Ranged', party: 2, abbrev: 'PR' }
  ]
};
