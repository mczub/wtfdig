<script lang="ts">
  import type { FightConfig } from '$lib/types';
  import ComingSoon from '../../../components/ComingSoon.svelte';

  interface Props {
    data: {
      config: FightConfig;
      message: string;
    };
  }

  let { data }: Props = $props();
</script>

<ComingSoon config={data.config} message={data.message} />
