document.addEventListener('DOMContentLoaded', function() {
    // Typewriter effect
    const typewriter = (element, speed) => {
        const text = element.textContent;
        element.textContent = '';
        let i = 0;
        const interval = setInterval(() => {
            element.textContent += text.charAt(i);
            i++;
            if (i > text.length) {
                clearInterval(interval);
            }
        }, speed);
    };

    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        typewriter(typewriterElement, 100);
    }

    // Scroll animation effect
    const elements = document.querySelectorAll('.fade-in');

    function checkScroll() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();

    // Parallax effect
    document.addEventListener('scroll', function() {
        const parallax = document.querySelector('.parallax');
        if (parallax) {
            const scrollPosition = window.pageYOffset;
            parallax.style.backgroundPositionY = -(scrollPosition * 0.5) + 'px';
        }
    });
});
