const apiUrl = 'https://fakestoreapi.com/';
let products = [];
let cartProducts = [];
let cntAllProducts = 0;
let totalPrice = 0;

let loader = document.querySelector('.loader');
let allProducts = document.getElementById('products');
let basket = document.querySelector('.basket');

var img = document.createElement('img');
img.src='./images/empty-cart.svg';
img.alt = 'test img';

function getProduct() {
    loader.style.display = "block";
    var xhr = new XMLHttpRequest();
    xhr.open('get', apiUrl + 'products');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            loader.style.display = "none";
            products = JSON.parse(xhr.responseText);
            addProducts(products);
            setTimeout(() => {
                addProducts(products);
            }, 1000);
        }
    };
    xhr.send();
}

function updateCartUI() {
    basket.innerHTML = `<div class="cart-title">
    Your Cart (${cntAllProducts})

    </div>`;

    if (cntAllProducts === 0) {
        totalPrice = 0;
         // Show the empty cart image if no products are in the basket
         if (!basket.contains(img)) {
            basket.appendChild(img);
        }
    } else {
         // Remove the image if the cart has products
         if (basket.contains(img)) {
            basket.removeChild(img);
        }
        cartProducts.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
            <div>
                <p class="cart-tt">${item.title}</p>
                <div>
                    <span class="item-count">${item.cnt}x</span>
                    <span class="item-price">${item.price} $</span>
                </div>
            </div>
              
                    <a onclick="deleteItem(${index}, this)">
                        <i class="fa-regular fa-circle-xmark remove-icon"></i>
                    </a>
            `;
            basket.appendChild(cartItem);
        });
        basket.innerHTML += `
        <div class="order-summary"><span>Total:</span> <strong>${totalPrice}$</strong></div>
        <button class="order-btn">Confirm Order</button>
        `;
    }
}

function addProducts(prds) {
    prds.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-item');
        productElement.innerHTML = `
            <img src='${product.image}' class="product-image">
            <h4 class="product-name">${product.title}</h4>
            <div class="product-pricing">
             <div class="product-price">${product.price} $</div>
             <button class="add-to-cart-btn" onclick="addToCart(${index})">
                 <i class="fa-solid fa-cart-plus cart-icon"></i>Add to Cart
             </button>
            </div>
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
            price: product.price,
            cnt: 1
        });
        totalPrice += parseFloat(product.price);
    }
    cntAllProducts++;
    updateCartUI();
}

function deleteItem(index, element) {
    const product = cartProducts[index];
    product.cnt--;
    cntAllProducts--;
console.log( element.previousElementSibling.querySelector('.item-count'));

    if (product.cnt <= 0) {
        cartProducts.splice(index, 1);
        element.parentElement.remove();
    } else {
        const countElement = element.previousElementSibling.querySelector('.item-count');
        countElement.innerText = `${product.cnt}x`;
    }
    totalPrice = cartProducts.reduce((sum, item) => sum + item.price * item.cnt, 0);
    updateCartUI();
}

getProduct();
updateCartUI();
