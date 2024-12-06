<script>
	import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
	import { IconButton, SearchBar } from '$lib';
	import TablePage from '../TablePage.svelte';

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
</script>

<TablePage {headers} title="Funções">
	<span class="table-header-buttons" slot="header-content">
		<IconButton
			icon={faPlus}
			iconData={{ color: 'var(--primary-color-light)', size: 'lg', scale: '1.5' }}
		/>

		<IconButton
			icon={faSearch}
			iconData={{ color: 'var(--primary-color-light)', size: 'lg', scale: '1.5' }}
			on:click={() => (showSearchBar = !showSearchBar)}
		/>
	</span>

	<svelte:fragment slot="header-searchbar">
		{#if showSearchBar}
			<SearchBar bind:data {filter} hint="Pesquisar..." expanded />
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
