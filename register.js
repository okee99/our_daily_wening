
function redirectToLoginPage() {
    window.location.href = "login.html"; // Ganti dengan URL halaman login Anda
}

document.getElementById("registerButton").addEventListener("click", redirectToLoginPage);