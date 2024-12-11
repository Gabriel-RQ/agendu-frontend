<script>
	import { faSearch, faPlus, faAdd } from '@fortawesome/free-solid-svg-icons';
	import { Button, IconButton, SearchBar } from '$lib';
	import TablePage from '../TablePage.svelte';
	import AddRoleModal from './AddRoleModal.svelte';
	import { hideModal, showModal } from '$lib/components/modal';
	import Fa from 'svelte-fa';

	const headers = ['N°', 'Função'];

	let data = [
		{ id: 1, role: 'Professor' },
		{ id: 2, role: 'Administrador' }
	];

	let showSearchBar = false;

	const filter = (/** @type { {id: number; role: string}[]} */ data, /** @type {any}*/ value) =>
		data.filter(
			(d) => d.id === parseInt(value) || d.role.toLowerCase().includes(value.toLowerCase())
		);

	const showModalAction = () =>
		showModal({ component: AddRoleModal, props: { onClose: hideModal } });
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
		{#each data as role}
			<tr>
				<td>{role.id}</td>
				<td>{role.role}</td>
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
