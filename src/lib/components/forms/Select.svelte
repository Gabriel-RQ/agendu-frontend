<script>
	import Fa from 'svelte-fa';
	import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

	/** @type {string} */
	let className = '';
	export { className as class };
	/** @type {string?} */
	export let value = null;
	/** @type {string?} */
	export let placeholder = null; // Pode ser utilizado em um <option> inicial
	/** @type {string?} */
	export let name = null;
	/** @type {string?} */
	export let id = null;
	/** @type {boolean} */
	export let disabled = false;
	/** @type {boolean} */
	export let expanded = false;
	/** @type {{ value: string, label: string }[]} */
	export let options = [];

	let selectClass = `select ${className} ${expanded ? 'expanded' : ''}`;
</script>

<span class="wrapper {expanded ? 'expanded' : ''}">
	<select
		class={selectClass}
		{id}
		{name}
		bind:value
		{disabled}
		on:blur
		on:change
		on:click
		on:focus
		on:keydown
	>
		{#if placeholder}
			<option value="" disabled selected>{placeholder}</option>
		{/if}
		{#each options as { value: optionValue, label }}
			<option value={optionValue}>{label}</option>
		{/each}
	</select>
	<span class="icon">
		<Fa icon={faChevronDown} />
	</span>
</span>

<style>
	.wrapper {
		--icon-color: var(--primary-color-dark);
		--color: 94, 94, 94;
		position: relative;
		color: var(--color);
	}

	select {
		background: transparent;
		border: rgba(var(--color), 0.5) solid 1px;
		border-radius: 10px;
		outline: none;
		padding: 0.75rem 1rem;
		height: 62px;
		width: 100%;
		appearance: none;
		cursor: pointer;
	}

	select:invalid {
		border-color: var(--text-red);
		color: var(--text-red);
	}

	select:focus {
		border-color: var(--primary-color);
		color: var(--primary-color);
	}

	.expanded {
		width: 100%;
	}

	.icon {
		position: absolute;
		right: 2rem;
		top: 50%;
		transform: translateY(-50%);
		pointer-events: none;
		color: var(--icon-color);
	}

	.wrapper:focus-within {
		--icon-color: var(--primary-color);
		color: var(--primary-color);
	}

	.wrapper:has(select:disabled) {
		color: rgb(var(--color));
	}

	.wrapper:has(select.hidden) :global(.icon) {
		display: none;
	}
</style>
