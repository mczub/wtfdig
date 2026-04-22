export type Role = 'Tank' | 'Healer' | 'Melee' | 'Ranged';

export interface FightRoleOption {
  /** Button text shown in the selector, e.g. "MT", "Shield". */
  label: string;
  /** Underlying role this option maps to. */
  role: Role;
  /** Underlying party (1 or 2) this option maps to. */
  party: number;
  /** Optional shorter abbreviation for compact display (defaults to label). */
  abbrev?: string;
}
export type Alliance = 'A' | 'B' | 'C';
export type Alignment = 'original' | 'truenorth' | 'relative';

export interface PlayerMechStrat {
  role?: Role;
  party?: number;
  toggleKey?: string;
  toggleValue?: string;
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
  arenaData?: import('$lib/arena').ArenaDiagramData;
  url?: string | Record<string, string>;
}

export interface PhaseStrats {
  phaseName: string;
  tag?: string;
  description?: string | Record<string, string>;
  imageUrl?: string | Record<string, string>;
  mask?: string | Record<string, string>;
  boardCode?: string | string[] | Record<string, string | string[]>;
  mechs?: MechanicStrat[] | Record<string, MechanicStrat[]>;
  url?: string | Record<string, string>;
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
  url?: FightToggleUrl | FightToggleUrl[];
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
  excludeFromUrl?: boolean;
  isMechToggle?: boolean;
  phaseTag?: string;
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
  toggles: Record<string, string>;
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
  showAllToggleUrls?: boolean;
  strats: FightStratConfig;
  toggles?: FightToggleConfig[];
  tabTags?: Record<string, string[]>;
  useMainPageTabs?: boolean;
  defaultStratName?: string;
  timeline?: TimelineItem[];
  splitTimeline?: boolean;
  useEvenTimelineSpacing?: boolean;
  posterLayout?: PosterLayout;
  posterEnabled?: boolean;
  /** Custom role selector options. When set, replaces the default 4-role + 2-group selector. */
  roleOptions?: FightRoleOption[];
  additionalResources?: {
    title: string;
    description?: string;
    links: { text: string; url: string }[];
  };
  allianceOptions?: Alliance[];
  alignmentOptions?: { value: Alignment; label: string }[];
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
  isMechToggle?: boolean;
  phaseTag?: string;
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

// Poster Cheatsheet types

export interface PosterSectionDef {
  /** Display title for this section */
  title: string;
  /** Grid column start (1-based) */
  col: number;
  /** Grid row start (1-based) */
  row: number;
  /** Width in grid cells */
  w: number;
  /** Height in grid cells */
  h: number;
  /** Accent color for section border/header */
  accentColor?: string;
  /** The arena diagram data for this section */
  arena: import('$lib/arena').ArenaDiagramData;
}

export interface PosterLayout {
  /** Grid columns (default 16) */
  cols?: number;
  /** Grid rows (default 9) */
  rows?: number;
  /** Sections placed on the grid */
  sections: PosterSectionDef[];
  /** Poster width in pixels for export (default 1920) */
  width?: number;
  /** Poster height in pixels for export (default 1080) */
  height?: number;
  /** Title displayed at top of poster */
  title?: string;
  /** Subtitle / strat name */
  subtitle?: string;
  /** Background color (default '#1a1a2e') */
  bgColor?: string;
}
