<script lang="ts">
  import * as Sidebar from '$lib/components/ui/sidebar';
  import * as Collapsible from '$lib/components/ui/collapsible';
  import { useSidebar } from '$lib/components/ui/sidebar';
  import { base } from '$app/paths';
  import {
    ArrowLeftFromLine,
    ChartColumn,
    ChevronDown,
    ChevronRightIcon,
    Grid3x3,
    Hammer,
    History,
    TriangleAlert
  } from '@lucide/svelte';
  import Separator from './ui/separator/separator.svelte';

  const sidebar = useSidebar();

  const navItems = [
    {
      title: 'Savage',
      url: '#',
      defaultOpen: true,
      items: [
        {
          title: 'AAC Heavyweight M1 (M9S)',
          subtitle: 'Patch 7.4',
          url: '/74/m9s'
        },
        {
          title: 'AAC Heavyweight M2 (M10S)',
          subtitle: 'Patch 7.4',
          url: '/74/m10s'
        },
        {
          title: 'AAC Heavyweight M3 (M11S)',
          subtitle: 'Patch 7.4',
          url: '/74/m11s'
        },
        {
          title: 'AAC Heavyweight M4 (M12S)',
          subtitle: 'Patch 7.4',
          url: '/74/m12s'
        }
      ]
    },
    {
      title: 'Ultimate',
      url: '#',
      defaultOpen: true,
      items: [
        {
          title: 'Dancing Mad',
          subtitle: 'Ultimate • P1 - P3',
          url: '/ultimates/umad',
          icon: TriangleAlert
        },
        {
          title: 'Futures Rewritten',
          subtitle: 'Ultimate',
          url: '/ultimates/fru'
        },
        {
          title: 'The Epic of Alexander',
          subtitle: 'Ultimate',
          url: '/ultimates/tea'
        },
        {
          title: 'The Unending Coil of Bahamut',
          subtitle: 'Ultimate',
          url: '/ultimates/ucob'
        }
      ]
    },
    {
      title: 'Chaotic',
      url: '#',
      defaultOpen: true,
      items: [
        {
          title: 'The Cloud of Darkness',
          subtitle: 'Patch 7.1',
          url: '/71/chaotic'
        }
      ]
    },
    {
      title: 'Extreme',
      url: '#',
      defaultOpen: true,
      items: [
        {
          title: 'The Unmaking (EX8)',
          subtitle: 'Patch 7.5',
          url: '/75/ex8'
        },
        {
          title: 'Hell on Rails (EX7)',
          subtitle: 'Patch 7.4',
          url: '/74/ex7'
        },
        {
          title: 'Windward Wilds (EX6)',
          subtitle: 'Patch 7.3',
          url: '/73/ex6'
        },
        {
          title: "Necron's Embrace (EX5)",
          subtitle: 'Patch 7.3',
          url: '/73/ex5'
        },
        {
          title: 'Recollection (EX4)',
          subtitle: 'Patch 7.2',
          url: '/72/ex4'
        },
        {
          title: "Sphene's Burden (EX3)",
          subtitle: 'Patch 7.1',
          url: '/71/ex3'
        },
        {
          title: 'Everkeep (EX2)',
          subtitle: 'Patch 7.0',
          url: '/70/ex2'
        },
        {
          title: 'Worqor Lar Dor (EX1)',
          subtitle: 'Patch 7.0',
          url: '/70/ex1'
        }
      ]
    },
    {
      title: 'Older Fights',
      url: '#',
      defaultOpen: false,
      items: [
        {
          title: 'AAC Cruiserweight M1 (M5S)',
          subtitle: 'Patch 7.2 Savage',
          url: '/72/m5s'
        },
        {
          title: 'AAC Cruiserweight M2 (M6S)',
          subtitle: 'Patch 7.2 Savage',
          url: '/72/m6s'
        },
        {
          title: 'AAC Cruiserweight M3 (M7S)',
          subtitle: 'Patch 7.2 Savage',
          url: '/72/m7s'
        },
        {
          title: 'AAC Cruiserweight M4 (M8S)',
          subtitle: 'Patch 7.2 Savage',
          url: '/72/m8s'
        },
        {
          title: 'AAC Light-Heavyweight M4 (M4S)',
          subtitle: 'Patch 7.0 Savage',
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
                              href={subItem.url}
                              {...props}
                              onclick={handleLinkClick}
                              class="flex flex-col w-full items-start"
                            >
                              <div class="flex flex-row items-center gap-2 text-lg">
                                {#if 'icon' in subItem}
                                  {@const Icon = subItem.icon}
                                  <Icon class="size-4 text-warning-500" />
                                {/if}
                                {subItem.title}
                              </div>
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

          <Sidebar.GroupLabel class="flex flex-row items-center gap-2 text-lg font-semibold mb-2"
            ><Hammer class="size-6 text-primary" />Tools</Sidebar.GroupLabel
          >
          <Sidebar.MenuItem>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://analyzer.wtfdig.info"
              class="flex flex-col w-full items-start mx-2"
            >
              <div class="flex flex-row items-center gap-2 text-lg">
                <ChartColumn class="size-6 text-primary " /><span class="font-semibold"
                  >analyzer</span
                >
              </div>
              <div class="text-base text-surface-400">fflogs-based pull analyzer</div>
            </a>
          </Sidebar.MenuItem>
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
          <Sidebar.MenuItem>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wayback.wtfdig.info"
              class="flex flex-col w-full items-start mx-2"
            >
              <div class="flex flex-row items-center gap-2 text-lg">
                <History class="size-6 text-primary " /><span class="font-semibold">wayback</span>
              </div>
              <div class="text-base text-surface-400">version history for raidplans</div>
            </a>
          </Sidebar.MenuItem>
          <Sidebar.MenuItem>
            <a
              href="/tools/idyllic"
              onclick={handleLinkClick}
              class="flex flex-col w-full items-start mx-2"
            >
              <div class="flex flex-row items-center gap-2 text-lg">
                <span class="font-semibold">idyllic helper</span>
              </div>
              <div class="text-base text-surface-400">M12S Idyllic Dream helper</div>
            </a>
          </Sidebar.MenuItem>
          <Sidebar.MenuItem>
            <a
              href="/tools/p4-helper"
              onclick={handleLinkClick}
              class="flex flex-col w-full items-start mx-2"
            >
              <div class="flex flex-row items-center gap-2 text-lg">
                <span class="font-semibold">umad p4 helper</span>
              </div>
              <div class="text-base text-surface-400">Dancing Mad P4 Kefka Says helper</div>
            </a>
          </Sidebar.MenuItem>
          <Separator class="my-2" />
          <Sidebar.MenuItem>
            <a
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
