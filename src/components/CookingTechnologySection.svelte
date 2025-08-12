<script>
    const images = [
        {i: '../../icons/1.webp', t: "DELTA T COMBO è il sistema che consente di mantenere una differenza di temperatura costante tra il cuore del prodotto e la camera di cottura. La sonda del nucleo, uno strumento compatto ma dalle ottime performance, è il cuore del DELTA T COMBO, permettendo il rilevamento in tempo reale della temperatura nel cuore del materiale grezzo fino a raggiungere la cottura desiderata. La sonda del nucleo Coven è rimovibile per una maggiore durata. Rigenerare e cuocere sous-vide a basse temperature sono alcune delle operazioni rese possibili."},
        {i: '../../icons/2.webp', t: "Al cuore della tecnologia Steady Cook c'è il DUO STEAM SYSTEM, un sistema innovativo combinato che genera vapore, consentendo un controllo preciso dei livelli di umidità. Una caldaia dedicata incanala il vapore nella camera di cottura, insieme a dispositivi che permettono la produzione diretta, creando una combinazione perfetta di efficienza. Il DUO STEAM SYSTEM consente cotture rapide ad alta temperatura e preparazioni lente a bassa temperatura, garantendo sempre risultati di alta qualità. Inoltre, Steady Cook permette la cottura sottovuoto, riducendo la perdita di peso e migliorando i sapori. Steady Cook è anche dotato di un inverter che consente di controllare le ventole su 9 velocità diverse."},
        {i: '../../icons/3.webp', t: "Il sistema di lavaggio Steady Cook è dotato di un braccio multi-getto in grado di raggiungere ogni angolo della camera di cottura per una pulizia impeccabile, grazie a tre cicli di lavaggio, dal più rapido al più intenso. I liquidi vengono raccolti da un sistema a doppio serbatoio."}
    ]
</script>

<section class="padding-lr padding-bt">
    {#each images as image}
        <div>
            <img src="{image.i}" alt="" srcset="">
            <p>{image.t}</p>
        </div>
    {/each}
</section>

<style>
    section {
        display: flex;
        align-items: start;
        justify-content: space-between;
        gap: 20px;
    }

    section img {
        width: 100%;
    }

    section > * {
        width: 30%;
    }

    section p {
        font-family: 'sf-ui-display-regular';
        font-size: 16px;
        line-height: 38px;
        letter-spacing: 0%;
        vertical-align: middle;
        color: #5B5B5B;
    }

    @media (max-width: 767px) {
        section {
            display: block;
        }
        section > * {
            width: 100%;
            margin-bottom: 6vh;
        }
        section p {
            line-height: 25px;
        }
    }

</style>