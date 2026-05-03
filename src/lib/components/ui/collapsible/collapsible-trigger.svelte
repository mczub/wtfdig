<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { getCollapsibleContext } from './context';

  let {
    ref = $bindable(null),
    children,
    child,
    onclick,
    class: className,
    ...restProps
  }: HTMLButtonAttributes & {
    ref?: HTMLButtonElement | null;
    children?: Snippet;
    /**
     * Render-as-child escape hatch: receives the trigger props that would
     * otherwise be applied to a `<button>` so a custom element (e.g.
     * `<Sidebar.MenuButton>`) can take over the trigger role.
     */
    child?: Snippet<[{ props: Record<string, unknown> }]>;
  } = $props();

  const ctx = getCollapsibleContext();

  const triggerProps = $derived({
    type: 'button' as const,
    'data-slot': 'collapsible-trigger',
    'data-state': ctx.open() ? 'open' : 'closed',
    'aria-expanded': ctx.open(),
    'aria-controls': ctx.contentId,
    class: className,
    onclick: (event: MouseEvent) => {
      ctx.setOpen(!ctx.open());
      onclick?.(event as never);
    },
    ...restProps
  });
</script>

{#if child}
  {@render child({ props: triggerProps })}
{:else}
  <button bind:this={ref} {...triggerProps}>
    {@render children?.()}
  </button>
{/if}
