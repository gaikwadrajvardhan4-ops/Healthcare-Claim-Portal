function login() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email === "admin@gmail.com" &&
       password === "admin123") {

        localStorage.setItem("loggedIn", "true");

        alert("Login Successful");

        window.location.href = "index1.html";

    } else {
        alert("Invalid Email or Password");
    }
}
