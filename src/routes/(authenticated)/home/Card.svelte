<script>
	import { Fa } from 'svelte-fa';

	/** @type {import('@fortawesome/free-solid-svg-icons').IconDefinition}*/
	export let icon;
	/** @type { string }*/
	export let title;
	/** @type {string} */
	export let link = "#";

</script>

<a href={link} class="card flex-column-center">
	<Fa {icon} size="lg" scale="2" />
	<p class="font-medium">{title}</p>
</a>

<style>
	.card {
		background-color: var(--primary-color-light);
		box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		color: white;
		font-size: 14px;
		gap: 1rem;
		padding: 20px;
		text-align: center;
	}

	@media screen and (min-width: 992px) {
		.card {
			font-size: 18px;
		}
	}
</style>
