<script>
    import { Button, TextButton, Input } from "$lib";
    import Fa from "svelte-fa";
    import {faHouse, faEnvelope} from "@fortawesome/free-solid-svg-icons";
</script>

<main>
    <div>
        <Fa icon={faHouse} scale=2 size="lg" color="red" />
        <Button class="text-1_75 font-medium" expanded>Botão primário</Button>
        <Button class="text-1_75 font-medium" secondary expanded>Botão secundário</Button>
        <TextButton class="text-1_75 font-medium" href="/teste">Botão de texto</TextButton>
        <Input expanded  value="teste">
            <Fa slot="icon" icon={faEnvelope} scale=1.5 size="lg" />
        </Input>
    </div>
</main>

<style>
    main {
        align-items: center;
        display: flex;
        height: 100vh;
        justify-content: center;
    }

    div {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        width: 50%;
    }
</style>

