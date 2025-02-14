<script>
	import { faClose } from '@fortawesome/free-solid-svg-icons';
	import { Modal } from '$lib/components/modal';
	import { Button, IconButton, Input } from '$lib';
	import { enhance } from '$app/forms';

	/** @type {VoidFunction} */
	export let onClose;
	/** @type {boolean} */
	export let expand = false;
</script>

<Modal class="add-class-modal" open {expand}>
	<header>
		<h2>Cadastro de Turmas</h2>
		<IconButton
			class="close-btn"
			icon={faClose}
			iconData={{ size: 'lg', scale: '1.5', color: 'var(--text-black)' }}
			on:click={onClose}
		/>
	</header>

	<section>
		<form class="flex-column" action="?/classes" method="post" use:enhance>
			<div class="flex-column input-wrapper">
				<label class="font-medium text-1_15" for="resource-name">Nome da Turma</label>
				<Input
					id="class-name"
					name="class-name"
					type="text"
					placeholder="Informe o nome da turma..."
					expanded
				/>
			</div>

			<Button class="font-medium text-1_15" expanded type="submit">Salvar Cadastro</Button>
		</form>
	</section>
</Modal>

<style>
	:global(.add-class-modal) {
		min-width: 85vw;
	}

	header {
		display: grid;
		grid-template-columns: auto 1fr auto;
		justify-content: center;
	}

	h2 {
		grid-column: 2;
		text-align: center;
	}

	section {
		padding: 2rem 0.5rem;
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
