<script>
    import { TextButton, Input, Button } from "$lib";
    import Fa from "svelte-fa";
    import { faArrowLeft, faEnvelope, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
	import { scale } from "svelte/transition";
    
    let showPassword = false;
</script>   


<section in:scale={{ duration: 300}} class="login-section-container container full-height">

    <span class="titulo flex-row-center">
        <h1 class="text-1_75 text-green">Informações de Login</h1>
    </span>     

    <form class="text-black flex-column-center full-width" action="">

        <div class="input-wrapper flex-column full-width">
            <label for="email">Endereço de e-mail</label>
            <Input id="email" name="email" type="email" expanded>
                <Fa icon={faEnvelope} slot="icon" color="var(--primary-color)" />
            </Input>
        </div>

        <div class="input-wrapper flex-column full-width">
            <label for="password">Senha</label>
            
            <Input id="password" name="password" type={showPassword ? "text" : "password"} expanded>
                <button slot="icon" on:click|preventDefault={() => showPassword = !showPassword}>
                    <Fa icon={showPassword ? faEyeSlash : faEye}  color="var(--primary-color)" />
                </button>
            </Input>

            <p id="forgot-password">Esqueci minha senha</p>
        </div>

        <Button class="font-medium text-1_15" expanded>Login</Button>

    </form>

    <TextButton id="back-button" class="flex-row-center full-width" href="/">
        <Fa icon={faArrowLeft} size="lg" />
        <p class="font-medium text-1_25">Voltar</p>
    </TextButton>

</section>

<style>
    form {
        text-align: left;
        gap: 1.5rem;
        place-self: start center;
    }

    .input-wrapper {
        gap: 0.5rem;
    }

    button {
        background: transparent;
    }

    #forgot-password {
        color: var(--primary-color);
        cursor: pointer;
        text-align: right;
    }

    :global(#back-button) {
        gap: 1rem;
    }
</style>
