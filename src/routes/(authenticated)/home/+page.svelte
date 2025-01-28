<script>
	import {
		faCalendarAlt,
		faListCheck,
		faFileContract,
		faBlackboard,
		faUsers,
		faSchool
	} from '@fortawesome/free-solid-svg-icons';
	import Card from './Card.svelte';

	const menuCards = [
		{ icon: faCalendarAlt, title: 'Cronograma' },
		{ icon: faBlackboard, title: 'Turmas' },
		{ icon: faListCheck, title: 'Funções' },
		{ icon: faFileContract, title: 'Contratos' },
		{ icon: faUsers, title: 'Usuários' },
		{ icon: faSchool, title: 'Recursos' }
	];
</script>

<svelte:head>
	<title>Agendu | Home</title>
</svelte:head>

<section class="container flex-column-center full-height">
	<!-- Área de navegação principal em cards -->
	<div class="grid">
		<Card icon={faCalendarAlt} title="Cronograma" link="/timeline" />
		<Card icon={faBlackboard} title="Turmas" link="/classes" />
		<Card icon={faUsers} title="Usuários" link="/users" />
		<Card icon={faFileContract} title="Contratos" link="/contracts" />
		<Card icon={faListCheck} title="Funções" link="/roles" />
		<Card icon={faSchool} title="Recursos" link="/resources" />
	</div>
	
	<!-- Rodapé -->
	<footer class="text-green font-bold container flex-column-center">
		<div>
			<p>Bem-vindo ao <span class="">Agendu</span></p>
			<small class="text-black text-half">APAE FW (V1.0 04/11/2024)</small>
		</div>
		<a href="#" class="text-green">Ajuda e suporte</a>
	</footer>
</section>

<style>
	.grid {
		box-shadow: #000 0px 0px 10px -5px;
		border-radius: 1rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 10px;
		margin-bottom: 20px;
		padding: 0.75rem;
	}

	footer {
		text-align: center;
		font-size: 18px;
		gap: 1rem;
	}

	@media screen and (min-width: 992px) {
		.grid {
			width: 75%;
			padding: 1rem;
		}
	}
</style>
