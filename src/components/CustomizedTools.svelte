<script>
    const img = "../../public/business-establishment.webp";
</script>

<section>
    <div class="padding-lr padding-bt" style="background-image: url({img})">
        <h2>Fatto su misura. Strumenti personalizzati per risultati perfetti</h2>
        <button id="btnPrimary-black">Scopri di più</button>
    </div>
</section>

<style>
    h2 {
        padding-bottom: 5vh;
    }
    section {
        background: #F8F8F8;
    }
    section div {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        text-align: center;
        height: 150vh;
    }
    @media (max-width: 767px) {
        section div {
            text-align: start;
            height: 90vh;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: end;
        }
    }
</style>