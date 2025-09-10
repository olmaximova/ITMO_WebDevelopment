let cartIcon = document.querySelector('.btn__cart');
let body = document.querySelector('body');
let closeButton = document.querySelector('.close_button');
let addButton = document.querySelectorAll('.add_to_cart');
let cartTab = document.querySelector('.products__list');
let itemsNumber = document.querySelector('.btn__cart span')

let cart = []

cartIcon.addEventListener('click', () => {
    body.classList.toggle('show__cart');
})

closeButton.addEventListener('click', () => {
    body.classList.toggle('show__cart');
})

addButton.forEach(button => {
    button.addEventListener('click', (event) => {
        let productElement = event.target.closest('.product');
        let product_id = productElement.id;
        addToCart(product_id);
    });
});

const addToCart = (product_id) => {

    const checkPosition = cart.findIndex(item => item.id === product_id);

    const productElement = document.getElementById(product_id);
    const productName = productElement.querySelector('h5').textContent;
    const productPrice = parseInt(productElement.querySelector('h4').textContent.replace('₽', '').trim());
    const productImage = productElement.querySelector('img').src;

    if (cart.length <= 0) {
        cart = [{
            id: product_id,
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        }]
    } else if (checkPosition < 0){
        cart.push({
            id: product_id,
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
    });
    } else {
        cart[checkPosition].quantity = cart[checkPosition].quantity + 1;
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    displayItemsCart()
}

