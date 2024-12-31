<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	import type { PageData } from './$types';
	import type { Alliance, Role, PlayerStrats, Alignment } from './+page';
	import { RadioGroup, RadioItem, SlideToggle } from '@skeletonlabs/skeleton';

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
</script>

<div class="container h-full mx-auto my-12 flex">
	<div class="space-y-5">
		<h1>where the f do i go???? (Chaotic)</h1>
			<div>
				<h2>Which strat are you using?</h2>
				<RadioGroup>
					<RadioItem bind:group={stratName} name="stratName" value={'raidplan'}>Raidplan</RadioItem>
					<RadioItem bind:group={stratName} name="stratName" value={'codcar'}>CODCAR</RadioItem>
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
				<h2>Which party are you?</h2>
				<RadioGroup>
					<RadioItem bind:group={party} name="party" value={1}>1</RadioItem>
					<RadioItem bind:group={party} name="party" value={2}>2</RadioItem>
				</RadioGroup>
			</div>
			{#if typeof strat === 'string'}
				<slot>
					{strat}
				</slot>
			{:else if typeof strat === 'undefined'}
				<div></div>
			{:else}
				<div class="flex flex-wrap content-center gap-4">
					<div class="content-center">
						{#if stratPackage?.stratUrl}
							<a class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" href={stratPackage.stratUrl}>{stratPackage.description}
								<svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
								</svg>
							</a>
						{/if}
					</div>
					<div class="grow"></div>
					<div class="content-center">
						<SlideToggle name="spotlight-toggle" bind:checked={spotlight}>Highlight my spots</SlideToggle>
					</div>
				</div>
				<div class="text-xl">{strat.notes}</div>
				<div class="grid grid-cols-6 gap-4">
					{#each strat.strats as step}
						<div class="space-y-4 text-xl">
							<div class="uppercase">{step.mechanic}</div> 
							<div>{step.description}</div>
							<img src={step.imageUrl} style:mask-image={spotlight ? step.mask : ''} style:transform={step.transform} />
						</div>
						
					{/each}
				</div>
			{/if}
	</div>
</div>
