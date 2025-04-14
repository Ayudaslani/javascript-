const register = JSON.parse(localStorage.getItem('regiuser')) || [];
const registeruser = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let row = {
        id: Math.floor(Math.random() * 1000),
        name: name,
        email: email,
        password: password
    }

    let old = [...register, row];
    localStorage.setItem('regiuser', JSON.stringify(old));
    alert("Register successfully..");
    window.location.href = "index.html";
    document.getElementById('name').value = " ";
    document.getElementById('email').value = " ";
    document.getElementById('password').value = " ";


}