<script lang="ts">
  import type { FightConfig } from '$lib/types';
  import { base } from '$app/paths';
  import { Construction } from '@lucide/svelte';

  interface Props {
    config: FightConfig;
    message?: string;
  }

  let {
    config,
    message = 'This fight will be available once the tier is live and PF strategies stabilize.'
  }: Props = $props();
</script>

<div class="container mx-auto my-12 flex grow flex-col items-center justify-center gap-8 px-4">
  <div
    class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 p-8 flex flex-col items-center gap-6 max-w-lg text-center"
  >
    <div class="rounded-full bg-warning-500/20 p-4">
      <Construction class="size-12 text-warning-500" />
    </div>

    <div class="flex flex-col gap-2">
      <h1 class="text-2xl font-bold">{config.title}</h1>
      {#if config.subtitle}
        <p class="text-lg text-surface-400">{config.subtitle}</p>
      {/if}
    </div>

    <div class="flex flex-col gap-2">
      <p class="text-xl font-semibold text-warning-500">Under Construction</p>
      <p class="text-surface-400">{message}</p>
    </div>

    <a href="{base}/" class="btn preset-tonal-secondary"> ← Back to Home </a>
  </div>
</div>
