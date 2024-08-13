import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../imagenes/logo.png';
import user from '../imagenes/Usuario_logo_inicio.png';
import './cabecera.css';

export const Cabecera = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/" className="navbar-logo">
        <img src={logo} alt="Logo" width="70" className="d-inline-block align-top" />
        <p className='titulo'>POCKET PLAN</p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto navbar-nav-right">
          <Button
            variant="outline-light"
            className="mr-3"
            onClick={() => alert('Iniciar sesión')}
          >
            Iniciar sesión
          </Button>
          <a
            href="#"
            className="d-flex align-items-center"
            onClick={() => alert('Perfil de usuario')}
          >
            <img src={user} alt="Usuario" width="40" className="d-inline-block align-top" />
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
