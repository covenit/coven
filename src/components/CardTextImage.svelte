<script>
    export let src;
    export let title;
    export let texts;

    let isOpen = false;

    function open() {
        isOpen = !isOpen;
    }
</script>

<article class="card-text-image">
    <header style="background-image: url({src});">
    </header>
    <main class="text-content">
        <h3>{title}</h3>
        {#each texts as item}
            {#each item[1] as x}
                <p>{x}</p>
            {/each}
        {/each}
        {#if !isOpen}
            <br>
            <button type="button" class="scopri-btn" on:click={open}>Mostra di più</button>
        {/if}
        {#if isOpen}
            {#each texts as item}
                {#each item[2] as x}
                    <p>{x}</p>
                {/each}
            {/each}
            <br>
            <button type="button" class="scopri-btn" on:click={open}>Scopri di meno</button>
        {/if}
    </main>
</article>

<style>
    article {
        width: auto;
        background-color: white;
        text-align: start;  
        border-radius: 20px;
        box-shadow: 0px 8px 16px 0px #0000001A;
        height: auto;
        width: 100%;
        min-height: 400px;
    }
    article h3 {
        font-family: 'sf-ui-display-medium';
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0%;
        vertical-align: middle;
        color: #121212;
        margin-bottom: 5px;
    }
    article p {
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0%;
        vertical-align: middle;
        color: #5B5B5B;
    }
    .scopri-btn {
        font-family: 'sf-ui-display-heavy';
        font-size: 14px;
        line-height: 24px;
        color: #E20C18;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        margin: 0;
    }
    main {
        padding: 24px 32px;
    }

    header {
        height: 200px;  
        background-size: cover;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }

    @media (max-width: 767px) {
        article {
            margin-bottom: 3vh;
            height: auto;
            width: 100%;
            min-height: 200px;
        }
    }

</style>