<script lang="ts">
	import { Segment, Switch } from '$lib/components/ui';
	import { getContext } from 'svelte';
	import type { ToastLike } from '$lib/utils';
	import Cheatsheet from '../Cheatsheet.svelte';
	import { Copy, ExternalLink, Fullscreen, Info, Link } from '@lucide/svelte';
	import StratView from '../StratView.svelte';
	import FightStratControls from './FightStratControls.svelte';
	import FightStratState from './FightStratState.svelte';
	import type { Alignment, FightConfig, Role, Strat } from '$lib/types';
	import { buildFightOptionsSummary, buildFightPFDescription } from '$lib/utils';

	interface Props {
		config: FightConfig;
		strats: Strat[];
	}

	let { config, strats }: Props = $props();
	const stratOptions = strats.map((strat) => ({
		value: strat.stratName,
		label: config.stratLabels[strat.stratName] ?? strat.stratName
	}));
	const stratKeys = (config.toggles ?? []).map((toggle) => toggle.key);

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
		const individualPackages = strat.strats?.map((phaseStrat) => {
			return {
				...phaseStrat,
				description: getStratItem(phaseStrat.description, phaseStrat.tag, stratState),
				imageUrl: getStratItem(phaseStrat.imageUrl, phaseStrat.tag, stratState),
				mask: getStratItem(phaseStrat.mask, phaseStrat.tag, stratState),
				mechs: phaseStrat.mechs?.map((phaseStratMech) => {
					return {
						...phaseStratMech,
						description: getStratItem(phaseStratMech.description, phaseStrat.tag, stratState),
						imageUrl: getStratItem(phaseStratMech.imageUrl, phaseStrat.tag, stratState),
						strats:
							phaseStratMech.strats &&
							phaseStratMech.strats
								.filter((playerStrat) => playerStrat.role === role && playerStrat.party === party)
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
		return config.stratDefaults[stratName] ?? {};
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
			stratLabels: config.stratLabels,
			stratDefaults: config.stratDefaults,
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
			stratLabels: config.stratLabels,
			stratDefaults: config.stratDefaults,
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
	let isCheatsheetEnabled = $derived(innerWidth > 1024 && innerHeight > 768);

	let cheatsheetOpenState = $state(false);
</script>

<svelte:window bind:innerWidth bind:innerHeight />
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

	<Cheatsheet
		title={`${config.cheatsheetTitle} - ${optionsString}`}
		bind:cheatsheetOpenState
		timeline={config.timeline ?? []}
		{stratName}
		{stratState}
		{getStratMechs}
		{individualStrat}
		{spotlight}
		{alignment}
		rows="4"
		columns="4"
		{innerHeight}
		{innerWidth}
		tabTags={config.tabTags}
		role={normalizedRole}
	/>

	<div class="container grow px-4 mx-auto mb-6">
		<div class="container">
			<div class="mb-6">
				<div class="preset-typo-display-1 mt-2 lg:mt-0 lg:-mb-2">{config.title}</div>
				<div class="text-xl lg:text-3xl text-surface-400">{config.subtitle}</div>
			</div>

			<FightStratControls
				{stratName}
				{stratOptions}
				onSelectStrat={selectStrat}
				toggles={(config.toggles ?? []).map((toggle) => ({
					key: toggle.key,
					label: toggle.label,
					value: stratState?.[toggle.key] ?? toggle.defaultValue ?? null,
					options: toggle.options
				}))}
				onToggleChange={setStratState}
				role={normalizedRole}
				{setRole}
				{party}
				{setParty}
			/>

			{#if stratName && normalizedRole && party}
				{#if typeof individualStrat === 'string'}
					{strat}
				{:else if typeof individualStrat === 'undefined'}
					<div></div>
				{:else if !strat}
					<div></div>
				{:else}
					{@const selectedStrat = strat}
					{@const hasAlignmentTransforms =
						selectedStrat?.strats?.some((phase) =>
							phase.mechs?.some((mech) =>
								mech.strats?.some((playerStrat) => playerStrat.alignmentTransforms)
							)
						) ?? false}
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
						<div
							class="card flex flex-row border-[1px] border-surface-200-800 flex-auto lg:w-0 lg:max-w-full"
						>
							<pre
								class="flex-auto pre overflow-x-auto text-nowrap whitespace-nowrap">{pfDescription}</pre>
							<button
								onclick={() => copyPFDescription(pfDescription)}
								class="button btn btn-lg preset-tonal-secondary border border-secondary-500"
								><Copy />Copy PF description</button
							>
						</div>
					</div>
					<div class="card border-[1px] border-surface-200-800 p-4">
						<div class="flex flex-col lg:flex-row gap-2">
							<div class="w-full lg:w-auto content-center">
								<div class="capitalize font-semibold text-2xl mb-0">{optionsString}</div>
								{#if typeof selectedStrat?.stratUrl === 'string'}
									<a
										class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline gap-1"
										target="_blank"
										rel="noopener noreferrer"
										href={selectedStrat.stratUrl}
										>{selectedStrat.description}
										<ExternalLink />
									</a>
								{:else if typeof selectedStrat?.stratUrl === 'object'}
									{selectedStrat.description}
									{#each Object.entries(selectedStrat.stratUrl) as [linkName, linkUrl]}
										&nbsp;
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
							<div class="text-xl">{selectedStrat?.notes}</div>
							{#if hasAlignmentTransforms}
								<div class="content-center">
									<Segment
										name="alignment"
										value={alignment}
										onValueChange={(e) => (alignment = e.value as Alignment)}
									>
										<Segment.Item value="original">Original</Segment.Item>
										<Segment.Item value="truenorth">True North</Segment.Item>
										<Segment.Item value="addrelative">Wall Relative</Segment.Item>
									</Segment>
								</div>
							{/if}
						</div>

						<StratView
							strat={selectedStrat}
							timeline={config.timeline ?? []}
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
