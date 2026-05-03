<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { setCollapsibleContext } from './context';

  let {
    ref = $bindable(null),
    open = $bindable(false),
    onOpenChange,
    children,
    class: className,
    ...restProps
  }: HTMLAttributes<HTMLDivElement> & {
    ref?: HTMLDivElement | null;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children?: Snippet;
  } = $props();

  const id = $props.id();
  const contentId = `${id}-content`;

  setCollapsibleContext({
    open: () => open,
    setOpen: (value: boolean) => {
      open = value;
      onOpenChange?.(value);
    },
    contentId
  });
</script>

<div
  bind:this={ref}
  data-slot="collapsible"
  data-state={open ? 'open' : 'closed'}
  class={className}
  {...restProps}
>
  {@render children?.()}
</div>
