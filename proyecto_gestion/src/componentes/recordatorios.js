import React, { useState } from 'react';
import { Col, Row, Button, Form, Card } from 'react-bootstrap';
import './recordatorio.css'
import { Cabecera } from './cabecera';
import { Pie } from './pie';
import Sidebar from './sidebar';
import Banco from '../imagenes/banco.png'
const PaymentReminder = () => {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState({
    date: '',
    detail: '',
    price: '',
    notes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReminder({ ...newReminder, [name]: value });
  };

  const handleAddReminder = () => {
    setReminders([...reminders, newReminder]);
    setNewReminder({ date: '', detail: '', price: '', notes: '' });
  };

  return (
    <>
    <Cabecera></Cabecera>
    .
    <Sidebar></Sidebar>
    <Col md={8} className="mx-auto my-4">
      <Card className="p-4 shadow-sm">
        <Card.Body>
          <Card.Title className="text-center mb-4">Recordatorio de Pagos</Card.Title>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Fecha de Pago</Form.Label>
                <Form.Control 
                  type="date" 
                  name="date" 
                  value={newReminder.date} 
                  onChange={handleInputChange} 
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Detalle de pago</Form.Label>
                <Form.Control 
                  type="text" 
                  name="detail" 
                  placeholder="Pago Facturas" 
                  value={newReminder.detail} 
                  onChange={handleInputChange} 
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Monto</Form.Label>
                <Form.Control 
                  type="text" 
                  name="price" 
                  placeholder="$0.00" 
                  value={newReminder.price} 
                  onChange={handleInputChange} 
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Notas</Form.Label>
                <Form.Control 
                  type="text" 
                  name="notes" 
                  placeholder="Detalles adicionales" 
                  value={newReminder.notes} 
                  onChange={handleInputChange} 
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="success" className="w-100" onClick={handleAddReminder}>
            añadir Recordatorio
          </Button>
        </Card.Body>
      </Card>

      <Card className="mt-4 p-3 shadow-sm">
        <Card.Body>
          <Card.Title className="text-center">Pagos Proximos</Card.Title>
          {reminders.length > 0 ? (
            reminders.map((reminder, index) => (
              <Card key={index} className="mt-3">
                <Card.Body>
                  <Row>
                    <Col md={3}><strong>Fecha:</strong> {reminder.date}</Col>
                    <Col md={2}><strong>Detalle:</strong> {reminder.detail}</Col>
                    <Col md={2}><strong>Monto:</strong> {reminder.price}</Col>
                    <Col md={2}><strong>Notas:</strong> {reminder.notes}</Col>
                    <Col md={2}><strong>Pagar:</strong> {<a href="https://www.pichincha.com/banca-web" className="icon">
                <img src={Banco} alt="Banco" className="icono"/>
              </a>}</Col>
                  </Row>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p className="text-center">No se han agregado pagos aún.</p>
          )}
        </Card.Body>
      </Card>
    </Col>
    .
    <Pie></Pie>
    </>
  );
};

export default PaymentReminder;
