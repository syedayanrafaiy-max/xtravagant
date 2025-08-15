
// ===== CART SYSTEM =====
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
    const product = cart.find(item => item.name === name);
    if (product) {
        product.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart`);
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');

    if (!cartItemsContainer || !cartTotalContainer) return;

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <p>${item.name} - ${item.price} PKR x ${item.quantity}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });

    cartTotalContainer.innerText = `Total: ${total} PKR`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// ===== CHECKOUT FORM PREFILL =====
document.addEventListener('DOMContentLoaded', () => {
    renderCart();

    const checkoutForm = document.querySelector('form[name="checkout"]');
    if (checkoutForm) {
        const cartDataField = document.createElement('input');
        cartDataField.type = 'hidden';
        cartDataField.name = 'cartData';
        cartDataField.value = JSON.stringify(cart);
        checkoutForm.appendChild(cartDataField);

        checkoutForm.addEventListener('submit', () => {
            localStorage.removeItem('cart'); // clear after placing order
        });
    }
});
