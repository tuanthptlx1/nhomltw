let currentPosition = 0;

function moveCarousel(direction) {
    const products = document.querySelectorAll('.product');
    if (direction === 'next') {
        currentPosition -= 100; 
    } else {
        currentPosition += 100; 
    }

    
    if (currentPosition < -300) currentPosition = -300;
    if (currentPosition > 0) currentPosition = 0;

    
    products.forEach((product) => {
        product.style.transform = `translateX(${currentPosition}%)`;
    });
}

