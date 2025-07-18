<script>
    import Hero from '../components/Hero.svelte';
    const backgroundImage = '/hero2.webp';
    import ContainerGrey from '../components/container-grey.svelte';
</script>

<Hero backgroundImage={backgroundImage}>
    <h1>When Heat Matters</h1>
    <br>
    <div>
        <p>Il nostro impegno per ottenere soluzioni di riscaldamento ottimali ha costantemente guidato la nostra missione in Coven, dove ci sforziamo di portare calore e sapore in ogni piatto.</p>
    </div>
</Hero>

<ContainerGrey ifSubitutle={'Our mission'} ifTitle={'Eleva ogni esperienza gastronomica'}>
</ContainerGrey>

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
    div {
       display: flex;
       justify-content: center;
       align-items: center; 
    }
    p {
        font-family: 'sf-ui-display-medium';
        font-weight: 500;
        font-style: Medium;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: 0%;
        text-align: center;
        width: 70%;
        color: white;
    }
</style>