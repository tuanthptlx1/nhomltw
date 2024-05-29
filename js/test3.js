document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.order-details');
    const continueButton = document.querySelector('.order-btn');
    const stateSelect = document.getElementById('state');
    const countryInput = document.getElementById('country');

    // Update country based on selected state
    stateSelect.addEventListener('change', function () {
        countryInput.value = stateSelect.options[stateSelect.selectedIndex].text;
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting

        // Validation
        const firstName = document.getElementById('first-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const addressLine1 = document.getElementById('address-line-1').value.trim();
        const postalCode = document.getElementById('postal-code').value.trim();
        const locality = document.getElementById('locality').value.trim();
        const email = document.getElementById('email').value.trim();
        const phoneNumber = document.getElementById('phone-number').value.trim();
        const pan = document.getElementById('pan').value.trim();
        const consent = document.getElementById('consent').checked;

        let isValid = true;

        // Basic validation
        if (!firstName || !lastName || !addressLine1 || !postalCode || !locality || !email || !phoneNumber || !pan || !consent) {
            isValid = false;
            alert('Please fill in all required fields and provide consent.');
        }

        // Simple email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            alert('Please enter a valid email address.');
        }

        // Simple phone number validation (basic check for digits)
        const phonePattern = /^\d+$/;
        if (!phonePattern.test(phoneNumber)) {
            isValid = false;
            alert('Please enter a valid phone number.');
        }

        if (isValid) {
            // Simulate form submission and redirect
            alert('Order successfully submitted! Redirecting to shop page...');

            // Clear order summary (simulate payment and product removal)
            const orderSummary = document.querySelector('.order-summary ul');
            orderSummary.innerHTML = '<li><span>No items in the cart</span><span></span></li>';

            const productDetails = document.querySelectorAll('.order-summary .product');
            productDetails.forEach(product => product.remove());

            // Redirect to shop page after a short delay
            setTimeout(() => {
                window.location.href = '../html1/shop.html';
            }, 2000);
        }
    });
});
