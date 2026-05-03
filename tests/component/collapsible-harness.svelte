<script lang="ts">
  import * as Collapsible from '../../src/lib/components/ui/collapsible';

  interface Props {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    triggerLabel?: string;
    contentText?: string;
  }

  let {
    open = $bindable(false),
    onOpenChange,
    triggerLabel = 'Toggle',
    contentText = 'Hidden content'
  }: Props = $props();
</script>

<Collapsible.Root bind:open {onOpenChange}>
  <Collapsible.Trigger>{triggerLabel}</Collapsible.Trigger>
  <Collapsible.Content>{contentText}</Collapsible.Content>
</Collapsible.Root>
