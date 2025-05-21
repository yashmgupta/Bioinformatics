document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Set current year in footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Highlight active navigation link (basic version based on URL)
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        // Check if the link's href matches the current page
        const linkPage = link.getAttribute('href').split('/').pop() || 'index.html';
        if (linkPage === currentPage) {
            // For primary nav items
            if(link.classList.contains('border-transparent')){ // only add to non-active items in main nav
                link.classList.remove('border-transparent', 'text-gray-500', 'hover:border-gray-300', 'hover:text-gray-700');
                link.classList.add('border-indigo-500', 'text-gray-900');
            }
            // For mobile nav items
            if(link.classList.contains('block') && link.classList.contains('border-transparent')){
                 link.classList.remove('border-transparent', 'text-gray-500', 'hover:bg-gray-50', 'hover:border-gray-300', 'hover:text-gray-700');
                 link.classList.add('bg-indigo-50', 'border-indigo-500', 'text-indigo-700');
            }
        }
    });

    // Optional: Smooth scroll for any #hash links (if you make it more single-page like later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.pathname === window.location.pathname && this.hash) {
                 e.preventDefault();
                 const targetElement = document.querySelector(this.hash);
                 if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    // Close mobile menu if open and it's a hash link click
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                 }
            }
        });
    });

});