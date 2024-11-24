<script>
	import Fa from 'svelte-fa';

	/** @type {string}*/
	let className = '';
	export { className as class };
	/** @type {boolean}*/
	export let disabled = false;
	/** @type {string} */
	export let href = '';
	/** @type {import('@fortawesome/free-solid-svg-icons').IconDefinition} */
	export let icon;
	/** @type { { color?: string, size?: import("svelte-fa").IconSize, scale?: string }? }*/
	export let iconData = null;

	/** @type {string} */
	let buttonClass = `${className} ${disabled ? 'disabled' : ''}`;
</script>

{#if href}
	<a class={buttonClass} {href} on:click on:keydown on:keyup>
		<Fa {icon} {...iconData} />
	</a>
{:else}
	<button class={buttonClass} on:click on:keydown on:keyup>
		<Fa {icon} {...iconData} />
	</button>
{/if}

<style>
	button,
	a {
		background: none;
		border: none;
		cursor: pointer;
		font-size: inherit;
		padding: 0;
	}
</style>
