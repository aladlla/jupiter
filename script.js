// GSAP Animations
document.addEventListener('DOMContentLoaded', function () {

    // Header Text Animation
    gsap.from("header h1", {
        duration: 2,
        opacity: 0,
        y: -50,
        ease: "power4.out"
    });

    gsap.from("header nav ul li", {
        duration: 1,
        opacity: 0,
        y: 30,
        stagger: 0.2,
        ease: "power4.out",
        delay: 1
    });

    // About Section Animation
    gsap.from("#about h2", {
        scrollTrigger: {
            trigger: "#about",
            start: "top center",
        },
        duration: 1.5,
        opacity: 0,
        y: 50,
        ease: "power4.out"
    });

    gsap.from("#about p", {
        scrollTrigger: {
            trigger: "#about",
            start: "top center",
        },
        duration: 1.5,
        opacity: 0,
        y: 30,
        ease: "power4.out",
        stagger: 0.3
    });

    // Services Section Animation
    gsap.from("#services h2", {
        scrollTrigger: {
            trigger: "#services",
            start: "top center",
        },
        duration: 1.5,
        opacity: 0,
        y: 50,
        ease: "power4.out"
    });

    gsap.from(".service", {
        scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
        },
        duration: 1,
        opacity: 0,
        y: 30,
        stagger: 0.3,
        ease: "power4.out"
    });

    // Contact Section Animation
    gsap.from("#contact h2", {
        scrollTrigger: {
            trigger: "#contact",
            start: "top center",
        },
        duration: 1.5,
        opacity: 0,
        y: 50,
        ease: "power4.out"
    });

    gsap.from("#contact form input, #contact form textarea, #contact form button", {
        scrollTrigger: {
            trigger: "#contact",
            start: "top center",
        },
        duration: 1,
        opacity: 0,
        y: 30,
        stagger: 0.2,
        ease: "power4.out"
    });

});
