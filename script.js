document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll functionality for down arrow
    const scrollArrow = document.querySelector('.scroll-arrow');
    const connectSection = document.querySelector('.connect-section');

    scrollArrow.addEventListener('click', () => {
        connectSection.scrollIntoView({ 
            behavior: 'smooth'
        });
    });

    // Smooth scroll functionality for up arrow
    const scrollUpArrow = document.querySelector('.scroll-up-arrow');
    const mainPage = document.querySelector('.main-page');

    scrollUpArrow.addEventListener('click', () => {
        mainPage.scrollIntoView({ 
            behavior: 'smooth'
        });
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

    // Fade-in animation for elements as they come into view
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
