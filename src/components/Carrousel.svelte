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
    margin: 3vh 0px;
    cursor: pointer;
    background: none;
    border: none;
    width: 48px;
    height: 48px;
    opacity: 1;
    gap: 10px;
    padding-top: 5px;
    padding-right: 3px;
    padding-bottom: 5px;
    padding-left: 3px;
    border-radius: 24px;
    background-color: white;
    box-shadow: 0px 8px 8px 0px #0000001A;
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
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button class="nav-button" on:click={scrollLeft}>
      <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4447 23.4995C13.7714 23.1786 13.9549 22.7437 13.9549 22.2902C13.9549 21.8367 13.7714 21.4017 13.4447 21.0808L4.20913 12.0221L13.4447 2.96338C13.6161 2.80671 13.7536 2.61778 13.849 2.40785C13.9443 2.19793 13.9956 1.97132 13.9997 1.74153C14.0039 1.51175 13.9608 1.28351 13.873 1.07041C13.7853 0.857321 13.6546 0.663747 13.489 0.501241C13.3233 0.338734 13.1259 0.210624 12.9087 0.124552C12.6914 0.0384809 12.4587 -0.00378846 12.2245 0.000265799C11.9902 0.00432006 11.7592 0.0546153 11.5451 0.14815C11.3311 0.241686 11.1385 0.376544 10.9788 0.544682L0.510258 10.8127C0.183524 11.1336 5.05679e-07 11.5686 5.25503e-07 12.0221C5.45326e-07 12.4756 0.183524 12.9106 0.510259 13.2314L10.9788 23.4995C11.3059 23.82 11.7494 24 12.2117 24C12.6741 24 13.1175 23.82 13.4447 23.4995Z" fill="#5B5B5B"/>
      </svg>
    </button>
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button class="nav-button" on:click={scrollRight}>
      <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.555318 23.4995C0.228582 23.1786 0.0450582 22.7437 0.0450582 22.2902C0.0450582 21.8367 0.228582 21.4017 0.555318 21.0808L9.79087 12.0221L0.555319 2.96338C0.383899 2.80671 0.246405 2.61778 0.151045 2.40785C0.055684 2.19793 0.00440684 1.97132 0.000272675 1.74153C-0.00386054 1.51175 0.0392351 1.28351 0.126986 1.07041C0.214738 0.857321 0.34535 0.663747 0.511029 0.501241C0.676708 0.338734 0.874059 0.210624 1.09131 0.124552C1.30856 0.0384809 1.54126 -0.00378846 1.77553 0.000265799C2.0098 0.00432006 2.24084 0.0546153 2.45486 0.14815C2.66888 0.241686 2.8615 0.376544 3.02123 0.544682L13.4897 10.8127C13.8165 11.1336 14 11.5686 14 12.0221C14 12.4756 13.8165 12.9106 13.4897 13.2314L3.02123 23.4995C2.69409 23.82 2.25064 24 1.78827 24C1.32591 24 0.88246 23.82 0.555318 23.4995Z" fill="#5B5B5B"/>
      </svg>
    </button>
</div>
