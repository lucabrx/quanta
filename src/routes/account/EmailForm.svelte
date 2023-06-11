<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import { Mail } from "lucide-svelte";

</script>

<section class="px-6">
    <div class="flex items-center font-semibold">
      <Mail />
      <span class="ml-4">Email Address</span>
    </div>
    <p class="mt-3 text-sm">Change the email associated with your account</p>
    
    <form  
    class="mt-2 sm:mt-6 flex gap-2 justify-center items-start flex-col sm:flex-row sm:items-center sm:justify-start sm:w-full  ">
      <label for="full_name" class="w-full sm:w-auto flex-grow flex justify-center items-center gap-2">
        <span>Email</span>
        <input type="text" name="email"
        class="rounded-md py-1.5 px-4 bg-gray-300/30 focus:ring-2 focus:ring-gray-900 outline-none w-full"
        />
      </label>
      <Button type="submit" class="self-end ">Update Email</Button>
    </form>

  </section>