import React from 'react';
import javaimg from '../images/javaimg.png'; // Asegúrate de que la ruta es correcta
const Examen1 = () => {
  return (
    <div>
      <li><h1>Que es javascrip?</h1></li>
      <li><h3>JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico</h3></li>
      <li><h1>Que es una pagina web?</h1></li>
      <li><h3>Una página web es un documento de la World Wide Web «con dirección propia».Las páginas web son entregadas por un servidor web al usuario y mostradas en un navegador web para que actúe como «unidad de recuperación» de la información almacenada en su interior.</h3></li>
      <img src={javaimg} alt="javaimg" />
    </div>
  );
};

export default Examen1;
