let login = JSON.parse(localStorage.getItem('users')) || [];

const loginUser = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;


    let user = login.find((val, index) => {
        if (val.email == email && val.password == password) {
            alert("login sucssfully");
            return true;
        }

    })


    if (user) {
        localStorage.setItem('login', JSON.stringify(user));
        window.location.href = "product.html";
    }
    else {
        alert("invalid email or password");

    }


}