<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { afterUpdate } from 'svelte';
	import Button from '../button/Button.svelte';
	import { X } from 'lucide-svelte';
	export let isOpen = false;
	export let title = 'Modal Title';
	export let closeOnEscape = true;

	const dispatch = createEventDispatcher();

	function closeModal() {
		isOpen = false;
		dispatch('close');
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape' && closeOnEscape) {
			closeModal();
		}
	}

	afterUpdate(() => {
		if (isOpen) {
			document.addEventListener('keydown', handleKeyDown);
		} else {
			document.removeEventListener('keydown', handleKeyDown);
		}
	});
</script>

{#if isOpen}
	<div class="fixed inset-0 flex items-center justify-center bg-black/50 z-50 0 transition-opacity">
		<div class="bg-card rounded-lg shadow-lg p-6 max-w-sm mx-auto z-50 relative">
			<div class="mt-4 flex justify-end">
				<Button variant="ghost" size="sm" class=" absolute top-2 right-2" on:click={closeModal}>
					<X />
				</Button>
			</div>
			<h2 class="text-lg font-medium mb-4">{title}</h2>
			<slot />
		</div>
	</div>
{/if}
