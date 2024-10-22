    <script>
    /** @type {string} */
    let className = '';
    export { className as class };
    /** @type {string} */
    export let id = '';
    /** @type {string} */
    export let href = '';
    /** @type {boolean} */
    export let disabled = false;
    /** @type {boolean} */
    export let highlight = false;

    /** @type {string} */
    let buttonClass = `${className} ${disabled ? 'disabled' : ''} ${highlight ? 'highlight' : ''}`;
</script>

{#if href}
    <a class={buttonClass} {href} {id} on:click on:keydown on:keyup>
        <slot />
    </a>
{:else}
    <button class={buttonClass} {id} on:click on:keydown on:keyup>
        <slot />
    </button>
{/if}

<style>
    button, a {
        background: none;
        border-radius: 0;
        color: var(--primary-color);
        cursor: pointer;
        height: max-content;
        padding: .75rem 0;
        transition: all 250ms ease-in-out;    
        /* width: fit-content; */
    }

    :is(button, a):not(.disabled):hover {
        color: var(--primary-color-dark);
    }

    .disabled {
        color: var(--primary-color-dark);
    }

    .highlight:hover {
        transition: background 250ms ease-in-out, color 200ms ease-in;
        background: rgba(0, 0, 0, .07);
        border-radius: 10px;
    }
</style>