<script lang="ts">
	import '../app.postcss';
    import { initializeStores, Modal, type ModalSettings, getModalStore } from '@skeletonlabs/skeleton';

    initializeStores();

    const faqModal: ModalSettings = {
        type: 'alert',
        title: 'FAQ',
        body: 'FAQ goes here',
        buttonTextCancel: 'Close',
        modalClasses: 'whitespace-pre'
    }

    const changelogModal: ModalSettings = {
        type: 'alert',
        title: 'Changelog',
        body: 
`1/1/2024: Added big overview image, rotated AOE spreads correctly for CODCAR
12/31/2024: Added Alignment buttons (Original, True North, Add Relative) for CODCAR, added Wild Charges to CODCAR tile players, some improvements to responsive sizing
12/30/2024: Initial Release`,
        buttonTextCancel: 'Close',
        modalClasses: 'whitespace-pre-wrap'
    }
    const modalStore = getModalStore();
</script>

<Modal />
<header class="container h-full mx-auto px-4 mx-auto md:my-12 my-4">
    <div class="flex flex-wrap justify-between items-center">
        <div class="text-2xl font-semibold">where the f do i go???? (Chaotic)</div>
        <div class="my-4 md:my-0">
            <button type="button" on:click="{() => modalStore.trigger(changelogModal)}"class="btn variant-ghost">Changelog</button>
        </div>
    </div>
    
</header>


<slot />

<footer class="md:fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <div class="flex w-full max-w-screen-xl mx-auto justify-between">
		<span class="text-sm text-gray-500 dark:text-gray-400">Comments? Questions? Something incorrect? <a target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline" href="https://docs.google.com/forms/d/e/1FAIpQLScJEJ43FKjSRJ2MyLuGXznce-P_SQNyPLWga_Xme_CJKPiQIQ/viewform?usp=header">Let me know.</a></span>
        <span class="text-sm text-gray-500 dark:text-gray-400 text-end">Made by Mara Kaminagi @ Adamantoise</span>
    </div>
</footer>