<script>
    import HeroProducts from "../components/HeroProducts.svelte";
    import ContainerCharacteristics from "../components/Container-characteristics.svelte";
    import ContainerGrey from "../components/container-grey.svelte";
    import Carrousel from "../components/Carrousel.svelte";

    const backgroundImage = '/hero-stilema.webp';
    const image = "../public/line/stilema.png";

    const texts = [
        {t: "La Serie Programmabile con tastiera a comandi capacitivi. L’innovativo sistema consente di memorizzare fino a 99 ricette, ciascuna con 6 fasi di cottura. L’ingresso USB permette di salvare i dati e aggiornare il software con nuove funzioni e ricette."},
    ];

    const charact = [
        {c: 'Sonda al cuore riscaldata a 4 punti'},
        {c: 'Doppia vasca raccolta liquidi'},
        {c: 'Sistema di risciacquo manuale integrato'},
        {c: 'Porta a doppio vetro ispessito e ispezionabile'}
    ]

    const tags = [
        { tag: 'Elettrico'},
        { tag: 'Gas'}
    ];

    const images = [
        {src : "../public/carrousel-stilema-line/1.webp"},
        {src : "../public/carrousel-stilema-line/2.webp"},
        {src : "../public/carrousel-stilema-line/3.webp"},
        {src : "../public/carrousel-stilema-line/4.webp"},
        {src : "../public/carrousel-stilema-line/1.webp"},
        {src : "../public/carrousel-stilema-line/2.webp"},
        {src : "../public/carrousel-stilema-line/3.webp"},
        {src : "../public/carrousel-stilema-line/4.webp"},
    ];

</script>

<HeroProducts backgroundImage={backgroundImage} category="Tutto in uno" title="Stilema" line="the future is here"></HeroProducts>

<section class="padding-lr padding-bt">
    <ContainerCharacteristics img={image} text={texts} charact={charact} tags={tags}>
    </ContainerCharacteristics>
</section>

<ContainerGrey ifTitle={"Il futuro non si predice, si progetta."} text={"Con Stilema, lo facciamo con il carattere e l’eleganza senza tempo del design italiano. Ogni modello è il frutto di anni di ricerca, innovazione tecnologica all’avanguardia e una cura maniacale per i dettagli. Con Stilema, non stai semplicemente cuocendo: stai dominando tempo, temperatura ed energia con una precisione assoluta. Non stai semplicemente osservando un forno: stai vivendo un’esperienza pensata per trasformare ogni cucina in un ambiente professionale, flessibile ed efficiente. Stilema non segue le tendenze. Le anticipa. Le definisce. Le supera. Il futuro inizia nel momento in cui lo accendi."}>
    <button id="btnPrimary-black">Scopri di più</button>
</ContainerGrey>

<section class="padding-bt carrousel-container">
    <Carrousel images={images}></Carrousel>
</section>


<section class="padding-lr padding-bt section-information" style="background-color: #F8F8F8;">
    <div class="main-info">
        <h4>CAMERA DI COTTURA</h4>
        <h5>Uniformità assoluta. Il futuro non lascia punti freddi.</h5>
        <br>
        <p>
            Realizzata completamente in acciaio inox, la camera di cottura di STILEMA consente il raggiungimento e il mantenimento della temperatura fino a 300°. Grazie al KNOW HOW del nostro comparto tecnico, ai continui studi e test di laboratorio, abbiamo raggiunto la massima efficienza e precisione della distribuzione dell’aria calda e la conseguente totale uniformità della temperatura. I risultati di cottura saranno sempre impeccabili in ogni singolo spazio utilizzato.
            STILEMA garantisce massima flessibilità in cucina, con capacità di carico teglie GN1/1 e 60X40 per garantire i migliori risultati sia per la Gastronomia che per la Pasticceria.</p>
    </div>
    <img src="../public/carrousel-stilema-line/A.webp" alt="">
</section>

<section class="padding-lr padding-bt section-back-information" style="background-image: url('../public/carrousel-stilema-line/background-a.webp');">
    <h4>SWIRLING GAS SYSTEM </h4>
    <h5>La rivoluzione del calore intelligente</h5>
    <br>
    <div>
        <p>
           Stilema utilizza un bruciatore brevettato con tecnologia SWIRLING GAS SYSTEM, che grazie alla miscelazione non premix e al controllo elettronico, raggiunge rapidamente temperature fino a 300 °C garantendo cotture perfette anche a pieno carico. Questa tecnologia assicura alte prestazioni con basse emissioni, risparmio energetico e massima sicurezza, grazie alla modulazione P.I.D. e alla gestione precisa del rapporto aria/gas.
        </p>
    </div>
</section>

<section class="padding-lr padding-bt section-information">
    <img src="../public/carrousel-stilema-line/B.webp" alt="">
    
    <div class="main-info">
        <h4>AIR FLOW</h4>
        <h5>La nuova era della flessibilità è nell’aria.</h5>
        <br>
        <p>La ventola di STILEMA, comandata da un motore brushless e relativo inverter, è in grado di variare automaticamente il senso di rotazione e la velocità in funzione dei diversi processi di cottura e del calore richiesto per ogni preparazione. Ciò garantisce massima flessibilità ed azione garantendo una velocità di cottura e di precisione senza precedenti. <br>
La scelta di utilizzare componentistica made in Italy di alta qualità, progettata e realizzata in partnership con i nostri fornitori, garantisce a STILEMA massima robustezza e performance ottimali oltre a semplificare gli interventi di manutenzione.</p>
    </div>
</section>

<section class="padding-lr padding-bt section-back-information" style="background-image: url('../public/carrousel-stilema-line/background-b.webp');">
    <h4>DUO STEAM SYSTEM (VAPORE)</h4>
    <h5>Controllo assoluto, efficienza che guarda al domani.</h5>
    <br>
    <div>
        <p>
            Innovativo sistema combinato che produce vapore consentendo di regolare la percentuale di umidità. Una caldaia dedicata conduce vapore nella camera di cottura insieme a dispositivi che ne consentono la produzione diretta in un binomio perfetto di efficienza. <br>
            DUO STEAM SYSTEM permette di realizzare cotture rapide ad alta temperatura per esaltare la croccantezza degli alimenti e preparazioni lente a bassa temperatura per preservare le proprietà organolettiche. STILEMA permette di cuocere alimenti sottovuoto, con minori perdite di peso e una maggiore esaltazione dei sapori ed è dotata di un inverter che permette di controllare le ventole a 9 differenti velocità.
        </p>
    </div>
</section>

<section class="padding-lr padding-bt section-information carrousel-container">
    <img src="../public/line/stilema.png" alt="">
    
    <div class="main-info">
        <h4>SWIRLING GAS SYSTEM</h4>
        <h5>La rivoluzione del calore intelligente</h5>
        <br>
        <div>
            <p>
                L’innovativo sistema di Lavaggio Automatico Professionale, si prende cura di Stilema mantenendo una pulizia sempre accurata ed efficace e garantendo elevati livelli di igiene per l’ambiente professionale.
                Sono disponibili 4 differenti programmi di lavaggio per adattarsi sempre di più ad ogni necessità: solo risciacquo, lavaggio delicato, medio e intenso. <br>
                Il riutilizzo dell’acqua calda garantisce un fattivo risparmio idrico ed energetico così come l’utilizzo di detergenti biologici e di brillantanti naturali garantiscono la giusta attenzione alla sostenibilità.
            </p>
        </div>
    </div>
</section>

<section class="padding-lr padding-bt section-information">
    
    <div class="main-info">
        <h4>SEMPRE CONNESSO</h4>
        <h5>La cucina del futuro, a portata di click.</h5>
        <br>
        <p>
            L’interfaccia Wi-Fi consente a STILEMA di connettersi facilmente a internet per segnalare guasti, programmare interventi di manutenzione e scaricare i dati HACCP in modo immediato. <br>
            Grazie alla connettività cloud, è possibile accedere da remoto in tempo reale tramite PC, monitorare tutti i parametri funzionali e aggiornare i programmi di cottura, ottimizzando la gestione del lavoro in cucina. Inoltre, la porta USB permette di salvare dati e aggiornare il software in modo semplice e intuitivo.
        </p>
    </div>
    
    <img src="../public/carrousel-stilema-line/C.webp" alt="">
</section>


<section class="padding-lr padding-bt carrousel-container section-details">
    <header>
        <h2>GRAPHICAL USER INTERFACE</h2>
        <h5>Tecnologia che pensa, semplicità che guida.</h5>
    </header>
    <br>
    <main>
        <div>
            <img src="../public/carrousel-stilema-line/d.png" alt="">
        </div>
        <div class="container-imgs">
            <p>12 tipi di <br> processi di cottura</p>
            <img src="../public/carrousel-stilema-line/e.png" alt="">
            <img src="../public/carrousel-stilema-line/f.png" alt="">
            <p>4 programmi di lavaggio con detersivo liquido o tablet</p>
        </div>
        <div class="container-texts">
            <h4>GRAPHICAL USER INTERFACE</h4>
            <br>
            <p>
                Stilema Touch è dotato di un ampio touch screen in vetro da 10” e di un software intelligente che gestisce automaticamente ogni processo di cottura per risultati eccellenti. L’interfaccia intuitiva offre 12 modalità di cottura, funzioni MultiCook e la personalizzazione completa di tutti i parametri, inclusi doratura e intensità. <br>
                Grazie al controllo della temperatura con algoritmo P.I.D., anche nei modelli elettrici, Stilema massimizza l’efficienza energetica. Goditi un preriscaldamento rapido, cotture a vapore precise con tre algoritmi di umidità dedicati e cicli di vapore da 30°C a 130°C per risultati perfetti ogni volta.
            </p>
        </div>
    </main>
</section>

<style>
    .section-information {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .section-information img, .section-information .main-info{
        width: 45%;
    }

    .section-information .main-info h4, .section-information .main-info h5,   .section-back-information h5,   .section-back-information h4 {
        font-family: "sf-ui-display-bold";
        font-size: 18px;    
        line-height: 46px;
        letter-spacing: -2%;
        color: #2F2F2F;
    }
    
    .section-information .main-info h4,   .section-back-information h4 {
        font-size: 20px; 
    }

    .section-information p,   .section-back-information p{
        font-family: "sf-ui-display-regular";
        font-size: 18px;
        line-height: 38px;
        letter-spacing: 0%;
        color: #5B5B5B;
    }
    
    .section-back-information {
        background-size: cover;
        background-position: center center;
        background-color: rgba(0, 0, 0, 0.6); /* negro semitransparente arriba */
        background-blend-mode: darken; /* o multiply, overlay, etc. */
    }
    .section-back-information h4, .section-back-information h5{
        text-align: center;
        color: white;
    }
    .section-back-information > div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .section-back-information p {
        width: 70%;
        text-align: center;
        color: white;
    }
    .section-back-information h4 {
        font-size: 24px;
        line-height: 52px;
        letter-spacing: -2%;
    }
    .section-details header h5 {
        font-family: "sf-ui-display-regular";
        font-size: 20px;
        line-height: 57px;
        letter-spacing: 0%;
        text-align: center;
    }
    .section-details main {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }
    .section-details main div {
        width: 20vw;
    }
    .section-details .container-imgs {
        width: 15vw;
        text-align: center;
    }
    .section-details .container-imgs p, .section-details h4 {
        font-family: "sf-ui-display-bold";
        font-size: 16px;
        line-height: 130%;
        letter-spacing: -2%;
        text-align: center;
        color: #E20C18;
    }
    .section-details h4 {
        font-family: "sf-ui-display-medium";
        text-align: start;
    }
    .section-details .container-texts p {
        color: #2F2F2F;
        padding-bottom: 2vh;
        border-bottom: 1px solid #E20C18;
    }
    .section-details main div img {
        width: 100%;
        height: auto;
        margin: 2vh 0;
    }

</style>