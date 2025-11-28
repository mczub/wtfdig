import deepEquals from 'fast-deep-equal';
import type {
	FightPFContext,
	FightToggleConfig,
	PlayerMechStrat,
	PhaseStrats,
	Role,
	Strat,
	StratRecord,
	FightOptionsContext
} from './types';
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, "child"> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, "children"> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & {
	ref?: U | null;
};
export function getCircleMaskUrl(xPercent: number, yPercent: number, size: number) {
	const svg = `data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%"><rect width="100%" height="100%" fill-opacity="0.5"/><circle cx="${xPercent}%" cy="${yPercent}%" r="${size}%" fill="black" /></svg>`
	return `url('${svg}')`;
}

export function getRectMaskUrl(xStart: number, xEnd: number, yStart: number, yEnd: number) {
	const svg = `data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%"><rect width="100%" height="100%" fill-opacity="0.5"/><rect x="${xStart}%" y="${yStart}%" width="${xEnd - xStart}%" height="${yEnd - yStart}%" fill="black" /></svg>`
	return `url('${svg}')`;
}

export function getCircleMask(hPercent: number, vPercent: number, size: number) {
	return `radial-gradient(circle at ${hPercent}% ${vPercent}%, black ${size - 0.1}%, rgba(0, 0, 0, 0.4)  ${size}%)`;
}

export function msToTime(timeInMs: number): string {
	const seconds = (Math.floor(timeInMs / 1000) % 60).toString().padStart(2, '0');
	const minutes = (Math.floor(timeInMs / 60000)).toString();

	return `${minutes}:${seconds}`;
}

export function getStringObject(
	stratRecord: Record<string, StratRecord>,
	mechanic: string,
	property: string,
	role?: string
): Record<string, string> {
	const stringObject: Record<string, string> = {};
	for (const [key, strat] of Object.entries(stratRecord)) {
		const mechanicEntry = strat[mechanic] as Record<string, unknown>;
		if (role) {
			const roleEntry = mechanicEntry?.[role] as Record<string, unknown>;
			stringObject[key] = (roleEntry?.[property] as string) || '';
		} else {
			stringObject[key] = (mechanicEntry?.[property] as string) || '';
		}
	}
	return stringObject;
}

export function getStratArray(stratRecord: Record<string, StratRecord>, mechanic: string): PlayerMechStrat[] {
	return [
		{
			role: 'Tank',
			party: 1,
			description: getStringObject(stratRecord, mechanic, 'description', 'MT'),
			imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'MT')
		},
		{
			role: 'Tank',
			party: 2,
			description: getStringObject(stratRecord, mechanic, 'description', 'OT'),
			imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'OT')
		},
		{
			role: 'Healer',
			party: 1,
			description: getStringObject(stratRecord, mechanic, 'description', 'H1'),
			imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'H1')
		},
		{
			role: 'Healer',
			party: 2,
			description: getStringObject(stratRecord, mechanic, 'description', 'H2'),
			imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'H2')
		},
		{
			role: 'Melee',
			party: 1,
			description: getStringObject(stratRecord, mechanic, 'description', 'M1'),
			imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'M1')
		},
		{
			role: 'Melee',
			party: 2,
			description: getStringObject(stratRecord, mechanic, 'description', 'M2'),
			imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'M2')
		},
		{
			role: 'Ranged',
			party: 1,
			description: getStringObject(stratRecord, mechanic, 'description', 'R1'),
			imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'R1')
		},
		{
			role: 'Ranged',
			party: 2,
			description: getStringObject(stratRecord, mechanic, 'description', 'R2'),
			imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'R2')
		}
	];
}

export function resolveStratItem<T>(
	item: T | Record<string, T> | undefined,
	tag: string | undefined,
	stratState: Record<string, string | null>
): T | undefined {
	if (!item) return item;
	if (tag && stratState?.[tag] && typeof item === 'object' && item !== null && !Array.isArray(item)) {
		const itemRecord = item as Record<string, T>;
		const stateKey = stratState[tag] as string;
		return (stateKey && itemRecord[stateKey]) || (item as T);
	}
	return item as T;
}

interface BuildIndividualParams {
	strat?: Strat | string;
	stratName?: string;
	role?: Role;
	party?: number;
	stratState: Record<string, string | null>;
}

export function buildIndividualStratView({
	strat,
	stratName,
	role,
	party,
	stratState
}: BuildIndividualParams): PhaseStrats[] | string {
	if (!stratName || !role || !party) return '';
	if (!strat) return `Couldn't find ${stratName} strat`;
	if (typeof strat === 'string') return strat;

	const individualPackages = strat.strats?.map((phaseStrat) => ({
		...phaseStrat,
		description: resolveStratItem(phaseStrat.description, phaseStrat.tag, stratState),
		imageUrl: resolveStratItem(phaseStrat.imageUrl, phaseStrat.tag, stratState),
		mask: resolveStratItem(phaseStrat.mask, phaseStrat.tag, stratState),
		mechs: phaseStrat.mechs?.map((phaseStratMech) => ({
			...phaseStratMech,
			description: resolveStratItem(phaseStratMech.description, phaseStrat.tag, stratState),
			imageUrl: resolveStratItem(phaseStratMech.imageUrl, phaseStrat.tag, stratState),
			strats:
				phaseStratMech.strats
					?.filter((playerStrat) => playerStrat.role === role && playerStrat.party === party)
					.map((playerStrat) => ({
						...playerStrat,
						description: resolveStratItem(playerStrat.description, phaseStrat.tag, stratState),
						imageUrl: resolveStratItem(playerStrat.imageUrl, phaseStrat.tag, stratState),
						mask: resolveStratItem(playerStrat.mask, phaseStrat.tag, stratState)
					}))
		}))
	}));

	if (!individualPackages) {
		return `Couldn't find ${stratName} strat for ${role} ${party}`;
	}

	return individualPackages;
}

export function formatRoleAbbreviation(role?: Role, party?: number): string {
	if (!role || !party) return '';
	if (role === 'Tank') {
		return party === 1 ? 'MT' : 'OT';
	}
	return `${role.charAt(0).toUpperCase()}${party}`;
}

interface ToggleDiffArgs {
	stratName?: string;
	stratState: Record<string, string | null>;
	toggles?: FightToggleConfig[];
	stratDefaults: Record<string, Record<string, string>>;
}

function getToggleDiffDescriptions({
	stratName,
	stratState,
	toggles = [],
	stratDefaults
}: ToggleDiffArgs): string[] {
	if (!stratName || !toggles.length) return [];
	const defaults = stratDefaults[stratName] ?? {};
	return toggles.reduce<string[]>((descriptions, toggle) => {
		const defaultValue = defaults[toggle.key] ?? toggle.defaultValue ?? null;
		const currentValue = stratState?.[toggle.key];
		if (currentValue && currentValue !== defaultValue) {
			const optionLabel =
				toggle.options.find((option) => option.value === currentValue)?.label ?? currentValue;
			const description = toggle.label ? `${optionLabel} ${toggle.label}`.trim() : optionLabel;
			if (description) {
				descriptions.push(description);
			}
		}
		return descriptions;
	}, []);
}

interface FightSummaryArgs extends FightOptionsContext {
	stratLabels: Record<string, string>;
	stratDefaults: Record<string, Record<string, string>>;
	toggles?: FightToggleConfig[];
}

export function buildFightOptionsSummary({
	stratName,
	role,
	party,
	stratState,
	stratLabels,
	stratDefaults,
	toggles
}: FightSummaryArgs): string {
	if (!stratName || !role || !party) return '';
	const roleAbbrev = formatRoleAbbreviation(role, party);
	if (!roleAbbrev) return '';
	const baseName = stratLabels[stratName] ?? stratName;
	const diffDescriptions = getToggleDiffDescriptions({
		stratName,
		stratState,
		toggles,
		stratDefaults
	});
	const parts = [baseName, ...diffDescriptions];
	return `${parts.join(' | ')} - ${roleAbbrev}`;
}

interface FightPFDescriptionArgs extends FightPFContext {
	stratLabels: Record<string, string>;
	stratDefaults: Record<string, Record<string, string>>;
	toggles?: FightToggleConfig[];
}

export function buildFightPFDescription({
	stratName,
	stratState,
	currentUrl,
	stratLabels,
	stratDefaults,
	toggles
}: FightPFDescriptionArgs): string {
	if (!stratName) return '';
	const baseName = stratLabels[stratName] ?? stratName;
	const diffDescriptions = getToggleDiffDescriptions({
		stratName,
		stratState,
		toggles,
		stratDefaults
	});
	const parts = [baseName, ...diffDescriptions];
	return `${parts.join(' | ')} | ${currentUrl ?? ''}`;
}

interface ToastLike {
	create: (args: { description: string; type?: string }) => void;
}

export function copyTextWithToast(text: string, toast?: ToastLike, description = 'Copied to clipboard!') {
	if (typeof navigator === 'undefined' || !navigator.clipboard) return;
	navigator.clipboard.writeText(text);
	toast?.create({ description, type: 'success' });
}

interface StratCodeOptions {
	stratName?: string;
	stratState: Record<string, string | null>;
	getStratMechs: (stratName: string) => Record<string, any>;
	keys?: string[];
}

export function buildStratCode({
	stratName,
	stratState,
	getStratMechs,
	keys = Object.keys(stratState)
}: StratCodeOptions): string {
	if (!stratName) return '';
	const defaultState = getStratMechs(stratName) ?? {};
	if (deepEquals(defaultState, stratState)) {
		return stratName;
	}
	const serialized = keys
		.map((key) => stratState[key])
		.filter((value): value is string => Boolean(value && value.length > 0));
	return serialized.length ? `${stratName}:${serialized.join(':')}` : stratName;
}

interface ParseHashOptions {
	hash: string;
	keys: string[];
	getStratMechs: (stratName: string) => Record<string, string | null> | undefined;
}

export function parseStratHash({
	hash,
	keys,
	getStratMechs
}: ParseHashOptions): {
	stratName?: string;
	stratState?: Record<string, string | null>;
} {
	if (!hash) return {};
	const [hashStratName, ...values] = hash.split(':');
	if (!hashStratName) return {};
	const defaults = getStratMechs(hashStratName);
	if (!defaults) {
		return { stratName: hashStratName };
	}
	const stratState: Record<string, string | null> = { ...defaults };
	keys.forEach((key, index) => {
		const value = values[index];
		if (value) {
			stratState[key] = value;
		}
	});
	return {
		stratName: hashStratName,
		stratState
	};
}
