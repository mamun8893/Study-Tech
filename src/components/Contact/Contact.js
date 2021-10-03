import React from "react";
import "./contact.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import bgImage from "../../images/bg3.jpg";

const Contact = () => {
  return (
    <div className="contact-area">
      {/* Breadcumb Banner Area */}
      <div
        className="breadcumb-banner"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Container>
          <div className="banner-breadcumb-content">
            <h2>Contact us</h2>
          </div>
        </Container>
      </div>
      {/* Contact Form */}
      <Container>
        <div className="conatct-form-warper">
          <div className="service-title">
            <h2>
              Interested in <span>discussing?</span>
            </h2>
          </div>
          <div className="contact-form">
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Your Email" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Subject" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Phone" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary">Send Your Message</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
