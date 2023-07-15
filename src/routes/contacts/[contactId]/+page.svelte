<script lang="ts">
	import Button from '$components/ui/button/Button.svelte';
	import Card from '$components/ui/card/Card.svelte';
	import CardContent from '$components/ui/card/CardContent.svelte';
	import CardFooter from '$components/ui/card/CardFooter.svelte';
	import CardHeader from '$components/ui/card/CardHeader.svelte';
	import CardTitle from '$components/ui/card/CardTitle.svelte';
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	export let data: PageData;
	const { form, errors, enhance } = superForm(data.updateContactForm);
</script>

<div class=" container w-full flex justify-center py-20">
	<Card class="max-w-sm">
		<CardHeader>
			<CardTitle>Edit Contact</CardTitle>
		</CardHeader>
		<form method="POST" action="?/updateContact" use:enhance>
			<CardContent class="flex flex-col space-y-4">
				<label class="space-y-2 w-full" for="name">
					<span>Name</span>
					<input
						type="text"
						name="name"
						bind:value={$form.name}
						class="w-full rounded-md py-1.5 px-4 bg-gray-300/30 focus:ring-2 focus:ring-gray-900 outline-none"
					/>
					{#if $errors.name}
						<span class="block text-red-600 dark:text-red-500">{$errors.name}</span>
					{/if}
				</label>
				<label class="space-y-2 w-full" for="email">
					<span>Email</span>
					<input
						type="email"
						name="email"
						bind:value={$form.email}
						class="w-full rounded-md py-1.5 px-4 bg-gray-300/30 focus:ring-2 focus:ring-gray-900 outline-none"
					/>
					{#if $errors.email}
						<span class="block text-red-600 dark:text-red-500">{$errors.email}</span>
					{/if}
				</label>
				<label class="space-y-2 w-full" for="phone">
					<span>Phone</span>
					<input
						type="text"
						name="phone"
						bind:value={$form.phone}
						class="w-full rounded-md py-1.5 px-4 bg-gray-300/30 focus:ring-2 focus:ring-gray-900 outline-none"
					/>
					{#if $errors.phone}
						<span class="block text-red-600 dark:text-red-500">{$errors.phone}</span>
					{/if}
				</label>
				<label class="space-y-2 w-full" for="company">
					<span>Company</span>
					<input
						type="text"
						name="company"
						bind:value={$form.company}
						class="w-full rounded-md py-1.5 px-4 bg-gray-300/30 focus:ring-2 focus:ring-gray-900 outline-none"
					/>
					{#if $errors.company}
						<span class="block text-red-600 dark:text-red-500">{$errors.company}</span>
					{/if}
				</label>
			</CardContent>
			<CardFooter>
				<Button type="submit" class="w-full">Save Changes</Button>
			</CardFooter>
		</form>
	</Card>
</div>
