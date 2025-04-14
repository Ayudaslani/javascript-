const register = JSON.parse(localStorage.getItem('userRegister')) || [];

const registerUser = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let row = {
        id: Math.floor(Math.random() * 1000),
        name: name,
        email: email,
        password: password
    }

    let old = [...register, row];
    localStorage.setItem('userRegister', JSON.stringify(old));
    alert("Register Sucessfully..");
    window.location.href = "index.html";
}