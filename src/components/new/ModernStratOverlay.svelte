<script lang="ts">
  import PipPortal from '$lib/components/PipPortal.svelte';
  import SpotlightOverlay from '../SpotlightOverlay.svelte';
  import RoleIcon from '$lib/components/RoleIcon.svelte';
  import { ChevronLeft, ChevronRight, SkipBack } from '@lucide/svelte';
  import type { PhaseStrats, Role } from '$lib/types';
  import { renderDebuffTokens } from '$lib/debuffs';

  interface Props {
    individualStrat: PhaseStrats[] | string;
    spotlight?: boolean;
    role?: Role | null;
    title?: string;
    popOut?: () => Promise<void>;
    popIn?: () => void;
    isPopped?: boolean;
    isSupported?: boolean;
  }

  let {
    individualStrat,
    spotlight = true,
    role = null,
    title = 'Strat Overlay',
    popOut = $bindable<() => Promise<void>>(async () => {}),
    popIn = $bindable<() => void>(() => {}),
    isPopped = $bindable(false),
    isSupported = $bindable(false)
  }: Props = $props();

  type OverlayItem = {
    phase: any;
    mech: any | null;
    imgUrl: string;
    headerName: string;
    phaseName: string;
    description?: string | null;
    stratDesc?: string | null;
    mask?: any;
  };

  const items = $derived.by<OverlayItem[]>(() => {
    const phases = typeof individualStrat === 'string' ? [] : individualStrat;
    const out: OverlayItem[] = [];
    for (const phase of phases) {
      const mechs = Array.isArray(phase.mechs) ? phase.mechs : null;
      if (mechs && mechs.length > 0) {
        for (const mech of mechs) {
          const imgUrl =
            (mech.strats?.[0]?.imageUrl as string | undefined) ??
            (mech.imageUrl as string | undefined) ??
            (phase.imageUrl as string | undefined);
          if (!imgUrl) continue;
          out.push({
            phase,
            mech,
            imgUrl,
            headerName: mech.mechanic ?? phase.phaseName,
            phaseName: phase.phaseName,
            description: (mech.description as string | undefined) ?? null,
            stratDesc: (mech.strats?.[0]?.description as string | undefined) ?? null,
            mask: mech.strats?.[0]?.mask ?? phase.mask
          });
        }
      } else if (phase.imageUrl) {
        out.push({
          phase,
          mech: null,
          imgUrl: phase.imageUrl as string,
          headerName: phase.phaseName,
          phaseName: phase.phaseName,
          description: (phase.description as string | undefined) ?? null,
          stratDesc: null,
          mask: phase.mask
        });
      }
    }
    return out;
  });

  let currentIndex = $state(0);
  const total = $derived(items.length);
  const current = $derived(items[currentIndex]);

  // Group items by phase for the jump-to-phase dropdown. Items from the same
  // phase are contiguous (we build them in phase order), so a single pass that
  // records the first index for each new phase name is enough.
  type PhaseGroup = { phaseName: string; startIndex: number };
  const phaseGroups = $derived.by<PhaseGroup[]>(() => {
    const groups: PhaseGroup[] = [];
    let lastName: string | null = null;
    items.forEach((item, idx) => {
      if (item.phaseName !== lastName) {
        groups.push({ phaseName: item.phaseName, startIndex: idx });
        lastName = item.phaseName;
      }
    });
    return groups;
  });

  // Index of the first item in the current item's phase — used as the select's
  // value so the dropdown reflects the active phase even when navigating
  // through individual mechs within it.
  const currentPhaseStart = $derived.by(() => {
    let start = 0;
    for (const g of phaseGroups) {
      if (g.startIndex > currentIndex) break;
      start = g.startIndex;
    }
    return start;
  });

  function jumpToPhase(startIndex: number) {
    if (startIndex >= 0 && startIndex < total) currentIndex = startIndex;
  }

  // Snap index back into range when items shrink (e.g. strat / role change).
  $effect(() => {
    if (total === 0) {
      if (currentIndex !== 0) currentIndex = 0;
    } else if (currentIndex >= total) {
      currentIndex = total - 1;
    }
  });

  function next() {
    if (total === 0) return;
    currentIndex = (currentIndex + 1) % total;
  }
  function prev() {
    if (total === 0) return;
    currentIndex = (currentIndex - 1 + total) % total;
  }
  function restart() {
    currentIndex = 0;
  }

  let imgDims = $state<{ width: number; height: number } | null>(null);
  // Reset measured dims when the displayed image changes so SpotlightOverlay
  // doesn't apply the previous image's natural dimensions to the new one.
  $effect(() => {
    void current?.imgUrl;
    imgDims = null;
  });
  function onImgLoad(e: Event) {
    const img = e.currentTarget as HTMLImageElement;
    if (img.naturalWidth && img.naturalHeight) {
      imgDims = { width: img.naturalWidth, height: img.naturalHeight };
    }
  }
</script>

<PipPortal
  bind:popOut
  bind:popIn
  bind:isPopped
  bind:isSupported
  {title}
  width={520}
  height={400}
  rootFontSize={14}
>
  {#snippet children({ isPopped: popped })}
    {#if popped}
      <div class="flex flex-col h-screen w-screen bg-surface-950 text-surface-50">
        <div class="flex-1 relative bg-surface-900 overflow-hidden">
          {#if current}
            <img
              class="absolute inset-0 w-full h-full object-contain"
              src={current.imgUrl}
              alt={current.headerName}
              onload={onImgLoad}
            />
            {#if spotlight && current.mask}
              <SpotlightOverlay
                mask={current.mask}
                imageWidth={imgDims?.width}
                imageHeight={imgDims?.height}
              />
            {/if}

            <div
              class="absolute top-0 left-0 right-0 bg-surface-950/80 px-3 py-1.5 pointer-events-none"
            >
              <div class="flex items-center justify-between gap-2">
                <span class="capitalize font-semibold text-base text-white truncate">
                  {current.headerName}
                </span>
                {#if current.mech}
                  <span
                    class="capitalize text-xs uppercase tracking-wide text-surface-300 shrink-0"
                  >
                    {current.phaseName}
                  </span>
                {/if}
              </div>
            </div>

            {#if current.description || current.stratDesc}
              <div
                class="absolute bottom-0 left-0 right-0 bg-surface-950/80 px-3 py-1.5 max-h-[45%] overflow-y-auto pointer-events-none text-left"
              >
                {#if current.description}
                  <div
                    class="text-sm text-surface-100 whitespace-pre-wrap leading-snug"
                  >
                    {@html renderDebuffTokens(current.description)}
                  </div>
                {/if}
                {#if current.stratDesc}
                  <div
                    class="flex items-start gap-2 text-sm text-surface-50 leading-snug mt-1"
                  >
                    {#if role}
                      <RoleIcon {role} />
                    {/if}
                    <div class="whitespace-pre-wrap flex-1 min-w-0">
                      {@html renderDebuffTokens(current.stratDesc)}
                    </div>
                  </div>
                {/if}
              </div>
            {/if}
          {:else}
            <div
              class="absolute inset-0 flex items-center justify-center text-surface-400 text-sm"
            >
              No mechanics with images
            </div>
          {/if}
        </div>

        <div
          class="shrink-0 flex items-center gap-1 px-2 py-1.5 border-t border-surface-700 bg-surface-900"
        >
          <button
            class="p-1.5 rounded hover:bg-surface-800 disabled:opacity-30 disabled:cursor-not-allowed"
            onclick={restart}
            disabled={total === 0}
            title="Return to start"
            aria-label="Return to start"
          >
            <SkipBack size={16} />
          </button>
          <button
            class="p-1.5 rounded hover:bg-surface-800 disabled:opacity-30 disabled:cursor-not-allowed"
            onclick={prev}
            disabled={total === 0}
            title="Previous"
            aria-label="Previous"
          >
            <ChevronLeft size={16} />
          </button>
          <div class="flex-1 min-w-0 flex items-center justify-center gap-2">
            {#if current}
              <span class="text-surface-400 tabular-nums text-sm shrink-0">
                {currentIndex + 1}/{total}
              </span>
              <select
                class="bg-surface-800 hover:bg-surface-700 text-surface-50 text-sm font-semibold capitalize px-2 py-1 rounded border border-surface-700 cursor-pointer truncate min-w-0 max-w-full"
                value={String(currentPhaseStart)}
                onchange={(e) =>
                  jumpToPhase(parseInt((e.currentTarget as HTMLSelectElement).value, 10))}
                aria-label="Jump to phase"
              >
                {#each phaseGroups as group (group.startIndex)}
                  <option value={String(group.startIndex)}>{group.phaseName}</option>
                {/each}
              </select>
            {:else}
              <span class="text-surface-400 text-sm">No items</span>
            {/if}
          </div>
          <button
            class="p-1.5 rounded hover:bg-surface-800 disabled:opacity-30 disabled:cursor-not-allowed"
            onclick={next}
            disabled={total === 0}
            title="Next"
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    {/if}
  {/snippet}
</PipPortal>
