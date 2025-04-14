

const allrecord = () => {
    return JSON.parse(localStorage.getItem('users')) || [];
}

const addrecord = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let city = document.getElementById('city').value;
    let language = document.querySelectorAll('input[name="language"]:checked');

    let arr = [];
    language.forEach((val) => {
        if (val.checked) {
            arr.push(val.value);
        }
    })

    let row = {
        id: Math.floor(Math.random() * 10),
        name: name,
        email: email,
        phone: phone,
        gender: gender,
        city: city,
        language: arr
    }

    let ans = [...allrecord(), row];
    localStorage.setItem('users', JSON.stringify(ans));
    alert("ok");
    document.getElementById('name').value = "   ";
    document.getElementById('email').value = "   ";
    document.getElementById('phone').value = "   ";
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById('city').value = "   ";
    language.forEach((val) => {
        if (val.checked) {
            val.checked = false;
        }
    })
    viewuser();


}

const viewuser = () => {
    let tbl = " ";
    allrecord().map((val) => {
        tbl += `
            <tr>
                <td>${val.id}</td>
                <td>${val.name}</td>
                <td>${val.email}</td>
                <td>${val.phone}</td>
                <td>${val.gender}</td>
                <td>${val.city}</td>
                <td>${val.language}</td>

            </tr>
        `
    })
    document.getElementById('getdata').innerHTML = tbl;
}
viewuser();