<!--
  Renders one step of a raidplan.io plan as SVG, from a snapshot made by
  scripts/import-raidplan.ts. `highlight` takes marker labels (e.g. ['H2']) and
  spotlights the matching player markers.
-->
<script lang="ts" module>
  // The one board whose image snapshot is currently alive
  let activeRelease: (() => void) | undefined;

  function claimSnapshot(release: () => void) {
    if (activeRelease !== release) activeRelease?.();
    activeRelease = release;
  }
</script>

<script lang="ts">
  import { base } from '$app/paths';
  import { onDestroy, untrack } from 'svelte';
  import { localPaths, markerAssetPath, waypointAssetPath } from './assets';
  import {
    CANVAS_H,
    CANVAS_W,
    abilityMarkup,
    arrowPoints,
    circlePath,
    firstBaseline,
    fontFamily,
    lineAdvance,
    nodesForStep,
    placement,
    polygonPoints,
    smoothPath,
    styledLines,
    textBlockHeight
  } from './render';
  import type { Placement } from './render';
  import { FONT_CSS, svgToImage, warmSnapshotAssets } from './snapshot';
  import type { RaidplanAttr, RaidplanNode, RaidplanPlan } from './types';

  interface Props {
    plan: RaidplanPlan;
    /** Zero-based; raidplan URLs (#1, #2, ...) are one-based. */
    step: number;
    highlight?: string[];
    /** 'width': fill the width at 16:9. 'contain': letterbox inside a sized box, like object-contain. */
    fit?: 'width' | 'contain';
    /** Accessible name; defaults to the plan name and step */
    label?: string;
    class?: string;
  }

  let {
    plan,
    step,
    highlight = [],
    fit = 'width',
    label: ariaLabel,
    class: className = ''
  }: Props = $props();

  const uid = $props.id();

  // A transparent WebP copy of the board sits on top of the SVG so right-click,
  // long-press and drag behave like they do on a screenshot. Decoded at 1.5x
  // that's ~7MB of pixels, so it's built on demand: when the pointer enters or
  // presses the board (desktop hovers before right-clicking; long-press waits
  // ~500ms), and only one board on the page holds one at a time. Assets are
  // inlined earlier, when the board nears the viewport, so the build is quick.
  let wrapEl = $state<HTMLDivElement>();
  let svgEl = $state<SVGSVGElement>();
  let snapshotUrl = $state<string>();
  let hovered = false;
  let building = false;
  let buildToken = 0;

  function releaseSnapshot() {
    buildToken++;
    building = false;
    if (snapshotUrl) URL.revokeObjectURL(snapshotUrl);
    snapshotUrl = undefined;
    if (activeRelease === releaseSnapshot) activeRelease = undefined;
  }

  function ensureSnapshot() {
    if (snapshotUrl || building || !svgEl) return;
    claimSnapshot(releaseSnapshot);
    const token = ++buildToken;
    building = true;
    svgToImage(svgEl, CANVAS_W, CANVAS_H)
      .then((blob) => {
        if (token === buildToken) snapshotUrl = URL.createObjectURL(blob);
      })
      .catch((e) => console.warn('raidplan board snapshot failed', e))
      .finally(() => {
        if (token === buildToken) building = false;
      });
  }

  $effect(() => {
    if (!wrapEl || !svgEl) return;
    const el = svgEl;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          warmSnapshotAssets(el);
        }
      },
      { rootMargin: '300px' }
    );
    io.observe(wrapEl);
    return () => io.disconnect();
  });

  // What's drawn changed: drop the stale copy, rebuilding if the pointer's here
  $effect(() => {
    void [plan, step, highlight.join('|')];
    untrack(() => {
      releaseSnapshot();
      if (hovered) ensureSnapshot();
    });
  });

  onDestroy(releaseSnapshot);
  const view = $derived(nodesForStep(plan, step));
  const asset = (rel: string) => `${base}/raidplan/${rel}`;
  const visible = (c: string | null | undefined): c is string =>
    !!c && c.trim() !== '' && c.toLowerCase() !== 'transparent';

  // Waypoint backgrounds: A/1 red, B/2 yellow, C/3 blue, D/4 purple
  const WAYPOINT_RGB: Record<string, string> = {
    b: '255,255,198',
    '2': '255,255,198',
    c: '150,203,247',
    '3': '150,203,247',
    d: '197,148,250',
    '4': '197,148,250'
  };

  function shapeOutline(node: RaidplanNode, p: Placement, w: number, h: number): string {
    switch (node.type) {
      case 'rect':
        return `M${-w / 2},${-h / 2}h${w}v${h}h${-w}Z`;
      case 'circle':
        return circlePath(w / 2, node.attr);
      case 'triangle':
        return `M${polygonPoints(node.attr.sides, w, h)}Z`;
      case 'arrow':
        return `M${arrowPoints(p.sx, p.sy)}Z`;
    }
    return '';
  }

  function arenaOutline(shapeKind: string, w: number, h: number) {
    return shapeKind === 'circle'
      ? `M${w / 2},0 A${w / 2},${h / 2} 0 1 1 ${-w / 2},0 A${w / 2},${h / 2} 0 1 1 ${w / 2},0Z`
      : `M${-w / 2},${-h / 2}h${w}v${h}h${-w}Z`;
  }

  function dashArray(a: RaidplanAttr, sw: number) {
    if (a.strokeStyle === 'dash') return `${3 * sw} ${2 * sw}`;
    if (a.strokeStyle === 'dot') return `${sw} ${1.2 * sw}`;
    return undefined;
  }

  interface LabelSpec {
    text: string;
    font?: string;
    fontSize: number;
    color: string;
    stroke?: string | null;
    strokeWidth: number;
    background?: string | null;
    position: string;
    gap: number;
  }

  function markerLabel(a: RaidplanAttr): LabelSpec {
    return {
      text: (a.text || '').slice(0, 32),
      font: a.font,
      fontSize: Number.parseInt(String(a.fontSize ?? ''), 10) || 11,
      color: a.color || '#FFFFFF',
      stroke: a.labelStroke,
      strokeWidth: a.labelStrokeWidth || 1,
      background: a.labelBackground === undefined ? '#00000080' : a.labelBackground,
      position: a.labelPosition || 'bottom',
      gap: a.labelGap ?? 2
    };
  }

  function shapeLabel(a: RaidplanAttr): LabelSpec {
    return {
      text: (a.text || '').slice(0, 32),
      font: a.font,
      fontSize: Number(a.fontSize) || 32,
      color: a.color || '#000000',
      stroke: a.labelStroke,
      strokeWidth: a.labelStrokeWidth || 1,
      background: a.labelBackground ?? null,
      position: a.labelPosition || 'center',
      gap: a.labelGap ?? 2
    };
  }

  /** Labels are drawn unrotated and unscaled next to the object's scaled box. */
  function labelLayout(l: LabelSpec, p: Placement, w: number, h: number) {
    const halfW = (w * Math.abs(p.sx)) / 2;
    const halfH = (h * Math.abs(p.sy)) / 2;
    const boxH = l.fontSize * 1.13 + 4;
    // Text width isn't known until layout, so left/right labels anchor on their inner edge.
    let x = p.cx;
    let y = p.cy;
    let anchor = 'middle';
    if (l.position === 'top') y = p.cy - halfH - l.gap - boxH / 2;
    else if (l.position === 'bottom') y = p.cy + halfH + l.gap + boxH / 2;
    else if (l.position === 'left') [x, anchor] = [p.cx - halfW - l.gap - 3, 'end'];
    else if (l.position === 'right') [x, anchor] = [p.cx + halfW + l.gap + 3, 'start'];
    const approxW = l.text.length * l.fontSize * 0.55 + 6;
    const boxX = anchor === 'middle' ? x - approxW / 2 : anchor === 'end' ? x + 3 - approxW : x - 3;
    return {
      x,
      baseline: y - (l.fontSize * 1.13) / 2 + firstBaseline(l.fontSize),
      anchor,
      box: { x: boxX, y: y - boxH / 2, w: approxW, h: boxH }
    };
  }

  /** Normalized marker labels that count as the same player slot. */
  const ROLE_ALIASES: Record<string, string[]> = {
    MT: ['MT', 'T1'],
    OT: ['OT', 'T2', 'ST'],
    H1: ['H1'],
    H2: ['H2'],
    M1: ['M1', 'D1'],
    M2: ['M2', 'D2'],
    R1: ['R1', 'D3'],
    R2: ['R2', 'D4']
  };

  const spotlights = $derived.by(() => {
    if (!highlight.length) return [];
    const wanted = new Set(
      highlight.flatMap((h) => ROLE_ALIASES[h.toUpperCase()] ?? [h.toUpperCase()])
    );
    return view.nodes
      .filter((n) => n.type === 'marker' && wanted.has((n.attr.text || '').trim().toUpperCase()))
      .map((n) => {
        const w = n.meta.size?.w ?? 84;
        const h = n.meta.size?.h ?? 84;
        const p = placement(n.meta, w, h);
        const size = Math.max(w * Math.abs(p.sx), h * Math.abs(p.sy));
        // Nudge down so the circle takes in the label under the marker
        return { x: p.cx, y: p.cy + 6, r: size / 2 + 22 };
      });
  });
</script>

<svelte:head>
  <link href={FONT_CSS.Roboto} rel="stylesheet" />
</svelte:head>

{#snippet label(l: LabelSpec, p: Placement, w: number, h: number)}
  {#if l.text}
    {@const lay = labelLayout(l, p, w, h)}
    {#if visible(l.background)}
      <rect
        x={lay.box.x}
        y={lay.box.y}
        width={lay.box.w}
        height={lay.box.h}
        rx="3"
        fill={l.background}
      />
    {/if}
    <text
      x={lay.x}
      y={lay.baseline}
      text-anchor={lay.anchor}
      font-family={fontFamily(l.font)}
      font-size={l.fontSize}
      fill={l.color}
      stroke={visible(l.stroke) ? l.stroke : undefined}
      stroke-width={visible(l.stroke) ? l.strokeWidth : undefined}
      paint-order="stroke"
      filter={visible(l.stroke) ? undefined : `url(#${uid}-shadow)`}>{l.text}</text
    >
  {/if}
{/snippet}

{#snippet shape(node: RaidplanNode, id: string)}
  {@const a = node.attr}
  {@const w = node.meta.size?.w ?? (node.type === 'arrow' ? 32 : 64)}
  {@const h = node.meta.size?.h ?? 64}
  {@const sw = a.strokeWidth || 0}
  {@const p = placement(node.meta, w, h, 0, a.strokePosition === 'center' ? sw : 0)}
  {@const d = shapeOutline(node, p, w, h)}
  {@const hasStroke = visible(a.stroke) && sw > 0}
  {@const inside = hasStroke && a.strokePosition !== 'center'}
  <g transform={p.transform} opacity={a.opacity}>
    {#if inside}
      <clipPath {id}><path {d} /></clipPath>
    {/if}
    <path
      {d}
      fill={visible(a.fill) ? a.fill : 'none'}
      fill-rule="evenodd"
      stroke={hasStroke && !inside ? a.stroke : undefined}
      stroke-width={hasStroke && !inside ? sw : undefined}
      stroke-dasharray={hasStroke && !inside ? dashArray(a, sw) : undefined}
      vector-effect="non-scaling-stroke"
    />
    {#if inside}
      <!-- Inside strokes: double width, clipped to the shape -->
      <path
        {d}
        fill="none"
        stroke={a.stroke}
        stroke-width={sw * 2}
        stroke-dasharray={dashArray(a, sw * 2)}
        clip-path="url(#{id})"
        vector-effect="non-scaling-stroke"
      />
    {/if}
  </g>
  {@render label(shapeLabel(a), p, w, h)}
{/snippet}

{#snippet marker(node: RaidplanNode)}
  {@const a = node.attr}
  {@const w = node.meta.size?.w ?? 84}
  {@const h = node.meta.size?.h ?? 84}
  {@const p = placement(node.meta, w, h)}
  {@const border = a.styleBorder ?? a.border}
  <g transform={p.transform}>
    {#if visible(a.bgColor)}
      <rect x={-w / 2} y={-h / 2} width={w} height={h} fill={a.bgColor} />
    {/if}
    {#if a.asset}
      <image
        href={asset(localPaths.cdn(markerAssetPath(a.asset)))}
        x={-w / 2}
        y={-h / 2}
        width={w}
        height={h}
        preserveAspectRatio="none"
      />
    {/if}
    {#if visible(border)}
      <rect
        x={-w / 2}
        y={-h / 2}
        width={w}
        height={h}
        fill="none"
        stroke={border}
        stroke-width="1.3"
        vector-effect="non-scaling-stroke"
      />
    {/if}
  </g>
  {@render label(markerLabel(a), p, w, h)}
{/snippet}

{#snippet waypoint(node: RaidplanNode)}
  {@const wayId = node.attr.wayId || '1'}
  {@const rgb = WAYPOINT_RGB[wayId] ?? '221,110,122'}
  {@const p = placement(node.meta, node.meta.size?.w ?? 82, node.meta.size?.h ?? 82)}
  <g transform={p.transform}>
    {#if !node.attr.hideBg}
      {#if Number.isNaN(Number(wayId))}
        <circle r="40" fill="rgba({rgb},0.4)" stroke="rgba({rgb},0.8)" stroke-width="2" />
      {:else}
        <rect
          x="-40"
          y="-40"
          width="80"
          height="80"
          fill="rgba({rgb},0.4)"
          stroke="rgba({rgb},0.8)"
          stroke-width="2"
        />
      {/if}
    {/if}
    <image
      href={asset(localPaths.cdn(waypointAssetPath(wayId)))}
      x="-40"
      y="-40"
      width="80"
      height="80"
    />
  </g>
{/snippet}

{#snippet ability(node: RaidplanNode, id: string)}
  {@const a = node.attr}
  {@const w = node.meta.size?.w ?? 100}
  {@const h = node.meta.size?.h ?? 100}
  {@const p = placement(node.meta, w, h)}
  {@const markup = abilityMarkup(
    a.abilityId || 'ff-stack',
    a.colorA || '#000000',
    a.colorB || '#000000',
    `${id}-`
  )}
  {#if markup}
    <g transform={p.transform} opacity={Math.min(1, a.opacity ?? 1)}>
      <g transform="translate({-w / 2} {-h / 2}) scale({w / 100} {h / 100})">
        {@html markup}
      </g>
    </g>
  {/if}
{/snippet}

{#snippet itext(node: RaidplanNode)}
  {@const a = node.attr}
  {@const fontSize = Number(a.fontSize) || 40}
  {@const lines = styledLines(a.text || 'Text', a.styles)}
  {@const pad = visible(a.backgroundColor) ? 2 : 0}
  {@const textH = textBlockHeight(fontSize, lines.length) + 2 * pad}
  {@const w = node.meta.size?.w ?? 0}
  {@const h = a.autoHeight === false ? Math.max(node.meta.size?.h ?? 0, textH) : textH}
  {@const p = placement(node.meta, w, h)}
  {@const slack = h - textH}
  {@const top =
    -h / 2 +
    pad +
    (slack > 0 && a.verticalAlign === 'middle'
      ? slack / 2
      : slack > 0 && a.verticalAlign === 'bottom'
        ? slack
        : 0)}
  {@const align = a.textAlign === 'center' ? 'middle' : a.textAlign === 'right' ? 'end' : 'start'}
  {@const x = align === 'middle' ? 0 : align === 'end' ? w / 2 - pad : -w / 2 + pad}
  {@const hasStroke = visible(a.stroke)}
  <g transform={p.transform}>
    {#if pad}
      <rect x={-w / 2} y={-h / 2} width={w} height={h} fill={a.backgroundColor} />
    {/if}
    <text
      font-family={fontFamily(a.font)}
      font-size={fontSize}
      font-weight={a.fontWeight}
      font-style={a.fontStyle}
      text-decoration={a.underline ? 'underline' : a.linethrough ? 'line-through' : undefined}
      text-anchor={align}
      fill={a.fill || '#FFFFFF'}
      stroke={hasStroke ? a.stroke : undefined}
      stroke-width={hasStroke ? (a.strokeWidth || 1) / Math.abs(p.sx || 1) : undefined}
      paint-order="stroke"
      filter={hasStroke ? undefined : `url(#${uid}-shadow)`}
      xml:space="preserve"
    >
      {#each lines as runs, i (i)}
        <tspan {x} y={top + i * lineAdvance(fontSize) + firstBaseline(fontSize)}
          >{#each runs as run, j (j)}{#if run.style}<tspan
                fill={run.style.fill}
                font-weight={run.style.fontWeight}
                font-style={run.style.fontStyle}>{run.text}</tspan
              >{:else}{run.text}{/if}{/each}</tspan
        >
      {/each}
    </text>
  </g>
{/snippet}

{#snippet emoji(node: RaidplanNode)}
  {@const w = node.meta.size?.w ?? 32}
  {@const h = node.meta.size?.h ?? 32}
  {@const p = placement(node.meta, w, h)}
  <g transform={p.transform}>
    <image
      href={asset(localPaths.emoji(node.attr.emoji || '🙂'))}
      x={-w / 2}
      y={-h / 2}
      width={w}
      height={h}
    />
  </g>
{/snippet}

{#snippet path(node: RaidplanNode)}
  {@const a = node.attr}
  {@const sp = smoothPath(a.points ?? [])}
  {@const sw = a.strokeWidth || 4}
  {@const p = placement(node.meta, node.meta.size?.w ?? 0, node.meta.size?.h ?? 0, sw)}
  <g transform={p.transform} opacity={a.opacity}>
    <path
      d={sp.d}
      transform="translate({-sp.cx} {-sp.cy})"
      fill="none"
      stroke={a.stroke ?? '#000000'}
      stroke-width={sw}
      stroke-linecap={a.strokeLineCap ?? 'round'}
      stroke-linejoin={a.strokeLineJoin ?? 'round'}
      stroke-miterlimit={String(a.strokeMiterLimit ?? 10)}
    />
  </g>
{/snippet}

{#snippet arena(node: RaidplanNode, id: string)}
  {@const a = node.attr}
  {@const mapMode = !!a.map && a.map !== 'custom'}
  {@const shapeKind = a.shape || 'circle'}
  {@const bg = a.bgColor || '#2b2b2b'}
  {@const gridColor = a.gridColor || '#7b7b7b'}
  {@const sw = Math.min(12, Math.max(1, a.strokeWidth ?? 1))}
  {@const fullCanvas = mapMode || shapeKind === 'image'}
  {@const aw = fullCanvas ? CANVAS_W : Math.min(1200, Math.max(100, a.arenaWidth ?? 600))}
  {@const ah = fullCanvas ? CANVAS_H : Math.min(675, Math.max(100, a.arenaHeight ?? 600))}
  {@const gridX = Math.min(32, Math.max(0, a.gridX ?? 8))}
  {@const gridY = Math.min(32, Math.max(0, a.gridY ?? 8))}
  {@const gridRadial = Math.min(32, Math.max(0, a.gridRadial ?? 0))}
  {@const gridSpoke = Math.min(32, Math.max(0, a.gridSpoke ?? 0))}
  {@const rot = ((a.gridRotation ?? 0) * Math.PI) / 180}
  {@const img = a.localImage ? asset(a.localImage) : undefined}
  {@const [vAlign, hAlign] = (a.imageAlign || 'center-center').split('-')}
  {@const aspect = `x${hAlign === 'left' ? 'Min' : hAlign === 'right' ? 'Max' : 'Mid'}Y${vAlign === 'top' ? 'Min' : vAlign === 'bottom' ? 'Max' : 'Mid'}`}
  {@const outline = arenaOutline(fullCanvas ? 'square' : shapeKind, aw, ah)}
  <g transform="translate({CANVAS_W / 2} {CANVAS_H / 2})">
    {#if mapMode}
      {#if img}
        <image
          href={img}
          x={-aw / 2}
          y={-ah / 2}
          width={aw}
          height={ah}
          preserveAspectRatio="none"
        />
      {/if}
    {:else}
      {#if !fullCanvas}
        <clipPath {id}><path d={outline} /></clipPath>
      {/if}
      <!-- Raidplan's code fills image arenas with bgColor too, but the live viewer shows black there -->
      {#if visible(bg) && !fullCanvas}
        <path d={outline} fill={bg} />
      {/if}
      <g clip-path={fullCanvas ? undefined : `url(#${id})`}>
        {#if img}
          <image
            href={img}
            x={-aw / 2}
            y={-ah / 2}
            width={aw}
            height={ah}
            preserveAspectRatio={fullCanvas ? 'xMidYMid meet' : `${aspect} slice`}
          />
        {/if}
        <g stroke={gridColor} stroke-width={sw} fill="none">
          {#each { length: Math.max(0, gridX - 1) }, i (i)}
            <line
              x1={-aw / 2 + ((i + 1) * aw) / gridX}
              x2={-aw / 2 + ((i + 1) * aw) / gridX}
              y1={-ah / 2}
              y2={ah / 2}
            />
          {/each}
          {#each { length: Math.max(0, gridY - 1) }, i (i)}
            <line
              y1={-ah / 2 + ((i + 1) * ah) / gridY}
              y2={-ah / 2 + ((i + 1) * ah) / gridY}
              x1={-aw / 2}
              x2={aw / 2}
            />
          {/each}
          {#each { length: gridRadial }, i (i)}
            <ellipse rx={((i + 1) * aw) / 2 / gridRadial} ry={((i + 1) * ah) / 2 / gridRadial} />
          {/each}
          {#each { length: gridSpoke }, i (i)}
            {@const t = rot + (i * 2 * Math.PI) / gridSpoke}
            <line x2={Math.max(aw, ah) * Math.sin(t)} y2={-Math.max(aw, ah) * Math.cos(t)} />
          {/each}
        </g>
      </g>
      {#if !fullCanvas}
        <!-- Border sits just inside the edge -->
        <path
          d={arenaOutline(shapeKind, aw - (sw + 1), ah - (sw + 1))}
          fill="none"
          stroke={gridColor}
          stroke-width={sw + 1}
        />
      {/if}
    {/if}
  </g>
{/snippet}

<div
  bind:this={wrapEl}
  class="relative overflow-hidden {className}"
  role="presentation"
  onpointerenter={() => {
    hovered = true;
    ensureSnapshot();
  }}
  onpointerleave={() => (hovered = false)}
  onpointerdown={ensureSnapshot}
>
  <svg
    bind:this={svgEl}
    viewBox="0 0 {CANVAS_W} {CANVAS_H}"
    class={fit === 'contain' ? 'block w-full h-full' : 'block w-full h-auto'}
    role="img"
    aria-label={ariaLabel ?? `${plan.name} - step ${step + 1}`}
    font-family={fontFamily()}
  >
    <defs>
      <filter id="{uid}-shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="1" dy="1" stdDeviation="0.5" flood-color="#000" flood-opacity="0.3" />
      </filter>
    </defs>

    <rect width={CANVAS_W} height={CANVAS_H} fill="#000" />
    {#if view.arena}
      {@render arena(view.arena, `${uid}-arena`)}
    {/if}

    {#each view.nodes as node, i (i)}
      {@const id = `${uid}-${i}`}
      {#if node.type === 'rect' || node.type === 'circle' || node.type === 'triangle' || node.type === 'arrow'}
        {@render shape(node, id)}
      {:else if node.type === 'marker'}
        {@render marker(node)}
      {:else if node.type === 'waypoint'}
        {@render waypoint(node)}
      {:else if node.type === 'ability'}
        {@render ability(node, id)}
      {:else if node.type === 'itext' || node.type === 'text'}
        {@render itext(node)}
      {:else if node.type === 'emoji'}
        {@render emoji(node)}
      {:else if node.type === 'path'}
        {@render path(node)}
      {/if}
    {/each}

    {#if spotlights.length}
      <mask id="{uid}-spotlight">
        <rect width={CANVAS_W} height={CANVAS_H} fill="white" />
        {#each spotlights as s, i (i)}
          <circle cx={s.x} cy={s.y} r={s.r} fill="black" />
        {/each}
      </mask>
      <rect
        width={CANVAS_W}
        height={CANVAS_H}
        fill="black"
        fill-opacity="0.55"
        mask="url(#{uid}-spotlight)"
      />
      {#each spotlights as s, i (i)}
        <circle cx={s.x} cy={s.y} r={s.r} fill="none" stroke="white" stroke-width="3" />
      {/each}
    {/if}
  </svg>
  {#if snapshotUrl}
    <!-- Invisible, but it's what the pointer hits: gives the native image context menu -->
    <img src={snapshotUrl} alt="" class="absolute inset-0 w-full h-full object-contain opacity-0" />
  {/if}
</div>
