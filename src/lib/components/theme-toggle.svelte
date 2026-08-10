<script lang="ts">
  import { DropdownMenu } from 'bits-ui';
  import Check from '@lucide/svelte/icons/check';
  import Monitor from '@lucide/svelte/icons/monitor';
  import Moon from '@lucide/svelte/icons/moon';
  import Sun from '@lucide/svelte/icons/sun';
  import { theme, type ThemeMode } from '$lib/theme.svelte';

  const options: { value: ThemeMode; label: string; icon: typeof Monitor }[] = [
    { value: 'system', label: 'System', icon: Monitor },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'light', label: 'Light', icon: Sun }
  ];
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger class="btn-icon btn-icon-sm cursor-pointer" aria-label="Change theme">
    <!--
      Explicit branches (not a dynamic component): the prerendered HTML always
      contains the "system" icon, and an if-block mismatch is recreated cleanly
      on hydration while a swapped dynamic component patches the old SVG in place.
    -->
    {#if theme.mode === 'light'}
      <Sun size={16} />
    {:else if theme.mode === 'dark'}
      <Moon size={16} />
    {:else}
      <Monitor size={16} />
    {/if}
  </DropdownMenu.Trigger>
  <DropdownMenu.Portal>
    <DropdownMenu.Content
      side="bottom"
      align="end"
      sideOffset={8}
      class="z-50 min-w-[8rem] rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md outline-none"
    >
      {#each options as option (option.value)}
        <DropdownMenu.Item
          class="flex w-full cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none data-highlighted:bg-muted"
          onSelect={() => theme.setMode(option.value)}
        >
          <option.icon size={16} />
          <span>{option.label}</span>
          {#if theme.mode === option.value}
            <Check size={16} class="ml-auto" />
          {/if}
        </DropdownMenu.Item>
      {/each}
    </DropdownMenu.Content>
  </DropdownMenu.Portal>
</DropdownMenu.Root>
