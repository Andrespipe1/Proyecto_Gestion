import React from 'react';
import { Button } from 'react-bootstrap';
import './body.css';
import inicio from "../imagenes/imagen_principal.png";
export const Body = () => {
  return (
    <div className="body-container">
      <div className="left-column">
        <img src={inicio} alt="Imagen" width="400" className="image" />
        <Button variant="primary" size="lg" className="register-button">
          Regístrate Gratis
        </Button>
      </div>
      <div className="right-column">
        <p className="body-text">
          Nuestra plataforma te ayuda a controlar y optimizar tu presupuesto con facilidad. 
          Con herramientas avanzadas y asistencia personalizada, transformarás tus finanzas 
          en una historia de éxito, tomando decisiones informadas y alcanzando tus metas económicas.
        </p>
      </div>
    </div>
  );
};
