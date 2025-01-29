<script>
	import { page } from '$app/stores';
	import logoAgendu from '../../images/logo_agendu.png';
	import profileIcon from '../../images/foto_perfil_dummy.png';
	import SideNav from './SideNav.svelte';
	import { IconButton } from '$lib';
	import {
		faBars,
		faBlackboard,
		faCalendar,
		faGlobe,
		faHome,
		faUsers,
		faListCheck,
		faSchool,
		faFileContract,
		faBook
	} from '@fortawesome/free-solid-svg-icons';

	let userName = 'Nome do Usuário';
	$: currentPage = $page.route.id?.split('/').pop() ?? '';
	let isMenuOpen = false;

	//Mapeamento das rotas para os nomes da páginas - adicionar mais conforme  necessário

	/** @type { {[key: string] : {name: string; icon: import('@fortawesome/free-solid-svg-icons').IconDefinition}} }*/
	const pageNames = {
		home: { name: 'Página Inicial', icon: faHome },
		timeline: { name: 'Cronograma', icon: faCalendar },
		users: { name: 'Usuários', icon: faUsers },
		contracts: { name: 'Contratos', icon: faFileContract },
		roles: { name: 'Funções', icon: faListCheck },
		public: { name: 'Planilhas Públicas', icon: faGlobe },
		classes: { name: 'Turmas', icon: faBlackboard },
		resources: { name: 'Recursos', icon: faSchool },
		activities: { name: 'Atividades', icon: faBook }
	};

	function openMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function openProfileOptions() {
		console.log('Opções de perfil abertas');
	}
</script>

<header class="text-white">
	<IconButton
		icon={faBars}
		iconData={{ size: 'lg', scale: '1.15', color: 'var(--text-white)' }}
		on:click={openMenu}
	/>

	<div class="logo">
		<img src={logoAgendu} alt="Logo do Agendu" />
		<div class="user-info">
			<p>{userName}</p>
			<small>{pageNames[currentPage].name}</small>
		</div>
	</div>

	<button class="profile-button" on:click={openProfileOptions}>
		<img src={profileIcon} alt="Foto de perfil" />
	</button>
</header>

<SideNav
	class="sidenav-header"
	open={isMenuOpen}
	{currentPage}
	{pageNames}
	onClose={() => (isMenuOpen = false)}
/>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
		background-color: var(--primary-color-light);
		font-family: Arial, sans-serif;
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

	@media screen and (min-width: 992px) {
		header {
			display: none;
		}
	}
</style>
