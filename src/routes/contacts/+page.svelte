<script lang="ts">
	import Button from "$components/ui/button/Button.svelte";
  import {MoreHorizontal } from "lucide-svelte"
 import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
  } from "$components/ui/table";
	import { contacts } from "$lib/data";
	import type { PageData } from "./$types";
	import CreateContactModal from "$components/CreateContactModal.svelte";
  let createContactOpen = false;
  export let data: PageData;
</script>

<div class="py-20 container">
    <!-- Contacts Page Header -->
    <div class="flex w-full items-center justify-between pb-6">
      <h1 class="text-3xl">Contacts</h1>
      <Button size="sm" on:click={() => createContactOpen = true}>New Contact</Button>
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
        {#each contacts as contact, _i (contact.id)}
          <TableRow>
            <TableCell>{contact.name}</TableCell>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{contact.phone}</TableCell>
            <TableCell>{contact.company}</TableCell>
            <TableCell>
              <Button size="sm" variant="default" >
                <MoreHorizontal class="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        {/each}
      </TableBody>
    </Table>
  </div>


<CreateContactModal bind:open={createContactOpen} data={data.createContactForm} />