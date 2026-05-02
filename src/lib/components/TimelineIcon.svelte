<script lang="ts">
  import {
    ArrowRight,
    Clock,
    Play,
    Shield,
    Siren,
    Skull,
    Wrench
  } from '@lucide/svelte/icons';

  interface Props {
    mechType: string;
    /**
     * `sm` (default) — compact 16px square, used in the cheatsheet timeline.
     * `md` — 20px circle with a subtle shadow, used in the strat view timeline.
     */
    variant?: 'sm' | 'md';
  }

  let { mechType, variant = 'sm' }: Props = $props();

  const meta: Record<string, { bg: string; Icon: typeof Play }> = {
    Start: { bg: 'bg-green-700', Icon: Play },
    Phase: { bg: '', Icon: ArrowRight },
    Raidwide: { bg: 'bg-purple-800', Icon: Siren },
    Mechanic: { bg: 'bg-amber-700', Icon: Wrench },
    Tankbuster: { bg: 'bg-blue-700', Icon: Shield },
    StoredMechanic: { bg: 'bg-amber-600', Icon: Clock },
    Enrage: { bg: 'bg-pink-800', Icon: Skull }
  };

  let entry = $derived(meta[mechType]);
  let containerCls = $derived(
    variant === 'md'
      ? 'rounded-full h-5 w-5 text-white shadow-sm'
      : 'rounded-xs h-4 w-4'
  );
  let iconSize = $derived(variant === 'md' ? 12 : 10);
</script>

{#if entry}
  <div class="grid place-content-center {entry.bg} {containerCls}">
    <entry.Icon size={iconSize} strokeWidth={2} />
  </div>
{/if}
