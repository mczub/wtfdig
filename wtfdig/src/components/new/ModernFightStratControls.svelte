<script lang="ts">
	import { Segment, Switch, Popover } from '@skeletonlabs/skeleton-svelte';
	import type { Role, StratOption, FightToggleState } from '$lib/types';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import Settings from '@lucide/svelte/icons/settings';

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
		setSpotlight
	}: Props = $props();

	let settingsOpen = $state(false);

	let stratLabel = $derived(stratOptions.find((o) => o.value === stratName)?.label ?? stratName);
	let toggleLabels = $derived(
		toggles
			.map((t) => t.options.find((o) => o.value === t.value)?.label)
			.filter(Boolean)
			.join(' | ')
	);
	let displayTitle = $derived(`${title}`);
</script>

<div
	class="z-10 w-full bg-surface-100-900 border-b border-surface-200-800 shadow-md backdrop-blur-md bg-opacity-90 relative lg:sticky lg:top-0"
>
	<div class="container mx-auto px-4 py-2 relative">
		<div class="flex flex-wrap items-center gap-4 w-full">
			<!-- Fight Title -->
			<div class="font-bold text-lg text-surface-50 mr-2 block order-1">
				{displayTitle}
			</div>

			<!-- Role & Party Selector -->
			<div class="flex flex-wrap items-center gap-4 order-1 pr-10 lg:pr-0">
				<div class="flex items-center gap-2">
					<span class="text-sm font-semibold text-surface-600-400 uppercase tracking-wider"
						>Role</span
					>
					<Segment
						name="role"
						value={role}
						onValueChange={(e) => setRole(e.value as Role)}
						classes="h-12 rounded-none"
					>
						<Segment.Item value="Tank" classes="text-sm px-3 py-1 rounded-none">T</Segment.Item>
						<Segment.Item value="Healer" classes="text-sm px-3 py-1 rounded-none">H</Segment.Item>
						<Segment.Item value="Melee" classes="text-sm px-3 py-1 rounded-none">M</Segment.Item>
						<Segment.Item value="Ranged" classes="text-sm px-3 py-1 rounded-none">R</Segment.Item>
					</Segment>
				</div>

				<div class="flex items-center gap-2">
					<span class="text-sm font-semibold text-surface-600-400 uppercase tracking-wider"
						>Group</span
					>
					<Segment
						name="party"
						value={party?.toString()}
						onValueChange={(e) => setParty(parseInt(e.value!))}
						classes="h-12 rounded-none"
					>
						<Segment.Item value="1" classes="text-sm px-3 py-1 rounded-none">1</Segment.Item>
						<Segment.Item value="2" classes="text-sm px-3 py-1 rounded-none">2</Segment.Item>
					</Segment>
				</div>
			</div>

			<!-- Settings / Toggles Popover -->
			<div class="flex items-center absolute top-2 right-4 lg:static lg:ml-auto lg:order-3">
				<Popover
					zIndex="60"
					open={settingsOpen}
					onOpenChange={(e) => (settingsOpen = e.open)}
					positioning={{ placement: 'bottom-end' }}
					triggerBase="btn-icon btn-icon-sm preset-tonal-surface rounded-none"
					contentBase="card bg-surface-200-800 p-4 space-y-4 shadow-xl min-w-[280px] rounded-none"
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

			<!-- Strat Stuff (Selector + Toggles) -->
			<div
				class="flex flex-wrap items-center gap-4 border-surface-600-400 w-full lg:w-auto order-3 lg:order-2 border-t pt-2 lg:border-t-0 lg:pt-0 lg:border-l lg:pl-4"
			>
				<!-- Strat Selector -->
				<div class="flex items-center gap-2">
					<span class="text-sm font-semibold text-surface-600-400 uppercase tracking-wider"
						>Strat</span
					>
					<Segment
						name="stratName"
						value={stratName}
						onValueChange={(e) => onSelectStrat(e.value!)}
						classes="h-12 rounded-none"
					>
						{#each stratOptions as option}
							<Segment.Item value={option.value} classes="text-sm px-3 py-1 rounded-none"
								>{option.label}</Segment.Item
							>
						{/each}
					</Segment>
				</div>

				<!-- Individual Strat Toggles -->
				{#if stratName && toggles?.length}
					{#each toggles as toggle}
						<div class="flex items-center gap-2">
							<span class="text-sm font-semibold text-surface-600-400 uppercase tracking-wider"
								>{toggle.label}</span
							>
							<Segment
								name={toggle.key}
								value={toggle.value}
								onValueChange={(e) => onToggleChange(toggle.key, e.value!)}
								classes="h-12 rounded-none"
							>
								{#each toggle.options as option}
									<Segment.Item value={option.value} classes="text-sm px-2 py-1 rounded-none"
										>{option.label}</Segment.Item
									>
								{/each}
							</Segment>
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</div>
</div>
