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

	@media screen and (min-width: 992px) {
		:global(body) {
			grid-template-columns: auto 1fr;
			grid-template-rows: auto;
		}
	}
</style>
