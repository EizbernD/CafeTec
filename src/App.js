import React, { useState } from 'react';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import LargeCarousel from './componentes/Carrusel';
import MenuPage from './componentes/MenuPage';
import PaymentPage from './componentes/PaymentPage'; // Importar la nueva página
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    const [cart, setCart] = useState([]);

    // Agregar un producto al carrito
    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(cartItem => cartItem.name === item.name);
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.name === item.name
                        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                        : cartItem
                );
            } else {
                return [...prevCart, item];
            }
        });
    };

    // Eliminar un producto del carrito
    const removeFromCart = (name) => {
        setCart((prevCart) => prevCart.filter(item => item.name !== name));
    };

    return (
        <Router>
            <div className="App">
                <Header cart={cart} removeFromCart={removeFromCart} />
                <Routes>
                    <Route path="/" element={<LargeCarousel />} />
                    <Route path="/menu" element={<MenuPage addToCart={addToCart} />} />
                    <Route path="/payment" element={<PaymentPage />} /> {/* Ruta nueva */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
