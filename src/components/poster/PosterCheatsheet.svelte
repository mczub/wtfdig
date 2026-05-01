<script lang="ts">
  // @ts-nocheck
  import { onMount } from 'svelte';
  import { Modal } from '$lib/components/ui';
  import { Download, X, Eye, User } from '@lucide/svelte/icons';
  import type { FightConfig } from '$lib/types';
  import { type PlayerJob } from '$lib/arena';
  import type { ResolvedPosterSection } from './types';
  import PosterGrid from './PosterGrid.svelte';

  type Resolution = 'auto' | '1080p' | '1440p' | '4k';
  const RESOLUTIONS: { value: Resolution; label: string }[] = [
    { value: 'auto', label: 'Auto' },
    { value: '1080p', label: '1080p' },
    { value: '1440p', label: '1440p' },
    { value: '4k', label: '4K' }
  ];

  interface Props {
    config: FightConfig;
    posterOpenState?: boolean;
    selectedJob?: PlayerJob;
    selectedJobLabel?: string;
  }

  let {
    config,
    posterOpenState = $bindable(false),
    selectedJob,
    selectedJobLabel
  }: Props = $props();

  let posterRef: HTMLDivElement | undefined = $state();
  let exporting = $state(false);
  let showExportMenu = $state(false);
  let mode: 'overview' | 'role' = $state('overview');
  let highlightJob = $derived<PlayerJob | undefined>(mode === 'role' ? selectedJob : undefined);

  // Map PlayerJob → display label from config.roleOptions.
  // Standard (role, party) → PlayerJob mapping: MT/OT/H1/H2/M1/M2/R1/R2
  const JOB_TO_ROLE_PARTY: Record<string, { role: string; party: number }> = {
    MT: { role: 'Tank', party: 1 },
    OT: { role: 'Tank', party: 2 },
    H1: { role: 'Healer', party: 1 },
    H2: { role: 'Healer', party: 2 },
    M1: { role: 'Melee', party: 1 },
    M2: { role: 'Melee', party: 2 },
    R1: { role: 'Ranged', party: 1 },
    R2: { role: 'Ranged', party: 2 }
  };
  let jobLabels = $derived.by(() => {
    if (!config.roleOptions?.length) return undefined;
    const labels: Partial<Record<PlayerJob, string>> = {};
    for (const [job, rp] of Object.entries(JOB_TO_ROLE_PARTY)) {
      const opt = config.roleOptions.find((o) => o.role === rp.role && o.party === rp.party);
      if (opt) labels[job as PlayerJob] = opt.abbrev ?? opt.label;
    }
    return labels;
  });

  let layout = $derived(config.posterLayout!);
  let baseW = $derived(layout.width ?? 1920);
  let baseH = $derived(layout.height ?? 1080);

  let resolution: Resolution = $state('auto');
  let viewportW = $state(1920);
  let viewportH = $state(1080);

  onMount(() => {
    const update = () => {
      viewportW = window.innerWidth;
      viewportH = window.innerHeight;
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  });

  // Modal chrome allowance: padding + header + gap + breathing room for browser UI
  const CHROME_W = 48;
  const CHROME_H = 140;

  let posterScale = $derived.by(() => {
    if (resolution === '1080p') return 1080 / baseH;
    if (resolution === '1440p') return 1440 / baseH;
    if (resolution === '4k') return 2160 / baseH;
    const availW = Math.max(1, viewportW - CHROME_W);
    const availH = Math.max(1, viewportH - CHROME_H);
    return Math.min(availW / baseW, availH / baseH);
  });

  // Map PosterSectionDefs directly to resolved sections
  let resolvedSections = $derived<ResolvedPosterSection[]>(
    layout.sections.map((s) => ({
      title: s.title,
      col: s.col,
      row: s.row,
      w: s.w,
      h: s.h,
      accentColor: s.accentColor ?? '#555',
      arena: s.arena,
      highlight: s.arena.highlight
    }))
  );

  const formatConfig = {
    png:  { mime: 'image/png',  ext: 'png',  quality: undefined },
    jpg:  { mime: 'image/jpeg', ext: 'jpg',  quality: 0.85 },
    webp: { mime: 'image/webp', ext: 'webp', quality: 0.85 },
  } as const;

  async function exportPoster(format: 'png' | 'jpg' | 'webp') {
    showExportMenu = false;
    if (!posterRef || exporting) return;
    exporting = true;
    const exportFormat = format;
    try {
      const { toPng } = await import('html-to-image');
      const w = layout.width ?? 1920;
      const h = layout.height ?? 1080;
      const dataUrl = await toPng(posterRef, {
        width: w,
        height: h,
        pixelRatio: 1,
        backgroundColor: layout.bgColor ?? '#1a1a2e'
      });
      const fmt = formatConfig[exportFormat];
      let downloadUrl = dataUrl;
      // For JPG/WebP, re-encode via canvas
      if (exportFormat !== 'png') {
        const img = new Image();
        img.src = dataUrl;
        await new Promise((resolve) => (img.onload = resolve));
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d')!;
        ctx.drawImage(img, 0, 0);
        downloadUrl = canvas.toDataURL(fmt.mime, fmt.quality);
      }
      const link = document.createElement('a');
      link.download = `${config.fightKey}-cheatsheet.${fmt.ext}`;
      link.href = downloadUrl;
      link.click();
    } catch (err) {
      console.error('Failed to export poster:', err);
    } finally {
      exporting = false;
    }
  }
</script>

<Modal
  open={posterOpenState}
  onOpenChange={(e) => (posterOpenState = e.open)}
  contentBase="card bg-surface-100-900 p-4 space-y-4 shadow-xl flex flex-col h-full w-full max-w-none max-h-none"
  backdropClasses="backdrop-blur-sm"
>
  {#snippet content()}
    <!-- Toolbar -->
    <header class="flex justify-between items-center shrink-0">
      <div class="text-lg font-bold">{config.cheatsheetTitle} - Poster</div>
      <div class="flex items-center gap-4">
        <!-- Mode toggle -->
        <div class="flex items-center gap-1">
          <button
            class="btn btn-sm {mode === 'overview' ? 'preset-filled-primary-500' : 'preset-tonal-surface'}"
            onclick={() => (mode = 'overview')}
          >
            <Eye size={14} /> Overall
          </button>
          <button
            class="btn btn-sm {mode === 'role' ? 'preset-filled-primary-500' : 'preset-tonal-surface'}"
            onclick={() => (mode = 'role')}
            disabled={!selectedJob}
          >
            <User size={14} /> Role{selectedJob ? ` (${selectedJobLabel ?? selectedJob})` : ''}
          </button>
        </div>

        <!-- Resolution picker -->
        <div class="flex items-center gap-1">
          {#each RESOLUTIONS as r}
            <button
              class="btn btn-sm {resolution === r.value ? 'preset-filled-primary-500' : 'preset-tonal-surface'}"
              onclick={() => (resolution = r.value)}
            >{r.label}</button>
          {/each}
        </div>

        <!-- Export -->
        <div class="relative">
          <button
            class="btn btn-sm preset-tonal-secondary"
            onclick={() => (showExportMenu = !showExportMenu)}
            disabled={exporting}
          >
            <Download size={16} />
            {exporting ? 'Exporting...' : 'Download'}
          </button>
          {#if showExportMenu}
            <div
              class="absolute right-0 top-full mt-1 bg-surface-800 rounded-lg z-10 overflow-hidden"
              style="box-shadow: 0 1px 2px rgba(0,0,0,0.2), 0 8px 24px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.06);"
            >
              <button class="block w-full text-left px-4 py-2 text-sm transition-colors hover:bg-surface-700" onclick={() => exportPoster('jpg')}>JPG (smallest)</button>
              <button class="block w-full text-left px-4 py-2 text-sm transition-colors hover:bg-surface-700" onclick={() => exportPoster('webp')}>WebP (small)</button>
              <button class="block w-full text-left px-4 py-2 text-sm transition-colors hover:bg-surface-700" onclick={() => exportPoster('png')}>PNG (lossless)</button>
            </div>
          {/if}
        </div>

        <button
          type="button"
          onclick={() => (posterOpenState = false)}
          aria-label="Close poster"
          class="-m-2 p-2 inline-flex items-center justify-center rounded-md cursor-pointer hover:bg-surface-700/40 transition-[colors,scale] active:scale-[0.96]"
        >
          <X size={20} />
        </button>
      </div>
    </header>

    <!-- Poster (scrollable container) -->
    <div class="flex-1 overflow-auto flex justify-center">
      <div
        class="origin-top-left"
        style:transform={`scale(${posterScale})`}
        style:width={`${baseW * posterScale}px`}
        style:height={`${baseH * posterScale}px`}
      >
        <PosterGrid {layout} sections={resolvedSections} bind:posterRef {highlightJob} {jobLabels} storagePrefix={config.fightKey} />
      </div>
    </div>
  {/snippet}
</Modal>

{#if showExportMenu}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="fixed inset-0 z-[5]" onclick={() => (showExportMenu = false)}></div>
{/if}
