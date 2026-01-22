<script lang="ts">
  import { Segment } from '$lib/components/ui';
  import type { Role, StratOption, FightToggleState } from '$lib/types';

  export let stratName: string | undefined;
  export let stratOptions: StratOption[] = [];
  export let onSelectStrat: (value: string) => void;

  export let toggles: FightToggleState[] = [];
  export let onToggleChange: (key: string, value: string) => void;

  export let role: Role | undefined;
  export let setRole: (value: Role) => void;

  export let party: number | undefined;
  export let setParty: (value: number) => void;
</script>

<div
  class="flex flex-wrap min-w-full justify-between mb-8 card border-[1px] border-surface-200-800 p-4"
>
  <div class="space-y-5 v-full dark">
    <div class="card preset-outlined-warning-500 gap-4 p-4">
      <p>
        This site is still under construction, thank you for your patience while we continue to work
        on it.
      </p>
      <p>Some strats may be missing images or highlights.</p>
      <p>
        This is intended to be a quick reference, please refer to the original guides for full
        explanations of mechanics.
      </p>
    </div>
    <div>
      <div class="text-xl mb-2">Which strat are you using?</div>
      <Segment
        classes="flex-wrap"
        name="stratName"
        value={stratName}
        onValueChange={(e) => onSelectStrat(e.value!)}
      >
        {#each stratOptions as option}
          <Segment.Item value={option.value}>{option.label}</Segment.Item>
        {/each}
      </Segment>
    </div>
    {#if stratName && toggles?.length}
      <div class="flex flex-row gap-4 flex-wrap mb-2">
        {#each toggles as toggle}
          <div class="flex flex-col">
            <div class="flex flex-row">
              <div class="text-lg mb-2">{toggle.label}</div>
            </div>
            <Segment
              classes="flex-wrap"
              name={toggle.key}
              value={toggle.value}
              onValueChange={(e) => onToggleChange(toggle.key, e.value!)}
            >
              {#each toggle.options as option}
                <Segment.Item value={option.value} labelClasses="flex items-center"
                  >{option.label}</Segment.Item
                >
              {/each}
            </Segment>
          </div>
        {/each}
      </div>
    {/if}
    <div>
      <div class="text-xl mb-2">Which role are you?</div>
      <Segment
        name="role"
        classes="flex-wrap"
        value={role}
        onValueChange={(e) => setRole(e.value as Role)}
      >
        <Segment.Item value="Tank">Tank</Segment.Item>
        <Segment.Item value="Healer">Healer</Segment.Item>
        <Segment.Item value="Melee">Melee</Segment.Item>
        <Segment.Item value="Ranged">Ranged</Segment.Item>
      </Segment>
    </div>
    <div>
      <div class="text-xl mb-2">Which light party are you in?</div>
      <Segment
        name="party"
        value={party?.toString()}
        onValueChange={(e) => setParty(parseInt(e.value!))}
      >
        <Segment.Item value="1">1</Segment.Item>
        <Segment.Item value="2">2</Segment.Item>
      </Segment>
    </div>
  </div>
</div>
