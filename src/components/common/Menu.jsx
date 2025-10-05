import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartIcon from './CartIcon';
import logo from"../../assets/Logo.jpeg"
import img0 from '../../assets/0.png';
import img1 from '../../assets/1.png';
import imgLogo1 from '../../assets/logo1.png';
import '../../style/menu.css'
import { NavLink } from "react-router-dom";

const Menu = () => {

  const handleRemove = (id) => {};
  return (
    <>
      <Navbar expand="lg" className="bg-black">
        <Container fluid>
          <Navbar.Brand href="#home">
            <NavLink to={'/'}>
              <img src={logo} alt="Logo Tiberio" width={150} />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-3">
              <NavLink to={'/'} className="fw-bold text-white linksMenu">Inicio</NavLink>
              <NavLink to={'/guia-talles'} className="fw-bold text-white linksMenu">Guía de talles</NavLink>
              <NavLink to={'/productos'} className="text-white linksMenu fw-bold">Productos</NavLink>
              <NavLink to={'/administrador'} className="fw-bold text-white linksMenu">Administrador</NavLink>
              <NavLink to={'/login'} className="fw-bold text-white linksMenu">Login</NavLink>
              <NavLink to={'/carrito'} className="fw-bold text-white linksMenu">Carrito</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
