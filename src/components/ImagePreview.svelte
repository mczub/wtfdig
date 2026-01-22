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
						{@html phase.description}
					</div>{/if}
			</div>
			<X onclick={closeImage} class="cursor-pointer" />
		</header>
		<div class="flex-1 min-h-0 flex flex-col">
			<div class="font-bold text-base lg:text-xl shrink-0">{mech ? mech?.mechanic : ''}</div>
			<div class="whitespace-pre-wrap text-xs lg:text-lg shrink-0">
				{@html mech ? mech?.description : ''}
			</div>
			<div class="flex items-center gap-1 text-xs lg:text-lg mb-0 shrink-0">
				{#if mech?.strats && mech.strats.length > 0}
					{#if mech.strats[0].toggleKey}
						<span class="shrink-0">⏩</span>
					{:else if role}
						<img
							src={`/icons/${role.toLowerCase()}.png`}
							alt={role}
							class="w-4 h-4 lg:w-6 lg:h-6 shrink-0 mt-1"
						/>
					{/if}
				{/if}
				<div class="whitespace-pre-wrap">
					{@html mech ? mech?.strats && mech.strats[0].description : ''}
				</div>
			</div>
			{#if getImageModalUrl()}
				<div class="relative mt-4 flex-1 min-h-0 grid place-items-center" style="height: 100%;">
					<div class="relative max-w-full max-h-full" style="display: grid; place-items: center;">
						<img
							class="rounded-md max-w-full max-h-full object-contain"
							style="grid-area: 1/1;"
							src={getImageModalUrl()}
							alt={mech?.mechanic || phase?.phaseName || 'Strategy image'}
						/>
						{#if spotlight && getImageMask()}
							<div class="pointer-events-none" style="grid-area: 1/1; width: 100%; height: 100%;">
								<SpotlightOverlay mask={getImageMask()} />
							</div>
						{/if}
					</div>
				</div>
			{/if}
		</div>
	{/snippet}
</Modal>
