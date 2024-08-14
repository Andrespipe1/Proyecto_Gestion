import React from 'react';
import { Col } from 'react-bootstrap';
import "./sidebar.css"
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {

    const navigate = useNavigate(); 

    const handlegraficoClick = () => {
        navigate('/visualizar');
    };
  return (
    <Col md={2} className="bg-light pt-3">
      <div>
        <h5>Menú</h5>
        <ul className="list-unstyled">
          <li><a >Ingresar Saldo</a></li>
          <li>Visualización:</li>
          <ul>
            <li><a href="" onClick={handlegraficoClick}>Gráficos</a></li>
            <li><a href="#listas">Listas</a></li>
          </ul>
          <li>Pagos:</li>
          <ul>
            <li><a href="#registrar">Registrar un pago</a></li>
          </ul>
          <li>¡RECUERDA!</li>
          <p>De centavito en centavito se va llegando al dolarito</p>
        </ul>
      </div>
    </Col>
  );
};

export default Sidebar;
