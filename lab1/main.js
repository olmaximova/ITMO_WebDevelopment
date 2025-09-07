let cartIcon = document.querySelector('.btn__cart');
let body = document.querySelector('body');
let closeButton = document.querySelector('.close_button')

cartIcon.addEventListener('click', () => {
    body.classList.toggle('show__cart')
})

closeButton.addEventListener('click', () => {
    body.classList.toggle('show__cart')
})

