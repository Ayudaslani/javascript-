
const allArray = () => {
    return JSON.parse(localStorage.getItem('books')) || [];
}
const addRecord = () => {
    let Title = document.getElementById('Title').value;
    let Author = document.getElementById('Author').value;
    let Year = document.getElementById('Year').value;
    let Price = document.getElementById('Price').value;
    let Quantity = document.getElementById('Quantity').value;

    let row = {
        id: Math.floor(Math.random() * 1000),
        Title: Title,
        Author: Author,
        Year: Year,
        Price: Price,
        Quantity: Quantity
    }

    let ans = [...allArray(), row];
    localStorage.setItem('books', JSON.stringify(ans));
    alert('Add Record Sucessfully..');
    document.getElementById('Title').value = ' ';
    document.getElementById('Author').value = ' ';
    document.getElementById('Year').value = ' ';
    document.getElementById('Price').value = ' ';
    document.getElementById('Quantity').value = ' ';
    viewRecord();
}

const viewRecord = () => {
    document.getElementById('edit').style.display = "none";
    let tbl = " ";
    allArray().map((val) => {
        tbl += `
            <tr>

                <td>${val.id}</td>
                <td>${val.Title}</td>
                <td>${val.Author}</td>
                <td>${val.Year}</td>
                <td>${val.Price}</td>
                <td>${val.Quantity}</td>
                <td>
                <button onclick="deleteRecord(${val.id})" style="background-color: rgba(236, 33, 33, 0.86);color: white;
            padding: 5px 10px;border: 1px solid rgba(17, 16, 16, 0.86);border-radius: 5px;font-size: 20px;">delete</button>

            <button onclick="editRecord(${val.id})" style="background-color: rgb(61, 152, 0);color: white;
            padding: 5px 10px;border: 1px solid rgba(17, 16, 16, 0.86);border-radius: 5px;font-size: 20px;">Edit</button>
                

                </td>
            </tr>
        
        `
    })
    document.getElementById('getdata').innerHTML = tbl;
}
viewRecord();

const deleteRecord = (id) => {
    let data = allArray();

    let del = data.filter((val) => {
        if (val.id != id) {
            return val;
        }
    })
    localStorage.setItem('books', JSON.stringify(del));
    viewRecord();

}

const editRecord = (id) => {
    document.getElementById('edit').style.display = "block";
    document.getElementById('add').style.display = "none";


    let Title = document.getElementById('Title').value;
    let Author = document.getElementById('Author').value;
    let Year = document.getElementById('Year').value;
    let Price = document.getElementById('Price').value;
    let Quantity = document.getElementById('Quantity').value;
    let data = allArray();

    let single = data.find((val) => {
        if (val.id == id) {
            Title = Title,
                Author = Author,
                Year = Year,
                Price = Price,
                Quantity = Quantity

            return val;
        }

    })

    document.getElementById('Title').value = single.Title;
    document.getElementById('Author').value = single.Author;
    document.getElementById('Year').value = single.Year;
    document.getElementById('Price').value = single.Price;
    document.getElementById('Quantity').value = single.Quantity;
    document.getElementById('editid').value = single.id;


}

const updateRecord = () => {
    let id = document.getElementById('editid').value;
    let Title = document.getElementById('Title').value;
    let Author = document.getElementById('Author').value;
    let Year = document.getElementById('Year').value;
    let Price = document.getElementById('Price').value;
    let Quantity = document.getElementById('Quantity').value;

    let data = allArray();

    let ans = data.map((val) => {
        if (val.id == id) {
            val.Title = Title,
                val.Author = Author,
                val.Year = Year,
                val.Price = Price,
                val.Quantity = Quantity

        }
        return val;
    })

    localStorage.setItem('books', JSON.stringify(ans));
    alert("Record updated sucessfully.....");
    document.getElementById('Title').value = ' ';
    document.getElementById('Author').value = ' ';
    document.getElementById('Year').value = ' ';
    document.getElementById('Price').value = ' ';
    document.getElementById('Quantity').value = ' ';
    document.getElementById('edit').style.display = "none";
    document.getElementById('add').style.display = "block";
    viewRecord();


}
