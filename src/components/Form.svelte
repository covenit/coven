<script>
    export let complete;
    import emailjs from 'emailjs-com';

    let username = "";
    let email = "";
    let message = "";
    let subject = "";

    const sendEmail = (event) => {
    event.preventDefault();

    emailjs.send(
        "service_ko9yzea",       // lo copias del dashboard
        "template_espvtpu",      // lo copias del dashboard
        {
            name: username,
            email: email,
            subject: subject,
            message: message
        },
        "bQtjWmCJtvVLnmpwW"        // lo copias del dashboard
        )
        .then(() => {
            alert("✅ Mensaje enviado con éxito!");
                username = "";
                email = "";
                subject = "";
                message = "";
            })
        .catch((error) => {
                console.error("Error:", error);
                alert("❌ Error al enviar el mensaje.");
        });
    };
</script>

<section class="padding-bt padding-lr form-container">
    {#if !complete}
         <div>
             <h2>Trasforma il tuo business con i nostri forni!</h2>
             <br>
             <p>Contattaci adesso! Il nostro team di esperti è pronto ad aiutarti a trovare il forno perfetto per soddisfare le esigenze del tuo business.</p>
         </div>
    {:else}
         <div>
             <h2>Pronto a ottimizzare la tua cucina?</h2>
             <br>
             <p>Contattaci adesso! Il nostro team di esperti è pronto ad aiutarti a trovare il forno perfetto per soddisfare le esigenze della tua attività.</p>
         </div>
    {/if}
    <div>
        <form on:submit={sendEmail}>
            <div class="form-group">
                <input type="text" placeholder="nome" bind:value={username} required />
                <input type="email" placeholder="e-mail" bind:value={email} required />
            </div>
            <div>
                <input type="text" name="subject" bind:value={subject} placeholder="soggetto" required />
            </div>
            <div>
                <textarea rows="10" placeholder="messaggio" bind:value={message} required></textarea>
            </div>
            <button type="submit" id="btnPrimary-black">Invia</button>
        </form>
    </div>
</section>

{#if complete}
    <!-- content here -->
    <section class="padding-bt padding-lr form-container-maps">
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1041.4256820239127!2d7.611185229016509!3d45.08278107536116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886b7ff1102def%3A0xad0cd89319776434!2sStrada%20Vicinale%20della%20Berlia%2C%20555%2C%2010146%20Torino%20TO%2C%20Italia!5e0!3m2!1ses!2sar!4v1753748534659!5m2!1ses!2sar" title="Coven S.r.l. Location Map" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div>
            <h2>Informazioni</h2>
            <br><br>
            <ul>
                <li><span>Coven S.r.l.</span></li>
                <li>Strada della Berlia 555 10146 Torino</li>
                <li><span>Phone</span></li>
                <li>+39 011 18864131</li>
                <li><span>Email</span></li>
                <li>info@coven.it</li>
            </ul>
        </div>
    </section>
{/if}

<style>
    .form-container, .form-container-maps{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .form-container h2 {
       text-align: start;   
        font-size: 36px;
        line-height: 40px;
        letter-spacing: -2%;
    }
    .form-container > div, .form-container-maps div {
        width: 45%;
    }
    .form-container-maps iframe {
        width: 100%;
        height: 70vh;
    }
    .form-container-maps h2 {
        text-align: start !important;
    }
    .form-container-maps ul {
        list-style: none;
    }
    .form-container-maps ul li {
        font-size: 20px;
        line-height: 44px;
        letter-spacing: 0%;
        color: #5B5B5B;
        font-family: 'sf-ui-display-medium';
    }
    .form-container-maps ul li span {
       color: #E20C18;
       font-family: 'sf-ui-display-bold';
    }
    .form-container-maps iframe {
        width: 100%;
        height: 70vh;
    }
    p{
        font-size: 16px !important;    
        line-height: 38px;
        letter-spacing: 0%;
        color: #5B5B5B;
    }
    .form-group {
        display: flex;
        gap: 12px;
    }
    form input, form textarea {
        width: 100%;
        margin-bottom: 12px;
    }
    .form-group input {
        width: 50%;
        margin-bottom: 12px;
    }

    form input, form textarea {
        border-radius: 4px;
        border-width: 2px;
        padding: 12px;
        border: none;
        border: 2px solid #2F2F2F
    }

    form input::placeholder, form textarea::placeholder {
        color: #5B5B5B66;
        font-size: 14px;
        font-family: "sf-ui-display-regular", sans-serif;
    }

    @media (max-width: 767px) { 
        .form-container, .form-container-maps {
            display: block;
        }
        .form-container > div, .form-container-maps div {
            width: 100%;
        }
        .form-group input {
            width: 100%;
        }
        .form-group {
            display: block;
        }
        p{
            margin-bottom: 4vh;
            line-height: 25px;
        }
        .form-container-maps iframe {
            height: 40vh;
            margin-bottom: 5vh;
        }
    }

</style>
