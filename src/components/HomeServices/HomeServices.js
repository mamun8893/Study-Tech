import React from "react";
import "./services.css";
import { Container, Row } from "react-bootstrap";
import HomeService from "../HomeService/HomeService";
import useServices from "../../hooks/useService";

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
          {services.splice(0, 4).map((service) => (
            <HomeService key={service.id} service={service}></HomeService>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeServices;
