<!-- @ts-nocheck -->

<script lang="ts">
  // @ts-nocheck
  import { Accordion, Tabs } from '$lib/components/ui';
  import { Button } from '$lib/components/ui/button';
  import {
    ChevronsUpDown,
    CircleAlert,
    Expand,
    ExternalLink,
    TriangleAlert
  } from '@lucide/svelte/icons';
  import ImagePreview from '../ImagePreview.svelte';
  import SpotlightOverlay from '../SpotlightOverlay.svelte';
  import TimelineIcon from '$lib/components/TimelineIcon.svelte';
  import RoleIcon from '$lib/components/RoleIcon.svelte';
  import MechDiffWarning from '$lib/components/MechDiffWarning.svelte';
  import type { TimelineItem, SpotlightMask } from '$lib/types';
  import { msToTime } from '$lib/utils';
  import { renderDebuffTokens } from '$lib/debuffs';
  import * as Collapsible from '$lib/components/ui/collapsible';

  interface Props {
    timeline: TimelineItem[];
    [propName: string]: any;
  }

  let {
    timeline,
    strat,
    stratName,
    stratState,
    getStratMechs,
    individualStrat,
    spotlight,
    alignment,
    tabTags = null,
    useMainPageTabs = false,
    role = null,
    currentTab = $bindable()
  }: Props = $props();

  function phaseKey(phase: any, index: number): string {
    // Recurring phase names (e.g. "Towers" appearing twice in EX6) need a
    // unique key per occurrence so each Collapsible's state is independent.
    return `${phase?.phaseName ?? ''}-${index}`;
  }

  function getDefaultCollapsibleState() {
    const newState: Record<string, boolean> = {};
    individualStrat.forEach((phase: any, index: number) => {
      if (phase?.phaseName) {
        newState[phaseKey(phase, index)] = true;
      }
    });
    return newState;
  }

  let collapsibleState = $state<Record<string, boolean>>(getDefaultCollapsibleState());

  $effect(() => {
    individualStrat;
    collapsibleState = getDefaultCollapsibleState();
  });

  // Helper to safely get/set collapsible state, ensuring we never pass undefined to bind:open
  function getCollapsibleOpen(key: string): boolean {
    return collapsibleState[key] ?? true;
  }

  function setCollapsibleOpen(key: string, value: boolean) {
    collapsibleState[key] = value;
  }

  let imageOpenState = $state(false);
  let imageModalProps = $state({
    phase: null,
    mech: null
  });

  function openImageModal(phase: any, mech?: any) {
    imageModalProps = {
      phase: phase,
      mech: mech
    };
    imageOpenState = true;
  }

  let timelineValue = $state(['']);

  let tab = $state('');

  // Initialize tab on mount and reset whenever the current value isn't valid
  // for the new tabTags (e.g. after fightKey change).
  $effect(() => {
    if (!tabTags) {
      tab = '';
      return;
    }
    const keys = Object.keys(tabTags);
    if (keys.length === 0) {
      tab = '';
      return;
    }
    if (!tab || !keys.includes(tab)) {
      tab = keys[0];
    }
  });

  // Sync internal tab state with bindable currentTab
  $effect(() => {
    currentTab = tab;
  });

  function isPhaseVisible(phase: any) {
    if (tabTags && tabTags[tab] && useMainPageTabs) {
      return tabTags[tab].includes(phase.tag);
    }
    return true;
  }

  let isAllExpanded = $derived(
    individualStrat
      .map((phase: any, index: number) => ({ phase, index }))
      .filter(({ phase }) => isPhaseVisible(phase))
      .every(({ phase, index }) => collapsibleState[phaseKey(phase, index)])
  );

  function toggleAll() {
    const newState = !isAllExpanded;
    individualStrat.forEach((phase: any, index: number) => {
      if (!phase?.phaseName || !isPhaseVisible(phase)) return;
      collapsibleState[phaseKey(phase, index)] = newState;
    });
  }
</script>

<ImagePreview
  bind:imageOpenState
  mech={imageModalProps.mech}
  phase={imageModalProps.phase}
  {spotlight}
  {role}
/>

{#if strat?.notes}
  <div
    class="card preset-outlined-primary-500 p-4 flex flex-row gap-4 my-6 shadow-lg rounded-xl border-l-4 border-l-primary-500 items-center"
  >
    <CircleAlert size={32} class="text-primary-500 shrink-0" />
    <div class="whitespace-pre-wrap text-base lg:text-lg">{strat.notes}</div>
  </div>
{/if}

{#if timeline.length > 0}
  <div class="card border border-surface-200-800 mb-8 shadow-sm rounded-xl overflow-hidden">
    <Accordion value={timelineValue} onValueChange={(e) => (timelineValue = e.value)} collapsible>
      <Accordion.Item value="timeline">
        {#snippet control()}
          <div class="flex flex-row grow items-center justify-between">
            <div class="font-semibold text-xl">Timeline</div>
            <ChevronsUpDown size={24} />
          </div>
        {/snippet}
        {#snippet panel()}
          <div
            class="grid lg:grid-flow-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 p-2"
            style:grid-template-rows={`repeat(${Math.floor(timeline.length / 3) + 1}, minmax(0, 1fr))`}
          >
            {#each timeline as item, index}
              <div
                class="flex flex-row gap-3 items-center text-sm border-b border-surface-800/50 pb-1 last:border-0"
              >
                <div class="w-5 shrink-0">
                  <TimelineIcon mechType={item.mechType} variant="md" />
                </div>
                <div class="w-12 font-mono text-surface-400">
                  {msToTime(item.startTimeMs)}
                </div>
                <div class="font-medium">
                  {item.mechName}
                </div>
              </div>
            {/each}
          </div>
        {/snippet}
      </Accordion.Item>
    </Accordion>
  </div>
{/if}

<div class="flex w-full items-center flex-wrap lg:flex-nowrap">
  {#if tabTags && useMainPageTabs}
    <Tabs
      value={tab}
      onValueChange={(e) => (tab = e.value)}
      classes="mb-2"
      listClasses="flex-wrap gap-2"
    >
      {#snippet list()}
        {#each Object.keys(tabTags) as tabName}
          <Tabs.Control
            value={tabName}
            labelBase="btn bg-transparent hover:bg-surface-700"
            classes="px-6 py-2 text-lg rounded-sm transition-all border-surface-700 data-[state=active]:bg-surface-700 data-[state=active]:text-white data-[state=active]:border-surface-400 data-[state=active]:shadow-md"
            >{tabName}</Tabs.Control
          >
        {/each}
      {/snippet}
    </Tabs>
  {:else}
    <div class="flex grow"></div>
  {/if}

  <div class="flex justify-end lg:mb-4 w-full lg:w-auto">
    <Button
      class="border border-border bg-surface-1000/60 shadow-sm hover:bg-muted/60 cursor-pointer"
      size="sm"
      onclick={toggleAll}
    >
      {isAllExpanded ? 'Collapse All' : 'Expand All'}
    </Button>
  </div>
</div>

<div class="space-y-8 lg:space-y-12">
  {#each individualStrat as phase, i (phase.phaseName + '-' + i)}
    {#if tabTags && tabTags[tab] && useMainPageTabs ? tabTags[tab].includes(phase.tag) : true}
      {#if phase?.mechs}
        <Collapsible.Root
          class="space-y-4 w-full"
          open={getCollapsibleOpen(phaseKey(phase, i))}
          onOpenChange={(open) => setCollapsibleOpen(phaseKey(phase, i), open)}
        >
          <!-- Phase Header -->
          <div
            class="flex items-center gap-3 border-b border-surface-700 pb-2 w-full justify-between"
          >
            <div class="flex flex-row space-x-2 items-center">
              {#if typeof phase.url === 'string'}
                <a
                  href={phase.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="preset-typo-headline font-bold tracking-tight text-surface-50 capitalize hover:text-secondary-400 hover:bg-surface-800/50 rounded-sm px-1 -mx-1 transition-colors inline-flex items-center gap-2"
                  onclick={(e) => e.stopPropagation()}
                >
                  {phase.phaseName}
                  <ExternalLink size={18} class="inline-block" />
                </a>
              {:else}
                <h2
                  class="preset-typo-headline font-bold tracking-tight text-surface-50 capitalize"
                >
                  {phase.phaseName}
                </h2>
                {#if typeof phase.url === 'object'}
                  {#each Object.entries(phase.url) as [linkName, linkUrl]}
                    <a
                      href={linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-sm text-blue-400 hover:text-blue-300 hover:underline inline-flex items-center gap-1"
                      onclick={(e) => e.stopPropagation()}
                    >
                      {linkName}
                      <ExternalLink size={12} />
                    </a>
                  {/each}
                {/if}
              {/if}
              {#if phase?.tag && stratState[phase.tag] !== getStratMechs(stratName)[phase.tag]}
                <MechDiffWarning
                  size={24}
                  message="This mechanic differs from what's in the selected guide."
                />
              {/if}
            </div>
            <Collapsible.Trigger
              class="rounded-sm border border-border bg-surface-1000/60 p-1 shadow-sm hover:bg-muted/60 cursor-pointer"
            >
              <ChevronsUpDown class="size-4 lg:size-6" />
            </Collapsible.Trigger>
          </div>

          <Collapsible.Content class="space-y-4">
            {#if phase?.description}
              <div
                class="text-base lg:text-lg text-surface-200 leading-relaxed max-w-4xl whitespace-pre-wrap"
              >
                {@html renderDebuffTokens(phase.description)}
              </div>
            {/if}

            {#if phase?.imageUrl}
              <div
                class="rounded-xl overflow-hidden shadow-lg border border-surface-700/50 bg-surface-900/50 inline-block"
              >
                <button
                  type="button"
                  class="block cursor-zoom-in relative group"
                  onclick={() => openImageModal(phase)}
                >
                  <img
                    class="max-h-[500px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    style:mask-image={spotlight && phase.mask}
                    src={phase.imageUrl}
                    alt={phase.phaseName}
                  />
                  <div
                    class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100"
                  >
                    <Expand size={48} class="text-white drop-shadow-lg" />
                  </div>
                </button>
              </div>
            {/if}

            <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
              {#each phase.mechs as mech}
                {#key [spotlight, alignment]}
                  <article
                    class="card border border-surface-700/50 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden flex flex-col h-full group relative"
                    class:col-span-2={mech.alignmentImages && mech.alignmentImages[alignment]}
                    class:xl:col-span-2={mech.alignmentImages && mech.alignmentImages[alignment]}
                  >
                    <button
                      class="flex flex-col h-full text-left w-full"
                      type="button"
                      onclick={() => openImageModal(phase, mech)}
                    >
                      <div class="p-4 flex flex-col h-full gap-1 lg:gap-2">
                        <div class="flex justify-between items-start">
                          {#if typeof mech.url === 'string'}
                            <a
                              href={mech.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              class="text-lg lg:text-xl font-bold capitalize text-surface-100 hover:text-secondary-400 hover:bg-surface-800/50 rounded-sm px-1 -mx-1 transition-colors inline-flex items-center gap-2"
                              onclick={(e) => e.stopPropagation()}
                            >
                              {mech.mechanic}
                              <ExternalLink size={16} class="inline-block" />
                            </a>
                          {:else}
                            <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
                              <h3
                                class="text-lg lg:text-xl font-bold capitalize text-surface-100 group-hover:text-secondary-400 transition-colors"
                              >
                                {mech.mechanic}
                              </h3>
                              {#if typeof mech.url === 'object'}
                                {#each Object.entries(mech.url) as [linkName, linkUrl]}
                                  <a
                                    href={linkUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="text-sm text-blue-400 hover:text-blue-300 hover:underline inline-flex items-center gap-1"
                                    onclick={(e) => e.stopPropagation()}
                                  >
                                    {linkName}
                                    <ExternalLink size={12} />
                                  </a>
                                {/each}
                              {/if}
                            </div>
                          {/if}
                          <Expand
                            size={20}
                            class="text-surface-500 opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                        </div>

                        {#if mech?.notes}
                          <div
                            class="bg-primary-500/10 border border-primary-500/20 rounded-lg p-3 flex gap-3 text-sm text-primary-200"
                          >
                            <CircleAlert size={20} class="shrink-0 mt-0.5" />
                            <div class="whitespace-pre-wrap">{mech.notes}</div>
                          </div>
                        {/if}

                        {#if mech?.description}
                          <p class="text-surface-200 text-base leading-relaxed whitespace-pre-wrap">
                            {@html renderDebuffTokens(mech.description)}
                          </p>
                        {/if}

                        {#if mech?.imageUrl}
                          <div class="mt-4 overflow-hidden">
                            <img
                              class="w-auto h-auto rounded-sm object-contain max-w-full max-h-[350px]"
                              src={mech.imageUrl}
                              alt={mech.mechanic}
                            />
                          </div>
                        {/if}

                        <div class="flex items-start gap-1.5 text-base text-surface-100">
                          {#if mech.strats && mech.strats.length > 0 && mech.strats[0].description}
                            {#if mech.strats[0].toggleKey}
                              <span class="shrink-0">⏩</span>
                            {:else if role}
                              <RoleIcon {role} class="w-5 h-5 mt-0.5" />
                            {/if}
                          {/if}
                          <div class="whitespace-pre-wrap">
                            {@html mech?.strats
                              ? renderDebuffTokens(mech.strats[0].description)
                              : ''}
                          </div>
                        </div>

                        {#if mech?.strats && mech.strats[0]?.imageUrl}
                          <div class="mt-2 overflow-hidden relative w-fit h-fit">
                            <img
                              class="block rounded-sm max-w-full max-h-[350px]"
                              src={mech.strats[0].imageUrl}
                              alt={`${mech.mechanic} strategy`}
                            />
                            {#if spotlight && mech.strats[0]?.mask}
                              <SpotlightOverlay mask={mech.strats[0].mask} />
                            {/if}
                          </div>
                        {/if}
                      </div>
                    </button>
                  </article>
                {/key}
              {/each}
            </div>
          </Collapsible.Content>
        </Collapsible.Root>
      {:else}
        <!-- Fallback for simple phases without mechs array -->
        <Collapsible.Root
          class="overflow-hidden"
          open={getCollapsibleOpen(phaseKey(phase, i))}
          onOpenChange={(open) => setCollapsibleOpen(phaseKey(phase, i), open)}
        >
          <div class="flex justify-between items-center border-b border-surface-700 pb-2">
            <div class="flex flex-row space-x-2 items-center">
              {#if typeof phase.url === 'string'}
                <a
                  href={phase.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="preset-typo-headline font-bold tracking-tight text-surface-50 capitalize hover:text-secondary-400 hover:bg-surface-800/50 rounded-sm px-1 -mx-1 transition-colors inline-flex items-center gap-2"
                  onclick={(e) => e.stopPropagation()}
                >
                  {phase.phaseName}
                  <ExternalLink size={18} class="inline-block" />
                </a>
              {:else}
                <h2
                  class="preset-typo-headline font-bold tracking-tight text-surface-50 capitalize"
                >
                  {phase.phaseName}
                </h2>
                {#if typeof phase.url === 'object'}
                  {#each Object.entries(phase.url) as [linkName, linkUrl]}
                    <a
                      href={linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-sm text-blue-400 hover:text-blue-300 hover:underline inline-flex items-center gap-1"
                      onclick={(e) => e.stopPropagation()}
                    >
                      {linkName}
                      <ExternalLink size={12} />
                    </a>
                  {/each}
                {/if}
              {/if}
            </div>
            <Collapsible.Trigger
              class="rounded-sm border border-border bg-surface-1000/60 p-1 shadow-sm hover:bg-muted/60 cursor-pointer"
            >
              <ChevronsUpDown class="size-4 lg:size-6" />
            </Collapsible.Trigger>
          </div>
          <Collapsible.Content class="space-y-4 group">
            <button
              class="w-full text-left flex flex-col gap-3"
              onclick={() => openImageModal(phase)}
            >
              <div class="flex flex-row mt-4">
                <div class="flex grow">
                  {#if phase?.tag && stratState[phase.tag] !== getStratMechs(stratName)[phase.tag]}
                    <div
                      class="flex items-center gap-2 text-warning-500 bg-warning-500/10 p-2 rounded-md w-fit"
                    >
                      <TriangleAlert size={20} />
                      <span class="text-sm font-medium">Variation from guide</span>
                    </div>
                  {/if}

                  {#if phase?.description}
                    <div
                      class="text-base lg:text-lg text-surface-200 leading-relaxed whitespace-pre-wrap"
                    >
                      {@html renderDebuffTokens(phase.description)}
                    </div>
                  {/if}
                </div>
                <Expand
                  size={24}
                  class="text-surface-500 opacity-0 group-hover:opacity-100 transition-opacity justify-self-end"
                />
              </div>
              {#if phase?.imageUrl}
                <div
                  class="rounded-xl overflow-hidden shadow-lg border border-surface-700/50 bg-black/20 self-start"
                >
                  <div class="relative w-fit h-fit">
                    <img class="max-h-[500px] block" src={phase.imageUrl} alt={phase.phaseName} />
                    {#if spotlight && phase.mask}
                      <SpotlightOverlay mask={phase.mask} />
                    {/if}
                  </div>
                </div>
              {/if}
            </button>
          </Collapsible.Content>
        </Collapsible.Root>
      {/if}
    {/if}
  {/each}
</div>
