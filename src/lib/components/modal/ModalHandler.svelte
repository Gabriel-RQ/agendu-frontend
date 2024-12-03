<script>
	import { modalStack } from './modal';
</script>

{#if !$modalStack.isEmpty()}
	<svelte:component this={$modalStack.peek().component} {...$modalStack.peek().props} />
{/if}
