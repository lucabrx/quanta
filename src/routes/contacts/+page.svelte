<script lang="ts">
	import Button from "$components/ui/button/Button.svelte";
  import {MoreHorizontal, X } from "lucide-svelte"
 import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
  } from "$components/ui/table";
	import type { PageData } from "./$types";
	import CreateContactModal from "$components/CreateContactModal.svelte";
	import DeleteContactModal from "$components/DeleteContactModal.svelte";
	import { hasReachedMaxContacts } from "$lib/utils";
	import UpgradePlanModal from "$components/UpgradePlanModal.svelte";
  let createContactOpen = false;
  export let data: PageData;
  let openMenu: boolean = false;
  let deleteContactOpen = false;
  let contactToDelete: string;
  let upgradeModalOpen = false;

  function handleContactDelete(contact_id: string) {
    contactToDelete = contact_id;
    deleteContactOpen = true;
  }
  $: ({contactsCount,tier} = data)
  $: reachedMaxContacts = hasReachedMaxContacts(tier, contactsCount)
  //TODO table ui needs improvement

  function handleContactCreate() {
    if (reachedMaxContacts) {
      upgradeModalOpen = true;
      return;
    }
    createContactOpen = true;
  }
</script>

<div class="py-20 container">
    <!-- Contacts Page Header -->
    <div class="flex w-full items-center justify-between pb-6">
      <h1 class="text-3xl">Contacts</h1>
      <Button size="sm" on:click={handleContactCreate}>New Contact</Button>
    </div>
    <!-- Contacts Table -->
    <Table shadow divClass="min-h-full">
      <TableHeader>
        <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>Phone</TableHead>
        <TableHead>Company</TableHead>
        <TableHead>Settings</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {#each data.contacts as contact, _i (contact.id)}
          <TableRow>
            <TableCell>{contact.name ?? "--"}</TableCell>
            <TableCell>{contact.email ?? "--"}</TableCell>
            <TableCell>{contact.phone ?? "--"}</TableCell>
            <TableCell>{contact.company ?? "--"}</TableCell>
            <TableCell >
              {#if openMenu}
              <div class="">
                <Button size="sm" variant="default" href="/contacts/{contact.id}" >
                  Edit
                </Button>
                <Button size="sm" on:click={() => handleContactDelete(contact.id)}>Delete</Button>
                <Button on:click={() => openMenu = false} size="sm" variant="default" >
                  <X class="h-4 w-4" />
                </Button>
              </div>
              {:else} 
              <Button on:click={() => openMenu = true} size="sm" variant="default" >
                <MoreHorizontal class="h-4 w-4" />
              </Button>
              {/if}
              
            </TableCell>
           
          </TableRow>
         
        {/each}
      </TableBody>
    </Table>
  </div>


<CreateContactModal bind:open={createContactOpen} data={data.createContactForm} />
<DeleteContactModal bind:open={deleteContactOpen} contactId={contactToDelete} data={data.deleteContactForm} />
<UpgradePlanModal
  bind:open={upgradeModalOpen}
  {tier}
  message="You have reached the max contacts for your plan. Upgrade to add more contacts." />
