<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import { Rocket } from "lucide-svelte";
	import ProfileForm from "./ProfileForm.svelte";
	import EmailForm from "./EmailForm.svelte";
	import PasswordForm from "./PasswordForm.svelte";

</script>

<div class="py-20 ">
    <!-- Page header -->
    <div class="mx-auto max-w-xl flex  flex-col items-center pb-10 text-center">
        <h2 class="mt-2 text-3xl font-bold text-gray-900">Account Settings</h2>
        <span class="text-gray-700 mt-4 text-center ">
          Manage your email, password, billing, and other account details.
        </span>
      </div>

      <div class="mx-auto max-w-lg w-full space-y-16 ">
        <section class="px-6">
            <div class="flex items-center font-semibold">
              <Rocket />
              <span class="ml-4">Current Plan & Billing</span>
            </div>
            <p class="mt-3 max-w-none text-sm">Manage your current plan and billing details</p>
            <div class="mt-4">
              <div>
                Current Plan: <strong>Free</strong>
              </div>
              <Button class="mt-4">Manage Billing</Button>
            </div>
          </section>
          <ProfileForm />
          <EmailForm />
          <PasswordForm />
      </div>
</div>