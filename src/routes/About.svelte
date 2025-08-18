<script>
    import Form from "../components/Form.svelte";
    import Hero from "../components/Hero.svelte";
    const backgroundImage = '/hero-contatto.webp';
</script>

<Hero backgroundImage={backgroundImage}>
    <h1>Eleva la tua attività.</h1>
    <h1>Inizia oggi.</h1>
</Hero>

<Form complete={true}></Form>

<style>
    h1{
        color: white;
        font-family: 'sf-ui-display-medium';
        font-weight: 600;
        font-style: Semibold;
        font-size: 80px;
        line-height: 74px;
        letter-spacing: -2%;
        text-align: center;
    }

    @media (max-width: 767px) {
        h1 {
            font-size: 30px;
            line-height: 31px;
            text-align: start;
        }
    }
</style>
