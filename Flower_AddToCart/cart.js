const allcart = () => {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

const getcart = () => {
    let total = 0;
    let tbl = " ";
    let data = allcart();
    data.map((val, index) => {
        const { id, name, price, image, qty } = val;
        total = total + price * qty;
        tbl += `
                          <tr>
                            <td>
                                <div class="d-flex">
                                    <img src="${image}" width="70" alt="Product" class="img-fluid me-3">
                                    <span>${name}</span>
                                </div>
                            </td>
                            <td>Rs. ${price}</td>
                            <td>
                                <input onchange="updateCart(${id})" id='qty_${id}' type="number" class="form-control" value="${qty}" min="1">
                            </td>
                            <td>${qty * price}</td>
                            <td>
                                <button onclick="deleteCart(${id})" class="btn btn-danger btn-sm">Remove</button>
                            </td>
                        </tr>
        
        
        `
    })
    document.getElementById('cartdata').innerHTML = tbl;
    document.getElementById('total').innerHTML = `Total: Rs. ${total}`;
}
getcart();

const deleteCart = (id) => {
    let data = allcart();

    let del = data.filter((val, index) => {
        if (val.id != id) {
            return val;
        }
    })
    localStorage.setItem('cart', JSON.stringify(del));
    alert("delete record ..");
    getcart();

}

const updateCart = (id) => {
    let data = allcart();

    let qty = document.getElementById(`qty_${id}`).value;

    let up = data.map((val, index) => {
        if (val.id == id) {
            val.qty = parseInt(qty);
        }
        return val;
    })
    localStorage.setItem('cart', JSON.stringify(up));
    getcart();

}
const checkout = () => {
    localStorage.removeItem('cart');
    alert("All items removed from cart");
    getcart();
}