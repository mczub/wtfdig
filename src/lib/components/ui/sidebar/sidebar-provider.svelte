<script lang="ts">
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { cn, type WithElementRef } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';
	import { browser } from '$app/environment';
	import { SIDEBAR_LOCALSTORAGE_KEY, SIDEBAR_WIDTH, SIDEBAR_WIDTH_ICON } from './constants.js';
	import { setSidebar } from './context.svelte.js';

	const getSidebarOpenState = () => {
		if (!browser) return false;
		return JSON.parse(localStorage.getItem(SIDEBAR_LOCALSTORAGE_KEY) ?? 'true') === 'true';
	};

	let {
		ref = $bindable(null),
		open = $bindable(getSidebarOpenState()),
		onOpenChange = () => {},
		class: className,
		style,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		open?: boolean;
		onOpenChange?: (open: boolean) => void;
	} = $props();

	const sidebar = setSidebar({
		open: () => open,
		setOpen: (value: boolean) => {
			open = value;
			onOpenChange(value);
			if (browser) {
				localStorage.setItem(SIDEBAR_LOCALSTORAGE_KEY, JSON.stringify(value));
			}
		}
	});
	$effect(() => {
		if (browser) {
			const storedState = localStorage.getItem(SIDEBAR_LOCALSTORAGE_KEY);
			if (storedState !== null) {
				open = JSON.parse(storedState);
			}
		}
	});
</script>

<svelte:window onkeydown={sidebar.handleShortcutKeydown} />

<Tooltip.Provider delayDuration={0}>
	<div
		data-slot="sidebar-wrapper"
		style="--sidebar-width: {SIDEBAR_WIDTH}; --sidebar-width-icon: {SIDEBAR_WIDTH_ICON}; {style}"
		class={cn(
			'group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full',
			className
		)}
		bind:this={ref}
		{...restProps}
	>
		{@render children?.()}
	</div>
</Tooltip.Provider>
