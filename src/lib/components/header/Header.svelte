<script>
	let userName = 'Nome do Usuário';
	let currentPage = 'Nome da página atual';

	function openMenu() {
		// lógica para abrir o menu lateral.
		console.log('Menu aberto');
	}

	function openProfileOptions() {
		// lógica para abrir as opções de perfil.
		console.log('Opções de perfil abertas');
	}
</script>

<header>
	<!-- Botão de menu -->
	<button class="menu-button" on:click={openMenu}> ☰ </button>

	<!-- Logo e nome da página -->
	<div class="logo">
		<img src="src\lib\images\logo_agendu.png" alt="Logo do Agendu" />
		<div class="user-info">
			<p>{userName}</p>
			<small>{currentPage}</small>
		</div>
	</div>

	<!-- Botão de perfil -->
	<button class="profile-button" on:click={openProfileOptions}>
		<img src="src\lib\images\foto_perfil_dummy.png" alt="Foto de perfil" />
	</button>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
		background-color: #6fb267;
		color: white;
		font-family: Arial, sans-serif;
	}

	.menu-button {
		background: none;
		border: none;
		color: white;
		font-size: 24px;
		cursor: pointer;
	}

	.logo {
		display: flex;
		align-items: center;
	}

	.logo img {
		width: 30px;
		margin-right: 10px;
	}

	.user-info {
		flex-grow: 1;
		text-align: left;
	}

	.profile-button {
		background: none;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
	}

	.profile-button img {
		width: 30px;
		border-radius: 50%;
	}
</style>
