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
    const image = "/line/mech.webp";

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

    const imagesGalery = [
        {src : "/gallery/steadycook/mech/1.webp"},
        {src : "/gallery/steadycook/mech/2.webp"},
        {src : "/gallery/steadycook/mech/3.webp"},
        {src : "/gallery/steadycook/mech/4.webp"},
        {src : "/gallery/steadycook/mech/5.webp"},
        {src : "/gallery/steadycook/mech/6.webp"},
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
            title: "maniglia bistadio - chiusura 2 punti",
            text: "massima sicurezza e chiusura a tenuta perfetta, i forni di grandi dimensioni sono dotati di maniglie con sistema di chiusura in 2 punti.", 
            src : "/spec-images/manigliabistadio.png"
        },
    ];

    /*Images of details*/
    const imageDetails = "/details/steadycook/mech.png";
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

<ContainerGrey ifTitle={"La tecnologia di cui hai bisogno, l’affidabilità che cerchi"} text={"Steady Cook Mech offre una soluzione affidabile ed efficiente per coloro che cercano un controllo manuale e risultati costanti. Con la regolazione digitale della temperatura, questo modello è ideale per le attivita’ professionali che necessitano di un forno resistente, facile da usare senza comprometterne la qualità. La doccetta manuale (optional) garantisce una pulizia semplice e veloce, per un forno al tuo servizio sempre pulito ed impeccabile. Scopri come steady cook mech può trasformare la tua cucina."}>
    
</ContainerGrey>

<section class="padding-bt carrousel-container">
    <Carrousel images={images}></Carrousel>
</section>

<SectionImageDetails imageDetails={imageDetails} details={details}></SectionImageDetails>

<SectionComponent spec_items={spec_items}></SectionComponent>

<SectionModels models={models} isStilema=false></SectionModels>

<CookingTechnologySection></CookingTechnologySection>

<CustomizedTools></CustomizedTools>

<Gallery images={imagesGalery}></Gallery>

<Form complete={false}></Form>