<script lang="ts">
	import { page } from '$app/state';
	import type { Alignment, PlayerMechStrat, PhaseStrats, Role, MechanicStrat, Strat } from '../+page';
	import { Accordion, Segment, Switch, Tooltip } from '@skeletonlabs/skeleton-svelte';
	import CircleAlert from '@lucide/svelte/icons/circle-alert';
	import TriangleAlert from '@lucide/svelte/icons/triangle-alert';
	import { ExternalLink, Info } from '@lucide/svelte/icons';
	import { getContext } from 'svelte';
  	import { type ToastContext } from '@skeletonlabs/skeleton-svelte';
	import { untrack } from 'svelte';
	import Cheatsheet from '../../../components/Cheatsheet.svelte';
	import type { TimelineItem } from '$lib/types';
	import deepEquals from 'fast-deep-equal';
	import { replaceState } from '$app/navigation';
	import StratView from '../../../components/StratView.svelte';

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
		decay: null,
		terrestrial: null,
		moonlight: null,
		p2: null,
		lament: null,
		uv4: null,
	});

	
	let role: Role | undefined = $state();
	let party: number | undefined = $state();
	let strat = $derived(getStrat(stratName));
	let individualStrat = $derived(getIndividualStrat(stratName, role, party));
	let spotlight: boolean = $state(true);
	let alignment: Alignment = $state('original');
	let optionsString = $derived(getOptionsString(stratName, role, party));
	export const toast: ToastContext = getContext('toast');

	const decayUrls: Record<string, any> = {
		'toxic': {name: 'Toxic Decay', url: 'https://raidplan.io/plan/46uVU6o49FPuYXOs'},
		'fer': {name: 'Fering Decay', url: 'https://raidplan.io/plan/IRl6bjA5WzSweStq'}
	}

	const terrestrialUrls: Record<string, any> = {
		'clock': {name: 'Clock Terrestrial', url: 'https://raidplan.io/plan/s3EIvZnk3qvuFy86'},
		'toxic': {name: 'Toxic Terrestrial', url: 'https://raidplan.io/plan/46uVU6o49FPuYXOs'},
		'dn': {name: 'DN Terrestrial', url: 'https://www.youtube.com/watch?v=9tnQnMYHs1Q&t=975s'},
	}

	const moonlightUrls: Record<string, any> = {
		'quad': {name: 'Quad Moonlight', url: 'https://raidplan.io/plan/WFsLBku1C9Iyxneu'},
		'toxic': {name: 'Toxic Moonlight', url: 'https://raidplan.io/plan/46uVU6o49FPuYXOs'},
	}

	const p2Urls: Record<string, any> = {
		'toxic': {name: 'Toxic P2', url: 'https://raidplan.io/plan/9M-1G-mmOaaroDOG'},
		'rinon': {name: 'Rinon P2', url: 'https://www.youtube.com/watch?v=CPpfqs0ysuM'}
	}

	const twofoldUrls: Record<string, any> = {
		'original': {name: 'Original Twofold', url: 'https://raidplan.io/plan/Zzf38hNz9aFrn-6T'},
		'casterse': {name: 'Caster SE Twofold', url: 'https://raidplan.io/plan/9M-1G-mmOaaroDOG'},
	}

	const lamentUrls: Record<string, any> = {
		'toxic': {name: 'Toxic Lament', url: 'https://raidplan.io/plan/9M-1G-mmOaaroDOG'},
		'rinon': {name: 'Rinon Lament', url: 'https://raidplan.io/plan/Zzf38hNz9aFrn-6T'},
	}

	const uv4Urls: Record<string, any> = {
		'toxic': {name: 'Toxic UV4', url: 'https://raidplan.io/plan/9M-1G-mmOaaroDOG'},
		'rinon': {name: 'Rinon UV4', url: 'https://raidplan.io/plan/Zzf38hNz9aFrn-6T'},
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
		} else if (stratArray.length === 8){
			stratState = {
				decay: stratArray[1],
				terrestrial: stratArray[2],
				moonlight: stratArray[3],
				p2: stratArray[4],
				twofold: stratArray[5],
				lament: stratArray[6],
				uv4: stratArray[7],
				
			}
		} else {
			stratName = '';
			stratState = {
				decay: null,
				terrestrial: null,
				moonlight: null,
				p2: null,
				lament: null,
				uv4: null,
			}
		}
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
		return `${stratName}:${stratState.decay}:${stratState.terrestrial}:${stratState.moonlight}:${stratState.p2}:${stratState.twofold}:${stratState.lament}:${stratState.uv4}`;
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
		const stratMechs: Record<string, any> = {
			'toxic': {
				decay: 'toxic',
				terrestrial: 'toxic',
				moonlight: 'toxic',
				p2: 'toxic',
				twofold: 'casterse',
				lament: 'toxic',
				uv4: 'toxic',
			},
			'pb-eQ': {
				decay: 'fer',
				terrestrial: 'clock',
				moonlight: 'quad',
				p2: 'toxic',
				twofold: 'casterse',
				lament: 'toxic',
				uv4: 'toxic'
			},
			'pb-r': {
				decay: 'fer',
				terrestrial: 'clock',
				moonlight: 'quad',
				p2: 'toxic',
				twofold: 'original',
				lament: 'rinon',
				uv4: 'rinon'
			},
			'84ddog': {
				decay: 'toxic',
				terrestrial: 'fullr',
				moonlight: 'quad',
				p2: 'toxic',
				twofold: 'casterse',
				lament: 'toxic',
				uv4: 'toxic'
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
			'toxic': 'Toxic Friends',
			'pb-eQ': 'Pastebin (eQ3PHFKr)',
			'pb-r': 'Pastebin + Rinon',
			'84ddog': '84d + DOG'
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
		if (stratState.decay !== getStratMechs(stratName)['decay']) {
			if (stratState.decay === 'toxic') {
				stratDiffs.push(`Toxic Decay`);
			}
			if (stratState.decay === 'fer') {
				stratDiffs.push(`Fering Decay`);
			}
		}
		if (stratState.terrestrial !== getStratMechs(stratName)['terrestrial']) {
			if (stratState.terrestrial === 'clock') {
				stratDiffs.push(`Clock Terrestrial`);
			}
			if (stratState.terrestrial === 'toxic') {
				stratDiffs.push(`Toxic Terrestrial`);
			}
			if (stratState.terrestrial === 'dn') {
				stratDiffs.push(`DN Terrestrial`);
			}
			if (stratState.terrestrial === 'fullr') {
				stratDiffs.push(`Full Rinon Terrestrial`);
			}
			if (stratState.terrestrial === 'halfr') {
				stratDiffs.push(`Half Rinon Terrestrial`);
			}
		}
		if (stratState.moonlight !== getStratMechs(stratName)['moonlight']) {
			if (stratState.moonlight === 'quad') {
				stratDiffs.push(`Quad Moonlight`);
			}
			if (stratState.moonlight === 'toxic') {
				stratDiffs.push(`Toxic Moonlight`);
			}
		}
		if (stratState.p2 !== getStratMechs(stratName)['p2']) {
			if (stratState.p2 === 'toxic') {
				stratDiffs.push(`Toxic P2`);
			}
		}
		if (stratState.twofold !== getStratMechs(stratName)['twofold']) {
			if (stratState.twofold === 'original') {
				stratDiffs.push(`Original Twofold`);
			}
			if (stratState.twofold === 'casterse') {
				stratDiffs.push(`Caster SE Twofold`);
			}
		}
		if (stratState.lament !== getStratMechs(stratName)['lament']) {
			if (stratState.lament === 'rinon') {
				stratDiffs.push(`Rinon Lament`);
			}
			if (stratState.lament === 'toxic') {
				stratDiffs.push(`Toxic Lament`);
			}
		}
		if (stratState.uv4 !== getStratMechs(stratName)['uv4']) {
			if (stratState.uv4 === 'rinon') {
				stratDiffs.push(`Rinon UV4`);
			}
			if (stratState.uv4 === 'toxic') {
				stratDiffs.push(`Toxic UV4`);
			}
		}

		return `${stratDiffs.join(' | ')} - ${roleAbbrev}`;
	}
	
	let innerWidth = $state(0);
	let innerHeight = $state(0);
	let isCheatsheetEnabled = $derived(innerWidth > 1024 && innerHeight > 768);

	let cheatsheetOpenState = $state(false);
</script>

<svelte:window bind:innerWidth={innerWidth} bind:innerHeight={innerHeight} />

<Cheatsheet 
	title={`M8S Cheatsheet - ${optionsString}`}
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
	tabTags={{"P1": ['p1', 'decay', 'terrestrial', 'moonlight'], "P2": ['p2', 'twofold', 'lament', 'uv4']}}
	splitTimeline={true}
/>

<div class="container grow px-4 mx-auto mb-6">
	<div class="container">
        <div class="mb-6">
            <div class="preset-typo-display-1 mt-2 lg:mt-0 lg:-mb-5">AAC Cruiserweight M4 (Savage)</div>
            <div class="text-xl lg:text-3xl text-surface-400">M8S Patch 7.2</div>
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
						<Segment.Item value="pb-r" labelClasses="flex items-center"><span class="badge preset-filled-primary-500 px-2 mr-2">NA</span>Toxic + Rinon</Segment.Item>
						<Segment.Item value="84ddog" labelClasses="flex items-center"><span class="badge preset-tonal-secondary px-2 mr-2">EU</span>84d + DOG</Segment.Item>
						<Segment.Item value="pb-eQ">Pastebin (eQ3PHFKr)</Segment.Item>
						<Segment.Item value="toxic">Toxic</Segment.Item>
					</Segment>
				</div>
				{#if stratName}
				<div class="text-lg my-2">P1</div>
				<div class="flex flex-row space-x-4 space-y-2 flex-wrap">
					<div class="flex flex-col">
						<div class="flex flex-row">
							<div class="text-md mb-2">Millennial Decay</div>
							{#if stratName && stratState.decay !== getStratMechs(stratName)['decay']}
								<Tooltip
									positioning={{ placement: 'top' }}
									triggerBase="underline"
									contentBase="card bg-surface-800 p-4 "
									classes="ml-2 z-9999"
									openDelay={200}
									arrow
									arrowBackground="!bg-surface-800"

								>
									{#snippet trigger()}<div class="text-warning-500"><TriangleAlert /></div>{/snippet}
									{#snippet content()}This mechanic differs from what's in the selected guide.{/snippet}
								</Tooltip>
							{/if}
						</div>
						<Segment classes="flex-wrap" name="decay" value={stratState.decay} onValueChange={(e) => (setStratState('decay', e.value))}>
							<Segment.Item value="fer" labelClasses="flex items-center"><span class="badge preset-filled-primary-500 px-2 mr-2">NA</span>Fering</Segment.Item>
							<Segment.Item value="toxic" labelClasses="flex items-center"><span class="badge preset-tonal-secondary px-2 mr-2">EU</span>Toxic</Segment.Item>
						</Segment>
					</div>
					<div class="flex flex-col">
						<div class="flex flex-row">
							<div class="text-md mb-2">Terrestrial Rage</div>
							{#if stratName && stratState.terrestrial !== getStratMechs(stratName)['terrestrial']}
								<Tooltip
									positioning={{ placement: 'top' }}
									triggerBase="underline"
									contentBase="card bg-surface-800 p-4 "
									classes="ml-2 z-9999"
									openDelay={200}
									arrow
									arrowBackground="!bg-surface-800"

								>
									{#snippet trigger()}<div class="text-warning-500"><TriangleAlert /></div>{/snippet}
									{#snippet content()}This mechanic differs from what's in the selected guide.{/snippet}
								</Tooltip>
							{/if}
						</div>
						<Segment classes="flex-wrap" name="terrestrial" value={stratState.terrestrial} onValueChange={(e) => (setStratState('terrestrial', e.value))}>
							<Segment.Item value="clock" labelClasses="flex items-center"><span class="badge preset-filled-primary-500 px-2 mr-2">NA</span>Clock</Segment.Item>
							<Segment.Item value="toxic">Toxic</Segment.Item>
							<Segment.Item value="dn">DN</Segment.Item>
							<Segment.Item value="fullr" labelClasses="flex items-center"><span class="badge preset-tonal-secondary px-2 mr-2">EU</span>Full Rinon</Segment.Item>
							<Segment.Item value="halfr">Half Rinon</Segment.Item>
						</Segment>
					</div>
					<div class="flex flex-col">
						<div class="flex flex-row">
							<div class="text-md mb-2">Beckon Moonlight</div>
							{#if stratName && stratState.moonlight !== getStratMechs(stratName)['moonlight']}
								<Tooltip
									positioning={{ placement: 'top' }}
									triggerBase="underline"
									contentBase="card bg-surface-800 p-4 "
									classes="ml-2 z-9999"
									openDelay={200}
									arrow
									arrowBackground="!bg-surface-800"

								>
									{#snippet trigger()}<div class="text-warning-500"><TriangleAlert /></div>{/snippet}
									{#snippet content()}This mechanic differs from what's in the selected guide.{/snippet}
								</Tooltip>
							{/if}
						</div>
						<Segment classes="flex-wrap" name="moonlight" value={stratState.moonlight} onValueChange={(e) => (setStratState('moonlight', e.value))}>
							<Segment.Item value="quad" labelClasses="flex items-center"><span class="badge preset-filled-primary-500 px-2 mr-2">NA</span><span class="badge preset-tonal-secondary px-2 mr-2">EU</span>Quad</Segment.Item>
							<Segment.Item value="toxic">Toxic</Segment.Item>
						</Segment>
					</div>
				</div>
				<div class="text-lg my-2">P2</div>
				<div class="flex flex-row space-x-4 space-y-2 flex-wrap">
					<div class="flex flex-col">
						<div class="flex flex-row">
							<div class="text-md mb-2">Overall</div>
							{#if stratName && stratState.p2 !== getStratMechs(stratName)['p2']}
								<Tooltip
									positioning={{ placement: 'top' }}
									triggerBase="underline"
									contentBase="card bg-surface-800 p-4 "
									classes="ml-2 z-9999"
									openDelay={200}
									arrow
									arrowBackground="!bg-surface-800"

								>
									{#snippet trigger()}<div class="text-warning-500"><TriangleAlert /></div>{/snippet}
									{#snippet content()}This mechanic differs from what's in the selected guide.{/snippet}
								</Tooltip>
							{/if}
						</div>
						<Segment classes="flex-wrap" name="p2" value={stratState.p2} onValueChange={(e) => (setStratState('p2', e.value))}>
							<Segment.Item value="toxic" labelClasses="flex items-center"><span class="badge preset-filled-primary-500 px-2 mr-2">NA</span><span class="badge preset-tonal-secondary px-2 mr-2">EU</span>Toxic</Segment.Item>
						</Segment>
					</div>
					<div class="flex flex-col">
						<div class="flex flex-row">
							<div class="text-md mb-2">Twofold</div>
							{#if stratName && stratState.twofold !== getStratMechs(stratName)['twofold']}
								<Tooltip
									positioning={{ placement: 'top' }}
									triggerBase="underline"
									contentBase="card bg-surface-800 p-4 "
									classes="ml-2 z-9999"
									openDelay={200}
									arrow
									arrowBackground="!bg-surface-800"

								>
									{#snippet trigger()}<div class="text-warning-500"><TriangleAlert /></div>{/snippet}
									{#snippet content()}This mechanic differs from what's in the selected guide.{/snippet}
								</Tooltip>
							{/if}
						</div>
						<Segment classes="flex-wrap" name="twofold" value={stratState.twofold} onValueChange={(e) => (setStratState('twofold', e.value))}>
							<Segment.Item value="original">Original</Segment.Item>
							<Segment.Item value="casterse" labelClasses="flex items-center"><span class="badge preset-tonal-secondary px-2 mr-2">EU</span>Caster SE</Segment.Item>
						</Segment>
					</div>
					<div class="flex flex-col">
						<div class="flex flex-row">
							<div class="text-md mb-2">Lone Wolf's Lament</div>
							{#if stratName && stratState.lament !== getStratMechs(stratName)['lament']}
								<Tooltip
									positioning={{ placement: 'top' }}
									triggerBase="underline"
									contentBase="card bg-surface-800 p-4 "
									classes="ml-2 z-9999"
									openDelay={200}
									arrow
									arrowBackground="!bg-surface-800"

								>
									{#snippet trigger()}<div class="text-warning-500"><TriangleAlert /></div>{/snippet}
									{#snippet content()}This mechanic differs from what's in the selected guide.{/snippet}
								</Tooltip>
							{/if}
						</div>
						<Segment classes="flex-wrap" name="lament" value={stratState.lament} onValueChange={(e) => (setStratState('lament', e.value))}>
							<Segment.Item value="rinon" labelClasses="flex items-center"><span class="badge preset-filled-primary-500 px-2 mr-2">NA</span>Rinon</Segment.Item>
							<Segment.Item value="toxic" labelClasses="flex items-center"><span class="badge preset-tonal-secondary px-2 mr-2">EU</span>Toxic</Segment.Item>
						</Segment>
					</div>
					<div class="flex flex-col">
						<div class="flex flex-row">
							<div class="text-md mb-2">UV4</div>
							{#if stratName && stratState.uv4 !== getStratMechs(stratName)['uv4']}
								<Tooltip
									positioning={{ placement: 'top' }}
									triggerBase="underline"
									contentBase="card bg-surface-800 p-4 "
									classes="ml-2 z-9999"
									openDelay={200}
									arrow
									arrowBackground="!bg-surface-800"

								>
									{#snippet trigger()}<div class="text-warning-500"><TriangleAlert /></div>{/snippet}
									{#snippet content()}This mechanic differs from what's in the selected guide.{/snippet}
								</Tooltip>
							{/if}
						</div>
						<Segment classes="flex-wrap" name="uv4" value={stratState.uv4} onValueChange={(e) => (setStratState('uv4', e.value))}>
							<Segment.Item value="rinon" labelClasses="flex items-center"><span class="badge preset-filled-primary-500 px-2 mr-2">NA</span>Rinon</Segment.Item>
							<Segment.Item value="toxic" labelClasses="flex items-center"><span class="badge preset-tonal-secondary px-2 mr-2">EU</span>Toxic</Segment.Item>
						</Segment>
					</div>
				</div>
				{/if}
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
			<div class="card preset-filled-surface-50-950 border-[1px] border-surface-200-800 p-4">
				<div class="flex flex-col lg:flex-row gap-2">
					<div class="w-full lg:w-auto content-center">
						<div class="capitalize font-semibold text-2xl mb-0">{optionsString}</div>
						{#if typeof strat?.stratUrl === 'string'}
							<a class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline gap-1" target="_blank" rel="noopener noreferrer" href={strat.stratUrl}>{strat.description}
								<ExternalLink />
							</a>
						{:else if typeof strat?.stratUrl === 'object'}
						<div class="flex gap-2">
							{strat.description}
							{#each Object.entries(strat.stratUrl) as [linkName, linkUrl]}
								<a class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline gap-1" target="_blank" rel="noopener noreferrer" href={linkUrl}>{linkName}
									<ExternalLink />
								</a>
							{/each}
						</div>
						{/if}
						{#if (stratState.decay && decayUrls[stratState.decay])}
							<div>
								<a class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline gap-1" target="_blank" rel="noopener noreferrer" href={decayUrls[stratState.decay].url}>{decayUrls[stratState.decay].name}
									<ExternalLink />
								</a>
							</div>
						{/if}
						{#if (stratState.terrestrial && terrestrialUrls[stratState.terrestrial])}
							<div>
								<a class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline gap-1" target="_blank" rel="noopener noreferrer" href={terrestrialUrls[stratState.terrestrial].url}>{terrestrialUrls[stratState.terrestrial].name}
									<ExternalLink />
								</a>
							</div>
						{/if}
						{#if (stratState.moonlight && moonlightUrls[stratState.moonlight])}
							<div>
								<a class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline gap-1" target="_blank" rel="noopener noreferrer" href={moonlightUrls[stratState.moonlight].url}>{moonlightUrls[stratState.moonlight].name}
									<ExternalLink />
								</a>
							</div>
						{/if}
						{#if (stratState.p2 && p2Urls[stratState.p2])}
							<div>
								<a class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline gap-1" target="_blank" rel="noopener noreferrer" href={p2Urls[stratState.p2].url}>{p2Urls[stratState.p2].name}
									<ExternalLink />
								</a>
							</div>
						{/if}
						{#if (stratState.twofold && twofoldUrls[stratState.twofold])}
							<div>
								<a class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline gap-1" target="_blank" rel="noopener noreferrer" href={twofoldUrls[stratState.twofold].url}>{twofoldUrls[stratState.twofold].name}
									<ExternalLink />
								</a>
							</div>
						{/if}
						{#if (stratState.lament && lamentUrls[stratState.lament])}
							<div>
								<a class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline gap-1" target="_blank" rel="noopener noreferrer" href={lamentUrls[stratState.lament].url}>{lamentUrls[stratState.lament].name}
									<ExternalLink />
								</a>
							</div>
						{/if}
						{#if (stratState.uv4 && uv4Urls[stratState.uv4])}
							<div>
								<a class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline gap-1" target="_blank" rel="noopener noreferrer" href={uv4Urls[stratState.uv4].url}>{uv4Urls[stratState.uv4].name}
									<ExternalLink />
								</a>
							</div>
						{/if}
					</div>
					<div class="grow"></div>
					<div class="grid gap-y-2 content-center max-w-full sm:max-w-1/2 lg:max-w-[20%]">
						{#if isCheatsheetEnabled}
							<button onclick={() => (cheatsheetOpenState = true)} class="button btn preset-tonal-secondary border border-secondary-500">Open cheatsheet</button>
						{:else}
							<button class="button btn preset-tonal-secondary border border-secondary-500 disabled">Open cheatsheet</button>
							<div class="flex flex-row items-center gap-2">
								<Info size={40} />
								<span>Cheatsheet mode needs a browser window size of at least 1024 x 768</span>
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
