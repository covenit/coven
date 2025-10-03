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
    import SectionModels from "../../components/SectionModels.svelte";
    import {models} from "../../data/models-mech-master";
    
    const image = "/line/master-mech.webp";

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
            {src : "/carrousel-master-line/6.webp"},
            {src : "/carrousel-master-line/8.webp"},
            {src : "/carrousel-master-line/5.webp"},
            {src : "/carrousel-master-line/7.webp"},
            {src : "/carrousel-master-line/6.webp"},
            {src : "/carrousel-master-line/8.webp"},
            {src : "/carrousel-master-line/5.webp"},
            {src : "/carrousel-master-line/7.webp"},
    ];

    const imagesGalery = [
        {src : "/gallery/master/mech/1.webp"},
        {src : "/gallery/master/mech/2.webp"},
        {src : "/gallery/master/mech/3.webp"},
        {src : "/gallery/master/mech/4.webp"},
        {src : "/gallery/master/mech/5.webp"},
        {src : "/gallery/master/mech/6.webp"},
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
            title: "dual tank for cliq collection",
            text: "The oven door features a drip tank with an automatic liquid collection system that drains directly.", 
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
        }
    ];


    /*Images of details*/
    const imageDetails = "/details/masterdelight/merch.webp";

    const details = [
        { id: 1, title: "apertura/chiusura", text: "valvola evacuazione rapida"},
        { id: 2, title: "display", text: "termoregolatore digitale"},
        { id: 3, title: "encoder", text: "push-to-set"},
        { id: 4, title: "umidificatore", text: "automatico"},
        { id: 5, title: "umidificatore", text: "manuale"},
        { id: 6, title: "timer", text: "da 1 to 120’ e posizione permanente"},
        { id: 7, title: "on/off", text: ""},
        { id: 8, title: "regolazione", text: "velocità della ventola"}
    ];
</script>

<HeroProducts backgroundImage={backgroundImage} category="Pasticceria e Panificazione" title="Master Delight" line={"mech"}>
</HeroProducts>

<section class="padding-lr padding-bt">
    <ContainerCharacteristics img={image} text={texts} charact={charact} tags={tags}>
    </ContainerCharacteristics>
</section>

<ContainerGrey ifTitle={"Semplicità e risultati impeccabili per ogni cottura"} text={"Master Delight Mech offre una soluzione semplice ma affidabile per panetterie e pasticcerie. Perfetto per chi ha bisogno di funzionalità diretta, Master Delight Mech garantisce prestazioni affidabili senza la complessità delle funzionalità avanzate. Ideale per i professionisti che danno priorità alla praticità e alla qualità, è lo strumento perfetto per ottenere risultati eccellenti in pasticceria. Scopri come Master Delight Mech può trasformare la tua attivita’."}>
    
</ContainerGrey>

<section class="padding-bt carrousel-container">
    <Carrousel images={images}></Carrousel>
</section>

<SectionImageDetails imageDetails={imageDetails} details={details}></SectionImageDetails>

<SectionComponent spec_items={spec_items}></SectionComponent>

<CookingTechnologySection></CookingTechnologySection>

<SectionModels models={models}></SectionModels>

<CustomizedTools></CustomizedTools>

<Gallery images={imagesGalery}></Gallery>

<Form complete={false}></Form>