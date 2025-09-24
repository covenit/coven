<script>
  import Router, { location } from 'svelte-spa-router';
  import { derived } from 'svelte/store';
  import Nav from './components/Nav.svelte';
  import Home from './routes/Home.svelte';
  import WhoWeAre from './routes/WhoWeAre.svelte';
  import About from './routes/About.svelte';
  import Form from './components/Form.svelte';
  import Footer from './components/Footer.svelte';

  import SteadyCook from './routes/SteadyCook.svelte';

  import Merch_SteadyCook from './routes/SteadyCook/Merch.svelte';
  import Visual_SteadyCook from './routes/SteadyCook/Visual.svelte';
  import Touch_SteadyCook from './routes/SteadyCook/Touch.svelte';
  import Accessories from './routes/Accessories.svelte';
  import MasterDelight from './routes/MasterDelight.svelte';
  import VisualMasterDelight from './routes/MasterDelight/Visual.svelte';
  import MerchMasterDelight from './routes/MasterDelight/Merch.svelte';
  import Styleme from './routes/Styleme.svelte';

  const routes = {
    '/': Home,
    '/who-we-are': WhoWeAre,
    '/steady-cook': SteadyCook,
    '/steady-cook-mech': Merch_SteadyCook,
    '/steady-cook-visual': Visual_SteadyCook,
    '/steady-cook-touch': Touch_SteadyCook,
    '/master-delight': MasterDelight,
    '/master-delight-visual': VisualMasterDelight,
    '/master-delight-mech': MerchMasterDelight,
    '/accessories': Accessories,
    '/about': About,
  };

  // Scroll to top when a new route is loaded
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  
</script>

<Nav></Nav>

<Router {routes} on:routeLoaded={scrollToTop}/>

<Footer/>
