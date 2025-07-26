<script>
    export let models;
</script>


<section class="padding-lr padding-bt">
        <div>
            <h2>Modelli</h2>
        </div>
        <br><br>
        <div class="cards">
            {#each models as model}
            <article>
                <header>
                    <div>
                        <h5>{model.model}</h5>
                        <p>{model.text}</p>
                        <h5 class="text-black">{model.line}</h5>
                        
                        {#if model.isElec == true}
                        <div>
                            <span class="p-elect">{model.typeElec}</span>
                        </div>
                        {/if}
                        
                        {#if model.isGas == true}
                        <div>
                            <span class="p-gas">{model.typeGas}</span>
                        </div>
                        {/if}
                    </div>
                    <img src="{model.urlImg}" alt="">
                </header>
                <br>
                <main>
                    <ul>
                        <li><p>dim esterne: {model.dimesterne}</p></li>
                        <li><p>dim interne: {model.diminterne}</p></li>
                        <li><p>numero teglie: {model.diminterne}</p></li>
                        <li><p>distanza teglie: {model.distanzateglie}</p></li>
                    </ul>
                    <ul>
                        <li><p>dim esterne: {model.dimesterne}</p></li>
                        <li><p>dim interne: {model.diminterne}</p></li>
                        <li><p>numero teglie: {model.diminterne}</p></li>
                        <li><p>distanza teglie: {model.distanzateglie}</p></li>
                    </ul>
                </main>
            </article>
            {/each}
        </div>
</section>

<style>
    .cards {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 0px;

    }
    article {
        width: 48%;
        box-shadow: 0px 2px 4px 0px #60617029;
        border-radius: 20px;
        padding: 5vh;
    }

    article header, article main {
        display: flex;
        justify-content: start;
        gap: 50px;
    }

    article header h5 {
        font-family: 'sf-ui-display-bold';
        font-size: 16px;
        line-height: 146%;
        letter-spacing: 1%;
        text-transform: uppercase;
        color: #5B5B5BB2;
        margin-bottom: 3vh;
    }

     article header .text-black {
        color: #2F2F2F;
     }

    article header p {
        font-family: 'sf-ui-display-medium';
        font-size: 14px;
        line-height: 146%;
        letter-spacing: 0%;
        margin-bottom: 5vh;
        color: #2F2F2F;
    }

    article header div, article main ul {
        width: 45%;
    }

    article header img {
        width: 35%;
    }

    main ul {
        list-style: none;
    }

    .p-elect, .p-gas {
        font-family: 'sf-ui-display-medium';
        border-radius: 40px;
        background: #E20C181A;
        border: 1px solid #E20C18;
        font-size: 14px;
        line-height: 28px;
        letter-spacing: 0%;
        text-align: start;
        color: #E20C18;
        padding: 6px 16px;
        margin: 0;
    }
    .p-gas {
        background: #0C49E21A;
        border: 1px solid #0C49E2;
        color: #0C49E2;
    }
</style>