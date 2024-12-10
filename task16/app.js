const apiUrl = 'https://fakestoreapi.com/';
let products = [];
let cartProducts = [];
let cntAllProducts = 0;
let totalPrice=0;
let loader = document.querySelector('.loader');
let allProducts = document.getElementById('products');
let basket = document.querySelector('.basket');

function getProduct() {
    loader.style.display = "block";
    var xhr = new XMLHttpRequest();
    xhr.open('get', apiUrl + 'products');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            loader.style.display = "none";
            products = JSON.parse(xhr.responseText);
            addProducts(products);
        }
    };
    xhr.send();
}

function updateCartUI() {
   
    basket.innerHTML = `
    <div style="color: #b94522; font-weight: bold;">Your Cart (${cntAllProducts})</div>
    
    `;
    
    // let img = document.querySelector('.empty-cart');
    if (cntAllProducts === 0) {
         totalPrice =0;
        // img.style.width = "50px";
        // img.style.marginBottom = "20px";
        // img.style.color = "red";


        // let emptyCartImg = document.createElement('img');
        // emptyCartImg.src = "./images/empty-cart.svg";
        // emptyCartImg.alt = "empty cart";
        // emptyCartImg.style = "width:50px; margin-bottom: 20px; color:red;";
        // basket.appendChild(emptyCartImg);
    } else {
// console.log(cartProducts);
        cartProducts.forEach((item, index) => {
            // totalPrice += parseFloat(item.price);
            const cartItem = document.createElement('div');
            cartItem.innerHTML = `
                <p>${item.title}</p>
                <div style="display: flex;justify-content: space-between;">
                <div>
                    <span style="color: #b94522; margin-right: 5px; font-weight: bold;">${item.cnt}x</span>
                    <span>${item.price} $</span>
                    </div>
                    <a onclick="deleteItem(${index}, this)"><i class="fa-regular fa-circle-xmark"></i></a>
                </div>
            `;
            basket.appendChild(cartItem);
        });
        basket.innerHTML += `
        <div style="display:flex; justify-content: space-between;"><span>total</span> <strong>${totalPrice}$</strong></div>
       <button style="background-color: #b94522; color: #fcf8f5; width: 100%;">Confirm Order</button>
        `;
    }
}

function addProducts(prds) {
    prds.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.classList.add('prodContainer');
        productElement.innerHTML = `
            <img src='${product.image}' width="100%" height="200" style="margin-bottom: 20px;">
            <details>
                <summary>
                    <h4>${product.title}</h4>
                </summary>
                <p>${product.description}</p>
            </details>
            <div style="color: #b94522; font-weight: bold;">${product.price} $</div>
            <div style="display: flex; justify-content: space-between; width: 100%; ">
                <span>${product.rating.rate} ⭐</span>
                <span style="text-decoration: underline; font-weight: bold;">${product.rating.count}</span>
            </div>
            <button style="position: absolute; top: 200px; right: 66px; width: 8rem;  background-color: white; border: 1px solid #b94522;"
            onclick="addToCart(${index})"><i class="fa-solid fa-cart-plus" style=" color: #b94522; margin: 5px;"></i>Add to Cart</button>
        `;
        allProducts.appendChild(productElement);
    });
}

function addToCart(index) {
    const product = products[index];
    let tmp = cartProducts.findIndex(item => item.title === product.title);
    if (tmp !== -1) {
        cartProducts[tmp].cnt++;
        totalPrice += parseFloat(cartProducts[tmp].price);

        
    } else {
        cartProducts.push({
            title: product.title,
            price:product.price,
            cnt: 1
        });
        totalPrice +=parseFloat(product.price);

    }
    cntAllProducts++;
    updateCartUI();
}

function deleteItem(index, element) {
    const product = cartProducts[index];
    product.cnt--;
    cntAllProducts--;

    if (product.cnt <= 0) {
        cartProducts.splice(index, 1);
        element.parentElement.parentElement.remove();
    } else {
        element.previousElementSibling.innerText = product.cnt;
    }

    updateCartUI();
}

getProduct();
updateCartUI();
