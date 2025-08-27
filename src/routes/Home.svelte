<script>
    import Hero from '../components/Hero.svelte';
    import ContainerGrey from '../components/container-grey.svelte';
    import ImageRightSection from '../components/ImageRightSection.svelte';
    import ImageCardWithLabel from '../components/ImageCardWithLabel.svelte';
    import CardProductMain from '../components/CardProductMain.svelte';
    import Statistics from '../components/Statistics.svelte';
    import { fade } from 'svelte/transition';
    import Form from '../components/Form.svelte';


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

<Hero backgroundImage={backgroundImage}>
    <h1>Innovando forni <br> professionali <p>dal 1980</p></h1>
</Hero>

<ContainerGrey ifSubitutle={'Made in italy'} ifTitle={'Qualità, prestazioni ed efficienza'} text={"Fondata negli anni '80 a Cremona, siamo stati pionieri nel mondo dei forni combinati a vapore. Nel 2019, il nostro viaggio si è evoluto con un nuovo capitolo a Torino, guidato dalla nostra passione per l'eccellenza tecnologica e la ricerca delle condizioni di cottura perfette. Ogni forno che costruiamo viene attentamente testato dai nostri tecnici esperti durante il processo di assemblaggio, garantendo affidabilità e precisione. Il nostro impegno è creare forni che siano intuitivi, durevoli e che offrano prestazioni eccezionali."}>
</ContainerGrey>


<section class="padding-lr padding-bt">
    <ImageRightSection image={imageRightSection1} title={'Tradizione che ispira innovazione'} text={'Da oltre 40 anni perfezioniamo l’eccellenza culinaria. Con passione tutta italiana, uniamo tradizione e innovazione per offrire soluzioni uniche ai professionisti della cucina.'}>
        <br>
        <a href="#/who-we-are">
            <button id="btnPrimary-black">Scopri di più</button>
        </a>
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
            <a href="#/styleme">
                <button id="btnPrimary-outline">Scopri di più</button>
            </a>
        </CardProductMain>
        <CardProductMain image={cardProduct2} title={'Steady Cook Touch'} text={"Forni di alta qualità per l'industria della ristorazione."}>
            <a href="#/steady-cook-touch">
                <button id="btnPrimary-outline">Scopri di più</button>
            </a>
        </CardProductMain>
        <CardProductMain image={cardProduct3} title={'Steady Cook Visual'} text={"Forni di alta qualità per l'industria della ristorazione."}>
            <a href="#/steady-cook-visual">
                <button id="btnPrimary-outline">Scopri di più</button>
            </a>
        </CardProductMain>
        <CardProductMain image={cardProduct4} title={'Master Delight Visual'} text={"Forni di alta qualità per l'industria della pasticceria e panificazione."}>
            <a href="#/master-delight-visual">
                <button id="btnPrimary-outline">Scopri di più</button>
            </a>
        </CardProductMain>
        <CardProductMain image={cardProduct5} title={'Master Delight Mech'} text={"Forni di alta qualità per l'industria della pasticceria e panificazione."}>
            <a href="#/master-delight-mech">
                <button id="btnPrimary-outline">Scopri di più</button>
            </a>
        </CardProductMain>
        <CardProductMain image={cardProduct6} title={'Accessori'} text={"I migliori accessori sul mercato per la tua cucina."}>
            <a href="#/accessories">
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
                <Statistics n={60000} text={'Vendite di forni'} />
            </div>
        </main>
        {/if}
</section>


<ContainerGrey ifTitle={'Clienti che si fidano di noi'}>
    <div class="elements-clients">
        <div>
            <p>PizzaHut</p>
        </div>
        <div>
            <p>Dominos</p>
        </div>
        <div>
            <p>PapaJohns</p>
        </div>
        <div>
            <p>LittleCaesars</p>
        </div>
        <div>
            <p>Sbarro</p>
        </div>
        <div>
            <p>CaliforniaPizzaKitchen</p>
        </div>
        <div>
            <p>PizzaExpress</p>
        </div>
        <div>
            <p>BlazePizza</p>
        </div>
        <div>
            <svg width="25" height="26" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.66666 3.1665L5.33332 5.83317M29.3333 3.1665L26.6667 5.83317M29.3333 29.8332L26.6667 27.1665M2.66666 29.8332L5.33332 27.1665M2.66666 21.8332H4.66666M10.6667 3.1665V5.1665M29.3333 11.1665H27.3333M21.3333 29.8332V27.8332M24 21.8332H28.6667M21.3333 3.1665V8.49984M2.66666 11.1665H7.99999M10.6667 29.8332V24.4998M15.2457 10.5874L10.0876 15.7456C9.82356 16.0096 9.69155 16.1416 9.64209 16.2938C9.59859 16.4277 9.59859 16.572 9.64209 16.7058C9.69155 16.8581 9.82356 16.9901 10.0876 17.2541L15.2457 22.4123C15.5097 22.6763 15.6418 22.8083 15.794 22.8577C15.9279 22.9012 16.0721 22.9012 16.206 22.8577C16.3582 22.8083 16.4902 22.6763 16.7542 22.4123L21.9124 17.2541C22.1764 16.9901 22.3084 16.8581 22.3579 16.7058C22.4014 16.572 22.4014 16.4277 22.3579 16.2938C22.3084 16.1416 22.1764 16.0096 21.9124 15.7456L16.7542 10.5874C16.4902 10.3234 16.3582 10.1914 16.206 10.1419C16.0721 10.0984 15.9279 10.0984 15.794 10.1419C15.6418 10.1914 15.5098 10.3234 15.2457 10.5874Z" stroke="#2F2F2F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p>
                Marco's
            </p>
        </div>
    </div>
</ContainerGrey>


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

    section .text-start {
        text-align: start;
        margin-bottom: 2vh;
    }

    h1 p{
        color: #E20C18;
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
    }

    .stadistics {
        width: 50%;
        text-align: start !important;
        display: flex;
        justify-content: start;
        align-items: start;
        gap: 32px;
    }

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
    }

    @media (max-width: 767px) {
        h1{
            font-size: 32px;
            line-height: 31px;
            text-align: start;
        }
        h1 p{
            font-size: 26px;
            line-height: 26px;
        }
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
        }

    }
</style>

