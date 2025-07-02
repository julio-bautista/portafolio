// Aquí puedes agregar scripts simples para animaciones

document.addEventListener("DOMContentLoaded", function() {
  console.log("Sitio cargado correctamente.");
});

// Carrusel simple
let currentIndex = 0;
const slides = document.querySelectorAll(".carousel img");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, 3000);
showSlide(currentIndex);

// Botones de navegación
document.querySelector(".carousel-btn.next").addEventListener("click", () => {
  nextSlide();
});

document.querySelector(".carousel-btn.prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});
