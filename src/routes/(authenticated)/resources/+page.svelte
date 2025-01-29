<script>
	import { faSearch, faPlus, faAdd } from '@fortawesome/free-solid-svg-icons';
	import { Button, IconButton, SearchBar } from '$lib';
	import TablePage from '../TablePage.svelte';
	import AddResourceModal from './AddResourceModal.svelte';
	import { hideModal, showModal } from '$lib/components/modal';
	import Fa from 'svelte-fa';

	/** @type {import('./$types').PageData} */
	export let data;
	/** @type {import('./$types').ActionData} */
	export let form;

	// Cabeçalhos da tabela
	const headers = ['N°', 'Recurso'];

	// Dados iniciais da tabela
	$: resources = data.resources ?? [];

	// Estado para mostrar/esconder a barra de pesquisa
	let showSearchBar = false;

	// Função de filtro para a pesquisa
	const filter = (/** @type { {id: number; name: string}[]} */ data, /** @type {any} */ value) =>
		data.filter(
			(d) => d.id === parseInt(value) || d.name.toLowerCase().includes(value.toLowerCase())
		);

	// Ação para exibir o modal de adicionar recurso
	const showModalAction = () =>
		showModal({
			component: AddResourceModal,
			props: {
				onClose: hideModal
			}
		});
</script>

<svelte:head>
	<title>Agendu | Recursos</title>
</svelte:head>

<TablePage {headers} title="Recursos">
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

		<SearchBar class="hidden" bind:data={data.resources} {filter} hint="Pesquisar..." expanded />
	</span>

	<svelte:fragment slot="header-searchbar">
		{#if showSearchBar}
			<SearchBar
				class="mobile-searchbar"
				bind:data={data.resources}
				{filter}
				hint="Pesquisar..."
				expanded
			/>
		{/if}
	</svelte:fragment>

	<svelte:fragment slot="table-content">
		{#each resources as resource, id}
			<tr>
				<td>{id + 1}</td>
				<td>{resource.name}</td>
			</tr>
		{/each}
	</svelte:fragment>
</TablePage>

<style>
	:global(.hide-on-mobile.new-btn) {
		display: none;
	}

	@media screen and (min-width: 992px) {
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
