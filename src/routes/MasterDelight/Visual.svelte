<script>
    import HeroProducts from "../../components/HeroProducts.svelte";
    import ContainerCharacteristics from "../../components/Container-characteristics.svelte";
    import ContainerGrey from "../../components/container-grey.svelte";
    const backgroundImage = '/hero-line-steady.cook.webp';
    import Gallery from "../../components/Gallery.svelte";
    import CustomizedTools from "../../components/CustomizedTools.svelte";
    const image = "../public/line/master-visual.webp";

    const texts = [
        {t: "La serie programmabile con tastiera a comandi capacitivi. L’innovativo sistema consente di memorizzare i dati fino a 99 ricette con 6 fasi di cottura. L’ingresso usb per memorizzare i dati e l’aggiornamento del software con nuove funzioni e ricette."},
    ]

    const charact = [
        {c: 'Regolazione con Inverter della velocità delle ventole fino a 9 livelli'},
        {c: 'Regolazione della percentuale di umidità in modalità automatica e manuale'}
    ]

    const tags = [
        { tag: 'Elettrico'},
        { tag: 'Gas'}
    ];

</script>

<HeroProducts backgroundImage={backgroundImage} category="Pasticceria e Panificazione" title="Master Delight" line={"visual"}>
</HeroProducts>

<section class="padding-lr padding-bt">
    <ContainerCharacteristics img={image} text={texts} charact={charact} tags={tags}>
    </ContainerCharacteristics>
</section>

<ContainerGrey ifTitle={"L'arte della panificazione, perfezionata"} text={"Nella panificazione e nella pasticceria, la consistenza è la chiave della perfezione. Master Delight Visual è progettato per elevare ogni creazione, garantendo una cottura uniforme, texture precise e risultati ottimali ogni volta. Quando la tecnologia incontra l'artigianato, l'arte della panificazione raggiunge nuove vette. Scopri come Master Delight Visual può trasformare la tua panetteria."}>
    <button id="btnPrimary-black">Scopri di più</button>
</ContainerGrey>

<CustomizedTools></CustomizedTools>

<Gallery></Gallery>