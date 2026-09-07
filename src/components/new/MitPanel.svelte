<script lang="ts">
  import { browser } from '$app/environment';
  import { ChevronsUpDown, Info, UserShield } from '@lucide/svelte';
  import * as Collapsible from '$lib/components/ui/collapsible';
  import * as Select from '$lib/components/ui/select';
  import { defaultInvulnOrder, defaultTankBoss, groupMitsByPhase } from '$lib/mits';
  import { msToTime } from '$lib/utils';
  import { mitSegments } from '$lib/mitIcons';
  import type { InvulnOrder, Job, MitPlan, Role, TankBoss } from '$lib/types';

  interface Props {
    /** Selected plan (chosen in the page-level controls). */
    plan?: MitPlan;
    role: Role;
    party?: number;
    /** Jobs selectable for this role slot, the current pick, and the setter. */
    jobs: Job[];
    job: Job;
    onSelectJob: (job: Job) => void;
    fightKey: string;
    tabTags?: Record<string, string[]> | null;
    /** Active phase tab (key of `tabTags`); its phases open, the rest collapse. */
    currentTab?: string;
  }

  let {
    plan,
    role,
    party,
    jobs,
    job: effectiveJob,
    onSelectJob,
    fightKey,
    tabTags = null,
    currentTab
  }: Props = $props();

  function load(key: string): string | null {
    if (!browser) return null;
    try {
      return localStorage.getItem(`${fightKey}-${key}`);
    } catch {
      return null;
    }
  }

  function save(key: string, value: string | null) {
    if (!browser) return;
    try {
      if (value === null) localStorage.removeItem(`${fightKey}-${key}`);
      else localStorage.setItem(`${fightKey}-${key}`, value);
    } catch {
      /* ignore */
    }
  }

  // "All" shows tank self mits alongside party mits; "Party" hides them.
  let showSelf = $state(load('mitShowSelf') !== 'false');
  $effect(() => save('mitShowSelf', showSelf ? 'true' : 'false'));

  // Which boss the tank holds in P3, remembered per light party.
  let bossByParty = $state<Record<number, TankBoss>>({});
  let tankBoss = $derived.by(() => {
    const p = party ?? 1;
    const stored = bossByParty[p] ?? (load(`mitTankBoss-${p}`) as TankBoss | null);
    return stored === 'Chaos' || stored === 'Exdeath' ? stored : defaultTankBoss(party);
  });
  function setTankBoss(value: TankBoss) {
    const p = party ?? 1;
    bossByParty[p] = value;
    save(`mitTankBoss-${p}`, value);
  }

  // P5 invuln order, remembered per light party.
  let invulnByParty = $state<Record<number, InvulnOrder>>({});
  let invulnOrder = $derived.by(() => {
    const p = party ?? 1;
    const stored = invulnByParty[p] ?? Number(load(`mitInvulnOrder-${p}`));
    return stored === 1 || stored === 2 ? stored : defaultInvulnOrder(party);
  });
  function setInvulnOrder(value: InvulnOrder) {
    const p = party ?? 1;
    invulnByParty[p] = value;
    save(`mitInvulnOrder-${p}`, String(value));
  }

  let groups = $derived(
    plan
      ? groupMitsByPhase(plan, {
          role,
          party,
          job: effectiveJob,
          tabTags,
          includeSelf: showSelf,
          tankBoss,
          invulnOrder
        })
      : []
  );

  // Phase sections follow the active tab: its phases open, others collapse, so the
  // panel usually fits without scrolling. Manual toggles win until the tab changes.
  let activeTags = $derived(currentTab && tabTags ? (tabTags[currentTab] ?? []) : []);
  let openState = $state<Record<string, boolean>>({});
  let listEl = $state<HTMLDivElement | null>(null);
  $effect(() => {
    currentTab;
    openState = {};
    listEl?.scrollTo({ top: 0 });
  });
  // "Expand All" is a persistent toggle: while on, every phase stays open across tab
  // changes instead of following the active tab. Manual toggles still apply on top.
  let expandAll = $state(load('mitExpandAll') === 'true');
  $effect(() => save('mitExpandAll', expandAll ? 'true' : 'false'));
  function isOpen(phase: string) {
    return openState[phase] ?? (expandAll || activeTags.length === 0 || activeTags.includes(phase));
  }
  function toggleExpandAll() {
    expandAll = !expandAll;
    openState = {};
  }

  // Phase-level notes are hidden until the info icon is toggled.
  let noteOpen = $state<Record<string, boolean>>({});
</script>

<aside
  class="card border border-surface-700/50 bg-surface-900/30 backdrop-blur-sm rounded-xl overflow-hidden flex flex-col min-h-0"
>
  <!-- Panel-level controls (the plan selector lives in the row above the panel) -->
  <div class="p-3 border-b border-surface-700/50">
    <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
      <div class="flex items-center gap-1">
        <span class="text-xs font-medium text-surface-400 uppercase">Job</span>
        <Select.Root
          type="single"
          value={effectiveJob}
          onValueChange={(v) => onSelectJob(v as Job)}
        >
          <Select.Trigger size="sm" class="!py-0.5 !px-2 !min-w-0">
            <span class="text-sm">{effectiveJob}</span>
          </Select.Trigger>
          <Select.Content>
            {#each jobs as j (j)}
              <Select.Item value={j}><span class="text-sm">{j}</span></Select.Item>
            {/each}
          </Select.Content>
        </Select.Root>
      </div>
      <button
        type="button"
        aria-pressed={expandAll}
        class={expandAll
          ? 'ml-auto order-last rounded-sm border border-primary-400/60 bg-surface-700 text-foreground px-2 py-0.5 text-xs shadow-sm cursor-pointer inline-flex items-center gap-1'
          : 'ml-auto order-last rounded-sm border border-border bg-surface-1000/60 px-2 py-0.5 text-xs shadow-sm hover:bg-muted/60 cursor-pointer inline-flex items-center gap-1'}
        onclick={toggleExpandAll}
      >
        Expand All
      </button>
      {#if role === 'Tank'}
        <div class="flex items-center gap-1">
          <span class="text-xs font-medium text-surface-400 uppercase">Show</span>
          <div
            class="inline-flex rounded-sm border border-surface-700 overflow-hidden text-sm"
            role="group"
            aria-label="Mitigation filter"
          >
            <button
              type="button"
              aria-pressed={showSelf}
              class={showSelf
                ? 'px-2 py-0.5 bg-surface-700 text-foreground cursor-pointer'
                : 'px-2 py-0.5 text-surface-300 hover:bg-surface-800 cursor-pointer'}
              onclick={() => (showSelf = true)}>All</button
            >
            <button
              type="button"
              aria-pressed={!showSelf}
              class={!showSelf
                ? 'px-2 py-0.5 bg-surface-700 text-foreground cursor-pointer'
                : 'px-2 py-0.5 text-surface-300 hover:bg-surface-800 cursor-pointer'}
              onclick={() => (showSelf = false)}>Party</button
            >
          </div>
        </div>
        <div class="flex items-center gap-1">
          <span class="text-xs font-medium text-surface-400 uppercase">P3 boss</span>
          <div
            class="inline-flex rounded-md border border-surface-700 overflow-hidden text-sm"
            role="group"
            aria-label="P3 boss"
          >
            {#each ['Chaos', 'Exdeath'] as const as boss (boss)}
              <button
                type="button"
                aria-pressed={tankBoss === boss}
                class={tankBoss === boss
                  ? 'px-2 py-0.5 bg-surface-700 text-foreground cursor-pointer'
                  : 'px-2 py-0.5 text-surface-300 hover:bg-surface-800 cursor-pointer'}
                onclick={() => setTankBoss(boss)}>{boss}</button
              >
            {/each}
          </div>
        </div>
        <div class="flex items-center gap-1">
          <span class="text-xs font-medium text-surface-400 uppercase">P5 invuln</span>
          <div
            class="inline-flex rounded-md border border-surface-700 overflow-hidden text-sm"
            role="group"
            aria-label="P5 invuln order"
          >
            {#each [1, 2] as const as order (order)}
              <button
                type="button"
                aria-pressed={invulnOrder === order}
                class={invulnOrder === order
                  ? 'px-2 py-0.5 bg-surface-700 text-foreground cursor-pointer'
                  : 'px-2 py-0.5 text-surface-300 hover:bg-surface-800 cursor-pointer'}
                onclick={() => setInvulnOrder(order)}>{order === 1 ? '1st' : '2nd'}</button
              >
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </div>

  <!-- Phase sections: the only part that scrolls, so the controls above stay put. -->
  <div
    bind:this={listEl}
    class="flex flex-col divide-y divide-surface-700/50 min-h-0 lg:overflow-y-auto lg:overscroll-y-contain [scrollbar-width:thin] [scrollbar-color:hsl(var(--surface-700))_transparent]"
  >
    {#if groups.length === 0}
      <div class="p-4 text-sm text-surface-400">
        No mitigation entries for {effectiveJob} in this plan yet.
      </div>
    {/if}
    {#each groups as group (group.phase)}
      <Collapsible.Root
        open={isOpen(group.phase)}
        onOpenChange={(open) => (openState[group.phase] = open)}
      >
        <div class="flex items-center justify-between gap-2 px-3 py-2 bg-surface-950/40">
          <div class="flex items-center gap-2 min-w-0">
            <div class="font-semibold text-surface-50">{group.label}</div>
            {#if group.note}
              <button
                type="button"
                aria-pressed={noteOpen[group.phase] ?? false}
                aria-label="Toggle phase notes"
                class={noteOpen[group.phase]
                  ? 'rounded-sm p-0.5 text-primary-400 hover:text-primary-300 cursor-pointer'
                  : 'rounded-sm p-0.5 text-surface-400 hover:text-surface-200 cursor-pointer'}
                onclick={() => (noteOpen[group.phase] = !(noteOpen[group.phase] ?? false))}
              >
                <Info class="size-4" />
              </button>
            {/if}
          </div>
          <Collapsible.Trigger
            class="rounded-sm border border-border bg-surface-1000/60 p-1 shadow-sm hover:bg-muted/60 cursor-pointer"
          >
            <ChevronsUpDown class="size-4" />
          </Collapsible.Trigger>
        </div>
        <Collapsible.Content>
          {#if group.note && noteOpen[group.phase]}
            <div
              class="px-3 py-2 text-sm text-surface-300 border-b border-surface-800/50 whitespace-pre-wrap"
            >
              {group.note}
            </div>
          {/if}
          <ul class="flex flex-col divide-y divide-surface-800/50">
            {#each group.mechs as { mech, mits }, i (mech.mechanic + '-' + mech.startTimeMs + '-' + i)}
              <li class="px-3 py-2 flex flex-col gap-1">
                <div class="flex items-baseline gap-2 min-w-0">
                  <span class="font-mono text-md text-surface-400 shrink-0">
                    {msToTime(mech.startTimeMs)}
                  </span>
                  <span class="text-sm text-surface-100 tracking-wide">
                    {mech.mechanic}
                  </span>
                </div>
                <div class="min-w-0 flex flex-col gap-1">
                  {#if mech.note}
                    <div class="text-sm text-surface-300 leading-snug">{mech.note}</div>
                  {/if}
                  {#each mits as mit}
                    <div class="flex flex-col">
                      <div class="flex flex-wrap items-center gap-x-2">
                        {#if mit.self}
                          <span class="text-surface-400 shrink-0" title="Self mitigation">
                            <UserShield class="size-4" aria-label="Self mitigation" />
                          </span>
                        {/if}
                        {#if mit.label}
                          <span class="text-xs text-surface-300 capitalize">{mit.label}:</span>
                        {/if}
                        {#each mitSegments(mit.mitigation, effectiveJob) as seg, i (i)}
                          <span class="inline-flex items-center gap-1 font-medium text-surface-50">
                            {#if i > 0}<span class="text-surface-500">+</span>{/if}
                            {#each seg.icons as icon (icon)}
                              <img src={icon} alt="" class="size-5 rounded-xs shrink-0" />
                            {/each}
                            {seg.text}
                          </span>
                        {/each}
                        {#each mitSegments(mit.carryOver, effectiveJob) as seg, i (i)}
                          <span class="inline-flex items-center gap-1 text-sm text-surface-400">
                            <span class="text-surface-500">{i > 0 ? '+' : '➔'}</span>
                            {#each seg.icons as icon (icon)}
                              <img
                                src={icon}
                                alt=""
                                class="size-4 rounded-sm shrink-0 opacity-60"
                              />
                            {/each}
                            {seg.text}
                          </span>
                        {/each}
                      </div>
                      {#if mit.note}
                        <div class="text-sm text-surface-300 leading-snug">{mit.note}</div>
                      {/if}
                    </div>
                  {/each}
                </div>
              </li>
            {/each}
          </ul>
        </Collapsible.Content>
      </Collapsible.Root>
    {/each}
  </div>
</aside>
