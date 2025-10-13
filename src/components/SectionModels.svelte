<script>
    import CardModel from "./CardModel.svelte";

    export let models;
    export let isStilema;

    // Filtro actual
    let filter = 'Tutti';

    // Modelos filtrados
    $: filteredModels = models.filter(model => {
        if (filter === 'Elettrico') return model.isElec;
        if (filter === 'Gas') return model.isGas;
        return true; // "Tutti"
    });

    // Cambiar filtro
    function setFilter(type) {
        filter = type;
    }
</script>


<section class="padding-lr padding-bt" id="x">
        <div id="models">
            <h2>Modelli</h2>
            <br><br>
             <!-- svelte-ignore a11y_click_events_have_key_events -->
            <div class="filters">
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <span class="p-elect"
                    class:selected={filter === 'Elettrico'} 
                    on:click={() => setFilter('Elettrico')}>
                    Elettrico
                </span>
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <span class="p-gas"
                    class:selected={filter === 'Gas'} 
                    on:click={() => setFilter('Gas')}>
                    Gas
                </span>
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <span class="p-tutti"
                    class:selected={filter === 'Tutti'} 
                    on:click={() => setFilter('Tutti')}>
                    Tutti
                </span>
            </div>
        </div>
        <br><br>
        <div class="cards">
            {#each filteredModels as model}
                <CardModel model={model} isStilema={isStilema} />
            {/each}
        </div>
</section>

<style>
    .cards {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 15px;

    }
    .p-elect, .p-gas, .p-tutti {
        font-family: 'sf-ui-display-medium';
        border-radius: 40px;
        background: #E20C181A;
        border: 1px solid #E20C18;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0%;
        text-align: start;
        color: #E20C18;
        padding: 4px 10px;
        margin: 0;
    }
    .p-gas {
        background: #0C49E21A;
        border: 1px solid #0C49E2;
        color: #0C49E2;
    }

    .filters {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .p-tutti {
        border: 1px solid #2F2F2F;
        color: #2F2F2F;
        background-color: #2f2f2f18;
    }
    @media (max-width: 767px) {
        .cards {
            display: block;
        }
    }
</style>