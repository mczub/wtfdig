<script lang="ts">
  import ArenaRenderer from '../../../components/poster/ArenaRenderer.svelte';
  import {
    type ArenaDiagramData,
    type ArenaElement,
    type ArenaShape,
    type GroupDef,
    type PlayerCorner,
    type PlayerJob,
    type VisibilityCondition,
    type WaymarkName,
    ROLE_COLORS,
    WAYMARK_COLORS,
    SQUARE_MARKERS,
    CIRCLE_MARKERS,
    ARROW_TELEPORTER_COLOR,
    evaluateVisibility
  } from '$lib/arena';
  import { DEBUFFS, getDebuff, type DebuffId } from '$lib/debuffs';
  import type { FightConfig, PosterLayout, PosterSectionDef } from '$lib/types';
  import {
    Copy,
    Crosshair,
    Trash2,
    Plus,
    RotateCcw,
    Download,
    ChevronDown,
    ChevronRight
  } from '@lucide/svelte/icons';

  const DEBUFF_IDS = Object.keys(DEBUFFS) as DebuffId[];
  const CORNER_KEYS: PlayerCorner[] = ['tl', 'tr', 'bl', 'br'];

  // --- Discover all fight data files that expose a poster layout. ----------
  // Eager glob: each module's *FightConfig export is checked for posterLayout.
  // (Eager is fine here — these modules are already in the SvelteKit bundle.)
  type FightModule = Record<string, unknown>;
  const fightModules = import.meta.glob<FightModule>('/src/routes/**/data.ts', { eager: true });

  interface FightPosterEntry {
    label: string; // e.g. "FRU", "UCOB"
    title: string; // e.g. "Futures Rewritten (Ultimate)"
    sections: { sectionTitle: string; layout: PosterLayout; section: PosterSectionDef }[];
  }

  const fightPosters: FightPosterEntry[] = (() => {
    const out: FightPosterEntry[] = [];
    for (const mod of Object.values(fightModules)) {
      for (const [key, val] of Object.entries(mod)) {
        if (!key.endsWith('FightConfig') || !val) continue;
        const cfg = val as FightConfig;
        if (!cfg.posterLayout) continue;
        out.push({
          label: cfg.abbreviatedTitle ?? cfg.fightKey?.toUpperCase() ?? key,
          title: cfg.title ?? key,
          sections: cfg.posterLayout.sections.map((s) => ({
            sectionTitle: s.title || '(untitled)',
            layout: cfg.posterLayout!,
            section: s
          }))
        });
      }
    }
    return out.sort((a, b) => a.label.localeCompare(b.label));
  })();

  let selectedFightLabel: string = $state('');
  let selectedSectionIdx: number = $state(-1);
  let selectedFightEntry = $derived(
    fightPosters.find((f) => f.label === selectedFightLabel) ?? null
  );

  function loadSelectedSection() {
    if (!selectedFightEntry || selectedSectionIdx < 0) return;
    const sec = selectedFightEntry.sections[selectedSectionIdx];
    if (!sec) return;
    // Resize canvas to match the section's grid footprint
    gridW = sec.section.w;
    gridH = sec.section.h;
    applyDiagramData(sec.section.arena);
  }

  // --- State ---
  let arenaShape: ArenaShape = $state('square');
  let showBackground = $state(true);
  let gridW: number = $state(4);
  let gridH: number = $state(4);
  let scale: number = $state(1);
  let elements: ArenaElement[] = $state([]);
  let groups: GroupDef[] = $state([]);
  let selected: Set<number> = $state(new Set());
  let placingType: string | null = $state(null);
  let placingSubtype: string | null = $state(null);
  let didMouseDownElement = false;
  // For two-point elements (arrow, tether): store first click point
  let twoPointStart: { x: number; y: number } | null = $state(null);

  // Preview state — drives ArenaRenderer's highlightJob so the user can see
  // how the diagram looks in Overall vs Role-selected modes (also dims
  // non-matching players and hides group elements whose `visibleWhen` fails).
  let previewJob: PlayerJob | undefined = $state(undefined);

  // "All Elements" preview: render every group regardless of `visibleWhen` so
  // the whole chart is visible and selectable at once.
  let previewAll = $state(false);

  // Collapse the Groups panel (state, not derived — survives selection changes).
  let groupsCollapsed = $state(false);

  // Groups currently hidden by the preview state. Mirrors the renderer's logic
  // so the editor can also skip interaction (overlay + marquee) on hidden elements.
  let hiddenGroupIds = $derived.by(() => {
    const out = new Set<string>();
    if (previewAll) return out;
    for (const g of groups) {
      if (!evaluateVisibility(g.visibleWhen, { selectedJob: previewJob })) {
        out.add(g.id);
      }
    }
    return out;
  });

  function isElementHidden(el: ArenaElement): boolean {
    return !!el.groupId && hiddenGroupIds.has(el.groupId);
  }

  // Drop selected indices whose element became hidden under the current preview,
  // so the property panel doesn't keep editing something the user can't see.
  $effect(() => {
    if (hiddenGroupIds.size === 0) return;
    let mutated = false;
    const next = new Set<number>();
    for (const idx of selected) {
      const el = elements[idx];
      if (el && isElementHidden(el)) {
        mutated = true;
        continue;
      }
      next.add(idx);
    }
    if (mutated) selected = next;
  });

  // --- Derived ---
  let diagramData: ArenaDiagramData = $derived({
    arena: arenaShape,
    elements,
    bgColor: showBackground ? undefined : 'transparent',
    scale: scale !== 1 ? scale : undefined,
    groups: groups.length ? groups : undefined
  });

  // For the property panel: only show when exactly one element is selected
  let selectedIndex = $derived(selected.size === 1 ? [...selected][0] : null);
  let selectedElement = $derived(selectedIndex !== null ? elements[selectedIndex] : null);

  // Canvas display zoom — multiplier on the rendered px size of the canvas.
  // Doesn't affect coordinates (the inner SVG uses viewBox); user-adjustable
  // via the resize handle in the bottom-right corner.
  let canvasZoom: number = $state(1);

  function handleCanvasResizeStart(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const startX = e.clientX;
    const startY = e.clientY;
    const startZoom = canvasZoom;
    const basePxW = gridW * 100;
    const basePxH = gridH * 100;
    // Use the larger of width/height delta so dragging either axis scales
    // proportionally. Min zoom 0.25, max zoom 4.
    function onMove(ev: MouseEvent) {
      const dx = ev.clientX - startX;
      const dy = ev.clientY - startY;
      const newW = basePxW * startZoom + dx;
      const newH = basePxH * startZoom + dy;
      const zoomFromW = newW / basePxW;
      const zoomFromH = newH / basePxH;
      const next = Math.max(zoomFromW, zoomFromH);
      canvasZoom = Math.min(4, Math.max(0.25, next));
    }
    function onUp() {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    }
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }

  // --- Coordinate conversion ---
  let svgEl: SVGSVGElement | undefined = $state();

  function svgCoords(e: MouseEvent): { x: number; y: number } | null {
    if (!svgEl) return null;
    const ctm = svgEl.getScreenCTM();
    if (!ctm) return null;
    const inv = ctm.inverse();
    const x = inv.a * e.clientX + inv.c * e.clientY + inv.e;
    const y = inv.b * e.clientX + inv.d * e.clientY + inv.f;
    return { x: Math.round(x), y: Math.round(y) };
  }

  // --- Placing elements ---
  function startPlace(type: string, subtype?: string) {
    placingType = type;
    placingSubtype = subtype ?? null;
    selected = new Set();
  }

  function handleCanvasClick(e: MouseEvent) {
    if (didMouseDownElement) {
      didMouseDownElement = false;
      return;
    }

    const coords = svgCoords(e);
    if (!coords) return;

    if (placingType) {
      const elX = Math.round(coords.x / scale);
      const elY = Math.round(coords.y / scale);

      // Two-point elements: arrow, tether, curvedArrow
      if (placingType === 'arrow' || placingType === 'tether' || placingType === 'curvedArrow') {
        if (!twoPointStart) {
          twoPointStart = { x: elX, y: elY };
          return;
        }
        const newEl = createTwoPointElement(placingType, twoPointStart, { x: elX, y: elY });
        if (newEl) {
          elements = [...elements, newEl];
          selected = new Set([elements.length - 1]);
        }
        twoPointStart = null;
        placingType = null;
        placingSubtype = null;
        return;
      }

      const newEl = createElementAt(placingType, placingSubtype, elX, elY);
      if (newEl) {
        elements = [...elements, newEl];
        selected = new Set([elements.length - 1]);
      }
      placingType = null;
      placingSubtype = null;
      return;
    }

    // Click on empty space = deselect
    selected = new Set();
  }

  function createTwoPointElement(
    type: string,
    from: { x: number; y: number },
    to: { x: number; y: number }
  ): ArenaElement | null {
    switch (type) {
      case 'arrow':
        return { type: 'arrow', x1: from.x, y1: from.y, x2: to.x, y2: to.y };
      case 'tether':
        return { type: 'tether', x1: from.x, y1: from.y, x2: to.x, y2: to.y };
      case 'curvedArrow':
        return { type: 'curvedArrow', x1: from.x, y1: from.y, x2: to.x, y2: to.y, curvature: 6 };
      default:
        return null;
    }
  }

  function createElementAt(
    type: string,
    subtype: string | null,
    x: number,
    y: number
  ): ArenaElement | null {
    switch (type) {
      case 'player':
        return { type: 'player', job: (subtype ?? 'MT') as PlayerJob, x, y };
      case 'boss':
        return { type: 'boss', x, y };
      case 'waymark':
        return { type: 'waymark', mark: (subtype ?? 'A') as WaymarkName, x, y };
      case 'aoe-circle':
        return { type: 'aoe', shape: 'circle', x, y, r: 12 };
      case 'aoe-rect':
        return { type: 'aoe', shape: 'rect', x, y, w: 20, h: 20 };
      case 'arena-square':
        return { type: 'arena', shape: 'square', x, y, w: 50, h: 50 };
      case 'arena-circle':
        return { type: 'arena', shape: 'circle', x, y, w: 50, h: 50 };
      case 'arena-rect':
        return { type: 'arena', shape: 'rect', x, y, w: 60, h: 40 };
      case 'text':
        return { type: 'text', text: 'Label', x, y };
      case 'debuff':
        return { type: 'debuff', debuffId: subtype ?? DEBUFF_IDS[0], x, y };
      case 'arrowTeleporter':
        return { type: 'arrowTeleporter', x, y, rotation: 0 };
      case 'polygon':
        // Default triangle around click point
        return {
          type: 'polygon',
          points: [
            [x, y - 10],
            [x - 9, y + 6],
            [x + 9, y + 6]
          ]
        };
      default:
        return null;
    }
  }

  // --- Dragging ---
  let dragging = $state(false);

  // --- Drag-select (marquee) ---
  // Stored in SVG viewBox coords (what svgCoords returns). Element positions
  // are in arena units, so we multiply by `scale` to compare.
  let marquee: { x1: number; y1: number; x2: number; y2: number } | null = $state(null);

  function elementCenter(el: ArenaElement): { x: number; y: number } | null {
    if ('points' in el) {
      const n = el.points.length;
      if (n === 0) return null;
      const sx = el.points.reduce((s, p) => s + p[0], 0);
      const sy = el.points.reduce((s, p) => s + p[1], 0);
      return { x: sx / n, y: sy / n };
    }
    if ('x1' in el) {
      return { x: (el.x1 + el.x2) / 2, y: (el.y1 + el.y2) / 2 };
    }
    if ('x' in el && 'y' in el) {
      return { x: el.x, y: el.y };
    }
    return null;
  }

  function handleCanvasMouseDown(e: MouseEvent) {
    // Only start marquee on background clicks. Element overlays stopPropagation,
    // so this only fires when the mousedown landed on the SVG itself.
    if (placingType) return;
    if (e.button !== 0) return;
    const start = svgCoords(e);
    if (!start) return;
    didMouseDownElement = false;
    const additive = e.shiftKey;
    const baseSelection = additive ? new Set(selected) : new Set<number>();
    marquee = { x1: start.x, y1: start.y, x2: start.x, y2: start.y };

    function onMove(me: MouseEvent) {
      const c = svgCoords(me);
      if (!c || !marquee) return;
      marquee = { ...marquee, x2: c.x, y2: c.y };
    }
    function onUp() {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      if (!marquee) return;
      const { x1, y1, x2, y2 } = marquee;
      const minX = Math.min(x1, x2);
      const maxX = Math.max(x1, x2);
      const minY = Math.min(y1, y2);
      const maxY = Math.max(y1, y2);
      // Tiny drag → treat as a click (let handleCanvasClick deselect).
      const isTinyDrag = maxX - minX < 1 && maxY - minY < 1;
      marquee = null;
      if (isTinyDrag) return;
      didMouseDownElement = true; // suppress the deselect-on-click
      const hits = new Set(baseSelection);
      elements.forEach((el, i) => {
        if (isElementHidden(el)) return;
        const c = elementCenter(el);
        if (!c) return;
        const cx = c.x * scale;
        const cy = c.y * scale;
        if (cx >= minX && cx <= maxX && cy >= minY && cy <= maxY) hits.add(i);
      });
      selected = hits;
    }
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }

  function handleElementMouseDown(index: number, e: MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    didMouseDownElement = true;

    if (e.ctrlKey || e.metaKey) {
      // Toggle selection
      const next = new Set(selected);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      selected = next;
      return;
    }

    // If clicking an already-selected element, keep multi-selection for dragging
    if (!selected.has(index)) {
      selected = new Set([index]);
    }

    dragging = true;
    const startCoords = svgCoords(e);
    if (!startCoords) return;

    // Snapshot positions of all selected elements
    const startPositions = new Map<number, any>();
    for (const idx of selected) {
      const el = elements[idx] as any;
      if (el.type === 'polygon') {
        startPositions.set(idx, { points: el.points.map((p: [number, number]) => [...p]) });
      } else if ('x' in el) {
        startPositions.set(idx, { x: el.x, y: el.y });
      } else if ('x1' in el) {
        startPositions.set(idx, { x1: el.x1, y1: el.y1, x2: el.x2, y2: el.y2 });
      }
    }

    function onMove(me: MouseEvent) {
      const coords = svgCoords(me);
      if (!coords) return;
      const dx = (coords.x - startCoords!.x) / scale;
      const dy = (coords.y - startCoords!.y) / scale;

      elements = elements.map((el, i) => {
        const start = startPositions.get(i);
        if (!start) return el;
        if (start.points) {
          return {
            ...el,
            points: start.points.map((p: [number, number]) => [
              round2(p[0] + dx),
              round2(p[1] + dy)
            ])
          } as ArenaElement;
        }
        if ('x1' in start) {
          return {
            ...el,
            x1: round2(start.x1 + dx),
            y1: round2(start.y1 + dy),
            x2: round2(start.x2 + dx),
            y2: round2(start.y2 + dy)
          } as ArenaElement;
        }
        return { ...el, x: round2(start.x + dx), y: round2(start.y + dy) } as ArenaElement;
      });
    }

    function onUp() {
      dragging = false;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    }

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }

  function handlePolyVertexDrag(index: number, vertexIdx: number, e: MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    didMouseDownElement = true;
    selected = new Set([index]);

    const startCoords = svgCoords(e);
    if (!startCoords) return;
    const el = elements[index] as any;
    const startPos = [el.points[vertexIdx][0], el.points[vertexIdx][1]];

    function onMove(me: MouseEvent) {
      const coords = svgCoords(me);
      if (!coords) return;
      const dx = (coords.x - startCoords!.x) / scale;
      const dy = (coords.y - startCoords!.y) / scale;
      elements = elements.map((e, i) => {
        if (i !== index) return e;
        const newEl = { ...e } as any;
        newEl.points = (e as any).points.map((p: [number, number], pi: number) =>
          pi === vertexIdx
            ? ([round2(startPos[0] + dx), round2(startPos[1] + dy)] as [number, number])
            : p
        );
        return newEl as ArenaElement;
      });
    }

    function onUp() {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    }

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }

  function handleEndpointDrag(index: number, endpoint: 'start' | 'end', e: MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    didMouseDownElement = true;
    selected = new Set([index]);

    const startCoords = svgCoords(e);
    if (!startCoords) return;
    const el = elements[index] as any;
    const startPos = endpoint === 'start' ? { x: el.x1, y: el.y1 } : { x: el.x2, y: el.y2 };

    function onMove(me: MouseEvent) {
      const coords = svgCoords(me);
      if (!coords) return;
      const dx = (coords.x - startCoords!.x) / scale;
      const dy = (coords.y - startCoords!.y) / scale;
      const xKey = endpoint === 'start' ? 'x1' : 'x2';
      const yKey = endpoint === 'start' ? 'y1' : 'y2';
      elements = elements.map((el, i) =>
        i === index
          ? ({
              ...el,
              [xKey]: round2(startPos.x + dx),
              [yKey]: round2(startPos.y + dy)
            } as ArenaElement)
          : el
      );
    }

    function onUp() {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    }

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }

  // --- Element operations ---
  function deleteSelected() {
    if (selected.size === 0) return;
    elements = elements.filter((_, i) => !selected.has(i));
    selected = new Set();
  }

  function centerSelected() {
    if (selectedIndex === null) return;
    // Element coords live in a viewBox of (gridW*25) × (gridH*25) and are then
    // multiplied by `scale`, so the visual center in element space is viewBox/2/scale.
    const cx = (gridW * 25) / 2 / scale;
    const cy = (gridH * 25) / 2 / scale;
    const el = { ...elements[selectedIndex] } as any;
    if ('x1' in el) {
      // Two-point element: shift so midpoint lands at (cx, cy)
      const dx = cx - (el.x1 + el.x2) / 2;
      const dy = cy - (el.y1 + el.y2) / 2;
      el.x1 += dx;
      el.y1 += dy;
      el.x2 += dx;
      el.y2 += dy;
    } else if ('x' in el) {
      el.x = cx;
      el.y = cy;
    }
    for (const k of Object.keys(el)) {
      if (typeof el[k] === 'number') el[k] = round2(el[k]);
    }
    elements = elements.map((e, i) => (i === selectedIndex ? el : e));
  }

  function duplicateSelected() {
    if (selected.size === 0) return;
    const newEls: ArenaElement[] = [];
    for (const idx of selected) {
      const el = { ...elements[idx] } as any;
      if (el.type === 'polygon') {
        el.points = el.points.map((p: [number, number]) => [p[0] + 5, p[1] + 5]);
      } else {
        if ('x' in el) el.x += 5;
        if ('y' in el) el.y += 5;
        if ('x1' in el) {
          el.x1 += 5;
          el.y1 += 5;
          el.x2 += 5;
          el.y2 += 5;
        }
      }
      newEls.push(el);
    }
    const startIdx = elements.length;
    elements = [...elements, ...newEls];
    selected = new Set(newEls.map((_, i) => startIdx + i));
  }

  function selectAll() {
    selected = new Set(elements.map((_, i) => i));
  }

  const round2 = (n: number) => Math.round(n * 100) / 100;

  function updateElement(key: string, value: any) {
    if (selectedIndex === null) return;
    if (typeof value === 'number') value = round2(value);
    const el = { ...elements[selectedIndex], [key]: value } as ArenaElement;
    elements = elements.map((e, i) => (i === selectedIndex ? el : e));
  }

  function addWaymarkPreset() {
    const preset = arenaShape === 'square' ? SQUARE_MARKERS : CIRCLE_MARKERS;
    elements = [...elements, ...preset.map((w) => ({ ...w }))];
  }

  function clearAll() {
    elements = [];
    selected = new Set();
  }

  // --- Groups management ---
  function addGroup() {
    const existing = new Set(groups.map((g) => g.id));
    let n = groups.length + 1;
    let id = `group-${n}`;
    while (existing.has(id)) id = `group-${++n}`;
    groups = [...groups, { id }];
  }

  function removeGroup(idx: number) {
    const removedId = groups[idx]?.id;
    groups = groups.filter((_, i) => i !== idx);
    if (removedId) {
      elements = elements.map((el) =>
        el.groupId === removedId ? { ...el, groupId: undefined } : el
      );
    }
  }

  function updateGroup(idx: number, patch: Partial<GroupDef>) {
    const oldId = groups[idx]?.id;
    groups = groups.map((g, i) => (i === idx ? { ...g, ...patch } : g));
    // Cascade id rename to elements.
    if (patch.id && oldId && patch.id !== oldId) {
      elements = elements.map((el) => (el.groupId === oldId ? { ...el, groupId: patch.id } : el));
    }
  }

  function updateGroupCondition(idx: number, patch: Partial<VisibilityCondition>) {
    const g = groups[idx];
    if (!g) return;
    const cond = { ...(g.visibleWhen ?? {}) };
    for (const [k, v] of Object.entries(patch)) {
      if (v === undefined) delete (cond as any)[k];
      else (cond as any)[k] = v;
    }
    const isEmpty = Object.keys(cond).length === 0;
    updateGroup(idx, { visibleWhen: isEmpty ? undefined : cond });
  }

  function toggleGroupJob(idx: number, job: PlayerJob) {
    const g = groups[idx];
    const current = g?.visibleWhen?.jobs ?? [];
    const next = current.includes(job) ? current.filter((j) => j !== job) : [...current, job];
    updateGroupCondition(idx, { jobs: next.length ? next : undefined });
  }

  function parseStratKeyList(s: string): string[] | undefined {
    const list = s
      .split(',')
      .map((p) => p.trim())
      .filter(Boolean);
    return list.length ? list : undefined;
  }

  // Jobs offered by the visibility job-picker (specifics + role generics).
  const VIS_JOBS: PlayerJob[] = [
    'MT',
    'OT',
    'H1',
    'H2',
    'M1',
    'M2',
    'R1',
    'R2',
    'TANK',
    'HEALER',
    'MELEE',
    'RANGED',
    'HTM',
    'TMR',
    'DPS',
    'SUP',
    'G1',
    'G2',
    'G1SUP',
    'G1DPS',
    'G2SUP',
    'G2DPS',
    'ANY'
  ];

  // --- Code generation ---
  let generatedCode = $derived(generateCode());

  /**
   * Splice `groupId: 'x'` into a generated element line. Handles both forms:
   * trailing `)` (no opts) and trailing `})` (existing opts).
   */
  function withGroupId(line: string, groupId: string | undefined): string {
    if (!groupId) return line;
    const trimmed = line.replace(/\)$/, '');
    if (trimmed.endsWith('}')) {
      return trimmed.replace(/\}$/, `, groupId: '${groupId}' }`) + ')';
    }
    return trimmed + `, { groupId: '${groupId}' })`;
  }

  function stringifyCondition(cond: VisibilityCondition): string {
    const parts: string[] = [];
    if (cond.whenRoleSelected === true) parts.push(`whenRoleSelected: true`);
    if (cond.whenRoleSelected === false) parts.push(`whenRoleSelected: false`);
    if (cond.jobs?.length) {
      parts.push(`jobs: [${cond.jobs.map((j) => `'${j}'`).join(', ')}]`);
    }
    if (cond.strat && Object.keys(cond.strat).length > 0) {
      const entries = Object.entries(cond.strat).map(
        ([tag, vals]) => `'${tag}': [${vals.map((v) => `'${v}'`).join(', ')}]`
      );
      parts.push(`strat: { ${entries.join(', ')} }`);
    }
    if (cond.stratKey?.length) {
      parts.push(`stratKey: [${cond.stratKey.map((k) => `'${k}'`).join(', ')}]`);
    }
    return `{ ${parts.join(', ')} }`;
  }

  function stringifyGroup(g: GroupDef): string {
    const parts: string[] = [`id: '${g.id}'`];
    if (g.label) parts.push(`label: '${g.label}'`);
    if (g.visibleWhen) parts.push(`visibleWhen: ${stringifyCondition(g.visibleWhen)}`);
    return `    { ${parts.join(', ')} }`;
  }

  function generateCode(): string {
    const imports = new Set<string>();
    imports.add('diagram');

    const elStrs = elements
      .map((el) => {
        switch (el.type) {
          case 'player':
            imports.add('player');
            {
              const hasCorners = el.corners && Object.keys(el.corners).length > 0;
              const hasSize = el.size != null && el.size !== 6;
              const hasOpts = el.marker || el.id || hasCorners || hasSize || el.statusAbove;
              if (hasOpts) {
                const opts: string[] = [];
                if (el.id) opts.push(`id: '${el.id}'`);
                if (el.marker) opts.push(`marker: '${el.marker}'`);
                if (el.statusAbove) opts.push(`statusAbove: '${el.statusAbove}'`);
                if (hasSize) opts.push(`size: ${el.size}`);
                if (hasCorners) {
                  const cornerStr = Object.entries(el.corners!)
                    .map(([k, v]) => `${k}: '${v}'`)
                    .join(', ');
                  opts.push(`corners: { ${cornerStr} }`);
                }
                return `  player('${el.job}', ${el.x}, ${el.y}, { ${opts.join(', ')} })`;
              }
              return `  player('${el.job}', ${el.x}, ${el.y})`;
            }
          case 'boss': {
            imports.add('boss');
            const hasBossSize = el.size != null && el.size !== 12;
            const hasRing = el.ring != null && el.ring !== 'directional';
            // Fold options into a trailing `{ ... }` when size/ring is set, or when
            // a groupId is present alongside rotation, so withGroupId can merge
            // groupId into a single trailing opts object.
            if (hasBossSize || hasRing || (el.groupId && el.rotation)) {
              const bossOpts: string[] = [];
              if (el.rotation) bossOpts.push(`rotation: ${el.rotation}`);
              if (hasBossSize) bossOpts.push(`size: ${el.size}`);
              if (hasRing) bossOpts.push(`ring: '${el.ring}'`);
              return `  boss(${el.x}, ${el.y}, { ${bossOpts.join(', ')} })`;
            }
            return `  boss(${el.x}, ${el.y}${el.rotation ? `, ${el.rotation}` : ''})`;
          }
          case 'waymark':
            imports.add('waymark');
            if (el.size != null && el.size !== 4) {
              return `  waymark('${el.mark}', ${el.x}, ${el.y}, { size: ${el.size} })`;
            }
            return `  waymark('${el.mark}', ${el.x}, ${el.y})`;
          case 'aoe':
            if (el.shape === 'circle') {
              imports.add('aoeCircle');
              const opts: string[] = [];
              if (el.ry != null && el.ry !== el.r) opts.push(`ry: ${el.ry}`);
              if (el.rotation) opts.push(`rotation: ${el.rotation}`);
              if (el.color) opts.push(`color: '${el.color}'`);
              if (el.opacity != null) opts.push(`opacity: ${el.opacity}`);
              const optsStr = opts.length > 0 ? `, { ${opts.join(', ')} }` : '';
              return `  aoeCircle(${el.x}, ${el.y}, ${el.r}${optsStr})`;
            } else {
              imports.add('aoeRect');
              const opts: string[] = [];
              if (el.rotation) opts.push(`rotation: ${el.rotation}`);
              if (el.color) opts.push(`color: '${el.color}'`);
              if (el.opacity != null) opts.push(`opacity: ${el.opacity}`);
              const optsStr = opts.length > 0 ? `, { ${opts.join(', ')} }` : '';
              return `  aoeRect(${el.x}, ${el.y}, ${el.w}, ${el.h}${optsStr})`;
            }
          case 'tether':
            imports.add('tether');
            const tOpts: string[] = [];
            if (el.color) tOpts.push(`color: '${el.color}'`);
            if (el.width) tOpts.push(`width: ${el.width}`);
            if (el.dashed) tOpts.push('dashed: true');
            const tOptsStr = tOpts.length > 0 ? `, { ${tOpts.join(', ')} }` : '';
            return `  tether(${el.x1}, ${el.y1}, ${el.x2}, ${el.y2}${tOptsStr})`;
          case 'arrow':
            imports.add('arrow');
            const aOpts: string[] = [];
            if (el.color) aOpts.push(`color: '${el.color}'`);
            if (el.width) aOpts.push(`width: ${el.width}`);
            if (el.heads && el.heads !== 'end') aOpts.push(`heads: '${el.heads}'`);
            const aOptsStr = aOpts.length > 0 ? `, { ${aOpts.join(', ')} }` : '';
            return `  arrow(${el.x1}, ${el.y1}, ${el.x2}, ${el.y2}${aOptsStr})`;
          case 'curvedArrow':
            imports.add('curvedArrow');
            {
              const opts: string[] = [];
              if (el.curvature != null && el.curvature !== 6)
                opts.push(`curvature: ${el.curvature}`);
              if (el.color) opts.push(`color: '${el.color}'`);
              if (el.width) opts.push(`width: ${el.width}`);
              if (el.heads && el.heads !== 'end') opts.push(`heads: '${el.heads}'`);
              const optsStr = opts.length > 0 ? `, { ${opts.join(', ')} }` : '';
              return `  curvedArrow(${el.x1}, ${el.y1}, ${el.x2}, ${el.y2}${optsStr})`;
            }
          case 'arrowTeleporter':
            imports.add('arrowTeleporter');
            {
              const opts: string[] = [];
              if (el.rotation) opts.push(`rotation: ${el.rotation}`);
              if (el.size != null) opts.push(`size: ${el.size}`);
              if (el.color) opts.push(`color: '${el.color}'`);
              const optsStr = opts.length > 0 ? `, { ${opts.join(', ')} }` : '';
              return `  arrowTeleporter(${el.x}, ${el.y}${optsStr})`;
            }
          case 'polygon':
            imports.add('polygon');
            {
              const ptsStr = el.points.map((p) => `[${p[0]}, ${p[1]}]`).join(', ');
              const opts: string[] = [];
              if (el.color) opts.push(`color: '${el.color}'`);
              if (el.opacity != null) opts.push(`opacity: ${el.opacity}`);
              if (el.rotation) opts.push(`rotation: ${el.rotation}`);
              if (el.outline) opts.push('outline: true');
              const optsStr = opts.length > 0 ? `, { ${opts.join(', ')} }` : '';
              return `  polygon([${ptsStr}]${optsStr})`;
            }
          case 'arena':
            imports.add('arenaShape');
            {
              const opts: string[] = [];
              if (el.rotation) opts.push(`rotation: ${el.rotation}`);
              if (el.bgColor) opts.push(`bgColor: '${el.bgColor}'`);
              if (el.borderColor) opts.push(`borderColor: '${el.borderColor}'`);
              if (el.showCrosshairs === false) opts.push('showCrosshairs: false');
              if (el.bgImage) opts.push(`bgImage: '${el.bgImage}'`);
              const optsStr = opts.length > 0 ? `, { ${opts.join(', ')} }` : '';
              return `  arenaShape('${el.shape}', ${el.x}, ${el.y}, ${el.w}, ${el.h}${optsStr})`;
            }
          case 'text':
            imports.add('text');
            const txtOpts: string[] = [];
            if (el.color) txtOpts.push(`color: '${el.color}'`);
            if (el.fontSize) txtOpts.push(`fontSize: ${el.fontSize}`);
            if (el.anchor) txtOpts.push(`anchor: '${el.anchor}'`);
            const txtOptsStr = txtOpts.length > 0 ? `, { ${txtOpts.join(', ')} }` : '';
            const escapedText = el.text.includes('\n') ? el.text.replace(/\n/g, '\\n') : el.text;
            return `  text('${escapedText}', ${el.x}, ${el.y}${txtOptsStr})`;
          case 'debuff':
            imports.add('debuff');
            {
              const opts: string[] = [];
              if (el.size != null) opts.push(`size: ${el.size}`);
              if (el.id) opts.push(`id: '${el.id}'`);
              const optsStr = opts.length > 0 ? `, { ${opts.join(', ')} }` : '';
              return `  debuff('${el.debuffId}', ${el.x}, ${el.y}${optsStr})`;
            }
          default:
            return `  // unknown element`;
        }
      })
      .map((str, i) => withGroupId(str, elements[i].groupId));

    // Only use the SQUARE_MARKERS / CIRCLE_MARKERS shorthand when every waymark
    // matches the preset exactly (same mark, position, default size, no group).
    // Any custom size, moved waymark, or group assignment forces individual emission.
    const presetMarkers = arenaShape === 'square' ? SQUARE_MARKERS : CIRCLE_MARKERS;
    const waymarkEls = elements.filter(
      (e): e is Extract<ArenaElement, { type: 'waymark' }> => e.type === 'waymark'
    );
    const matchesPreset =
      waymarkEls.length === presetMarkers.length &&
      presetMarkers.every((preset) => {
        const match = waymarkEls.find((e) => e.mark === preset.mark);
        if (!match) return false;
        if (match.size != null && match.size !== 4) return false;
        if (match.groupId) return false;
        return match.x === preset.x && match.y === preset.y;
      });
    if (matchesPreset) {
      imports.add(arenaShape === 'square' ? 'SQUARE_MARKERS' : 'CIRCLE_MARKERS');
    } else if (waymarkEls.length > 0) {
      imports.add('waymark');
    }

    const importStr = `import { ${[...imports].join(', ')} } from '$lib/arena';`;
    const lines: string[] = [importStr, '', `// Grid: ${gridW}w × ${gridH}h`];

    const diagramOpts: string[] = [];
    if (!showBackground) diagramOpts.push(`bgColor: 'transparent'`);
    if (scale !== 1) diagramOpts.push(`scale: ${scale}`);

    lines.push(`diagram('${arenaShape}', [`);

    if (matchesPreset) {
      lines.push(`  ...${arenaShape === 'square' ? 'SQUARE_MARKERS' : 'CIRCLE_MARKERS'},`);
      for (let idx = 0; idx < elStrs.length; idx++) {
        if (elements[idx].type !== 'waymark') lines.push(elStrs[idx] + ',');
      }
    } else {
      for (const str of elStrs) {
        lines.push(str + ',');
      }
    }

    // Groups are emitted multi-line in the diagram opts; other opts stay inline.
    if (groups.length > 0) {
      const optsInline = diagramOpts.length > 0 ? `${diagramOpts.join(', ')}, ` : '';
      lines.push(`], {`);
      if (optsInline) lines.push(`  ${optsInline}`);
      lines.push(`  groups: [`);
      groups.forEach((g, i) => {
        lines.push(`${stringifyGroup(g)}${i < groups.length - 1 ? ',' : ''}`);
      });
      lines.push(`  ]`);
      lines.push(`})`);
    } else {
      const optsStr = diagramOpts.length > 0 ? `, { ${diagramOpts.join(', ')} }` : '';
      lines.push(`]${optsStr})`);
    }
    return lines.join('\n');
  }

  function copyCode() {
    navigator.clipboard.writeText(generatedCode);
    copied = true;
    setTimeout(() => (copied = false), 1500);
  }

  let copied = $state(false);
  let jsonImport = $state('');
  let jsonError = $state('');

  function parseCodeImport(code: string): ArenaDiagramData | null {
    // Match diagram('shape', [...], { opts })
    const diagramMatch = code.match(/diagram\(\s*'(square|circle)'\s*,\s*\[/);
    if (!diagramMatch) return null;

    const shape = diagramMatch[1] as ArenaShape;
    const els: ArenaElement[] = [];

    const N = '-?[\\d.]+'; // number pattern (int or float)
    // Opts block allowing one level of nesting (for corners: { ... })
    const OPTS = '\\{((?:[^{}]|\\{[^{}]*\\})*)\\}';
    // Parse player('JOB', x, y, 'id'?) or player('JOB', x, y, { opts })
    for (const m of code.matchAll(
      new RegExp(
        `player\\(\\s*'(\\w+)'\\s*,\\s*(${N})\\s*,\\s*(${N})(?:\\s*,\\s*(?:'(\\w+)'|${OPTS}))?\\s*\\)`,
        'g'
      )
    )) {
      const rawOpts = m[5] ?? '';
      // Extract corners first, then strip it so parseInlineOpts sees simple keys
      const cornersMatch = rawOpts.match(/corners\s*:\s*\{([^}]*)\}/);
      const corners: Partial<Record<PlayerCorner, string>> = {};
      if (cornersMatch) {
        for (const cm of cornersMatch[1].matchAll(/(\w+)\s*:\s*'([^']+)'/g)) {
          corners[cm[1] as PlayerCorner] = cm[2];
        }
      }
      const restOpts = rawOpts.replace(/corners\s*:\s*\{[^}]*\}\s*,?\s*/, '');
      const opts = restOpts ? parseInlineOpts(restOpts) : {};
      els.push({
        type: 'player',
        job: m[1] as PlayerJob,
        x: +m[2],
        y: +m[3],
        id: m[4] || (opts.id as string | undefined),
        marker: opts.marker as 'red' | 'green' | undefined,
        statusAbove: opts.statusAbove as string | undefined,
        size: opts.size as number | undefined,
        groupId: opts.groupId as string | undefined,
        corners: Object.keys(corners).length ? corners : undefined
      });
    }
    // Parse boss(x, y), boss(x, y, rotation), or boss(x, y, { opts })
    for (const m of code.matchAll(
      new RegExp(
        `boss\\(\\s*(${N})\\s*,\\s*(${N})(?:\\s*,\\s*(?:(${N})|\\{([^}]*)\\}))?\\s*\\)`,
        'g'
      )
    )) {
      const opts = m[4] ? parseInlineOpts(m[4]) : {};
      els.push({
        type: 'boss',
        x: +m[1],
        y: +m[2],
        rotation: m[3] ? +m[3] : (opts.rotation as number | undefined),
        size: opts.size as number | undefined,
        ring: opts.ring as 'directional' | 'circle' | undefined,
        groupId: opts.groupId as string | undefined
      });
    }
    // Parse waymark('M', x, y) or waymark('M', x, y, { size })
    for (const m of code.matchAll(
      new RegExp(
        `waymark\\(\\s*'(\\w)'\\s*,\\s*(${N})\\s*,\\s*(${N})(?:\\s*,\\s*\\{([^}]*)\\})?\\s*\\)`,
        'g'
      )
    )) {
      const opts = parseInlineOpts(m[4]);
      els.push({
        type: 'waymark',
        mark: m[1] as WaymarkName,
        x: +m[2],
        y: +m[3],
        size: opts.size as number | undefined,
        groupId: opts.groupId as string | undefined
      });
    }
    // Parse aoeCircle(x, y, r, { opts })
    for (const m of code.matchAll(
      new RegExp(
        `aoeCircle\\(\\s*(${N})\\s*,\\s*(${N})\\s*,\\s*(${N})(?:\\s*,\\s*\\{([^}]*)\\})?\\s*\\)`,
        'g'
      )
    )) {
      const opts = parseInlineOpts(m[4]);
      els.push({ type: 'aoe', shape: 'circle', x: +m[1], y: +m[2], r: +m[3], ...opts });
    }
    // Parse aoeRect(x, y, w, h, { opts })
    for (const m of code.matchAll(
      new RegExp(
        `aoeRect\\(\\s*(${N})\\s*,\\s*(${N})\\s*,\\s*(${N})\\s*,\\s*(${N})(?:\\s*,\\s*\\{([^}]*)\\})?\\s*\\)`,
        'g'
      )
    )) {
      const opts = parseInlineOpts(m[5]);
      els.push({ type: 'aoe', shape: 'rect', x: +m[1], y: +m[2], w: +m[3], h: +m[4], ...opts });
    }
    // Parse tether(x1, y1, x2, y2, { opts })
    for (const m of code.matchAll(
      new RegExp(
        `tether\\(\\s*(${N})\\s*,\\s*(${N})\\s*,\\s*(${N})\\s*,\\s*(${N})(?:\\s*,\\s*\\{([^}]*)\\})?\\s*\\)`,
        'g'
      )
    )) {
      const opts = parseInlineOpts(m[5]);
      els.push({ type: 'tether', x1: +m[1], y1: +m[2], x2: +m[3], y2: +m[4], ...opts });
    }
    // Parse arrow(x1, y1, x2, y2, { opts }) — match standalone arrow only, not curvedArrow
    for (const m of code.matchAll(
      new RegExp(
        `(?<!curved)arrow\\(\\s*(${N})\\s*,\\s*(${N})\\s*,\\s*(${N})\\s*,\\s*(${N})(?:\\s*,\\s*\\{([^}]*)\\})?\\s*\\)`,
        'g'
      )
    )) {
      const opts = parseInlineOpts(m[5]);
      els.push({ type: 'arrow', x1: +m[1], y1: +m[2], x2: +m[3], y2: +m[4], ...opts });
    }
    // Parse curvedArrow(x1, y1, x2, y2, { opts })
    for (const m of code.matchAll(
      new RegExp(
        `curvedArrow\\(\\s*(${N})\\s*,\\s*(${N})\\s*,\\s*(${N})\\s*,\\s*(${N})(?:\\s*,\\s*\\{([^}]*)\\})?\\s*\\)`,
        'g'
      )
    )) {
      const opts = parseInlineOpts(m[5]);
      els.push({
        type: 'curvedArrow',
        x1: +m[1],
        y1: +m[2],
        x2: +m[3],
        y2: +m[4],
        ...opts
      });
    }
    // Parse polygon([[x,y], [x,y], ...], { opts })
    for (const m of code.matchAll(
      new RegExp(`polygon\\(\\s*\\[([\\s\\S]*?)\\]\\s*(?:,\\s*\\{([^}]*)\\})?\\s*\\)`, 'g')
    )) {
      const ptsRaw = m[1];
      const points: [number, number][] = [];
      for (const pm of ptsRaw.matchAll(new RegExp(`\\[\\s*(${N})\\s*,\\s*(${N})\\s*\\]`, 'g'))) {
        points.push([+pm[1], +pm[2]]);
      }
      if (points.length >= 3) {
        const opts = parseInlineOpts(m[2]);
        els.push({ type: 'polygon', points, ...opts });
      }
    }
    // Parse arrowTeleporter(x, y, { opts })
    for (const m of code.matchAll(
      new RegExp(
        `arrowTeleporter\\(\\s*(${N})\\s*,\\s*(${N})(?:\\s*,\\s*\\{([^}]*)\\})?\\s*\\)`,
        'g'
      )
    )) {
      const opts = parseInlineOpts(m[3]);
      els.push({ type: 'arrowTeleporter', x: +m[1], y: +m[2], ...opts });
    }
    // Parse arenaShape('shape', x, y, w, h, { opts })
    for (const m of code.matchAll(
      new RegExp(
        `arenaShape\\(\\s*'(square|circle|rect)'\\s*,\\s*(${N})\\s*,\\s*(${N})\\s*,\\s*(${N})\\s*,\\s*(${N})(?:\\s*,\\s*\\{([^}]*)\\})?\\s*\\)`,
        'g'
      )
    )) {
      const opts = parseInlineOpts(m[6]);
      els.push({
        type: 'arena',
        shape: m[1] as 'square' | 'circle' | 'rect',
        x: +m[2],
        y: +m[3],
        w: +m[4],
        h: +m[5],
        ...opts
      });
    }
    // Parse text('label', x, y, { opts })
    for (const m of code.matchAll(
      new RegExp(
        `text\\(\\s*'([^']*)'\\s*,\\s*(${N})\\s*,\\s*(${N})(?:\\s*,\\s*\\{([^}]*)\\})?\\s*\\)`,
        'g'
      )
    )) {
      const opts = parseInlineOpts(m[4]);
      const textContent = m[1].replace(/\\n/g, '\n');
      els.push({ type: 'text', text: textContent, x: +m[2], y: +m[3], ...opts });
    }
    // Parse debuff('id', x, y, { opts })
    for (const m of code.matchAll(
      new RegExp(
        `debuff\\(\\s*'([\\w-]+)'\\s*,\\s*(${N})\\s*,\\s*(${N})(?:\\s*,\\s*\\{([^}]*)\\})?\\s*\\)`,
        'g'
      )
    )) {
      const opts = parseInlineOpts(m[4]);
      els.push({ type: 'debuff', debuffId: m[1], x: +m[2], y: +m[3], ...opts });
    }
    // Expand ...SQUARE_MARKERS / ...CIRCLE_MARKERS
    if (code.includes('SQUARE_MARKERS')) {
      els.push(...SQUARE_MARKERS.map((w) => ({ ...w })));
    } else if (code.includes('CIRCLE_MARKERS')) {
      els.push(...CIRCLE_MARKERS.map((w) => ({ ...w })));
    }

    // Parse diagram-level opts. Two shapes:
    //   1) `], { title: '...' })` — single-line, no nested braces.
    //   2) `], { ..., groups: [{ ... }, ...] })` — multi-line with nested objects.
    // For (2) we balance-scan for the matching `}` of the diagram opts block.
    const optsStart = code.search(/\]\s*,\s*\{/);
    let diagramOptsBody = '';
    if (optsStart >= 0) {
      const braceStart = code.indexOf('{', optsStart);
      if (braceStart >= 0) {
        let depth = 0;
        for (let i = braceStart; i < code.length; i++) {
          const c = code[i];
          if (c === '{') depth++;
          else if (c === '}') {
            depth--;
            if (depth === 0) {
              diagramOptsBody = code.slice(braceStart + 1, i);
              break;
            }
          }
        }
      }
    }

    // Extract groups: [ ... ] block first, then strip it before parsing simple opts.
    const parsedGroups = parseGroupsBlock(diagramOptsBody);
    const optsWithoutGroups = diagramOptsBody.replace(/groups\s*:\s*\[[\s\S]*?\n\s*\]/, '');
    const diagramOpts = parseInlineOpts(optsWithoutGroups);

    return {
      arena: shape,
      elements: els,
      bgColor: diagramOpts.bgColor as string | undefined,
      scale: diagramOpts.scale as number | undefined,
      groups: parsedGroups.length ? parsedGroups : undefined
    };
  }

  /** Parse the `groups: [ ... ]` array body. Tolerant of multi-line layout. */
  function parseGroupsBlock(optsBody: string): GroupDef[] {
    if (!optsBody) return [];
    const arrMatch = optsBody.match(/groups\s*:\s*\[([\s\S]*)\]/);
    if (!arrMatch) return [];
    const arrBody = arrMatch[1];
    // Each group is a `{ ... }` object; balance-scan splits them.
    const groupBodies: string[] = [];
    let depth = 0;
    let start = -1;
    for (let i = 0; i < arrBody.length; i++) {
      const c = arrBody[i];
      if (c === '{') {
        if (depth === 0) start = i + 1;
        depth++;
      } else if (c === '}') {
        depth--;
        if (depth === 0 && start >= 0) {
          groupBodies.push(arrBody.slice(start, i));
          start = -1;
        }
      }
    }
    return groupBodies.map(parseGroupBody).filter((g): g is GroupDef => g != null);
  }

  function parseGroupBody(body: string): GroupDef | null {
    const idMatch = body.match(/\bid\s*:\s*'([^']+)'/);
    if (!idMatch) return null;
    const labelMatch = body.match(/\blabel\s*:\s*'([^']+)'/);
    const vwMatch = body.match(/\bvisibleWhen\s*:\s*\{([\s\S]*?)\}\s*(,|$)/);
    let visibleWhen: VisibilityCondition | undefined;
    if (vwMatch) {
      visibleWhen = parseConditionBody(vwMatch[1]);
    }
    return {
      id: idMatch[1],
      label: labelMatch?.[1],
      visibleWhen
    };
  }

  function parseConditionBody(body: string): VisibilityCondition {
    const out: VisibilityCondition = {};
    if (/whenRoleSelected\s*:\s*true/.test(body)) out.whenRoleSelected = true;
    else if (/whenRoleSelected\s*:\s*false/.test(body)) out.whenRoleSelected = false;
    const jobsMatch = body.match(/\bjobs\s*:\s*\[([^\]]*)\]/);
    if (jobsMatch) {
      const jobs: PlayerJob[] = [];
      for (const jm of jobsMatch[1].matchAll(/'([^']+)'/g)) jobs.push(jm[1] as PlayerJob);
      if (jobs.length) out.jobs = jobs;
    }
    const stratKeyMatch = body.match(/\bstratKey\s*:\s*\[([^\]]*)\]/);
    if (stratKeyMatch) {
      const keys: string[] = [];
      for (const km of stratKeyMatch[1].matchAll(/'([^']+)'/g)) keys.push(km[1]);
      if (keys.length) out.stratKey = keys;
    }
    const stratMatch = body.match(/\bstrat\s*:\s*\{([^}]*)\}/);
    if (stratMatch) {
      const strat: Record<string, string[]> = {};
      for (const em of stratMatch[1].matchAll(/'([^']+)'\s*:\s*\[([^\]]*)\]/g)) {
        const vals: string[] = [];
        for (const vm of em[2].matchAll(/'([^']+)'/g)) vals.push(vm[1]);
        strat[em[1]] = vals;
      }
      if (Object.keys(strat).length) out.strat = strat;
    }
    return out;
  }

  function parseInlineOpts(str: string | undefined): Record<string, any> {
    if (!str) return {};
    const opts: Record<string, any> = {};
    for (const m of str.matchAll(/(\w+)\s*:\s*(?:'([^']*)'|(-?[\d.]+)|(\w+))/g)) {
      const key = m[1];
      if (m[2] !== undefined) opts[key] = m[2];
      else if (m[3] !== undefined) opts[key] = +m[3];
      else if (m[4] === 'true') opts[key] = true;
      else if (m[4] === 'false') opts[key] = false;
      else opts[key] = m[4];
    }
    return opts;
  }

  function loadFromImport() {
    const input = jsonImport.trim();
    if (!input) return;

    try {
      // Try JSON first
      const data = JSON.parse(input) as ArenaDiagramData;
      applyDiagramData(data);
      return;
    } catch {
      // Not JSON, try code format
    }

    const data = parseCodeImport(input);
    if (data) {
      applyDiagramData(data);
    } else {
      jsonError = 'Could not parse as JSON or code. Paste a diagram() call or JSON object.';
    }
  }

  function applyDiagramData(data: ArenaDiagramData) {
    arenaShape = data.arena ?? 'square';
    showBackground = data.bgColor !== 'transparent';
    scale = data.scale ?? 1;
    elements = data.elements ?? [];
    groups = data.groups ? data.groups.map((g) => ({ ...g })) : [];
    selected = new Set();
    jsonError = '';
    jsonImport = '';
  }

  // Also generate JSON for easy round-tripping
  let generatedJson = $derived(JSON.stringify(diagramData, null, 2));

  function copyJson() {
    navigator.clipboard.writeText(generatedJson);
    copiedJson = true;
    setTimeout(() => (copiedJson = false), 1500);
  }

  let copiedJson = $state(false);

  const playerJobs: PlayerJob[] = ['MT', 'OT', 'H1', 'H2', 'M1', 'M2', 'R1', 'R2'];
  const genericJobs: PlayerJob[] = [
    'TANK',
    'HEALER',
    'MELEE',
    'RANGED',
    'HTM',
    'TMR',
    'DPS',
    'SUP',
    'G1',
    'G2',
    'G1SUP',
    'G1DPS',
    'G2SUP',
    'G2DPS',
    'ANY',
    'X'
  ];
  const waymarkNames: WaymarkName[] = ['A', 'B', 'C', 'D', '1', '2', '3', '4'];
</script>

<div class="space-y-4">
  <h1 class="text-2xl font-bold">Arena Diagram Editor</h1>

  <div class="flex flex-col lg:flex-row gap-4">
    <!-- Left: Canvas + Palette -->
    <div class="flex-1 space-y-3">
      <!-- Arena controls -->
      <div class="flex items-center gap-3 flex-wrap">
        <div class="flex items-center gap-1">
          <span class="text-sm font-semibold text-surface-300">Arena:</span>
          <button
            class="btn btn-sm {arenaShape === 'square'
              ? 'preset-filled-primary-500'
              : 'preset-tonal-surface'}"
            onclick={() => (arenaShape = 'square')}>Square</button
          >
          <button
            class="btn btn-sm {arenaShape === 'circle'
              ? 'preset-filled-primary-500'
              : 'preset-tonal-surface'}"
            onclick={() => (arenaShape = 'circle')}>Circle</button
          >
        </div>
        <label class="flex items-center gap-1 text-sm text-surface-300 cursor-pointer">
          <input type="checkbox" bind:checked={showBackground} class="accent-primary-500" />
          Background
        </label>
        <div class="flex items-center gap-1">
          <span class="text-sm font-semibold text-surface-300">Grid:</span>
          <input
            type="number"
            min="1"
            max="16"
            bind:value={gridW}
            class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-14 text-center"
          />
          <span class="text-surface-400">×</span>
          <input
            type="number"
            min="1"
            max="9"
            bind:value={gridH}
            class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-14 text-center"
          />
          <span class="text-xs text-surface-500">cells</span>
        </div>
        <div class="flex items-center gap-1">
          <span class="text-sm font-semibold text-surface-300">Scale:</span>
          <input
            type="number"
            min="0.1"
            max="5"
            step="0.1"
            bind:value={scale}
            class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-16 text-center"
          />
        </div>
        <div class="flex items-center gap-1 ml-auto">
          <span class="text-sm font-semibold text-surface-300">Preview:</span>
          <button
            class="btn btn-sm text-xs px-2 {!previewAll && previewJob === undefined
              ? 'preset-filled-primary-500'
              : 'preset-tonal-surface'}"
            onclick={() => {
              previewAll = false;
              previewJob = undefined;
            }}
            title="Overall (no role highlighted)">Overall</button
          >
          {#each playerJobs as job}
            {@const active = !previewAll && previewJob === job}
            <button
              class="text-xs font-bold px-2 py-1 rounded border"
              style:background-color={active ? ROLE_COLORS[job] : ROLE_COLORS[job] + '22'}
              style:border-color={ROLE_COLORS[job]}
              style:color={active ? 'white' : ROLE_COLORS[job]}
              onclick={() => {
                previewAll = false;
                previewJob = job;
              }}
              title={`Preview as ${job}`}>{job}</button
            >
          {/each}
          <button
            class="btn btn-sm text-xs px-2 {previewAll
              ? 'preset-filled-primary-500'
              : 'preset-tonal-surface'}"
            onclick={() => {
              previewAll = true;
              previewJob = undefined;
              selectAll();
            }}
            title="Show every group and select all elements">All Elements</button
          >
        </div>
      </div>

      <!-- Canvas -->
      <div
        class="relative border border-surface-600 rounded-lg overflow-hidden"
        class:cursor-crosshair={placingType !== null}
        class:bg-surface-950={showBackground}
        style="width: {gridW * 100 * canvasZoom}px; height: {gridH * 100 * canvasZoom}px;"
        style:background={!showBackground
          ? 'repeating-conic-gradient(#333 0% 25%, #222 0% 50%) 0 0 / 20px 20px'
          : undefined}
      >
        <ArenaRenderer
          data={diagramData}
          {gridW}
          {gridH}
          highlightJob={previewAll ? undefined : previewJob}
          showAllGroups={previewAll}
        />

        <!-- Interactive overlay — positional click-only input, no keyboard equivalent. -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <svg
          bind:this={svgEl}
          viewBox="0 0 {gridW * 25} {gridH * 25}"
          class="absolute inset-0 w-full h-full"
          role="application"
          aria-label="Arena diagram canvas"
          onclick={handleCanvasClick}
          onmousedown={handleCanvasMouseDown}
        >
          {#each elements as el, i}
            {#if isElementHidden(el)}
              <!-- element hidden by preview — skip overlay so it can't be selected -->
            {:else if el.type === 'player' || el.type === 'boss' || el.type === 'waymark' || el.type === 'text'}
              <!-- svelte-ignore a11y_no_static_element_interactions -->
              <circle
                cx={el.x * scale}
                cy={el.y * scale}
                r={el.type === 'boss'
                  ? ((el.size ?? 12) + 2) * scale
                  : el.type === 'player'
                    ? ((el.size ?? 6) + 1) * scale
                    : 4}
                fill="transparent"
                stroke={selected.has(i) ? '#22d3ee' : 'transparent'}
                stroke-width="0.6"
                stroke-dasharray="1.5,1"
                class="cursor-move"
                onmousedown={(e) => handleElementMouseDown(i, e)}
              />
            {:else if el.type === 'aoe' && el.shape === 'circle'}
              <!-- svelte-ignore a11y_no_static_element_interactions -->
              <ellipse
                cx={el.x * scale}
                cy={el.y * scale}
                rx={el.r * scale}
                ry={(el.ry ?? el.r) * scale}
                fill="transparent"
                stroke={selected.has(i) ? '#22d3ee' : 'transparent'}
                stroke-width="0.6"
                stroke-dasharray="1.5,1"
                transform={el.rotation
                  ? `rotate(${el.rotation} ${el.x * scale} ${el.y * scale})`
                  : undefined}
                class="cursor-move"
                onmousedown={(e) => handleElementMouseDown(i, e)}
              />
            {:else if el.type === 'aoe' && el.shape === 'rect'}
              <!-- svelte-ignore a11y_no_static_element_interactions -->
              <rect
                x={(el.x - el.w / 2) * scale}
                y={(el.y - el.h / 2) * scale}
                width={el.w * scale}
                height={el.h * scale}
                fill="transparent"
                stroke={selected.has(i) ? '#22d3ee' : 'transparent'}
                stroke-width="0.6"
                stroke-dasharray="1.5,1"
                transform={el.rotation
                  ? `rotate(${el.rotation} ${el.x * scale} ${el.y * scale})`
                  : undefined}
                class="cursor-move"
                onmousedown={(e) => handleElementMouseDown(i, e)}
              />
            {:else if el.type === 'arena' && el.shape === 'circle'}
              <!-- svelte-ignore a11y_no_static_element_interactions -->
              <circle
                cx={el.x * scale}
                cy={el.y * scale}
                r={(el.w / 2) * scale}
                fill="transparent"
                stroke={selected.has(i) ? '#22d3ee' : 'transparent'}
                stroke-width="0.6"
                stroke-dasharray="1.5,1"
                class="cursor-move"
                onmousedown={(e) => handleElementMouseDown(i, e)}
              />
            {:else if el.type === 'arena'}
              <!-- svelte-ignore a11y_no_static_element_interactions -->
              <rect
                x={(el.x - el.w / 2) * scale}
                y={(el.y - el.h / 2) * scale}
                width={el.w * scale}
                height={el.h * scale}
                fill="transparent"
                stroke={selected.has(i) ? '#22d3ee' : 'transparent'}
                stroke-width="0.6"
                stroke-dasharray="1.5,1"
                transform={el.rotation
                  ? `rotate(${el.rotation} ${el.x * scale} ${el.y * scale})`
                  : undefined}
                class="cursor-move"
                onmousedown={(e) => handleElementMouseDown(i, e)}
              />
            {:else if el.type === 'debuff'}
              {@const dSize = el.size ?? getDebuff(el.debuffId)?.defaultSize ?? 6}
              <!-- svelte-ignore a11y_no_static_element_interactions -->
              <rect
                x={(el.x - dSize / 2) * scale}
                y={(el.y - dSize / 2) * scale}
                width={dSize * scale}
                height={dSize * scale}
                fill="transparent"
                stroke={selected.has(i) ? '#22d3ee' : 'transparent'}
                stroke-width="0.6"
                stroke-dasharray="1.5,1"
                class="cursor-move"
                onmousedown={(e) => handleElementMouseDown(i, e)}
              />
            {:else if el.type === 'arrowTeleporter'}
              <!-- svelte-ignore a11y_no_static_element_interactions -->
              <circle
                cx={el.x * scale}
                cy={el.y * scale}
                r={(el.size ?? 5) * scale}
                fill="transparent"
                stroke={selected.has(i) ? '#22d3ee' : 'transparent'}
                stroke-width="0.6"
                stroke-dasharray="1.5,1"
                class="cursor-move"
                onmousedown={(e) => handleElementMouseDown(i, e)}
              />
            {:else if el.type === 'arrow' || el.type === 'tether' || el.type === 'curvedArrow'}
              <!-- svelte-ignore a11y_no_static_element_interactions -->
              <line
                x1={el.x1 * scale}
                y1={el.y1 * scale}
                x2={el.x2 * scale}
                y2={el.y2 * scale}
                stroke={selected.has(i) ? '#22d3ee' : 'transparent'}
                stroke-width="2"
                class="cursor-move"
                onmousedown={(e) => handleElementMouseDown(i, e)}
              />
              {#if selected.has(i)}
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <circle
                  cx={el.x1 * scale}
                  cy={el.y1 * scale}
                  r="2.5"
                  fill="#22d3ee"
                  class="cursor-grab"
                  onmousedown={(e) => handleEndpointDrag(i, 'start', e)}
                />
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <circle
                  cx={el.x2 * scale}
                  cy={el.y2 * scale}
                  r="2.5"
                  fill="#22d3ee"
                  class="cursor-grab"
                  onmousedown={(e) => handleEndpointDrag(i, 'end', e)}
                />
              {/if}
            {:else if el.type === 'polygon'}
              {@const pts = el.points.map((p) => `${p[0] * scale},${p[1] * scale}`).join(' ')}
              <!-- svelte-ignore a11y_no_static_element_interactions -->
              <polygon
                points={pts}
                fill="transparent"
                stroke={selected.has(i) ? '#22d3ee' : 'transparent'}
                stroke-width="0.6"
                stroke-dasharray="1.5,1"
                class="cursor-move"
                onmousedown={(e) => handleElementMouseDown(i, e)}
              />
              {#if selected.has(i)}
                {#each el.points as p, vi}
                  <!-- svelte-ignore a11y_no_static_element_interactions -->
                  <circle
                    cx={p[0] * scale}
                    cy={p[1] * scale}
                    r="2.5"
                    fill="#22d3ee"
                    class="cursor-grab"
                    onmousedown={(e) => handlePolyVertexDrag(i, vi, e)}
                  />
                {/each}
              {/if}
            {/if}
          {/each}
          <!-- Two-point placement preview -->
          {#if twoPointStart && (placingType === 'arrow' || placingType === 'tether' || placingType === 'curvedArrow')}
            <circle
              cx={twoPointStart.x * scale}
              cy={twoPointStart.y * scale}
              r="2"
              fill="#22d3ee"
              opacity="0.7"
            />
          {/if}
          <!-- Drag-select marquee rectangle -->
          {#if marquee}
            <rect
              x={Math.min(marquee.x1, marquee.x2)}
              y={Math.min(marquee.y1, marquee.y2)}
              width={Math.abs(marquee.x2 - marquee.x1)}
              height={Math.abs(marquee.y2 - marquee.y1)}
              fill="#22d3ee"
              fill-opacity="0.1"
              stroke="#22d3ee"
              stroke-width="0.3"
              stroke-dasharray="1,0.6"
              pointer-events="none"
            />
          {/if}
        </svg>

        {#if placingType}
          <div class="absolute top-2 left-2 bg-primary-500/90 text-white text-xs px-2 py-1 rounded">
            {#if twoPointStart}
              Click to set end point — Esc to cancel
            {:else}
              Click to {placingType === 'arrow' ||
              placingType === 'tether' ||
              placingType === 'curvedArrow'
                ? 'set start point'
                : 'place'}
              {placingType}{placingSubtype ? ` (${placingSubtype})` : ''} — Esc to cancel
            {/if}
          </div>
        {/if}

        <!-- Canvas resize handle (bottom-right corner) -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
          class="absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize bg-surface-600 hover:bg-primary-500 z-10"
          style="clip-path: polygon(100% 0, 100% 100%, 0 100%);"
          title="Drag to resize canvas (zoom {canvasZoom.toFixed(2)}×) — double-click to reset"
          onmousedown={handleCanvasResizeStart}
          ondblclick={() => (canvasZoom = 1)}
        ></div>
      </div>

      <!-- Element Palette -->
      <div class="space-y-2">
        <div class="text-sm font-semibold text-surface-300">Add Elements</div>
        <div class="flex flex-wrap gap-1">
          {#each playerJobs as job}
            <button
              class="btn btn-sm px-2 py-1 text-xs border font-bold"
              style:background-color={ROLE_COLORS[job] + '33'}
              style:border-color={ROLE_COLORS[job]}
              style:color={ROLE_COLORS[job]}
              onclick={() => startPlace('player', job)}>{job}</button
            >
          {/each}
        </div>
        <div class="flex flex-wrap gap-1">
          {#each genericJobs as job}
            <button
              class="btn btn-sm px-2 py-1 text-xs border font-bold"
              style:background-color={ROLE_COLORS[job] + '33'}
              style:border-color={ROLE_COLORS[job]}
              style:color={ROLE_COLORS[job]}
              onclick={() => startPlace('player', job)}>{job}</button
            >
          {/each}
        </div>
        <div class="flex flex-wrap gap-1">
          {#each waymarkNames as mark}
            <button
              class="btn btn-sm px-2 py-1 text-xs border font-bold"
              style:border-color={WAYMARK_COLORS[mark]}
              style:color={WAYMARK_COLORS[mark]}
              onclick={() => startPlace('waymark', mark)}
              >{'ABCD'.includes(mark) ? mark : `#${mark}`}</button
            >
          {/each}
          <button class="btn btn-sm preset-tonal-surface text-xs" onclick={addWaymarkPreset}
            ><Plus size={12} /> All Waymarks</button
          >
        </div>
        <div class="flex flex-wrap gap-1">
          <button class="btn btn-sm preset-tonal-surface text-xs" onclick={() => startPlace('boss')}
            >Boss</button
          >
          <button
            class="btn btn-sm preset-tonal-surface text-xs"
            onclick={() => startPlace('aoe-circle')}>AoE Circle</button
          >
          <button
            class="btn btn-sm preset-tonal-surface text-xs"
            onclick={() => startPlace('aoe-rect')}>AoE Rect</button
          >
          <button
            class="btn btn-sm preset-tonal-surface text-xs"
            onclick={() => startPlace('arrow')}>Arrow</button
          >
          <button
            class="btn btn-sm preset-tonal-surface text-xs"
            onclick={() => startPlace('curvedArrow')}>Curved Arrow</button
          >
          <button
            class="btn btn-sm preset-tonal-surface text-xs"
            onclick={() => startPlace('tether')}>Line/Tether</button
          >
          <button
            class="btn btn-sm preset-tonal-surface text-xs"
            onclick={() => startPlace('polygon')}>Polygon</button
          >
          <button
            class="btn btn-sm preset-tonal-surface text-xs"
            onclick={() => startPlace('arrowTeleporter')}>Arrow Teleporter</button
          >
          <button class="btn btn-sm preset-tonal-surface text-xs" onclick={() => startPlace('text')}
            >Text</button
          >
        </div>
        <div class="flex flex-wrap gap-1">
          <span class="text-xs text-surface-400 self-center">Arena:</span>
          <button
            class="btn btn-sm preset-tonal-surface text-xs"
            onclick={() => startPlace('arena-square')}>Square</button
          >
          <button
            class="btn btn-sm preset-tonal-surface text-xs"
            onclick={() => startPlace('arena-circle')}>Circle</button
          >
          <button
            class="btn btn-sm preset-tonal-surface text-xs"
            onclick={() => startPlace('arena-rect')}>Rect</button
          >
        </div>
        <div class="flex flex-wrap items-center gap-1">
          <span class="text-xs text-surface-400 self-center">Debuff:</span>
          {#each DEBUFF_IDS as id}
            <button
              class="btn btn-sm preset-tonal-surface text-xs p-1"
              title={DEBUFFS[id].name}
              onclick={() => startPlace('debuff', id)}
            >
              <img
                src={`/icons/status/${DEBUFFS[id].iconFile}`}
                alt={DEBUFFS[id].name}
                class="w-5 h-5"
              />
            </button>
          {/each}
        </div>
        <div class="flex gap-1">
          <button class="btn btn-sm preset-tonal-error text-xs" onclick={clearAll}>
            <RotateCcw size={12} /> Clear All
          </button>
        </div>
      </div>
    </div>

    <!-- Right: Properties + Code -->
    <div class="w-full lg:w-96 space-y-3">
      <!-- Load section from existing fight poster -->
      <div class="card border border-surface-600 p-3 bg-surface-900 space-y-2">
        <div class="text-sm font-semibold text-surface-200">Load Poster Section</div>
        {#if fightPosters.length === 0}
          <div class="text-xs text-surface-400">No fights with poster layouts found.</div>
        {:else}
          <div class="grid grid-cols-2 gap-2">
            <label class="text-xs text-surface-400">
              Fight
              <select
                class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                bind:value={selectedFightLabel}
                onchange={() => (selectedSectionIdx = -1)}
              >
                <option value="">—</option>
                {#each fightPosters as f}
                  <option value={f.label}>{f.label}</option>
                {/each}
              </select>
            </label>
            <label class="text-xs text-surface-400">
              Section
              <select
                class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                bind:value={selectedSectionIdx}
                disabled={!selectedFightEntry}
              >
                <option value={-1}>—</option>
                {#if selectedFightEntry}
                  {#each selectedFightEntry.sections as s, idx}
                    <option value={idx}>{s.sectionTitle} ({s.section.w}×{s.section.h})</option>
                  {/each}
                {/if}
              </select>
            </label>
          </div>
          <button
            class="btn btn-sm preset-tonal-primary text-xs w-full"
            onclick={loadSelectedSection}
            disabled={selectedSectionIdx < 0}
          >
            <Download size={12} /> Load Section
          </button>
          <div class="text-xs text-surface-500">
            Loading replaces the current canvas and resizes to the section's grid footprint.
          </div>
        {/if}
      </div>

      <!-- Groups (visibility-conditional element sets) -->
      <div class="card border border-surface-600 p-3 bg-surface-900 space-y-2">
        <div class="flex justify-between items-center">
          <button
            type="button"
            class="flex items-center gap-1 text-sm font-semibold text-surface-200 hover:text-surface-100"
            onclick={() => (groupsCollapsed = !groupsCollapsed)}
          >
            {#if groupsCollapsed}
              <ChevronRight size={14} />
            {:else}
              <ChevronDown size={14} />
            {/if}
            Groups{groups.length > 0 ? ` (${groups.length})` : ''}
          </button>
          <button class="btn btn-sm preset-tonal-surface text-xs" onclick={addGroup}>
            <Plus size={12} /> Add
          </button>
        </div>
        {#if !groupsCollapsed}
          {#if groups.length === 0}
            <div class="text-xs text-surface-500">
              Define a group then assign elements to it (via the property panel) to conditionally
              hide them based on selected role, strat, or strat toggle.
            </div>
          {/if}
          {#each groups as g, gi}
            {@const memberCount = elements.filter((e) => e.groupId === g.id).length}
            <div class="border border-surface-700 rounded p-2 space-y-1.5">
              <div class="flex gap-1 items-center">
                <input
                  type="text"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-xs flex-1 font-mono"
                  value={g.id}
                  placeholder="group-id"
                  onchange={(e) => updateGroup(gi, { id: e.currentTarget.value.trim() || g.id })}
                />
                <input
                  type="text"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-xs flex-1"
                  value={g.label ?? ''}
                  placeholder="label (optional)"
                  oninput={(e) => updateGroup(gi, { label: e.currentTarget.value || undefined })}
                />
                <button
                  class="btn btn-sm preset-tonal-error p-1"
                  onclick={() => removeGroup(gi)}
                  title="Delete group"
                >
                  <Trash2 size={12} />
                </button>
              </div>
              <div class="text-xs text-surface-500">
                {memberCount} element{memberCount === 1 ? '' : 's'} assigned
              </div>
              <label class="text-xs text-surface-400">
                Role mode
                <select
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-xs w-full"
                  value={g.visibleWhen?.whenRoleSelected === true
                    ? 'role'
                    : g.visibleWhen?.whenRoleSelected === false
                      ? 'overview'
                      : 'any'}
                  onchange={(e) => {
                    const v = e.currentTarget.value;
                    updateGroupCondition(gi, {
                      whenRoleSelected: v === 'role' ? true : v === 'overview' ? false : undefined
                    });
                  }}
                >
                  <option value="any">Any (no constraint)</option>
                  <option value="role">Only when role selected</option>
                  <option value="overview">Only in overview (no role)</option>
                </select>
              </label>
              <div>
                <div class="text-xs text-surface-400 mb-0.5">Show only for jobs:</div>
                <div class="flex flex-wrap gap-0.5">
                  {#each VIS_JOBS as job}
                    {@const active = g.visibleWhen?.jobs?.includes(job) ?? false}
                    <button
                      class="text-[10px] font-bold px-1.5 py-0.5 rounded border"
                      style:background-color={active ? ROLE_COLORS[job] + '55' : 'transparent'}
                      style:border-color={ROLE_COLORS[job]}
                      style:color={ROLE_COLORS[job]}
                      onclick={() => toggleGroupJob(gi, job)}>{job}</button
                    >
                  {/each}
                </div>
              </div>
              <label class="text-xs text-surface-400">
                Active strat keys (comma-separated)
                <input
                  type="text"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-xs w-full font-mono"
                  value={(g.visibleWhen?.stratKey ?? []).join(', ')}
                  placeholder="naur, max1"
                  oninput={(e) =>
                    updateGroupCondition(gi, {
                      stratKey: parseStratKeyList(e.currentTarget.value)
                    })}
                />
              </label>
              <div class="text-xs text-surface-400">
                <div class="flex justify-between items-center mb-0.5">
                  <span>Strat-toggle predicate</span>
                  <button
                    class="btn btn-sm preset-tonal-surface text-[10px] px-1.5 py-0.5"
                    onclick={() => {
                      const next = { ...(g.visibleWhen?.strat ?? {}), '': [] };
                      updateGroupCondition(gi, { strat: next });
                    }}
                    title="Add toggle constraint"
                  >
                    <Plus size={10} />
                  </button>
                </div>
                {#each Object.entries(g.visibleWhen?.strat ?? {}) as [tag, vals], si}
                  <div class="flex gap-1 items-center mb-0.5">
                    <input
                      type="text"
                      class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-[10px] font-mono w-20"
                      value={tag}
                      placeholder="tag"
                      onchange={(e) => {
                        const newTag = e.currentTarget.value.trim();
                        const entries = Object.entries(g.visibleWhen?.strat ?? {});
                        const updated = Object.fromEntries(
                          entries.map(([t, v], i) => (i === si ? [newTag, v] : [t, v]))
                        ) as Record<string, string[]>;
                        updateGroupCondition(gi, { strat: updated });
                      }}
                    />
                    <span class="text-surface-500">=</span>
                    <input
                      type="text"
                      class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-[10px] font-mono flex-1"
                      value={vals.join(', ')}
                      placeholder="val1, val2"
                      oninput={(e) => {
                        const list = e.currentTarget.value
                          .split(',')
                          .map((p) => p.trim())
                          .filter(Boolean);
                        const entries = Object.entries(g.visibleWhen?.strat ?? {});
                        const updated = Object.fromEntries(
                          entries.map(([t, v], i) => (i === si ? [t, list] : [t, v]))
                        ) as Record<string, string[]>;
                        updateGroupCondition(gi, { strat: updated });
                      }}
                    />
                    <button
                      class="text-error-500 hover:text-error-400 text-xs px-1"
                      onclick={() => {
                        const entries = Object.entries(g.visibleWhen?.strat ?? {}).filter(
                          (_, i) => i !== si
                        );
                        const next = Object.fromEntries(entries) as Record<string, string[]>;
                        updateGroupCondition(gi, {
                          strat: Object.keys(next).length ? next : undefined
                        });
                      }}
                    >
                      ×
                    </button>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        {/if}
      </div>

      <!-- Selected element properties -->
      {#if selected.size > 1}
        <div class="card border border-surface-600 p-3 space-y-2 bg-surface-900">
          <div class="flex justify-between items-center">
            <span class="font-semibold text-sm text-surface-100"
              >{selected.size} elements selected</span
            >
            <div class="flex gap-1">
              <button
                class="btn btn-sm preset-tonal-surface p-1"
                onclick={duplicateSelected}
                title="Duplicate all"
              >
                <Copy size={14} />
              </button>
              <button
                class="btn btn-sm preset-tonal-error p-1"
                onclick={deleteSelected}
                title="Delete all"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
          <div class="text-xs text-surface-400">
            Ctrl+click to toggle individual elements. Drag any selected element to move all.
          </div>
          {#if groups.length > 0}
            <label class="text-xs text-surface-400">
              Assign all to group
              <select
                class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                onchange={(e) => {
                  const id = e.currentTarget.value || undefined;
                  elements = elements.map((el, i) =>
                    selected.has(i) ? { ...el, groupId: id } : el
                  );
                }}
              >
                <option value="">— none —</option>
                {#each groups as g}
                  <option value={g.id}>{g.label ? `${g.id} (${g.label})` : g.id}</option>
                {/each}
              </select>
            </label>
          {/if}
        </div>
      {:else if selectedElement && selectedIndex !== null}
        <div class="card border border-surface-600 p-3 space-y-2 bg-surface-900">
          <div class="flex justify-between items-center">
            <span class="font-semibold text-sm capitalize text-surface-100"
              >{selectedElement.type}
              {#if selectedElement.type === 'player'}<span
                  style:color={ROLE_COLORS[selectedElement.job]}
                >
                  {selectedElement.job}</span
                >{/if}
              {#if selectedElement.type === 'waymark'}<span
                  style:color={WAYMARK_COLORS[selectedElement.mark]}
                >
                  {selectedElement.mark}</span
                >{/if}
            </span>
            <div class="flex gap-1">
              <button
                class="btn btn-sm preset-tonal-surface p-1"
                onclick={centerSelected}
                title="Center & round to 2 decimals"
              >
                <Crosshair size={14} />
              </button>
              <button
                class="btn btn-sm preset-tonal-surface p-1"
                onclick={duplicateSelected}
                title="Duplicate"
              >
                <Copy size={14} />
              </button>
              <button
                class="btn btn-sm preset-tonal-error p-1"
                onclick={deleteSelected}
                title="Delete"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>

          {#if groups.length > 0}
            <label class="text-xs text-surface-400">
              Group
              <select
                class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                value={selectedElement.groupId ?? ''}
                onchange={(e) => updateElement('groupId', e.currentTarget.value || undefined)}
              >
                <option value="">— none —</option>
                {#each groups as g}
                  <option value={g.id}>{g.label ? `${g.id} (${g.label})` : g.id}</option>
                {/each}
              </select>
            </label>
          {/if}

          {#if 'x' in selectedElement}
            <div class="grid grid-cols-2 gap-2">
              <label class="text-xs text-surface-400">
                X
                <input
                  type="number"
                  min="0"
                  max="100"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.x}
                  oninput={(e) => updateElement('x', Number(e.currentTarget.value))}
                />
              </label>
              <label class="text-xs text-surface-400">
                Y
                <input
                  type="number"
                  min="0"
                  max="100"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.y}
                  oninput={(e) => updateElement('y', Number(e.currentTarget.value))}
                />
              </label>
            </div>
          {/if}
          {#if 'x1' in selectedElement}
            <div class="grid grid-cols-2 gap-2">
              <label class="text-xs text-surface-400">
                X1
                <input
                  type="number"
                  min="0"
                  max="100"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.x1}
                  oninput={(e) => updateElement('x1', Number(e.currentTarget.value))}
                />
              </label>
              <label class="text-xs text-surface-400">
                Y1
                <input
                  type="number"
                  min="0"
                  max="100"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.y1}
                  oninput={(e) => updateElement('y1', Number(e.currentTarget.value))}
                />
              </label>
              <label class="text-xs text-surface-400">
                X2
                <input
                  type="number"
                  min="0"
                  max="100"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.x2}
                  oninput={(e) => updateElement('x2', Number(e.currentTarget.value))}
                />
              </label>
              <label class="text-xs text-surface-400">
                Y2
                <input
                  type="number"
                  min="0"
                  max="100"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.y2}
                  oninput={(e) => updateElement('y2', Number(e.currentTarget.value))}
                />
              </label>
            </div>
          {/if}

          {#if selectedElement.type === 'player'}
            <label class="text-xs text-surface-400">
              Job
              <select
                class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full font-bold"
                style:color={ROLE_COLORS[selectedElement.job]}
                value={selectedElement.job}
                onchange={(e) => updateElement('job', e.currentTarget.value)}
              >
                <optgroup label="Specific">
                  {#each playerJobs as j}
                    <option value={j} style:color={ROLE_COLORS[j]}>{j}</option>
                  {/each}
                </optgroup>
                <optgroup label="Generic">
                  {#each genericJobs as j}
                    <option value={j} style:color={ROLE_COLORS[j]}>{j}</option>
                  {/each}
                </optgroup>
              </select>
            </label>
            <label class="text-xs text-surface-400">
              Size ({(selectedElement.size ?? 6).toFixed(1)})
              <input
                type="range"
                min="2"
                max="20"
                step="0.5"
                class="w-full accent-primary-500"
                value={selectedElement.size ?? 6}
                oninput={(e) => updateElement('size', Number(e.currentTarget.value))}
              />
            </label>
            <label class="text-xs text-surface-400">
              Marker
              <div class="flex gap-1 mt-0.5">
                <button
                  class="btn btn-sm text-xs px-2 {!selectedElement.marker
                    ? 'preset-filled-surface'
                    : 'preset-tonal-surface'}"
                  onclick={() => updateElement('marker', undefined)}>None</button
                >
                <button
                  class="btn btn-sm text-xs px-2 {selectedElement.marker === 'red'
                    ? 'preset-filled-error'
                    : 'preset-tonal-surface'}"
                  onclick={() => updateElement('marker', 'red')}>Red ∨</button
                >
                <button
                  class="btn btn-sm text-xs px-2 {selectedElement.marker === 'green'
                    ? 'preset-filled-success'
                    : 'preset-tonal-surface'}"
                  onclick={() => updateElement('marker', 'green')}>Green ∨</button
                >
              </div>
            </label>
            <label class="text-xs text-surface-400">
              Status above
              <select
                class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-xs w-full mt-0.5"
                value={selectedElement.statusAbove ?? ''}
                onchange={(e) => updateElement('statusAbove', e.currentTarget.value || undefined)}
              >
                <option value="">—</option>
                {#each DEBUFF_IDS as id}
                  <option value={id}>{DEBUFFS[id].name}</option>
                {/each}
              </select>
            </label>
            <div class="text-xs text-surface-400 space-y-1">
              <div>Corner debuffs</div>
              <div class="grid grid-cols-2 gap-1">
                {#each CORNER_KEYS as corner}
                  {@const current = selectedElement.corners?.[corner]}
                  <label class="flex items-center gap-1">
                    <span class="uppercase font-mono text-surface-500 w-5">{corner}</span>
                    <select
                      class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-xs w-full"
                      value={current ?? ''}
                      onchange={(e) => {
                        const next = { ...(selectedElement.corners ?? {}) };
                        const v = e.currentTarget.value;
                        if (v) next[corner] = v;
                        else delete next[corner];
                        updateElement('corners', Object.keys(next).length ? next : undefined);
                      }}
                    >
                      <option value="">—</option>
                      {#each DEBUFF_IDS as id}
                        <option value={id}>{DEBUFFS[id].name}</option>
                      {/each}
                    </select>
                  </label>
                {/each}
              </div>
            </div>
          {/if}
          {#if selectedElement.type === 'waymark'}
            <label class="text-xs text-surface-400">
              Size ({(selectedElement.size ?? 4).toFixed(1)})
              <input
                type="range"
                min="1"
                max="10"
                step="0.5"
                class="w-full accent-primary-500"
                value={selectedElement.size ?? 4}
                oninput={(e) => updateElement('size', Number(e.currentTarget.value))}
              />
            </label>
          {/if}

          {#if selectedElement.type === 'debuff'}
            <label class="text-xs text-surface-400">
              Debuff
              <select
                class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                value={selectedElement.debuffId}
                onchange={(e) => updateElement('debuffId', e.currentTarget.value)}
              >
                {#each DEBUFF_IDS as id}
                  <option value={id}>{DEBUFFS[id].name}</option>
                {/each}
              </select>
            </label>
            <label class="text-xs text-surface-400">
              Size
              <input
                type="number"
                min="1"
                max="30"
                step="0.5"
                class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                value={selectedElement.size ?? 6}
                oninput={(e) => updateElement('size', Number(e.currentTarget.value))}
              />
            </label>
          {/if}
          {#if selectedElement.type === 'aoe' && selectedElement.shape === 'circle'}
            <div class="grid grid-cols-2 gap-2">
              <label class="text-xs text-surface-400">
                Radius X
                <input
                  type="number"
                  min="1"
                  max="50"
                  step="0.5"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.r}
                  oninput={(e) => updateElement('r', Number(e.currentTarget.value))}
                />
              </label>
              <label class="text-xs text-surface-400">
                Radius Y
                <input
                  type="number"
                  min="1"
                  max="50"
                  step="0.5"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.ry ?? selectedElement.r}
                  oninput={(e) => {
                    const v = Number(e.currentTarget.value);
                    // Drop ry when it matches r — keeps round-tripped code clean.
                    updateElement('ry', v === selectedElement.r ? undefined : v);
                  }}
                />
              </label>
            </div>
            <label class="text-xs text-surface-400">
              Rotation
              <input
                type="number"
                min="0"
                max="360"
                class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                value={selectedElement.rotation ?? 0}
                oninput={(e) => {
                  const v = Number(e.currentTarget.value);
                  updateElement('rotation', v ? v : undefined);
                }}
              />
            </label>
          {/if}
          {#if selectedElement.type === 'aoe' && selectedElement.shape === 'rect'}
            <div class="grid grid-cols-2 gap-2">
              <label class="text-xs text-surface-400">
                Width
                <input
                  type="number"
                  min="1"
                  max="100"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.w}
                  oninput={(e) => updateElement('w', Number(e.currentTarget.value))}
                />
              </label>
              <label class="text-xs text-surface-400">
                Height
                <input
                  type="number"
                  min="1"
                  max="100"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.h}
                  oninput={(e) => updateElement('h', Number(e.currentTarget.value))}
                />
              </label>
            </div>
            <label class="text-xs text-surface-400">
              Rotation
              <input
                type="number"
                min="0"
                max="360"
                class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                value={selectedElement.rotation ?? 0}
                oninput={(e) => updateElement('rotation', Number(e.currentTarget.value))}
              />
            </label>
          {/if}

          {#if selectedElement.type === 'aoe'}
            <div class="grid grid-cols-2 gap-2">
              <label class="text-xs text-surface-400">
                Color
                <input
                  type="color"
                  class="w-full h-7 rounded border border-surface-600 bg-surface-800"
                  value={selectedElement.color ?? '#f59e0b'}
                  oninput={(e) => updateElement('color', e.currentTarget.value)}
                />
              </label>
              <label class="text-xs text-surface-400">
                Opacity ({(selectedElement.opacity ?? 0.35).toFixed(2)})
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  class="w-full accent-primary-500"
                  value={selectedElement.opacity ?? 0.35}
                  oninput={(e) => updateElement('opacity', Number(e.currentTarget.value))}
                />
              </label>
            </div>
          {/if}

          {#if selectedElement.type === 'tether'}
            <div class="grid grid-cols-2 gap-2">
              <label class="text-xs text-surface-400">
                Color
                <input
                  type="color"
                  class="w-full h-7 rounded border border-surface-600 bg-surface-800"
                  value={selectedElement.color ?? '#facc15'}
                  oninput={(e) => updateElement('color', e.currentTarget.value)}
                />
              </label>
              <label class="text-xs text-surface-400">
                Width
                <input
                  type="number"
                  min="0.1"
                  max="5"
                  step="0.1"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.width ?? 0.5}
                  oninput={(e) => updateElement('width', Number(e.currentTarget.value))}
                />
              </label>
            </div>
            <label class="flex items-center gap-2 text-xs text-surface-400 cursor-pointer">
              <input
                type="checkbox"
                class="accent-primary-500"
                checked={selectedElement.dashed ?? false}
                onchange={(e) => updateElement('dashed', e.currentTarget.checked)}
              />
              Dashed
            </label>
          {/if}
          {#if selectedElement.type === 'arrow'}
            <div class="grid grid-cols-2 gap-2">
              <label class="text-xs text-surface-400">
                Color
                <input
                  type="color"
                  class="w-full h-7 rounded border border-surface-600 bg-surface-800"
                  value={selectedElement.color ?? '#ffffff'}
                  oninput={(e) => updateElement('color', e.currentTarget.value)}
                />
              </label>
              <label class="text-xs text-surface-400">
                Width
                <input
                  type="number"
                  min="0.1"
                  max="5"
                  step="0.1"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.width ?? 0.5}
                  oninput={(e) => updateElement('width', Number(e.currentTarget.value))}
                />
              </label>
            </div>
            <label class="text-xs text-surface-400">
              Arrowheads
              <select
                class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                value={selectedElement.heads ?? 'end'}
                onchange={(e) => updateElement('heads', e.currentTarget.value)}
              >
                <option value="end">End only (→)</option>
                <option value="start">Start only (←)</option>
                <option value="both">Both (↔)</option>
                <option value="none">None</option>
              </select>
            </label>
          {/if}

          {#if selectedElement.type === 'curvedArrow'}
            <div class="grid grid-cols-2 gap-2">
              <label class="text-xs text-surface-400">
                Color
                <input
                  type="color"
                  class="w-full h-7 rounded border border-surface-600 bg-surface-800"
                  value={selectedElement.color ?? '#ffffff'}
                  oninput={(e) => updateElement('color', e.currentTarget.value)}
                />
              </label>
              <label class="text-xs text-surface-400">
                Width
                <input
                  type="number"
                  min="0.1"
                  max="5"
                  step="0.1"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.width ?? 0.5}
                  oninput={(e) => updateElement('width', Number(e.currentTarget.value))}
                />
              </label>
            </div>
            <label class="text-xs text-surface-400">
              Curvature ({(selectedElement.curvature ?? 6).toFixed(1)})
              <input
                type="range"
                min="-30"
                max="30"
                step="0.5"
                class="w-full accent-primary-500"
                value={selectedElement.curvature ?? 6}
                oninput={(e) => updateElement('curvature', Number(e.currentTarget.value))}
              />
            </label>
            <label class="text-xs text-surface-400">
              Arrowheads
              <select
                class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                value={selectedElement.heads ?? 'end'}
                onchange={(e) => updateElement('heads', e.currentTarget.value)}
              >
                <option value="end">End only (→)</option>
                <option value="start">Start only (←)</option>
                <option value="both">Both (↔)</option>
                <option value="none">None</option>
              </select>
            </label>
          {/if}

          {#if selectedElement.type === 'arrowTeleporter'}
            <div class="grid grid-cols-2 gap-2">
              <label class="text-xs text-surface-400">
                Direction
                <input
                  type="number"
                  min="0"
                  max="360"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.rotation ?? 0}
                  oninput={(e) => updateElement('rotation', Number(e.currentTarget.value))}
                />
              </label>
              <label class="text-xs text-surface-400">
                Size
                <input
                  type="number"
                  min="1"
                  max="30"
                  step="0.5"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.size ?? 5}
                  oninput={(e) => updateElement('size', Number(e.currentTarget.value))}
                />
              </label>
            </div>
            <label class="text-xs text-surface-400">
              Color
              <input
                type="color"
                class="w-full h-7 rounded border border-surface-600 bg-surface-800"
                value={selectedElement.color ?? ARROW_TELEPORTER_COLOR}
                oninput={(e) => updateElement('color', e.currentTarget.value)}
              />
            </label>
          {/if}

          {#if selectedElement.type === 'polygon'}
            <div class="text-xs text-surface-400 space-y-1">
              <div class="flex justify-between items-center">
                <span>Vertices ({selectedElement.points.length})</span>
                <div class="flex gap-1">
                  <button
                    class="btn btn-sm preset-tonal-surface text-xs px-1.5 py-0.5"
                    onclick={() => {
                      const pts = [...selectedElement.points];
                      const last = pts[pts.length - 1];
                      pts.push([last[0] + 5, last[1] + 5]);
                      updateElement('points', pts);
                    }}>+</button
                  >
                  <button
                    class="btn btn-sm preset-tonal-error text-xs px-1.5 py-0.5"
                    disabled={selectedElement.points.length <= 3}
                    onclick={() => {
                      const pts = selectedElement.points.slice(0, -1);
                      updateElement('points', pts);
                    }}>−</button
                  >
                </div>
              </div>
              <div class="space-y-1 max-h-32 overflow-y-auto">
                {#each selectedElement.points as p, vi}
                  <div class="flex gap-1 items-center">
                    <span class="font-mono text-surface-500 w-6">{vi}:</span>
                    <input
                      type="number"
                      class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-xs w-full"
                      value={p[0]}
                      oninput={(e) => {
                        const pts = selectedElement.points.map((pp, pi) =>
                          pi === vi
                            ? ([Number(e.currentTarget.value), pp[1]] as [number, number])
                            : pp
                        );
                        updateElement('points', pts);
                      }}
                    />
                    <input
                      type="number"
                      class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-xs w-full"
                      value={p[1]}
                      oninput={(e) => {
                        const pts = selectedElement.points.map((pp, pi) =>
                          pi === vi
                            ? ([pp[0], Number(e.currentTarget.value)] as [number, number])
                            : pp
                        );
                        updateElement('points', pts);
                      }}
                    />
                  </div>
                {/each}
              </div>
            </div>
            <div class="grid grid-cols-2 gap-2">
              <label class="text-xs text-surface-400">
                Color
                <input
                  type="color"
                  class="w-full h-7 rounded border border-surface-600 bg-surface-800"
                  value={selectedElement.color ?? '#f59e0b'}
                  oninput={(e) => updateElement('color', e.currentTarget.value)}
                />
              </label>
              <label class="text-xs text-surface-400">
                Opacity ({(selectedElement.opacity ?? 0.3).toFixed(2)})
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  class="w-full accent-primary-500"
                  value={selectedElement.opacity ?? 0.3}
                  oninput={(e) => updateElement('opacity', Number(e.currentTarget.value))}
                />
              </label>
            </div>
            <label class="text-xs text-surface-400">
              Rotation
              <input
                type="number"
                min="0"
                max="360"
                class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                value={selectedElement.rotation ?? 0}
                oninput={(e) => updateElement('rotation', Number(e.currentTarget.value))}
              />
            </label>
            <label class="flex items-center gap-2 text-xs text-surface-400 cursor-pointer">
              <input
                type="checkbox"
                class="accent-primary-500"
                checked={selectedElement.outline ?? false}
                onchange={(e) => updateElement('outline', e.currentTarget.checked || undefined)}
              />
              Outline only
            </label>
          {/if}

          {#if selectedElement.type === 'arena'}
            {#if selectedElement.shape === 'circle'}
              <label class="text-xs text-surface-400">
                Diameter (W)
                <input
                  type="number"
                  min="1"
                  max="200"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.w}
                  oninput={(e) => updateElement('w', Number(e.currentTarget.value))}
                />
              </label>
            {:else}
              <div class="grid grid-cols-2 gap-2">
                <label class="text-xs text-surface-400">
                  Width
                  <input
                    type="number"
                    min="1"
                    max="200"
                    class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                    value={selectedElement.w}
                    oninput={(e) => updateElement('w', Number(e.currentTarget.value))}
                  />
                </label>
                <label class="text-xs text-surface-400">
                  Height
                  <input
                    type="number"
                    min="1"
                    max="200"
                    class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                    value={selectedElement.h}
                    oninput={(e) => updateElement('h', Number(e.currentTarget.value))}
                  />
                </label>
              </div>
              <label class="text-xs text-surface-400">
                Rotation
                <input
                  type="number"
                  min="0"
                  max="360"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.rotation ?? 0}
                  oninput={(e) => updateElement('rotation', Number(e.currentTarget.value))}
                />
              </label>
            {/if}
            <div class="grid grid-cols-2 gap-2">
              <label class="text-xs text-surface-400">
                Background
                <input
                  type="color"
                  class="w-full h-7 rounded border border-surface-600 bg-surface-800"
                  value={selectedElement.bgColor ?? '#2a2420'}
                  oninput={(e) => updateElement('bgColor', e.currentTarget.value)}
                />
              </label>
              <label class="text-xs text-surface-400">
                Border
                <input
                  type="color"
                  class="w-full h-7 rounded border border-surface-600 bg-surface-800"
                  value={selectedElement.borderColor ?? '#4a4a4a'}
                  oninput={(e) => updateElement('borderColor', e.currentTarget.value)}
                />
              </label>
            </div>
            <label class="flex items-center gap-2 text-xs text-surface-400 cursor-pointer">
              <input
                type="checkbox"
                class="accent-primary-500"
                checked={selectedElement.showCrosshairs !== false}
                onchange={(e) =>
                  updateElement('showCrosshairs', e.currentTarget.checked ? undefined : false)}
              />
              Show crosshairs
            </label>
            <label class="text-xs text-surface-400">
              Background image (URL)
              <input
                type="text"
                placeholder="/arenas/foo.webp"
                class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                value={selectedElement.bgImage ?? ''}
                oninput={(e) => updateElement('bgImage', e.currentTarget.value || undefined)}
              />
            </label>
          {/if}

          {#if selectedElement.type === 'boss'}
            <label class="text-xs text-surface-400">
              Ring style
              <select
                class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                value={selectedElement.ring ?? 'directional'}
                onchange={(e) => updateElement('ring', e.currentTarget.value)}
              >
                <option value="directional">Directional (arc + arrow)</option>
                <option value="circle">Full circle</option>
              </select>
            </label>
            {#if (selectedElement.ring ?? 'directional') === 'directional'}
              <label class="text-xs text-surface-400">
                Facing (rotation)
                <input
                  type="number"
                  min="0"
                  max="360"
                  step="45"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.rotation ?? 0}
                  oninput={(e) => updateElement('rotation', Number(e.currentTarget.value))}
                />
              </label>
            {/if}
            <label class="text-xs text-surface-400">
              Hitbox size ({(selectedElement.size ?? 12).toFixed(1)})
              <input
                type="range"
                min="2"
                max="40"
                step="0.5"
                class="w-full"
                value={selectedElement.size ?? 12}
                oninput={(e) => updateElement('size', Number(e.currentTarget.value))}
              />
            </label>
          {/if}

          {#if selectedElement.type === 'text'}
            <label class="text-xs text-surface-400">
              Text (use Enter for multi-line)
              <textarea
                class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full resize-y h-16 font-mono"
                value={selectedElement.text}
                oninput={(e) => updateElement('text', e.currentTarget.value)}
              ></textarea>
            </label>
            <div class="grid grid-cols-3 gap-2">
              <label class="text-xs text-surface-400">
                Color
                <input
                  type="color"
                  class="w-full h-7 rounded border border-surface-600 bg-surface-800"
                  value={selectedElement.color ?? '#ffffff'}
                  oninput={(e) => updateElement('color', e.currentTarget.value)}
                />
              </label>
              <label class="text-xs text-surface-400">
                Size
                <input
                  type="number"
                  min="1"
                  max="12"
                  step="0.5"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.fontSize ?? 4}
                  oninput={(e) => updateElement('fontSize', Number(e.currentTarget.value))}
                />
              </label>
              <label class="text-xs text-surface-400">
                Anchor
                <select
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.anchor ?? 'middle'}
                  onchange={(e) =>
                    updateElement(
                      'anchor',
                      e.currentTarget.value === 'middle' ? undefined : e.currentTarget.value
                    )}
                >
                  <option value="start">Left</option>
                  <option value="middle">Center</option>
                  <option value="end">Right</option>
                </select>
              </label>
            </div>
          {/if}

          <label class="text-xs text-surface-400">
            ID (for highlighting)
            <input
              type="text"
              class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
              value={selectedElement.id ?? ''}
              oninput={(e) => updateElement('id', e.currentTarget.value || undefined)}
            />
          </label>
        </div>
      {:else}
        <div class="card border border-surface-600 p-3 bg-surface-900 text-sm text-surface-400">
          Click an element to select it, or use the palette to add new elements.
        </div>
      {/if}

      <!-- Element list -->
      <div class="card border border-surface-600 p-3 bg-surface-900 space-y-1">
        <div class="flex justify-between items-center mb-1">
          <span class="text-sm font-semibold text-surface-200">Elements ({elements.length})</span>
          <button class="btn btn-sm preset-tonal-surface text-xs px-1.5 py-0.5" onclick={selectAll}
            >Select All</button
          >
        </div>
        <div class="max-h-64 overflow-y-auto space-y-0.5">
          {#each elements as el, i}
            <button
              class="w-full text-left text-xs px-2 py-1 rounded flex items-center gap-1
                {selected.has(i)
                ? 'bg-primary-500/20 text-primary-300 border border-primary-500/30'
                : 'hover:bg-surface-800 text-surface-300'}"
              onclick={(e) => {
                if (e.ctrlKey || e.metaKey) {
                  const next = new Set(selected);
                  if (next.has(i)) next.delete(i);
                  else next.add(i);
                  selected = next;
                } else {
                  selected = new Set([i]);
                }
              }}
            >
              <span class="capitalize font-mono text-surface-400">{el.type}</span>
              {#if el.type === 'player'}<span class="font-bold" style:color={ROLE_COLORS[el.job]}
                  >{el.job}</span
                >{/if}
              {#if el.type === 'waymark'}<span
                  class="font-bold"
                  style:color={WAYMARK_COLORS[el.mark]}>{el.mark}</span
                >{/if}
              {#if el.type === 'text'}<span class="truncate text-surface-300"
                  >"{el.text.split('\n')[0]}"</span
                >{/if}
              {#if el.type === 'debuff'}<span class="truncate text-surface-300">{el.debuffId}</span
                >{/if}
              {#if 'x' in el}<span class="text-surface-500 ml-auto font-mono">({el.x},{el.y})</span
                >{/if}
              {#if 'x1' in el}<span class="text-surface-500 ml-auto font-mono"
                  >({el.x1},{el.y1})→({el.x2},{el.y2})</span
                >{/if}
              {#if el.type === 'polygon'}<span class="text-surface-500 ml-auto font-mono"
                  >{el.points.length} pts</span
                >{/if}
            </button>
          {/each}
        </div>
      </div>

      <!-- Generated code -->
      <div class="card border border-surface-600 p-3 bg-surface-900 space-y-2">
        <div class="flex justify-between items-center">
          <span class="text-sm font-semibold text-surface-200">Generated Code</span>
          <button class="btn btn-sm preset-tonal-secondary text-xs" onclick={copyCode}>
            <Copy size={12} />
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <pre
          class="text-xs text-surface-200 bg-surface-950 border border-surface-700 p-2 rounded overflow-x-auto max-h-60 overflow-y-auto font-mono whitespace-pre">{generatedCode}</pre>
      </div>

      <!-- JSON Export/Import -->
      <div class="card border border-surface-600 p-3 bg-surface-900 space-y-2">
        <div class="flex justify-between items-center">
          <span class="text-sm font-semibold text-surface-200">JSON</span>
          <button class="btn btn-sm preset-tonal-secondary text-xs" onclick={copyJson}>
            <Copy size={12} />
            {copiedJson ? 'Copied!' : 'Copy JSON'}
          </button>
        </div>
        <textarea
          bind:value={jsonImport}
          placeholder="Paste JSON here to load a diagram..."
          class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-2 py-1 text-xs w-full font-mono h-24 resize-y placeholder:text-surface-500"
        ></textarea>
        {#if jsonError}
          <div class="text-xs text-red-400">{jsonError}</div>
        {/if}
        <button
          class="btn btn-sm preset-tonal-primary text-xs w-full"
          onclick={loadFromImport}
          disabled={!jsonImport.trim()}>Load from JSON</button
        >
      </div>
    </div>
  </div>
</div>

<svelte:window
  onkeydown={(e) => {
    if (e.key === 'Escape') {
      placingType = null;
      placingSubtype = null;
      twoPointStart = null;
      selected = new Set();
    }
    if (e.key === 'Delete' || e.key === 'Backspace') {
      if (
        selected.size > 0 &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        deleteSelected();
      }
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
      if (
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        selectAll();
      }
    }
  }}
/>
