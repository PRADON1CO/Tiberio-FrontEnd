import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartIcon from './CartIcon';
import Carrito from './Carrito';
import logo from"../../assets/Logo.jpeg"
import img0 from '../../assets/0.png';
import img1 from '../../assets/1.png';
import imgLogo1 from '../../assets/logo1.png';
import '../../style/menu.css'
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [showCarrito, setShowCarrito] = useState(false);
  // Demo: productos de ejemplo. Reemplaza por tu estado global o props
  const items = [
    {
      id: 1,
      nombre: 'Remera Oversize Blanca',
      imagen: img0,
      precio: 9500,
      cantidad: 2,
      talle: 'L',
    },
    {
      id: 2,
      nombre: 'Remera Negra Estampada',
      imagen: img1,
      precio: 10500,
      cantidad: 1,
      talle: 'M',
    },
    {
      id: 3,
      nombre: 'Remera Azul',
      imagen: imgLogo1,
      precio: 8900,
      cantidad: 1,
      talle: 'S',
    },
  ];
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
            <Nav className="ms-auto gap-3 align-items-center">
              <NavLink to={'/'} className="fw-bold text-white linksMenu">Inicio</NavLink>
              <NavLink to={'/guia-talles'} className="fw-bold text-white linksMenu">Guía de talles</NavLink>
              <NavLink to={'/productos'} className="text-white linksMenu fw-bold">Productos</NavLink>
              <NavLink to={'/administrador'} className="fw-bold text-white linksMenu">Administrador</NavLink>
              <NavLink to={'/login'} className="fw-bold text-white linksMenu"><i id="tamanioIconLogin" className="bi bi-person fw-bold text-white "></i>Login</NavLink>
              <button
                className="btn btn-link p-0 ms-2"
                style={{ background: 'none', border: 'none' }}
                title="Ver carrito"
                onClick={() => setShowCarrito(true)}
              >
                <CartIcon size={19} color="white" />
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showCarrito && (
        <Carrito
          items={items}
          onRemove={handleRemove}
          onClose={() => setShowCarrito(false)}
        />
      )}
    </>
  );
};

export default Menu;
