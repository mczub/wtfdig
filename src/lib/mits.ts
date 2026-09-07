import type { InvulnOrder, Job, MechMits, MechRoleMits, MitPlan, Role, TankBoss } from './types';

export const JOBS_BY_ROLE: Record<Role, Job[]> = {
  Tank: ['PLD', 'WAR', 'DRK', 'GNB'],
  Healer: ['WHM', 'SCH', 'AST', 'SGE'],
  Melee: ['MNK', 'DRG', 'NIN', 'SAM', 'RPR', 'VPR'],
  Ranged: ['BRD', 'MCH', 'DNC', 'BLM', 'SMN', 'RDM', 'PCT']
};

/** Job pre-selected in the mit panel until the player picks one, per role and light party. */
export const DEFAULT_JOBS: Record<Role, [Job, Job]> = {
  Tank: ['PLD', 'WAR'],
  Healer: ['WHM', 'SGE'],
  Melee: ['MNK', 'DRG'],
  Ranged: ['BRD', 'BLM']
};

const PHYS_RANGED: Job[] = ['BRD', 'MCH', 'DNC'];
const CASTERS: Job[] = ['BLM', 'SMN', 'RDM', 'PCT'];

/** Jobs selectable for a role slot. The plan's R1 is always a physical ranged
 * and R2 a caster, so the Ranged list depends on the light party. */
export function jobsFor(role: Role, party: number | undefined): Job[] {
  if (role === 'Ranged') return party === 2 ? CASTERS : PHYS_RANGED;
  return JOBS_BY_ROLE[role];
}

/** Which boss a tank holds in P3 unless they say otherwise: MT Chaos, OT Exdeath. */
export function defaultTankBoss(party: number | undefined): TankBoss {
  return party === 2 ? 'Exdeath' : 'Chaos';
}

/** P5 invuln order unless the tank says otherwise. The 2nd invuln starts with the
 * boss, which is the MT, so MT defaults to 2nd and OT to 1st. */
export function defaultInvulnOrder(party: number | undefined): InvulnOrder {
  return party === 2 ? 1 : 2;
}

export function defaultJob(role: Role, party: number | undefined): Job {
  return DEFAULT_JOBS[role][party === 2 ? 1 : 0];
}

/** Jobs that have a party-wide mitigation the sheet calls "Party Mit". Entries
 * naming it are dropped for other jobs (BLM, SMN, melee). */
export const JOBS_WITH_PARTY_MIT: Job[] = [
  'PLD',
  'WAR',
  'DRK',
  'GNB',
  'BRD',
  'MCH',
  'DNC',
  'RDM',
  'PCT'
];

/** Jobs with an extra mitigation on top of the role-generic ones. The sheet's
 * Extras column marks where to use it; it is shown simply as "Extra". */
export const JOBS_WITH_EXTRAS: Job[] = ['PLD', 'MCH', 'DNC', 'RDM', 'PCT', 'RPR'];

/** Drop "+"-separated segments naming a generic ability the job lacks. Names stay
 * generic; the panel shows the job's actual skill as an icon instead. */
export function filterMitForJob(text: string | undefined, job: Job): string | undefined {
  if (!text) return undefined;
  const kept = text
    .split(' + ')
    .filter((segment) => JOBS_WITH_PARTY_MIT.includes(job) || !segment.includes('Party Mit'));
  return kept.length ? kept.join(' + ') : undefined;
}

/** True when a mit entry applies to the given role / party / job selection.
 * A missing `job` matches every job in the role so the panel still has content
 * before the player picks one. */
export function mitMatches(
  mit: MechRoleMits,
  role: Role,
  party: number | undefined,
  job: Job | null | undefined
): boolean {
  if (mit.role !== role) return false;
  if (mit.party && party && mit.party !== party) return false;
  if (mit.jobs && job && !mit.jobs.includes(job)) return false;
  return true;
}

export interface MitPhaseGroup {
  phase: string;
  label: string;
  note?: string;
  mechs: { mech: MechMits; mits: MechRoleMits[] }[];
}

export interface MitViewOptions {
  role: Role;
  party?: number;
  job?: Job | null;
  tabTags?: Record<string, string[]> | null;
  /** Include tank self (buster) mits. Default true. */
  includeSelf?: boolean;
  /** Tank's P3 boss; entries for the other boss are dropped. */
  tankBoss?: TankBoss;
  /** Tank's P5 invuln order; entries for the other order are dropped. */
  invulnOrder?: InvulnOrder;
}

/** Filter a plan down to one player's mits and bucket them by phase, keeping
 * the plan's mech order. Phases with nothing left after filtering are dropped. */
export function groupMitsByPhase(plan: MitPlan, opts: MitViewOptions): MitPhaseGroup[] {
  const { role, party, job, tabTags, includeSelf = true, tankBoss, invulnOrder } = opts;
  const groups: MitPhaseGroup[] = [];
  for (const mech of plan.mechs) {
    const mits = mech.mits
      .filter((m) => (includeSelf || !m.self) && mitMatches(m, role, party, job))
      .filter((m) => !m.boss || !tankBoss || m.boss === tankBoss)
      .filter((m) => !m.invuln || !invulnOrder || m.invuln === invulnOrder)
      .map((m) =>
        job
          ? {
              ...m,
              mitigation: filterMitForJob(m.mitigation, job),
              carryOver: filterMitForJob(m.carryOver, job)
            }
          : m
      )
      .filter((m) => m.mitigation || m.carryOver);
    if (job && mech.extras && JOBS_WITH_EXTRAS.includes(job)) {
      mits.push({ role, mitigation: 'Extra' });
    }
    // Mechanic-level notes can be scoped to roles (e.g. healer-only advice). A mech
    // with a note for this role stays visible even when it has no mits for them.
    const noteVisible = !!mech.note && (!mech.noteRoles || mech.noteRoles.includes(role));
    if (mits.length === 0 && !noteVisible) continue;
    const shown = noteVisible ? mech : { ...mech, note: undefined };
    let group = groups.find((g) => g.phase === mech.phase);
    if (!group) {
      group = {
        phase: mech.phase,
        label: phaseLabel(mech.phase, tabTags),
        note: plan.phaseNotes?.[mech.phase],
        mechs: []
      };
      groups.push(group);
    }
    group.mechs.push({ mech: shown, mits });
  }
  return groups;
}

function phaseLabel(phase: string, tabTags?: Record<string, string[]> | null): string {
  if (tabTags) {
    const tab = Object.entries(tabTags).find(([, tags]) => tags.includes(phase));
    if (tab) return tab[0];
  }
  return phase.toUpperCase();
}
