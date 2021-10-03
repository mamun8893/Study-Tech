import React from "react";
import "./footer.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer-area">
      <Container>
        <Row>
          <Col>
            <p>Copyright ©2021 StudyTech. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
