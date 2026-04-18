<!-- @ts-nocheck -->
<script lang="ts">
  // @ts-nocheck
  import { Segment, Switch } from '$lib/components/ui';
  import type { Alliance, Alignment, Role, StratOption } from '$lib/types';

  interface Props {
    stratName: string | undefined;
    stratOptions: StratOption[];
    onSelectStrat: (value: string) => void;
    role: Role | undefined;
    setRole: (value: Role) => void;
    party: number | undefined;
    setParty: (value: number) => void;
    spotlight: boolean;
    setSpotlight: (value: boolean) => void;
    alliance?: Alliance | undefined;
    setAlliance?: (value: Alliance) => void;
    allianceOptions?: Alliance[];
    alignment?: Alignment;
    setAlignment?: (value: Alignment) => void;
    alignmentOptions?: { value: Alignment; label: string }[];
    showAlignment?: boolean;
    stratImageUrl?: string;
    warningMessage?: string;
  }

  let {
    stratName,
    stratOptions = [],
    onSelectStrat,
    role,
    setRole,
    party,
    setParty,
    spotlight,
    setSpotlight,
    alliance,
    setAlliance,
    allianceOptions,
    alignment,
    setAlignment,
    alignmentOptions,
    showAlignment = false,
    stratImageUrl,
    warningMessage
  }: Props = $props();
</script>

<div
  class="flex flex-wrap min-w-full justify-between mb-8 card border-[1px] border-surface-200-800 p-4"
>
  <div class="space-y-5 w-full dark pb-8">
    {#if warningMessage}
      <div class="card preset-outlined-warning-500 gap-4 p-4">
        {@html warningMessage}
      </div>
    {/if}
  </div>
  <div class="flex flex-col gap-4">
    <div>
      <div class="text-xl mb-2">Which strat are you using?</div>
      <Segment
        classes="flex-wrap"
        name="stratName"
        value={stratName}
        onValueChange={(e) => onSelectStrat(e.value)}
      >
        {#each stratOptions as option}
          <Segment.Item value={option.value}>{option.label}</Segment.Item>
        {/each}
      </Segment>
    </div>

    {#if allianceOptions && setAlliance}
      <div>
        <div class="text-xl mb-2">Which alliance are you in?</div>
        <Segment name="alliance" value={alliance} onValueChange={(e) => setAlliance(e.value)}>
          {#each allianceOptions as option}
            <Segment.Item value={option}>{option}</Segment.Item>
          {/each}
        </Segment>
      </div>
    {/if}

    <div>
      <div class="text-xl mb-2">Which role are you?</div>
      <Segment name="role" value={role} onValueChange={(e) => setRole(e.value)}>
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
        onValueChange={(e) => setParty(parseInt(e.value))}
      >
        <Segment.Item value="1">1</Segment.Item>
        <Segment.Item value="2">2</Segment.Item>
      </Segment>
    </div>
  </div>

  {#if stratImageUrl}
    <div class="grow"></div>
    <div class="my-4 xl:my-0">
      <img style:max-height={'400px'} src={stratImageUrl} alt="Strat overview" />
    </div>
  {/if}
</div>
