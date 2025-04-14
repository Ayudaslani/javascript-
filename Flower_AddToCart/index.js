
let logins = JSON.parse(localStorage.getItem('loginuser'));

if (logins) {
    window.location.href = "product.html";
}
const loginuser = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('regiuser'));
    let data = users.find(val => val.email == email && val.password == password);

    if (data) {
        localStorage.setItem('loginuser', JSON.stringify(data));
        alert("Login Success");
        window.location.href = "product.html";
    }
    else {
        alert("Invalid Email or Password");
    }

}