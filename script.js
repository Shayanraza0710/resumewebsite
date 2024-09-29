// Smooth Scroll Animations for each section
document.querySelectorAll('.section').forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    
    window.addEventListener('scroll', () => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 150) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
            section.style.transition = `opacity 0.6s ease, transform 0.6s ease ${index * 0.1}s`;
        }
    });
});
