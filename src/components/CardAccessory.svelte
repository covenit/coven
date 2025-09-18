<script>
    export let accessory;
    export let activeFilter;

    let showModal = false;

    function openModal() {
        showModal = true;
    }

    function closeModal() {
        showModal = false;
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<article on:click={openModal}>
    <div>
        <h5>{accessory.code}</h5>
        <h4>{accessory.name}</h4>
        <p>{accessory.serie}</p>
        <br>
        <div class="container-categ">
            {#each accessory.category as item}
            {#if activeFilter == item}
            <span class="active-span">{item}</span> <!-- content here -->
            {:else}
            <span>{item}</span> <!-- else content here -->
            {/if}
            {/each}
        </div>
    </div>
    <img src={accessory.image} alt="" srcset="">
</article>

<!-- svelte-ignore a11y_click_events_have_key_events -->
{#if showModal}

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="modal-backdrop" on:click={closeModal}>
    <div class="modal-content">
        <header>      
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#E5E5E5"/>
                <path d="M12 10.8891L15.8891 7L17 8.11094L13.1109 12L17 15.8891L15.8891 17L12 13.1109L8.11094 17L7 15.8891L10.8891 12L7 8.11094L8.11094 7L12 10.8891Z" fill="black"/>
            </svg>
        </header>
        <main>
            <img src={accessory.image} alt="">
            <div>
                <h5>{accessory.name}</h5>
                <p>{accessory.text}</p>
                <a href="/#/about">
                    <button id="btnPrimary-black">Richiedi informazioni</button>
                </a>
            </div>
        </main>
    </div>
</div>

{/if}

<style>
    article {
        width: 49%;
        padding: 40px;
        border-radius: 20px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px 0px #60617029;
        display: flex;
    }

    article:hover {
        box-shadow: 0px 4px 8px 0px #60617040;
        cursor: pointer;
        transform: translateY(-6px);
        transition: all 0.3s ease;
    }

    article > div {
        width: 45%;
    }
    article > img {
        width: 212px;
        height: 156px;
    }
    article .container-categ {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
    }
    article span {
        padding: 4px 14px;
        border-radius: 20px;
        background-color: #4949491A;
        border: 1px solid #494949;
        color: #494949;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0%;
        vertical-align: middle;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    article .active-span {
        border: 1px solid #E20C18;
        outline-offset: 2px;
        color: #E20C18;
        background: #E20C181A;
    }
    article h4, article h5 {
        font-family: 'sf-ui-display-bold';
        font-size: 16px;
        line-height: 146%;
        letter-spacing: 2%;
        text-transform: uppercase;
        margin-bottom: 2vh;
    }
    article h5 {
        color: #5B5B5BB2;
    }
    article p {
        font-family: 'sf-ui-display-medium';
        margin-bottom: 2vh;
    }

    .modal-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;
    }

    .modal-content {
        position: relative;
        background: #fff;
        padding: 10px;
        border-radius: 16px;
        width: 40vw;
    }
    .modal-content header {
        display: flex;
        justify-content: end;
    }
    .modal-content main {
        text-align: center;
        padding: 2vh;
    }
    .modal-content main img {
        height: 15vh;
        width: auto;
    }
    .modal-content main > div {
        padding: 1vh 8vh;
    }
    .modal-content main div h5 {
        font-family: 'sf-ui-display-heavy';
        font-size: 22px;
        text-align: center;
        margin-bottom: 2vh;
    }
    .modal-content main div p {
        font-family: 'sf-ui-display-regular';
        font-size: 16px;    
        line-height: 18px;
        letter-spacing: 0%;
        text-align: center;
        color: #494949;
        margin: 4vh 0px;
    }
    @media (max-width: 767px) {
        article {
            width: 100%;
            display: block;
            margin-bottom: 4vh;
            padding: 30px;
        }
        article > div {
            width: 100%;
        }
        article > img {
            width: 100%;
            margin-top: 4vh;
        }
        .modal-content {
            width: 100vw;
            height: 80vh;
            border-bottom-left-radius: 0;
            border-end-end-radius: 0;
            animation: popUp 1s ease;
        }

        @keyframes popUp {
            0%{
                transform: translateY(20vh);
            }
            50%{
                
            }
            100%{
              
            }
        }
        .modal-content main > div {
            padding: 6vh 3vh;
        }
        .modal-backdrop {
            align-items: end;
        }
        .modal-content main img {
            height: 25vh;
        }
    }
</style>