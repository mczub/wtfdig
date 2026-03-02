/**
 * Data loader: Explicit registry of all fight data files and traversal utilities.
 *
 * Imports every FightConfig + Strat[] from the codebase and exposes helpers
 * to walk descriptions, URLs, and toggle-dependent mechanics for validation.
 */

import type {
	FightConfig,
	Strat,
	PhaseStrats,
	MechanicStrat,
	PlayerMechStrat,
	FightToggleConfig
} from '$lib/types';

// ── Fight data imports ─────────────────────────────────────────────────────

import { m1sFightConfig, m1sStrats } from '../../src/routes/70/m1s/data';
import { m4sFightConfig, m4sStrats } from '../../src/routes/70/m4s/data';
import { m5sFightConfig, m5sStrats } from '../../src/routes/72/m5s/data';
import { m6sFightConfig, m6sStrats } from '../../src/routes/72/m6s/data';
import { m7sFightConfig, m7sStrats } from '../../src/routes/72/m7s/data';
import { m8sFightConfig, m8sStrats } from '../../src/routes/72/m8s/data';
import { ex5FightConfig, ex5Strats } from '../../src/routes/73/ex5/data';
import { ex6FightConfig, ex6Strats } from '../../src/routes/73/ex6/data';
import { ex7FightConfig, ex7Strats } from '../../src/routes/74/ex7/data';
import { m9sFightConfig, m9sStrats } from '../../src/routes/74/m9s/data';
import { m10sFightConfig, m10sStrats } from '../../src/routes/74/m10s/data';
import { m11sFightConfig, m11sStrats } from '../../src/routes/74/m11s/data';
import { m12sFightConfig, m12sStrats } from '../../src/routes/74/m12s/data';
import { ucobFightConfig, ucobStrats } from '../../src/routes/ultimates/ucob/data';

// ── Registry ───────────────────────────────────────────────────────────────

export interface FightEntry {
	label: string;
	config: FightConfig;
	strats: Strat[];
}

export const ALL_FIGHTS: FightEntry[] = [
	{ label: 'M1S', config: m1sFightConfig, strats: m1sStrats },
	{ label: 'M4S', config: m4sFightConfig, strats: m4sStrats },
	{ label: 'M5S', config: m5sFightConfig, strats: m5sStrats },
	{ label: 'M6S', config: m6sFightConfig, strats: m6sStrats },
	{ label: 'M7S', config: m7sFightConfig, strats: m7sStrats },
	{ label: 'M8S', config: m8sFightConfig, strats: m8sStrats },
	{ label: 'EX5', config: ex5FightConfig, strats: ex5Strats },
	{ label: 'EX6', config: ex6FightConfig, strats: ex6Strats },
	{ label: 'EX7', config: ex7FightConfig, strats: ex7Strats },
	{ label: 'M9S', config: m9sFightConfig, strats: m9sStrats },
	{ label: 'M10S', config: m10sFightConfig, strats: m10sStrats },
	{ label: 'M11S', config: m11sFightConfig, strats: m11sStrats },
	{ label: 'M12S', config: m12sFightConfig, strats: m12sStrats },
	{ label: 'UCOB', config: ucobFightConfig, strats: ucobStrats }
];

// ── Traversal types ────────────────────────────────────────────────────────

export interface DescriptionEntry {
	/** Human-readable path: "M12S > Modified > P2 Idyllic > Tank P1" */
	path: string;
	/** The raw description value (already resolved to string) */
	description: string;
	/** Source level: 'phase', 'mechanic', or 'player' */
	level: 'phase' | 'mechanic' | 'player';
	/** Role (only for player-level descriptions) */
	role?: string;
	/** Party number (only for player-level descriptions) */
	party?: number;
	/** The strat name this belongs to */
	stratName: string;
	/** The fight label */
	fightLabel: string;
	/** Toggle context if inside a toggle-dependent mech record */
	toggleValue?: string;
}

export interface UrlEntry {
	path: string;
	url: string;
	fightLabel: string;
	stratName: string;
	toggleValue?: string;
}

export interface MechEntry {
	path: string;
	fightLabel: string;
	stratName: string;
	phaseName: string;
	mechanic: MechanicStrat;
	toggleValue?: string;
}

// ── String extraction helpers ──────────────────────────────────────────────

/** Extract all string values from a field that may be string | Record<string, string> */
function* extractStrings(
	value: string | Record<string, string> | undefined
): Generator<string> {
	if (!value) return;
	if (typeof value === 'string') {
		yield value;
	} else {
		for (const v of Object.values(value)) {
			yield v;
		}
	}
}

// ── Walk all descriptions ──────────────────────────────────────────────────

export function* walkAllDescriptions(
	fights?: FightEntry[]
): Generator<DescriptionEntry> {
	for (const fight of fights ?? ALL_FIGHTS) {
		for (const strat of fight.strats) {
			for (const phase of strat.strats) {
				const phasePath = `${fight.label} > ${strat.stratName} > ${phase.phaseName}`;

				// Phase-level description
				for (const desc of extractStrings(phase.description)) {
					yield {
						path: phasePath,
						description: desc,
						level: 'phase',
						stratName: strat.stratName,
						fightLabel: fight.label
					};
				}

				// Walk mechanics (may be array or Record)
				if (phase.mechs) {
					if (Array.isArray(phase.mechs)) {
						yield* walkMechDescriptions(
							phase.mechs,
							phasePath,
							strat.stratName,
							fight.label
						);
					} else {
						for (const [toggleVal, mechs] of Object.entries(phase.mechs)) {
							yield* walkMechDescriptions(
								mechs,
								`${phasePath} [${toggleVal}]`,
								strat.stratName,
								fight.label,
								toggleVal
							);
						}
					}
				}
			}
		}
	}
}

function* walkMechDescriptions(
	mechs: MechanicStrat[],
	basePath: string,
	stratName: string,
	fightLabel: string,
	toggleValue?: string
): Generator<DescriptionEntry> {
	for (const mech of mechs) {
		const mechPath = `${basePath} > ${mech.mechanic}`;

		// Mechanic-level description
		for (const desc of extractStrings(mech.description)) {
			yield {
				path: mechPath,
				description: desc,
				level: 'mechanic',
				stratName,
				fightLabel,
				toggleValue
			};
		}

		// Player-level descriptions
		if (mech.strats) {
			for (const playerStrat of mech.strats) {
				for (const desc of extractStrings(playerStrat.description)) {
					const roleLabel = [playerStrat.role, playerStrat.party ? `P${playerStrat.party}` : '']
						.filter(Boolean)
						.join(' ');
					yield {
						path: `${mechPath} > ${roleLabel}`.trim(),
						description: desc,
						level: 'player',
						role: playerStrat.role,
						party: playerStrat.party,
						stratName,
						fightLabel,
						toggleValue
					};
				}
			}
		}
	}
}

// ── Walk all URLs ──────────────────────────────────────────────────────────

export function* walkAllUrls(fights?: FightEntry[]): Generator<UrlEntry> {
	for (const fight of fights ?? ALL_FIGHTS) {
		for (const strat of fight.strats) {
			// Strat-level URL
			for (const url of extractStrings(strat.stratUrl)) {
				yield {
					path: `${fight.label} > ${strat.stratName} [stratUrl]`,
					url,
					fightLabel: fight.label,
					stratName: strat.stratName
				};
			}

			for (const phase of strat.strats) {
				const phasePath = `${fight.label} > ${strat.stratName} > ${phase.phaseName}`;

				// Phase-level URL
				for (const url of extractStrings(phase.url)) {
					yield {
						path: `${phasePath} [url]`,
						url,
						fightLabel: fight.label,
						stratName: strat.stratName
					};
				}

				// Phase-level imageUrl
				for (const url of extractStrings(phase.imageUrl)) {
					yield {
						path: `${phasePath} [imageUrl]`,
						url,
						fightLabel: fight.label,
						stratName: strat.stratName
					};
				}

				// Mechanic-level URLs
				if (phase.mechs) {
					if (Array.isArray(phase.mechs)) {
						yield* walkMechUrls(phase.mechs, phasePath, fight.label, strat.stratName);
					} else {
						for (const [toggleVal, mechs] of Object.entries(phase.mechs)) {
							yield* walkMechUrls(
								mechs,
								`${phasePath} [${toggleVal}]`,
								fight.label,
								strat.stratName,
								toggleVal
							);
						}
					}
				}
			}
		}
	}
}

function* walkMechUrls(
	mechs: MechanicStrat[],
	basePath: string,
	fightLabel: string,
	stratName: string,
	toggleValue?: string
): Generator<UrlEntry> {
	for (const mech of mechs) {
		const mechPath = `${basePath} > ${mech.mechanic}`;

		for (const url of extractStrings(mech.url)) {
			yield { path: `${mechPath} [url]`, url, fightLabel, stratName, toggleValue };
		}
		for (const url of extractStrings(mech.imageUrl)) {
			yield { path: `${mechPath} [imageUrl]`, url, fightLabel, stratName, toggleValue };
		}

		if (mech.strats) {
			for (const playerStrat of mech.strats) {
				const roleLabel = [playerStrat.role, playerStrat.party ? `P${playerStrat.party}` : '']
					.filter(Boolean)
					.join(' ');
				const playerPath = `${mechPath} > ${roleLabel}`.trim();

				for (const url of extractStrings(playerStrat.imageUrl)) {
					yield { path: `${playerPath} [imageUrl]`, url, fightLabel, stratName, toggleValue };
				}
			}
		}
	}
}

// ── Walk all mechanics (flat) ──────────────────────────────────────────────

export function* walkAllMechanics(fights?: FightEntry[]): Generator<MechEntry> {
	for (const fight of fights ?? ALL_FIGHTS) {
		for (const strat of fight.strats) {
			for (const phase of strat.strats) {
				const phasePath = `${fight.label} > ${strat.stratName} > ${phase.phaseName}`;

				if (phase.mechs) {
					if (Array.isArray(phase.mechs)) {
						for (const mech of phase.mechs) {
							yield {
								path: `${phasePath} > ${mech.mechanic}`,
								fightLabel: fight.label,
								stratName: strat.stratName,
								phaseName: phase.phaseName,
								mechanic: mech
							};
						}
					} else {
						for (const [toggleVal, mechs] of Object.entries(phase.mechs)) {
							for (const mech of mechs) {
								yield {
									path: `${phasePath} [${toggleVal}] > ${mech.mechanic}`,
									fightLabel: fight.label,
									stratName: strat.stratName,
									phaseName: phase.phaseName,
									mechanic: mech,
									toggleValue: toggleVal
								};
							}
						}
					}
				}
			}
		}
	}
}

// ── Get all toggle option values for a fight ───────────────────────────────

export function getToggleOptionValues(config: FightConfig): Map<string, Set<string>> {
	const result = new Map<string, Set<string>>();
	if (!config.toggles) return result;
	for (const toggle of config.toggles) {
		const values = new Set(toggle.options.map((opt) => opt.value));
		result.set(toggle.key, values);
	}
	return result;
}

/** Get toggle config by its key */
export function getToggleByKey(
	config: FightConfig,
	key: string
): FightToggleConfig | undefined {
	return config.toggles?.find((t) => t.key === key);
}

/** Get the toggle key associated with a phase's tag */
export function getToggleForPhaseTag(
	config: FightConfig,
	tag: string
): FightToggleConfig | undefined {
	return config.toggles?.find((t) => t.key === tag || t.phaseTag === tag);
}
