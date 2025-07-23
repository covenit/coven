<script>
    import HeroProducts from "../components/HeroProducts.svelte";
    import ContainerGrey from "../components/container-grey.svelte";
    import CardLineOfProduct from "../components/CardLineOfProduct.svelte";
    const backgroundImage = '/SteadyCook.jpg';

    /*Image of product by line*/
    const  merch = '/cards-lines/merch.webp';
    const  visual = '/cards-lines/visual.webp';
</script>

<HeroProducts backgroundImage={backgroundImage} category="Pasticceria e Panificazione" title="Master Delight">
</HeroProducts>

<ContainerGrey ifTitle={"Un forno che trasforma la panificazione in una forma d'arte"} text={"Il nuovo concetto Coven applicato alla pasticceria e panificazione disponibile in due versioni: Mech e Visual. Il termostato digitale e l'inversione della rotazione della ventola garantiscono un'alta precisione di cottura. La raccolta della condensa è garantita da un sistema a doppio serbatoio. Master Delight è il forno da pasticceria e panificazione di alta gamma di Coven, una meraviglia di perfezione e semplicità."}>
</ContainerGrey>

<section class="padding-lr padding-bt section-lines">
    <div>
        <CardLineOfProduct src={merch} title="MERCH">
            <p class="p-text">
                La serie con termostato digitale con encoder e controllo manuale.
            </p>
        </CardLineOfProduct>
    </div>
    <div>
        <CardLineOfProduct src={visual} title="VISUAL">
            <p class="p-text">
                Una serie dotata di una tastiera capacitiva intuitiva e affidabile con un design sofisticato.
            </p>
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

    .p-text {
        font-family: 'sf-ui-display-regular';
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0%;
        color: rgba(91, 91, 91, 1);
        margin-bottom: 1vh;
        width: 50%;
    }
</style>