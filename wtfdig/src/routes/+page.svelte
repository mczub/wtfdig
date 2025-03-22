<script lang="ts">
	import type { Alliance, Role, PlayerStrats, Alignment, MechanicStrat } from './+page';
	import { Accordion, Segment, Switch } from '@skeletonlabs/skeleton-svelte';

	interface Props {
		data: any;
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();
	let stratName: string | undefined = $state();
	let alliance: Alliance | undefined = $state();
	let role: Role | undefined = $state();
	let party: number | undefined = $state();
	let strat: PlayerStrats | string = $derived(getStrat(stratName, alliance, role, party));
	let stratPackage = $derived(data.strats.find(strat => strat.stratName === stratName));
	let spotlight: boolean = $state(true);
	let alignment: Alignment = $state('original');
    let accordion = $state(['swaps']);


	function getStrat(stratName?: string, alliance?: Alliance, role?: Role, party?: number) {
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

<div class="container grow px-4 mx-auto mb-6">
	<div class="container">
        <div class="mb-6">
            <div class="preset-typo-display-1 -mb-5">The Cloud of Darkness (Chaotic)</div>
            <div class="text-3xl text-surface-400">Patch 7.1</div>
        </div>
        
		<div class="flex flex-wrap min-w-full justify-between mb-8">
			<div class="space-y-5 v-full dark">
                <div class="card preset-outlined-warning-500 gap-4 p-4 lg:grid-cols-[auto_1fr_auto]">
                    <p>As of Patch 7.16, "Lateral-core Phaser" and "Core-lateral Phaser" have been swapped</p>
                    <p>Lateral-core Phaser = Front is safe, then sides are safe</p>
                    <p>Core-lateral Phaser = Sides are safe, then front is safe</p>
                </div>
				<div>
					<div class="text-xl mb-2">Which strat are you using?</div>
					<Segment name="stratName" value={stratName} onValueChange={(e) => (stratName = e.value)}>
						<Segment.Item value="raidplan">Raidplan (Aurelia/wfJ/o1Z)</Segment.Item>
						<Segment.Item value="codcar">CODCAR</Segment.Item>
						<Segment.Item value="healerout">HealerOut</Segment.Item>
						<Segment.Item value="idyll">Idyll/game8</Segment.Item>
					</Segment>
				</div>
				<div>
                    <div class="text-xl mb-2">Which alliance are you in?</div>
					<Segment name="alliance" value={alliance} onValueChange={(e) => (alliance = e.value)}>
						<Segment.Item value="A">A</Segment.Item>
						<Segment.Item value="B">B</Segment.Item>
						<Segment.Item value="C">C</Segment.Item>
					</Segment>
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
			{strat}
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
				<div class="text-xl">{strat.notes}</div>
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
						<Accordion value={accordion} onValueChange={(e) => (accordion = e.value)} multiple classes="card preset-tonal-primary border border-primary-700">
							<Accordion.Item panelPadding="py-4 px-4" value="swaps">
								{#snippet lead()}
									<img width="24px" src={"./swap-icon.png"} />
								{/snippet}
								{#snippet control()}
									<span class="text-xl">{strat.swapNote}</span>
								{/snippet}
								{#snippet panel()}						
                                    {#if strat?.swapWarning}
                                        <aside class="card preset-tonal-error preset-outlined-error-500 gap-4 p-4 mb-2">
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
		{/if}
	</div>
</div>
