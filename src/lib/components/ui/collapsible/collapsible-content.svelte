<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { getCollapsibleContext } from './context';

  let {
    ref = $bindable(null),
    children,
    forceMount = false,
    class: className,
    ...restProps
  }: HTMLAttributes<HTMLDivElement> & {
    ref?: HTMLDivElement | null;
    children?: Snippet;
    forceMount?: boolean;
  } = $props();

  const ctx = getCollapsibleContext();
</script>

{#if forceMount || ctx.open()}
  <div
    bind:this={ref}
    id={ctx.contentId}
    data-slot="collapsible-content"
    data-state={ctx.open() ? 'open' : 'closed'}
    class={className}
    {...restProps}
  >
    {@render children?.()}
  </div>
{/if}
