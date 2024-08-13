import React from 'react';
import './pie.css';
import facebook from '../imagenes/facebook.png';
import instagram from '../imagenes/instagram.png';
import youtube from '../imagenes/youtube.png';

export const Pie = () => {
  return (
    <footer className="pie">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 text-center text-md-left">
            <h5 className="footer-heading">Síguenos</h5>
            <div className="social-icons">
              <a href="https://www.facebook.com/?locale=es_LA" className="social-icon">
                <img src={facebook} alt="Facebook" className="icono"/>
              </a>
              <a href="https://www.instagram.com" className="social-icon">
                <img src={instagram} alt="Instagram" className="icono"/>
              </a>
              <a href="https://www.youtube.com/" className="social-icon">
                <img src={youtube} alt="YouTube" className="icono"/>
              </a>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 text-center text-md-left">
            <h5 className="footer-heading">Contacto</h5>
            <p className="footer-contact">
              Naciones Unidas y Amazonas<br/>
              Quito, Ecuador<br/>
              Teléfono: (123) 456-7890<br/>
              Email: andres.tufino@epn.edu.ec
            </p>
          </div>

          <div className="col-sm-12 col-md-4 text-center text-md-left">
            <h5 className="footer-heading"></h5>
            <p className="politicas">
              <p>Butigue ®. Todos los derechos reservados 2024.</p>
              <a className="fin" href="#"><b>Política de Cookies | Políticas de Privacidad</b></a><br/>

              <p>Desarrollado por Pocket-Plan</p>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
