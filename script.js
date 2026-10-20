// Smooth Interactive Behavior & Form Handling
document.addEventListener('DOMContentLoaded', () => {
    
    // Contact form submission handling
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            alert(`Thank you, ${name}! Your message has been sent successfully.`);
            
            contactForm.reset();
        });
    }

    // Scroll Navbar Highlight Effects
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.style.color = '#38bdf8';
            } else {
                link.style.color = '#94a3b8';
            }
        });
    });
});