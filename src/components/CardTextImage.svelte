<script>
    export let src = '';
    export let title = '';
    export let text = '';
</script>

<article class="card-text-image">
    <header style="background-image: url({src});">
    </header>
    <main class="text-content">
        <h3>{title}</h3>
        <p>{text}</p>
    </main>
</article>

<style>
    article {
        background-color: white;
        text-align: start;  
        border-radius: 20px;
        box-shadow: 0px 8px 16px 0px #0000001A;
        height: 400px;
    }
    article h3 {
        font-family: 'sf-ui-display-medium';
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0%;
        vertical-align: middle;
        color: #121212;
        margin-bottom: 5px;
    }
    article p {
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0%;
        vertical-align: middle;
        color: #5B5B5B;
    }
    main {
        padding: 24px 32px;
    }

    header {
        height: 200px;  
        background-size: cover;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }

    @media (max-width: 767px) {
        article {
            margin-bottom: 3vh;
            height: auto;
        }
    }

</style>