<!-- @ts-nocheck -->
<script lang="ts">
	// @ts-nocheck
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import type {
		Alignment,
		PlayerMechStrat,
		PhaseStrats,
		Role,
		MechanicStrat,
		Strat
	} from '../+page';
	import { Accordion, Segment, Switch, Tooltip } from '$lib/components/ui';
	import CircleAlert from '@lucide/svelte/icons/circle-alert';
	import TriangleAlert from '@lucide/svelte/icons/triangle-alert';
	import { getContext } from 'svelte';
	import type { ToastLike } from '$lib/utils';
	import { untrack } from 'svelte';
	import Cheatsheet from '../../../components/Cheatsheet.svelte';
	import { ExternalLink, Fullscreen, Info, Link } from '@lucide/svelte';
	import StratView from '../../../components/StratView.svelte';

	interface Props {
		data: {
			strats: Strat[];
		};
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();
	let stratName: string | undefined = $state();
	let stratState: Record<string, string | null> = $state({
		ef1: null,
		bloom3: null,
		ef2: null,
		bloom4: null,
		bloom6: null
	});

	let role: Role | undefined = $state();
	let party: number | undefined = $state();
	let strat = $derived(getStrat(stratName));
	let individualStrat = $derived(getIndividualStrat(stratName, role, party));
	let spotlight: boolean = $state(true);
	let alignment: Alignment = $state('original');
	let optionsString = $derived(getOptionsString(stratName, role, party));
	export const toast: ToastLike = getContext('toast');

	$effect(() => {
		if (browser) {
			const storedRole = localStorage.getItem('ex4-role');
			const storedParty = localStorage.getItem('ex4-party');
			if (storedRole) {
				role = JSON.parse(storedRole);
			}
			if (storedParty) {
				party = JSON.parse(storedParty);
			}
		}
	});

	$effect(() => {
		if (browser) {
			if (role) {
				localStorage.setItem('ex4-role', JSON.stringify(role));
			}
			if (party) {
				localStorage.setItem('ex4-party', JSON.stringify(party));
			}
		}
	});

	$effect(() => {
		let stratCode = '';
		untrack(() => (stratCode = getStratCode(stratName, stratState)));
		const urlHash = page.url.hash.substring(1);
		if (urlHash !== stratCode) {
			untrack(() => setStratsFromUrlHash(urlHash));
		}
	});

	function setStratsFromUrlHash(hash: string) {
		const stratArray = hash.split(':');
		if (stratArray[0]) {
			stratName = stratArray[0];
		}
		stratState = {
			ef1: stratArray[1],
			bloom3: stratArray[2],
			ef2: stratArray[3],
			bloom4: stratArray[4],
			bloom6: stratArray[5]
		};
	}

	function setStratState(mech: string, value: string) {
		stratState[mech] = value;
		const stratCode = getStratCode(stratName, stratState);
		history.replaceState(undefined, '', `#${stratCode}`);
	}

	function getStratCode(stratName: string | undefined, stratState: any) {
		if (!stratName) return '';
		return `${stratName}:${stratState.ef1}:${stratState.bloom3}:${stratState.ef2}:${stratState.bloom4}:${stratState.bloom6}`;
	}

	function onSelectStrat(e) {
		stratName = e.value;
		stratState = getStratMechs(e.value);
		const stratCode = getStratCode(stratName, stratState);
		history.replaceState(undefined, '', `#${stratCode}`);
	}

	function copyLinkToClipboard() {
		navigator.clipboard.writeText(window.location.href);
		toast.create({
			description: 'Copied link to clipboard!',
			type: 'success'
		});
	}

	function getStrat(stratName?: string): Strat | string | undefined {
		if (!stratName || !role || !party) return `Couldn't find ${stratName} strat`;
		return data.strats.find((strat) => strat.stratName === stratName);
	}

	function getStratItem(item: string | Record<string, string>, tag?: string) {
		if (!item) return item;
		if (tag && stratState[tag] && typeof item !== 'string') {
			return item[stratState[tag]];
		} else {
			return item;
		}
	}

	function getIndividualStrat(stratName?: string, role?: Role, party?: number) {
		if (!stratName || !role || !party) return '';
		const stratPackage = getStrat(stratName);
		if (typeof stratPackage === 'string')
			return `Couldn't find ${stratName} strat for ${role} ${party}`;
		const individualPackages = stratPackage?.strats?.map((phaseStrat) => {
			return {
				...phaseStrat,
				description: getStratItem(phaseStrat.description, phaseStrat.tag),
				imageUrl: getStratItem(phaseStrat.imageUrl, phaseStrat.tag),
				mask: getStratItem(phaseStrat.mask, phaseStrat.tag),
				mechs: phaseStrat.mechs?.map((phaseStratMech) => {
					return {
						...phaseStratMech,
						strats: phaseStratMech.strats
							.filter((strat) => strat.role === role && strat.party === party)
							.map((iStrat) => {
								return {
									...iStrat,
									description: getStratItem(iStrat.description, phaseStrat.tag),
									imageUrl: getStratItem(iStrat.imageUrl, phaseStrat.tag),
									mask: getStratItem(iStrat.mask, phaseStrat.tag)
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
		const stratMechs: Record<string, any> = {
			raidplan: {
				ef1: 'supports',
				bloom3: 'relative',
				ef2: 'ns',
				bloom4: 'relative',
				bloom6: 'lb3'
			},
			hector: {
				ef1: 'dpsin',
				bloom3: 'relative',
				ef2: 'we',
				bloom4: 'tn',
				bloom6: 'we'
			},
			happy: {
				ef1: 'supports',
				bloom3: 'color',
				ef2: 'we',
				bloom4: 'relative',
				bloom6: 'ns'
			},
			yukizuri: {
				ef1: 'supports',
				bloom3: 'color',
				ef2: 'ns',
				bloom4: 'relative',
				bloom6: 'ns'
			}
		};
		return stratMechs[stratName];
	}

	function getMask(mask: string): string {
		if (spotlight) {
			return mask;
		}
		return '';
	}

	function getOptionsString(stratName?: string, role?: Role, party?: number): string {
		if (!stratName || !role || !party) return '';
		const stratNames: Record<string, string> = {
			raidplan: 'Raidplan',
			hector: 'Hector',
			happy: 'Happy',
			yukizuri: 'Yukizuri'
		};
		let roleAbbrev = '';
		if (role === 'Tank') {
			roleAbbrev = party === 1 ? 'MT' : 'OT';
		} else {
			roleAbbrev = role.charAt(0).toUpperCase() + party.toString();
		}
		let stratDiffs = [stratNames[stratName]];
		if (stratState.ef1 !== getStratMechs(stratName)['ef1']) {
			if (stratState.ef1 === 'dps') {
				stratDiffs.push(`DPS first`);
			}
			if (stratState.ef1 === 'supports') {
				stratDiffs.push(`Supports first`);
			}
			if (stratState.ef1 === 'dpsin') {
				stratDiffs.push(`DPS in first`);
			}
		}
		if (stratState.bloom3 !== getStratMechs(stratName)['bloom3']) {
			stratDiffs.push(`${stratState.bloom3} B3`);
		}
		if (stratState.ef2 !== getStratMechs(stratName)['ef2']) {
			if (stratState.ef2 === 'bd') {
				stratDiffs.push(`Braindead EF2`);
			}
			if (stratState.ef2 === 'ns') {
				stratDiffs.push(`N/S EF2`);
			}
			if (stratState.ef2 === 'we') {
				stratDiffs.push(`W/E EF2`);
			}
		}
		if (stratState.bloom4 !== getStratMechs(stratName)['bloom4']) {
			if (stratState.bloom4 === 'relative') {
				stratDiffs.push('Relative B4');
			}
			if (stratState.bloom4 === 'tn') {
				stratDiffs.push('TN B4');
			}
		}
		if (stratState.bloom6 !== getStratMechs(stratName)['bloom6']) {
			if (stratState.bloom6 === 'lb3') {
				stratDiffs.push('LB3 B6');
			}
			if (stratState.bloom6 === 'ns') {
				stratDiffs.push('N/S B6');
			}
			if (stratState.bloom6 === 'we') {
				stratDiffs.push('W/E B6');
			}
		}
		return `${stratDiffs.join(' | ')} - ${roleAbbrev}`;
	}

	let innerWidth = $state(0);
	let innerHeight = $state(0);
	let isCheatsheetEnabled = $derived(innerWidth > 1024 && innerHeight > 768);

	let cheatsheetOpenState = $state(false);
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<Cheatsheet
	title={`EX4 Cheatsheet - ${optionsString}`}
	bind:cheatsheetOpenState
	timeline={[]}
	{stratName}
	{stratState}
	{getStratMechs}
	{individualStrat}
	{spotlight}
	{alignment}
	rows="3"
	columns="4"
	{innerHeight}
	{innerWidth}
/>

<div class="container grow px-4 mx-auto mb-6">
	<div class="container">
		<div class="mb-6">
			<div class="preset-typo-display-1 mt-2 lg:mt-0 lg:-mb-2">Recollection (Extreme)</div>
			<div class="text-xl lg:text-3xl text-surface-400">EX4 Patch 7.2</div>
		</div>

		<div
			class="flex flex-wrap min-w-full justify-between mb-8 card border-[1px] border-surface-200-800 p-4"
		>
			<div class="space-y-5 v-full dark">
				<div class="card preset-outlined-warning-500 gap-4 p-4">
					<p>
						This site is still under construction, thank you for your patience while we continue to
						work on it.
					</p>
					<p>Some strats may be missing images or highlights.</p>
					<p>
						This is intended to be a quick reference, please refer to the original guides for full
						explanations of mechanics.
					</p>
				</div>
				<div>
					<div class="text-xl mb-2">Which strat are you using?</div>
					<Segment
						classes="flex-wrap"
						name="stratName"
						value={stratName}
						onValueChange={onSelectStrat}
					>
						<Segment.Item value="raidplan">Raidplan (-Wj9 & k9Vc)</Segment.Item>
						<Segment.Item value="hector">Hector</Segment.Item>
						<Segment.Item value="happy">Mrhappy</Segment.Item>
						<Segment.Item value="yukizuri">Yukizuri</Segment.Item>
					</Segment>
					{#if stratName}
						<div class="text-lg my-2">Mechanics</div>
						<div class="flex flex-row space-x-4 space-y-2 flex-wrap">
							<div class="flex flex-col">
								<div class="flex flex-row">
									<div class="text-md mb-2">EF1/3</div>
									{#if stratName && stratState.ef1 !== getStratMechs(stratName)['ef1']}
										<Tooltip
											positioning={{ placement: 'top' }}
											triggerBase="underline"
											contentBase="card bg-surface-800 p-4"
											classes="ml-2"
											openDelay={200}
											arrow
											arrowBackground="!bg-surface-800"
										>
											{#snippet trigger()}<div class="text-warning-500">
													<TriangleAlert />
												</div>{/snippet}
											{#snippet content()}This mechanic differs from what's in the selected guide.{/snippet}
										</Tooltip>
									{/if}
								</div>
								<Segment
									classes="flex-wrap"
									name="ef1"
									value={stratState.ef1}
									onValueChange={(e) => setStratState('ef1', e.value)}
								>
									<Segment.Item value="supports">Supports bait first</Segment.Item>
									<Segment.Item value="dps">DPS bait first</Segment.Item>
									<Segment.Item value="dpsin">DPS in first</Segment.Item>
								</Segment>
							</div>
							<div class="flex flex-col">
								<div class="flex flex-row">
									<div class="text-md mb-2">Bloom 3</div>
									{#if stratName && stratState.bloom3 !== getStratMechs(stratName)['bloom3']}
										<Tooltip
											positioning={{ placement: 'top' }}
											triggerBase="underline"
											contentBase="card bg-surface-800 p-4"
											classes="ml-2"
											openDelay={200}
											arrow
											arrowBackground="!bg-surface-800"
										>
											{#snippet trigger()}<div class="text-warning-500">
													<TriangleAlert />
												</div>{/snippet}
											{#snippet content()}This mechanic differs from what's in the selected guide.{/snippet}
										</Tooltip>
									{/if}
								</div>
								<Segment
									classes="flex-wrap"
									name="bloom3"
									value={stratState.bloom3}
									onValueChange={(e) => setStratState('bloom3', e.value)}
								>
									<Segment.Item value="relative">Relative</Segment.Item>
									<Segment.Item value="color">Colors (TN)</Segment.Item>
								</Segment>
							</div>
							<div class="flex flex-col">
								<div class="flex flex-row">
									<div class="text-md mb-2">EF2</div>
									{#if stratName && stratState.ef2 !== getStratMechs(stratName)['ef2']}
										<Tooltip
											positioning={{ placement: 'top' }}
											triggerBase="underline"
											contentBase="card bg-surface-800 p-4"
											classes="ml-2"
											openDelay={200}
											arrow
											arrowBackground="!bg-surface-800"
										>
											{#snippet trigger()}<div class="text-warning-500">
													<TriangleAlert />
												</div>{/snippet}
											{#snippet content()}This mechanic differs from what's in the selected guide.{/snippet}
										</Tooltip>
									{/if}
								</div>
								<Segment
									classes="flex-wrap"
									name="ef2"
									value={stratState.ef2}
									onValueChange={(e) => setStratState('ef2', e.value)}
								>
									<Segment.Item value="bd">Braindead (Clocks)</Segment.Item>
									<Segment.Item value="ns">N/S</Segment.Item>
									<Segment.Item value="we">W/E</Segment.Item>
								</Segment>
							</div>
							<div class="flex flex-col">
								<div class="flex flex-row">
									<div class="text-md mb-2">Bloom 4</div>
									{#if stratName && stratState.bloom4 !== getStratMechs(stratName)['bloom4']}
										<Tooltip
											positioning={{ placement: 'top' }}
											triggerBase="underline"
											contentBase="card bg-surface-800 p-4"
											classes="ml-2"
											openDelay={200}
											arrow
											arrowBackground="!bg-surface-800"
										>
											{#snippet trigger()}<div class="text-warning-500">
													<TriangleAlert />
												</div>{/snippet}
											{#snippet content()}This mechanic differs from what's in the selected guide.{/snippet}
										</Tooltip>
									{/if}
								</div>
								<Segment
									classes="flex-wrap"
									name="bloom4"
									value={stratState.bloom4}
									onValueChange={(e) => setStratState('bloom4', e.value)}
								>
									<Segment.Item value="relative">Relative</Segment.Item>
									<Segment.Item value="tn">TN</Segment.Item>
								</Segment>
							</div>
							<div class="flex flex-col">
								<div class="flex flex-row">
									<div class="text-md mb-2">Bloom 6</div>
									{#if stratName && stratState.bloom6 !== getStratMechs(stratName)['bloom6']}
										<Tooltip
											positioning={{ placement: 'top' }}
											triggerBase="underline"
											contentBase="card bg-surface-800 p-4"
											classes="ml-2"
											openDelay={200}
											arrow
											arrowBackground="!bg-surface-800"
										>
											{#snippet trigger()}<div class="text-warning-500">
													<TriangleAlert />
												</div>{/snippet}
											{#snippet content()}This mechanic differs from what's in the selected guide.{/snippet}
										</Tooltip>
									{/if}
								</div>
								<Segment
									classes="flex-wrap"
									name="bloom6"
									value={stratState.bloom6}
									onValueChange={(e) => setStratState('bloom6', e.value)}
								>
									<Segment.Item value="lb3">LB3</Segment.Item>
									<Segment.Item value="ns">LP N/S</Segment.Item>
									<Segment.Item value="we">LP W/E</Segment.Item>
								</Segment>
							</div>
						</div>
					{/if}
				</div>
				<div>
					<div class="text-xl mb-2">Which role are you?</div>
					<Segment
						name="role"
						classes="flex-wrap"
						value={role}
						onValueChange={(e) => (role = e.value)}
					>
						<Segment.Item value="Tank">Tank</Segment.Item>
						<Segment.Item value="Healer">Healer</Segment.Item>
						<Segment.Item value="Melee">Melee</Segment.Item>
						<Segment.Item value="Ranged">Ranged</Segment.Item>
					</Segment>
				</div>
				<div>
					<div class="text-xl mb-2">Which light party are you in?</div>
					<Segment
						name="role"
						value={party?.toString()}
						onValueChange={(e) => (party = parseInt(e.value))}
					>
						<Segment.Item value="1">1</Segment.Item>
						<Segment.Item value="2">2</Segment.Item>
					</Segment>
				</div>
			</div>
		</div>
		{#if stratName && role && party}
			{#if typeof individualStrat === 'string'}
				{strat}
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
						<div class="text-xl">{individualStrat.notes}</div>
						{#if strat.strats.some((strat) => strat.alignmentTransforms)}
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
					/>
				</div>
			{/if}
		{/if}
	</div>
</div>
