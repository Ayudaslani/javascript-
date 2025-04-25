let allRecord = () => {
    return JSON.parse(localStorage.getItem('emp')) || [];
}
const addRecord = () => {
    let Name = document.getElementById('Name').value;
    let Email = document.getElementById('Email').value;
    let City = document.getElementById('City').value;
    let salary = document.getElementById('Salary').value;
    let Designation = document.getElementById('Designation').value;
    let DOB = document.getElementById('DOB').value;

    let row = {
        id: Math.floor(Math.random() * 10),
        Name: Name,
        Email: Email,
        City: City,
        salary: salary,
        Designation: Designation,
        DOB: DOB
    }

    let data = [...allRecord(), row];
    localStorage.setItem('emp', JSON.stringify(data));
    document.getElementById('Name').value = " ";
    document.getElementById('Email').value = " ";
    document.getElementById('City').value = " ";
    document.getElementById('Salary').value = " ";
    document.getElementById('Designation').value = " ";
    document.getElementById('DOB').value = " ";
    let modal = bootstrap.Modal.getInstance(document.getElementById('addEmployee'));
    modal.hide();

    viewRecord();

}

const viewRecord = () => {

    let tbl = " ";
    allRecord().map((val) => {
        tbl += `
            <tr>
                <td>${val.id}</td>
                <td>${val.Name}</td>
                <td>${val.Email}</td>
                <td>${val.City}</td>
                <td>${val.salary}</td>
                <td>${val.Designation}</td>
                <td>${val.DOB}</td>
                <td>
                    <button type="button" style="border:none;color: rgb(22, 141, 22);font-size:22px;"   data-bs-toggle="modal"
                            data-bs-target="#editEmployee" data-bs-whatever="@mdo" onclick="editRecord(${val.id})"><i class="fa-solid fa-pen-to-square"></i></button>
                                    &nbsp;&nbsp;&nbsp;
                    <button style="border:none;color:red;font-size:22px;" onclick="deleteRecord(${val.id})"><i class="fa-solid fa-trash"></i></button>
                </td>
            
            </tr>
        
        `
    })
    document.getElementById('getdata').innerHTML = tbl;
}
viewRecord();

const deleteRecord = (id) => {
    let data = allRecord();
    let ans = data.filter((val) => {
        if (val.id != id) {
            return val;
        }
    })
    localStorage.setItem('emp', JSON.stringify(ans));
    alert("Are You sure to delete this record");
    viewRecord();
}
const editRecord = (id) => {
    let data = allRecord();

    let single = data.find((val) => {
        if (val.id == id) {
            return val.id = id;

        }
    })


    document.getElementById('editid').value = single.id;
    document.getElementById('editName').value = single.Name;
    document.getElementById('editEmail').value = single.Email;
    document.getElementById('editCity').value = single.City;
    document.getElementById('editSalary').value = single.salary;
    document.getElementById('editDesignation').value = single.Designation;
    document.getElementById('editDOB').value = single.DOB;
}

const UpdateRecord = () => {

    let id = document.getElementById('editid').value;
    let Name = document.getElementById('editName').value;
    let Email = document.getElementById('editEmail').value;
    let City = document.getElementById('editCity').value;
    let salary = document.getElementById('editSalary').value;
    let Designation = document.getElementById('editDesignation').value;
    let DOB = document.getElementById('editDOB').value;

    let data = allRecord();

    let up = data.map((val) => {
        if (val.id == id) {
            val.Name = Name;
            val.Email = Email;
            val.City = City;
            val.salary = salary;
            val.Designation = Designation;
            val.DOB = DOB;
        }
        return val;
    })

    localStorage.setItem('emp', JSON.stringify(up));
    alert("Record Updated");
    let modal = bootstrap.Modal.getInstance(document.getElementById('editEmployee'));
    modal.hide();
    viewRecord();
}


