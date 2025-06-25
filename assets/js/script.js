// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    // Toggle menu
    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });

    // Contact form: show/hide identity field based on select
    const identitySelect = document.getElementById('identity');
    const identityField = document.getElementById('identity-field');
    if (identitySelect && identityField) {
        identitySelect.addEventListener('change', function () {
            if (this.value === 'anonymous') {
                identityField.classList.remove('show');
            } else {
                identityField.classList.add('show');
            }
        });
    }

    // Prevent form submission on non-contact.html
    if (!window.location.pathname.endsWith('contact.html')) {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
            });
        });
    }
});