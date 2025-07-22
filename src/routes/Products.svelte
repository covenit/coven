<script>
    import HeroProducts from "../components/HeroProducts.svelte";
    import ContainerGrey from "../components/container-grey.svelte";
    import CardLineOfProduct from "../components/CardLineOfProduct.svelte";
    const backgroundImage = '/SteadyCook.jpg';


    /*Image of product by line*/
    const  merch = '/cards-lines/merch.webp';
    const  visual = '/cards-lines/visual.webp';
    const  touch = '/cards-lines/touch.webp';
</script>

<HeroProducts backgroundImage={backgroundImage} category="Gastonomia" title="Steady Cook">
</HeroProducts>

<ContainerGrey ifTitle={'Un forno speciale per una gastronomia eccezionale'} text={'Un forno high-tech disponibile in tre modelli: Mech, Visual e Touch; forni a convezione e combinati a vapore con controllo preciso e uniforme della temperatura, e software in grado di memorizzare fino a 120 ricette con 6 fasi di cottura differenti. La porta USB consente aggiornamenti del software, permettendo la gestione e semplificazione dei processi di lavoro.'}>
</ContainerGrey>

<section class="padding-lr padding-bt section-lines">
    <div>
        <CardLineOfProduct src={merch} title="MERCH" text={'La serie con termostato digitale con encoder e controllo manuale.'}>
        </CardLineOfProduct>
    </div>
    <div>
        <CardLineOfProduct src={visual} title="VISUAL" text={'Una serie dotata di una tastiera capacitiva intuitiva e affidabile con un design sofisticato.'}>
        </CardLineOfProduct>
    </div>
    <div>
        <CardLineOfProduct src={touch} title="TOUCH" text={'La serie programmabile di alta gamma con display touch-screen grafico a colori da 7".'}>
        </CardLineOfProduct>
    </div>
</section>

<style>
    .section-lines {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
    }

    .section-lines > * {
        flex: 1;
    }
</style>