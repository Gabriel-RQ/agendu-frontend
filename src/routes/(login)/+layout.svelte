
<script>
    import logo_apae from "$lib/images/logo_apae.svg";
    import Fa from "svelte-fa";
    import {faHeart} from "@fortawesome/free-solid-svg-icons";
	import SocialMediaIcons from "./SocialMediaIcons.svelte";
</script>

<main class="full-height">  

    <!-- Imagem lateral (visualizada apenas em telas grandes) -->
    <section class="hidden">

        <div class="bg-image full-height" />
        
        <div class="bg-content  full-width full-height font-medium">
            <img src={logo_apae} alt="Logo da APAE. Duas mãos em volta de uma flor.">   

            <div>
                <p class="text-double">
                    Junte-se a nós na construção de um futuro mais inclusivo e acolhedor para todos.
                </p>    
    
                <br>    

                <span id="wrapper-subtitulo" class="flex-row-center text-1_5">
                    <Fa icon={faHeart} size="lg" color="var(--primary-color)" />
                    <p>Associação de Pais e Amigos dos Excepcionais</p>
                </span>
            </div>

            <SocialMediaIcons />
        </div>

    </section>

    <slot />

</main>

<style>  

    /* Quando for computador */
    @media screen and (min-width: 992px) {
        main {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }

        section {
            display: block;
            padding: 0.75rem 0.5rem;
            position: relative;
        }

        .bg-image {
            background: url("$lib/images/img_bg_login.png") no-repeat;
            background-size: cover; 
            border-radius: 20px 10px 10px 20px;
            position: relative;
        }

        .bg-image::before {
            background: rgba(0, 0, 0, 0.65);
            border-radius: inherit;
            content: "";
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
        }

        .bg-content {
            padding: inherit;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            text-align: center;
        }

        #wrapper-subtitulo {
            gap: 0.75rem;
            color: var(--primary-color);
        }
    }
</style>