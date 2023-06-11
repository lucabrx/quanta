<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
    import "../app.css"
    import { invalidate } from '$app/navigation'
    import { onMount } from 'svelte'

    export let data

let { supabase, session } = data
$: ({ supabase, session } = data)

onMount(() => {
  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((event, _session) => {
    if (_session?.expires_at !== session?.expires_at) {
      invalidate('supabase:auth')
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