<!-- @ts-nocheck -->
<script lang="ts">
	// @ts-nocheck
	import '../app.css';
	import { Modal, ToastProvider } from '$lib/components/ui';
	import { Button } from '$lib/components/ui/button';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import { useSidebar } from '$lib/components/ui/sidebar/index';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import PanelLeftIcon from '@lucide/svelte/icons/panel-left';
	import { base } from '$app/paths';

	interface Props {
		children?: import('svelte').Snippet;
	}
	let { children }: Props = $props();
	const sidebar = useSidebar();
</script>

<!--header class="w-full mx-auto px-6 py-6 border-b border-gray-600 flex-none z-50 relative">
	<div class="grid grid-cols-1 md:grid-cols-3 justify-items-stretch items-center">
		<a
			href="{base}/"
			class="flex flex-row items-center text-2xl font-semibold my-4 md:my-0 md:justify-self-start gap-1"
			>WTFDIG<img width="32px" src="{base}/wtfdig-small-800.png" /></a
		>
		<div
			class="card md:mx-auto preset-outlined-secondary-500 gap-4 p-4 lg:grid-cols-[auto_1fr_auto] md:text-center"
		>
			WTFDIG can now be found at <a
				target="_blank"
				rel="noopener noreferrer"
				class="anchor"
				href="https://wtfdig.info">WTFDIG.info</a
			>
		</div>
		<div class="flex flex-wrap gap-2 md:justify-end my-4 md:ml-4 md:my-0">
			<NavigationMenu.Root>
				<NavigationMenu.List>
					<NavigationMenu.Item>
						<NavigationMenu.Trigger class="btn preset-tonal-secondary px-4"
							>Patch 7.1 <ChevronDown size={16} /></NavigationMenu.Trigger
						>
						<NavigationMenu.Content class="bg-surface-200 dark:bg-surface-800 min-w-[240px] p-4">
							<article>
								<div
									class="opacity-60 preset-outlined-surface-200-800 grid p-0 w-full divide-y divide-surface-800 rounded-md bg-surface-950"
								>
									<div class="px-4 py-2 hover:bg-surface-900">
										<a
											data-sveltekit-reload
											href="{base}/71/chaotic"
											class="flex flex-col w-full items-start"
										>
											<div class="text-lg -mb-2">Cloud of Darkness</div>
											<div class="text-sm">Chaotic</div>
										</a>
									</div>
								</div>
							</article>
						</NavigationMenu.Content>
					</NavigationMenu.Item>
					<NavigationMenu.Item>
						<NavigationMenu.Trigger class="btn preset-tonal-secondary px-4"
							>Patch 7.2 <ChevronDown size={16} /></NavigationMenu.Trigger
						>
						<NavigationMenu.Content class="bg-surface-200 dark:bg-surface-800 min-w-[240px] p-4">
							<article>
								<div
									class="opacity-60 preset-outlined-surface-200-800 grid grid-rows-4 p-0 w-full divide-y divide-surface-800 rounded-md bg-surface-950"
								>
									<div class="px-4 py-2 hover:bg-surface-900">
										<a
											data-sveltekit-reload
											href="{base}/72/ex4"
											class="flex flex-col w-full items-start"
										>
											<div class="text-lg -mb-2">Recollection</div>
											<div class="text-sm">Extreme</div>
										</a>
									</div>
									<div class="px-4 py-2 hover:bg-surface-900">
										<a
											data-sveltekit-reload
											href="{base}/72/m5s"
											class="flex flex-col w-full items-start"
										>
											<div class="text-lg -mb-2">AAC Cruiserweight M1</div>
											<div class="text-sm">Savage</div>
										</a>
									</div>
									<div class="px-4 py-2 hover:bg-surface-900">
										<a
											data-sveltekit-reload
											href="{base}/72/m6s"
											class="flex flex-col w-full items-start"
										>
											<div class="text-lg -mb-2">AAC Cruiserweight M2</div>
											<div class="text-sm">Savage</div>
										</a>
									</div>
									<div class="px-4 py-2 hover:bg-surface-900">
										<a
											data-sveltekit-reload
											href="{base}/72/m7s"
											class="flex flex-col w-full items-start"
										>
											<div class="text-lg -mb-2">AAC Cruiserweight M3</div>
											<div class="text-sm">Savage</div>
										</a>
									</div>
									<div class="px-4 py-2 hover:bg-surface-900">
										<a
											data-sveltekit-reload
											href="{base}/72/m8s"
											class="flex flex-col w-full items-start"
										>
											<div class="text-lg -mb-2">AAC Cruiserweight M4</div>
											<div class="text-sm">Savage</div>
										</a>
									</div>
								</div>
							</article>
						</NavigationMenu.Content>
					</NavigationMenu.Item>
					<NavigationMenu.Item>
						<NavigationMenu.Trigger class="btn preset-tonal-secondary px-4"
							>Patch 7.3 <ChevronDown size={16} /></NavigationMenu.Trigger
						>
						<NavigationMenu.Content class="bg-surface-200 dark:bg-surface-800 min-w-[240px] p-4">
							<article>
								<div
									class="opacity-60 preset-outlined-surface-200-800 grid p-0 w-full divide-y divide-surface-800 rounded-md bg-surface-950"
								>
									<div class="px-4 py-2 hover:bg-surface-900">
										<a
											data-sveltekit-reload
											href="{base}/73/ex6"
											class="flex flex-col w-full items-start"
										>
											<div class="text-lg -mb-2">Windward Wilds</div>
											<div class="text-sm">Extreme</div>
										</a>
									</div>
									<div class="px-4 py-2 hover:bg-surface-900">
										<a
											data-sveltekit-reload
											href="{base}/73/ex5"
											class="flex flex-col w-full items-start"
										>
											<div class="text-lg -mb-2">Necron's Embrace</div>
											<div class="text-sm">Extreme</div>
										</a>
									</div>
								</div>
							</article>
						</NavigationMenu.Content>
					</NavigationMenu.Item>
					<NavigationMenu.Item>
						<NavigationMenu.Trigger class="btn preset-tonal-secondary px-4"
							>Ultimates <ChevronDown size={16} /></NavigationMenu.Trigger
						>
						<NavigationMenu.Content class="bg-surface-200 dark:bg-surface-800 min-w-[240px] p-4">
							<article>
								<div
									class="opacity-60 preset-outlined-surface-200-800 grid p-0 w-full divide-y divide-surface-800 rounded-md bg-surface-950"
								>
									<div class="px-4 py-2 hover:bg-surface-900">
										<a
											data-sveltekit-reload
											href="{base}/ultimates/ucob"
											class="flex flex-col w-full items-start"
										>
											<div class="text-lg -mb-2">The Unending Coil of Bahamut</div>
											<div class="text-sm">Ultimate</div>
										</a>
									</div>
									<div class="px-4 py-2">
										<button class="flex flex-col w-full items-start disabled">
											<div class="text-lg -mb-2">The Weapon's Refrain</div>
											<div class="text-sm">Ultimate</div>
										</button>
									</div>
									<div class="px-4 py-2">
										<button class="flex flex-col w-full items-start disabled">
											<div class="text-lg -mb-2">The Epic of Alexander</div>
											<div class="text-sm">Ultimate</div>
										</button>
									</div>
									<div class="px-4 py-2">
										<button class="flex flex-col w-full items-start disabled">
											<div class="text-lg -mb-2">Dragonsong's Reprise</div>
											<div class="text-sm">Ultimate</div>
										</button>
									</div>
									<div class="px-4 py-2">
										<button class="flex flex-col w-full items-start disabled">
											<div class="text-lg -mb-2">The Omega Protocol</div>
											<div class="text-sm">Ultimate</div>
										</button>
									</div>
									<div class="px-4 py-2">
										<button class="flex flex-col w-full items-start disabled">
											<div class="text-lg -mb-2">Futures Rewritten</div>
											<div class="text-sm">Ultimate</div>
										</button>
									</div>
								</div>
							</article>
						</NavigationMenu.Content>
					</NavigationMenu.Item>
				</NavigationMenu.List>
			</NavigationMenu.Root>

		</div>
	</div>
</header-->

<ToastProvider>
	<Sidebar.Provider>
		<AppSidebar />
		<main class="grow flex flex-col">
			<header class="container px-4 mx-auto my-4">
				<div class="container grid grid-cols-3 items-center justify-between">
					<Sidebar.Trigger />
					<a
						href="{base}/"
						class="flex flex-row items-center text-2xl font-semibold my-4 md:my-0 justify-self-center gap-1"
						>WTFDIG<img width="32px" src="{base}/wtfdig-small-800.png" /></a
					>
					<div
						class="card preset-outlined-secondary-500 gap-4 p-4 md:justify-self-end text-sm hidden md:block"
					>
						WTFDIG is now at <a
							target="_blank"
							rel="noopener noreferrer"
							class="anchor"
							href="https://wtfdig.info">WTFDIG.info</a
						>
					</div>
				</div>
			</header>

			{@render children?.()}

			<footer
				class="w-full p-4 border-t shadow-sm md:flex md:items-center md:justify-between md:p-6 bg-surface-1000 border-gray-600 mt-auto"
			>
				<div
					class="flex flex-col lg:flex-row w-full max-w-(--breakpoint-xl) mx-auto justify-between"
				>
					<div class="text-sm text-gray-500 dark:text-gray-400">
						<div>
							Comments? Questions? Something incorrect? <a
								target="_blank"
								rel="noopener noreferrer"
								class="anchor"
								href="https://docs.google.com/forms/d/e/1FAIpQLScJEJ43FKjSRJ2MyLuGXznce-P_SQNyPLWga_Xme_CJKPiQIQ/viewform?usp=header"
								>Let me know.</a
							>
						</div>
						<div>
							FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd. FINAL
							FANTASY XIV © SQUARE ENIX
						</div>
					</div>
					<div class="text-sm text-gray-500 dark:text-gray-400 md:text-end">
						<div>Made by Mara Kaminagi @ Adamantoise</div>
						<div>
							You can find me on <a
								target="_blank"
								rel="noopener noreferrer"
								class="anchor"
								href="https://bsky.app/profile/shittyidiot.com">Bluesky</a
							>
							or
							<a target="_blank" rel="noopener noreferrer" class="anchor" href="https://x.com/mczub"
								>Twitter</a
							>
						</div>
						<div>
							Really love the site? <a
								target="_blank"
								rel="noopener noreferrer"
								class="anchor"
								href="https://ko-fi.com/mczub">Buy me a coffee!</a
							>
						</div>
					</div>
				</div>
			</footer>
		</main>
	</Sidebar.Provider>
</ToastProvider>
