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
        flex-wrap: wrap;
        justify-content: start;
        gap: 1.5rem; /* separa las cards */
        box-sizing: border-box;
    }

    .container-cards-text-image > * {
        flex: 1 1 calc(25% - 1.5rem); /* 4 por fila */
        box-sizing: border-box;
        min-width: 250px; /* evita que se achiquen demasiado */
        max-width: 23%; /* evita que se achiquen demasiado */
        display: flex;
        flex-direction: column;
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