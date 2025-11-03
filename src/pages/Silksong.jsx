import React, { useState } from "react";
import useReseñas from "../hooks/useReseñas";
import reseñasData from "../data/reseñas.json"; 

export default function Silksong() {
    const reseñasIniciales = reseñasData.silksong || [];
    const {
        ratingValue,
        setRatingValue,
        hoverValue,
        setHoverValue,
        reseñas,
        enviarReseña,
        eliminarReseña,
        editarReseña,
        scoreData
    } = useReseñas("silksong", reseñasIniciales);

    const [textoReseña, setTextoReseña] = useState("");
    const [editandoId, setEditandoId] = useState(null);
    const [textoEditado, setTextoEditado] = useState("");
    const [puntajeEditado, setPuntajeEditado] = useState(0);

    const handleStarHover = (value) => {
        setHoverValue(value);
    };

    const handleStarLeave = () => {
        setHoverValue(0);
    };

    const handleStarClick = (value) => {
        setRatingValue(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (enviarReseña(textoReseña)) {
            setTextoReseña("");
        }
    };

    const iniciarEdicion = (reseña) => {
        setEditandoId(reseña.id);
        setTextoEditado(reseña.texto);
        setPuntajeEditado(reseña.puntaje);
    };

    const guardarEdicion = (reseña) => {
        if (textoEditado.trim()) {
            editarReseña(reseña.id, textoEditado, puntajeEditado, reseña.indexPuntaje);
            setEditandoId(null);
        }
    };

    const renderEstrellas = (puntaje) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < puntaje ? "estrella llena" : "estrella vacia"}>
                {i < puntaje ? "★" : "☆"}
            </span>
        ));
    };

    const displayValue = hoverValue || ratingValue;

    return (
        <>
            <div className="parallax parallax-hks">
                <div className="overlay"></div>
                <div className="info">
                    <div className="foto">
                        <img src="/img/Silksong.png" alt="Hollow Knight Silksong" />
                    </div>
                    <div className="info-text">
                        <h2>Información</h2>
                        <div className="info-box">
                            <div className="casilla sinopsis">
                                <h3>Sinopsis</h3>
                                <p>¡Descubre un vasto reino embrujado en Hollow Knight: Silksong! 
                                    Explora, lucha y sobrevive mientras asciendes a la cima de un vasto reino gobernado por la seda y el canto.
                                </p>
                            </div>
                            <div className="casilla">
                                <strong>Desarrollador:</strong> Team Cherry
                            </div>
                            <div className="casilla">
                                <strong>Editor:</strong> Team Cherry
                            </div>
                            <div className="casilla">
                                <strong>Fecha de Lanzamiento:</strong> 4 SEPTIEMBRE 2025
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sitios">
                <h3>Disponible En:</h3>
                <a href="https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/?l=spanish" target="_blank" rel="noreferrer" className="card-sitio">
                    <i className="fa-brands fa-steam"></i>
                    <p>Steam</p>
                </a>
                <a href="https://store.playstation.com/es-es/concept/10005908" target="_blank" rel="noreferrer" className="card-sitio">
                    <i className="fa-brands fa-playstation"></i>
                    <p>Playstation</p>
                </a>
                <a href="https://www.xbox.com/es-ar/games/store/hollow-knight-silksong/9n116v0599hb" target="_blank" rel="noreferrer" className="card-sitio">
                    <i className="fa-brands fa-xbox"></i>
                    <p>Xbox</p>
                </a>
            </div>
            <div className="reseña-card">
                <div className="metacritic">
                    <h3>Valoración general</h3>
                    <div className="metacritic-score">
                        <span className="score">{scoreData.score}</span>
                        <span className="percent">%</span>
                    </div>
                    <div className="rating-distribution">
                        {[5, 4, 3, 2, 1].map(rating => (
                            <div key={rating} className="rating-bar">
                                <span className="stars-metacritic">
                                    {Array.from({ length: rating }, (_, i) => (
                                        <span key={i} className="star-mc">★</span>
                                    ))}
                                </span>
                                <div className="bar-container">
                                    <div 
                                        className="bar" 
                                        data-rating={rating} 
                                        style={{ width: `${scoreData.percentages[rating]}%` }}
                                    ></div>
                                </div>
                                <span className="percentage">{scoreData.percentages[rating]}%</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="reseña-divider"></div>
                <div className="form-reseña">
                    <h3>Deja tu Reseña</h3>
                    <p>Mantenemos el anonimato con las reseñas de los juegos</p>
                    <div className="rating">
                        {[1, 2, 3, 4, 5].map(value => (
                            <span 
                                key={value}
                                className={`star ${value <= displayValue ? 'active' : ''}`}
                                data-value={value}
                                onClick={() => handleStarClick(value)}
                                onMouseEnter={() => handleStarHover(value)}
                                onMouseLeave={handleStarLeave}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    <p className="rating-message">
                        {hoverValue ? `Estás seleccionando: ${hoverValue} / 5 ⭐` : 
                        ratingValue ? `Puntaje seleccionado: ${ratingValue} / 5 ⭐` : ''}
                    </p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="reseña">Reseña:</label>
                        <textarea 
                            id="reseña" 
                            name="reseña" 
                            rows="4" 
                            required
                            value={textoReseña}
                            onChange={(e) => setTextoReseña(e.target.value)}
                        ></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
            <div className="caja-reseñas">
                <h3>Reseñas de Usuarios</h3>
                <div className="reseñas-lista">
                    {reseñas.map((reseña) => (
                        <div key={reseña.id} className="reseña-usuario">
                            <p><strong>{reseña.usuario}</strong></p>
                            <p><strong>Puntaje:</strong> {renderEstrellas(reseña.puntaje)}</p>
                            <p><strong>Comenta:</strong></p>
                            
                            {editandoId === reseña.id ? (
                                <>
                                    <textarea 
                                        className="texto-reseña-editar"
                                        value={textoEditado}
                                        onChange={(e) => setTextoEditado(e.target.value)}
                                        rows="3"
                                    />
                                    <div className="rating-editar">
                                        {[1, 2, 3, 4, 5].map(value => (
                                            <span 
                                                key={value}
                                                className={`estrella ${value <= puntajeEditado ? 'llena' : ''}`}
                                                onClick={() => setPuntajeEditado(value)}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                    <div className="acciones">
                                        <button onClick={() => guardarEdicion(reseña)}>Guardar</button>
                                        <button onClick={() => setEditandoId(null)}>Cancelar</button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <p className="texto-reseña">{reseña.texto}</p>
                                    <div className="acciones">
                                        <button className="editar" onClick={() => iniciarEdicion(reseña)}>Editar</button>
                                        <button className="eliminar" onClick={() => eliminarReseña(reseña.id, reseña.indexPuntaje)}>Eliminar</button>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}