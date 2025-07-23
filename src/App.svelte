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
  import MasterDelight from './routes/MasterDelight.svelte';

  const routes = {
    '/': Home,
    '/who-we-are': WhoWeAre,
    '/steady-cook': SteadyCook,
    '/master-delight': MasterDelight,
    '/about': About,
  };

</script>

<Nav></Nav>

<Router {routes} />

<Form></Form>

<Footer/>
