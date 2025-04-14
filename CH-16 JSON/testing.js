
let my = () => {
    return JSON.parse(localStorage.getItem('records')) || [];
}
const addRecord = () => {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;

    let row = {
        id: Math.floor(Math.random() * 100000),
        name: name,
        phone: phone
    }

    let ans = [...my(), row];
    localStorage.setItem('records', JSON.stringify(ans));

    alert("ok");
    document.getElementById('name').value = " ";
    document.getElementById('phone').value = " ";
    viewuser();
}

const viewuser = () => {
    let tbl = " ";
    document.getElementById('edit').style.display = "none";
    my().map((val, index) => {
        tbl += `
            <tr>
                <td>${val.id}</td>
                <td>${val.name}</td>
                <td>${val.phone}</td>
                <td>
                    <button onclick="delRecord(${val.id})">delete</button> ||
                    <button onclick="editRecord(${val.id})">Edit</button>
                </td>
                
            
            </tr>
        `
    })
    document.getElementById('getdata').innerHTML = tbl;
}
viewuser();

const delRecord = (id) => {
    let data = my();
    let store = data.filter((val) => {
        if (val.id !== id) {
            return val;
        }
    })


    localStorage.setItem('records', JSON.stringify(store));
    viewuser();

}

const editRecord = (id) => {
    document.getElementById('edit').style.display = "block";
    document.getElementById('add').style.display = "none";

    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let data = my();
    let up = data.find((val) => {
        if (val.id == id) {
            name = name,
                phone = phone

            return val;

        }

    })
    document.getElementById('name').value = up.name
    document.getElementById('phone').value = up.phone
    document.getElementById('editedid').value = up.id


}
const updateRecord = () => {
    let id = document.getElementById('editedid').value;
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;

    let data = my();

    let updatedData = data.map((val) => {
        if (val.id == id) {
            val.name = name;
            val.phone = phone
        }
        return val;
    });



    localStorage.setItem('records', JSON.stringify(updatedData));

    alert("Record updated successfully!");

    document.getElementById('name').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('editedid').value = "";

    document.getElementById('edit').style.display = "none";
    document.getElementById('add').style.display = "block";

    viewuser();


}
