document.addEventListener('DOMContentLoaded', () => {
    const mainPage = document.querySelector('.main-page');
    const connectSection = document.querySelector('.connect-section');
    const scrollArrow = document.querySelector('.scroll-arrow');
    const scrollUpArrow = document.querySelector('.scroll-up-arrow');

    // Show/hide scroll arrows based on scroll position
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;

        if (scrollPosition < windowHeight / 2) {
            scrollArrow.style.display = 'flex';
            scrollUpArrow.style.display = 'none';
        } else {
            scrollArrow.style.display = 'none';
            scrollUpArrow.style.display = 'flex';
        }
    });

    // Smooth scroll functionality
    scrollArrow.addEventListener('click', () => {
        connectSection.scrollIntoView({ behavior: 'smooth' });
    });

    scrollUpArrow.addEventListener('click', () => {
        mainPage.scrollIntoView({ behavior: 'smooth' });
    });

    // Game items hover effect
    const gameItems = document.querySelectorAll('.game-item');
    
    gameItems.forEach(item => {
        const overlay = item.querySelector('.game-overlay');
        
        item.addEventListener('mouseenter', () => {
            overlay.style.opacity = '1';
        });
        
        item.addEventListener('mouseleave', () => {
            overlay.style.opacity = '0';
        });
    });

    // Initialize scroll arrow visibility
    scrollUpArrow.style.display = 'none';

    // Fade-in animation for elements
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.game-item, .social-icon');
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });
});
