import React from "react";
import "./services.css";
import { Container, Row } from "react-bootstrap";
import useServices from "../../hooks/useService";
import Service from "../Service/Service";

const Services = () => {
  const [services] = useServices();
  const servicesFourItem = services.slice(0, 4);
  return (
    <div className="service-area">
      <Container>
        <div className="service-title">
          <h2>
            Our <span>Service</span>
          </h2>
        </div>
        <Row>
          {servicesFourItem.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
