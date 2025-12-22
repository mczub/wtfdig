<!-- @ts-nocheck -->
<svelte:options customElement={{ shadow: 'none' }} />

<script lang="ts">
	// @ts-nocheck
	import { Modal } from '$lib/components/ui';
	import { X } from '@lucide/svelte/icons';
	import SpotlightOverlay from './SpotlightOverlay.svelte';

	let { phase, mech = null, spotlight, imageOpenState = $bindable(), role = null } = $props();

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
		return null;
	}
</script>

<Modal
	open={imageOpenState}
	onOpenChange={(e) => (imageOpenState = e.open)}
	contentBase="bg-surface-100 dark:bg-surface-900 p-4 space-y-4 shadow-xl flex flex-col border border-surface-600 w-max h-max max-w-[95vw] max-h-[95vh]"
	backdropClasses="backdrop-blur-sm"
	zIndex={'3000'}
>
	{#snippet content()}
		<header class="flex justify-between shrink-0">
			<div>
				<div class="font-bold text-lg lg:text-2xl">{phase ? phase?.phaseName : ''}</div>
				{#if phase?.description}<div class="text-xs lg:text-base whitespace-pre-wrap">
						{phase.description}
					</div>{/if}
			</div>
			<X onclick={closeImage} class="cursor-pointer" />
		</header>
		<div class="min-h-0 flex flex-col overflow-hidden">
			<div class="font-bold text-base lg:text-xl shrink-0">{mech ? mech?.mechanic : ''}</div>
			<div class="whitespace-pre-wrap text-xs lg:text-lg shrink-0">
				{@html mech ? mech?.description : ''}
			</div>
			<div class="flex items-center gap-1 text-xs lg:text-lg mb-0 shrink-0">
				{#if role && mech?.strats && mech.strats.length > 0}
					<img
						src={`/icons/${role.toLowerCase()}.png`}
						alt={role}
						class="w-4 h-4 lg:w-6 lg:h-6 shrink-0 mt-1"
					/>
				{/if}
				<div class="whitespace-pre-wrap">
					{mech ? mech?.strats && mech.strats[0].description : ''}
				</div>
			</div>
			<div class="relative mt-4 flex-1 min-h-0 flex justify-center items-start">
				<div class="relative w-fit h-fit max-h-full">
					<img
						class="rounded-md block max-w-full max-h-full"
						src={getImageModalUrl()}
						alt={mech?.mechanic || phase?.phaseName || 'Strategy image'}
					/>
					{#if spotlight && getImageMask()}
						<SpotlightOverlay mask={getImageMask()} />
					{/if}
				</div>
			</div>
		</div>
	{/snippet}
</Modal>
