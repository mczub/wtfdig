<!-- @ts-nocheck -->

<script lang="ts">
  // @ts-nocheck
  import { Modal } from '$lib/components/ui';
  import { X } from '@lucide/svelte/icons';
  import SpotlightOverlay from './SpotlightOverlay.svelte';
  import { renderDebuffTokens } from '$lib/debuffs';

  let { phase, mech = null, spotlight, imageOpenState = $bindable(), role = null } = $props();

  function openImageModal() {
    imageOpenState = true;
  }

  function closeImage() {
    imageOpenState = false;
  }

  function getImageModalUrl() {
    if (phase && !mech) {
      return phase.imageUrl;
    }
    if (mech?.imageUrl) {
      return mech.imageUrl;
    }
    if (mech?.strats) {
      return mech?.strats[0]?.imageUrl;
    }
    return '';
  }

  function getImageMask() {
    if (phase && !mech) {
      return phase.mask;
    }
    if (mech?.strats) {
      return mech.strats[0]?.mask;
    }
    return null;
  }
</script>

<Modal
  open={imageOpenState}
  onOpenChange={(e) => (imageOpenState = e.open)}
  contentBase="bg-surface-100 dark:bg-surface-900 p-4 space-y-4 shadow-xl flex flex-col border border-surface-600 max-w-[95vw] max-h-[95vh]"
  backdropClasses="backdrop-blur-sm"
  zIndex={'3000'}
>
  {#snippet content()}
    <header class="flex justify-between shrink-0">
      <div>
        <div class="font-bold text-lg lg:text-2xl">{phase ? phase?.phaseName : ''}</div>
        {#if phase?.description}<div class="text-xs lg:text-base whitespace-pre-wrap">
            {@html renderDebuffTokens(phase.description)}
          </div>{/if}
      </div>
      <X onclick={closeImage} class="cursor-pointer" />
    </header>
    <div class="flex flex-col min-h-0">
      <div class="font-bold text-base lg:text-xl shrink-0">{mech ? mech?.mechanic : ''}</div>
      <div class="whitespace-pre-wrap text-xs lg:text-lg shrink-0">
        {@html mech?.description ? renderDebuffTokens(mech.description) : ''}
      </div>
      <div class="flex items-center gap-1 text-xs lg:text-lg mb-0 shrink-0">
        {#if mech?.strats && mech.strats.length > 0}
          {#if mech.strats[0].toggleKey}
            <span class="shrink-0">⏩</span>
          {:else if role}
            <img
              src={`/icons/${role.toLowerCase()}.png`}
              alt={role}
              class="w-4 h-4 lg:w-6 lg:h-6 shrink-0 mt-1"
            />
          {/if}
        {/if}
        <div class="whitespace-pre-wrap">
          {@html mech?.strats?.[0]?.description ? renderDebuffTokens(mech.strats[0].description) : ''}
        </div>
      </div>
      {#if getImageModalUrl()}
        <div class="relative mt-4 inline-grid place-items-center self-center">
          <img
            class="rounded-md object-contain max-w-[90vw] max-h-[75vh]"
            style="grid-area: 1/1;"
            src={getImageModalUrl()}
            alt={mech?.mechanic || phase?.phaseName || 'Strategy image'}
          />
          {#if spotlight && getImageMask()}
            <div
              class="pointer-events-none w-full h-full"
              style="grid-area: 1/1;"
            >
              <SpotlightOverlay mask={getImageMask()} />
            </div>
          {/if}
        </div>
      {/if}
    </div>
  {/snippet}
</Modal>
