import type { FightConfig, PhaseStrats, Strat } from '$lib/types';
import { teaPosterLayout } from './posterData';

const setup: PhaseStrats[] = [];

const p1: PhaseStrats[] = [
	{
		phaseName: 'Cascade + Tornadoes',
		tag: 'p1',
		mechs: [
			{
				mechanic: 'Cascade',
				description: 'Open space is new North',
				imageUrl: './tea/living-liquid-0.webp'
			},
			{
				mechanic: 'Split',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description: 'Take Liquid SW, stand next to South tornado',
						imageUrl: './tea/living-liquid-1.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description: 'Take Hand opposite Liquid, slightly offset from Center',
						imageUrl: './tea/living-liquid-1.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description: 'Stand between East and South tornadoes',
						imageUrl: './tea/living-liquid-1.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description: 'Stand close to North',
						imageUrl: './tea/living-liquid-1.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description: 'Hit either Liquid or Hand',
						imageUrl: './tea/living-liquid-1.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description: 'Hit either Liquid or Hand',
						imageUrl: './tea/living-liquid-1.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description: 'Bait West tornado, point protean North',
						imageUrl: './tea/living-liquid-1.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description: 'Bait East tornado, point protean North',
						imageUrl: './tea/living-liquid-1.webp'
					}
				]
			},
			{
				mechanic: 'Proteans',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description: `Provoke Hand and Invuln\nBait protean from South tornado\nArm's Length if not dodging`,
						imageUrl: './tea/living-liquid-2.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description: 'Stand to the side of bosses to avoid cleave',
						imageUrl: './tea/living-liquid-2.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description: 'Stand between East and South tornadoes',
						imageUrl: './tea/living-liquid-2.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description: 'Stand close to North',
						imageUrl: './tea/living-liquid-2.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description: 'Hit either Liquid or Hand',
						imageUrl: './tea/living-liquid-2.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description: 'Hit either Liquid or Hand',
						imageUrl: './tea/living-liquid-2.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description: 'Bait West protean, step out, then step back in',
						imageUrl: './tea/living-liquid-2.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description: 'Bait East protean, step out, then step back in',
						imageUrl: './tea/living-liquid-2.webp'
					}
				]
			}
		]
	},
	{
		phaseName: 'Dolls',
		tag: 'p1',
		mechs: [
			{
				mechanic: 'Doll Spawn',
				description: 'Dolls always spawn slightly CCW of cardinals',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description: 'Take Liquid SW, stand next to South tornado',
						imageUrl: './tea/living-liquid-3.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description: 'Take Hand opposite Liquid, slightly offset from Center',
						imageUrl: './tea/living-liquid-3.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description: 'Stand between East and South tornadoes',
						imageUrl: './tea/living-liquid-3.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description: 'Stand close to North',
						imageUrl: './tea/living-liquid-3.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description:
							'Take doll in Southwest quadrant\nStand directly on doll to avoid bait issues',
						imageUrl: './tea/living-liquid-3.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description:
							'Take doll in Southeast quadrant\nStand directly on doll to avoid bait issues',
						imageUrl: './tea/living-liquid-3.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description: 'Take doll in Northwest quadrant',
						imageUrl: './tea/living-liquid-3.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description: 'Take doll in Northeast quadrant',
						imageUrl: './tea/living-liquid-3.webp'
					}
				]
			},
			{
				mechanic: 'First Feed',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description: 'Avoid orbs, bring bosses to middle',
						imageUrl: './tea/living-liquid-4.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description: 'Avoid orbs, bring bosses to middle',
						imageUrl: './tea/living-liquid-4.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description: 'Move Center to heal',
						imageUrl: './tea/living-liquid-4.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description: 'Move Center to heal',
						imageUrl: './tea/living-liquid-4.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description: 'Feed after first Exhaust\nAvoid orbs',
						imageUrl: './tea/living-liquid-4.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description: 'Feed after first Exhaust\nAvoid orbs',
						imageUrl: './tea/living-liquid-4.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description: 'Move near Center for heals, wait to feed',
						imageUrl: './tea/living-liquid-4.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description: 'Move near Center for heals, wait to feed',
						imageUrl: './tea/living-liquid-4.webp'
					}
				]
			},
			{
				mechanic: 'Second Feed',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description: 'Point Liquid Southeast and take cleave',
						imageUrl: './tea/living-liquid-6.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description: 'Point Hand Southwest and take cleave',
						imageUrl: './tea/living-liquid-6.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description: 'Stand North-ish to avoid cleaves',
						imageUrl: './tea/living-liquid-6.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description: 'Stand North-ish to avoid cleaves',
						imageUrl: './tea/living-liquid-6.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description: 'Stand North-ish to avoid cleaves',
						imageUrl: './tea/living-liquid-6.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description: 'Stand North-ish to avoid cleaves',
						imageUrl: './tea/living-liquid-6.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description: 'Feed after second Exhaust\nMake sure to avoid cleaves',
						imageUrl: './tea/living-liquid-6.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description: 'Feed after second Exhaust\nMake sure to avoid cleaves',
						imageUrl: './tea/living-liquid-6.webp'
					}
				]
			}
		]
	},
	{
		phaseName: 'Protean 1',
		tag: 'p1',
		mechs: [
			{
				mechanic: 'N/S Bait',
				description: 'Tanks South, everyone else North',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description: 'Bait boss protean South',
						imageUrl: './tea/living-liquid-7.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description: 'Bait boss protean South',
						imageUrl: './tea/living-liquid-7.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description: 'Bait boss protean North',
						imageUrl: './tea/living-liquid-7.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description: 'Bait boss protean North',
						imageUrl: './tea/living-liquid-7.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description: 'Bait boss protean North',
						imageUrl: './tea/living-liquid-7.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description: 'Bait boss protean North',
						imageUrl: './tea/living-liquid-7.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description: 'Bait boss protean North',
						imageUrl: './tea/living-liquid-7.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description: 'Bait boss protean North',
						imageUrl: './tea/living-liquid-7.webp'
					}
				]
			},
			{
				mechanic: 'Melee Baits',
				description: 'Melees close to bait proteans, Ranged far to bait puddles',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description: 'Bait boss protean Southwest',
						imageUrl: './tea/living-liquid-8.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description: 'Bait boss protean Southeast',
						imageUrl: './tea/living-liquid-8.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description: 'Move out and Northeast to bait puddle',
						imageUrl: './tea/living-liquid-8.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description: 'Move out and Northwest to bait puddle',
						imageUrl: './tea/living-liquid-8.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description: 'Bait boss protean West',
						imageUrl: './tea/living-liquid-8.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description: 'Bait boss protean East',
						imageUrl: './tea/living-liquid-8.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description: 'Move out and Northwest to bait puddle',
						imageUrl: './tea/living-liquid-8.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description: 'Move out and Northeast to bait puddle',
						imageUrl: './tea/living-liquid-8.webp'
					}
				]
			},
			{
				mechanic: 'Ranged Baits',
				description: 'Ranged close to bait proteans, Melees max melee to avoid baiting',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description: 'Stand max melee Southwest',
						imageUrl: './tea/living-liquid-9.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description: 'Stand max melee Southeast',
						imageUrl: './tea/living-liquid-9.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description: 'Bait boss protean Northeast',
						imageUrl: './tea/living-liquid-9.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description: 'Bait boss protean Northwest',
						imageUrl: './tea/living-liquid-9.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description: 'Stand max melee Southwest',
						imageUrl: './tea/living-liquid-9.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description: 'Stand max melee Southeast',
						imageUrl: './tea/living-liquid-9.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description: 'Bait boss protean West',
						imageUrl: './tea/living-liquid-9.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description: 'Bait boss protean East',
						imageUrl: './tea/living-liquid-9.webp'
					}
				]
			},
			{
				mechanic: 'Drainage',
				description:
					'Party North, tanks slightly separated to avoid clipping with AoEs',
				imageUrl: './tea/living-liquid-10.webp'
			}
		]
	},
	{
		phaseName: 'Protean 2',
		tag: 'p1',
		mechs: [
			{
				mechanic: 'N/S Bait',
				description:
					'MT + OT + Regen Healer + Caster N, Shield Healer + Phys Ranged + Melees S',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description: 'Bait boss protean North',
						imageUrl: './tea/living-liquid-12.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description: 'Bait boss protean North',
						imageUrl: './tea/living-liquid-12.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description: 'Bait boss protean North',
						imageUrl: './tea/living-liquid-12.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description: 'Bait boss protean South',
						imageUrl: './tea/living-liquid-12.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description: 'Bait boss protean South',
						imageUrl: './tea/living-liquid-12.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description: 'Bait boss protean South',
						imageUrl: './tea/living-liquid-12.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description: 'Bait boss protean North',
						imageUrl: './tea/living-liquid-12.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description: 'Bait boss protean South',
						imageUrl: './tea/living-liquid-12.webp'
					}
				]
			},
			{
				mechanic: 'Melee Boss Baits',
				description:
					'Melees close to boss to bait boss proteans, Ranged bait puddles + tornado proteans',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description: 'Bait boss protean Northeast',
						imageUrl: './tea/living-liquid-14.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description: 'Bait boss protean West',
						imageUrl: './tea/living-liquid-14.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description:
							'Move Southwest and bait puddles + South tornado protean towards West',
						imageUrl: './tea/living-liquid-14.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description:
							'Move Northwest and bait puddles + West tornado protean towards arena North',
						imageUrl: './tea/living-liquid-14.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description: 'Bait boss protean South',
						imageUrl: './tea/living-liquid-14.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description: 'Bait boss protean East',
						imageUrl: './tea/living-liquid-14.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description:
							'Move Northwest and bait puddles + West tornado protean towards arena North',
						imageUrl: './tea/living-liquid-14.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description:
							'Move Southeast and bait puddles + East tornado protean towards South',
						imageUrl: './tea/living-liquid-14.webp'
					}
				]
			},
			{
				mechanic: 'Ranged Boss Baits',
				description:
					'Ranged close to bait proteans, Melees max melee to avoid baiting',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description: 'Stand max melee Northeast',
						imageUrl: './tea/living-liquid-15.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description:
							'Stand max melee Southwest, get ready to bait West tornado protean',
						imageUrl: './tea/living-liquid-15.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description: 'Bait boss protean South',
						imageUrl: './tea/living-liquid-15.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description: 'Bait boss protean Northwest',
						imageUrl: './tea/living-liquid-15.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description:
							'Stand max melee Southeast, get ready to bait South tornado protean',
						imageUrl: './tea/living-liquid-15.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description:
							'Stand max melee Northeast, get ready to bait East tornado protean',
						imageUrl: './tea/living-liquid-15.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description: 'Bait boss protean West',
						imageUrl: './tea/living-liquid-15.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description: 'Bait boss protean East',
						imageUrl: './tea/living-liquid-15.webp'
					}
				]
			},
			{
				mechanic: 'Melee Tornado Baits + Hand of Parting',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description: `Pull Liquid Northeast, don't get hit by M2's protean`,
						imageUrl: './tea/living-liquid-16.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description:
							'Pull Hand Southwest, bait West tornado protean towards South',
						imageUrl: './tea/living-liquid-16.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description: 'Hang out near center',
						imageUrl: './tea/living-liquid-16.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description: 'Hang out near center',
						imageUrl: './tea/living-liquid-16.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description:
							'Stand Southeast, bait South tornado protean towards East',
						imageUrl: './tea/living-liquid-16.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description:
							'Stand Northeast, bait East tornado protean towards North',
						imageUrl: './tea/living-liquid-16.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description: 'Hang out near center',
						imageUrl: './tea/living-liquid-16.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description: 'Hang out near center',
						imageUrl: './tea/living-liquid-16.webp'
					}
				]
			}
		]
	}
];

const intermission1: PhaseStrats[] = [
	{
		phaseName: 'Start',
		tag: 'i1',
		mechs: [
			{
				mechanic: 'Starting Spots',
				description: '1256 between W and NE, 3478 between E and SW',
				imageUrl: './tea/limit-cut-start.webp'
			},
			{
				mechanic: 'First Explosions',
				description:
					'1234 on inner ring, 5678 on outer ring\nLower number in front',
				imageUrl: './tea/limit-cut-4.webp'
			}
		]
	},
	{
		phaseName: 'Limit Cut',
		tag: 'i1',
		mechs: [
			{
				mechanic: '1 + 2',
				description:
					'1 gets slash as 4th explosion goes off\n2 gets dash as Center explosion goes off\n5/6 swap places with 1/2\n\u26A03/4 make sure to wait',
				imageUrl: './tea/limit-cut-6.webp'
			},
			{
				mechanic: '3 + 4',
				description:
					'3 + 4 get slash + dash\n7/8 swap places with 3/4\n1256 keep moving',
				imageUrl: './tea/limit-cut-7.webp'
			},
			{
				mechanic: '5 + 6',
				description: '5 + 6 get slash + dash\n3478 keep moving',
				imageUrl: './tea/limit-cut-9.webp'
			},
			{
				mechanic: '7 + 8',
				description:
					'7 + 8 get slash + dash\nMove into center after final center explosion goes off\nMake sure not to get hit by 7 or 8 mechanics',
				imageUrl: './tea/limit-cut-11.webp'
			}
		]
	}
];

const p2: PhaseStrats[] = [
	{
		phaseName: 'Start + Chakrams + First Pass',
		tag: 'p2',
		mechs: [
			{
				mechanic: 'Starting Spots',
				description: 'Clock spots, stand on the green ring',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description:
							'\u26A0Provoke BJ and center boss before clock\nNorth',
						imageUrl: './tea/bjcc-1.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description:
							'\u26A0Provoke CC and center boss before clock\nSouth',
						imageUrl: './tea/bjcc-1.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description: 'East',
						imageUrl: './tea/bjcc-1.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description: 'West',
						imageUrl: './tea/bjcc-1.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description: 'Northeast',
						imageUrl: './tea/bjcc-1.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description: 'Northwest',
						imageUrl: './tea/bjcc-1.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description: 'Southeast',
						imageUrl: './tea/bjcc-1.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description: 'Southwest',
						imageUrl: './tea/bjcc-1.webp'
					}
				]
			},
			{
				mechanic: 'Chakrams',
				description: `2 Chakrams outside arena opposite each other\nMove to edge of arena to bait explosions\n\u26A0Don't be in the path of the chakrams going through mid\nMove back into center, don't touch Nisis`,
				imageUrl: './tea/bjcc-6.webp'
			},
			{
				mechanic: 'First Nisi Pass',
				description:
					'After Photon, DPS rotate CCW to pass Nisi to/from Support',
				imageUrl: './tea/bjcc-8.webp'
			}
		]
	},
	{
		phaseName: 'Water/Lightning 1',
		tag: 'p2',
		mechs: [
			{
				mechanic: 'Setup',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description: 'Tank BJ North near A marker',
						imageUrl: './tea/bjcc-9.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description:
							'Take CC South and point South to bait Spin Crusher',
						imageUrl: './tea/bjcc-9.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description:
							'If Water: stand on D marker\nIf no Water: stand N or E of Water',
						imageUrl: './tea/bjcc-9.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description:
							'If Water: stand on D marker\nIf no Water: stand N or E of Water',
						imageUrl: './tea/bjcc-9.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description:
							'If Lightning: stand next to BJ Tank (MT)\nIf no Lightning: stand near mid and keep hitting BJ',
						imageUrl: './tea/bjcc-9.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description:
							'If Lightning: stand next to BJ Tank (MT)\nIf no Lightning: stand near mid and keep hitting BJ',
						imageUrl: './tea/bjcc-9.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description:
							'If Lightning: stand next to BJ Tank (MT)\nIf no Lightning: stand SE of Water stack on D',
						imageUrl: './tea/bjcc-9.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description:
							'If Lightning: loop around CW behind water stack and stand next to MT\nIf no Lightning: stand South of Water stack on D',
						imageUrl: './tea/bjcc-9.webp'
					}
				]
			},
			{
				mechanic: 'Resolution',
				description:
					'Water + Lightning debuffs get transferred to a random person in that stack\nMake sure to avoid car crashes',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description: 'Keep tanking BJ on A',
						imageUrl: './tea/bjcc-11.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description: 'Stay S, get ready to bait mines',
						imageUrl: './tea/bjcc-11.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description: 'Move mid to prepare for Enumerations',
						imageUrl: './tea/bjcc-11.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description: 'Move mid to prepare for Enumerations',
						imageUrl: './tea/bjcc-11.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description: 'Move mid to prepare for Enumerations',
						imageUrl: './tea/bjcc-11.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description: 'Move mid to prepare for Enumerations',
						imageUrl: './tea/bjcc-11.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description: 'Move mid to prepare for Enumerations',
						imageUrl: './tea/bjcc-11.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description:
							'Move South to prepare to bait mines with OT',
						imageUrl: './tea/bjcc-11.webp'
					}
				]
			}
		]
	},
	{
		phaseName: 'Enumerations',
		tag: 'p2',
		mechs: [
			{
				mechanic: 'Missiles + Mine Baits',
				description:
					'BJ shoots missiles then mines at 2 furthest players (OT and Phys Ranged)',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description: 'Keep tanking BJ on A',
						imageUrl: './tea/bjcc-13.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description:
							'Start on South wall, West of Phys Ranged\nBait Missile puddle then step North to bait Mine',
						imageUrl: './tea/bjcc-13.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description: 'Preposition for Enumerations',
						imageUrl: './tea/bjcc-13.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description: 'Preposition for Enumerations',
						imageUrl: './tea/bjcc-13.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description: 'Preposition for Enumerations',
						imageUrl: './tea/bjcc-13.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description: 'Preposition for Enumerations',
						imageUrl: './tea/bjcc-13.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description: 'Preposition for Enumerations',
						imageUrl: './tea/bjcc-13.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description:
							'Start on South wall, East of OT\nBait Missile puddle then step North to bait Mine',
						imageUrl: './tea/bjcc-13.webp'
					}
				]
			},
			{
				mechanic: 'Enumerations + Mine Pops + Ice',
				description: 'Enums must have 3 players\nM1/Phys Ranged will flex',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description:
							'If Ice, drop near D to freeze Water\nPlace Ice, then try to recenter BJ\nStand still after for Nisi pass',
						imageUrl: './tea/bjcc-15.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description:
							'If Ice, drop near D to freeze Water\nPlace Ice, then pop mines\nStand still after for Nisi pass',
						imageUrl: './tea/bjcc-15.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description: 'East Enumeration',
						imageUrl: './tea/bjcc-15.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description: 'West Enumeration',
						imageUrl: './tea/bjcc-15.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description:
							'West Enumeration\nIf both Melees or both Ranged get enums, swap with Phys Ranged',
						imageUrl: './tea/bjcc-15.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description: 'West Enumeration',
						imageUrl: './tea/bjcc-15.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description: 'East Enumeration',
						imageUrl: './tea/bjcc-15.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description:
							'East Enumeration\nIf both Melees or both Ranged get enums, swap with M1',
						imageUrl: './tea/bjcc-15.webp'
					}
				]
			}
		]
	},
	{
		phaseName: 'Second Pass',
		tag: 'p2',
		mechs: [
			{
				mechanic: 'Second Nisi Pass',
				description: 'Same partners as First Pass\nDPS move',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description: 'Stay still for pass with M1',
						imageUrl: './tea/bjcc-18.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description:
							'Stay still after mine pop for pass with Phys Ranged',
						imageUrl: './tea/bjcc-18.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description: 'Stay still for pass with Caster',
						imageUrl: './tea/bjcc-18.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description: 'Stay still for pass with M2',
						imageUrl: './tea/bjcc-18.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description: 'Pass Nisi to MT (North)',
						imageUrl: './tea/bjcc-18.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description: 'Pass Nisi to H1 (West Mid)',
						imageUrl: './tea/bjcc-18.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description: 'Pass Nisi to H2 (East Mid)',
						imageUrl: './tea/bjcc-18.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description:
							'Pass Nisi to OT (South)\n\u26A0Wait for mine pop to avoid explosion',
						imageUrl: './tea/bjcc-18.webp'
					}
				]
			}
		]
	},
	{
		phaseName: 'Water/Lightning 2',
		tag: 'p2',
		mechs: [
			{
				mechanic: 'Setup',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description: 'Stay North to drop Lightning',
						imageUrl: './tea/bjcc-19.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description:
							'Tank CC slightly West of C/3\nBe ready to point CC mid for shield',
						imageUrl: './tea/bjcc-19.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description:
							'If Water: stand on B marker\nIf you had first Water: stand North with MT to pick up Lightning\nIf no Water: stand SW of B to take Water stack',
						imageUrl: './tea/bjcc-19.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description:
							'If Water: stand on B marker\nIf you had first Water: stand North with MT to pick up Lightning\nIf no Water: stand SW of B to take Water stack',
						imageUrl: './tea/bjcc-19.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description:
							'Stand near mid and keep hitting BJ\nKeep distance from BJ tank to avoid Lightning AoE',
						imageUrl: './tea/bjcc-19.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description:
							'Stand near mid and keep hitting BJ\nKeep distance from BJ tank to avoid Lightning AoE',
						imageUrl: './tea/bjcc-19.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description:
							'If Water: stand on B marker\nIf no Water: stand South of B to take Water stack',
						imageUrl: './tea/bjcc-19.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description:
							'If Water: stand on B marker\nIf no Water: stand East of B to take Water stack',
						imageUrl: './tea/bjcc-19.webp'
					}
				]
			},
			{
				mechanic: 'Resolution',
				description:
					'Water + Lightning debuffs get transferred to a random person in that stack\nMake sure to avoid car crashes',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description: 'Keep tanking BJ on A',
						imageUrl: './tea/bjcc-20.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description:
							'\u26A0Point CC at Ranged for Plasma Shield',
						imageUrl: './tea/bjcc-20.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description:
							'Move mid to prepare for Third Pass\nIf Lightning, end up on North side of center ring\nIf Water, end up on South side of center ring',
						imageUrl: './tea/bjcc-20.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description:
							'Move mid to prepare for Third Pass\nIf Lightning, end up on North side of center ring\nIf Water, end up on South side of center ring',
						imageUrl: './tea/bjcc-20.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description: 'Move mid to prepare for Third Pass',
						imageUrl: './tea/bjcc-20.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description: 'Move mid to prepare for Third Pass',
						imageUrl: './tea/bjcc-20.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description: 'Move mid to prepare for Third Pass',
						imageUrl: './tea/bjcc-20.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description:
							'Move mid to prepare for Third Pass\nLoop around near wall since you have more movement',
						imageUrl: './tea/bjcc-20.webp'
					}
				]
			}
		]
	},
	{
		phaseName: 'Shield + Third Pass',
		tag: 'p2',
		mechs: [
			{
				mechanic: 'Flarethrower + Shield',
				description:
					'Make sure to identify the Nisi color you need by the !! debuff',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description:
							'Bait Flarethrower cone so that it hits the Liquid Rage\nMake sure not to clip the Ranged',
						imageUrl: './tea/bjcc-22.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description:
							'Make sure CC is pointed at Ranged\nHit the shield from the front until it pops',
						imageUrl: './tea/bjcc-22.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description:
							'Chill in your lineup spot on the North or South side of center ring',
						imageUrl: './tea/bjcc-22.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description:
							'Chill in your lineup spot on the North or South side of center ring',
						imageUrl: './tea/bjcc-22.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description:
							'Keep hitting BJ and get ready for Third Pass',
						imageUrl: './tea/bjcc-22.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description:
							'Keep hitting BJ and get ready for Third Pass',
						imageUrl: './tea/bjcc-22.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description:
							'Hit shield from the front until it pops\nGet ready for Third Pass',
						imageUrl: './tea/bjcc-22.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description:
							'Hit shield from the front until it pops\nGet ready for Third Pass',
						imageUrl: './tea/bjcc-22.webp'
					}
				]
			},
			{
				mechanic: 'Third Pass',
				description:
					'Make sure to identify the Nisi color you need by the !! debuff',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description:
							'Stand in North lineup spot and wait for pass',
						imageUrl: './tea/bjcc-23.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description:
							'Stand in South lineup spot and wait for pass',
						imageUrl: './tea/bjcc-23.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description:
							'Stand in your lineup spot on the North or South side of center ring and wait for pass',
						imageUrl: './tea/bjcc-23.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description:
							'Stand in your lineup spot on the North or South side of center ring and wait for pass',
						imageUrl: './tea/bjcc-23.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description:
							'Pass with the support player who has the color you need\n\u26A0Only use the West half for movement',
						imageUrl: './tea/bjcc-23.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description:
							'Pass with the support player who has the color you need\n\u26A0Only use the West half for movement',
						imageUrl: './tea/bjcc-23.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description:
							'Pass with the support player who has the color you need\n\u26A0Only use the East half for movement',
						imageUrl: './tea/bjcc-23.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description:
							'Pass with the support player who has the color you need\n\u26A0Only use the East half for movement',
						imageUrl: './tea/bjcc-23.webp'
					}
				]
			}
		]
	},
	{
		phaseName: 'Water/Lightning 3',
		tag: 'p2',
		mechs: [
			{
				mechanic: 'Setup',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description:
							'Stay North\nBe ready to join Water stack on B if <3 people',
						imageUrl: './tea/bjcc-25.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description: 'Stand SW to take Lightning with healer',
						imageUrl: './tea/bjcc-25.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description:
							'If Lightning: stack with OT SW or second Water SE\nIf you had second Water: Stand SE\nIf Water: stand on B',
						imageUrl: './tea/bjcc-25.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description:
							'If Lightning: stack with OT SW or second Water SE\nIf you had second Water: Stand SE\nIf Water: stand on B',
						imageUrl: './tea/bjcc-25.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description: 'Stand West of B to take Water stack',
						imageUrl: './tea/bjcc-25.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description:
							'Stand near mid and keep hitting BJ\nYou can join Water stack if you want',
						imageUrl: './tea/bjcc-25.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description:
							'If Water: stand on B marker\nIf you had second Water: Stand SE\nIf no Water: stand South of B to take Water stack',
						imageUrl: './tea/bjcc-25.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description:
							'If Water: stand on B marker\nIf you had second Water: Stand SE\nIf no Water: stand South of B to take Water stack',
						imageUrl: './tea/bjcc-25.webp'
					}
				]
			},
			{
				mechanic: 'Resolution',
				description:
					'Move towards West to get ready for Gavel (BPOG)\n\u26A0Make sure to avoid car crashes',
				imageUrl: './tea/bjcc-26.webp'
			}
		]
	},
	{
		phaseName: 'Gavel (BPOG)',
		tag: 'p2',
		mechs: [
			{
				mechanic: 'BPOG',
				description:
					'Line up East of the Ice\nBlue Purple Orange Green\n\u03B1 \u03B3 \u03B2 \u03B4',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description: '',
						imageUrl: './tea/bjcc-28.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description:
							'\u26A0Keep CC behind the ice until Propeller Wind cast',
						imageUrl: './tea/bjcc-28.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description: '',
						imageUrl: './tea/bjcc-28.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description: '',
						imageUrl: './tea/bjcc-28.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description: '',
						imageUrl: './tea/bjcc-28.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description: '',
						imageUrl: './tea/bjcc-28.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description: '',
						imageUrl: './tea/bjcc-28.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description: '',
						imageUrl: './tea/bjcc-28.webp'
					}
				]
			}
		]
	},
	{
		phaseName: 'Photon + Punch + Super Jump',
		tag: 'p2',
		mechs: [
			{
				mechanic: 'Photon + Punch',
				description: 'Make sure boss HPs are close to equal',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description:
							'Stack bosses together, then stand on top of each other near wall for tankbuster',
						imageUrl: './tea/bjcc-30.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description:
							'Stack bosses together, then stand on top of each other near wall for tankbuster',
						imageUrl: './tea/bjcc-30.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description: '',
						imageUrl: './tea/bjcc-30.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description: '',
						imageUrl: './tea/bjcc-30.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description: '',
						imageUrl: './tea/bjcc-30.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description: '',
						imageUrl: './tea/bjcc-30.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description: '',
						imageUrl: './tea/bjcc-30.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description:
							'Get ready to move towards East wall to bait Super Jump',
						imageUrl: './tea/bjcc-30.webp'
					}
				]
			},
			{
				mechanic: 'Super Jump',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description:
							'Stay on West side of arena until Apocalyptic Ray finishes',
						imageUrl: './tea/bjcc-33.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description:
							'Stay on West side of arena until Apocalyptic Ray finishes',
						imageUrl: './tea/bjcc-33.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description:
							'Stay on West side of arena until Apocalyptic Ray finishes',
						imageUrl: './tea/bjcc-33.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description:
							'Stay on West side of arena until Apocalyptic Ray finishes',
						imageUrl: './tea/bjcc-33.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description:
							'Stay on West side of arena until Apocalyptic Ray finishes',
						imageUrl: './tea/bjcc-33.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description:
							'Stay on West side of arena until Apocalyptic Ray finishes',
						imageUrl: './tea/bjcc-33.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description:
							'Stay on West side of arena until Apocalyptic Ray finishes',
						imageUrl: './tea/bjcc-33.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description:
							'Bait Super Jump against East wall\nMove slightly North or South after jump to avoid Apocalyptic Ray',
						imageUrl: './tea/bjcc-33.webp'
					}
				]
			}
		]
	}
];

const intermission2: PhaseStrats[] = [
	{
		phaseName: 'Temporal Stasis',
		tag: 'i2',
		mechs: [
			{
				mechanic: 'Temporal Stasis (CC East)',
				description:
					'{{xmas-tether}} baits CC (east), No Debuff baits BJ (west)\n2x {{aggravated-assault}} at wall on BJ side\n{{blue-tether}} FFA (BJ side = wall, CC side = marker)',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description: '{{xmas-tether}} North of E boss\nNo debuff: North of W boss\n{{aggravated-assault}} Wall on BJ side\n{{blue-tether}} FFA (BJ side = wall, CC side = marker)',
						imageUrl: './tea/tea-p3-1-0.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description: '{{xmas-tether}} North of E boss\nNo debuff: North of W boss\n{{aggravated-assault}} Wall on BJ side\n{{blue-tether}} FFA (BJ side = wall, CC side = marker)',
						imageUrl: './tea/tea-p3-1-0.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description: '{{xmas-tether}} North of E boss\nNo debuff: North of W boss\n{{aggravated-assault}} Wall on BJ side\n{{blue-tether}} FFA (BJ side = wall, CC side = marker)',
						imageUrl: './tea/tea-p3-1-0.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description: '{{xmas-tether}} North of E boss\nNo debuff: North of W boss\n{{aggravated-assault}} Wall on BJ side\n{{blue-tether}} FFA (BJ side = wall, CC side = marker)',
						imageUrl: './tea/tea-p3-1-0.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description: '{{xmas-tether}} South of E boss\nNo debuff: South of W boss\n{{aggravated-assault}} Wall on BJ side\n{{blue-tether}} FFA (BJ side = wall, CC side = marker)',
						imageUrl: './tea/tea-p3-1-0.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description: '{{xmas-tether}} South of E boss\nNo debuff: South of W boss\n{{aggravated-assault}} Wall on BJ side\n{{blue-tether}} FFA (BJ side = wall, CC side = marker)',
						imageUrl: './tea/tea-p3-1-0.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description: '{{xmas-tether}} South of E boss\nNo debuff: South of W boss\n{{aggravated-assault}} Wall on BJ side\n{{blue-tether}} FFA (BJ side = wall, CC side = marker)',
						imageUrl: './tea/tea-p3-1-0.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description: '{{xmas-tether}} South of E boss\nNo debuff: South of W boss\n{{aggravated-assault}} Wall on BJ side\n{{blue-tether}} FFA (BJ side = wall, CC side = marker)',
						imageUrl: './tea/tea-p3-1-0.webp'
					}
				]
			},
			{
				mechanic: 'Temporal Stasis (CC West)',
				description:
					'{{xmas-tether}} baits BJ (east), No Debuff baits CC (west)\n2x {{aggravated-assault}} at wall on BJ side\n{{blue-tether}} FFA (BJ side = wall, CC side = marker)',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description: '{{xmas-tether}} North of E boss\nNo debuff: North of W boss\n{{aggravated-assault}} Wall on BJ side\n{{blue-tether}} FFA (BJ side = wall, CC side = marker)',
						imageUrl: './tea/tea-p3-1-1.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description: '{{xmas-tether}} North of E boss\nNo debuff: North of W boss\n{{aggravated-assault}} Wall on BJ side\n{{blue-tether}} FFA (BJ side = wall, CC side = marker)',
						imageUrl: './tea/tea-p3-1-1.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description: '{{xmas-tether}} North of E boss\nNo debuff: North of W boss\n{{aggravated-assault}} Wall on BJ side\n{{blue-tether}} FFA (BJ side = wall, CC side = marker)',
						imageUrl: './tea/tea-p3-1-1.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description: '{{xmas-tether}} North of E boss\nNo debuff: North of W boss\n{{aggravated-assault}} Wall on BJ side\n{{blue-tether}} FFA (BJ side = wall, CC side = marker)',
						imageUrl: './tea/tea-p3-1-1.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description: '{{xmas-tether}} South of E boss\nNo debuff: South of W boss\n{{aggravated-assault}} Wall on BJ side\n{{blue-tether}} FFA (BJ side = wall, CC side = marker)',
						imageUrl: './tea/tea-p3-1-1.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description: '{{xmas-tether}} South of E boss\nNo debuff: South of W boss\n{{aggravated-assault}} Wall on BJ side\n{{blue-tether}} FFA (BJ side = wall, CC side = marker)',
						imageUrl: './tea/tea-p3-1-1.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description: '{{xmas-tether}} South of E boss\nNo debuff: South of W boss\n{{aggravated-assault}} Wall on BJ side\n{{blue-tether}} FFA (BJ side = wall, CC side = marker)',
						imageUrl: './tea/tea-p3-1-1.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description: '{{xmas-tether}} South of E boss\nNo debuff: South of W boss\n{{aggravated-assault}} Wall on BJ side\n{{blue-tether}} FFA (BJ side = wall, CC side = marker)',
						imageUrl: './tea/tea-p3-1-1.webp'
					}
				]
			}
		]
	},
	{
		phaseName: 'Inception',
		tag: 'i2',
		mechs: [
			{
				mechanic: 'Orbs Spawn',
				description:
					'Alex = True North\n4 random players tethered to Aetheroplasm Orbs\nTethered: opposite side of orb on red dot, cross tethers\nStart at N intercardinal, move down to E/W red dot if needed\nNon-tethered: go S away from Alex, place Judgement Crystals in box formation',
				imageUrl: './tea/tea-p3-1-2.webp'
			},
			{
				mechanic: 'Judgement Crystal Positions',
				description:
					'Non-tethered: place crystals in box formation, do NOT overlap AOEs\nWall players set, others align with wall (S can use 3 marker as mid)\n⚠️ Watch for incoming orbs before placing crystal',
				imageUrl: './tea/tea-p3-1-3.webp'
			},
			{
				mechanic: 'Orbs + Crystal Placements',
				description:
					'Crystal players: place crystal, run N toward Alex (avoid Tetrashatter prox dmg)\nOrb players: place orb, run N\nTanks can mit for next step',
				imageUrl: './tea/tea-p3-1-4.webp'
			},
			{
				mechanic: 'Flarethrower Bait',
				description:
					'All move to BJ side\nTanks soak Flarethrowers 1 and 2\nParty takes 3rd at NW/NE red dot',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description: 'Take 1st Flarethrower (far)',
						imageUrl: './tea/tea-p3-1-6.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description: 'Take 2nd Flarethrower (middle)',
						imageUrl: './tea/tea-p3-1-6.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description: 'Stay at NW/NE red dot for 3rd Flarethrower',
						imageUrl: './tea/tea-p3-1-6.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description: 'Stay at NW/NE red dot for 3rd Flarethrower',
						imageUrl: './tea/tea-p3-1-6.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description: 'Stay at NW/NE red dot for 3rd Flarethrower',
						imageUrl: './tea/tea-p3-1-6.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description: 'Stay at NW/NE red dot for 3rd Flarethrower',
						imageUrl: './tea/tea-p3-1-6.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description: 'Stay at NW/NE red dot for 3rd Flarethrower',
						imageUrl: './tea/tea-p3-1-6.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description: 'Stay at NW/NE red dot for 3rd Flarethrower',
						imageUrl: './tea/tea-p3-1-6.webp'
					}
				]
			},
			{
				mechanic: 'Debuffs Assigned',
				description:
					'1 Tank + 1 DPS: {{blue-tether}} (far tethers)\n1 DPS: {{shared-sentence}} (stack with tanks)\n2 DPS: {{aggravated-assault}} (don\'t take extra dmg, don\'t stack)\nWatch True Heart direction = relative N',
			},
			{
				mechanic: 'Heart Flies',
				description:
					'Heart flies to random spot → relative N for party split\nTanks + {{shared-sentence}} DPS go West/Left facing Heart\nEveryone else goes East/Right facing Heart',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description: 'West/Left facing Heart',
						imageUrl: './tea/tea-p3-1-8.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description: 'West/Left facing Heart',
						imageUrl: './tea/tea-p3-1-8.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description: 'East/Right facing Heart',
						imageUrl: './tea/tea-p3-1-8.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description: 'East/Right facing Heart',
						imageUrl: './tea/tea-p3-1-8.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description: 'If {{shared-sentence}} West/Left with tanks\nElse: East/Right facing Heart',
						imageUrl: './tea/tea-p3-1-8.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description: 'If {{shared-sentence}} West/Left with tanks\nElse: East/Right facing Heart',
						imageUrl: './tea/tea-p3-1-8.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description: 'If {{shared-sentence}} West/Left with tanks\nElse: East/Right facing Heart',
						imageUrl: './tea/tea-p3-1-8.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description: 'If {{shared-sentence}} West/Left with tanks\nElse: East/Right facing Heart',
						imageUrl: './tea/tea-p3-1-8.webp'
					}
				]
			},
			{
				mechanic: 'Alpha Sword + Super Jump Baits',
				description:
					'BJ is always True W here\nHealers bait Alpha Sword True N/S close to CC\n{{blue-tether}} DPS True West close to CC\nTank who invuln\'d first: edge opposite BJ, mit, bait Super Jump\nEveryone else: stack by 1 marker',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description:
							'If you invuln\'d first: wall opposite BJ, pop mit, bait Super Jump\nElse: stack between CC and jump tank',
						imageUrl: './tea/tea-p3-1-10.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description:
							'If you invuln\'d first: wall opposite BJ, pop mit, bait Super Jump\nElse: stack between CC and jump tank',
						imageUrl: './tea/tea-p3-1-10.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description: 'Close to CC, bait Alpha Sword True South',
						imageUrl: './tea/tea-p3-1-10.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description: 'Close to CC, bait Alpha Sword True North',
						imageUrl: './tea/tea-p3-1-10.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description:
							'If {{blue-tether}} close to CC, bait Alpha Sword True West\nElse: stack by 1 marker',
						imageUrl: './tea/tea-p3-1-10.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description:
							'If {{blue-tether}} close to CC, bait Alpha Sword True West\nElse: stack by 1 marker',
						imageUrl: './tea/tea-p3-1-10.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description:
							'If {{blue-tether}} close to CC, bait Alpha Sword True West\nElse: stack by 1 marker',
						imageUrl: './tea/tea-p3-1-10.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description:
							'If {{blue-tether}} close to CC, bait Alpha Sword True West\nElse: stack by 1 marker',
						imageUrl: './tea/tea-p3-1-10.webp'
					}
				]
			},
			{
				mechanic: 'Complete',
				description:
					'On Alpha Sword: non-baiting tank + DPS MOVE IN to avoid being clipped by Super Jump',
				imageUrl: './tea/tea-p3-1-11.webp'
			}
		]
	}
];

const p3: PhaseStrats[] = [
	{
		phaseName: 'Alexander Prime/Wormhole',
		tag: 'p3',
		mechs: [
			{
				mechanic: 'Initial Positions',
				description:
					'Group center to bait Chakrams\nBJ/CC spawn NW and NE (can swap)',
				imageUrl: './tea/tea-p3-2-0.webp'
			},
			{
				mechanic: 'Numbers Assigned',
				description:
					'Chakrams spawn North and on BJ\'s side (W/E)\nOdds (1/3/5/7) go West, Evens (2/4/6/8) go East\n3 and 4 move towards the southern half',
				imageUrl: './tea/tea-p3-2-2.webp'
			},
			{
				mechanic: 'Initial LC Positions',
				description:
					'1/2 on dots\n3/4 on dot (if Jump bait) or wall (if not)\n5-8 Northern half, away from center to avoid Chakram\nMOVE ALONG THE WALL',
				imageUrl: './tea/tea-p3-2-3.webp'
			},
			{
				mechanic: 'Wormholes Spawn',
				description:
					'Puddles spawn NW/SE-ish or NE/SW-ish.\nWalk ALONG THE WALL when entering/leaving puddles\nStand as close to wall as possible when soaking',
				imageUrl: './tea/tea-p3-2-4.webp'
			},
			{
				mechanic: '1 Slash + BJ Jump',
				description:
					'CC spawns behind 1, point cone out of arena\n5/6 step into puddles\nBJ jumps on 3 or 4',
				imageUrl: './tea/tea-p3-2-6.webp'
			},
			{
				mechanic: '2 Dash + Apoc Ray Bait',
				description:
					'2 gets dashed, KB resist\nBJ turns toward 1 or 2 and casts Apoc Ray\nJump baiter steps toward wall\nSTAY FACING THE WALL so CC isn\'t pointed at party',
				imageUrl: './tea/tea-p3-2-7.webp'
			},
			{
				mechanic: '3 Slash + 1st Soak',
				description:
					'CC spawns behind 3, point cone out of arena\n5/6 soak puddles then move to 1/2 original positions (NW/NE)\n7/8 step into puddles, 1/2 move towards puddles\n3/4 move along wall AWAY FROM ALEX to dodge Sacrament',
				imageUrl: './tea/tea-p3-2-9.webp'
			},
			{
				mechanic: '4 Dash',
				description:
					'2 gets dashed, KB resist, move away from Alex along wall to avoid Sacrament\n5/6 position on NW/NE red dots',
				imageUrl: './tea/tea-p3-2-10.webp'
			},
			{
				mechanic: 'Sacrament + 5 Slash + 2nd Soak',
				description:
					'CC spawns behind 5, point cone out of arena\n5/6 soak puddles then move to 3/4 original positions (SW/SE)\n1/2 get ready for soak',
				imageUrl: './tea/tea-p3-2-12.webp'
			},
			{
				mechanic: '6 Dash',
				description:
					'6 gets dashed, KB resist\n7 and 8 move SW and SE for final Slash+Dash\n1/2 move into puddles as Magic Vuln wears off',
				imageUrl: './tea/tea-p3-2-13.webp'
			},
			{
				mechanic: '7 Slash + 3rd Soak',
				description:
					'CC spawns behind 7, point cone out of arena\nPlayers with no responsibilities group center for heals\n1/2 soak final puddles',
				imageUrl: './tea/tea-p3-2-15.webp'
			},
			{
				mechanic: '8 Dash + Incinerating Heat',
				description:
					'8 gets dashed, KB resist\nAlex casts Incinerating Heat (random-target party stack)',
				imageUrl: './tea/tea-p3-2-16.webp'
			},
			{
				mechanic: 'Enumerations',
				description:
					'Two Enumerations spawn on random DPS after stack (3 people each)\nHealers → West Enum. Tanks → East Enum\n2 DPS without enums stay out',
				strats: [
					{
						role: 'Tank',
						party: 1,
						description: 'East Enumeration with OT + Enum DPS',
						imageUrl: './tea/tea-p3-2-18.webp'
					},
					{
						role: 'Tank',
						party: 2,
						description: 'East Enumeration with MT + Enum DPS',
						imageUrl: './tea/tea-p3-2-18.webp'
					},
					{
						role: 'Healer',
						party: 1,
						description: 'West Enumeration with RH + Enum DPS',
						imageUrl: './tea/tea-p3-2-18.webp'
					},
					{
						role: 'Healer',
						party: 2,
						description: 'West Enumeration with SH + Enum DPS',
						imageUrl: './tea/tea-p3-2-18.webp'
					},
					{
						role: 'Melee',
						party: 1,
						description: 'If Enumeration: pick a side (use eyeballs)\nElse: stay out',
						imageUrl: './tea/tea-p3-2-18.webp'
					},
					{
						role: 'Melee',
						party: 2,
						description: 'If Enumeration: pick a side (use eyeballs)\nElse: stay out',
						imageUrl: './tea/tea-p3-2-18.webp'
					},
					{
						role: 'Ranged',
						party: 1,
						description: 'If Enumeration: pick a side (use eyeballs)\nElse: stay out',
						imageUrl: './tea/tea-p3-2-18.webp'
					},
					{
						role: 'Ranged',
						party: 2,
						description: 'If Enumeration: pick a side (use eyeballs)\nElse: stay out',
						imageUrl: './tea/tea-p3-2-18.webp'
					}
				]
			}
		]
	}
];

const p4: PhaseStrats[] = [
	{
		phaseName: 'Beacons (Respect Stillness)',
		tag: 'p4',
		mechs: [
			{
				mechanic: 'Debuff Assignment',
				description:
					'{{light-beacon}} A or North of A\n{{dark-beacon}} Middle of C marker\nEveryone else: just in front of Dark Beacon',
				imageUrl: './tea/perfect-0.webp'
			},
			{
				mechanic: 'First Ordained Motion/Stillness',
				description:
					'Position quickly\nIf Stillness first, STOP MOVING, you have a GCD to reposition',
				imageUrl: './tea/perfect-1.webp'
			},
			{
				mechanic: 'Forced March + Second Ordained Stillness/Motion',
				description:
					'Opposite of first Ordained Motion/Stillness\nIf Stillness, just don\'t move after Forced March',
				imageUrl: './tea/perfect-2.webp'
			},
			{
				mechanic: 'Spread/Stack',
				description:
					'Lightly spread for Spread/Stack, then opposite',
				imageUrl: './tea/perfect-3.webp'
			},
		]
	},
	{
		phaseName: 'Fate Calibration α',
		tag: 'p4',
		mechs: [
			{
				mechanic: 'Debuff Assignment',
				description:
					'Watch clone\nCheck for first Stillness/Motion\nCheck for {{aggravated-assault}} (Red)/{{defamation}} (big Purple)/{{shared-sentence}} (Quad)/Nothing\nCheck for second Stillness/Motion\nLook at North Alexanders for safe spot',
				imageUrl: './tea/fate-cal-a-clone.webp'
			},
			{
				mechanic: 'Positions',
				description:
					'Line up with safe Alexander clone\n{{defamation}} North directly in front of safe clone\n{{shared-sentence}} + 3x Nothing on Left side\n{{aggravated-assault}} x3 on Right side',
				imageUrl: './tea/perfect-6.webp'
			},
			{
				mechanic: 'Motion/Stillness',
				description:
					'Resolve first Motion/Stillness, then Debuffs + second Motion/Stillness',
				imageUrl: './tea/perfect-8.webp'
			},
		]
	},
	{
		phaseName: 'Fate Calibration β',
		tag: 'p4',
		mechs: [
			{
				mechanic: 'Debuff Assignment',
				description:
					'Watch clone\nIf clone is standing still, you\'re a Beacon\nLight can get {{shared-sentence}}, {{blue-tether}}, or {{xmas-tether}}\nDark can get {{blue-tether}}, {{xmas-tether}}, or Nothing\nWatch Alex clones for Stack/Spread and safespot',
				imageUrl: './tea/perfect-9.webp'
			},
			{
				mechanic: 'Starting Positions',
				description:
					'{{light-beacon}} Northwest of A marker on arena dot\n{{dark-beacon}} Center of 2 marker\nDark + {{blue-tether}} Southwest corner of 2 marker (aim towards C)\nDark + Nothing: West side of 2 marker (aim towards D)\nEveryone else: Northwest corner of 2 marker (aim towards A)',
				imageUrl: './tea/perfect-10.webp'
			},
			{
				mechanic: 'Run to the Wall',
				description:
					'After the Forced March, Dark players not at North move to the wall to bait jumps\n{{light-beacon}} can move into {{shared-sentence}} stack',
				imageUrl: './tea/perfect-12.webp'
			},
			{
				mechanic: 'Stack/Spread + Dynamo',
				description:
					'If Stack, Light stack North, Dark stack Center\nMove to safe clone after',
				imageUrl: './tea/perfect-14.webp'
			},
		]
	},
	{
		phaseName: 'Trines to Clear',
		tag: 'p4',
		mechs: [
			{
				mechanic: 'Trines',
				description:
					'Use 1/3/4/Center for Trine movement\nMove only after first explosion\nNever do a diagonal movement',
				imageUrl: './tea/trines.webp'
			},
			{
				mechanic: 'Temporal Prison (Enrage)',
				description:
					'Prisons start NE and go Clockwise\nGo lowest DPS to highest (Healers, Tanks, DPS)',
				imageUrl: './tea/prisons.webp'
			}
		]
	}
];

const elinabinStrat: Strat = {
	stratName: 'naur',
	description: '',
	stratUrl: {
		Elinabin: 'https://pastebin.com/uxVnJm7R',
		'P1: Living Liquid':
			'https://ff14.toolboxgaming.space/?id=725383877116761&preview=1',
		'Intermission: Limit Cut':
			'https://ff14.toolboxgaming.space/?id=803293127441961&preview=1',
		'P2: BJCC':
			'https://ff14.toolboxgaming.space/?id=492297437831961&preview=1',
		'Timestop + P3: Alexander Prime':
			'https://ff14.toolboxgaming.space/?id=860745463802461&preview=1',
		Wormhole:
			'https://ff14.toolboxgaming.space/?id=537197026169861&preview=1',
		'P4: Perfect Alexander':
			'https://ff14.toolboxgaming.space/?id=170875560147661&preview=1'
	},
	notes: '',
	strats: [...setup, ...p1, ...intermission1, ...p2, ...intermission2, ...p3, ...p4]
};

export const teaStrats: Strat[] = [elinabinStrat];

export const teaFightConfig: FightConfig = {
	fightKey: 'tea',
	title: 'The Epic of Alexander (Ultimate)',
	abbreviatedTitle: 'TEA',
	subtitle: 'TEA Patch 5.11',
	cheatsheetTitle: 'TEA Cheatsheet',
	strats: {
		naur: {
			label: 'NAUR/Elinabin',
			badges: [{ text: 'NA', class: 'na-badge' }]
		}
	},
	toggles: [],
	tabTags: {
		'Living Liquid': ['setup', 'p1'],
		'Limit Cut': ['i1'],
		'BJCC': ['p2'],
		'Temporal Stasis': ['i2'],
		'Alexander Prime': ['p3'],
		'Perfect Alexander': ['p4']
	},
	useMainPageTabs: true,
	defaultStratName: 'naur',
	timeline: [],
	posterEnabled: false,
	posterLayout: teaPosterLayout,
	roleOptions: [
		{ label: 'MT', role: 'Tank', party: 1 },
		{ label: 'OT', role: 'Tank', party: 2 },
		{ label: 'Shield', role: 'Healer', party: 1, abbrev: 'SH' },
		{ label: 'Regen', role: 'Healer', party: 2, abbrev: 'RH' },
		{ label: 'M1', role: 'Melee', party: 1 },
		{ label: 'M2', role: 'Melee', party: 2 },
		{ label: 'Caster', role: 'Ranged', party: 1, abbrev: 'C' },
		{ label: 'Phys', role: 'Ranged', party: 2, abbrev: 'PR' }
	]
};
