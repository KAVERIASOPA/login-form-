function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    // Storing user data in local storage 
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    switchForm('upload-form');
}

function login() {
    const enteredUsername = document.getElementById('login-username').value;
    const enteredPassword = document.getElementById('login-password').value;

    // Retrieving user data from local storage 
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        switchForm('upload-form');
    } else {
        alert('Invalid credentials. Redirecting to Sign Up.');
        switchForm('signup-form');
    }
}

function uploadImage() {
    const fileInput = document.getElementById('image-upload');
    const file = fileInput.files[0];

    if (file) {
        alert('Image uploaded successfully!');
        // You can implement further logic to handle the uploaded image
    } else {
        alert('Please select an image to upload.');
    }
}

function logout() {
    switchForm('landing-page');
}

function switchForm(formId) {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('upload-form').style.display = 'none';

    document.getElementById(formId).style.display = 'block';
}
