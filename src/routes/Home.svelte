<script>
    import Hero from '../components/Hero.svelte';
    import ContainerGrey from '../components/container-grey.svelte';
    import ImageRightSection from '../components/ImageRightSection.svelte';
    import ImageCardWithLabel from '../components/ImageCardWithLabel.svelte';
    import CardProductMain from '../components/CardProductMain.svelte';
    import Statistics from '../components/Statistics.svelte';
    import { fade } from 'svelte/transition';
    import Form from '../components/Form.svelte';
    import SectionVideos from '../components/SectionVideos.svelte';

    const imageRightSection1 = '/home1.webp';

    const imageCard1 = '/cards-category/restaurant-hotel.webp';
    const imageCard2 = '/cards-category/bakery-patisserie.webp';
    const imageCard3 = '/cards-category/bar-bistro.webp';
    const imageCard4 = '/cards-category/catering-rent.webp';
    
    /*Image of products main*/
    const cardProduct1 = '/cards-main-products/SteadyCookMech.webp';
    const cardProduct2 = '/cards-main-products/SteadyCookTouch.webp';
    const cardProduct3 = '/cards-main-products/SteadyCookVisual.webp';
    const cardProduct4 = '/cards-main-products/MasterDelightVisual.webp';
    const cardProduct5 = '/cards-main-products/MasterDelightMech.webp';
    const cardProduct6 = '/cards-main-products/stilema.webp';

    /*Images of why choose us*/

    const why1 = '/cards-why-choose-us/1.webp';
    const why2 = '/cards-why-choose-us/2.webp';
    const why3 = '/cards-why-choose-us/3.webp';
    const why4 = '/cards-why-choose-us/4.webp';

    /*Animation*/

    let visible = false; // Variable que indica si el componente ya entró en pantalla

    // Esta función se ejecuta cuando el IntersectionObserver detecta cambios
    function handleIntersection(entries) {
        const [entry] = entries;
        if (entry.isIntersecting) {
        visible = true; // Si el componente entra al viewport, lo mostramos
        }
    }

    let observer;

    // Esta función es un "action" de Svelte. Se usa como use:observe en el HTML
    function observe(node) {
        // Creamos un nuevo IntersectionObserver y le pasamos la función callback
        observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.3 // Solo se activa cuando el 30% del componente es visible
        });

        observer.observe(node); // Empezamos a observar el nodo (elemento HTML)

        return {
        destroy() {
            // Esta función se ejecuta cuando el componente se elimina
            observer.unobserve(node); // Dejamos de observarlo
        }
        };
    }


</script>

<Hero>
    
</Hero>

<ContainerGrey ifSubitutle={'Made in Italy'} ifTitle={"Qualità, affidabilita' ed efficienza"} text={"Fondata negli anni ’80 a Cremona, Coven è stata pioniera nel mondo dei forni combinati a vapore. Nel 2019, il nostro percorso si è evoluto con un nuovo capitolo a Torino. La passione per l’eccellenza tecnologica guida ogni nostra scelta. La ricerca costante mira a creare le condizioni ideali per raggiungere la cottura perfetta. Ogni forno è attentamente testato e collaudato dai nostri tecnici esperti. Garantiamo così affidabilità, precisione e durata nel tempo. I nostri prodotti uniscono tecnologia avanzata e semplicità d’uso. Realizziamo forni intuitivi, resistenti e progettati per un uso intensivo quotidiano. L’obiettivo è offrire prestazioni eccellenti in ogni cucina professionale. Scegliere Coven significa affidarsi a qualità, innovazione ed a una competenza consolidata nel tempo. "}>
</ContainerGrey>


<section class="padding-lr padding-bt">
    <ImageRightSection image={imageRightSection1} title={'Tradizione che ispira innovazione'} text={'Da oltre 40 anni perfezioniamo i nostri forni con dedizione e cura. Poniamo particolare attenzione ai sistemi di combustione, al controllo del vapore ed alla ventilazione della camera di cottura. La nostra esperienza ci permette di combinare tradizione e tecnologia avanzata. Ogni forno Coven nasce per offrire prestazioni eccellenti e costanti nel tempo. La passione tutta italiana guida ogni fase della progettazione e della produzione. L’innovazione si integra con la nostra maestria artigianale, creando soluzioni uniche. I nostri prodotti sono pensati per i professionisti della cucina più esigenti. Precisione, affidabilità e facilità d’uso sono il cuore di ogni forno. Ogni dettaglio è progettato per migliorare l’esperienza di cottura. Scegliere Coven significa portare nella tua cucina tradizione, innovazione ed eccellenza.'}>
        <br>
        <a href="#/who-we-are">
            <button id="btnPrimary-black">Scopri di più</button>
        </a>
    </ImageRightSection>
</section>


<section class="padding-lr padding-bt">
    <h2>La qualità che cerchi</h2>
    <p class="p-sub">Ogni tua esigenza è soddisfatta da un forno professionale Coven. Scopri la soluzione perfetta per le esigenze del tuo business!</p>
    <br>
    <main>
        <ImageCardWithLabel image={imageCard1} title={'restaurant - hotel'} />
        <ImageCardWithLabel image={imageCard2} title={'bakery - patisserie'} />
        <ImageCardWithLabel image={imageCard3} title={'bar - bistro'} />
        <ImageCardWithLabel image={imageCard4} title={'catering - rent'} />
    </main>
</section>


<section class="padding-lr padding-bt">
    <h2 class="text-start">La nostra gamma di forni professionali</h2>
    <br><br>
    <main>
        <CardProductMain image={cardProduct1} title={'Steady Cook Mech'} text={"Forni professionali per la ristorazione con termoregolazione digitale e comandi manuali."}>
            <a href="#/steady-cook-mech">
                <button id="btnPrimary-outline">Scopri di più</button>
            </a>
        </CardProductMain>
        <CardProductMain image={cardProduct3} title={'Steady Cook Visual'} text={"Forni professionali per la ristorazione. Tecnologia programmabile con comandi capacitivi."}>
            <a href="#/steady-cook-visual">
                <button id="btnPrimary-outline">Scopri di più</button>
            </a>
        </CardProductMain>
        <CardProductMain image={cardProduct2} title={'Steady Cook Touch'} text={"Forni professionali per la ristorazione. Tecnologia programmabile con display touch screen."}>
            <a href="#/steady-cook-touch">
                <button id="btnPrimary-outline">Scopri di più</button>
            </a>
        </CardProductMain>
        <CardProductMain image={cardProduct6} title={'Stilema'} text={"Nuova generazione di forni a ventilazione laterale: alta tecnologia e grande intuitività. Test in corso nel 2025, distribuzione da gennaio 2026."}>
            
        </CardProductMain>
        <CardProductMain image={cardProduct4} title={'Master Delight Visual'} text={"Forni professionali per la pasticceria e la panificazione. Tecnologia programmabile con comandi capacitivi."}>
            <a href="#/master-delight-visual">
                <button id="btnPrimary-outline">Scopri di più</button>
            </a>
        </CardProductMain>
        <CardProductMain image={cardProduct5} title={'Master Delight Mech'} text={"Forni professionali per la pasticceria e la panificazione. Termoregolazione digitale con comandi manuali."}>
            <a href="#/master-delight-mech">
                <button id="btnPrimary-outline">Scopri di più</button>
            </a>
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

<section class="padding-lr padding-bt" use:observe>
    <h2 class="text-start">Il nostro impatto</h2>
        {#if visible}
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
                <Statistics n={80000} text={'Forni in utilizzo wordlwide'} />
            </div>
        </main>
        {/if}
</section>

<SectionVideos></SectionVideos>

<Form complete={false}></Form>


<style>

    h1 {
        color: white;
        font-family: 'sf-ui-display-medium';
        font-weight: 600;
        font-style: Semibold;
        font-size: 70px;
        line-height: 74px;
        letter-spacing: -2%;
        text-align: center;
    }

    section .text-start {
        text-align: start;
        margin-bottom: 2vh;
    }

    main {
        display: flex;
        justify-content: space-between;
        align-items: start;
        flex-wrap: wrap;
        gap: 1vw;
    }

    .p-sub {
        font-family: 'sf-ui-display-regular';
        font-size: 18px;
        line-height: 38px;
        letter-spacing: 0%;
        color: #5B5B5B;
        width: 100%;
        margin: 0 auto;
        padding: 2vh 0vh;
        text-align: center;
    }

    .stadistics {
        width: 50%;
        text-align: start !important;
        display: flex;
        justify-content: start;
        align-items: start;
        gap: 32px;
    }
    
    /*
    .elements-clients {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        align-items: center;
    }

    .elements-clients div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2px;
        padding: 8px 56px;
    }

    .elements-clients p {
        font-weight: 700;
        font-size: 18px;
        line-height: 100%;
        letter-spacing: -2%;
        text-transform: lowercase;
        text-align: center;
        vertical-align: middle;
    } */

    @media (max-width: 767px) {
        main {
            display: block;
        }

        .p-sub {
            font-size: 16px;
            line-height: 25px;
            text-align: start;
        }
        .stadistics {
            width: 100%;
            display: block;
        }
        /*
        .elements-clients {
            display: block;
        }

        .elements-clients div {
            display: flex;
            justify-content: start;
            gap: 2px;
            padding: 8px;
        }
        .elements-clients p {
            text-align: start;
        }*/

    }
</style>

