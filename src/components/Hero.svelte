<script>
  const banner1 = "/banner1.webp";
  const banner2 = "/banner2.webp";
</script>

<header class="hero">
  <!--Banner 1 --> 
  <div class="slide slide1 padding-lr">
    <h1>
      Passione made in Italy <br> per i forni professionali
      <p>dal 1980</p>
    </h1>
  </div>
</header>

<style>
.hero {
  position: relative;
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-image: url("./../../public/hero1.webp");
}


/* Texto */
h1 {
  color: white;
  font-family: "sf-ui-display-medium", sans-serif;
  font-weight: 600;
  font-size: 70px;
  line-height: 74px;
  text-align: center;
}
h1 p {
  color: #e20c18;
  font-size: 54px;
  margin: 0;
}

/* Responsive */
@media (max-width: 767px) {
  h1 { 
    font-size: 32px; 
    line-height: 34px; 
    text-align: start; 
    padding-bottom: 3vh;
  }
  h1 p { 
    font-size: 24px; 
    text-align: start; 
  }
  .hero {
    align-items: end;
    margin-bottom: 2vh;
  }
}
</style>
