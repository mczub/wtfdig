import deepEquals from 'fast-deep-equal';
import type {
  FightPFContext,
  FightToggleConfig,
  PlayerMechStrat,
  PhaseStrats,
  Role,
  Strat,
  StratRecord,
  FightOptionsContext,
  FightToggleUrl,
  Badge,
  FightStratConfig,
  SpotlightMask
} from './types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & {
  ref?: U | null;
};
export function getCircleMaskUrl(
  xPercent: number,
  yPercent: number,
  size: number,
  borderWidth = 4
) {
  const svg = `data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%"><rect width="100%" height="100%" fill-opacity="0.5"/><circle cx="${xPercent}%" cy="${yPercent}%" r="${size}%" fill="black" /><circle cx="${xPercent}%" cy="${yPercent}%" r="${size}%" fill="none" stroke="white" stroke-width="${borderWidth}" /></svg>`;
  return `url('${svg}')`;
}

export function getMultiCircleMaskUrl(...circles: [number, number, number][]) {
  const borderWidth = 4;
  const circlesFillSvg = circles
    .map(([x, y, r]) => `<circle cx="${x}%" cy="${y}%" r="${r}%" fill="black" />`)
    .join('');
  const circlesStrokeSvg = circles
    .map(
      ([x, y, r]) =>
        `<circle cx="${x}%" cy="${y}%" r="${r}%" fill="none" stroke="white" stroke-width="${borderWidth}" />`
    )
    .join('');
  const svg = `data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%"><rect width="100%" height="100%" fill-opacity="0.5"/>${circlesFillSvg}${circlesStrokeSvg}</svg>`;
  return `url('${svg}')`;
}

export function getRectMaskUrl(xStart: number, xEnd: number, yStart: number, yEnd: number) {
  const svg = `data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%"><rect width="100%" height="100%" fill-opacity="0.5"/><rect x="${xStart}%" y="${yStart}%" width="${xEnd - xStart}%" height="${yEnd - yStart}%" fill="black" /></svg>`;
  return `url('${svg}')`;
}

export function getCircleMask(hPercent: number, vPercent: number, size: number) {
  return `radial-gradient(circle at ${hPercent}% ${vPercent}%, black ${size - 0.1}%, rgba(0, 0, 0, 0.4)  ${size}%)`;
}

// New spotlight functions that return structured data for SVG overlay rendering
export function spotlight(xPercent: number, yPercent: number, size: number): SpotlightMask {
  return { type: 'circle', x: xPercent, y: yPercent, r: size };
}

export function spotlightMulti(...circles: [number, number, number][]): SpotlightMask {
  return {
    type: 'circles',
    circles: circles.map(([x, y, r]) => ({ x, y, r }))
  };
}

export function spotlightRect(
  xStart: number,
  xEnd: number,
  yStart: number,
  yEnd: number
): SpotlightMask {
  return {
    type: 'rect',
    x: xStart,
    y: yStart,
    width: xEnd - xStart,
    height: yEnd - yStart
  };
}

export function msToTime(timeInMs: number): string {
  const seconds = (Math.floor(timeInMs / 1000) % 60).toString().padStart(2, '0');
  const minutes = Math.floor(timeInMs / 60000).toString();

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

export function getStratArray(
  stratRecord: Record<string, StratRecord>,
  mechanic: string
): PlayerMechStrat[] {
  return [
    {
      role: 'Tank',
      party: 1,
      description: getStringObject(stratRecord, mechanic, 'description', 'MT'),
      imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'MT'),
      mask: getStringObject(stratRecord, mechanic, 'mask', 'MT')
    },
    {
      role: 'Tank',
      party: 2,
      description: getStringObject(stratRecord, mechanic, 'description', 'OT'),
      imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'OT'),
      mask: getStringObject(stratRecord, mechanic, 'mask', 'OT')
    },
    {
      role: 'Healer',
      party: 1,
      description: getStringObject(stratRecord, mechanic, 'description', 'H1'),
      imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'H1'),
      mask: getStringObject(stratRecord, mechanic, 'mask', 'H1')
    },
    {
      role: 'Healer',
      party: 2,
      description: getStringObject(stratRecord, mechanic, 'description', 'H2'),
      imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'H2'),
      mask: getStringObject(stratRecord, mechanic, 'mask', 'H2')
    },
    {
      role: 'Melee',
      party: 1,
      description: getStringObject(stratRecord, mechanic, 'description', 'M1'),
      imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'M1'),
      mask: getStringObject(stratRecord, mechanic, 'mask', 'M1')
    },
    {
      role: 'Melee',
      party: 2,
      description: getStringObject(stratRecord, mechanic, 'description', 'M2'),
      imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'M2'),
      mask: getStringObject(stratRecord, mechanic, 'mask', 'M2')
    },
    {
      role: 'Ranged',
      party: 1,
      description: getStringObject(stratRecord, mechanic, 'description', 'R1'),
      imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'R1'),
      mask: getStringObject(stratRecord, mechanic, 'mask', 'R1')
    },
    {
      role: 'Ranged',
      party: 2,
      description: getStringObject(stratRecord, mechanic, 'description', 'R2'),
      imageUrl: getStringObject(stratRecord, mechanic, 'imageUrl', 'R2'),
      mask: getStringObject(stratRecord, mechanic, 'mask', 'R2')
    }
  ];
}

export function resolveStratItem<T>(
  item: T | Record<string, T> | undefined,
  tag: string | undefined,
  stratState: Record<string, string | null>
): T | undefined {
  if (!item) return item;
  if (
    tag &&
    stratState?.[tag] &&
    typeof item === 'object' &&
    item !== null &&
    !Array.isArray(item)
  ) {
    const itemRecord = item as Record<string, T>;
    const stateKey = stratState[tag] as string;
    return (stateKey && itemRecord[stateKey]) || (item as T);
  }
  return item as T;
}

export function resolveMechs<T>(
  mechs: T[] | Record<string, T[]> | undefined,
  tag: string | undefined,
  stratState: Record<string, string | null>
): T[] | undefined {
  if (!mechs) return undefined;
  if (Array.isArray(mechs)) return mechs;
  if (tag && stratState?.[tag]) {
    const stateKey = stratState[tag] as string;
    return (mechs as Record<string, T[]>)[stateKey] ?? Object.values(mechs)[0];
  }
  return Object.values(mechs)[0];
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

  const individualPackages = strat.strats?.map((phaseStrat) => {
    const resolvedMechs = resolveMechs(phaseStrat.mechs, phaseStrat.tag, stratState);
    return {
      ...phaseStrat,
      description: resolveStratItem(phaseStrat.description, phaseStrat.tag, stratState),
      imageUrl: resolveStratItem(phaseStrat.imageUrl, phaseStrat.tag, stratState),
      mask: resolveStratItem(phaseStrat.mask, phaseStrat.tag, stratState),
      mechs: resolvedMechs?.map((phaseStratMech) => ({
        ...phaseStratMech,
        description: resolveStratItem(phaseStratMech.description, phaseStrat.tag, stratState),
        imageUrl: resolveStratItem(phaseStratMech.imageUrl, phaseStrat.tag, stratState),
        strats: phaseStratMech.strats
          ?.filter((playerStrat) => {
            // Role filter: matches if undefined or equals selected role
            const matchesRole = !playerStrat.role || playerStrat.role === role;
            // Party filter: matches if undefined or equals selected party
            const matchesParty = !playerStrat.party || playerStrat.party === party;
            if (!matchesRole || !matchesParty) return false;

            // Toggle filter: matches if no toggleKey or value matches current state
            if (!playerStrat.toggleKey) return true;
            const currentToggleValue = stratState[playerStrat.toggleKey] ?? '';
            return playerStrat.toggleValue === currentToggleValue;
          })
          .map((playerStrat) => ({
            ...playerStrat,
            description:
              resolveStratItem(playerStrat.description, phaseStrat.tag, stratState) ?? '',
            imageUrl: resolveStratItem(playerStrat.imageUrl, phaseStrat.tag, stratState),
            mask: resolveStratItem(playerStrat.mask, phaseStrat.tag, stratState)
          }))
      }))
    };
  });

  if (!individualPackages) {
    return `Couldn't find ${stratName} strat for ${role} ${party}`;
  }

  return individualPackages;
}

export function formatRoleAbbreviation(role?: Role, party?: number, useJpNaming = false): string {
  if (!role || !party) return '';
  if (useJpNaming) {
    if (role === 'Tank') return party === 1 ? 'MT' : 'ST';
    if (role === 'Healer') return party === 1 ? 'H1' : 'H2';
    if (role === 'Melee') return party === 1 ? 'D1' : 'D2';
    if (role === 'Ranged') return party === 1 ? 'D3' : 'D4';
  }
  if (role === 'Tank') {
    return party === 1 ? 'MT' : 'OT';
  }
  return `${role.charAt(0).toUpperCase()}${party}`;
}

interface ToggleDiffArgs {
  stratName?: string;
  stratState: Record<string, string | null>;
  toggles?: FightToggleConfig[];
  strats: FightStratConfig;
  showAllToggleUrls?: boolean;
}

function getToggleDiffDescriptions({
  stratName,
  stratState,
  toggles = [],
  strats
}: ToggleDiffArgs): string[] {
  if (!stratName || !toggles.length) return [];
  const defaults = strats[stratName]?.defaults ?? {};
  // Filter out mech toggles - they shouldn't appear in title string
  return toggles
    .filter((toggle) => !toggle.isMechToggle)
    .reduce<string[]>((descriptions, toggle) => {
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

export function getToggleUrls({
  stratName,
  stratState,
  toggles = [],
  strats,
  showAllToggleUrls = false
}: ToggleDiffArgs): FightToggleUrl[] {
  if (!stratName || !toggles.length) return [];
  const defaults = strats[stratName]?.defaults ?? {};
  return toggles.reduce<FightToggleUrl[]>((urls, toggle) => {
    const defaultValue = defaults[toggle.key] ?? toggle.defaultValue ?? null;
    const currentValue = stratState?.[toggle.key];
    if (showAllToggleUrls || (currentValue && currentValue !== defaultValue)) {
      const optionUrl = toggle.options.find((option) => option.value === currentValue)?.url ?? null;
      if (optionUrl) {
        // Support both single FightToggleUrl and arrays of FightToggleUrl
        const urlArray = Array.isArray(optionUrl) ? optionUrl : [optionUrl];
        urls.push(...urlArray);
      }
    }
    return urls;
  }, []);
}

export interface BoardUrlArgs {
  strat: Strat;
  stratState: Record<string, string | null>;
}

function getBoardCodes({ strat, stratState }: BoardUrlArgs): string[] {
  return (strat?.strats ?? []).flatMap((phaseStrat) => {
    return resolveStratItem(phaseStrat.boardCode, phaseStrat.tag, stratState) ?? [];
  });
}

export function getBoardUrl({ strat, stratState }: BoardUrlArgs): string | null {
  const boardCodes = getBoardCodes({ strat, stratState });
  if (!boardCodes.length) return null;
  return 'https://board.wtfdig.info/b/' + boardCodes.join(',');
}

interface FightSummaryArgs extends FightOptionsContext {
  strats: FightStratConfig;
  toggles?: FightToggleConfig[];
  separator?: string;
}

export function buildFightOptionsString({
  stratName,
  stratState,
  toggles,
  strats,
  separator = ' | '
}: FightSummaryArgs): string {
  if (!stratName) return '';
  const baseName = strats[stratName]?.label ?? stratName;
  const diffDescriptions = getToggleDiffDescriptions({
    stratName,
    stratState,
    toggles,
    strats
  });
  const parts = [baseName, ...diffDescriptions];
  if (diffDescriptions.length === 0) {
    return `${strats[stratName]?.defaultPfDescription ?? baseName}`;
  }
  return parts.join(separator);
}

export function buildFightOptionsSummary({
  stratName,
  role,
  party,
  stratState,
  strats,
  toggles
}: FightSummaryArgs): string {
  if (!stratName || !role || !party) return '';

  const useJpNaming = strats[stratName]?.jpRoles ?? false;

  const roleAbbrev = formatRoleAbbreviation(role, party, useJpNaming);
  if (!roleAbbrev) return '';
  const fightOptions = buildFightOptionsString({
    stratName,
    stratState,
    toggles,
    strats,
    separator: ' | '
  });
  return `${fightOptions} - ${roleAbbrev}`;
}

interface FightPFDescriptionArgs extends FightPFContext {
  strats: FightStratConfig;
  toggles?: FightToggleConfig[];
}

export function buildFightPFDescription({
  stratName,
  stratState,
  currentUrl,
  strats,
  toggles
}: FightPFDescriptionArgs): string {
  if (!stratName) return '';
  const fightOptions = buildFightOptionsString({
    stratName,
    stratState,
    toggles,
    strats,
    separator: ' | '
  });
  return `${fightOptions} | ${currentUrl ?? ''}`;
}

export interface ToastLike {
  create: (args: { description: string; type?: string }) => void;
}

export function copyTextWithToast(
  text: string,
  toast?: ToastLike,
  description = 'Copied to clipboard!'
) {
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
  const serialized = keys.map((key) =>
    defaultState[key] === stratState[key] ? '' : stratState[key]
  );
  // Filter out trailing empty strings and join
  while (serialized.length > 0 && !serialized[serialized.length - 1]) {
    serialized.pop();
  }
  return serialized.length ? `${stratName}:${serialized.join(':')}` : stratName;
}

interface ParseHashOptions {
  hash: string;
  keys: string[];
  getStratMechs: (stratName: string) => Record<string, string | null> | undefined;
}

export function parseStratHash({ hash, keys, getStratMechs }: ParseHashOptions): {
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
