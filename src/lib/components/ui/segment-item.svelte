<script lang="ts">
	import { ToggleGroup } from 'bits-ui';
	import { cn } from '$lib/utils';

	export let value: string;
	export let classes = '';
	export let labelClasses = '';
</script>

<ToggleGroup.Item
	{value}
	class={cn(
		'inline-flex items-center justify-center gap-2 rounded-sm px-3 py-2 text-sm font-semibold transition-colors border border-transparent data-[state=on]:bg-surface-200 data-[state=on]:text-foreground data-[state=on]:border-surface-400 data-[state=on]:shadow-sm data-[state=on]:shadow-surface-400/40 dark:data-[state=on]:bg-surface-700 dark:data-[state=on]:border-surface-400 dark:data-[state=on]:shadow-black/40 data-[state=off]:bg-transparent data-[state=off]:text-foreground hover:data-[state=off]:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
		classes
	)}
	onclick={(e) => {
		if (e.currentTarget.dataset.state === 'on') {
			e.preventDefault();
		}
	}}
>
	<span class={cn('flex items-center gap-1', labelClasses)}>
		<slot />
	</span>
</ToggleGroup.Item>
