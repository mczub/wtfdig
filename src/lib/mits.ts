import type { InvulnOrder, Job, MechMits, MechRoleMits, MitPlan, Role, TankBoss } from './types';

const JOBS_BY_ROLE: Record<Role, Job[]> = {
  Tank: ['PLD', 'WAR', 'DRK', 'GNB'],
  Healer: ['WHM', 'SCH', 'AST', 'SGE'],
  Melee: ['MNK', 'DRG', 'NIN', 'SAM', 'RPR', 'VPR'],
  Ranged: ['BRD', 'MCH', 'DNC', 'BLM', 'SMN', 'RDM', 'PCT']
};
const PHYS_RANGED: Job[] = ['BRD', 'MCH', 'DNC'];
const CASTERS: Job[] = ['BLM', 'SMN', 'RDM', 'PCT'];

// Default job per role and light party until the player picks one.
const DEFAULT_JOBS: Record<Role, [Job, Job]> = {
  Tank: ['PLD', 'WAR'],
  Healer: ['WHM', 'SGE'],
  Melee: ['MNK', 'DRG'],
  Ranged: ['BRD', 'BLM']
};

// Jobs with a party-wide mitigation (the sheet's "Party Mit"); entries naming it are
// dropped for everyone else.
const JOBS_WITH_PARTY_MIT: Job[] = ['PLD', 'WAR', 'DRK', 'GNB', 'BRD', 'MCH', 'DNC', 'RDM', 'PCT'];

// Jobs with an extra mitigation, shown as "Extra" on mechanics the sheet flags.
const JOBS_WITH_EXTRAS: Job[] = ['PLD', 'MCH', 'DNC', 'RDM', 'PCT', 'RPR'];

/** R1 is always a physical ranged and R2 a caster, so the Ranged list depends on the party. */
export function jobsFor(role: Role, party: number | undefined): Job[] {
  if (role === 'Ranged') return party === 2 ? CASTERS : PHYS_RANGED;
  return JOBS_BY_ROLE[role];
}

export function defaultJob(role: Role, party: number | undefined): Job {
  return DEFAULT_JOBS[role][party === 2 ? 1 : 0];
}

/** P3 boss: MT holds Chaos, OT holds Exdeath. */
export function defaultTankBoss(party: number | undefined): TankBoss {
  return party === 2 ? 'Exdeath' : 'Chaos';
}

/** P5 invuln order: MT 1st, OT 2nd. */
export function defaultInvulnOrder(party: number | undefined): InvulnOrder {
  return party === 2 ? 2 : 1;
}

// Drop "Party Mit" segments for jobs that have none; names otherwise stay generic and the
// panel shows the job's actual skill as an icon.
function filterMitForJob(text: string | undefined, job: Job): string | undefined {
  if (!text) return undefined;
  const kept = text
    .split(' + ')
    .filter((segment) => JOBS_WITH_PARTY_MIT.includes(job) || !segment.includes('Party Mit'));
  return kept.length ? kept.join(' + ') : undefined;
}

function mitMatches(mit: MechRoleMits, role: Role, party: number | undefined, job: Job): boolean {
  if (mit.role !== role) return false;
  if (mit.party && party && mit.party !== party) return false;
  if (mit.jobs && !mit.jobs.includes(job)) return false;
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
  job: Job;
  tabTags?: Record<string, string[]> | null;
  /** Include tank self (buster) mits. Default true. */
  includeSelf?: boolean;
  /** Tank's P3 boss; entries for the other boss are dropped. */
  tankBoss?: TankBoss;
  /** Tank's P5 invuln order; entries for the other order are dropped. */
  invulnOrder?: InvulnOrder;
}

/** One player's mits, bucketed by phase in plan order. A mech with nothing for them is
 * dropped unless its note applies to their role. */
export function groupMitsByPhase(plan: MitPlan, opts: MitViewOptions): MitPhaseGroup[] {
  const { role, party, job, tabTags, includeSelf = true, tankBoss, invulnOrder } = opts;
  const groups: MitPhaseGroup[] = [];
  for (const mech of plan.mechs) {
    const mits: MechRoleMits[] = mech.mits
      .filter((m) => (includeSelf || !m.self) && mitMatches(m, role, party, job))
      .filter((m) => !m.boss || !tankBoss || m.boss === tankBoss)
      .filter((m) => !m.invuln || !invulnOrder || m.invuln === invulnOrder)
      .map((m) => ({
        ...m,
        mitigation: filterMitForJob(m.mitigation, job),
        carryOver: filterMitForJob(m.carryOver, job)
      }))
      .filter((m) => m.mitigation || m.carryOver);
    if (mech.extras && JOBS_WITH_EXTRAS.includes(job)) {
      mits.push({ role, mitigation: 'Extra' });
    }
    const noteVisible = !!mech.note && (!mech.noteRoles || mech.noteRoles.includes(role));
    if (mits.length === 0 && !noteVisible) continue;
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
    group.mechs.push({ mech: noteVisible ? mech : { ...mech, note: undefined }, mits });
  }
  return groups;
}

function phaseLabel(phase: string, tabTags?: Record<string, string[]> | null): string {
  const tab = tabTags && Object.entries(tabTags).find(([, tags]) => tags.includes(phase));
  return tab ? tab[0] : phase.toUpperCase();
}
