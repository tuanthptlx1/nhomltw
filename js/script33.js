document.querySelectorAll('.remove').forEach(button => {
    button.addEventListener('click', function() {
        const item = this.closest('.item');
        item.remove();
        updateSummary();
    });
});

function updateSummary() {
    const items = document.querySelectorAll('.item');
    let subtotal = 0;

    items.forEach(item => {
        const priceText = item.querySelector('.price').textContent;
        const price = parseFloat(priceText.replace('MRP: ₹ ', '').replace(',', ''));
        subtotal += price;
    });

    document.querySelector('.summary p:nth-child(2)').textContent = `Subtotal: ₹ ${subtotal.toFixed(2)}`;
    document.querySelector('.summary p:nth-child(4)').textContent = `Total: ₹ ${subtotal.toFixed(2)}`;
}
function removeImage(button) {
    var imageContainer = button.parentElement;
    imageContainer.style.display = 'none';
}
