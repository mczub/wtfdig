<script lang="ts">
	import { setContext } from 'svelte';
	import { Toaster, toast as sonner } from 'svelte-sonner';

	const toastApi: any = sonner;

	const toastContext = {
		create: ({ description, type }: { description: string; type?: string }) => {
			switch (type) {
				case 'success':
					return toastApi.success(description);
				case 'error':
				case 'danger':
					return toastApi.error(description);
				case 'warning':
					return typeof toastApi.warning === 'function'
						? toastApi.warning(description)
						: typeof toastApi.info === 'function'
							? toastApi.info(description)
							: toastApi(description);
				default:
					return typeof toastApi.message === 'function' ? toastApi.message(description) : toastApi(description);
			}
		}
	};

	setContext('toast', toastContext);
</script>

<slot />
<Toaster position="top-center" expand richColors theme="dark" />
