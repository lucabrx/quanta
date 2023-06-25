
<script lang="ts">
    import type { DeleteContactSchema } from "$lib/validator/contats";
    import { superForm } from "sveltekit-superforms/client";
    import type { Validation } from "sveltekit-superforms/index";
	import Modal from "./ui/modal/Modal.svelte";
	import Button from "./ui/button/Button.svelte";
    export let open = false;
    export let data: Validation<DeleteContactSchema>;
    export let contactId: string;
    const { enhance } = superForm(data, {
      onResult: ({ result }) => {
        if (result.type === "success") {
          open = false;
        }
      },
    });
  </script>

  <Modal bind:isOpen={open} title="Are you sure you want to delete this contact?">
   
        <div class="flex items-center justify-center w-full">
          <form method="POST" action="?/deleteContact&id={contactId}" use:enhance>
            <Button on:click={() => open = false} variant="secondary">No, cancel</Button>
            <Button type="submit" variant="destructive" class="mr-2">Yes, I'm sure</Button>
          </form>
        </div>
      
  </Modal>