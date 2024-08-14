import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Cabecera } from './cabecera';
import { Pie } from './pie';
import Sidebar from './sidebar';
import MainContent from './maincontent.js';
import "./pagina_monto.css"

const Monto = () => {
  return (
    <>
      <Cabecera />
      <Container fluid>
        <Row>
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col md={10}>
            <MainContent />
          </Col>
        </Row>
      </Container>
      <Pie />
    </>
  );
};

export default Monto;
