<script lang="ts">
	import { page } from '$app/state';
	import { browser } from '$app/environment';
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
			const storedRole = localStorage.getItem('ucob-role');
			const storedParty = localStorage.getItem('ucob-party');
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
				localStorage.setItem('ucob-role', JSON.stringify(role));
			}
			if (party) {
				localStorage.setItem('ucob-party', JSON.stringify(party));
			}
		}
	});

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
		return `${stratName}`;
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
		return {};
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
			'naur': 'NAUR'
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
		
		if ((stratName === 'game8' || stratName === 'mr') && roleAbbrev !== jpRoleAbbrev[roleAbbrev]) {
			return `${stratNames[stratName]} - ${roleAbbrev}/${jpRoleAbbrev[roleAbbrev]}`;
		}

		return `${stratDiffs.join(' | ')} - ${roleAbbrev}`;
	}

	function getPFDescription() {
		if (!stratName) return '';
		const stratNames: Record<string, string> = {
		}
		let stratDiffs = [stratNames[stratName]];
		
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
</script>

<svelte:window bind:innerWidth={innerWidth} bind:innerHeight={innerHeight} />

<Cheatsheet 
	title={`UCOB Cheatsheet - ${optionsString}`}
	bind:cheatsheetOpenState={cheatsheetOpenState}
	timeline={data.timeline}
	stratName={stratName}
	stratState={stratState}
	getStratMechs={getStratMechs}
	individualStrat={individualStrat}
	spotlight={spotlight}
	alignment={alignment}
	rows=3
	columns=6
	innerHeight={innerHeight}
	innerWidth={innerWidth}
	tabTags={{"P1: Twintania": ['p1'], "P2: Nael": ['p2'], "P3: Bahamut Prime": ['p3'], "P4: Adds": ['p4'], "P5: Golden": ['p5']}}
	splitTimeline={false}
/>

<div class="container grow px-4 mx-auto mb-6">
	<div class="container">
        <div class="mb-6">
            <div class="preset-typo-display-1 mt-2 lg:mt-0 lg:-mb-5">The Unending Coil of Bahamut (Ultimate)</div>
            <div class="text-xl lg:text-3xl text-surface-400">UCOB Patch 4.11</div>
        </div>
        
		<div class="flex flex-wrap min-w-full justify-between mb-8 card preset-filled-surface-50-950 border-[1px] border-surface-200-800 p-4">
			<div class="space-y-5 v-full dark">
				<div class="card preset-outlined-warning-500 gap-4 p-4">
                    <p>This site is still under construction, thank you for your patience while we continue to work on it.</p>
					<p>Some strats may be missing images or highlights.</p>
					<p>This is intended to be a quick reference, please refer to the original guides for full explanations of mechanics.</p>
                </div>
				<div>
					<div class="text-xl mb-2">Which strat are you using?</div>
					<Segment classes="flex-wrap" name="stratName" value={stratName} onValueChange={onSelectStrat}>
						<Segment.Item value="naur" labelClasses="flex items-center"><span class="badge preset-filled-primary-500 px-2 mr-2">NA</span>NAUR</Segment.Item>
					</Segment>
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
								<div>
									<a class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline gap-1" target="_blank" rel="noopener noreferrer" href={linkUrl}>{linkName}
										<ExternalLink />
									</a>
								</div>
							{/each}
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
