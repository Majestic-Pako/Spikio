import React from 'react';

export default function About() {
  return (
    <div className="about-wrapper">
      <section className="about-hero">
        <h1>Sobre Spik.io</h1>
        <p className="about-subtitle">
          Una plataforma creada por gamers, para gamers. Descubrí, reseñá y compartí tu pasión por los videojuegos.
        </p>
      </section>
      <section className="about-mission">
        <div className="mission-icon">
          <i className="fa-solid fa-gamepad"></i>
        </div>
        <h2>Nuestra Misión</h2>
        <p>
          Spik.io nace con el objetivo de crear un espacio donde los jugadores puedan compartir 
          sus opiniones de forma honesta y anónima. Creemos que cada experiencia importa, 
          y queremos que tu voz sea escuchada sin prejuicios.
        </p>
      </section>
      <section className="about-features">
        <h2>¿Qué nos hace diferentes?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <i className="fa-solid fa-user-secret"></i>
            <h3>Anonimato</h3>
            <p>Tus reseñas son completamente anónimas para mantener la objetividad.</p>
          </div>
          <div className="feature-card">
            <i className="fa-solid fa-users"></i>
            <h3>Comunidad</h3>
            <p>Una comunidad apasionada que valora las opiniones auténticas.</p>
          </div>
          <div className="feature-card">
            <i className="fa-solid fa-code"></i>
            <h3>Open Source</h3>
            <p>Código abierto para que cualquiera pueda contribuir y mejorar la plataforma.</p>
          </div>
        </div>
      </section>
      <section className="about-team">
        <h2>Nuestro Equipo</h2>
        <p className="team-intro">
          Somos estudiantes de <strong>Análisis de Sistemas</strong> en el <strong>Instituto DaVinci</strong>, 
          apasionados por la tecnología y los videojuegos.
        </p>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar">
              <img src="/img/Pako.png" alt="Agustin Choque" />
            </div>
            <h3>Agustin Choque</h3>
            <p className="team-role">Full Stack Developer</p>
            <a 
              href="https://github.com/Majestic-Pako" 
              className="team-github"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
              @Majestic-Pako
            </a>
          </div>
          <div className="team-card">
            <div className="team-avatar">
              <img src="/img/Tony.png" alt="Antonio Pirotta" />
            </div>
            <h3>Antonio Pirotta</h3>
            <p className="team-role">Full Stack Developer</p>
            <a 
              href="https://github.com/Anthony2080" 
              className="team-github"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
              @ToñoShark
            </a>
          </div>
        </div>
      </section>
      <section className="about-tech">
        <h2>Tecnologías Utilizadas</h2>
        <div className="tech-list">
          <div className="tech-item">
            <i className="fa-brands fa-react"></i>
            <span>React</span>
          </div>
          <div className="tech-item">
            <i className="fa-brands fa-js"></i>
            <span>JavaScript</span>
          </div>
          <div className="tech-item">
            <i className="fa-brands fa-css3-alt"></i>
            <span>CSS3</span>
          </div>
          <div className="tech-item">
            <i className="fa-brands fa-git-alt"></i>
            <span>Git</span>
          </div>
        </div>
      </section>
      <section className="about-cta">
        <div className="cta-box">
          <div className="cta-icon">
            <i className="fa-brands fa-github"></i>
          </div>
          <div className="cta-divider"></div>
          <div className="cta-content">
            <h3>¿Querés contribuir?</h3>
            <p>Visitá nuestro repositorio en GitHub y formá parte de nuestra comunidad.</p>
            <a href="https://github.com/Majestic-Pako/Spikio.git" target="_blank" rel="noopener noreferrer">
              <button className="cta-btn">
                <i className="fa-solid fa-code-branch"></i>
                Ver Repositorio
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}