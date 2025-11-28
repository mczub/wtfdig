<script lang="ts">
	import { ToggleGroup } from 'bits-ui';
	import { cn } from '$lib/utils';
	import { createEventDispatcher } from 'svelte';

	export let name: string | undefined;
	export let value: string | null | undefined;
	export let classes = '';
	export let onValueChange: ((detail: { value: string }) => void) | undefined;

	const dispatch = createEventDispatcher<{ valueChange: { value: string } }>();

	function handleChange(newValue: string) {
		if (!newValue) {
			// Enforce mandatory selection: if trying to deselect, re-emit current value
			if (value) {
				onValueChange?.({ value });
				dispatch('valueChange', { value });
			}
			return;
		}
		const nextValue = newValue;
		onValueChange?.({ value: nextValue });
		dispatch('valueChange', { value: nextValue });
	}
</script>

<ToggleGroup.Root
	type="single"
	value={value ?? undefined}
	onValueChange={handleChange}
	class={cn(
		'inline-flex items-center gap-1 rounded-md border border-border bg-surface-1000/60 p-1 shadow-sm',
		classes
	)}
	data-name={name}
>
	<slot />
</ToggleGroup.Root>
