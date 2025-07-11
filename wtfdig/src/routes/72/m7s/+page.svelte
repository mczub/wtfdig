<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import type { Alignment, Role, Strat } from './+page';
	import { Modal, Segment, Switch } from '@skeletonlabs/skeleton-svelte';
	import { Copy, ExternalLink, Fullscreen, Info, Link, X } from '@lucide/svelte/icons';
	import { getContext } from 'svelte';
  	import { type ToastContext } from '@skeletonlabs/skeleton-svelte';
	import { untrack } from 'svelte';
	import Cheatsheet from '../../../components/Cheatsheet.svelte';
	import deepEquals from 'fast-deep-equal';
	import { replaceState } from '$app/navigation';
	import StratView from '../../../components/StratView.svelte';
	import type { TimelineItem } from "$lib/types";

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
		p2: null,
		p3: null,
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
		if (browser) {
			const storedRole = localStorage.getItem('m7s-role');
			const storedParty = localStorage.getItem('m7s-party');
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
				localStorage.setItem('m7s-role', JSON.stringify(role));
			}
			if (party) {
				localStorage.setItem('m7s-party', JSON.stringify(party));
			}
		}
	});

	const p2Urls: Record<string, any> = {
		'toxic': {name: 'Toxic P2', url: 'https://raidplan.io/plan/gIcsj6_cyedVQON7'},
		'bili': {name: 'Bilibili P2', url: 'https://raidplan.io/plan/s_q_kuYAhHcOLcxb'},
		'alpha': {name: 'Alpha 1.0 P2', url: 'https://raidplan.io/plan/jtQenPvoJy7hsV-x'},
		'alpha2': {name: 'Alpha 2.0 P2', url: 'https://raidplan.io/plan/zjpDmFrJ6VvUcDhV'},
		'zenith': {name: 'Zenith P2', url: 'https://raidplan.io/plan/2Y1HT42osFhYD6Pe'},
		'cute': {name: 'Cute P2', url: 'https://raidplan.io/plan/q_qH0crFmPZqrY4L'},
		'locked': {name: 'Locked P2', url: 'https://raidplan.io/plan/FGvPnlaAe1fwlsIB'},
		'fixed': {name: 'Fixed P2', url: 'https://raidplan.io/plan/-lZai2v34Y8bC15S'},
		'mr': {name: 'MR P2', url: 'https://raidplan.io/plan/QeESzBHNANmJAkDv'},
	}

	const p3Urls: Record<string, any> = {
		'toxic': {name: 'Toxic P3', url: 'https://raidplan.io/plan/DEijc3hhq_CNGaRg'},
		'hector': {name: 'Hector P3', url: 'https://www.youtube.com/watch?v=fIYMPk54cJc&t=994s'},
		'mr': {name: 'MR P3', url: 'https://raidplan.io/plan/XJ7zmjNpEWKtuqdJ'}
	}

	const stratMechs: Record<string, any> = {
		'toxic': {
			p2: 'locked',
			p3: 'toxic',
		},
		'kindred': {
			p2: 'locked',
			p3: 'toxic',
		},
		'game8': {
			p2: 'game8',
			p3: 'game8',
		},
		'mr': {
			p2: 'mr',
			p3: 'mr',
		},
	}

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
		if (stratArray.length === 1) {
			stratState = getStratMechs(stratArray[0]);
		}
		else if (stratArray.length === 3) {
			stratState = {
				p2: stratArray[1] ? stratArray[1] : getStratMechs(stratArray[0]).p2,
				p3: stratArray[2] ? stratArray[2] : getStratMechs(stratArray[0]).p3
			}
		} else {
			stratName ='';
			stratState = {
				p2: null,
				p3: null,
			}
		}
		
	}

	function getStratOrEmptyString(strat: string): string {
		if (!stratName || !strat) return ''
		if (getStratMechs(stratName)[strat] === stratState[strat]) {
			return '';
		}
		return stratState[strat] || '';
	}

	function setStratState(mech: string, value: string) {
		stratState[mech] = value;
		const stratCode = getStratCode(stratName, stratState);
		replaceState(`#${stratCode}`, {});
	}

	function getStratCode(stratName: string | undefined, stratState: any) {
		if (!stratName) return '';
		if (stratName && stratState) {
			if (deepEquals(getStratMechs(stratName), stratState)) {
				return stratName;
			}
		}
		return `${stratName}:${getStratOrEmptyString('p2')}:${getStratOrEmptyString('p3')}`;
	}

	function onSelectStrat(e) {
		stratName = e.value;
		stratState = getStratMechs(e.value);
		const stratCode = getStratCode(stratName, stratState);
		replaceState(`#${stratCode}`, {});
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
								description: getStratItem(phaseStratMech.description, phaseStrat.tag),
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
			'game8': 'Game8',
			'toxic': 'Toxic',
			'kindred': 'Kindred',
			'mr': 'Materia Raiding'
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
		if (stratState.p2 !== getStratMechs(stratName)['p2']) {
			if (stratState.p2 === 'toxic') {
				stratDiffs.push(`Toxic P2`);
			}
			if (stratState.p2 === 'bili') {
				stratDiffs.push(`Bilibili P2`);
			}
			if (stratState.p2 === 'alpha') {
				stratDiffs.push(`Alpha 1.0 P2`);
			}
			if (stratState.p2 === 'alpha2') {
				stratDiffs.push(`Alpha 2.0 P2`);
			}
			if (stratState.p2 === 'zenith') {
				stratDiffs.push(`Zenith P2`);
			}
			if (stratState.p2 === 'cute') {
				stratDiffs.push(`Cute P2`);
			}
			if (stratState.p2 === 'locked') {
				stratDiffs.push(`Locked P2`);
			}
			if (stratState.p2 === 'fixed') {
				stratDiffs.push(`Fixed P2`);
			}
			if (stratState.p2 === 'game8') {
				stratDiffs.push(`Game8 P2`);
			}
			if (stratState.p2 === 'mr') {
				stratDiffs.push(`MR P2`);
			}
		}
		if (stratState.p3 !== getStratMechs(stratName)['p3']) {
			if (stratState.p3 === 'toxic') {
				stratDiffs.push(`Toxic P3`);
			}
			if (stratState.p3 === 'hector') {
				stratDiffs.push(`Hector P3`);
			}
			if (stratState.p3 === 'game8') {
				stratDiffs.push(`Game8 P3`);
			}
			if (stratState.p3 === 'mr') {
				stratDiffs.push(`MR P3`);
			}
		}
		if ((stratName === 'game8' || stratName === 'mr') && roleAbbrev !== jpRoleAbbrev[roleAbbrev]) {
			return `${stratNames[stratName]} - ${roleAbbrev}/${jpRoleAbbrev[roleAbbrev]}`;
		}

		return `${stratDiffs.join(' | ')} - ${roleAbbrev}`;
	}

	function getPFDescription() {
		if (!stratName) return '';
		const stratNames: Record<string, string> = {
			'game8': 'Game8',
			'toxic': 'Toxic',
			'kindred': 'Kindred',
			'mr': 'MR'
		}
		let stratDiffs = [stratNames[stratName]];
		if ((stratState.p2 !== getStratMechs(stratName)['p2']) || (stratState.p3 !== getStratMechs(stratName)['p3']) || stratName === 'kindred') {
			if (stratState.p2 === 'toxic') {
				stratDiffs.push(`Toxic`);
			}
			if (stratState.p2 === 'bili') {
				stratDiffs.push(`Bilibili`);
			}
			if (stratState.p2 === 'alpha') {
				stratDiffs.push(`Alpha 1.0`);
			}
			if (stratState.p2 === 'alpha2') {
				stratDiffs.push(`Alpha 2.0`);
			}
			if (stratState.p2 === 'zenith') {
				stratDiffs.push(`Zenith`);
			}
			if (stratState.p2 === 'cute') {
				stratDiffs.push(`Cute`);
			}
			if (stratState.p2 === 'locked') {
				stratDiffs.push(`Locked`);
			}
			if (stratState.p2 === 'fixed') {
				stratDiffs.push(`Fixed`);
			}
			if (stratState.p2 === 'game8') {
				stratDiffs.push(`Game8`);
			}
			if (stratState.p2 === 'mr') {
				stratDiffs.push(`MR`);
			}
			if (stratState.p3 === 'toxic') {
				stratDiffs.push(`Toxic`);
			}
			if (stratState.p3 === 'hector') {
				stratDiffs.push(`Hector`);
			}
			if (stratState.p3 === 'game8') {
				stratDiffs.push(`Game8`);
			}
			if (stratState.p3 === 'mr') {
				stratDiffs.push(`MR`);
			}
		}
		if (stratName === 'toxic' && stratState.p2 === 'locked' && stratState.p3 === 'toxic') {
			return `Toxic | Locked | Toxic | ${window.location.href}`
		}
		if (stratName === 'toxic' && stratState.p2 === 'fixed' && stratState.p3 === 'toxic') {
			return `Toxic | Fixed | Toxic | ${window.location.href}`
		}
		return `${stratDiffs.join(' | ')} | ${window.location.href}`
	}

	function copyPFDescription() {
		navigator.clipboard.writeText(getPFDescription());
		toast.create({
			description: 'Copied PF description to clipboard!',
			type: 'success',
		});
	}
	
	let innerWidth = $state(0);
	let innerHeight = $state(0);
	let isCheatsheetEnabled = $derived(innerWidth > 1024 && innerHeight > 768);

	let cheatsheetOpenState = $state(false);
	let otherOpenState = $state(false);

	function closeOther() {
		otherOpenState = false;
	}
</script>

<svelte:window bind:innerWidth={innerWidth} bind:innerHeight={innerHeight} />

<Cheatsheet 
	title={`M7S Cheatsheet - ${optionsString}`}
	bind:cheatsheetOpenState={cheatsheetOpenState}
	timeline={data.timeline}
	stratName={stratName}
	stratState={stratState}
	getStratMechs={getStratMechs}
	individualStrat={individualStrat}
	spotlight={spotlight}
	alignment={alignment}
	rows=3
	columns=5
	innerHeight={innerHeight}
	innerWidth={innerWidth}
	tabTags={{"P1": ['p1'], "P2": ['p2'], "P3": ['p3']}}
	splitTimeline={false}
/>

<Modal
	open={otherOpenState}
	onOpenChange={(e) => (otherOpenState = e.open)}
	contentBase="card bg-surface-100-900 p-4 space-y-4 shadow-xl flex flex-col border border-surface-600 lg:min-w-[600px]"
	backdropClasses="backdrop-blur-sm"
	zIndex={"3000"}
>
	{#snippet content()}
		<header class="flex justify-between">
			<div>
				<h3 class="h3">Additional or Outdated Strats</h3>
			</div>
			<X onclick={closeOther} />
		</header>
		<div>
			<div class="card preset-outlined-warning-500 gap-4 p-4 mb-2">
				<p>These strats are relatively unused in PF, either because they're new or outdated.</p>
				<p>If you see a strat here that's picking up steam in PF, please <a target="_blank" rel="noopener noreferrer" class="anchor" href="https://docs.google.com/forms/d/e/1FAIpQLScJEJ43FKjSRJ2MyLuGXznce-P_SQNyPLWga_Xme_CJKPiQIQ/viewform?usp=header">let me know!</a></p>
			</div>
			<div>
				<h4 class="h4">P1</h4>
				<div><a class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline gap-1" target="_blank" rel="noopener noreferrer" href={'https://raidplan.io/plan/9q3NYbwkt64Wswif'}>LA Uptime P1</a></div>
				<div><a class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline gap-1" target="_blank" rel="noopener noreferrer" href={'https://raidplan.io/plan/fU48afCXIw8Sbb30'}>Shenpai P1</a></div>
			</div>
			<div>
				<h4 class="h4">P2</h4>
				<div><a class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline gap-1" target="_blank" rel="noopener noreferrer" href={'https://raidplan.io/plan/gIcsj6_cyedVQON7'}>Toxic P2</a></div>
				<div><a class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline gap-1" target="_blank" rel="noopener noreferrer" href={'https://raidplan.io/plan/jtQenPvoJy7hsV-x'}>Alpha 1.0 P2</a></div>
				<div><a class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline gap-1" target="_blank" rel="noopener noreferrer" href={'https://raidplan.io/plan/zjpDmFrJ6VvUcDhV'}>Alpha 2.0 P2</a></div>
				<div><a class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline gap-1" target="_blank" rel="noopener noreferrer" href={'https://raidplan.io/plan/2Y1HT42osFhYD6Pe'}>Zenith Seeds</a></div>
				<div><a class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline gap-1" target="_blank" rel="noopener noreferrer" href={'https://raidplan.io/plan/xqt73wqsyzeykudf'}>QR Seeds</a></div>
			</div>
			<div>
				<h4 class="h4">P3</h4>
				<div><a class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline gap-1" target="_blank" rel="noopener noreferrer" href={'https://raidplan.io/plan/tFbTaL_Noj4ePdly'}>Cute Debris Deathmatch</a></div>
			</div>
		</div>
	{/snippet}
</Modal>

<div class="container grow px-4 mx-auto mb-6">
	<div class="container">
        <div class="mb-6">
            <div class="preset-typo-display-1 mt-2 lg:mt-0 lg:-mb-5">AAC Cruiserweight M3 (Savage)</div>
            <div class="text-xl lg:text-3xl text-surface-400">M7S Patch 7.2</div>
        </div>
        
		<div class="flex flex-wrap min-w-full justify-between mb-8 card preset-filled-surface-50-950 border-[1px] border-surface-200-800 p-4">
			<div class="space-y-5 v-full dark">
				<div class="card preset-outlined-warning-500 gap-4 p-4">
                    <p>This site is still under construction, thank you for your patience while we continue to work on it.</p>
					<p>Some strats may be missing images or highlights.</p>
					<p>This is intended to be a quick reference, please refer to the original guides for full explanations of mechanics.</p>
                </div>
				<div>
					<div class="text-xl mb-2">Which P1 strat are you using?</div>
					<Segment classes="flex-wrap" name="stratName" value={stratName} onValueChange={onSelectStrat}>
						<Segment.Item value="toxic" labelClasses="flex items-center"><span class="badge preset-filled-primary-500 px-2 mr-2">NA</span><span class="badge preset-tonal-secondary px-2 mr-2">EU</span>Toxic</Segment.Item>
						<Segment.Item value="game8" labelClasses="flex items-center"><span class="badge preset-tonal-error px-2 mr-2">JP</span>Game8</Segment.Item>
						<Segment.Item value="mr" labelClasses="flex items-center"><span class="badge preset-filled-success-500 px-2 mr-2">OCE</span>MR</Segment.Item>
						<Segment.Item value="kindred">Kindred</Segment.Item>
					</Segment>
				</div>
				{#if stratName}
				<div class="flex flex-row space-x-4 space-y-2 flex-wrap mb-2">
					<div class="flex flex-col">
						<div class="flex flex-row">
							<div class="text-xl mb-2">Which P2/Seeds strat are you using?</div>
						</div>
						<Segment classes="flex-wrap" name="p2" value={stratState.p2} onValueChange={(e) => (setStratState('p2', e.value))}>
							<Segment.Item value="locked" labelClasses="flex items-center"><span class="badge preset-filled-primary-500 px-2 mr-2">NA</span>Locked</Segment.Item>
							<Segment.Item value="fixed" labelClasses="flex items-center"><span class="badge preset-tonal-secondary px-2 mr-2">EU</span>Fixed</Segment.Item>
							<Segment.Item value="game8" labelClasses="flex items-center"><span class="badge preset-tonal-error px-2 mr-2">JP</span>Game8/さり式</Segment.Item>
							<Segment.Item value="mr" labelClasses="flex items-center"><span class="badge preset-filled-success-500 px-2 mr-2">OCE</span>MR</Segment.Item>
							<Segment.Item value="bili">Bilibili</Segment.Item>
							<Segment.Item value="cute">Cute</Segment.Item>
						</Segment>
					</div>
					<div class="flex flex-col">
						<div class="flex flex-row">
							<div class="text-xl mb-2">Which P3 strat are you using?</div>
						</div>
						<div>
							<Segment classes="flex-wrap shrink" name="p3" value={stratState.p3} onValueChange={(e) => (setStratState('p3', e.value))}>
								<Segment.Item value="toxic" labelClasses="flex items-center"><span class="badge preset-filled-primary-500 px-2 mr-2">NA</span><span class="badge preset-tonal-secondary px-2 mr-2">EU</span>Toxic</Segment.Item>
								<Segment.Item value="game8" labelClasses="flex items-center"><span class="badge preset-tonal-error px-2 mr-2">JP</span>Game8</Segment.Item>
								<Segment.Item value="mr" labelClasses="flex items-center"><span class="badge preset-filled-success-500 px-2 mr-2">OCE</span>MR</Segment.Item>
								<Segment.Item value="hector">Hector</Segment.Item>
							</Segment>
						</div>
					</div>
				</div>
				{/if}
				<div class="flex flex-col">
					<div class="flex flex-row">
						<button type="button" class="btn preset-tonal-primary" onclick={() => otherOpenState = true}>View other strats</button>
					</div>
				</div>
				<div>
					<div class="text-xl mb-2">Which role are you?</div>
					<Segment name="role" classes="flex-wrap" value={role} onValueChange={(e) => (role = e.value)}>
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
			<div class="flex flex-col lg:flex-row gap-2 mb-8">
				{#if isCheatsheetEnabled}
					<button onclick={() => (cheatsheetOpenState = true)} class="button btn btn-lg preset-tonal-secondary border border-secondary-500"><Fullscreen />Open cheatsheet</button>
				{:else}
					<button class="button btn btn-lg preset-tonal-secondary border border-secondary-500 disabled"><Fullscreen />Open cheatsheet</button>
					<div class="flex flex-row items-center gap-2">
						<Info size={24} />
						<span>Cheatsheet mode needs a browser window size of at least 1024 x 768</span>
					</div>
					
				{/if}
				<button onclick={() => copyLinkToClipboard()} class="button btn btn-lg preset-tonal-secondary border border-secondary-500"><Link />Copy link</button>
				<div class="card flex flex-row border-[1px] border-surface-200-800 flex-auto lg:w-0 lg:max-w-full">
					<pre class="flex-auto pre overflow-x-auto text-nowrap whitespace-nowrap">{getPFDescription()}</pre>
					<button onclick={() => copyPFDescription()} class="button btn btn-lg preset-tonal-secondary border border-secondary-500"><Copy />Copy PF description</button>
				</div>
			</div>
			<div class="card preset-filled-surface-50-950 border-[1px] border-surface-200-800 p-4">
				<div class="flex flex-col lg:flex-row gap-2">
					<div class="w-full lg:w-auto content-center">
						<div class="capitalize font-semibold text-2xl mb-0">{optionsString}</div>
						{#if typeof strat?.stratUrl === 'string'}
							<a class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline gap-1" target="_blank" rel="noopener noreferrer" href={strat.stratUrl}>{strat.description}
								<ExternalLink />
							</a>
						{:else if typeof strat?.stratUrl === 'object'}
							{strat.description}
							{#each Object.entries(strat.stratUrl) as [linkName, linkUrl]}
								<a class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline gap-1" target="_blank" rel="noopener noreferrer" href={linkUrl}>{linkName}
									<ExternalLink />
								</a>
							{/each}
						{/if}
						{#if (stratState.p2 && p2Urls[stratState.p2])}
							<div>
								<a class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline gap-1" target="_blank" rel="noopener noreferrer" href={p2Urls[stratState.p2].url}>{p2Urls[stratState.p2].name}
									<ExternalLink />
								</a>
							</div>
						{/if}
						{#if (stratState.p3 && p3Urls[stratState.p3])}
							<div>
								<a class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline gap-1" target="_blank" rel="noopener noreferrer" href={p3Urls[stratState.p3].url}>{p3Urls[stratState.p3].name}
									<ExternalLink />
								</a>
							</div>
						{/if}
					</div>
					<div class="grow"></div>
					<div><Switch name="spotlight-toggle" checked={spotlight} onCheckedChange={(e) => (spotlight = e.checked)}>Highlight my spots</Switch></div>
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
				<StratView
					strat={strat}
					timeline={data.timeline}
					stratName={stratName}
					stratState={stratState}
					getStratMechs={getStratMechs}
					individualStrat={individualStrat}
					spotlight={spotlight}
					alignment={alignment}
				/>
			</div>
			{/if}
		{/if}
	</div>
</div>
