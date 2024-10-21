<script>
	import Header from '$lib/components/header/Header.svelte';
</script>

<Header />
<div class="container">
	<!-- Área de navegação principal em cards -->
	<div class="grid">
		<div class="card">
			<i class="icon">📅</i>
			<!-- Ícone pode ser ajustado para usar FontAwesome ou outra biblioteca -->
			Quadro de horários
		</div>
		<div class="card">
			<i class="icon">⏰</i>
			Períodos
		</div>
		<div class="card">
			<i class="icon">👨‍🏫</i>
			Professores
		</div>
		<div class="card">
			<i class="icon">📊</i>
			Planilhas públicas
		</div>
		<div class="card">
			<i class="icon">✅</i>
			Atividades
		</div>
		<div class="card">
			<i class="icon">📚</i>
			Turmas
		</div>
	</div>

	<!-- Rodapé, que posso componentizar-->
	<div class="footer">
		Bem-vindo ao <span style="font-style: italic;">Agendu</span>
		<small>APAE FW (V1.0 08/12/2023)</small>
		<div>
			<a href="#" style="color: #6db56f;">Ajuda e suporte</a>
		</div>
	</div>
</div>

<style>
	.container {
		padding: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #f8f9fa;
	}

	.grid {
		display: grid;
		gap: 10px;
		width: 100%;
		max-width: 400px; /* Limita a largura máxima dos cards */
		margin: 0 auto; /* Centraliza os cards em telas maiores */
	}

	.card {
		background-color: #6db56f;
		color: white;
		text-align: center;
		padding: 15px;
		border-radius: 10px;
		box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 14px;
	}

	.card i {
		font-size: 24px;
		margin-bottom: 10px;
	}

	.footer {
		background-color: white;
		padding: 20px;
		text-align: center;
		color: #6db56f;
		font-size: 18px;
		font-weight: bold;
	}

	.footer small {
		display: block;
		font-size: 12px;
		color: #ccc;
		margin-top: 10px;
	}

	/* Ajuste para mobile */
	@media (max-width: 600px) {
		.grid {
			max-width: 100%; /* Para mobile, os cards ocupam a largura total */
		}
	}
</style>
