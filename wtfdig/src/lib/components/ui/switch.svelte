<script lang="ts">
	import { Switch } from 'bits-ui';
	import { cn } from '$lib/utils';
	import { createEventDispatcher } from 'svelte';

	export let checked = false;
	export let name: string | undefined;
	export let classes = '';
	export let onCheckedChange: ((detail: { checked: boolean }) => void) | undefined;

	const dispatch = createEventDispatcher<{ checkedChange: { checked: boolean } }>();

	function handleChange(value: boolean) {
		onCheckedChange?.({ checked: value });
		dispatch('checkedChange', { checked: value });
	}
</script>

<label class="inline-flex items-center gap-2 cursor-pointer select-none">
	<Switch.Root
		{checked}
		onCheckedChange={handleChange}
		name={name}
		class={cn(
			'peer inline-flex h-6 w-10 shrink-0 items-center rounded-full border border-input bg-input transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-muted',
			classes
		)}
	>
		<Switch.Thumb
			class="block h-4 w-4 rounded-full bg-background shadow transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-1"
		/>
	</Switch.Root>
	<slot />
</label>
