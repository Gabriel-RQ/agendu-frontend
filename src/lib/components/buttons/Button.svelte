<script>

    /** @type {string}*/
    let className = '';
    /** @type {boolean}*/
    export let secondary = false;
    /** @type {boolean}*/
    export let expanded = false;
    export {className as class};

    /** @type {string} */
    let buttonClass = `${className} ${secondary && 'secondary'} ${expanded && 'expanded'}`;
</script>

<button class={buttonClass} on:click on:keydown on:keyup>
    <slot />
</button>

<style>
    button {
        background: var(--primary-color);
        border-radius: 10px;
        color: var(--text-color);
        cursor: pointer;
        padding: .75rem 0;
    }

    .secondary {
        background: var(--text-color);
        color: var(--primary-color);
        outline: 3px solid var(--primary-color);
    }

    .expanded {
        width: 100%;
    }
</style>