<script lang="ts">
	// @ts-nocheck
	import { Tabs } from 'bits-ui';
	import { cn } from '$lib/utils';
	import { createEventDispatcher } from 'svelte';
	import type { Snippet } from 'svelte';

	export let value: string | undefined;
	export let classes = '';
	export let listClasses = '';
	export let listMargin = '';
	export let onValueChange: ((detail: { value: string }) => void) | undefined;
	type $$Slots = { list?: Snippet; default?: Snippet };

	const dispatch = createEventDispatcher<{ valueChange: { value: string } }>();

	function handleChange(newValue: string) {
		onValueChange?.({ value: newValue });
		dispatch('valueChange', { value: newValue });
	}
</script>

<Tabs.Root
	{value}
	onValueChange={handleChange}
	class={cn('flex w-full flex-col gap-2', classes)}
>
	<Tabs.List class={cn('flex flex-wrap items-center gap-2', listClasses, listMargin)}>
		<slot name="list" />
	</Tabs.List>
	<slot />
</Tabs.Root>
