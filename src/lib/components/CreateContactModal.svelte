<script lang="ts">
	import type { CreateContactSchema } from '$lib/validator/contats';
	import type { Validation } from 'sveltekit-superforms/index';
	import Button from './ui/button/Button.svelte';
	import Modal from './ui/modal/Modal.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	export let open = false;
	export let data: Validation<CreateContactSchema>;
	const { form, errors } = superForm(data, {
		resetForm: true,
		onResult: ({ result }) => {
			if (result.type === 'success') {
				open = false;
				return;
			}
		}
	});
</script>

<Modal bind:isOpen={open} title="Create a Contact">
	<form class="flex flex-col space-y-6" method="POST" action="?/createContact">
		<label class="space-y-2" for="name">
			<span>Name</span>
			<input
				class="w-full rounded-md py-1.5 px-4 bg-gray-300/30 focus:ring-2 focus:ring-gray-900 outline-none"
				type="text"
				name="name"
				bind:value={$form.name}
			/>
			{#if $errors.name}
				<span class="block text-red-600">{$errors.name}</span>
			{/if}
		</label>
		<label class="space-y-2" for="email">
			<span>Email</span>
			<input
				class="w-full rounded-md py-1.5 px-4 bg-gray-300/30 focus:ring-2 focus:ring-gray-900 outline-none"
				type="email"
				name="email"
				bind:value={$form.email}
			/>
			{#if $errors.email}
				<span class="block text-red-600">{$errors.email}</span>
			{/if}
		</label>
		<label class="space-y-2" for="phone">
			<span>Phone</span>
			<input
				class="w-full rounded-md py-1.5 px-4 bg-gray-300/30 focus:ring-2 focus:ring-gray-900 outline-none"
				type="text"
				name="phone"
				bind:value={$form.phone}
			/>
			{#if $errors.phone}
				<span class="block text-red-600">{$errors.phone}</span>
			{/if}
		</label>
		<label class="space-y-2" for="company">
			<span>Company</span>
			<input
				class="w-full rounded-md py-1.5 px-4 bg-gray-300/30 focus:ring-2 focus:ring-gray-900 outline-none"
				type="text"
				name="company"
				bind:value={$form.company}
			/>
			{#if $errors.company}
				<span class="block text-red-600">{$errors.company}</span>
			{/if}
		</label>
		<Button type="submit" class="w-full">Create Contact</Button>
	</form>
</Modal>
