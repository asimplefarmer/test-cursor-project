// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        
        const button = this.querySelector('.primary-button');
        const originalText = button.textContent;
        
        button.textContent = 'Sending...';
        button.style.opacity = '0.7';
        
        // Simulate sending
        setTimeout(() => {
            button.textContent = 'Message Sent! ✓';
            button.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            
            // Reset form
            this.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))';
                button.style.opacity = '1';
            }, 3000);
        }, 1500);
    });
}

// Parallax effect for hero section
let lastScrollTop = 0;
const heroVisual = document.querySelector('.hero-visual');
const glowOrbs = document.querySelectorAll('.glow-orb');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Hero parallax
    if (heroVisual) {
        const offset = scrollTop * 0.5;
        heroVisual.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
    }
    
    // Glow orbs parallax
    glowOrbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.1;
        const offset = scrollTop * speed;
        orb.style.transform = `translateY(${offset}px)`;
    });
    
    lastScrollTop = scrollTop;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and sections
const animatedElements = document.querySelectorAll('.problem-card, .diff-card, .solution-point');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add active state to navigation on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add sparkle effect on button hover
const buttons = document.querySelectorAll('.primary-button, .secondary-button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        const sparkle = document.createElement('span');
        sparkle.classList.add('sparkle');
        sparkle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: white;
            border-radius: 50%;
            pointer-events: none;
            animation: sparkleAnimation 1s ease-out forwards;
        `;
        this.style.position = 'relative';
        this.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
    });
});

// Add CSS for sparkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleAnimation {
        0% {
            transform: translate(0, 0) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) scale(1);
            opacity: 0;
        }
    }
    
    .nav-links a.active {
        color: var(--accent-primary);
    }
`;
document.head.appendChild(style);

console.log('%c🚀 Wombatlabs - Design at the speed of your business', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with AI-first principles', 'color: #8b5cf6; font-size: 14px;');


