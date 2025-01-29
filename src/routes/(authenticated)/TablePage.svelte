<script>
	import Table from './Table.svelte';

	/** @type { string[] } */
	export let headers;
	/** @type {string} */
	export let title;
</script>

<section class="full-height container text-black">
	<div class="inner-container full-height">
		<header>
			<div class="wrapper">
				<h1>{title}</h1>
				<slot name="header-content" />
			</div>
			<slot name="header-searchbar" />
		</header>

		<div class="table-wrapper">
			<Table {headers}>
				<slot name="table-content" />
			</Table>
		</div>
	</div>
</section>

<style>
	.inner-container {
		/* display: contents; */
		display: grid;
		grid-template-rows: auto 1fr;
	}

	header {
		margin-bottom: 1rem;
	}

	header .wrapper {
		align-items: center;
		display: flex;
		justify-content: space-between;
		margin-bottom: 1rem;
	}

	.table-wrapper {
		overflow: auto;
	}

	@media screen and (min-width: 992px) {
		.inner-container {
			box-shadow: #000 0px 0px 10px -5px;
			border-radius: 1rem;
			padding: 2rem;
		}
	}
</style>
