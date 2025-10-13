<script>
    import HeroProducts from "../components/HeroProducts.svelte";
    import ContainerGrey from "../components/container-grey.svelte";
    import CardLineOfProduct from "../components/CardLineOfProduct.svelte";
    import Carrousel from "../components/Carrousel.svelte";
    import Form from "../components/Form.svelte";
    const backgroundImage = '/MasterDelight.webp';

    /*Image of product by line*/
    const  merch = '/cards-lines/merch.webp';
    const  visual = '/cards-lines/visual.webp';

    /**Images for carrousel carrousel-master-delight*/

    /*Image for carrousel*/
    const images = [
        { src: '/carrousel-master-delight/3.webp'},
        { src: '/carrousel-master-delight/4.webp'},
        { src: '/carrousel-master-delight/1.webp'},
        { src: '/carrousel-master-delight/2.webp'},
        { src: '/carrousel-master-delight/3.webp'},
        { src: '/carrousel-master-delight/4.webp'},
        { src: '/carrousel-master-delight/1.webp'},
        { src: '/carrousel-master-delight/2.webp'},
    ];
</script>

<HeroProducts backgroundImage={backgroundImage} category="Pasticceria e Panificazione" title="Master Delight">
</HeroProducts>

<ContainerGrey ifTitle={"Semplicità e risultati impeccabili in pasticceria"} text={"Master Delight Mech è la soluzione semplice ed affidabile pensata per i laboratori delle pasticcerie più evolute. Perfetto per chi cerca una funzionalità diretta, garantisce prestazioni precise senza il supporto dei programmi avanzati. Ideale per i professionisti della pasticceria che privilegiano praticità e semplicità, è lo strumento perfetto per ottenere dolci impeccabili. Scopri come Master Delight Mech può trasformare la tua attività di pasticceria, rendendo ogni cottura un successo. "}>
</ContainerGrey>

<section class="padding-lr padding-bt section-lines">
    <div>
        <CardLineOfProduct src={merch} title="MECH" link={"/#/master-delight-mech"}>
            <p class="p-text">
                La serie con termostato digitale con encoder e controllo manuale.
            </p>
        </CardLineOfProduct>
    </div>
    <div>
        <CardLineOfProduct src={visual} title="VISUAL" link={"/#/master-delight-visual"}>
            <p class="p-text">
                Una serie dotata di una tastiera capacitiva intuitiva e affidabile con un design sofisticato.
            </p>
        </CardLineOfProduct>
    </div>
</section>

<section class="padding-bt carrousel-container">
    <Carrousel images={images}></Carrousel>
</section>

<Form complete={false}></Form>

<style>
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
        width: 50%;
        height: 80px;
    }

    @media (max-width: 767px) {
        .section-lines {
            display: block;
        }

        .section-lines > * {
            margin-bottom: 2vh;
        }

        .p-text {
            width: 100%;
        }
    }
</style>