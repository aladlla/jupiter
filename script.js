document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Microinteractions (Hover effects for buttons and elements)
    document.querySelectorAll('.service').forEach((service) => {
        service.addEventListener('mouseover', () => {
            gsap.to(service, { scale: 1.05, duration: 0.3 });
        });
        service.addEventListener('mouseleave', () => {
            gsap.to(service, { scale: 1, duration: 0.3 });
        });
    });

    // 2. Parallax Scrolling (Header background parallax)
    gsap.to(".header", {
        scrollTrigger: {
            trigger: ".header",
            start: "top top",
            scrub: true,
        },
        backgroundPosition: "50% 100%",
    });

    // 3. Motion Design (Section headings fading in with animation)
    gsap.from("section h2", {
        scrollTrigger: {
            trigger: "section",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 1.5,
        opacity: 0,
        y: -50,
        ease: "power4.out"
    });

    // 4. Scroll-triggered animations for text and services
    gsap.from("section p, .service", {
        scrollTrigger: {
            trigger: "section",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 1.5,
        opacity: 0,
        y: 30,
        stagger: 0.2,
        ease: "power4.out"
    });

    // 5. Page Transitions (Smooth transitions between pages)
    barba.init({
        transitions: [{
            leave(data) {
                return gsap.to(data.current.container, {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.inOut"
                });
            },
            enter(data) {
                return gsap.from(data.next.container, {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.inOut"
                });
            }
        }]
    });

    // 6. Lottie Animation (Simple Lottie animation on header)
    bodymovin.loadAnimation({
        container: document.getElementById('lottie-header'), // Where the animation goes
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets3.lottiefiles.com/packages/lf20_wd1mfz2b.json' // Example Lottie file
    });

    // 7. Smooth Scrolling (Full-page smooth scroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 8. Particle Effect in the background
    particlesJS('background-particles', {
        particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 }
            },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.2, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: true }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" } }
        },
        retina_detect: true
    });

    // 9. Infinite Scroll (Loading new content when scrolling to the bottom)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadMoreContent(); // You can create this function to load more items dynamically
            }
        });
    });
    observer.observe(document.querySelector(".footer"));

    // 10. Morphing (Morphing shapes or SVGs)
    gsap.to("#svg-element", {
        morphSVG: "#target-shape", // Morph one SVG into another
        duration: 2,
        repeat: -1,
        yoyo: true
    });

    // 11. 3D Animations (Using CSS or JS libraries for 3D effects)
    const cube = document.querySelector('.cube');
    gsap.to(cube, {
        rotateX: 360,
        rotateY: 360,
        duration: 4,
        ease: "power3.inOut",
        repeat: -1
    });

    // 12. Progress Indicator (Scroll progress bar)
    gsap.to("#progress-bar", {
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: true
        },
        width: "100%",
        ease: "none"
    });

    // 13. Tooltip Animations
    document.querySelectorAll('.tooltip').forEach((tooltip) => {
        tooltip.addEventListener('mouseover', () => {
            gsap.to(tooltip.querySelector('.tooltip-text'), {
                opacity: 1,
                y: -10,
                duration: 0.3
            });
        });
        tooltip.addEventListener('mouseleave', () => {
            gsap.to(tooltip.querySelector('.tooltip-text'), {
                opacity: 0,
                y: 0,
                duration: 0.3
            });
        });
    });
});
