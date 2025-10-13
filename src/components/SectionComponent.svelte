<script>
    import CardTextSpec from "./CardTextSpec.svelte";
    export let spec_items;
    
</script>

<section class="padding-bt padding-lr container-cards-text-image">
        {#each spec_items as item}
            <div>
                <CardTextSpec src={item.src} title={item.title} text={item.text}>
                </CardTextSpec>
            </div>
        {/each}
</section>

<style>
    .container-cards-text-image {
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
        gap: 10px;
    }
    .container-cards-text-image > * {
        margin-bottom: 2vh;
        width: 18vw;
    }

    @media (max-width: 1770px) {
        .container-cards-text-image > * {
            margin-bottom: 2vh;
            width: 17vw;
        }
    }

    @media (max-width: 1600px) {
        .container-cards-text-image > * {
            margin-bottom: 2vh;
            width: 16vw;
        }
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