document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Full Name validation
    const fullName = document.getElementById('fullName');
    if (fullName.value.length < 5) {
        fullName.classList.add('is-invalid');
        isValid = false;
    } else {
        fullName.classList.remove('is-invalid');
    }

    // Email validation
    const email = document.getElementById('email');
    if (!email.value.includes('@')) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    // Phone Number validation
    const phoneNumber = document.getElementById('phoneNumber');
    if (phoneNumber.value === '123456789' || phoneNumber.value.length !== 10) {
        phoneNumber.classList.add('is-invalid');
        isValid = false;
    } else {
        phoneNumber.classList.remove('is-invalid');
    }

    // Password validation
    const password = document.getElementById('password');
    if (password.value === 'password' || password.value.length < 8 || password.value.includes(fullName.value)) {
        password.classList.add('is-invalid');
        isValid = false;
    } else {
        password.classList.remove('is-invalid');
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById('confirmPassword');
    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('is-invalid');
        isValid = false;
    } else {
        confirmPassword.classList.remove('is-invalid');
    }

    // If the form is valid, submit the form or perform desired actions
    if (isValid) {
        alert('Form submitted successfully!');
        // You can also submit the form data to a server here
    }
});
