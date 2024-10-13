<script>
    import { Button } from "$lib";
    import logo_agendu from "$lib/images/logo_agendu.png";
</script>


<section class="container full-height">

    <div>
        <img src={logo_agendu} alt="Logo do Agendu, representada por duas mãos segurando um calendário.">
        <h1 class="title">Acesse o sistema</h1>
    </div>

    <div>           
        <Button expanded class="font-medium text-1_5">Servidores</Button>     
        <span class="full-width"><p class="font-medium text-1_25">ou</p></span>
        <Button secondary expanded class="font-medium text-1_5">Pais e responsáveis</Button>
    </div>      

</section>


<style>
    section {
        text-align: center;     
        display: grid;
        grid-template-rows: repeat(2, 1fr);
    }   

    img {
        height: 116px;
        width: 116px;
        margin: 0 auto;
    }

    div{ 
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    span {
        position: relative;
    }

    span::after, span::before {
        background-color: var(--text-black);
        content: "";
        display: block;
        height: 2px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 25%;
    }

    span::before {
        right: 60%;
    }

    span::after {
        left: 60%;
    }
</style>

<!-- 
<div class="wrapper">

    <h1 class="title">Acesse o sistema</h1>
    
    <div class="button-wrapper">
        <Button class="font-bold text-double full-width" href="/login">Servidores</Button>
        <span class="full-width"><p class="font-medium text-1_75">ou</p></span>
        <Button class="font-bold text-double full-width" secondary>Pais e responsáveis</Button>
    </div>

</div> -->

    <!-- <style>

        .wrapper {
            text-align: center;
            padding: 2rem;
        }

        div {
            align-items: center;
            display: flex;
            flex-direction: column;
            gap: 3rem;
            justify-content: space-around;
            width: 100%;
        }

        span {
            position: relative;
        }

        span::before, span::after {
            content: "";
            background-color: var(--text-black);
            display: block;
            height: 2px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 25%;
        }

        span::before {
            right: 60%;
        }

        span::after {
            left: 60%;
        }
    </style> -->