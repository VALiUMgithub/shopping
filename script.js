// JavaScript (script.js)
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
const cart = document.querySelector('.cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get product information and add it to the cart
        const product = button.dataset.product;
        const price = button.dataset.price;

        // Create a new cart item element and append it to the cart
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${product}</span>
            <span>${price}</span>
        `;

        cart.appendChild(cartItem);
    });
});
