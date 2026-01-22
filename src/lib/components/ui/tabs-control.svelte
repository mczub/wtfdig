<script lang="ts">
  import { Tabs } from 'bits-ui';
  import { cn } from '$lib/utils';

  export let value: string;
  export let classes = '';
  export let labelBase = '';
</script>

<Tabs.Trigger
  {value}
  class={cn(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=inactive]:text-foreground hover:data-[state=inactive]:bg-muted/60',
    labelBase,
    classes
  )}
>
  <slot />
</Tabs.Trigger>
