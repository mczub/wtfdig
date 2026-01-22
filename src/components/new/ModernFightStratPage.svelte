<script lang="ts">
  import { getContext } from 'svelte';
  import { fade } from 'svelte/transition';
  import type { ToastLike } from '$lib/utils';
  import Cheatsheet from '../Cheatsheet.svelte';
  import ModernCheatsheet from './ModernCheatsheet.svelte';
  import { ChevronUp, Copy, ExternalLink, Fullscreen, Grid3x3, Info, Link } from '@lucide/svelte';
  import ModernStratView from './ModernStratView.svelte';
  import ModernFightStratControls from './ModernFightStratControls.svelte';
  import FightStratState from './FightStratState.svelte';
  import type { Alignment, FightConfig, Role, Strat } from '$lib/types';
  import {
    buildFightOptionsSummary,
    buildFightPFDescription,
    getBoardUrl,
    getToggleUrls
  } from '$lib/utils';

  interface Props {
    config: FightConfig;
    strats: Strat[];
  }

  let { config, strats }: Props = $props();
  const stratOptions = strats.map((strat) => ({
    value: strat.stratName,
    label: config.strats[strat.stratName].label ?? strat.stratName,
    badges: config.strats[strat.stratName].badges
  }));
  const stratKeys = (config.toggles ?? [])
    .filter((toggle) => !toggle.excludeFromUrl)
    .map((toggle) => toggle.key);

  let spotlight: boolean = $state(true);
  let alignment: Alignment = $state('original');
  export const toast: ToastLike = getContext('toast');

  function getStratItem(
    item?: string | Record<string, any>,
    tag?: string | undefined,
    stratState?: Record<string, string | null>
  ) {
    if (!item) return item;
    if (tag && stratState?.[tag] && typeof item === 'object' && item !== null) {
      const key = stratState[tag];
      if (key && key in item) {
        return item[key];
      }
    }
    return item;
  }

  function getIndividualStrat({
    strat,
    stratName,
    role,
    party,
    stratState
  }: {
    strat?: Strat;
    stratName?: string;
    role?: Role;
    party?: number;
    stratState: Record<string, string | null>;
  }) {
    if (!stratName || !role || !party || !strat) return '';

    // Helper to resolve toggle-dependent mechs
    function resolveMechs<T>(
      mechs: T[] | Record<string, T[]> | undefined,
      tag: string | undefined
    ): T[] | undefined {
      if (!mechs) return undefined;
      if (Array.isArray(mechs)) return mechs;
      if (tag && stratState?.[tag]) {
        const stateKey = stratState[tag] as string;
        return (mechs as Record<string, T[]>)[stateKey] ?? Object.values(mechs)[0];
      }
      return Object.values(mechs)[0];
    }

    const individualPackages = strat.strats?.map((phaseStrat) => {
      const resolvedMechs = resolveMechs(phaseStrat.mechs, phaseStrat.tag);
      return {
        ...phaseStrat,
        description: getStratItem(phaseStrat.description, phaseStrat.tag, stratState),
        imageUrl: getStratItem(phaseStrat.imageUrl, phaseStrat.tag, stratState),
        mask: getStratItem(phaseStrat.mask, phaseStrat.tag, stratState),
        url: getStratItem(phaseStrat.url, phaseStrat.tag, stratState),
        mechs: resolvedMechs?.map((phaseStratMech) => {
          return {
            ...phaseStratMech,
            description: getStratItem(phaseStratMech.description, phaseStrat.tag, stratState),
            notes: getStratItem(phaseStratMech.notes, phaseStrat.tag, stratState),
            imageUrl: getStratItem(phaseStratMech.imageUrl, phaseStrat.tag, stratState),
            url: getStratItem(phaseStratMech.url, phaseStrat.tag, stratState),
            strats:
              phaseStratMech.strats &&
              phaseStratMech.strats
                .filter((playerStrat) => {
                  // Role filter: matches if undefined or equals selected role
                  const matchesRole = !playerStrat.role || playerStrat.role === role;
                  // Party filter: matches if undefined or equals selected party
                  const matchesParty = !playerStrat.party || playerStrat.party === party;
                  if (!matchesRole || !matchesParty) return false;

                  // Toggle filter: matches if no toggleKey or value matches current state
                  if (!playerStrat.toggleKey) return true;
                  const currentToggleValue = stratState[playerStrat.toggleKey] ?? '';
                  return playerStrat.toggleValue === currentToggleValue;
                })
                .map((playerStrat) => {
                  return {
                    ...playerStrat,
                    description: getStratItem(playerStrat.description, phaseStrat.tag, stratState),
                    imageUrl: getStratItem(playerStrat.imageUrl, phaseStrat.tag, stratState),
                    mask: getStratItem(playerStrat.mask, phaseStrat.tag, stratState)
                  };
                })
          };
        })
      };
    });
    if (!individualPackages) return `Couldn't find ${stratName} strat for ${role} ${party}`;
    return individualPackages;
  }

  function getStratMechs(stratName: string) {
    return config.strats[stratName]?.defaults ?? {};
  }

  function getOptionsString({
    stratName,
    role,
    party,
    stratState
  }: {
    stratName?: string;
    role?: Role;
    party?: number;
    stratState: Record<string, string | null>;
  }) {
    return buildFightOptionsSummary({
      stratName,
      role,
      party,
      stratState,
      strats: config.strats,
      toggles: config.toggles
    });
  }

  function getPFDescription({
    stratName,
    stratState
  }: {
    stratName?: string;
    stratState: Record<string, string | null>;
  }) {
    const currentUrl = typeof window === 'undefined' ? '' : window.location.href;
    return buildFightPFDescription({
      stratName,
      stratState,
      currentUrl,
      strats: config.strats,
      toggles: config.toggles
    });
  }

  function copyPFDescription(pfDescription: string) {
    if (!pfDescription) return;
    navigator.clipboard.writeText(pfDescription);
    toast.create({
      description: 'Copied PF description to clipboard!',
      type: 'success'
    });
  }

  function copyLinkToClipboard() {
    navigator.clipboard.writeText(window.location.href);
    toast.create({
      description: 'Copied link to clipboard!',
      type: 'success'
    });
  }

  let innerWidth = $state(0);
  let innerHeight = $state(0);
  let scrollY = $state(0);
  let isCheatsheetEnabled = $derived(innerWidth > 1024 && innerHeight > 768);

  let cheatsheetOpenState = $state(false);
  let currentTab = $state<string | undefined>(undefined);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<svelte:window bind:innerWidth bind:innerHeight bind:scrollY />
<FightStratState
  fightKey={config.fightKey}
  {strats}
  {stratKeys}
  {getStratMechs}
  let:stratName
  let:stratState
  let:role
  let:party
  let:strat
  let:selectStrat
  let:setStratState
  let:setRole
  let:setParty
>
  {@const normalizedRole: Role | undefined = role ?? undefined}
  {@const optionsString = getOptionsString({ stratName, role: normalizedRole, party, stratState })}
  {@const individualStrat = getIndividualStrat({
    strat,
    stratName,
    role: normalizedRole,
    party,
    stratState
  })}
  {@const pfDescription = getPFDescription({ stratName, stratState })}
  {@const toggleUrls = getToggleUrls({
    stratName,
    toggles: config.toggles,
    strats: config.strats,
    stratState,
    showAllToggleUrls: config.showAllToggleUrls
  })}
  {@const boardUrl = getBoardUrl({
    strat,
    stratState
  })}

  {#if config.useModernCheatsheet}
    <ModernCheatsheet
      title={`${config.cheatsheetTitle} - ${optionsString}`}
      bind:cheatsheetOpenState
      timeline={config.timeline ?? []}
      splitTimeline={config.splitTimeline ?? false}
      useEvenTimelineSpacing={config.useEvenTimelineSpacing ?? false}
      {stratName}
      {stratState}
      {setStratState}
      {getStratMechs}
      {individualStrat}
      {spotlight}
      {alignment}
      {innerHeight}
      {innerWidth}
      tabTags={config.tabTags}
      role={normalizedRole}
      fightKey={config.fightKey}
      mechToggles={(config.toggles ?? []).filter((t) => t.isMechToggle)}
    />
  {:else}
    <Cheatsheet
      title={`${config.cheatsheetTitle} - ${optionsString}`}
      bind:cheatsheetOpenState
      timeline={config.timeline ?? []}
      splitTimeline={config.splitTimeline ?? false}
      useEvenTimelineSpacing={config.useEvenTimelineSpacing ?? false}
      {stratName}
      {stratState}
      {getStratMechs}
      {individualStrat}
      {spotlight}
      {alignment}
      rows={config.cheatsheetLayout?.rows ?? '4'}
      columns={config.cheatsheetLayout?.columns ?? '4'}
      {innerHeight}
      {innerWidth}
      tabTags={config.tabTags}
      role={normalizedRole}
    />
  {/if}

  <ModernFightStratControls
    title={config.abbreviatedTitle ?? config.title}
    strats={config.strats}
    {stratName}
    {stratOptions}
    onSelectStrat={selectStrat}
    {stratState}
    toggles={(config.toggles ?? []).map((toggle) => ({
      key: toggle.key,
      label: toggle.label,
      value: stratState?.[toggle.key] ?? toggle.defaultValue ?? null,
      options: toggle.options,
      isMechToggle: toggle.isMechToggle,
      phaseTag: toggle.phaseTag
    }))}
    onToggleChange={setStratState}
    currentStratDefaults={getStratMechs(stratName ?? '')}
    role={normalizedRole}
    {setRole}
    {party}
    {setParty}
    {spotlight}
    setSpotlight={(val) => (spotlight = val)}
    additionalResources={config.additionalResources}
    onOpenCheatsheet={isCheatsheetEnabled ? () => (cheatsheetOpenState = true) : undefined}
    tabTags={config.tabTags}
    {currentTab}
  />

  {#if scrollY > 300}
    <button
      transition:fade={{ duration: 200 }}
      onclick={scrollToTop}
      id="btn-back-to-top"
      class="fixed bottom-4 right-4 p-4 border text-white rounded-full shadow-lg z-200 bg-surface-1000 hover:bg-muted transition-colors"
      aria-label="Back to top"
    >
      <ChevronUp size={24} />
    </button>
  {/if}
  <div class="container grow px-4 mx-auto mb-6 pt-6">
    {#if !role || !party || !stratName}
      <div
        class="relative w-fit -mt-5 mb-2 z-10 bg-surface-900 border border-primary-500 text-surface-50 px-4 py-2 rounded-xl shadow-xl"
      >
        <div
          class="absolute -top-1.5 left-8 w-3 h-3 bg-surface-900 border-t border-l border-primary-500 transform rotate-45"
        ></div>
        <span class="font-bold text-lg whitespace-nowrap">Select your role, group & strat</span>
      </div>
    {/if}
    <div class="container">
      <div class="mb-4 text-left border-b border-surface-700/50 pb-4">
        <div class="preset-typo-headline font-bold tracking-tight">{config.title}</div>
        <div class="text-lg lg:text-2xl text-surface-400 font-light">{config.subtitle}</div>
      </div>
      {#if stratName && normalizedRole && party}
        {#if typeof individualStrat === 'string'}
          {strat}
        {:else if typeof individualStrat === 'undefined'}
          <div></div>
        {:else if !strat}
          <div></div>
        {:else}
          {@const selectedStrat = strat}

          <!-- Strat Info & Content -->
          <div class="space-y-4">
            <div
              class="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between pb-2"
            >
              <div class="w-full lg:w-auto">
                <div class="capitalize font-bold preset-typo-title mb-1 text-surface-50">
                  {optionsString}
                </div>
                {#if typeof selectedStrat?.stratUrl === 'string'}
                  <a
                    class="inline-flex items-center text-base lg:text-lg text-blue-400 hover:text-blue-300 hover:underline gap-1 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={selectedStrat.stratUrl}
                    >{selectedStrat.description}
                    <ExternalLink size={16} />
                  </a>
                {:else if typeof selectedStrat?.stratUrl === 'object'}
                  <div class="flex flex-col gap-x-4 gap-y-1">
                    <span class="text-surface-300">{selectedStrat.description}</span>
                    <div class="flex flex-wrap gap-x-4 gap-y-1">
                      {#each Object.entries(selectedStrat.stratUrl) as [linkName, linkUrl]}
                        <a
                          class="inline-flex items-center text-base lg:text-lg text-blue-400 hover:text-blue-300 hover:underline gap-1 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={linkUrl}
                          >{linkName}
                          <ExternalLink size={16} />
                        </a>
                      {/each}
                    </div>
                  </div>
                {/if}
                {#if toggleUrls.length > 0}
                  <div class="flex flex-wrap gap-x-4 gap-y-1">
                    {#each toggleUrls as toggleUrl}
                      <a
                        class="inline-flex items-center text-base lg:text-lg text-blue-400 hover:text-blue-300 hover:underline gap-1 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={toggleUrl.url}
                        >{toggleUrl.name}
                        <ExternalLink size={16} />
                      </a>
                    {/each}
                  </div>
                {/if}
              </div>
            </div>
            <div
              class="card preset-outlined-primary-500 p-4 mb-6 w-fit flex flex-row gap-4 items-center"
            >
              <Info size={24} class="shrink-0" />
              <div class="text-sm md:text-base text-warning-200">
                <p>
                  Some strats may be missing images or highlights. Please refer to original guides
                  for full details.
                </p>
              </div>
            </div>

            <!-- Action Bar -->
            <div
              class="flex flex-col lg:flex-row gap-4 mb-6 items-center justify-between bg-surface-900/30 p-4 rounded-xl border border-surface-800/50 backdrop-blur-sm min-w-0 w-full"
            >
              <div
                class="card flex flex-col lg:flex-row grow border border-surface-700/50 items-center bg-surface-950/50 overflow-hidden w-full lg:w-auto min-w-0 order-first lg:order-last"
              >
                <div
                  class="self-start lg:self-center overflow-x-auto max-w-[calc(100vw-5rem)] lg:max-w-none lg:w-0 lg:flex-1 px-2 py-2 [&::-webkit-scrollbar]:hidden"
                >
                  <span class="whitespace-nowrap font-mono text-sm">{pfDescription}</span>
                </div>
                <button
                  onclick={() => copyPFDescription(pfDescription)}
                  class="btn preset-tonal-secondary border border-secondary-500/50 hover:border-secondary-500 transition-colors hidden lg:flex shrink-0"
                  ><Copy size={18} />Copy PF Description</button
                >
              </div>

              <!-- Action Buttons -->
              <div class="gap-2 w-full flex flex-col lg:flex-row lg:w-auto shrink-0">
                {#if boardUrl}
                  <button
                    onclick={() => window.open(boardUrl)}
                    class="btn preset-tonal-secondary border border-secondary-500/50 hover:border-secondary-500 transition-colors flex-1 lg:flex-none cursor-pointer"
                    ><Grid3x3 size={18} />Strategy Board<ExternalLink size={16} /></button
                  >
                {/if}
                <button
                  onclick={() => (cheatsheetOpenState = true)}
                  class="btn preset-tonal-secondary border border-secondary-500/50 hover:border-secondary-500 transition-colors flex-1 lg:flex-none"
                  ><Fullscreen size={18} />Cheatsheet</button
                >
                <button
                  onclick={() => copyLinkToClipboard()}
                  class="btn preset-tonal-secondary border border-secondary-500/50 hover:border-secondary-500 transition-colors flex-1 lg:flex-none"
                  ><Link size={18} />Copy Link</button
                >
                <button
                  onclick={() => copyPFDescription(pfDescription)}
                  class="btn preset-tonal-secondary border border-secondary-500/50 hover:border-secondary-500 transition-colors flex-1 lg:hidden"
                  ><Copy size={18} />Copy PF Description</button
                >
              </div>
            </div>

            <ModernStratView
              strat={selectedStrat}
              timeline={config.timeline ?? []}
              {stratName}
              {stratState}
              {getStratMechs}
              {individualStrat}
              {spotlight}
              {alignment}
              tabTags={config.tabTags}
              role={normalizedRole}
              fightKey={config.fightKey}
              useMainPageTabs={config.useMainPageTabs}
              bind:currentTab
            />
          </div>
        {/if}
      {/if}
    </div>
  </div>
</FightStratState>
