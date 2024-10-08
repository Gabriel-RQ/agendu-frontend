<script>
    /** @type {string} */
    let className = '';
    export {className as class};
    /** @type {string} */
    export let type = 'text';
    /** @type {string?} */
    export let value = null;
    /** @type {string?} */
    export let placeholder = null;
    /** @type {boolean} */
    export let disabled = false;
    /** @type {boolean} */
    export let expanded = false;

    let buttonClass = `${className} ${expanded && 'expanded'}`;
</script>


<span class="wrapper {expanded && 'expanded'}">
    <input class={buttonClass} {type} {placeholder} {value} {disabled} on:blur on:input on:change on:click on:keypress on:keyup>
    {#if $$slots.icon}
        <span class="icon">
            <slot name="icon" />
        </span>
    {/if}
</span>

<style>
    .wrapper {
        --color: 94, 94, 94;
        position: relative;
        color: var(--color);
    }

    input {
        background: transparent;
        border: rgba(var(--color), .50) solid 1px;
        border-radius: 10px;
        outline: none;
        padding: 0.75rem 1rem;
        height: 62px;
    }

    .wrapper:focus-within {
        color: var(--primary-color);
    }

    input:focus {
        border-color: var(--primary-color);
        color: var(--primary-color);
    }

    .expanded {
        width: 100%;
    }

    .icon {
        position: absolute;
        right: 2rem;
        top: 50%;
        transform: translateY(-50%);
    }

    .wrapper:has(input:disabled) {
        color: rgb(var(--color));
    }   

    input:disabled  {
        color: rgb(var);
    }
</style>        