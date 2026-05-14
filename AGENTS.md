# AGENTS.md

Technical guidelines for contributing to WTFDIG. Read this before opening a PR.

> Stylistic guidelines for writing mechanics and phases (capitalization, brevity, duplicate-mechanic handling) live in [docs/writing-style.md](docs/writing-style.md). This file covers code, structure, and tooling only.

## Stack

- **Runtime / package manager:** Bun `1.3.6` (pinned via `packageManager` in [package.json](package.json)). Do not introduce `npm`, `yarn`, or `pnpm` lockfiles.
- **Framework:** SvelteKit `2.59.x` with Svelte `5.55.x` — use runes (`$state`, `$derived`, `$props`, `$effect`). No legacy reactive statements (`$:`) in new code.
- **Language:** TypeScript `5.9.x`, `strict: true`. The `tsconfig.json` extends SvelteKit's generated config — don't widen the root config without a reason.
- **Build / dev:** Vite `8.0.x` via [vite.config.ts](vite.config.ts). Production build is fully static via `@sveltejs/adapter-static` with `fallback: '404.html'`.
- **Styling:** Tailwind CSS `4.2.x` (installed through `@tailwindcss/vite`) plus the shadcn-svelte component layer. Theme tokens live in [src/app.css](src/app.css); the [tailwind.config.ts](tailwind.config.ts) is mostly carried for the `darkMode: 'class'` setting and color aliases.
- **Tests:** Vitest `4.1.x` with `jsdom` for component tests via `@testing-library/svelte`.
- **Lint / format:** ESLint `9.x` flat config ([eslint.config.js](eslint.config.js)) + Prettier `3.8.x` ([.prettierrc](.prettierrc)). Prettier owns whitespace; ESLint owns correctness.

## Commands

Always go through the npm scripts so the `--bun` runtime flag stays consistent.

| Task | Command |
| --- | --- |
| Install deps | `bun install` |
| Dev server | `bun run dev` |
| Production build | `bun run build` |
| Preview build | `bun run preview` |
| Typecheck | `bun run check` |
| Lint | `bun run lint` |
| Format (writes) | `bun run format` |
| All tests | `bun run test` |
| Tier 1 data validation only | `bun run test:tier1` |
| Unit tests only | `bun run test:unit` |
| Component tests only | `bun run test:component` |

## Repo layout

```
src/
  routes/
    <patch>/<fightKey>/        # e.g. 70/ex1, 74/m12s — one folder per fight
      +page.svelte             # thin wrapper around ModernFightStratPage
      +page.ts                 # PageLoad that returns { config, strats }
      data.ts                  # FightConfig + Strat[] exports
      posterData.ts            # optional poster layout (only some fights)
    ultimates/<fightKey>/      # e.g. ultimates/ucob, ultimates/tea
    tools/, changelog/         # site-level pages
  lib/
    types.ts                   # canonical data shapes — source of truth
    utils.ts                   # mask helpers, resolveMechs, formatting
    arena.ts, debuffs.ts       # diagram + debuff helpers
    components/                # app-wide components (sidebar, RoleIcon, ui/)
    components/ui/             # shadcn-svelte generated — see "UI components"
    hooks/                     # is-mobile.svelte.ts and similar
  components/
    new/                       # ModernFightStratPage and friends
    poster/                    # poster cheatsheet renderer
static/
  <patch>/<fightKey>/*.webp    # fight images, referenced as './<fightKey>/...'
  ultimates/<fightKey>/*.webp
tests/
  validate/tier1.test.ts       # structural data validation (runs in CI)
  validate/data-loader.ts      # registry of every fight — must be updated for new fights
  unit/                        # pure-function tests
  component/                   # @testing-library/svelte tests
```

## Adding or editing a fight

Full walkthrough lives in [docs/adding-a-fight.md](docs/adding-a-fight.md). The non-negotiable rules:

1. A fight directory MUST export `<fightKey>FightConfig: FightConfig` and `<fightKey>Strats: Strat[]` from `data.ts`. Names must match the pattern — Tier 1 imports them by name.
2. **Register every new fight in [tests/validate/data-loader.ts](tests/validate/data-loader.ts).** If the fight isn't in the `ALL_FIGHTS` array it doesn't get validated, and validation gaps tend to ship.
3. `+page.svelte` should stay a thin wrapper that forwards `data.config` and `data.strats` into `ModernFightStratPage`. Don't reintroduce page-level logic.
4. `+page.ts` should be a pure `load` that returns `{ strats, config }`. No `fetch`, no `browser`-only code — the site is statically prerendered.

## Data shape rules

- **[src/lib/types.ts](src/lib/types.ts) is the source of truth.** Don't widen a field's type ad hoc to make a new strat fit — if you need a new shape, update the type and let TypeScript find the call sites.
- A field typed `string | Record<string, string>` is toggle-aware: pass a string for the default case, a `Record` keyed by toggle value when the text varies per toggle.
- Toggle keys used inside `phase.mechs` (when it's a `Record`) MUST appear in the matching `FightToggleConfig.options[].value` (or be the toggle's `defaultValue`). Tier 1 enforces this.
- Roles are exactly `'Tank' | 'Healer' | 'Melee' | 'Ranged'`. Parties are exactly `1 | 2`. Don't invent new values; add a `FightRoleOption[]` to `roleOptions` instead.
- Raidplan URLs must match `https://raidplan.io/plan/<id>` with an optional `#<positive int>` fragment.
- HTML inside descriptions is rendered via `{@html}`. Only `<strong>` is required to balance; other inline tags (`<b>`, `<u>`, `<em>`) can be unclosed by convention. Don't add unbalanced `<strong>` — Tier 1 will fail.

## Image assets

- Store as `.webp` under `static/<patch>/<fightKey>/` (or `static/ultimates/<fightKey>/`).
- Reference from `data.ts` with a leading `./`, e.g. `imageUrl: './ex1/hector-setup-1.webp'`. SvelteKit's `paths.base` handling resolves these at runtime; do not hardcode `/` or `${base}`.
- For partial-image highlights use the spotlight helpers from [src/lib/utils.ts](src/lib/utils.ts): `getCircleMaskUrl`, `getMultiCircleMaskUrl`, `getRectMaskUrl`, or the structured variants (`spotlight`, `spotlightMulti`, `spotlightRect`).
- Filename convention is `<stratName>-<phase>-<n>.webp` (see existing fights). Don't ship `.png`/`.jpg` without a reason — keep visual assets `.webp` for size.

## Testing

- **Tier 1 (`bun run test:tier1`)** is the data-quality gate. It catches missing descriptions, bad roles/parties, malformed raidplan URLs, unmatched `<strong>` tags, ordinal typos (`1th`/`2st`), and toggle/mech key mismatches. Run it locally before pushing.
- **Unit tests** go in `tests/unit/` and exercise pure helpers from `src/lib/`.
- **Component tests** go in `tests/component/` and use `@testing-library/svelte`. Use a harness file (see [tests/component/collapsible-harness.svelte](tests/component/collapsible-harness.svelte)) when you need to mount with controlled props/state.
- CI ([.github/workflows/validate.yml](.github/workflows/validate.yml)) runs the three suites independently on every PR. A red Tier 1 job blocks merge.

## Lint, format, typecheck

- `bun run check` (svelte-check) is the typecheck gate. Treat warnings as errors for new code.
- `bun run lint` runs Prettier (check) then ESLint. CI doesn't currently enforce lint, but PRs should land clean.
- Running `bun run format` before committing is recommended but not required.
- `// @ts-nocheck` exists in a few legacy files. Don't add new ones — fix the types instead.

## UI components

- `src/lib/components/ui/` is shadcn-svelte ([components.json](components.json), baseColor `zinc`). Treat these files as generated. If you need to customize a primitive, prefer wrapping it in `src/lib/components/` or `src/components/` over hand-editing the generated source.
- Re-exports live in [src/lib/components/ui/index.ts](src/lib/components/ui/index.ts). Tooltip uses the namespaced API (`import * as Tooltip from '$lib/components/ui/tooltip'`); most others go through the barrel.
- Icons come from `@lucide/svelte`. Import the individual icon file (`@lucide/svelte/icons/chevron-down`) when you only need one — it tree-shakes better than the barrel.

## Contributor workflow

- Branch off `main`. PRs target `main`.
- Before opening a PR, run at minimum: `bun run check` and `bun run test:tier1`. Run the full `bun run test` if you touched `src/lib/` or any component.
- Commits should be self-contained — Tier 1 catches structural regressions on push, but a green Tier 1 doesn't mean the PR is done.
- Prefer one fight per PR for data changes. Bundling multiple fights makes review and rollback harder.
- Fill in [.github/pull_request_template.md](.github/pull_request_template.md) — type of change, strat touched, local validation checklist, and anything you couldn't validate locally. GitHub loads it automatically when you open a PR.
