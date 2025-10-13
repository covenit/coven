<script>
    export let img = "";
    export let text;
    export let charact;
    export let tags;

    function scrollAction(node) {
        node.addEventListener('click', e => {
        e.preventDefault();
        const targetId = node.getAttribute('href').replace('#', '');
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    });
  }
</script>

<article>
    <img src={img} alt="">
    <main class="main-info">
        {#each text as x}
            <p class="text">{x.t}</p>
        {/each} 

        <br>

        <p class="title">Principali Caratteristiche</p>

        <div class="elements">
            {#each charact as x}
            <span>{x.c}</span>
            {/each} 
        </div>
    </main>
</article>

<style>
    article {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    article img, article .main-info{
        width: 45%;
    }

    article .text {
        font-family: 'sf-ui-display-regular';
        font-size: 18px;
        line-height: 32px;
        letter-spacing: 0%;
        color: #5B5B5B;
        width: 80%;
    }
    
    article .title {
        font-family: 'sf-ui-display-bold';
        font-size: 18px;
        line-height: 52px;
        letter-spacing: 0%;
        color: #2F2F2F;
        margin-bottom: 1vh;
    }

    article .elements {
        display: flex;
        justify-content: start;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
    }

    article .main-info span {
        padding-top: 6px;
        padding-right: 16px;
        padding-bottom: 6px;
        padding-left: 16px;
        border-radius: 40px;
        background-color: #4949491A;
        border: 1px solid #494949;
        color: #494949;
        font-size: 16px;
        line-height: 28px;
        letter-spacing: 0%;
        vertical-align: middle;
    }

    @media (max-width: 767px) {
        article {
            display: block;
        }
        article img, article .main-info{
            width: 100%;
        }
        article .text {
           margin-top: 4vh;
           line-height: 24px;
           width: 100%;
        }
        article .main-info span {
            font-size: 14px;
            line-height: 20px;
            width: 100%;
            text-align: center;
        }
    }
</style>

