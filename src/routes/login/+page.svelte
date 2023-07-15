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
	const { form, errors, enhance } = superForm(data.form, {
		resetForm: true
	});
</script>

<div class="justify-center items-center flex w-full pt-4 md:pt-20 px-4 lg:px-8">
	<Card class="max-w-sm">
		<CardHeader>
			<CardTitle>Login</CardTitle>
		</CardHeader>
		<form method="POST" use:enhance class="">
			<CardContent>
				<label class="space-y-2 w-full" for="email">
					<span>Email</span>
					<input
						type="email"
						name="email"
						bind:value={$form.email}
						class="w-full rounded-md py-1.5 px-4 bg-gray-300/30 focus:ring-2 focus:ring-gray-900 outline-none"
					/>
					{#if $errors.email}
						<span class="block text-red-600">{$errors.email}</span>
					{/if}
				</label>
				<label class="space-y-2 w-full pb-4" for="password">
					<span>Password</span>
					<input
						type="password"
						name="password"
						bind:value={$form.password}
						class="w-full rounded-md py-1.5 px-4 bg-gray-300/30 focus:ring-2 focus:ring-gray-900 outline-none"
					/>
					{#if $errors.password}
						<span class="block text-red-600">{$errors.password}</span>
					{/if}
				</label>
			</CardContent>
			<CardFooter class="flex flex-col w-full">
				<Button class="w-full">Login</Button>
				<div class="text-sm font-medium text-gray-500 w-full self-start pt-2">
					Need an account? <a href="/register" class="text-gray-900 font-medium hover:underline"
						>Register</a
					>
				</div>
			</CardFooter>
		</form>
	</Card>
</div>
