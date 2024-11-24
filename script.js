document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll functionality
    const scrollArrow = document.querySelector('.scroll-arrow');
    const portfolioSection = document.querySelector('.portfolio-section');

    scrollArrow.addEventListener('click', () => {
        portfolioSection.scrollIntoView({ 
            behavior: 'smooth'
        });
    });

    // Project cards hover effect
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const projectInfo = card.querySelector('.project-info');
        
        card.addEventListener('mouseenter', () => {
            projectInfo.style.opacity = '1';
        });
        
        card.addEventListener('mouseleave', () => {
            projectInfo.style.opacity = '0';
        });
    });

    // Optional: Add fade-in animation for elements as they come into view
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

    const fadeElements = document.querySelectorAll('.project-card, .game-item, .social-icon');
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });
});
