<script lang="ts">
	import Button from '$components/ui/button/Button.svelte';
</script>

<section class="relative isolate md:pt-14 pt-8">
	<div class="absolute inset-x-0 -top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
		<div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] element"></div>
	</div>
	<div class="md:py-20 md:mt-20 z-[100] px-4 lg:px-8">
		<div class="mx-auto mb-4 md:mb-10 max-w-3xl text-center">
			<h1 class="mb-3 md:mb-6 text-4xl sm:text-6xl">
				<span class="text-transparent bg-clip-text bg-gradient-to-br from-[#e64c8c] to-[#645cd8]">
					The Next-Gen
				</span>
				day manager AI-tool
				<span class="text-transparent bg-clip-text bg-gradient-to-br from-[#e64c8c] to-[#645cd8]"
					>Quanta</span
				>
			</h1>

			<p class="md:text-lg">
				<span class="hidden md:inline">Supercharge your productivity with Quanta - the</span>
				<span class="md:hidden inline">The</span> groundbreaking solution for optimizing your daily routine.
				Unlock the full potential of Quanta.
			</p>
		</div>
		<div class="flex items-center justify-center gap-3">
			<Button size="lg" variant="default">Get Started</Button>
			<Button size="lg" variant="secondary">Learn More</Button>
		</div>
	</div>
</section>

<style>
	.element {
		clip-path: polygon(
			74.1% 44.1%,
			100% 61.6%,
			97.5% 26.9%,
			85.5% 0.1%,
			80.7% 2%,
			72.5% 32.5%,
			60.2% 62.4%,
			52.4% 68.1%,
			47.5% 58.3%,
			45.2% 34.5%,
			27.5% 76.7%,
			0.1% 64.9%,
			17.9% 100%,
			27.6% 76.8%,
			76.1% 97.7%,
			74.1% 44.1%
		);
	}
</style>
