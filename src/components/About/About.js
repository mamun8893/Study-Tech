import React from "react";
import "./about.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import bgImage from "../../images/bg3.jpg";
import aboutLeft from "../../images/about.png";
import aboutRight from "../../images/about-2.jpg";

const About = () => {
  return (
    <div className="about-area">
      <div
        className="breadcumb-banner"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Container>
          <div className="banner-breadcumb-content">
            <h2>About us</h2>
          </div>
        </Container>
      </div>
      <div className="about-content-area">
        <Container>
          <Row>
            <Col md={5}>
              <Image src={aboutLeft} fluid />
            </Col>
            <Col md={4}>
              <div className="service-title">
                <h2>
                  About <span>StudyTech</span>
                </h2>
              </div>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                  voluptatem maiores eaque similique non distinctio voluptates
                  perspiciatis omnis, repellendus ipsa aperiam, laudantium
                  voluptatum nulla?.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Soluta, assumenda, voluptatum. Libero eligendi molestias iure
                  error animi totam laudantium, aspernatur similique id eos at
                  consectetur illo culpa, quisquam temporibus esse!
                </p>
              </div>
            </Col>
            <Col md={3}>
              <Image src={aboutRight} fluid />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
