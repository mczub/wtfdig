/**
 * Tier 1: Programmatic Structural Validation
 *
 * Fast checks (~30s) that run on every PR to catch common data issues:
 * 1. Structural integrity (configs, phases, mechs)
 * 2. Raidplan URL format validation
 * 3. Toggle/role cross-reference consistency
 * 4. Text quality (typos, orphaned HTML)
 * 5. Cross-strat copy-paste detection
 */

import { describe, test, expect } from 'vitest';
import type {
	FightConfig,
	Strat,
	PhaseStrats,
	MechanicStrat,
	PlayerMechStrat,
	FightToggleConfig
} from '$lib/types';
import {
	ALL_FIGHTS,
	walkAllDescriptions,
	walkAllUrls,
	walkAllMechanics,
	getToggleOptionValues,
	type FightEntry,
	type DescriptionEntry,
	type UrlEntry
} from './data-loader';

// ── Helpers ────────────────────────────────────────────────────────────────

const VALID_ROLES = new Set(['Tank', 'Healer', 'Melee', 'Ranged']);
const VALID_PARTIES = new Set([1, 2]);

const RAIDPLAN_URL_RE = /^https:\/\/raidplan\.io\/plan\/[A-Za-z0-9_-]+(?:#\d+)?$/;

/** More specific ordinal check: find bad ordinals */
function findBadOrdinals(text: string): string[] {
	const issues: string[] = [];
	const ordinalRe = /\b(\d+)(st|nd|rd|th)\b/gi;
	let match;
	while ((match = ordinalRe.exec(text)) !== null) {
		const num = parseInt(match[1], 10);
		const suffix = match[2].toLowerCase();
		const expectedSuffix = getExpectedOrdinalSuffix(num);
		if (suffix !== expectedSuffix) {
			issues.push(`"${match[0]}" should be "${num}${expectedSuffix}"`);
		}
	}
	return issues;
}

function getExpectedOrdinalSuffix(n: number): string {
	const lastTwo = n % 100;
	if (lastTwo >= 11 && lastTwo <= 13) return 'th';
	const lastOne = n % 10;
	if (lastOne === 1) return 'st';
	if (lastOne === 2) return 'nd';
	if (lastOne === 3) return 'rd';
	return 'th';
}

/** Check for unmatched HTML tags.
 * Only checks <strong> — other inline tags (<b>, <u>, <em>) are sometimes
 * used unclosed in descriptions for visual styling in Svelte's {@html} context. */
function findUnmatchedTags(text: string): string[] {
	const issues: string[] = [];
	const tagNames = ['strong'];
	for (const tag of tagNames) {
		const openCount = (text.match(new RegExp(`<${tag}[^>]*>`, 'gi')) || []).length;
		const closeCount = (text.match(new RegExp(`</${tag}>`, 'gi')) || []).length;
		if (openCount !== closeCount) {
			issues.push(`Unmatched <${tag}>: ${openCount} open, ${closeCount} close`);
		}
	}
	return issues;
}

/** Resolve description to all its string values */
function descriptionStrings(desc: string | Record<string, string> | undefined): string[] {
	if (!desc) return [];
	if (typeof desc === 'string') return [desc];
	return Object.values(desc);
}

/** Get non-empty string values from a description */
function nonEmptyDescriptionStrings(desc: string | Record<string, string> | undefined): string[] {
	return descriptionStrings(desc).filter((s) => s.trim());
}

// ── 1. Structural Integrity ────────────────────────────────────────────────

describe('1. Structural Integrity', () => {
	for (const fight of ALL_FIGHTS) {
		describe(fight.label, () => {
			test('FightConfig has at least one strat key', () => {
				const stratKeys = Object.keys(fight.config.strats);
				expect(stratKeys.length).toBeGreaterThan(0);
			});

			test('each strat has at least one PhaseStrats', () => {
				for (const strat of fight.strats) {
					expect(strat.strats.length).toBeGreaterThan(0);
				}
			});

			test('defaultStratName matches a strat key (if set)', () => {
				if (fight.config.defaultStratName) {
					const validKeys = Object.keys(fight.config.strats);
					expect(validKeys).toContain(fight.config.defaultStratName);
				}
			});

			test('no PlayerMechStrat has undefined/null description', () => {
				// Note: empty string ('') and all-empty Record descriptions are intentional
				// for image-only strats (getStratArray pattern). Only flag truly missing descriptions.
				const failures: string[] = [];

				for (const strat of fight.strats) {
					for (const phase of strat.strats) {
						const walkMechs = (mechs: MechanicStrat[], context: string) => {
							for (const mech of mechs) {
								if (!mech.strats) continue;
								for (const ps of mech.strats) {
									if (ps.description === undefined || ps.description === null) {
										const label = `${context} > ${mech.mechanic} > ${ps.role ?? '?'} P${ps.party ?? '?'}`;
										failures.push(`${label}: missing description`);
									}
								}
							}
						};

						const ctx = `${strat.stratName} > ${phase.phaseName}`;
						if (phase.mechs) {
							if (Array.isArray(phase.mechs)) {
								walkMechs(phase.mechs, ctx);
							} else {
								for (const [key, mechs] of Object.entries(phase.mechs)) {
									walkMechs(mechs, `${ctx} [${key}]`);
								}
							}
						}
					}
				}

				if (failures.length > 0) {
					throw new Error(`Missing descriptions:\n  ${failures.join('\n  ')}`);
				}
			});

			test('PhaseStrats.mechs resolves correctly (array or Record)', () => {
				const failures: string[] = [];

				for (const strat of fight.strats) {
					for (const phase of strat.strats) {
						if (!phase.mechs) continue;
						const ctx = `${strat.stratName} > ${phase.phaseName}`;

						if (Array.isArray(phase.mechs)) {
							for (const mech of phase.mechs) {
								if (!mech.mechanic || !mech.mechanic.trim()) {
									failures.push(`${ctx}: mechanic with empty name`);
								}
							}
						} else {
							for (const [key, mechs] of Object.entries(phase.mechs)) {
								if (!key.trim()) {
									failures.push(`${ctx}: empty toggle key`);
								}
								if (!Array.isArray(mechs)) {
									failures.push(`${ctx} [${key}]: mechs value is not an array`);
								}
							}
						}
					}
				}

				if (failures.length > 0) {
					throw new Error(`Mechanic structure issues:\n  ${failures.join('\n  ')}`);
				}
			});
		});
	}
});

// ── 2. Raidplan URL Format ─────────────────────────────────────────────────

describe('2. Raidplan URL Format', () => {
	test('all raidplan URLs match expected format', () => {
		const failures: string[] = [];

		for (const entry of walkAllUrls()) {
			if (!entry.url.includes('raidplan.io')) continue;
			if (!RAIDPLAN_URL_RE.test(entry.url)) {
				failures.push(`${entry.path}: Invalid raidplan URL "${entry.url}"`);
			}
		}

		if (failures.length > 0) {
			throw new Error(`Invalid raidplan URLs:\n  ${failures.join('\n  ')}`);
		}
	});

	test('raidplan URL fragment values are positive integers', () => {
		const failures: string[] = [];

		for (const entry of walkAllUrls()) {
			if (!entry.url.includes('raidplan.io')) continue;
			const hashIdx = entry.url.indexOf('#');
			if (hashIdx === -1) continue;

			const fragment = entry.url.slice(hashIdx + 1);
			const num = parseInt(fragment, 10);
			if (isNaN(num) || num < 1 || String(num) !== fragment) {
				failures.push(`${entry.path}: Invalid fragment "#${fragment}" (must be positive integer)`);
			}
		}

		if (failures.length > 0) {
			throw new Error(`Invalid raidplan URL fragments:\n  ${failures.join('\n  ')}`);
		}
	});
});

// ── 3. Cross-Reference Consistency ─────────────────────────────────────────

describe('3. Cross-Reference Consistency', () => {
	for (const fight of ALL_FIGHTS) {
		describe(fight.label, () => {
			test('toggle-dependent mech Record keys match toggle option values', () => {
				const failures: string[] = [];

				for (const strat of fight.strats) {
					for (const phase of strat.strats) {
						if (!phase.mechs || Array.isArray(phase.mechs)) continue;
						if (!phase.tag) continue;

						const ctx = `${strat.stratName} > ${phase.phaseName}`;
						const mechKeys = new Set(Object.keys(phase.mechs));

						const toggle = fight.config.toggles?.find(
							(t) => t.key === phase.tag || t.phaseTag === phase.tag
						);

						if (!toggle) continue;

						const validValues = new Set(toggle.options.map((o) => o.value));
						// The defaultValue is also a valid mech key (represents non-toggled state)
						if (toggle.defaultValue) validValues.add(toggle.defaultValue);
						for (const key of mechKeys) {
							if (!validValues.has(key)) {
								failures.push(
									`${ctx}: mech key "${key}" not in toggle "${toggle.key}" options [${[...validValues].join(', ')}]`
								);
							}
						}
					}
				}

				if (failures.length > 0) {
					throw new Error(`Toggle key mismatches:\n  ${failures.join('\n  ')}`);
				}
			});

			test('PlayerMechStrat role values are valid', () => {
				const failures: string[] = [];

				for (const strat of fight.strats) {
					for (const phase of strat.strats) {
						const checkMechs = (mechs: MechanicStrat[], context: string) => {
							for (const mech of mechs) {
								if (!mech.strats) continue;
								for (const ps of mech.strats) {
									if (ps.role && !VALID_ROLES.has(ps.role)) {
										failures.push(`${context} > ${mech.mechanic}: invalid role "${ps.role}"`);
									}
									if (ps.party !== undefined && !VALID_PARTIES.has(ps.party)) {
										failures.push(`${context} > ${mech.mechanic}: invalid party ${ps.party}`);
									}
								}
							}
						};

						const ctx = `${strat.stratName} > ${phase.phaseName}`;
						if (phase.mechs) {
							if (Array.isArray(phase.mechs)) {
								checkMechs(phase.mechs, ctx);
							} else {
								for (const [key, mechs] of Object.entries(phase.mechs)) {
									checkMechs(mechs, `${ctx} [${key}]`);
								}
							}
						}
					}
				}

				if (failures.length > 0) {
					throw new Error(`Invalid role/party values:\n  ${failures.join('\n  ')}`);
				}
			});
		});
	}
});

// ── 4. Text Quality ────────────────────────────────────────────────────────

describe('4. Text Quality', () => {
	test('no ordinal typos in descriptions', () => {
		const failures: string[] = [];

		for (const entry of walkAllDescriptions()) {
			// Skip empty descriptions (intentional for image-only strats)
			if (!entry.description.trim()) continue;
			const issues = findBadOrdinals(entry.description);
			if (issues.length > 0) {
				failures.push(`${entry.path}: ${issues.join(', ')}`);
			}
		}

		if (failures.length > 0) {
			throw new Error(`Ordinal typos found:\n  ${failures.join('\n  ')}`);
		}
	});

	test('no unmatched HTML tags in descriptions', () => {
		const failures: string[] = [];

		for (const entry of walkAllDescriptions()) {
			if (!entry.description.trim()) continue;
			const issues = findUnmatchedTags(entry.description);
			if (issues.length > 0) {
				failures.push(`${entry.path}: ${issues.join('; ')}`);
			}
		}

		if (failures.length > 0) {
			throw new Error(`Unmatched HTML tags:\n  ${failures.join('\n  ')}`);
		}
	});
});

// ── 5. Cross-Strat Copy-Paste Detection ────────────────────────────────────

describe('5. Cross-Strat Copy-Paste Detection', () => {
	test('mechanic descriptions differ when per-role strats differ across strats', () => {
		const seen = new Set<string>();
		const failures: string[] = [];

		for (const fight of ALL_FIGHTS) {
			// Group mechanics by name across strats (within the same fight)
			// Only compare between different top-level strats (not across toggle variants)
			const mechsByName = new Map<
				string,
				Array<{ stratName: string; mech: MechanicStrat }>
			>();

			for (const strat of fight.strats) {
				for (const phase of strat.strats) {
					const collectMechs = (mechs: MechanicStrat[]) => {
						for (const mech of mechs) {
							const key = `${phase.phaseName} > ${mech.mechanic}`;
							if (!mechsByName.has(key)) mechsByName.set(key, []);
							mechsByName.get(key)!.push({
								stratName: strat.stratName,
								mech
							});
						}
					};

					if (phase.mechs) {
						if (Array.isArray(phase.mechs)) {
							collectMechs(phase.mechs);
						} else {
							// For toggle-dependent mechs, collect all variants
							for (const mechs of Object.values(phase.mechs)) {
								collectMechs(mechs);
							}
						}
					}
				}
			}

			for (const [mechKey, entries] of mechsByName) {
				if (entries.length < 2) continue;

				for (let i = 0; i < entries.length; i++) {
					for (let j = i + 1; j < entries.length; j++) {
						const a = entries[i];
						const b = entries[j];

						if (a.stratName === b.stratName) continue;

						// Deduplicate: only report each strat pair + mechanic once
						const dedupKey = `${fight.label}|${mechKey}|${[a.stratName, b.stratName].sort().join('+')}`;
						if (seen.has(dedupKey)) continue;

						const aDescs = nonEmptyDescriptionStrings(a.mech.description);
						const bDescs = nonEmptyDescriptionStrings(b.mech.description);
						const aDescStr = aDescs.join('|');
						const bDescStr = bDescs.join('|');

						if (aDescStr && bDescStr && aDescStr === bDescStr) {
							const aRoleDescs = (a.mech.strats || [])
								.map((ps) => nonEmptyDescriptionStrings(ps.description).join(''))
								.filter(Boolean)
								.sort()
								.join('|||');
							const bRoleDescs = (b.mech.strats || [])
								.map((ps) => nonEmptyDescriptionStrings(ps.description).join(''))
								.filter(Boolean)
								.sort()
								.join('|||');

							if (aRoleDescs !== bRoleDescs && aRoleDescs && bRoleDescs) {
								seen.add(dedupKey);
								failures.push(
									`${fight.label} > ${mechKey}: "${a.stratName}" and "${b.stratName}" share identical overview but have different per-role strats`
								);
							}
						}
					}
				}
			}
		}

		if (failures.length > 0) {
			console.warn(`⚠ Potential copy-paste issues (${failures.length}):\n  ${failures.join('\n  ')}`);
		}
	});

	test('descriptions do not reference wrong strat variant names', () => {
		const VARIANT_KEYWORDS: Record<string, string[]> = {
			// M12S Idyllic variants
			dn: ['DN ', 'DN\n', 'Diagonal North', '(DN)'],
			em: ['EM ', 'EM\n', 'East Middle', '(EM)'],
			caro: ['Caro ', 'Caro\n', '(Caro)']
		};

		const failures: string[] = [];

		for (const fight of ALL_FIGHTS) {
			for (const strat of fight.strats) {
				for (const phase of strat.strats) {
					if (!phase.mechs || Array.isArray(phase.mechs)) continue;

					for (const [toggleVal, mechs] of Object.entries(phase.mechs)) {
						const toggleLower = toggleVal.toLowerCase();

						for (const [variantKey, keywords] of Object.entries(VARIANT_KEYWORDS)) {
							if (toggleLower.includes(variantKey)) continue;

							for (const mech of mechs) {
								for (const desc of nonEmptyDescriptionStrings(mech.description)) {
									for (const kw of keywords) {
										if (desc.includes(kw)) {
											const roleDescsHaveVariant = (mech.strats || []).some((ps) =>
												nonEmptyDescriptionStrings(ps.description).some((d) =>
													keywords.some((k) => d.includes(k))
												)
											);

											if (!roleDescsHaveVariant) {
												failures.push(
													`${fight.label} > ${strat.stratName} > ${phase.phaseName} [${toggleVal}] > ${mech.mechanic}: description mentions "${kw.trim()}" but per-role strats don't — likely copy-paste from ${variantKey} variant`
												);
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}

		if (failures.length > 0) {
			console.warn(`⚠ Wrong variant references (${failures.length}):\n  ${failures.join('\n  ')}`);
		}
	});
});
