document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.info-skin1');//hoặc '.info-skin'
    const thumbnails = container.querySelectorAll('.image-list img');//chọn tất cả các hình ảnh bên trong '.image-list'
    const displayedImage = container.querySelector('.image-display img');//chọn hình ảnh hiển thị

    thumbnails.forEach(function (thumbnail) {
        thumbnail.addEventListener('click', function () {
            const imagePath = thumbnail.getAttribute('src');
            displayedImage.setAttribute('src', imagePath);
        });
    });
});
