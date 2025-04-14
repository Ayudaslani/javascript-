const getallcarts = () => {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

const getcarts = () => {
    let total = 0;
    let cart = getallcarts();
    let tbl = " ";
    cart.map((val, index) => {
        total = total + val.qty * val.price;
        tbl += `
                 <tr>
                            <td>
                                <div class="d-flex">
                                    <img src="${val.images}" width="70" alt="Product" class="img-fluid me-3">
                                    <span>${val.name}</span>
                                </div>
                            </td>
                            <td>Rs. ${val.price}</td>
                            <td>
                                <input id='qty_${val.id}' onchange="updateRecord(${val.id})" type="number" class="form-control" value="${val.qty}" min="1">
                                
                            </td>
                            <td>${val.price * val.qty}</td>
                            <td>
                                <button onclick="deleteCart(${val.id})" class="btn btn-danger btn-sm">Remove</button>
                            </td>
                        </tr>
        
        `

    })
    document.getElementById('cartdata').innerHTML = tbl;
    document.getElementById('total').innerHTML = total;
}
getcarts();

const deleteCart = (id) => {
    let cart = getallcarts();
    let del = cart.filter((val) => {
        if (val.id != id) {
            return val;
        }
    })
    localStorage.setItem('cart', JSON.stringify(del));
    alert("deleted..");
    getcarts();
}

const updateRecord = (id) => {
    let qty = document.getElementById(`qty_${id}`).value;

    let cart = getallcarts();
    let up = cart.map((val, index) => {
        if (val.id == id) {
            val.qty = parseInt(qty)
        }
        return val;
    })
    localStorage.setItem('cart', JSON.stringify(up));
    getcarts();
}



