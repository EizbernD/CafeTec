import React, { useState } from 'react';
import './Header.css';

const MenuPage = ({ addToCart }) => {
    const items = [
        { name: 'Café Expreso', description: 'Un shot fuerte y concentrado de café.', price: 20.00 },
        { name: 'Café Latte', description: 'Café con leche espumosa.', price: 35.00 },
        { name: 'Cappuccino', description: 'Café con una capa espesa de espuma de leche.', price: 45.00 },
        { name: 'Té Verde', description: 'Infusión de té verde, rico en antioxidantes.', price: 15.00 },
        { name: 'Chocolate Caliente', description: 'Bebida caliente de chocolate cremoso.', price: 25.00 },
        { name: 'Pastel de Queso', description: 'Rebanada de pastel de queso suave y cremoso.', price: 55.00 },
        { name: 'Muffin de Arándano', description: 'Muffin esponjoso con arándanos frescos.', price: 45.00 },
        { name: 'Croissant', description: 'Croissant francés, crujiente y mantecoso.', price: 30.00 },
        { name: 'Té Chai Latte', description: 'Té chai especiado con leche espumosa.', price: 20.00 }
    ];

    const [quantities, setQuantities] = useState(
        items.reduce((acc, item) => {
            acc[item.name] = 0;
            return acc;
        }, {})
    );

    const handleInputChange = (name, value) => {
        const parsedValue = parseInt(value, 10);
        if (!isNaN(parsedValue) && parsedValue >= 0) {
            setQuantities(prevQuantities => ({
                ...prevQuantities,
                [name]: parsedValue
            }));
        }
    };

    const handleAddToCart = (item) => {
        if (quantities[item.name] > 0) {
            addToCart({ ...item, quantity: quantities[item.name] });
            setQuantities((prev) => ({ ...prev, [item.name]: 0 })); // Reinicia la cantidad después de agregar al carrito
        }
    };

    return (
        <div className="menu-container">
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
                                value={quantities[item.name]}
                                onChange={(e) => handleInputChange(item.name, e.target.value)}
                                min="0"
                                className="quantity-input"
                            />
                        </div>

                        <div className="add-to-cart-container">
                            <button
                                className="add-to-cart-button"
                                onClick={() => handleAddToCart(item)}
                            >
                                Agregar al carrito
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuPage;
