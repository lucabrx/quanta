<script lang="ts">
	import { Rocket } from "lucide-svelte";
	import ProfileForm from "./ProfileForm.svelte";
	import EmailForm from "./EmailForm.svelte";
	import PasswordForm from "./PasswordForm.svelte";
	import Button from "$components/ui/button/Button.svelte";
	import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="py-8 ">
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
                Current Plan: <strong>{data.tier}</strong>
              </div>
              <Button class="mt-4" href="/account/billing">Manage Billing</Button>
            </div>
          </section>
          <ProfileForm data={data.profileForm} />
          <EmailForm data={data.emailForm} />
          <PasswordForm data={data.passwordForm} />
      </div>
</div>