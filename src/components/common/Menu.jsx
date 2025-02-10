import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from"../../assets/Logo.jpeg"
import '../../style/menu.css'

const Menu = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-black">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo Tiberio" width={150} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="fw-bold text-white linksMenu">Inicio</Nav.Link>
              <Nav.Link href="#Guia de talles" className="fw-bold text-white linksMenu">Guía de talles</Nav.Link>
              <NavDropdown title={<span className="text-white linksMenu">Productos</span>} className="fw-bold" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#Administrador" className="fw-bold text-white linksMenu">Administrador</Nav.Link>
              <Nav.Link href="#Login" className="fw-bold text-white linksMenu"><i id="tamanioIconLogin" class="bi bi-person fw-bold text-white "></i>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
