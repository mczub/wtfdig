<script lang="ts">
  import {
    ROLE_COLORS,
    WAYMARK_COLORS,
    jobMatchesRole,
    type ArenaDiagramData,
    type ArenaElement,
    type PlayerJob
  } from '$lib/arena';

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
  }

  let { data, highlight, gridW = 4, gridH = 4, highlightJob, jobLabels }: Props = $props();

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
    arena: -1, aoe: 0, tether: 1, arrow: 2, waymark: 3, boss: 4, player: 5, text: 6
  };

  let sortedElements = $derived(
    [...data.elements].sort((a, b) => (zOrder[a.type] ?? 0) - (zOrder[b.type] ?? 0))
  );

  const uid = Math.random().toString(36).slice(2, 8);
</script>

<svg viewBox="0 0 {vW} {vH}" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
  <defs>
    <marker id="ah-{uid}" markerWidth="5" markerHeight="3.5" refX="4" refY="1.75" orient="auto">
      <polygon points="0 0, 5 1.75, 0 3.5" fill="white" />
    </marker>
  </defs>

  <!-- Arena -->
  {#if data.bgColor !== 'transparent'}
    {#if data.arena === 'square'}
      <rect x={pad} y={pad} width={arenaW} height={arenaH} rx="1"
        fill={data.bgColor ?? '#2a2420'} stroke="#4a4a4a" stroke-width="0.4" />
      <line x1={vW/2} y1={pad} x2={vW/2} y2={vH-pad} stroke="#3a3a3a" stroke-width="0.15" />
      <line x1={pad} y1={vH/2} x2={vW-pad} y2={vH/2} stroke="#3a3a3a" stroke-width="0.15" />
    {:else}
      <circle cx={vW/2} cy={vH/2} r={Math.min(arenaW, arenaH)/2}
        fill={data.bgColor ?? '#2a2420'} stroke="#4a4a4a" stroke-width="0.4" />
      <line x1={vW/2} y1={pad} x2={vW/2} y2={vH-pad} stroke="#3a3a3a" stroke-width="0.15" />
      <line x1={pad} y1={vH/2} x2={vW-pad} y2={vH/2} stroke="#3a3a3a" stroke-width="0.15" />
    {/if}
  {/if}

  <g transform="scale({s})">
  {#each sortedElements as el}
    {#if el.type === 'arena'}
      {@const bg = el.bgColor ?? '#2a2420'}
      {@const bd = el.borderColor ?? '#4a4a4a'}
      {@const showCh = el.showCrosshairs !== false}
      <g opacity={dimOpacity(el)} transform={el.rotation ? `rotate(${el.rotation} ${el.x} ${el.y})` : undefined}>
        {#if el.shape === 'circle'}
          {@const r = el.w / 2}
          <circle cx={el.x} cy={el.y} r={r} fill={bg} stroke={bd} stroke-width="0.4" />
          {#if showCh}
            <line x1={el.x} y1={el.y - r} x2={el.x} y2={el.y + r} stroke="#3a3a3a" stroke-width="0.15" />
            <line x1={el.x - r} y1={el.y} x2={el.x + r} y2={el.y} stroke="#3a3a3a" stroke-width="0.15" />
          {/if}
        {:else}
          <rect x={el.x - el.w/2} y={el.y - el.h/2} width={el.w} height={el.h} rx="1"
            fill={bg} stroke={bd} stroke-width="0.4" />
          {#if showCh}
            <line x1={el.x} y1={el.y - el.h/2} x2={el.x} y2={el.y + el.h/2} stroke="#3a3a3a" stroke-width="0.15" />
            <line x1={el.x - el.w/2} y1={el.y} x2={el.x + el.w/2} y2={el.y} stroke="#3a3a3a" stroke-width="0.15" />
          {/if}
        {/if}
      </g>

    {:else if el.type === 'aoe' && el.shape === 'circle'}
      <circle cx={el.x} cy={el.y} r={el.r}
        fill={el.color ?? '#f59e0b'} fill-opacity={(el.opacity ?? 0.3) * dimOpacity(el)}
        stroke={el.color ?? '#f59e0b'} stroke-width="0.2" stroke-opacity={dimOpacity(el) * 0.5} />

    {:else if el.type === 'aoe' && el.shape === 'rect'}
      <rect x={el.x - el.w/2} y={el.y - el.h/2} width={el.w} height={el.h}
        fill={el.color ?? '#f59e0b'} fill-opacity={(el.opacity ?? 0.3) * dimOpacity(el)}
        stroke={el.color ?? '#f59e0b'} stroke-width="0.2" stroke-opacity={dimOpacity(el) * 0.5}
        rx="0.3"
        transform={el.rotation ? `rotate(${el.rotation} ${el.x} ${el.y})` : undefined} />

    {:else if el.type === 'tether'}
      <line x1={el.x1} y1={el.y1} x2={el.x2} y2={el.y2}
        stroke={el.color ?? '#facc15'} stroke-width={el.width ?? 0.5}
        stroke-opacity={dimOpacity(el)}
        stroke-dasharray={el.dashed ? '1.5,1' : undefined} />

    {:else if el.type === 'arrow'}
      <line x1={el.x1} y1={el.y1} x2={el.x2} y2={el.y2}
        stroke={el.color ?? '#fff'} stroke-width={el.width ?? 0.5}
        stroke-opacity={dimOpacity(el)} marker-end="url(#ah-{uid})" />

    {:else if el.type === 'waymark'}
      {@const isLetter = 'ABCD'.includes(el.mark)}
      {@const color = WAYMARK_COLORS[el.mark]}
      <g opacity={dimOpacity(el) * 0.6}>
        {#if isLetter}
          <circle cx={el.x} cy={el.y} r="4" fill="none" stroke={color} stroke-width="0.35" />
        {:else}
          <rect x={el.x-3.6} y={el.y-3.6} width="7.2" height="7.2"
            fill="none" stroke={color} stroke-width="0.35" rx="0.3" />
        {/if}
        <text x={el.x} y={el.y} text-anchor="middle" dominant-baseline="central"
          fill={color} font-size="4" font-weight="bold" font-family="'Noto Sans', sans-serif"
        >{el.mark}</text>
      </g>

    {:else if el.type === 'boss'}
      {@const r = 12}
      {@const cos45 = r * Math.cos(Math.PI / 4)}
      {@const sin45 = r * Math.sin(Math.PI / 4)}
      <g opacity={dimOpacity(el)} transform={el.rotation ? `rotate(${el.rotation} ${el.x} ${el.y})` : undefined}>
        <!-- Target ring: 270deg arc with open rear quarter -->
        <path
          d="M {el.x + cos45} {el.y + sin45}
             A {r} {r} 0 1 0 {el.x - cos45} {el.y + sin45}"
          fill="none" stroke="#dc2626" stroke-width="0.6"
        />
        <!-- Flank lines at 3 and 9 o'clock -->
        <line x1={el.x + r - 0.6} y1={el.y} x2={el.x + r + 0.6} y2={el.y} stroke="#dc2626" stroke-width="0.6" />
        <line x1={el.x - r - 0.6} y1={el.y} x2={el.x - r + 0.6} y2={el.y} stroke="#dc2626" stroke-width="0.6" />
        <!-- Front arrow at 12 o'clock -->
        <polygon points="{el.x},{el.y - r - 3} {el.x - 2},{el.y - r} {el.x + 2},{el.y - r}" fill="#dc2626" />
      </g>

    {:else if el.type === 'player'}
      {@const color = ROLE_COLORS[el.job]}
      {@const roleMatch = isRoleMatch(el.job)}
      {@const jobLabel = jobLabels?.[el.job] ?? el.job}
      <g opacity={dimOpacity(el) * (highlightJob && !roleMatch ? 0.4 : 1)}>
        <circle cx={el.x} cy={el.y} r="6" fill={color} fill-opacity="0.9"
          stroke={highlightJob && roleMatch ? 'white' : 'white'}
          stroke-width={highlightJob && roleMatch ? 0.8 : 0.25} />
        <text x={el.x} y={el.y} text-anchor="middle" dominant-baseline="central" baseline-shift="2%"
          fill="white" font-size={jobLabel.length > 2 ? 3.5 : 5} font-weight="bold" font-family="'Noto Sans', sans-serif"
        >{jobLabel}</text>
        {#if el.marker}
          <polyline
            points="{el.x - 2.5},{el.y - 13} {el.x},{el.y - 9} {el.x + 2.5},{el.y - 13}"
            fill="none" stroke={el.marker === 'green' ? '#22c55e' : '#ef4444'}
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
          />
        {/if}
      </g>

    {:else if el.type === 'text'}
      {@const lines = el.text.split('\n')}
      {@const fs = el.fontSize ?? 3.5}
      {@const lh = fs * 1.2}
      <text x={el.x} y={el.y} text-anchor={el.anchor ?? 'middle'}
        fill={el.color ?? 'white'} font-size={fs}
        font-weight="normal" font-family="'Roboto Condensed', sans-serif" opacity={dimOpacity(el)}
      >
        {#each lines as line, i}
          <tspan x={el.x} dy={i === 0 ? -lh * (lines.length - 1) / 2 : lh} dominant-baseline="central">{line}</tspan>
        {/each}
      </text>
    {/if}
  {/each}

  {#if data.title}
    <text x={vW/2} y={pad + 2} text-anchor="middle" dominant-baseline="central"
      fill="#facc15" font-size="3" font-weight="bold" font-family="'Roboto Condensed', sans-serif"
    >{data.title}</text>
  {/if}
  </g>
</svg>
