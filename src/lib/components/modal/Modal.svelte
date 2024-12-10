<script>
	import { scale } from 'svelte/transition';
	import { hideModal } from './modal';

	let className = '';
	export { className as class };
	export let open = false;
</script>

<dialog class="{className} full-width full-height container" {open} in:scale={{ duration: 250 }}>
	<button on:click={hideModal}>X</button>
	<slot />
</dialog>

<style>
	dialog {
		position: fixed;
		z-index: 10;
	}

	@media screen and (min-width: 992px) {
		dialog {
			border-radius: 12px;
			box-shadow: #000 0px 0px 10px -5px;
			height: fit-content;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			width: fit-content;
		}
	}
</style>
