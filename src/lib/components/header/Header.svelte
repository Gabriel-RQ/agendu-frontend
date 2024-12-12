<script>
	import { page } from '$app/stores';
	import logoAgendu from '../../images/logo_agendu.png';
	import { clickOutside } from '$lib/util'; 
	import {fly} from 'svelte/transition';


	let userName = 'Nome do Usuário';
	$: currentPage = $page.route.id?.split('/').pop() ?? '';
	let isMenuOpen = false;

	//Mapeamento das rotas para os nomes da páginas - adicionar mais conforme  necessário

	/** @type { {[key: string] : string} }*/
	const pageNames = {
		home: 'Página Inicial',
		timeline: 'Cronograma',
		roles: 'Funções',
		pulic: 'Planilhas Públicas',
		classes: 'Turmas',
		users: 'Usuários',		
	};

	function openMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function openProfileOptions() {
		console.log('Opções de perfil abertas');
	}
</script>

<header class="text-white">
	<button class="menu-button" on:click={openMenu}> ☰ </button>

	<div class="logo">
		<img src={logoAgendu} alt="Logo do Agendu" />
		<div class="user-info">
			<p>{userName}</p>
			<small>{pageNames[currentPage]}</small>
		</div>
	</div>

	<button class="profile-button" on:click={openProfileOptions}>
		<img src="src/lib/images/foto_perfil_dummy.png" alt="Foto de perfil" />
	</button>
</header>

{#key isMenuOpen}
<aside 
	class="sidebar {isMenuOpen ? 'open' : ''} text-1_15"
	use:clickOutside on:clickOutside={() => (isMenuOpen = false)}
	transition:fly="{{ x: -300, duration: 300 }}">

	<button class="close-btn" on:click={openMenu}>×</button>
	<nav>
		<ul>
			{#each Object.entries(pageNames) as [key, value]}
				<li><a class={currentPage === key ? 'text-green' : 'text-black'} href={key}>{value}</a></li>
			{/each}
		</ul>
	</nav>
</aside>
{/key}

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
		background-color: var(--primary-color-light);
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
		/* color: #333; */
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
		/* color: #333; */
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
		text-decoration: none;
		/* font-size: 18px; */
	}
</style>
