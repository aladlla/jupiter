document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.animate-text');
    if (textElement) {
        textElement.classList.add('animated');
    }

    // Scroll Animation
    const elements = document.querySelectorAll('.fade-in, .slide-in');
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    elements.forEach(el => {
        observer.observe(el);
    });
});
