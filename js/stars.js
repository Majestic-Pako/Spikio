const stars = document.querySelectorAll('.rating .star');
const puntuacionInput = document.getElementById("puntuacion");
const ratingMessage = document.getElementById("rating-message");
const reseñaForm = document.getElementById("reseñaForm");
const reseñasLista = document.querySelector(".reseñas-lista");
let ratingValue = 0;
let puntuaciones = [];
const scoreSpan = document.querySelector('.metacritic-score .score');

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
    puntuaciones.push(puntaje);
    actualizarScore();
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
        <p class="texto-reseña">${texto}</p>
        <div class="acciones">
            <button class="editar">Editar</button>
            <button class="eliminar">Eliminar</button>
        </div>
    `;
    reseñasLista.prepend(reseñaUsuario); 
    alert("Tu reseña fue enviada con éxito. ¡Gracias por compartir tu opinión!");
    reseñaUsuario.querySelector(".eliminar").addEventListener("click", () => {
        alert("La reseña ha sido eliminada.");
        reseñaUsuario.remove();
    });

    reseñaUsuario.querySelector(".editar").addEventListener("click", () => {
        const textoParrafo = reseñaUsuario.querySelector(".texto-reseña");
        const textoActual = textoParrafo.textContent;
        const textarea = document.createElement("textarea");
        textarea.value = textoActual;
        textarea.rows = 3;
        textarea.classList.add("texto-reseña-editar");

        const estrellasParrafo = reseñaUsuario.querySelector("p:nth-of-type(2)"); 
        const puntajeActual = estrellasParrafo.querySelectorAll(".estrella.llena").length;
        const estrellasEditar = document.createElement("div");
        estrellasEditar.classList.add("rating-editar");
        for (let i = 1; i <= 5; i++) {
            const star = document.createElement("span");
            star.classList.add("estrella");
            star.innerHTML = "&#9733;";
            if (i <= puntajeActual) star.classList.add("llena");
            star.dataset.value = i;
            estrellasEditar.appendChild(star);
            star.addEventListener("mouseover", () => {
                updateStarsEdit(estrellasEditar, i);
            });
            star.addEventListener("mouseout", () => {
                updateStarsEdit(estrellasEditar, ratingEditar);
            });
            star.addEventListener("click", () => {
                ratingEditar = i;
            });
        }
        let ratingEditar = puntajeActual;
        function updateStarsEdit(container, value) {
            const stars = container.querySelectorAll("span.estrella");
            stars.forEach(star => {
            if (parseInt(star.dataset.value) <= value) {
                star.classList.add("llena");
            } else {
                star.classList.remove("llena");
            }
            });
        }
        const guardarBtn = document.createElement("button");
        guardarBtn.textContent = "Guardar";
        textoParrafo.replaceWith(textarea);
        estrellasParrafo.replaceWith(estrellasEditar);
        reseñaUsuario.querySelector(".acciones").appendChild(guardarBtn);
        guardarBtn.addEventListener("click", () => {
            const nuevoTexto = textarea.value.trim();
            if (nuevoTexto !== "") {
                const nuevoP = document.createElement("p");
                nuevoP.classList.add("texto-reseña");
                nuevoP.textContent = nuevoTexto;
                textarea.replaceWith(nuevoP);

                let nuevasEstrellasHTML = "";
                for (let i = 1; i <= 5; i++) {
                    nuevasEstrellasHTML += i <= ratingEditar 
                    ? '<span class="estrella llena">&#9733;</span>'
                    : '<span class="estrella vacia">&#9734;</span>';
                }
                const nuevoPuntaje = document.createElement("p");
                nuevoPuntaje.innerHTML = `<strong>Puntaje:</strong> ${nuevasEstrellasHTML}`;
                estrellasEditar.replaceWith(nuevoPuntaje);
                guardarBtn.remove();
            }
        });
    });
    reseñaForm.reset();
    puntuacionInput.value = 0;
    ratingValue = 0;
    updateStars(0);
    ratingMessage.textContent = "";
});
function actualizarScore() {
    if (puntuaciones.length === 0) return;
    
    // Calcular distribución de calificaciones
    const distribution = {
        5: 0,
        4: 0,
        3: 0,
        2: 0,
        1: 0
    };
    
    // Contar cada tipo de calificación
    puntuaciones.forEach(puntaje => {
        distribution[puntaje]++;
    });
    
    // Calcular porcentaje de aceptación (4 y 5 estrellas)
    const reseñasAceptadas = distribution[5] + distribution[4];
    const porcentajeAceptacion = Math.round((reseñasAceptadas / puntuaciones.length) * 100);
    
    // Actualizar score principal
    scoreSpan.textContent = porcentajeAceptacion;
    
    // Actualizar barras de distribución
    for (let rating = 1; rating <= 5; rating++) {
        const percentage = Math.round((distribution[rating] / puntuaciones.length) * 100);
        const bar = document.querySelector(`.bar[data-rating="${rating}"]`);
        const percentageSpan = document.querySelector(`.rating-bar:nth-child(${6 - rating}) .percentage`);
        
        if (bar && percentageSpan) {
            bar.style.width = `${percentage}%`;
            percentageSpan.textContent = `${percentage}%`;
        }
    }
}
document.addEventListener('DOMContentLoaded', function() {
    actualizarScore();
});