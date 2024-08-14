import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import { Cabecera } from './cabecera';
import { Pie } from './pie';

const Login = () => {
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

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

        const { email, password } = formValues;

        if (!email) {
            formErrors.email = "El campo de correo electrónico es requerido.";
            isValid = false;
        }

        if (!password) {
            formErrors.password = "El campo de contraseña es requerido.";
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log('Inicio de sesión exitoso');

            navigate('/');
        }
    };

    const handleForgotPasswordClick = () => {
        navigate('/recuperar');
    };

    const handleRegisterClick = () => {
        navigate('/registro');
    };

    const handleloginClick = () => {
        navigate('/pagina_monto');
    };

    return (
        <div>
        <Cabecera></Cabecera>
        <div className="login-container">
            <div className="login-card">
                <h2 className="text-center">Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
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

                    <button type="submit" className="btn btn-primary w-100" onClick={handleloginClick}>Iniciar Sesión</button>
                    <div className="text-center mt-3">
                        <a href="#!" className="btn btn-link" onClick={handleForgotPasswordClick}>Olvidaste tu contraseña?</a>
                        <br />
                        <a href="#!" className="btn btn-link" onClick={handleRegisterClick}>¿No tienes cuenta? Regístrate</a>
                    </div>
                </form>
            </div>
        </div>
        <Pie></Pie>
        </div>
    );
};

export default Login;
