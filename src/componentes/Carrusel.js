import React, { useState, useEffect } from "react";
import './Carrusel.css'; 
const Carrusel = () => {
  const imagenes = [
    "/images/carrusel1.jpeg",
    "/images/carrusel2.jpeg",
    "/images/carrusel3.jpeg",
    "/images/carrusel4.jpeg"
  ];
  const [indiceActual, setIndiceActual] = useState(0);
  const siguienteImagen = () => {
    setIndiceActual((prevIndice) =>
      prevIndice === imagenes.length - 1 ? 0 : prevIndice + 1
    );
  };
  const anteriorImagen = () => {
    setIndiceActual((prevIndice) =>
      prevIndice === 0 ? imagenes.length - 1 : prevIndice - 1
    );
  };
  useEffect(() => {
    const intervalo = setInterval(siguienteImagen, 3000);
    return () => clearInterval(intervalo);
  }, []);
  return (
    <div className="carrusel">
      <button onClick={anteriorImagen} aria-label="Mostrar imagen anterior">
        &#9664; {/* Carácter Unicode para la flecha izquierda */}
      </button>
      <img 
        src={imagenes[indiceActual]} 
        alt={`Imagen carrusel ${indiceActual + 1}`} 
        onError={(e) => (e.target.src = '/images/imagen-alternativa.jpeg')} 
      />
      <button onClick={siguienteImagen} aria-label="Mostrar imagen siguiente">
        &#9654; {/* Carácter Unicode para la flecha derecha */}
      </button>
      <div className="indicadores">
        {imagenes.map((_, i) => (
          <span
            key={i}
            className={`indicador ${i === indiceActual ? "activo" : ""}`}
          >
            &#9679;
          </span>
        ))}
      </div>
    </div>
  );
};
export default Carrusel;
