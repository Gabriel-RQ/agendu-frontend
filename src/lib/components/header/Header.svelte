<script>
	import { page } from '$app/stores';

	let userName = 'Nome do Usuário';
	let currentPage = 'Nome da página atual';
	let isMenuOpen = false;

	//Mapeamento das rotas para os nomes da páginas - adicionar mais conforme  necessário
	const pageNames = {
		'/home#': 'Página Inicial',
		'/page1': 'Página 1',
		'/page2': 'Página 2',
		'/page3': 'Página 3'
	};

	//Atualiza o nome da página atual
	page.subscribe((value) => {
		currentPage = pageNames[value];
	});

	function openMenu() {
		isMenuOpen = !isMenuOpen;
		console.log(isMenuOpen ? 'Menu aberto' : 'Menu fechado');
	}

	function openProfileOptions() {
		console.log('Opções de perfil abertas');
	}
</script>

<header>
	<button class="menu-button" on:click={openMenu}> ☰ </button>

	<div class="logo">
		<img src="src/lib/images/logo_agendu.png" alt="Logo do Agendu" />
		<div class="user-info">
			<p>{userName}</p>
			<small>{currentPage}</small>
		</div>
	</div>

	<button class="profile-button" on:click={openProfileOptions}>
		<img src="src/lib/images/foto_perfil_dummy.png" alt="Foto de perfil" />
	</button>
</header>

<div class="sidebar {isMenuOpen ? 'open' : ''}">
	<button class="close-btn" on:click={openMenu}>×</button>
	<nav>
		<ul>
			<li><a href="#">Página 1</a></li>
			<li><a href="#">Página 2</a></li>
			<li><a href="#">Página 3</a></li>
			<li><a href="#">Configurações</a></li>
		</ul>
	</nav>
</div>

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

	.sidebar {
		position: fixed;
		top: 0;
		left: 0;
		width: 250px;
		height: 100%;
		background-color: #f0f0f0;
		color: #333;
		transform: translateX(-100%);
		transition: transform 0.3s ease;
		padding-top: 20px;
		box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
		z-index: 1000;
	}

	.sidebar.open {
		transform: translateX(0);
	}

	.close-btn {
		background: none;
		border: none;
		color: #333;
		font-size: 24px;
		position: absolute;
		top: 10px;
		right: 10px;
		cursor: pointer;
	}

	.sidebar nav ul {
		list-style-type: none;
		padding: 0;
		margin: 20px;
	}

	.sidebar nav ul li {
		margin: 20px 0;
	}

	.sidebar nav ul li a {
		color: #333;
		text-decoration: none;
		font-size: 18px;
	}
</style>
