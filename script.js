// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form handling
const tutoringForm = document.getElementById('tutoring-form');

tutoringForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Basic form validation
    if (!validateForm(formData)) {
        return;
    }

    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    tutoringForm.reset();
});

// Form validation
function validateForm(data) {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!data.name.trim()) {
        alert('Please enter your name');
        return false;
    }
    
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    if (!data.subject) {
        alert('Please select a subject');
        return false;
    }
    
    if (!data.message.trim()) {
        alert('Please enter your message');
        return false;
    }
    
    return true;
}

// Add sticky navigation
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Mobile navigation toggle (to be implemented with hamburger menu)
// This is a placeholder for future mobile navigation implementation
function toggleMobileNav() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
