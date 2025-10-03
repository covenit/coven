<script>
    export let models;
    export let isStilema;
</script>


<section class="padding-lr padding-bt" id="x">
        <div id="models">
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
                    {#if isStilema}
                        <main>
                            <!--ul>
                                <li class="item-model-stilema">
                                    <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.17344 11.55C8.393 11.55 8.58009 11.4732 8.73473 11.3196C8.8899 11.1655 8.96748 10.9789 8.96748 10.7599C8.96748 10.5403 8.89043 10.353 8.73632 10.1978C8.58326 10.0437 8.39696 9.96665 8.1774 9.96665C7.95785 9.96665 7.77048 10.0432 7.61532 10.1962C7.46015 10.3493 7.3831 10.5359 7.38415 10.7559C7.38415 10.9755 7.46068 11.1626 7.61373 11.3172C7.76732 11.4724 7.95389 11.55 8.17344 11.55ZM4.4819 11.6466L9.06486 7.0644L8.5194 6.5039L3.9214 11.1019L4.4819 11.6466ZM4.8239 8.19965C5.04346 8.19965 5.23082 8.12312 5.38598 7.97007C5.54115 7.81701 5.61847 7.63044 5.61794 7.41036C5.61741 7.19028 5.54062 7.00318 5.38757 6.84907C5.23451 6.69496 5.04794 6.61737 4.82786 6.61632C4.60778 6.61526 4.42068 6.69206 4.26657 6.84669C4.11246 7.00133 4.03487 7.1879 4.03382 7.4064C4.03276 7.6249 4.10982 7.81226 4.26498 7.96849C4.41804 8.1226 4.60435 8.19965 4.8239 8.19965ZM6.49828 14.6248C4.91547 14.6248 3.59655 14.0802 2.54153 12.9908C1.4865 11.9015 0.958984 10.5462 0.958984 8.92482C0.958984 7.78799 1.41762 6.53056 2.3349 5.15253C3.25218 3.7745 4.64076 2.26321 6.50065 0.618652C8.36107 2.26374 9.74965 3.77529 10.6664 5.15332C11.5837 6.53082 12.0423 7.78799 12.0423 8.92482C12.0423 10.5467 11.514 11.9023 10.4574 12.9916C9.39973 14.0804 8.08055 14.6248 6.49828 14.6248ZM6.50065 13.8332C7.87287 13.8332 9.00759 13.3679 9.90482 12.4374C10.802 11.507 11.2507 10.3361 11.2507 8.92482C11.2507 7.96163 10.8514 6.87308 10.0529 5.65919C9.25433 4.44531 8.07026 3.11926 6.50065 1.68107C4.93051 3.11926 3.74644 4.44531 2.94844 5.65919C2.15044 6.87308 1.75118 7.96163 1.75065 8.92482C1.75065 10.3366 2.19926 11.5078 3.09648 12.4382C3.99371 13.3687 5.12843 13.8337 6.50065 13.8332Z" fill="#8C8C8C"/>
                                    </svg>
                                    <p>Percentage humidity adjustment</p>
                                </li>
                            </ul>
                            <ul>
                                <li class="item-model-stilema">
                                    <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.17344 11.55C8.393 11.55 8.58009 11.4732 8.73473 11.3196C8.8899 11.1655 8.96748 10.9789 8.96748 10.7599C8.96748 10.5403 8.89043 10.353 8.73632 10.1978C8.58326 10.0437 8.39696 9.96665 8.1774 9.96665C7.95785 9.96665 7.77048 10.0432 7.61532 10.1962C7.46015 10.3493 7.3831 10.5359 7.38415 10.7559C7.38415 10.9755 7.46068 11.1626 7.61373 11.3172C7.76732 11.4724 7.95389 11.55 8.17344 11.55ZM4.4819 11.6466L9.06486 7.0644L8.5194 6.5039L3.9214 11.1019L4.4819 11.6466ZM4.8239 8.19965C5.04346 8.19965 5.23082 8.12312 5.38598 7.97007C5.54115 7.81701 5.61847 7.63044 5.61794 7.41036C5.61741 7.19028 5.54062 7.00318 5.38757 6.84907C5.23451 6.69496 5.04794 6.61737 4.82786 6.61632C4.60778 6.61526 4.42068 6.69206 4.26657 6.84669C4.11246 7.00133 4.03487 7.1879 4.03382 7.4064C4.03276 7.6249 4.10982 7.81226 4.26498 7.96849C4.41804 8.1226 4.60435 8.19965 4.8239 8.19965ZM6.49828 14.6248C4.91547 14.6248 3.59655 14.0802 2.54153 12.9908C1.4865 11.9015 0.958984 10.5462 0.958984 8.92482C0.958984 7.78799 1.41762 6.53056 2.3349 5.15253C3.25218 3.7745 4.64076 2.26321 6.50065 0.618652C8.36107 2.26374 9.74965 3.77529 10.6664 5.15332C11.5837 6.53082 12.0423 7.78799 12.0423 8.92482C12.0423 10.5467 11.514 11.9023 10.4574 12.9916C9.39973 14.0804 8.08055 14.6248 6.49828 14.6248ZM6.50065 13.8332C7.87287 13.8332 9.00759 13.3679 9.90482 12.4374C10.802 11.507 11.2507 10.3361 11.2507 8.92482C11.2507 7.96163 10.8514 6.87308 10.0529 5.65919C9.25433 4.44531 8.07026 3.11926 6.50065 1.68107C4.93051 3.11926 3.74644 4.44531 2.94844 5.65919C2.15044 6.87308 1.75118 7.96163 1.75065 8.92482C1.75065 10.3366 2.19926 11.5078 3.09648 12.4382C3.99371 13.3687 5.12843 13.8337 6.50065 13.8332Z" fill="#8C8C8C"/>
                                    </svg>
                                    <p>Percentage humidity adjustment</p>
                                </li>
                            </ul-->
                        </main>
                    {:else}
                        <main>
                            <ul>
                                <li><p>dim esterne: <span>{model.dimesterne}</span></p></li>
                                <li><p>dim interne: <span>{model.diminterne}</span></p></li>
                                <li><p>numero teglie: <span>{model.numeroteglie}</span></p></li>
                                <li><p>distanza teglie: <span>{model.distanzateglie}</span></p></li>
                                </ul>
                                <ul>
                                    {#if model.numeropasti != ""}
                                    <!-- content here -->
                                    <li><p>numero pasti: <span>{model.numeropasti}</span></p></li>
                                    {/if}
                                    <li><p>peso: <span>{model.peso}</span></p></li>
                                    <li><p>tensione: <span>{model.tensione}</span></p></li>
                                    <li><p>potenza: <span>{model.potenza}</span></p></li>
                                </ul>
                        </main>
                    {/if}
                </article>
            {/each}
        </div>
</section>

<style>
    .cards {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 15px;

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
        gap: 10px;
    }

    article header h5 {
        font-family: 'sf-ui-display-heavy';
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
        width: 51%;
    }

    article header img {
        height: auto;
        width: 40%;
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

    main ul li p, main ul li p span{
        font-size: 14px;
        line-height: 196%;
        letter-spacing: 0%;
        font-family: 'sf-ui-display-medium';
    }

    main ul li p span {
        color: #8C8C8C
    }

    .item-model-stilema {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #8C8C8C;
    }
    .item-model-stilema svg {
        width: 16px;
        height: auto;
    }

    @media (max-width: 767px) {
        .cards {
            display: block;
        }
        article {
            width: 100%;
            margin-bottom: 2vh;
        }
        article header img {
            margin-top: 3vh;
            width: 60%;
        }
        article header, article main {
            display: block;
        }
        article header div, article main ul {
            width: 100%;
        }
        article header h5, article header p {
            margin-bottom: 2vh;
        }
        .item-model-stilema {
            align-items: start;
            justify-content: start;
        }
        .item-model-stilema p {
            font-size: 12px;
        }
    }
</style>