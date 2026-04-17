<script lang="ts">
  // @ts-nocheck
  import { Modal } from '$lib/components/ui';
  import { Download, X, Eye, User } from '@lucide/svelte/icons';
  import type { FightConfig } from '$lib/types';
  import { ROLE_COLORS, type PlayerJob } from '$lib/arena';
  import type { ResolvedPosterSection } from './types';
  import PosterGrid from './PosterGrid.svelte';

  interface Props {
    config: FightConfig;
    posterOpenState?: boolean;
  }

  let {
    config,
    posterOpenState = $bindable(false)
  }: Props = $props();

  let posterRef: HTMLDivElement | undefined = $state();
  let exporting = $state(false);
  let showExportMenu = $state(false);
  let mode: 'overview' | 'role' = $state('overview');
  let selectedJob: PlayerJob = $state('MT');
  let highlightJob = $derived<PlayerJob | undefined>(mode === 'role' ? selectedJob : undefined);
  const jobs: PlayerJob[] = ['MT', 'OT', 'H1', 'H2', 'M1', 'M2', 'R1', 'R2'];

  let layout = $derived(config.posterLayout!);

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
      <div class="text-lg font-bold">{config.cheatsheetTitle} — Poster</div>
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
          >
            <User size={14} /> Role
          </button>
        </div>

        <!-- Role selector (visible when role mode active) -->
        {#if mode === 'role'}
          <div class="flex items-center gap-1">
            {#each jobs as job}
              <button
                class="btn btn-sm text-xs px-2 font-bold {selectedJob === job ? 'border-2' : 'preset-tonal-surface'}"
                style:background-color={selectedJob === job ? ROLE_COLORS[job] + '44' : undefined}
                style:border-color={selectedJob === job ? ROLE_COLORS[job] : undefined}
                style:color={ROLE_COLORS[job]}
                onclick={() => (selectedJob = job)}
              >{job}</button>
            {/each}
          </div>
        {/if}

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
            <div class="absolute right-0 top-full mt-1 bg-surface-800 border border-surface-600 rounded shadow-lg z-10 overflow-hidden">
              <button class="block w-full text-left px-4 py-2 text-sm hover:bg-surface-700" onclick={() => exportPoster('jpg')}>JPG (smallest)</button>
              <button class="block w-full text-left px-4 py-2 text-sm hover:bg-surface-700" onclick={() => exportPoster('webp')}>WebP (small)</button>
              <button class="block w-full text-left px-4 py-2 text-sm hover:bg-surface-700" onclick={() => exportPoster('png')}>PNG (lossless)</button>
            </div>
          {/if}
        </div>

        <button onclick={() => (posterOpenState = false)} class="cursor-pointer">
          <X size={20} />
        </button>
      </div>
    </header>

    <!-- Poster (scrollable container) -->
    <div class="flex-1 overflow-auto flex justify-center">
      <div class="origin-top-left" style:transform="scale(var(--poster-scale, 1))">
        <PosterGrid {layout} sections={resolvedSections} bind:posterRef {highlightJob} />
      </div>
    </div>
  {/snippet}
</Modal>

{#if showExportMenu}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="fixed inset-0 z-[5]" onclick={() => (showExportMenu = false)}></div>
{/if}
