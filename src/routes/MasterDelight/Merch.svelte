<script>
    import HeroProducts from "../../components/HeroProducts.svelte";
    import ContainerCharacteristics from "../../components/Container-characteristics.svelte";
    import ContainerGrey from "../../components/container-grey.svelte";
    const backgroundImage = '/hero-line-steady.cook.webp';
    import Gallery from "../../components/Gallery.svelte";
    import CustomizedTools from "../../components/CustomizedTools.svelte";
    import CookingTechnologySection from "../../components/CookingTechnologySection.svelte";
    import Carrousel from "../../components/Carrousel.svelte";
    
    const image = "../public/line/master-merch.webp";

    const texts = [
        {t: "La serie con termoregolazione digitale con encoder e comandi manuali."},
    ]

    const charact = [
        {c: 'Cottura a convezione'},
        {c: 'Regolazione velocità della ventola'},
        {c: 'Umidificatore automatico e manuale'},
        {c: 'Inversione di rotazione della ventola'}
    ]

    const tags = [
        { tag: 'Elettrico'},
        { tag: 'Gas'}
    ];


    const images = [
            {src : "../public/carrousel-master-line/5.webp"},
            {src : "../public/carrousel-master-line/7.webp"},
            {src : "../public/carrousel-master-line/6.webp"},
            {src : "../public/carrousel-master-line/8.webp"},
            {src : "../public/carrousel-master-line/5.webp"},
            {src : "../public/carrousel-master-line/7.webp"},
            {src : "../public/carrousel-master-line/6.webp"},
            {src : "../public/carrousel-master-line/8.webp"}
    ];

</script>

<HeroProducts backgroundImage={backgroundImage} category="Pasticceria e Panificazione" title="Master Delight" line={"merch"}>
</HeroProducts>

<section class="padding-lr padding-bt">
    <ContainerCharacteristics img={image} text={texts} charact={charact} tags={tags}>
    </ContainerCharacteristics>
</section>

<ContainerGrey ifTitle={"Semplicità in ogni cottura"} text={"Master Delight Mech offre una soluzione semplice ma affidabile per panetterie e pasticcerie. Perfetto per chi ha bisogno di funzionalità diretta, Master Delight Mech garantisce prestazioni affidabili senza la complessità delle funzionalità avanzate. Ideale per i professionisti che danno priorità alla praticità e alla qualità, è lo strumento perfetto per ottenere risultati eccellenti nella panificazione e nella pasticceria ogni volta. Scopri come Master Delight Mech può trasformare la tua panetteria."}>
    <button id="btnPrimary-black">Scopri di più</button>
</ContainerGrey>

<section class="padding-bt carrousel-container">
    <Carrousel images={images}></Carrousel>
</section>

<CookingTechnologySection></CookingTechnologySection>

<CustomizedTools></CustomizedTools>

<Gallery></Gallery>