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
        <p>La ricerca della cottura perfetta guida costantemente il nostro lavoro in coven. l’attenzione ai dettagli, la garanzia dei componenti di alta qualità e i test di laboratorio ci permettono di offrire un prodotto unico nella sua totalita’.</p>
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
    <ImageRightSection aling={false} image={passione} title={'Passione'} text={'Sosteniamo con orgoglio i cuochi che utilizzano i nostri forni, stimolando la loro creatività con semplici gesti. Made in Italy, i forni professionali a convezione Coven sono interamente realizzati e testati rigorosamente per un uso intensivo. Offriamo informazioni essenziali pre-vendita e assistenza continua.'}>
    </ImageRightSection>
</section>

<section class="padding-lr padding-bt">
    <ImageRightSection image={consegnaVeloceImage} title={'Consegna rapida garantita'} text={'Il sistema di produzione di coven si distingue per la sua capacità di garantire tempi di consegna rapidi e sicuri. Grazie ad un servizio di logistica efficiente e affidabile arriviamo ovunque nel mondo.'}>
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