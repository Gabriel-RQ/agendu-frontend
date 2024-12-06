<script>
	import Input from './Input.svelte';
	import Fa from 'svelte-fa';
	import { faSearch } from '@fortawesome/free-solid-svg-icons';

	/** @type {string} */
	let className = '';
	export { className as class };
	const type = 'text';
	/** @type {string?} */
	export let value = null;
	/** @type {string?} */
	let placeholder = null;
	export { placeholder as hint };
	/** @type {string?} */
	export let name = null;
	/** @type {string?} */
	export let id = null;
	/** @type {boolean} */
	export let disabled = false;
	/** @type {boolean} */
	export let expanded = false;
	/** @type {any[]} */
	export let data;

	const dataBackup = data;

	/** @type {(data: any[], value: any) => any[]} */
	export let filter;

	function onInput(/** @type Event */ e) {
		if (!value) data = dataBackup;
		else data = filter(data, value);
	}
</script>

<Input
	class="searchbar {className}"
	{type}
	bind:value
	{placeholder}
	{name}
	{id}
	{disabled}
	{expanded}
	on:input={onInput}
	on:blur
	on:change
	on:click
	on:keypress
	on:keyup
>
	<Fa slot="icon" icon={faSearch} size="lg" scale="1" color="var(--icon-color)" />
</Input>
