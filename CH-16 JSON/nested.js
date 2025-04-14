let data = {
    "users": [
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
    "country": [
        {
            "id": 1,
            "name": "india",
            "state": [
                {
                    "id": 1,
                    "name": "gujarat",
                    "city": [
                        {
                            "id": 1,
                            "name": "Suart",
                            "pincode": "380001"
                        }, {
                            "id": 2,
                            "name": "Ahmedabad",
                            "pincode": "380002"
                        }
                    ]
                }, {
                    "id": 2,
                    "name": "Maharashtra",
                    "city": [
                        {
                            "id": 1,
                            "name": "Mumbai",
                            "pincode": "400001"
                        }, {
                            "id": 2,
                            "name": "Pune",
                            "pincode": "411001"
                        }
                    ]

                }
            ]
        }
    ]
}


const userList = () => {

    let tbl = " ";

    data.users.map((val) => {
        tbl += `
            <li>${val.id}</li>
            <li>${val.name}</li>
            <li>${val.age}</li>
    
        `
    })
    document.getElementById('user').innerHTML = tbl;

}
userList();


const countryList = () => {

    let tbl = " ";
    data.country.map((val) => {
        tbl += `
            <li>${val.name}</li>
            
            <ul>`
        val.state.map((st) => {
            tbl += `
                <li>${st.name}</li>
                <ul>`
            st.city.map((ct) => {
                tbl += `
                    <li>${ct.name}</li>
                    `
            })
            tbl += `

                </ul>
                `
        })

        tbl += `
            </ul>
        
        
        `
    })
    document.getElementById('user').innerHTML = tbl;
}
countryList();