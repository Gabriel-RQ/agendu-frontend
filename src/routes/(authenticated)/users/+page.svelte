<script>
	import { Button, IconButton, SearchBar  } from '$lib';
	import { faSearch, faPlus, faAdd } from '@fortawesome/free-solid-svg-icons';
	import { faUser } from '@fortawesome/free-solid-svg-icons';
	import TablePage from '../TablePage.svelte';
	import AddUserModal from './AddUserModal.svelte';
	import { showModal, hideModal } from '$lib/components/modal';
	import { removeAccents } from '$lib/util';
	import Fa from 'svelte-fa';

	
	const headers = ['ID', 'Foto', 'Nome', 'Cargo', 'N° de Turmas'];
	let data = [
		{ id: 1, photo: faUser, name: 'Regina', role: 'Diretora', numClasses: 1 },
		{ id: 2, photo: faUser, name: 'Taísa', role: 'Professora', numClasses: 2 },
		{ id: 3, photo: faUser, name: 'Ana', role: 'Professora', numClasses: 3 }
	];

	let showSearchBar = false; // Estado para controlar a exibição da caixa de busca
	// let searchTerm = ''; // Estado para armazenar o termo de busca

	function toggleSearch() {
		showSearchBar = !showSearchBar;
	}
	const showModalAction = () =>
    showModal({ component: AddUserModal, props: { onClose: hideModal } });

	
	const filter = (/** @type { {id: number; role: string; name: string}[]} */ data, /** @type {any}*/ value) => {
		const normalizedValue = removeAccents(value.toLowerCase());

	return data.filter(
		(d) =>
			d.id === parseInt(value) ||
			removeAccents(d.role.toLowerCase()).includes(normalizedValue) ||
			removeAccents(d.name.toLowerCase()).includes(normalizedValue)
	);
};
</script>

<TablePage {headers} title="Funções">
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

	<svelte:fragment slot="table-content">
		{#each data as user}
			<tr>
				<td>{user.id}</td>
				<td><Fa icon={user.photo} /></td>
				<td>{user.name}</td>
				<td>{user.role}</td>
				<td>{user.numClasses}</td>
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
