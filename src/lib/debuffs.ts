export interface DebuffDef {
  id: string;
  name: string;
  iconFile: string;
  description?: string;
}

export const DEBUFFS = {
  'light-march': {
    id: 'light-march',
    name: 'Light March',
    iconFile: '215215-light-march.png',
    description: 'Forced March towards Light Beacon'
  },
  'light-beacon': {
    id: 'light-beacon',
    name: 'Light Beacon',
    iconFile: '215216-light-beacon.png',
    description: 'Target for Light March'
  },
  'dark-march': {
    id: 'dark-march',
    name: 'Dark March',
    iconFile: '215217-dark-march.png',
    description: 'Forced March away from Dark Beacon'
  },
  'dark-beacon': {
    id: 'dark-beacon',
    name: 'Dark Beacon',
    iconFile: '215218-dark-beacon.png',
    description: 'Starting point for Dark March'
  },
  defamation: {
    id: 'defamation',
    name: 'Defamation',
    iconFile: '215738-defamation.png',
    description: 'Large AOE around target'
  },
  'aggravated-assault': {
    id: 'aggravated-assault',
    name: 'Aggravated Assault',
    iconFile: '215739-aggravated-assault.png',
    description: 'Cannot take any additional damage'
  },
  'shared-sentence': {
    id: 'shared-sentence',
    name: 'Shared Sentence',
    iconFile: '215740-shared-sentence.png',
    description: 'Stack'
  },
  'xmas-tether': {
    id: 'xmas-tether',
    name: 'Xmas Tether (House Arrest)',
    iconFile: '215741-xmas-tether.png',
    description: 'Must remain close'
  },
  'blue-tether': {
    id: 'blue-tether',
    name: 'Blue Tether (Restraining Order)',
    iconFile: '215742-blue-tether.png',
    description: 'Must remain far'
  }
} as const satisfies Record<string, DebuffDef>;

export type DebuffId = keyof typeof DEBUFFS;

export function getDebuff(id: string): DebuffDef | undefined {
  return (DEBUFFS as Record<string, DebuffDef>)[id];
}

/**
 * Returns path to the debuff icon PNG under /static.
 * Use in `src` attributes for `<img>`, or as `href` in SVG `<image>`.
 */
export function debuffIconUrl(id: string): string | undefined {
  const d = getDebuff(id);
  return d ? `/icons/status/${d.iconFile}` : undefined;
}

const TOKEN_RE = /\{\{([a-z0-9-]+)\}\}/gi;

function escapeAttr(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Replaces `{{debuff-id}}` tokens with inline debuff icons. Non-token
 * content is passed through as-is so author-authored HTML (e.g. <strong>)
 * keeps working. Descriptions are trusted static data.
 */
export function renderDebuffTokens(input: string): string {
  if (!input) return '';
  return input.replace(TOKEN_RE, (match, id: string) => {
    const def = getDebuff(id);
    if (!def) return match;
    const title = escapeAttr(def.description ? `${def.name} - ${def.description}` : def.name);
    const alt = escapeAttr(def.name);
    const src = `/icons/status/${def.iconFile}`;
    return `<img src="${src}" alt="${alt}" title="${title}" class="debuff-icon" />`;
  });
}
