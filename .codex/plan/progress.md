## Progress Log

### Step 1 — Inventory duplicated logic (complete)

- Catalogued both EX5/EX6 loaders: they each declare the same `Role`, `Alignment`, `PlayerMechStrat`, `MechanicStrat`, `PhaseStrats`, and `Strat` interfaces plus helper functions (`getStringObject`, `getStratArray`) alongside hundreds of lines of raw strat data. Difference is limited to the actual mechanic entries and a single `stratState` key (`mm2` vs `lc`).
- Confirmed both `+page.svelte` files share nearly identical state management (role/party localStorage persistence, hash serialization via `deepEquals`, `Cheatsheet`/`StratView` wiring, copy link handler, spotlight toggle). Only deviations are fight metadata (title text, default strat states, which mechanic tags exist).
- Noticed there is currently no timeline data provided for EX5/EX6 (`timeline={[]}` in both templates), suggesting that future modularization could add timeline arrays alongside strat definitions.

### Step 2 — Modularize fight data/types (complete)

- Split the heavy loader files so `+page.ts` now focus exclusively on returning `strats` while re-exporting the shared types (`Role`, `Alignment`, `Strat`, etc.) for the Svelte views.
- Introduced `data.ts` per fight (EX5 + EX6) under their respective route directories. Each `data.ts` now owns the helper builders plus the raw strat definitions, and exposes a typed `ex5Strats` / `ex6Strats` array.
- Promoted the common type definitions into `src/lib/types.ts`, eliminating the per-route duplicates and giving other fights a single import location.
- Consolidated repeated helper functions (`getStringObject`, `getStratArray`) into `src/lib/utils.ts` so both 7.3 fights can reuse the same implementation without redefining them.
- This isolates the multi-hundred-line strategy objects from framework boilerplate, making it straightforward to expand the dataset or reuse the helpers without touching the loader entry point.

### Step 3 - Shared controller / UI primitives (complete)

- Wrapped both EX5 and EX6 pages in `<FightStratState>` so the provider now owns localStorage persistence, hash syncing, and exposing the active strat/toggle setters via slot props. All bespoke `$effect` blocks, `deepEquals` helpers, and manual hash parsing were removed from the pages.
- Replaced the inline strat/role/party/toggle markup with `<FightStratControls>` that is fed directly from the provider (`selectStrat`, `setStratState`, `setRole`, `setParty`). Each fight just supplies its toggle metadata (EX5 `mm2`, EX6 `lc`) and the warning/controls UI stays consistent.
- Updated the remaining page logic (`Cheatsheet`, `StratView`, PF description copy, link buttons) to consume the provider values by deriving `optionsString`, `individualStrat`, and `pfDescription` inside the slot. Function signatures now accept the relevant props, preserving the previous behavior (hash + role persistence) with far less duplication.

### Step 4 - Data-driven presentation shell (complete)

- Added reusable fight configuration types (`FightConfig`, toggle metadata, option/PF contexts) to `src/lib/types.ts` so fights can describe their presentation requirements declaratively.
- Extended `src/routes/73/ex5/data.ts` and `src/routes/73/ex6/data.ts` to export `ex5FightConfig` / `ex6FightConfig` objects (titles, subtitles, strat labels, toggle definitions, tab tags, default states, and summary builders) alongside the raw strat arrays; loaders now return both strats and config.
- Created `src/components/new/FightStratPage.svelte`, a shared presentation shell that wraps `FightStratState`, `FightStratControls`, `Cheatsheet`, and `StratView` while consuming the fight config for metadata, toggles, and description builders.
- Simplified both EX5/EX6 `+page.svelte` files to thin wrappers that pass their `data.config`/`data.strats` into `FightStratPage`, making the templates identical and future fights data-driven.
