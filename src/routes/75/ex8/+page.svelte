<script lang="ts">
  import type { FightConfig, Strat } from '$lib/types';
  import ModernFightStratPage from '../../../components/new/ModernFightStratPage.svelte';

  interface Props {
    data: {
      strats: Strat[];
      config: FightConfig;
    };
  }

  let { data }: Props = $props();
</script>

<ModernFightStratPage config={data.config} strats={data.strats} />
