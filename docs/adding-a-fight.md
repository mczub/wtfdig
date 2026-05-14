# Adding a fight

End-to-end walkthrough for adding a new fight to WTFDIG. For overarching repo conventions see [../AGENTS.md](../AGENTS.md). For writing-style rules (mechanic names, brevity, etc.) see [writing-style.md](writing-style.md).

This guide uses `ex9` (a hypothetical 7.6 extreme) as the running example. Substitute your own fight key and patch number.

## 1. Pick the route

Fights live under `src/routes/<patch>/<fightKey>/`:

- Patch folder is the **two-digit minor patch** without the `.` (`70`, `71`, …, `75`, `80`, `81`, etc.).
- Fight key is lowercase: `ex1`–`ex9`, `m1s`–`m12s`, etc.
- Ultimates go under `src/routes/ultimates/<fightKey>/` instead of a patch folder.

For our example:

```
src/routes/75/ex9/
  +page.svelte
  +page.ts
  data.ts
```

## 2. Scaffold the three files

### `+page.svelte`

Copy this verbatim — every fight uses the same wrapper:

```svelte
<script lang="ts">
  import type { FightConfig, Strat } from '$lib/types';
  import ModernFightStratPage from '../../../components/new/ModernFightStratPage.svelte';

  interface Props {
    data: {
      strats: Strat[];
      config: FightConfig;
    };
  }

  let { data }: Props = $props();
</script>

<ModernFightStratPage config={data.config} strats={data.strats} />
```

> Ultimates are one directory deeper, so the import becomes `../../../components/new/ModernFightStratPage.svelte` from a `routes/ultimates/<fight>/` path as well — count the `..`s based on your actual depth.

### `+page.ts`

```ts
import type { PageLoad } from './$types';
import { ex9FightConfig, ex9Strats } from './data';

export const load: PageLoad = () => {
  return {
    strats: ex9Strats,
    config: ex9FightConfig
  };
};
```

The exported names MUST be `<fightKey>FightConfig` and `<fightKey>Strats`. The Tier 1 validator imports them by name.

### `data.ts`

Start from the minimal shape and fill in phases as you write the strat:

```ts
import type { FightConfig, Strat } from '$lib/types';

export const ex9FightConfig: FightConfig = {
  fightKey: 'ex9',
  title: 'Full Duty Name (Extreme)',
  abbreviatedTitle: 'EX9',
  subtitle: 'EX9 Patch 7.6',
  cheatsheetTitle: 'EX9 Cheatsheet',
  strats: {
    hector: {
      label: 'Hector',
      badges: [{ text: 'NA', class: 'na-badge' }]
    }
  },
  defaultStratName: 'hector'
};

export const hector: Strat = {
  stratName: 'hector',
  description: '',
  stratUrl: {
    'Video by Hector Hectorson': 'https://www.youtube.com/watch?v=...'
  },
  strats: [
    {
      phaseName: 'Setup',
      mechs: [
        {
          mechanic: 'Light Parties',
          description: '...',
          imageUrl: './ex9/hector-setup-1.webp'
        }
      ]
    }
  ]
};

export const ex9Strats: Strat[] = [hector];
```

Refer to [src/lib/types.ts](../src/lib/types.ts) for the full set of optional fields (`toggles`, `tabTags`, `posterLayout`, `roleOptions`, etc.).

## 3. Add the fight to the validator registry

Open [tests/validate/data-loader.ts](../tests/validate/data-loader.ts) and add:

```ts
import { ex9FightConfig, ex9Strats } from '../../src/routes/75/ex9/data';
```

…and a new entry in `ALL_FIGHTS`:

```ts
{ label: 'EX9', config: ex9FightConfig, strats: ex9Strats },
```

**If you skip this step the fight is invisible to Tier 1.** No structural checks, no URL validation, no copy-paste detection. Worth gating on.

## 4. Add the sidebar entry

Sidebar links live in [src/lib/components/app-sidebar.svelte](../src/lib/components/app-sidebar.svelte). Add your fight under the right patch group so users can navigate to it.

## 5. Drop in images

- Encode as `.webp` (lossy, quality ~80 is fine for arena diagrams).
- Save under `static/<patch>/<fightKey>/`. For ultimates, `static/ultimates/<fightKey>/`.
- Filename convention: `<stratName>-<phase-or-mech>-<n>.webp`, e.g. `hector-setup-1.webp`, `hector-mountain-fire.webp`.
- Reference from `data.ts` with a leading `./` — `imageUrl: './ex9/hector-setup-1.webp'`. SvelteKit handles the base path.
- For partial highlights use the helpers from [src/lib/utils.ts](../src/lib/utils.ts): `getCircleMaskUrl(xPercent, yPercent, sizePercent)`, `getMultiCircleMaskUrl(...)`, or `getRectMaskUrl(...)`.

## 6. Toggle-dependent mechs (optional)

When a strat has variant choices (e.g. priority order, debuff handling) that change specific mechs:

```ts
toggles: [
  {
    key: 'mortalSlayer',
    label: 'Mortal Slayer',
    defaultValue: 'toxic',
    options: [
      { value: 'toxic', label: 'Toxic Conga' },
      { value: 'role',  label: 'Role Sides' }
    ]
  }
],
```

Then in the phase, `mechs` becomes a `Record` keyed by toggle option value:

```ts
mechs: {
  toxic: toxicMortalSlayer,   // MechanicStrat[]
  role:  roleMortalSlayer
}
```

The keys in this `Record` **must** match a `value` from the toggle's options (or the toggle's `defaultValue`). Tier 1 enforces this.

For phase-level toggles (different phases per variant rather than different mechs in the same phase), set `phase.tag` to the toggle key and Tier 1 will match it the same way.

## 7. Custom role selectors (optional)

If the fight uses non-standard groupings (e.g. light parties don't map 1:1 onto role+party), set `roleOptions: FightRoleOption[]` on `FightConfig`. Each option still has to map down to a base `Role` and `party` (1 or 2) — the per-player strats are keyed on those values internally.

## 8. Run the gates

Before opening the PR:

```sh
bun run check        # svelte-check
bun run test:tier1   # data validation
bun run test         # full suite (recommended)
bun run dev          # smoke-test the new fight in a browser
```

The dev-server smoke test is the most important one — Tier 1 doesn't render anything. Click through every phase, toggle every toggle, switch role and party, and verify images load and spotlights highlight the right area.

## 9. PR

Branch off `main`. In the PR description include:

- Fight + patch (e.g. "EX9 patch 7.6")
- Strats added (e.g. "Hector NA")
- Anything you couldn't validate locally

One fight per PR is the norm.
