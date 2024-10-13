
<script>
    // import logo_apae from "$lib/images/logo_apae.svg";
    // import Fa from "svelte-fa";
    // import {faHeart} from "@fortawesome/free-solid-svg-icons";
</script>

<main class="full-height">
    <!-- <section></section> -->
    <slot />
</main>

<style>
    
</style>
<!-- <main>
    <section class="login-banner">
        <div class="bg-cover"></div>
        <div class="logo-content full-width container flex-column-center">
            <img src={logo_apae} alt="Logo da APAE">

            <p class="text-triple">
                Junte-se a nós na construção de um futuro mais inclusivo e acolhedor para todos.
            </p>

            <span id="logo-fullname-wrapper">
                <Fa icon={faHeart} size="2x" color="var(--primary-color)" />
                <p class="text-double text-green">Associação de Pais e Amigos dos Excepcionais</p>
            </span>
        </div>
    </section>

    <section class="form-wrapper">
        <slot />
    </section>
</main>

<style>
    main {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 100vh;
        max-height: 100vh;
    }

    section {
        height: 100%;
        width: 100%;
    }

    .login-banner {
        padding: 1.25rem 0.75rem;
        position: relative;
    }

    .bg-cover {
        background: url("$lib/images/img_bg_login.png") no-repeat;
        background-size: cover;
        border-radius: 20px 10px 10px 20px;
        height: 100%;
        position: relative;
        width: 100%;
    }

    .bg-cover::after {
        content: "";
        background: rgba(0, 0, 0, 0.65);
        border-radius: inherit  ;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left:0;
    }

    .logo-content {
        color: var(--text-white);
        gap: 3rem;
        left: 50%;
        position: absolute;
        text-align: center;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    #logo-fullname-wrapper {
        align-items: center;
        display: flex;
        gap: .75rem;
        text-align: left;
    }

    .form-wrapper {
        align-items: center;
        display: flex;
        justify-content: space-around;
    }
</style> -->
