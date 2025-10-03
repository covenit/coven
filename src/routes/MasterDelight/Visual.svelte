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
    import Form from "../../components/Form.svelte";
    import SectionImageDetails from "../../components/SectionImageDetails.svelte";


    import {models} from "../../data/models-visual-master";
    import SectionModels from "../../components/SectionModels.svelte";

    const image = "/line/master-visual.webp";

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
            {src : "/carrousel-master-line/1.webp"},
            {src : "/carrousel-master-line/2.webp"},
            {src : "/carrousel-master-line/3.webp"},
            {src : "/carrousel-master-line/4.webp"},
            {src : "/carrousel-master-line/1.webp"},
            {src : "/carrousel-master-line/2.webp"},
            {src : "/carrousel-master-line/3.webp"},
            {src : "/carrousel-master-line/4.webp"}
    ];

    
    const spec_items = [
        {
            title: "acciaio inox",
            text: "tutta la struttura è realizzata con acciaio inox.", 
            src : "/spec-images/acciaioinox.png"
        },
        {
            title: "doppia vasca raccolta liquidi",
            text: "La porta del forno è dotata di un serbatoio di raccolta con un sistema automatico di raccolta dei liquidi che drena direttamente.", 
            src : "/spec-images/doppiavascaraccoltaliquidi.png"
        },
        {
            title: "porta a libro",
            text: "doppio vetro ispezionabile di grande spessore per abbattere in modo efficace la trasmissione del calore all’esterno.", 
            src : "/spec-images/portaalibro.png"
        },
        {
            title: "sistema master delight visual",
            text: "Elettronica capacitiva, software personalizzabile. 99 ricette programmabili e 6 fasi di cottura. Vapore regolabile 0-100% e 9 livelli di velocità.", 
            src : "/spec-images/sistemamasterdelightvisual.png"
        },
        {
            title: "evacuazione rapida umidità",
            text: "sistema automatico per valvola di sfiato.", 
            src : "/spec-images/evacuazionerapidaumidita.png"
        },
        {
            title: "porta usb",
            text: "per memorizzare dati e aggiornare il software.", 
            src : "/spec-images/portausb.png"
        },
        {
            title: "maniglia bistadio",
            text: "massima sicurezza e chiusura ermetica a tenuta perfetta. I forni di grande dimensione sono dotati di maniglie con sistema di chiusura in 2 punti", 
            src : "/spec-images/manigliabistadio.png"
        },
        {
            title: "umidificatore",
            text: "automatico e manuale.", 
            src : "/spec-images/umidificatore.png"
        }
    ];

    /*Images of details*/
    const imageDetails = "/details/masterdelight/visual.jpg";

    const details = [
        { id: 1, title: "cottura", text: "a convenzione"},
        { id: 2, title: "umidificatore / vapore", text: ""},
        { id: 3, title: "cottura", text: "mista convenzione / umidificatore"},
        { id: 4, title: "doppio display", text: "visualizzazione temperatura velocità ventola, timer e segnalazione allarmi"},
        { id: 5, title: "timer", text: ""},
        { id: 6, title: "valvola", text: "automatica di sfiato"},
        { id: 7, title: "temperatura", text: "camera"},
        { id: 8, title: "doppio display", text: "visualizzazione percentuale umidità, programmi e fasi"},
        { id: 9, title: "programmi", text: "e cicli speciali"},
        { id: 10, title: "fasi", text: ""},
        { id: 11, title: "percentuale", text: "umidità"},
        { id: 12, title: "luce", text: "camera"},
        { id: 13, title: "start", text: "stop"},
        { id: 14, title: "velocità", text: "ventola controllata da inverter"},
        { id: 15, title: "encoder", text: "push / set / up and down / stand-by"},
        { id: 16, title: "porta usb", text: ""}
    ];

</script>

<HeroProducts backgroundImage={backgroundImage} category="Pasticceria e Panificazione" title="Master Delight" line={"visual"}>
</HeroProducts>

<section class="padding-lr padding-bt">
    <ContainerCharacteristics img={image} text={texts} charact={charact} tags={tags}>
    </ContainerCharacteristics>
</section>

<ContainerGrey ifTitle={"L'arte della pasticceria, perfezionata"} text={"Nell’arte della pasticceria e nella panificazione,  la consistenza è la chiave della perfezione. Master Delight Visual è progettato per elevare ogni creazione, garantendo una cottura sempre uniforme, texture precise e risultati ottimali ogni volta. Quando la tecnologia incontra l'artigianato, l'arte della pasticceria raggiunge un nuovo livello. Scopri come Master Delight Visual può trasformare la tua attivita’."}>
    
</ContainerGrey>

<section class="padding-bt carrousel-container">
    <Carrousel images={images}></Carrousel>
</section>

<SectionImageDetails imageDetails={imageDetails} details={details}></SectionImageDetails>

<SectionComponent spec_items={spec_items}></SectionComponent>

<CookingTechnologySection></CookingTechnologySection>

<SectionModels models={models}></SectionModels>

<CustomizedTools></CustomizedTools>

<Gallery></Gallery>

<Form complete={false}></Form>