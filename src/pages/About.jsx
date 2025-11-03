import React from 'react';

export default function About() {
  return (
    <>
        <div className="about-container">
      <h1 className="about-main-title">Sobre Nosotros</h1>
      <h2 className="about-section-title">Equipo del proyecto</h2>
      
      <div className="about-team-member">
        <h3 className="about-member-name">Agustin Choque</h3>
        <p className="about-member-github">
          Usuario de Github:{" "}
          <strong>
            <a 
              href="https://github.com/Majestic-Pako" 
              className="about-github-link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              @Majestic-Pako
            </a>
          </strong>
        </p>
      </div>
      
      <div className="about-team-member">
        <h3 className="about-member-name">Antonio Pirotta</h3>
        <p className="about-member-github">
          Usuario de Github:{" "}
          <strong>
            <a 
              href="https://github.com/Anthony2080" 
              className="about-github-link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              @ToñoShark
            </a>
          </strong>
        </p>
      </div>

      <div className="about-repo-container">
        <div className="repositorio">
          <div className="repo-icon">
            <i className="fa-brands fa-github"></i>
          </div>
          <div className="repo-linea"></div>
          <div>
            <h3>¿Quieres contribuir?</h3>
            <p>Visita nuestro repositorio en GitHub y forma parte de nuestra comunidad.</p>
            <a href="https://github.com/Majestic-Pako/Spikio.git">
              <button className="btn-repo">Ir</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}