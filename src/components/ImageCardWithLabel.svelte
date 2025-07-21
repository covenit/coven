<script>
  export let image = '';
  export let title = '';
  export let titleaux = '';
</script>

<article style="background-image: url({image});">
    <div>
        <h3>{title}</h3>
        {#if titleaux}
        <h3>{titleaux}</h3>
        {/if}
    </div>
</article>

<style>
    article {
        background-size: cover;
        background-position: center;
        width: 49%;
        height: 470px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: end;
        text-align: center;
        padding-bottom: 10%;
    }

    article h3 {
        font-size: 24px;
        line-height: 34px;
        letter-spacing: 0px;
        color: white;
    }
</style>