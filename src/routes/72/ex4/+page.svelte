<!-- @ts-nocheck -->
<script lang="ts">
  // @ts-nocheck
  import type { Alignment, FightConfig, Role, Strat } from '$lib/types';
  import { Segment, Switch } from '$lib/components/ui';
  import { ExternalLink, Fullscreen, Info, Link } from '@lucide/svelte';
  import { getContext } from 'svelte';
  import type { ToastLike } from '$lib/utils';
  import StratView from '../../../components/StratView.svelte';
  import ClassicFightStratControls from '../../../components/new/ClassicFightStratControls.svelte';
  import FightStratState from '../../../components/new/FightStratState.svelte';
  import ModernCheatsheet from '../../../components/new/ModernCheatsheet.svelte';

  interface Props {
    data: {
      strats: Strat[];
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

  const stratKeys = (config.toggles ?? [])
    .filter((toggle) => !toggle.excludeFromUrl)
    .map((toggle) => toggle.key);

  let spotlight: boolean = $state(true);
  let alignment: Alignment = $state('original');

  export const toast: ToastLike = getContext('toast');

  function getStratItem(item: string | Record<string, string>, tag?: string, stratState?: Record<string, string | null>) {
    if (!item) return item;
    if (tag && stratState?.[tag] && typeof item !== 'string') {
      return item[stratState[tag]];
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
    const individualPackages = strat.strats?.map((phaseStrat) => {
      return {
        ...phaseStrat,
        description: getStratItem(phaseStrat.description, phaseStrat.tag, stratState),
        imageUrl: getStratItem(phaseStrat.imageUrl, phaseStrat.tag, stratState),
        mask: getStratItem(phaseStrat.mask, phaseStrat.tag, stratState),
        mechs: phaseStrat.mechs?.map((phaseStratMech) => {
          return {
            ...phaseStratMech,
            strats: phaseStratMech.strats
              ?.filter((s) => s.role === role && s.party === party)
              .map((iStrat) => {
                return {
                  ...iStrat,
                  description: getStratItem(iStrat.description, phaseStrat.tag, stratState),
                  imageUrl: getStratItem(iStrat.imageUrl, phaseStrat.tag, stratState),
                  mask: getStratItem(iStrat.mask, phaseStrat.tag, stratState)
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
  }): string {
    if (!stratName || !role || !party) return '';
    const stratConfig = config.strats[stratName];
    let roleAbbrev = '';
    if (role === 'Tank') {
      roleAbbrev = party === 1 ? 'MT' : 'OT';
    } else {
      roleAbbrev = role.charAt(0).toUpperCase() + party.toString();
    }
    const defaults = getStratMechs(stratName);
    let stratDiffs = [stratConfig?.label ?? stratName];

    for (const toggle of config.toggles ?? []) {
      if (stratState[toggle.key] !== defaults[toggle.key]) {
        const option = toggle.options.find((o) => o.value === stratState[toggle.key]);
        if (option) {
          stratDiffs.push(`${option.label} ${toggle.label}`);
        }
      }
    }
    return `${stratDiffs.join(' | ')} - ${roleAbbrev}`;
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
  let isCheatsheetEnabled = $derived(innerWidth > 1024 && innerHeight > 768);
  let cheatsheetOpenState = $state(false);
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<FightStratState
  fightKey={config.fightKey}
  strats={data.strats}
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
  {@const normalizedRole = role ?? undefined}
  {@const individualStrat = getIndividualStrat({
    strat,
    stratName,
    role: normalizedRole,
    party,
    stratState
  })}
  {@const optionsString = getOptionsString({ stratName, role: normalizedRole, party, stratState })}
  {@const currentDefaults = stratName ? getStratMechs(stratName) : {}}

  <ModernCheatsheet
    title={`${config.cheatsheetTitle} - ${optionsString}`}
    bind:cheatsheetOpenState
    timeline={[]}
    {stratName}
    {stratState}
    {getStratMechs}
    {individualStrat}
    {spotlight}
    {alignment}
    rows={config.cheatsheetLayout?.rows ?? 3}
    columns={config.cheatsheetLayout?.columns ?? 4}
    {innerHeight}
    {innerWidth}
    role={normalizedRole}
  />

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
        toggles={(config.toggles ?? []).map((toggle) => ({
          key: toggle.key,
          label: toggle.label,
          value: stratState?.[toggle.key] ?? toggle.defaultValue ?? null,
          options: toggle.options,
          isMechToggle: toggle.isMechToggle,
          phaseTag: toggle.phaseTag
        }))}
        onToggleChange={setStratState}
        currentStratDefaults={currentDefaults}
        warningMessage={'<p>This site is still under construction, thank you for your patience while we continue to work on it.</p><p>Some strats may be missing images or highlights.</p><p>This is intended to be a quick reference, please refer to the original guides for full explanations of mechanics.</p>'}
      />

      {#if stratName && normalizedRole && party}
        {#if typeof individualStrat === 'string'}
          {individualStrat}
        {:else if typeof individualStrat === 'undefined'}
          <div></div>
        {:else}
          <div class="flex flex-col lg:flex-row gap-2 mb-8">
            {#if isCheatsheetEnabled}
              <button
                onclick={() => (cheatsheetOpenState = true)}
                class="button btn btn-lg preset-tonal-secondary border border-secondary-500"
                ><Fullscreen />Open cheatsheet</button
              >
            {:else}
              <button
                class="button btn btn-lg preset-tonal-secondary border border-secondary-500 disabled"
                ><Fullscreen />Open cheatsheet</button
              >
              <div class="flex flex-row items-center gap-2">
                <Info size={24} />
                <span>Cheatsheet mode needs a browser window size of at least 1024 x 768</span>
              </div>
            {/if}
            <button
              onclick={() => copyLinkToClipboard()}
              class="button btn btn-lg preset-tonal-secondary border border-secondary-500"
              ><Link />Copy link</button
            >
          </div>
          <div class="card border-[1px] border-surface-200-800 p-4">
            <div class="flex flex-col lg:flex-row gap-2">
              <div class="w-full lg:w-auto content-center">
                <div class="capitalize font-semibold text-2xl mb-0">{optionsString}</div>
                {#if typeof strat?.stratUrl === 'string'}
                  <a
                    class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={strat.stratUrl}
                    >{strat.description}
                    <ExternalLink />
                  </a>
                {:else if typeof strat?.stratUrl === 'object'}
                  {strat.description}
                  {#each Object.entries(strat.stratUrl) as [linkName, linkUrl]}
                    <a
                      class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={linkUrl}
                      >{linkName}
                      <ExternalLink />
                    </a>
                  {/each}
                {/if}
              </div>
              <div class="grow"></div>
              <div>
                <Switch
                  name="spotlight-toggle"
                  checked={spotlight}
                  onCheckedChange={(e) => (spotlight = e.checked)}>Highlight my spots</Switch
                >
              </div>
            </div>
            <div class="flex flex-wrap items-center justify-between my-4">
              <div class="text-xl">{strat?.notes}</div>
              {#if strat?.strats?.some((s) => s.alignmentTransforms)}
                <div class="content-center">
                  <Segment
                    name="alignment"
                    value={alignment}
                    onValueChange={(e) => (alignment = e.value)}
                  >
                    <Segment.Item value="original">Original</Segment.Item>
                    <Segment.Item value="truenorth">True North</Segment.Item>
                    <Segment.Item value="addrelative">Wall Relative</Segment.Item>
                  </Segment>
                </div>
              {/if}
            </div>

            <StratView
              {strat}
              timeline={[]}
              {stratName}
              {stratState}
              {getStratMechs}
              {individualStrat}
              {spotlight}
              {alignment}
              role={normalizedRole}
            />
          </div>
        {/if}
      {/if}
    </div>
  </div>
</FightStratState>
