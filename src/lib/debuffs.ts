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
  },
  // FRU — Spell-in-Waiting series (P3 UR + P4 CT)
  'dark-eruption': {
    id: 'dark-eruption',
    name: 'Spell-in-Waiting: Dark Eruption',
    iconFile: '215305-dark-eruption.png',
    description: 'Spread AOE on expire'
  },
  'dark-water': {
    id: 'dark-water',
    name: 'Spell-in-Waiting: Dark Water III',
    iconFile: '215306-dark-water-3.png',
    description: 'Stack on expire'
  },
  'dark-blizzard': {
    id: 'dark-blizzard',
    name: 'Spell-in-Waiting: Dark Blizzard III',
    iconFile: '215307-dark-blizzard-3.png',
    description: 'Ice — drops puddle on expire'
  },
  'dark-aero': {
    id: 'dark-aero',
    name: 'Spell-in-Waiting: Dark Aero III',
    iconFile: '215308-dark-aero-3.png',
    description: 'Aero — knockback on expire'
  },
  'dark-fire': {
    id: 'dark-fire',
    name: 'Spell-in-Waiting: Dark Fire III',
    iconFile: '215984-dark-fire-3.png',
    description: 'Fire - spread AOE on expire'
  },
  'unholy-darkness': {
    id: 'unholy-darkness',
    name: 'Spell-in-Waiting: Unholy Darkness',
    iconFile: '215983-unholy-darkness.png',
    description: 'Stack on expire'
  },
  return: {
    id: 'return',
    name: 'Return',
    iconFile: '215313-return.png',
    description: 'Rewind to position when applied'
  },
  wyrmclaw: {
    id: 'wyrmclaw',
    name: 'Wyrmclaw',
    iconFile: '215241-wyrmclaw.png'
  },
  wyrmfang: {
    id: 'wyrmfang',
    name: 'Wyrmfang',
    iconFile: '215242-wyrmfang.png'
  },
  // UMAD — Forsaken (P2) tower assignments
  'forsaken-circle': {
    id: 'forsaken-circle',
    name: 'Forsaken Circle',
    iconFile: 'umad-forsaken-circle.png',
    description: 'Circle AOE'
  },
  'forsaken-cone': {
    id: 'forsaken-cone',
    name: 'Forsaken Cone',
    iconFile: 'umad-forsaken-cone.png',
    description: 'Cone AOE'
  },
  'forsaken-stack': {
    id: 'forsaken-stack',
    name: 'Forsaken Stack',
    iconFile: 'umad-forsaken-stack.png',
    description: 'Stack'
  },
  // UMAD - Bowels of Agony (P3) elements
  entropy: {
    id: 'entropy',
    name: 'Entropy',
    iconFile: '215902-entropy.png',
    description: 'Spread AOE on expire (fire)'
  },
  'dynamic-fluid': {
    id: 'dynamic-fluid',
    name: 'Dynamic Fluid',
    iconFile: '215903-dynamic-fluid.png',
    description: 'Donut AOE on expire (water)'
  },
  headwind: {
    id: 'headwind',
    name: 'Headwind',
    iconFile: '215904-headwind.png',
    description: 'Knockback - face AWAY from the source'
  },
  tailwind: {
    id: 'tailwind',
    name: 'Tailwind',
    iconFile: '215905-tailwind.png',
    description: 'Knockback - face TOWARD the source'
  },
  accretion: {
    id: 'accretion',
    name: 'Accretion',
    iconFile: '215906-accretion.png',
    description: 'Cleanse by healing to full HP'
  },
  // UMAD - Earthquake (P3) conga order
  'first-in-line': {
    id: 'first-in-line',
    name: 'First in Line',
    iconFile: '215401-first-in-line.png',
    description: 'Resolve first (step forward)'
  },
  'second-in-line': {
    id: 'second-in-line',
    name: 'Second in Line',
    iconFile: '215402-second-in-line.png',
    description: 'Resolve second'
  },
  'third-in-line': {
    id: 'third-in-line',
    name: 'Third in Line',
    iconFile: '215403-third-in-line.png',
    description: 'Resolve third (step back)'
  },
  // Misc status icons
  'cursed-shriek': {
    id: 'cursed-shriek',
    name: 'Cursed Shriek',
    iconFile: '215588-cursed-shriek.png'
  },
  'forked-lightning': {
    id: 'forked-lightning',
    name: 'Forked Lightning',
    iconFile: '215623-forked-lightning.png'
  },
  'compressed-water': {
    id: 'compressed-water',
    name: 'Compressed Water',
    iconFile: '215696-compressed-water.png'
  },
  'accel-bomb': {
    id: 'accel-bomb',
    name: 'Accel Bomb',
    iconFile: '215727-accel-bomb.png'
  },
  'white-wound': {
    id: 'white-wound',
    name: 'White Wound',
    iconFile: '215782-white-wound.png'
  },
  'black-wound': {
    id: 'black-wound',
    name: 'Black Wound',
    iconFile: '215783-black-wound.png'
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
