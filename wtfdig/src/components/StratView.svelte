<svelte:options customElement={{shadow: 'none'}} ></svelte:options>
<script lang="ts">
    import { Accordion, Tooltip } from '@skeletonlabs/skeleton-svelte';
    import { CircleAlert, Clock, Divide, Expand, Shield, Siren, TriangleAlert, Wrench } from '@lucide/svelte/icons';
	import ImagePreview from './ImagePreview.svelte';
	import type { TimelineItem } from '$lib/types';
    import { msToTime } from '$lib/utils';

    interface Props {
		timeline: TimelineItem[];
        [propName: string]: any;
	}

    let { timeline, strat, stratName, stratState, getStratMechs, individualStrat, spotlight, alignment }: Props = $props();
    
    let imageOpenState = $state(false);
	let imageModalProps = $state({
        phase: null,
        mech: null,
	});

	function openImageModal(phase: any, mech?: any) {
		imageModalProps = {
			phase: phase,
            mech: mech
		}
		imageOpenState = true;
	}

    let timelineValue = $state(['']);
</script>

<ImagePreview 
    bind:imageOpenState={imageOpenState}
    mech={imageModalProps.mech}
    phase={imageModalProps.phase}
    spotlight={spotlight}
/>

{#if strat?.notes}
    <div class="card preset-outlined-primary-500 p-2 flex flex-row space-x-2 my-4">
        <CircleAlert size={32} />
        <div class="whitespace-pre-wrap text-lg mb-0">{strat.notes}</div>
    </div>
{/if}
{#if timeline.length > 0}
<div class="card preset-filled-surface-50-950 border-[1px] border-surface-200-800 mb-4">
    <Accordion value={timelineValue} onValueChange={(e) => (timelineValue = e.value)} collapsible>
        <Accordion.Item value="timeline">
            {#snippet control()}<div class="font-semibold text-xl">Timeline</div>{/snippet}
            {#snippet panel()}
                <div class="grid lg:grid-flow-col grid-cols-1 lg:grid-cols-3 gap-1" style:grid-template-rows={`repeat(${Math.floor(timeline.length / 3) + 1}, minmax(0, 1fr))`}>
                    {#each timeline as item, index}
                        <div class="flex flex-row gap-4 items-center">
                            <div class="w-4">
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
                            <div class="w-12">
                                {msToTime(item.startTimeMs)}
                            </div>
                            <div>
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
{#each individualStrat as phase}
    {#if phase?.mechs}
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
            {#if phase?.imageUrl}<img class="max-h-[400px] self-start rounded-md mt-4" style:mask-image={spotlight && phase.mask} src={phase.imageUrl} />{/if}
            {#if phase?.mechs}
                <div class="grid lg:grid-cols-2 grid-cols-1 gap-2 mt-4">
                    {#each phase.mechs as mech}
                        {#key [spotlight, alignment]}
                        <button class="flex flex-col space-y-4 group text-start" type="button" tabindex="0" class:col-span-2={mech.alignmentImages && mech.alignmentImages[alignment]} onclick={() => openImageModal(phase, mech)}>
                            <div class="flex justify-between capitalize font-semibold text-xl mb-0">
                                {mech.mechanic}
                                <span class="not-group-hover:hidden m-1"><Expand size={16}/></span>
                            </div> 
                            {#if mech?.notes}
                                <div class="card preset-outlined-primary-500 p-2 flex flex-row space-x-2 my-2">
                                    <CircleAlert size={32} />
                                    <div class="whitespace-pre-wrap text-lg mb-0">{mech.notes}</div>
                                </div>
                            {/if}
                            {#if mech?.description}<div class="whitespace-pre-wrap text-lg mb-0">{mech.description}</div>{/if}
                            {#if mech?.imageUrl}<img class="max-h-[400px] self-start rounded-md mt-4" src={mech.imageUrl} />{/if}
                            <div class="whitespace-pre-wrap text-lg mb-0">{mech?.strats && mech.strats[0].description}</div>
                            {#if mech?.strats && mech.strats[0]?.imageUrl}<img class="max-h-[400px] self-start rounded-md mt-4" style:mask-image={spotlight && mech.strats[0]?.mask} src={mech.strats[0].imageUrl} />{/if}
                        </button>
                        {/key}
                    {/each}
                </div>
            {/if}
        </div>
    {:else}
        <div class="card border border-surface-800 mb-8 p-4">
            <button class="group text-start w-full lg:w-1/2" onclick={() => openImageModal(phase)}>
                <div class="flex flex-row justify-between capitalize font-bold text-2xl mb-0">
                    {phase.phaseName}
                    <span class="not-group-hover:hidden"><Expand size={16}/></span>
                </div>
                {#if phase?.tag && (stratState[phase.tag] !== getStratMechs(stratName)[phase.tag])}
                    <Tooltip
                        positioning={{ placement: 'top' }}
                        triggerBase="underline"
                        contentBase="card bg-surface-800 p-4"
                        classes="ml-2 z-9999"
                        openDelay={200}
                        arrow
                        arrowBackground="!bg-surface-800"

                    >
                        {#snippet trigger()}<div class="text-warning-500"><TriangleAlert size={32}/></div>{/snippet}
                        {#snippet content()}This mechanic differs from what's in the selected guide.{/snippet}
                    </Tooltip>
                {/if}
                {#if phase?.description}<div class="text-lg whitespace-pre-wrap">{phase.description}</div>{/if}
                {#if phase?.imageUrl}<img class="max-h-[400px] self-start rounded-md mt-4" style:mask-image={spotlight && phase.mask} src={phase.imageUrl} />{/if}
            </button>
        </div>
    {/if}
{/each}