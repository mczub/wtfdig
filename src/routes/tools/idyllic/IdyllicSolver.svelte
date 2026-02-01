<script lang="ts">
  import {
    IDYLLIC_STRATEGIES,
    TETHER_POSITIONS,
    getTetherDescription,
    type TetherPosition
  } from './data';
  import {
    ArrowDown,
    ArrowUp,
    MoveVertical,
    MoveDiagonal,
    CircleDot,
    ChevronsDown
  } from '@lucide/svelte';

  // State
  let selectedStrategy = $state('dn');
  let selectedTether = $state<TetherPosition | null>(null);
  let cardinalsFirst = $state<boolean | null>(null); // true = cardinals, false = intercards
  let northSafe = $state<boolean | null>(null); // true = north, false = south
  let defamationsFirst = $state<boolean | null>(null); // true = defamations, false = stacks
  let holeCloneNorth = $state<boolean | null>(null); // true = north, false = south

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
    holeCloneNorth = null;
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
  <title>WTFDIG!?</title>
  <meta name="description" content="Quick solver tool for M12S Idyllic Dream mechanic" />
</svelte:head>

<div
  class="flex flex-col gap-3 md:gap-4 p-4 md:p-6 w-full max-w-[500px] md:max-w-[600px] mx-auto box-border overflow-hidden"
>
  <!-- Header -->
  <header class="flex justify-between items-center shrink-0">
    <h1 class="text-xl md:text-2xl font-bold m-0">M12S Idyllic Helper</h1>
    <button
      class="px-4 py-2 md:px-5 md:py-2.5 rounded-lg bg-destructive text-destructive-foreground border-none font-semibold cursor-pointer text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
      onclick={reset}
      disabled={!selectedTether &&
        cardinalsFirst === null &&
        northSafe === null &&
        defamationsFirst === null &&
        holeCloneNorth === null}
    >
      Reset
    </button>
  </header>

  <!-- Strategy Selector -->
  <div class="flex items-center gap-2 md:gap-3 shrink-0">
    <label for="strategy-select" class="font-semibold text-sm md:text-base">Strategy</label>
    <select
      id="strategy-select"
      class="flex-1 px-3 py-2 md:px-4 md:py-2.5 rounded-lg border border-border bg-background text-foreground text-sm md:text-base"
      bind:value={selectedStrategy}
    >
      {#each IDYLLIC_STRATEGIES as strat}
        <option value={strat.value}>{strat.label}</option>
      {/each}
    </select>
  </div>

  <!-- Mechanic Buttons -->
  <div class="flex flex-wrap flex-col gap-2 md:gap-3 justify-center shrink-0">
    <div class="flex gap-2 md:gap-3 items-center">
      <div class="font-semibold text-sm md:text-base text-muted-foreground">First clones</div>
      <button
        class="flex flex-row items-center gap-1 px-2 py-2 md:px-4 md:py-2.5 rounded-lg border border-border font-normal cursor-pointer text-sm md:text-base transition-all duration-150 {cardinalsFirst ===
        true
          ? 'bg-zinc-700 text-white border-zinc-600 font-semibold'
          : 'bg-muted text-muted-foreground hover:bg-accent'}"
        onclick={() => (cardinalsFirst = cardinalsFirst === true ? null : true)}
      >
        <MoveVertical class="size-4" /> Cardinals
      </button>
      <button
        class="flex flex-row items-center gap-1 px-2 py-2 md:px-4 md:py-2.5 rounded-lg border border-border font-normal cursor-pointer text-sm md:text-base transition-all duration-150 {cardinalsFirst ===
        false
          ? 'bg-zinc-700 text-white border-zinc-600 font-semibold'
          : 'bg-muted text-muted-foreground hover:bg-accent'}"
        onclick={() => (cardinalsFirst = cardinalsFirst === false ? null : false)}
      >
        <MoveDiagonal class="size-4" /> Intercards
      </button>
    </div>

    <div class="flex gap-2 md:gap-3 items-center">
      <div class="font-semibold text-sm md:text-base text-muted-foreground">Cone telegraphs</div>
      <button
        class="flex flex-row items-center gap-1 px-2 py-2 md:px-4 md:py-2.5 rounded-lg border border-border font-normal cursor-pointer text-sm md:text-base transition-all duration-150 {northSafe ===
        true
          ? ' bg-destructive text-primary-foreground border-red-500 font-semibold'
          : 'bg-muted text-muted-foreground hover:bg-accent'}"
        onclick={() => (northSafe = northSafe === true ? null : true)}
      >
        <ArrowUp class="size-4" /> N Safe
      </button>
      <button
        class="flex flex-row items-center gap-1 px-2 py-2 md:px-4 md:py-2.5 rounded-lg border border-border font-normal cursor-pointer text-sm md:text-base transition-all duration-150 {northSafe ===
        false
          ? 'bg-blue-700 text-primary-foreground border-blue-500 font-semibold'
          : 'bg-muted text-muted-foreground hover:bg-accent'}"
        onclick={() => (northSafe = northSafe === false ? null : false)}
      >
        <ArrowDown class="size-4" /> S Safe
      </button>
    </div>

    <div class="flex gap-2 md:gap-3 items-center">
      <div class="font-semibold text-sm md:text-base text-muted-foreground">Boss tethers</div>
      <button
        class="flex flex-row items-center gap-1 px-2 py-2 md:px-4 md:py-2.5 rounded-lg border border-border font-normal cursor-pointer text-sm md:text-base transition-all duration-150 {defamationsFirst ===
        true
          ? 'bg-primary text-primary-foreground border-primary font-semibold'
          : 'bg-muted text-muted-foreground hover:bg-accent'}"
        onclick={() => (defamationsFirst = defamationsFirst === true ? null : true)}
      >
        <CircleDot class="size-4" /> Defams First
      </button>
      <button
        class="flex flex-row items-center gap-1 px-2 py-2 md:px-4 md:py-2.5 rounded-lg border border-border font-normal cursor-pointer text-sm md:text-base transition-all duration-150 {defamationsFirst ===
        false
          ? 'bg-yellow-700 text-primary-foreground border-yellow-800 font-semibold'
          : 'bg-muted text-muted-foreground hover:bg-accent'}"
        onclick={() => (defamationsFirst = defamationsFirst === false ? null : false)}
      >
        <ChevronsDown class="size-4" /> Stacks First
      </button>
    </div>

    <div class="flex gap-2 md:gap-3 items-center">
      <div class="font-semibold text-sm md:text-base text-muted-foreground">Black hole clone</div>
      <button
        class="flex flex-row items-center gap-1 px-2 py-2 md:px-4 md:py-2.5 rounded-lg border border-border font-normal cursor-pointer text-sm md:text-base transition-all duration-150 {holeCloneNorth ===
        true
          ? ' bg-destructive text-primary-foreground border-red-500 font-semibold'
          : 'bg-muted text-muted-foreground hover:bg-accent'}"
        onclick={() => (holeCloneNorth = holeCloneNorth === true ? null : true)}
      >
        <ArrowUp class="size-4" /> North
      </button>
      <button
        class="flex flex-row items-center gap-1 px-2 py-2 md:px-4 md:py-2.5 rounded-lg border border-border font-normal cursor-pointer text-sm md:text-base transition-all duration-150 {holeCloneNorth ===
        false
          ? 'bg-blue-700 text-primary-foreground border-blue-500 font-semibold'
          : 'bg-muted text-muted-foreground hover:bg-accent'}"
        onclick={() => (holeCloneNorth = holeCloneNorth === false ? null : false)}
      >
        <ArrowDown class="size-4" /> South
      </button>
    </div>

    {#if northSafe !== null && holeCloneNorth !== null}
      {#if holeCloneNorth}
        <div class="font-semibold text-sm md:text-base">
          {#if northSafe}
            Platform clone is N/S safe, arena clone is E/W safe
          {:else}
            Platform clone is E/W safe, arena clone is N/S safe
          {/if}
        </div>
      {:else}
        <div class="font-semibold text-sm md:text-base">
          {#if northSafe}
            Platform clone is E/W safe, arena clone is N/S safe
          {:else}
            Platform clone is N/S safe, arena clone is E/W safe
          {/if}
        </div>
      {/if}
    {/if}
  </div>

  <!-- Compass Selector -->
  <div class="flex flex-col items-center shrink-0">
    <span class="font-semibold text-sm md:text-base mb-1 md:mb-2 text-muted-foreground"
      >Your Clone Tether</span
    >
    <div class="compass-container">
      {#each COMPASS_LAYOUT as { pos, angle }}
        {@const isCardinal = ['N', 'E', 'S', 'W'].includes(pos)}
        {@const radius = 38}
        {@const x = 50 + radius * Math.cos((angle * Math.PI) / 180)}
        {@const y = 50 + radius * Math.sin((angle * Math.PI) / 180)}
        <button
          class="compass-btn {isCardinal ? 'cardinal' : 'intercardinal'}
            {selectedTether === pos
            ? 'bg-primary text-primary-foreground border-primary'
            : 'bg-muted text-foreground border-border hover:bg-accent'}"
          style="left: {x}%; top: {y}%;"
          onclick={() => (selectedTether = selectedTether === pos ? null : pos)}
        >
          {pos}
        </button>
      {/each}
    </div>
  </div>

  <!-- Summary Output -->
  <div
    class="flex-1 min-h-0 flex flex-col bg-card border border-border rounded-xl p-3 md:p-4 overflow-auto"
  >
    {#if summaryText()}
      <div
        class="text-sm md:text-base leading-relaxed flex-1 [&_strong]:font-bold [&_strong]:text-base md:[&_strong]:text-lg [&_strong]:block [&_strong]:mb-1"
      >
        {@html summaryText()!.replace(/\n/g, '<br>')}
      </div>
    {:else}
      <div class="text-muted-foreground italic text-sm md:text-base">
        Select your clone tether position to see your assignments
      </div>
    {/if}
  </div>
</div>

<style>
  .compass-container {
    position: relative;
    width: 180px;
    height: 180px;
  }

  .compass-btn {
    position: absolute;
    transform: translate(-50%, -50%);
    border-radius: 9999px;
    border-width: 1px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.15s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .compass-btn.cardinal {
    width: 44px;
    height: 44px;
    font-size: 0.875rem;
  }

  .compass-btn.intercardinal {
    width: 40px;
    height: 40px;
    font-size: 0.75rem;
  }

  /* Tablet and up */
  @media (min-width: 768px) {
    .compass-container {
      width: 220px;
      height: 220px;
    }

    .compass-btn.cardinal {
      width: 56px;
      height: 56px;
      font-size: 1rem;
    }

    .compass-btn.intercardinal {
      width: 48px;
      height: 48px;
      font-size: 0.875rem;
    }
  }
</style>
