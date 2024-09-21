// Toggle do menu em dispositivos móveis
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Carrossel de imagens
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = carouselSlide.querySelectorAll('img');
const totalImages = carouselImages.length;
let currentIndex = 0;

function showSlide(index) {
    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    carouselSlide.style.transform = `translateX(${offset}%)`;
}

// Avançar para o próximo slide
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Retroceder para o slide anterior
function prevSlide() {
    showSlide(currentIndex - 1);
}

// Configurar o intervalo do carrossel
setInterval(nextSlide, 3000); // Mudar a cada 3 segundos
