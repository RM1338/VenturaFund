localStorage.removeItem("Username");

function loadDefault() {
    document.getElementById("firstName").value = "John";
    document.getElementById("lastName").value = "Doe";
    document.getElementById("email").value = "you@example.com";
    document.getElementById("password").value = "P123";
}

// --------------------------------------
// SIGN UP FUNCTION
// --------------------------------------
function signUp() {
    let user_details = JSON.parse(localStorage.getItem("user_details")) || [];

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Validate input
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert("All fields are required");
        return false;
    }

    // Check Mail Format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
    }


    // Check if password and confirm password are the same
    if (!(password === confirmPassword)) {
        alert("Passwords do not match. Please try again.");
        return false;
    }
    else if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }

    // Check if email already exists
    let emailExists = false;
    for (let i = 0; i < user_details.length; i++) {
        if (user_details[i].email === email) {
            emailExists = true;
            break;
        }
    }

    if (emailExists) {
        alert("EmailID is already used. Please enter a different email");
        return false;
    }

    // Save new user
    user_details.push({ firstName: firstName, lastName: lastName, email: email, password: password });
    localStorage.setItem("user_details", JSON.stringify(user_details));

    console.log("New user added:", { firstName: firstName, email: email });

    // Show Account Creation Success Message
    let accountCreationSuccess = document.createElement('div');
    accountCreationSuccess.id = "accountCreationSuccess";
    accountCreationSuccess.style.position = 'fixed';
    accountCreationSuccess.style.top = '100px';
    accountCreationSuccess.style.right = '10px';
    accountCreationSuccess.style.background = '#d4edda';
    accountCreationSuccess.style.color = '#155724';
    accountCreationSuccess.style.padding = '10px';
    accountCreationSuccess.style.borderRadius = '5px';
    accountCreationSuccess.style.fontSize = '16px';
    accountCreationSuccess.style.boxShadow = '0px 0px 6px rgba(0,0,0,0.2)';
    accountCreationSuccess.textContent = 'Account Creation Successful!!!';
    document.body.appendChild(accountCreationSuccess);

    // Remove message and redirect to SIGN IN page
    setTimeout(function () {
        accountCreationSuccess.remove();
        window.location.href = "signIn.html";
    }, 2000);

    // Reset form
    document.getElementById("signupForm").reset();

    return true;
}

// --------------------------------------
// SIGN IN FUNCTION
// --------------------------------------
function signIn() {
    const user_details = JSON.parse(localStorage.getItem("user_details")) || [];

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // Find user
    let user = null;
    for (let i = 0; i < user_details.length; i++) {
        if (user_details[i].email === email) {
            user = user_details[i];
            break;
        }
    }

    if (!user) {
        alert("Invalid EmailID");
        return false;
    }

    if (user.password !== password) {
        alert("Incorrect Password");
        return false;
    }

    // Show Login Success Message
    let loginSuccess = document.createElement('div');
    loginSuccess.id = "loginSuccess";
    loginSuccess.style.position = 'fixed';
    loginSuccess.style.top = '100px';
    loginSuccess.style.right = '10px';
    loginSuccess.style.background = '#d4edda';
    loginSuccess.style.color = '#155724';
    loginSuccess.style.padding = '10px';
    loginSuccess.style.borderRadius = '5px';
    loginSuccess.style.fontSize = '16px';
    loginSuccess.style.boxShadow = '0px 0px 6px rgba(0,0,0,0.2)';
    loginSuccess.textContent = 'Login Successful!!!';
    document.body.appendChild(loginSuccess);

    // Remove message and redirect
    setTimeout(function () {
        loginSuccess.remove();
        localStorage.setItem("Username",user.firstName);
        window.location.href = "index.html";
    }, 2000);

    return true;
}