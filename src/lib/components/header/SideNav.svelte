<script>
	import { IconButton } from '$lib';
	import { clickOutside } from '$lib/util';
	import profileIcon from '../../images/foto_perfil_dummy.png';
	import { faClose } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { fly } from 'svelte/transition';

	let className = '';
	export { className as class };
	export let open = false;
	/** @type {string} */
	export let currentPage;
	/** @type { {[key: string] : {name: string; icon: import('@fortawesome/free-solid-svg-icons').IconDefinition}} }*/
	export let pageNames;
	/** @type { VoidFunction } */
	export let onClose;
</script>

{#key open}
	<aside
		class="text-1_25 {className} {open ? 'open' : ''}"
		use:clickOutside
		on:clickOutside={onClose}
		transition:fly={{ x: -300, duration: 300 }}
	>
		<header>
			<div class="hidden profile-icon">
				<img src={profileIcon} alt="Foto de perfil" />
				<h3 class="text-single font-medium">Gabriela</h3>
			</div>
			<IconButton
				class="sidenav-close-btn"
				icon={faClose}
				iconData={{ size: 'lg', scale: '1.15', color: 'var(--text-white)' }}
				on:click={onClose}
			/>
		</header>

		<nav>
			<ul class="flex-column">
				{#each Object.entries(pageNames) as [page, data]}
					<li class={currentPage == page ? 'current-page' : ''}>
						<a class="text-white" href={page}>
							<Fa icon={data.icon} size="sm" />
							{data.name}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</aside>
{/key}

<style>
	aside {
		background: var(--primary-color-light);
		box-shadow: rgba(0, 0, 0, 0.5) 0 0 15px 3px;
		display: none;
		height: 100vh;
		left: 0;
		position: fixed;
		top: 0;
		z-index: 5;
	}

	aside.open {
		display: inline-block;
	}

	header {
		display: flex;
		justify-content: end;
		padding: 1rem 1.5rem;
	}

	ul {
		list-style-type: none;
		gap: 0.5rem;
	}

	li {
		padding: 0.25rem 1.5rem;
		transition: background 300ms ease-out;
	}

	li.current-page,
	li:hover {
		background: var(--primary-color-dark);
	}

	a :global(.svelte-fa) {
		margin-right: 0.5rem;
	}

	@media screen and (min-width: 992px) {
		header {
			display: flex;
			justify-content: center;
		}
		.profile-icon {
			display: grid;
			place-items: center;
		}
		img {
			border-radius: 100%;
			height: 75%;
		}

		aside {
			box-shadow: none;
			display: inline-block;
			position: relative;
		}

		:global(.sidenav-close-btn) {
			display: none;
		}
	}
</style>
