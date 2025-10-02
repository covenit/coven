<script>
  const banner1 = "/banner1.webp";
  const banner2 = "/banner2.webp";
</script>

<header class="hero">
  <!-- Slide de imágenes -->
  <div class="slide slide1 padding-lr">
    <img src="{banner1}" alt="Banner 1">
    <img src="{banner2}" alt="Banner 2">
  </div>

  <!-- Slide de texto -->
  <div class="slide slide2 padding-lr">
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
  overflow: hidden;
  background-size: cover;
  background-position: center;
  animation: bgChange 10s infinite;
}

/* Slides base */
.slide {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  z-index: 0;
}

/* Slide de banners */
.slide1 {
  display: flex;
  justify-content: space-between;
  animation: showBanners 10s infinite;
}

/* Slide de texto */
.slide2 {
  animation: showText 10s infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Imágenes */
.slide1 img {
  max-height: 80%;
  object-fit: contain;
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

/* Animación banners */
@keyframes showBanners {
  0%, 40%   { opacity: 1; z-index: 2; }
  45%, 100% { opacity: 0; z-index: 0; }
}

/* Animación texto: entra todo junto */
@keyframes showText {
  0%, 50%   { opacity: 0; transform: translateY(100px); z-index: 0; }
  50%, 90%  { opacity: 1; transform: translateY(0); z-index: 2; }
  90%, 100% { opacity: 0; transform: translateY(-50px); z-index: 0; }
}

/* Fondo dinámico */
@keyframes bgChange {
  0%, 45% {
    background: white;
  }
  50%, 100% {
    background-image: url('hero1.webp');
    background-size: cover;
    background-position: center 40%;
    background-color: rgba(0, 0, 0, 0.4);
    background-blend-mode: darken;
  }
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
  .slide { 
    align-items: start; 
    justify-content: end;
  }
  .slide1 {
    display: block;
    padding-top: 100px;
  }
  .slide1 > img {
    width: 70%;
    height: auto;
  }
  @keyframes showText {
    0%, 45%   { opacity: 0; z-index: 0; }
    50%, 85%  { opacity: 1; z-index: 2; }
    90%, 100% { opacity: 0; z-index: 0; }
  }
}
</style>
