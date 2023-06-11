<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
	import { onMount } from "svelte";
    import "../app.css"
	import type { LayoutData } from "./$types";
	import { invalidate } from "$app/navigation";

    export let data: LayoutData;
    $: ({session,supabase} = data) 

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
</script>

<svelte:head>
    <title>My App</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
</svelte:head>

<div class="min-h-screen flex flex-col justify-between items-center bg-neutral-50">
<Navbar />
<div class="f-full self-stretch flex-grow">
<slot />
</div>
<Footer />
</div>