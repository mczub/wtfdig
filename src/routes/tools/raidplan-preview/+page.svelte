<script lang="ts">
  import RaidplanBoard from '$lib/raidplan/RaidplanBoard.svelte';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

  const ROLES = ['MT', 'OT', 'H1', 'H2', 'M1', 'M2', 'R1', 'R2'];
  let role = $state<string | null>(null);
</script>

<svelte:head>
  <title>Raidplan Preview | wtfdig</title>
</svelte:head>

<div class="container grow mx-auto px-4 py-6 space-y-6">
  <header class="space-y-2">
    <h1 class="text-2xl font-bold">Raidplan preview</h1>
    {#if data.plan}
      <p class="text-surface-300">
        {data.plan.name} ({data.code}) - {data.plan.steps} steps. Use
        <code>raidplanImage('{data.code}', step)</code> as a strat's imageUrl.
      </p>
      <div class="flex flex-wrap items-center gap-2">
        <span class="text-sm text-surface-400">Spotlight:</span>
        <button
          class="px-3 py-1 rounded border border-surface-600 text-sm"
          class:bg-surface-700={role === null}
          onclick={() => (role = null)}>None</button
        >
        {#each ROLES as r (r)}
          <button
            class="px-3 py-1 rounded border border-surface-600 text-sm"
            class:bg-surface-700={role === r}
            onclick={() => (role = r)}>{r}</button
          >
        {/each}
      </div>
    {:else}
      <p class="text-surface-300">
        No snapshot for <code>{data.code}</code>. Import it with
        <code>bun scripts/import-raidplan.ts {data.code}</code>.
      </p>
    {/if}
  </header>

  {#if data.plan}
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
      {#each { length: data.plan.steps }, s (s)}
        <section class="space-y-1">
          <h2 class="font-semibold">Step {s + 1}</h2>
          <RaidplanBoard
            plan={data.plan}
            step={s}
            highlight={role ? [role] : []}
            class="w-full rounded-lg border border-surface-700"
          />
        </section>
      {/each}
    </div>
  {/if}
</div>
