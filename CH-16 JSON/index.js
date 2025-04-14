let data = {
    "user": [
        {
            "id": 1,
            "name": "ayushi",
            "age": 20
        }, {
            "id": 2,
            "name": "denisha",
            "age": 21
        }, {
            "id": 3,
            "name": "sophia",
            "age": 22
        }, {
            "id": 4,
            "name": "gopi",
            "age": 23
        }
    ],
    "Admin": [
        {
            "id": 101,
            "name": "mihir",
            "city": "surat",

        }, {
            "id": 102,
            "name": "krishna",
            "city": "mumbai",
        }
    ],
    "menu": ["home", "about", "contact", "login"]

}


const userList = () => {
    let tbl = "";
    data.user.map((val) => {
        tbl += `
        <tr>
            
            <td>${val.id}</td>
            <td>${val.name}</td>
            <td>${val.age}</td>
        </tr>
        `
    })
    document.getElementById('userdata').innerHTML = tbl;
}
userList();

const adminList = () => {
    let tbl = "";
    data.Admin.map((val) => {
        tbl += `
        <tr>
            <td>${val.id}</td>
            <td>${val.name}</td>
            <td>${val.city}</td>
        </tr>
        `
    })
    document.getElementById('Admindata').innerHTML = tbl;
}
adminList();


const menuList = () => {
    let tbl = "";
    data.menu.map((val) => {
        tbl += `
            <li>${val}</li>
        `
    })
    document.getElementById('menu').innerHTML = tbl;

}
menuList();


