<script lang="ts">
  import { base } from '$app/paths';
  import { slide } from 'svelte/transition';
  import ChevronDown from '@lucide/svelte/icons/chevron-down';
  import { Separator } from '$lib/components/ui/separator';
  import { Grid3x3, History, Hammer, TriangleAlert, ChartColumn } from '@lucide/svelte';

  let openState = $state({
    savage: true,
    ultimates: true,
    chaotic: true,
    extreme: true,
    archives: true
  });

  function toggle(key: keyof typeof openState) {
    openState[key] = !openState[key];
  }
</script>

<svelte:head>
  <title>WTFDIG!?</title>
</svelte:head>

<div class="container grid grow mx-auto my-6">
  <div class="@container flex flex-col items-center">
    <div class="flex justify-center">
      <img class="w-[240px] @2xl:w-[300px]" src="{base}/wtfdig-icon-1024.png" alt="WTFDIG Icon" />
    </div>
    <div class="mx-auto w-full max-w-[362px] @2xl:max-w-[708px] flex flex-col gap-4 px-4">
       <div class="flex flex-row items-center gap-2 text-left text-lg font-bold">
          <Hammer class="size-6 text-primary" />Tools
      </div>
      <div class="grid grid-cols-2 gap-4">
      <div class="card preset-outlined-secondary-500 gap-4 p-4 justify-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://analyzer.wtfdig.info"
          class="flex flex-col items-start mx-2"
        >
          <div class="flex flex-row items-center gap-2 text-lg">
            <ChartColumn class="size-6 text-primary " /><span class="font-semibold">analyzer</span>
          </div>
          <div class="text-base text-surface-400">fflogs-based pull analyzer</div>
        </a>
      </div>
      <div class="card preset-outlined-secondary-500 gap-4 p-4 justify-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://board.wtfdig.info"
          class="flex flex-col items-start mx-2"
        >
          <div class="flex flex-row items-center gap-2 text-lg">
            <Grid3x3 class="size-6 text-primary " /><span class="font-semibold">board</span>
          </div>
          <div class="text-base text-surface-400">view + bundle strategy boards</div>
        </a>
      </div>
      <div class="card preset-outlined-secondary-500 gap-4 p-4 justify-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://wayback.wtfdig.info"
          class="flex flex-col items-start mx-2"
        >
          <div class="flex flex-row items-center gap-2 text-lg">
            <History class="size-6 text-primary " /><span class="font-semibold">wayback</span>
          </div>
          <div class="text-base text-surface-400">version history for raidplans</div>
        </a>
      </div>
      <div class="card preset-outlined-secondary-500 gap-4 p-4 justify-center">
        <a
          href="{base}/tools/idyllic"
          class="flex flex-col items-start mx-2"
        >
          <div class="flex flex-row items-center gap-2 text-lg">
            <span class="font-semibold">idyllic helper</span>
          </div>
          <div class="text-base text-surface-400">m12s idyllic dream helper</div>
        </a>
      </div>
      </div>
    </div>

    <div
      class="grid grid-cols-1 @2xl:grid-cols-2 @5xl:grid-cols-3 gap-4 mt-4 w-full max-w-[362px] @2xl:max-w-[708px] @5xl:max-w-[1022px] px-4 @5xl:px-0"
    >
      <div class="grid gap-4 content-start min-w-[300px]">
        <div
          class="card flex flex-col preset-filled-surface-100-900 border-[1px] border-surface-200-800 p-4 text-center gap-4"
        >
          <button class="flex w-full items-center justify-between" onclick={() => toggle('savage')}>
            <div class="text-lg font-bold">Savage</div>
            <ChevronDown
              class="h-4 w-4 opacity-50 transition-transform duration-200 {openState['savage']
                ? 'rotate-180'
                : ''}"
            />
          </button>
          {#if openState['savage']}
            <div transition:slide class="flex flex-col gap-4">
              <div class="flex flex-col">
                <div class="text-left text-sm font-semibold mb-3">Patch 7.4</div>
                <div class="flex flex-col gap-4">
                  <a
                    href="{base}/74/m9s"
                    class="btn preset-tonal-secondary border border-secondary-500"
                    >AAC Heavyweight M1 (M9S)</a
                  >
                  <a
                    href="{base}/74/m10s"
                    class="btn preset-tonal-secondary border border-secondary-500"
                    >AAC Heavyweight M2 (M10S)</a
                  >
                  <a
                    href="{base}/74/m11s"
                    class="btn preset-tonal-secondary border border-secondary-500"
                    >AAC Heavyweight M3 (M11S)</a
                  >
                  <a
                    href="{base}/74/m12s"
                    class="btn preset-tonal-secondary border border-secondary-500"
                    >AAC Heavyweight M4 (M12S)</a
                  >
                </div>
              </div>
            </div>
          {/if}
        </div>
        <div
          class="card flex flex-col preset-filled-surface-100-900 border-[1px] border-surface-200-800 p-4 text-center gap-4"
        >
          <button
            class="flex w-full items-center justify-between"
            onclick={() => toggle('ultimates')}
          >
            <div class="text-lg font-bold">Ultimate</div>
            <ChevronDown
              class="h-4 w-4 opacity-50 transition-transform duration-200 {openState['ultimates']
                ? 'rotate-180'
                : ''}"
            />
          </button>
          {#if openState['ultimates']}
            <div transition:slide class="flex flex-col gap-4">
              <a
                href="{base}/ultimates/umad"
                class="btn preset-tonal-secondary border border-secondary-500"
              >
                <TriangleAlert class="size-4 text-warning-500" />Dancing Mad (Ultimate)</a
              >
              <a
                href="{base}/ultimates/fru"
                class="btn preset-tonal-secondary border border-secondary-500"
                >Futures Rewritten (Ultimate)</a
              >
              <a
                href="{base}/ultimates/tea"
                class="btn preset-tonal-secondary border border-secondary-500"
                >The Epic of Alexander (Ultimate)</a
              >
              <a
                href="{base}/ultimates/ucob"
                class="btn preset-tonal-secondary border border-secondary-500"
                >The Unending Coil of Bahamut (Ultimate)</a
              >
            </div>
          {/if}
        </div>
        <div
          class="card flex flex-col preset-filled-surface-100-900 border-[1px] border-surface-200-800 p-4 text-center gap-4"
        >
          <button
            class="flex w-full items-center justify-between"
            onclick={() => toggle('chaotic')}
          >
            <div class="text-lg font-bold">Chaotic</div>
            <ChevronDown
              class="h-4 w-4 opacity-50 transition-transform duration-200 {openState['chaotic']
                ? 'rotate-180'
                : ''}"
            />
          </button>
          {#if openState['chaotic']}
            <div transition:slide class="flex flex-col gap-4">
              <div class="flex flex-col">
                <div class="flex flex-col gap-4">
                  <a
                    href="{base}/71/chaotic"
                    class="btn preset-tonal-secondary border border-secondary-500"
                    >The Cloud of Darkness (Chaotic)</a
                  >
                </div>
              </div>
            </div>
          {/if}
        </div>
      </div>

      <div class="grid gap-4 content-start min-w-[300px]">
        <div
          class="card flex flex-col preset-filled-surface-100-900 border-[1px] border-surface-200-800 p-4 text-center gap-4"
        >
          <button
            class="flex w-full items-center justify-between"
            onclick={() => toggle('extreme')}
          >
            <div class="text-lg font-bold">Extreme</div>
            <ChevronDown
              class="h-4 w-4 opacity-50 transition-transform duration-200 {openState['extreme']
                ? 'rotate-180'
                : ''}"
            />
          </button>
          {#if openState['extreme']}
            <div transition:slide class="flex flex-col gap-4">
              <div class="flex flex-col">
                <div class="text-left text-sm font-semibold mb-3">Patch 7.5</div>
                <div class="flex flex-col gap-4">
                  <a
                    href="{base}/75/ex8"
                    class="btn preset-tonal-secondary border border-secondary-500"
                    >The Unmaking (EX8)</a
                  >
                </div>
              </div>
              <div class="flex flex-col">
                <div class="text-left text-sm font-semibold mb-3">Patch 7.4</div>
                <div class="flex flex-col gap-4">
                  <a
                    href="{base}/74/ex7"
                    class="btn preset-tonal-secondary border border-secondary-500"
                    >Hell on Rails (EX7)</a
                  >
                </div>
              </div>
              <div class="flex flex-col">
                <div class="text-left text-sm font-semibold mb-3">Patch 7.3</div>
                <div class="flex flex-col gap-4">
                  <a
                    href="{base}/73/ex6"
                    class="btn preset-tonal-secondary border border-secondary-500"
                    >Windward Wilds (EX6)</a
                  >
                  <a
                    href="{base}/73/ex5"
                    class="btn preset-tonal-secondary border border-secondary-500"
                    >Necron's Embrace (EX5)</a
                  >
                </div>
              </div>
              <div class="flex flex-col">
                <div class="text-left text-sm font-semibold mb-3">Patch 7.2</div>
                <div class="flex flex-col gap-4">
                  <a
                    href="{base}/72/ex4"
                    class="btn preset-tonal-secondary border border-secondary-500"
                    >Recollection (EX4)</a
                  >
                </div>
              </div>
              <div class="flex flex-col">
                <div class="text-left text-sm font-semibold mb-3">Patch 7.1</div>
                <div class="flex flex-col gap-4">
                  <a
                    href="{base}/71/ex3"
                    class="btn preset-tonal-secondary border border-secondary-500"
                    >Sphene's Burden (EX3)</a
                  >
                </div>
              </div>
              <div class="flex flex-col">
                <div class="text-left text-sm font-semibold mb-3">Patch 7.0</div>
                <div class="flex flex-col gap-4">
                  <a
                    href="{base}/70/ex2"
                    class="btn preset-tonal-secondary border border-secondary-500">Everkeep (EX2)</a
                  >
                  <a
                    href="{base}/70/ex1"
                    class="btn preset-tonal-secondary border border-secondary-500"
                    >Worqor Lar Dor (EX1)</a
                  >
                </div>
              </div>
            </div>
          {/if}
        </div>
      </div>

      <div
        class="grid gap-4 content-start min-w-[300px] @2xl:col-span-2 @5xl:col-span-1 @2xl:max-w-[330px] @2xl:mx-auto @5xl:max-w-none @5xl:mx-0"
      >
        <div
          class="card flex flex-col preset-filled-surface-100-900 border-[1px] border-surface-200-800 p-4 text-center gap-4"
        >
          <button
            class="flex w-full items-center justify-between"
            onclick={() => toggle('archives')}
          >
            <div class="text-lg font-bold">Older Fights</div>
            <ChevronDown
              class="h-4 w-4 opacity-50 transition-transform duration-200 {openState['archives']
                ? 'rotate-180'
                : ''}"
            />
          </button>
          {#if openState['archives']}
            <div transition:slide class="flex flex-col gap-4">
              <div class="flex flex-col">
                <div class="text-left text-sm font-semibold mb-3">Patch 7.2 Savage</div>
                <div class="flex flex-col gap-4">
                  <a
                    href="{base}/72/m5s"
                    class="btn preset-tonal-secondary border border-secondary-500"
                    >AAC Cruiserweight M1 (M5S)</a
                  >
                  <a
                    href="{base}/72/m6s"
                    class="btn preset-tonal-secondary border border-secondary-500"
                    >AAC Cruiserweight M2 (M6S)</a
                  >
                  <a
                    href="{base}/72/m7s"
                    class="btn preset-tonal-secondary border border-secondary-500"
                    >AAC Cruiserweight M3 (M7S)</a
                  >
                  <a
                    href="{base}/72/m8s"
                    class="btn preset-tonal-secondary border border-secondary-500"
                    >AAC Cruiserweight M4 (M8S)</a
                  >
                </div>
              </div>
              <div class="flex flex-col">
                <div class="text-left text-sm font-semibold mb-3">Patch 7.0 Savage</div>
                <div class="flex flex-col gap-4">
                  <a
                    href="{base}/70/m4s"
                    class="btn preset-tonal-secondary border border-secondary-500"
                    >AAC Light-Heavyweight M4 (Savage)</a
                  >
                </div>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
