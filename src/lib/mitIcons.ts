import type { Job } from './types';

/** Icon file (under /icons/skills/) for each ability name used in mit plans.
 * Generic names ("Party Mit", "Extra") resolve per job; everything else is
 * one icon regardless of job. Names without an entry render as text only. */
const MIT_ICONS: Record<string, string | Partial<Record<Job, string>>> = {
  // Role generics
  Reprisal: 'reprisal',
  Feint: 'feint',
  Addle: 'addle',
  'Party Mit': {
    PLD: 'divine-veil',
    WAR: 'shake-it-off',
    DRK: 'dark-missionary',
    GNB: 'heart-of-light',
    BRD: 'troubadour',
    MCH: 'tactician',
    DNC: 'shield-samba'
  },
  Extra: {
    PLD: 'passage-of-arms',
    MCH: 'dismantle',
    DNC: 'improvisation',
    RDM: 'magick-barrier',
    PCT: 'tempera-grassa',
    RPR: 'arcane-crest'
  },
  LB3: 'limit-break',
  // Tank buster generics (Ikuya's tank sheet)
  Rampart: 'rampart',
  Provoke: 'provoke',
  'Provoke During Castbar': 'provoke',
  Invulnerability: {
    PLD: 'hallowed-ground',
    WAR: 'holmgang',
    DRK: 'living-dead',
    GNB: 'superbolide'
  },
  '40%': { PLD: 'guardian', WAR: 'damnation', DRK: 'shadowed-vigil', GNB: 'great-nebula' },
  '90s': { PLD: 'bulwark', WAR: 'thrill-of-battle', DRK: 'dark-mind', GNB: 'camouflage' },
  'Short Mit': {
    PLD: 'holy-sheltron',
    WAR: 'bloodwhetting',
    DRK: 'the-blackest-night',
    GNB: 'heart-of-corundum'
  },
  Short: {
    PLD: 'holy-sheltron',
    WAR: 'bloodwhetting',
    DRK: 'the-blackest-night',
    GNB: 'heart-of-corundum'
  },
  'Buddy Mit': {
    PLD: 'intervention',
    WAR: 'nascent-flash',
    DRK: 'the-blackest-night',
    GNB: 'heart-of-corundum'
  },
  // WHM
  Temperance: 'temperance',
  'Plenary Indulgence': 'plenary-indulgence',
  'Divine Caress': 'divine-caress',
  'Liturgy of the Bell': 'liturgy-of-the-bell',
  // SCH
  'Sacred Soil': 'sacred-soil',
  Expedient: 'expedient',
  'Fey Illumination': 'fey-illumination',
  Seraph: 'summon-seraph',
  Spreadlo: 'deployment-tactics',
  Seraphism: 'seraphism',
  // AST
  'Collective Unconscious': 'collective-unconscious',
  'Neutral Sect': 'neutral-sect',
  'Sun Sign': 'sun-sign',
  Macrocosmos: 'macrocosmos',
  // SGE
  Kerachole: 'kerachole',
  Holos: 'holos',
  Panhaima: 'panhaima',
  'Zoe Shields': 'zoe',
  Philosophia: 'philosophia'
};

/** Names that stand for several abilities at once; each resolves through MIT_ICONS. */
const COMPOSITES: Record<string, string[]> = {
  'Kitchen Sink': ['Rampart', '40%', '90s', 'Short Mit']
};

/** Strip a trailing qualifier such as "(7-8th Set)" or "(Chaos)" before lookup. */
function baseName(segment: string): string {
  return segment.replace(/\s*\(.*\)\s*$/, '').trim();
}

function iconFile(name: string, job: Job): string | undefined {
  const entry = MIT_ICONS[name];
  return typeof entry === 'string' ? entry : entry?.[job];
}

/** Icon URLs for one "+"-separated segment of a mit string. Usually zero or one;
 * composite names like "Kitchen Sink" yield several. */
export function mitIconUrls(segment: string, job: Job): string[] {
  const name = baseName(segment);
  const names = COMPOSITES[name] ?? [name];
  return names
    .map((n) => iconFile(n, job))
    .filter((f): f is string => !!f)
    .map((f) => `/icons/skills/${f}.png`);
}

export interface MitSegment {
  text: string;
  icons: string[];
}

/** Split a mit string into its abilities, each paired with its icons when known. */
export function mitSegments(text: string | undefined, job: Job): MitSegment[] {
  if (!text) return [];
  return text.split(' + ').map((segment) => ({ text: segment, icons: mitIconUrls(segment, job) }));
}
