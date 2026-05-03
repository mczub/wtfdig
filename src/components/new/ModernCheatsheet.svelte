<!-- @ts-nocheck -->

<script lang="ts">
  // @ts-nocheck
  import { Modal, Switch, Tabs } from '$lib/components/ui';
  import {
    Check,
    ChevronLeft,
    ChevronRight,
    Expand,
    ExternalLink,
    Eye,
    EyeOff,
    Grid2x2,
    Grid3x3,
    RectangleVertical,
    Settings,
    Shield,
    Siren,
    Type,
    Wrench,
    X
  } from '@lucide/svelte/icons';
  import ImagePreview from '../ImagePreview.svelte';
  import SpotlightOverlay from '../SpotlightOverlay.svelte';
  import TimelineIcon from '$lib/components/TimelineIcon.svelte';
  import RoleIcon from '$lib/components/RoleIcon.svelte';
  import MechDiffWarning from '$lib/components/MechDiffWarning.svelte';
  import type { TimelineItem, SpotlightMask, Role, Alignment, PhaseStrats } from '$lib/types';
  import { msToTime } from '$lib/utils';
  import { renderDebuffTokens } from '$lib/debuffs';
  import { browser } from '$app/environment';
  import Separator from '$lib/components/ui/separator/separator.svelte';

  interface Props {
    title: string;
    cheatsheetOpenState?: boolean;
    timeline: TimelineItem[];
    individualStrat: PhaseStrats[] | string;
    stratName?: string;
    stratState: Record<string, string | null>;
    setStratState?: (key: string, value: string) => void;
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
    mechToggles?: {
      key: string;
      label: string;
      defaultValue: string | null;
      options: { value: string; label: string }[];
    }[];
  }

  let {
    title,
    cheatsheetOpenState = $bindable(),
    timeline,
    individualStrat,
    stratName,
    stratState,
    setStratState,
    getStratMechs,
    spotlight,
    alignment,
    tabTags = null,
    role = null,
    splitTimeline = false,
    useEvenTimelineSpacing: useEvenTimelineSpacingProp = false,
    innerWidth = 1920,
    innerHeight = 1080,
    fightKey = 'default',
    mechToggles = []
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

  // The timeline column eats a lot of width, which on a phone leaves the
  // cheatsheet area too narrow to be useful. Default it off below sm; users
  // can still toggle it back on, and that choice is remembered per fight.
  function getDefaultShowTimeline(): boolean {
    if (!browser) return true;
    return window.innerWidth >= 640;
  }

  // Persisted state — defaults applied here, then overwritten by applySaved()
  // for the current fightKey both on mount and whenever fightKey changes.
  let showTimeline = $state(getDefaultShowTimeline());
  // Text display mode: 'all' = show all text, 'role' = only role-based text, 'image' = no text
  let textMode = $state<'all' | 'role' | 'image'>('all');
  let sidebarOpen = $state(true);
  let splitPhases = $state(true); // true = split into tabs, false = show all
  let showSpotlight = $state(true); // local override for spotlight visibility
  let cellSizes = $state<Map<string, 'small' | 'large'>>(new Map());
  let hiddenMechanics = $state<Set<string>>(new Set());

  // Confirmation dialog state
  let resetConfirmOpen = $state(false);

  function applySaved(saved: any) {
    showTimeline = saved?.showTimeline ?? getDefaultShowTimeline();
    textMode = saved?.textMode ?? 'all';
    sidebarOpen = saved?.sidebarOpen ?? true;
    splitPhases = saved?.splitPhases ?? true;
    showSpotlight = saved?.showSpotlight ?? true;
    cellSizes = new Map(saved?.cellSizes ? Object.entries(saved.cellSizes) : []);
    hiddenMechanics = new Set(saved?.hiddenMechanics ?? []);
  }

  // Initial load (so the first paint matches the saved state without flashing
  // defaults).
  applySaved(loadSavedState());

  // Reload when fightKey changes mid-mount so we don't write the previous
  // fight's state under the new fight's storageKey. The first effect run is
  // skipped because the synchronous load above already covered it.
  let lastLoadedFightKey: string | null = null;
  $effect(() => {
    const key = fightKey;
    if (lastLoadedFightKey === null) {
      lastLoadedFightKey = key;
      return;
    }
    if (key === lastLoadedFightKey) return;
    lastLoadedFightKey = key;
    applySaved(loadSavedState());
  });

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
    // Prefer `phaseName` over `tag` because `tag` is shared across phases in
    // the same tab (e.g. multiple `p4` phases in TEA Perfect Alexander), and
    // include the mech index too in case a single phase has duplicate mech
    // names. Without both, keyed each blocks throw `each_key_duplicate`.
    const phaseKey = phase?.phaseName || phase?.tag || 'unknown';
    if (mech) {
      return `${phaseKey}::${mech.mechanic ?? ''}::${index ?? ''}`;
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

  // Check if a card has role-based strats
  function hasRoleStrats(mech?: any): boolean {
    return !!(mech?.strats && mech.strats.length > 0);
  }

  // Check if a mechanic is explicitly hidden by user (for sidebar display)
  function isMechHidden(key: string): boolean {
    return hiddenMechanics.has(key);
  }

  // Check if a card should be shown in the grid (considering hiddenMechanics and textMode filters)
  function shouldShowCard(key: string, phase: any, mech?: any): boolean {
    // First check if explicitly hidden
    if (hiddenMechanics.has(key)) return false;

    // Filter by textMode
    if (textMode === 'role' && !hasImage(phase, mech)) return false;
    if (textMode === 'image' && !hasImage(phase, mech)) return false;

    return true;
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

  // Initialize tab on mount and reset it whenever the current value isn't
  // valid for the new tabTags (e.g. after fightKey change).
  $effect(() => {
    if (!tabTags) {
      tab = '';
      return;
    }
    const keys = Object.keys(tabTags);
    if (keys.length === 0) {
      tab = '';
      return;
    }
    if (!tab || !keys.includes(tab)) {
      tab = keys[0];
    }
  });

  const TIMELINE_ITEM_HEIGHT = 20;

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
    if (!splitPhases) return true;
    if (tab) {
      return tabTags?.[tab]?.includes(mechTag) ?? true;
    }
    return true;
  }

  let visibleTimelineItems = $derived(
    timeline.filter(
      (item) => showMechType(item.mechType) && (item.mechTag ? showMechTag(item.mechTag) : true)
    )
  );

  let timelineContainerHeight = $state(0);
  let timelineScrollTop = $state(0);
  let timelineScrollHeight = $state(0);

  let timelineMinGapPercent = $derived(
    timelineContainerHeight > 0 ? (TIMELINE_ITEM_HEIGHT / timelineContainerHeight) * 100 : 3
  );

  let timelineNeedsScroll = $derived.by(() => {
    const items = visibleTimelineItems;
    if (items.length === 0) return false;
    const requiredHeight = items.length * TIMELINE_ITEM_HEIGHT;
    return requiredHeight > timelineContainerHeight;
  });

  let timelineContentHeight = $derived.by(() => {
    const items = visibleTimelineItems;
    if (items.length === 0) return 0;
    if (timelineNeedsScroll) {
      return items.length * TIMELINE_ITEM_HEIGHT;
    }
    return timelineContainerHeight;
  });

  let timelinePositions = $derived.by(() => {
    const items = visibleTimelineItems;
    if (items.length === 0) return new Map<number, string>();

    const positions = new Map<number, string>();
    const needsScroll = timelineNeedsScroll;

    if (!splitPhases) {
      items.forEach((item, index) => {
        if (needsScroll) {
          const position = index * TIMELINE_ITEM_HEIGHT;
          positions.set(index, `${position}px`);
        } else {
          const position = (index * 98) / items.length;
          positions.set(index, `${position}%`);
        }
      });
      return positions;
    }

    const enrageItem = items.find((item) => item.mechType === 'Enrage');
    const startTime = items[0]?.startTimeMs || 0;
    const endTime =
      enrageItem?.startTimeMs || items[items.length - 1]?.startTimeMs || startTime + 1;
    const duration = endTime - startTime || 1;

    if (needsScroll) {
      const totalHeight = items.length * TIMELINE_ITEM_HEIGHT;
      items.forEach((item, index) => {
        const relativeTime = item.startTimeMs - startTime;
        const position = (relativeTime / duration) * (totalHeight - TIMELINE_ITEM_HEIGHT);
        positions.set(index, `${position}px`);
      });
    } else {
      let lastPosition = 0;
      items.forEach((item, index) => {
        const relativeTime = item.startTimeMs - startTime;
        const idealPercent = (relativeTime / duration) * 98;
        const minPercent = index === 0 ? 0 : lastPosition + timelineMinGapPercent;
        const position = Math.max(idealPercent, minPercent);
        positions.set(index, `${position}%`);
        lastPosition = position;
      });
    }

    return positions;
  });

  function getTimelinePosition(index: number): string {
    return timelinePositions.get(index) ?? '0%';
  }

  let showTimelineScrollIndicator = $derived(
    timelineNeedsScroll && timelineScrollTop + timelineContainerHeight < timelineScrollHeight - 10
  );

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
  let visibleMechCount = $derived.by(() => {
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

  // === Justified gallery layout ===
  // Pack cards into rows with uniform height per row. Each card width is
  // proportional to its image's natural aspect ratio. Last row stays at
  // target height (ragged right) instead of stretching.

  const GAP = 12;
  const TARGET_ROW_HEIGHT = 280;
  const MIN_ROW_HEIGHT = 140;
  const MAX_ROW_HEIGHT = 520;
  const TEXT_ONLY_ASPECT = 1.5;
  // Tailwind `sm` breakpoint. Below this the cards container is narrow enough
  // that single-card rows should always stretch to fill (otherwise mobile
  // layouts leave large empty space on the right when binary search trims the
  // target height). Above it, sparse single-card rows stay at target so an
  // orphan last card doesn't blow up to full width on desktop.
  const NARROW_CONTAINER_BREAKPOINT = 640;

  let gridContainerWidth = $state(0);
  let gridContainerHeight = $state(0);

  // Cached image aspect ratios (width / height), populated via prefetch
  let imageAspects = $state<Map<string, number>>(new Map());
  let initialPrefetchDone = $state(false);

  function getCardImageUrl(phase: any, mech?: any): string | null {
    if (mech?.strats?.[0]?.imageUrl) return mech.strats[0].imageUrl;
    if (mech?.imageUrl) return mech.imageUrl;
    if (phase?.imageUrl) return phase.imageUrl;
    return null;
  }

  // Collect every image URL across all phases (not just visible) so toggling
  // tabs doesn't trigger a re-prefetch.
  let allImageUrls = $derived.by(() => {
    const urls = new Set<string>();
    for (const phase of stratPhases) {
      if (phase.imageUrl) urls.add(phase.imageUrl);
      if (phase.mechs) {
        for (const mech of phase.mechs) {
          if (mech.imageUrl) urls.add(mech.imageUrl);
          if (mech.strats?.[0]?.imageUrl) urls.add(mech.strats[0].imageUrl);
        }
      }
    }
    return Array.from(urls);
  });

  // Prefetch image dimensions on mount / when URL set changes.
  $effect(() => {
    if (!browser) return;
    const urls = allImageUrls;
    if (urls.length === 0) {
      initialPrefetchDone = true;
      return;
    }
    let cancelled = false;
    const probes = urls
      .filter((u) => !imageAspects.has(u))
      .map(
        (url) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => {
              if (!cancelled && img.naturalWidth > 0 && img.naturalHeight > 0) {
                imageAspects.set(url, img.naturalWidth / img.naturalHeight);
                imageDimensions.set(url, {
                  width: img.naturalWidth,
                  height: img.naturalHeight
                });
              }
              resolve();
            };
            img.onerror = () => resolve();
            img.src = url;
          })
      );
    if (probes.length === 0) {
      initialPrefetchDone = true;
      return;
    }
    Promise.all(probes).then(() => {
      if (cancelled) return;
      imageAspects = new Map(imageAspects);
      imageDimensions = new Map(imageDimensions);
      initialPrefetchDone = true;
    });
    return () => {
      cancelled = true;
    };
  });

  function getCardAspect(phase: any, mech?: any): number {
    const url = getCardImageUrl(phase, mech);
    if (url) {
      const a = imageAspects.get(url);
      if (a && a > 0) return a;
    }
    return TEXT_ONLY_ASPECT;
  }

  type CardSpec = {
    phase: any;
    mech: any | null;
    mechIndex: number | null;
    key: string;
    aspect: number;
    large: boolean;
    imgUrl: string | null;
  };

  let cardList = $derived.by(() => {
    const list: CardSpec[] = [];
    for (const phase of visiblePhases) {
      if (phase.mechs) {
        phase.mechs.forEach((mech: any, index: number) => {
          const key = getMechKey(phase, mech, index);
          if (!shouldShowCard(key, phase, mech)) return;
          list.push({
            phase,
            mech,
            mechIndex: index,
            key,
            aspect: getCardAspect(phase, mech),
            large: getCellSize(key) === 'large',
            imgUrl: getCardImageUrl(phase, mech)
          });
        });
      } else {
        const key = getMechKey(phase);
        if (!shouldShowCard(key, phase)) continue;
        list.push({
          phase,
          mech: null,
          mechIndex: null,
          key,
          aspect: getCardAspect(phase),
          large: getCellSize(key) === 'large',
          imgUrl: getCardImageUrl(phase)
        });
      }
    }
    return list;
  });

  type LaidOutCard = { spec: CardSpec; width: number; height: number };

  type LaidOutLargeItem = { type: 'large'; card: LaidOutCard };
  type LaidOutSmallsBlock = {
    type: 'smalls';
    blockWidth: number;
    smallHeight: number;
    upper: LaidOutCard[];
    lower: LaidOutCard[];
  };
  type LaidOutMacroItem = LaidOutLargeItem | LaidOutSmallsBlock;

  type LaidOutSimpleRow = { kind: 'simple'; height: number; cards: LaidOutCard[] };
  type LaidOutMacroRow = {
    kind: 'macro';
    height: number;
    smallHeight: number;
    items: LaidOutMacroItem[];
  };
  type LaidOutRow = LaidOutSimpleRow | LaidOutMacroRow;

  // === Macro-row builder ===
  // A macro row is 2T + GAP tall and contains a sequence of items: large
  // cards (full height) and "smalls blocks" (small cards split 50/50 by
  // user order into upper and lower sub-rows of height T). Rows that
  // contain no large cards stay as simple single-strip rows at height T.

  type SmallsBlockItem = { type: 'smalls'; smalls: CardSpec[] };
  type LargeBlockItem = { type: 'large'; card: CardSpec };
  type MacroItem = SmallsBlockItem | LargeBlockItem;

  // Split a smalls block into upper/lower sub-rows by walking in user order
  // and cutting at the point where cumulative aspect sum is closest to half
  // the total. Preserves user order and minimizes width disparity between
  // the two strips.
  function splitSmalls(smalls: CardSpec[]): { upper: CardSpec[]; lower: CardSpec[] } {
    if (smalls.length === 0) return { upper: [], lower: [] };
    if (smalls.length === 1) return { upper: smalls, lower: [] };

    const total = smalls.reduce((s, c) => s + c.aspect, 0);
    const target = total / 2;

    let acc = 0;
    for (let i = 0; i < smalls.length - 1; i++) {
      const next = acc + smalls[i].aspect;
      if (next >= target) {
        // Pick whichever split (after i, or after i+1) is closer to balanced.
        const splitAfter = i + 1; // upper has cards [0..i], sum = next
        const splitBefore = i; // upper has cards [0..i-1], sum = acc
        const idx = target - acc <= next - target && splitBefore >= 1 ? splitBefore : splitAfter;
        const safeIdx = Math.max(1, Math.min(smalls.length - 1, idx));
        return { upper: smalls.slice(0, safeIdx), lower: smalls.slice(safeIdx) };
      }
      acc = next;
    }
    return {
      upper: smalls.slice(0, smalls.length - 1),
      lower: smalls.slice(smalls.length - 1)
    };
  }

  function smallsBlockNaturalWidth(smalls: CardSpec[], T: number): number {
    if (smalls.length === 0) return 0;
    const { upper, lower } = splitSmalls(smalls);
    const uA = upper.reduce((s, c) => s + c.aspect, 0);
    const lA = lower.reduce((s, c) => s + c.aspect, 0);
    const upperW = upper.length > 0 ? uA * T + (upper.length - 1) * GAP : 0;
    const lowerW = lower.length > 0 ? lA * T + (lower.length - 1) * GAP : 0;
    return Math.max(upperW, lowerW);
  }

  function macroNaturalWidth(items: MacroItem[], T: number, H: number): number {
    let total = 0;
    let count = 0;
    for (const it of items) {
      let w = 0;
      if (it.type === 'large') w = it.card.aspect * H;
      else w = smallsBlockNaturalWidth(it.smalls, T);
      if (w === 0) continue;
      total += w;
      count++;
    }
    return total + Math.max(0, count - 1) * GAP;
  }

  function simpleNaturalWidth(smalls: CardSpec[], T: number): number {
    if (smalls.length === 0) return 0;
    const aSum = smalls.reduce((s, c) => s + c.aspect, 0);
    return aSum * T + (smalls.length - 1) * GAP;
  }

  type RawSimpleRow = { kind: 'simple'; smalls: CardSpec[] };
  type RawMacroRow = { kind: 'macro'; items: MacroItem[] };
  type RawRow = RawSimpleRow | RawMacroRow;

  function buildRows(target: number): RawRow[] {
    const rows: RawRow[] = [];
    if (cardList.length === 0 || gridContainerWidth <= 0) return rows;

    const T = target;
    const H = 2 * target + GAP;

    let mode: 'simple' | 'macro' = 'simple';
    let items: MacroItem[] = []; // for macro mode
    let smalls: CardSpec[] = []; // for simple mode

    function flush() {
      if (mode === 'simple') {
        if (smalls.length > 0) rows.push({ kind: 'simple', smalls });
        smalls = [];
      } else {
        const real = items.filter((it) => it.type === 'large' || it.smalls.length > 0);
        if (real.length > 0) rows.push({ kind: 'macro', items: real });
        items = [];
      }
      mode = 'simple';
    }

    for (const spec of cardList) {
      if (spec.large) {
        // Switching into / staying in macro mode.
        if (mode === 'simple') {
          // Promote current simple smalls into a macro smalls block (if any),
          // then add the large item. If the combined trial overflows, flush
          // the simple row first and start a fresh macro row.
          const trial: MacroItem[] =
            smalls.length > 0
              ? [
                  { type: 'smalls', smalls },
                  { type: 'large', card: spec }
                ]
              : [{ type: 'large', card: spec }];
          const fits = trial.length <= 1 || macroNaturalWidth(trial, T, H) <= gridContainerWidth;
          if (fits) {
            mode = 'macro';
            items = trial;
            smalls = [];
          } else {
            // Flush simple smalls as their own row, start macro with the large.
            flush();
            mode = 'macro';
            items = [{ type: 'large', card: spec }];
          }
        } else {
          const trial: MacroItem[] = [...items, { type: 'large', card: spec }];
          if (items.length === 0 || macroNaturalWidth(trial, T, H) <= gridContainerWidth) {
            items = trial;
          } else {
            flush();
            mode = 'macro';
            items = [{ type: 'large', card: spec }];
          }
        }
      } else {
        // Small card.
        if (mode === 'simple') {
          const trial = [...smalls, spec];
          if (smalls.length === 0 || simpleNaturalWidth(trial, T) <= gridContainerWidth) {
            smalls = trial;
          } else {
            flush();
            mode = 'simple';
            smalls = [spec];
          }
        } else {
          // Macro mode: append to last smalls block (or start one).
          const last = items[items.length - 1];
          let trial: MacroItem[];
          if (last && last.type === 'smalls') {
            trial = [...items.slice(0, -1), { type: 'smalls', smalls: [...last.smalls, spec] }];
          } else {
            trial = [...items, { type: 'smalls', smalls: [spec] }];
          }
          if (macroNaturalWidth(trial, T, H) <= gridContainerWidth) {
            items = trial;
          } else {
            flush();
            // After flush, mode is 'simple' — keep it that way unless this
            // small later transitions to macro again.
            mode = 'simple';
            smalls = [spec];
          }
        }
      }
    }
    flush();
    return rows;
  }

  // === Layout (per-row height/width assignment) ===

  function layoutSimpleRow(smalls: CardSpec[], target: number): LaidOutSimpleRow {
    const aSum = smalls.reduce((s, c) => s + c.aspect, 0);
    const naturalW = aSum * target + Math.max(0, smalls.length - 1) * GAP;
    const avail = gridContainerWidth - Math.max(0, smalls.length - 1) * GAP;
    let h = target;
    // Scale to fit container width when:
    //  - the row has only one card AND the container is narrow (single-column
    //    / mobile / scrolling layouts — always fill the width), or
    //  - the row is at least 80% of the container width — covers the multi-card
    //    case while leaving sparse partial last rows on desktop at target.
    const isNarrow = gridContainerWidth < NARROW_CONTAINER_BREAKPOINT;
    if ((smalls.length === 1 && isNarrow) || naturalW >= gridContainerWidth * 0.8) {
      h = avail / aSum;
    }
    return {
      kind: 'simple',
      height: h,
      cards: smalls.map((s) => ({ spec: s, width: h * s.aspect, height: h }))
    };
  }

  function layoutMacroRow(items: MacroItem[], target: number): LaidOutMacroRow {
    // Iteratively scale H so the macro row's natural width ≈ container width.
    // Always scales DOWN on overflow. Scales UP for single-item rows in a
    // narrow container (mobile / scrolling), or for multi-item rows that are
    // already at least 80% of the container width.
    let h = 2 * target + GAP;
    let t = target;
    const isNarrow = gridContainerWidth < NARROW_CONTAINER_BREAKPOINT;
    const stretchSingle = items.length === 1 && isNarrow;
    for (let iter = 0; iter < 6; iter++) {
      const natW = macroNaturalWidth(items, t, h);
      if (natW <= 0) break;
      if (Math.abs(natW - gridContainerWidth) < 0.5) break;
      if (!stretchSingle && natW < gridContainerWidth * 0.8) break;
      const scale = gridContainerWidth / natW;
      h = h * scale;
      t = (h - GAP) / 2;
      if (t < 1) {
        t = 1;
        h = 2 * t + GAP;
        break;
      }
    }
    const finalH = h;
    const finalT = (finalH - GAP) / 2;

    const laid: LaidOutMacroItem[] = [];
    for (const it of items) {
      if (it.type === 'large') {
        laid.push({
          type: 'large',
          card: { spec: it.card, width: it.card.aspect * finalH, height: finalH }
        });
      } else {
        const N = it.smalls.length;
        if (N === 0) continue;
        const { upper: upperSpecs, lower: lowerSpecs } = splitSmalls(it.smalls);
        const uA = upperSpecs.reduce((s, c) => s + c.aspect, 0);
        const lA = lowerSpecs.reduce((s, c) => s + c.aspect, 0);
        const upperW = upperSpecs.length > 0 ? uA * finalT + (upperSpecs.length - 1) * GAP : 0;
        const lowerW = lowerSpecs.length > 0 ? lA * finalT + (lowerSpecs.length - 1) * GAP : 0;
        const blockWidth = Math.max(upperW, lowerW);
        laid.push({
          type: 'smalls',
          blockWidth,
          smallHeight: finalT,
          upper: upperSpecs.map((s) => ({
            spec: s,
            width: finalT * s.aspect,
            height: finalT
          })),
          lower: lowerSpecs.map((s) => ({
            spec: s,
            width: finalT * s.aspect,
            height: finalT
          }))
        });
      }
    }

    return { kind: 'macro', height: finalH, smallHeight: finalT, items: laid };
  }

  function layoutAt(target: number): LaidOutRow[] {
    const raw = buildRows(target);
    return raw.map((r) =>
      r.kind === 'simple' ? layoutSimpleRow(r.smalls, target) : layoutMacroRow(r.items, target)
    );
  }

  function totalLayoutHeight(rows: LaidOutRow[]): number {
    if (rows.length === 0) return 0;
    let h = 0;
    for (const r of rows) h += r.height;
    return h + (rows.length - 1) * GAP;
  }

  // Pick the largest target T where the layout fits in the visible height.
  // Falls back to MIN_ROW_HEIGHT (scrollable) when even that doesn't fit.
  let laidOutRows = $derived.by(() => {
    if (gridContainerWidth <= 0 || cardList.length === 0) return [] as LaidOutRow[];

    const budget = gridContainerHeight;
    if (budget <= 0) return layoutAt(TARGET_ROW_HEIGHT);

    const maxRows = layoutAt(MAX_ROW_HEIGHT);
    if (totalLayoutHeight(maxRows) <= budget) return maxRows;

    let lo = MIN_ROW_HEIGHT;
    let hi = MAX_ROW_HEIGHT;
    let bestRows = layoutAt(lo);
    if (totalLayoutHeight(bestRows) > budget) return bestRows;

    for (let iter = 0; iter < 14 && hi - lo > 1; iter++) {
      const mid = (lo + hi) / 2;
      const rows = layoutAt(mid);
      if (totalLayoutHeight(rows) <= budget) {
        lo = mid;
        bestRows = rows;
      } else {
        hi = mid;
      }
    }
    return bestRows;
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
  contentBase="card bg-surface-100-900 p-0 space-y-0 shadow-xl flex flex-row h-full w-full max-w-none max-h-none overflow-hidden rounded-none"
  contentClasses={imageOpenState ? 'blur-sm' : ''}
  backdropClasses="backdrop-blur-sm"
>
  {#snippet content()}
    <!-- Collapsible Sidebar (no width when closed; expand button moves to header) -->
    <div
      class={`flex-shrink-0 h-full flex flex-col bg-surface-950 transition-all duration-300 overflow-hidden absolute inset-y-0 left-0 z-20 shadow-2xl sm:relative sm:z-auto sm:inset-auto sm:shadow-none ${sidebarOpen ? 'w-80 border-r border-surface-700' : 'w-0'}`}
    >
      <!-- Sidebar header bar — height matches main header for clean alignment -->
      <button
        class="flex items-center justify-start h-14 px-4 border-b border-surface-700 hover:bg-surface-800 transition-colors shrink-0"
        onclick={() => (sidebarOpen = false)}
      >
        <ChevronLeft size={24} />
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

          <div class="flex flex-col space-y-2">
            <span class="text-sm mb-2">Text Display</span>
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
                Role Only
              </button>
              <button
                class={`flex-1 px-2 py-1 text-xs rounded transition-colors ${textMode === 'image' ? 'bg-primary-500 text-white' : 'bg-surface-800 hover:bg-surface-700'}`}
                onclick={() => (textMode = 'image')}
              >
                Image Only
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

          {#if mechToggles.length > 0}
            <Separator class="my-3" />
            <div class="text-xs font-semibold text-surface-400 uppercase tracking-wide mb-2">
              Mech Toggles
            </div>
            {#each mechToggles as toggle}
              <div class="mb-3">
                <div class="text-sm mb-1.5">{toggle.label}</div>
                <div class="flex flex-wrap gap-1">
                  {#each toggle.options as option}
                    <button
                      class={`px-2 py-1 text-xs rounded transition-colors ${(stratState[toggle.key] ?? toggle.defaultValue ?? '') === option.value ? 'bg-primary-500 text-white' : 'bg-surface-800 hover:bg-surface-700'}`}
                      onclick={() => setStratState?.(toggle.key, option.value)}
                    >
                      {option.label}
                    </button>
                  {/each}
                </div>
              </div>
            {/each}
          {/if}

          <!-- Reset Button -->
          <button
            class="w-full mt-2 px-3 py-1.5 text-sm bg-surface-800 hover:bg-surface-700 text-surface-300 rounded transition-colors"
            onclick={() => (resetConfirmOpen = true)}
          >
            Reset Settings
          </button>

          <!-- Reset Confirmation Dialog -->
          <Modal bind:open={resetConfirmOpen} contentClasses="!max-w-sm !w-auto">
            {#snippet content()}
              <div class="p-4">
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
            {/snippet}
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
                        class={`flex-1 text-left text-xs px-2 py-1 rounded transition-colors truncate ${!isMechHidden(mechKey) ? 'bg-surface-800 text-surface-100' : 'bg-surface-900 text-surface-500 line-through'}`}
                        onclick={() => toggleMechVisibility(mechKey)}
                      >
                        {mech.mechanic}
                      </button>
                      <button
                        disabled={!hasImage(phase, mech)}
                        class={`p-1 rounded text-xs transition-colors ${!hasImage(phase, mech) ? 'opacity-30 cursor-not-allowed text-surface-600' : getCellSize(mechKey) === 'large' ? 'bg-primary-500 text-white' : 'bg-surface-800 text-surface-400 hover:text-white'}`}
                        onclick={() => toggleCellSize(mechKey)}
                        title={!hasImage(phase, mech)
                          ? 'No image available'
                          : getCellSize(mechKey) === 'large'
                            ? '2x2'
                            : '1x2'}
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
                    class={`flex-1 text-left text-xs px-2 py-1 rounded transition-colors ${!isMechHidden(phaseKey) ? 'bg-surface-800 text-surface-100' : 'bg-surface-900 text-surface-500 line-through'}`}
                    onclick={() => toggleMechVisibility(phaseKey)}
                  >
                    {phase.phaseName}
                  </button>
                  <button
                    disabled={!hasImage(phase)}
                    class={`p-1 rounded text-xs transition-colors ${!hasImage(phase) ? 'opacity-30 cursor-not-allowed text-surface-600' : getCellSize(phaseKey) === 'large' ? 'bg-primary-500 text-white' : 'bg-surface-800 text-surface-400 hover:text-white'}`}
                    onclick={() => toggleCellSize(phaseKey)}
                    title={!hasImage(phase)
                      ? 'No image available'
                      : getCellSize(phaseKey) === 'large'
                        ? '2x2'
                        : '1x2'}
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
        class="flex justify-between items-center gap-4 px-4 h-14 border-b border-surface-700 bg-surface-900/50 shrink-0"
      >
        <div class="flex items-center gap-2 min-w-0">
          {#if !sidebarOpen}
            <button
              class="flex items-center justify-center p-1 hover:bg-surface-700 rounded-xs transition-colors shrink-0"
              onclick={() => (sidebarOpen = true)}
              aria-label="Open sidebar"
            >
              <ChevronRight size={24} />
            </button>
          {/if}
          <div class="text-lg 3xl:text-2xl font-semibold truncate">{title}</div>
        </div>
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
          class="p-2 hover:bg-surface-700 rounded-xs transition-colors"
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
            class="card border shrink-0 w-64 border-surface-800 p-2 flex flex-col bg-surface-100-900 overflow-hidden relative"
          >
            <div
              class="grow relative"
              class:overflow-hidden={!timelineNeedsScroll}
              class:overflow-y-auto={timelineNeedsScroll}
              bind:clientHeight={timelineContainerHeight}
              onscroll={(e) => {
                const target = e.currentTarget as HTMLElement;
                timelineScrollTop = target.scrollTop;
                timelineScrollHeight = target.scrollHeight;
              }}
            >
              <div
                class="relative"
                style:height={timelineNeedsScroll ? `${timelineContentHeight}px` : '100%'}
              >
                {#each visibleTimelineItems as item, index}
                  <div
                    style:top={getTimelinePosition(index)}
                    class="absolute flex text-sm w-full items-center"
                  >
                    <div class="w-5 shrink-0">
                      <TimelineIcon mechType={item.mechType} variant="sm" />
                    </div>
                    <div class="w-10 text-[10px] text-surface-400">
                      {msToTime(item.startTimeMs)}
                    </div>
                    <div class="flex-1 overflow-hidden text-nowrap text-[12px]">
                      {item.mechName}
                    </div>
                  </div>
                {/each}
              </div>
            </div>
            {#if showTimelineScrollIndicator}
              <div
                class="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-surface-900 to-transparent pointer-events-none flex items-end justify-center pb-1"
              >
                <div class="text-[10px] text-surface-400 animate-pulse">scroll for more</div>
              </div>
            {/if}
          </div>
        {/if}

        {#snippet cardButton(spec, cardWidth, cardHeight)}
          {@const phase = spec.phase}
          {@const mech = spec.mech}
          {@const imgUrl = spec.imgUrl}
          {@const dims = imgUrl ? imageDimensions.get(imgUrl) : null}
          {@const mask = mech?.strats?.[0]?.mask ?? phase?.mask}
          {@const headerName = mech?.mechanic ?? phase.phaseName}
          {@const headerUrl = mech ? mech.url : phase.url}
          {@const stratDesc = mech?.strats?.[0]?.description}
          {@const stratToggleKey = mech?.strats?.[0]?.toggleKey}
          {@const desc = mech?.description ?? (mech ? null : phase?.description)}
          {@const showDesc = textMode === 'all' && desc}
          {@const showStrat = (textMode === 'all' || textMode === 'role') && stratDesc}
          {@const showHeader = textMode === 'all'}
          {@const showBottom = showDesc || showStrat}
          {@const showWarning =
            phase?.tag && stratState[phase.tag] !== getStratMechs(stratName ?? '')[phase.tag]}
          <button
            class="relative card border border-surface-700 overflow-hidden bg-surface-950 hover:border-surface-500 transition-colors cursor-pointer group shrink-0"
            style:width="{cardWidth}px"
            style:height="{cardHeight}px"
            onclick={() => openImageModal(phase, mech)}
          >
            {#if imgUrl}
              <img
                class="absolute inset-0 w-full h-full object-contain"
                src={imgUrl}
                alt={headerName}
                onload={(e) => handleImageLoad(e, imgUrl)}
              />
              {#if spotlight && showSpotlight && mask}
                <SpotlightOverlay {mask} imageWidth={dims?.width} imageHeight={dims?.height} />
              {/if}
            {/if}

            {#if showHeader}
              <div
                class="absolute top-0 left-0 right-0 bg-surface-950/80 px-2 pt-1.5 pb-1.5 pointer-events-none"
              >
                <div class="flex items-center justify-between gap-2">
                  <div class="min-w-0 pointer-events-auto">
                    {#if typeof headerUrl === 'string'}
                      <a
                        href={headerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="capitalize font-semibold text-base text-white hover:text-secondary-400 inline-flex items-center gap-1 leading-tight max-w-full"
                        onclick={(e) => e.stopPropagation()}
                      >
                        <span class="truncate">{headerName}</span>
                        <ExternalLink size={12} class="shrink-0" />
                      </a>
                    {:else}
                      <div class="flex items-baseline gap-x-2 min-w-0">
                        <span
                          class="capitalize font-semibold text-base text-white leading-tight truncate"
                        >
                          {headerName}
                        </span>
                      </div>
                    {/if}
                  </div>
                  <div class="flex items-center gap-2 shrink-0">
                    {#if mech}
                      <span
                        class="capitalize text-xs font-semibold uppercase tracking-wide text-surface-300 leading-tight"
                      >
                        {phase.phaseName}
                      </span>
                    {/if}
                    {#if showWarning}
                      <div class="pointer-events-auto flex">
                        <MechDiffWarning size={14} />
                      </div>
                    {/if}
                    <Expand
                      size={14}
                      class="opacity-0 group-hover:opacity-100 transition-opacity text-white"
                    />
                  </div>
                </div>
              </div>
            {/if}

            {#if showBottom}
              <div
                class={`absolute bottom-0 left-0 right-0 bg-surface-950/80 px-2 pt-1 pb-1.5 overflow-y-auto pointer-events-none text-left ${imgUrl ? 'max-h-[70%]' : ''}`}
              >
                <div class="pointer-events-auto space-y-1 text-left">
                  {#if showDesc}
                    <div
                      class="text-base text-surface-100 whitespace-pre-wrap leading-snug text-left"
                    >
                      {@html renderDebuffTokens(desc)}
                    </div>
                  {/if}
                  {#if showStrat}
                    <div
                      class="flex items-start gap-2 text-base text-surface-50 leading-snug text-left"
                    >
                      {#if stratToggleKey}
                        <span class="shrink-0">⏩</span>
                      {:else if role}
                        <RoleIcon {role} />
                      {/if}
                      <div class="whitespace-pre-wrap text-left flex-1 min-w-0">
                        {@html renderDebuffTokens(stratDesc)}
                      </div>
                    </div>
                  {/if}
                </div>
              </div>
            {/if}
          </button>
        {/snippet}

        <!-- Mechanic Cards Grid (justified gallery with macro rows) -->
        <div
          class="flex-1 flex flex-col gap-3 overflow-y-auto"
          bind:clientWidth={gridContainerWidth}
          bind:clientHeight={gridContainerHeight}
        >
          {#if !initialPrefetchDone}
            <div class="flex-1 flex items-center justify-center text-surface-400 text-sm">
              Loading images…
            </div>
          {:else if cardList.length === 0}
            <div class="flex-1 flex items-center justify-center text-surface-400 text-sm">
              No mechanics to display
            </div>
          {:else}
            {#each laidOutRows as row, ri (ri)}
              {#if row.kind === 'simple'}
                <div class="flex gap-3 shrink-0" style:height="{row.height}px">
                  {#each row.cards as card (card.spec.key)}
                    {@render cardButton(card.spec, card.width, card.height)}
                  {/each}
                </div>
              {:else}
                <div class="flex gap-3 shrink-0" style:height="{row.height}px">
                  {#each row.items as item, ii (ri + '-' + ii)}
                    {#if item.type === 'large'}
                      {@render cardButton(item.card.spec, item.card.width, item.card.height)}
                    {:else}
                      <div
                        class="flex flex-col gap-3 shrink-0"
                        style:width="{item.blockWidth}px"
                        style:height="{row.height}px"
                      >
                        {#if item.upper.length > 0}
                          <div class="flex gap-3 shrink-0" style:height="{item.smallHeight}px">
                            {#each item.upper as card (card.spec.key)}
                              {@render cardButton(card.spec, card.width, card.height)}
                            {/each}
                          </div>
                        {/if}
                        {#if item.lower.length > 0}
                          <div class="flex gap-3 shrink-0" style:height="{item.smallHeight}px">
                            {#each item.lower as card (card.spec.key)}
                              {@render cardButton(card.spec, card.width, card.height)}
                            {/each}
                          </div>
                        {/if}
                      </div>
                    {/if}
                  {/each}
                </div>
              {/if}
            {/each}
          {/if}
        </div>
      </div>
    </div>
  {/snippet}
</Modal>
