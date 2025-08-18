<script>
    export let accessory;
    export let activeFilter;
</script>

<article>
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

<style>
    article {
        width: 49%;
        padding: 40px;
        border-radius: 20px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px 0px #60617029;
        display: flex;
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
            height: auto;
            margin-top: 4vh;
        }
    }
</style>