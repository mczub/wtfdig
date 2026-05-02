<script lang="ts">
  import type { PlayerJob } from '$lib/arena';
  import type { ResolvedPosterSection } from './types';
  import ArenaRenderer from './ArenaRenderer.svelte';

  interface Props {
    section: ResolvedPosterSection;
    highlightJob?: PlayerJob;
    jobLabels?: Partial<Record<PlayerJob, string>>;
  }

  let { section, highlightJob, jobLabels }: Props = $props();
</script>

<div
  class="flex flex-col rounded-sm overflow-hidden border min-w-0 min-h-0"
  style:grid-column={`${section.col} / span ${section.w}`}
  style:grid-row={`${section.row} / span ${section.h}`}
  style:border-color={section.accentColor}
>
  <!-- Section header -->
  <div
    class="px-2 py-0.5 font-bold text-base text-white shrink-0"
    style:color={section.accentColor}
    style:font-family="'Roboto Condensed', sans-serif"
  >
    {section.title}
  </div>

  <!-- Arena diagram -->
  <div class="flex-1 min-h-0 overflow-hidden bg-black/30 p-1">
    <ArenaRenderer
      data={section.arena}
      highlight={section.highlight}
      gridW={section.w}
      gridH={section.h}
      {highlightJob}
      {jobLabels}
    />
  </div>
</div>
