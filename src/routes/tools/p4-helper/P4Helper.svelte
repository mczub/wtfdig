<script lang="ts">
  import {
    SETUP_SECTIONS,
    RF_OPTS,
    applyInput,
    block1,
    block2,
    block3,
    manaFinal,
    type P4State,
    type InputSection,
    type Line
  } from './data';
  import { PictureInPicture2, X, RotateCcw, MoveVertical, MoveUpRight } from '@lucide/svelte';
  import PipPortal from '$lib/components/PipPortal.svelte';
  import { debuffIconUrl } from '$lib/debuffs';

  // Option values that map to a status icon (others fall back to arrows).
  const VAL_ICON: Record<string, string> = {
    real: 'kefka-real',
    fake: 'kefka-fake',
    fire: 'entropy',
    water: 'dynamic-fluid'
  };
  function valIcon(val: string): string | null {
    const id = VAL_ICON[val];
    return id ? (debuffIconUrl(id) ?? null) : null;
  }

  let s = $state<P4State>({});

  function set(id: string, val: string) {
    applyInput(s, id, val);
  }
  function reset() {
    s = {};
  }

  const hasInput = $derived(Object.values(s).some((v) => v != null));
  const b1 = $derived(block1(s));
  const b2 = $derived(block2(s));
  const b3 = $derived(block3(s));
  const bFinal = $derived(manaFinal(s));

  function selClass(cls: string): string {
    switch (cls) {
      case 'real':
        return 'bg-emerald-700 text-white';
      case 'fake':
        return 'bg-fuchsia-700 text-white';
      case 'fire':
        return 'bg-red-700 text-white';
      case 'water':
        return 'bg-blue-700 text-white';
      default:
        return 'bg-zinc-600 text-white';
    }
  }
  function toneClass(tone?: string): string {
    switch (tone) {
      case 'real':
        return 'text-emerald-400';
      case 'fake':
        return 'text-fuchsia-400';
      case 'dim':
        return 'text-muted-foreground';
      default:
        return 'text-zinc-200';
    }
  }
  const unsel = 'bg-zinc-800/70 text-muted-foreground hover:bg-zinc-700/70';
</script>

<svelte:head>
  <title>WTFDIG!? UMAD P4 Helper</title>
  <meta
    name="description"
    content="Quick callout helper for Dancing Mad (Ultimate) P4 Kefka Says"
  />
</svelte:head>

<!-- Button icon: status icon for real/fake/fire/water, else a direction arrow -->
{#snippet optIcon(val: string, idx: number)}
  {@const u = valIcon(val)}
  {#if u}<img src={u} alt="" class="h-4 w-auto shrink-0" />{:else if idx === 0}<MoveVertical
      class="size-4 opacity-60"
    />{:else}<MoveUpRight class="size-4 opacity-60" />{/if}
{/snippet}

<!-- Up-front input section: label left, vertical button stacks -->
{#snippet section(sec: InputSection)}
  <div class="flex flex-col items-start gap-2">
    <div class="w-28 shrink-0 font-semibold text-sm">{sec.title}</div>
    <div class="flex gap-3">
      {#each sec.rows as row}
        <div class="flex flex-col gap-2 min-w-24">
          <div class="text-sm md:text-base text-muted-foreground">{row.label}</div>
          {#each row.opts as o, idx}
            <button
              class="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm md:text-base cursor-pointer transition-colors {s[
                row.id
              ] === o.val
                ? selClass(o.cls)
                : unsel}"
              onclick={() => set(row.id, o.val)}
            >
              {@render optIcon(o.val, idx)}
              {o.text}
            </button>
          {/each}
        </div>
      {/each}
    </div>
  </div>
{/snippet}

<!-- Inline Real/Fake prompt (interleaved mid-sequence inputs) -->
{#snippet rfRow(id: string, label: string)}
  <div class="flex items-start gap-3">
    <div class="w-44 shrink-0 font-semibold text-sm md:text-base">{label}</div>
    <div class="flex gap-2">
      {#each RF_OPTS as o, idx}
        <button
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm md:text-base cursor-pointer transition-colors {s[
            id
          ] === o.val
            ? selClass(o.cls)
            : unsel}"
          onclick={() => set(id, o.val)}
        >
          {@render optIcon(o.val, idx)}
          {o.text}
        </button>
      {/each}
    </div>
  </div>
{/snippet}

<!-- Output callout box -->
{#snippet outBox(lines: Line[])}
  <div class="rounded-xl border border-border p-3 flex flex-col gap-0.5">
    {#each lines as line}
      <div class="text-base {toneClass(line.tone)}">{@html line.text}</div>
    {/each}
  </div>
{/snippet}

<PipPortal width={440} height={860} title="WTFDIG UMAD P4 Helper" rootFontSize={15}>
  {#snippet placeholder({ popIn }: { popIn: () => void })}
    <div class="flex flex-col gap-3 p-4 md:p-6 w-full max-w-[640px] mx-auto items-start">
      <p class="text-sm text-muted-foreground m-0">Helper is popped out in a separate window.</p>
      <button
        class="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-accent text-foreground text-sm cursor-pointer"
        onclick={popIn}
      >
        <X class="size-4" /> Bring back
      </button>
    </div>
  {/snippet}

  {#snippet children({
    isPopped,
    isSupported,
    popOut,
    popIn
  }: {
    isPopped: boolean;
    isSupported: boolean;
    popOut: () => void;
    popIn: () => void;
  })}
    <div
      class="flex flex-col gap-4 p-4 md:p-6 w-full max-w-[640px] mx-auto box-border overflow-auto"
    >
      <!-- Header -->
      <header class="flex justify-between items-center gap-2 shrink-0">
        <h1 class="text-2xl font-bold m-0">UMAD P4 Helper</h1>
        <div class="flex items-center gap-2">
          {#if isSupported}
            <button
              class="flex items-center gap-1 px-3 py-2 rounded-lg bg-muted hover:bg-accent text-foreground font-semibold cursor-pointer text-sm"
              onclick={isPopped ? popIn : popOut}
            >
              {#if isPopped}<X class="size-4" /> Close{:else}<PictureInPicture2 class="size-4" /> Pop
                out{/if}
            </button>
          {/if}
          <button
            class="flex items-center gap-1 px-4 py-2 rounded-lg bg-destructive text-destructive-foreground font-semibold cursor-pointer text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            onclick={reset}
            disabled={!hasInput}
          >
            <RotateCcw class="size-4" /> Reset
          </button>
        </div>
      </header>

      <!-- Up-front debuff inputs -->
      <div class="flex flex-col gap-5">
        {#each SETUP_SECTIONS as sec}
          {@render section(sec)}
        {/each}
      </div>

      <!-- Resolution sequence (outputs + interleaved mid-fight inputs) -->
      {@render outBox(b1)}
      {@render rfRow('thunder', 'Mana Charge: Lightning')}
      {@render outBox(b2)}
      {@render rfRow('blizzard', 'Mana Charge: Ice')}
      {@render outBox(b3)}
      <div class="flex flex-col gap-2">
        {@render rfRow('rlight', 'Mana Release: Lightning')}
        {@render rfRow('rbliz', 'Mana Release: Ice')}
      </div>
      {@render outBox(bFinal)}
    </div>
  {/snippet}
</PipPortal>
