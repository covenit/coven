<script>
    import HeroProducts from "../../components/HeroProducts.svelte";
    import ContainerGrey from "../../components/container-grey.svelte";
    import ContainerCharacteristics from "../../components/Container-characteristics.svelte";
    const backgroundImage = '/hero-line-steady.cook.webp';
    import Gallery from "../../components/Gallery.svelte";

    const image = "../public/line/visual.webp";

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

</script>

<HeroProducts backgroundImage={backgroundImage} category="Gastonomia" title="Steady Cook" line={"visual"}>
</HeroProducts>

<section class="padding-lr padding-bt">
    <ContainerCharacteristics img={image} text={texts} charact={charact} tags={tags}>
    </ContainerCharacteristics>
</section>

<ContainerGrey ifTitle={"Precisione e innovazione in ogni piatto"} text={"Con un design sofisticato e una tecnologia avanzata, Steady Cook Visual offre un controllo intuitivo e risultati costanti in ogni piatto. Ideale per chef e ristoranti che desiderano ottimizzare i tempi senza compromettere la qualità. Progettato per valorizzare la tua creatività ed efficienza. Una tecnologia che fa la differenza, perché in cucina ogni dettaglio conta.\nScopri come Steady Cook Visual può trasformare la tua cucina"}>
    <button id="btnPrimary-black">Scopri di più</button>
</ContainerGrey>

<Gallery></Gallery>