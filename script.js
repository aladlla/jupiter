document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS (Animate on Scroll) for smooth animations
    AOS.init({
        duration: 1200,  // Animation duration in milliseconds
        once: true,      // Animation occurs only once as the element scrolls into view
        mirror: false    // Prevents animations on scroll back
    });

    // Initialize Particles.js for subtle background particles effect
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,        // Number of particles
                density: { 
                    enable: true, 
                    value_area: 800 // Adjust the density of particles in a specific area
                }
            },
            color: { value: "#BDC3C7" },  // Color of particles (light silver to match theme)
            shape: {
                type: "circle",            // Shape of particles
                stroke: { width: 0 },      // No stroke around particles
            },
            opacity: {
                value: 0.5,       // Opacity of particles
                random: false,    // Uniform opacity
            },
            size: {
                value: 3,         // Size of particles
                random: true,     // Randomize particle size
            },
            line_linked: {
                enable: true,      // Enable lines connecting particles
                distance: 150,     // Distance between linked particles
                color: "#BDC3C7",  // Line color (light silver to blend with theme)
                opacity: 0.2,      // Line opacity
                width: 1           // Line width
            },
            move: {
                enable: true,      // Enable movement of particles
                speed: 2,          // Speed of particle movement
                direction: "none", // Random movement
                random: true,      // Randomize movement
            }
        },
        interactivity: {
            detect_on: "canvas",  // Detect user interactions on canvas element
            events: {
                onhover: { enable: true, mode: "grab" },  // Grab particles on hover
                onclick: { enable: true, mode: "push" },  // Push particles on click
                resize: true      // Recalculate particles on window resize
            },
            modes: {
                grab: {
                    distance: 200,          // Distance for grabbing particles
                    line_linked: { opacity: 0.5 } // Line opacity when particles are grabbed
                },
                repulse: {
                    distance: 200,          // Distance for repulsion
                    duration: 0.4           // Duration of repulsion effect
                },
                push: {
                    particles_nb: 4         // Number of particles to add on click
                }
            }
        },
        retina_detect: true  // Enable retina detection for sharper particle visuals
    });

    // Smooth Scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();  // Prevent default anchor click behavior
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'  // Smooth scrolling animation
            });
        });
    });
});
