<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	import type { PageData } from './$types';
	import type { Alliance, Role, PlayerStrats } from './+page';
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

	export let data;
	let stratName: string;
	let alliance: Alliance;
	let role: Role;
	let party: number;
	let strat: PlayerStrats | string;

	$: strat = getStrat(stratName, alliance, role, party)

	function getStrat(stratName: string, alliance: Alliance, role: Role, party: number) {
		if (!stratName || !alliance || !role || !party) return '';
		const stratPackage = data.strats.find(strat => strat.stratName === stratName);
		const allianceRolePartyStrat = stratPackage?.strats.find(strat => strat.alliance === alliance && strat.role === role && strat.party === party);
		if (!allianceRolePartyStrat) return `Couldn't find ${stratName} strat for Alliance ${alliance} ${role} ${party}`;
		return allianceRolePartyStrat;
	}
</script>

<div class="container h-full mx-auto flex ">
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
				<div>STRAT: {stratName}</div>
				<div>ALLIANCE: {alliance}</div>
				<div>ROLE: {role}</div>
				<div>PARTY: {party}</div>
				<h2>you will start on {strat.startingArea}</h2>
				{#each strat.strats as step}
					<div>{step.mechanic}: {step.description}</div>
				{/each}
			{/if}
	</div>
</div>
