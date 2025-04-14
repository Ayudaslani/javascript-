let data = {
    "user": [
        {
            "id": 1,
            "name": "John",
            "age": 25
        }, {
            "id": 2,
            "name": "Jane",
            "age": 30
        }, {
            "id": 3,
            "name": "Bob",
            "age": 35
        }
    ],
    "admin": [
        {
            "id": 1,
            "name": "John",
            "country": [
                {
                    "id": 1,
                    "name": "USA",
                    "city": [
                        {
                            "id": 1,
                            "name": "New York",
                        }, {
                            "id": 2,
                            "name": "Los Angeles",
                        }
                    ]
                }, {
                    "id": 2,
                    "name": "Canada",
                    "city": [
                        {
                            "id": 1,
                            "name": "Toronto",
                        }, {
                            "id": 2,
                            "name": "Vancouver",
                        }
                    ]
                }
            ]
        }
    ]
}

const userlist = () => {
    tbl = " ";
    data.user.map((val) => {
        tbl += `
            <tr>
                <td>${val.id}</td>
                <td>${val.name}</td>
                <td>${val.age}</td>

            </tr>
        `
    })
    document.getElementById('getdata').innerHTML = tbl;
}
userlist();


const adminList = () => {
    let tbl = " ";
    data.admin.map((val) => {
        tbl += `
            <tr>
                    <td>${val.id}</td>
                    <td>${val.name}</td>
                    <td>`

        val.country.map((coun) => {
            tbl += `
                    <ul style="list-style:none">
                        <li>${coun.name}</li>
                    </ul>`

                    coun.city.map((cit)=>{
                        
                    })
                    tbl+=`                
                `
        })

        tbl += `
                    
                    </td>
            </tr>
        `
    })
    document.getElementById('admindata').innerHTML = tbl;
}
adminList();