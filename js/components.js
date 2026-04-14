document.addEventListener('DOMContentLoaded', () => {
    // Header Component
    const headerHTML = `
    <div class="container">
        <nav class="navbar">
            <a href="/" class="navbar-brand">
                <img src="img/logos/green_gecko_words.webp" alt="Green Gecko Carpentry" class="navbar-logo">
            </a>
            <button class="navbar-toggler" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            
            <div class="navbar-collapse">
                <ul class="navbar-nav">
                    <li><a href="/#about" class="nav-link">About</a></li>
                    <li><a href="/#services" class="nav-link">Services</a></li>
                    <li><a href="loft-conversions" class="nav-link">Lofts</a></li>
                    <li><a href="#contact" class="nav-link">Contact</a></li>
                </ul>
            </div>
        </nav>
    </div>`;

    // Footer Component
    const footerHTML = `
    <div id="contact" class="container">
        <div class="footer-grid">
            <div class="footer-section">
                <div class="footer-logo-wrap">
                    <img src="img/logos/green_gecko_words.webp" alt="Green Gecko Carpentry Logo" style="height: 34px;">
                </div>
                <p>
                    Specializing in bespoke carpentry and high-quality loft conversions in Brighton and Hove. 
                    Dedicated to eco-friendly practices and exceptional craftsmanship across East Sussex.
                </p>
                <div class="footer-social">
                    <a href="https://www.facebook.com/profile.php/?id=100076419304863" class="fa fa-facebook" aria-label="Facebook"></a>
                </div>
            </div>
            
            <div class="footer-section">
                <h5>Our Services</h5>
                <ul class="footer-links">
                    <li><a href="loft-conversions">Loft Conversions</a></li>
                    <li><a href="/#services">Garden Rooms</a></li>
                    <li><a href="/#services">Bespoke Carpentry</a></li>
                </ul>
                <h5 style="margin-top: 20px;">Service Areas</h5>
                <p>
                    Brighton, Hove, Woodingdean, Hollingdean, Patcham, Saltdean, and surrounding areas.
                </p>
            </div>

            <div class="footer-section">
                <h5>Contact Us</h5>
                <ul class="footer-contact">
                    <li>
                        <i class="fa fa-envelope-o"></i>
                        <a href="mailto:greengeckocarpentry@outlook.com" style="color: inherit; text-decoration: none;">greengeckocarpentry@outlook.com</a>
                    </li>
                    <li>
                        <i class="fa fa-phone"></i>
                        <a href="tel:07932739150" style="color: inherit; text-decoration: none;">07932 739150</a>
                    </li>
                    <li>
                        <i class="fa fa-map-marker"></i>
                        <span>Brighton, East Sussex</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 Green Gecko Carpentry. All rights reserved. | Website by <a href="https://github.com/banillie">Banillie</a></p>
        </div>
    </div>`;

    // Inject Header
    const header = document.querySelector('header');
    if (header) {
        header.innerHTML = headerHTML;
        setupNavbar();
        
        let lastScrollY = window.scrollY;
        const scrollThreshold = 10;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            const navbar = document.querySelector('.navbar');
            const isNavbarOpen = navbar && navbar.classList.contains('navbar-open');

            // Add scrolled class for styling
            if (currentScrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            // Smart Hide/Show logic
            // Don't hide if navbar is open or near top
            if (!isNavbarOpen && currentScrollY > 150) {
                if (currentScrollY > lastScrollY + scrollThreshold) {
                    // Scrolling down - hide
                    header.classList.add('header-hidden');
                } else if (currentScrollY < lastScrollY - scrollThreshold) {
                    // Scrolling up - show
                    header.classList.remove('header-hidden');
                }
            } else {
                // Always show near the top or when menu is open
                header.classList.remove('header-hidden');
            }
            
            lastScrollY = currentScrollY;
        });
    }

    // Inject Footer
    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = footerHTML;
    }

    function setupNavbar() {
        const toggler = document.querySelector('.navbar-toggler');
        const navbar = document.querySelector('.navbar');
        
        if (toggler && navbar) {
            toggler.addEventListener('click', (e) => {
                e.stopPropagation();
                navbar.classList.toggle('navbar-open');
                const expanded = navbar.classList.contains('navbar-open');
                toggler.setAttribute('aria-expanded', expanded);
            });
            
            // Close navbar when clicking outside
            document.addEventListener('click', (event) => {
                if (!navbar.contains(event.target) && navbar.classList.contains('navbar-open')) {
                    navbar.classList.remove('navbar-open');
                    toggler.setAttribute('aria-expanded', 'false');
                }
            });
        }
    }
});
