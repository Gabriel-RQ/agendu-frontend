
<script>
    export let hideOnDesktop = false;
</script>

<!-- TODO: Colocar links corretos -->

<span class="icon-wrapper {hideOnDesktop ? 'hidden' : ''}">
    <a class="icon icon-facebook" href=""></a>
    <a class="icon icon-instagram" href=""></a>
    <a class="icon icon-email" href=""></a>
</span>   

<style>
    .icon-wrapper { 
        display: flex;
        gap: 1rem;
        justify-content: center;
    }

    .icon {
        aspect-ratio: 1 / 1;
        background-color: var(--primary-color);
        border-radius: 50%;
        height: 54px;       
    }

    .icon-facebook {
        background: var(--primary-color) url('$lib/images/icons_white/logo_facebook.svg') no-repeat center;         
    }

    .icon-instagram {
        background: var(--primary-color) url('$lib/images/icons_white/logo_instagram.svg') no-repeat center;
    }

    .icon-email {
        background: var(--primary-color) url('$lib/images/icons_white/logo_email.svg') no-repeat center;
    }

    @media screen and (min-width: 992px) {
        .hidden {
            display: none;
        }

        .icon-facebook {
           background: var(--text-white) url('$lib/images/icons_green/logo_facebook.svg') no-repeat center;         
        }   

        .icon-instagram {
            background: var(--text-white) url('$lib/images/icons_green/logo_instagram.svg') no-repeat center;               
        }

        .icon-email {
            background: var(--text-white) url('$lib/images/icons_green/logo_email.svg') no-repeat center;
        }
    }
</style>