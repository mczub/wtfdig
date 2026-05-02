<!-- @ts-nocheck -->
<script lang="ts">
  // @ts-nocheck
  import { getContext } from 'svelte';
  import { fade } from 'svelte/transition';
  import type { ToastLike } from '$lib/utils';
  import type { Alignment, Alliance, FightConfig, Role } from '$lib/types';
  import type { ChaoticStrat, ChaoticMechanicStrat, PlayerStrats } from './data';
  import { Accordion, Segment, Switch } from '$lib/components/ui';
  import { ChevronUp, ExternalLink, Info, Link } from '@lucide/svelte';
  import ClassicFightStratControls from '../../../components/new/ClassicFightStratControls.svelte';
  import FightStratState from '../../../components/new/FightStratState.svelte';

  interface Props {
    data: {
      strats: ChaoticStrat[];
      config: FightConfig;
    };
  }

  let { data }: Props = $props();
  const config = data.config;

  let stratOptions = $derived(
    data.strats.map((strat) => ({
      value: strat.stratName,
      label: config.strats[strat.stratName]?.label ?? strat.stratName,
      badges: config.strats[strat.stratName]?.badges
    }))
  );

  let spotlight: boolean = $state(true);
  let alignment: Alignment = $state('original');
  let accordion = $state(['swaps']);

  export const toast: ToastLike = getContext('toast');

  function getPlayerStrat(
    strats: ChaoticStrat[],
    stratName?: string,
    alliance?: Alliance,
    role?: Role,
    party?: number
  ): PlayerStrats | string {
    if (!stratName || !alliance || !role || !party) return '';
    const stratPackage = strats.find((s) => s.stratName === stratName);
    if (!stratPackage) return '';
    const playerStrat = stratPackage.strats.find(
      (s) => s.alliance === alliance && s.role === role && s.party === party
    );
    if (!playerStrat)
      return `Couldn't find ${stratName} strat for Alliance ${alliance} ${role} ${party}`;
    return playerStrat;
  }

  function getOptionsString(
    stratName?: string,
    alliance?: Alliance,
    role?: Role,
    party?: number
  ): string {
    if (!stratName || !alliance || !role || !party) return '';
    const stratConfig = config.strats[stratName];
    const useJpRoles = stratConfig?.jpRoles ?? false;
    const jpRoleAbbrev: Record<string, string> = {
      MT: 'MT', OT: 'ST', H1: 'H1', H2: 'H2',
      M1: 'D1', M2: 'D2', R1: 'D3', R2: 'D4'
    };
    let roleAbbrev = '';
    if (role === 'Tank') {
      roleAbbrev = party === 1 ? 'MT' : 'OT';
    } else {
      roleAbbrev = role.charAt(0).toUpperCase() + party.toString();
    }
    if (useJpRoles && roleAbbrev !== jpRoleAbbrev[roleAbbrev]) {
      return `${stratConfig?.label ?? stratName} - Alliance ${alliance} ${roleAbbrev}/${jpRoleAbbrev[roleAbbrev]}`;
    }
    return `${stratConfig?.label ?? stratName} - Alliance ${alliance} ${roleAbbrev}`;
  }

  function getMask(step: ChaoticMechanicStrat): string {
    if (spotlight) {
      if (step.alignmentMasks && step.alignmentMasks[alignment]) {
        return step.alignmentMasks[alignment];
      }
      return step.mask || '';
    }
    return '';
  }

  function getImageUrl(step: ChaoticMechanicStrat): string {
    if (step.alignmentImages && step.alignmentImages[alignment]) {
      return step.alignmentImages[alignment];
    }
    return step.imageUrl ?? '';
  }

  function getTransform(step: ChaoticMechanicStrat): string {
    if (step.alignmentTransforms) {
      return step.alignmentTransforms[alignment] ?? '';
    }
    return step.transform ?? '';
  }

  function copyLinkToClipboard() {
    navigator.clipboard.writeText(window.location.href);
    toast.create({
      description: 'Copied link to clipboard!',
      type: 'success'
    });
  }

  function getStratMechs() {
    return {};
  }

  const stratImageUrls: Record<string, string> = {
    raidplan: './strats/raidplan/overall.png',
    codcar: './strats/codcar/overall.png',
    healerout: './strats/healerout/overall.png',
    idyll: './strats/idyll/overall.png'
  };

  let scrollY = $state(0);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<svelte:window bind:scrollY />

<FightStratState
  fightKey={config.fightKey}
  strats={data.strats}
  stratKeys={[]}
  {getStratMechs}
  allianceOptions={config.allianceOptions}
  let:stratName
  let:stratState
  let:role
  let:party
  let:alliance
  let:selectStrat
  let:setStratState
  let:setRole
  let:setParty
  let:setAlliance
>
  {@const normalizedRole = role ?? undefined}
  {@const stratPackage = data.strats.find((s) => s.stratName === stratName)}
  {@const playerStrat = getPlayerStrat(data.strats, stratName, alliance, normalizedRole, party)}
  {@const optionsString = getOptionsString(stratName, alliance, normalizedRole, party)}

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

  <div class="container grow px-4 mx-auto mb-6">
    <div class="container">
      <div class="mb-6">
        <div class="preset-typo-display-1 mt-2 lg:mt-0 lg:-mb-2">{config.title}</div>
        <div class="text-xl lg:text-3xl text-surface-400">{config.subtitle}</div>
      </div>

      <ClassicFightStratControls
        {stratName}
        {stratOptions}
        onSelectStrat={selectStrat}
        role={normalizedRole}
        {setRole}
        {party}
        {setParty}
        {spotlight}
        setSpotlight={(val) => (spotlight = val)}
        {alliance}
        {setAlliance}
        allianceOptions={config.allianceOptions}
        warningMessage={'<p>As of Patch 7.16, "Lateral-core Phaser" and "Core-lateral Phaser" have been swapped</p><p>Lateral-core Phaser = Front is safe, then sides are safe</p><p>Core-lateral Phaser = Sides are safe, then front is safe</p>'}
        stratImageUrl={stratName ? stratImageUrls[stratName] : undefined}
      />

      {#if typeof playerStrat === 'string'}
        {#if playerStrat}
          <p class="text-surface-200 text-lg">{playerStrat}</p>
        {/if}
      {:else}
        <div class="card border-[1px] border-surface-200-800 p-4">
          <div class="flex flex-wrap items-center gap-2">
            <div class="content-center">
              <div class="capitalize font-semibold text-2xl mb-0">{optionsString}</div>
              {#if typeof stratPackage?.stratUrl === 'string'}
                <a
                  class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={stratPackage.stratUrl}
                  >{stratPackage.description}
                  <svg
                    class="w-4 h-4 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              {:else if typeof stratPackage?.stratUrl === 'object'}
                {stratPackage.description}
                {#each Object.entries(stratPackage.stratUrl) as [linkName, linkUrl]}
                  <a
                    class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={linkUrl}
                    >{linkName}
                    <svg
                      class="w-4 h-4 ms-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                {/each}
              {/if}
            </div>
            <div class="grow"></div>
            <div class="content-center">
              <Switch
                name="spotlight-toggle"
                checked={spotlight}
                onCheckedChange={(e) => (spotlight = e.checked)}>Highlight my spots</Switch
              >
            </div>
          </div>
          <div class="flex flex-wrap items-center justify-between my-4">
            <div class="text-xl">{playerStrat.notes}</div>
            {#if playerStrat.strats.some((s) => s.alignmentTransforms) && config.alignmentOptions}
              <div class="content-center">
                <Segment
                  name="alignment"
                  value={alignment}
                  onValueChange={(e) => (alignment = e.value)}
                >
                  {#each config.alignmentOptions as option}
                    <Segment.Item value={option.value}>{option.label}</Segment.Item>
                  {/each}
                </Segment>
              </div>
            {/if}
          </div>

          <div class="grid xl:grid-cols-6 grid-cols-3 gap-2">
            {#each playerStrat.strats as step}
              {#key [spotlight, alignment]}
                <div
                  class="space-y-4"
                  class:col-span-2={step.alignmentImages && step.alignmentImages[alignment]}
                >
                  <div class="capitalize font-semibold text-xl mb-0">{step.mechanic}</div>
                  <div class="whitespace-pre-wrap text-l">{step.description}</div>
                  <img
                    src={getImageUrl(step)}
                    alt={step.mechanic}
                    style:mask-image={getMask(step)}
                    style:transform={getTransform(step)}
                  />
                </div>
              {/key}
            {/each}
            {#if playerStrat.swapNote && playerStrat.swapStrats}
              <div class="col-span-3">
                <Accordion
                  value={accordion}
                  onValueChange={(e) => (accordion = e.value)}
                  multiple
                  classes="card preset-tonal-primary border border-primary-700 text-surface-50"
                >
                  <Accordion.Item panelPadding="py-4 px-4" value="swaps">
                    {#snippet lead()}
                      <img width="24px" src={'/swap-icon.png'} alt="Swap" />
                    {/snippet}
                    {#snippet control()}
                      <span class="text-xl">{playerStrat.swapNote}</span>
                    {/snippet}
                    {#snippet panel()}
                      {#if playerStrat.swapWarning}
                        <aside
                          class="card preset-tonal-error preset-outlined-error-500 gap-4 p-4 mb-2"
                        >
                          <div class="alert-message">
                            <p>{playerStrat.swapWarning}</p>
                          </div>
                        </aside>
                      {/if}
                      <div class="grid grid-cols-3 gap-2">
                        {#each playerStrat.swapStrats as step}
                          {#key [spotlight, alignment]}
                            <div
                              class="space-y-4"
                              class:col-span-2={step.alignmentImages &&
                                step.alignmentImages[alignment]}
                            >
                              <div class="capitalize font-semibold text-xl mb-0">{step.mechanic}</div>
                              <div class="whitespace-pre-wrap text-l">{step.description}</div>
                              {#if getImageUrl(step)}
                                <img
                                  src={getImageUrl(step)}
                                  alt={step.mechanic}
                                  style:mask-image={getMask(step)}
                                  style:transform={getTransform(step)}
                                />
                              {/if}
                            </div>
                          {/key}
                        {:else}
                          <div></div>
                        {/each}
                      </div>
                    {/snippet}
                  </Accordion.Item>
                </Accordion>
              </div>
            {/if}
          </div>
        </div>
      {/if}
    </div>
  </div>
</FightStratState>
