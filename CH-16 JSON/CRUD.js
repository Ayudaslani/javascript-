const allrecord = () => {
    return JSON.parse(localStorage.getItem('user')) || [];
}

const viewuser = () => {
    document.getElementById('edit').style.display = "none";
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
                <td>
                    <button onclick="delRecord(${val.id})">Delete </button>  ||  
                    <button onclick="editRecord(${val.id})">Edit </button>
                </td>

            </tr>
        `
    })
    document.getElementById('getdata').innerHTML = tbl;
}
viewuser();
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
    localStorage.setItem('user', JSON.stringify(ans));
    alert("ok");
    document.getElementById('name').value = "   ";
    document.getElementById('email').value = "   ";
    document.getElementById('phone').value = "  ";
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById('city').value = "   ";
    language.forEach((val) => {
        if (val.checked) {
            val.checked = false;
        }
    })
    viewuser();


}

const delRecord = (id) => {
    let data = allrecord();

    let ans = data.filter((val) => {
        if (val.id != id) {
            return val;
        }
    })
    localStorage.setItem('user', JSON.stringify(ans));

    viewuser();

}

const editRecord = (id) => {
    document.getElementById('edit').style.display = "block";
    document.getElementById('add').style.display = "none";

    let data = allrecord();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    //let gender = document.querySelector('input[name="gender"]:checked').value;
    let gender = document.querySelector('input[name="gender"]:checked')?.value;
    let city = document.getElementById('city').value;
    let language = document.querySelectorAll('input[name="language"]:checked');

    language.forEach((val) => {
        if (val.checked) {
            val.checked = false;
        }
    })



    let store = data.find((val) => {
        if (val.id == id) {
            name = name,
                email = email,
                phone = phone,
                gender = gender,
                city = city,
                language = language

            return val;
        }
    })


    document.getElementById('editid').value = store.id
    document.getElementById('name').value = store.name
    document.getElementById('phone').value = store.phone
    document.getElementById('email').value = store.email
    document.querySelector(`input[name="gender"][value="${store.gender}"]`).checked = true;
    document.getElementById('city').value = store.city
    document.querySelectorAll('input[name="language"]').forEach((val) => {
        if (val.value == store.language) {
            val.checked = true;
        }
    })

}

const updateRecord = () => {
    let id = document.getElementById('editid').value;
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



    let data = allrecord();

    let ans = data.map((val) => {
        if (val.id == id) {
            val.name = name;
            val.email = email,
                val.phone = phone,
                val.gender = gender,
                val.city = city,
                val.language = arr

        }
        return val;
    })

    localStorage.setItem('user', JSON.stringify(ans));
    alert("Record Updated");
    document.getElementById('name').value = "   ";
    document.getElementById('phone').value = "";
    document.getElementById('email').value = "   ";
    document.getElementById('city').value = "   ";
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.querySelector('input[name="language"]:checked').checked = false;
    document.getElementById('edit').style.display = "none";
    document.getElementById('add').style.display = "block";
    viewuser();

}


