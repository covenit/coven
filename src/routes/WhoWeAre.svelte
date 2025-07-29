<script>
    import Hero from '../components/Hero.svelte';
    const backgroundImage = '/hero2.webp';
    import ContainerGrey from '../components/container-grey.svelte';
    import CardTextImage from '../components/CardTextImage.svelte';
    import ImageRightSection from '../components/ImageRightSection.svelte';
    import Form from '../components/Form.svelte';

    /*Cards Image*/
    const image1 = '/cards-our-mision/1.webp';
    const image2 = '/cards-our-mision/2.webp';
    const image3 = '/cards-our-mision/3.webp';

    /*src section Passione*/
    const passione = '/passione.webp';

    /*src section Consegna veloce*/
    const consegnaVeloceImage = '/consegnaveloce.webp';
</script>

<Hero backgroundImage={backgroundImage}>
    <h1>When Heat Matters</h1>
    <br>
    <div class="hero-text">
        <p>Il nostro impegno per ottenere soluzioni di riscaldamento ottimali ha costantemente guidato la nostra missione in Coven, dove ci sforziamo di portare calore e sapore in ogni piatto.</p>
    </div>
</Hero>

<ContainerGrey ifSubitutle={'Our mission'} ifTitle={'Eleva ogni esperienza gastronomica'}>
    <br>
    <div class="cards-container">
        <CardTextImage src={image1} title={"Innovazione senza limiti"} 
            text={"Continuando a guidare il mercato dei forni professionali attraverso una ricerca costante e lo sviluppo di tecnologie esclusive che garantiscono prestazioni eccezionali e il 'calore ideale' in ogni cucina."}>
        </CardTextImage>
        <CardTextImage src={image2} title={"Qualità artigianale italiana"} 
            text={"Produciamo forni Made in Italy con elevati standard di qualità, combinando tradizione e tecnologia avanzata, garantendo che ogni prodotto sia rigorosamente testato dal nostro team di tecnici specializzati."}>
        </CardTextImage>
        <CardTextImage src={image3} title={"Esperienza e semplicità"} 
            text={"Creiamo prodotti intuitivi e accessibili per i professionisti della cucina, offrendo soluzioni pratiche e affidabili con un eccellente rapporto qualità-prezzo, su misura per le reali esigenze del mercato."}>
        </CardTextImage>
    </div>
</ContainerGrey>

<section class="padding-lr padding-bt">
    <ImageRightSection aling={false} image={passione} title={'Passione'} text={'Il sistema di produzione di Coven soddisfa rapidamente le richieste dei clienti per una consegna veloce. I nostri forni a convezione sono assemblati con cura, garantendo durata grazie al nostro avanzato sistema di controllo interno e ai componenti di alta qualità.'}>
    </ImageRightSection>
</section>

<section class="padding-lr padding-bt">
    <ImageRightSection image={consegnaVeloceImage} title={'Consegna veloce'} text={'Il sistema di produzione di Coven soddisfa rapidamente le richieste dei clienti per una consegna veloce. I nostri forni a convezione sono assemblati con cura, garantendo durata grazie al nostro avanzato sistema di controllo interno e ai componenti di alta qualità.'}>
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
        .cards-container {
            display: block;
        }
    }
</style>