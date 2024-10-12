<script>

    /** @type {string}*/
    let className = '';
    export {className as class};
    /** @type {boolean}*/
    export let secondary = false;
    /** @type {boolean}*/
    export let expanded = false;
    /** @type {boolean}*/
    export let disabled = false;
    /** @type {'submit' | 'reset' | 'button'} */
    export let type = 'button';
    /** @type {string} */
    export let href = '';
    
    /** @type {string} */
    let buttonClass = `${className} ${secondary ? 'secondary' : ''} ${expanded ? 'expanded' : ''} ${disabled ? 'disabled' : ''}`;
</script>

{#if href}
    <a class={buttonClass} {href} on:click on:keydown on:keyup>
        <slot />
    </a>
{:else}
    <button class={buttonClass} {type} on:click on:keydown on:keyup>
        <slot />
    </button>
{/if}

<style>
    button, a {
        background: var(--primary-color);
        border-radius: 10px;
        color: var(--text-white);
        cursor: pointer;
        display: inline-block;
        font-family: inherit;
        line-height: normal;
        padding: .75rem 0;
        text-align: center;
    }

    .secondary {
        background: var(--text-white);
        color: var(--primary-color);
        outline: 3px solid var(--primary-color);
    }

    .expanded {
        width: 100%;
    }

    :not(.secondary).disabled {
        background: var(--primary-color-dark);
        color: var(--text-white);
    }

    .secondary.disabled {
        color: var(--primary-color-dark);
        outline-color: var(--primary-color-dark);
    }
</style>