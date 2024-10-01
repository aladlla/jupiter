document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 1200,
        once: true
    });

    particlesJS('particles-js', {
        particles: {
            number: { value: 80 },
            color: { value: "#BDC3C7" },
            shape: { type: "circle" },
            size: { value: 3 },
            line_linked: { distance: 150, color: "#BDC3C7" },
            move: { speed: 2 }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" }
            }
        },
        retina_detect: true
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
