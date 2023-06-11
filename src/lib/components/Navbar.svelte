<script lang="ts">
	import Link from "./ui/Link.svelte";
    import { page } from "$app/stores";
	import Button from "./ui/Button.svelte";
    import {Menu,X} from "lucide-svelte"

    const navigation = [
    { label: "Home", href: "/" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contacts", href: "/contacts" },
    { label: "Account", href: "/account" },
    ]
    let menu = false;
</script>


<nav class=' w-full flex justify-center items-center'> 
    <div class='max-w-7xl px-4 lg:px-8  w-full flex  justify-between items-center py-2 z-10'>

    <!-- Logo -->
    <a href="/" class="text-xl lg:text-2xl font-bold bg-gradient-to-tl from-gray-800 to-pink-600 text-transparent bg-clip-text">Logo</a>

    <!-- Navigation links -->
    <div class="hidden md:flex justify-center items-center gap-4"> 
    {#each navigation as { label, href }}
       <Link {href} active={$page.url.pathname === href}>{label}</Link> 
    {/each}
    </div>

    <!-- Auth Buttons -->
    <div class="hidden md:flex justify-center gap-2 items-center">
    <a href="/login"><Button size="md">Login</Button></a>
    <a href="/register"><Button variant="secondary" size="md">Register</Button></a>
    </div>

    <!-- Mobile Menu -->
    <Button 
    class="md:hidden"
    clickeEvent = {() => menu = !menu}
    variant="icon_hover" size="sm">
       {#if menu}
         <X size="24" />
         {:else}
        <Menu size="24" />
        {/if} 
    </Button>

    {#if menu}
    <div class="absolute  top-[52px] left-0 right-0 bg-gray-100 w-full p-4">
    <div class="flex flex-col justify-center items-center gap-4">
    {#each navigation as { label, href }}
       <Link {href} active={$page.url.pathname === href}>{label}</Link> 
    {/each}
    </div>
    </div>
    {/if}
    </div>
</nav>