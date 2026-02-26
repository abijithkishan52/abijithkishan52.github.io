// ==========================================
// Mobile Menu Toggle
// ==========================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (hamburger) {
            hamburger.classList.remove('active');
        }
    });
});

// ==========================================
// Smooth Scrolling
// ==========================================

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

// ==========================================
// Scroll Animation
// ==========================================

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

// Observe skill tags and project cards
document.querySelectorAll('.skill-tag, .project-card, .stat, .timeline-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==========================================
// Contact Form Handling
// ==========================================

// Initialize EmailJS
(function() {
    emailjs.init('Hlvn9mj5ik4eieZcO');
})();

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const from_name = document.getElementById('from_name').value.trim();
        const from_email = document.getElementById('from_email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate form
        if (!from_name || !from_email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(from_email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        // Send email via EmailJS
        const templateParams = {
            to_email: 'abijithkishan.0502@outlook.com',
            from_name: from_name,
            from_email: from_email,
            subject: subject,
            message: message,
            reply_to: from_email
        };

        emailjs.send('service_xnwk3c6', 'template_6xnbtlh', templateParams)
            .then((response) => {
                console.log('Email sent successfully!', response);
                showNotification('Message sent successfully! I will get back to you soon.', 'success');
                contactForm.reset();
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
                showNotification('Failed to send message. Please try again or email me directly at abijithkishan.0502@outlook.com', 'error');
            });
    });
}

function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 8px;
        background-color: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        font-weight: 600;
        z-index: 1000;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;

    document.body.appendChild(notification);

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        @keyframes slideOutRight {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100px);
            }
        }
    `;
    document.head.appendChild(style);

    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// ==========================================
// Active Navigation Link
// ==========================================

const sections = document.querySelectorAll('section[id]');

const navLinkObserverOptions = {
    threshold: 0.5
};

const navLinkObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, navLinkObserverOptions);

sections.forEach(section => {
    navLinkObserver.observe(section);
});

// ==========================================
// Scroll to Top Button
// ==========================================

const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: #2563eb;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    z-index: 999;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==========================================
// Navbar Background on Scroll
// ==========================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ==========================================
// Typing Effect for Hero Subtitle
// ==========================================

function typeEffect(element, text, speed = 100) {
    let index = 0;
    element.textContent = '';

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

// ==========================================
// Page Load Animation
// ==========================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

// ==========================================
// Resume Links - Direct Download
// ==========================================
// Resume links with download attribute handle direct downloads
// No additional JavaScript functionality needed

// ==========================================
// Performance: Lazy Loading for Images
// ==========================================

if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src;
                entry.target.removeAttribute('data-src');
                imageObserver.unobserve(entry.target);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}

// ==========================================
// Local Storage: Save Contact Form Draft
// ==========================================

const formInputs = document.querySelectorAll('#contactForm input, #contactForm textarea');

formInputs.forEach(input => {
    // Load saved data on page load
    const savedValue = localStorage.getItem(`form-${input.id}`);
    if (savedValue) {
        input.value = savedValue;
    }

    // Save data as user types
    input.addEventListener('input', () => {
        localStorage.setItem(`form-${input.id}`, input.value);
    });
});

// Clear saved form data after successful submission
if (contactForm) {
    contactForm.addEventListener('submit', () => {
        formInputs.forEach(input => {
            localStorage.removeItem(`form-${input.id}`);
        });
    });
}

console.log('Portfolio website loaded successfully!');
