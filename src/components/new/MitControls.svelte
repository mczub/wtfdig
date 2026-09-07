<script lang="ts">
  import { ExternalLink } from '@lucide/svelte';
  import * as Select from '$lib/components/ui/select';
  import type { MitPlan } from '$lib/types';

  interface Props {
    plans: MitPlan[];
    plan?: MitPlan;
    onSelectPlan: (planName: string) => void;
  }

  let { plans, plan, onSelectPlan }: Props = $props();
</script>

<!-- Plan selector for the mitigation panel; state lives in the fight page. -->
<div class="flex items-center gap-1">
  <span class="text-sm font-semibold text-surface-600-400 uppercase tracking-wider">Plan</span>
  <Select.Root type="single" value={plan?.planName ?? ''} onValueChange={onSelectPlan}>
    <Select.Trigger size="sm" class="!py-0.5 !px-2 !min-w-0">
      <span class="text-sm">{plan?.label ?? 'Select'}</span>
    </Select.Trigger>
    <Select.Content>
      {#each plans as p (p.planName)}
        <Select.Item value={p.planName}><span class="text-sm">{p.label}</span></Select.Item>
      {/each}
    </Select.Content>
  </Select.Root>
  {#if plan?.url}
    <a
      href={plan.url}
      target="_blank"
      rel="noopener noreferrer"
      class="text-blue-400 hover:text-blue-300 p-1"
      aria-label="Open plan source"
    >
      <ExternalLink size={14} />
    </a>
  {/if}
</div>
