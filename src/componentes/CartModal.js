// CartModal.js
import React from 'react';
import './CartModal.css';

const CartModal = ({ isOpen, cart, onClose, removeFromCart }) => {
    if (!isOpen) return null;

    // Calcula el total del carrito sumando el precio de cada producto multiplicado por su cantidad.
    const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="close-icon" onClick={onClose}>
                        <img src="images/cerrar.png" alt="Cerrar" className="icon" />
                    </div>
                </div>

                <div className="modal-title">
                    <h2>Tu Carrito</h2>
                </div>

                {/* Muestra el total en la parte superior del carrito */}
                <div className="total-bar">
                    <p>Total: ${total.toFixed(2)}</p>
                </div>

                {cart.length === 0 ? (
                    <div className="empty-cart">
                        <img src="images/carrito.png" alt="Carrito Vacío" className="empty-cart-icon" />
                        <p className="empty-cart-text">Tu carrito está vacío</p>
                    </div>
                ) : (
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                {item.name} x {item.quantity} - ${item.price.toFixed(2)} c/u
                                <button onClick={() => removeFromCart(item.name)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                )}

                {cart.length > 0 && (
                    <button className="payment-button">Proceder al pago</button>
                )}
            </div>
        </div>
    );
};

export default CartModal;
