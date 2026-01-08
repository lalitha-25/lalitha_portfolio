// --- Typewriter Effect ---
const typewriterElement = document.getElementById('typewriter');
const text = "MERN Stack Developer";
let index = 0;

function type() {
    if (index < text.length) {
        typewriterElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

// Start typewriter after a small delay
document.addEventListener('DOMContentLoaded', () => {
    typewriterElement.textContent = ""; // Clear initial text
    setTimeout(type, 500);
});

// --- Scroll Animations (Reveal on Scroll) ---
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

// Select all cards and sections for reveal effect
document.querySelectorAll('.glass-card, section .container').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
});

// --- Navbar Scroll Effect ---
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.padding = '1rem 10%';
        nav.style.backgroundColor = 'rgba(5, 5, 5, 0.9)';
    } else {
        nav.style.padding = '1.5rem 10%';
        nav.style.backgroundColor = 'rgba(10, 10, 12, 0.8)';
    }
});

// --- Form Submission (Simulated) ---
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('.btn');
        const originalText = btn.textContent;
        
        btn.textContent = 'Sending...';
        btn.disabled = true;

        setTimeout(() => {
            btn.textContent = 'Message Sent!';
            btn.style.background = '#22c55e'; // Green
            contactForm.reset();
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))';
                btn.disabled = false;
            }, 3000);
        }, 1500);
    });
}
