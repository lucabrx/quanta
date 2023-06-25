<script lang="ts">
	import Button from "$components/ui/button/Button.svelte";
	import type { PasswordSchema } from "$lib/validator/schemas";
	import { KeyRound } from "lucide-svelte";
	import { superForm } from "sveltekit-superforms/client";
	import type { Validation } from "sveltekit-superforms/index";

  export let data: Validation<PasswordSchema>

  const {enhance,errors,form} = superForm(data, {
    resetForm: true 
  });
</script>

<section class="px-6">
    <div class="flex items-center font-semibold">
      <KeyRound />
      <span class="ml-4">Password</span>
    </div>
    <p class="mt-3 text-sm">Change the password associated with your account</p>
    
    <form  method="POST" action="?/updatePassword" use:enhance
    class="mt-2 sm:mt-6 flex gap-2 justify-center items-start flex-col">
      <label for="password" class="w-full sm:w-full flex flex-col">
        <span>New Password</span>
        <input type="password" name="password" bind:value={$form.password}
        class="rounded-md py-1.5 px-4 bg-gray-300/30 focus:ring-2 focus:ring-gray-900 outline-none w-full"
        />
        {#if $errors.password}
        <span class="block text-red-600 text-sm">{$errors.password}</span>
      {/if}
      </label>
      <label for="passwordConfirm" class="w-full  flex flex-col">
        <span>Confirm New Password</span>
        <input type="password" name="passwordConfirm" bind:value={$form.passwordConfirm}
        class="rounded-md py-1.5 px-4 bg-gray-300/30 focus:ring-2 focus:ring-gray-900 outline-none w-full "
        />
        {#if $errors.passwordConfirm}
        <span class="block text-red-600 text-sm">{$errors.passwordConfirm}</span>
      {/if}
      </label>
      <Button type="submit" class="self-end mt-2">Change Password</Button>
    </form>

  </section>