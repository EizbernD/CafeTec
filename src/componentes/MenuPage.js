// MenuPage.js
import React, { useState, useEffect, useRef } from 'react';
import './MenuPage.css';
import CartModal from './CartModal';

const MenuPage = () => {
    const items = [
        { name: 'Café Expreso', description: 'Un shot fuerte y concentrado de café.', price: 2.00 },
        { name: 'Café Latte', description: 'Café con leche espumosa.', price: 2.50 },
        { name: 'Cappuccino', description: 'Café con una capa espesa de espuma de leche.', price: 2.80 },
        { name: 'Té Verde', description: 'Infusión de té verde, rico en antioxidantes.', price: 2.20 },
        { name: 'Chocolate Caliente', description: 'Bebida caliente de chocolate cremoso.', price: 2.70 },
        { name: 'Pastel de Queso', description: 'Rebanada de pastel de queso suave y cremoso.', price: 3.00 },
        { name: 'Muffin de Arándano', description: 'Muffin esponjoso con arándanos frescos.', price: 2.50 },
        { name: 'Croissant', description: 'Croissant francés, crujiente y mantecoso.', price: 2.30 },
        { name: 'Té Chai Latte', description: 'Té chai especiado con leche espumosa.', price: 2.90 }
    ];

    const [cart, setCart] = useState([]);
    const [showButton, setShowButton] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const menuContainerRef = useRef(null);
    const [quantities, setQuantities] = useState({});

    const handleQuantityChange = (itemName, quantity) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [itemName]: quantity
        }));
    };

    const addToCart = (item) => {
        const quantity = quantities[item.name] || 0;
        if (quantity > 0) {
            setCart(prevCart => {
                const updatedCart = prevCart.filter(cartItem => cartItem.name !== item.name);
                return [...updatedCart, { ...item, quantity }];
            });
            setIsCartOpen(true); // Abre el carrito automáticamente cuando se añade un artículo
        }
    };

    const handleScroll = () => {
        const container = menuContainerRef.current;
        const isAtBottom = container.scrollTop + container.clientHeight >= container.scrollHeight;
        setShowButton(isAtBottom);
    };

    useEffect(() => {
        const container = menuContainerRef.current;
        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="menu-container" ref={menuContainerRef}>
            <h1>Menú</h1>
            <ul className="menu-list">
                {items.map((item, index) => (
                    <li key={index} className="menu-item">
                        <h2>{item.name}</h2>
                        <p className="item-description">{item.description}</p>
                        <p className="item-price">${item.price.toFixed(2)}</p>

                        <div className="quantity-controls">
                            <input 
                                type="number" 
                                min="0"
                                className="quantity-input"
                                value={quantities[item.name] || 0}
                                onChange={(e) => handleQuantityChange(item.name, parseInt(e.target.value, 10) || 0)}
                            />
                            <button
                                className="add-to-cart-button"
                                onClick={() => addToCart(item)}
                            >
                                Agregar al carrito
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <CartModal
                isOpen={isCartOpen}
                cart={cart}
                onClose={() => setIsCartOpen(false)}
                removeFromCart={(name) =>
                    setCart(prevCart => prevCart.filter(item => item.name !== name))
                }
            />
        </div>
    );
};

export default MenuPage;
