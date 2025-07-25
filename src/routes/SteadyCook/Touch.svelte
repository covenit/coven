<script>

    import HeroProducts from "../../components/HeroProducts.svelte";
    import ContainerGrey from "../../components/container-grey.svelte";
    import ContainerCharacteristics from "../../components/Container-characteristics.svelte";
    import Gallery from "../../components/Gallery.svelte";
    import CustomizedTools from "../../components/CustomizedTools.svelte";
    import CookingTechnologySection from "../../components/CookingTechnologySection.svelte";
    const backgroundImage = '/hero-line-steady.cook.webp';

    const image = "../public/line/touch.webp";

    const texts = [
        {t: "La serie programmabile top-class con display grafico touch-screen a colori da 7 pollici. L’innovativo sistema consente di memorizzare fino a 120 ricette con 6 fasi di cottura. L’ingresso USB permette di scaricare i dati HACCP e di aggiornare il software con nuove funzioni."},
    ]

    const charact = [
        {c: 'Autodiagnosi'},
        {c: 'Self-washing mode'},
        {c: 'Sonda al cuore'},
        {c: 'Regolazione della percentuale di umidità'},
        {c: 'Multicook - cottura multilivello'},
        {c: 'Regolazione con Inverter della velocità delle ventole fino a 9 Livelli'},
    ]

    const tags = [
        { tag: 'Elettrico'},
        { tag: 'Gas'}
    ];

</script>

<HeroProducts backgroundImage={backgroundImage} category="Gastonomia" title="Steady Cook" line={"touch"}>
</HeroProducts>

<section class="padding-lr padding-bt">
    <ContainerCharacteristics img={image} text={texts} charact={charact} tags={tags}>
    </ContainerCharacteristics>
</section>

<ContainerGrey ifTitle={"Perfezione senza sforzo con tecnologia avanzata"} text={"Nella gastronomia di alta classe, la precisione è tutto. Steady Cook Touch porta ogni piatto a un livello superiore, garantendo texture perfette, sapori definiti e una cottura uniforme ogni volta. Progettato per chef e ristoranti esigenti, offre automazione intelligente e controllo totale, ottimizzando il tempo senza compromettere la qualità. Quando la creatività incontra la tecnologia, i risultati sono straordinari. Scopri come Steady Cook Touch può trasformare la tua cucina."}>
    <button id="btnPrimary-black">Scopri di più</button>
</ContainerGrey>

<CookingTechnologySection></CookingTechnologySection>

<CustomizedTools></CustomizedTools>

<Gallery></Gallery>