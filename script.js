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

    // Enhanced glitch effect with random intensity
    const randomizeGlitch = () => {
        const glitchIntensity = Math.random() * 2; // Random intensity between 0 and 2
        glitchText.style.transform = `skew(${glitchIntensity}deg)`;
    };
    setInterval(randomizeGlitch, 300);

    // Parallax scrolling effect for background
    const parallaxBackground = document.querySelector('.cyberpunk-overlay');
    window.addEventListener('scroll', function() {
        let offset = window.pageYOffset;
        parallaxBackground.style.backgroundPositionY = offset * 0.7 + 'px';
    });

    // Form submission alert
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.');
        form.reset();
    });

    // Highlight current section in navigation
    const sections = document.querySelectorAll('section');
    const highlightNav = () => {
        let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
        navLinks.forEach(link => {
            let refElement = document.querySelector(link.getAttribute('href'));
            if (refElement.offsetTop <= scrollPos && refElement.offsetTop + refElement.clientHeight > scrollPos) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    };
    window.addEventListener('scroll', highlightNav);
});
