    <script>
        import Router, { location } from 'svelte-spa-router';
        import { derived } from 'svelte/store';

        const isProductSection = derived(location, $location =>
            ['/steady-cook', '/master-delight'].includes($location)
        );

        // Derivamos el path actual del store location (sin el #)
        const currentPath = derived(location, $location => {
            // $location viene como "/about" o "/"
            return $location || '/';
        });

        const logo = '/logo.png';
    </script>

    <nav class="padding-lr">
    <div>
        <img src={logo} alt="Logo"/>
    </div>

    <div class="links">
        <a href="#/" class:selected={$currentPath === '/'}>Home</a>
        <a href="#/who-we-are" class:selected={$currentPath === '/who-we-are'}>Chi siamo</a>

        <!-- Steady Cook con submenu -->
        <div class="nav-item has-submenu">
            <!-- svelte-ignore a11y_missing_attribute -->
            <a class:selected={$isProductSection}>
                I nostri prodotti
                                
                <svg width="10" height="6" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.880005 1.1925L5.125 5.4375L9.37 1.1925L8.83751 0.667496L5.125 4.38L1.4125 0.667496L0.880005 1.1925Z"/>
                </svg>
            </a>
            <div class="submenu">
                <ul>
                    <li>
                         <a href="#/steady-cook" class:selected={$currentPath === '/steady-cook'}>Steady Cook</a>
                    </li>
                    <li>
                        <a href="#/master-delight" class:selected={$currentPath === '/master-delight'}>Master Delight</a>
                    </li>
                </ul>
            </div>
        </div>

        <a href="#/about" class:selected={$currentPath === '/about'}>Contatto</a>
        <!-- agrega más links y rutas como necesites -->
    </div>
    </nav>

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
        .nav-item {
            position: relative;
        }
        
        .submenu {
            position: absolute;
            background-color: white;
            width: 140%;
            top: 120%;
            left: -10%;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            flex-direction: column;
        }

        nav svg path {
            fill: black;
        }

        nav .links a.selected svg path{
            fill: red;
        }
        .submenu ul {
            list-style: none;
        }

         .submenu ul li {
            padding: 12px 10%;
            border-bottom: 1px solid #2F2F2F;
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