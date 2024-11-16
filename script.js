// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add sticky navigation
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Email sending function
function sendMail(e) {
    e.preventDefault();

    const params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    const templateParams = {
        from_name: params.name,
        from_email: params.email,
        subject: params.subject,
        message: params.message
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('tutoring-form').reset();
            window.location.href = 'thanks.html';
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again.');
        });

    return false;
}

// Mobile navigation toggle (to be implemented with hamburger menu)
function toggleMobileNav() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
