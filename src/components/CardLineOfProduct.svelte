<script>
  export let src = '';
  export let title = '';
  export let link = '';
</script>

<article>
    <header style="background-image: url({src});">

    </header>
    <main>
        <p class="p-title">{title}</p>
        <slot><!-- optional fallback --></slot>
        <a href={link}>
            <div>
                <p>Scopri di più</p>
                <div class="arrow">
                    <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.555318 23.4995C0.228582 23.1786 0.0450582 22.7437 0.0450582 22.2902C0.0450582 21.8367 0.228582 21.4017 0.555318 21.0808L9.79087 12.0221L0.555319 2.96338C0.383899 2.80671 0.246405 2.61778 0.151045 2.40785C0.055684 2.19793 0.00440684 1.97132 0.000272675 1.74153C-0.00386054 1.51175 0.0392351 1.28351 0.126986 1.07041C0.214738 0.857321 0.34535 0.663747 0.511029 0.501241C0.676708 0.338734 0.874059 0.210624 1.09131 0.124552C1.30856 0.0384809 1.54126 -0.00378846 1.77553 0.000265799C2.0098 0.00432006 2.24084 0.0546153 2.45486 0.14815C2.66888 0.241686 2.8615 0.376544 3.02123 0.544682L13.4897 10.8127C13.8165 11.1336 14 11.5686 14 12.0221C14 12.4756 13.8165 12.9106 13.4897 13.2314L3.02123 23.4995C2.69409 23.82 2.25064 24 1.78827 24C1.32591 24 0.88246 23.82 0.555318 23.4995Z" fill="#E20C18"/>
                    </svg>
                </div>
            </div>
        </a>
    </main>
</article>

<style>
    .p-title{
        font-family: 'sf-ui-display-bold';
        font-size: 20px;
        line-height: 34px;
        letter-spacing: 0%;
        margin-bottom: 1vh;
    }
    article {
        box-shadow: 0px 8px 16px 0px #0000001A;
        border-radius: 20px;
    }
    header {
        height: 200px;
        width: 100%;
        background-size: cover;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }
    article > main {
        padding: 24px 32px;
    }
    article > main  div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    
    article > main a {
        text-decoration: none;
        color: #E20C18;  
        font-family: 'sf-ui-display-bold';
        font-size: 14px;
        line-height: 100%;
        letter-spacing: 0%;
        vertical-align: middle;
        color: #E20C18; 
    }
    
    .arrow {
        width: 48px;
        height: 48px;
        padding-top: 5px;
        padding-right: 3px;
        padding-bottom: 5px;
        padding-left: 3px;
        gap: 10px;
        opacity: 1;
        border-radius: 20px;
        box-shadow: 0px 8px 8px 0px #0000001A;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>