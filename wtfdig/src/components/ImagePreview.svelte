<svelte:options customElement={{shadow: 'none'}} ></svelte:options>
<script lang="ts">
    import { Modal } from '@skeletonlabs/skeleton-svelte';
    import { X } from '@lucide/svelte/icons';

    let { phase, mech = null, spotlight, imageOpenState = $bindable() } = $props();

	function openImageModal() {
		imageOpenState = true;
	}

	function closeImage() {
		imageOpenState = false;
	}

    function getImageModalUrl() {
        if (phase && !mech) {
            return phase.imageUrl;
        }
        if (mech?.imageUrl) {
            return mech.imageUrl;
        }
        if (mech?.strats) {
            return mech?.strats[0]?.imageUrl;
        }
        return '';
    }

    function getImageMask() {
        if (phase && !mech) {
            return phase.mask;
        }
        if (mech?.strats) {
            return mech.strats[0]?.mask;
        }
        return '';
    }
</script>

<Modal
  open={imageOpenState}
  onOpenChange={(e) => (imageOpenState = e.open)}
  contentBase="card bg-surface-100-900 p-4 space-y-4 shadow-xl flex flex-col border border-surface-600"
  backdropClasses="backdrop-blur-sm"
  zIndex={"3000"}
>
	{#snippet content()}
		<header class="flex justify-between">
            <div>
                <div class="font-bold text-lg lg:text-2xl">{phase ? phase?.phaseName : ''}</div>
                {#if phase?.description}<div class="text-xs lg:text-base whitespace-pre-wrap">{ phase.description}</div>{/if}
                
            </div>
			<X onclick={closeImage} />
		</header>
		<div>
            <div class="font-bold text-base lg:text-xl">{mech ? mech?.mechanic : ''}</div>
			<div class="whitespace-pre-wrap text-xs lg:text-lg">{mech ? mech?.description : ''}</div>
            <div class="whitespace-pre-wrap text-xs lg:text-lg mb-0">{mech ? mech?.strats && mech.strats[0].description : ''}</div>
			<img class="rounded-md mt-4" src={getImageModalUrl()} style:mask-image={spotlight && getImageMask()} />
		</div>
	{/snippet}
</Modal>