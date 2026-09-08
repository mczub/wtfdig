import type { Job } from './types';

// Icon file under /icons/skills/ per ability name. Generic names resolve per job;
// names without an entry render as text only.
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

// Names that stand for several abilities at once.
const COMPOSITES: Record<string, string[]> = {
  'Kitchen Sink': ['Rampart', '40%', '90s', 'Short Mit']
};

// "Party Mit (7-8th Set)" -> "Party Mit"
function baseName(segment: string): string {
  return segment.replace(/\s*\(.*\)\s*$/, '').trim();
}

function iconFile(name: string, job: Job): string | undefined {
  const entry = MIT_ICONS[name];
  return typeof entry === 'string' ? entry : entry?.[job];
}

function mitIconUrls(segment: string, job: Job): string[] {
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

// "heart-of-light" -> "Heart of Light"
function abilityName(file: string): string {
  return file
    .split('-')
    .map((w, i) => (i > 0 && (w === 'of' || w === 'the') ? w : w[0].toUpperCase() + w.slice(1)))
    .join(' ');
}

// Job-specific display names that differ from the icon's ability name: DRK and GNB use
// the same skill on themselves and on their co-tank, so say which.
const JOB_NAME_OVERRIDES: Record<string, Partial<Record<Job, string>>> = {
  'Short Mit': { DRK: 'TBN (Self)', GNB: 'Corundum (Self)' },
  Short: { DRK: 'TBN (Self)', GNB: 'Corundum (Self)' },
  'Buddy Mit': { DRK: 'TBN (Buddy)', GNB: 'Corundum (Buddy)' }
};

// Generic names ("Party Mit", "40%") can display as the job's actual ability instead.
// "Kitchen Sink" stays as is even then.
function segmentText(segment: string, job: Job, jobNames: boolean): string {
  const name = baseName(segment);
  const entry = MIT_ICONS[name];
  if (!jobNames || typeof entry !== 'object' || !entry[job]) return segment;
  const label = JOB_NAME_OVERRIDES[name]?.[job] ?? abilityName(entry[job]);
  return label + segment.slice(name.length);
}

/** Split a "+"-joined mit string into abilities, each with its icons for the job. */
export function mitSegments(text: string | undefined, job: Job, jobNames = false): MitSegment[] {
  if (!text) return [];
  return text.split(' + ').map((segment) => ({
    text: segmentText(segment, job, jobNames),
    icons: mitIconUrls(segment, job)
  }));
}
