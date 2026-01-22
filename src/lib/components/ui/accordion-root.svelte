<script lang="ts">
	import { Accordion } from 'bits-ui';
	import { cn } from '$lib/utils';
	import { createEventDispatcher } from 'svelte';

	export let value: string | string[] | undefined;
	export let onValueChange: ((detail: { value: string | string[] }) => void) | undefined;
	export let multiple = false;
	export let collapsible = false;
	export let classes = '';

	const dispatch = createEventDispatcher<{ valueChange: { value: string | string[] } }>();

	const isMultiple = multiple || Array.isArray(value);

	function handleChange(newValue: string | string[]) {
		let nextValue: string | string[] = newValue;
		if (!isMultiple && collapsible && typeof value === 'string' && value === newValue) {
			nextValue = '';
		}
		onValueChange?.({ value: nextValue });
		dispatch('valueChange', { value: nextValue });
	}
</script>

<Accordion.Root
	type={isMultiple ? 'multiple' : 'single'}
	value={value as any}
	onValueChange={handleChange}
	class={cn('w-full', classes)}
>
	<slot />
</Accordion.Root>
