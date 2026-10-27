<!--
  Stand-in for a strat <img> whose imageUrl is a raidplan reference (see
  $lib/raidplan/image). Loads the plan snapshot; spotlight masks are drawn over
  it the same way as over a screenshot.
-->
<script lang="ts" module>
  import { base } from '$app/paths';
  import { localPaths } from '$lib/raidplan/assets';
  import type { RaidplanPlan } from '$lib/raidplan/types';

  const planCache = new Map<string, Promise<RaidplanPlan>>();

  /** Fetch a plan snapshot from static/raidplan, once per page load. */
  function loadPlan(code: string): Promise<RaidplanPlan> {
    let cached = planCache.get(code);
    if (!cached) {
      cached = fetch(`${base}/raidplan/${localPaths.plan(code)}`).then((r) => {
        if (!r.ok) throw new Error(`raidplan snapshot ${code}: ${r.status}`);
        return r.json() as Promise<RaidplanPlan>;
      });
      cached.catch(() => planCache.delete(code));
      planCache.set(code, cached);
    }
    return cached;
  }
</script>

<script lang="ts">
  import RaidplanBoard from '$lib/raidplan/RaidplanBoard.svelte';
  import { RAIDPLAN_ASPECT, parseRaidplanImage } from '$lib/raidplan/image';
  import { CANVAS_H, CANVAS_W } from '$lib/raidplan/render';
  import type { SpotlightMask } from '$lib/types';
  import SpotlightOverlay from './SpotlightOverlay.svelte';

  interface Props {
    src: string;
    alt?: string;
    spotlight?: boolean;
    mask?: SpotlightMask | string | null;
    /** 'width': size like an image with this max height. 'contain': fill a sized box. */
    fit?: 'width' | 'contain';
    maxHeight?: string;
    /** Extra cap on width, e.g. '90vw' in the modal */
    maxWidth?: string;
    class?: string;
    style?: string;
  }

  let {
    src,
    alt = '',
    spotlight = false,
    mask = null,
    fit = 'width',
    maxHeight,
    maxWidth = '100%',
    class: className = '',
    style = ''
  }: Props = $props();

  const ref = $derived(parseRaidplanImage(src));
  let plan = $state<RaidplanPlan>();
  let failed = $state(false);

  $effect(() => {
    const code = ref?.code;
    if (!code) return;
    let cancelled = false;
    failed = false;
    loadPlan(code)
      .then((p) => !cancelled && (plan = p))
      .catch((e) => {
        console.warn(e);
        if (!cancelled) failed = true;
      });
    return () => (cancelled = true);
  });

  // Width-fit boards size like an image capped at maxHeight, keeping 16:9. The
  // width is fixed and max-width does the shrinking, so shrink-to-fit parents
  // (inline-block, w-fit) see a real intrinsic width instead of a cyclic %.
  const sizeStyle = $derived(
    fit === 'width'
      ? `width: ${maxHeight ? `calc(${maxHeight} * ${RAIDPLAN_ASPECT})` : '100%'}; max-width: ${maxWidth}; aspect-ratio: ${RAIDPLAN_ASPECT};`
      : ''
  );
</script>

<div
  class="relative {fit === 'contain' ? 'w-full h-full' : 'max-w-full'} {className}"
  style="{sizeStyle} {style}"
>
  {#if plan && ref}
    <RaidplanBoard
      {plan}
      step={ref.step}
      {fit}
      label={alt || undefined}
      class="w-full h-full"
    />
  {:else}
    <div
      class="w-full h-full flex items-center justify-center text-sm text-surface-400"
      class:bg-surface-900={fit === 'width'}
    >
      {failed ? 'Diagram unavailable' : ''}
    </div>
  {/if}
  {#if spotlight && mask}
    <!-- In contain mode the board is letterboxed, so the mask needs the canvas size to line up -->
    <SpotlightOverlay
      {mask}
      imageWidth={fit === 'contain' ? CANVAS_W : undefined}
      imageHeight={fit === 'contain' ? CANVAS_H : undefined}
    />
  {/if}
</div>
