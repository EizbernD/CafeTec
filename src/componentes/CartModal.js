import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const CartModal = ({ isOpen, cart, onClose, removeFromCart }) => {
    const navigate = useNavigate(); // Usamos useNavigate para redirigir

    if (!isOpen) return null;

    const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

    // Función que maneja el pago (redirige a la página de pago)
    const handlePayment = () => {
        // Redirigir a la página de pago
        navigate('/payment');
        onClose(); // Cerrar el modal después de redirigir
    };

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

                <div className="total-bar">
                    <p>Total: ${total.toFixed(2)}</p>
                </div>

                {cart.length === 0 ? (
                    <div className="empty-cart">
                        <img src="images/carrito.png" alt="Carrito Vacío" className="empty-cart-icon" />
                        <p className="empty-cart-text">Tu carrito está vacío</p>
                    </div>
                ) : (
                    <ul className="cart-items">
                        {cart.map((item, index) => (
                            <li key={index} className="cart-item">
                                <div className="item-details">
                                    <p>{item.name}</p>
                                    <p>{item.quantity} x ${item.price.toFixed(2)}</p>
                                </div>
                                <button
                                    className="remove-button"
                                    onClick={() => removeFromCart(item.name)}
                                >
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Botón para realizar el pago */}
                {cart.length > 0 && (
                    <div className="payment-container">
                        <button className="payment-button" onClick={handlePayment}>
                            Realizar Pago
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartModal;
