// Hardcoded admin credentials
const adminUsername = "royal69";
const adminPassword = "royal";

// Placeholder for registered users
let users = [];

// Register Form Submission
document.getElementById("register-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;

    // Check if user already exists
    const userExists = users.find(user => user.username === username);
    if (userExists) {
        alert("Username already exists!");
    } else {
        users.push({ username, password });
        alert("User registered successfully!");
    }

    // Clear fields
    document.getElementById("reg-username").value = "";
    document.getElementById("reg-password").value = "";
});

// Login Form Submission
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    if (username === adminUsername && password === adminPassword) {
        alert("Welcome Admin!");
    } else {
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            alert("Login successful! Welcome, " + username);
        } else {
            alert("Invalid username or password!");
        }
    }

    // Clear fields
    document.getElementById("login-username").value = "";
    document.getElementById("login-password").value = "";
});
                                                       
