<script>
    import HeroProducts from "../../components/HeroProducts.svelte";
    import ContainerGrey from "../../components/container-grey.svelte";
    import ContainerCharacteristics from "../../components/Container-characteristics.svelte";
    const backgroundImage = '/hero-line-steady.cook.webp';
    import Gallery from "../../components/Gallery.svelte";
    import CustomizedTools from "../../components/CustomizedTools.svelte";
    import CookingTechnologySection from "../../components/CookingTechnologySection.svelte";
    import Carrousel from "../../components/Carrousel.svelte";
    import CardTextImage from "../../components/CardTextImage.svelte";
    import SectionComponent from "../../components/SectionComponent.svelte";
    import SectionModels from "../../components/SectionModels.svelte";
    import Form from "../../components/Form.svelte";
    import { models } from "../../data/models-visual-steadycook";
    import SectionImageDetails from "../../components/SectionImageDetails.svelte";
    const image = "/line/visual.webp";

    const texts = [
        {t: "La serie programmabile con tastiera a comandi capacitivi. L’innovativo sistema consente di memorizzare i dati fino a 99 ricette con 6 fasi di cottura."},
        {t: "L’ingresso Usb permette di memorizzare i dati e di aggiornare il software con nuove funzioni e ricette."}
    ]

    const charact = [
        {c: 'Sistema di lavaggio automatico'},
        {c: 'Regolazione della percentuale di umidità'},
        {c: 'Regolazione con Inverter della velocità delle ventole fino a 9 Livelli'},
        {c: 'Sonda al cuore'},
    ]

    const tags = [
        { tag: 'Elettrico'},
        { tag: 'Gas'}
    ];

    const images = [
        {src : "/carrousel-steady-cook-line/1.webp"},
        {src : "/carrousel-steady-cook-line/2.webp"},
        {src : "/carrousel-steady-cook-line/3.webp"},
        {src : "/carrousel-steady-cook-line/4.webp"},
        {src : "/carrousel-steady-cook-line/1.webp"},
        {src : "/carrousel-steady-cook-line/2.webp"},
        {src : "/carrousel-steady-cook-line/3.webp"},
        {src : "/carrousel-steady-cook-line/4.webp"}
    ]

    const spec_items = [
        {
            title: "acciaio inox",
            text: "tutta la struttura è realizzata con acciaio inox.", 
            src : "/spec-images/acciaioinox.png"
        },
        {
            title: "duo steam system",
            text: "innovativo sistema di gestione del vapore sia in forma diretta che con generatore esterno.", 
            src : "/spec-images/duosteamsystem.png"
        },
        {
            title: "porta a libro",
            text: "doppio vetro ispezionabile di grande spessore per abbattere in modo efficace la trasmissione del calore all’esterno.", 
            src : "/spec-images/portaalibro.png"
        },
        {
            title: "sistema steady cook visual",
            text: "Elettronica capacitiva con software personalizzabile e 99 ricette programmabili. Fino a 6 fasi di cottura e vapore regolabile 0-100%.", 
            src : "/spec-images/sistemasteadycookvisual.png"
        },
        {
            title: "doppia vasca raccolta liquidi",
            text: "La porta del forno è dotata di un serbatoio di raccolta con un sistema automatico di raccolta dei liquidi che drena direttamente.", 
            src : "/spec-images/doppiavascaraccoltaliquidi.png"
        },
        {
            title: "porta usb",
            text: "per memorizzare dati e aggiornare il software.", 
            src : "/spec-images/portausb.png"
        },
        {
            title: "self washing mode",
            text: "tre cicli di lavaggio per ogni esigenza completamente automatizzati.", 
            src : "/spec-images/selfwashingmode.png"
        },
        {
            title: "delta T combo",
            text: "sonda al cuore esterna o interna per una perfetta cottura ΔT.", 
            src : "/spec-images/deltatcombo.png"
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
    const imageDetails = "/details/steadycook/visual.webp";

    const details = [
        { id: 1, title: "cottura", text: "a convenzione"},
        { id: 2, title: "cottura", text: "a vapore"},
        { id: 3, title: "cottura", text: "mista convenzione / vapore"},
        { id: 4, title: "doppio display", text: "visualizzazione temperatura velocità ventola, timer e segnalazione"},
        { id: 5, title: "timer", text: ""},
        { id: 6, title: "delta-t", text: ""},
        { id: 7, title: "temperatura", text: "camera / sonda al cuore"},
        { id: 8, title: "doppio display", text: "visualizzazione percentuale umidità, programmi, fasi"},
        { id: 9, title: "programmi /", text: "valvola automatica di sfiato"},
        { id: 10, title: "fasi", text: ""},
        { id: 11, title: "percentual", text: "umidità"},
        { id: 12, title: "luce", text: "camera"},
        { id: 13, title: "start", text: "stop"},
        { id: 14, title: "velocità", text: "ventola controllata da inverter"},
        { id: 15, title: "encoder", text: "push / set / up and down / stand-by"},
        { id: 16, title: "porta usb", text: ""},
    ]

</script>

<HeroProducts backgroundImage={backgroundImage} category="Gastonomia" title="Steady Cook" line={"visual"}>
</HeroProducts>

<section class="padding-lr padding-bt">
    <ContainerCharacteristics img={image} text={texts} charact={charact} tags={tags}>
    </ContainerCharacteristics>
</section>

<ContainerGrey ifTitle={"Precisione e innovazione in ogni piatto"} text={"Con un design sofisticato e una tecnologia avanzata, Steady Cook Visual offre un controllo intuitivo e risultati costanti in ogni piatto. Ideale per chef e ristoranti che desiderano ottimizzare i tempi senza compromettere la qualità. Progettato per valorizzare la tua creatività ed efficienza. Una tecnologia che fa la differenza, perché in cucina ogni dettaglio conta.\nScopri come Steady Cook Visual può trasformare la tua cucina"}>
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