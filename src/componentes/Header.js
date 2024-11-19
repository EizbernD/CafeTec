// Header.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import CartModal from './CartModal';

const Header = ({ cart, removeFromCart }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const location = useLocation();

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <header className="header">
            <div className='logo'>
                <img src='images/logo-Cafetec.png' alt="logo" />
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={location.pathname === '/' ? '/menu' : '/'}>
                            {location.pathname === '/' ? 'Menú' : 'Inicio'}
                        </Link>
                    </li>
                    <li><a href="menu">Conócenos</a></li>

                    <li><a href="#">Ofertas del día</a></li>
                </ul>
                <div className="icon-container">
                    <a href="#">
                        <img src="images/ubicacion.png" alt="ubicacion" className="icon" />
                    </a>
                    <a href="#" onClick={toggleModal} className="cart-icon">
                        <img src="images/carrito.png" alt="Carrito" className="icon" />
                        <span className="cart-count">{cart.length}</span>
                    </a>
                    <a href="#">
                        <img src="images/sesion.png" alt="Sesión" className="icon" />
                    </a>
                </div>
            </nav>
            <CartModal 
                isOpen={isModalOpen} 
                cart={cart} 
                onClose={toggleModal} 
                removeFromCart={removeFromCart} 
            />
        </header>
    );
};

export default Header;
