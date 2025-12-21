/* NAVBAR MENU TOGGLE */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.onclick = () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (icon) {
            // Toggle between 'bars' and 'xmark' icons
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        }
    };

    // Close menu when a link is clicked (for mobile UX)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            if (icon && icon.classList.contains('fa-xmark')) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-xmark');
            }
        });
    });
}

/* FAQ ACCORDION (Kept for potential expansion) */
document.querySelectorAll('.faq-item').forEach(item => {
    item.onclick = () => item.classList.toggle('active');
});

/* CONTACT FORM SUBMISSION */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        alert('Thank you for your message! I will reply within 24 hours.');
        e.target.reset();
    });
}