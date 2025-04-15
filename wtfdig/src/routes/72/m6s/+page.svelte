<script lang="ts">
	import { page } from '$app/state';
	import type { Alignment, PlayerMechStrat, PhaseStrats, Role, MechanicStrat, Strat, TimelineItem } from './+page';
	import { Accordion, Segment, Switch, Tooltip } from '@skeletonlabs/skeleton-svelte';
	import CircleAlert from '@lucide/svelte/icons/circle-alert';
	import TriangleAlert from '@lucide/svelte/icons/triangle-alert';
	import { Clock, Info, Shield, Siren, Wrench, X} from '@lucide/svelte/icons';
	import { getContext } from 'svelte';
  	import { type ToastContext, Modal } from '@skeletonlabs/skeleton-svelte';
	import { untrack } from 'svelte';

	interface Props {
		data: {
			strats: Strat[];
			timeline: TimelineItem[];
		};
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();
	let stratName: string | undefined = $state();
	let stratState: Record<string, string | null> = $state({
		adds: null,
	});

	let role: Role | undefined = $state();
	let party: number | undefined = $state();
	let strat = $derived(getStrat(stratName));
	let individualStrat = $derived(getIndividualStrat(stratName, role, party));
	let spotlight: boolean = $state(true);
	let alignment: Alignment = $state('original');
	let optionsString = $derived(getOptionsString(stratName, role, party));
	export const toast: ToastContext = getContext('toast');

	$effect(() => {
		let stratCode = '';
		untrack(() => stratCode = getStratCode(stratName, stratState))
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
			adds: stratArray[1],
		}
	}

	function setStratState(mech: string, value: string) {
		stratState[mech] = value;
		const stratCode = getStratCode(stratName, stratState);
		history.replaceState(undefined, '', `#${stratCode}`);
	}

	function getStratCode(stratName: string | undefined, stratState: any) {
		if (!stratName) return '';
		return `${stratName}:${stratState.adds}`;
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
			type: 'success',
		});
	}

	
	function getStrat(stratName?: string): Strat | string | undefined {
		if (!stratName || !role || !party) return `Couldn't find ${stratName} strat`;
		return data.strats.find(strat => strat.stratName === stratName);
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
		if (typeof stratPackage === 'string') return `Couldn't find ${stratName} strat for ${role} ${party}`;;
		const individualPackages = stratPackage?.strats?.map(
			phaseStrat => {
				return {
					...phaseStrat,
					description: getStratItem(phaseStrat.description, phaseStrat.tag),
					imageUrl: getStratItem(phaseStrat.imageUrl, phaseStrat.tag),
					mask: getStratItem(phaseStrat.mask, phaseStrat.tag),
					mechs: phaseStrat.mechs?.map(
						phaseStratMech => {
							return {
								...phaseStratMech,
								imageUrl: getStratItem(phaseStratMech.imageUrl, phaseStrat.tag),
								strats: phaseStratMech.strats && phaseStratMech.strats.filter(strat => (strat.role === role && strat.party === party)).map(
									iStrat => {
										return {
											...iStrat,
											description: getStratItem(iStrat.description, phaseStrat.tag),
											imageUrl: getStratItem(iStrat.imageUrl, phaseStrat.tag),
											mask: getStratItem(iStrat.mask, phaseStrat.tag)
										}
									}
								),
							}
						}
					)
				}
				
			}
		)
		if (!individualPackages) return `Couldn't find ${stratName} strat for ${role} ${party}`;
		return individualPackages;
	}


	function getStratMechs(stratName: string){
		const stratMechs: Record<string, any> = {
			'latte': {
				adds: 'latte',
			},
			'toxic': {
				adds: 'toxic',
			},
			'yukizuri': {
				adds: 'yukizuri',
			},
		}
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
			'latte': 'Latte (0066fd3CVp1_G36R)',
			'toxic': 'Hector/Toxic Friends (Pgj53K49w8LAZpI6)',
			'yukizuri': 'Yukizuri'
		}
		const jpRoleAbbrev: Record<string, string> = {
			'MT': 'MT',
			'OT': 'ST',
			'H1': 'H1',
			'H2': 'H2',
			'M1': 'D1',
			'M2': 'D2',
			'R1': 'D3',
			'R2': 'D4',
		}
		let roleAbbrev = '';
		if (role === 'Tank') {
			roleAbbrev = party === 1 ? 'MT' : 'OT';
		} else {
			roleAbbrev = role.charAt(0).toUpperCase() + party.toString();
		}
		let stratDiffs = [stratNames[stratName]];
		if (stratState.adds !== getStratMechs(stratName)['adds']) {
			if (stratState.adds === 'latte') {
				stratDiffs.push(`Latte adds`);
			}
			if (stratState.adds === 'toxic') {
				stratDiffs.push(`Hector/Toxic adds`);
			}
			if (stratState.adds === 'yukizuri') {
				stratDiffs.push(`Yukizuri adds`);
			}
			if (stratState.adds === 'cleave') {
				stratDiffs.push(`Cleavemaxxing adds`);
			}
		}
		if (stratName === 'game8' && roleAbbrev !== jpRoleAbbrev[roleAbbrev]) {
			return `${stratNames[stratName]} - ${roleAbbrev}/${jpRoleAbbrev[roleAbbrev]}`;
		}

		return `${stratDiffs.join(' | ')} - ${roleAbbrev}`;
	}

	function msToTime(timeInMs: number): string {
		const seconds = (Math.floor(timeInMs / 1000) % 60).toString().padStart(2, '0');
		const minutes = (Math.floor(timeInMs / 60000)).toString();

		return `${minutes}:${seconds}`;
	}

	function getFightPercentClass(timeInMs: number): string {
		const enrageTime = data.timeline.find((item) => {return item.mechType === 'Enrage'})?.startTimeMs;
		if (!enrageTime) return '0';
		return `${(Math.floor(timeInMs * 980 / enrageTime)/10).toString()}%`;
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

	let innerWidth = $state(0);
	let innerHeight = $state(0);
	let isCheatsheetEnabled = $derived(innerWidth > 1600 && innerWidth > 900);

	let cheatsheetOpenState = $state(false);
	let timelineFilters = $state({
		"mechs": true,
		"raidwides": true,
		"tankbusters": true
	})

	function closeCheatsheet() {
		cheatsheetOpenState = false;
	}
</script>

<svelte:window bind:innerWidth={innerWidth} bind:innerHeight={innerHeight} />

<Modal
  open={cheatsheetOpenState}
  onOpenChange={(e) => (cheatsheetOpenState = e.open)}
  contentBase="card bg-surface-100-900 p-4 space-y-4 shadow-xl flex flex-col h-full w-full"
  backdropClasses="backdrop-blur-sm"
>
  {#snippet content()}
    <header class="flex justify-between">
      <div class="text-lg 3xl:text-2xl">AAC Cruiserweight M2 (M6S) Cheatsheet - {optionsString}</div>
	  <X onclick={closeCheatsheet} />
    </header>
    <div class="grid grid-rows-3 grid-cols-7 gap-2 h-full">
      <div class="card border row-span-full border-surface-800 p-2 flex flex-col">
		<div class="flex mb-2 gap-1">
			<button class={`chip px-2 ${timelineFilters.mechs ? 'preset-outlined-warning-500 bg-warning-800' : 'preset-outlined-warning-500'}`} onclick={() => timelineFilters.mechs = !timelineFilters.mechs}><Wrench size={16} strokeWidth={2} />Mech</button>
			<button class={`chip px-2 ${timelineFilters.raidwides ? 'preset-outlined-secondary-500 bg-secondary-500' : 'preset-outlined-secondary-500'}`} onclick={() => timelineFilters.raidwides = !timelineFilters.raidwides}><Siren size={16} strokeWidth={2} />Raidwide</button>
			<button class={`chip px-2 ${timelineFilters.tankbusters ? 'preset-outlined-primary-500 bg-primary-500' : 'preset-outlined-primary-500'}`} onclick={() => timelineFilters.tankbusters = !timelineFilters.tankbusters}><Shield size={16} strokeWidth={2} />TB</button>
		</div>
		<div class="grow relative">
			{#each data.timeline as item}
				{#if showMechType(item.mechType)}
					<div style:top={getFightPercentClass(item.startTimeMs)} class="absolute flex text-xs w-full items-center" >
						<div class="w-1/8">
							{#if item.mechType === 'Raidwide'}
								<div class="grid bg-secondary-500 rounded-sm h-[16px] w-[16px] p-auto place-content-center">
									<Siren size={14} strokeWidth={2} />
								</div>
							{/if}
							{#if item.mechType === 'Mechanic'}
								<div class="grid bg-warning-800 rounded-sm h-[16px] w-[16px] p-auto place-content-center">
									<Wrench size={14} strokeWidth={2} />
								</div>
							{/if}
							{#if item.mechType === 'Tankbuster'}
								<div class="grid bg-primary-500 rounded-sm h-[16px] w-[16px] p-auto place-content-center">
									<Shield size={14} strokeWidth={2} />
								</div>
							{/if}
							{#if item.mechType === 'StoredMechanic'}
								<div class="grid bg-warning-800 rounded-sm h-[16px] w-[16px] p-auto place-content-center">
									<Clock size={14} strokeWidth={2} />
								</div>
							{/if}
						</div>
						<div class="w-1/4">
							{msToTime(item.startTimeMs)}
						</div>
						<div class="w-5/8">
							{item.mechName}
						</div>
					</div>
				{/if}
			{/each}
		</div>
	  </div>
		{#each individualStrat as phase}
			<div class="card border border-surface-800 p-2 h-0 min-h-full flex flex-col" style:grid-column={`span ${phase.mechs ? phase.mechs.length : 0}`}>
				<div class="flex flex-row">
					<div class="capitalize font-bold text-sm 3xl:text-lg mb-0">{phase.phaseName}</div>
					{#if phase?.tag && (stratState[phase.tag] !== getStratMechs(stratName)[phase.tag])}
						<Tooltip
							positioning={{ placement: 'top' }}
							triggerBase="underline"
							contentBase="card bg-surface-800 p-4"
							classes="ml-2"
							openDelay={200}
							arrow
							arrowBackground="!bg-surface-800"

						>
							{#snippet trigger()}<div class="text-warning-500"><TriangleAlert size={32}/></div>{/snippet}
							{#snippet content()}This mechanic differs from what's in the selected guide.{/snippet}
						</Tooltip>
					{/if}
				</div>
				{#if phase?.description}<div class="text-xs 3xl:text-base whitespace-pre-wrap">{phase.description}</div>{/if}
				{#if phase?.imageUrl}<img class="max-h-[400px] rounded-md mt-2" style:mask-image={spotlight && phase.mask} src={phase.imageUrl} />{/if}
				{#if phase?.mechs}
					<div class="grid grid-flow-col auto-cols-fr auto-rows-fr gap-2 mt-2 h-full" style:grid-column={`span ${phase.mechs.length}`}>
						{#each phase.mechs as mech}
							{#key [spotlight, alignment]}
							<div class="flex flex-col h-0 min-h-full overflow-hidden" class:col-span-2={mech.alignmentImages && mech.alignmentImages[alignment]}>
								<div class="capitalize font-semibold text-sm 3xl:text-base mb-0">{mech.mechanic}</div> 
								{#if mech?.description}<div class="whitespace-pre-wrap text-xs 3xl:text-base mb-0">{mech.description}</div>{/if}
								{#if mech?.imageUrl}<img class="object-contain rounded-md mt-4 min-h-0 h-full" src={mech.imageUrl} />{/if}
								<div class="whitespace-pre-wrap text-xs 3xl:text-base mb-0">{mech?.strats && mech.strats[0].description}</div>
								
								{#if mech?.strats && mech.strats[0]?.imageUrl}
									<img class="object-contain rounded-md mt-4 min-h-0 h-full" style:mask-image={spotlight && mech.strats[0]?.mask} src={mech.strats[0].imageUrl} />
								{/if}
							</div>
							{/key}
						{/each}
					</div>
				{/if}
			</div>
		{/each}
    </div>
  {/snippet}
</Modal>

<div class="container grow px-4 mx-auto mb-6">
	<div class="container">
        <div class="mb-6">
            <div class="preset-typo-display-1 mt-2 lg:mt-0 lg:-mb-5">AAC Cruiserweight M2 (Savage)</div>
            <div class="text-xl lg:text-3xl text-surface-400">M6S Patch 7.2</div>
        </div>
        
		<div class="flex flex-wrap min-w-full justify-between mb-8 card preset-filled-surface-50-950 border-[1px] border-surface-200-800 p-4">
			<div class="space-y-5 v-full dark">
				<div class="card preset-outlined-warning-500 gap-4 p-4">
                    <p>This guide is still under construction, thank you for your patience while we continue to work on it.</p>
					<p>Some strats may be missing images or highlights.</p>
                </div>
				<div>
					<div class="text-xl mb-2">Which strat are you using?</div>
					<Segment classes="flex-wrap" name="stratName" value={stratName} onValueChange={onSelectStrat}>
						<Segment.Item value="latte">Latte (0066⋯G36R)</Segment.Item>
						<Segment.Item value="toxic">Hector/Toxic (Pgj5⋯ZpI6)</Segment.Item>
						<Segment.Item value="yukizuri">Yukizuri</Segment.Item>
					</Segment>
				</div>
				{#if stratName}
				<div class="text-lg my-2">Mechanics</div>
				<div class="flex flex-row space-x-4 space-y-2 flex-wrap">
					<div class="flex flex-col">
						<div class="flex flex-row">
							<div class="text-md mb-2">Adds</div>
							{#if stratName && stratState.adds !== getStratMechs(stratName)['adds']}
								<Tooltip
									positioning={{ placement: 'top' }}
									triggerBase="underline"
									contentBase="card bg-surface-800 p-4"
									classes="ml-2"
									openDelay={200}
									arrow
									arrowBackground="!bg-surface-800"

								>
									{#snippet trigger()}<div class="text-warning-500"><TriangleAlert /></div>{/snippet}
									{#snippet content()}This mechanic differs from what's in the selected guide.{/snippet}
								</Tooltip>
							{/if}
						</div>
						<Segment classes="flex-wrap" name="adds" value={stratState.adds} onValueChange={(e) => (setStratState('adds', e.value))}>
							<Segment.Item value="latte">Latte</Segment.Item>
							<Segment.Item value="toxic">Hector/Toxic</Segment.Item>
							<Segment.Item value="yukizuri">Yukizuri</Segment.Item>
							<Segment.Item value="cleave">Cleavemaxxing</Segment.Item>
						</Segment>
					</div>
				</div>
				{/if}
				<div>
					<div class="text-xl mb-2">Which role are you?</div>
					<Segment name="role" value={role} onValueChange={(e) => (role = e.value)}>
						<Segment.Item value="Tank">Tank</Segment.Item>
						<Segment.Item value="Healer">Healer</Segment.Item>
						<Segment.Item value="Melee">Melee</Segment.Item>
						<Segment.Item value="Ranged">Ranged</Segment.Item>
					</Segment>
				</div>
				<div>
					<div class="text-xl mb-2">Which light party are you in?</div>
					<Segment name="role" value={party?.toString()} onValueChange={(e) => (party = parseInt(e.value))}>
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
			<div class="card preset-filled-surface-50-950 border-[1px] border-surface-200-800 p-4">
				<div class="flex flex-wrap items-center gap-2">
					<div class="content-center">
						<div class="capitalize font-semibold text-2xl mb-0">{optionsString}</div>
						{#if typeof strat?.stratUrl === 'string'}
							<a class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" href={strat.stratUrl}>{strat.description}
								<svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
								</svg>
							</a>
						{:else if typeof strat?.stratUrl === 'object'}
							{strat.description}
							{#each Object.entries(strat.stratUrl) as [linkName, linkUrl]}
								 
								<a class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" href={linkUrl}>{linkName}
									<svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
									</svg>
								</a>
							{/each}
						{/if}
					</div>
					<div class="grow"></div>
					<div class="grid gap-y-2 content-center max-w-[40%] lg:max-w-[20%]">
						{#if isCheatsheetEnabled}
							<button onclick={() => (cheatsheetOpenState = true)} class="button btn preset-tonal-secondary border border-secondary-500">Open cheatsheet</button>
						{:else}
							<button class="button btn preset-tonal-secondary border border-secondary-500 disabled">Open cheatsheet</button>
							<div class="flex flex-row items-center gap-2">
								<Info size={40} />
								<span>Cheatsheet mode needs a browser window size of at least 1600 x 900</span>
							</div>
							
						{/if}
						<button onclick={() => copyLinkToClipboard()} class="button btn preset-tonal-secondary border border-secondary-500">Copy link</button>
						<Switch name="spotlight-toggle" checked={spotlight} onCheckedChange={(e) => (spotlight = e.checked)}>Highlight my spots</Switch>
					</div>
				</div>
				<div class="flex flex-wrap items-center justify-between my-4">
					<div class="text-xl">{individualStrat.notes}</div>
					{#if strat.strats.some(strat => strat.alignmentTransforms)}
						<div class="content-center">
							<Segment name="alignment" value={alignment} onValueChange={(e) => alignment = e.value}>
								<Segment.Item value="original">Original</Segment.Item>
								<Segment.Item value="truenorth">True North</Segment.Item>
								<Segment.Item value="addrelative">Wall Relative</Segment.Item>
							</Segment>
						</div>
					{/if}
				</div>
				{#if strat?.notes}
					<div class="card preset-outlined-primary-500 p-2 flex flex-row space-x-2 my-2">
						<CircleAlert size={32} />
						<div class="whitespace-pre-wrap text-lg mb-0">{strat.notes}</div>
					</div>
				{/if}
				{#each individualStrat as phase}
				<div class="card border border-surface-800 mb-8 p-4">
					<div class="flex flex-row">
						<div class="capitalize font-bold text-2xl mb-0">{phase.phaseName}</div>
						{#if phase?.tag && (stratState[phase.tag] !== getStratMechs(stratName)[phase.tag])}
							<Tooltip
								positioning={{ placement: 'top' }}
								triggerBase="underline"
								contentBase="card bg-surface-800 p-4"
								classes="ml-2"
								openDelay={200}
								arrow
								arrowBackground="!bg-surface-800"

							>
								{#snippet trigger()}<div class="text-warning-500"><TriangleAlert size={32}/></div>{/snippet}
								{#snippet content()}This mechanic differs from what's in the selected guide.{/snippet}
							</Tooltip>
						{/if}
					</div>
					{#if phase?.description}<div class="text-lg whitespace-pre-wrap">{phase.description}</div>{/if}
					{#if phase?.imageUrl}<img class="max-h-[400px] rounded-md mt-4" style:mask-image={spotlight && phase.mask} src={phase.imageUrl} />{/if}
					{#if phase?.mechs}
						<div class="grid lg:grid-cols-2 grid-cols-1 gap-2 mt-4">
							{#each phase.mechs as mech}
								{#key [spotlight, alignment]}
								<div class="space-y-4" class:col-span-2={mech.alignmentImages && mech.alignmentImages[alignment]}>
									<div class="capitalize font-semibold text-xl mb-0">{mech.mechanic}</div> 
									{#if mech?.notes}
										<div class="card preset-outlined-primary-500 p-2 flex flex-row space-x-2 my-2">
											<CircleAlert size={32} />
											<div class="whitespace-pre-wrap text-lg mb-0">{mech.notes}</div>
										</div>
									{/if}
									{#if mech?.description}<div class="whitespace-pre-wrap text-lg mb-0">{mech.description}</div>{/if}
									{#if mech?.imageUrl}<img class="max-h-[400px] rounded-md mt-4" src={mech.imageUrl} />{/if}
									<div class="whitespace-pre-wrap text-lg mb-0">{mech?.strats && mech.strats[0].description}</div>
									{#if mech?.strats && mech.strats[0]?.imageUrl}<img class="max-h-[400px] rounded-md mt-4" style:mask-image={spotlight && mech.strats[0]?.mask} src={mech.strats[0].imageUrl} />{/if}
								</div>
								{/key}
							{/each}
						</div>
					{/if}
				</div>
				{/each}
				
				</div>
			{/if}
		{/if}
	</div>
</div>
