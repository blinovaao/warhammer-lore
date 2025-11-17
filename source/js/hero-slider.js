const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;
const interval = 5000;

function nextSlide() {
  slides[currentSlide].classList.remove('hero-slide--active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('hero-slide--active');
}

setInterval(nextSlide, interval);
