
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username.trim() === '' || password.trim() === '') {
            alert('Please fill in both username and password.');
        } else {
            // Perform authentication logic here
            // For now, let's just display an alert
            alert('Login successful!');
        }
    });
