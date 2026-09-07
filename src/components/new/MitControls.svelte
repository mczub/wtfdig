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

<div class="flex items-center gap-2">
  <span class="text-sm font-semibold text-surface-600-400 uppercase tracking-wider">Plan</span>
  <Select.Root type="single" value={plan?.planName ?? ''} onValueChange={onSelectPlan}>
    <Select.Trigger size="lg">
      <div class="flex place-items-start text-base overflow-hidden">
        {plan?.label ?? 'Select a plan'}
      </div>
    </Select.Trigger>
    <Select.Content>
      {#each plans as p (p.planName)}
        <Select.Item value={p.planName}>
          <div class="text-base">{p.label}</div>
        </Select.Item>
      {/each}
    </Select.Content>
  </Select.Root>
  {#if plan?.url}
    <a
      href={plan.url}
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex text-blue-400 hover:text-blue-300 p-1"
      aria-label="Open plan source"
    >
      <ExternalLink size={18} />
    </a>
  {/if}
</div>
