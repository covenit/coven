<script>
    let username = '';
    let email = '';
    let subject = '';
    let message = '';
    let enviado = false;
    let error = false;

    async function enviarFormulario(e) {

        e.preventDefault();

        const res = await fetch('https://formspree.io/f/xnnzjero', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email, message, subject})
        });

        if (res.ok) {
            enviado = true;
            email = '';
            message = '';
            subject = '';
        } else {
            error = true;
        }
    }
</script>

<section class="padding-bt padding-lr form-container">
    <div>
        <h2>Trasforma il tuo business con i nostri forni!</h2>
        <br>
        <p>Contattaci oggi! Il nostro team di esperti è pronto ad aiutarti a trovare il forno perfetto per soddisfare le esigenze del tuo business.</p>
    </div>
    <div>
        {#if enviado}
        <h2>Ok.</h2>
        {:else if error}
        <h2>Error</h2>
        {:else}
        <form on:submit={enviarFormulario}>
            <div class="form-group">
                <input type="text" name="username" bind:value={username} placeholder="Name" required />
                <input type="email" name="email" bind:value={email} placeholder="Email" required />
            </div>
            <div>
                <input type="text" name="subject" bind:value={subject}  placeholder="Subject" required />
            </div>
            <div>
                <textarea rows="10" name="message" bind:value={message} placeholder="Message" required></textarea>
            </div>
            <button type="submit" id="btnPrimary-black">Invia</button>
        </form>
        {/if}
    </div>
</section>


<style>
    .form-container {
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
    .form-container > div {
        width: 45%;
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
        font-family: "sf-ui-displat-regular", sans-serif;
    }

</style>
