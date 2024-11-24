<script>
    import { Fa } from 'svelte-fa';

    /** @type {import('@fortawesome/free-solid-svg-icons').IconDefinition}*/
    export let icon;
    /** @type { string }*/
    export let title;
</script>

<div class="card flex-column-center">
    <Fa icon={icon} size="lg" scale="2" />
    <p>{title}</p>
</div>

<style>
    .card {
		background-color: #6db56f;
		box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		color: white;
		font-size: 14px;
        gap: 1rem;
		padding: 20px;
        text-align: center;
	}
</style>