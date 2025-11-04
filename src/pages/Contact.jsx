import React, { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: ""
    });
    const [showModal, setShowModal] = useState(false);
    const [submittedData, setSubmittedData] = useState(null);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData({ ...formData });
        setShowModal(true);
        setFormData({
            nombre: "",
            email: "",
            mensaje: ""
        });
    };
    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Contáctanos</h1>
                <p>¿Tienes alguna pregunta o sugerencia? Nos encantaría escucharte.</p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-group">
                    <label htmlFor="nombre">
                        <i className="fa-solid fa-user"></i>
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        required
                    />
                </div>
                <div className="contact-form-group">
                    <label htmlFor="email">
                        <i className="fa-solid fa-envelope"></i>
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                    />
                </div>
                <div className="contact-form-group">
                    <label htmlFor="mensaje">
                        <i className="fa-solid fa-message"></i>
                        Mensaje
                    </label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="Escribe tu mensaje aquí..."
                        rows="6"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="contact-submit-btn">
                    <i className="fa-solid fa-paper-plane"></i>
                    Enviar Mensaje
                </button>
            </form>
            {showModal && submittedData && (
                <div className="contact-modal-overlay" onClick={closeModal}>
                    <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="contact-modal-icon">
                            <i className="fa-solid fa-circle-check"></i>
                        </div>
                        <h3>¡Mensaje Enviado!</h3>
                        <div className="contact-modal-data">
                            <p><strong>Nombre:</strong> {submittedData.nombre}</p>
                            <p><strong>Email:</strong> {submittedData.email}</p>
                            <p><strong>Mensaje:</strong></p>
                            <p className="contact-modal-mensaje">{submittedData.mensaje}</p>
                        </div>
                        <p style={{ marginTop: '1rem', fontSize: '0.95rem' }}>
                            Te responderemos pronto.
                        </p>
                        <button className="contact-modal-btn" onClick={closeModal}>
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}