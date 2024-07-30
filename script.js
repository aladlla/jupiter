document.addEventListener('DOMContentLoaded', function() {
    const text = "مرحباً بكم في العدالة للمحامات";
    let index = 0;
    const speed = 100; // speed of typing effect

    function typeEffect() {
        if (index < text.length) {
            document.querySelector('.typing-animation').textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, speed);
        } else {
            setTimeout(() => {
                document.querySelector('.typing-animation').textContent = "";
                index = 0;
                typeEffect();
            }, 2000);
        }
    }

    typeEffect();
});
