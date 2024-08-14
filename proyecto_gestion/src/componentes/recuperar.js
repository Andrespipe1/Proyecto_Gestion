import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './recuperar.css';
import { Cabecera } from './cabecera';
import { Pie } from './pie';

const RecuperarContrasena = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            setError('');
            setSuccessMessage('Se ha enviado un enlace para restablecer la contraseña a tu correo electrónico.');
            console.log('Correo electrónico enviado a:', email);
        } else {
            setSuccessMessage('');
            setError('Por favor, ingresa un correo electrónico válido.');
        }
    };

    return (
        <div>
            <Cabecera></Cabecera>
        <div className="recuperar-container">
            <div className="recuperar-card">
                <h2 className="text-center">Recuperar Contraseña</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo Electrónico</label>
                        <input
                            type="email"
                            className={`form-control ${error ? 'is-invalid' : ''}`}
                            id="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="usuario@ejemplo.com"
                        />
                        {error && <div className="invalid-feedback">{error}</div>}
                    </div>
                    {successMessage && <div className="alert alert-success">{successMessage}</div>}
                    <button type="submit" className="btn btn-primary w-100">Enviar Enlace de Recuperación</button>
                </form>
            </div>
        </div>
        <Pie></Pie>
        </div>
    );
};

export default RecuperarContrasena;
