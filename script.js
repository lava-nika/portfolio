// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

// Toggle theme
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Update ARIA state
        const isDark = body.classList.contains('dark-mode');
        themeToggle.setAttribute('aria-pressed', isDark);
        themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        
        // Save preference
        const theme = isDark ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
    
    // Set initial ARIA state
    const isDark = body.classList.contains('dark-mode');
    themeToggle.setAttribute('aria-pressed', isDark);
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        const isActive = navMenu.classList.toggle('active');
        
        // Update ARIA attribute
        hamburger.setAttribute('aria-expanded', isActive);
        
        // Animate hamburger icon
        const spans = hamburger.querySelectorAll('span');
        if (isActive) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 90;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced navbar scroll effect
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Advanced Intersection Observer with stagger effect
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observerCallback = (entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Animate project cards with stagger
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Animate timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
    observer.observe(item);
});

// Animate approach cards
const approachCards = document.querySelectorAll('.approach-card');
approachCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Animate contact cards
const contactCards = document.querySelectorAll('.contact-card');
contactCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.95)';
    card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Active nav link highlighting with gradient
const sections = document.querySelectorAll('section[id]');

function setActiveNavLink() {
    const scrollPosition = window.pageYOffset + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveNavLink);

// Parallax effect for hero section
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.3;
        if (scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });
}

// Add shimmer effect to gradient text on hover
const gradientTexts = document.querySelectorAll('.hero-subtitle, .metric-value');
gradientTexts.forEach(text => {
    text.addEventListener('mouseenter', function() {
        this.style.backgroundSize = '200% auto';
        this.style.animation = 'shimmer 2s linear infinite';
    });
    
    text.addEventListener('mouseleave', function() {
        this.style.animation = 'none';
        this.style.backgroundSize = '100% auto';
    });
});

// Smooth fade-in for hero content
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('fade-in');
    }
});

// Add cursor trail effect (optional - subtle)
let cursorTrail = [];
const trailLength = 10;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY });
    if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
    }
});

// Copy email notification
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const email = link.getAttribute('href').replace('mailto:', '');
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(() => {
                showNotification('Email copied to clipboard! ✨');
            });
        }
    });
});

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, var(--pastel-orange), var(--pastel-pink));
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        font-size: 14px;
        font-weight: 600;
        z-index: 10000;
        box-shadow: 0 8px 24px rgba(255, 184, 153, 0.4);
        animation: slideInUp 0.3s ease-out;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInUp {
            from {
                transform: translateY(20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        @keyframes slideOutDown {
            from {
                transform: translateY(0);
                opacity: 1;
            }
            to {
                transform: translateY(20px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutDown 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add easter egg - click logo 5 times for confetti
let logoClickCount = 0;
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('click', () => {
        logoClickCount++;
        if (logoClickCount === 5) {
            showNotification('You found an easter egg! 🎉');
            logoClickCount = 0;
        }
    });
}

// ============================================
// CAROUSEL FUNCTIONALITY
// ============================================

const carouselTrack = document.querySelector('.carousel-track');
const carouselCards = document.querySelectorAll('.project-card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.carousel-dots');

let currentIndex = 0;
const totalProjects = carouselCards.length;

// Create dots dynamically
function createDots() {
    if (!dotsContainer) return;
    
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalProjects; i++) {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

// Update carousel position
function updateCarousel() {
    if (!carouselTrack) return;
    
    const offset = -currentIndex * 100;
    carouselTrack.style.transform = `translateX(${offset}%)`;
    
    // Update dots
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
    
    // Update button states
    if (prevBtn && nextBtn) {
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        prevBtn.style.cursor = currentIndex === 0 ? 'not-allowed' : 'pointer';
        nextBtn.style.opacity = currentIndex === totalProjects - 1 ? '0.5' : '1';
        nextBtn.style.cursor = currentIndex === totalProjects - 1 ? 'not-allowed' : 'pointer';
    }
}

// Go to specific slide
function goToSlide(index) {
    if (index < 0 || index >= totalProjects) return;
    
    // Reset any flipped cards when changing slides
    carouselCards.forEach(card => card.classList.remove('flipped'));
    
    currentIndex = index;
    updateCarousel();
}

// Previous slide
function previousSlide() {
    if (currentIndex > 0) {
        goToSlide(currentIndex - 1);
    }
}

// Next slide
function nextSlide() {
    if (currentIndex < totalProjects - 1) {
        goToSlide(currentIndex + 1);
    }
}

// Event listeners for carousel controls
prevBtn?.addEventListener('click', previousSlide);
nextBtn?.addEventListener('click', nextSlide);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        previousSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

// Touch/Swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

carouselTrack?.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

carouselTrack?.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swiped left - go to next
            nextSlide();
        } else {
            // Swiped right - go to previous
            previousSlide();
        }
    }
}

// ============================================
// CARD FLIP FUNCTIONALITY
// ============================================

// Add flip functionality to all flip buttons
const flipButtons = document.querySelectorAll('.flip-btn');

flipButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event bubbling
        
        // Find the parent project card
        const card = button.closest('.project-card');
        if (card) {
            card.classList.toggle('flipped');
        }
    });
});

// Initialize carousel
if (carouselTrack && carouselCards.length > 0) {
    createDots();
    updateCarousel();
    
    // Remove the old animation observer for project cards since we're using carousel now
    carouselCards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'none';
        card.style.transition = 'none';
    });
}

// Auto-advance carousel (optional - uncomment to enable)
/*
let autoAdvanceInterval;

function startAutoAdvance() {
    autoAdvanceInterval = setInterval(() => {
        if (currentIndex < totalProjects - 1) {
            nextSlide();
        } else {
            goToSlide(0); // Loop back to start
        }
    }, 5000); // Change slide every 5 seconds
}

function stopAutoAdvance() {
    clearInterval(autoAdvanceInterval);
}

// Start auto-advance
startAutoAdvance();

// Pause on hover
carouselTrack?.addEventListener('mouseenter', stopAutoAdvance);
carouselTrack?.addEventListener('mouseleave', startAutoAdvance);

// Pause on user interaction
prevBtn?.addEventListener('click', () => {
    stopAutoAdvance();
    setTimeout(startAutoAdvance, 10000); // Resume after 10 seconds
});

nextBtn?.addEventListener('click', () => {
    stopAutoAdvance();
    setTimeout(startAutoAdvance, 10000);
});
*/

// ============================================
// CONTACT FORM VALIDATION & SUBMISSION
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    // Real-time validation
    const formInputs = contactForm.querySelectorAll('input, textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                validateField(input);
            }
        });
    });
    
    // Form submission
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validate all fields
        let isValid = true;
        formInputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        if (!isValid) return;
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            subject: document.getElementById('subject').value.trim(),
            message: document.getElementById('message').value.trim()
        };
        
        // Show loading state
        const submitBtn = contactForm.querySelector('.submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        const formStatus = contactForm.querySelector('.form-status');
        
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline';
        formStatus.classList.remove('show', 'success', 'error');
        
        try {
            // Simulate form submission (replace with actual API call)
            await simulateFormSubmission(formData);
            
            // Success
            formStatus.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
            formStatus.classList.add('show', 'success');
            contactForm.reset();
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                formStatus.classList.remove('show');
            }, 5000);
            
        } catch (error) {
            // Error
            formStatus.textContent = '✗ Something went wrong. Please try again or email me directly.';
            formStatus.classList.add('show', 'error');
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
        }
    });
}

function validateField(field) {
    const value = field.value.trim();
    const errorMessage = field.parentElement.querySelector('.error-message');
    let isValid = true;
    let message = '';
    
    // Required validation
    if (!value) {
        isValid = false;
        message = 'This field is required';
    }
    // Email validation
    else if (field.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            message = 'Please enter a valid email address';
        }
    }
    // Minimum length validation
    else if (field.name === 'message' && value.length < 10) {
        isValid = false;
        message = 'Message must be at least 10 characters';
    }
    
    // Update UI
    if (isValid) {
        field.classList.remove('error');
        errorMessage.classList.remove('show');
        errorMessage.textContent = '';
    } else {
        field.classList.add('error');
        errorMessage.classList.add('show');
        errorMessage.textContent = message;
    }
    
    return isValid;
}

// Real form submission with multiple methods
async function simulateFormSubmission(formData) {
    // METHOD 1: Formspree (Recommended - Easiest Setup)
    // Uncomment and add your Formspree form ID after setup
    
    try {
        const response = await fetch('https://formspree.io/f/mlgrkbpp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        if (!response.ok) throw new Error('Formspree submission failed');
        return; // Success
    } catch (error) {
        console.error('Formspree error:', error);
        // Fall through to next method
    }
    
    
    // METHOD 2: EmailJS (More Control)
    // Uncomment after EmailJS setup
    /*
    try {
        await emailjs.send(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message
            }
        );
        return; // Success
    } catch (error) {
        console.error('EmailJS error:', error);
        // Fall through to next method
    }
    */
    
    // METHOD 3: Web3Forms (Privacy-focused, no account needed)
    // Uncomment and add your access key
    /*
    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                access_key: 'YOUR_WEB3FORMS_KEY',
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message
            })
        });
        
        const result = await response.json();
        if (result.success) return; // Success
        throw new Error('Web3Forms submission failed');
    } catch (error) {
        console.error('Web3Forms error:', error);
        // Fall through to next method
    }
    */
    
    // METHOD 4: mailto Fallback (Always works, opens email client)
    // Uncomment to enable mailto fallback
    
    const mailtoLink = `mailto:lsrinivasara@umass.edu?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    return; // Redirect to email client
    
    
    // TEMPORARY: Simulate success for testing (remove in production)
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Form submitted (simulated):', formData);
            console.warn('⚠️ Form submission is simulated. Set up one of the methods above!');
            resolve();
        }, 1500);
    });
}

// ============================================
// Flip Card Functionality for More Projects
// ============================================

// Initialize flip cards when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeFlipCards();
});

function initializeFlipCards() {
    // Get all flip cards
    const flipCards = document.querySelectorAll('.flip-card');
    
    flipCards.forEach(card => {
        const viewDetailsBtn = card.querySelector('.view-details-btn');
        const backBtn = card.querySelector('.back-btn');
        
        // Add click event to "View Details" button
        if (viewDetailsBtn) {
            viewDetailsBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                card.classList.add('flipped');
                // Announce to screen readers
                const cardTitle = card.querySelector('h3').textContent;
                announceToScreenReader(`Showing details for ${cardTitle}`);
            });
        }
        
        // Add click event to "Back" button
        if (backBtn) {
            backBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                card.classList.remove('flipped');
                // Announce to screen readers
                const cardTitle = card.querySelector('h3').textContent;
                announceToScreenReader(`Returning to summary view for ${cardTitle}`);
            });
        }
        
        // Add keyboard support
        if (viewDetailsBtn) {
            viewDetailsBtn.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.classList.add('flipped');
                    // Focus on back button after flip
                    setTimeout(() => {
                        backBtn?.focus();
                    }, 600); // Wait for flip animation
                }
            });
        }
        
        if (backBtn) {
            backBtn.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.classList.remove('flipped');
                    // Focus on view details button after flip
                    setTimeout(() => {
                        viewDetailsBtn?.focus();
                    }, 600); // Wait for flip animation
                }
            });
        }
    });
}

// Helper function to announce to screen readers
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}
