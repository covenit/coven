<script>

    import HeroProducts from "../../components/HeroProducts.svelte";
    import ContainerGrey from "../../components/container-grey.svelte";
    import ContainerCharacteristics from "../../components/Container-characteristics.svelte";
    import Gallery from "../../components/Gallery.svelte";
    import CustomizedTools from "../../components/CustomizedTools.svelte";
    import CookingTechnologySection from "../../components/CookingTechnologySection.svelte";
    import Carrousel from "../../components/Carrousel.svelte";
    import SectionComponent from "../../components/SectionComponent.svelte";
    import Form from "../../components/Form.svelte";
    const backgroundImage = '/hero-line-steady.cook.webp';


    import SectionModels from "../../components/SectionModels.svelte";
    import { models } from "../../data/models-touch-steadycook";

    const image = "/line/touch.webp";

    const texts = [
        {t: "La serie programmabile top-class con display grafico touch-screen a colori da 7 pollici. L’innovativo sistema consente di memorizzare fino a 120 ricette con 6 fasi di cottura. L’ingresso USB permette di scaricare i dati HACCP e di aggiornare il software con nuove funzioni."},
    ]

    const charact = [
        {c: 'Autodiagnosi'},
        {c: 'Self-washing mode'},
        {c: 'Sonda al cuore'},
        {c: 'Regolazione della percentuale di umidità'},
        {c: 'Multicook - cottura multilivello'},
        {c: 'Regolazione con Inverter della velocità delle ventole fino a 9 Livelli'},
    ]

    const tags = [
        { tag: 'Elettrico'},
        { tag: 'Gas'}
    ];

    const images = [
            {src : "/carrousel-steady-cook-line/8.webp"},
            {src : "/carrousel-steady-cook-line/1.webp"},
            {src : "/carrousel-steady-cook-line/4.webp"},
            {src : "/carrousel-steady-cook-line/7.webp"},
            {src : "/carrousel-steady-cook-line/1.webp"},
            {src : "/carrousel-steady-cook-line/5.webp"},
            {src : "/carrousel-steady-cook-line/6.webp"},
            {src : "/carrousel-steady-cook-line/7.webp"}
    ];

    const spec_items = [
        {
            title: "acciaio inox",
            text: "tutta la struttura è realizzata con acciaio inox.", 
            src : "/spec-images/acciaioinox.png"
        },
        {
            title: "duo steam system",
            text: "innovativo sistema di gestione del vapore sia in forma diretta che con generatore esterno.", 
            src : "/spec-images/duosteamsystem.png"
        },
        {
            title: "porta a libro",
            text: "doppio vetro ispezionabile di grande spessore per abbattere in modo efficace la trasmissione del calore all’esterno.", 
            src : "/spec-images/portaalibro.png"
        },
        {
            title: "sistema steady cook touch screen",
            text: "Touch screen grafico, software personalizzabile, 120 ricette programmabili, 6 fasi di cottura, vapore regolabile 0-100%, 9 velocità delle ventole.", 
            src : "/spec-images/sistemasteadycookvisual.png"
        },
        {
            title: "doppia vasca raccolta liquidi",
            text: "La porta del forno è dotata di un serbatoio di raccolta con un sistema automatico di raccolta dei liquidi che drena direttamente.", 
            src : "/spec-images/doppiavascaraccoltaliquidi.png"
        },
        {
            title: "porta usb",
            text: "per memorizzare dati e aggiornare il software.", 
            src : "/spec-images/portausb.png"
        },
        {
            title: "self washing mode",
            text: "tre cicli di lavaggio per ogni esigenza completamente automatizzati.", 
            src : "/spec-images/selfwashingmode.png"
        },
        {
            title: "delta T combo",
            text: "sonda al cuore esterna o interna per una perfetta cottura ΔT.", 
            src : "/spec-images/deltatcombo.png"
        },
        {
            title: "evacuazione rapida umidità",
            text: "sistema automatico per valvola di sfiato.", 
            src : "/spec-images/evacuazionerapidaumidita.png"
        },
        {
            title: "multicook",
            text: "Sistema di cottura multilivello per preparare alimenti con tempi diversi. Include 72 ricette precaricate e 48 personalizzabili.", 
            src : "/spec-images/multicook.png"
        },
        {
            title: "maniglia bistadio",
            text: "massima sicurezza e chiusura ermetica a tenuta perfetta. I forni di grande dimensione sono dotati di maniglie con sistema di chiusura in 2 punti", 
            src : "/spec-images/manigliabistadio.png"
        },
    ];

    const imageDetails = "/details/steadycook/touch/touch1.jpg";

</script>

<HeroProducts backgroundImage={backgroundImage} category="Gastonomia" title="Steady Cook" line={"touch"}>
</HeroProducts>

<section class="padding-lr padding-bt">
    <ContainerCharacteristics img={image} text={texts} charact={charact} tags={tags}>
    </ContainerCharacteristics>
</section>

<ContainerGrey ifTitle={"Perfezione senza sforzo con tecnologia avanzata"} text={"Nella gastronomia di alta classe, la precisione è tutto. Steady Cook Touch porta ogni piatto a un livello superiore, garantendo texture perfette, sapori definiti e una cottura uniforme ogni volta. Progettato per chef e ristoranti esigenti, offre automazione intelligente e controllo totale, ottimizzando il tempo senza compromettere la qualità. Quando la creatività incontra la tecnologia, i risultati sono straordinari. Scopri come Steady Cook Touch può trasformare la tua cucina."}>
    
</ContainerGrey>

<section class="padding-bt carrousel-container">
    <Carrousel images={images}></Carrousel>
</section>

<section class="padding-bt padding-lr details-container">
    <div class="image-details-container">
        <img src={imageDetails} alt="" srcset="">
    </div>
    <div class="card-detail-container">
        <article class="flex">
           <div class="number">1</div>
            <p><span>display grafico touch screen ad alta visibilità</span></p>
        </article>
        <article>
            <p>Librerie memorizzate e programmabili. Cicli di cottura: mantenimento, delta-T, rigenerazione, bassa temperatura e sottovuoto. programmi di lavaggio automatici, autodiagnosi e aggiornamento in remoto.</p>
        </article>
        <br>
        <article>
            <div class="number">2</div>
            <p>porta <span>USB</span></p>
        </article>
        <br>
        <article class="item">
            <img src="/details/steadycook/touch/touch2.jpg" alt="">
            <div>
                <p><span>home page</span></p>
                <p>ampia panoramica, grafica intuitiva, selezione delle funzioni facile e veloce</p>
            </div>
        </article>
        <article class="item">
            <img src="/details/steadycook/touch/touch3.jpg" alt="">
            <div>
                <p><span>ricette</span></p>
                <p>possibilità di salvare programmi di cottura personalizzati, libreria di programmi precaricati appossitamente realizzati e testati nei
                    nostri laboratori, aggiornamento e salvataggio dati tramite porta usb</p>
            </div>
        </article>
        <article class="item">
            <img src="/details/steadycook/touch/touch4.jpg" alt="">
            <div>
                <p><span>cicli speciali</span></p>
                <p>multicook con funzione
                    count-up che permette
                    un ciclo di cottura
                    “continua” e funzione
                    count-down in cui
                    teglie con tempi di
                    preparazione differenti
                    completano la cottura
                    tutte nello stesso
                    momento</p>
            </div>
        </article>
    </div>    
</section>

<SectionComponent spec_items={spec_items}></SectionComponent>

<CookingTechnologySection></CookingTechnologySection>

<SectionModels models={models}></SectionModels>

<CustomizedTools></CustomizedTools>

<Gallery></Gallery>

<Form complete={false}></Form>

<style>
    .details-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }
    .details-container > .image-details-container img{
        width: 500px;
    }
    .card-detail-container article {
        display: flex;
        justify-content: start;
        align-items: start;
        gap: 14px;
        margin-bottom: 2vh;
        width: 400px;
    }
    .card-detail-container article img {
        margin-bottom: 2vh;
    }
    .card-detail-container article p {
        font-family: 'sf-ui-display-regular';
        color: #2F2F2F;
        font-size: 16px;
        line-height: 130%;
        letter-spacing: -2%
    }
    .card-detail-container article p span {
        font-family: 'sf-ui-display-bold';
        color: #E20C18;
    }
    .card-detail-container article div {
        padding-bottom: 2vh;
        border-bottom: 1px solid #E20C18;
    }
    .details-container .number {
        width: 20px;
        height: 20px;
        top: 68px;
        left: 723px;
        gap: 7.14px;
        border-radius: 30px;
        background: #E20C18;
        color: white;
        font-family: 'sf-ui-display-medium';
        text-align: center;
        font-size: 11.72px;
        line-height: 20px;
        letter-spacing: -2%;
    }
    @media (max-width: 767px) {
        .details-container {
            display: block;
        }
        .details-container > .image-details-container img {
            width: 100%;
            margin-bottom: 2vh;
        }
        .card-detail-container article p {
            width: 100%;
        }
        .card-detail-container article {
            width: 100%;
        }
        .item {
            display: block !important;
        }
        .item p, .item img {
            width: 100%;
        }
    }

</style>