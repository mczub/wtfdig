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
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { base } from '$app/paths';

	interface Props {
		children?: import('svelte').Snippet;
	}
	let { children }: Props = $props();
	const sidebar = useSidebar();
</script>

<ToastProvider>
	<Sidebar.Provider>
		<AppSidebar />
		<main class="grow flex flex-col">
			<header class="container px-4 mx-auto md:py-4">
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

			<Separator />

			<footer class="p-4 shadow-sm mt-auto container px-4 lg:px-8 mx-auto my-4">
				<div class="grid grid-cols-1 lg:grid-cols-2 w-full justify-between">
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
					<div class="text-sm text-gray-500 dark:text-gray-400 lg:text-end mt-4 lg:mt-0">
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
