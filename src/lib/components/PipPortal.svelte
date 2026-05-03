<script lang="ts" module>
  export type PipApi = {
    isPopped: boolean;
    isSupported: boolean;
    popOut: () => Promise<void>;
    popIn: () => void;
  };
</script>

<script lang="ts">
  import { onDestroy, type Snippet } from 'svelte';
  import { on } from 'svelte/events';

  type Props = {
    width?: number;
    height?: number;
    title?: string;
    /**
     * Root font-size (px) applied to the PIP document's <html>. Lower values
     * shrink all rem-based sizing inside the PIP window proportionally.
     */
    rootFontSize?: number;
    /**
     * Content rendered in the host. Its DOM nodes are physically moved into
     * the PIP window when popped, so the same component instances and state
     * survive the move.
     */
    children: Snippet<[PipApi]>;
    /** Optional UI shown inline (in place of children's host) while popped. */
    placeholder?: Snippet<[PipApi]>;
    onpopout?: () => void;
    onpopin?: () => void;
  };

  let {
    width = 360,
    height = 640,
    title,
    rootFontSize = 15,
    children,
    placeholder,
    onpopout,
    onpopin
  }: Props = $props();

  let hostEl: HTMLDivElement = $state(null!);
  let contentEl: HTMLDivElement = $state(null!);
  let pipWindow = $state<Window | null>(null);

  const isSupported =
    typeof window !== 'undefined' && 'documentPictureInPicture' in window;

  // Svelte 5 stores delegated event handlers under a private symbol on each
  // element and dispatches them via a single listener on the root document.
  // When DOM is moved into a PIP window's document, those events fire there
  // but no dispatcher is listening — so onclick/bind handlers never run.
  // Calling `on` from svelte/events installs Svelte's real dispatcher.
  const DELEGATED_EVENTS = ['click', 'change', 'input'];

  function installDelegation(doc: Document): () => void {
    const offs = DELEGATED_EVENTS.map((name) => on(doc as any, name, () => {}));
    return () => offs.forEach((off) => off());
  }

  async function popOut() {
    if (pipWindow || !isSupported) return;
    const dpipApi = (window as any).documentPictureInPicture;

    const pip: Window = await dpipApi.requestWindow({ width, height });

    pip.document.documentElement.className = document.documentElement.className;
    pip.document.body.className = document.body.className;
    if (title) pip.document.title = title;
    pip.document.documentElement.style.fontSize = `${rootFontSize}px`;

    for (const sheet of Array.from(document.styleSheets)) {
      try {
        const cssText = Array.from(sheet.cssRules)
          .map((r) => r.cssText)
          .join('');
        const style = pip.document.createElement('style');
        style.textContent = cssText;
        pip.document.head.appendChild(style);
      } catch {
        if (!sheet.href) continue;
        const link = pip.document.createElement('link');
        link.rel = 'stylesheet';
        link.href = sheet.href;
        if (sheet.media) link.media = (sheet.media as MediaList).mediaText;
        pip.document.head.appendChild(link);
      }
    }

    const teardown = installDelegation(pip.document);
    pip.document.body.appendChild(contentEl);

    pip.addEventListener('pagehide', () => {
      teardown();
      if (contentEl && hostEl) hostEl.appendChild(contentEl);
      pipWindow = null;
      onpopin?.();
    });

    pipWindow = pip;
    onpopout?.();
  }

  function popIn() {
    pipWindow?.close();
  }

  const api = $derived<PipApi>({
    isPopped: pipWindow !== null,
    isSupported,
    popOut,
    popIn
  });

  onDestroy(() => {
    pipWindow?.close();
  });
</script>

<div bind:this={hostEl}>
  {#if api.isPopped && placeholder}
    {@render placeholder(api)}
  {/if}
  <div bind:this={contentEl}>
    {@render children(api)}
  </div>
</div>
