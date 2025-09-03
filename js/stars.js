const stars = document.querySelectorAll('.rating .star');
const puntuacionInput = document.getElementById("puntuacion");
const ratingMessage = document.getElementById("rating-message");
let ratingValue = 0;

stars.forEach(star => {
star.addEventListener('click', () => {
    ratingValue = parseInt(star.getAttribute('data-value'));
    updateStars(ratingValue);
    puntuacionInput.value = ratingValue;
    ratingMessage.textContent = `Puntaje seleccionado: ${ratingValue} / 5 ⭐`;
});

star.addEventListener('mouseover', () => {
    const hoverValue = parseInt(star.getAttribute('data-value'));
    updateStars(hoverValue);
    ratingMessage.textContent = `Estás seleccionando: ${hoverValue} / 5 ⭐`;
});

star.addEventListener('mouseout', () => {
    updateStars(ratingValue);
    if (ratingValue > 0) {
        ratingMessage.textContent = `Puntaje seleccionado: ${ratingValue} / 5 ⭐`;
    } else {
        ratingMessage.textContent = "";
    }
    });
});

function updateStars(value) {
    stars.forEach(star => {
        let starValue = parseInt(star.getAttribute('data-value'));
        if (starValue <= value) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}