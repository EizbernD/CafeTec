import React from 'react';
import './Header'; // Archivo CSS opcional para estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
        
        <div className="icon-container"> {/* Contenedor para los íconos */}
        

<a href= "#">
    <img src = "images/F.png" alt = "F" className ='icon'/>
</a>
<a href="#">
    <img src="images/I.png" alt="I" className="icon"/>
</a>
<a href="#">
    <img src="images/T.png" alt="T" className="icon"/>
</a>

<a href="#">
    <img src="images/W.png" alt="W" className="icon"/>
</a>
</div>
<div>
  <p> HOLA</p>
</div>
      </div>
    </footer>
  );
}

export default Footer;