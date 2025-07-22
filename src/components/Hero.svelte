<script>
  export let backgroundImage = '';
</script>

<style>
  .hero {
    width: 100%;
    height: 90vh;
    background-size: cover;
    background-position: center center;
    background-color: rgba(0, 0, 0, 0.2); /* negro semitransparente arriba */
    background-blend-mode: darken; /* o multiply, overlay, etc. */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hero .content {
    text-align: center;
  }
</style>

<header class="hero" style="background-image: url({backgroundImage})">
  <div class="content">
    <slot></slot>
  </div>
</header>
