import React, { useState } from 'react';
import './MenuPage.css';

const MenuPage = () => {
    const items = [
        { name: 'Café Expreso', description: 'Un shot fuerte y concentrado de café.', price: '$2.00' },
        { name: 'Café Latte', description: 'Café con leche espumosa.', price: '$2.50' },
        { name: 'Cappuccino', description: 'Café con una capa espesa de espuma de leche.', price: '$2.80' },
        { name: 'Té Verde', description: 'Infusión de té verde, rico en antioxidantes.', price: '$2.20' },
        { name: 'Chocolate Caliente', description: 'Bebida caliente de chocolate cremoso.', price: '$2.70' },
        { name: 'Pastel de Queso', description: 'Rebanada de pastel de queso suave y cremoso.', price: '$3.00' },
        { name: 'Muffin de Arándano', description: 'Muffin esponjoso con arándanos frescos.', price: '$2.50' },
        { name: 'Croissant', description: 'Croissant francés, crujiente y mantecoso.', price: '$2.30' },
        { name: 'Té Chai Latte', description: 'Té chai especiado con leche espumosa.', price: '$2.90' }
    ];

    const [quantities, setQuantities] = useState(
        items.reduce((acc, item) => {
            acc[item.name] = 0; // Inicializamos la cantidad de cada artículo a 0
            return acc;
        }, {})
    );

    // Función para actualizar la cantidad de un artículo
    const handleQuantityChange = (name, amount) => {
        setQuantities(prevQuantities => {
            const newQuantity = Math.max(0, prevQuantities[name] + amount); // La cantidad no puede ser menor a 0
            return { ...prevQuantities, [name]: newQuantity };
        });
    };

    // Función para manejar la entrada manual en el input de cantidad
    const handleInputChange = (name, value) => {
        const parsedValue = parseInt(value, 10);
        if (!isNaN(parsedValue) && parsedValue >= 0) { // Asegura que la cantidad sea un número válido y positivo
            setQuantities(prevQuantities => ({
                ...prevQuantities,
                [name]: parsedValue
            }));
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
                        <p className="item-price">{item.price}</p>

                        <div className="quantity-controls">
                            <input 
                                type="number" 
                                value={quantities[item.name]} 
                                onChange={(e) => handleInputChange(item.name, e.target.value)}
                                min="0"
                                className="quantity-input"
                            />
                            <button>
                                agregar al carrito
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuPage;
