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
/*chuc nang trinh chieu*/

var slideIndex = 0;
var slides = document.querySelectorAll(".slide img");
var slideContainer = document.querySelector(".slide");
var timer;

function showSlides() {
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  slideContainer.style.transform = `translateX(-${slideIndex * 100 / slides.length}%)`;
}

function changeSlide(n) {
  slideIndex += n;
  clearTimeout(timer);
  showSlides();
  timer = setTimeout(function() { changeSlide(1); }, 3000);
}

timer = setTimeout(function() { changeSlide(1); }, 3000);
showSlides();

