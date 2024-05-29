document.addEventListener('DOMContentLoaded', function () {
    const cartItem = JSON.parse(localStorage.getItem('cart'));
    const favoriteItem = JSON.parse(localStorage.getItem('favorites'));

    function updateSummary() {
        const subtotalElement = document.getElementById('subtotal');
        const totalElement = document.getElementById('total');
        if (cartItem) {
            const price = parseFloat(cartItem.price.replace(/[^\d.-]/g, ''));
            subtotalElement.innerText = `Subtotal: ₹ ${price.toFixed(2)}`;
            totalElement.innerText = `Total: ₹ ${price.toFixed(2)}`;
        } else {
            subtotalElement.innerText = 'Subtotal: ₹ 0.00';
            totalElement.innerText = 'Total: ₹ 0.00';
        }
    }

    if (cartItem) {
        document.getElementById('cart-items').innerHTML = `
            <div class="item">
                <img src="${cartItem.image}" alt="${cartItem.name}">
                <div class="details">
                    <h3>${cartItem.name}</h3>
                    <p>${cartItem.description}</p>
                    <p>Men's Short-Sleeve Running Top<p>
                        <p>Ashen Slate/Cobalt Bliss</p>
                    <button class="remove" onclick="removeFromCart()"><img src="../imgs/Vector (3).png" alt=""></button>
                </div>
                <p>${cartItem.price}</p>
            </div>
        `;
    } else {
        document.getElementById('cart-items').innerHTML = '<p>Cart is empty</p>';
    }

    if (favoriteItem) {
        document.getElementById('favorite-items').innerHTML = `
             <div class="image-container">
                <img src="${favoriteItem.image}" alt="${favoriteItem.name}">
               
                    <h3>${favoriteItem.name}</h3>
                    <p>${favoriteItem.description}</p>
                    <p>Giá: ${favoriteItem.price}</p>
                    <button class="xoa" onclick="removeFromFavorites()">X</button>
                </div>
            </div>
        `;
    } else {
        document.getElementById('favorite-items').innerHTML = '<p>There are no favorite products</p>';
    }

    updateSummary();
});

function removeFromCart() {
    localStorage.removeItem('cart');
    alert('Product removed from cart');
    location.reload();
}

function removeFromFavorites() {
    localStorage.removeItem('favorites');
    alert('Product removed from favorites');
    location.reload();
}