let slideIndex = 1;
let autoSlide;

document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
  autoSlide = setInterval(() => plusSlides(1), 5000); 
});

// Next/previous controls
function plusSlides(n) {
  clearInterval(autoSlide); 
  showSlides(slideIndex += n);
  autoSlide = setInterval(() => plusSlides(1), 5000); 
}

// Thumbnail image controls
function currentSlide(n) {
  clearInterval(autoSlide);
  showSlides(slideIndex = n);
  autoSlide = setInterval(() => plusSlides(1), 5000);
}

function showSlides(n) {
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  slides.forEach(slide => slide.style.display = "none");
  dots.forEach(dot => dot.classList.remove("active"));

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

// Swipe Gesture Support for Mobile
let touchStartX = 0;
let touchEndX = 0;

document.querySelector(".slideshow-container").addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].clientX;
});

document.querySelector(".slideshow-container").addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].clientX;
  handleGesture();
});

function handleGesture() {
  let swipeThreshold = 50; // Minimum swipe distance
  if (touchEndX < touchStartX - swipeThreshold) plusSlides(1); // Swipe Left → Next
  if (touchEndX > touchStartX + swipeThreshold) plusSlides(-1); // Swipe Right → Prev
}
