<script lang="ts">
  // @ts-nocheck
  import { getContext, onMount } from 'svelte';
  import { Modal } from '$lib/components/ui';
  import {
    Download,
    X,
    Eye,
    User,
    PictureInPicture,
    PictureInPicture2
  } from '@lucide/svelte/icons';
  import type { FightConfig } from '$lib/types';
  import { type PlayerJob } from '$lib/arena';
  import type { ResolvedPosterSection } from './types';
  import type { ToastLike } from '$lib/utils';
  import PosterGrid from './PosterGrid.svelte';
  import PosterCheatsheetOverlay from './PosterCheatsheetOverlay.svelte';

  const toast = getContext<ToastLike | undefined>('toast');

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
    /** Current strat-toggle state — used to evaluate section/element visibility predicates. */
    stratState?: Record<string, string | null | undefined>;
    /** Active strat key (e.g. 'naur') — used for stratKey predicates. */
    stratKey?: string;
    /** Bindable: external trigger to open the overlay PIP window. */
    overlayPopOut?: () => Promise<void>;
    /** Bindable: external trigger to close the overlay PIP window. */
    overlayPopIn?: () => void;
    /** Bindable: true while the poster is in the overlay PIP window. */
    overlayIsPopped?: boolean;
    /** Bindable: true if Document Picture-in-Picture is supported. */
    overlayIsSupported?: boolean;
  }

  let {
    config,
    posterOpenState = $bindable(false),
    selectedJob,
    selectedJobLabel,
    stratState,
    stratKey,
    overlayPopOut = $bindable<() => Promise<void>>(async () => {}),
    overlayPopIn = $bindable<() => void>(() => {}),
    overlayIsPopped = $bindable(false),
    overlayIsSupported = $bindable(false)
  }: Props = $props();

  let posterRef: HTMLDivElement | undefined = $state();
  let exporting = $state(false);
  let showExportMenu = $state(false);
  let mode: 'overview' | 'role' = $state('role');

  async function toggleOverlay() {
    if (overlayIsPopped) {
      overlayPopIn();
    } else {
      // Close the modal so the PIP window isn't competing with a fullscreen
      // modal — the whole point of the overlay is to free up the screen.
      posterOpenState = false;
      await overlayPopOut();
    }
  }
  // Role is the default view, but it requires a selected job; fall back to Overall
  // when none is chosen so the (disabled) Role button isn't shown active.
  $effect(() => {
    if (!selectedJob && mode === 'role') mode = 'overview';
  });

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
      highlight: s.arena.highlight,
      visibleWhen: s.visibleWhen
    }))
  );

  const formatConfig = {
    png: { mime: 'image/png', ext: 'png', quality: undefined },
    jpg: { mime: 'image/jpeg', ext: 'jpg', quality: 0.85 },
    webp: { mime: 'image/webp', ext: 'webp', quality: 0.85 }
  } as const;

  // The poster fonts load from Google Fonts (cross-origin). html-to-image can't
  // read their cssRules to embed them, so PNG exports fall back to a system font.
  // We fetch the @font-face CSS once and inline the woff2 files as data URIs, then
  // hand it to toPng via fontEmbedCSS (which also skips the failing cross-origin read).
  const FONT_CSS_URL =
    'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Roboto+Condensed:wght@400;700&display=swap';
  const FONT_URL_RE = /url\(\s*['"]?(https:\/\/[^)'"]+\.woff2?)['"]?\s*\)/g;
  let fontEmbedCssCache = null;

  function arrayBufferToBase64(buf) {
    const bytes = new Uint8Array(buf);
    let binary = '';
    const chunk = 0x8000;
    for (let i = 0; i < bytes.length; i += chunk) {
      binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
    }
    return btoa(binary);
  }

  async function getPosterFontEmbedCss() {
    if (fontEmbedCssCache !== null) return fontEmbedCssCache;
    const fullCss = await fetch(FONT_CSS_URL).then((r) => r.text());
    // Keep only latin subsets - poster text is latin, and inlining every script
    // (cyrillic, greek, devanagari, ...) would mean dozens of fetches.
    const blocks = fullCss.split(/(?=\/\*)/).filter((b) => /\/\*\s*latin(-ext)?\s*\*\//.test(b));
    const css = blocks.length ? blocks.join('') : fullCss;
    const urls = [...new Set([...css.matchAll(FONT_URL_RE)].map((m) => m[1]))];
    const dataUrls = new Map();
    await Promise.all(
      urls.map(async (u) => {
        const buf = await fetch(u).then((r) => r.arrayBuffer());
        dataUrls.set(u, `data:font/woff2;base64,${arrayBufferToBase64(buf)}`);
      })
    );
    fontEmbedCssCache = css.replace(FONT_URL_RE, (m, u) => `url(${dataUrls.get(u) ?? u})`);
    return fontEmbedCssCache;
  }

  async function exportPoster(format: 'png' | 'jpg' | 'webp') {
    showExportMenu = false;
    if (!posterRef || exporting) return;
    exporting = true;
    const exportFormat = format;
    try {
      const { toPng } = await import('html-to-image');
      const w = layout.width ?? 1920;
      const h = layout.height ?? 1080;
      // Make sure fonts are loaded, then inline them so the export isn't a fallback font.
      await document.fonts?.ready;
      let fontEmbedCSS;
      try {
        fontEmbedCSS = await getPosterFontEmbedCss();
      } catch {
        fontEmbedCSS = undefined; // fall back to html-to-image's default embedding
      }
      const dataUrl = await toPng(posterRef, {
        width: w,
        height: h,
        pixelRatio: 1,
        backgroundColor: layout.bgColor ?? '#1a1a2e',
        fontEmbedCSS
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
      const message = err instanceof Error ? err.message : 'Failed to export poster';
      toast?.create({ description: `Poster export failed: ${message}`, type: 'error' });
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
            class="btn btn-sm {mode === 'overview'
              ? 'preset-filled-primary-500'
              : 'preset-tonal-surface'}"
            onclick={() => (mode = 'overview')}
          >
            <Eye size={14} /> Overall
          </button>
          <button
            class="btn btn-sm {mode === 'role'
              ? 'preset-filled-primary-500'
              : 'preset-tonal-surface'}"
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
              class="btn btn-sm {resolution === r.value
                ? 'preset-filled-primary-500'
                : 'preset-tonal-surface'}"
              onclick={() => (resolution = r.value)}>{r.label}</button
            >
          {/each}
        </div>

        <!-- Overlay (PIP) -->
        {#if overlayIsSupported}
          <button
            class="btn btn-sm {overlayIsPopped
              ? 'preset-filled-primary-500 border border-primary-300 shadow-lg shadow-primary-500/40 ring-2 ring-primary-400/60'
              : 'preset-tonal-secondary'}"
            onclick={toggleOverlay}
            title={overlayIsPopped ? 'Close overlay window' : 'Open as overlay window'}
          >
            {#if overlayIsPopped}
              <PictureInPicture size={16} /> Restore
            {:else}
              <PictureInPicture2 size={16} /> Overlay
            {/if}
          </button>
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
            <div
              class="absolute right-0 top-full mt-1 bg-surface-800 rounded-lg z-10 overflow-hidden"
              style="box-shadow: 0 1px 2px rgba(0,0,0,0.2), 0 8px 24px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.06);"
            >
              <button
                class="block w-full text-left px-4 py-2 text-sm transition-colors hover:bg-surface-700"
                onclick={() => exportPoster('jpg')}>JPG (smallest)</button
              >
              <button
                class="block w-full text-left px-4 py-2 text-sm transition-colors hover:bg-surface-700"
                onclick={() => exportPoster('webp')}>WebP (small)</button
              >
              <button
                class="block w-full text-left px-4 py-2 text-sm transition-colors hover:bg-surface-700"
                onclick={() => exportPoster('png')}>PNG (lossless)</button
              >
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
      <!-- Sizer reserves an integer (ceil'd) footprint for the scaled poster. The
           transform lives on a separate inner element so fractional DPI rounding of
           the scaled content can't disagree with the wrapper's box and spawn 1px
           scrollbars on both axes. -->
      <div
        style:width={`${Math.ceil(baseW * posterScale)}px`}
        style:height={`${Math.ceil(baseH * posterScale)}px`}
      >
        <div class="origin-top-left" style:transform={`scale(${posterScale})`}>
          <PosterGrid
            {layout}
            sections={resolvedSections}
            bind:posterRef
            {highlightJob}
            {jobLabels}
            {stratState}
            {stratKey}
          />
        </div>
      </div>
    </div>
  {/snippet}
</Modal>

{#if showExportMenu}
  <button
    type="button"
    class="fixed inset-0 z-[5] cursor-default"
    aria-label="Close export menu"
    onclick={() => (showExportMenu = false)}
  ></button>
{/if}

<PosterCheatsheetOverlay
  {layout}
  sections={resolvedSections}
  {selectedJob}
  {selectedJobLabel}
  {jobLabels}
  {stratState}
  {stratKey}
  title={`${config.cheatsheetTitle} - Poster`}
  bind:popOut={overlayPopOut}
  bind:popIn={overlayPopIn}
  bind:isPopped={overlayIsPopped}
  bind:isSupported={overlayIsSupported}
/>
