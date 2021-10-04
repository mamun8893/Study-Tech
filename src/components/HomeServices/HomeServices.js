import React from "react";
import "./services.css";
import { Container, Row } from "react-bootstrap";
import useServices from "../../hooks/useService";
import Service from "../Service/Service";

const HomeServices = () => {
  const [services] = useServices(); //Service Custom Hooks

  return (
    <div className="service-area">
      <Container>
        <div className="service-title">
          <h2>
            Our <span>Service</span>
          </h2>
        </div>
        <Row>
          {services.slice(0, 4).map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeServices;
