document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Glitch effect for the logo
    const logo = document.querySelector('.logo');
    setInterval(() => {
        logo.style.textShadow = `
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px ${Math.random() * 5}px rgba(0, 255, 255, 0.7),
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px ${Math.random() * 5}px rgba(255, 0, 255, 0.7)
        `;
    }, 100);

    // Form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('شكرًا لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.');
        contactForm.reset();
    });

    // Parallax effect for the hero section
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
});
