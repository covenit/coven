<script>
    import Router, { location } from 'svelte-spa-router';
    import { derived } from 'svelte/store';

    const isProductSection = derived(location, $location =>
        ['/steady-cook', '/master-delight'].includes($location)
    );

    const currentPath = derived(location, $location => $location || '/');
    const logo = '/logo-black.png';

    // Estados para menú móvil y submenús
    let mobileMenuOpen = false;
    let submenuProductsOpen = false;
    let submenuCatalogsOpen = false;

    // Toggle menú móvil
    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
        if (!mobileMenuOpen) {
            submenuProductsOpen = false;
            submenuCatalogsOpen = false;
        }
    }

    // Toggle submenús
    function toggleSubmenuProducts() {
        submenuProductsOpen = !submenuProductsOpen;
        if (submenuProductsOpen) submenuCatalogsOpen = false;
    }

    function toggleSubmenuCatalogs() {
        submenuCatalogsOpen = !submenuCatalogsOpen;
        if (submenuCatalogsOpen) submenuProductsOpen = false;
    }

    // Cierra todo al hacer click en un enlace
    function closeMenus() {
        mobileMenuOpen = false;
        submenuProductsOpen = false;
        submenuCatalogsOpen = false;
    }
</script>

<nav class="padding-lr">
    <div class="nav-brand">
        <img src={logo} alt="Logo"/>
    </div>

    <!-- Botón hamburguesa para móvil -->
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button class="hamburger" class:active={mobileMenuOpen} on:click={toggleMobileMenu}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6H21V8H3V6ZM3 11H21V13H3V11ZM3 16H21V18H3V16Z" fill="white"/>
        </svg>
    </button>

    <!-- Menú de navegación -->
    <div class="links" class:mobile-open={mobileMenuOpen}>
        <a href="/" class:selected={$currentPath === '/'} on:click={closeMenus}>Home</a>
        <a href="#/who-we-are" class:selected={$currentPath === '/who-we-are'} on:click={closeMenus}>Chi siamo</a>

        <!-- Productos con submenu -->
        <div class="nav-item has-submenu">
            <button 
                class="nav-link" 
                class:selected={$isProductSection}
                on:click={toggleSubmenuProducts}
            >
                I nostri prodotti
                <svg width="10" height="6" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg" class:rotated={submenuProductsOpen}>
                    <path d="M0.88 1.19L5.12 5.44L9.37 1.19L8.84 0.67L5.12 4.38L1.41 0.67L0.88 1.19Z"/>
                </svg>
            </button>
            <div class="submenu" class:open={submenuProductsOpen}>
                <ul>
                    <li><a href="#/steady-cook" class:selected={$currentPath === '/steady-cook'} on:click={closeMenus}>Steady Cook</a></li>
                    <li><a href="#/master-delight" class:selected={$currentPath === '/master-delight'} on:click={closeMenus}>Master Delight</a></li>
                </ul>
            </div>
        </div>

        <!-- Cataloghi con submenu -->
        <div class="nav-item has-submenu">
            <button 
                class="nav-link" 
                on:click={toggleSubmenuCatalogs}
            >
                Cataloghi
                <svg width="10" height="6" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg" class:rotated={submenuCatalogsOpen}>
                    <path d="M0.88 1.19L5.12 5.44L9.37 1.19L8.84 0.67L5.12 4.38L1.41 0.67L0.88 1.19Z"/>
                </svg>
            </button>
            <div class="submenu" class:open={submenuCatalogsOpen}>
                <ul>
                    <li><a href="#" on:click={closeMenus}>Scarica PDF Steady Cook</a></li>
                    <li><a href="#" on:click={closeMenus}>Scarica PDF Master Delight</a></li>
                    <li><a href="#" on:click={closeMenus}>Scarica PDF Stilema</a></li>
                </ul>
            </div>
        </div>

        <a href="#/accessories" class:selected={$currentPath === '/accessories'} on:click={closeMenus}>Accessori</a>
        <a href="#/styleme" class:selected={$currentPath === '/styleme'} on:click={closeMenus}>Stilema</a>
        <a href="#/about" class:selected={$currentPath === '/about'} on:click={closeMenus}>Contatto</a>
    </div>
</nav>

<style>
    nav {
        background-color: #2F2F2F;
        padding-bottom: 1vh;
        padding-top: 1vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        z-index: 1001;
    }

    .nav-brand img {
        width: 100px;
        height: auto;
    }

    /* Botón hamburguesa */
    .hamburger {
        display: none;
        flex-direction: column;
        background: none;
        border: none;
        cursor: pointer;
        padding: 4px;
        z-index: 10000;
    }

    /* Enlaces de navegación */
    .links {
        display: flex;
        gap: 32px;
        align-items: center;
    }

    .nav-item {
        position: relative;
    }

    .nav-link {
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;
        font-family: 'sf-ui-display-medium';
        color: white;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        transition: color 0.3s ease;
    }

    .nav-link.selected {
        color: red;
    }

    .nav-link svg {
        transition: transform 0.3s ease;
    }

    .nav-link svg.rotated {
        transform: rotate(180deg);
    }

    .nav-link svg path {
        fill: white;
        transition: fill 0.3s ease;
    }

    .nav-link.selected svg path {
        fill: red;
    }

    /* Submenu para desktop */
    .submenu {
        position: absolute;
        background-color: #2F2F2F;
        width: 140%;
        top: 120%;
        left: -10%;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px);
        transition: all 0.3s ease;
        z-index: 1000;
    }

    .submenu.open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    .submenu ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .submenu ul li {
        padding: 12px 10%;
        border-bottom: 1px solid #404040;
    }

    .submenu ul li:last-child {
        border-bottom: none;
    }

    .links a,
    .submenu a {
        font-family: 'sf-ui-display-medium';
        color: white;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .links a.selected,
    .submenu a.selected {
        color: red;
    }

    .links a:hover,
    .submenu a:hover,
    .nav-link:hover {
        color: #ff6666;
    }

    /* Estilos móviles */
    @media (max-width: 767px) {
        .hamburger {
            display: flex;
        }

        .links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 70%;
            height: 100vh;
            background-color: #2F2F2F;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 80px 20px 20px;
            gap: 20px;
            transition: right 0.3s ease;
            z-index: 9999;
            box-shadow: -2px 0 10px rgba(0,0,0,0.3);
        }

        .links.mobile-open {
            right: 0;
        }

        .nav-item {
            width: 100%;
        }

        .nav-link {
            width: 100%;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #404040;
        }

        /* Submenu móvil */
        .submenu {
            position: static;
            width: 100%;
            box-shadow: none;
            background-color: #404040;
            margin-top: 0;
            max-height: 0;
            overflow: hidden;
            transform: none;
            transition: max-height 0.3s ease;
        }

        .submenu.open {
            max-height: 200px;
            opacity: 1;
            visibility: visible;
        }

        .submenu ul li {
            padding: 15px 20px;
            border-bottom: 1px solid #505050;
        }

        .links a {
            width: 100%;
            padding: 15px 0;
            border-bottom: 1px solid #404040;
        }

        .links a:last-child {
            border-bottom: none;
        }

        nav {
            position: fixed;
            width: 100%;
        }
    }
</style>