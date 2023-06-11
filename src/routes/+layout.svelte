<script lang="ts">
    import "../app.css"
    import { invalidate } from '$app/navigation'
    import { onMount } from 'svelte'
	import type { LayoutData } from "./$types.js";
    import { page } from "$app/stores";
    import {Menu,X} from "lucide-svelte"
	import Link from "$lib/components/Link.svelte";
	import Button from "$lib/components/Button.svelte";

export let data: LayoutData
  $: ({ session, supabase } = data)
  onMount(() => {
    const {
        data: { subscription },
    } = supabase.auth.onAuthStateChange((event, _session) => {
        if (_session?.expires_at !== session?.expires_at) {
            invalidate("supabase:auth")
        }
    })
    return () => subscription.unsubscribe()
  })

  const navigation = [
    { label: "Home", href: "/" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contacts", href: "/contacts" },
    { label: "Account", href: "/account" },
    ]
    let menu = false;

</script>

<svelte:head>
    <title>My App</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
</svelte:head>

<div class="min-h-screen flex flex-col justify-between items-center bg-neutral-50">
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
        {#if session}
        <form action="/logout" method="POST">
        <Button type="submit" variant="secondary">Logout</Button>
        </form>
        {:else}
        <div class="hidden md:flex justify-center gap-2 items-center">
            <a href="/login"><Button size="md">Login</Button></a>
            <a href="/register"><Button variant="secondary" size="md">Register</Button></a>
            </div>
        {/if}
    
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


<body class="f-full self-stretch flex-grow">
<slot />
</body>


<footer class="w-full justify-center items-center flex ">
    <h2 class="text-sm text-gray-900/70">made with the love, just joking lol</h2>
</footer>

</div>