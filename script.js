document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1200,
        once: true,
        mirror: false,
    });

    // Initialize Particles.js with the optimized roaming lines configuration
    const particleSettings = {
        particles: {
            number: {
                value: 80, // Adjusted to 80 for smoother performance
                density: { enable: true, value_area: 800 }
            },
            color: { value: "#ffffff" },
            shape: {
                type: "line",
                stroke: { width: 2, color: "#ffffff" },
                polygon: { nb_sides: 5 }
            },
            opacity: {
                value: 0.6,
                random: false,
                anim: { enable: false, speed: 1, opacity_min: 0.3, sync: false }
            },
            size: {
                value: 2,
                random: true,
                anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
            }
        },
        retina_detect: true
    };

    particlesJS('particles-js', particleSettings);

    // Scales of Justice Icon Animation with DRY principle
    const justiceIcon = document.getElementById('justice-icon');
    justiceIcon.addEventListener('mouseover', handleJusticeIconHover);
    justiceIcon.addEventListener('mouseout', handleJusticeIconHover);

    function handleJusticeIconHover(event) {
        const rotateDegree = event.type === 'mouseover' ? '-10deg' : '0deg';
        justiceIcon.style.transform = `rotate(${rotateDegree})`;
        justiceIcon.style.transition = 'transform 0.2s ease-in-out';
    }

    // Smooth Scroll with passive event listener
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }, { passive: true });
    });

    // Polyfill for scrollIntoView (if needed)
    if (!('scrollBehavior' in document.documentElement.style)) {
        loadScript('https://polyfill.io/v3/polyfill.min.js?features=smoothscroll');
    }

    function loadScript(src) {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        document.head.appendChild(script);
    }
});
