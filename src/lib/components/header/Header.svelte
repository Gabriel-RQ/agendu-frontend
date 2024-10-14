<script>
	let isOpen = false; // Estado do menu (aberto ou fechado)

	const toggleMenu = () => {
		isOpen = !isOpen; // Alterna o estado do menu
	};
</script>

<header class="header">
	<h1>Us Cria de Seberi</h1>
	<button class="menu-toggle" on:click={toggleMenu} aria-label="Toggle menu"> ☰ </button>
	<nav class={isOpen ? 'open' : 'closed'}>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">Sobre</a></li>
			<li><a href="/contact">Contato</a></li>
		</ul>
	</nav>
</header>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 20px;
		background-color: #6fb267;
	}

	h1 {
		margin: 0;
		font-size: 1.5rem;
	}

	.menu-toggle {
		background: none;
		border: none;
		font-size: 1.5rem;
		cursor: pointer;
	}

	nav {
		display: none;
	}

	/* Menu aberto */
	nav.open {
		display: block;
	}

	/* Estilização do menu para dispositivos móveis */
	@media (max-width: 768px) {
		nav ul {
			list-style: none;
			padding: 0;
			margin: 0;
			background-color: #fff;
			position: absolute;
			top: 50px;
			right: 20px;
			box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
			width: 200px;
		}

		nav ul li {
			border-bottom: 1px solid #ccc;
		}

		nav ul li a {
			display: block;
			padding: 10px 15px;
			color: #333;
			text-decoration: none;
		}

		nav ul li a:hover {
			background-color: #f0f0f0;
		}
	}

	/* Estilização do menu para telas maiores */
	@media (min-width: 769px) {
		nav {
			display: flex;
		}

		nav ul {
			display: flex;
			gap: 20px;
		}
	}
</style>
