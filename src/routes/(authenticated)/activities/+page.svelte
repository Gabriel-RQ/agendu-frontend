<script>
	import { faSearch } from '@fortawesome/free-solid-svg-icons';
	import { IconButton, SearchBar } from '$lib';
	import { removeAccents } from '$lib/util';
	import TablePage from '../TablePage.svelte';

	const headers = ['ID', 'Atividade'];

	let data = [
		{ id: 1, activity: 'Aula' },
		{ id: 2, activity: 'Informática' },
		{ id: 3, activity: 'Ed. Física' },
		{ id: 4, activity: 'Música' },
		{ id: 5, activity: 'Hora da Atividade' },
		{ id: 6, activity: 'Grupo' }
	];

	let showSearchBar = false;

	const filter = (/** @type { {id: number; activity: string}[]} */ data, /** @type {any}*/ value) =>
		data.filter(
			(d) =>
				d.id === parseInt(value) ||
				removeAccents(d.activity.toLowerCase()).includes(removeAccents(value.toLowerCase()))
		);

	const showModalAction = () => null;
	// showModal({ component: AddRoleModal, props: { onClose: hideModal } });
</script>

<svelte:head>
	<title>Agendu | Atividades</title>
</svelte:head>

<TablePage {headers} title="Funções">
	<span class="table-header-buttons" slot="header-content">
		<IconButton
			class="hide-on-desktop"
			icon={faSearch}
			iconData={{ color: 'var(--primary-color-light)', size: 'lg', scale: '1.5' }}
			on:click={() => (showSearchBar = !showSearchBar)}
		/>

		<SearchBar class="hidden" bind:data {filter} hint="Pesquisar..." expanded />
	</span>

	<svelte:fragment slot="header-searchbar">
		{#if showSearchBar}
			<SearchBar class="mobile-searchbar" bind:data {filter} hint="Pesquisar..." expanded />
		{/if}
	</svelte:fragment>

	<svelte:fragment slot="table-content">
		{#each data as activity}
			<tr>
				<td>{activity.id}</td>
				<td>{activity.activity}</td>
			</tr>
		{/each}
	</svelte:fragment>
</TablePage>

<style>
	:global(.hide-on-mobile.new-btn) {
		display: none;
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
