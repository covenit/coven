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

            const logo = '/logo-black.png';
            
            // Estados para el menú móvil y submenu
            let mobileMenuOpen = false;
            let submenuOpen = false;

            // Función para toggle del menú móvil
            function toggleMobileMenu() {
                mobileMenuOpen = !mobileMenuOpen;
                // Cerrar submenu cuando se cierra el menú móvil
                if (!mobileMenuOpen) {
                    submenuOpen = false;
                }
            }

            // Función para toggle del submenu
            function toggleSubmenu() {
                submenuOpen = !submenuOpen;
            }

            // Cerrar menús al hacer click en un enlace
            function closeMenus() {
                mobileMenuOpen = false;
                submenuOpen = false;
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
                        on:click={toggleSubmenu}
                    >
                        I nostri prodotti
                        <svg width="10" height="6" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg" class:rotated={submenuOpen}>
                            <path d="M0.880005 1.1925L5.125 5.4375L9.37 1.1925L8.83751 0.667496L5.125 4.38L1.4125 0.667496L0.880005 1.1925Z"/>
                        </svg>
                    </button>
                    <div class="submenu" class:open={submenuOpen}>
                        <ul>
                            <li>
                                <a href="#/steady-cook" class:selected={$currentPath === '/steady-cook'} on:click={closeMenus}>Steady Cook</a>
                            </li>
                            <li>
                                <a href="#/master-delight" class:selected={$currentPath === '/master-delight'} on:click={closeMenus}>Master Delight</a>
                            </li>
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
                border: none;
            }

            .hamburger span {
                width: 25px;
                height: 3px;
                background-color: white;
                margin: 3px 0;
                transition: 0.3s;
                transform-origin: center;
            }

            .hamburger.active span:nth-child(1) {
                transform: rotate(45deg) translate(6px, 6px);
            }

            .hamburger.active span:nth-child(2) {
                opacity: 0;
            }

            .hamburger.active span:nth-child(3) {
                transform: rotate(-45deg) translate(6px, -6px);
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
                letter-spacing: 0%;
                text-decoration: none;
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
                letter-spacing: 0%;
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

                /* Overlay para cerrar menú móvil */
                .links.mobile-open::before {
                    content: '';
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 30%;
                    height: 100vh;
                    z-index: -1;
                }
                nav {
                    position: fixed;
                    width: 100%;
                }
            }

            /* Animaciones suaves */
            * {
                box-sizing: border-box;
            }
        </style>