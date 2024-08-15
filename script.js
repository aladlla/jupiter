document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1200,
        once: true,
        mirror: false, // Prevents repeated animation
    });

    // Initialize Particles.js with the original roaming lines configuration
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 100, // Adjusted for a smooth performance
                density: { enable: true, value_area: 800 }
            },
            color: { value: "#ffffff" }, // Lines will be white
            shape: {
                type: "line", // Changed to line for the roaming lines effect
                stroke: { width: 2, color: "#ffffff" }, // White lines
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
    });
});
