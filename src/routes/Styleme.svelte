<script>
    import HeroProducts from "../components/HeroProducts.svelte";
    import ContainerCharacteristics from "../components/Container-characteristics.svelte";
    import ContainerGrey from "../components/container-grey.svelte";
    import Carrousel from "../components/Carrousel.svelte";
    import Form from "../components/Form.svelte";
    import Gallery from "../components/Gallery.svelte";
    import CustomizedTools from "../components/CustomizedTools.svelte";
    import SectionModels from "../components/SectionModels.svelte";
    import { models } from "../data/models-stilema";
    import CardMainStilema from "../components/CardMainStilema.svelte";

    const backgroundImage = '/hero-stilema.webp';
    const image = "/line/stilema.webp";

    const texts = [
        {t: "La Serie Programmabile con tastiera a comandi capacitivi. L’innovativo sistema consente di memorizzare fino a 99 ricette, ciascuna con 6 fasi di cottura. L’ingresso USB permette di salvare i dati e aggiornare il software con nuove funzioni e ricette."},
    ];

    const charact = [
        {c: 'Sonda al cuore riscaldata a 4 punti'},
        {c: 'Doppia vasca raccolta liquidi'},
        {c: 'Sistema di risciacquo manuale integrato'},
        {c: 'Porta a doppio vetro ispessito e ispezionabile'}
    ]

    const tags = [
        { tag: 'Elettrico'},
        { tag: 'Gas'}
    ];

    const images = [
        {src : "/carrousel-stilema-line/1.webp"},
        {src : "/carrousel-stilema-line/2.webp"},
        {src : "/carrousel-stilema-line/3.webp"},
        {src : "/carrousel-stilema-line/4.webp"},
        {src : "/carrousel-stilema-line/1.webp"},
        {src : "/carrousel-stilema-line/2.webp"},
        {src : "/carrousel-stilema-line/3.webp"},
        {src : "/carrousel-stilema-line/4.webp"},
    ];

</script>

<HeroProducts backgroundImage={backgroundImage} category="Tutto in uno" title="Stilema" line="the future is here"></HeroProducts>

<section class="padding-lr padding-bt">
    <ContainerCharacteristics img={image} text={texts} charact={charact} tags={tags}>
    </ContainerCharacteristics>
</section>

<ContainerGrey ifTitle={"Il futuro non si predice, si progetta."} text={"Con Stilema, lo facciamo con il carattere e l’eleganza senza tempo del design italiano. Ogni modello è il frutto di anni di ricerca, innovazione tecnologica all’avanguardia e una cura maniacale per i dettagli. Con Stilema, non stai semplicemente cuocendo: stai dominando tempo, temperatura ed energia con una precisione assoluta. Non stai semplicemente osservando un forno: stai vivendo un’esperienza pensata per trasformare ogni cucina in un ambiente professionale, flessibile ed efficiente. Stilema non segue le tendenze. Le anticipa. Le definisce. Le supera. Il futuro inizia nel momento in cui lo accendi."}>
   
</ContainerGrey>

<section class="padding-bt carrousel-container">
    <Carrousel images={images}></Carrousel>
</section>

<section class="padding-lr padding-bt cards-stilema">
    <h2>L’eccellenza di Stilema, in ogni dettaglio</h2>
    <br>
    <main>
        <CardMainStilema urlImg={'/carrousel-stilema-line/aa.png'} title="CAMERA DI COTTURA" subtitle="Uniformità assoluta. Il futuro non lascia punti freddi" 
            text="Realizzata completamente in acciaio inox, la camera di cottura di STILEMA consente il raggiungimento e il mantenimento della temperatura fino a 300°. Grazie al KNOW HOW del nostro comparto tecnico, ai continui studi e test di laboratorio, abbiamo raggiunto la massima efficienza e precisione della distribuzione dell’aria calda e la conseguente totale uniformità della temperatura. I risultati di cottura saranno sempre impeccabili in ogni singolo spazio utilizzato.
            STILEMA garantisce massima flessibilità in cucina, con capacità di carico teglie GN1/1 e 60X40 per garantire i migliori risultati sia per la Gastronomia che per la Pasticceria."
        >
        </CardMainStilema>

        <CardMainStilema urlImg={'/carrousel-stilema-line/aa.png'} title="CAMERA DI COTTURA" subtitle="Uniformità assoluta. Il futuro non lascia punti freddi" 
            text="Realizzata completamente in acciaio inox, la camera di cottura di STILEMA consente il raggiungimento e il mantenimento della temperatura fino a 300°. Grazie al KNOW HOW del nostro comparto tecnico, ai continui studi e test di laboratorio, abbiamo raggiunto la massima efficienza e precisione della distribuzione dell’aria calda e la conseguente totale uniformità della temperatura. I risultati di cottura saranno sempre impeccabili in ogni singolo spazio utilizzato.
            STILEMA garantisce massima flessibilità in cucina, con capacità di carico teglie GN1/1 e 60X40 per garantire i migliori risultati sia per la Gastronomia che per la Pasticceria."
        >
        </CardMainStilema>
    </main>
</section>

<section class="padding-lr padding-bt carrousel-container section-details">
    <header>
        <h2>GRAPHICAL USER INTERFACE</h2>
        <h5>Tecnologia che pensa, semplicità che guida.</h5>
    </header>
    <br>
    <main>
        <div>
            <img src="/carrousel-stilema-line/d.png" alt="">
        </div>
        <div class="container-imgs">
            <p>12 tipi di processi di cottura</p>
            <img src="/carrousel-stilema-line/e.png" alt="">
            <img src="/carrousel-stilema-line/f.png" alt="">
            <p>4 programmi di lavaggio con detersivo liquido o tablet</p>
            <br>
        </div>
        <div class="container-texts">
            <h4>GRAPHICAL USER INTERFACE</h4>
            <br>
            <p>
                Stilema Touch è dotato di un ampio touch screen in vetro da 10” e di un software intelligente che gestisce automaticamente ogni processo di cottura per risultati eccellenti. L’interfaccia intuitiva offre 12 modalità di cottura, funzioni MultiCook e la personalizzazione completa di tutti i parametri, inclusi doratura e intensità. <br>
                Grazie al controllo della temperatura con algoritmo P.I.D., anche nei modelli elettrici, Stilema massimizza l’efficienza energetica. Goditi un preriscaldamento rapido, cotture a vapore precise con tre algoritmi di umidità dedicati e cicli di vapore da 30°C a 130°C per risultati perfetti ogni volta.
            </p>
        </div>
    </main>
</section>

<SectionModels models={models}></SectionModels>

<CustomizedTools></CustomizedTools>

<Gallery></Gallery>

<Form complete={false}></Form>

<style>
    .section-details header h5 {
        font-family: "sf-ui-display-regular";
        font-size: 20px;
        letter-spacing: 0%;
        text-align: center;
    }
    .section-details main {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }
    .section-details main div {
        width: 20vw;
    }
    .section-details .container-imgs {
        width: 15vw;
        text-align: center;
    }
    .section-details .container-imgs p, .section-details h4 {
        font-family: "sf-ui-display-bold";
        font-size: 16px;
        line-height: 130%;
        letter-spacing: -2%;
        text-align: center;
        color: #E20C18;
    }
    .section-details h4 {
        font-family: "sf-ui-display-medium";
        text-align: start;
    }
    .section-details .container-texts p {
        color: #2F2F2F;
        padding-bottom: 2vh;
        border-bottom: 1px solid #E20C18;
    }
    .section-details main div img {
        width: 100%;
        height: auto;
        margin: 2vh 0;
    }

    .cards-stilema main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1vw;
    }

    @media (max-width: 767px) {
        .section-details main {
            display: block;
        }
        .section-details .container-imgs {
            width: 100%;
            text-align: start;
        }
        .section-details .container-imgs p, .section-details h4 {
            text-align: start;
        }
        .section-details .container-texts {
            width: 100%;
        }
        .section-details main div {
            width: 100%;
        }
        .section-details header h5 {
            font-size: 16px;
            text-align: start;
        }
        .cards-stilema main { 
            display: block;
        }
    }

</style>