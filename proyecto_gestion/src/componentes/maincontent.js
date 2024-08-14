import React from 'react';
import { Col, Row, Button, Form, InputGroup } from 'react-bootstrap';
import "./pagina_monto.js"
const MainContent = () => {
  return (
    <Col md={10} className="bg-light p-4">
      <Row className="mb-3">
        <Col>
          <Button variant="outline-dark">Fecha Inicio</Button>
          <Button variant="outline-dark" className="ms-2">Fecha Fin</Button>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={4}>
          <Form.Select aria-label="Category">
            <option>Categoría</option>
            <option value="1">Comida</option>
            <option value="2">Transporte</option>
            <option value="3">Ahorro</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <InputGroup>
            <Form.Control type="text" placeholder="inf" />
            <Button variant="outline-success">Actualizar</Button>
          </InputGroup>
        </Col>
        <Col md={4}>
          <Form.Control type="text" placeholder="Valor" defaultValue="$20" readOnly />
        </Col>
      </Row>

      {/* Display Categories */}
      <Row>
        <Col md={4}>
          <Form.Check type="checkbox" label="Comida" />
        </Col>
        <Col md={4}>
          <Form.Control type="text" placeholder="inf" />
        </Col>
        <Col md={4}>
          <Form.Control type="text" placeholder="$20" readOnly />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={4}>
          <Form.Check type="checkbox" label="Transporte" />
        </Col>
        <Col md={4}>
          <Form.Control type="text" placeholder="inf" />
        </Col>
        <Col md={4}>
          <Form.Control type="text" placeholder="$10" readOnly />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={4}>
          <Form.Check type="checkbox" label="Ahorro" />
        </Col>
        <Col md={4}>
          <Form.Control type="text" placeholder="inf" />
        </Col>
        <Col md={4}>
          <Form.Control type="text" placeholder="$10" readOnly />
        </Col>
      </Row>
    </Col>
  );
};

export default MainContent;
