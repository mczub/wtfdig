<!-- @ts-nocheck -->
<script lang="ts">
	// @ts-nocheck
	import { Segment, Switch, Popover, Modal } from '$lib/components/ui';
	import type { Role, StratOption, FightToggleState } from '$lib/types';
	import { formatRoleAbbreviation, buildFightOptionsString } from '$lib/utils';
	import TriangleAlert from '@lucide/svelte/icons/triangle-alert';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import ChevronUp from '@lucide/svelte/icons/chevron-up';
	import Settings from '@lucide/svelte/icons/settings';
	import Fullscreen from '@lucide/svelte/icons/fullscreen';
	import X from '@lucide/svelte/icons/x';
	import * as Select from '$lib/components/ui/select';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	interface Props {
		title: string;
		strats: Strat[];
		stratName: string | undefined;
		stratOptions: StratOption[];
		onSelectStrat: (value: string) => void;
		stratState: Record<string, string | null>;
		toggles: FightToggleState[];
		onToggleChange: (key: string, value: string) => void;
		currentStratDefaults?: Record<string, string>;
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
		onOpenCheatsheet?: () => void;
		tabTags?: Record<string, string[]> | null;
		currentTab?: string;
	}

	let {
		title,
		strats,
		stratName,
		stratOptions = [],
		onSelectStrat,
		stratState,
		toggles = [],
		onToggleChange,
		currentStratDefaults,
		role,
		setRole,
		party,
		setParty,
		spotlight,
		setSpotlight,
		additionalResources,
		onOpenCheatsheet,
		tabTags = null,
		currentTab
	}: Props = $props();

	let settingsOpen = $state(false);
	let otherOpenState = $state(false);
	let stratContainer: HTMLElement | undefined = $state();
	let roleContainer: HTMLElement | undefined = $state();

	// Collapsible sticky header state
	let navElement: HTMLElement | undefined = $state();
	let isCollapsed = $state(false);
	let userExpandedManually = $state(false);
	let isSticky = $state(false);
	let isMultiRow = $state(false);

	// Check if any toggle has a warning (differs from strat defaults)
	let hasAnyWarning = $derived(
		currentStratDefaults &&
			toggles?.some(
				(toggle) =>
					currentStratDefaults[toggle.key] && toggle.value !== currentStratDefaults[toggle.key]
			)
	);

	let stratLabel = $derived(stratOptions.find((o) => o.value === stratName)?.label ?? stratName);
	let fightOptionsString = $derived(
		buildFightOptionsString({ stratName, stratState, toggles, strats })
	);
	let selectedStratOption = $derived(
		stratOptions.find((o) => o.value === stratName) ?? { label: null }
	);
	let toggleLabels = $derived(
		toggles
			.map((t) => t.options.find((o) => o.value === t.value)?.label)
			.filter(Boolean)
			.join(' | ')
	);
	let displayTitle = $derived(`${title}`);

	// Role label for collapsed view
	let roleLabel = $derived(role ? { Tank: 'T', Healer: 'H', Melee: 'M', Ranged: 'R' }[role] : '');

	function closeOther() {
		otherOpenState = false;
	}

	function toggleCollapsed() {
		isCollapsed = !isCollapsed;
		userExpandedManually = !isCollapsed;
	}

	// Check if nav would be multi-row (content wraps)
	// Using width-based heuristic - at wider screens content fits in one row
	function checkMultiRow() {
		// Content wraps at widths below ~1440px typically, or always consider it multi-row
		// since the collapsed view is useful even on wide screens for cleaner look
		//isMultiRow = true; // Always collapse when sticky - user can expand if needed
		if (!isCollapsed) {
			isMultiRow = navElement.getBoundingClientRect().height > 60;
		}
	}

	onMount(() => {
		if (!browser) return;

		// Calculate the nav's absolute position in the document ONCE at mount time
		let stickyThreshold = 0;
		let initialized = false;

		function setStickyThreshold() {
			const headerHeight = navElement.previousElementSibling?.getBoundingClientRect().height ?? 0;
			const rect = navElement.getBoundingClientRect();
			stickyThreshold = headerHeight + rect.height;
		}

		// Wait for layout to settle, then calculate threshold
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				if (navElement) {
					setStickyThreshold();
					initialized = true;
					checkMultiRow();
				}
			});
		});

		// Use scroll event to detect when nav would be sticky
		function checkIfSticky() {
			if (!navElement || !initialized) return;

			// Don't do collapse logic on narrow screens (< lg breakpoint) - header isn't sticky there
			if (window.innerWidth < 1024) {
				if (isCollapsed) {
					isCollapsed = false;
					isSticky = false;
					userExpandedManually = false;
				}
				return;
			}

			const scrollY = window.scrollY;

			// Use hysteresis to prevent jitter at the boundary
			// When expanded, collapse at the threshold
			// When collapsed, only expand when scrolled above the threshold (with buffer)
			const collapsePoint = stickyThreshold + 1;
			const headerHeight = navElement.previousElementSibling?.getBoundingClientRect().height ?? 0;
			const expandPoint = Math.max(0, stickyThreshold - headerHeight);

			if (!isCollapsed && navElement.getBoundingClientRect().height > 60) {
				// Currently expanded - check if we should collapse
				if (scrollY >= collapsePoint && !userExpandedManually) {
					isSticky = true;
					isCollapsed = true;
				}
			} else {
				// Currently collapsed - check if we should expand
				if (scrollY < headerHeight / 2) {
					isSticky = false;
					isCollapsed = false;
					userExpandedManually = false;
				}
			}
		}

		$effect(() => {
			role;
			party;
			stratName;
			stratOptions;
			checkMultiRow();
			setStickyThreshold();
			checkIfSticky();
		});

		// Throttled scroll handler
		let ticking = false;
		function onScroll() {
			if (!ticking) {
				requestAnimationFrame(() => {
					checkIfSticky();
					ticking = false;
				});
				ticking = true;
			}
		}

		// Update multi-row on window resize (not element resize to avoid loops)
		function onResize() {
			checkMultiRow();
		}

		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onResize, { passive: true });

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onResize);
		};
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

<div
	bind:this={navElement}
	class="z-10 w-full bg-surface-100-900 border-b border-surface-200-800 shadow-md backdrop-blur-md bg-opacity-90 relative lg:sticky lg:top-0 transition-all duration-300 overflow-hidden"
>
	<div class="container mx-auto px-4 py-2 relative">
		<!-- Collapsed View (shown when sticky and collapsed) -->
		{#if isCollapsed}
			<div class="w-full flex flex-row items-center justify-between gap-4 py-1">
				<div class="flex items-center gap-4 flex-wrap">
					<!-- Title -->
					<div class="font-bold text-lg text-surface-50">
						{displayTitle}
					</div>

					<!-- Compact summary: Role, Group, Strat -->
					<div class="flex items-center gap-2 text-surface-200">
						{#if fightOptionsString}
							<span class="text-lg font-medium text-surface-200">{fightOptionsString}</span>
						{/if}
						{#if hasAnyWarning}
							<Tooltip.Provider>
								<Tooltip.Root>
									<Tooltip.Trigger>
										<div class="text-warning-500">
											<TriangleAlert size={16} />
										</div>
									</Tooltip.Trigger>
									<Tooltip.Content
										class="bg-surface-800 text-sm p-2 rounded shadow-lg border border-surface-700 text-popover-foreground"
										arrowClasses="bg-surface-800"
									>
										Some mechanics differ from the selected guide.
										<Tooltip.Arrow class="fill-popover" />
									</Tooltip.Content>
								</Tooltip.Root>
							</Tooltip.Provider>
						{/if}
						{#if role}
							<span class="text-surface-200">•</span>
							<span class="px-2 py-0.5 bg-surface-700 rounded text-base font-medium"
								>{formatRoleAbbreviation(role, party)}</span
							>
						{/if}
					</div>
				</div>

				<!-- Right side: Mech Toggles + Expand button -->
				<div class="flex items-center gap-2">
					<!-- Mech Toggles (compact dropdowns in collapsed view) -->
					<!-- Only show mech toggles whose phaseTag is in the current tab's tags -->
					{#each toggles.filter((t) => t.isMechToggle && (!t.phaseTag || !tabTags || !currentTab || tabTags[currentTab]?.includes(t.phaseTag))) as toggle}
						<div class="flex items-center gap-1">
							<span class="text-xs font-medium text-surface-400 uppercase">{toggle.label}</span>
							<Select.Root
								type="single"
								value={toggle.value}
								onValueChange={(value) => onToggleChange(toggle.key, value)}
							>
								<Select.Trigger size="sm" class="!py-0.5 !px-2 !min-w-0">
									<span class="text-sm"
										>{toggle.options.find((o) => o.value === toggle.value)?.label ?? 'All'}</span
									>
								</Select.Trigger>
								<Select.Content>
									{#each toggle.options as option}
										<Select.Item value={option.value}>
											<span class="text-sm">{option.label}</span>
										</Select.Item>
									{/each}
								</Select.Content>
							</Select.Root>
						</div>
					{/each}

					<!-- Expand button -->
					<button
						type="button"
						class="btn-icon btn-icon-sm preset-tonal-surface hover:preset-tonal-primary transition-colors"
						onclick={toggleCollapsed}
						aria-label="Expand navigation"
					>
						<ChevronDown size={20} />
					</button>
				</div>
			</div>
		{:else}
			<!-- Expanded View (default) -->
			<div class="w-full flex flex-row">
				<div class="flex flex-wrap items-center gap-4 w-full">
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
					</div>

					<!-- Strat Stuff (Selector + Toggles) -->
					<div
						bind:this={stratContainer}
						class="flex flex-wrap items-center gap-4 border-surface-600-400 w-full lg:w-auto order-3 lg:order-2"
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
								classes="h-auto flex-wrap hidden"
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
										{option.label}
									</Segment.Item>
								{/each}
							</Segment>

							<div class="">
								<Select.Root
									type="single"
									bind:value={stratName}
									onValueChange={(e) => onSelectStrat(e)}
								>
									<Select.Trigger size="lg">
										<div class="w-52 flex place-items-start text-base overflow-hidden">
											{#if selectedStratOption.badges}
												{#each selectedStratOption.badges as badge}
													<span class="badge {badge.class} px-2 mr-2">{badge.text}</span>
												{/each}
											{/if}
											{selectedStratOption.label ?? 'Select a strat'}
										</div>
									</Select.Trigger>
									<Select.Content>
										{#each stratOptions as option}
											<Select.Item value={option.value}>
												<div class="text-base">
													{#if option.badges}
														{#each option.badges as badge}
															<span class="badge {badge.class} px-2 mr-2">{badge.text}</span>
														{/each}
													{/if}
													{option.label}
												</div>
											</Select.Item>
										{/each}
									</Select.Content>
								</Select.Root>
							</div>
						</div>

						<!-- Individual Strat Toggles -->
						{#if stratName && toggles?.length}
							{#each toggles as toggle}
								<div class="flex items-center gap-2 flex-wrap">
									<div class="flex items-center gap-1">
										<span
											class="text-sm font-semibold text-surface-600-400 uppercase tracking-wider"
											>{toggle.label}</span
										>
										{#if currentStratDefaults && currentStratDefaults[toggle.key] && toggle.value !== currentStratDefaults[toggle.key]}
											<Tooltip.Provider>
												<Tooltip.Root>
													<Tooltip.Trigger>
														<div class="text-warning-500">
															<TriangleAlert size={16} />
														</div>
													</Tooltip.Trigger>
													<Tooltip.Content
														class="bg-surface-800 text-sm p-2 rounded shadow-lg border border-surface-700 text-popover-foreground"
														arrowClasses="bg-surface-800"
													>
														This mechanic differs from the selected guide.
														<Tooltip.Arrow class={cn('fill-popover')} />
													</Tooltip.Content>
												</Tooltip.Root>
											</Tooltip.Provider>
										{/if}
									</div>
									<Segment
										name={toggle.key}
										value={toggle.value}
										onValueChange={(e) => onToggleChange(toggle.key, e.value!)}
										classes="hidden"
									>
										{#each toggle.options as option}
											<Segment.Item
												value={option.value}
												classes="text-md px-2 py-1"
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

									<div class="">
										<Select.Root
											type="single"
											value={toggle.value}
											onValueChange={(value) => onToggleChange(toggle.key, value)}
										>
											<Select.Trigger size="lg">
												<div class="w-full text-base text-left">
													<div class="flex items-center">
														{#if toggle.options.find((o) => o.value === toggle.value)?.badges}
															{#each toggle.options.find((o) => o.value === toggle.value)?.badges as badge}
																<span class="badge {badge.class} px-2 mr-2">{badge.text}</span>
															{/each}
														{/if}
														{toggle.options.find((o) => o.value === toggle.value)?.label ??
															'Select'}
													</div>
												</div>
											</Select.Trigger>
											<Select.Content>
												{#each toggle.options as option}
													<Select.Item value={option.value}>
														<div class="text-base flex items-center">
															{#if option.badges}
																{#each option.badges as badge}
																	<span class="badge {badge.class} px-2 mr-2">{badge.text}</span>
																{/each}
															{/if}
															{option.label}
														</div>
													</Select.Item>
												{/each}
											</Select.Content>
										</Select.Root>
									</div>
								</div>
							{/each}
						{/if}
						{#if additionalResources}
							<div class="flex flex-row">
								<button
									type="button"
									class="btn preset-tonal-secondary"
									onclick={() => (otherOpenState = true)}>View other strats</button
								>
							</div>
						{/if}
					</div>
				</div>
				<!-- Cheatsheet and Settings -->
				<div class="justify-self-end self-start items-center mt-1 flex gap-1">
					{#if onOpenCheatsheet}
						<button
							type="button"
							class="btn-icon btn-icon-sm preset-tonal-surface"
							onclick={onOpenCheatsheet}
							aria-label="Open cheatsheet"
						>
							<Fullscreen size={20} />
						</button>
					{/if}
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

				<!-- Collapse button (only show when sticky and multi-row) -->
				{#if isSticky && isMultiRow}
					<button
						type="button"
						class="btn-icon btn-icon-sm preset-tonal-surface hover:preset-tonal-primary transition-colors self-start ml-2 mt-1"
						onclick={toggleCollapsed}
						aria-label="Collapse navigation"
					>
						<ChevronUp size={20} />
					</button>
				{/if}
			</div>
		{/if}
	</div>
</div>
