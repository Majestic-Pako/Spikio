import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Silksong from "./Silksong";
import CoreKeeper from "./CoreKeeper";
import Peak from "./Peak";

const imagenes = [
    { url: "/img/portHWS.png", nombre: "Hollow Knight Silksong" },
    { url: "/img/portCK.png", nombre: "Core Keeper" },
    { url: "/img/portPeak.png", nombre: "Expedition 33" }
];

export default function Home() {
    const [actual, setActual] = useState(0);
    const [opacity, setOpacity] = useState(1);
    const cambiarImagen = (indice) => {
        setOpacity(0);
        setTimeout(() => {
            setActual(indice);
            setOpacity(1);
        }, 300);
    };
    return (
        <>
            <div className="titulo">
                <div className="titulo-deco">
                    <span className="linea"></span>
                    <h1>Bienvenido a Spik.io</h1>
                    <span className="linea"></span>
                </div>
                <p><strong>Más que reseñas: una comunidad con criterio.</strong></p>
            </div>
            <div className="container">
                <h2>Juegos Destacados</h2>
                <div className="carrusel">
                    <div className="imagenes">
                        <div className="img-container">
                            <img 
                                className="img" 
                                src={imagenes[actual].url} 
                                alt={imagenes[actual].nombre}
                                style={{ opacity: opacity, transition: 'opacity 0.3s' }}
                                loading="lazy" 
                            />
                        </div>
                    </div>
                </div>
                <div className="puntos">
                    {imagenes.map((_, index) => (
                        <div
                            key={index}
                            className={`punto ${index === actual ? 'activo' : ''}`}
                            onClick={() => cambiarImagen(index)}
                        />
                    ))}
                </div>
            </div>
            <div className="biblioteca">
                <h3>Explora la Biblioteca</h3>
                <p>Aca podras encontrar los ultimos juegos agregados para poder reseñar</p>
                <div className="juego-card">
                    <span className="ranking r1">#1</span>
                    <img src="/img/Silksong.png" alt="Silksong" className="juego-img" />
                    <div className="juego-info">
                        <Link to={"/silksong"} className="juego-nombre">Hollow Knight Silksong</Link>
                        <div className="juego-plataformas">
                            <i className="fa-brands fa-steam"></i>
                            <i className="fab fa-playstation"></i>
                            <i className="fab fa-xbox"></i>
                        </div>
                    </div>
                </div>
                <div className="juego-card">
                    <span className="ranking r2">#2</span>
                    <img src="/img/peak.png" alt="Peak" className="juego-img" />
                    <div className="juego-info">
                        <Link to={"/peak"} className="juego-nombre">Peak</Link>
                        <div className="juego-plataformas">
                            <i className="fa-brands fa-steam"></i>
                        </div>
                    </div>
                </div>
                <div className="juego-card">
                    <span className="ranking r3">#3</span>
                    <img src="/img/core.png" alt="Core Keeper" className="juego-img" />
                    <div className="juego-info">
                        <Link to={"/corekeeper"} className="juego-nombre">Core Keeper</Link>
                        <div className="juego-plataformas">
                            <i className="fa-brands fa-steam"></i>
                            <i className="fab fa-playstation"></i>
                            <i className="fab fa-xbox"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="novedades">
                <h3>Últimas Novedades</h3>
                <p>Mantente al día con los anuncios, actualizaciones y noticias de la comunidad gamer.</p>
                <div className="novedades-lista">
                    <div className="novedad-card">
                        <span className="novedad-fecha">12 SEP 2025</span>
                        <h4 className="novedad-titulo">Reseñas en tiempo real</h4>
                        <p>Ahora puedes ver cómo cambian las puntuaciones a medida que la comunidad opina.</p>
                    </div>
                    <div className="novedad-card">
                        <span className="novedad-fecha">11 SEP 2025</span>
                        <h4 className="novedad-titulo">Nuevo juego agregado</h4>
                        <p><strong>Hollow Knight Silksong</strong> ya está disponible en la biblioteca para que lo reseñes.</p>
                    </div>
                    <div className="novedad-card">
                        <span className="novedad-fecha">05 SEP 2025</span>
                        <h4 className="novedad-titulo">Anonimato</h4>
                        <p>¡Ahora tus reseñas se comparten de manera anonima a los demas usuarios! </p>
                    </div>
                </div>
            </div>
            <div className="despedida">
                <div className="despedida-linea"></div>
                <div className="despedida-contenido">
                    <div className="texto-despedida">
                        <h3>Ups! Al parecer llegaste al final</h3>
                        <p>Todavía no hay más para reseñar, tomate un descanso</p>
                    </div>
                    <div className="imagen-despedida">
                        <img src="/img/erizo_durmiendo.png" alt="mascota de pagina" />
                    </div>
                </div>
            </div>
        </>
    );
}