<script lang="ts">
	import '../app.css';
    import { Modal } from '@skeletonlabs/skeleton-svelte';
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
    <div class="flex flex-wrap justify-between items-center">
        <div class="text-2xl font-semibold my-4 sm:my-0">WTFDIG</div>
        <div class="card preset-outlined-secondary-500 gap-4 p-4 lg:grid-cols-[auto_1fr_auto]">WTFDIG can now be found at <a target="_blank" rel="noopener noreferrer" class="anchor" href="https://wtfdig.info">WTFDIG.info</a></div>
        <div class="my-4 md:my-0">
            <button type="button" class="btn preset-tonal-secondary border border-secondary-500">Chaotic</button>
            <button type="button" onclick={() => changelogOpen()} class="btn ml-2 preset-tonal border border-surface-500">Changelog</button>
        </div>
    </div>
</header>


{@render children?.()}

<footer class="bottom-0 left-0 z-40 w-full p-4 border-t shadow-sm md:flex md:items-center md:justify-between md:p-6 bg-surface-1000 border-gray-600">
    <div class="flex w-full max-w-(--breakpoint-xl) mx-auto justify-between">
		<div class="text-sm text-gray-500 dark:text-gray-400">
            <div>Comments? Questions? Something incorrect? <a target="_blank" rel="noopener noreferrer" class="anchor" href="https://docs.google.com/forms/d/e/1FAIpQLScJEJ43FKjSRJ2MyLuGXznce-P_SQNyPLWga_Xme_CJKPiQIQ/viewform?usp=header">Let me know.</a></div>
            <div>FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd. FINAL FANTASY XIV © SQUARE ENIX</div>
        </div>
        <div class="text-sm text-gray-500 dark:text-gray-400 text-end">
            <div>Made by Mara Kaminagi @ Adamantoise</div>
            <div>You can find me on <a target="_blank" rel="noopener noreferrer" class="anchor" href="https://bsky.app/profile/shittyidiot.com">Bluesky</a> or <a target="_blank" rel="noopener noreferrer" class="anchor" href="https://x.com/mczub">Twitter</a></div>
        </div>
    </div>
</footer>