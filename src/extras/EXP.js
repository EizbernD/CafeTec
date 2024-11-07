import React from 'react';
import rubyrose from '../images/rubyrose.jpg'; // Asegúrate de que la ruta es correcta
import './estilos.css';
const EXP = () => {
  return (
    <div>
      <li>Experimento de imagen para React</li>
      {/* Asegúrate de usar src y alt correctamente */}
      <img src={rubyrose} alt="Ruby Rose" />

      <div class = "shadowbox">
          <p>
            Aquí hay una nota muy interesante exhibida en un hermoso cuadro sombreado.
          </p>
        </div>
        
    </div>

  );
};

export default EXP;
