<script lang="ts">
  import PipPortal from '$lib/components/PipPortal.svelte';
  import PosterGrid from './PosterGrid.svelte';
  import { Eye, User } from '@lucide/svelte/icons';
  import type { PosterLayout } from '$lib/types';
  import type { PlayerJob } from '$lib/arena';
  import type { ResolvedPosterSection } from './types';

  interface Props {
    layout: PosterLayout;
    sections: ResolvedPosterSection[];
    selectedJob?: PlayerJob;
    selectedJobLabel?: string;
    jobLabels?: Partial<Record<PlayerJob, string>>;
    title?: string;
    popOut?: () => Promise<void>;
    popIn?: () => void;
    isPopped?: boolean;
    isSupported?: boolean;
  }

  let {
    layout,
    sections,
    selectedJob,
    selectedJobLabel,
    jobLabels,
    title = 'Poster Cheatsheet',
    popOut = $bindable<() => Promise<void>>(async () => {}),
    popIn = $bindable<() => void>(() => {}),
    isPopped = $bindable(false),
    isSupported = $bindable(false)
  }: Props = $props();

  // Overlay owns its own view mode so the user can flip between overall and
  // role view from inside the PIP without touching the (possibly closed) modal.
  let mode = $state<'overview' | 'role'>('overview');
  // If the role selection goes away (e.g. user changes strat), don't leave the
  // overlay stuck in role mode highlighting nothing.
  $effect(() => {
    if (!selectedJob && mode === 'role') mode = 'overview';
  });
  const highlightJob = $derived<PlayerJob | undefined>(
    mode === 'role' ? selectedJob : undefined
  );

  const baseW = $derived(layout.width ?? 1920);
  const baseH = $derived(layout.height ?? 1080);

  let containerEl: HTMLDivElement | undefined = $state();
  let containerW = $state(0);
  let containerH = $state(0);

  // Svelte's `bind:clientWidth` uses a ResizeObserver created in the main
  // window, which doesn't fire reliably for elements that have been moved
  // into a PIP document. Construct the observer from the PIP window's own
  // context so it stays subscribed across the document boundary.
  $effect(() => {
    if (!isPopped || !containerEl) return;
    const win = containerEl.ownerDocument.defaultView as (Window & typeof globalThis) | null;
    if (!win) return;
    const update = () => {
      containerW = containerEl!.clientWidth;
      containerH = containerEl!.clientHeight;
    };
    update();
    const ro = new win.ResizeObserver(update);
    ro.observe(containerEl);
    return () => ro.disconnect();
  });

  // Fit the poster to the PIP window's available area, preserving aspect.
  const scale = $derived.by(() => {
    if (containerW <= 0 || containerH <= 0) return 0;
    return Math.min(containerW / baseW, containerH / baseH);
  });
</script>

<PipPortal
  bind:popOut
  bind:popIn
  bind:isPopped
  bind:isSupported
  {title}
  width={1280}
  height={720}
  rootFontSize={16}
>
  {#snippet children({ isPopped: popped })}
    {#if popped}
      <div
        bind:this={containerEl}
        class="w-screen h-screen overflow-hidden flex justify-center items-center bg-black"
      >
        {#if scale > 0}
          <div
            class="origin-top-left shrink-0"
            style:transform={`scale(${scale})`}
            style:width={`${baseW * scale}px`}
            style:height={`${baseH * scale}px`}
          >
            <PosterGrid {layout} {sections} {highlightJob} {jobLabels}>
              {#snippet titleActions()}
                <button
                  class={mode === 'overview'
                    ? 'btn preset-filled-primary-500'
                    : 'btn preset-tonal-surface'}
                  onclick={() => (mode = 'overview')}
                >
                  <Eye size={18} /> Overall
                </button>
                <button
                  class={mode === 'role'
                    ? 'btn preset-filled-primary-500'
                    : 'btn preset-tonal-surface'}
                  onclick={() => (mode = 'role')}
                  disabled={!selectedJob}
                  title={!selectedJob ? 'Select a role to enable' : ''}
                >
                  <User size={18} /> Role{selectedJob
                    ? ` (${selectedJobLabel ?? selectedJob})`
                    : ''}
                </button>
              {/snippet}
            </PosterGrid>
          </div>
        {/if}
      </div>
    {/if}
  {/snippet}
</PipPortal>
