// script.js

function showSignup() {
    document.querySelector('.login-container h2').textContent = 'Sign Up';
    document.querySelector('#loginForm').innerHTML = `
        <input type="text" id="username" placeholder="Name" required>
        <input type="number" id="age" placeholder="Age" required>
        <input type="tel" id="phone" placeholder="Phone Number" required>
        <input type="email" id="email" placeholder="Email" required>
        <input type="password" id="password" placeholder="Password" required>
        <button type="submit" onclick="createAccount()">Sign Up</button>
        <div class="options">
            <p><a href="#" onclick="showLogin()">Back to Login</a></p>
        </div>
    `;
}

function showLogin() {
    window.location.href = 'index.html';
}

function forgotPassword() {
    alert("A reset link has been sent to your email.");
}

function createAccount() {
    alert("Account created successfully. You can now login.");
    showLogin();
}

document.getElementById('loginForm').onsubmit = function (event) {
    event.preventDefault();
    window.location.href = 'home.html';  // Direct to the home screen after login
};
