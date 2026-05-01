<script lang="ts">
  import { onMount, untrack } from 'svelte';
  import type { PlayerJob } from '$lib/arena';
  import type { ResolvedPosterSection } from './types';
  import ArenaRenderer from './ArenaRenderer.svelte';

  interface Props {
    section: ResolvedPosterSection;
    highlightJob?: PlayerJob;
    jobLabels?: Partial<Record<PlayerJob, string>>;
    /** Stable identifier scoping localStorage persistence (e.g., fightKey). */
    storagePrefix?: string;
  }

  let { section, highlightJob, jobLabels, storagePrefix }: Props = $props();

  let active: string[] = $state([]);
  let storageKey = $derived(
    storagePrefix ? `wtfdig:poster:${storagePrefix}:${section.title}:toggles` : null
  );
  let renderData = $derived(
    active.length ? { ...section.arena, activeToggles: active } : section.arena
  );

  onMount(() => {
    const key = untrack(() => storageKey);
    if (!key || typeof localStorage === 'undefined') return;
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return;
      const valid = new Set(
        (section.arena.groups ?? []).filter((g) => g.toggle).map((g) => g.id)
      );
      active = parsed.filter((x): x is string => typeof x === 'string' && valid.has(x));
    } catch {
      // Ignore corrupt entries; defaults to empty.
    }
  });

  $effect(() => {
    const key = storageKey;
    const snapshot = active.slice();
    if (!key || typeof localStorage === 'undefined') return;
    try {
      if (snapshot.length) localStorage.setItem(key, JSON.stringify(snapshot));
      else localStorage.removeItem(key);
    } catch {
      // Quota or privacy mode — nothing to do.
    }
  });

  function toggle(id: string) {
    active = active.includes(id) ? active.filter((x) => x !== id) : [...active, id];
  }
</script>

<div
  class="flex flex-col rounded-sm overflow-hidden border min-w-0 min-h-0"
  style:grid-column={`${section.col} / span ${section.w}`}
  style:grid-row={`${section.row} / span ${section.h}`}
  style:border-color={section.accentColor}
>
  <!-- Section header -->
  <div
    class="pl-2 pr-0.5 py-0.5 font-bold text-base text-white shrink-0 flex items-center justify-between gap-2"
    style:color={section.accentColor}
    style:font-family="'Roboto Condensed', sans-serif"
  >
    <span>{section.title}</span>
    {#if section.arena.groups?.some((g) => g.toggle)}
      <span class="flex items-center gap-1">
        {#each section.arena.groups.filter((g) => g.toggle) as g}
          <button
            type="button"
            class="text-[12px] px-1.5 py-0.5 rounded-sm border transition-colors"
            class:bg-white={active.includes(g.id)}
            class:text-black={active.includes(g.id)}
            class:text-white={!active.includes(g.id)}
            style:border-color={section.accentColor}
            onclick={() => toggle(g.id)}
          >{g.label ?? g.id}</button>
        {/each}
      </span>
    {/if}
  </div>

  <!-- Arena diagram -->
  <div class="flex-1 min-h-0 overflow-hidden bg-black/30 p-1">
    <ArenaRenderer data={renderData} highlight={section.highlight} gridW={section.w} gridH={section.h} {highlightJob} {jobLabels} />
  </div>
</div>
