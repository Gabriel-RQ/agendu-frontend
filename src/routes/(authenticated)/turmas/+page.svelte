<script>
	let classes = [
		{
			id: 1,
			name: 'Alfabetização',
			professor: 'Regina, Taísa, Ana',
			activities: 'Aula, Ed, Física, Informática',
			hours: '20h'
		},
		{
			id: 2,
			name: 'EJA I',
			professor: 'Regina, Taísa, Ana...',
			activities: 'Português, Matemática',
			hours: '20h'
		},
		{
			id: 3,
			name: 'EJA II',
			professor: 'Sibeli',
			activities: 'Português, Matemática',
			hours: '20h'
		},
		{
			id: 4,
			name: 'EJA III',
			professor: 'Armandinho da Silva',
			activities: 'Português, Matemática',
			hours: '120H'
		},
		{
			id: 5,
			name: 'AEE anos finais',
			professor: 'Armandinho da Silva',
			activities: 'Português, Matemática',
			hours: '120H'
		},
		{
			id: 6,
			name: 'AEE infantil',
			professor: 'Armandinho da Silva',
			activities: 'Português, Matemática',
			hours: '120H'
		}
	];
</script>

<section>
	<div class="header">
		<h1>Turmas</h1>
		<div class="actions">
			<button class="add-button">+ Adicionar</button>
			<input type="search" placeholder="Pesquisar..." />
		</div>
	</div>
	<table>
		<thead>
			<tr>
				<th>N°</th>
				<th>Nome</th>
				<th>Professor</th>
				<th>Atividades</th>
				<th>Carga Horária</th>
			</tr>
		</thead>
		<tbody>
			{#each classes as { id, name, professor, activities, hours }}
				<tr>
					<td>{id}</td>
					<td>{name}</td>
					<td>{professor}</td>
					<td>{activities}</td>
					<td><span class="hours">{hours}</span></td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>

<style>
	section {
		padding: 16px;
		font-family: Arial, sans-serif;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 16px;
	}

	.header h1 {
		font-size: 1.5rem;
	}

	.actions {
		display: flex;
		gap: 8px;
	}

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

	input[type='search'] {
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 4px;
		width: 200px;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		margin-top: 16px;
		color: black;
	}

	th,
	td {
		text-align: left;
		padding: 8px;
		border-bottom: 1px solid #ddd;
	}

	th {
		background-color: #f4f4f4;
		font-weight: bold;
	}

	tr:hover {
		background-color: #f1f1f1;
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

	/* responsivo */
	@media (max-width: 768px) {
		.header {
			flex-direction: column;
			align-items: flex-start;
			gap: 8px;
		}

		input[type='search'] {
			width: 100%;
		}

		table {
			font-size: 14px;
		}

		table,
		thead,
		tbody,
		th,
		td,
		tr {
			display: block;
			width: 100%;
		}

		thead tr {
			display: none;
		}

		tr {
			margin-bottom: 16px;
			border-bottom: 1px solid #ddd;
		}

		td {
			display: flex;
			justify-content: space-between;
			padding: 8px;
			border-bottom: 1px solid #f4f4f4;
		}

		td::before {
			content: attr(data-label);
			font-weight: bold;
			text-transform: uppercase;
			color: #333;
		}

		.hours {
			margin-left: auto;
		}
	}
</style>
