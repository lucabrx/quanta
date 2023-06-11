<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
import "../app.css"
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