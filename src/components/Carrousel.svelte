<script>
  let container;


  function scrollLeft() {
    container.scrollBy({ left: -600, behavior: 'smooth' });
  }

  function scrollRight() {
    container.scrollBy({ left: 600, behavior: 'smooth' });
  }

  export let images;
</script>

<style>
  .carousel-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    margin-left: -600px; /* Empuja el carrusel hacia la izquierda */
    overflow: hidden;
  }

  .carousel {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    gap: 16px;
    padding-left: 150px; /* Esto deja "oculta" la mitad de la primer imagen */
  }

  .carousel::-webkit-scrollbar {
    display: none;
  }

  .carousel-item {
    flex: 0 0 auto;
    width: 592px;
    height: 466px;
    border-radius: 20px;
    object-fit: cover;
    background-size: cover;
    background-position: center center;
    background-color: rgba(0, 0, 0, 0.3);
    background-blend-mode: darken;
  }

  .nav-button {
    font-size: 32px;
    margin: 1vh;
    cursor: pointer;
    background: none;
    border: none;
  }

  .container-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }

  @media (max-width: 767px) {
    .carousel-item {
      width: 252px;
      height: 186px;
    }
    .carousel-wrapper {
      margin-left: -320px; /* Empuja el carrusel hacia la izquierda */
  }
  }
</style>

<div class="carousel-wrapper">
    <div class="carousel" bind:this={container}>
        {#each images as image}
        <div class="carousel-item" style="background-image: url({image.src});">
            <!-- svelte-ignore a11y_img_redundant_alt
            <img src={image.src} alt="Image" /> -->
        </div>
        {/each}
    </div>
</div>
<div class="container-arrow">
    <button class="nav-button" on:click={scrollLeft}>&lt;</button>
    <button class="nav-button" on:click={scrollRight}>&gt;</button>
</div>
