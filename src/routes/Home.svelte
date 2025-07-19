<script>
    import Hero from '../components/Hero.svelte';
    import ContainerGrey from '../components/container-grey.svelte';
    import ImageRightSection from '../components/ImageRightSection.svelte';
    const backgroundImage = '/hero1.webp';
    const imageRightSection1 = '/home1.png';
</script>

<Hero backgroundImage={backgroundImage}>
    <h1>Innovando forni <br> professionali <span>dal 1980</span></h1>
</Hero>

<ContainerGrey ifSubitutle={'Made in italy'} ifTitle={'Qualità, prestazioni ed efficienza'} text={"Fondata negli anni '80 a Cremona, siamo stati pionieri nel mondo dei forni combinati a vapore. Nel 2019, il nostro viaggio si è evoluto con un nuovo capitolo a Torino, guidato dalla nostra passione per l'eccellenza tecnologica e la ricerca delle condizioni di cottura perfette. Ogni forno che costruiamo viene attentamente testato dai nostri tecnici esperti durante il processo di assemblaggio, garantendo affidabilità e precisione. Il nostro impegno è creare forni che siano intuitivi, durevoli e che offrano prestazioni eccezionali."}>
</ContainerGrey>

<section class="padding-lr padding-bt">
    <ImageRightSection image={imageRightSection1} title={'Tradizione che ispira innovazione'} text={'Da oltre 40 anni perfezioniamo l’eccellenza culinaria. Con passione tutta italiana, uniamo tradizione e innovazione per offrire soluzioni uniche ai professionisti della cucina.'}>
        <br>
        <button id="btnPrimary-black">Scopri di più</button>
    </ImageRightSection>
</section>

<style>

    h1 {
        color: white;
        font-family: 'sf-ui-display-medium';
        font-weight: 600;
        font-style: Semibold;
        font-size: 80px;
        line-height: 74px;
        letter-spacing: -2%;
        text-align: center;

    }

    h1 span{
        color: #E20C18;
        font-weight: 500;
        font-style: Medium;
        font-size: 54px;
        line-height: 65px;
        letter-spacing: -2%;
        vertical-align: middle;
    }

    div {
       display: flex;
       justify-content: center;
       align-items: center;
    }
    div p {
        width: 70%;
        font-family: 'sf-ui-display-medium';
        font-weight: 300;
        font-size: 18px;
        line-height: 38px;
        letter-spacing: 0%;
        text-align: center;
        color: #5B5B5B;

    }
</style>

