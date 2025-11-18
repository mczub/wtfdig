<script lang="ts">
	import type { FightConfig, Strat } from '$lib/types';
	import FightStratPage from '../../../components/new/FightStratPage.svelte';

	interface Props {
		data: {
			strats: Strat[];
			config: FightConfig;
		};
	}

	let { data }: Props = $props();
</script>

<FightStratPage config={data.config} strats={data.strats} />
