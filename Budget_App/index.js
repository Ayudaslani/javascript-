
const user = () => {
    return JSON.parse(localStorage.getItem('expense')) || [];


}

const view = () => {
    let total = 0;


    document.getElementById('edit').style.display = "none";
    let list = document.getElementById("list").value;
    let amount = document.getElementById("amount").value;

    let tbl = " ";
    let data = user();

    data.map((val) => {

        tbl += `
            <tr>
                <td>${val.id}</td>
                <td>${val.list}</td>
                <td>${val.amount}</td>
                <td>
                    <button onclick="updateRecord(${val.id})" type="button" style="border:none; background-color: transparent;"><i class="fa-solid fa-pen-to-square me-5" style="color:blue;"></i></button>
                    <button onclick="deleteRecord(${val.id})"  type="button" style="border:none;background-color: transparent;"> <i class="fa-solid fa-trash ms-2" style="color:blue;"></i></button>
                </td>


            </tr>
        
        `
        total = total + parseInt(val.amount);


    })
    document.getElementById('getexpenses').innerHTML = tbl;
    document.getElementById('texpenses').value = total;



}
view();


const expenseuser = () => {

    let list = document.getElementById("list").value;
    let amount = document.getElementById("amount").value;

    let row = {
        id: Math.floor(Math.random() * 1000),
        list: list,
        amount: amount
    }
    let old = [...user(), row];
    localStorage.setItem('expense', JSON.stringify(old));
    alert("add to list");
    document.getElementById('list').value = " ";
    document.getElementById('amount').value = " ";
    view();
    totalbalance();
}



const deleteRecord = (id) => {
    let data = user();
    let del = data.filter((val) => {
        if (val.id != id) {
            return val;
        }

    })
    localStorage.setItem('expense', JSON.stringify(del));
    alert("Delete record");
    view();
    totalbalance();
}
const updateRecord = (id) => {
    document.getElementById('edit').style.display = "block";
    document.getElementById('add').style.display = "none";
    let data = user();

    let up = data.find((val) => {
        if (val.id == id) {
            return val;
        }
    })
    document.getElementById('list').value = up.list;
    document.getElementById('amount').value = up.amount;
    document.getElementById('editid').value = up.id;
    totalbalance();
}

const edit = () => {
    let list = document.getElementById("list").value;
    let amount = document.getElementById('amount').value;
    let id = document.getElementById('editid').value;

    let data = user();

    let update = data.map((val) => {
        if (val.id == id) {
            val.list = list;
            val.amount = amount;

        }
        return val;
    })
    localStorage.setItem('expense', JSON.stringify(update));
    alert("updated record");
    document.getElementById('list').value = "   ";
    document.getElementById('amount').value = "";

    document.getElementById('edit').style.display = "none";
    document.getElementById('add').style.display = "block";

    view();
    totalbalance();

}

let totalamount = () => {
    return JSON.parse(localStorage.getItem('amount')) || [];
}
const setbudget = () => {
    let Totalamt = document.getElementById('expenseuser').value;

    let obj = {
        id: Math.floor(Math.random() * 100),
        Totalamt: Totalamt
    }
    let total = [...totalamount(), obj];
    localStorage.setItem('amount', JSON.stringify(total));
    alert("Budget set");
    viewTotal();

    document.getElementById('Totalamt').value = " ";
    totalbalance();

}
let viewTotal = () => {
    let Totalamt = document.getElementById('Totalamt').value;

    let data = totalamount();


    let tbl = " ";

    data.map((val) => {
        tbl += `
        ${val.Totalamt}
        
        `
    })
    document.getElementById('tbudget').value = tbl;


}
viewTotal();



const totalbalance = () => {

    let budgetData = totalamount();
    let expenseData = user();

    let a = budgetData.map((val) => {
        return parseInt(val.Totalamt)
    })
    let b = expenseData.map((val) => {
        return parseInt(val.amount)
    })
    let c = b.reduce((val, index) => {
        return val + index;

    }, 0)
    let bal = parseInt(a) - parseInt(c);
    document.getElementById('tbalance').value = bal;

}
totalbalance();






