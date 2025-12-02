<script lang="ts">
	// @ts-nocheck
	import { Accordion } from 'bits-ui';
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	export let value: string | undefined;
	export let classes = '';
	export let triggerClasses = '';
	export let panelPadding = 'px-3 py-2';
	type $$Slots = { control?: Snippet; panel?: Snippet; default?: Snippet };
</script>

<Accordion.Item value={value} class={cn('w-full', classes)}>
	<Accordion.Header>
		<Accordion.Trigger
			class={cn(
				'flex w-full items-center justify-between rounded-md border border-transparent bg-transparent px-3 py-2 text-left text-lg font-semibold transition-colors hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
				triggerClasses
			)}
		>
			<slot name="control" />
		</Accordion.Trigger>
	</Accordion.Header>
	<Accordion.Content class="overflow-hidden">
		<div class={cn('rounded-md bg-surface-1000/70', panelPadding)}>
			<slot name="panel" />
		</div>
	</Accordion.Content>
</Accordion.Item>
