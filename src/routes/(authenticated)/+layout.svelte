<script>
	import { Header } from '$lib';
</script>

<Header />

<main>
	<slot />
</main>

<style>
	:global(body) {
		display: grid;
		grid-template-rows: auto 1fr;
	}
</style>
