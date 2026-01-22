<script lang="ts">
	import ModernFightStratPage from '../../../components/new/ModernFightStratPage.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<ModernFightStratPage config={data.config} strats={data.strats} />
