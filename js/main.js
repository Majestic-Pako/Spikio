document.addEventListener('DOMContentLoaded', function() {
    let menuList = document.getElementById('menuList');
    let menuIcon = document.getElementById('menuIcon');
    let menuIconContainer = document.querySelector('.menu-icon');
    
    menuIconContainer.addEventListener('click', function() {
        menuList.classList.toggle('active');
        
        if (menuList.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        } else {
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        }
    });
});

let imagenes = [
    {
        "url": "img/portHWS.png",
        "nombre": "Hollow Knigth Silksong"
    },
    {
        "url": "img/portCK.png",
        "nombre": "Core Keeper"
    },
    {
        "url": "img/portPeak.png",
        "nombre": "Expedition 33"
    }
];

let imagen = document.querySelector('.img');
let puntos = document.getElementById('puntos');
let actual = 0;
let intervalo;

    function inicializarPuntos() {
        puntos.innerHTML = "";
        for (let i = 0; i < imagenes.length; i++) {
            let punto = document.createElement('div');
            punto.classList.add('punto');
            if (i === actual) {
                punto.classList.add('activo');
            }
            punto.addEventListener('click', () => {
                cambiarImagen(i);
            });
            puntos.appendChild(punto);
        }
    }

    function cambiarImagen(indice) {
        actual = indice;
        imagen.style.opacity = 0;
        setTimeout(() => {
            imagen.src = imagenes[actual].url;
            imagen.alt = imagenes[actual].nombre;
            imagen.style.opacity = 1;
            actualizarPuntos();
        }, 300);
    }

    function actualizarPuntos() {
        let puntosElements = document.querySelectorAll('.punto');
        puntosElements.forEach((punto, index) => {
            if (index === actual) {
                punto.classList.add('activo');
            } else {
                punto.classList.remove('activo');
            }
        });
    }

inicializarPuntos();