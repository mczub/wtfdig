import type { FightConfig, Strat, MechanicStrat } from '$lib/types';
import { getCircleMaskUrl } from '$lib/utils';
import { diagram, player, boss, waymark, aoeCircle, aoeRect, text, SQUARE_MARKERS } from '$lib/arena';

// Toggle-dependent mechs for Arena Split
const toxicArenaSplit: MechanicStrat[] = [
  {
    mechanic: 'Split + Conga',
    description: '4 players get tethered, 2 on each side\nG1 West, G2 East',
    imageUrl: './m11s/toxic-split.webp'
  },
  {
    mechanic: 'Towers',
    description:
      'EVERYONE take a tower\nKB to other side if you need to stretch tether\nOtherwise KB to same side',
    imageUrl: './m11s/toxic-split-towers.webp'
  },
  {
    mechanic: 'Fire Breath Baits',
    description:
      'Non-tethers close to boss to bait fire breaths\nUse body language to hint at N or S\nStack center E/W after for puddles',
    imageUrl: './m11s/toxic-split-baits.webp'
  },
  {
    mechanic: 'Puddles',
    description: 'Bait puddles along front wall, tethers stretch',
    imageUrl: './m11s/toxic-split-puddles.webp'
  },
  {
    mechanic: 'Lineup + Portal',
    description: 'Tethers on edge, markers on inner marker corner',
    imageUrl: './m11s/toxic-split-portals.webp'
  },
  {
    mechanic: 'Towers 2 + 3',
    description: '‼️TAKE THE TOWER IN THE QUADRANT YOU RESOLVED TETHER/MARKERS',
    imageUrl: './m11s/toxic-split-towers-2.webp'
  },
  {
    mechanic: 'Get Slabbed',
    description: 'KB to back of boss, then look at hitbox to dodge AOE',
    imageUrl: './m11s/toxic-slab.webp'
  }
];

const nobuddiesArenaSplit: MechanicStrat[] = [
  {
    mechanic: 'Split + Conga',
    description:
      '4 players get tethered, 2 on each side\nG1 West, G2 East\nSupports NW/SE, DPS SW/NE\nℹ️ Hector has Tank/Ranged North and Healers/Melee South',
    imageUrl: './m11s/kindred-split-conga.webp',
    url: 'https://raidplan.io/plan/hvbysrfwvrc55ahz#1'
  },
  {
    mechanic: 'Towers',
    description:
      'EVERYONE take a tower\nKB to other side if you need to stretch tether\nOtherwise KB to same side',
    imageUrl: './m11s/kindred-nobuddies-towers.webp',
    url: 'https://raidplan.io/plan/hvbysrfwvrc55ahz#15'
  },
  {
    mechanic: 'Fire Breath Baits',
    description:
      'Non-tethers close to boss to bait fire breaths\nStack center E/W after for puddles',
    imageUrl: './m11s/kindred-nobuddies-baits.webp',
    url: 'https://raidplan.io/plan/hvbysrfwvrc55ahz#16'
  },
  {
    mechanic: 'Puddles',
    description:
      'Everyone go center E/W to bait puddles, one pair go North, one pair go South\nTethers go to the side you need to stretch\nNon-tethers use body language/stay where you got knocked to',
    imageUrl: './m11s/kindred-nobuddies-puddles.webp',
    url: {
      Start: 'https://raidplan.io/plan/hvbysrfwvrc55ahz#17',
      'Puddle baits': 'https://raidplan.io/plan/hvbysrfwvrc55ahz#18'
    }
  },
  {
    mechanic: 'Lineup + Portal',
    description:
      'Tethers on edge, markers on inner or outer safe corner of number markers depending on which markers are used\nℹ️ Original raidplan and Hector use outer corner markers, newer version of the raidplan uses inner corner markers',
    imageUrl: './m11s/kindred-lineup.webp',
    url: {
      'Inner corner': 'https://raidplan.io/plan/hvbysrfwvrc55ahz#8',
      'Outer corner': 'https://raidplan.io/plan/hvbysrfwvrc55ahz#9'
    }
  },
  {
    mechanic: 'Towers 2 + 3',
    description:
      'Take the tower in the quadrant you resolved the last set of tethers/markers\n2nd towers, another tethers + markers, 3rd towers, then stack AOEs',
    imageUrl: './m11s/kindred-buddies-towers-2.webp',
    url: 'https://raidplan.io/plan/hvbysrfwvrc55ahz#12'
  },
  {
    mechanic: 'Get Slabbed',
    description: 'KB to back of boss, then look at hitbox to dodge AOE',
    imageUrl: './m11s/kindred-slab.webp',
    url: 'https://raidplan.io/plan/hvbysrfwvrc55ahz#14'
  }
];

const hectorArenaSplit: MechanicStrat[] = [
  {
    mechanic: 'Split + Conga',
    description:
      '4 players get tethered, 2 on each side\nG1 West, G2 East\nHector has Tank/Ranged North and Healers/Melee South\nℹ️ Original raidplan has supports NW/SE, DPS SW/NE',
    imageUrl: './m11s/hector-split-start.webp'
  },
  {
    mechanic: 'Towers',
    description:
      'EVERYONE take a tower\nKB to other side if you need to stretch tether\nOtherwise KB to same side',
    imageUrl: './m11s/hector-split-towers.webp'
  },
  {
    mechanic: 'Fire Breath Baits',
    description:
      'Non-tethers close to boss to bait fire breaths\nStack center E/W after for puddles',
    imageUrl: './m11s/hector-split-baits.webp'
  },
  {
    mechanic: 'Puddles',
    description:
      'Everyone go center E/W to bait puddles, one pair go North, one pair go South\nTethers go to the side you need to stretch\nNon-tethers use body language/stay where you got knocked to',
    imageUrl: './m11s/hector-split-puddles.webp'
  },
  {
    mechanic: 'Lineup + Portal',
    description:
      'Tethers on edge, markers on outer safe corner of number markers\nℹ️ Original raidplan and Hector use outer corner markers, newer version of the raidplan uses inner corner markers',
    imageUrl: './m11s/hector-split-tethers.webp'
  },
  {
    mechanic: 'Towers 2 + 3',
    description:
      'Take the tower in the quadrant you resolved the last set of tethers/markers\n2nd towers, another tethers + markers, 3rd towers, then stack AOEs',
    imageUrl: './m11s/hector-split-towers-2.webp'
  },
  {
    mechanic: 'Get Slabbed',
    description: 'KB to back of boss, then look at hitbox to dodge AOE',
    imageUrl: './m11s/hector-slab.webp'
  }
];

const wdzArenaSplit: MechanicStrat[] = [
  {
    mechanic: 'Split + Conga',
    description: 'G1 West, G2 East\nSupports NW/SE, DPS SW/NE',
    imageUrl: './m11s/wdz-split-2.webp',
    url: 'https://raidplan.io/plan/ZSaq60muZdIfJWdZ#3'
  },
  {
    mechanic: 'Towers',
    description:
      'EVERYONE take a tower\nKB to other side if you need to stretch tether\nOtherwise KB to same side',
    imageUrl: './m11s/wdz-split-3.webp',
    url: 'https://raidplan.io/plan/ZSaq60muZdIfJWdZ#4'
  },
  {
    mechanic: 'Fire Breath Baits',
    description:
      'Non-tethers close to boss to bait fire breaths\nStack center E/W after for puddles',
    imageUrl: './m11s/wdz-split-4.webp',
    url: 'https://raidplan.io/plan/ZSaq60muZdIfJWdZ#5'
  },
  {
    mechanic: 'Puddles',
    description:
      'Everyone go center E/W to bait puddles, one pair go North, one pair go South\nTethers go to the side you need to stretch\nNon-tethers use body language/stay where you got knocked to',
    imageUrl: './m11s/wdz-split-6.webp',
    url: 'https://raidplan.io/plan/ZSaq60muZdIfJWdZ#7'
  },
  {
    mechanic: 'Lineup + Portal',
    description: 'Tethers on edge, markers on outer safe corner of number markers',
    imageUrl: './m11s/wdz-split-7.webp',
    url: 'https://raidplan.io/plan/ZSaq60muZdIfJWdZ#8'
  },
  {
    mechanic: 'Towers 2 + 3',
    description:
      'Take the tower in the quadrant you resolved the last set of tethers/markers\n2nd towers, another tethers + markers, 3rd towers, then stack AOEs',
    imageUrl: './m11s/wdz-split-11.webp',
    url: 'https://raidplan.io/plan/ZSaq60muZdIfJWdZ#12'
  },
  {
    mechanic: 'Get Slabbed',
    description: 'KB to back of boss, then look at hitbox to dodge AOE',
    imageUrl: './m11s/wdz-split-13.webp',
    url: 'https://raidplan.io/plan/ZSaq60muZdIfJWdZ#14'
  }
];

const arenaSplitMechs: Record<string, MechanicStrat[]> = {
  toxic: toxicArenaSplit,
  nobuddies: nobuddiesArenaSplit,
  hector: hectorArenaSplit,
  wdz: wdzArenaSplit
};

const uptimeEcliptic: MechanicStrat[] = [
  {
    mechanic: 'Start',
    description: 'R1 R2 H1 H2 Conga North to South',
    url: 'https://raidplan.io/plan/pz_pT6oL7EgrTIEH#1',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Stack middle under boss',
        imageUrl: './m11s/uptime-ecliptic-0.webp'
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Stack middle under boss',
        imageUrl: './m11s/uptime-ecliptic-0.webp'
      },
      {
        role: 'Healer',
        party: 1,
        description: 'Conga 3rd from North',
        imageUrl: './m11s/uptime-ecliptic-0.webp'
      },
      {
        role: 'Healer',
        party: 2,
        description: 'Conga 4th from North',
        imageUrl: './m11s/uptime-ecliptic-0.webp'
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Stack middle under boss',
        imageUrl: './m11s/uptime-ecliptic-0.webp'
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Stack middle under boss',
        imageUrl: './m11s/uptime-ecliptic-0.webp'
      },
      {
        role: 'Ranged',
        party: 1,
        description: 'Conga 1st from North',
        imageUrl: './m11s/uptime-ecliptic-0.webp'
      },
      {
        role: 'Ranged',
        party: 2,
        description: 'Conga 2nd from North',
        imageUrl: './m11s/uptime-ecliptic-0.webp'
      }
    ]
  },
  {
    mechanic: 'Puddles',
    description:
      'North marker drop puddles North, South marker drop puddles South\nNorth markerless CW tower from A, South markerless CCW tower from A',
    url: 'https://raidplan.io/plan/pz_pT6oL7EgrTIEH#2',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Stack middle under boss',
        imageUrl: './m11s/uptime-ecliptic-1.webp'
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Stack middle under boss',
        imageUrl: './m11s/uptime-ecliptic-1.webp'
      },
      {
        role: 'Healer',
        party: 1,
        description:
          'If marked, drop puddles\nIf not marked, take CW tower from A if Northmost, CCW tower from A if Southmost',
        imageUrl: './m11s/uptime-ecliptic-1.webp'
      },
      {
        role: 'Healer',
        party: 2,
        description: 'If marked, drop puddles South\nIf not marked, take CCW tower from A',
        imageUrl: './m11s/uptime-ecliptic-1.webp'
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Stack middle under boss',
        imageUrl: './m11s/uptime-ecliptic-1.webp'
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Stack middle under boss',
        imageUrl: './m11s/uptime-ecliptic-1.webp'
      },
      {
        role: 'Ranged',
        party: 1,
        description: 'If marked, drop puddles North\nIf not marked, take CW tower from A',
        imageUrl: './m11s/uptime-ecliptic-1.webp'
      },
      {
        role: 'Ranged',
        party: 2,
        description:
          'If marked, drop puddles\nIf not marked, take CW tower from A if Northmost, CCW tower from A if Southmost',
        imageUrl: './m11s/uptime-ecliptic-1.webp'
      }
    ]
  },
  {
    mechanic: 'Towers',
    description: 'Melees on edge of tower, Ranged dead center',
    url: 'https://raidplan.io/plan/pz_pT6oL7EgrTIEH#7',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Take CW solo tower from A\nTake tether opposite + CW',
        imageUrl: './m11s/uptime-ecliptic-6.webp'
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Take CCW solo tower from A\nTake tether opposite + CW',
        imageUrl: './m11s/uptime-ecliptic-6.webp'
      },
      {
        role: 'Healer',
        party: 1,
        description:
          '‼️ Stand dead center of tower\nIf not marked, take CW tower from A if Northmost, CCW tower from A if Southmost\nTake tether opposite + CW',
        imageUrl: './m11s/uptime-ecliptic-6.webp'
      },
      {
        role: 'Healer',
        party: 2,
        description:
          '‼️ Stand dead center of tower\nIf marked, drop puddles South\nIf not marked, take CCW tower from A\nTake tether opposite + CW',
        imageUrl: './m11s/uptime-ecliptic-6.webp'
      },
      {
        role: 'Melee',
        party: 1,
        description: '‼️ Stand on edge of tower\nTake CW pair tower from A',
        imageUrl: './m11s/uptime-ecliptic-6.webp'
      },
      {
        role: 'Melee',
        party: 2,
        description: '‼️ Stand on edge of tower\nTake CCW pair tower from A',
        imageUrl: './m11s/uptime-ecliptic-6.webp'
      },
      {
        role: 'Ranged',
        party: 1,
        description:
          '‼️ Stand dead center of tower\nIf marked, drop puddles North\nIf not marked, take CW tower from A\nTake tether opposite + CW',
        imageUrl: './m11s/uptime-ecliptic-6.webp'
      },
      {
        role: 'Ranged',
        party: 2,
        description:
          '‼️ Stand dead center of tower\nIf marked, drop puddles\nIf not marked, take CW tower from A if Northmost, CCW tower from A if Southmost\nTake tether opposite + CW',
        imageUrl: './m11s/uptime-ecliptic-6.webp'
      }
    ]
  },
  {
    mechanic: 'Two-way Fireball',
    description: '',
    url: 'https://raidplan.io/plan/pz_pT6oL7EgrTIEH#10',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Join line stack on East or West',
        imageUrl: './m11s/uptime-ecliptic-9.webp'
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Join line stack on East or West',
        imageUrl: './m11s/uptime-ecliptic-9.webp'
      },
      {
        role: 'Healer',
        party: 1,
        description:
          'If you baited puddles, bait inside hitbox ring\nNorth puddles = West, South puddles = East\nOtherwise join line stack East or West',
        imageUrl: './m11s/uptime-ecliptic-9.webp'
      },
      {
        role: 'Healer',
        party: 2,
        description:
          'If you baited puddles, bait inside hitbox ring East\nOtherwise join line stack East or West',
        imageUrl: './m11s/uptime-ecliptic-9.webp'
      },
      {
        role: 'Melee',
        party: 1,
        description: '‼️ Stand on edge of tower\nTake CW pair tower from A',
        imageUrl: './m11s/uptime-ecliptic-9.webp'
      },
      {
        role: 'Melee',
        party: 2,
        description: '‼️ Stand on edge of tower\nTake CCW pair tower from A',
        imageUrl: './m11s/uptime-ecliptic-9.webp'
      },
      {
        role: 'Ranged',
        party: 1,
        description:
          'If you baited puddles, bait inside hitbox ring West\nOtherwise join line stack East or West',
        imageUrl: './m11s/uptime-ecliptic-9.webp'
      },
      {
        role: 'Ranged',
        party: 2,
        description:
          'If you baited puddles, bait inside hitbox ring\nNorth puddles = West, South puddles = East\nOtherwise join line stack East or West',
        imageUrl: './m11s/uptime-ecliptic-9.webp'
      }
    ]
  },
  {
    mechanic: 'Four-way Fireball',
    description: '',
    url: 'https://raidplan.io/plan/pz_pT6oL7EgrTIEH#11',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Join line stack on intercard',
        imageUrl: './m11s/uptime-ecliptic-10.webp'
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Join line stack on intercard',
        imageUrl: './m11s/uptime-ecliptic-10.webp'
      },
      {
        role: 'Healer',
        party: 1,
        description:
          'If you baited puddles, bait just inside hitbox ring\nNorth puddles = Northwest, South puddles = Southeast\nOtherwise join line stack on intercard',
        imageUrl: './m11s/uptime-ecliptic-10.webp'
      },
      {
        role: 'Healer',
        party: 2,
        description:
          'If you baited puddles, bait just inside hitbox ring Southeast\nOtherwise join line stack on intercard',
        imageUrl: './m11s/uptime-ecliptic-10.webp'
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Bait just inside hitbox ring Northeast',
        imageUrl: './m11s/uptime-ecliptic-10.webp'
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Bait just inside hitbox ring Southwest',
        imageUrl: './m11s/uptime-ecliptic-10.webp'
      },
      {
        role: 'Ranged',
        party: 1,
        description:
          'If you baited puddles, bait just inside hitbox ring Northwest\nOtherwise join line stack on intercard',
        imageUrl: './m11s/uptime-ecliptic-10.webp'
      },
      {
        role: 'Ranged',
        party: 2,
        description:
          'If you baited puddles, bait just inside hitbox ring\nNorth puddles = Northwest, South puddles = Southeast\nOtherwise join line stack on intercard',
        imageUrl: './m11s/uptime-ecliptic-10.webp'
      }
    ]
  }
];

const fixedEcliptic: MechanicStrat[] = [
  {
    mechanic: 'Start',
    description:
      'Ranged + Healers out, Melees + Tanks in\nIf 2 on the same side get marked, the one closer to the proximity AOE will adjust',
    url: 'https://raidplan.io/plan/KXVlSGwV3zqON3CJ#1',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Stack middle under boss',
        imageUrl: './m11s/toxic-ecliptic-start.webp',
        mask: getCircleMaskUrl(49.8, 50, 5)
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Stack middle under boss',
        imageUrl: './m11s/toxic-ecliptic-start.webp',
        mask: getCircleMaskUrl(49.8, 50, 5)
      },
      {
        role: 'Healer',
        party: 1,
        description: 'Southwest to bait markers',
        imageUrl: './m11s/toxic-ecliptic-start.webp',
        mask: getCircleMaskUrl(35.7, 74.5, 5)
      },
      {
        role: 'Healer',
        party: 2,
        description: 'Southeast to bait markers',
        imageUrl: './m11s/toxic-ecliptic-start.webp',
        mask: getCircleMaskUrl(63.9, 74.3, 5)
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Stack middle under boss',
        imageUrl: './m11s/toxic-ecliptic-start.webp',
        mask: getCircleMaskUrl(50, 50.1, 5)
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Stack middle under boss',
        imageUrl: './m11s/toxic-ecliptic-start.webp',
        mask: getCircleMaskUrl(50, 50.1, 5)
      },
      {
        role: 'Ranged',
        party: 1,
        description: 'Northwest to bait markers',
        imageUrl: './m11s/toxic-ecliptic-start.webp',
        mask: getCircleMaskUrl(35.9, 25.9, 5)
      },
      {
        role: 'Ranged',
        party: 2,
        description: 'Northeast to bait markers',
        imageUrl: './m11s/toxic-ecliptic-start.webp',
        mask: getCircleMaskUrl(63.7, 25.7, 5)
      }
    ]
  },
  {
    mechanic: 'Towers',
    description:
      'Melees on edge of tower, Ranged dead center\nH1 > H2 > R1 > R2 Clockwise priority',
    url: 'https://raidplan.io/plan/KXVlSGwV3zqON3CJ#2',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Take CW solo tower from A\nTake tether opposite + CW',
        imageUrl: './m11s/hector-fixed-stampede-start.webp'
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Take CCW solo tower from A\nTake tether opposite + CW',
        imageUrl: './m11s/hector-fixed-stampede-start.webp'
      },
      {
        role: 'Healer',
        party: 1,
        description:
          '‼️ Stand dead center of tower\nIf not marked, take first tower Cw from A\nTake tether opposite + CW',
        imageUrl: './m11s/hector-fixed-stampede-start.webp'
      },
      {
        role: 'Healer',
        party: 2,
        description:
          '‼️ Stand dead center of tower\nIf not marked, take tower H1 > H2 > R1 > R2 CW from A\nTake tether opposite + CW',
        imageUrl: './m11s/hector-fixed-stampede-start.webp'
      },
      {
        role: 'Melee',
        party: 1,
        description: '‼️ Stand on edge of tower\nTake CW pair tower from A',
        imageUrl: './m11s/hector-fixed-stampede-start.webp'
      },
      {
        role: 'Melee',
        party: 2,
        description: '‼️ Stand on edge of tower\nTake CCW pair tower from A',
        imageUrl: './m11s/hector-fixed-stampede-start.webp'
      },
      {
        role: 'Ranged',
        party: 1,
        description:
          '‼️ Stand dead center of tower\nIf not marked, take tower H1 > H2 > R1 > R2 CW from A\nTake tether opposite + CW',
        imageUrl: './m11s/hector-fixed-stampede-start.webp'
      },
      {
        role: 'Ranged',
        party: 2,
        description:
          '‼️ Stand dead center of tower\nIf not marked, take first tower CCw from A\nTake tether opposite + CW',
        imageUrl: './m11s/hector-fixed-stampede-start.webp'
      }
    ]
  },
  {
    mechanic: 'Two-way Fireball',
    description: '',
    url: 'https://raidplan.io/plan/KXVlSGwV3zqON3CJ#5',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Join line stack on East or West',
        imageUrl: './m11s/hector-fixed-stampede-2.webp'
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Join line stack on East or West',
        imageUrl: './m11s/hector-fixed-stampede-2.webp'
      },
      {
        role: 'Healer',
        party: 1,
        description:
          'If you baited puddles, join line stack\nNorth puddles = West, South puddles = East\nOtherwise join line stack East or West',
        imageUrl: './m11s/hector-fixed-stampede-2.webp'
      },
      {
        role: 'Healer',
        party: 2,
        description:
          'If you baited puddles, join line stack\nNorth puddles = West, South puddles = East\nOtherwise join line stack East or West',
        imageUrl: './m11s/hector-fixed-stampede-2.webp'
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Bait on hitbox ring West',
        imageUrl: './m11s/hector-fixed-stampede-2.webp'
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Bait on hitbox ring East',
        imageUrl: './m11s/hector-fixed-stampede-2.webp'
      },
      {
        role: 'Ranged',
        party: 1,
        description:
          'If you baited puddles, join line stack\nNorth puddles = West, South puddles = East\nOtherwise join line stack East or West',
        imageUrl: './m11s/hector-fixed-stampede-2.webp'
      },
      {
        role: 'Ranged',
        party: 2,
        description:
          'If you baited puddles, join line stack\nNorth puddles = West, South puddles = East\nOtherwise join line stack East or West',
        imageUrl: './m11s/hector-fixed-stampede-2.webp'
      }
    ]
  },
  {
    mechanic: 'Four-way Fireball',
    description: '',
    url: 'https://raidplan.io/plan/KXVlSGwV3zqON3CJ#4',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Join line stack on intercard',
        imageUrl: './m11s/hector-fixed-stampede-4.webp'
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Join line stack on intercard',
        imageUrl: './m11s/hector-fixed-stampede-4.webp'
      },
      {
        role: 'Healer',
        party: 1,
        description:
          'If you baited puddles, bait on hitbox ring\nNorth puddles = Northwest, South puddles = Northeast\nOtherwise join line stack on intercard',
        imageUrl: './m11s/hector-fixed-stampede-4.webp'
      },
      {
        role: 'Healer',
        party: 2,
        description:
          'If you baited puddles, bait on hitbox ring\nNorth puddles = Northwest, South puddles = Northeast\nOtherwise join line stack on intercard',
        imageUrl: './m11s/hector-fixed-stampede-4.webp'
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Bait on hitbox ring Southwest',
        imageUrl: './m11s/hector-fixed-stampede-4.webp'
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Bait on hitbox ring Southeast',
        imageUrl: './m11s/hector-fixed-stampede-4.webp'
      },
      {
        role: 'Ranged',
        party: 1,
        description:
          'If you baited puddles, bait on hitbox ring\nNorth puddles = Northwest, South puddles = Northeast\nOtherwise join line stack on intercard',
        imageUrl: './m11s/hector-fixed-stampede-4.webp'
      },
      {
        role: 'Ranged',
        party: 2,
        description:
          'If you baited puddles, bait on hitbox ring\nNorth puddles = Northwest, South puddles = Northeast\nOtherwise join line stack on intercard',
        imageUrl: './m11s/hector-fixed-stampede-4.webp'
      }
    ]
  }
];

const yoloEcliptic: MechanicStrat[] = [
  {
    mechanic: 'Start',
    description:
      'Melees + Tanks stack under boss\nRanged + Healers stay out to bait 2 markers\nIf 2 on the same side get marked, the one closer to the proximity AOE will adjust',
    url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#16',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Stack middle under boss',
        imageUrl: './m11s/toxic-ecliptic-start.webp',
        mask: getCircleMaskUrl(49.8, 50, 5)
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Stack middle under boss',
        imageUrl: './m11s/toxic-ecliptic-start.webp',
        mask: getCircleMaskUrl(49.8, 50, 5)
      },
      {
        role: 'Healer',
        party: 1,
        description: 'Southwest to bait markers',
        imageUrl: './m11s/toxic-ecliptic-start.webp',
        mask: getCircleMaskUrl(35.7, 74.5, 5)
      },
      {
        role: 'Healer',
        party: 2,
        description: 'Southeast to bait markers',
        imageUrl: './m11s/toxic-ecliptic-start.webp',
        mask: getCircleMaskUrl(63.9, 74.3, 5)
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Stack middle under boss',
        imageUrl: './m11s/toxic-ecliptic-start.webp',
        mask: getCircleMaskUrl(50, 50.1, 5)
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Stack middle under boss',
        imageUrl: './m11s/toxic-ecliptic-start.webp',
        mask: getCircleMaskUrl(50, 50.1, 5)
      },
      {
        role: 'Ranged',
        party: 1,
        description: 'Northwest to bait markers',
        imageUrl: './m11s/toxic-ecliptic-start.webp',
        mask: getCircleMaskUrl(35.9, 25.9, 5)
      },
      {
        role: 'Ranged',
        party: 2,
        description: 'Northeast to bait markers',
        imageUrl: './m11s/toxic-ecliptic-start.webp',
        mask: getCircleMaskUrl(63.7, 25.7, 5)
      }
    ]
  },
  {
    mechanic: 'Puddles',
    description:
      'Marked players drop 6 puddles at walls\nBoss group drops 6 puddles: Middle, then North, then CW',
    url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#18',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Drop puddles Middle, then North, then CW',
        imageUrl: './m11s/toxic-ecliptic-puddles.webp'
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Drop puddles Middle, then North, then CW',
        imageUrl: './m11s/toxic-ecliptic-puddles.webp'
      },
      {
        role: 'Healer',
        party: 1,
        description:
          'If marked, drop puddles at walls\nIf not, Drop puddles Middle, then North, then CW',
        imageUrl: './m11s/toxic-ecliptic-puddles.webp'
      },
      {
        role: 'Healer',
        party: 2,
        description:
          'If marked, drop puddles at walls\nIf not, Drop puddles Middle, then North, then CW',
        imageUrl: './m11s/toxic-ecliptic-puddles.webp'
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Drop puddles Middle, then North, then CW',
        imageUrl: './m11s/toxic-ecliptic-puddles.webp'
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Drop puddles Middle, then North, then CW',
        imageUrl: './m11s/toxic-ecliptic-puddles.webp'
      },
      {
        role: 'Ranged',
        party: 1,
        description:
          'If marked, drop puddles at walls\nIf not, Drop puddles Middle, then North, then CW',
        imageUrl: './m11s/toxic-ecliptic-puddles.webp'
      },
      {
        role: 'Ranged',
        party: 2,
        description:
          'If marked, drop puddles at walls\nIf not, Drop puddles Middle, then North, then CW',
        imageUrl: './m11s/toxic-ecliptic-puddles.webp'
      }
    ]
  },
  {
    mechanic: 'Towers',
    description: '2 tank and 2 pair towers spawn randomly\nMT + H+R CW, OT + Melees CCW from North',
    url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#19',
    strats: [
      {
        role: 'Tank',
        party: 1,
        description: 'Take first tank tower Clockwise from North',
        imageUrl: './m11s/toxic-ecliptic-towers.webp'
      },
      {
        role: 'Tank',
        party: 2,
        description: 'Take first tank tower Counterclockwise from North',
        imageUrl: './m11s/toxic-ecliptic-towers.webp'
      },
      {
        role: 'Healer',
        party: 1,
        description: 'If not marked, take first pair tower Clockwise from North',
        imageUrl: './m11s/toxic-ecliptic-towers.webp'
      },
      {
        role: 'Healer',
        party: 2,
        description: 'If not marked, take first pair tower Clockwise from North',
        imageUrl: './m11s/toxic-ecliptic-towers.webp'
      },
      {
        role: 'Melee',
        party: 1,
        description: 'Take first pair tower Counterclockwise from North',
        imageUrl: './m11s/toxic-ecliptic-towers.webp'
      },
      {
        role: 'Melee',
        party: 2,
        description: 'Take first pair tower Counterclockwise from North',
        imageUrl: './m11s/toxic-ecliptic-towers.webp'
      },
      {
        role: 'Ranged',
        party: 1,
        description: 'If not marked, take first pair tower Clockwise from North',
        imageUrl: './m11s/toxic-ecliptic-towers.webp'
      },
      {
        role: 'Ranged',
        party: 2,
        description: 'If not marked, take first pair tower Clockwise from North',
        imageUrl: './m11s/toxic-ecliptic-towers.webp'
      }
    ]
  },
  {
    mechanic: 'Tethers',
    description:
      'One player from each tower gets tethered\nStretch across + CW to corner\nUntethered players under boss',
    imageUrl: './m11s/toxic-ecliptic-tethers.webp',
    url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#20'
  },
  {
    mechanic: 'Two-way Fireball',
    description:
      '2 proximity-baited line AOEs\nE/W pairs, one person close, one person further to not double up\nTethers run behind to get in the line stacks',
    imageUrl: './m11s/toxic-2way.webp',
    url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#21'
  },
  {
    mechanic: 'Four-way Fireball',
    description:
      '4 proximity-baited line AOEs\nBait intercard towards tether players in corners\nUse eyes',
    imageUrl: './m11s/toxic-4way.webp',
    url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#22'
  }
];

const eclipticMechs: Record<string, MechanicStrat[]> = {
  toxic: yoloEcliptic,
  uptime: uptimeEcliptic,
  fixed: fixedEcliptic
};

// --- Reusable arena diagrams for Raw Steel Trophy ---
const rawAxeDiagram = diagram('square', [
  boss(50, 50),
  player('OT', 53, 18, 'ot'),
  player('MT', 47, 18),
  player('H1', 34, 85, 'h1'),
  player('H2', 66, 85),
  player('R1', 15, 65),
  player('R2', 85, 65),
  player('M1', 40, 63),
  player('M2', 60, 63),
])

const rawScytheDiagram = diagram('square', [
  boss(50, 50, 315),
  player('MT', 50, 79),
  aoeRect(50, 50, 200, 30, { rotation: 45 }),
  aoeRect(50, 50, 200, 30, { rotation: 135 }),
  player('H1', 58, 89),
  player('M1', 42, 88),
  player('R1', 50, 94),
  player('OT', 79, 50),
  player('H2', 92, 38),
  player('M2', 94, 50),
  player('R2', 90, 62),
], { bgColor: 'transparent' })



const toxicStrat: Strat = {
  stratName: 'toxic',
  description: 'Toxic Friends',
  notes: '',
  stratUrl: 'https://raidplan.io/plan/HJAbE7fuWodELUSB',
  strats: [
    {
      phaseName: 'Raw Steel Trophy',
      mechs: [
        {
          mechanic: 'Axe',
          description: 'Tanks stack, Party spread',
          url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#1',
          arenaData: rawAxeDiagram,
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Stack for TB',
              imageUrl: './m11s/toxic-raw-axe.webp',
              mask: getCircleMaskUrl(50, 36.4, 7.5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Stack for TB',
              imageUrl: './m11s/toxic-raw-axe.webp',
              mask: getCircleMaskUrl(50, 36.4, 7.5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'SSW far',
              imageUrl: './m11s/toxic-raw-axe.webp',
              mask: getCircleMaskUrl(41.1, 84.8, 7.5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'SSE far',
              imageUrl: './m11s/toxic-raw-axe.webp',
              mask: getCircleMaskUrl(59.1, 84.9, 7.5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'SW max melee',
              imageUrl: './m11s/toxic-raw-axe.webp',
              mask: getCircleMaskUrl(43, 62.4, 7.5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'SE max melee',
              imageUrl: './m11s/toxic-raw-axe.webp',
              mask: getCircleMaskUrl(57.1, 62.7, 7.5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'WSW far',
              imageUrl: './m11s/toxic-raw-axe.webp',
              mask: getCircleMaskUrl(26.7, 69.1, 7.5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'ESE far',
              imageUrl: './m11s/toxic-raw-axe.webp',
              mask: getCircleMaskUrl(72.7, 69.1, 7.5)
            }
          ]
        },
        {
          mechanic: 'Scythe',
          description: 'Tanks spread, Party stack',
          url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#2',
          arenaData: rawScytheDiagram,
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'NW for split TB',
              imageUrl: './m11s/toxic-raw-scythe.webp',
              mask: getCircleMaskUrl(42.9, 37.6, 7.5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'NE for split TB',
              imageUrl: './m11s/toxic-raw-scythe.webp',
              mask: getCircleMaskUrl(57, 38, 7.5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Stack South',
              imageUrl: './m11s/toxic-raw-scythe.webp',
              mask: getCircleMaskUrl(49.9, 67.1, 7.5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Stack South',
              imageUrl: './m11s/toxic-raw-scythe.webp',
              mask: getCircleMaskUrl(49.9, 67.1, 7.5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Stack South',
              imageUrl: './m11s/toxic-raw-scythe.webp',
              mask: getCircleMaskUrl(49.9, 67.1, 7.5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Stack South',
              imageUrl: './m11s/toxic-raw-scythe.webp',
              mask: getCircleMaskUrl(49.9, 67.1, 7.5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Stack South',
              imageUrl: './m11s/toxic-raw-scythe.webp',
              mask: getCircleMaskUrl(49.9, 67.1, 7.5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Stack South',
              imageUrl: './m11s/toxic-raw-scythe.webp',
              mask: getCircleMaskUrl(49.9, 67.1, 7.5)
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Assault Evolved',
      description:
        'Boss will spawn one axe, sword, and scythe and turn to resolve them\nFirst 2 sets of 3 weapons will go clockwise',
      mechs: [
        {
          mechanic: 'Axe',
          description: 'Party stack out of AOE',
          imageUrl: './m11s/toxic-assault-axe.webp',
          url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#3'
        },
        {
          mechanic: 'Sword',
          description: 'Light Party stacks\nG1 Left, G2 Right',
          url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#4',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Left facing boss',
              imageUrl: './m11s/toxic-assault-sword.webp',
              mask: getCircleMaskUrl(34.2, 70.8, 5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Right facing boss',
              imageUrl: './m11s/toxic-assault-sword.webp',
              mask: getCircleMaskUrl(48.2, 46.7, 5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Left facing boss',
              imageUrl: './m11s/toxic-assault-sword.webp',
              mask: getCircleMaskUrl(34.2, 70.8, 5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Right facing boss',
              imageUrl: './m11s/toxic-assault-sword.webp',
              mask: getCircleMaskUrl(48.2, 46.7, 5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Left facing boss',
              imageUrl: './m11s/toxic-assault-sword.webp',
              mask: getCircleMaskUrl(34.2, 70.8, 5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Right facing boss',
              imageUrl: './m11s/toxic-assault-sword.webp',
              mask: getCircleMaskUrl(48.2, 46.7, 5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Left facing boss',
              imageUrl: './m11s/toxic-assault-sword.webp',
              mask: getCircleMaskUrl(34.2, 70.8, 5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Right facing boss',
              imageUrl: './m11s/toxic-assault-sword.webp',
              mask: getCircleMaskUrl(48.2, 46.7, 5)
            }
          ]
        },
        {
          mechanic: 'Scythe',
          description: 'Boss relative Proteans',
          url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#5',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Relative North',
              imageUrl: './m11s/toxic-assault-scythe.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Relative South',
              imageUrl: './m11s/toxic-assault-scythe.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Relative West',
              imageUrl: './m11s/toxic-assault-scythe.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Relative East',
              imageUrl: './m11s/toxic-assault-scythe.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Relative Southwest',
              imageUrl: './m11s/toxic-assault-scythe.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Relative Southeast',
              imageUrl: './m11s/toxic-assault-scythe.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Relative Northwest',
              imageUrl: './m11s/toxic-assault-scythe.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Relative Northeast',
              imageUrl: './m11s/toxic-assault-scythe.webp'
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Void Stardust',
      description: '3 baited AOEs\nStart North and bait clockwise\nStack or spread after 3rd bait',
      imageUrl: './m11s/toxic-void.webp',
      url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#6'
    },
    {
      phaseName: 'Dance of Domination Trophy',
      description: 'Open side is new South',
      url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#7',
      mechs: [
        {
          mechanic: 'Pairs',
          description: 'Pair stacks in gaps relative to new orientation',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Relative West with M1\nUse inner letter markers',
              imageUrl: './m11s/toxic-dance.webp',
              mask: getCircleMaskUrl(50.3, 72.1, 5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Relative East with M2\nUse inner letter markers',
              imageUrl: './m11s/toxic-dance.webp',
              mask: getCircleMaskUrl(50, 27.8, 5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Relative Southwest with R1',
              imageUrl: './m11s/toxic-dance.webp',
              mask: getCircleMaskUrl(74.8, 68.6, 5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Relative Southeast with R2',
              imageUrl: './m11s/toxic-dance.webp',
              mask: getCircleMaskUrl(74.7, 31.2, 5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Relative West with MT\nUse inner letter markers',
              imageUrl: './m11s/toxic-dance.webp',
              mask: getCircleMaskUrl(50.3, 72.1, 5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Relative East with OT\nUse inner letter markers',
              imageUrl: './m11s/toxic-dance.webp',
              mask: getCircleMaskUrl(50, 27.8, 5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Relative Southwest with H1',
              imageUrl: './m11s/toxic-dance.webp',
              mask: getCircleMaskUrl(74.8, 68.6, 5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Relative Southeast with H2',
              imageUrl: './m11s/toxic-dance.webp',
              mask: getCircleMaskUrl(74.7, 31.2, 5)
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Ultimate Trophy Weapons',
      mechs: [
        {
          mechanic: 'Weapons + Tornadoes',
          description:
            '6 weapons, resolve in the order they spawn\nBait tornadoes after last weapon',
          imageUrl: './m11s/toxic-ultimate.webp',
          url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#8'
        }
      ]
    },
    {
      phaseName: 'Great Wall of Fire',
      description:
        'Double hit double tankbuster that leaves a line\nIf not invulning, MT in front for first, then rotate 45 degrees CW for second',
      imageUrl: './m11s/toxic-great-wall.webp',
      url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#9'
    },
    {
      phaseName: 'Orbital Omen',
      description:
        'Tanks point boss North\n4 pairs of portals spawn North and East and fire lines\nBoss flanks are safe, dodge into intersecting lines after they go off',
      imageUrl: './m11s/toxic-orbital.webp',
      url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#10'
    },
    {
      phaseName: 'Meteorain',
      description:
        'Meteor bait order M > H > R\nClosest 2 players bait meteor markers\nShould end up with 3 meteors lined up SW\nMT grabs NE/NW tether\nOT grabs SW tether',
      mechs: [
        {
          mechanic: '1st Set',
          description:
            'Melees close to bait meteors, then go NE/SW\nParty stack NW\nTanks in front for the first line stack',
          url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#11',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Stand in front of NW line stack',
              imageUrl: './m11s/toxic-meteorain-1.webp',
              mask: getCircleMaskUrl(44.5, 43.5, 5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Stand in front of NW line stack',
              imageUrl: './m11s/toxic-meteorain-1.webp',
              mask: getCircleMaskUrl(44.5, 43.5, 5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Stand in NW line stack, then get ready to bait 2nd meteors',
              imageUrl: './m11s/toxic-meteorain-1.webp',
              mask: getCircleMaskUrl(41.8, 37.7, 5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Stand in NW line stack, then get ready to bait 2nd meteors',
              imageUrl: './m11s/toxic-meteorain-1.webp',
              mask: getCircleMaskUrl(41.8, 37.7, 5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Bait meteor close, then drop NE',
              imageUrl: './m11s/toxic-meteorain-1.webp',
              mask: getCircleMaskUrl(57.1, 38, 5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Bait meteor close, then drop SW',
              imageUrl: './m11s/toxic-meteorain-1.webp',
              mask: getCircleMaskUrl(43, 62.9, 5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Stand in NW line stack',
              imageUrl: './m11s/toxic-meteorain-1.webp',
              mask: getCircleMaskUrl(41.8, 37.6, 5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Stand in NW line stack',
              imageUrl: './m11s/toxic-meteorain-1.webp',
              mask: getCircleMaskUrl(41.8, 37.6, 5)
            }
          ]
        },
        {
          mechanic: '2nd Set',
          description:
            'Healers close to bait meteors, then go NW/SW\nParty stack behind NE meteor to blow it up\nMT take NE tether, OT take SW tether',
          url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#12',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Take NE tank tether',
              imageUrl: './m11s/toxic-meteorain-2.webp',
              mask: getCircleMaskUrl(52, 18.7, 5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Take SW tank tether',
              imageUrl: './m11s/toxic-meteorain-2.webp',
              mask: getCircleMaskUrl(45.8, 72.3, 5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Bait meteor close, then drop NW',
              imageUrl: './m11s/toxic-meteorain-2.webp',
              mask: getCircleMaskUrl(43, 38.1, 5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Bait meteor close, then drop SW in line with first meteor',
              imageUrl: './m11s/toxic-meteorain-2.webp',
              mask: getCircleMaskUrl(36.1, 74.9, 5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Stand in NE line stack behind meteor',
              imageUrl: './m11s/toxic-meteorain-2.webp',
              mask: getCircleMaskUrl(59.3, 33.9, 5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Stand in NE line stack behind meteor',
              imageUrl: './m11s/toxic-meteorain-2.webp',
              mask: getCircleMaskUrl(59.3, 33.9, 5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Stand in NE line stack, then get ready to bait 3rd meteors',
              imageUrl: './m11s/toxic-meteorain-2.webp',
              mask: getCircleMaskUrl(59.3, 33.9, 5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Stand in NE line stack, then get ready to bait 3rd meteors',
              imageUrl: './m11s/toxic-meteorain-2.webp',
              mask: getCircleMaskUrl(59.3, 33.9, 5)
            }
          ]
        },
        {
          mechanic: '3rd Set',
          description:
            'Ranged close to bait meteors, then go NE/SW\nParty stack behind NW meteor to blow it up\nMT take NW tether, OT take SW tether',
          url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#13',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Take NW tank tether',
              imageUrl: './m11s/toxic-meteorain-3.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Take SW tank tether',
              imageUrl: './m11s/toxic-meteorain-3.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Stand in NW line stack behind meteor',
              imageUrl: './m11s/toxic-meteorain-3.webp',
              mask: getCircleMaskUrl(41, 33.3, 5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Stand in NW line stack behind meteor',
              imageUrl: './m11s/toxic-meteorain-3.webp',
              mask: getCircleMaskUrl(41, 33.3, 5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Stand in NW line stack behind meteor',
              imageUrl: './m11s/toxic-meteorain-3.webp',
              mask: getCircleMaskUrl(41, 33.3, 5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Stand in NW line stack behind meteor',
              imageUrl: './m11s/toxic-meteorain-3.webp',
              mask: getCircleMaskUrl(41, 33.3, 5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Bait meteor close, then drop SW far in line with other two meteors',
              imageUrl: './m11s/toxic-meteorain-3.webp',
              mask: getCircleMaskUrl(28.8, 87.5, 5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Bait meteor close, then drop NE',
              imageUrl: './m11s/toxic-meteorain-3.webp',
              mask: getCircleMaskUrl(57, 37.6, 5)
            }
          ]
        },
        {
          mechanic: '4th Set',
          description: 'Party stack behind NE meteor to blow it up\nRun SW after to hide',
          imageUrl: './m11s/toxic-meteorain-4.webp',
          url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#14'
        }
      ]
    },
    {
      phaseName: 'Arena Split',
      tag: 'arenasplit',
      mechs: arenaSplitMechs
    },
    {
      phaseName: 'Ecliptic Stampede',
      tag: 'ecliptic',
      mechs: eclipticMechs
    }
  ]
};

const hectorStrat: Strat = {
  stratName: 'hector',
  description: 'Hector (Toxic/No Buddies)',
  notes:
    "Updated to use Hector video as source for Arena Split, select 'Kindred No Buddies' for raidplan version",
  stratUrl: {
    'Video by Hector Hectorson': 'https://www.youtube.com/watch?v=w1uuwzhyf5A',
    'Toxic Friends Raidplan': 'https://raidplan.io/plan/HJAbE7fuWodELUSB',
    'kindred flatliner raidplan (slides 1-2, 7-18)': 'https://raidplan.io/plan/hvbysrfwvrc55ahz'
  },
  strats: [
    {
      phaseName: 'Raw Steel Trophy',
      mechs: [
        {
          mechanic: 'Axe',
          description: 'Tanks stack, Party spread',
          url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#1',
          arenaData: rawAxeDiagram,
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Stack for TB',
              imageUrl: './m11s/toxic-raw-axe.webp',
              mask: getCircleMaskUrl(50, 36.4, 7.5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Stack for TB',
              imageUrl: './m11s/toxic-raw-axe.webp',
              mask: getCircleMaskUrl(50, 36.4, 7.5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'SSW far',
              imageUrl: './m11s/toxic-raw-axe.webp',
              mask: getCircleMaskUrl(41.1, 84.8, 7.5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'SSE far',
              imageUrl: './m11s/toxic-raw-axe.webp',
              mask: getCircleMaskUrl(59.1, 84.9, 7.5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'SW max melee',
              imageUrl: './m11s/toxic-raw-axe.webp',
              mask: getCircleMaskUrl(43, 62.4, 7.5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'SE max melee',
              imageUrl: './m11s/toxic-raw-axe.webp',
              mask: getCircleMaskUrl(57.1, 62.7, 7.5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'WSW far',
              imageUrl: './m11s/toxic-raw-axe.webp',
              mask: getCircleMaskUrl(26.7, 69.1, 7.5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'ESE far',
              imageUrl: './m11s/toxic-raw-axe.webp',
              mask: getCircleMaskUrl(72.7, 69.1, 7.5)
            }
          ]
        },
        {
          mechanic: 'Scythe',
          description: 'Tanks spread, Party stack',
          url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#2',
          arenaData: rawScytheDiagram,
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'NW for split TB',
              imageUrl: './m11s/toxic-raw-scythe.webp',
              mask: getCircleMaskUrl(42.9, 37.6, 7.5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'NE for split TB',
              imageUrl: './m11s/toxic-raw-scythe.webp',
              mask: getCircleMaskUrl(57, 38, 7.5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Stack South',
              imageUrl: './m11s/toxic-raw-scythe.webp',
              mask: getCircleMaskUrl(49.9, 67.1, 7.5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Stack South',
              imageUrl: './m11s/toxic-raw-scythe.webp',
              mask: getCircleMaskUrl(49.9, 67.1, 7.5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Stack South',
              imageUrl: './m11s/toxic-raw-scythe.webp',
              mask: getCircleMaskUrl(49.9, 67.1, 7.5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Stack South',
              imageUrl: './m11s/toxic-raw-scythe.webp',
              mask: getCircleMaskUrl(49.9, 67.1, 7.5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Stack South',
              imageUrl: './m11s/toxic-raw-scythe.webp',
              mask: getCircleMaskUrl(49.9, 67.1, 7.5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Stack South',
              imageUrl: './m11s/toxic-raw-scythe.webp',
              mask: getCircleMaskUrl(49.9, 67.1, 7.5)
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Assault Evolved',
      description:
        'Boss will spawn one axe, sword, and scythe and turn to resolve them\nFirst 2 sets of 3 weapons will go clockwise',
      mechs: [
        {
          mechanic: 'Axe',
          description: 'Party stack out of AOE',
          imageUrl: './m11s/toxic-assault-axe.webp',
          url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#3'
        },
        {
          mechanic: 'Sword',
          description: 'Light Party stacks\nG1 Left, G2 Right',
          url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#4',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Left facing boss',
              imageUrl: './m11s/toxic-assault-sword.webp',
              mask: getCircleMaskUrl(34.2, 70.8, 5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Right facing boss',
              imageUrl: './m11s/toxic-assault-sword.webp',
              mask: getCircleMaskUrl(48.2, 46.7, 5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Left facing boss',
              imageUrl: './m11s/toxic-assault-sword.webp',
              mask: getCircleMaskUrl(34.2, 70.8, 5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Right facing boss',
              imageUrl: './m11s/toxic-assault-sword.webp',
              mask: getCircleMaskUrl(48.2, 46.7, 5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Left facing boss',
              imageUrl: './m11s/toxic-assault-sword.webp',
              mask: getCircleMaskUrl(34.2, 70.8, 5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Right facing boss',
              imageUrl: './m11s/toxic-assault-sword.webp',
              mask: getCircleMaskUrl(48.2, 46.7, 5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Left facing boss',
              imageUrl: './m11s/toxic-assault-sword.webp',
              mask: getCircleMaskUrl(34.2, 70.8, 5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Right facing boss',
              imageUrl: './m11s/toxic-assault-sword.webp',
              mask: getCircleMaskUrl(48.2, 46.7, 5)
            }
          ]
        },
        {
          mechanic: 'Scythe',
          description: 'Boss relative Proteans',
          url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#5',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Relative North',
              imageUrl: './m11s/toxic-assault-scythe.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Relative South',
              imageUrl: './m11s/toxic-assault-scythe.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Relative West',
              imageUrl: './m11s/toxic-assault-scythe.webp'
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Relative East',
              imageUrl: './m11s/toxic-assault-scythe.webp'
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Relative Southwest',
              imageUrl: './m11s/toxic-assault-scythe.webp'
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Relative Southeast',
              imageUrl: './m11s/toxic-assault-scythe.webp'
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Relative Northwest',
              imageUrl: './m11s/toxic-assault-scythe.webp'
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Relative Northeast',
              imageUrl: './m11s/toxic-assault-scythe.webp'
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Void Stardust',
      description: '3 baited AOEs\nStart North and bait clockwise\nStack or spread after 3rd bait',
      imageUrl: './m11s/toxic-void.webp',
      url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#6'
    },
    {
      phaseName: 'Dance of Domination Trophy',
      description: 'Open side is new South',
      url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#7',
      mechs: [
        {
          mechanic: 'Pairs',
          description: 'Pair stacks in gaps relative to new orientation',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Relative West with M1\nUse inner letter markers',
              imageUrl: './m11s/toxic-dance.webp',
              mask: getCircleMaskUrl(50.3, 72.1, 5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Relative East with M2\nUse inner letter markers',
              imageUrl: './m11s/toxic-dance.webp',
              mask: getCircleMaskUrl(50, 27.8, 5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Relative Southwest with R1',
              imageUrl: './m11s/toxic-dance.webp',
              mask: getCircleMaskUrl(74.8, 68.6, 5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Relative Southeast with R2',
              imageUrl: './m11s/toxic-dance.webp',
              mask: getCircleMaskUrl(74.7, 31.2, 5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Relative West with MT\nUse inner letter markers',
              imageUrl: './m11s/toxic-dance.webp',
              mask: getCircleMaskUrl(50.3, 72.1, 5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Relative East with OT\nUse inner letter markers',
              imageUrl: './m11s/toxic-dance.webp',
              mask: getCircleMaskUrl(50, 27.8, 5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Relative Southwest with H1',
              imageUrl: './m11s/toxic-dance.webp',
              mask: getCircleMaskUrl(74.8, 68.6, 5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Relative Southeast with H2',
              imageUrl: './m11s/toxic-dance.webp',
              mask: getCircleMaskUrl(74.7, 31.2, 5)
            }
          ]
        }
      ]
    },
    {
      phaseName: 'Ultimate Trophy Weapons',
      mechs: [
        {
          mechanic: 'Weapons + Tornadoes',
          description:
            '6 weapons, resolve in the order they spawn\nBait tornadoes after last weapon',
          imageUrl: './m11s/toxic-ultimate.webp',
          url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#8'
        }
      ]
    },
    {
      phaseName: 'Great Wall of Fire',
      description:
        'Double hit double tankbuster that leaves a line\nIf not invulning, MT in front for first, then rotate 45 degrees CW for second',
      imageUrl: './m11s/toxic-great-wall.webp',
      url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#9'
    },
    {
      phaseName: 'Orbital Omen',
      description:
        'Tanks point boss North\n4 pairs of portals spawn North and East and fire lines\nBoss flanks are safe, dodge into intersecting lines after they go off',
      imageUrl: './m11s/toxic-orbital.webp',
      url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#10'
    },
    {
      phaseName: 'Meteorain',
      description:
        'Meteor bait order M > H > R\nClosest 2 players bait meteor markers\nShould end up with 3 meteors lined up SW\nMT grabs NE/NW tether\nOT grabs SW tether',
      mechs: [
        {
          mechanic: '1st Set',
          description:
            'Melees close to bait meteors, then go NE/SW\nParty stack NW\nTanks in front for the first line stack',
          url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#11',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Stand in front of NW line stack',
              imageUrl: './m11s/toxic-meteorain-1.webp',
              mask: getCircleMaskUrl(44.5, 43.5, 5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Stand in front of NW line stack',
              imageUrl: './m11s/toxic-meteorain-1.webp',
              mask: getCircleMaskUrl(44.5, 43.5, 5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Stand in NW line stack, then get ready to bait 2nd meteors',
              imageUrl: './m11s/toxic-meteorain-1.webp',
              mask: getCircleMaskUrl(41.8, 37.7, 5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Stand in NW line stack, then get ready to bait 2nd meteors',
              imageUrl: './m11s/toxic-meteorain-1.webp',
              mask: getCircleMaskUrl(41.8, 37.7, 5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Bait meteor close, then drop NE',
              imageUrl: './m11s/toxic-meteorain-1.webp',
              mask: getCircleMaskUrl(57.1, 38, 5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Bait meteor close, then drop SW',
              imageUrl: './m11s/toxic-meteorain-1.webp',
              mask: getCircleMaskUrl(43, 62.9, 5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Stand in NW line stack',
              imageUrl: './m11s/toxic-meteorain-1.webp',
              mask: getCircleMaskUrl(41.8, 37.6, 5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Stand in NW line stack',
              imageUrl: './m11s/toxic-meteorain-1.webp',
              mask: getCircleMaskUrl(41.8, 37.6, 5)
            }
          ]
        },
        {
          mechanic: '2nd Set',
          description:
            'Healers close to bait meteors, then go NW/SW\nParty stack behind NE meteor to blow it up\nMT take NE tether, OT take SW tether',
          url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#12',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Take NE tank tether',
              imageUrl: './m11s/toxic-meteorain-2.webp',
              mask: getCircleMaskUrl(52, 18.7, 5)
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Take SW tank tether',
              imageUrl: './m11s/toxic-meteorain-2.webp',
              mask: getCircleMaskUrl(45.8, 72.3, 5)
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Bait meteor close, then drop NW',
              imageUrl: './m11s/toxic-meteorain-2.webp',
              mask: getCircleMaskUrl(43, 38.1, 5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Bait meteor close, then drop SW in line with first meteor',
              imageUrl: './m11s/toxic-meteorain-2.webp',
              mask: getCircleMaskUrl(36.1, 74.9, 5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Stand in NE line stack behind meteor',
              imageUrl: './m11s/toxic-meteorain-2.webp',
              mask: getCircleMaskUrl(59.3, 33.9, 5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Stand in NE line stack behind meteor',
              imageUrl: './m11s/toxic-meteorain-2.webp',
              mask: getCircleMaskUrl(59.3, 33.9, 5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Stand in NE line stack, then get ready to bait 3rd meteors',
              imageUrl: './m11s/toxic-meteorain-2.webp',
              mask: getCircleMaskUrl(59.3, 33.9, 5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Stand in NE line stack, then get ready to bait 3rd meteors',
              imageUrl: './m11s/toxic-meteorain-2.webp',
              mask: getCircleMaskUrl(59.3, 33.9, 5)
            }
          ]
        },
        {
          mechanic: '3rd Set',
          description:
            'Ranged close to bait meteors, then go NE/SW\nParty stack behind NW meteor to blow it up\nMT take NW tether, OT take SW tether',
          url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#13',
          strats: [
            {
              role: 'Tank',
              party: 1,
              description: 'Take NW tank tether',
              imageUrl: './m11s/toxic-meteorain-3.webp'
            },
            {
              role: 'Tank',
              party: 2,
              description: 'Take SW tank tether',
              imageUrl: './m11s/toxic-meteorain-3.webp'
            },
            {
              role: 'Healer',
              party: 1,
              description: 'Stand in NW line stack behind meteor',
              imageUrl: './m11s/toxic-meteorain-3.webp',
              mask: getCircleMaskUrl(41, 33.3, 5)
            },
            {
              role: 'Healer',
              party: 2,
              description: 'Stand in NW line stack behind meteor',
              imageUrl: './m11s/toxic-meteorain-3.webp',
              mask: getCircleMaskUrl(41, 33.3, 5)
            },
            {
              role: 'Melee',
              party: 1,
              description: 'Stand in NW line stack behind meteor',
              imageUrl: './m11s/toxic-meteorain-3.webp',
              mask: getCircleMaskUrl(41, 33.3, 5)
            },
            {
              role: 'Melee',
              party: 2,
              description: 'Stand in NW line stack behind meteor',
              imageUrl: './m11s/toxic-meteorain-3.webp',
              mask: getCircleMaskUrl(41, 33.3, 5)
            },
            {
              role: 'Ranged',
              party: 1,
              description: 'Bait meteor close, then drop SW far in line with other two meteors',
              imageUrl: './m11s/toxic-meteorain-3.webp',
              mask: getCircleMaskUrl(28.8, 87.5, 5)
            },
            {
              role: 'Ranged',
              party: 2,
              description: 'Bait meteor close, then drop NE',
              imageUrl: './m11s/toxic-meteorain-3.webp',
              mask: getCircleMaskUrl(57, 37.6, 5)
            }
          ]
        },
        {
          mechanic: '4th Set',
          description: 'Party stack behind NE meteor to blow it up\nRun SW after to hide',
          imageUrl: './m11s/toxic-meteorain-4.webp',
          url: 'https://raidplan.io/plan/HJAbE7fuWodELUSB#14'
        }
      ]
    },
    {
      phaseName: 'Arena Split',
      tag: 'arenasplit',
      mechs: arenaSplitMechs
    },
    {
      phaseName: 'Ecliptic Stampede',
      tag: 'ecliptic',
      mechs: eclipticMechs
    }
  ]
};

const usbWdzStrat: Strat = {
  stratName: 'usbwdz',
  description: 'USB + WdZ + Fixed',
  notes: '',
  stratUrl: {
    'USB (Toxic) Raidplan': 'https://raidplan.io/plan/HJAbE7fuWodELUSB',
    'WdZ (Honeyburger Static Split) Raidplan': 'https://raidplan.io/plan/ZSaq60muZdIfJWdZ',
    'Fixed (3CJ) Raidplan': 'https://raidplan.io/plan/KXVlSGwV3zqON3CJ'
  },
  strats: toxicStrat.strats
};

export const m11sStrats: Strat[] = [hectorStrat, usbWdzStrat, toxicStrat];

export const m11sFightConfig: FightConfig = {
  fightKey: 'm11s',
  title: 'AAC Heavyweight M3 (Savage)',
  abbreviatedTitle: 'M11S',
  subtitle: 'M11S Patch 7.4',
  cheatsheetTitle: 'M11S Cheatsheet',
  strats: {
    hector: {
      label: 'Hector (Toxic/No Buddies)',
      defaults: {
        arenasplit: 'hector',
        ecliptic: 'toxic'
      },
      badges: [
        {
          text: 'NA',
          class: 'na-badge'
        }
      ]
    },
    usbwdz: {
      label: 'USB + WdZ + Fixed',
      defaults: {
        arenasplit: 'wdz',
        ecliptic: 'fixed'
      },
      badges: [
        {
          text: 'EU',
          class: 'eu-badge'
        }
      ]
    },
    toxic: {
      label: 'Toxic Friends',
      defaults: {
        arenasplit: 'toxic',
        ecliptic: 'toxic'
      }
    }
  },
  toggles: [
    {
      key: 'arenasplit',
      label: 'Arena Split',
      defaultValue: 'toxic',
      options: [
        {
          value: 'toxic',
          label: 'Toxic'
        },
        {
          value: 'nobuddies',
          label: 'Kindred No Buddies',
          url: {
            name: 'kindred flatliner raidplan (slides 1-2, 7-18)',
            url: 'https://raidplan.io/plan/hvbysrfwvrc55ahz'
          }
        },
        {
          value: 'hector',
          label: 'Hector No Buddies',
          url: {
            name: 'Video by Hector Hectorson',
            url: 'https://www.youtube.com/watch?v=w1uuwzhyf5A'
          }
        },
        {
          value: 'wdz',
          label: 'Honeyburger (WdZ)',
          url: {
            name: 'Static Arena Split | Honeyburger Raidplan',
            url: 'https://raidplan.io/plan/ZSaq60muZdIfJWdZ'
          }
        }
      ]
    },
    {
      key: 'ecliptic',
      label: 'Ecliptic',
      defaultValue: 'toxic',
      options: [
        {
          value: 'toxic',
          label: 'Toxic'
        },
        {
          value: 'uptime',
          label: 'Uptime (IEH)',
          url: {
            name: 'Uptime Ecliptic Raidplan',
            url: 'https://raidplan.io/plan/pz_pT6oL7EgrTIEH'
          }
        },
        {
          value: 'fixed',
          label: 'Fixed (3CJ)',
          url: {
            name: 'M11S Fixed Stampede Raidplan',
            url: 'https://raidplan.io/plan/KXVlSGwV3zqON3CJ'
          }
        }
      ]
    }
  ],
  defaultStratName: 'hector',
  timeline: [],
  posterLayout: {
    cols: 16,
    rows: 9,
    title: 'M11S Cheatsheet',
    subtitle: 'AAC Heavyweight M3 (Savage)',
    sections: [
      {
        title: 'Raw Steel',
        col: 1, row: 1, w: 3, h: 4,
        accentColor: '#e74c3c',
        arena: // Grid: 4w × 6h
          diagram('square', [
            player('MT', 47, 7),
            player('OT', 52, 7),
            player('R1', 8, 35),
            player('M1', 37, 40),
            player('M2', 63, 40),
            player('R2', 92, 35),
            player('H1', 27, 57),
            player('H2', 71, 58),
            player('MT', 32, 87),
            player('OT', 64, 87),
            player('H1', 46, 118),
            player('H2', 50, 119),
            player('M1', 44, 124),
            player('M2', 52, 121),
            player('R1', 51, 126),
            player('R2', 46, 126),
            boss(49, 26),
            boss(48, 102),
            text('Axe', 8, 5, { fontSize: 6 }),
            text('Scythe', 11, 76, { fontSize: 6 }),
          ], { bgColor: 'transparent', scale: 0.75 })
      },
      {
        title: 'Assault Evolved',
        col: 4, row: 1, w: 5, h: 4,
        accentColor: '#e67e22',
        arena: diagram('square', [
          player('MT', 81, 43),
          player('R1', 65, 39),
          player('OT', 50, 72),
          player('R2', 86, 58),
          player('H1', 51, 42),
          player('H2', 80, 73),
          player('M1', 45, 56),
          player('M2', 65, 78),
          boss(65, 58, 45),
          text('Axe: Stack', 36, 12, { fontSize: 6 }),
          text('Sword: G1 Left, G2 Right', 56, 19, { fontSize: 6 }),
          text('Scythe (Boss Relative)', 53, 26, { fontSize: 6 }),
        ], { bgColor: 'transparent' })
      },
      {
        title: 'Dance of Domination',
        col: 9, row: 1, w: 4, h: 4,
        accentColor: '#e91e63',
        arena: diagram('square', [
          ...SQUARE_MARKERS,
          boss(50, 50),
          aoeRect(50, 8, 1206, 20, { opacity: 0.75 }),
          aoeRect(50, 92, 120, 20, { opacity: 0.75 }),
          aoeRect(50, 50, 200, 28, { rotation: 45, opacity: 0.75 }),
          aoeRect(50, 50, 200, 28, { rotation: 135, opacity: 0.75 }),
          aoeRect(50, 50, 120, 30, { opacity: 0.75 }),
          aoeRect(8, 50, 120, 30, { rotation: 90, opacity: 0.75 }),
          player('MT', 45, 79),
          player('M1', 56, 79),
          player('OT', 45, 21),
          player('M2', 55, 21),
          player('H1', 95, 66),
          player('R1', 95, 77),
          text('New North', 15, 50, { fontSize: 6 }),
          player('H2', 95, 34),
          player('R2', 95, 24),
        ], { bgColor: 'transparent' })
      },
      {
        title: 'Trophy Weapons',
        col: 13, row: 1, w: 4, h: 4,
        accentColor: '#f39c12',
        arena: diagram('square', [
          ...SQUARE_MARKERS,
          boss(50, 50),
          player('MT', 60, 12),
          player('R1', 40, 12),
          player('H1', 12, 40),
          player('M1', 12, 60),
          player('R2', 88, 40),
          player('H2', 88, 60),
          player('M2', 60, 88),
          player('OT', 40, 88),
        ])
      },
      {
        title: 'Meteorain',
        col: 1, row: 5, w: 4, h: 5,
        accentColor: '#3498db',
        arena: diagram('square', [
          player('MT', 38, 42),
          player('OT', 30, 49),
          player('M1', 66, 44),
          player('M2', 32, 76),
          player('H1', 25, 35),
          player('H2', 23, 24),
          player('R1', 15, 30),
          player('R2', 13, 20),
          player('H2', 126, 86),
          player('H1', 134, 44),
          player('MT', 150, 29),
          player('OT', 150, 87),
          player('M1', 176, 36),
          player('M2', 184, 43),
          player('R1', 184, 27),
          player('R2', 192, 33),
          boss(50, 62),
          boss(150, 62),
          aoeCircle(135, 77, 5, { color: '#5f4f02', opacity: 1 }),
          aoeCircle(167, 52, 5, { color: '#5f4f02', opacity: 1 }),
          text('1st set: Melees', 50, 110, { fontSize: 8 }),
          text('2nd set: Healers', 150, 110, { fontSize: 8 }),
          text('3rd Set: Ranged', 50, 240, { fontSize: 8 }),
          player('OT', 50, 200),
          aoeCircle(34, 190, 5, { color: '#5f4f02', opacity: 1 }),
          boss(50, 175),
          aoeCircle(24, 201, 5, { color: '#5f4f02', opacity: 1 }),
          aoeCircle(35, 158, 5, { color: '#5f4f02', opacity: 1 }),
          player('M1', 22, 153),
          player('M2', 30, 145),
          player('H1', 14, 144),
          player('H2', 22, 136),
          player('R1', 13, 213),
          player('R2', 68, 157),
          player('MT', 50, 140),
        ], { bgColor: 'transparent', scale: 0.5 })

      },
      {
        title: 'Arena Split',
        col: 5, row: 5, w: 6, h: 5,
        accentColor: '#1abc9c',
        arena: diagram('square', [...SQUARE_MARKERS, boss(50, 50)])
      },
      {
        title: 'Ecliptic Stampede',
        col: 11, row: 5, w: 6, h: 5,
        accentColor: '#8e44ad',
        arena: diagram('square', [...SQUARE_MARKERS, boss(50, 50)])
      }
    ]
  }
};
