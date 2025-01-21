<script lang="ts">
	import type { Alliance, Role, PlayerStrats, Alignment, MechanicStrat } from './+page';
	import { Accordion, AccordionItem, RadioGroup, RadioItem, SlideToggle } from '@skeletonlabs/skeleton';

	export let data;
	let stratName: string;
	let alliance: Alliance;
	let role: Role;
	let party: number;
	let strat: PlayerStrats | string;
	let spotlight: boolean = true;
	let alignment: Alignment = 'original';

	$: strat = getStrat(stratName, alliance, role, party)
	$: stratPackage = data.strats.find(strat => strat.stratName === stratName);

	function getStrat(stratName: string, alliance: Alliance, role: Role, party: number) {
		if (!stratName || !alliance || !role || !party) return '';
		const stratPackage = data.strats.find(strat => strat.stratName === stratName);
		const allianceRolePartyStrat = stratPackage?.strats.find(strat => strat.alliance === alliance && strat.role === role && strat.party === party);
		if (!allianceRolePartyStrat) return `Couldn't find ${stratName} strat for Alliance ${alliance} ${role} ${party}`;
		return allianceRolePartyStrat;
	}

	function getMask(step: MechanicStrat): string {
		if (spotlight) {
			if (step.alignmentMasks && step.alignmentMasks[alignment]) {
				return step.alignmentMasks[alignment];
			}
			return step.mask || '';
		}
		return '';
	}
</script>

<div class="container h-full min-h-screen px-4 mx-auto my-12 flex">
	<div class="container">
		<div class="flex flex-wrap min-w-full justify-between mb-8">
			<div class="space-y-5 v-full">
				<aside class="alert variant-ghost-error">
					<div class="alert-message">
						<p>As of Patch 7.16, "Lateral-core Phaser" and "Core-lateral Phaser" have been swapped</p>
						<p>Lateral-core Phaser = Front is safe, then sides are safe</p>
						<p>Core-lateral Phaser = Sides are safe, then front is safe</p>
					</div>
				</aside>
				<div>
					<h2>Which strat are you using?</h2>
					<RadioGroup>
						<RadioItem bind:group={stratName} name="stratName" value={'raidplan'}>Raidplan (Aurelia/wfJ/o1Z)</RadioItem>
						<RadioItem bind:group={stratName} name="stratName" value={'codcar'}>CODCAR</RadioItem>
						<RadioItem bind:group={stratName} name="stratName" value={'healerout'}>HealerOut</RadioItem>
						<RadioItem bind:group={stratName} name="stratName" value={'idyll'}>Idyll/game8</RadioItem>
					</RadioGroup>
				</div>
				<div>
					<h2>Which alliance are you in?</h2>
					<RadioGroup>
						<RadioItem bind:group={alliance} name="alliance" value={'A'}>A</RadioItem>
						<RadioItem bind:group={alliance} name="alliance" value={'B'}>B</RadioItem>
						<RadioItem bind:group={alliance} name="alliance" value={'C'}>C</RadioItem>
					</RadioGroup>
				</div>
				<div>
					<h2>Which role are you?</h2>
					<RadioGroup>
						<RadioItem bind:group={role} name="role" value={'Tank'}>Tank</RadioItem>
						<RadioItem bind:group={role} name="role" value={'Healer'}>Healer</RadioItem>
						<RadioItem bind:group={role} name="role" value={'Melee'}>Melee</RadioItem>
						<RadioItem bind:group={role} name="role" value={'Ranged'}>Ranged</RadioItem>
					</RadioGroup>
				</div>
				<div>
					<h2>Which light party are you in?</h2>
					<RadioGroup>
						<RadioItem bind:group={party} name="party" value={1}>1</RadioItem>
						<RadioItem bind:group={party} name="party" value={2}>2</RadioItem>
					</RadioGroup>
				</div>
			</div>
			<div class="grow"></div>
			<div class="my-4 xl:my-0">
				{#if stratPackage?.stratName === 'raidplan'}
					<img style:max-height={'400px'} src={'./strats/raidplan/overall.png'} />
				{:else if stratPackage?.stratName === 'codcar'}
					<img style:max-height={'400px'} src={'./strats/codcar/overall.png'} />
				{:else if stratPackage?.stratName === 'healerout'}
					<img style:max-height={'400px'} src={'./strats/healerout/overall.png'} />
				{:else if stratPackage?.stratName === 'idyll'}
					<img style:max-height={'400px'} src={'./strats/idyll/overall.png'} />
				{/if}
			</div>
		</div>
		
		{#if typeof strat === 'string'}
			<slot>
				{strat}
			</slot>
		{:else if typeof strat === 'undefined'}
			<div></div>
		{:else}
			<div class="flex flex-wrap items-center gap-2">
				<div class="content-center">
					{#if typeof stratPackage?.stratUrl === 'string'}
						<a class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" href={stratPackage.stratUrl}>{stratPackage.description}
							<svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
								<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
							</svg>
						</a>
					{:else if typeof stratPackage?.stratUrl === 'object'}
						{stratPackage.description}
						{#each Object.entries(stratPackage.stratUrl) as [linkName, linkUrl]}
							&nbsp;
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
					<SlideToggle name="spotlight-toggle" bind:checked={spotlight}>Highlight my spots</SlideToggle>
				</div>
			</div>
			<div class="flex flex-wrap items-center justify-between my-4">
				<div class="text-xl">{strat.notes}</div>
				{#if strat.strats.some(strat => strat.alignmentTransforms)}
					<div class="content-center">
						<RadioGroup>
							<RadioItem bind:group={alignment} name="alignment" value={"original"}>Original</RadioItem>
							<RadioItem bind:group={alignment} name="alignment" value={"truenorth"}>True North</RadioItem>
							<RadioItem bind:group={alignment} name="alignment" value={"addrelative"}>Wall Relative</RadioItem>
						</RadioGroup>
					</div>
				{/if}
			</div>
			
			<div class="grid xl:grid-cols-6 grid-cols-3 gap-2">
				{#each strat.strats as step}
					{#key [spotlight, alignment]}
					<div class="space-y-4" class:col-span-2={step.alignmentImages && step.alignmentImages[alignment]}>
						<div class="uppercase text-xl">{step.mechanic}</div> 
						<div class="whitespace-pre-wrap text-l">{step.description}</div>
						<img src={(step.alignmentImages && step.alignmentImages[alignment]) ? step.alignmentImages[alignment] : step.imageUrl} style:mask-image={getMask(step)} style:transform={step.alignmentTransforms ? step.alignmentTransforms[alignment] : step.transform} />
					</div>
					{/key}
				{/each}
				{#if strat?.swapNote && strat?.swapStrats}
					<div class="col-span-3">
						<Accordion class="card variant-ghost-secondary" >
							<AccordionItem open padding="py-4 px-4">
								<svelte:fragment slot="lead"><img width="24px" src={"./swap-icon.png"} /></svelte:fragment>
								<svelte:fragment slot="summary"><span class="text-xl">{strat.swapNote}</span></svelte:fragment>
								<svelte:fragment slot="content">
									{#if strat?.swapWarning}
										<aside class="alert variant-ghost-error">
											<div class="alert-message">
												<p>{strat.swapWarning}</p>
											</div>
										</aside>
									{/if}
									<div class="grid grid-cols-3 gap-2">
										{#each strat.swapStrats as step}
											{#key [spotlight, alignment]}
											<div class="space-y-4" class:col-span-2={step.alignmentImages && step.alignmentImages[alignment]}>
												<div class="uppercase text-xl">{step.mechanic}</div> 
												<div class="whitespace-pre-wrap text-l">{step.description}</div>
												<img src={(step.alignmentImages && step.alignmentImages[alignment]) ? step.alignmentImages[alignment] : step.imageUrl} style:mask-image={getMask(step)} style:transform={step.alignmentTransforms ? step.alignmentTransforms[alignment] : step.transform} />
											</div>
											{/key}
										{/each}
									</div>
								</svelte:fragment>
							</AccordionItem>
						</Accordion>
					</div>
				{/if}
			</div>
		{/if}
	</div>
</div>
