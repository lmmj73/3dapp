const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

let carouselIndex = 0;
const x3dModels = document.querySelectorAll('.x3d-model');

nextBtn.addEventListener('click', () => {
  carouselIndex++;
  if (carouselIndex > x3dModels.length - 1) {
    carouselIndex = 0;
  }
  carousel.style.transform = `translateX(-${carouselIndex * 100}%)`;
});

prevBtn.addEventListener('click', () => {
  carouselIndex--;
  if (carouselIndex < 0) {
    carouselIndex = x3dModels.length - 1;
  }
  carousel.style.transform = `translateX(-${carouselIndex * 100}%)`;
});
