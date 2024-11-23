import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Header.css';

// Cargar Stripe en tu aplicación
const stripePromise = loadStripe('tu-clave-publica-de-stripe'); // Reemplaza con tu clave pública de Stripe

const PaymentForm = ({ totalAmount }) => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentError, setPaymentError] = useState(null);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsProcessing(true);

        // Crear un token de la tarjeta con Stripe
        const { error, token } = await stripe.createToken(elements.getElement(CardElement));

        if (error) {
            setPaymentError(error.message);
            setIsProcessing(false);
        } else {
            // Aquí iría la lógica para enviar el token al servidor y procesar el pago
            console.log('Token generado: ', token);
            alert('Pago exitoso');
            setIsProcessing(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="payment-form">
            <div className="card-details">
                <label htmlFor="card">Tarjeta de Crédito</label>
                <CardElement id="card" />
            </div>

            {paymentError && <p className="error-message">{paymentError}</p>}

            <div className="total-container">
                <p>Total: ${totalAmount.toFixed(2)}</p>
            </div>

            <button type="submit" disabled={!stripe || isProcessing} className="pay-button">
                {isProcessing ? 'Procesando...' : 'Pagar'}
            </button>
        </form>
    );
};

const PaymentPage = () => {
    const [cart, setCart] = useState([]);
    
    // Obtener el total del carrito
    const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

    return (
        <div className="payment-container">
            <h1>Detalles de Pago</h1>
            <Elements stripe={stripePromise}>
                <PaymentForm totalAmount={total} />
            </Elements>
        </div>
    );
};

export default PaymentPage;
