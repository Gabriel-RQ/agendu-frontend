<script>
	import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
	import { IconButton } from '$lib';

	const roles = [
		{ id: 1, name: 'Professor' },
		{ id: 2, name: 'Administrador' }
	];
</script>

<section class="full-height container">
	<div class="roles text-black">
		<header>
			<h1>Funções</h1>
			<span class="header-buttons">
				<IconButton
					icon={faPlus}
					iconData={{ color: 'var(--primary-color-light)', size: 'lg', scale: '1.25' }}
				/>

				<IconButton
					icon={faSearch}
					iconData={{ color: 'var(--primary-color-light)', size: 'lg', scale: '1.25' }}
				/>
			</span>
		</header>

		<table class="full-width">
			<thead>
				<tr>
					<th>N°</th>
					<th>Função</th>
				</tr>
			</thead>

			<tbody>
				{#each roles as role}
					<tr>
						<td>{role.id}</td>
						<td>{role.name}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>

<style>
	.roles {
		/* box-shadow: #000 0px 0px 10px -5px; */
		border-radius: 1rem;
		padding: 0.75rem;
	}

	header {
		align-items: center;
		display: flex;
		justify-content: space-between;
		margin-bottom: 1rem;
	}

	.header-buttons {
		display: flex;
		gap: 1.25rem;
	}

	table {
		table-layout: fixed;
		text-align: left;
	}

	thead {
		background: #eef3f7;
		height: 2rem;
	}

	th {
		padding: 0.75rem 0.5rem;
	}

	td {
		padding: 0.5rem;
	}

	tr:hover {
		background-color: #f1f1f1;
	}
</style>
