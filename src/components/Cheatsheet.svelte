<!-- @ts-nocheck -->
<svelte:options customElement={{ shadow: 'none' }} />

<script lang="ts">
  // @ts-nocheck
  import { Modal, Switch, Tabs, Tooltip } from '$lib/components/ui';
  import {
    ArrowRight,
    Clock,
    Expand,
    ExternalLink,
    Play,
    Shield,
    Siren,
    Skull,
    TriangleAlert,
    Wrench,
    X
  } from '@lucide/svelte/icons';
  import ImagePreview from './ImagePreview.svelte';
  import type { TimelineItem } from '$lib/types';
  import { msToTime } from '$lib/utils';

  interface Props {
    timeline: TimelineItem[];
    [propName: string]: any;
  }

  let {
    title,
    stratName,
    stratState,
    getStratMechs,
    cheatsheetOpenState = $bindable(),
    individualStrat,
    spotlight,
    alignment,
    timeline,
    innerWidth,
    innerHeight,
    rows,
    columns,
    tabTags = null,
    splitTimeline = false,
    useEvenTimelineSpacing: useEvenTimelineSpacingProp = false,
    role = null
  }: Props = $props();

  function getFightPercentClass(timeInMs: number, index: number): string {
    if (useEvenTimelineSpacing) {
      // When splitTimeline is active, use the filtered timeline length for spacing
      if (tab && splitTimeline) {
        const filteredTimeline = timeline.filter(
          (item) => item.mechTag && tabTags[tab].includes(item.mechTag)
        );
        const filteredIndex = filteredTimeline.findIndex((item) => item.startTimeMs === timeInMs);
        if (filteredIndex >= 0) {
          return `${(Math.floor((filteredIndex * 980) / filteredTimeline.length) / 10).toString()}%`;
        }
      }
      return `${(Math.floor((index * 980) / timeline.length) / 10).toString()}%`;
    }
    let enrageTime;
    if (tab && splitTimeline) {
      enrageTime = timeline.find((item) => {
        return item.mechType === 'Enrage' && tabTags[tab].includes(item.mechTag);
      })?.startTimeMs;
    } else {
      enrageTime = timeline.find((item) => {
        return item.mechType === 'Enrage';
      })?.startTimeMs;
    }
    if (!enrageTime) return '0';
    return `${(Math.floor((timeInMs * 980) / enrageTime) / 10).toString()}%`;
  }

  function showMechType(mechType: string): boolean {
    if (mechType === 'Mechanic' || mechType === 'StoredMechanic') {
      return timelineFilters.mechs;
    }
    if (mechType === 'Raidwide') {
      return timelineFilters.raidwides;
    }
    if (mechType === 'Tankbuster') {
      return timelineFilters.tankbusters;
    }
    return true;
  }

  function showMechTag(mechTag: string): boolean {
    if (splitTimeline === false) return true;
    if (tab) {
      return tabTags[tab].includes(mechTag);
    }
    return true;
  }

  let tab = $state(tabTags ? Object.keys(tabTags)[0] : '');

  let showTimeline = $state(true);

  // innerHeight <= 1024 forces even spacing, otherwise use the prop value
  let useEvenTimelineSpacing = $derived(innerHeight <= 1024 || useEvenTimelineSpacingProp);
  let showFilterCaptions = $derived(innerWidth > 1280);

  let timelineFilters = $state({
    mechs: true,
    raidwides: true,
    tankbusters: true
  });

  function closeCheatsheet() {
    cheatsheetOpenState = false;
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
</script>

<ImagePreview
  bind:imageOpenState
  mech={imageModalProps.mech}
  phase={imageModalProps.phase}
  {spotlight}
  {role}
/>

<Modal
  open={cheatsheetOpenState}
  onOpenChange={(e) => (cheatsheetOpenState = e.open)}
  contentBase="card bg-surface-100-900 p-4 space-y-4 shadow-xl flex flex-col h-full w-full max-w-none max-h-none"
  contentClasses={imageOpenState ? 'blur-sm' : ''}
  backdropClasses="backdrop-blur-sm"
>
  {#snippet content()}
    <header class="flex justify-between">
      <div class="text-lg 3xl:text-2xl">{title}</div>
      <div class="flex flex-row items-center gap-8">
        {#if timeline.length > 0}
          <div class="flex flex-row items-center gap-2">
            <p>Timeline</p>
            <Switch
              name="showTimeline"
              checked={showTimeline}
              onCheckedChange={(e) => (showTimeline = e.checked)}
            ></Switch>
          </div>
        {/if}
        <X onclick={closeCheatsheet} />
      </div>
    </header>

    {#if tabTags}
      <Tabs value={tab} onValueChange={(e) => (tab = e.value)} classes="m-0" listMargin="mb-1">
        {#snippet list()}
          {#each Object.keys(tabTags) as tabName}
            <Tabs.Control value={tabName}>{tabName}</Tabs.Control>
          {/each}
        {/snippet}
      </Tabs>
    {/if}
    <div
      class={`grid gap-2 h-full`}
      style:grid-template-rows={`repeat(${rows}, minmax(0, 1fr))`}
      style:grid-template-columns={`repeat(${showTimeline ? columns : columns - 1}, minmax(0, 1fr))`}
    >
      {#if timeline.length > 0 && showTimeline}
        <div
          class="card border row-span-full border-surface-800 p-2 flex flex-col bg-surface-100-900"
        >
          <div class="flex mb-2 gap-1">
            <button
              class={`chip px-1 2xl:px-2 border-3 ${timelineFilters.mechs ? 'border-amber-900 bg-amber-700' : 'border-amber-900'}`}
              onclick={() => (timelineFilters.mechs = !timelineFilters.mechs)}
              ><Wrench size={16} strokeWidth={2} />{showFilterCaptions ? 'Mech' : ''}</button
            >
            <button
              class={`chip px-1 2xl:px-2 border-3 ${timelineFilters.raidwides ? 'border-purple-900 bg-purple-800' : 'border-purple-900'}`}
              onclick={() => (timelineFilters.raidwides = !timelineFilters.raidwides)}
              ><Siren size={16} strokeWidth={2} />{showFilterCaptions ? 'Raidwide' : ''}</button
            >
            <button
              class={`chip px-1 2xl:px-2 border-3 ${timelineFilters.tankbusters ? 'border-blue-900 bg-blue-700' : 'border-blue-900'}`}
              onclick={() => (timelineFilters.tankbusters = !timelineFilters.tankbusters)}
              ><Shield size={16} strokeWidth={2} />{showFilterCaptions ? 'TB' : ''}</button
            >
          </div>
          <div class="grow relative">
            {#each timeline as item, index}
              {#if showMechType(item.mechType) && (item.mechTag ? showMechTag(item.mechTag) : true)}
                <div
                  style:top={getFightPercentClass(item.startTimeMs, index)}
                  class="absolute flex text-xs w-full items-center"
                >
                  <div class="w-1/8">
                    {#if item.mechType === 'Start'}
                      <div
                        class="grid bg-green-700 rounded-xs h-[16px] w-[16px] p-auto place-content-center"
                      >
                        <Play size={14} strokeWidth={2} />
                      </div>
                    {/if}
                    {#if item.mechType === 'Phase'}
                      <div class="grid rounded-xs h-[16px] w-[16px] p-auto place-items-center">
                        <ArrowRight size={14} strokeWidth={2} />
                      </div>
                    {/if}
                    {#if item.mechType === 'Raidwide'}
                      <div
                        class="grid bg-purple-800 rounded-xs h-[16px] w-[16px] p-auto place-content-center"
                      >
                        <Siren size={14} strokeWidth={2} />
                      </div>
                    {/if}
                    {#if item.mechType === 'Mechanic'}
                      <div
                        class="grid bg-amber-700 rounded-xs h-[16px] w-[16px] p-auto place-content-center"
                      >
                        <Wrench size={14} strokeWidth={2} />
                      </div>
                    {/if}
                    {#if item.mechType === 'Tankbuster'}
                      <div
                        class="grid bg-blue-700 rounded-xs h-[16px] w-[16px] p-auto place-content-center"
                      >
                        <Shield size={14} strokeWidth={2} />
                      </div>
                    {/if}
                    {#if item.mechType === 'StoredMechanic'}
                      <div
                        class="grid bg-amber-600 rounded-xs h-[16px] w-[16px] p-auto place-content-center"
                      >
                        <Clock size={14} strokeWidth={2} />
                      </div>
                    {/if}
                    {#if item.mechType === 'Enrage'}
                      <div
                        class="grid bg-pink-800 rounded-xs h-[16px] w-[16px] p-auto place-items-center"
                      >
                        <Skull size={14} strokeWidth={2} />
                      </div>
                    {/if}
                  </div>
                  <div class="w-1/4">
                    {msToTime(item.startTimeMs)}
                  </div>
                  <div class="w-5/8 overflow-hidden text-nowrap">
                    {item.mechName}
                  </div>
                </div>
              {/if}
            {/each}
          </div>
        </div>
      {/if}
      {#each individualStrat as phase}
        {#if tabTags && tabTags[tab] ? tabTags[tab].includes(phase.tag) : true}
          {#if phase.mechs}
            {#each phase.mechs as mech, i}
              <button
                class="card border border-surface-800 p-2 h-0 min-h-full flex flex-col text-start group overflow-hidden bg-surface-100-900"
                class:col-span-2={mech.alignmentImages && mech.alignmentImages[alignment]}
                onclick={() => openImageModal(phase, mech)}
              >
                <div class="flex flex-row items-center" class:opacity-60={i > 0}>
                  <div class="capitalize font-bold text-sm 3xl:text-lg mb-0">{phase.phaseName}</div>
                  {#if phase?.tag && stratState[phase.tag] !== getStratMechs(stratName)[phase.tag]}
                    <Tooltip
                      positioning={{ placement: 'top' }}
                      triggerBase="flex"
                      contentBase="card bg-surface-800 p-4"
                      classes="ml-2"
                      openDelay={200}
                      arrow
                      arrowBackground="!bg-surface-800"
                    >
                      {#snippet trigger()}<div class="text-warning-500 self-center">
                          <TriangleAlert size={24} />
                        </div>{/snippet}
                      {#snippet content()}This mechanic differs from what's in the selected guide.{/snippet}
                    </Tooltip>
                  {/if}
                </div>
                {#if i === 0 && phase?.description}<div
                    class="text-xs 3xl:text-base whitespace-pre-wrap"
                  >
                    {phase.description}
                  </div>{/if}
                <div
                  class="flex justify-between capitalize font-semibold text-sm 3xl:text-base mb-0 mt-1"
                >
                  {mech.mechanic}
                  <span class="not-group-hover:hidden"><Expand size={16} /></span>
                </div>
                {#if mech?.description}<div class="whitespace-pre-wrap text-xs 3xl:text-base mb-0">
                    {@html mech.description}
                  </div>{/if}
                {#if mech?.imageUrl}
                  <div class="mt-1 min-h-0 h-full">
                    <img
                      class="rounded-md h-auto w-auto max-h-full max-w-full"
                      src={mech.imageUrl}
                    />
                  </div>
                {/if}
                <div class="flex items-start gap-1 text-xs 3xl:text-base mb-0">
                  {#if role && mech.strats && mech.strats.length > 0}
                    <img
                      src={`/icons/${role.toLowerCase()}.png`}
                      alt={role}
                      class="w-4 h-4 shrink-0 mt-0.5"
                    />
                  {/if}
                  <div class="whitespace-pre-wrap">
                    {mech?.strats && mech.strats[0].description}
                  </div>
                </div>

                {#if mech?.strats && mech.strats[0]?.imageUrl}
                  <div class="mt-1 min-h-0 h-full">
                    <img
                      class="rounded-md h-auto w-auto max-h-full max-w-full"
                      style:mask-image={spotlight && mech.strats[0]?.mask}
                      src={mech.strats[0].imageUrl}
                    />
                  </div>
                {/if}
              </button>
            {/each}
          {:else}
            <button
              class="card border border-surface-800 p-2 h-0 min-h-full flex flex-col text-start group bg-surface-100-900"
              onclick={() => openImageModal(phase)}
            >
              <div class="flex flex-row items-center">
                <div
                  class="flex justify-between capitalize font-bold text-sm 3xl:text-lg mb-0 w-full"
                >
                  {phase.phaseName}
                  <span class="not-group-hover:hidden"><Expand size={16} /></span>
                </div>
                {#if phase?.tag && stratState[phase.tag] !== getStratMechs(stratName)[phase.tag]}
                  <Tooltip
                    positioning={{ placement: 'top' }}
                    triggerBase="flex"
                    contentBase="card bg-surface-800 p-4"
                    classes="ml-2"
                    openDelay={200}
                    arrow
                    arrowBackground="!bg-surface-800"
                  >
                    {#snippet trigger()}<div class="text-warning-500 self-center">
                        <TriangleAlert size={24} />
                      </div>{/snippet}
                    {#snippet content()}This mechanic differs from what's in the selected guide.{/snippet}
                  </Tooltip>
                {/if}
              </div>
              {#if phase?.description}<div class="text-xs 3xl:text-base whitespace-pre-wrap">
                  {phase.description}
                </div>{/if}
              {#if phase?.imageUrl}
                <div class="mt-1 min-h-0 h-full">
                  <img
                    class="rounded-md h-auto w-auto max-h-full max-w-full"
                    style:mask-image={spotlight && phase.mask}
                    src={phase.imageUrl}
                  />
                </div>
              {/if}
            </button>
          {/if}
        {/if}
      {/each}
    </div>
  {/snippet}
</Modal>
