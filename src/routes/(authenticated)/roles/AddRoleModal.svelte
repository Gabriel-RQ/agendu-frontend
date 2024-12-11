<script>
	import { faClose } from '@fortawesome/free-solid-svg-icons';
	import { Modal } from '$lib/components/modal';
	import { Button, IconButton, Input } from '$lib';

	/** @type {VoidFunction} */
	export let onClose;
</script>

<Modal class="add-role-modal" open>
	<header>
		<h2>Cadastro de função</h2>
		<IconButton
			class="close-btn"
			icon={faClose}
			iconData={{ size: 'lg', scale: '1.5', color: 'var(--text-black)' }}
			on:click={onClose}
		/>
	</header>

	<section class="container">
		<form class="flex-column" action="">
			<div class="flex-column input-wrapper">
				<label class="font-medium text-1_15" for="description">Descrição</label>
				<Input
					id="description"
					name="description"
					type="text"
					placeholder="Informe a descrição de uma função..."
					expanded
				/>
			</div>

			<Button class="font-medium text-1_15" expanded type="submit">Salvar Cadastro</Button>
		</form>
	</section>
</Modal>

<style>
	header {
		display: grid;
		grid-template-columns: auto 1fr auto;
		justify-content: center;
	}

	h2 {
		grid-column: 2;
		text-align: center;
	}

	form {
		gap: 2.5rem;
	}

	.input-wrapper {
		gap: 0.75rem;
	}

	@media screen and (min-width: 992px) {
	}
</style>
