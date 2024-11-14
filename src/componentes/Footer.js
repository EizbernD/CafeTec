import React from 'react';
import './Header'; // Archivo CSS opcional para estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>CONTACTANOS EN NUESTRAS REDES SOCIALES.</p>
        <div className="icon-container"> {/* Contenedor para los íconos */}
          <a href="#">
            <img src="images/F.png" alt="F" className='icon'/>
          </a>
          <a href="#">
            <img src="images/T.png" alt="T" className="icon"/>
          </a>
          <a href="#">
            <img src="images/I.png" alt="I" className="icon"/>
          </a>
          <a href="#">
            <img src="images/W.png" alt="W" className="icon"/>
          </a>
        </div>
        <p>QUEJAS Y SUGERENCIAS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; tecnm_quejas345@gmail.com</p>
      </div>
      <div className="footer-info">
  {/* Bloque de horario centrado */}
  <div className="horario">
    <p>Horario</p>
    <p>Lunes a Viernes</p>
    <p>7am - 6pm</p>
    <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
  </div>

  {/* Bloque de horario adicional alineado a la derecha */}
  <div className="horario-derecha">
    <p>Sábados</p>
    <p>3:00pm a 8:00pm</p>
    <p>Domingos</p>
    <p>10:00am a 3:00pm</p>
  </div>
</div>
    </footer>
  );
}

export default Footer;