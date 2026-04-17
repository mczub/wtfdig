<script lang="ts">
  import type { ArenaDiagramData } from '$lib/arena';
  import SpotlightOverlay from '../SpotlightOverlay.svelte';
  import ArenaRenderer from './ArenaRenderer.svelte';

  interface Props {
    imageUrl?: string;
    mask?: string;
    alt?: string;
    spotlight?: boolean;
    arenaData?: ArenaDiagramData;
    highlight?: string[];
  }

  let { imageUrl, mask, alt = '', spotlight = false, arenaData, highlight }: Props = $props();
</script>

{#if arenaData}
  <!-- SVG arena diagram -->
  <div class="w-full h-full">
    <ArenaRenderer data={arenaData} {highlight} />
  </div>
{:else if imageUrl}
  <!-- Static image fallback -->
  <div class="relative w-full h-full overflow-hidden rounded">
    <img
      src={imageUrl}
      {alt}
      class="w-full h-full object-contain"
      loading="lazy"
    />
    {#if spotlight && mask}
      <SpotlightOverlay {mask} />
    {/if}
  </div>
{/if}
