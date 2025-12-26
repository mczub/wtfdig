export type Role = 'Tank' | 'Healer' | 'Melee' | 'Ranged';
export type Alignment = 'original' | 'truenorth' | 'relative';

export interface PlayerMechStrat {
	role: Role;
	party: number;
	description: string | Record<string, string>;
	imageUrl?: string | Record<string, string>;
	imageRotated?: string;
	mask?: string | Record<string, string>;
	transform?: string;
	alignmentTransforms?: Record<Alignment, string>;
	alignmentImages?: Record<Alignment, string>;
	alignmentMasks?: Record<Alignment, string>;
}

export type StratRecord = Record<string, string | Record<string, string | PlayerMechStrat>>;

export interface MechanicStrat {
	mechanic: string;
	description?: string | Record<string, string>;
	notes?: string | Record<string, string>;
	strats?: PlayerMechStrat[];
	imageUrl?: string | Record<string, string>;
}

export interface PhaseStrats {
	phaseName: string;
	tag?: string;
	description?: string | Record<string, string>;
	imageUrl?: string | Record<string, string>;
	mask?: string | Record<string, string>;
	boardCode?: string | string[] | Record<string, string | string[]>;
	mechs?: MechanicStrat[] | Record<string, MechanicStrat[]>;
}

export interface Strat {
	stratName: string;
	stratUrl: string | Record<string, string>;
	description: string | Record<string, string>;
	notes?: string;
	strats: PhaseStrats[];
}

export interface TimelineItem {
	mechName: string;
	mechType: string;
	mechTag?: string;
	startTimeMs: number;
}

export interface FightToggleOption {
	value: string;
	label: string;
	badges?: Badge[];
	url?: FightToggleUrl;
}

export interface FightToggleUrl {
	name: string;
	url: string;
}

export interface FightToggleConfig {
	key: string;
	label: string;
	defaultValue: string | null;
	options: FightToggleOption[];
}

export interface FightOptionsContext {
	stratName?: string;
	role?: Role;
	party?: number;
	stratState: Record<string, string | null>;
}

export interface FightPFContext {
	stratName?: string;
	stratState: Record<string, string | null>;
	currentUrl?: string;
}

export interface ToggledUrl {
	toggles: Record<string, string>,
	url: string;
}

export interface Badge {
	text: string;
	class: string;
}

export interface FightStratConfig {
	[stratName: string]: {
		label: string;
		badges?: Badge[];
		jpRoles?: boolean;
		defaults?: Record<string, string>;
		defaultPfDescription?: string;
	};
}

export interface FightConfig {
	fightKey: string;
	title: string;
	abbreviatedTitle?: string;
	subtitle: string;
	cheatsheetTitle: string;
	cheatsheetLayout?: { rows: number; columns: number };
	showAllToggleUrls?: boolean;
	strats: FightStratConfig;
	toggles?: FightToggleConfig[];
	tabTags?: Record<string, string[]>;
	useMainPageTabs?: boolean;
	defaultStratName?: string;
	timeline?: TimelineItem[];
	splitTimeline?: boolean;
	useEvenTimelineSpacing?: boolean;
	useModernCheatsheet?: boolean;
	additionalResources?: {
		title: string;
		description?: string;
		links: { text: string; url: string }[];
	};
}

export interface StratOption {
	value: string;
	label: string;
	badges?: Badge[];
}

export interface FightToggleState {
	key: string;
	label: string;
	value: string | null | undefined;
	options: FightToggleOption[];
}

// Spotlight mask types for SVG overlay
export interface CircleSpotlight {
	type: 'circle';
	x: number;
	y: number;
	r: number;
}

export interface MultiCircleSpotlight {
	type: 'circles';
	circles: { x: number; y: number; r: number }[];
}

export interface RectSpotlight {
	type: 'rect';
	x: number;
	y: number;
	width: number;
	height: number;
}

export type SpotlightMask = CircleSpotlight | MultiCircleSpotlight | RectSpotlight;
