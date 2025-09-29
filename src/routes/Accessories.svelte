<script>
    import Form from "../components/Form.svelte";
    import HeroProducts from "../components/HeroProducts.svelte";
    import CardAccessory from "../components/CardAccessory.svelte";
    import { accessories } from "../data/accessories";
    const backgroundImage = '/hero-accessori.webp';

    const filters = [
        {f: "Tutti"},
        {f: "Stilema"},
        {f: "Steady Cook"},
        {f: "Master Delight"},
        {f: "Specifiche"},
        {f: "Multigrill"}
    ];

    // Variable para el filtro activo
    let activeFilter = "Tutti";

    // Función para cambiar el filtro
    function setFilter(filterName) {
        activeFilter = filterName;
    }

    // Variable reactiva que filtra los accesorios
    $: filteredAccessories = activeFilter === "Tutti" 
        ? accessories 
        : accessories.filter(accessory => accessory.category.includes(activeFilter));
</script>

<HeroProducts backgroundImage={backgroundImage} category="Potenzia le tue capacità culinarie" title="Accessori dedicati"></HeroProducts>

<section class="padding-lr padding-bt">
    <header>
        <p>Filtra per prodotto</p>
        <div class="container-filters">
            {#each filters as item}
                <div class="filter {activeFilter === item.f ? 'active' : ''}"
                        on:click={() => setFilter(item.f)}
                        on:keydown={(e) => e.key === 'Enter' && setFilter(item.f)}
                        tabindex="0"
                        role="button"
                        aria-pressed={activeFilter === item.f}
                        >
                    <span>
                        {item.f}
                    </span>
                </div>
                <br>
            {/each}
        </div>
    </header>
    <main>
        {#each filteredAccessories as accessory}
            <CardAccessory accessory={accessory} activeFilter={activeFilter}></CardAccessory>
        {/each}
    </main>
</section>

<Form complete={false}></Form>

<style>
    section {
        background: #F8F8F8;
    }
    section main {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
    }
    section header p {
        font-family: 'sf-ui-display-bold';
        font-size: 20px;
        line-height: 52px;
        letter-spacing: -2%;
        color: #2F2F2F;
    }
    section header {
        display: flex;
        gap: 50px;
        margin-bottom: 10vh;
    }
    section .container-filters {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 10px;
    }
    section .container-filters > div {
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
    
    section .container-filters > div:hover {
        background-color: #4949496f;
    }
    
    section .container-filters > div.active {
        border: 1px solid #E20C18;
        outline-offset: 2px;
        color: #E20C18;
        background: #E20C181A;
    }
    
    section .container-filters > div:focus {
        border: 1px solid #E20C18;
        outline-offset: 2px;
        color: #E20C18;
        background: #E20C181A;
    }

    @media (max-width: 767px) {
        section main, section header{
            display: block;
        }
        section .container-filters {
            display: block;
        }
        section .container-filters > div {
            width: 100%;
            padding: 3px 10px;
            margin: 0px;
            margin-bottom: 10px;
        }
        br {
            display: none;
        }
    }
</style>