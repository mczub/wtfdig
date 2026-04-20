<script lang="ts">
  import ArenaRenderer from '../../../components/poster/ArenaRenderer.svelte';
  import {
    type ArenaDiagramData,
    type ArenaElement,
    type ArenaShape,
    type PlayerJob,
    type WaymarkName,
    ROLE_COLORS,
    WAYMARK_COLORS,
    SQUARE_MARKERS,
    CIRCLE_MARKERS
  } from '$lib/arena';
  import { Copy, Crosshair, Trash2, Plus, RotateCcw } from '@lucide/svelte/icons';

  // --- State ---
  let arenaShape: ArenaShape = $state('square');
  let showBackground = $state(true);
  let title: string = $state('');
  let gridW: number = $state(4);
  let gridH: number = $state(4);
  let scale: number = $state(1);
  let elements: ArenaElement[] = $state([]);
  let selected: Set<number> = $state(new Set());
  let placingType: string | null = $state(null);
  let placingSubtype: string | null = $state(null);
  let didMouseDownElement = false;
  // For two-point elements (arrow, tether): store first click point
  let twoPointStart: { x: number; y: number } | null = $state(null);

  // --- Derived ---
  let diagramData: ArenaDiagramData = $derived({
    arena: arenaShape,
    elements,
    title: title || undefined,
    bgColor: showBackground ? undefined : 'transparent',
    scale: scale !== 1 ? scale : undefined
  });

  // For the property panel: only show when exactly one element is selected
  let selectedIndex = $derived(selected.size === 1 ? [...selected][0] : null);
  let selectedElement = $derived(selectedIndex !== null ? elements[selectedIndex] : null);


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

      // Two-point elements: arrow, tether
      if (placingType === 'arrow' || placingType === 'tether') {
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

  function createTwoPointElement(type: string, from: { x: number; y: number }, to: { x: number; y: number }): ArenaElement | null {
    switch (type) {
      case 'arrow':
        return { type: 'arrow', x1: from.x, y1: from.y, x2: to.x, y2: to.y };
      case 'tether':
        return { type: 'tether', x1: from.x, y1: from.y, x2: to.x, y2: to.y };
      default:
        return null;
    }
  }

  function createElementAt(type: string, subtype: string | null, x: number, y: number): ArenaElement | null {
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
      default:
        return null;
    }
  }

  // --- Dragging ---
  let dragging = $state(false);

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
    const startPositions = new Map<number, Record<string, number>>();
    for (const idx of selected) {
      const el = elements[idx] as any;
      if ('x' in el) {
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
        if ('x1' in start) {
          return { ...el, x1: round2(start.x1 + dx), y1: round2(start.y1 + dy), x2: round2(start.x2 + dx), y2: round2(start.y2 + dy) } as ArenaElement;
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

  function handleEndpointDrag(index: number, endpoint: 'start' | 'end', e: MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    didMouseDownElement = true;
    selected = new Set([index]);

    const startCoords = svgCoords(e);
    if (!startCoords) return;
    const el = elements[index] as any;
    const startPos = endpoint === 'start'
      ? { x: el.x1, y: el.y1 }
      : { x: el.x2, y: el.y2 };

    function onMove(me: MouseEvent) {
      const coords = svgCoords(me);
      if (!coords) return;
      const dx = (coords.x - startCoords!.x) / scale;
      const dy = (coords.y - startCoords!.y) / scale;
      const xKey = endpoint === 'start' ? 'x1' : 'x2';
      const yKey = endpoint === 'start' ? 'y1' : 'y2';
      elements = elements.map((el, i) =>
        i === index ? { ...el, [xKey]: round2(startPos.x + dx), [yKey]: round2(startPos.y + dy) } as ArenaElement : el
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
      el.x1 += dx; el.y1 += dy;
      el.x2 += dx; el.y2 += dy;
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
      const el = { ...elements[idx] };
      if ('x' in el) (el as any).x += 5;
      if ('y' in el) (el as any).y += 5;
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

  // --- Code generation ---
  let generatedCode = $derived(generateCode());

  function generateCode(): string {
    const imports = new Set<string>();
    imports.add('diagram');

    const elStrs = elements.map((el) => {
      switch (el.type) {
        case 'player':
          imports.add('player');
          {
            const hasOpts = el.marker || el.id;
            if (hasOpts) {
              const opts: string[] = [];
              if (el.id) opts.push(`id: '${el.id}'`);
              if (el.marker) opts.push(`marker: '${el.marker}'`);
              return `  player('${el.job}', ${el.x}, ${el.y}, { ${opts.join(', ')} })`;
            }
            return `  player('${el.job}', ${el.x}, ${el.y})`;
          }
        case 'boss':
          imports.add('boss');
          return `  boss(${el.x}, ${el.y}${el.rotation ? `, ${el.rotation}` : ''})`;
        case 'waymark':
          imports.add('waymark');
          return `  waymark('${el.mark}', ${el.x}, ${el.y})`;
        case 'aoe':
          if (el.shape === 'circle') {
            imports.add('aoeCircle');
            const opts: string[] = [];
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
          const aOptsStr = aOpts.length > 0 ? `, { ${aOpts.join(', ')} }` : '';
          return `  arrow(${el.x1}, ${el.y1}, ${el.x2}, ${el.y2}${aOptsStr})`;
        case 'arena':
          imports.add('arenaShape');
          {
            const opts: string[] = [];
            if (el.rotation) opts.push(`rotation: ${el.rotation}`);
            if (el.bgColor) opts.push(`bgColor: '${el.bgColor}'`);
            if (el.borderColor) opts.push(`borderColor: '${el.borderColor}'`);
            if (el.showCrosshairs === false) opts.push('showCrosshairs: false');
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
        default:
          return `  // unknown element`;
      }
    });

    // Check if all 8 waymarks are present as standard preset
    const hasAllWaymarks = (['A', 'B', 'C', 'D', '1', '2', '3', '4'] as const).every((m) =>
      elements.some((e) => e.type === 'waymark' && e.mark === m)
    );
    if (hasAllWaymarks) {
      imports.add(arenaShape === 'square' ? 'SQUARE_MARKERS' : 'CIRCLE_MARKERS');
    }

    const importStr = `import { ${[...imports].join(', ')} } from '$lib/arena';`;
    const lines: string[] = [importStr, '', `// Grid: ${gridW}w × ${gridH}h`];

    const diagramOpts: string[] = [];
    if (title) diagramOpts.push(`title: '${title}'`);
    if (!showBackground) diagramOpts.push(`bgColor: 'transparent'`);
    if (scale !== 1) diagramOpts.push(`scale: ${scale}`);
    const optsStr = diagramOpts.length > 0 ? `, { ${diagramOpts.join(', ')} }` : '';

    lines.push(`diagram('${arenaShape}', [`);

    if (hasAllWaymarks) {
      lines.push(`  ...${arenaShape === 'square' ? 'SQUARE_MARKERS' : 'CIRCLE_MARKERS'},`);
      for (let idx = 0; idx < elStrs.length; idx++) {
        if (elements[idx].type !== 'waymark') lines.push(elStrs[idx] + ',');
      }
    } else {
      for (const str of elStrs) {
        lines.push(str + ',');
      }
    }

    lines.push(`]${optsStr})`);
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
    // Parse player('JOB', x, y, 'id'?) or player('JOB', x, y, { opts })
    for (const m of code.matchAll(new RegExp(`player\\(\\s*'(\\w+)'\\s*,\\s*(${N})\\s*,\\s*(${N})(?:\\s*,\\s*(?:'(\\w+)'|\\{([^}]*)\\}))?\\s*\\)`, 'g'))) {
      const opts = m[5] ? parseInlineOpts(m[5]) : {};
      els.push({ type: 'player', job: m[1] as PlayerJob, x: +m[2], y: +m[3], id: m[4] || opts.id as string | undefined, marker: opts.marker as 'red' | 'green' | undefined });
    }
    // Parse boss(x, y, rotation?)
    for (const m of code.matchAll(new RegExp(`boss\\(\\s*(${N})\\s*,\\s*(${N})(?:\\s*,\\s*(${N}))?\\s*\\)`, 'g'))) {
      els.push({ type: 'boss', x: +m[1], y: +m[2], rotation: m[3] ? +m[3] : undefined });
    }
    // Parse waymark('M', x, y)
    for (const m of code.matchAll(new RegExp(`waymark\\(\\s*'(\\w)'\\s*,\\s*(${N})\\s*,\\s*(${N})\\s*\\)`, 'g'))) {
      els.push({ type: 'waymark', mark: m[1] as WaymarkName, x: +m[2], y: +m[3] });
    }
    // Parse aoeCircle(x, y, r, { opts })
    for (const m of code.matchAll(new RegExp(`aoeCircle\\(\\s*(${N})\\s*,\\s*(${N})\\s*,\\s*(${N})(?:\\s*,\\s*\\{([^}]*)\\})?\\s*\\)`, 'g'))) {
      const opts = parseInlineOpts(m[4]);
      els.push({ type: 'aoe', shape: 'circle', x: +m[1], y: +m[2], r: +m[3], ...opts });
    }
    // Parse aoeRect(x, y, w, h, { opts })
    for (const m of code.matchAll(new RegExp(`aoeRect\\(\\s*(${N})\\s*,\\s*(${N})\\s*,\\s*(${N})\\s*,\\s*(${N})(?:\\s*,\\s*\\{([^}]*)\\})?\\s*\\)`, 'g'))) {
      const opts = parseInlineOpts(m[5]);
      els.push({ type: 'aoe', shape: 'rect', x: +m[1], y: +m[2], w: +m[3], h: +m[4], ...opts });
    }
    // Parse tether(x1, y1, x2, y2, { opts })
    for (const m of code.matchAll(new RegExp(`tether\\(\\s*(${N})\\s*,\\s*(${N})\\s*,\\s*(${N})\\s*,\\s*(${N})(?:\\s*,\\s*\\{([^}]*)\\})?\\s*\\)`, 'g'))) {
      const opts = parseInlineOpts(m[5]);
      els.push({ type: 'tether', x1: +m[1], y1: +m[2], x2: +m[3], y2: +m[4], ...opts });
    }
    // Parse arrow(x1, y1, x2, y2, { opts })
    for (const m of code.matchAll(new RegExp(`arrow\\(\\s*(${N})\\s*,\\s*(${N})\\s*,\\s*(${N})\\s*,\\s*(${N})(?:\\s*,\\s*\\{([^}]*)\\})?\\s*\\)`, 'g'))) {
      const opts = parseInlineOpts(m[5]);
      els.push({ type: 'arrow', x1: +m[1], y1: +m[2], x2: +m[3], y2: +m[4], ...opts });
    }
    // Parse arenaShape('shape', x, y, w, h, { opts })
    for (const m of code.matchAll(new RegExp(`arenaShape\\(\\s*'(square|circle|rect)'\\s*,\\s*(${N})\\s*,\\s*(${N})\\s*,\\s*(${N})\\s*,\\s*(${N})(?:\\s*,\\s*\\{([^}]*)\\})?\\s*\\)`, 'g'))) {
      const opts = parseInlineOpts(m[6]);
      els.push({ type: 'arena', shape: m[1] as 'square' | 'circle' | 'rect', x: +m[2], y: +m[3], w: +m[4], h: +m[5], ...opts });
    }
    // Parse text('label', x, y, { opts })
    for (const m of code.matchAll(new RegExp(`text\\(\\s*'([^']*)'\\s*,\\s*(${N})\\s*,\\s*(${N})(?:\\s*,\\s*\\{([^}]*)\\})?\\s*\\)`, 'g'))) {
      const opts = parseInlineOpts(m[4]);
      const textContent = m[1].replace(/\\n/g, '\n');
      els.push({ type: 'text', text: textContent, x: +m[2], y: +m[3], ...opts });
    }
    // Expand ...SQUARE_MARKERS / ...CIRCLE_MARKERS
    if (code.includes('SQUARE_MARKERS')) {
      els.push(...SQUARE_MARKERS.map(w => ({ ...w })));
    } else if (code.includes('CIRCLE_MARKERS')) {
      els.push(...CIRCLE_MARKERS.map(w => ({ ...w })));
    }

    // Parse diagram-level opts
    const optsMatch = code.match(/\]\s*,\s*\{([^}]*)\}\s*\)/);
    const diagramOpts = parseInlineOpts(optsMatch?.[1]);

    return {
      arena: shape,
      elements: els,
      title: diagramOpts.title as string | undefined,
      bgColor: diagramOpts.bgColor as string | undefined,
      scale: diagramOpts.scale as number | undefined
    };
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
    title = data.title ?? '';
    showBackground = data.bgColor !== 'transparent';
    scale = data.scale ?? 1;
    elements = data.elements ?? [];
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
  const genericJobs: PlayerJob[] = ['DPS', 'SUP', 'G1', 'G2', 'ANY'];
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
            class="btn btn-sm {arenaShape === 'square' ? 'preset-filled-primary-500' : 'preset-tonal-surface'}"
            onclick={() => (arenaShape = 'square')}
          >Square</button>
          <button
            class="btn btn-sm {arenaShape === 'circle' ? 'preset-filled-primary-500' : 'preset-tonal-surface'}"
            onclick={() => (arenaShape = 'circle')}
          >Circle</button>
        </div>
        <label class="flex items-center gap-1 text-sm text-surface-300 cursor-pointer">
          <input type="checkbox" bind:checked={showBackground} class="accent-primary-500" />
          Background
        </label>
        <input
          type="text"
          bind:value={title}
          placeholder="Title (optional)"
          class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-2 py-1 text-sm w-40 placeholder:text-surface-500"
        />
        <div class="flex items-center gap-1">
          <span class="text-sm font-semibold text-surface-300">Grid:</span>
          <input type="number" min="1" max="16" bind:value={gridW}
            class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-14 text-center" />
          <span class="text-surface-400">×</span>
          <input type="number" min="1" max="9" bind:value={gridH}
            class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-14 text-center" />
          <span class="text-xs text-surface-500">cells</span>
        </div>
        <div class="flex items-center gap-1">
          <span class="text-sm font-semibold text-surface-300">Scale:</span>
          <input type="number" min="0.1" max="5" step="0.1" bind:value={scale}
            class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-16 text-center" />
        </div>
      </div>

      <!-- Canvas -->
      <div
        class="relative border border-surface-600 rounded-lg overflow-hidden"
        class:cursor-crosshair={placingType !== null}
        class:bg-surface-950={showBackground}
        style="width: {gridW * 100}px; height: {gridH * 100}px;"
        style:background={!showBackground ? 'repeating-conic-gradient(#333 0% 25%, #222 0% 50%) 0 0 / 20px 20px' : undefined}
      >
        <ArenaRenderer data={diagramData} {gridW} {gridH} />

        <!-- Interactive overlay -->
        <svg
          bind:this={svgEl}
          viewBox="0 0 {gridW * 25} {gridH * 25}"
          class="absolute inset-0 w-full h-full"
          onclick={handleCanvasClick}
        >
          {#each elements as el, i}
            {#if el.type === 'player' || el.type === 'boss' || el.type === 'waymark' || el.type === 'text'}
              <!-- svelte-ignore a11y_no_static_element_interactions -->
              <circle
                cx={el.x * scale}
                cy={el.y * scale}
                r={el.type === 'boss' ? 14 : el.type === 'player' ? 7 : 4}
                fill="transparent"
                stroke={selected.has(i) ? '#22d3ee' : 'transparent'}
                stroke-width="0.6"
                stroke-dasharray="1.5,1"
                class="cursor-move"
                onmousedown={(e) => handleElementMouseDown(i, e)}
              />
            {:else if el.type === 'aoe' && el.shape === 'circle'}
              <!-- svelte-ignore a11y_no_static_element_interactions -->
              <circle
                cx={el.x * scale}
                cy={el.y * scale}
                r={el.r * scale}
                fill="transparent"
                stroke={selected.has(i) ? '#22d3ee' : 'transparent'}
                stroke-width="0.6"
                stroke-dasharray="1.5,1"
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
                transform={el.rotation ? `rotate(${el.rotation} ${el.x * scale} ${el.y * scale})` : undefined}
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
                transform={el.rotation ? `rotate(${el.rotation} ${el.x * scale} ${el.y * scale})` : undefined}
                class="cursor-move"
                onmousedown={(e) => handleElementMouseDown(i, e)}
              />
            {:else if el.type === 'arrow' || el.type === 'tether'}
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
                  cx={el.x1 * scale} cy={el.y1 * scale} r="2.5"
                  fill="#22d3ee" class="cursor-grab"
                  onmousedown={(e) => handleEndpointDrag(i, 'start', e)}
                />
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <circle
                  cx={el.x2 * scale} cy={el.y2 * scale} r="2.5"
                  fill="#22d3ee" class="cursor-grab"
                  onmousedown={(e) => handleEndpointDrag(i, 'end', e)}
                />
              {/if}
            {/if}
          {/each}
          <!-- Two-point placement preview -->
          {#if twoPointStart && (placingType === 'arrow' || placingType === 'tether')}
            <circle cx={twoPointStart.x * scale} cy={twoPointStart.y * scale} r="2" fill="#22d3ee" opacity="0.7" />
          {/if}
        </svg>

        {#if placingType}
          <div class="absolute top-2 left-2 bg-primary-500/90 text-white text-xs px-2 py-1 rounded">
            {#if twoPointStart}
              Click to set end point — Esc to cancel
            {:else}
              Click to {placingType === 'arrow' || placingType === 'tether' ? 'set start point' : 'place'} {placingType}{placingSubtype ? ` (${placingSubtype})` : ''} — Esc to cancel
            {/if}
          </div>
        {/if}
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
              onclick={() => startPlace('player', job)}
            >{job}</button>
          {/each}
        </div>
        <div class="flex flex-wrap gap-1">
          {#each genericJobs as job}
            <button
              class="btn btn-sm px-2 py-1 text-xs border font-bold"
              style:background-color={ROLE_COLORS[job] + '33'}
              style:border-color={ROLE_COLORS[job]}
              style:color={ROLE_COLORS[job]}
              onclick={() => startPlace('player', job)}
            >{job}</button>
          {/each}
        </div>
        <div class="flex flex-wrap gap-1">
          {#each waymarkNames as mark}
            <button
              class="btn btn-sm px-2 py-1 text-xs border font-bold"
              style:border-color={WAYMARK_COLORS[mark]}
              style:color={WAYMARK_COLORS[mark]}
              onclick={() => startPlace('waymark', mark)}
            >{'ABCD'.includes(mark) ? mark : `#${mark}`}</button>
          {/each}
          <button
            class="btn btn-sm preset-tonal-surface text-xs"
            onclick={addWaymarkPreset}
          ><Plus size={12} /> All Waymarks</button>
        </div>
        <div class="flex flex-wrap gap-1">
          <button class="btn btn-sm preset-tonal-surface text-xs" onclick={() => startPlace('boss')}>Boss</button>
          <button class="btn btn-sm preset-tonal-surface text-xs" onclick={() => startPlace('aoe-circle')}>AoE Circle</button>
          <button class="btn btn-sm preset-tonal-surface text-xs" onclick={() => startPlace('aoe-rect')}>AoE Rect</button>
          <button class="btn btn-sm preset-tonal-surface text-xs" onclick={() => startPlace('arrow')}>Arrow</button>
          <button class="btn btn-sm preset-tonal-surface text-xs" onclick={() => startPlace('tether')}>Line/Tether</button>
          <button class="btn btn-sm preset-tonal-surface text-xs" onclick={() => startPlace('text')}>Text</button>
        </div>
        <div class="flex flex-wrap gap-1">
          <span class="text-xs text-surface-400 self-center">Arena:</span>
          <button class="btn btn-sm preset-tonal-surface text-xs" onclick={() => startPlace('arena-square')}>Square</button>
          <button class="btn btn-sm preset-tonal-surface text-xs" onclick={() => startPlace('arena-circle')}>Circle</button>
          <button class="btn btn-sm preset-tonal-surface text-xs" onclick={() => startPlace('arena-rect')}>Rect</button>
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
      <!-- Selected element properties -->
      {#if selected.size > 1}
        <div class="card border border-surface-600 p-3 space-y-2 bg-surface-900">
          <div class="flex justify-between items-center">
            <span class="font-semibold text-sm text-surface-100">{selected.size} elements selected</span>
            <div class="flex gap-1">
              <button class="btn btn-sm preset-tonal-surface p-1" onclick={duplicateSelected} title="Duplicate all">
                <Copy size={14} />
              </button>
              <button class="btn btn-sm preset-tonal-error p-1" onclick={deleteSelected} title="Delete all">
                <Trash2 size={14} />
              </button>
            </div>
          </div>
          <div class="text-xs text-surface-400">Ctrl+click to toggle individual elements. Drag any selected element to move all.</div>
        </div>
      {:else if selectedElement && selectedIndex !== null}
        <div class="card border border-surface-600 p-3 space-y-2 bg-surface-900">
          <div class="flex justify-between items-center">
            <span class="font-semibold text-sm capitalize text-surface-100">{selectedElement.type}
              {#if selectedElement.type === 'player'}<span style:color={ROLE_COLORS[selectedElement.job]}> {selectedElement.job}</span>{/if}
              {#if selectedElement.type === 'waymark'}<span style:color={WAYMARK_COLORS[selectedElement.mark]}> {selectedElement.mark}</span>{/if}
            </span>
            <div class="flex gap-1">
              <button class="btn btn-sm preset-tonal-surface p-1" onclick={centerSelected} title="Center & round to 2 decimals">
                <Crosshair size={14} />
              </button>
              <button class="btn btn-sm preset-tonal-surface p-1" onclick={duplicateSelected} title="Duplicate">
                <Copy size={14} />
              </button>
              <button class="btn btn-sm preset-tonal-error p-1" onclick={deleteSelected} title="Delete">
                <Trash2 size={14} />
              </button>
            </div>
          </div>

          {#if 'x' in selectedElement}
            <div class="grid grid-cols-2 gap-2">
              <label class="text-xs text-surface-400">
                X
                <input type="number" min="0" max="100"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.x}
                  oninput={(e) => updateElement('x', Number(e.currentTarget.value))}
                />
              </label>
              <label class="text-xs text-surface-400">
                Y
                <input type="number" min="0" max="100"
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
                <input type="number" min="0" max="100"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.x1}
                  oninput={(e) => updateElement('x1', Number(e.currentTarget.value))}
                />
              </label>
              <label class="text-xs text-surface-400">
                Y1
                <input type="number" min="0" max="100"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.y1}
                  oninput={(e) => updateElement('y1', Number(e.currentTarget.value))}
                />
              </label>
              <label class="text-xs text-surface-400">
                X2
                <input type="number" min="0" max="100"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.x2}
                  oninput={(e) => updateElement('x2', Number(e.currentTarget.value))}
                />
              </label>
              <label class="text-xs text-surface-400">
                Y2
                <input type="number" min="0" max="100"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.y2}
                  oninput={(e) => updateElement('y2', Number(e.currentTarget.value))}
                />
              </label>
            </div>
          {/if}

          {#if selectedElement.type === 'player'}
            <label class="text-xs text-surface-400">
              Marker
              <div class="flex gap-1 mt-0.5">
                <button
                  class="btn btn-sm text-xs px-2 {!selectedElement.marker ? 'preset-filled-surface' : 'preset-tonal-surface'}"
                  onclick={() => updateElement('marker', undefined)}
                >None</button>
                <button
                  class="btn btn-sm text-xs px-2 {selectedElement.marker === 'red' ? 'preset-filled-error' : 'preset-tonal-surface'}"
                  onclick={() => updateElement('marker', 'red')}
                >Red ∨</button>
                <button
                  class="btn btn-sm text-xs px-2 {selectedElement.marker === 'green' ? 'preset-filled-success' : 'preset-tonal-surface'}"
                  onclick={() => updateElement('marker', 'green')}
                >Green ∨</button>
              </div>
            </label>
          {/if}
          {#if selectedElement.type === 'aoe' && selectedElement.shape === 'circle'}
            <label class="text-xs text-surface-400">
              Radius
              <input type="number" min="1" max="50"
                class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                value={selectedElement.r}
                oninput={(e) => updateElement('r', Number(e.currentTarget.value))}
              />
            </label>
          {/if}
          {#if selectedElement.type === 'aoe' && selectedElement.shape === 'rect'}
            <div class="grid grid-cols-2 gap-2">
              <label class="text-xs text-surface-400">
                Width
                <input type="number" min="1" max="100"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.w}
                  oninput={(e) => updateElement('w', Number(e.currentTarget.value))}
                />
              </label>
              <label class="text-xs text-surface-400">
                Height
                <input type="number" min="1" max="100"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.h}
                  oninput={(e) => updateElement('h', Number(e.currentTarget.value))}
                />
              </label>
            </div>
            <label class="text-xs text-surface-400">
              Rotation
              <input type="number" min="0" max="360"
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
                <input type="color" class="w-full h-7 rounded border border-surface-600 bg-surface-800"
                  value={selectedElement.color ?? '#f59e0b'}
                  oninput={(e) => updateElement('color', e.currentTarget.value)}
                />
              </label>
              <label class="text-xs text-surface-400">
                Opacity ({(selectedElement.opacity ?? 0.35).toFixed(2)})
                <input type="range" min="0" max="1" step="0.05" class="w-full accent-primary-500"
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
                <input type="color" class="w-full h-7 rounded border border-surface-600 bg-surface-800"
                  value={selectedElement.color ?? '#facc15'}
                  oninput={(e) => updateElement('color', e.currentTarget.value)}
                />
              </label>
              <label class="text-xs text-surface-400">
                Width
                <input type="number" min="0.1" max="5" step="0.1"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.width ?? 0.5}
                  oninput={(e) => updateElement('width', Number(e.currentTarget.value))}
                />
              </label>
            </div>
            <label class="flex items-center gap-2 text-xs text-surface-400 cursor-pointer">
              <input type="checkbox" class="accent-primary-500"
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
                <input type="color" class="w-full h-7 rounded border border-surface-600 bg-surface-800"
                  value={selectedElement.color ?? '#ffffff'}
                  oninput={(e) => updateElement('color', e.currentTarget.value)}
                />
              </label>
              <label class="text-xs text-surface-400">
                Width
                <input type="number" min="0.1" max="5" step="0.1"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.width ?? 0.5}
                  oninput={(e) => updateElement('width', Number(e.currentTarget.value))}
                />
              </label>
            </div>
          {/if}

          {#if selectedElement.type === 'arena'}
            {#if selectedElement.shape === 'circle'}
              <label class="text-xs text-surface-400">
                Diameter (W)
                <input type="number" min="1" max="200"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.w}
                  oninput={(e) => updateElement('w', Number(e.currentTarget.value))}
                />
              </label>
            {:else}
              <div class="grid grid-cols-2 gap-2">
                <label class="text-xs text-surface-400">
                  Width
                  <input type="number" min="1" max="200"
                    class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                    value={selectedElement.w}
                    oninput={(e) => updateElement('w', Number(e.currentTarget.value))}
                  />
                </label>
                <label class="text-xs text-surface-400">
                  Height
                  <input type="number" min="1" max="200"
                    class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                    value={selectedElement.h}
                    oninput={(e) => updateElement('h', Number(e.currentTarget.value))}
                  />
                </label>
              </div>
              <label class="text-xs text-surface-400">
                Rotation
                <input type="number" min="0" max="360"
                  class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                  value={selectedElement.rotation ?? 0}
                  oninput={(e) => updateElement('rotation', Number(e.currentTarget.value))}
                />
              </label>
            {/if}
            <div class="grid grid-cols-2 gap-2">
              <label class="text-xs text-surface-400">
                Background
                <input type="color" class="w-full h-7 rounded border border-surface-600 bg-surface-800"
                  value={selectedElement.bgColor ?? '#2a2420'}
                  oninput={(e) => updateElement('bgColor', e.currentTarget.value)}
                />
              </label>
              <label class="text-xs text-surface-400">
                Border
                <input type="color" class="w-full h-7 rounded border border-surface-600 bg-surface-800"
                  value={selectedElement.borderColor ?? '#4a4a4a'}
                  oninput={(e) => updateElement('borderColor', e.currentTarget.value)}
                />
              </label>
            </div>
            <label class="flex items-center gap-2 text-xs text-surface-400 cursor-pointer">
              <input type="checkbox" class="accent-primary-500"
                checked={selectedElement.showCrosshairs !== false}
                onchange={(e) => updateElement('showCrosshairs', e.currentTarget.checked ? undefined : false)}
              />
              Show crosshairs
            </label>
          {/if}

          {#if selectedElement.type === 'boss'}
            <label class="text-xs text-surface-400">
              Facing (rotation)
              <input type="number" min="0" max="360" step="45"
                class="bg-surface-800 text-surface-100 border border-surface-600 rounded px-1 py-0.5 text-sm w-full"
                value={selectedElement.rotation ?? 0}
                oninput={(e) => updateElement('rotation', Number(e.currentTarget.value))}
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
                <input type="color" class="w-full h-7 rounded border border-surface-600 bg-surface-800"
                  value={selectedElement.color ?? '#ffffff'}
                  oninput={(e) => updateElement('color', e.currentTarget.value)}
                />
              </label>
              <label class="text-xs text-surface-400">
                Size
                <input type="number" min="1" max="12" step="0.5"
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
                  onchange={(e) => updateElement('anchor', e.currentTarget.value === 'middle' ? undefined : e.currentTarget.value)}
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
            <input type="text"
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
          <button class="btn btn-sm preset-tonal-surface text-xs px-1.5 py-0.5" onclick={selectAll}>Select All</button>
        </div>
        <div class="max-h-64 overflow-y-auto space-y-0.5">
          {#each elements as el, i}
            <button
              class="w-full text-left text-xs px-2 py-1 rounded flex items-center gap-1
                {selected.has(i) ? 'bg-primary-500/20 text-primary-300 border border-primary-500/30' : 'hover:bg-surface-800 text-surface-300'}"
              onclick={(e) => {
                if (e.ctrlKey || e.metaKey) {
                  const next = new Set(selected);
                  if (next.has(i)) next.delete(i); else next.add(i);
                  selected = next;
                } else {
                  selected = new Set([i]);
                }
              }}
            >
              <span class="capitalize font-mono text-surface-400">{el.type}</span>
              {#if el.type === 'player'}<span class="font-bold" style:color={ROLE_COLORS[el.job]}>{el.job}</span>{/if}
              {#if el.type === 'waymark'}<span class="font-bold" style:color={WAYMARK_COLORS[el.mark]}>{el.mark}</span>{/if}
              {#if el.type === 'text'}<span class="truncate text-surface-300">"{el.text.split('\n')[0]}"</span>{/if}
              {#if 'x' in el}<span class="text-surface-500 ml-auto font-mono">({el.x},{el.y})</span>{/if}
              {#if 'x1' in el}<span class="text-surface-500 ml-auto font-mono">({el.x1},{el.y1})→({el.x2},{el.y2})</span>{/if}
            </button>
          {/each}
        </div>
      </div>

      <!-- Generated code -->
      <div class="card border border-surface-600 p-3 bg-surface-900 space-y-2">
        <div class="flex justify-between items-center">
          <span class="text-sm font-semibold text-surface-200">Generated Code</span>
          <button class="btn btn-sm preset-tonal-secondary text-xs" onclick={copyCode}>
            <Copy size={12} /> {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <pre class="text-xs text-surface-200 bg-surface-950 border border-surface-700 p-2 rounded overflow-x-auto max-h-60 overflow-y-auto font-mono whitespace-pre">{generatedCode}</pre>
      </div>

      <!-- JSON Export/Import -->
      <div class="card border border-surface-600 p-3 bg-surface-900 space-y-2">
        <div class="flex justify-between items-center">
          <span class="text-sm font-semibold text-surface-200">JSON</span>
          <button class="btn btn-sm preset-tonal-secondary text-xs" onclick={copyJson}>
            <Copy size={12} /> {copiedJson ? 'Copied!' : 'Copy JSON'}
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
          disabled={!jsonImport.trim()}
        >Load from JSON</button>
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
      if (selected.size > 0 && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        deleteSelected();
      }
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
      if (document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        selectAll();
      }
    }
  }}
/>
