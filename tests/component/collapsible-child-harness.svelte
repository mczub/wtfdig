<script lang="ts">
  import * as Collapsible from '../../src/lib/components/ui/collapsible';
</script>

<!--
  Exercises the `child` snippet escape hatch on Collapsible.Trigger that the
  sidebar uses to render a custom element instead of the default `<button>`.
-->
<Collapsible.Root>
  <Collapsible.Trigger>
    {#snippet child({ props })}
      <a href="#test" data-testid="custom-trigger" {...props}>Custom</a>
    {/snippet}
  </Collapsible.Trigger>
  <Collapsible.Content>Body</Collapsible.Content>
</Collapsible.Root>
