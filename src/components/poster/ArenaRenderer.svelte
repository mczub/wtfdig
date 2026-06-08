<script lang="ts">
  import {
    ROLE_COLORS,
    WAYMARK_COLORS,
    DEFAULT_JOB_LABELS,
    jobMatchesRole,
    evaluateVisibility,
    type ArenaDiagramData,
    type ArenaElement,
    type PlayerJob
  } from '$lib/arena';
  import { getDebuff } from '$lib/debuffs';

  interface Props {
    data: ArenaDiagramData;
    highlight?: string[];
    /** Grid cell width (default 4). ViewBox = gridW * 25 wide. */
    gridW?: number;
    /** Grid cell height (default 4). ViewBox = gridH * 25 tall. */
    gridH?: number;
    /** If set, highlights players of this job and dims others. */
    highlightJob?: PlayerJob;
    /** Per-job label overrides for player icon text, e.g. { R1: 'C' }. */
    jobLabels?: Partial<Record<PlayerJob, string>>;
    /** Current strat-toggle state for group `visibleWhen` predicates. */
    stratState?: Record<string, string | null | undefined>;
    /** Active strat key for group `visibleWhen` predicates. */
    stratKey?: string;
    /** Editor override: render every group regardless of its `visibleWhen`. */
    showAllGroups?: boolean;
  }

  let {
    data,
    highlight,
    gridW = 4,
    gridH = 4,
    highlightJob,
    jobLabels,
    stratState,
    stratKey,
    showAllGroups = false
  }: Props = $props();

  // Groups whose `visibleWhen` predicate currently fails — every element with
  // a matching `groupId` is filtered out of rendering.
  let hiddenGroups = $derived.by(() => {
    const out = new Set<string>();
    if (showAllGroups) return out;
    for (const g of data.groups ?? []) {
      if (
        !evaluateVisibility(g.visibleWhen, { selectedJob: highlightJob, stratState, stratKey })
      ) {
        out.add(g.id);
      }
    }
    return out;
  });

  function isRoleMatch(job: PlayerJob): boolean {
    if (!highlightJob) return true;
    return jobMatchesRole(job, highlightJob);
  }

  // 25 viewBox units per grid cell → constant pixel size regardless of section dimensions
  let vW = $derived(gridW * 25);
  let vH = $derived(gridH * 25);
  const pad = 3;
  let arenaW = $derived(vW - pad * 2);
  let arenaH = $derived(vH - pad * 2);
  let s = $derived(data.scale ?? 1);

  function isHighlighted(el: ArenaElement): boolean {
    if (!highlight || highlight.length === 0) return true;
    return el.id != null && highlight.includes(el.id);
  }

  function dimOpacity(el: ArenaElement): number {
    return isHighlighted(el) ? 1 : 0.2;
  }

  const zOrder: Record<string, number> = {
    arena: -1,
    aoe: 0,
    polygon: 0,
    tether: 1,
    arrow: 2,
    curvedArrow: 2,
    waymark: 3,
    boss: 4,
    player: 5,
    debuff: 6,
    text: 7
  };

  const CORNER_OFFSETS: Record<'tl' | 'tr' | 'bl' | 'br', { dx: number; dy: number }> = {
    tl: { dx: -5, dy: -5 },
    tr: { dx: 5, dy: -5 },
    bl: { dx: -5, dy: 5 },
    br: { dx: 5, dy: 5 }
  };

  let sortedElements = $derived(
    [...data.elements]
      .filter((el) => !(el.groupId && hiddenGroups.has(el.groupId)))
      .sort((a, b) => (zOrder[a.type] ?? 0) - (zOrder[b.type] ?? 0))
  );

  const uid = Math.random().toString(36).slice(2, 8);
</script>

<svg viewBox="0 0 {vW} {vH}" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
  <defs>
    <marker
      id="ah-{uid}"
      markerWidth="5"
      markerHeight="3.5"
      refX="4"
      refY="1.75"
      orient="auto-start-reverse"
    >
      <polygon points="0 0, 5 1.75, 0 3.5" fill="context-stroke" />
    </marker>
    <!-- Soft colored glow for waymarks so they read on busy/dark backgrounds. -->
    <filter id="wmGlow-{uid}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="0.3" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <!-- Arena -->
  {#if data.bgColor !== 'transparent'}
    {#if data.arena === 'square'}
      <rect
        x={pad}
        y={pad}
        width={arenaW}
        height={arenaH}
        rx="1"
        fill={data.bgColor ?? '#2a2420'}
        stroke="#4a4a4a"
        stroke-width="0.4"
      />
      <line x1={vW / 2} y1={pad} x2={vW / 2} y2={vH - pad} stroke="#3a3a3a" stroke-width="0.15" />
      <line x1={pad} y1={vH / 2} x2={vW - pad} y2={vH / 2} stroke="#3a3a3a" stroke-width="0.15" />
    {:else}
      <circle
        cx={vW / 2}
        cy={vH / 2}
        r={Math.min(arenaW, arenaH) / 2}
        fill={data.bgColor ?? '#2a2420'}
        stroke="#4a4a4a"
        stroke-width="0.4"
      />
      <line x1={vW / 2} y1={pad} x2={vW / 2} y2={vH - pad} stroke="#3a3a3a" stroke-width="0.15" />
      <line x1={pad} y1={vH / 2} x2={vW - pad} y2={vH / 2} stroke="#3a3a3a" stroke-width="0.15" />
    {/if}
  {/if}

  <g transform="scale({s})">
    {#each sortedElements as el, ei}
      {#if el.type === 'arena'}
        {@const bg = el.bgColor ?? '#2a2420'}
        {@const bd = el.borderColor ?? '#4a4a4a'}
        {@const showCh = el.showCrosshairs !== false}
        {@const patId = `arenaBg-${uid}-${ei}`}
        {@const imgW = el.shape === 'circle' ? el.w : el.w}
        {@const imgH = el.shape === 'circle' ? el.w : el.h}
        <g
          opacity={dimOpacity(el)}
          transform={el.rotation ? `rotate(${el.rotation} ${el.x} ${el.y})` : undefined}
        >
          {#if el.bgImage}
            <defs>
              <pattern
                id={patId}
                patternUnits="userSpaceOnUse"
                x={el.x - imgW / 2}
                y={el.y - imgH / 2}
                width={imgW}
                height={imgH}
              >
                <image
                  href={el.bgImage}
                  x="0"
                  y="0"
                  width={imgW}
                  height={imgH}
                  preserveAspectRatio="xMidYMid slice"
                />
              </pattern>
            </defs>
          {/if}
          {#if el.shape === 'circle'}
            {@const r = el.w / 2}
            <circle
              cx={el.x}
              cy={el.y}
              {r}
              fill={el.bgImage ? `url(#${patId})` : bg}
              stroke={bd}
              stroke-width="0.4"
            />
            {#if showCh && !el.bgImage}
              <line
                x1={el.x}
                y1={el.y - r}
                x2={el.x}
                y2={el.y + r}
                stroke="#3a3a3a"
                stroke-width="0.15"
              />
              <line
                x1={el.x - r}
                y1={el.y}
                x2={el.x + r}
                y2={el.y}
                stroke="#3a3a3a"
                stroke-width="0.15"
              />
            {/if}
          {:else}
            <rect
              x={el.x - el.w / 2}
              y={el.y - el.h / 2}
              width={el.w}
              height={el.h}
              rx="1"
              fill={el.bgImage ? `url(#${patId})` : bg}
              stroke={bd}
              stroke-width="0.4"
            />
            {#if showCh && !el.bgImage}
              <line
                x1={el.x}
                y1={el.y - el.h / 2}
                x2={el.x}
                y2={el.y + el.h / 2}
                stroke="#3a3a3a"
                stroke-width="0.15"
              />
              <line
                x1={el.x - el.w / 2}
                y1={el.y}
                x2={el.x + el.w / 2}
                y2={el.y}
                stroke="#3a3a3a"
                stroke-width="0.15"
              />
            {/if}
          {/if}
        </g>
      {:else if el.type === 'aoe' && el.shape === 'circle'}
        <ellipse
          cx={el.x}
          cy={el.y}
          rx={el.r}
          ry={el.ry ?? el.r}
          fill={el.color ?? '#f59e0b'}
          fill-opacity={(el.opacity ?? 0.3) * dimOpacity(el)}
          stroke={el.color ?? '#f59e0b'}
          stroke-width="0.2"
          stroke-opacity={dimOpacity(el) * 0.5}
          transform={el.rotation ? `rotate(${el.rotation} ${el.x} ${el.y})` : undefined}
        />
      {:else if el.type === 'aoe' && el.shape === 'rect'}
        <rect
          x={el.x - el.w / 2}
          y={el.y - el.h / 2}
          width={el.w}
          height={el.h}
          fill={el.color ?? '#f59e0b'}
          fill-opacity={(el.opacity ?? 0.3) * dimOpacity(el)}
          stroke={el.color ?? '#f59e0b'}
          stroke-width="0.2"
          stroke-opacity={dimOpacity(el) * 0.5}
          rx="0.3"
          transform={el.rotation ? `rotate(${el.rotation} ${el.x} ${el.y})` : undefined}
        />
      {:else if el.type === 'tether'}
        <line
          x1={el.x1}
          y1={el.y1}
          x2={el.x2}
          y2={el.y2}
          stroke={el.color ?? '#facc15'}
          stroke-width={el.width ?? 0.5}
          stroke-opacity={dimOpacity(el)}
          stroke-dasharray={el.dashed ? '1.5,1' : undefined}
        />
      {:else if el.type === 'arrow'}
        {@const heads = el.heads ?? 'end'}
        <line
          x1={el.x1}
          y1={el.y1}
          x2={el.x2}
          y2={el.y2}
          stroke={el.color ?? '#fff'}
          stroke-width={el.width ?? 0.5}
          stroke-opacity={dimOpacity(el)}
          marker-start={heads === 'start' || heads === 'both' ? `url(#ah-${uid})` : undefined}
          marker-end={heads === 'end' || heads === 'both' ? `url(#ah-${uid})` : undefined}
        />
      {:else if el.type === 'curvedArrow'}
        {@const mx = (el.x1 + el.x2) / 2}
        {@const my = (el.y1 + el.y2) / 2}
        {@const dx = el.x2 - el.x1}
        {@const dy = el.y2 - el.y1}
        {@const len = Math.max(Math.sqrt(dx * dx + dy * dy), 0.0001)}
        {@const nx = -dy / len}
        {@const ny = dx / len}
        {@const curv = el.curvature ?? 6}
        {@const cpx = mx + nx * curv}
        {@const cpy = my + ny * curv}
        {@const caHeads = el.heads ?? 'end'}
        <path
          d="M {el.x1} {el.y1} Q {cpx} {cpy} {el.x2} {el.y2}"
          fill="none"
          stroke={el.color ?? '#fff'}
          stroke-width={el.width ?? 0.5}
          stroke-opacity={dimOpacity(el)}
          marker-start={caHeads === 'start' || caHeads === 'both' ? `url(#ah-${uid})` : undefined}
          marker-end={caHeads === 'end' || caHeads === 'both' ? `url(#ah-${uid})` : undefined}
        />
      {:else if el.type === 'polygon'}
        {@const ptsStr = el.points.map((p) => `${p[0]},${p[1]}`).join(' ')}
        {@const cx = el.points.reduce((s, p) => s + p[0], 0) / el.points.length}
        {@const cy = el.points.reduce((s, p) => s + p[1], 0) / el.points.length}
        <polygon
          points={ptsStr}
          fill={el.outline ? 'none' : (el.color ?? '#f59e0b')}
          fill-opacity={(el.opacity ?? 0.3) * dimOpacity(el)}
          stroke={el.color ?? '#f59e0b'}
          stroke-width="0.2"
          stroke-opacity={dimOpacity(el) * 0.5}
          transform={el.rotation ? `rotate(${el.rotation} ${cx} ${cy})` : undefined}
        />
      {:else if el.type === 'waymark'}
        {@const isLetter = 'ABCD'.includes(el.mark)}
        {@const color = WAYMARK_COLORS[el.mark]}
        {@const wmSize = el.size ?? 4}
        {@const rectHalf = wmSize * 0.9}
        <g opacity={dimOpacity(el) * 0.9} filter="url(#wmGlow-{uid})">
          {#if isLetter}
            <circle
              cx={el.x}
              cy={el.y}
              r={wmSize}
              fill="none"
              stroke={color}
              stroke-width={wmSize * 0.12}
            />
          {:else}
            <rect
              x={el.x - rectHalf}
              y={el.y - rectHalf}
              width={rectHalf * 2}
              height={rectHalf * 2}
              fill="none"
              stroke={color}
              stroke-width={wmSize * 0.12}
              rx={wmSize * 0.075}
            />
          {/if}
          <text
            x={el.x}
            y={el.y}
            text-anchor="middle"
            dominant-baseline="central"
            fill={color}
            font-size={wmSize}
            font-weight="bold"
            font-family="'Noto Sans', sans-serif">{el.mark}</text
          >
        </g>
      {:else if el.type === 'boss'}
        <!-- Directional double-ring hitbox (xivplan-style): two concentric 270deg
             arcs open at the rear, plus a front-facing arrow. `size` = outer radius. -->
        {@const r = el.size ?? 12}
        {@const ir = r * 0.85}
        {@const outerStroke = Math.max(r / 32, 0.45)}
        {@const innerStroke = Math.max(r / 64, 0.3)}
        {@const d45 = r * Math.cos(Math.PI / 4)}
        {@const id45 = ir * Math.cos(Math.PI / 4)}
        {@const arrowScale = r / 32}
        <g
          opacity={dimOpacity(el)}
          transform={el.rotation ? `rotate(${el.rotation} ${el.x} ${el.y})` : undefined}
        >
          {#if el.ring === 'circle'}
            <!-- Full double ring, no directional indicator -->
            <circle
              cx={el.x}
              cy={el.y}
              r={r}
              fill="none"
              stroke="#dc2626"
              stroke-width={outerStroke}
            />
            <circle
              cx={el.x}
              cy={el.y}
              r={ir}
              fill="none"
              stroke="#dc2626"
              stroke-width={innerStroke}
            />
          {:else}
            <path
              d="M {el.x + d45} {el.y + d45}
               A {r} {r} 0 1 0 {el.x - d45} {el.y + d45}"
              fill="none"
              stroke="#dc2626"
              stroke-width={outerStroke}
            />
            <path
              d="M {el.x + id45} {el.y + id45}
               A {ir} {ir} 0 1 0 {el.x - id45} {el.y + id45}"
              fill="none"
              stroke="#dc2626"
              stroke-width={innerStroke}
            />
            <path
              d="M0-41c-2 2-4 7-4 10 4 0 4 0 8 0 0-3-2-8-4-10"
              fill="#dc2626"
              transform="translate({el.x} {el.y}) scale({arrowScale})"
            />
          {/if}
        </g>
      {:else if el.type === 'player'}
        {@const color = ROLE_COLORS[el.job]}
        {@const roleMatch = isRoleMatch(el.job)}
        {@const jobLabel = jobLabels?.[el.job] ?? DEFAULT_JOB_LABELS[el.job] ?? el.job}
        {@const labelLines = jobLabel.split('\n')}
        {@const longestLine = labelLines.reduce((m, l) => Math.max(m, l.length), 0)}
        {@const lineFontSize =
          (labelLines.length > 1 ? 4 : longestLine > 2 ? 4 : 5) * (el.size ?? 6) / 6}
        {@const pSize = el.size ?? 6}
        {@const pScale = pSize / 6}
        <g opacity={dimOpacity(el) * (highlightJob && !roleMatch ? 0.4 : 1)}>
          <rect
            x={el.x - pSize}
            y={el.y - pSize}
            width={pSize * 2}
            height={pSize * 2}
            rx={pSize * 0.5}
            ry={pSize * 0.5}
            fill={color}
            fill-opacity="1.0"
            stroke={highlightJob && roleMatch ? 'white' : 'white'}
            stroke-width={(highlightJob && roleMatch ? 0.8 : 0.25) * pScale}
          />
          <text
            x={el.x}
            y={el.y}
            text-anchor="middle"
            dominant-baseline="central"
            baseline-shift="2%"
            fill="white"
            font-size={lineFontSize}
            font-weight="bold"
            font-family="'Noto Sans', sans-serif"
          >
            {#each labelLines as line, li}
              <tspan
                x={el.x}
                dy={li === 0 ? (-lineFontSize * (labelLines.length - 1)) / 2 : lineFontSize}
                >{line}</tspan
              >
            {/each}
          </text>
          {#if el.marker}
            <polyline
              points="{el.x - 2.5 * pScale},{el.y - 13 * pScale} {el.x},{el.y -
                9 * pScale} {el.x + 2.5 * pScale},{el.y - 13 * pScale}"
              fill="none"
              stroke={el.marker === 'green' ? '#22c55e' : '#ef4444'}
              stroke-width={1.5 * pScale}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          {/if}
          {#if el.statusAbove}
            {@const sdef = getDebuff(el.statusAbove)}
            {#if sdef}
              {@const sSize = 7 * pScale}
              {@const sBottom = el.marker ? el.y - 13.5 * pScale : el.y - pSize - 1 * pScale}
              <image
                href={`/icons/status/${sdef.iconFile}`}
                x={el.x - sSize / 2}
                y={sBottom - sSize}
                width={sSize}
                height={sSize}
              >
                <title>{sdef.name}</title>
              </image>
            {/if}
          {/if}
          {#if el.corners}
            {#each Object.entries(el.corners) as [corner, debuffId]}
              {@const def = getDebuff(debuffId)}
              {@const off = CORNER_OFFSETS[corner as 'tl' | 'tr' | 'bl' | 'br']}
              {#if def}
                <image
                  href={`/icons/status/${def.iconFile}`}
                  x={el.x + off.dx * pScale - 2.5 * pScale}
                  y={el.y + off.dy * pScale - 2.5 * pScale}
                  width={5 * pScale}
                  height={5 * pScale}
                >
                  <title>{def.name}</title>
                </image>
              {/if}
            {/each}
          {/if}
        </g>
      {:else if el.type === 'debuff'}
        {@const def = getDebuff(el.debuffId)}
        {@const size = el.size ?? 6}
        {#if def}
          <g opacity={dimOpacity(el)}>
            <image
              href={`/icons/status/${def.iconFile}`}
              x={el.x - size / 2}
              y={el.y - size / 2}
              width={size}
              height={size}
            >
              <title>{def.name}</title>
            </image>
          </g>
        {/if}
      {:else if el.type === 'text'}
        {@const lines = el.text.split('\n')}
        {@const fs = el.fontSize ?? 3.5}
        {@const lh = fs * 1.2}
        <text
          x={el.x}
          y={el.y}
          text-anchor={el.anchor ?? 'middle'}
          fill={el.color ?? 'white'}
          font-size={fs}
          font-weight="normal"
          font-family="'Roboto Condensed', sans-serif"
          opacity={dimOpacity(el)}
        >
          {#each lines as line, i}
            <tspan
              x={el.x}
              dy={i === 0 ? (-lh * (lines.length - 1)) / 2 : lh}
              dominant-baseline="central">{line}</tspan
            >
          {/each}
        </text>
      {/if}
    {/each}
  </g>
</svg>
