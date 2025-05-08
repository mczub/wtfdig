<svelte:options customElement={{shadow: 'none'}} ></svelte:options>
<script lang="ts">
    import { Tooltip } from '@skeletonlabs/skeleton-svelte';
    import { CircleAlert, Divide, Expand, TriangleAlert } from '@lucide/svelte/icons';
	import ImagePreview from './ImagePreview.svelte';
	import type { TimelineItem } from '$lib/types';

    interface Props {
		timeline: TimelineItem[];
        [propName: string]: any;
	}

    let { strat, stratName, stratState, getStratMechs, individualStrat, spotlight, alignment }: Props = $props();
    
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
</script>

<ImagePreview 
    bind:imageOpenState={imageOpenState}
    mech={imageModalProps.mech}
    phase={imageModalProps.phase}
    spotlight={spotlight}
/>

{#if strat?.notes}
    <div class="card preset-outlined-primary-500 p-2 flex flex-row space-x-2 my-2">
        <CircleAlert size={32} />
        <div class="whitespace-pre-wrap text-lg mb-0">{strat.notes}</div>
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