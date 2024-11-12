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
    <button
    className="add-to-cart-button"
    onClick={() => addToCart(item, item.quantity || 1)}
>
    Agregar al carrito
</button>
    const [cart, setCart] = useState([]);
    const [showButton, setShowButton] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const menuContainerRef = useRef(null);

    const addToCart = (item, quantity) => {
        if (quantity > 0) {
            setCart(prevCart => {
                const existingItem = prevCart.find(cartItem => cartItem.name === item.name);
                if (existingItem) {
                    return prevCart.map(cartItem =>
                        cartItem.name === item.name
                            ? { ...cartItem, quantity: cartItem.quantity + quantity }
                            : cartItem
                    );
                } else {
                    return [...prevCart, { ...item, quantity }];
                }
            });
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
                                defaultValue="0"
                                onChange={(e) => item.quantity = parseInt(e.target.value, 10) || 0}
                            />
                            
                        </div>
                    </li>
                ))}
            </ul>

            <CartModal isOpen={isCartOpen} cart={cart} onClose={() => setIsCartOpen(false)} />
        </div>
    );
};

export default MenuPage;
