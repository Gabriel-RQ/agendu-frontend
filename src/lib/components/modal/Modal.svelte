<script>
	import { scale } from 'svelte/transition';

	let className = '';
	export { className as class };
	export let open = false;
	export let expand = false;
</script>

<!-- TODO: Garantir que o foco nunca saia do modal! -->

<section class="cover"></section>

<dialog class="{className} {expand ? 'expanded' : ''}" {open} in:scale={{ duration: 250 }}>
	<slot />
</dialog>

<style>
	dialog {
		border-radius: 12px;
		left: 50%;
		padding: 1.5rem;
		top: 50%;
		transform: translate(-50%, -50%);
		max-height: 90vh;
		overflow-y: scroll;
	}

	dialog,
	.cover {
		position: fixed;
		z-index: 10;
	}

	.cover {
		background: rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(3px);
		height: 100vh;
		width: 100vw;
	}

	@media screen and (max-width: 992px) {
		dialog.expanded {
			min-width: 100vw;
			min-height: 100vh;
		}
	}

	@media screen and (min-width: 992px) {
		dialog {
			border-radius: 12px;
			box-shadow: #000 0px 0px 10px -5px;
			height: fit-content;
			min-width: 35vw;
			padding: 2rem;
		}
	}
</style>
