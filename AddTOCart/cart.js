
const getAllcart = () => {
    return JSON.parse(localStorage.getItem('carts')) || [];
}


const getcart = () => {
    let total = 0;
    let data = getAllcart();
    tbl = " ";
    data.map((val, index) => {
        total = total + val.price * val.qty;
        tbl += `
     
        <tr>
                    <td class="d-flex align-items-center gap-2">
                        <img src="${val.images}" class="product-img" alt="Plain">
                        <span>${val.name}</span>
                    </td>
                    <td>${val.price}</td>
                    <td>
                        <input type="number" class="form-control form-control-sm qty-input mx-auto" value="${val.qty}" min="1" id="cart_${val.id}" onchange="updatecart(${val.id})">  
                    </td>
                    <td>${val.price * val.qty}</td>
                    <td>
                        <button class="btn btn-danger btn-sm rounded" onclick="deleteRecord(${val.id})">Remove</button>
                    </td>
                </tr>
        
        
        `
    })
    document.getElementById('getdata').innerHTML = tbl;
    document.getElementById('total').innerHTML = total;


}
getcart();

const updatecart = (id) => {
    let data = getAllcart();
    let qty = document.getElementById(`cart_${id}`).value;

    data.map((val, index) => {
        if (val.id == id) {
            val.qty = parseInt(qty);
        }
        return val;


    })
    localStorage.setItem('carts', JSON.stringify(data));
    getcart();

}

const deleteRecord = (id) => {
    let data = getAllcart();
    let up = data.filter((val, index) => {
        if (val.id != id) {
            return val;
        }
    })

    localStorage.setItem('carts', JSON.stringify(up));
    alert("Delete record")
    getcart();

}

const removedata = () => {
    localStorage.removeItem('carts');
    getcart();
}

