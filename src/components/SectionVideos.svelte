<script>
    const videos = [
        {
            title: "Gestione umidità",
            text: "Gestione dell'umidità nelle cotture a vapore.",
            url: "https://www.youtube.com/embed/Y8cRIYhrE5I?si=hvKU2F5fJ2CNMXfi",
        },
        {
            title: "Allarmi",
            text: "Segnalazione allarmi forni a convezione Coven.",
            url: "https://www.youtube.com/embed/fSXdBg4OI1U?si=00yTAPP2O8psEVOH",
        },
        {
            title: "Lavaggio",
            text: "Sistema di lavaggio automatico dei forni a convezione Coven.",
            url: "https://www.youtube.com/embed/Alzga3Mezr8?si=sX1RhJ82RIWU1AmS",
        },
        {
            title: "Cottura Differita",
            text: "Impostazione cottura con partenza differita forni a convezione Coven Visual.",
            url: "https://www.youtube.com/embed/XMsGvBQsFxo?si=W42gJ7hq2VYmFgV7",
        }
    ]
</script>

<section class="padding-lr padding-bt">
    <header>
        <h6>Accademia Coven</h6>
        <h2>Video pratici per conoscere e padroneggiare ogni funzione</h2>
    </header>
    <main>
        {#each videos as item}
             <!-- content here -->
            <article>
                <iframe src="{item.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <footer>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </footer>
            </article>
        {/each}
    </main>
</section>

<style>

    section {
        background-color: #EEEEEE;
    }

    section header {
        margin-bottom: 5vh;
    }
    section main {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    section article {
        width: auto;
    }

    section main article iframe {
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }

    section main article footer {  
        background-color: #fff;
        padding-top: 24px;
        padding-right: 32px;
        padding-bottom: 40px;
        padding-left: 32px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        min-height: 25vh;
    }

    section main article footer h3 {
        font-family: 'sf-ui-display-bold';
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0%;
        vertical-align: middle;
    }

    section main article footer p {
        font-family: 'sf-ui-display-regular';
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0%;
        vertical-align: middle;
        color: #5B5B5B;
    }

    @media (max-width: 767px) {
        section main {
            display: block;
        }

        section article {
            margin-bottom: 5vh;
        }

        h6 {
            margin-bottom: 3vh;
        }
    }

</style>