// App.js
import React from 'react';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import LargeCarousel from './componentes/Carrusel';
import MenuPage from './componentes/MenuPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    const cart = [];
    const removeFromCart = () => {};

    return (
        <Router>
            <div className="App">
                <Header cart={cart} removeFromCart={removeFromCart} />
                <Routes>
                    <Route path="/" element={<LargeCarousel />} />
                    <Route path="/menu" element={<MenuPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
