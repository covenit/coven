<script>
    import HeroProducts from "../../components/HeroProducts.svelte";
    import ContainerGrey from "../../components/container-grey.svelte";
    import ContainerCharacteristics from "../../components/Container-characteristics.svelte";
    const backgroundImage = '/hero-line-steady.cook.webp';

    const image = "../public/line/merch.webp";

    const texts = [
        {t: "La serie con termoregolazione digitale con encoder e comandi manuali."},
    ]

    const charact = [
        {c: 'Cottura a convezione e a vapore'},
        {c: 'Inversione di rotazione della ventola'},
        {c: 'Evacuazione rapida umidità'},
        {c: 'Doppia vasca raccolta liquidi'},
        {c: 'Ciclo misto convezione - vapore'}
    ]

    const tags = [
        { tag: 'Elettrico'},
        { tag: 'Gas'}
    ];

</script>

<HeroProducts backgroundImage={backgroundImage} category="Gastonomia" title="Steady Cook" line={"merch"}>
</HeroProducts>

<section class="padding-lr padding-bt">
    <ContainerCharacteristics img={image} text={texts} charact={charact} tags={tags}>
    </ContainerCharacteristics>
</section>

<ContainerGrey ifTitle={"Semplicità e affidabilità in ogni pasto"} text={"Steady Cook Mech offre una soluzione affidabile ed efficiente per coloro che cercano un controllo manuale e risultati costanti. Con la regolazione digitale della temperatura, questo modello è ideale per le attività alimentari che necessitano di un forno facile da usare senza compromettere la qualità. La tecnologia di cui hai bisogno, l'affidabilità che cerchi. Scopri come Steady Cook Mech può trasformare la tua cucina."}>
    <button id="btnPrimary-black">Scopri di più</button>
</ContainerGrey>