<script lang="ts">
  // @ts-nocheck
  import { Tooltip } from 'bits-ui';
  import { cn } from '$lib/utils';
  import type { Snippet } from 'svelte';

  type Positioning = {
    placement?: string;
    side?: 'top' | 'bottom' | 'left' | 'right';
    align?: 'start' | 'center' | 'end';
    sideOffset?: number;
  };

  export let positioning: Positioning = {};
  export let triggerBase = '';
  export let contentBase = '';
  export let classes = '';
  export let openDelay: number | undefined;
  export let arrow = false;
  export let arrowBackground = '';
  type $$Slots = { trigger?: Snippet; content?: Snippet; default?: Snippet };

  const placement = positioning?.placement;
  const parseSide = (value?: string) =>
    value === 'top' || value === 'bottom' || value === 'left' || value === 'right'
      ? value
      : undefined;
  const parseAlign = (value?: string) =>
    value === 'start' || value === 'end' ? value : value === 'center' ? 'center' : undefined;
  const derivedSide = parseSide(positioning?.side ?? placement?.split('-')[0]) ?? 'top';
  const derivedAlign = parseAlign(positioning?.align ?? placement?.split('-')[1]) ?? 'center';
  const sideOffset = positioning?.sideOffset ?? 6;
</script>

<Tooltip.Root delayDuration={openDelay}>
  <Tooltip.Trigger class={cn(triggerBase)}>
    <slot name="trigger" />
  </Tooltip.Trigger>
  <Tooltip.Portal>
    <Tooltip.Content
      side={derivedSide}
      align={derivedAlign}
      {sideOffset}
      class={cn(
        'z-50 max-w-xs rounded-md border border-border bg-popover px-3 py-2 text-sm text-popover-foreground shadow-md',
        contentBase,
        classes
      )}
    >
      <slot name="content" />
      {#if arrow}
        <Tooltip.Arrow class={cn('fill-popover', arrowBackground)} />
      {/if}
    </Tooltip.Content>
  </Tooltip.Portal>
</Tooltip.Root>
