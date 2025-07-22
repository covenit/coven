<script>
  import Router, { location } from 'svelte-spa-router';
  import { derived } from 'svelte/store';

  import Home from './routes/Home.svelte';
  import WhoWeAre from './routes/WhoWeAre.svelte';
  import About from './routes/About.svelte';
  import Footer from './components/Footer.svelte';

  const logo = '/logo.png';

  const routes = {
    '/': Home,
    '/who-we-are': WhoWeAre,
    '/about': About,
  };

  // Derivamos el path actual del store location (sin el #)
  const currentPath = derived(location, $location => {
    // $location viene como "/about" o "/"
    return $location || '/';
  });
</script>

<nav class="padding-lr">
  <div>
    <img src={logo} alt="Logo"/>
  </div>

  <div class="links">
    <a href="#/" class:selected={$currentPath === '/'}>Home</a>
    <a href="#/who-we-are" class:selected={$currentPath === '/who-we-are'}>Chi siamo</a>
    <a href="#/about" class:selected={$currentPath === '/about'}>Contatto</a>
    <!-- agrega más links y rutas como necesites -->
  </div>
</nav>

<Router {routes} />

<Footer/>

<style>
  nav {
    background-color: white;
    padding-bottom: 1vh;
    padding-top: 1vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav div img {
    width: 100px;
    height: auto;
  }
  nav .links {
    display: flex;
    gap: 32px;
  }

  nav .links a {
    font-family: 'sf-ui-display-medium';
    color: #2F2F2F;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0%;
    text-decoration: none;
  }

  nav .links a.selected {
    color: red;
  }

  @media (max-width: 767px) {
    nav .links{
      display: none;
    }
  }
</style>