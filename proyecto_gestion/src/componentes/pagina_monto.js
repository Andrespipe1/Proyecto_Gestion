import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Cabecera } from './cabecera';
import { Pie } from './pie';
import Sidebar from './sidebar';
import MainContent from './maincontent';
import './pagina_monto.css'; // Asegúrate de que la ruta sea correcta

const Monto = () => {
  return (
    <>
      <Cabecera />
      <Container fluid>
        <Row>
          <Col md={2} className="p-0">
            <Sidebar />
          </Col>
          <Col md={10} className="p-0">
            <div className="main-content">
              <MainContent />
            </div>
          <p className='xd'>.</p>
          <p className='xd'>.</p>
          <p className='xd'>.</p>
          <p className='xd'>.</p>
          </Col>
        </Row>
      </Container>
      <Pie />
    </>
  );
};

export default Monto;
