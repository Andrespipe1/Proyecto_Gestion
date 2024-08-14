import React, { useState } from 'react';
import './registro.css'; // Asegúrate de tener el CSS adecuado para este componente

const Registro = () => {
    const [formValues, setFormValues] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [id]: value
        }));
    };

    const validateForm = () => {
        const formErrors = {};
        let isValid = true;

        const { nombre, email, password, confirmPassword } = formValues;

        if (!nombre) {
            formErrors.nombre = "Complete el campo de nombre";
            isValid = false;
        }

        if (!email) {
            formErrors.email = "Complete el campo de correo electrónico";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = "Correo electrónico inválido";
            isValid = false;
        }

        if (!password) {
            formErrors.password = "Complete el campo de contraseña";
            isValid = false;
        }

        if (password !== confirmPassword) {
            formErrors.confirmPassword = "Las contraseñas no coinciden";
            isValid = false;
        }

        setErrors(formErrors);

        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            setSuccessMessage('Registro exitoso');
            console.log('Registro exitoso');
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        }
    };

    return (
        <div className="registro-container">
            <h2>Registro</h2>
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input
                        type="text"
                        className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                        id="nombre"
                        value={formValues.nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre completo"
                    />
                    {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        value={formValues.email}
                        onChange={handleChange}
                        placeholder="usuario@ejemplo.com"
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        id="password"
                        value={formValues.password}
                        onChange={handleChange}
                        placeholder="********"
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
                    <input
                        type="password"
                        className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                        id="confirmPassword"
                        value={formValues.confirmPassword}
                        onChange={handleChange}
                        placeholder="********"
                    />
                    {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                </div>

                <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>
        </div>
    );
};

export default Registro;
