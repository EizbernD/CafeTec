import React from 'react';
import './Cart.css';

const Cart = ({ toggleCart }) => {
  // Ejemplo de productos en el carrito
  const items = [
    { id: 1, name: 'Producto 1', price: 20 },
    { id: 2, name: 'Producto 2', price: 15 },
    { id: 3, name: 'Producto 3', price: 30 },
  ];

  // Calcular el total del carrito
  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <button className="close-button" onClick={toggleCart}>X</button> {/* Botón para cerrar */}
      <h2>Carrito de Compras</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <button className="checkout-button">Proceder al Pago</button>
    </div>
  );
};

export default Cart;
