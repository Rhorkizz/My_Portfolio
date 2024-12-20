
// Smooth scrolling for navigation links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typewriter effect for the hero tagline
const tagline = document.querySelector('.tagline');
const text = "Aspiring Web Developer";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        tagline.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 90);
    }
}

document.addEventListener('DOMContentLoaded', typeWriter);

// Fade-in animation for sections on scroll
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    {
        threshold: 0.1
    }
);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});
