<script>
    export let backgroundImage = '';
    export let category = '';
    export let title = '';
    export let line = '';
</script>


<header class="hero padding-lr padding-bt" style="background-image: url({backgroundImage})">
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
    background-color: rgba(0, 0, 0, 0.6); /* negro semitransparente arriba */
    background-blend-mode: darken; /* o multiply, overlay, etc. */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hero .content {
    text-align: center;
  }
  
  h1 {
    font-family: 'sf-ui-display-bold';
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

    h3{
      font-family: 'sf-ui-display-medium';
      font-style: Semibold;
      font-size: 68px;
      line-height: 74.2px;
      letter-spacing: -2%;
      text-align: center;
      color: #F8F8F8;
    }

    @media (max-width: 767px) {
      .hero {
        height: 40vh;
        display: flex;
        justify-content: start;
        align-items: end;
        background-position: start center;
      }
      .hero .content {
        text-align: start;
      }
      h1, h2, h3 {
        text-align: start;
      }
      h1{
        font-size: 32px;
        line-height: 31px;
      }
      h2, h3 {
        font-size: 26px;
        line-height: 32px;
        margin-bottom: 2vh;
      }
    }
</style>
