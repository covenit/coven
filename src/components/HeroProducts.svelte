<script>
    export let backgroundImage = '';
    export let category = '';
    export let title = '';
    export let line = '';
</script>


<header class="hero" style="background-image: url({backgroundImage})">
  <div class="content">
        <h2>{category}</h2>
        <h1>{title}</h1>
        <h3>{line}</h3>
  </div>
</header>


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
  
  h1 {
    font-family: 'sf-ui-display-medium';
    font-size: 70px;
    line-height: 80px;
    letter-spacing: -2%;
    text-align: center;
    color: #F8F8F8;
  }

    h2 {
        font-family: 'sf-ui-display-medium';
        font-size: 36px;
        line-height: 50px;
        letter-spacing: -2%;
        text-align: center;
        color: #E20C18;
    }
</style>
