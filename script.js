document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Glitch effect for hero text
    const glitchText = document.querySelector('.glitch');
    setInterval(() => {
        glitchText.classList.toggle('glitch-active');
    }, 500);

    // Form submission alert
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.');
        form.reset();
    });
});
