<script>
	import TablePage from '../TablePage.svelte';

	let headers = ['N°', 'Nome', 'Professor', 'Atividades', 'Carga Horária'];
	let title = 'Turmas';

	let classes = [
		{
			id: 1,
			name: 'Alfabetização',
			professor: 'Regina, Taísa, Ana',
			activities: 'Aula, Ed, Física, Informática',
			hours: '20h'
		}
		// ...outros objetos
	];
</script>

<TablePage {headers} {title}>
	<!-- Botão de Adicionar -->
	<svelte:fragment slot="header-content">
		<button class="add-button">+ Adicionar</button>
	</svelte:fragment>

	<!-- Barra de pesquisa -->
	<svelte:fragment slot="header-searchbar">
		<input type="search" placeholder="Pesquisar..." />
	</svelte:fragment>

	<!-- Conteúdo da tabela -->
	<svelte:fragment slot="table-content">
		{#each classes as { id, name, professor, activities, hours }}
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
	.add-button {
		background-color: #4caf50;
		color: white;
		border: none;
		border-radius: 4px;
		padding: 8px 16px;
		cursor: pointer;
	}

	.add-button:hover {
		background-color: #45a049;
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
</style>
