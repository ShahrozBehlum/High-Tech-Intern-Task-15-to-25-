const btn = document.getElementById('contactForm');
btn.addEventListener('submit', function (e) {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById('fullName');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');

    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMessage.textContent = '';

    // Name validation
    if (name.value.trim() === '') {
        nameError.textContent = 'Full Name is required';
        valid = false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required';
        valid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = 'Enter a valid email address';
        valid = false;
    }

    // Message validation
    if (message.value.trim() === '') {
        messageError.textContent = 'Message is required';
        valid = false;
    }

    // Final success message
    if (valid) {
        successMessage.textContent = 'Thank you for contacting us!';
        name.value = '';
        email.value = '';
        message.value = '';
    }
});
