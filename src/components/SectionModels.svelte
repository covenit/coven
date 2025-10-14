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
            <div class="filter-section">
                <p>Filtra per tipo di forno</p>
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <div class="filters">
                    <!-- svelte-ignore a11y_click_events_have_key_events -->
                    <!-- svelte-ignore a11y_no_static_element_interactions -->
                    <span class="p-tutti"
                        class:selected={filter === 'Tutti'} 
                        on:click={() => setFilter('Tutti')}>
                        Tutti
                    </span>
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
                </div>
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
    .filter-section {
        display: flex;
        gap: 20px;
    }
    
    .filters {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 10px;
    }

    .filters span {
        padding: 6px 20px;
        border-radius: 40px;
        background-color: #4949491A;
        border: 1px solid #494949;
        color: #494949;
        font-size: 16px;
        line-height: 28px;
        letter-spacing: 0%;
        vertical-align: middle;
        cursor: pointer;
        transition: all 0.3s ease;
        text-align: center;
    }

    .filter-section .filters span.selected {
        border: 1px solid #E20C18;
        outline-offset: 2px;
        color: #E20C18;
        background: #E20C181A;
    }
    
    .filter-section p {
        font-family: 'sf-ui-display-bold';
        font-size: 20px;
        line-height: 52px;
        letter-spacing: -2%;
        color: #2F2F2F;
    }

    @media (max-width: 767px) {
        .cards {
            display: block;
        }
    }
</style>