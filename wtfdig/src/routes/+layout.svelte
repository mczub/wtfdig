<script lang="ts">
	import '../app.postcss';
</script>

<slot />

<footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <div class="flex w-full max-w-screen-xl mx-auto justify-between">
		<span class="text-sm text-gray-500 dark:text-gray-400">Comments? Questions? Something incorrect? <a target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline" href="https://docs.google.com/forms/d/e/1FAIpQLScJEJ43FKjSRJ2MyLuGXznce-P_SQNyPLWga_Xme_CJKPiQIQ/viewform?usp=header">Let me know.</a></span>
        <span class="text-sm text-gray-500 dark:text-gray-400">Made by Mara Kaminagi @ Adamantoise</span>
    </div>
</footer>