import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from"../../assets/logo3.png"

const Menu = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-black">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo Tiberio" width={200} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="fw-bold text-white">Inicio</Nav.Link>
              <Nav.Link href="#Nosotros" className="fw-bold text-white">Nosotros</Nav.Link>
              <NavDropdown title={<span className="text-white">Productos</span>} className="fw-bold" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#Administrador" className="fw-bold text-white">Administrador</Nav.Link>
              <Nav.Link href="#Login" className="fw-bold text-white"><i class="bi bi-person fw-bold text-white"></i>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
