<script>
	import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
	import { IconButton, SearchBar } from '$lib';
	import TablePage from '../TablePage.svelte';

	const headers = ['Nº', 'Tempo', 'Dia', 'Turma'];

	let data = [
		{ id: 2, periods: '' },
        { id: 3, periods: ''},
        { id: 4, periods: ''},
        { id: 5, periods:'' },
        { id: 6, periods:'' },
        { id: 7, periods:'' },
        { id: 8, periods:'' },
        { id: 9, periods:'' },
        { id: 10, periods:'' },
        { id: 11, periods:'' },
        { id: 12, periods:'' }
    ];

	let showSearchBar = false;

	const filter = (/** @type { {id: number; role: string}[]} */ data, /** @type {any}*/ value) =>
		data.filter(
			(d) => d.id === parseInt(value) || d.role.toLowerCase().includes(value.toLowerCase())
		);
</script>

<TablePage {headers} title="Periodos">
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
		{#each data as periods}
			<tr>
				<td>{periods.id}</td>
				<td>{periods.periods}</td>
			</tr>
		{/each}
	</svelte:fragment>
</TablePage>
