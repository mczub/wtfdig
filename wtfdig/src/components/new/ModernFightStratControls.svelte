<!-- @ts-nocheck -->
<script lang="ts">
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { Segment, Switch, Popover, Modal } from '$lib/components/ui';
	import type { Role, StratOption, FightToggleState } from '$lib/types';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import Settings from '@lucide/svelte/icons/settings';
	import X from '@lucide/svelte/icons/x';

	interface Props {
		title: string;
		stratName: string | undefined;
		stratOptions: StratOption[];
		onSelectStrat: (value: string) => void;
		toggles: FightToggleState[];
		onToggleChange: (key: string, value: string) => void;
		role: Role | undefined;
		setRole: (value: Role) => void;
		party: number | undefined;
		setParty: (value: number) => void;
		spotlight: boolean;
		setSpotlight: (value: boolean) => void;
		additionalResources?: {
			title: string;
			description?: string;
			links: { text: string; url: string }[];
		};
	}

	let {
		title,
		stratName,
		stratOptions = [],
		onSelectStrat,
		toggles = [],
		onToggleChange,
		role,
		setRole,
		party,
		setParty,
		spotlight,
		setSpotlight,
		additionalResources
	}: Props = $props();

	let settingsOpen = $state(false);
	let otherOpenState = $state(false);
	let isWrapped = $state(false);
	let stratContainer: HTMLElement | undefined = $state();
	let roleContainer: HTMLElement | undefined = $state();

	let stratLabel = $derived(stratOptions.find((o) => o.value === stratName)?.label ?? stratName);
	let toggleLabels = $derived(
		toggles
			.map((t) => t.options.find((o) => o.value === t.value)?.label)
			.filter(Boolean)
			.join(' | ')
	);
	let displayTitle = $derived(`${title}`);

	function closeOther() {
		otherOpenState = false;
	}

	function checkWrap() {
		if (!stratContainer || !roleContainer) return;
		// If strat container is significantly lower than role container, it's wrapped
		isWrapped = stratContainer.offsetTop > roleContainer.offsetTop + 10;
	}

	onMount(() => {
		checkWrap();
		window.addEventListener('resize', checkWrap);
		return () => window.removeEventListener('resize', checkWrap);
	});
</script>

{#if additionalResources}
	<Modal
		open={otherOpenState}
		onOpenChange={(e) => (otherOpenState = e.open)}
		contentBase="bg-surface-100 dark:bg-surface-900 p-4 space-y-4 shadow-xl flex flex-col border border-surface-600 lg:min-w-[600px]"
		backdropClasses="backdrop-blur-sm"
		zIndex={'3000'}
	>
		{#snippet content()}
			<header class="flex justify-between">
				<div>
					<h3 class="h3">{additionalResources.title}</h3>
				</div>
				<X onclick={closeOther} class="cursor-pointer" />
			</header>
			<div>
				{#if additionalResources.description}
					<div class="card preset-outlined-warning-500 gap-4 p-4 mb-2">
						<p>{@html additionalResources.description}</p>
					</div>
				{/if}
				<div>
					{#each additionalResources.links as link}
						<div>
							<a
								class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline gap-1"
								target="_blank"
								rel="noopener noreferrer"
								href={link.url}>{link.text}</a
							>
						</div>
					{/each}
				</div>
			</div>
		{/snippet}
	</Modal>
{/if}

{#snippet settingsPopover()}
	<!-- Settings / Toggles Popover -->
	<div class="absolute right-4">
		<Popover
			zIndex="60"
			open={settingsOpen}
			onOpenChange={(e) => (settingsOpen = e.open)}
			positioning={{ placement: 'bottom-end' }}
			triggerBase="btn-icon btn-icon-sm preset-tonal-surface"
			contentBase="bg-surface-200 dark:bg-surface-800 p-4 space-y-4 shadow-xl min-w-[280px]"
		>
			{#snippet trigger()}
				<Settings size={20} />
			{/snippet}
			{#snippet content()}
				<div class="space-y-4">
					<div class="flex justify-between items-center">
						<span class="font-medium">Highlight my spots</span>
						<Switch
							name="spotlight-toggle"
							checked={spotlight}
							onCheckedChange={(e) => setSpotlight(e.checked)}
						/>
					</div>
				</div>
			{/snippet}
		</Popover>
	</div>
{/snippet}
<div
	class="z-10 w-full bg-surface-100-900 border-b border-surface-200-800 shadow-md backdrop-blur-md bg-opacity-90 relative lg:sticky lg:top-0"
>
	<div class="container mx-auto px-4 py-2 relative">
		<div class="flex flex-wrap items-center gap-2 w-full">
			<!-- Fight Title -->
			<div class="font-bold text-lg text-surface-50 mr-2 block order-1">
				{displayTitle}
			</div>

			<!-- Role & Party Selector -->
			<div class="flex flex-wrap items-center gap-4 order-1" bind:this={roleContainer}>
				<div class="flex items-center relative">
					<span class="text-sm font-semibold text-surface-600-400 uppercase tracking-wider mr-2"
						>Role</span
					>
					<Segment
						name="role"
						value={role}
						onValueChange={(e) => setRole(e.value as Role)}
						classes=""
					>
						<Segment.Item value="Tank" classes="text-md px-3 py-1">T</Segment.Item>
						<Segment.Item value="Healer" classes="text-md px-3 py-1">H</Segment.Item>
						<Segment.Item value="Melee" classes="text-md px-3 py-1">M</Segment.Item>
						<Segment.Item value="Ranged" classes="text-md px-3 py-1">R</Segment.Item>
					</Segment>
				</div>

				<div class="flex items-center">
					<span class="text-sm font-semibold text-surface-600-400 uppercase tracking-wider mr-2"
						>Group</span
					>
					<Segment
						name="party"
						value={party?.toString()}
						onValueChange={(e) => setParty(parseInt(e.value!))}
						classes=""
					>
						<Segment.Item value="1" classes="text-md px-3 py-1">1</Segment.Item>
						<Segment.Item value="2" classes="text-md px-3 py-1">2</Segment.Item>
					</Segment>
				</div>
				{#if isWrapped}
					{@render settingsPopover()}
				{/if}
			</div>

			<!-- Strat Stuff (Selector + Toggles) -->
			<div
				bind:this={stratContainer}
				class="flex flex-wrap items-center gap-4 border-surface-600-400 w-full lg:w-auto order-3 lg:order-2 {isWrapped
					? 'border-t pt-2'
					: 'border-l pl-4'}"
			>
				<!-- Strat Selector -->
				<div class="flex items-center">
					<span class="text-sm font-semibold text-surface-600-400 uppercase tracking-wider mr-2"
						>Strat</span
					>
					<Segment
						name="stratName"
						value={stratName}
						onValueChange={(e) => onSelectStrat(e.value!)}
						classes="h-auto flex-wrap"
					>
						{#each stratOptions as option}
							<Segment.Item
								value={option.value}
								classes="text-md px-3 py-1"
								labelClasses="flex items-center"
							>
								{#if option.badges}
									{#each option.badges as badge}
										<span class="badge {badge.class} px-2 mr-2">{badge.text}</span>
									{/each}
								{/if}
								{option.label}</Segment.Item
							>
						{/each}
					</Segment>
				</div>

				{#if additionalResources}
					<div class="flex flex-row">
						<button
							type="button"
							class="btn preset-tonal-secondary"
							onclick={() => (otherOpenState = true)}>View other strats</button
						>
					</div>
				{/if}

				<!-- Individual Strat Toggles -->
				{#if stratName && toggles?.length}
					{#each toggles as toggle}
						<div class="flex items-center">
							<span class="text-sm font-semibold text-surface-600-400 uppercase tracking-wider mr-2"
								>{toggle.label}</span
							>
							<Segment
								name={toggle.key}
								value={toggle.value}
								onValueChange={(e) => onToggleChange(toggle.key, e.value!)}
								classes=""
							>
								{#each toggle.options as option}
									<Segment.Item value={option.value} classes="text-md px-2 py-1"
										>{option.label}</Segment.Item
									>
								{/each}
							</Segment>
						</div>
					{/each}
				{/if}
				{#if !isWrapped}
					{@render settingsPopover()}
				{/if}
			</div>
		</div>
		{#if !role || !party || !stratName}
			<div
				class="absolute -bottom-14 left-0 z-50 bg-surface-900 border border-primary-500 text-surface-50 px-4 py-2 rounded-xl shadow-xl"
			>
				<div
					class="absolute -top-1.5 left-8 w-3 h-3 bg-surface-900 border-t border-l border-primary-500 transform rotate-45"
				></div>
				<span class="font-bold text-lg whitespace-nowrap">Select your Role, Group & Strat</span>
			</div>
		{/if}
	</div>
</div>
