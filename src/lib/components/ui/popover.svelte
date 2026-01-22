<script lang="ts">
  // @ts-nocheck
  import { Popover } from 'bits-ui';
  import { cn } from '$lib/utils';
  import { createEventDispatcher } from 'svelte';
  import type { Snippet } from 'svelte';

  type Positioning = {
    placement?: string;
    side?: 'top' | 'bottom' | 'left' | 'right';
    align?: 'start' | 'center' | 'end';
    sideOffset?: number;
  };

  export let open = false;
  export let triggerBase = '';
  export let contentBase = '';
  export let contentClasses = '';
  export let classes = '';
  export let zIndex: number | string = 50;
  export let positioning: Positioning = {};
  export let onOpenChange: ((detail: { open: boolean }) => void) | undefined;
  type $$Slots = { trigger?: Snippet; content?: Snippet; default?: Snippet };

  const dispatch = createEventDispatcher<{ openChange: { open: boolean } }>();

  const placement = positioning?.placement;
  const parseSide = (value?: string) =>
    value === 'top' || value === 'bottom' || value === 'left' || value === 'right'
      ? value
      : undefined;
  const parseAlign = (value?: string) =>
    value === 'start' || value === 'end' ? value : value === 'center' ? 'center' : undefined;

  const derivedSide = parseSide(positioning?.side ?? placement?.split('-')[0]) ?? 'bottom';
  const derivedAlign = parseAlign(positioning?.align ?? placement?.split('-')[1]) ?? 'center';
  const sideOffset = positioning?.sideOffset ?? 8;

  function handleOpenChange(value: boolean) {
    onOpenChange?.({ open: value });
    dispatch('openChange', { open: value });
  }
</script>

<Popover.Root {open} onOpenChange={handleOpenChange}>
  <Popover.Trigger class={cn(triggerBase)}>
    <slot name="trigger" />
  </Popover.Trigger>
  <Popover.Portal>
    <Popover.Content
      side={derivedSide}
      align={derivedAlign}
      {sideOffset}
      class={cn(
        'z-50 rounded-sm border border-border bg-popover p-4 text-popover-foreground shadow-md outline-none',
        contentBase,
        contentClasses,
        classes
      )}
      style={`z-index:${zIndex};`}
    >
      <slot name="content" />
    </Popover.Content>
  </Popover.Portal>
</Popover.Root>
