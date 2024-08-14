import React from 'react';
import { Col } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <Col md={2} className="bg-light pt-3">
      <div>
        <h5>Menú</h5>
        <ul className="list-unstyled">
          <li><a href="#datos">Ingresar Saldo</a></li>
          <li>Visualización:</li>
          <ul>
            <li><a href="#graficos">Gráficos</a></li>
            <li><a href="#listas">Listas</a></li>
          </ul>
          <li>Pagos:</li>
          <ul>
            <li><a href="#registrar">Registrar un pago</a></li>
            <li>Visualización:</li>
            <ul>
              <li><a href="#graficos">Gráficos</a></li>
              <li><a href="#listas">Listas</a></li>
            </ul>
          </ul>
          <li>¡RECUERDA!</li>
          <p>De centavito en centavito se va llegando al dolarito</p>
        </ul>
      </div>
    </Col>
  );
};

export default Sidebar;
