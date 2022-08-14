import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import { Col, Form, Row } from 'react-bootstrap';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(changeFilter(e.target.value));
  return (
    <Row className="mt-2">
      <Col lg={4} md={6} sm={12} className="pb-3">
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Filter by name</Form.Label>
            <Form.Control type="text" value={value} onChange={onChange} />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}
