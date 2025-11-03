import { useState, useEffect } from 'react';

export default function useReseñas(juego, reseñasIniciales) {
    const [ratingValue, setRatingValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(0);
    const [reseñas, setReseñas] = useState(reseñasIniciales);
    const [scoreData, setScoreData] = useState({
        score: 0,
        percentages: {
            5: 0,
            4: 0,
            3: 0,
            2: 0,
            1: 0
        }
    });

    useEffect(() => {
        // Actualizar score cuando se inicializan las reseñas
        actualizarScore(reseñasIniciales);
    }, []);

    const enviarReseña = (texto) => {
        if (!texto.trim() || !ratingValue) return false;
        
        const nuevaReseña = {
            id: Date.now(),
            texto,
            puntaje: ratingValue,
            usuario: `Anónimo #${Math.floor(Math.random() * 1000)}`,
            indexPuntaje: reseñas.length
        };

        const nuevasReseñas = [...reseñas, nuevaReseña];
        setReseñas(nuevasReseñas);
        actualizarScore(nuevasReseñas);
        setRatingValue(0);
        return true;
    };

    const eliminarReseña = (id) => {
        const nuevasReseñas = reseñas.filter(reseña => reseña.id !== id);
        setReseñas(nuevasReseñas);
        actualizarScore(nuevasReseñas);
    };

    const editarReseña = (id, nuevoTexto, nuevoPuntaje) => {
        const nuevasReseñas = reseñas.map(reseña => 
            reseña.id === id 
                ? {...reseña, texto: nuevoTexto, puntaje: nuevoPuntaje}
                : reseña
        );
        setReseñas(nuevasReseñas);
        actualizarScore(nuevasReseñas);
    };

    const actualizarScore = (reseñasActuales) => {
        if (reseñasActuales.length === 0) {
            setScoreData({
                score: 0,
                percentages: {5: 0, 4: 0, 3: 0, 2: 0, 1: 0}
            });
            return;
        }

        const total = reseñasActuales.length;
        const sumaPuntajes = reseñasActuales.reduce((acc, curr) => acc + curr.puntaje, 0);
        const porcentajeTotal = Math.round((sumaPuntajes / (total * 5)) * 100);

        const conteoEstrellas = {5: 0, 4: 0, 3: 0, 2: 0, 1: 0};
        reseñasActuales.forEach(reseña => {
            conteoEstrellas[reseña.puntaje]++;
        });

        const porcentajes = {};
        Object.keys(conteoEstrellas).forEach(key => {
            porcentajes[key] = Math.round((conteoEstrellas[key] / total) * 100);
        });

        setScoreData({
            score: porcentajeTotal,
            percentages: porcentajes
        });
    };

    return {
        ratingValue,
        setRatingValue,
        hoverValue,
        setHoverValue,
        reseñas,
        enviarReseña,
        eliminarReseña,
        editarReseña,
        scoreData
    };
}