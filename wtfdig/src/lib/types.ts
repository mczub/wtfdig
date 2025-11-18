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
	notes?: string;
	strats?: PlayerMechStrat[];
	imageUrl?: string | Record<string, string>;
}

export interface PhaseStrats {
	phaseName: string;
	tag?: string;
	description?: string | Record<string, string>;
	imageUrl?: string | Record<string, string>;
	mask?: string | Record<string, string>;
	mechs?: MechanicStrat[];
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

export interface FightConfig {
	fightKey: string;
	title: string;
	subtitle: string;
	cheatsheetTitle: string;
	stratLabels: Record<string, string>;
	stratDefaults: Record<string, Record<string, string>>;
	toggles?: FightToggleConfig[];
	tabTags?: Record<string, string[]>;
	defaultStratName?: string;
	timeline?: TimelineItem[];
}

export interface StratOption {
	value: string;
	label: string;
}

export interface FightToggleState {
	key: string;
	label: string;
	value: string | null | undefined;
	options: FightToggleOption[];
}
