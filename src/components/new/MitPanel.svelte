<script lang="ts">
  import { browser } from '$app/environment';
  import { ChevronsUpDown, Info, UserShield } from '@lucide/svelte';
  import * as Collapsible from '$lib/components/ui/collapsible';
  import * as Select from '$lib/components/ui/select';
  import { defaultInvulnOrder, defaultTankBoss, groupMitsByPhase } from '$lib/mits';
  import { mitSegments } from '$lib/mitIcons';
  import { msToTime } from '$lib/utils';
  import type { InvulnOrder, Job, MitPlan, Role, TankBoss } from '$lib/types';

  interface Props {
    plan?: MitPlan;
    role: Role;
    party?: number;
    jobs: Job[];
    job: Job;
    onSelectJob: (job: Job) => void;
    fightKey: string;
    tabTags?: Record<string, string[]> | null;
    /** Active phase tab; its phases start open, the rest collapsed. */
    currentTab?: string;
  }

  let {
    plan,
    role,
    party,
    jobs,
    job,
    onSelectJob,
    fightKey,
    tabTags = null,
    currentTab
  }: Props = $props();

  // Panel settings are persisted per fight.
  function load(key: string) {
    return browser ? localStorage.getItem(`${fightKey}-${key}`) : null;
  }
  function save(key: string, value: string) {
    if (browser) localStorage.setItem(`${fightKey}-${key}`, value);
  }

  // Tank-only filters. Boss and invuln order are remembered per light party.
  let showSelf = $state(load('mitShowSelf') !== 'false');
  $effect(() => save('mitShowSelf', String(showSelf)));

  let partyKey = $derived(party ?? 1);
  let bossByParty = $state<Record<number, TankBoss>>({});
  let tankBoss = $derived.by(() => {
    const stored = bossByParty[partyKey] ?? load(`mitTankBoss-${partyKey}`);
    return stored === 'Chaos' || stored === 'Exdeath' ? stored : defaultTankBoss(party);
  });
  function setTankBoss(value: TankBoss) {
    bossByParty[partyKey] = value;
    save(`mitTankBoss-${partyKey}`, value);
  }

  let invulnByParty = $state<Record<number, InvulnOrder>>({});
  let invulnOrder = $derived.by(() => {
    const stored = invulnByParty[partyKey] ?? Number(load(`mitInvulnOrder-${partyKey}`));
    return stored === 1 || stored === 2 ? stored : defaultInvulnOrder(party);
  });
  function setInvulnOrder(value: InvulnOrder) {
    invulnByParty[partyKey] = value;
    save(`mitInvulnOrder-${partyKey}`, String(value));
  }

  let groups = $derived(
    plan
      ? groupMitsByPhase(plan, {
          role,
          party,
          job,
          tabTags,
          includeSelf: showSelf,
          tankBoss,
          invulnOrder
        })
      : []
  );

  // Sections follow the active tab unless "Expand All" is on. Manual toggles win until
  // the tab changes.
  let activeTags = $derived(currentTab && tabTags ? (tabTags[currentTab] ?? []) : []);
  let expandAll = $state(load('mitExpandAll') === 'true');
  $effect(() => save('mitExpandAll', String(expandAll)));
  let openState = $state<Record<string, boolean>>({});
  let listEl = $state<HTMLDivElement | null>(null);
  $effect(() => {
    currentTab;
    openState = {};
    listEl?.scrollTo({ top: 0 });
  });
  function isOpen(phase: string) {
    return openState[phase] ?? (expandAll || activeTags.length === 0 || activeTags.includes(phase));
  }
  function toggleExpandAll() {
    expandAll = !expandAll;
    openState = {};
  }

  let noteOpen = $state<Record<string, boolean>>({});
</script>

<aside
  class="card border border-surface-700/50 bg-surface-900/30 backdrop-blur-sm rounded-md overflow-hidden flex flex-col min-h-0"
>
  <div class="p-3 border-b border-surface-700/50">
    <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
      <div class="flex items-center gap-1">
        <span class="text-xs font-medium text-surface-400 uppercase">Job</span>
        <Select.Root type="single" value={job} onValueChange={(v) => onSelectJob(v as Job)}>
          <Select.Trigger size="sm" class="!py-0.5 !px-2 !min-w-0">
            <span class="text-sm">{job}</span>
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
            class="inline-flex rounded-sm border border-surface-700 overflow-hidden text-sm"
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
            class="inline-flex rounded-sm border border-surface-700 overflow-hidden text-sm"
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

  <!-- Only the phase list scrolls (once the panel is stuck), so the controls stay put. -->
  <div
    bind:this={listEl}
    class="flex flex-col divide-y divide-surface-700/50 min-h-0 lg:group-data-[stuck=true]/mit:overflow-y-auto lg:group-data-[stuck=true]/mit:overscroll-y-contain [scrollbar-width:thin] [scrollbar-color:hsl(var(--surface-700))_transparent]"
  >
    {#if groups.length === 0}
      <div class="p-4 text-sm text-surface-400">
        No mitigation entries for {job} in this plan yet.
      </div>
    {/if}
    {#each groups as group (group.phase)}
      <Collapsible.Root
        open={isOpen(group.phase)}
        onOpenChange={(open) => (openState[group.phase] = open)}
      >
        <div class="flex items-center justify-between gap-2 px-3 py-2 bg-surface-950/40">
          <div class="flex items-center gap-2 min-w-0">
            <Collapsible.Trigger
              class="font-semibold text-surface-50 hover:text-secondary-400 rounded-sm px-1 -mx-1 cursor-pointer truncate"
            >
              {group.label}
            </Collapsible.Trigger>
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
                  <span class="text-md font-semibold text-surface">
                    {mech.mechanic}
                  </span>
                </div>
                <div class="min-w-0 flex flex-col gap-1">
                  {#if mech.note}
                    <div class="text-sm text-surface-300 leading-snug">{mech.note}</div>
                  {/if}
                  {#each mits as mit}
                    <div class="flex flex-col ml-2">
                      <div class="flex flex-wrap items-center gap-x-2">
                        {#if mit.self}
                          <span class="text-surface-400 shrink-0" title="Self mitigation">
                            <UserShield class="size-4" aria-label="Self mitigation" />
                          </span>
                        {/if}
                        {#if mit.label}
                          <span class="text-sm text-surface-300 capitalize">{mit.label}:</span>
                        {/if}
                        {#each mitSegments(mit.mitigation, job) as seg, i (i)}
                          <span class="inline-flex items-center gap-1 font-medium text-surface-100">
                            {#if i > 0}<span class="text-surface-500">+</span>{/if}
                            {#each seg.icons as icon (icon)}
                              <img src={icon} alt="" class="size-5 rounded-xs shrink-0" />
                            {/each}
                            {seg.text}
                          </span>
                        {/each}
                        {#each mitSegments(mit.carryOver, job) as seg, i (i)}
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
