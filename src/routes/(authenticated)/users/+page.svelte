<script>
    import Header from "$lib/components/header/Header.svelte";
    import { IconButton } from "$lib";
    import { faPlus, faSearch, faU } from "@fortawesome/free-solid-svg-icons";
	import { scale } from "svelte/transition";
	import { cubicInOut, cubicOut } from "svelte/easing";
    import {faUser} from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";


    const users = [
        { id: 1, foto:faUser, name: "Regina", cargo: "Diretora", turma: 1},
        { id: 2, foto:faUser, name: "Taísa", cargo: "Professora", turma: 2},
        { id: 3, foto:faUser, name: "Ana", cargo: "Professora", turma: 3}
        
    ];

    let showSearch = false; // Estado para controlar a exibição da caixa de busca
    let searchTerm = ""; // Estado para armazenar o termo de busca

    function toggleSearch() {
        showSearch = !showSearch;
    }
</script>

<section class="full-height container">
    <div class="roles text-black">
        <header>
            <h1>Usuários</h1>
            <span class="header-buttons">
                <IconButton
                icon= {faPlus}
                iconData= {{color: "var(--primary-color-light)", size: "lg", scale: "1.25"}}
                />
                <IconButton
                icon= {faSearch}
                iconData= {{color: "var(--primary-color-light)", size: "lg", scale: "1.25"}}
                on:click= {toggleSearch}
                />
            </span>
        </header>
            
            {#if showSearch}
                <div class="search-box"
                    transition:scale={{duration: 300, easing: cubicOut}}>
                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        bind:value= {searchTerm}
                    />
                </div>
            {/if}

        <table>
            <thead>
                <tr>
                    <th>N.º</th>
                    <th>FOTO</th>
                    <th>NOME</th>
                    <th>CARGO</th>
                    <th>N.º TURMAS</th>
                </tr>
            </thead>

            <tbody>
                {#each users as user}
                    <tr>
                        <td>{user.id}</td>
                        <td><Fa icon={user.foto}/></td>
                        <td>{user.name}</td>                         
                        <td>{user.cargo}</td>
                        <td>{user.turma}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</section>

<style>
    .roles {
        /* Epaçamento para versão mobile */
        /* box-shadow: #000 0px 0px 10px -5px; */
        border-radius: 1rem;
        padding: 0.75rem;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }

    .header-buttons {
        display: flex;
        gap: 1rem;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th {
        width: 33.33%;
        text-align: left;
    }
    th:last-child, td:last-child {
    text-align: center;
    white-space: nowrap;
    width: 10%;
    }

    
    .search-box {
        margin-bottom: 1rem;
        display: flex;
        justify-content: center;
    }

    .search-box input {
        padding: 1rem 0.5rem;
        border: 1px solid #ccc;
        border-radius: 0.25rem;
        font-size: 1rem;
        width: 100%;
    }
    thead {
        background-color: #eef3f3;
        height: 2rem;
    }
    th{
        padding: 0.75rem 0.5rem;
    }
    td {padding: 0.5rem;
    }
    tr:hover {
        background-color: #f1f1f1;
    }
    @media (min-width: 992px) {
    }
    </style>

