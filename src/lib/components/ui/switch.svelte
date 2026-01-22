<script lang="ts">
  import { Switch } from 'bits-ui';
  import { cn } from '$lib/utils';
  import { createEventDispatcher } from 'svelte';

  export let checked = false;
  export let name: string | undefined;
  export let classes = '';
  export let onCheckedChange: ((detail: { checked: boolean }) => void) | undefined;

  const dispatch = createEventDispatcher<{ checkedChange: { checked: boolean } }>();

  function handleChange(value: boolean) {
    onCheckedChange?.({ checked: value });
    dispatch('checkedChange', { checked: value });
  }
</script>

<label class="inline-flex items-center gap-2 cursor-pointer select-none">
  <Switch.Root
    {checked}
    onCheckedChange={handleChange}
    {name}
    class={cn(
      'data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 shadow-xs peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent outline-none transition-all focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
      classes
    )}
  >
    <Switch.Thumb
      class="bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
    />
  </Switch.Root>
  <slot />
</label>
