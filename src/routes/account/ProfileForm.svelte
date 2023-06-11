<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import { User } from "lucide-svelte";

</script>

<section class="px-6">
    <div class="flex items-center font-semibold">
      <User />
      <span class="ml-4">Personal Details</span>
    </div>
    <p class="mt-3 text-sm">Change the personal details associated with your account</p>
    
    <form  
    class="mt-2 sm:mt-6 flex gap-2 justify-center items-start flex-col sm:flex-row sm:items-center sm:justify-start sm:w-full  ">
      <label for="full_name" class="w-full sm:w-auto flex-grow flex justify-center items-center gap-2">
        <span>Name</span>
        <input type="text" name="email"
        class="rounded-md py-1.5 px-4 bg-gray-300/30 focus:ring-2 focus:ring-gray-900 outline-none w-full"
        />
      </label>
      <Button type="submit" class="self-end ">Update Details</Button>
    </form>

  </section>