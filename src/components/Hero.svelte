<header class="hero">
  <div class="slide slide1">
    <img src="event.png" alt="Evento">
  </div>
  <div class="slide slide2">
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
  animation: bgChange 10s infinite; /* 👈 animamos el fondo */
  background-size: cover;
  background-position: center;
}

/* Slides */
.slide {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: slider 10s infinite;
}

.slide1 { animation-delay: 0s; }
.slide2 { animation-delay: 5s; }

.slide img {
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

/* Animación de las slides */
@keyframes slider {
  0%, 45% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

/* 👇 Animación del fondo del header */
@keyframes bgChange {
  0%, 45% {
    background: white;
  }
  50%, 100% {
    background-image: url('hero1.webp');
    background-size: cover;
    background-position: center;
    background-position-y: 40%;
     background-color: rgba(0, 0, 0, 0.4); /* negro semitransparente arriba */
    background-blend-mode: darken; /* o multiply, overlay, etc. */
  }
}

/* Responsive */
@media (max-width: 767px) {
  h1 { font-size: 32px; line-height: 34px; text-align: start; padding-bottom: 3vh;}
  h1 p { font-size: 24px; text-align: start; }
  .slide {
    align-items: end;
  }
}
</style>
