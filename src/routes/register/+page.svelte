<script lang="ts">
    import { superForm } from "sveltekit-superforms/client";
    import type { PageData } from "./$types";
	  import Button from "$lib/components/Button.svelte";
    export let data: PageData;
    
    const { form, errors, enhance } = superForm(data.form, {
      resetForm: true,
    });
  </script>
  
  <div class="justify-center items-center flex w-full pt-4 md:pt-20 px-4 lg:px-8">
    <div class="bg-white p-8 rounded-md shadow-sm">
      <h2 class="text-2xl w-full text-center pb-2">Register</h2>
      <form method="POST" use:enhance class="flex justify-center flex-col items-center space-y-2">
        <label class="space-y-2 w-full" for="full_name">
          <span>Name</span>
          <input type="text" name="full_name" bind:value={$form.full_name} 
          class="w-full rounded-md py-1.5 px-4 bg-gray-300/30 focus:ring-2 focus:ring-gray-900 outline-none"
          />
          {#if $errors.full_name}
            <span class="block text-red-600">{$errors.full_name}</span>
          {/if}
        </label>
        <label class="space-y-2 w-full" for="email">
          <span>Email</span>
          <input type="email" name="email" bind:value={$form.email} 
          class="w-full rounded-md py-1.5 px-4 bg-gray-300/30 focus:ring-2 focus:ring-gray-900 outline-none"
          />
          {#if $errors.email}
            <span class="block text-red-600">{$errors.email}</span>
          {/if}
        </label>
        <label class="space-y-2 w-full" for="password">
          <span>Password</span>
          <input type="password" name="password" bind:value={$form.password} 
          class="w-full rounded-md py-1.5 px-4 bg-gray-300/30 focus:ring-2 focus:ring-gray-900 outline-none"
          />
          {#if $errors.password}
            <span class="block text-red-600">{$errors.password}</span>
          {/if}
        </label>
        <label class="space-y-2 w-full pb-4" for="passwordConfirm">
          <span>Confirm Password</span>
          <input type="password" name="passwordConfirm" bind:value={$form.passwordConfirm} 
          class="w-full rounded-md py-1.5 px-4 bg-gray-300/30 focus:ring-2 focus:ring-gray-900 outline-none"
          />
          {#if $errors.passwordConfirm}
            <span class="block text-red-600">{$errors.passwordConfirm}</span>
          {/if}
        </label>
        <Button  type="submit" class="w-full pt-2">Register</Button>

        <div class="text-sm font-medium text-gray-500 w-full self-start pt-2" >
          Already have an account? <a href="/login" class="text-gray-900 font-medium hover:underline">Sign in</a>
        </div>
      </form>
    </div>
  </div>

  