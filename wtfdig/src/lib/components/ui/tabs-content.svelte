<script lang="ts">
	// @ts-nocheck
	import { Tabs } from 'bits-ui';
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	export let value: string;
	export let classes = '';
	type $$Slots = { default?: Snippet };
</script>

<Tabs.Content
	{value}
	class={cn(
		'mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
		classes
	)}
>
	<slot />
</Tabs.Content>
