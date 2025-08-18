<script>
  export let backgroundImage = '';
</script>

<style>
  .hero {
    width: 100%;
    height: 90vh;
    background-size: cover;
    background-position: center center;
    background-color: rgba(0, 0, 0, 0.4); /* negro semitransparente arriba */
    background-blend-mode: darken; /* o multiply, overlay, etc. */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hero .content {
    text-align: center;
  }

  @media (max-width: 767px) {
    .hero {
      height: 50vh;
      display: flex;
      justify-content: start;
      align-items: end;
    }
    .hero .content {
      text-align: start;
    }
  }
</style>

<header class="hero padding-lr padding-bt" style="background-image: url({backgroundImage})">
  <div class="content">
    <slot></slot>
  </div>
</header>
