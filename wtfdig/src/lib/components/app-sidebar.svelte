<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import { base } from '$app/paths';
	import { ChevronDown, ChevronRightIcon } from '@lucide/svelte';

	const navItems = [
		{
			title: 'Patch 7.3',
			url: '#',
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
			items: [
				{
					title: 'Cloud of Darkness',
					subtitle: 'Chaotic',
					url: '/71/chaotic'
				}
			]
		}
	];
</script>

<Sidebar.Root>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel class="text-lg my-2">Guides</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each navItems as item, index (index)}
						<Collapsible.Root class="group/collapsible" open>
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
															data-sveltekit-reload
															href={subItem.url}
															{...props}
															class="flex flex-col w-full items-start"
														>
															<div class="text-lg">{subItem.title}</div>
															<div class="text-md text-surface-400">
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
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
</Sidebar.Root>
