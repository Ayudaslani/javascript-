let logins = JSON.parse(localStorage.getItem('loginuser'));

if (!logins) {
    window.location.href = "index.html";
}