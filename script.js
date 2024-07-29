document.addEventListener('DOMContentLoaded', function() {
    // Animate text
    const textElement = document.querySelector('.animate-text');
    if (textElement) {
        textElement.classList.add('animated');
    }

    // Scroll Animation
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.fade-in, .slide-in, .service-item, .team-member');
        const options = {
            root: null,
            threshold: 0.1,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        elements.forEach(el => {
            observer.observe(el);
        });
    };

    animateOnScroll();

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Form submission
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.');
            form.reset();
        });
    }

    // Parallax effect for services section
    window.addEventListener('scroll', function() {
        const parallax = document.querySelector('.parallax');
        if (parallax) {
            let scrollPosition = window.pageYOffset;
            parallax.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });

    // Initialize particles.js
    particlesJS.load('particles-js', 'particles-config.json', function() {
        console.log('particles.js loaded - callback');
    });
});
