<script lang="ts">
  import {
    IDYLLIC_STRATEGIES,
    TETHER_POSITIONS,
    getTetherDescription,
    type TetherPosition
  } from './data';

  // State
  let selectedStrategy = $state('dn');
  let selectedTether = $state<TetherPosition | null>(null);
  let cardinalsFirst = $state<boolean | null>(null); // true = cardinals, false = intercards
  let northSafe = $state<boolean | null>(null); // true = north, false = south
  let defamationsFirst = $state<boolean | null>(null); // true = defamations, false = stacks

  // Computed
  const summaryText = $derived(() => {
    if (!selectedTether) return null;
    return getTetherDescription(selectedStrategy, selectedTether);
  });

  const rememberItems = $derived(() => {
    const items: string[] = [];
    if (cardinalsFirst !== null) {
      items.push(cardinalsFirst ? '🐦 Cardinals First' : '🐦 Intercards First');
    }
    if (northSafe !== null) {
      items.push(northSafe ? '🍦 North Clone E/W Safe' : '🍦 South Clone E/W Safe');
    }
    if (defamationsFirst !== null) {
      items.push(defamationsFirst ? '💥 Defamations First' : '💥 Stacks First');
    }
    return items;
  });

  function reset() {
    selectedTether = null;
    cardinalsFirst = null;
    northSafe = null;
    defamationsFirst = null;
  }

  // Compass position layout - angles for positioning
  const COMPASS_LAYOUT: { pos: TetherPosition; angle: number }[] = [
    { pos: 'N', angle: -90 },
    { pos: 'NE', angle: -45 },
    { pos: 'E', angle: 0 },
    { pos: 'SE', angle: 45 },
    { pos: 'S', angle: 90 },
    { pos: 'SW', angle: 135 },
    { pos: 'W', angle: 180 },
    { pos: 'NW', angle: -135 }
  ];
</script>

<svelte:head>
  <title>Idyllic Dream Solver - M12S | WTFDIG</title>
  <meta name="description" content="Quick solver tool for M12S Idyllic Dream mechanic" />
</svelte:head>

<div
  class="flex flex-col gap-3 p-4 w-full max-w-[500px] mx-auto max-h-dvh box-border overflow-hidden"
>
  <!-- Header -->
  <header class="flex justify-between items-center shrink-0">
    <h1 class="text-xl font-bold m-0">Idyllic Dream Solver</h1>
    <button
      class="px-3 py-1.5 rounded-lg bg-destructive text-destructive-foreground border-none font-semibold cursor-pointer text-sm disabled:opacity-50 disabled:cursor-not-allowed"
      onclick={reset}
      disabled={!selectedTether &&
        cardinalsFirst === null &&
        northSafe === null &&
        defamationsFirst === null}
    >
      Reset
    </button>
  </header>

  <!-- Strategy Selector -->
  <div class="flex items-center gap-2 shrink-0">
    <label for="strategy-select" class="font-semibold text-sm">Strategy:</label>
    <select
      id="strategy-select"
      class="flex-1 px-2 py-1.5 rounded-lg border border-border bg-background text-foreground text-sm"
      bind:value={selectedStrategy}
    >
      {#each IDYLLIC_STRATEGIES as strat}
        <option value={strat.value}>{strat.label}</option>
      {/each}
    </select>
  </div>

  <!-- Mechanic Buttons -->
  <div class="flex flex-wrap flex-col gap-2 justify-center shrink-0">
    <div class="flex gap-2 items-center">
      <div class="font-semibold text-sm mb-1 text-muted-foreground">First clones</div>
      <button
        class="px-2.5 py-1.5 rounded-lg border border-border font-medium cursor-pointer text-xs transition-all duration-150 {cardinalsFirst ===
        true
          ? 'bg-primary text-primary-foreground border-primary'
          : 'bg-muted text-muted-foreground hover:bg-accent'}"
        onclick={() => (cardinalsFirst = cardinalsFirst === true ? null : true)}
      >
        Cardinals
      </button>
      <button
        class="px-2.5 py-1.5 rounded-lg border border-border font-medium cursor-pointer text-xs transition-all duration-150 {cardinalsFirst ===
        false
          ? 'bg-primary text-primary-foreground border-primary'
          : 'bg-muted text-muted-foreground hover:bg-accent'}"
        onclick={() => (cardinalsFirst = cardinalsFirst === false ? null : false)}
      >
        Intercards
      </button>
    </div>

    <div class="flex gap-2 items-center">
      <div class="font-semibold text-sm mb-1 text-muted-foreground">Cone telegraphs</div>
      <button
        class="px-2.5 py-1.5 rounded-lg border border-border font-medium cursor-pointer text-xs transition-all duration-150 {northSafe ===
        true
          ? 'bg-primary text-primary-foreground border-primary'
          : 'bg-muted text-muted-foreground hover:bg-accent'}"
        onclick={() => (northSafe = northSafe === true ? null : true)}
      >
        N Safe
      </button>
      <button
        class="px-2.5 py-1.5 rounded-lg border border-border font-medium cursor-pointer text-xs transition-all duration-150 {northSafe ===
        false
          ? 'bg-primary text-primary-foreground border-primary'
          : 'bg-muted text-muted-foreground hover:bg-accent'}"
        onclick={() => (northSafe = northSafe === false ? null : false)}
      >
        S Safe
      </button>
    </div>

    <div class="flex gap-2 items-center">
      <div class="font-semibold text-sm mb-1 text-muted-foreground">Boss tether spawns</div>
      <button
        class="px-2.5 py-1.5 rounded-lg border border-border font-medium cursor-pointer text-xs transition-all duration-150 {defamationsFirst ===
        true
          ? 'bg-primary text-primary-foreground border-primary'
          : 'bg-muted text-muted-foreground hover:bg-accent'}"
        onclick={() => (defamationsFirst = defamationsFirst === true ? null : true)}
      >
        Defams First
      </button>
      <button
        class="px-2.5 py-1.5 rounded-lg border border-border font-medium cursor-pointer text-xs transition-all duration-150 {defamationsFirst ===
        false
          ? 'bg-primary text-primary-foreground border-primary'
          : 'bg-muted text-muted-foreground hover:bg-accent'}"
        onclick={() => (defamationsFirst = defamationsFirst === false ? null : false)}
      >
        Stacks First
      </button>
    </div>
  </div>

  <!-- Compass Selector -->
  <div class="flex flex-col items-center shrink-0">
    <span class="font-semibold text-sm mb-1 text-muted-foreground">Your Clone Tether</span>
    <div class="relative" style="width: 160px; height: 160px;">
      {#each COMPASS_LAYOUT as { pos, angle }}
        {@const isCardinal = ['N', 'E', 'S', 'W'].includes(pos)}
        {@const radius = 38}
        {@const x = 50 + radius * Math.cos((angle * Math.PI) / 180)}
        {@const y = 50 + radius * Math.sin((angle * Math.PI) / 180)}
        {@const size = isCardinal ? 40 : 36}
        <button
          class="absolute rounded-full border font-semibold cursor-pointer transition-all duration-150 flex items-center justify-center
            {selectedTether === pos
            ? 'bg-primary text-primary-foreground border-primary'
            : 'bg-muted text-foreground border-border hover:bg-accent'}"
          style="left: {x}%; top: {y}%; width: {size}px; height: {size}px; font-size: {isCardinal
            ? '0.75rem'
            : '0.65rem'}; transform: translate(-50%, -50%);"
          onclick={() => (selectedTether = selectedTether === pos ? null : pos)}
        >
          {pos}
        </button>
      {/each}
    </div>
  </div>

  <!-- Remember Section
  {#if rememberItems().length > 0}
    <div class="shrink-0 bg-muted/50 rounded-lg p-2">
      <h3 class="text-sm font-semibold m-0 mb-1">📌 Remember</h3>
      <div class="flex flex-wrap flex-col gap-1.5">
        {#each rememberItems() as item}
          <span
            class="px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
            >{item}</span
          >
        {/each}
      </div>
    </div>
  {/if} -->

  <!-- Summary Output -->
  <div
    class="flex-1 min-h-0 flex flex-col bg-card border border-border rounded-xl p-3 overflow-auto"
  >
    {#if summaryText()}
      <div
        class="text-sm leading-relaxed flex-1 [&_strong]:text-primary [&_strong]:text-base [&_strong]:block [&_strong]:mb-1"
      >
        {@html summaryText()!.replace(/\n/g, '<br>')}
      </div>
    {:else}
      <div class="text-muted-foreground italic text-sm">
        Select your clone tether position to see your assignments
      </div>
    {/if}
  </div>
</div>
