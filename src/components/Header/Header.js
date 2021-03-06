import React from "react";
import "./header.css";
import logo from "../../logo.svg";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    // Header Area Start
    <Navbar>
      <Container>
        <Navbar.Brand href="#" className="logo">
          <img src={logo} alt="" />
          <h1>StudyTech</h1>
        </Navbar.Brand>
        <Nav className="ml-auto navbar-nav">
          <NavLink to="/home" className="nav-link" activeClassName="selected">
            Home
          </NavLink>
          <NavLink
            to="/services"
            className="nav-link"
            activeClassName="selected"
          >
            Services
          </NavLink>
          <NavLink to="/about" className="nav-link" activeClassName="selected">
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-link"
            activeClassName="selected"
          >
            Contact
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
    // Header Area End
  );
};

export default Header;
