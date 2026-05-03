<script lang="ts">
  import type { PosterLayout } from '$lib/types';
  import type { PlayerJob } from '$lib/arena';
  import type { ResolvedPosterSection } from './types';
  import type { Snippet } from 'svelte';
  import PosterSection from './PosterSection.svelte';

  interface Props {
    layout: PosterLayout;
    sections: ResolvedPosterSection[];
    posterRef?: HTMLDivElement;
    highlightJob?: PlayerJob;
    jobLabels?: Partial<Record<PlayerJob, string>>;
    /** Right-aligned controls rendered in the title bar (e.g. mode toggles). */
    titleActions?: Snippet;
  }

  let {
    layout,
    sections,
    posterRef = $bindable(),
    highlightJob,
    jobLabels,
    titleActions
  }: Props = $props();

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

  {#each sections as section}
    <PosterSection {section} {highlightJob} {jobLabels} />
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
