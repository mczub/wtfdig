<script lang="ts">
	import '../app.css';
    import { onMount } from 'svelte';
    import { Modal, Popover, ToastProvider } from '@skeletonlabs/skeleton-svelte';
    import ChevronDown from '@lucide/svelte/icons/chevron-down';
    import { base } from '$app/paths';
    interface Props {
        children?: import('svelte').Snippet;
    }
    let changelogOpenState = $state(false);
    function changelogOpen() {
        changelogOpenState = true;
    }
    function changelogClose() {
        changelogOpenState = false;
    }
    let popover71OpenState = $state(false);
    let popover72OpenState = $state(false);
    let popover73OpenState = $state(false);
    let popoverUltimatesOpenState = $state(false);

    let { children }: Props = $props();
</script>

<Modal 
    open={changelogOpenState}
    classes=""
    contentBase="card bg-surface-100-900 max-h-8/10 p-4 space-y-4 shadow-xl overflow-auto preset-outlined-surface-200-800 bg-surface-1000"
    backdropClasses="backdrop-blur-sm"
    onPointerDownOutside={() => changelogClose()}
>
    {#snippet content()}
        <header class="flex justify-between">
            <h2 class="h2">Changelog</h2>
        </header>
        <article>
            <div>
                <p>11/16/2025: add ex6</p>
                <p>7/8/2025: updated toxic lightning spreads for m6s</p>
                <p>7/7/2025: we got cob; also each fight saves your role to localstorage, also adjusted some layout stuff on cheatsheets</p>
                <p>6/9/2025: added a second line to m8s fering for people who don't understand what color partners means</p>
                <p>5/19/2025: add second pattern to m6s toxic/hector river</p>
                <p>5/17/2025: icons! and shorter urls!</p>
                <p>5/10/2025: some layout adjustment, add timelines to main pages, add pf descriptions</p>
                <p>5/7/2025: a bunch of formatting stuff! you can click on images!</p>
                <p>5/5/2025: redirecting mczub.github.io/wtfdig to wtfdig.info</p>
                <p>5/4/2025: add oce m6s + m7s, eu m8s</p>
                <p>5/2/2025: rearranged strats, added badges to indicate region standards, add game8 m6s + m7s, add oce m5s</p>
                <p>5/1/2025: updated fering decay diagrams, fix twofold line baits</p>
                <p>4/27/2025: highlights for m5s hector, split m7s p3 hector strat out into its own thing</p>
                <p>4/27/2025: add timeline for m8s, add cheatsheet for ex4</p>
                <p>4/26/2025: fix m7s stoneringers 2, add image previews in cheatsheet mode</p>
                <p>4/25/2025: update m6s toxic towers, made links bigger and added some disclaimers</p>
                <p>4/24/2025: some minor updates for m6s, clarify m7s p3 dd, add m7s stoneringers 2, rename uptime m7s p1 to kindred</p>
                <p>4/22/2025: fix m8s quad moon, add fixed seeds, update m6s latte 8-0-0 towers, split out original and caster se twofold</p>
                <p>4/17/2025: update m8s toxic p2 twofold</p>
                <p>4/16/2025: cheatsheet mode for 7 + 8</p>
                <p>4/15/2025: cheatsheet mode for 5 + 6, add locked seeds to 7</p>
                <p>4/14/2025: fixed some reported issues</p>
                <p>4/12/2025: m8s + renamed m6s toxic to hector/toxic, update ex4 hector bloom6 to match video, added ko-fi link</p>
                <p>4/9/2025: m7s improvements + fixed m5s toxic ride the wave</p>
                <p>4/8/2025: m7s</p>
                <p>4/6/2025: add some m6s adds variations</p>
                <p>4/3/2025: basic m6s support</p>
                <p>4/2/2025: sadly ucob was too good to live, however we have m5s now</p>
                <p>3/30/2025: added url support to share strats with PF!</p>
                <p>3/28/2025: improved ex4 support and bugfixes</p>
                <p>3/27/2025: ex4 support</p>
                <p>3/21/2025: updated to svelte v5 in preparation for 7.2</p>
                <p>1/21/2025: added warning for core-lateral and lateral-core swap in 7.16</p>
                <p>1/20/2025: added more comprehensive post-swap spots to HealerOut</p>
                <p>1/20/2025: fix idyll C postswap image rotation</p>
                <p>1/19/2025: added idyll/game8 strat - added by kizer</p>
                <p>1/10/2025: added more comprehensive post-swap spots to raidplan</p>
                <p>1/9/2025: switched melee spread spots for raidplan A+C, fixed text wrapping at high zoom</p>
                <p>1/7/2025: added HealerOut to the strat selector - added by Jake Hale @ Louisoux</p>
                <p>1/5/2025: fixed raidplan spread spots to match where people end up after tether breaks, added pair partners + cleaned up phrasing</p>
                <p>1/3/2025: added wfJ/o1Z to the raidplan selector, changed Add Relative to Wall Relative for CODCAR</p>
                <p>1/2/2025: Updated some styling to make the swap assignments more obvious (yes melees will sometimes need to take a ranged spot), added some info to footer</p>
                <p>1/1/2025: Added big overview image, rotated AOE spreads correctly for CODCAR, added post-swap locations for everyone starting on tiles</p>
                <p>12/31/2024: Added Alignment buttons (Original, True North, Add Relative) for CODCAR, added Wild Charges to CODCAR tile players, some improvements to responsive sizing</p>
                <p>12/30/2024: Initial Release</p>
            </div>
        </article>
        <footer class="flex justify-end gap-4">
            <button type="button" class="btn preset-tonal" onclick={changelogClose}>Close</button>
        </footer>
    {/snippet}

</Modal>

<header class="w-full mx-auto px-6 py-6 border-b border-gray-600 flex-none">
    <div class="grid grid-cols-1 md:grid-cols-3 justify-items-stretch items-center">
        <a href="{base}/" class="flex flex-row items-center text-2xl font-semibold my-4 md:my-0 md:justify-self-start gap-1">WTFDIG<img width="32px" src='{base}/wtfdig-small-800.png' /></a>
        <div class="card md:mx-auto preset-outlined-secondary-500 gap-4 p-4 lg:grid-cols-[auto_1fr_auto] md:text-center">WTFDIG can now be found at <a target="_blank" rel="noopener noreferrer" class="anchor" href="https://wtfdig.info">WTFDIG.info</a></div>
        <div class="flex flex-wrap gap-2 md:justify-end my-4 md:ml-4 md:my-0">
            <Popover
                open={popover71OpenState}
                onOpenChange={(e) => (popover71OpenState = e.open)}
                positioning={{ placement: 'bottom-end' }}
                triggerBase="btn preset-tonal-secondary border border-secondary-500 px-4"
                contentBase="card bg-surface-200-800 space-y-4 min-w-[240px]"
            >
                {#snippet trigger()}Patch 7.1 <ChevronDown size={16}/>{/snippet}
                {#snippet content()}
                <article>
                    <div class="opacity-60 preset-outlined-surface-200-800 grid p-0 w-full divide-y divide-surface-800 rounded-md hover:bg-surface-900 bg-surface-950">
                        <div class="px-4 py-2">
                            <a data-sveltekit-reload href="{base}/71/chaotic" class="flex flex-col w-full items-start">
                                <div class="text-lg -mb-2">Cloud of Darkness</div>
                                <div class="text-sm">Chaotic</div>
                            </a>
                        </div>
                    </div>
                </article>
                {/snippet}
            </Popover>
            <Popover
                open={popover72OpenState}
                onOpenChange={(e) => (popover72OpenState = e.open)}
                positioning={{ placement: 'bottom-end' }}
                triggerBase="btn preset-tonal-secondary border border-secondary-500 px-4"
                contentBase="card bg-surface-200-800 min-w-[240px]"
            >
                {#snippet trigger()}Patch 7.2 <ChevronDown size={16}/>{/snippet}
                {#snippet content()}
                <article>
                    <div class="opacity-60 preset-outlined-surface-200-800 grid grid-rows-4 p-0 w-full divide-y divide-surface-800 rounded-md bg-surface-950">
                        <div class="px-4 py-2">
                            <a data-sveltekit-reload href="{base}/72/ex4" class="flex flex-col w-full items-start">
                                <div class="text-lg -mb-2">Recollection</div>
                                <div class="text-sm">Extreme</div>
                            </a>
                        </div>
                        <div class="px-4 py-2">
                            <a data-sveltekit-reload href="{base}/72/m5s" class="flex flex-col w-full items-start">
                                <div class="text-lg -mb-2">AAC Cruiserweight M1</div>
                                <div class="text-sm">Savage</div>
                            </a>
                        </div>
                        <div class="px-4 py-2">
                            <a data-sveltekit-reload href="{base}/72/m6s" class="flex flex-col w-full items-start">
                                <div class="text-lg -mb-2">AAC Cruiserweight M2</div>
                                <div class="text-sm">Savage</div>
                            </a>
                        </div>
                        <div class="px-4 py-2">
                            <a data-sveltekit-reload href="{base}/72/m7s" class="flex flex-col w-full items-start">
                                <div class="text-lg -mb-2">AAC Cruiserweight M3</div>
                                <div class="text-sm">Savage</div>
                            </a>
                        </div>
                        <div class="px-4 py-2">
                            <a data-sveltekit-reload href="{base}/72/m8s" class="flex flex-col w-full items-start">
                                <div class="text-lg -mb-2">AAC Cruiserweight M4</div>
                                <div class="text-sm">Savage</div>
                            </a>
                        </div>
                    </div>
                </article>
                {/snippet}
            </Popover>
            <Popover
                open={popover73OpenState}
                onOpenChange={(e) => (popover73OpenState = e.open)}
                positioning={{ placement: 'bottom-end' }}
                triggerBase="btn preset-tonal-secondary border border-secondary-500 px-4"
                contentBase="card bg-surface-200-800 min-w-[240px]"
            >
                {#snippet trigger()}Patch 7.3 <ChevronDown size={16}/>{/snippet}
                {#snippet content()}
                <article>
                    <div class="opacity-60 preset-outlined-surface-200-800 grid p-0 w-full divide-y divide-surface-800 rounded-md hover:bg-surface-900 bg-surface-950">
                        <div class="px-4 py-2">
                            <a data-sveltekit-reload href="{base}/73/ex6" class="flex flex-col w-full items-start">
                                <div class="text-lg -mb-2">Windward Wilds</div>
                                <div class="text-sm">Extreme</div>
                            </a>
                        </div>
                        <div class="px-4 py-2">
                            <a data-sveltekit-reload href="{base}/73/ex5" class="flex flex-col w-full items-start">
                                <div class="text-lg -mb-2">Necron's Embrace</div>
                                <div class="text-sm">Extreme</div>
                            </a>
                        </div>
                    </div>
                </article>
                {/snippet}
            </Popover>
            <Popover
                open={popoverUltimatesOpenState}
                onOpenChange={(e) => (popoverUltimatesOpenState = e.open)}
                positioning={{ placement: 'bottom-end' }}
                triggerBase="btn preset-tonal-secondary border border-secondary-500 px-4"
                contentBase="card bg-surface-200-800 min-w-[240px]"
            >
                {#snippet trigger()}Ultimates <ChevronDown size={16}/>{/snippet}
                {#snippet content()}
                <article>
                    <div class="opacity-60 preset-outlined-surface-200-800 grid p-0 w-full divide-y divide-surface-800 rounded-md bg-surface-950">
                        <div class="px-4 py-2 hover:bg-surface-900">
                            <a data-sveltekit-reload href="{base}/ultimates/ucob" class="flex flex-col w-full items-start">
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
                {/snippet}
            </Popover>
            
            <button type="button" onclick={() => changelogOpen()} class="btn preset-tonal border border-surface-500 px-6">Changelog</button>
        </div>
    </div>
</header>

<ToastProvider>
    {@render children?.()}
</ToastProvider>


<footer class="bottom-0 left-0 z-40 w-full p-4 border-t shadow-sm md:flex md:items-center md:justify-between md:p-6 bg-surface-1000 border-gray-600">
    <div class="flex flex-col lg:flex-row w-full max-w-(--breakpoint-xl) mx-auto justify-between">
		<div class="text-sm text-gray-500 dark:text-gray-400">
            <div>Comments? Questions? Something incorrect? <a target="_blank" rel="noopener noreferrer" class="anchor" href="https://docs.google.com/forms/d/e/1FAIpQLScJEJ43FKjSRJ2MyLuGXznce-P_SQNyPLWga_Xme_CJKPiQIQ/viewform?usp=header">Let me know.</a></div>
            <div>FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd. FINAL FANTASY XIV © SQUARE ENIX</div>
        </div>
        <div class="text-sm text-gray-500 dark:text-gray-400 md:text-end">
            <div>Made by Mara Kaminagi @ Adamantoise</div>
            <div>You can find me on <a target="_blank" rel="noopener noreferrer" class="anchor" href="https://bsky.app/profile/shittyidiot.com">Bluesky</a> or <a target="_blank" rel="noopener noreferrer" class="anchor" href="https://x.com/mczub">Twitter</a></div>
            <div>Really love the site? <a target="_blank" rel="noopener noreferrer" class="anchor" href="https://ko-fi.com/mczub">Buy me a coffee!</a></div>
        </div>
    </div>
</footer>
