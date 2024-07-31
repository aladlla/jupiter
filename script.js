// Toggle mobile menu visibility
function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
}

// Add event listener for menu button
document.querySelector('.menu-button').addEventListener('click', toggleMenu);

// Smooth scroll to section
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});
