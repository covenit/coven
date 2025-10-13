<script>
    const images = [
        {i: '../../icons/1.webp', t: "DELTA T COMBO è il sistema che mantiene una differenza di temperatura costante tra il cuore del prodotto e la camera di cottura. Al centro del sistema c’è la sonda al cuore: compatta, precisa e dalle elevate performance. Grazie ad essa è possibile rilevare in tempo reale la temperatura nel cuore del prodotto fino a raggiungere la cottura desiderata. La sonda Coven è rimovibile, per garantire maggiore durata e facilità di manutenzione. Con DELTA T COMBO puoi rigenerare, cuocere sous-vide a basse temperature ed ottenere risultati sempre perfetti."},
        {i: '../../icons/2.webp', t: "Il DUO STEAM SYSTEM è il cuore di Steady Cook: un sistema innovativo che genera vapore e consente un controllo preciso dei livelli di umidità. Una caldaia dedicata incanala il vapore nella camera di cottura, affiancata da dispositivi che permettono la produzione diretta, creando una combinazione perfetta di efficienza. Grazie al DUO STEAM SYSTEM, è possibile eseguire cotture rapide ad alta temperatura o preparazioni lente a bassa temperatura, con risultati sempre eccellenti. Steady Cook supporta anche la cottura sottovuoto, riducendo la perdita di peso e esaltando i sapori. Un inverter integrato permette di controllare le ventole su 9 velocità diverse, per una gestione precisa di ogni fase della cottura. "},
        {i: '../../icons/3.webp', t: "Il sistema di lavaggio Steady Cook è dotato di un braccio multi-getto che raggiunge ogni angolo della camera di cottura, assicurando una pulizia completa. Sono disponibili tre cicli di lavaggio, dal più veloce al più intenso, per adattarsi ad ogni esigenza operativa. I liquidi di lavaggio vengono raccolti da un sistema a doppio serbatoio, garantendo efficienza ed igiene costante."}
    ];
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