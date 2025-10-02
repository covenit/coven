<script>
    import CardTextImage from "./CardTextImage.svelte";
    export let spec_items;
    
</script>

<section class="padding-bt padding-lr container-cards-text-image">
        {#each spec_items as item}
            <div>
                <CardTextImage src={item.src} title={item.title} text={item.text}>
                </CardTextImage>
            </div>
        {/each}
</section>

<style>
    .container-cards-text-image {
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
        gap: 12px;
    }
    .container-cards-text-image > * {
        margin-bottom: 2vh;
        width: 19vw;
    }

    @media (max-width: 767px) {
        .container-cards-text-image {
            display: flex;
            justify-content: center;
        }

        .container-cards-text-image > * {
            width: 100%;
            margin-bottom: 2vh;
        }
    }
</style>