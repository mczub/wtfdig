import { base } from '$app/paths';
import { localPaths } from '$lib/raidplan/assets';
import type { RaidplanPlan } from '$lib/raidplan/types';
import type { PageLoad } from './$types';

export const prerender = false;

const DEFAULT_PLAN = 'c2L5iJfuYIWXk1v7';

// Viewer for imported plans: /tools/raidplan-preview?plan=<code>
export const load: PageLoad = async ({ fetch, url }) => {
  const code = url.searchParams.get('plan') || DEFAULT_PLAN;
  const res = await fetch(`${base}/raidplan/${localPaths.plan(code)}`);
  const plan = res.ok ? ((await res.json()) as RaidplanPlan) : null;
  return {
    title: 'Raidplan Preview',
    description: 'Check an imported raidplan before using it in a fight',
    code,
    plan
  };
};
