// LOGIN ADMIN
// Username & password admin
const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";

// Login proses
function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === ADMIN_USER && pass === ADMIN_PASS) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        alert("Username atau Password salah!");
    }
}

// Halaman wajib login
function requireLogin() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "index.html";
    }
}

// Logout admin
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}
