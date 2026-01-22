## Refactor Plan -- Patch 7.3 (EX5 & EX6 Only)

### Goals & Constraints

- Make EX5/EX6 content easier to extend, reason about, and reuse without touching other fights.
- Keep the refactor scoped to `src/routes/73/ex5`, `src/routes/73/ex6`, and any **new** components placed under `src/components/new`.
- Preserve the current data shown to users (strategy text/images, URL hash semantics, saved role/party selections).
- Improve readability for both humans and agents by isolating data, logic, and presentation responsibilities.

### Current Pain Points

- **Monolithic data blobs**: Each `+page.ts` mixes type declarations, helper functions, and hundreds of lines of fight data. The duplication between EX5/EX6 increases the chance of drift.
- **Duplicated client logic**: The two `+page.svelte` files copy/paste the same role/party persistence, URL hash syncing, dropdown handling, and layout structure.
- **Implicit state structure**: Mechanic toggle keys (`mm2`, `lc`, etc.) are buried inside helper functions, making it hard to see what toggles exist for a given fight.
- **No shared view primitives**: Cards/tables that present assignments, toggles, and metadata are all inlined, so adding a new fight requires redoing the same markup.

### Architecture Direction

1. **Data modules per fight**
   - Move raw strat definitions (phases, mechanics, assignments, timeline) into plain objects exported from `data.ts` files inside each fight directory.
   - Keep the shared interfaces (`Role`, `Alignment`, etc.) in a co-located `types.ts` to avoid cross-fight coupling while removing duplication inside the directory.

2. **Fight-specific loaders**
   - Reduce `+page.ts` to: import local `buildStrats()` helper, expose `load` returning `strats`, and (optionally) a `timeline`.
   - Encapsulate helper utilities (e.g., `getStringObject`, `getStratArray`) within the local module tree so they can be unit-tested or reused when multiple strats exist.

3. **Shared interactive logic**
   - Extract the common role/party persist + hash sync behavior into a reusable Svelte component or module (e.g., `FightStratController.svelte` + hook) stored under `src/components/new`.
   - `+page.svelte` should focus on composing the controller with fight-specific data (title, options map, mechanic toggles) and render presentation components.

4. **UI primitives**
   - Build small presentational components (cards for assignments, copy-link buttons, info blocks) under `src/components/new` to remove duplicated markup.
   - Ensure these components accept slot-based content or typed props so future fights can reuse them with minimal churn.

5. **Configuration-first toggles**
   - Represent mechanic toggles (like `mm2` or `lc`) in a declarative config object so Svelte views can iterate instead of referencing hard-coded keys.
   - Store default toggle values alongside each strat definition to keep URL hash + UI defaults in sync.

### Implementation Steps

1. **Inventory & Document** -- Catalogue every repeated type/helper/DOM pattern within EX5/EX6. Define the minimal API surface the shared controller must expose (selected strat, strat state map, role/party, event callbacks).
2. **Modularize Data** -- Create `src/routes/73/ex5/data.ts` and `src/routes/73/ex6/data.ts` that export typed strat arrays, toggle metadata, and timeline data. Update `+page.ts` files to import from these modules.
3. **Extract Types/Helpers** -- Move the duplicated interfaces and builder helpers into `src/routes/73/ex5/types.ts` and `src/routes/73/ex6/types.ts` (or a shared file if truly identical). Ensure both fights import from these modules so edits happen in one place per fight.
4. **Build Shared Controller Component** -- Under `src/components/new`, add a stateful component (or composable store) that encapsulates:
   - selected strat handling,
   - toggle state computation + serialization,
   - localStorage role/party persistence,
   - URL hash syncing and share-link generation.
     Update both `+page.svelte` files to use this component instead of inline logic.
5. **Introduce UI Primitives** -- Extract repeated layout structures (strategy selection grid, assignment cards, info panels) into focused components in `src/components/new`. Replace the duplicated markup in EX5/EX6 with these primitives.
6. **Wire Configs to Views** -- Refactor `+page.svelte` instances so they consume declarative configs (titles, dropdown options, toggle definitions) and render `<StratView>` with the shared controller outputs.
7. **Data-Driven Presentation** -- Push all remaining presentation/configuration metadata (fight titles, strat labels, toggle definitions, tab tags, PF-description templates, default selections) into the `data.ts` modules. The EX5/EX6 `+page.svelte` files should become identical shells that simply import a shared generic page component and feed it the fight config + strats. This enables future fights to onboard by editing data files only.
8. **Test & Document** -- Manually verify that:
   - both fights render identical content to today,
   - URL hashes reflect toggle changes,
   - saved roles persist per fight,
   - new components are generic enough for the next fight. Document the new workflow inside `background.md` for future agents.

### Open Questions / Risks

- Do we want one shared 7.3 type module for both fights, or keep them separate to avoid cross-release coupling? (default plan: shared file inside `src/routes/73` only if identical structures are required by both fights.)
- The current load data is purely static. If future fights need async fetching, ensure the controller API does not assume synchronous availability.
- Need to confirm no other routes import these helper types today before relocating them.
