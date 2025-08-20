<script>
    import HeroProducts from "../components/HeroProducts.svelte";
    import ContainerGrey from "../components/container-grey.svelte";
    import CardLineOfProduct from "../components/CardLineOfProduct.svelte";
    import Carrousel from "../components/Carrousel.svelte";
    import Gallery from "../components/Gallery.svelte";
    import Form from "../components/Form.svelte";
    const backgroundImage = '/SteadyCook.webp';


    /*Image of product by line*/
    const  merch = '/cards-lines/merch.webp';
    const  visual = '/cards-lines/visual.webp';
    const  touch = '/cards-lines/touch.webp';

    /*Image for carrousel*/
    const images = [
        { src: '/carrousel-steady-cook/1.webp'},
        { src: '/carrousel-steady-cook/2.webp'},
        { src: '/carrousel-steady-cook/3.webp'},
        { src: '/carrousel-steady-cook/4.webp'},
        { src: '/carrousel-steady-cook/1.webp'},
        { src: '/carrousel-steady-cook/2.webp'},
        { src: '/carrousel-steady-cook/3.webp'},
        { src: '/carrousel-steady-cook/4.webp'},
    ];
</script>

<HeroProducts backgroundImage={backgroundImage} category="Gastonomia" title="Steady Cook">
</HeroProducts>

<ContainerGrey ifTitle={'Un forno speciale per una gastronomia eccezionale'} text={'Un forno high-tech disponibile in tre modelli: Mech, Visual e Touch; forni a convezione e combinati a vapore con controllo preciso e uniforme della temperatura, e software in grado di memorizzare fino a 120 ricette con 6 fasi di cottura differenti. La porta USB consente aggiornamenti del software, permettendo la gestione e semplificazione dei processi di lavoro.'}>
</ContainerGrey>

<section class="padding-lr padding-bt section-lines">
    <div>
        <CardLineOfProduct src={merch} title="MERCH" link={"/#/steady-cook-merch"}>
            <p class="p-text">La serie con termostato digitale con encoder e controllo manuale.</p>
        </CardLineOfProduct>
    </div>
    <div>
        <CardLineOfProduct src={visual} title="VISUAL" link={"/#/steady-cook-visual"}>
            <p class="p-text">Una serie dotata di una tastiera capacitiva intuitiva e affidabile con un design sofisticato.</p>
        </CardLineOfProduct>
    </div>
    <div>
        <CardLineOfProduct src={touch} title="TOUCH" link={"/#/steady-cook-touch"}>
            <p class="p-text">La serie programmabile di alta gamma con display touch-screen grafico a colori da 7".</p>
        </CardLineOfProduct>
    </div>
</section>

<section class="padding-bt carrousel-container">
    <Carrousel images={images}></Carrousel>
</section>

<Gallery></Gallery>

<Form complete={false}></Form>

<style>
    .carrousel-container {
        background-color: #EEEEEE;
    }

    .section-lines {
        display: flex;
        justify-content: space-between;
        align-items: start;
        gap: 1vw;
    }

    .section-lines > * {
        flex: 1;
    }

    .p-text {
        font-family: 'sf-ui-display-regular';
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0%;
        color: rgba(91, 91, 91, 1);
        margin-bottom: 1vh;
        width: 70%;
        height: 80px;
    }

    @media (max-width: 767px){
        .section-lines {
            display: block;
        }
         .section-lines > * {
            margin-bottom: 2vh;
        }
    }

</style>