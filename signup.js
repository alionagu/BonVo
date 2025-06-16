document.addEventListener('DOMContentLoaded', function () {
  const signupBtn = document.querySelector('.signup-btn');

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const termsCheckbox = document.getElementById('terms-checkbox');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');
  const termsError = document.getElementById('terms-error');

  const googleBtn = document.querySelector('.google-btn');
  const appleBtn = document.querySelector('.apple-btn');
  const togglePasswordBtn = document.querySelector('.toggle-password');

  togglePasswordBtn.addEventListener('click', () => {
    const isPassword = passwordInput.getAttribute('type') === 'password';
    passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
    togglePasswordBtn.textContent = isPassword ? '🙈' : '👁️';});

  // Validation functions
  function validateName(name) {
    if (!name.trim()) return 'Name is required.';
    if (name.trim().length < 2) return 'Name must be at least 2 characters long.';
    return '';
  }

  function validateEmail(email) {
    if (!email) return 'Email is required.';
    if (!email.includes('@')) return 'Email must contain "@" symbol.';
    if (!email.includes('.')) return 'Email must contain a dot (".") like ".com".';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Email format is invalid.';
    return '';
  }

  function validatePassword(password) {
    if (!password) return 'Password is required.';
    if (password.length < 8) return 'Password must be at least 8 characters long.';
    if (!/[A-Z]/.test(password)) return 'Password must contain at least one uppercase letter.';
    if (!/[a-z]/.test(password)) return 'Password must contain at least one lowercase letter.';
    if (!/[0-9]/.test(password)) return 'Password must contain at least one number.';
    return '';
  }

  signupBtn.addEventListener('click', function(event) {
    event.preventDefault();

    // Clear previous errors
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    termsError.textContent = '';

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const termsAccepted = termsCheckbox.checked;

    let isValid = true;

    const nameValidationResult = validateName(name);
    if (nameValidationResult) {
      nameError.textContent = nameValidationResult;
      isValid = false;
    }

    const emailValidationResult = validateEmail(email);
    if (emailValidationResult) {
      emailError.textContent = emailValidationResult;
      isValid = false;
    }

    const passwordValidationResult = validatePassword(password);
    if (passwordValidationResult) {
      passwordError.textContent = passwordValidationResult;
      isValid = false;
    }

    if (!termsAccepted) {
      termsError.textContent = 'You must agree to the terms & policy.';
      isValid = false;
    }

    if (!isValid) return;

    alert('Sign up was successful! Willkommen 🎉😊');
  });

  googleBtn.addEventListener('click', function() {
    alert("☕️ Google sign-in is taking a coffee break. Try again soon!");
  });

  appleBtn.addEventListener('click', function() {
    alert("😴 Apple sign-in is napping right now. Please check back later!");
  });
});
