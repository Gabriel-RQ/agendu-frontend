<script>
	import { IconButton, Button, SearchBar } from '$lib';
	import { faPlus, faSearch, faAdd } from '@fortawesome/free-solid-svg-icons';
	import { showModal, hideModal } from '$lib/components/modal';
	import TablePage from '../TablePage.svelte';
	import AddClassModal from './AddClassModal.svelte';
	import Fa from 'svelte-fa';

	let headers = ['N°', 'Nome', 'Professor', 'Atividades', 'Carga Horária'];
	let title = 'Turmas';

	let data = [
		{
			id: 1,
			name: 'Alfabetização',
			professor: 'Regina, Taísa, Ana',
			activities: 'Aula, Ed. Física, Informática',
			hours: '20h'
		},
		{
			id: 2,
			name: 'Alfabetização',
			professor: 'Fábio, Igor, Luiza',
			activities: 'Equitação',
			hours: '20h'
		}
	];

	const filter = (
		/** @type { {id: number; name: string; professor: string; activities: string}[]} */ data,
		/** @type {any}*/ value
	) =>
		data.filter(
			(d) =>
				d.id === parseInt(value) ||
				d.professor
					.toLowerCase()
					.includes(value.toLowerCase() || d.name.toLowerCase().includes(value.toLowerCase())) ||
				d.activities.toLowerCase().includes(value.toLowerCase())
		);

	let showSearchBar = false;

	const showModalAction = () =>
		showModal({ component: AddClassModal, props: { onClose: hideModal } });
</script>

<svelte:head>
	<title>Agendu | Turmas</title>
</svelte:head>

<TablePage {headers} {title}>
	<span class="table-header-buttons" slot="header-content">
		<IconButton
			class="hide-on-desktop"
			icon={faPlus}
			iconData={{ color: 'var(--primary-color-light)', size: 'lg', scale: '1.5' }}
			on:click={showModalAction}
		/>

		<IconButton
			class="hide-on-desktop"
			icon={faSearch}
			iconData={{ color: 'var(--primary-color-light)', size: 'lg', scale: '1.5' }}
			on:click={() => (showSearchBar = !showSearchBar)}
		/>

		<Button class="hide-on-mobile new-btn" on:click={showModalAction}>
			<Fa icon={faAdd} />
			<p class="text-white font-medium text-1_25">Adicionar</p>
		</Button>

		<SearchBar class="hidden" bind:data {filter} hint="Pesquisar..." expanded />
	</span>

	<svelte:fragment slot="header-searchbar">
		{#if showSearchBar}
			<SearchBar class="mobile-searchbar" bind:data {filter} hint="Pesquisar..." expanded />
		{/if}
	</svelte:fragment>

	<!-- Conteúdo da tabela -->
	<svelte:fragment slot="table-content">
		{#each data as { id, name, professor, activities, hours }}
			<tr>
				<td>{id}</td>
				<td>{name}</td>
				<td>{professor}</td>
				<td>{activities}</td>
				<td>
					<span class="hours">{hours}</span>
				</td>
			</tr>
		{/each}
	</svelte:fragment>
</TablePage>

<style>
	:global(.hide-on-mobile.new-btn) {
		display: none;
	}

	.hours {
		display: inline-block;
		background-color: #4caf50;
		color: white;
		padding: 4px 8px;
		border-radius: 4px;
		font-weight: bold;
		text-align: center;
	}

	@media screen and (min-width: 992px) {
		/* Otimiza o layout para telas maiores - esconde ícones e barras de pesquisa do mobile */
		.table-header-buttons :global(.icon-btn.hide-on-desktop) {
			display: none;
		}

		.table-header-buttons :global(.searchbar) {
			display: initial;
		}

		:global(.hide-on-mobile.new-btn) {
			align-items: center;
			display: flex;
			padding: 0 0.75rem;
			gap: 0.5rem;
			justify-content: center;
		}

		:global(.mobile-searchbar),
		:global(.mobile-searchbar ~ .icon) {
			display: none;
		}
	}
</style>
