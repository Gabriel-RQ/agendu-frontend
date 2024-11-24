<script>
	import { Header } from '$lib';
</script>

<Header />

<main>
	<slot />
</main>

<!-- Rodapé -->
<footer class="text-green font-bold container flex-column-center">
	<div>
		<p>Bem-vindo ao <span class="">Agendu</span></p>
		<small class="text-black text-half">APAE FW (V1.0 04/11/2024)</small>
	</div>
	<a href="#" class="text-green">Ajuda e suporte</a>
</footer>

<style>
	:global(body) {
		display: grid;
		grid-template-rows: auto 1fr auto;
	}

	footer {
		text-align: center;
		font-size: 18px;
		gap: 1rem;
	}
</style>
