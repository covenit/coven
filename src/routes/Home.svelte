<script>
    import Hero from '../components/Hero.svelte';
    import ContainerGrey from '../components/container-grey.svelte';
    import ImageRightSection from '../components/ImageRightSection.svelte';
    import ImageCardWithLabel from '../components/ImageCardWithLabel.svelte';
    import CardProductMain from '../components/CardProductMain.svelte';
    import Statistics from '../components/Statistics.svelte';
    const backgroundImage = '/hero1.webp';
    const imageRightSection1 = '/home1.png';

    const imageCard1 = '/cards-category/restaurant-hotel.webp';
    const imageCard2 = '/cards-category/bakery-patisserie.webp';
    const imageCard3 = '/cards-category/bar-bistro.webp';
    const imageCard4 = '/cards-category/catering-rent.webp';
    
    /*Image of products main*/
    const cardProduct1 = '/cards-main-products/stilema.webp';
    const cardProduct2 = '/cards-main-products/SteadyCookTouch.webp';
    const cardProduct3 = '/cards-main-products/SteadyCookVisual.webp';
    const cardProduct4 = '/cards-main-products/MasterDelightVisual.webp';
    const cardProduct5 = '/cards-main-products/MasterDelightMech.webp';
    const cardProduct6 = '/cards-main-products/Accessori.webp';

    /*Images of why choose us*/

    const why1 = '/cards-why-choose-us/1.webp';
    const why2 = '/cards-why-choose-us/2.webp';
    const why3 = '/cards-why-choose-us/3.webp';
    const why4 = '/cards-why-choose-us/4.webp';
</script>

<Hero backgroundImage={backgroundImage}>
    <h1>Innovando forni <br> professionali <span>dal 1980</span></h1>
</Hero>

<ContainerGrey ifSubitutle={'Made in italy'} ifTitle={'Qualità, prestazioni ed efficienza'} text={"Fondata negli anni '80 a Cremona, siamo stati pionieri nel mondo dei forni combinati a vapore. Nel 2019, il nostro viaggio si è evoluto con un nuovo capitolo a Torino, guidato dalla nostra passione per l'eccellenza tecnologica e la ricerca delle condizioni di cottura perfette. Ogni forno che costruiamo viene attentamente testato dai nostri tecnici esperti durante il processo di assemblaggio, garantendo affidabilità e precisione. Il nostro impegno è creare forni che siano intuitivi, durevoli e che offrano prestazioni eccezionali."}>
</ContainerGrey>

<section class="padding-lr padding-bt">
    <ImageRightSection image={imageRightSection1} title={'Tradizione che ispira innovazione'} text={'Da oltre 40 anni perfezioniamo l’eccellenza culinaria. Con passione tutta italiana, uniamo tradizione e innovazione per offrire soluzioni uniche ai professionisti della cucina.'}>
        <br>
        <button id="btnPrimary-black">Scopri di più</button>
    </ImageRightSection>
</section>

<section class="padding-lr padding-bt">
    <h2>Forni di alta qualità su misura per le esigenze del tuo business</h2>
    <p class="p-sub">Ogni settore ha il suo forno professionale Coven. Trova la soluzione perfetta per le tue esigenze!</p>
    <br>
    <main>
        <ImageCardWithLabel image={imageCard1} title={'restaurant - hotel'} />
        <ImageCardWithLabel image={imageCard2} title={'bakery - patisserie'} />
        <ImageCardWithLabel image={imageCard3} title={'bar - bistro'} />
        <ImageCardWithLabel image={imageCard4} title={'catering - rent'} />
    </main>
</section>


<section class="padding-lr padding-bt">
    <h2 class="text-start">I nostri prodotti principali</h2>
    <br><br>
    <main>
        <CardProductMain image={cardProduct1} title={'Stilema'} text={"La nuova generazione di forni con la più alta tecnologia."}>
            <button id="btnPrimary-outline">Scopri di più</button>
        </CardProductMain>
        <CardProductMain image={cardProduct2} title={'Steady Cook Touch'} text={"Forni di alta qualità per l'industria della ristorazione."}>
            <button id="btnPrimary-outline">Scopri di più</button>
        </CardProductMain>
        <CardProductMain image={cardProduct3} title={'Steady Cook Visual'} text={"Forni di alta qualità per l'industria della ristorazione."}>
            <button id="btnPrimary-outline">Scopri di più</button>
        </CardProductMain>
        <CardProductMain image={cardProduct4} title={'Master Delight Visual'} text={"Forni di alta qualità per l'industria della pasticceria e panificazione."}>
            <button id="btnPrimary-outline">Scopri di più</button>
        </CardProductMain>
        <CardProductMain image={cardProduct5} title={'Master Delight Mech'} text={"Forni di alta qualità per l'industria della pasticceria e panificazione."}>
            <button id="btnPrimary-outline">Scopri di più</button>
        </CardProductMain>
        <CardProductMain image={cardProduct6} title={'Accessori'} text={"I migliori accessori sul mercato per la tua cucina."}>
            <button id="btnPrimary-outline">Scopri di più</button>
        </CardProductMain>
    </main>
</section>

<ContainerGrey ifTitle={'Perché scegliere noi?'}>
    <br>
    <main>
        <ImageCardWithLabel image={why1} title={'Assistenza 24/7, perché'} titleaux={'la tua cucina non dorme mai.'}/>
        <ImageCardWithLabel image={why2} title={'Affidabilità garantita,'} titleaux={'garanzia di 2 anni.'} />
        <ImageCardWithLabel image={why3} title={'Il tuo partner di'} titleaux={'fiducia in cucina.'}/>
        <ImageCardWithLabel image={why4} title={'Tecnologia intelligente,'} titleaux={'esecuzione impeccabile.'} />
    </main>
</ContainerGrey>

<section class="padding-lr padding-bt">
    <h2 class="text-start">Il nostro impatto</h2>
        <main>
            <div></div>
            <div class="stadistics">
                <Statistics n={40} text={'Anni di esperienza'} />
                <Statistics n={2300} text={'Clienti in tutto il mondo'} />
            </div>
        </main>
        <main>
            <div></div>
            <div class="stadistics">
                <Statistics n={20} text={'Presenza nei paesi'} />
                <Statistics n={60000} text={'Vendite di forni'} />
            </div>
        </main>
</section>


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

    section .text-start {
        text-align: start;
    }

    h1 span{
        color: #E20C18;
        font-weight: 500;
        font-style: Medium;
        font-size: 54px;
        line-height: 65px;
        letter-spacing: -2%;
        vertical-align: middle;
    }

    main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 16px;
    }

    .p-sub {
        font-family: 'sf-ui-display-medium';
        font-size: 18px;
        line-height: 57px;
        letter-spacing: 0%;
        text-align: center;
        color: #2F2F2F;
    }

    .stadistics {
        width: 50%;
        text-align: start !important;
        display: flex;
        justify-content: start;
        align-items: start;
        gap: 32px;
    }

    @media (max-width: 767px) {
        h1{
            font-size: 40px;
            line-height: 44px;
        }
        main {
            display: block;
        }

         .p-sub {
            line-height: 34px;
            text-align: start;
        }
        .stadistics {
            width: 100%;
        }

    }
</style>

