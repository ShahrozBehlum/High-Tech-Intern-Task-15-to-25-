const form = document.getElementById('signupForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const successMessage = document.getElementById('successMessage');
    const subscribeBtn = document.getElementById('subscribeBtn');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;
      nameError.textContent = '';
      emailError.textContent = '';
      successMessage.textContent = '';

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (name === '') {
        nameError.textContent = 'Full Name is required';
        valid = false;
      }

      if (email === '') {
        emailError.textContent = 'Email is required';
        valid = false;
      } else if (!emailRegex.test(email)) {
        emailError.textContent = 'Enter a valid email address';
        valid = false;
      }

      if (valid) {
        localStorage.setItem('newsletterName', name);
        localStorage.setItem('newsletterEmail', email);
        successMessage.textContent = 'Thank you for subscribing!';
        subscribeBtn.disabled = true;
        subscribeBtn.textContent = 'Subscribed';
      }
    });