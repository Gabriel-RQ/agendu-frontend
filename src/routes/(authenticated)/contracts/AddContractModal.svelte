<script>
	import { faClose } from '@fortawesome/free-solid-svg-icons';
	import { Select } from '$lib';
	import { Modal } from '$lib/components/modal';
	import { Button, IconButton, Input } from '$lib';

	/** @type {VoidFunction} */
	export let onClose;
	/** @type {boolean} */
	export let expand = false;
</script>

<Modal class="add-role-modal" open {expand}>
	<header>
		<h2>Novo contrato</h2>
		<IconButton
			class="close-btn"
			icon={faClose}
			iconData={{ size: 'lg', scale: '1.5', color: 'var(--text-black)' }}
			on:click={onClose}
		/>
	</header>

	<section>
		<form class="flex-column" action="">
			<div class="flex-column input-wrapper">
				<label class="font-medium text-1_15" for="teacher">Professor</label>
				<Select
					id="professor"
					name="professor"
					class="select-field"
					options={[
						{ label: 'Regina', value: 'regina' },
						{ label: 'Maria', value: 'maria' }
					]}
				/>
				<label class="font-medium text-1_15" for="class">Turma</label>
				<Select
					id="turma"
					name="turma"
					class="select-field"
					options={[
						{ label: 'Alfabetização', value: 'alfabetizacao' },
						{ label: 'Estimulção Precoce', value: 'estimulacao-precoce' }
					]}
				/>
				<label class="font-medium text-1_15" for="active">Atividade</label>
				<Input
					id="resource-name"
					name="resource-name"
					type="text"
					placeholder="Informe o nome da atividade..."
					expanded
				/>
				<label class="font-medium text-1_15" for="resources">Recurso</label>
				<Select
					id="recurso"
					name="recurso"
					class="select-field"
					options={[
						{ label: 'Ginásio', value: 'ginasio' },
						{ label: 'Laboratório Informática', value: 'laboratorio-informatica' }
					]}
				/>
				<label class="font-medium text-1_15" for="workload">CH</label>
				<Input type="number" id="workload" name="workload" min={0} />
				<label class="font-medium text-1_15" for="preference">Preferência</label>
				<Select
					id="preference"
					name="preference"
					class="select-field"
					options={[
						{ label: 'Separar', value: 'separar' },
						{ label: 'Geminar', value: 'geminar' }
					]}
				/>
			</div>

			<Button class="font-medium text-1_15" expanded type="submit">Salvar</Button>
		</form>
	</section>
</Modal>

<style>
	:global(.add-role-modal) {
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
