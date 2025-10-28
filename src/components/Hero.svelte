<script>
  document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let current = 0;

    // Oculta todos los slides excepto el primero
    slides.forEach((slide, index) => {
      // @ts-ignore
      slide.style.display = index === 0 ? "flex" : "none";
    });

    // Cambia de slide cada 5 segundos
    setInterval(() => {
      // @ts-ignore
      slides[current].style.display = "none";
      current = (current + 1) % slides.length;
      // @ts-ignore
      slides[current].style.display = "flex";
    }, 5000);
  });
</script>

<header class="hero">
  <!--Banner 1--> 
  <div class="slide padding-lr slide1">
    <h1>
      Passione made in Italy <br> per i forni professionali
      <p>dal 1980</p>
    </h1>
  </div>

  <!--Banner 2--> 
 <div class="slide padding-lr slide2">
    <h1>
      Host Milano 2025
      <br>
      <p><a href="https://www.instagram.com/p/DQJx8ZmkdZ1/?img_index=1">Scopri di più</a></p>
    </h1>
  </div>
</header>

<style>
.hero {
  position: relative;
  width: 100%;
  height: 70vh;
  overflow: hidden;
  display: flex;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70vh;
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
  display: none;
}

.slide1 {
  background-image: url("./../../public/hero1.webp");
}

.slide2 {
  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)),
    url("./../../public/home2.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
p a {
  text-decoration: none;
  color: #e20c18;
  font-size: 40px;
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
    align-items: end;
    justify-content: start;
    margin-bottom: 3vh;
  }

  p a {
    font-size: 22px;
  }

  .slide2 h1 {
    width: 60%;
  }

  .slide2 {
    background-image: url("./../../public/home2mb.jpg");
  }
}
</style>
