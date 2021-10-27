import React from 'react';

import './styles/Hero.css';

const Hero = ({ title }) => {
  //Declaro una variable donde voy a almacenar la ruta de la imagen que quiero mostrar

  //la lógica va siempre antes del return
  return (
    <section className="hero hero-slide-1">
      <div className="hero-container">
        <article className="hero-container__text-box">
          <h1>{title}</h1>
          <p>
            ¡La mente muy clara y la cerveza muy fría! Vení a conocer las
            mejores cervezas del inframundo.
          </p>
          <button className="button-primary">Comprar</button>
        </article>
      </div>
    </section>
  );
};

export default Hero;
