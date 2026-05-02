<!-- @ts-nocheck -->
<script lang="ts">
  // @ts-nocheck — the monolithic `Tooltip` component is on Svelte 4 slot syntax
  // and doesn't type its `trigger`/`content` snippet props; consumers use the
  // same pattern with @ts-nocheck.
  import { Tooltip } from '$lib/components/ui';
  import { TriangleAlert } from '@lucide/svelte/icons';

  interface Props {
    size?: number;
    message?: string;
  }

  let { size = 16, message = 'Differs from guide' }: Props = $props();
</script>

<Tooltip
  positioning={{ placement: 'top' }}
  triggerBase="cursor-help flex"
  contentBase="card bg-surface-800 p-2 text-xs"
  openDelay={200}
  arrow
  arrowBackground="!bg-surface-800"
>
  {#snippet trigger()}<div class="text-warning-500"><TriangleAlert {size} /></div>{/snippet}
  {#snippet content()}{message}{/snippet}
</Tooltip>
