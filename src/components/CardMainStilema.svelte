<script>
    export let title;
    export let subtitle;
    export let text;
    export let urlImg;

    let showInfo = false;
</script>

<article style="--img: url({urlImg})" class:active={showInfo}>
    {#if !showInfo}
        <div>
            <h4>{title}</h4>
            <p>{subtitle}</p>
            <button on:click={() => showInfo = true}>
                Scopri di più
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1872 9.02793C14.9866 9.23214 14.7148 9.34684 14.4314 9.34684C14.1479 9.34684 13.8761 9.23214 13.6755 9.02793L8.01381 3.25571L2.35211 9.02793C2.25419 9.13506 2.13611 9.221 2.00491 9.2806C1.87371 9.3402 1.73207 9.37225 1.58846 9.37483C1.44484 9.37741 1.30219 9.35048 1.16901 9.29563C1.03583 9.24079 0.914842 9.15916 0.813275 9.05561C0.711709 8.95206 0.63164 8.82871 0.577845 8.69293C0.524051 8.55715 0.497632 8.41171 0.500166 8.26529C0.5027 8.11888 0.534135 7.97448 0.592594 7.84071C0.651054 7.70695 0.73534 7.58656 0.840427 7.48673L7.25797 0.943912C7.45852 0.739702 7.73037 0.625 8.01381 0.625C8.29725 0.625 8.56911 0.739702 8.76965 0.943912L15.1872 7.48673C15.3875 7.69119 15.5 7.96835 15.5 8.25733C15.5 8.5463 15.3875 8.82346 15.1872 9.02793Z" fill="white"/>
                </svg>
            </button>
        </div>
    {:else}
        <div
            class="modal-backdrop"
            role="button"
            tabindex="0"
            aria-label="Chiudi la finestra informativa"
            on:click={() => showInfo = false}
            on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { showInfo = false; } }}
        >
            <div class="modal-content">
                <header>      
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" rx="12" fill="#E5E5E5"/>
                        <path d="M12 10.8891L15.8891 7L17 8.11094L13.1109 12L17 15.8891L15.8891 17L12 13.1109L8.11094 17L7 15.8891L10.8891 12L7 8.11094L8.11094 7L12 10.8891Z" fill="black"/>
                    </svg>
                </header>
                <div>
                    <p class="text-info">{text}</p>
                    <button on:click={() => showInfo = false}>Chiudi</button>
                </div>
            </div>
        </div>
    {/if}
</article>

<style>
    article {
        background-image:
            linear-gradient(to bottom, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.9) 100%),
            var(--img);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 49%;
        height: 470px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: end;
        text-align: center;
        padding: 5%;
        overflow: hidden;
        transition: all 0.3s ease-in-out;
    }

    article.active {
         background-image:
            linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.8) 100%),
            var(--img);
    }

    article div h4 {
        font-family: 'sf-ui-display-heavy';
        font-size: 24px;
        line-height: 24px;
        color: #FFFFFF;
        margin-bottom: 10px;
    }

    article div p {
        font-family: 'sf-ui-display-regular';
        font-size: 18px;
        line-height: 32px;
        color: #FFFFFF;
        margin-bottom: 10px;
    }

    article div button {
        background: none;
        border: none;
        cursor: pointer;
        font-family: 'sf-ui-display-bold';
        font-size: 14px;
        line-height: 100%;
        color: #FFFFFF;
    }

    article div button svg {
        margin-left: 5px;
    }

    article .text-info {
        font-size: 18px;
        line-height: 28px;
        text-align: start;
    }
    .modal-content header {
        display: none;
    }

    @media (max-width: 767px) {
        article {
            width: 100%;
            margin-bottom: 2vh;
            height: 430px;
            border-radius: 10px;
            padding: 10%;
        }
        article div h4 {
            font-size: 20px;
            line-height: 20px;
        }
        article div p {
            font-size: 16px;
            line-height: 18px;
        }

        article .text-info {
           font-size: 16px;
            line-height: 25px;
        }

        .modal-backdrop {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.5);
            display: flex;
            align-items: end;
            justify-content: center;
            z-index: 999;
        }

        .modal-content {
            position: relative;
            background: #fff;
            padding: 4vh;
            padding-left: 5vh;
            padding-right: 5vh;
            border-radius: 16px;
            width: 100vw;
            height: 80vh;
            background-image:
            linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.8) 100%),
            var(--img);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            border-end-end-radius: 0;
            border-bottom-left-radius: 0;
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

        .modal-content header {
            display: flex;
            justify-content: end;
            margin-bottom: 2vh;
        }
    }
</style>