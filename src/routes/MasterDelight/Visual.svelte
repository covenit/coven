<script>
    import HeroProducts from "../../components/HeroProducts.svelte";
    import ContainerCharacteristics from "../../components/Container-characteristics.svelte";
    import ContainerGrey from "../../components/container-grey.svelte";
    const backgroundImage = '/hero-line-steady.cook.webp';
    import Gallery from "../../components/Gallery.svelte";
    import CustomizedTools from "../../components/CustomizedTools.svelte";
    import CookingTechnologySection from "../../components/CookingTechnologySection.svelte";
    import Carrousel from "../../components/Carrousel.svelte";
    import SectionComponent from "../../components/SectionComponent.svelte";
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

    const images = [
            {src : "../public/carrousel-master-line/1.webp"},
            {src : "../public/carrousel-master-line/2.webp"},
            {src : "../public/carrousel-master-line/3.webp"},
            {src : "../public/carrousel-master-line/4.webp"},
            {src : "../public/carrousel-master-line/1.webp"},
            {src : "../public/carrousel-master-line/2.webp"},
            {src : "../public/carrousel-master-line/3.webp"},
            {src : "../public/carrousel-master-line/4.webp"}
    ];

    
    const spec_items = [
        {
            title: "acciaio inox",
            text: "tutta la struttura è realizzata con acciaio inox.", 
            src : "../public/spec-images/acciaioinox.png"
        },
        {
            title: "doppia vasca raccolta liquidi",
            text: "La porta del forno è dotata di un serbatoio di raccolta con un sistema automatico di raccolta dei liquidi che drena direttamente.", 
            src : "../public/spec-images/doppiavascaraccoltaliquidi.png"
        },
        {
            title: "porta a libro",
            text: "doppio vetro ispezionabile di grande spessore per abbattere in modo efficace la trasmissione del calore all’esterno.", 
            src : "../public/spec-images/portaalibro.png"
        },
        {
            title: "sistema master delight visual",
            text: "Elettronica capacitiva, software personalizzabile. 99 ricette programmabili e 6 fasi di cottura. Vapore regolabile 0-100% e 9 livelli di velocità.", 
            src : "../public/spec-images/sistemamasterdelightvisual.png"
        },
        {
            title: "evacuazione rapida umidità",
            text: "sistema automatico per valvola di sfiato.", 
            src : "../public/spec-images/evacuazionerapidaumidita.png"
        },
        {
            title: "porta usb",
            text: "per memorizzare dati e aggiornare il software.", 
            src : "../public/spec-images/portausb.png"
        },
        {
            title: "maniglia bistadio",
            text: "massima sicurezza e chiusura ermetica a tenuta perfetta. I forni di grande dimensione sono dotati di maniglie con sistema di chiusura in 2 punti", 
            src : "../public/spec-images/manigliabistadio.png"
        },
        {
            title: "umidificatore",
            text: "automatico e manuale.", 
            src : "../public/spec-images/umidificatore.png"
        }
    ]

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

<section class="padding-bt carrousel-container">
    <Carrousel images={images}></Carrousel>
</section>

<SectionComponent spec_items={spec_items}></SectionComponent>

<CookingTechnologySection></CookingTechnologySection>

<CustomizedTools></CustomizedTools>

<Gallery></Gallery>