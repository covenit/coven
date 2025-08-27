<script>
    import HeroProducts from "../../components/HeroProducts.svelte";
    import ContainerGrey from "../../components/container-grey.svelte";
    import ContainerCharacteristics from "../../components/Container-characteristics.svelte";
    import Gallery from "../../components/Gallery.svelte";
    import CustomizedTools from "../../components/CustomizedTools.svelte";
    import CookingTechnologySection from "../../components/CookingTechnologySection.svelte";
    import Carrousel from "../../components/Carrousel.svelte";
    import SectionComponent from "../../components/SectionComponent.svelte";
    import Form from "../../components/Form.svelte";
    import SectionImageDetails from "../../components/SectionImageDetails.svelte";
    import SectionModels from "../../components/SectionModels.svelte";

    import { models } from "../../data/models-merch-steadycook";

    const backgroundImage = '/hero-line-steady.cook.webp';
    const image = "/line/merch.webp";

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

    const images = [
            {src : "/carrousel-steady-cook-line/1.webp"},
            {src : "/carrousel-steady-cook-line/5.webp"},
            {src : "/carrousel-steady-cook-line/6.webp"},
            {src : "/carrousel-steady-cook-line/4.webp"},
            {src : "/carrousel-steady-cook-line/1.webp"},
            {src : "/carrousel-steady-cook-line/5.webp"},
            {src : "/carrousel-steady-cook-line/6.webp"},
            {src : "/carrousel-steady-cook-line/4.webp"}
    ];

    const spec_items = [
        {
            title: "acciaio inox",
            text: "tutta la struttura è realizzata con acciaio inox.", 
            src : "/spec-images/acciaioinox.png"
        },
        {
            title: "umidificatore",
            text: "automatico e manuale.", 
            src : "/spec-images/umidificatore.png"
        },
        {
            title: "porta a libro",
            text: "doppio vetro ispezionabile di grande spessore per abbattere in modo efficace la trasmissione del calore all’esterno.", 
            src : "/spec-images/portaalibro.png"
        },
        {
            title: "termoregolatore",
            text: "digitale con encoder.", 
            src : "/spec-images/termoregolatore.png"
        },
        {
            title: "doppia vasca raccolta liquidi",
            text: "La porta del forno è dotata di un serbatoio di raccolta con un sistema automatico di raccolta dei liquidi che drena direttamente.", 
            src : "/spec-images/doppiavascaraccoltaliquidi.png"
        },
        {
            title: "evacuazione rapida umidità",
            text: "sistema automatico per valvola di sfiato.", 
            src : "/spec-images/evacuazionerapidaumidita.png"
        },
        {
            title: "maniglia bistadio",
            text: "massima sicurezza e chiusura ermetica a tenuta perfetta. I forni di grande dimensione sono dotati di maniglie con sistema di chiusura in 2 punti", 
            src : "/spec-images/manigliabistadio.png"
        },
    ];

    /*Images of details*/
    const imageDetails = "/details/steadycook/merch.webp";
    const details = [
        { id: 1, title: "apertura/chiusura", text: "valvola evacuazione rapida"},
        { id: 2, title: "display", text: "termoregolatore digitale"},
        { id: 3, title: "encoder", text: "push-to-set"},
        { id: 4, title: "cottura", text: "a convenzione"},
        { id: 5, title: "cottura", text: "a vapore"},
        { id: 6, title: "cottura", text: "mista convenzione / vapore"},
        { id: 7, title: "timer", text: "da 1 to 120’ e posizione permanente"},
        { id: 8, title: "on/off", text: ""}

    ]
    

</script>

<HeroProducts backgroundImage={backgroundImage} category="Gastonomia" title="Steady Cook" line={"mech"}>
</HeroProducts>

<section class="padding-lr padding-bt">
    <ContainerCharacteristics img={image} text={texts} charact={charact} tags={tags}>
    </ContainerCharacteristics>
</section>

<ContainerGrey ifTitle={"Semplicità e affidabilità in ogni pasto"} text={"Steady Cook Mech offre una soluzione affidabile ed efficiente per coloro che cercano un controllo manuale e risultati costanti. Con la regolazione digitale della temperatura, questo modello è ideale per le attività alimentari che necessitano di un forno facile da usare senza compromettere la qualità. La tecnologia di cui hai bisogno, l'affidabilità che cerchi. Scopri come Steady Cook Mech può trasformare la tua cucina."}>
    <button id="btnPrimary-black">Scopri di più</button>
</ContainerGrey>

<section class="padding-bt carrousel-container">
    <Carrousel images={images}></Carrousel>
</section>

<SectionImageDetails imageDetails={imageDetails} details={details}></SectionImageDetails>

<SectionComponent spec_items={spec_items}></SectionComponent>

<SectionModels models={models}></SectionModels>

<CookingTechnologySection></CookingTechnologySection>

<CustomizedTools></CustomizedTools>

<Gallery></Gallery>

<Form complete={false}></Form>