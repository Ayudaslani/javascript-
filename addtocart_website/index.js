
let login = JSON.parse(localStorage.getItem('loginusers'));
if (login) {
    window.location.href = "product.html";
}

const loginUser = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let userlogin = JSON.parse(localStorage.getItem('userRegister'));
    let user = userlogin.find((val) => {
        if (val.email === email && val.password === password) {
            alert('Login Successfull');
            return true;
        }

    })
    if (user) {
        localStorage.setItem('loginusers', JSON.stringify(user));
        window.location.href = 'product.html';
    }
    else {
        alert("Invaild Email or Password");

    }

}