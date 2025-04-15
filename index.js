let indicador = 0;
const track = document.getElementById("carrossel-container")
const slides = document.querySelectorAll('.carrossel-slide');
const total = slides.length;

document.getElementById("carrossel-btn-voltar").addEventListener('click', () => {
    indicador = (indicador + 1) % total;
    updateCarrossel();
});

document.getElementById("carrossel-btn").addEventListener('click', () => {
    indicador = (indicador - 1 + total) % total;
    updateCarrossel();
});

function updateCarrossel() {
    const width = slides[0].clientWidth;
    track.style.transform = `translateX(-${indicador * width}px)`;
}
