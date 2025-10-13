<script>
    import Hero from '../components/Hero.svelte';
    const backgroundImage = '/hero2.webp';
    import ContainerGrey from '../components/container-grey.svelte';
    import CardTextImage from '../components/CardTextImage.svelte';
    import ImageRightSection from '../components/ImageRightSection.svelte';
    import Form from '../components/Form.svelte';
    import HeroMain from '../components/HeroMain.svelte';

    /*Cards Image*/
    const image1 = '/cards-our-mision/1.webp';
    const image2 = '/cards-our-mision/2.webp';
    const image3 = '/cards-our-mision/3.webp';

    /*src section Passione*/
    const passione = '/passione.webp';

    /*src section Consegna veloce*/
    const consegnaVeloceImage = '/consegnaveloce.webp';
</script>

<HeroMain backgroundImage={backgroundImage}>
    <h1>When Heat Matters</h1>
    <br>
    <div class="hero-text">
        <p>La perfezione in cucina nasce dalla passione per il dettaglio, dalla qualità dei componenti e dalla precisione dei test. In Coven, ogni forno è pensato per trasformare il calore in risultati straordinari.</p>
    </div>
</HeroMain>

<ContainerGrey ifSubitutle={'La nostra missione'} ifTitle={'La ricerca del calore perfetto'}>
    <div class="cards-container">
        <CardTextImage src={image1} title={"Innovazione senza limiti"} 
            text={"Guidiamo il mercato dei forni professionali attraverso una ricerca costante e lo sviluppo di tecnologie esclusive che garantiscono le migliori prestazioni in ogni cucina."}>
        </CardTextImage>
        <CardTextImage src={image2} title={"Qualità artigianale italiana"} 
            text={"Produciamo forni made in italy con elevati standard di qualità, combinando tradizione e tecnologia avanzata, garantendo che ogni prodotto sia rigorosamente testato dal nostro team di tecnici specializzati."}>
        </CardTextImage>
        <CardTextImage src={image3} title={"Esperienza e semplicità"} 
            text={"Creiamo prodotti intuitivi e accessibili per i professionisti della cucina, offrendo soluzioni pratiche e affidabili con un eccellente rapporto qualità-prezzo, su misura per le reali esigenze del mercato."}>
        </CardTextImage>
    </div>
</ContainerGrey>

<section class="padding-lr padding-bt">
    <ImageRightSection aling={false} image={passione} title={'Passione'} text={'Sosteniamo con orgoglio i cuochi che scelgono i forni Coven. Attraverso gesti semplici ed efficaci li aiutiamo a stimolare la loro creatività. I nostri forni professionali a convezione sono esclusivi e totalmente Made in Italy. Ogni componente è realizzato con cura e testato per un uso intensivo. La qualità dei materiali e della lavorazione garantisce resistenza e durata nel tempo. Offriamo informazioni chiare e dettagliate prima dell’acquisto. Il nostro supporto non si ferma alla vendita: siamo sempre a disposizione. Assistenza continua e consigli pratici consentono di sfruttare al meglio ogni forno. Con Coven, la passione per la cucina si trasforma nella realizzazione di grandi piatti. Affidarsi a un Coven significa scegliere l’esperienza , la qualità e la professionalità. '}>
    </ImageRightSection>
</section>

<section class="padding-lr padding-bt">
    <ImageRightSection image={consegnaVeloceImage} title={'Consegna rapida garantita'} text={'Con Coven la puntualità torna ad essere centrale. ll nostro flusso produttivo è stato pensato per garantire tempi rapidi e certi di consegna. Ogni ordine viene gestito con attenzione e precisione, senza margini di errore. La logistica efficiente ci permette di raggiungere ogni angolo del mondo. Velocità e affidabilità sono parte del nostro standard operativo. Seguiamo ogni fase della produzione con cura meticolosa. Il nostro team è sempre pronto a monitorare e ottimizzare le consegne. Grazie alla nostra organizzazione, anche le urgenze vengono gestite con efficienza. Con Coven, non devi mai preoccuparti dei tempi: arriviamo sempre puntuali. Scegliere Coven significa dire addio ad attese non programmate. '}>
    </ImageRightSection>
</section>

<Form complete={false}></Form>

<style>

    h1 {
        color: white;
        font-family: 'sf-ui-display-medium';
        font-weight: 600;
        font-style: Semibold;
        font-size: 80px;
        line-height: 74px;
        letter-spacing: -2%;
        text-align: center;

    }
    .hero-text {
       display: flex;
       justify-content: center;
       align-items: center;
    }
    .hero-text p {
        font-family: 'sf-ui-display-medium';
        font-weight: 500;
        font-style: Medium;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: 0%;
        text-align: center;
        width: 70%;
        color: white;
    }

    .cards-container {
        display: flex;
        justify-content: center;
        align-items: start;
        gap: 12px;
    }

    .cards-container > :global(.card-text-image) {
        transition: transform 0.3s ease;
    }
    
    .cards-container > :global(.card-text-image):hover {
        transform: scale(1.02);
    }

    @media (max-width: 767px) {
        h1 {
            font-size: 32px;
            line-height: 31px;
            text-align: start;
        }
        .hero-text {
            justify-content: start;
            align-items: end;
        }
        .hero-text p {
            text-align: start;
            width: 100%;
        }
        .cards-container {
            display: block;
        }
    }
</style>