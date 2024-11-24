<script>
	import {
		faCalendarAlt,
		faClock,
		faChalkboardTeacher,
		faChartBar,
		faCheck,
		faBook
	} from '@fortawesome/free-solid-svg-icons';
	import Card from './Card.svelte';

	const menuCards = [
		{ icon: faCalendarAlt, title: 'Quadro de horários' },
		{ icon: faClock, title: 'Períodos' },
		{ icon: faChalkboardTeacher, title: 'Professores' },
		{ icon: faChartBar, title: 'Planilhas públicas' },
		{ icon: faCheck, title: 'Atividades' },
		{ icon: faBook, title: 'Turmas' }
	];
</script>

<section class="container flex-column-center full-height">
	<!-- Área de navegação principal em cards -->
	<div class="grid">
		{#each menuCards as { icon, title }}
			<Card {icon} {title} />
		{/each}
	</div>
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
</style>
