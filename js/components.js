document.addEventListener('DOMContentLoaded', () => {
    // Header Component
    const headerHTML = `
    <div class="container">
        <nav class="navbar">
            <a href="index.html" class="navbar-brand">
                <strong>Green Gecko Carpentry</strong>
            </a>
            <button class="navbar-toggler" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            
            <div class="navbar-collapse">
                <ul class="navbar-nav">
                    <li><a href="index.html#about" class="nav-link">About</a></li>
                    <li><a href="index.html#services" class="nav-link">Services</a></li>
                    <li><a href="index.html#testimonials" class="nav-link">Testimonials</a></li>
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
                <h5>Green Gecko Carpentry</h5>
                <p>
                    Specializing in bespoke carpentry and high-quality loft conversions in Brighton and surrounding areas. 
                    We are dedicated to eco-friendly practices and exceptional craftsmanship.
                </p>
                <div class="footer-social">
                    <a href="https://www.facebook.com/profile.php/?id=100076419304863" class="fa fa-facebook"></a>
                </div>
            </div>
            <div class="footer-section">
                <h5>Quick Links</h5>
                <ul class="footer-links">
                    <li><a href="index.html#about">About Us</a></li>
                    <li><a href="index.html#services">Services</a></li>
                    <li><a href="index.html#testimonials">Testimonials</a></li>
                </ul>
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
                        <span>07932 739150</span>
                    </li>
                    <li>
                        <i class="fa fa-map-marker"></i>
                        <span>Brighton, United Kingdom</span>
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
        
        // Add scroll effect for glassmorphism
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
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
