    <script>
    /** @type {string} */
    let className = '';
    export { className as class };
    /** @type {string} */
    export let href = '';
    /** @type {boolean} */
    export let disabled = false;

    /** @type {string} */
    let buttonClass = `${className} ${disabled ? 'disabled' : ''}`;
</script>

{#if href}
    <a class={buttonClass} {href} on:click on:keydown on:keyup>
        <slot />
    </a>
{:else}
    <button class={buttonClass} on:click on:keydown on:keyup>
        <slot />
    </button>
{/if}

<style>
    button, a {
        background: none;
        border-radius: 0;
        color: var(--primary-color);
        cursor: pointer;
        transition: all 250ms ease-in-out;    
        width: fit-content;
    }

    :is(button, a):not(.disabled):hover {
        color: var(--primary-color-dark);
    }

    .disabled {
        color: var(--primary-color-dark);
    }
</style>