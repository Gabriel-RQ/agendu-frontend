<script>
    import { Button, TextButton } from "$lib";
</script>

<main>
    <div>
        <Button class="text-1_75 font-medium" expanded>Botão primário</Button>
        <Button class="text-1_75 font-medium" secondary expanded>Botão secundário</Button>
        <TextButton class="text-1_75 font-medium" href="/teste">Botão de texto</TextButton>
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

