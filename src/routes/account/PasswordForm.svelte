<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import { KeyRound } from "lucide-svelte";

</script>

<section class="px-6">
    <div class="flex items-center font-semibold">
      <KeyRound />
      <span class="ml-4">Password</span>
    </div>
    <p class="mt-3 text-sm">Change the password associated with your account</p>
    
    <form  
    class="mt-2 sm:mt-6 flex gap-2 justify-center items-start flex-col">
      <label for="full_name" class="w-full sm:w-full flex flex-col">
        <span>New Password</span>
        <input type="password" name="full_name"
        class="rounded-md py-1.5 px-4 bg-gray-300/30 focus:ring-2 focus:ring-gray-900 outline-none w-full"
        />
      </label>
      <label for="full_name" class="w-full  flex flex-col">
        <span>Confirm New Password</span>
        <input type="password" name="full_name"
        class="rounded-md py-1.5 px-4 bg-gray-300/30 focus:ring-2 focus:ring-gray-900 outline-none w-full "
        />
      </label>
      <Button type="submit" class="self-end mt-2">Change Password</Button>
    </form>

  </section>