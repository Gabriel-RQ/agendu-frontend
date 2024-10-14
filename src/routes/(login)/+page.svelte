<script>
    import { Button } from "$lib";
    import logo_agendu from "$lib/images/logo_agendu.png";
	import { scale } from "svelte/transition";
	import SocialMediaIcons from "./SocialMediaIcons.svelte";
</script>


<section in:scale={{ duration: 300}} class="login-section-container container full-height">

    <div id="titulo">
        <img src={logo_agendu} alt="Logo do Agendu, representada por duas mãos segurando um calendário.">
        <h1 class="title">Acesse o sistema</h1>
    </div>          

    <div>           
        <Button href="/login" expanded class="font-medium text-1_5">Servidores</Button>    

        <span class="full-width wrapper"><p class="font-medium text-1_25 text-black">ou</p></span>

        <Button secondary expanded class="font-medium text-1_5">Pais e responsáveis</Button>
    </div>      
    
    <SocialMediaIcons hideOnDesktop />
</section>


<style>
    section {
        text-align: center;     
        display: grid;
        grid-template-rows: repeat(2, 1fr) 10%;
    }   

    img {
        height: 116px;
        width: 116px;
        margin: 0 auto;
    }

    div { 
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .wrapper {
        position: relative;
    }

    .wrapper::after, .wrapper::before {
        background-color: var(--text-black);
        content: "";
        display: block;
        height: 2px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 25%;
    }

    .wrapper::before {
        right: 60%;
    }

    .wrapper::after {
        left: 60%;
    }
    

    @media screen and (min-width: 992px) {
        #titulo {
            place-self: center;
        }
    
            img {
            display: none;
        }
    }
</style>