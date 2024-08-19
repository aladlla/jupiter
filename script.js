document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1500, // Increased duration for smoother animations
        once: true,
        mirror: false,
        easing: 'ease-in-out',
    });

    // Initialize Particles.js with a dynamic configuration
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 120, // Increased particles for a denser effect
                density: { enable: true, value_area: 800 }
            },
            color: { value: "#ffffff" },
            shape: {
                type: "circle", // Switched to circles for a more modern look
                stroke: { width: 0, color: "#ffffff" },
                polygon: { nb_sides: 6 },
                image: { src: "", width: 100, height: 100 }
            },
            opacity: {
                value: 0.5,
                random: true, // Random opacity for a more dynamic effect
                anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false }
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: true, speed: 10, size_min: 0.5, sync: false } // Added subtle size animation
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
                speed: 2, // Increased speed for more movement
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
                onhover: { enable: true, mode: "bubble" }, // Switched to bubble effect on hover
                onclick: { enable: true, mode: "repulse" }, // Repulse particles on click
                resize: true
            },
            modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: { distance: 250, size: 5, duration: 2, opacity: 0.8, speed: 3 }, // Enhanced bubble mode
                repulse: { distance: 400, duration: 0.8 }, // Enhanced repulse mode
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
            }
        },
        retina_detect: true
    });

    // Scales of Justice Icon Animation with additional effects
    const justiceIcon = document.getElementById('justice-icon');
    justiceIcon.addEventListener('mouseover', () => {
        justiceIcon.style.transform = 'rotate(-10deg) scale(1.1)';
        justiceIcon.style.transition = 'transform 0.3s ease-in-out';
        justiceIcon.style.filter = 'drop-shadow(0 5px 5px rgba(0, 0, 0, 0.5))'; // Added shadow effect
    });
    justiceIcon.addEventListener('mouseout', () => {
        justiceIcon.style.transform = 'rotate(0deg) scale(1)';
        justiceIcon.style.filter = 'none'; // Remove shadow on mouse out
    });

    // Smooth Scroll with Debounce for optimized performance
    const debounce = (func, wait = 20, immediate = true) => {
        let timeout;
        return function () {
            const context = this, args = arguments;
            const later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', debounce(function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }));
    });

    // Dynamic Header: Shrink on Scroll and Change Background
    const header = document.querySelector('.header');
    const headerHeight = header.offsetHeight;
    let lastScrollTop = 0;

    window.addEventListener('scroll', debounce(function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > headerHeight) {
            header.classList.add('shrink');
            header.style.background = 'rgba(44, 62, 80, 0.9)'; // Slight transparency on scroll
        } else {
            header.classList.remove('shrink');
            header.style.background = ''; // Revert background
        }

        if (scrollTop > lastScrollTop) {
            header.style.transform = 'translateY(-100%)'; // Hide header on scroll down
        } else {
            header.style.transform = 'translateY(0)'; // Show header on scroll up
        }
        lastScrollTop = scrollTop;
    }));

    // Animated Scroll Progress Bar
    const progressBar = document.createElement('div');
    progressBar.classList.add('scroll-progress');
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', debounce(function () {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const progress = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = progress + '%';
    }));

    // Dark Mode Toggle
    const darkModeToggle = document.createElement('button');
    darkModeToggle.classList.add('dark-mode-toggle');
    darkModeToggle.textContent = 'Toggle Dark Mode';
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Lightbox Feature for Images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
            document.body.appendChild(lightbox);

            const lightboxImg = document.createElement('img');
            lightboxImg.src = img.src;
            lightbox.appendChild(lightboxImg);

            lightbox.addEventListener('click', () => {
                lightbox.remove();
            });
        });
    });

    // Lazy Loading Images for Performance Improvement
    const lazyLoadImages = document.querySelectorAll('img[data-src]');
    const lazyLoad = debounce(function () {
        lazyLoadImages.forEach(img => {
            if (img.getBoundingClientRect().top < window.innerHeight && img.getBoundingClientRect().bottom > 0) {
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
            }
        });

        if (lazyLoadImages.length === 0) {
            document.removeEventListener('scroll', lazyLoad);
        }
    });

    document.addEventListener('scroll', lazyLoad);
    lazyLoad(); // Trigger loading on DOMContentLoaded
});
