import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLoading } from '../../redux/contacts/contacts-selectors';
import * as operations from '../../redux/contacts/contacts-operations';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);

  const handleSubmit = e => {
    e.preventDefault();
    const addContactPromise = dispatch(operations.addContact({ name, number }));
    addContactPromise.then(result => {
      if (!result.payload.name.includes('exists')) {
        reset();
      }
    });
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPhone" className="mt-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Phone"
                name="number"
                value={number}
                onChange={handleChange}
              />
            </Form.Group>
            <div className="d-grid gap-2 mt-4">
              <Button
                variant="success btn-block"
                type="submit"
                disabled={loading}
              >
                Add contact
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
