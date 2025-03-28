<script lang="ts">
	import type { Alignment, PlayerMechStrat, PhaseStrats, Role, MechanicStrat, Strat } from './+page';
	import { Accordion, Segment, Switch, Tooltip } from '@skeletonlabs/skeleton-svelte';
	import CircleAlert from '@lucide/svelte/icons/circle-alert';
	import TriangleAlert from '@lucide/svelte/icons/triangle-alert';

	interface Props {
		data: {
			strats: Strat[];
		};
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();
	let stratName: string | undefined = $state();
	let stratState = $state({
		ef1: null,
		bloom3: null,
		ef2: null,
		bloom4: null,
		bloom6: null,
	});

	let role: Role | undefined = $state();
	let party: number | undefined = $state();
	let strat = $derived(getStrat(stratName));
	let individualStrat = $derived(getIndividualStrat(stratName, role, party));
	let spotlight: boolean = $state(true);
	let alignment: Alignment = $state('original');
    let tooltipOpen = $state(false);
	let optionsString = $derived(getOptionsString(stratName, role, party));

	function onSelectStrat(e) {
		stratName = e.value;
		stratState = getStratMechs(e.value);
	}

	function getStrat(stratName?: string): Strat | string | undefined {
		if (!stratName || !role || !party) return `Couldn't find ${stratName} strat`;
		return data.strats.find(strat => strat.stratName === stratName);
	}

	function getIndividualStrat(stratName?: string, role?: Role, party?: number) {
		if (!stratName || !role || !party) return '';
		const stratPackage = getStrat(stratName);
		if (typeof stratPackage === 'string') return `Couldn't find ${stratName} strat for ${role} ${party}`;;
		const individualPackages = stratPackage?.strats?.map(
			phaseStrat => {
				return {
					...phaseStrat,
					description: phaseStrat.tag ? phaseStrat.description[stratState[phaseStrat.tag]] : phaseStrat.description,
					mechs: phaseStrat.mechs?.map(
						phaseStratMech => {
							return {
								...phaseStratMech,
								strats: phaseStratMech.strats.filter(strat => (strat.role === role && strat.party === party)).map(
									iStrat => {
										return {
											...iStrat,
											description: phaseStrat.tag ? iStrat.description[stratState[phaseStrat.tag]] : iStrat.description,
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
		console.log(individualPackages);
		return individualPackages;
	}

	function getStratMechs(stratName: string){
		const stratMechs: Record<string, any> = {
			'raidplan': {
				ef1: "supports",
				bloom3: "relative",
				ef2: "ns",
				bloom4: "relative",
				bloom6: "lb3",
			},
			'hector': {
				ef1: "dps",
				bloom3: "relative",
				ef2: "we",
				bloom4: "tn",
				bloom6: "we",
			},
			'happy': {
				ef1: "supports",
				bloom3: "color",
				ef2: "we",
				bloom4: "relative",
				bloom6: "ns",
			},
			'yukizuri': {
				ef1: "supports",
				bloom3: "color",
				ef2: "ns",
				bloom4: "relative",
				bloom6: "ns",
			},
		}
		return stratMechs[stratName];
	}

	function getMask(step: PlayerMechStrat): string {
		if (spotlight) {
			if (step.alignmentMasks && step.alignmentMasks[alignment]) {
				return step.alignmentMasks[alignment];
			}
			return step.mask || '';
		}
		return '';
	}
	
	function getOptionsString(stratName?: string, role?: Role, party?: number): string {
		if (!stratName || !role || !party) return '';
		const stratNames: Record<string, string> = {
			'raidplan': 'Raidplan',
			'hector': 'Hector',
			'happy': 'Happy',
			'yukizuri': 'Yukizuri'
		}
		let roleAbbrev = '';
		if (role === 'Tank') {
			roleAbbrev = party === 1 ? 'MT' : 'OT';
		} else {
			roleAbbrev = role.charAt(0).toUpperCase() + party.toString();
		}
		let stratDiffs = [];
		if (stratState.ef1 !== getStratMechs(stratName)['ef1']) {
			if (stratState.ef1 === 'dps') {
				stratDiffs.push(`DPS first`);
			}
			if (stratState.ef1 === 'supports') {
				stratDiffs.push(`Supports first`);
			}
		}
		if (stratState.bloom3 !== getStratMechs(stratName)['bloom3']) {
			stratDiffs.push(`${stratState.bloom3} B3`);
		}
		if (stratState.ef2 !== getStratMechs(stratName)['ef2']) {
			if (stratState.ef2 === 'braindead') {
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
		return `${stratNames[stratName]} ${stratDiffs.join(' | ')} - ${roleAbbrev}`;
	}
</script>

<div class="container grow px-4 mx-auto mb-6">
	<div class="container">
        <div class="mb-6">
            <div class="preset-typo-display-1 mt-2 lg:mt-0 lg:-mb-5">Recollection (Extreme)</div>
            <div class="text-xl lg:text-3xl text-surface-400">EX4 Patch 7.2</div>
        </div>
        
		<div class="flex flex-wrap min-w-full justify-between mb-8 card preset-filled-surface-50-950 border-[1px] border-surface-200-800 p-4">
			<div class="space-y-5 v-full dark">
				<div class="card preset-outlined-warning-500 gap-4 p-4">
                    <p>This guide is still under construction, thank you for your patience while we continue to work on it.</p>
                </div>
				<div>
					<div class="text-xl mb-2">Which strat are you using?</div>
					<Segment classes="flex-wrap" name="stratName" value={stratName} onValueChange={onSelectStrat}>
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
										{#snippet trigger()}<div class="text-warning-500"><TriangleAlert /></div>{/snippet}
										{#snippet content()}This mechanic differs from what's in the selected guide.{/snippet}
									</Tooltip>
								{/if}
							</div>
							<Segment classes="flex-wrap" name="ef1" value={stratState.ef1} onValueChange={(e) => (stratState.ef1 = e.value)}>
								<Segment.Item value="supports">Supports first</Segment.Item>
								<Segment.Item value="dps">DPS first</Segment.Item>
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
										{#snippet trigger()}<div class="text-warning-500"><TriangleAlert /></div>{/snippet}
										{#snippet content()}This mechanic differs from what's in the selected guide.{/snippet}
									</Tooltip>
								{/if}
							</div>
							<Segment classes="flex-wrap" name="bloom3" value={stratState.bloom3} onValueChange={(e) => (stratState.bloom3 = e.value)}>
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
										{#snippet trigger()}<div class="text-warning-500"><TriangleAlert /></div>{/snippet}
										{#snippet content()}This mechanic differs from what's in the selected guide.{/snippet}
									</Tooltip>
								{/if}
							</div>
							<Segment classes="flex-wrap" name="ef2" value={stratState.ef2} onValueChange={(e) => (stratState.ef2 = e.value)}>
								<Segment.Item value="braindead">Braindead (Clocks)</Segment.Item>
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
										{#snippet trigger()}<div class="text-warning-500"><TriangleAlert /></div>{/snippet}
										{#snippet content()}This mechanic differs from what's in the selected guide.{/snippet}
									</Tooltip>
								{/if}
							</div>
							<Segment classes="flex-wrap" name="bloom4" value={stratState.bloom4} onValueChange={(e) => (stratState.bloom4 = e.value)}>
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
										{#snippet trigger()}<div class="text-warning-500"><TriangleAlert /></div>{/snippet}
										{#snippet content()}This mechanic differs from what's in the selected guide.{/snippet}
									</Tooltip>
								{/if}
							</div>
							<Segment classes="flex-wrap" name="bloom6" value={stratState.bloom6} onValueChange={(e) => (stratState.bloom6 = e.value)}>
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
					<div class="content-center">
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

				{#each individualStrat as phase}
				<div class="mb-12">
					<div class="flex flex-row">
						<div class="capitalize font-semibold text-xl mb-0">{phase.phaseName}</div>
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
					
					{#if phase?.description}<div class="text-lg">{phase.description}</div>{/if}
					<div class="grid xl:grid-cols-2 grid-cols-2 gap-2">
						{#each phase.mechs as mech}
							{#key [spotlight, alignment]}
							<div class="space-y-4" class:col-span-2={mech.alignmentImages && mech.alignmentImages[alignment]}>
								<div class="capitalize font-semibold text-xl mb-0">{mech.mechanic}</div> 
								{#if mech?.description}<div class="whitespace-pre-wrap text-lg mb-0">{mech.description}</div>{/if}
								{#if mech?.notes}
									<div class="card preset-outlined-primary-500 p-2 flex flex-row space-x-2 my-2">
										<CircleAlert size={32} />
										<div class="whitespace-pre-wrap text-lg mb-0">{mech.notes}</div>
									</div>
								{/if}
								<div class="whitespace-pre-wrap text-lg mb-0">{mech.strats[0].description}</div>
								<img src={(mech.alignmentImages && mech.alignmentImages[alignment]) ? mech.alignmentImages[alignment] : mech.imageUrl} style:mask-image={getMask(mech)} style:transform={mech.alignmentTransforms ? mech.alignmentTransforms[alignment] : mech.transform} />
							</div>
							{/key}
						{/each}
					</div>
				</div>
				{/each}
				
				</div>
			{/if}
		{/if}
	</div>
</div>
