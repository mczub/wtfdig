<script lang="ts">
  import { getContext, onMount, onDestroy } from 'svelte';
  import { fade } from 'svelte/transition';
  import type { ToastLike } from '$lib/utils';
  import { startSolitaireEffect, stopSolitaireEffect } from '$lib/solitaire';
  import ModernCheatsheet from './ModernCheatsheet.svelte';
  import ModernStratOverlay from './ModernStratOverlay.svelte';
  import PosterCheatsheet from '../poster/PosterCheatsheet.svelte';
  import {
    ChevronUp,
    CircleQuestionMark,
    Copy,
    ExternalLink,
    Fullscreen,
    Grid3x3,
    Image,
    Info,
    Link,
    PictureInPicture,
    PictureInPicture2
  } from '@lucide/svelte';
  import ModernStratView from './ModernStratView.svelte';
  import ModernFightStratControls from './ModernFightStratControls.svelte';
  import FightStratState from './FightStratState.svelte';
  import type { Alignment, FightConfig, PhaseStrats, Role, Strat } from '$lib/types';
  import {
    buildFightOptionsSummary,
    buildFightPFDescription,
    formatRoleAbbreviation,
    getBoardUrl,
    getToggleUrls,
    resolveMechs,
    resolveStratItem
  } from '$lib/utils';
  import type { PlayerJob } from '$lib/arena';
  import { generateAprilFoolsData, isAprilFools } from '$lib/aprilFools';

  interface Props {
    config: FightConfig;
    strats: Strat[];
  }

  let { config, strats }: Props = $props();

  let jokeStrat = $state<Strat | undefined>(undefined);
  let jokeConfigEntry = $state<FightConfig['strats'][string] | undefined>(undefined);

  let effectiveStrats = $derived(jokeStrat ? [jokeStrat, ...strats] : strats);
  let effectiveConfigStrats = $derived(
    jokeConfigEntry ? { ...config.strats, aprilfools: jokeConfigEntry } : config.strats
  );

  let stratOptions = $derived(
    effectiveStrats.map((strat) => ({
      value: strat.stratName,
      label: effectiveConfigStrats[strat.stratName]?.label ?? strat.stratName,
      badges: effectiveConfigStrats[strat.stratName]?.badges
    }))
  );
  let stratKeys = $derived(
    (config.toggles ?? []).filter((toggle) => !toggle.excludeFromUrl).map((toggle) => toggle.key)
  );

  onMount(() => {
    if (isAprilFools() && strats.length > 0) {
      const { strat, configEntry } = generateAprilFoolsData(strats, config.strats);
      jokeStrat = strat;
      jokeConfigEntry = configEntry;
    }
  });

  let spotlight: boolean = $state(true);
  let alignment: Alignment = $state('original');
  let solitaireActive = $state(false);

  async function toggleSolitaire() {
    if (solitaireActive) {
      stopSolitaireEffect();
      solitaireActive = false;
    } else {
      solitaireActive = true;
      await startSolitaireEffect(() => {
        solitaireActive = false;
      });
    }
  }

  onDestroy(() => {
    if (solitaireActive) stopSolitaireEffect();
  });
  export const toast: ToastLike = getContext('toast');

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
  }): PhaseStrats[] | string {
    if (!stratName || !role || !party || !strat) return '';

    const individualPackages = strat.strats?.map((phaseStrat) => {
      const resolvedMechs = resolveMechs(phaseStrat.mechs, phaseStrat.tag, stratState);
      return {
        ...phaseStrat,
        description: resolveStratItem(phaseStrat.description, phaseStrat.tag, stratState),
        imageUrl: resolveStratItem(phaseStrat.imageUrl, phaseStrat.tag, stratState),
        mask: resolveStratItem(phaseStrat.mask, phaseStrat.tag, stratState),
        url: resolveStratItem(phaseStrat.url, phaseStrat.tag, stratState),
        mechs: resolvedMechs?.map((phaseStratMech) => {
          return {
            ...phaseStratMech,
            description: resolveStratItem(phaseStratMech.description, phaseStrat.tag, stratState),
            notes: resolveStratItem(phaseStratMech.notes, phaseStrat.tag, stratState),
            imageUrl: resolveStratItem(phaseStratMech.imageUrl, phaseStrat.tag, stratState),
            url: resolveStratItem(phaseStratMech.url, phaseStrat.tag, stratState),
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
                    description: resolveStratItem(
                      playerStrat.description,
                      phaseStrat.tag,
                      stratState
                    ),
                    imageUrl: resolveStratItem(playerStrat.imageUrl, phaseStrat.tag, stratState),
                    mask: resolveStratItem(playerStrat.mask, phaseStrat.tag, stratState)
                  };
                })
          };
        })
      };
    });
    if (!individualPackages) return `Couldn't find ${stratName} strat for ${role} ${party}`;
    // PhaseStrats models the pre-resolution shape (string | Record<string, string>);
    // after resolveStratItem the Record branches have collapsed to plain strings,
    // which is structurally compatible but narrower than the declared type.
    return individualPackages as unknown as PhaseStrats[];
  }

  function getStratMechs(stratName: string) {
    return effectiveConfigStrats[stratName]?.defaults ?? {};
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
      strats: effectiveConfigStrats,
      toggles: config.toggles,
      roleOptions: config.roleOptions
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
      strats: effectiveConfigStrats,
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
  let posterOpenState = $state(false);
  let currentTab = $state<string | undefined>(undefined);

  let overlayPopOut = $state<() => Promise<void>>(async () => {});
  let overlayPopIn = $state<() => void>(() => {});
  let overlayIsPopped = $state(false);
  let overlayIsSupported = $state(false);

  let posterOverlayPopOut = $state<() => Promise<void>>(async () => {});
  let posterOverlayPopIn = $state<() => void>(() => {});
  let posterOverlayIsPopped = $state(false);
  let posterOverlayIsSupported = $state(false);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<svelte:window bind:innerWidth bind:innerHeight bind:scrollY />
<FightStratState fightKey={config.fightKey} strats={effectiveStrats} {stratKeys} {getStratMechs}>
  {#snippet children({
    stratName,
    stratState,
    role,
    party,
    strat,
    selectStrat,
    setStratState,
    setRole,
    setParty
  })}
    {@const normalizedRole: Role | undefined = role ?? undefined}
    {@const optionsString = getOptionsString({
      stratName,
      role: normalizedRole,
      party,
      stratState
    })}
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
      strats: effectiveConfigStrats,
      stratState,
      showAllToggleUrls: config.showAllToggleUrls
    })}
    {@const boardUrl = getBoardUrl({
      strat,
      stratState
    })}

    {#if config.posterLayout && config.posterEnabled}
      {@const posterJob = formatRoleAbbreviation(normalizedRole, party) as PlayerJob | ''}
      {@const roleOpt = config.roleOptions?.find(
        (o) => o.role === normalizedRole && o.party === party
      )}
      {@const posterJobLabel = roleOpt?.abbrev ?? roleOpt?.label}
      <PosterCheatsheet
        {config}
        bind:posterOpenState
        selectedJob={posterJob || undefined}
        selectedJobLabel={posterJobLabel}
        bind:overlayPopOut={posterOverlayPopOut}
        bind:overlayPopIn={posterOverlayPopIn}
        bind:overlayIsPopped={posterOverlayIsPopped}
        bind:overlayIsSupported={posterOverlayIsSupported}
      />
    {/if}

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

    <ModernStratOverlay
      title={`${config.cheatsheetTitle} - ${optionsString}`}
      {individualStrat}
      {spotlight}
      role={normalizedRole}
      bind:popOut={overlayPopOut}
      bind:popIn={overlayPopIn}
      bind:isPopped={overlayIsPopped}
      bind:isSupported={overlayIsSupported}
    />

    <ModernFightStratControls
      title={config.abbreviatedTitle ?? config.title}
      strats={effectiveConfigStrats}
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
      roleOptions={config.roleOptions}
      {spotlight}
      setSpotlight={(val) => (spotlight = val)}
      additionalResources={config.additionalResources}
      onOpenCheatsheet={isCheatsheetEnabled ? () => (cheatsheetOpenState = true) : undefined}
      onOpenPoster={config.posterLayout && config.posterEnabled
        ? () => (posterOpenState = true)
        : undefined}
      tabTags={config.tabTags}
      {currentTab}
    />

    {#if scrollY > 300}
      <button
        transition:fade={{ duration: 200 }}
        onclick={scrollToTop}
        id="btn-back-to-top"
        class="fixed bottom-4 right-4 p-4 border text-white rounded-full shadow-lg z-40 bg-surface-1000 hover:bg-muted transition-colors"
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
                  {#if selectedStrat?.stratName === 'aprilfools'}
                    <button
                      type="button"
                      class="inline-flex items-center text-base lg:text-lg text-blue-400 hover:text-blue-300 hover:underline gap-1 transition-colors cursor-pointer"
                      onclick={toggleSolitaire}
                      >{selectedStrat.description}
                    </button>
                  {:else if typeof selectedStrat?.stratUrl === 'string'}
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
              <div class="flex flex-col gap-4 mb-6 items-start">
                <div
                  class="card preset-outlined-primary-500 p-4 w-fit flex flex-row gap-4 items-center"
                >
                  <Info size={24} class="shrink-0" />
                  <div class="text-sm md:text-base text-warning-200">
                    <p>
                      Some strats may be missing images or highlights. Please refer to original
                      guides for full details.
                    </p>
                  </div>
                </div>
                {#if config.stratDifferences && config.stratDifferences.length > 0}
                  <div class="card preset-outlined-secondary-500 p-4 w-fit flex flex-col gap-2">
                    <div
                      class="flex flex-row gap-4 items-center text-sm md:text-base font-semibold"
                    >
                      <CircleQuestionMark size={24} class="shrink-0" />
                      <span>What's the difference between the strats?</span>
                    </div>
                    <ul class="text-sm md:text-base text-surface-100 flex flex-col gap-1">
                      {#each config.stratDifferences as diff}
                        <li>
                          <span class="font-semibold text-surface">{diff.label}:</span>
                          {diff.description}
                        </li>
                      {/each}
                    </ul>
                  </div>
                {/if}
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
                  {#if config.posterLayout && config.posterEnabled}
                    {#if posterOverlayIsPopped}
                      <button
                        onclick={() => posterOverlayPopIn()}
                        class="btn preset-filled-primary-500 border border-primary-300 shadow-lg shadow-primary-500/40 font-semibold ring-2 ring-primary-400/60 transition-colors flex-1 lg:flex-none"
                        title="Close poster overlay"
                      >
                        <PictureInPicture size={18} />Restore Poster
                      </button>
                    {:else}
                      <button
                        onclick={() => (posterOpenState = true)}
                        class="btn preset-tonal-secondary border border-secondary-500/50 hover:border-secondary-500 transition-colors flex-1 lg:flex-none"
                      >
                        <Image size={18} />Poster
                      </button>
                    {/if}
                  {/if}
                  <button
                    onclick={() => (cheatsheetOpenState = true)}
                    class="btn preset-tonal-secondary border border-secondary-500/50 hover:border-secondary-500 transition-colors flex-1 lg:flex-none"
                    ><Fullscreen size={18} />Cheatsheet</button
                  >
                  {#if overlayIsSupported}
                    <button
                      onclick={() => (overlayIsPopped ? overlayPopIn() : overlayPopOut())}
                      class={overlayIsPopped
                        ? 'btn preset-filled-primary-500 border border-primary-300 shadow-lg shadow-primary-500/40 font-semibold ring-2 ring-primary-400/60 transition-colors flex-1 lg:flex-none'
                        : 'btn preset-tonal-secondary border border-secondary-500/50 hover:border-secondary-500 transition-colors flex-1 lg:flex-none'}
                    >
                      {#if overlayIsPopped}
                        <PictureInPicture size={18} />Restore
                      {:else}
                        <PictureInPicture2 size={18} />Overlay
                      {/if}
                    </button>
                  {/if}
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
  {/snippet}
</FightStratState>
