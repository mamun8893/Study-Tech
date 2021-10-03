import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./banner.css";
import BannerImage from "../../images/banner.jpg";

const Banner = () => {
  return (
    <div
      className="banner-area"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <Container>
        <Row className="justify-content-md-center">
          <Col md={8}>
            <div className="banner-content">
              <h1>
                Best <span>Online</span> Course
              </h1>
              <p>
                We provides always our best educational services for our all
                students <br /> and always try to achieve our students trust and
                satisfaction
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
