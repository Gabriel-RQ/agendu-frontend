<script>
	/** @type { string[] } */
	export let headers = [];
	let className = '';
	export { className as class };
</script>

<table class="full-width table {className}">
	<thead>
		<tr>
			{#each headers as header}
				<th>{header}</th>
			{/each}
		</tr>
	</thead>

	<tbody>
		<slot />
	</tbody>
</table>

<style>
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

	:global(td) {
		padding: 0.5rem;
	}

	:global(.table tr):hover,
	:global(.table tr):active {
		background-color: #f1f1f1;
	}
</style>
