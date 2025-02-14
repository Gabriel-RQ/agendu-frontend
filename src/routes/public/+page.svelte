<script>
	import { IconButton } from '$lib';
	import { faChevronLeft, faGlobe } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
</script>

<section class="container text-black font-bold text-1_25">
	<header class="flex-row-center">
		<IconButton
			class="public-back-btn"
			icon={faChevronLeft}
			iconData={{ size: 'lg', color: 'var(--icon-color)' }}
			on:click={() => history.back()}
		/>
		<h2>Planilhas públicas</h2>
	</header>

	<div class="flex-column-center full-height">
		<Fa icon={faGlobe} size="lg" scale="8" />
		<div>
			<p>Está meio vazio por aqui...</p>
			<p>Nenhuma planilha compartilhada no momento</p>
		</div>
	</div>
</section>

<style>
	section {
		height: 100vh;
		width: 100vw;
	}

	header {
		--icon-color: var(--text-black);
		gap: 1rem;
		width: fit-content;
	}

	header:hover {
		--icon-color: var(--primary-color);
	}

	h2 {
		color: var(--icon-color);
	}

	div {
		justify-content: space-evenly;
		text-align: center;
	}
</style>
