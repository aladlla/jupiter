document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 1200,
        once: true,
        mirror: false,
    });

    particlesJS('background-animation', {
        particles: {
            number: { value: 150, density: { enable: true, value_area: 1000 } },
            color: { value: ["#ff007a", "#007aff", "#ff8e71", "#ffcc70"] },
            shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 }
            },
            opacity: { value: 0.5, random: true },
            size: { value: 4, random: true },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.2, width: 1 },
            move: { enable: true, speed: 3, direction: "none", random: true }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" } }
        },
        retina_detect: true
    });
});
