<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import { useSidebar } from '$lib/components/ui/sidebar';
	import { base } from '$app/paths';
	import { ArrowLeftFromLine, ChevronDown, ChevronRightIcon, Grid3x3 } from '@lucide/svelte';
	import Separator from './ui/separator/separator.svelte';

	const sidebar = useSidebar();

	const navItems = [
		{
			title: 'Patch 7.4',
			url: '#',
			defaultOpen: true,
			items: [
				{
					title: 'AAC Heavyweight M1 (M9S)',
					subtitle: 'Savage',
					url: '/74/m9s'
				},
				{
					title: 'AAC Heavyweight M2 (M10S)',
					subtitle: 'Savage',
					url: '/74/m10s'
				},
				{
					title: 'AAC Heavyweight M3 (M11S)',
					subtitle: 'Savage',
					url: '/74/m11s'
				},
				{
					title: 'AAC Heavyweight M4 (M12S)',
					subtitle: 'Savage',
					url: '/74/m12s'
				},
				{
					title: 'Hell on Rails (EX7)',
					subtitle: 'Extreme',
					url: '/74/ex7'
				}
			]
		},
		{
			title: 'Ultimates',
			url: '#',
			defaultOpen: true,
			items: [
				{
					title: 'The Unending Coil of Bahamut',
					subtitle: 'Ultimate',
					url: '/ultimates/ucob'
				}
			]
		},
		{
			title: 'Patch 7.3',
			url: '#',
			defaultOpen: false,
			items: [
				{
					title: 'Windward Wilds (EX6)',
					subtitle: 'Extreme',
					url: '/73/ex6'
				},
				{
					title: "Necron's Embrace (EX5)",
					subtitle: 'Extreme',
					url: '/73/ex5'
				}
			]
		},
		{
			title: 'Patch 7.2',
			url: '#',
			defaultOpen: false,
			items: [
				{
					title: 'AAC Cruiserweight M1 (M5S)',
					subtitle: 'Savage',
					url: '/72/m5s'
				},
				{
					title: 'AAC Cruiserweight M2 (M6S)',
					subtitle: 'Savage',
					url: '/72/m6s'
				},
				{
					title: 'AAC Cruiserweight M3 (M7S)',
					subtitle: 'Savage',
					url: '/72/m7s'
				},
				{
					title: 'AAC Cruiserweight M4 (M8S)',
					subtitle: 'Savage',
					url: '/72/m8s'
				},
				{
					title: 'Recollection (EX4)',
					subtitle: 'Extreme',
					url: '/72/ex4'
				}
			]
		},
		{
			title: 'Patch 7.1',
			url: '#',
			defaultOpen: true,
			items: [
				{
					title: 'Cloud of Darkness',
					subtitle: 'Chaotic',
					url: '/71/chaotic'
				}
			]
		},
		{
			title: 'Patch 7.0',
			url: '#',
			defaultOpen: false,
			items: [
				{
					title: 'AAC LHW M4 (M4S)',
					subtitle: 'Savage',
					url: '/70/m4s'
				}
			]
		}
	];

	function handleLinkClick() {
		if (sidebar.isMobile) {
			sidebar.setOpenMobile(false);
		}
	}
</script>

<Sidebar.Root>
	<Sidebar.Content class="bg-background">
		<Sidebar.Group>
			<Sidebar.GroupLabel class="text-lg my-2 font-bold">Fights</Sidebar.GroupLabel>
			<Sidebar.GroupAction class="my-1" title="Close" onclick={() => sidebar.toggle()}>
				<div><ArrowLeftFromLine className="size-8" /></div>
			</Sidebar.GroupAction>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each navItems as item, index (index)}
						<Collapsible.Root class="group/collapsible" open={item.defaultOpen}>
							<Sidebar.MenuItem>
								<Collapsible.Trigger>
									{#snippet child({ props })}
										<Sidebar.MenuButton {...props}>
											<span class="text-lg">{item.title}</span>
											<ChevronRightIcon
												class="ms-auto transition-transform group-data-[state=open]/collapsible:rotate-90"
											/>
										</Sidebar.MenuButton>
									{/snippet}
								</Collapsible.Trigger>
								<Collapsible.Content>
									<Sidebar.MenuSub>
										{#each item.items as subItem, subIndex (subIndex)}
											<Sidebar.MenuSubItem>
												<Sidebar.MenuSubButton>
													{#snippet child({ props })}
														<a
															data-sveltekit-replacestate
															href={subItem.url}
															{...props}
															onclick={handleLinkClick}
															class="flex flex-col w-full items-start"
														>
															<div class="text-lg">{subItem.title}</div>
															<div class="text-base text-surface-400">
																{subItem.subtitle}
															</div>
														</a>
													{/snippet}
												</Sidebar.MenuSubButton>
											</Sidebar.MenuSubItem>
										{/each}
									</Sidebar.MenuSub>
								</Collapsible.Content>
							</Sidebar.MenuItem>
						</Collapsible.Root>
					{/each}
					<Separator class="my-2" />
					<Sidebar.MenuItem>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://board.wtfdig.info"
							class="flex flex-col w-full items-start mx-2"
						>
							<div class="flex flex-row items-center gap-2 text-lg">
								<Grid3x3 class="size-6 text-primary " /><span class="font-semibold">board</span>
							</div>
							<div class="text-base text-surface-400">view + bundle strategy boards</div>
						</a>
					</Sidebar.MenuItem>
					<Separator class="my-2" />
					<Sidebar.MenuItem>
						<a
							data-sveltekit-replacestate
							href="/changelog"
							onclick={handleLinkClick}
							class="flex flex-col w-full items-start mx-2"
						>
							<div class="text-lg">Changelog</div>
						</a>
					</Sidebar.MenuItem>
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
</Sidebar.Root>
