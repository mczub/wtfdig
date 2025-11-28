<!-- @ts-nocheck -->
<svelte:options customElement={{ shadow: 'none' }} />

<script lang="ts">
	// @ts-nocheck
	import { Accordion, Tooltip, Tabs } from '$lib/components/ui';
	import {
		ArrowBigRight,
		ArrowRight,
		CircleAlert,
		Clock,
		Divide,
		Expand,
		Play,
		Shield,
		Siren,
		Skull,
		TriangleAlert,
		Wrench
	} from '@lucide/svelte/icons';
	import ImagePreview from '../ImagePreview.svelte';
	import type { TimelineItem } from '$lib/types';
	import { msToTime } from '$lib/utils';

	interface Props {
		timeline: TimelineItem[];
		[propName: string]: any;
	}

	let {
		timeline,
		strat,
		stratName,
		stratState,
		getStratMechs,
		individualStrat,
		spotlight,
		alignment,
		tabTags = null
	}: Props = $props();

	let imageOpenState = $state(false);
	let imageModalProps = $state({
		phase: null,
		mech: null
	});

	function openImageModal(phase: any, mech?: any) {
		imageModalProps = {
			phase: phase,
			mech: mech
		};
		imageOpenState = true;
	}

	let timelineValue = $state(['']);

	let tab = $state(tabTags ? Object.keys(tabTags)[0] : '');
</script>

<ImagePreview
	bind:imageOpenState
	mech={imageModalProps.mech}
	phase={imageModalProps.phase}
	{spotlight}
/>

{#if strat?.notes}
	<div
		class="card preset-outlined-primary-500 p-4 flex flex-row gap-4 my-6 shadow-lg rounded-xl border-l-4 border-l-primary-500"
	>
		<CircleAlert size={32} class="text-primary-500 shrink-0" />
		<div class="whitespace-pre-wrap text-lg">{strat.notes}</div>
	</div>
{/if}

{#if timeline.length > 0}
	<div class="card border border-surface-200-800 mb-8 shadow-sm rounded-xl overflow-hidden">
		<Accordion value={timelineValue} onValueChange={(e) => (timelineValue = e.value)} collapsible>
			<Accordion.Item value="timeline">
				{#snippet control()}<div class="font-semibold text-xl px-2 py-1">Timeline</div>{/snippet}
				{#snippet panel()}
					<div
						class="grid lg:grid-flow-col grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-2 p-4"
						style:grid-template-rows={`repeat(${Math.floor(timeline.length / 3) + 1}, minmax(0, 1fr))`}
					>
						{#each timeline as item, index}
							<div
								class="flex flex-row gap-3 items-center text-sm border-b border-surface-800/50 pb-1 last:border-0"
							>
								<div class="w-5 shrink-0">
									{#if item.mechType === 'Start'}
										<div
											class="grid bg-success-700 rounded-full h-5 w-5 place-content-center text-white shadow-sm"
										>
											<Play size={10} strokeWidth={3} />
										</div>
									{/if}
									{#if item.mechType === 'Phase'}
										<div
											class="grid bg-surface-600 rounded-full h-5 w-5 place-items-center text-white shadow-sm"
										>
											<ArrowRight size={12} strokeWidth={3} />
										</div>
									{/if}
									{#if item.mechType === 'Raidwide'}
										<div
											class="grid bg-secondary-500 rounded-full h-5 w-5 place-content-center text-white shadow-sm"
										>
											<Siren size={12} strokeWidth={2} />
										</div>
									{/if}
									{#if item.mechType === 'Mechanic'}
										<div
											class="grid bg-warning-600 rounded-full h-5 w-5 place-content-center text-white shadow-sm"
										>
											<Wrench size={10} strokeWidth={2} />
										</div>
									{/if}
									{#if item.mechType === 'Tankbuster'}
										<div
											class="grid bg-primary-500 rounded-full h-5 w-5 place-content-center text-white shadow-sm"
										>
											<Shield size={10} strokeWidth={2} />
										</div>
									{/if}
									{#if item.mechType === 'StoredMechanic'}
										<div
											class="grid bg-warning-600 rounded-full h-5 w-5 place-content-center text-white shadow-sm"
										>
											<Clock size={12} strokeWidth={2} />
										</div>
									{/if}
									{#if item.mechType === 'Enrage'}
										<div
											class="grid bg-error-600 rounded-full h-5 w-5 place-items-center text-white shadow-sm"
										>
											<Skull size={12} strokeWidth={2} />
										</div>
									{/if}
								</div>
								<div class="w-12 font-mono text-surface-400">
									{msToTime(item.startTimeMs)}
								</div>
								<div class="font-medium">
									{item.mechName}
								</div>
							</div>
						{/each}
					</div>
				{/snippet}
			</Accordion.Item>
		</Accordion>
	</div>
{/if}

{#if tabTags}
	<Tabs
		value={tab}
		onValueChange={(e) => (tab = e.value)}
		classes="mb-6"
		listClasses="flex-wrap gap-2"
	>
		{#snippet list()}
			{#each Object.keys(tabTags) as tabName}
				<Tabs.Control
					value={tabName}
					labelBase="btn bg-transparent hover:bg-surface-700"
					classes="px-6 py-2 rounded-none transition-all data-[state=active]:bg-secondary-500 data-[state=active]:text-white data-[state=active]:shadow-md"
					>{tabName}</Tabs.Control
				>
			{/each}
		{/snippet}
	</Tabs>
{/if}

<div class="space-y-12">
	{#each individualStrat as phase}
		{#if tabTags && tabTags[tab] ? tabTags[tab].includes(phase.tag) : true}
			{#if phase?.mechs}
				<section class="space-y-6">
					<!-- Phase Header -->
					<div class="flex items-center gap-3 border-b border-surface-700 pb-2">
						<h2 class="text-3xl font-bold tracking-tight text-surface-50 capitalize">
							{phase.phaseName}
						</h2>
						{#if phase?.tag && stratState[phase.tag] !== getStratMechs(stratName)[phase.tag]}
							<Tooltip
								positioning={{ placement: 'top' }}
								triggerBase="cursor-help"
								contentBase="card bg-surface-800 p-3 text-sm shadow-xl"
								openDelay={200}
								arrow
								arrowBackground="!bg-surface-800"
							>
								{#snippet trigger()}<div class="text-warning-500">
										<TriangleAlert size={24} />
									</div>{/snippet}
								{#snippet content()}This mechanic differs from what's in the selected guide.{/snippet}
							</Tooltip>
						{/if}
					</div>

					{#if phase?.description}
						<p class="text-lg text-surface-300 leading-relaxed max-w-4xl">{phase.description}</p>
					{/if}

					{#if phase?.imageUrl}
						<div
							class="rounded-xl overflow-hidden shadow-lg border border-surface-700/50 bg-surface-900/50 inline-block"
						>
							<button
								type="button"
								class="block cursor-zoom-in relative group"
								onclick={() => openImageModal(phase)}
							>
								<img
									class="max-h-[500px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
									style:mask-image={spotlight && phase.mask}
									src={phase.imageUrl}
									alt={phase.phaseName}
								/>
								<div
									class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100"
								>
									<Expand size={48} class="text-white drop-shadow-lg" />
								</div>
							</button>
						</div>
					{/if}

					<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
						{#each phase.mechs as mech}
							{#key [spotlight, alignment]}
								<article
									class="card border border-surface-700/50 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden flex flex-col h-full group relative"
									class:col-span-2={mech.alignmentImages && mech.alignmentImages[alignment]}
									class:xl:col-span-2={mech.alignmentImages && mech.alignmentImages[alignment]}
								>
									<button
										class="flex flex-col h-full text-left w-full"
										type="button"
										onclick={() => openImageModal(phase, mech)}
									>
										<div class="p-5 flex flex-col h-full gap-2">
											<div class="flex justify-between items-start">
												<h3
													class="text-xl font-bold capitalize text-surface-100 group-hover:text-secondary-400 transition-colors"
												>
													{mech.mechanic}
												</h3>
												<Expand
													size={20}
													class="text-surface-500 opacity-0 group-hover:opacity-100 transition-opacity"
												/>
											</div>

											{#if mech?.notes}
												<div
													class="bg-primary-500/10 border border-primary-500/20 rounded-lg p-3 flex gap-3 text-sm text-primary-200"
												>
													<CircleAlert size={20} class="shrink-0 mt-0.5" />
													<div class="whitespace-pre-wrap">{mech.notes}</div>
												</div>
											{/if}

											{#if mech?.description}
												<p class="text-surface-300 text-base leading-relaxed whitespace-pre-wrap">
													{mech.description}
												</p>
											{/if}

											{#if mech?.imageUrl}
												<div class="mt-4 rounded-lg overflow-hidden">
													<img
														class="w-auto h-auto object-contain max-w-full max-h-[350px]"
														src={mech.imageUrl}
														alt={mech.mechanic}
													/>
												</div>
											{/if}

											<div class="whitespace-pre-wrap text-base text-surface-200">
												{mech?.strats && mech.strats[0].description}
											</div>

											{#if mech?.strats && mech.strats[0]?.imageUrl}
												<div class="mt-2 rounded-lg overflow-hidden relative">
													<img
														class="w-auto h-auto object-contain max-w-full max-h-[350px]"
														style:mask-image={spotlight && mech.strats[0]?.mask}
														src={mech.strats[0].imageUrl}
														alt={`${mech.mechanic} strategy`}
													/>
												</div>
											{/if}
										</div>
									</button>
								</article>
							{/key}
						{/each}
					</div>
				</section>
			{:else}
				<!-- Fallback for simple phases without mechs array -->
				<section
					class="card border border-surface-700/50 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden p-6 group"
				>
					<button
						class="w-full text-left flex flex-col gap-2"
						onclick={() => openImageModal(phase)}
					>
						<div class="flex justify-between items-center border-b border-surface-700/50 pb-2">
							<h2
								class="text-2xl font-bold capitalize text-surface-100 group-hover:text-secondary-400 transition-colors"
							>
								{phase.phaseName}
							</h2>
							<Expand
								size={24}
								class="text-surface-500 opacity-0 group-hover:opacity-100 transition-opacity"
							/>
						</div>

						{#if phase?.tag && stratState[phase.tag] !== getStratMechs(stratName)[phase.tag]}
							<div
								class="flex items-center gap-2 text-warning-500 bg-warning-500/10 p-2 rounded-md w-fit"
							>
								<TriangleAlert size={20} />
								<span class="text-sm font-medium">Variation from guide</span>
							</div>
						{/if}

						{#if phase?.description}
							<p class="text-lg text-surface-300 leading-relaxed whitespace-pre-wrap">
								{phase.description}
							</p>
						{/if}

						{#if phase?.imageUrl}
							<div
								class="rounded-xl overflow-hidden shadow-lg border border-surface-700/50 bg-black/20 self-start"
							>
								<img
									class="max-h-[500px] w-auto object-contain"
									style:mask-image={spotlight && phase.mask}
									src={phase.imageUrl}
									alt={phase.phaseName}
								/>
							</div>
						{/if}
					</button>
				</section>
			{/if}
		{/if}
	{/each}
</div>
