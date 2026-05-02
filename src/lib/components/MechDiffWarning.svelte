<script lang="ts">
  import * as Tooltip from '$lib/components/ui/tooltip';
  import { TriangleAlert } from '@lucide/svelte/icons';

  interface Props {
    size?: number;
    message?: string;
  }

  let { size = 16, message = 'Differs from guide' }: Props = $props();
</script>

<Tooltip.Provider>
  <Tooltip.Root delayDuration={200}>
    <Tooltip.Trigger class="cursor-help flex">
      <div class="text-warning-500">
        <TriangleAlert {size} />
      </div>
    </Tooltip.Trigger>
    <Tooltip.Content
      side="top"
      class="bg-surface-800 text-surface-100 p-2"
      arrowClasses="bg-surface-800"
    >
      {message}
    </Tooltip.Content>
  </Tooltip.Root>
</Tooltip.Provider>
