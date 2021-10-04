import React from "react";
import "./service.css";
import { Col } from "react-bootstrap";

const Service = (props) => {
  const { title, image, price, description } = props.service;
  return (
    <Col md={3}>
      <div className="service-item our-service-item">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div className="price">
          <p>${price}</p>
        </div>
      </div>
    </Col>
  );
};

export default Service;
