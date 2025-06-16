document.addEventListener('DOMContentLoaded', function () {
  const loginBtn = document.querySelector('.login-btn');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');

  const forgotPasswordLink = document.querySelector('.forgot-password');
  const googleBtn = document.querySelector('.google-btn');
  const appleBtn = document.querySelector('.apple-btn');
  const togglePasswordBtn = document.querySelector('.toggle-password');
    
  togglePasswordBtn.addEventListener('click', () => {
    const isPassword = passwordInput.getAttribute('type') === 'password';
    passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
    togglePasswordBtn.textContent = isPassword ? '🙈' : '👁️';
  });

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

  loginBtn.addEventListener('click', function (event) {
    event.preventDefault();

    emailError.textContent = '';
    passwordError.textContent = '';

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    const emailValidationResult = validateEmail(email);
    const passwordValidationResult = validatePassword(password);

    let isValid = true;

    if (emailValidationResult) {
      emailError.textContent = emailValidationResult;
      isValid = false;
    }
    if (passwordValidationResult) {
      passwordError.textContent = passwordValidationResult;
      isValid = false;
    }

    if (!isValid) return;

    alert('Login successful (demo)');
  });

  forgotPasswordLink.addEventListener('click', function(event) {
    event.preventDefault();

    let email = prompt("Please enter your email address to recover your password:");

    if (email === null) {
      // User cancelled
      return;
    }

    email = email.trim();

    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    if (!email) {
      alert("Email cannot be empty.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert(`If an account with ${email} exists, a password reset link has been sent.`);
  });

  googleBtn.addEventListener('click', function() {
    alert("☕️ Google sign-in is taking a coffee break. Try again soon!");
  });

  appleBtn.addEventListener('click', function() {
    alert("😴 Apple sign-in is napping right now. Please check back later!");
  });
});
