<script lang="ts">
  // @ts-nocheck
  import { Dialog } from 'bits-ui';
  import { cn } from '$lib/utils';
  import { createEventDispatcher } from 'svelte';
  import type { Snippet } from 'svelte';

  export let open = false;
  export let classes = '';
  export let contentBase = '';
  export let contentClasses = '';
  export let backdropClasses = '';
  export let zIndex: number | string = 50;
  export let onOpenChange: ((detail: { open: boolean }) => void) | undefined;
  export let onPointerDownOutside: ((event: PointerEvent) => void) | undefined;
  type $$Slots = { content?: Snippet; default?: Snippet };

  const dispatch = createEventDispatcher<{ openChange: { open: boolean } }>();

  function handleOpenChange(value: boolean) {
    onOpenChange?.({ open: value });
    dispatch('openChange', { open: value });
  }
</script>

<Dialog.Root {open} onOpenChange={handleOpenChange}>
  <Dialog.Portal>
    <Dialog.Overlay
      class={cn('fixed inset-0 bg-black/60 backdrop-blur-sm', classes, backdropClasses)}
      style={`z-index:${zIndex};`}
    />
    <Dialog.Content
      class={cn(
        'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[90vh] w-full max-w-4xl overflow-auto rounded-xl border border-border bg-card text-card-foreground shadow-xl focus:outline-none',
        contentBase,
        contentClasses
      )}
      style={`z-index:${typeof zIndex === 'number' ? Number(zIndex) + 1 : zIndex};`}
      onInteractOutside={onPointerDownOutside}
    >
      <slot name="content" />
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
