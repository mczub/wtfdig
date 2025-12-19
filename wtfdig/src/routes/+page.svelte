<script lang="ts">
	import { base } from '$app/paths';
	import { slide } from 'svelte/transition';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import { Separator } from '$lib/components/ui/separator';

	let openState = $state({
		'74': true,
		'73': true,
		ultimates: true,
		'72': false,
		'71': true,
		'70': false
	});

	function toggle(key: keyof typeof openState) {
		openState[key] = !openState[key];
	}
</script>

<div class="container grid grow mx-auto my-6">
	<div class="grid place-content-center">
		<div class="flex justify-center lg:col-span-2">
			<img width="300px" src="{base}/wtfdig-icon-1024.png" alt="WTFDIG Icon" />
		</div>
		<div class="grid lg:grid-cols-2 gap-4 max-w-full">
			<div class="grid gap-4 content-start min-w-[330px]">
				<div
					class="card flex flex-col preset-filled-surface-100-900 border-[1px] border-surface-200-800 p-4 text-center gap-4"
				>
					<button class="flex w-full items-center justify-between" onclick={() => toggle('74')}>
						<div class="text-lg font-bold">Patch 7.4</div>
						<ChevronDown
							class="h-4 w-4 opacity-50 transition-transform duration-200 {openState['74']
								? 'rotate-180'
								: ''}"
						/>
					</button>
					{#if openState['74']}
						<div transition:slide class="flex flex-col gap-4">
							<div class="flex flex-col">
								<div class="text-left text-sm font-semibold mb-3">Extreme</div>
								<div class="flex flex-col gap-4">
									<a
										href="{base}/74/ex7"
										class="btn preset-tonal-secondary border border-secondary-500"
										>Hell on Rails (Extreme)</a
									>
								</div>
							</div>
						</div>
					{/if}
				</div>
				<div
					class="card flex flex-col preset-filled-surface-100-900 border-[1px] border-surface-200-800 p-4 text-center gap-4"
				>
					<button class="flex w-full items-center justify-between" onclick={() => toggle('73')}>
						<div class="text-lg font-bold">Patch 7.3</div>
						<ChevronDown
							class="h-4 w-4 opacity-50 transition-transform duration-200 {openState['73']
								? 'rotate-180'
								: ''}"
						/>
					</button>
					{#if openState['73']}
						<div transition:slide class="flex flex-col gap-4">
							<div class="flex flex-col">
								<div class="text-left text-sm font-semibold mb-3">Extreme</div>
								<div class="flex flex-col gap-4">
									<a
										href="{base}/73/ex6"
										class="btn preset-tonal-secondary border border-secondary-500"
										>Windward Wilds (Extreme)</a
									>
									<a
										href="{base}/73/ex5"
										class="btn preset-tonal-secondary border border-secondary-500"
										>Necron's Embrace (Extreme)</a
									>
								</div>
							</div>
						</div>
					{/if}
				</div>
				<div
					class="card flex flex-col preset-filled-surface-100-900 border-[1px] border-surface-200-800 p-4 text-center gap-4"
				>
					<button
						class="flex w-full items-center justify-between"
						onclick={() => toggle('ultimates')}
					>
						<div class="text-lg font-bold">Ultimates</div>
						<ChevronDown
							class="h-4 w-4 opacity-50 transition-transform duration-200 {openState['ultimates']
								? 'rotate-180'
								: ''}"
						/>
					</button>
					{#if openState['ultimates']}
						<div transition:slide class="flex flex-col gap-4">
							<a
								href="{base}/ultimates/ucob"
								class="btn preset-tonal-secondary border border-secondary-500"
								>The Unending Coil of Bahamut (Ultimate)</a
							>
						</div>
					{/if}
				</div>
			</div>
			<div class="grid gap-4 content-start min-w-[330px]">
				<div
					class="card flex flex-col preset-filled-surface-100-900 border-[1px] border-surface-200-800 p-4 text-center gap-4"
				>
					<button class="flex w-full items-center justify-between" onclick={() => toggle('72')}>
						<div class="text-lg font-bold">Patch 7.2</div>
						<ChevronDown
							class="h-4 w-4 opacity-50 transition-transform duration-200 {openState['72']
								? 'rotate-180'
								: ''}"
						/>
					</button>
					{#if openState['72']}
						<div transition:slide class="flex flex-col gap-4">
							<div class="flex flex-col">
								<div class="text-left text-sm font-semibold mb-3">Savage</div>
								<div class="flex flex-col gap-4">
									<a
										href="{base}/72/m5s"
										class="btn preset-tonal-secondary border border-secondary-500"
										>AAC Cruiserweight M1 (Savage)</a
									>
									<a
										href="{base}/72/m6s"
										class="btn preset-tonal-secondary border border-secondary-500"
										>AAC Cruiserweight M2 (Savage)</a
									>
									<a
										href="{base}/72/m7s"
										class="btn preset-tonal-secondary border border-secondary-500"
										>AAC Cruiserweight M3 (Savage)</a
									>
									<a
										href="{base}/72/m8s"
										class="btn preset-tonal-secondary border border-secondary-500"
										>AAC Cruiserweight M4 (Savage)</a
									>
								</div>
							</div>
							<div class="flex flex-col">
								<div class="text-left text-sm font-semibold mb-3">Extreme</div>
								<div class="flex flex-col gap-4">
									<a
										href="{base}/72/ex4"
										class="btn preset-tonal-secondary border border-secondary-500"
										>Recollection (Extreme)</a
									>
								</div>
							</div>
						</div>
					{/if}
				</div>
				<div
					class="card flex flex-col preset-filled-surface-100-900 border-[1px] border-surface-200-800 p-4 text-center gap-4"
				>
					<button class="flex w-full items-center justify-between" onclick={() => toggle('71')}>
						<div class="text-lg font-bold">Patch 7.1</div>
						<ChevronDown
							class="h-4 w-4 opacity-50 transition-transform duration-200 {openState['71']
								? 'rotate-180'
								: ''}"
						/>
					</button>
					{#if openState['71']}
						<div transition:slide class="flex flex-col gap-4">
							<div class="flex flex-col">
								<div class="text-left text-sm font-semibold mb-3">Chaotic</div>
								<div class="flex flex-col gap-4">
									<a
										href="{base}/71/chaotic"
										class="btn preset-tonal-secondary border border-secondary-500"
										>The Cloud of Darkness (Chaotic)</a
									>
								</div>
							</div>
						</div>
					{/if}
				</div>
				<div
					class="card flex flex-col preset-filled-surface-100-900 border-[1px] border-surface-200-800 p-4 text-center gap-4"
				>
					<button class="flex w-full items-center justify-between" onclick={() => toggle('70')}>
						<div class="text-lg font-bold">Patch 7.0</div>
						<ChevronDown
							class="h-4 w-4 opacity-50 transition-transform duration-200 {openState['70']
								? 'rotate-180'
								: ''}"
						/>
					</button>
					{#if openState['70']}
						<div transition:slide class="flex flex-col gap-4">
							<div class="flex flex-col">
								<div class="text-left text-sm font-semibold mb-3">Savage</div>
								<div class="flex flex-col gap-4">
									<a
										href="{base}/70/m4s"
										class="btn preset-tonal-secondary border border-secondary-500"
										>AAC Light-Heavyweight M4 (Savage)</a
									>
								</div>
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
