<script lang="ts">
  import type { PosterLayout } from '$lib/types';
  import { evaluateVisibility, type PlayerJob } from '$lib/arena';
  import type { ResolvedPosterSection } from './types';
  import type { Snippet } from 'svelte';
  import PosterSection from './PosterSection.svelte';

  interface Props {
    layout: PosterLayout;
    sections: ResolvedPosterSection[];
    posterRef?: HTMLDivElement;
    highlightJob?: PlayerJob;
    jobLabels?: Partial<Record<PlayerJob, string>>;
    stratState?: Record<string, string | null | undefined>;
    stratKey?: string;
    /** Right-aligned controls rendered in the title bar (e.g. mode toggles). */
    titleActions?: Snippet;
  }

  let {
    layout,
    sections,
    posterRef = $bindable(),
    highlightJob,
    jobLabels,
    stratState,
    stratKey,
    titleActions
  }: Props = $props();

  // Section-level visibility filter. `highlightJob` reflects whether the user
  // is in "role mode"; section visibility predicates that reference jobs only
  // resolve when a role is actively selected.
  let visibleSections = $derived(
    sections.filter((s) =>
      evaluateVisibility(s.visibleWhen, { selectedJob: highlightJob, stratState, stratKey })
    )
  );

  let cols = $derived(layout.cols ?? 16);
  let rows = $derived(layout.rows ?? 9);
  let bgColor = $derived(layout.bgColor ?? '#1a1a2e');
  let width = $derived(layout.width ?? 1920);
  let height = $derived(layout.height ?? 1080);
</script>

<div
  bind:this={posterRef}
  class="poster-grid"
  style:width={`${width}px`}
  style:height={`${height}px`}
  style:background-color={bgColor}
  style:grid-template-columns={`repeat(${cols}, 1fr)`}
  style:grid-template-rows={`repeat(${rows}, 1fr)`}
>
  <!-- Title bar -->
  {#if layout.title}
    <div class="poster-title" style:grid-column={`1 / ${cols + 1}`}>
      <span
        class="text-2xl font-bold text-white"
        style="font-family: 'Roboto Condensed', sans-serif">{layout.title}</span
      >
      {#if layout.subtitle}
        <span class="text-lg text-white/60 ml-4" style="font-family: 'Roboto Condensed', sans-serif"
          >{layout.subtitle}</span
        >
      {/if}
      {#if titleActions}
        <div class="ml-auto flex items-center gap-2">
          {@render titleActions()}
        </div>
      {/if}
    </div>
  {/if}

  {#each visibleSections as section}
    <PosterSection {section} {highlightJob} {jobLabels} {stratState} {stratKey} />
  {/each}
</div>

<style>
  .poster-grid {
    display: grid;
    gap: 6px;
    padding: 10px;
    overflow: hidden;
    box-sizing: border-box;
  }

  .poster-title {
    display: flex;
    align-items: center;
    padding: 2px 8px;
  }
</style>
