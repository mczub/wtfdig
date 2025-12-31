<!-- @ts-nocheck -->

<script lang="ts">
	// @ts-nocheck
	import { Modal, Switch, Tabs, Tooltip } from '$lib/components/ui';
	import {
		ArrowRight,
		Check,
		ChevronLeft,
		ChevronRight,
		Clock,
		Expand,
		Eye,
		EyeOff,
		Grid2x2,
		Grid3x3,
		Play,
		RectangleVertical,
		Settings,
		Shield,
		Siren,
		Skull,
		TriangleAlert,
		Type,
		Wrench,
		X
	} from '@lucide/svelte/icons';
	import ImagePreview from '../ImagePreview.svelte';
	import SpotlightOverlay from '../SpotlightOverlay.svelte';
	import type { TimelineItem, SpotlightMask, Role, Alignment, PhaseStrats } from '$lib/types';
	import { msToTime } from '$lib/utils';
	import { browser } from '$app/environment';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	interface Props {
		title: string;
		cheatsheetOpenState?: boolean;
		timeline: TimelineItem[];
		individualStrat: PhaseStrats[] | string;
		stratName?: string;
		stratState: Record<string, string | null>;
		getStratMechs: (stratName: string) => Record<string, any>;
		spotlight: boolean;
		alignment: Alignment;
		tabTags?: Record<string, string[]> | null;
		role?: Role | null;
		splitTimeline?: boolean;
		useEvenTimelineSpacing?: boolean;
		innerWidth?: number;
		innerHeight?: number;
		fightKey?: string;
	}

	let {
		title,
		cheatsheetOpenState = $bindable(),
		timeline,
		individualStrat,
		stratName,
		stratState,
		getStratMechs,
		spotlight,
		alignment,
		tabTags = null,
		role = null,
		splitTimeline = false,
		useEvenTimelineSpacing: useEvenTimelineSpacingProp = false,
		innerWidth = 1920,
		innerHeight = 1080,
		fightKey = 'default'
	}: Props = $props();

	// Computed storage key that reacts to fightKey changes
	let storageKey = $derived(`modernCheatsheet_${fightKey}`);

	// Load saved state from localStorage
	function loadSavedState() {
		if (!browser) return null;
		try {
			const key = `modernCheatsheet_${fightKey}`;
			const saved = localStorage.getItem(key);
			return saved ? JSON.parse(saved) : null;
		} catch {
			return null;
		}
	}

	// Save state to localStorage
	function saveState() {
		if (!browser) return;
		const state = {
			showTimeline,
			textMode,
			cellSizes: Object.fromEntries(cellSizes),
			hiddenMechanics: Array.from(hiddenMechanics),
			sidebarOpen,
			splitPhases,
			showSpotlight
		};
		localStorage.setItem(storageKey, JSON.stringify(state));
	}

	// Initialize state from localStorage or defaults
	const savedState = loadSavedState();

	let showTimeline = $state(savedState?.showTimeline ?? true);
	// Text display mode: 'all' = show all text, 'role' = only role-based text, 'image' = no text
	let textMode = $state<'all' | 'role' | 'image'>(savedState?.textMode ?? 'all');
	let sidebarOpen = $state(savedState?.sidebarOpen ?? true);
	let splitPhases = $state(savedState?.splitPhases ?? true); // true = split into tabs, false = show all
	let showSpotlight = $state(savedState?.showSpotlight ?? true); // local override for spotlight visibility

	// Confirmation dialog state
	let resetConfirmOpen = $state(false);

	// Reset all settings to defaults
	function resetSettings() {
		showTimeline = true;
		textMode = 'all';
		splitPhases = true;
		showSpotlight = true;
		cellSizes = new Map();
		hiddenMechanics = new Set();
		resetConfirmOpen = false;
	}

	// Map of mechanic keys to their sizes: 'small' (1x1) or 'large' (2x2)
	let cellSizes = $state<Map<string, 'small' | 'large'>>(
		new Map(savedState?.cellSizes ? Object.entries(savedState.cellSizes) : [])
	);

	// Set of hidden mechanic keys
	let hiddenMechanics = $state<Set<string>>(new Set(savedState?.hiddenMechanics ?? []));

	// Track image dimensions for SpotlightOverlay alignment with object-contain
	let imageDimensions = $state<Map<string, { width: number; height: number }>>(new Map());

	function handleImageLoad(event: Event, imageUrl: string) {
		const img = event.target as HTMLImageElement;
		if (img.naturalWidth && img.naturalHeight) {
			imageDimensions.set(imageUrl, { width: img.naturalWidth, height: img.naturalHeight });
			imageDimensions = new Map(imageDimensions); // Trigger reactivity
		}
	}

	function getImageDimensions(imageUrl: string) {
		return imageDimensions.get(imageUrl);
	}

	// Save state when relevant values change
	$effect(() => {
		showTimeline;
		textMode;
		sidebarOpen;
		splitPhases;
		showSpotlight;
		cellSizes;
		hiddenMechanics;
		saveState();
	});

	// Generate a unique key for a mechanic
	function getMechKey(phase: any, mech?: any, index?: number): string {
		const phaseKey = phase?.tag || phase?.phaseName || 'unknown';
		if (mech) {
			return `${phaseKey}::${mech.mechanic || index}`;
		}
		return phaseKey;
	}

	// Get cell size for a mechanic
	function getCellSize(key: string): 'small' | 'large' {
		return cellSizes.get(key) || 'small';
	}

	// Toggle cell size
	function toggleCellSize(key: string) {
		const current = getCellSize(key);
		cellSizes.set(key, current === 'small' ? 'large' : 'small');
		cellSizes = new Map(cellSizes); // Trigger reactivity
	}

	// Check if a card has any images
	function hasImage(phase: any, mech?: any): boolean {
		// Check for role-based strat image
		if (mech?.strats && mech.strats[0]?.imageUrl) return true;
		// Check for mech-level image
		if (mech?.imageUrl) return true;
		// Check for phase-level image
		if (phase?.imageUrl) return true;
		return false;
	}

	// Check if a mechanic is visible
	function isMechVisible(key: string): boolean {
		return !hiddenMechanics.has(key);
	}

	// Toggle mechanic visibility
	function toggleMechVisibility(key: string) {
		if (hiddenMechanics.has(key)) {
			hiddenMechanics.delete(key);
		} else {
			hiddenMechanics.add(key);
		}
		hiddenMechanics = new Set(hiddenMechanics); // Trigger reactivity
	}

	// Show all mechanics for a phase
	function showAllInPhase(phase: any) {
		if (phase.mechs) {
			phase.mechs.forEach((mech: any, index: number) => {
				const key = getMechKey(phase, mech, index);
				hiddenMechanics.delete(key);
			});
		} else {
			const key = getMechKey(phase);
			hiddenMechanics.delete(key);
		}
		hiddenMechanics = new Set(hiddenMechanics);
	}

	// Hide all mechanics for a phase
	function hideAllInPhase(phase: any) {
		if (phase.mechs) {
			phase.mechs.forEach((mech: any, index: number) => {
				const key = getMechKey(phase, mech, index);
				hiddenMechanics.add(key);
			});
		} else {
			const key = getMechKey(phase);
			hiddenMechanics.add(key);
		}
		hiddenMechanics = new Set(hiddenMechanics);
	}

	// Check if all mechs in a phase are visible
	function isPhaseFullyVisible(phase: any): boolean {
		if (phase.mechs) {
			return phase.mechs.every((mech: any, index: number) => {
				const key = getMechKey(phase, mech, index);
				return !hiddenMechanics.has(key);
			});
		}
		return !hiddenMechanics.has(getMechKey(phase));
	}

	// Timeline positioning logic
	let tab = $state('');

	// Initialize tab when tabTags changes
	$effect(() => {
		if (tabTags && Object.keys(tabTags).length > 0 && !tab) {
			tab = Object.keys(tabTags)[0];
		}
	});

	let useEvenTimelineSpacing = $derived(
		innerHeight <= 1024 || useEvenTimelineSpacingProp || !splitPhases
	);

	function getFightPercentClass(timeInMs: number, index: number): string {
		if (useEvenTimelineSpacing) {
			if (tab && splitTimeline && splitPhases) {
				const filteredTimeline = timeline.filter(
					(item) => item.mechTag && tabTags?.[tab]?.includes(item.mechTag)
				);
				const filteredIndex = filteredTimeline.findIndex((item) => item.startTimeMs === timeInMs);
				if (filteredIndex >= 0) {
					return `${(Math.floor((filteredIndex * 980) / filteredTimeline.length) / 10).toString()}%`;
				}
			}
			return `${(Math.floor((index * 980) / timeline.length) / 10).toString()}%`;
		}
		let enrageTime;
		if (tab && splitTimeline) {
			enrageTime = timeline.find((item) => {
				return item.mechType === 'Enrage' && tabTags?.[tab]?.includes(item.mechTag ?? '');
			})?.startTimeMs;
		} else {
			enrageTime = timeline.find((item) => {
				return item.mechType === 'Enrage';
			})?.startTimeMs;
		}
		if (!enrageTime) return '0';
		return `${(Math.floor((timeInMs * 980) / enrageTime) / 10).toString()}%`;
	}

	let timelineFilters = $state({
		mechs: true,
		raidwides: true,
		tankbusters: true
	});

	function showMechType(mechType: string): boolean {
		if (mechType === 'Mechanic' || mechType === 'StoredMechanic') {
			return timelineFilters.mechs;
		}
		if (mechType === 'Raidwide') {
			return timelineFilters.raidwides;
		}
		if (mechType === 'Tankbuster') {
			return timelineFilters.tankbusters;
		}
		return true;
	}

	function showMechTag(mechTag: string): boolean {
		if (splitTimeline === false) return true;
		if (!splitPhases) return true; // Show all timeline items when phases aren't split
		if (tab) {
			return tabTags?.[tab]?.includes(mechTag) ?? true;
		}
		return true;
	}

	function closeCheatsheet() {
		cheatsheetOpenState = false;
	}

	// Image preview modal
	let imageOpenState = $state(false);
	let imageModalProps = $state({
		phase: null as any,
		mech: null as any
	});

	function openImageModal(phase: any, mech?: any) {
		imageModalProps = {
			phase: phase,
			mech: mech
		};
		imageOpenState = true;
	}

	// Normalize individualStrat - it can be a string (error message) or PhaseStrats[]
	let stratPhases = $derived<PhaseStrats[]>(
		typeof individualStrat === 'string' ? [] : individualStrat
	);

	let visiblePhases = $derived(
		stratPhases.filter((phase) =>
			splitPhases && tabTags && tabTags[tab] ? tabTags[tab].includes(phase.tag) : true
		)
	);

	// Get visible mechanics count
	let visibleMechCount = $derived(() => {
		let count = 0;
		visiblePhases.forEach((phase: any) => {
			if (phase.mechs) {
				phase.mechs.forEach((mech: any, index: number) => {
					const key = getMechKey(phase, mech, index);
					if (!hiddenMechanics.has(key)) count++;
				});
			} else {
				const key = getMechKey(phase);
				if (!hiddenMechanics.has(key)) count++;
			}
		});
		return count;
	});

	const MIN_COL_WIDTH = 300;
	const GAP = 12;
	const ROW_HEIGHT = 10;

	let gridContainer: HTMLElement | null = null;
	let columnCount = $state(2);
	let isInitialRender = $state(true);
	let pendingRecalc = $state(false);

	function getCardHeights(
		container: HTMLElement,
		cols: number
	): { height: number; span: number }[] {
		const cards = Array.from(
			container.querySelectorAll(':scope > [data-masonry-card]')
		) as HTMLElement[];
		const colWidth = (container.clientWidth - (cols - 1) * GAP) / cols;

		return cards.map((card) => {
			const isLarge = card.hasAttribute('data-large');
			const span = isLarge && cols > 1 ? 2 : 1;
			const cardWidth = span * colWidth + (span - 1) * GAP;

			const clone = card.cloneNode(true) as HTMLElement;
			clone.style.position = 'absolute';
			clone.style.visibility = 'hidden';
			clone.style.width = `${cardWidth}px`;
			clone.style.height = 'auto';
			clone.style.gridRowEnd = '';
			container.appendChild(clone);
			const height = clone.offsetHeight;
			container.removeChild(clone);
			return { height, span };
		});
	}

	function calculateTotalHeight(cards: { height: number; span: number }[], cols: number): number {
		const columnHeights = new Array(cols).fill(0);
		cards.forEach(({ height, span }) => {
			if (span >= cols) {
				const maxHeight = Math.max(...columnHeights);
				for (let i = 0; i < cols; i++) {
					columnHeights[i] = maxHeight + height + GAP;
				}
			} else {
				let bestStart = 0;
				let bestMax = Infinity;
				for (let start = 0; start <= cols - span; start++) {
					const maxInSpan = Math.max(...columnHeights.slice(start, start + span));
					if (maxInSpan < bestMax) {
						bestMax = maxInSpan;
						bestStart = start;
					}
				}
				for (let i = bestStart; i < bestStart + span; i++) {
					columnHeights[i] = bestMax + height + GAP;
				}
			}
		});
		return Math.max(...columnHeights);
	}

	function findOptimalColumns(container: HTMLElement, maxHeight: number): number {
		const containerWidth = container.clientWidth;
		const maxCols = Math.max(1, Math.floor((containerWidth + GAP) / (MIN_COL_WIDTH + GAP)));

		if (maxCols === 1) return 1;

		for (let cols = 1; cols <= maxCols; cols++) {
			const heights = getCardHeights(container, cols);
			const totalHeight = calculateTotalHeight(heights, cols);
			if (totalHeight <= maxHeight) {
				return cols;
			}
		}
		return maxCols;
	}

	function applyMasonryLayout(container: HTMLElement, cols: number) {
		const cards = Array.from(
			container.querySelectorAll(':scope > [data-masonry-card]')
		) as HTMLElement[];
		const colWidth = (container.clientWidth - (cols - 1) * GAP) / cols;

		cards.forEach((card) => {
			const isLarge = card.hasAttribute('data-large');
			const span = isLarge && cols > 1 ? 2 : 1;
			const cardWidth = span * colWidth + (span - 1) * GAP;

			const clone = card.cloneNode(true) as HTMLElement;
			clone.style.position = 'absolute';
			clone.style.visibility = 'hidden';
			clone.style.width = `${cardWidth}px`;
			clone.style.height = 'auto';
			clone.style.gridRowEnd = '';
			container.appendChild(clone);
			const height = clone.offsetHeight;
			container.removeChild(clone);

			const rowSpan = Math.max(1, Math.ceil((height + GAP) / (ROW_HEIGHT + GAP)));
			card.style.gridRowEnd = `span ${rowSpan}`;
		});
	}

	function recalculateGrid() {
		if (!gridContainer) return;

		const parent = gridContainer.parentElement;
		if (!parent) return;

		const maxHeight = parent.clientHeight - 32;
		const newCols = findOptimalColumns(gridContainer, maxHeight);

		gridContainer.style.gridTemplateColumns = `repeat(${newCols}, minmax(0, 1fr))`;
		applyMasonryLayout(gridContainer, newCols);

		columnCount = newCols;
		isInitialRender = false;
		pendingRecalc = false;
	}

	function masonryGrid(node: HTMLElement) {
		gridContainer = node;
		let resizeTimeout: number;
		let initialTimeout: number;

		node.style.gridTemplateColumns = `repeat(${columnCount}, minmax(0, 1fr))`;

		initialTimeout = setTimeout(() => {
			recalculateGrid();
		}, 50) as unknown as number;

		const resizeObserver = new ResizeObserver(() => {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(recalculateGrid, 150) as unknown as number;
		});

		const parent = node.parentElement;
		if (parent) {
			resizeObserver.observe(parent);
		}

		function handleRecalc() {
			pendingRecalc = true;
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(recalculateGrid, 50) as unknown as number;
		}
		node.addEventListener('recalc', handleRecalc);

		return {
			destroy() {
				clearTimeout(resizeTimeout);
				clearTimeout(initialTimeout);
				resizeObserver.disconnect();
				node.removeEventListener('recalc', handleRecalc);
				gridContainer = null;
			}
		};
	}

	function triggerGridRecalc() {
		if (!gridContainer) return;
		gridContainer.dispatchEvent(new CustomEvent('recalc'));
	}

	$effect(() => {
		textMode;
		hiddenMechanics;
		cellSizes;
		splitPhases;
		tab;
		visiblePhases;
		showTimeline;

		if (browser && gridContainer && !isInitialRender) {
			triggerGridRecalc();
		}
	});
</script>

<ImagePreview
	bind:imageOpenState
	mech={imageModalProps.mech}
	phase={imageModalProps.phase}
	{spotlight}
	{role}
/>

<Modal
	open={cheatsheetOpenState}
	onOpenChange={(e) => (cheatsheetOpenState = e.open)}
	contentBase="card bg-surface-100-900 p-0 space-y-0 shadow-xl flex flex-row h-full w-full max-w-none max-h-none overflow-hidden"
	contentClasses={imageOpenState ? 'blur-sm' : ''}
	backdropClasses="backdrop-blur-sm"
>
	{#snippet content()}
		<!-- Collapsible Sidebar -->
		<div
			class={`flex-shrink-0 h-full flex flex-col bg-surface-950 border-r border-surface-700 transition-all duration-300 ${sidebarOpen ? 'w-72' : 'w-12'}`}
		>
			<!-- Sidebar Toggle -->
			<button
				class="flex items-center justify-center h-12 border-b border-surface-700 hover:bg-surface-800 transition-colors"
				onclick={() => (sidebarOpen = !sidebarOpen)}
			>
				{#if sidebarOpen}
					<ChevronLeft size={20} />
				{:else}
					<ChevronRight size={20} />
				{/if}
			</button>

			{#if sidebarOpen}
				<!-- Display Options -->
				<div class="p-3 border-b border-surface-700 space-y-3">
					<div class="text-xs font-semibold text-surface-400 uppercase tracking-wide">
						Display Options
					</div>

					{#if timeline.length > 0}
						<div class="flex items-center justify-between">
							<span class="text-sm">Timeline</span>
							<Switch
								name="showTimeline"
								checked={showTimeline}
								onCheckedChange={(e) => (showTimeline = e.checked)}
							/>
						</div>

						{#if showTimeline}
							<div class="space-y-1 pl-2">
								<button
									class={`flex items-center gap-2 w-full px-2 py-1 text-xs rounded transition-colors ${timelineFilters.mechs ? 'bg-amber-700 text-white' : 'bg-surface-800 hover:bg-surface-700'}`}
									onclick={() => (timelineFilters.mechs = !timelineFilters.mechs)}
								>
									<Wrench size={14} strokeWidth={2} />
									<span>Mechanics</span>
								</button>
								<button
									class={`flex items-center gap-2 w-full px-2 py-1 text-xs rounded transition-colors ${timelineFilters.raidwides ? 'bg-purple-800 text-white' : 'bg-surface-800 hover:bg-surface-700'}`}
									onclick={() => (timelineFilters.raidwides = !timelineFilters.raidwides)}
								>
									<Siren size={14} strokeWidth={2} />
									<span>Raidwides</span>
								</button>
								<button
									class={`flex items-center gap-2 w-full px-2 py-1 text-xs rounded transition-colors ${timelineFilters.tankbusters ? 'bg-blue-700 text-white' : 'bg-surface-800 hover:bg-surface-700'}`}
									onclick={() => (timelineFilters.tankbusters = !timelineFilters.tankbusters)}
								>
									<Shield size={14} strokeWidth={2} />
									<span>Tankbusters</span>
								</button>
							</div>
						{/if}
					{/if}

					<div class="space-y-1">
						<span class="text-sm">Text Display</span>
						<div class="flex gap-1">
							<button
								class={`flex-1 px-2 py-1 text-xs rounded transition-colors ${textMode === 'all' ? 'bg-primary-500 text-white' : 'bg-surface-800 hover:bg-surface-700'}`}
								onclick={() => (textMode = 'all')}
							>
								All
							</button>
							<button
								class={`flex-1 px-2 py-1 text-xs rounded transition-colors ${textMode === 'role' ? 'bg-primary-500 text-white' : 'bg-surface-800 hover:bg-surface-700'}`}
								onclick={() => (textMode = 'role')}
							>
								Role
							</button>
							<button
								class={`flex-1 px-2 py-1 text-xs rounded transition-colors ${textMode === 'image' ? 'bg-primary-500 text-white' : 'bg-surface-800 hover:bg-surface-700'}`}
								onclick={() => (textMode = 'image')}
							>
								Image
							</button>
						</div>
					</div>

					{#if tabTags && Object.keys(tabTags).length > 1}
						<div class="flex items-center justify-between">
							<span class="text-sm">Split Phases</span>
							<Switch
								name="splitPhases"
								checked={splitPhases}
								onCheckedChange={(e) => (splitPhases = e.checked)}
							/>
						</div>
					{/if}

					<div class="flex items-center justify-between">
						<span class="text-sm">Spotlight</span>
						<Switch
							name="showSpotlight"
							checked={showSpotlight}
							onCheckedChange={(e) => (showSpotlight = e.checked)}
						/>
					</div>

					<!-- Reset Button -->
					<button
						class="w-full mt-2 px-3 py-1.5 text-sm bg-surface-800 hover:bg-surface-700 text-surface-300 rounded transition-colors"
						onclick={() => (resetConfirmOpen = true)}
					>
						Reset Settings
					</button>

					<!-- Reset Confirmation Dialog -->
					<Modal bind:open={resetConfirmOpen} contentClasses="!max-w-sm !w-auto">
						<div slot="content" class="p-4">
							<h3 class="text-lg font-semibold mb-2">Reset Cheatsheet Settings?</h3>
							<p class="text-sm text-surface-400 mb-4">
								This will reset all visibility, cell sizes, and display options to their defaults.
							</p>
							<div class="flex gap-2 justify-end">
								<button
									class="px-3 py-1.5 text-sm bg-surface-800 hover:bg-surface-700 rounded transition-colors"
									onclick={() => (resetConfirmOpen = false)}
								>
									Cancel
								</button>
								<button
									class="px-3 py-1.5 text-sm bg-error-500 hover:bg-error-600 text-white rounded transition-colors"
									onclick={() => resetSettings()}
								>
									Reset
								</button>
							</div>
						</div>
					</Modal>
				</div>

				<!-- Mechanic Selection -->
				<div class="flex-1 overflow-y-auto p-3">
					<div class="text-xs font-semibold text-surface-400 uppercase tracking-wide mb-2">
						Mechanics
					</div>

					{#each visiblePhases as phase}
						<div class="mb-3">
							<div class="flex items-center justify-between mb-1">
								<span class="text-sm font-medium capitalize truncate">{phase.phaseName}</span>
								<div class="flex gap-1">
									<button
										class="p-1 hover:bg-surface-700 rounded text-surface-400 hover:text-white transition-colors"
										onclick={() => showAllInPhase(phase)}
										title="Show all"
									>
										<Eye size={14} />
									</button>
									<button
										class="p-1 hover:bg-surface-700 rounded text-surface-400 hover:text-white transition-colors"
										onclick={() => hideAllInPhase(phase)}
										title="Hide all"
									>
										<EyeOff size={14} />
									</button>
								</div>
							</div>

							{#if phase.mechs}
								<div class="space-y-1 pl-2">
									{#each phase.mechs as mech, index}
										{@const mechKey = getMechKey(phase, mech, index)}
										<div class="flex items-center gap-2">
											<button
												class={`flex-1 text-left text-xs px-2 py-1 rounded transition-colors truncate ${isMechVisible(mechKey) ? 'bg-surface-800 text-surface-100' : 'bg-surface-900 text-surface-500 line-through'}`}
												onclick={() => toggleMechVisibility(mechKey)}
											>
												{mech.mechanic}
											</button>
											<button
												class={`p-1 rounded text-xs transition-colors ${getCellSize(mechKey) === 'large' ? 'bg-primary-500 text-white' : 'bg-surface-800 text-surface-400 hover:text-white'}`}
												onclick={() => toggleCellSize(mechKey)}
												title={getCellSize(mechKey) === 'large'
													? hasImage(phase, mech)
														? '2x2'
														: '1x2'
													: '1x1'}
											>
												{#if getCellSize(mechKey) === 'large'}
													{#if hasImage(phase, mech)}
														<Grid2x2 size={12} />
													{:else}
														<RectangleVertical size={12} />
													{/if}
												{:else}
													<Grid3x3 size={12} />
												{/if}
											</button>
										</div>
									{/each}
								</div>
							{:else}
								{@const phaseKey = getMechKey(phase)}
								<div class="flex items-center gap-2 pl-2">
									<button
										class={`flex-1 text-left text-xs px-2 py-1 rounded transition-colors ${isMechVisible(phaseKey) ? 'bg-surface-800 text-surface-100' : 'bg-surface-900 text-surface-500 line-through'}`}
										onclick={() => toggleMechVisibility(phaseKey)}
									>
										{phase.phaseName}
									</button>
									<button
										class={`p-1 rounded text-xs transition-colors ${getCellSize(phaseKey) === 'large' ? 'bg-primary-500 text-white' : 'bg-surface-800 text-surface-400 hover:text-white'}`}
										onclick={() => toggleCellSize(phaseKey)}
										title={getCellSize(phaseKey) === 'large'
											? hasImage(phase)
												? '2x2'
												: '1x2'
											: '1x1'}
									>
										{#if getCellSize(phaseKey) === 'large'}
											{#if hasImage(phase)}
												<Grid2x2 size={12} />
											{:else}
												<RectangleVertical size={12} />
											{/if}
										{:else}
											<Grid3x3 size={12} />
										{/if}
									</button>
								</div>
							{/if}
						</div>
					{/each}
				</div>
			{/if}
		</div>

		<!-- Main Content Area -->
		<div class="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
			<!-- Header -->
			<header
				class="flex justify-between items-center px-4 py-2 border-b border-surface-700 bg-surface-900/50 shrink-0"
			>
				<div class="text-lg 3xl:text-2xl font-semibold truncate">{title}</div>
				{#if tabTags && splitPhases}
					<div class="flex gap-1">
						{#each Object.keys(tabTags) as tabName}
							<button
								class={`px-3 py-1 text-sm rounded transition-colors ${tab === tabName ? 'bg-primary-500 text-white' : 'bg-surface-800 hover:bg-surface-700'}`}
								onclick={() => (tab = tabName)}
							>
								{tabName}
							</button>
						{/each}
					</div>
				{/if}
				<button
					class="p-2 hover:bg-surface-700 rounded transition-colors"
					onclick={closeCheatsheet}
				>
					<X size={20} />
				</button>
			</header>

			<!-- Content Grid -->
			<div class="flex-1 flex overflow-hidden p-4 gap-4">
				<!-- Timeline Column (optional) -->
				{#if timeline.length > 0 && showTimeline}
					<div
						class="card border shrink-0 w-64 border-surface-800 p-2 flex flex-col bg-surface-100-900 overflow-hidden"
					>
						<div class="grow relative overflow-hidden">
							{#each timeline as item, index}
								{#if showMechType(item.mechType) && (item.mechTag ? showMechTag(item.mechTag) : true)}
									<div
										style:top={getFightPercentClass(item.startTimeMs, index)}
										class="absolute flex text-sm w-full items-center"
									>
										<div class="w-5 shrink-0">
											{#if item.mechType === 'Start'}
												<div
													class="grid bg-green-700 rounded-xs h-4 w-4 p-auto place-content-center"
												>
													<Play size={10} strokeWidth={2} />
												</div>
											{/if}
											{#if item.mechType === 'Phase'}
												<div class="grid rounded-xs h-4 w-4 p-auto place-items-center">
													<ArrowRight size={10} strokeWidth={2} />
												</div>
											{/if}
											{#if item.mechType === 'Raidwide'}
												<div
													class="grid bg-purple-800 rounded-xs h-4 w-4 p-auto place-content-center"
												>
													<Siren size={10} strokeWidth={2} />
												</div>
											{/if}
											{#if item.mechType === 'Mechanic'}
												<div
													class="grid bg-amber-700 rounded-xs h-4 w-4 p-auto place-content-center"
												>
													<Wrench size={10} strokeWidth={2} />
												</div>
											{/if}
											{#if item.mechType === 'Tankbuster'}
												<div
													class="grid bg-blue-700 rounded-xs h-4 w-4 p-auto place-content-center"
												>
													<Shield size={10} strokeWidth={2} />
												</div>
											{/if}
											{#if item.mechType === 'StoredMechanic'}
												<div
													class="grid bg-amber-600 rounded-xs h-4 w-4 p-auto place-content-center"
												>
													<Clock size={10} strokeWidth={2} />
												</div>
											{/if}
											{#if item.mechType === 'Enrage'}
												<div class="grid bg-pink-800 rounded-xs h-4 w-4 p-auto place-items-center">
													<Skull size={10} strokeWidth={2} />
												</div>
											{/if}
										</div>
										<div class="w-10 text-[10px] text-surface-400">
											{msToTime(item.startTimeMs)}
										</div>
										<div class="flex-1 overflow-hidden text-nowrap text-[12px]">
											{item.mechName}
										</div>
									</div>
								{/if}
							{/each}
						</div>
					</div>
				{/if}

				<!-- Mechanic Cards Grid -->
				<div
					use:masonryGrid
					class="flex-1 grid gap-3 overflow-y-auto content-start relative"
					class:invisible={isInitialRender}
					style:grid-auto-rows="10px"
				>
					{#each visiblePhases as phase, i}
						{#if phase.mechs}
							{#each phase.mechs as mech, i}
								{@const mechKey = getMechKey(phase, mech, i)}
								{#if isMechVisible(mechKey)}
									{@const isLarge = getCellSize(mechKey) === 'large'}
									<button
										data-masonry-card
										data-large={isLarge && hasImage(phase, mech) ? '' : undefined}
										class="card border border-surface-700 p-2 flex flex-col text-start group overflow-hidden bg-surface-900/80 hover:bg-surface-800/80 transition-colors cursor-pointer"
										class:col-span-2={isLarge && hasImage(phase, mech)}
										onclick={() => openImageModal(phase, mech)}
									>
										<!-- Header (hide in image-only mode) -->
										{#if textMode !== 'image'}
											<div class="flex items-start justify-between mb-1 shrink-0">
												<div>
													<div class="capitalize font-bold text-base text-surface-200">
														{phase.phaseName}
													</div>
													<div class="capitalize font-semibold text-lg">
														{mech.mechanic}
													</div>
												</div>
												<div class="flex items-center gap-1">
													{#if phase?.tag && stratState[phase.tag] !== getStratMechs(stratName ?? '')[phase.tag]}
														<Tooltip
															positioning={{ placement: 'top' }}
															triggerBase="flex"
															contentBase="card bg-surface-800 p-2 text-xs"
															openDelay={200}
															arrow
															arrowBackground="!bg-surface-800"
														>
															{#snippet trigger()}<div class="text-warning-500">
																	<TriangleAlert size={16} />
																</div>{/snippet}
															{#snippet content()}Differs from guide{/snippet}
														</Tooltip>
													{/if}
													<Expand
														size={14}
														class="opacity-0 group-hover:opacity-100 transition-opacity text-surface-400"
													/>
												</div>
											</div>
										{/if}

										<!-- Description (if textMode is 'all') -->
										{#if textMode === 'all' && mech?.description}
											<div class="text-base text-surface-100 whitespace-pre-wrap mb-1 shrink-0">
												{@html mech.description}
											</div>
										{/if}

										<!-- Player strat (if textMode is 'all' or 'role') -->
										{#if (textMode === 'all' || textMode === 'role') && role && mech?.strats && mech.strats[0]?.description}
											<div class="flex items-start gap-2 text-base mb-2 shrink-0">
												<img
													src={`/icons/${role.toLowerCase()}.png`}
													alt={role}
													class="w-6 h-6 shrink-0"
												/>
												<div class="whitespace-pre-wrap">
													{mech.strats[0].description}
												</div>
											</div>
										{/if}

										<!-- Image -->
										{#if mech?.strats && mech.strats[0]?.imageUrl}
											{@const imgUrl = mech.strats[0].imageUrl}
											{@const dims = getImageDimensions(imgUrl)}
											<div class="min-h-0 h-full relative">
												<img
													class="rounded w-full h-full object-contain"
													src={imgUrl}
													alt={mech.mechanic}
													onload={(e) => handleImageLoad(e, imgUrl)}
												/>
												{#if spotlight && showSpotlight && mech.strats[0]?.mask}
													<SpotlightOverlay
														mask={mech.strats[0].mask}
														imageWidth={dims?.width}
														imageHeight={dims?.height}
													/>
												{/if}
											</div>
										{:else if mech?.imageUrl}
											<div class="min-h-0 h-full flex items-center justify-center">
												<img
													class="rounded h-auto w-auto max-h-full max-w-full"
													src={mech.imageUrl}
													alt={mech.mechanic}
												/>
											</div>
										{/if}
									</button>
								{/if}
							{/each}
						{:else}
							{@const phaseKey = getMechKey(phase)}
							{#if isMechVisible(phaseKey)}
								{@const isLarge = getCellSize(phaseKey) === 'large'}
								<button
									data-masonry-card
									data-large={isLarge && hasImage(phase) ? '' : undefined}
									class="card border border-surface-700 p-2 flex flex-col text-start group overflow-hidden bg-surface-900/80 hover:bg-surface-800/80 transition-colors cursor-pointer"
									class:col-span-2={isLarge && hasImage(phase)}
									onclick={() => openImageModal(phase)}
								>
									<!-- Header (hide in image-only mode) -->
									{#if textMode !== 'image'}
										<div class="flex items-start justify-between mb-1 shrink-0">
											<div class="capitalize font-semibold text-lg">
												{phase.phaseName}
											</div>
											<div class="flex items-center gap-1">
												{#if phase?.tag && stratState[phase.tag] !== getStratMechs(stratName ?? '')[phase.tag]}
													<Tooltip
														positioning={{ placement: 'top' }}
														triggerBase="flex"
														contentBase="card bg-surface-800 p-2 text-xs"
														openDelay={200}
														arrow
														arrowBackground="!bg-surface-800"
													>
														{#snippet trigger()}<div class="text-warning-500">
																<TriangleAlert size={16} />
															</div>{/snippet}
														{#snippet content()}Differs from guide{/snippet}
													</Tooltip>
												{/if}
												<Expand
													size={14}
													class="opacity-0 group-hover:opacity-100 transition-opacity text-surface-400"
												/>
											</div>
										</div>
									{/if}

									<!-- Description (if textMode is 'all') -->
									{#if textMode === 'all' && phase?.description}
										<div class="text-base text-surface-300 whitespace-pre-wrap mb-1 shrink-0">
											{phase.description}
										</div>
									{/if}

									<!-- Image -->
									{#if phase?.imageUrl}
										{@const imgUrl = phase.imageUrl}
										{@const dims = getImageDimensions(imgUrl)}
										<div class="min-h-0 h-full relative">
											<img
												class="rounded w-full h-full object-contain"
												src={imgUrl}
												alt={phase.phaseName}
												onload={(e) => handleImageLoad(e, imgUrl)}
											/>
											{#if spotlight && showSpotlight && phase.mask}
												<SpotlightOverlay
													mask={phase.mask}
													imageWidth={dims?.width}
													imageHeight={dims?.height}
												/>
											{/if}
										</div>
									{/if}
								</button>
							{/if}
						{/if}
					{/each}
				</div>
			</div>
		</div>
	{/snippet}
</Modal>
