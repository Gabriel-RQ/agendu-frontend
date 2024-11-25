<script>
    import Header from "$lib/components/header/Header.svelte";
    import { IconButton } from "$lib";
    import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
	import { scale } from "svelte/transition";
	import { cubicInOut, cubicOut } from "svelte/easing";


    const users = [
        { id: 1, name: "Regina", cargo: "Diretora" },
        { id: 2, name: "Taísa", cargo: "Professora" }
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
                    <th>N°</th>
                    <th>Nome</th>
                    <th>Cargo</th>
                </tr>
            </thead>

            <tbody>
                {#each users as user}
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.cargo}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</section>

<style>
    .roles {
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
</style>

