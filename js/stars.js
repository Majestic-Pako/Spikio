const stars = document.querySelectorAll('.rating .star');
const puntuacionInput = document.getElementById("puntuacion");
const ratingMessage = document.getElementById("rating-message");
const reseñaForm = document.getElementById("reseñaForm");
const reseñasLista = document.querySelector(".reseñas-lista");
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

reseñaForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const texto = document.getElementById("reseña").value.trim();
    const puntaje = puntuacionInput.value;
    if (texto === "" || puntaje == 0) {
        alert("Debes completar la reseña y seleccionar un puntaje.");
        return;
    }
    const randomNum = Math.floor(Math.random() * 500) + 1;
    const usuario = `Anónimo #${randomNum}`;
    const reseñaUsuario = document.createElement("div");
    reseñaUsuario.classList.add("reseña-usuario");
    let estrellasHTML = "";
    for (let i = 1; i <= 5; i++) {
    if (i <= puntaje) {
        estrellasHTML += `<span class="estrella llena">&#9733;</span>`; 
    } else {
        estrellasHTML += `<span class="estrella vacia">&#9734;</span>`; 
    }
    }
    reseñaUsuario.innerHTML = `
        <p><strong>${usuario}</strong></p>
        <p><strong>Puntaje:</strong> ${estrellasHTML}</p>
        <p><strong>Comenta:</strong></p>
        <p>${texto}</p>
    `;
    reseñasLista.prepend(reseñaUsuario); 
    alert("Tu reseña fue enviada con éxito. ¡Gracias por compartir tu opinión!");
    reseñaForm.reset();
    puntuacionInput.value = 0;
    ratingValue = 0;
    updateStars(0);
    ratingMessage.textContent = "";
});