import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import logo from'../../assets/logoSolo.png'

const Footer = () => {
    return (
        <>
        <Container fluid className="pt-1 mt-auto bg-black text-lg-start text-md-start text-center">
          <Row>
            <Col md={12} lg={3} className="text-center">
              <NavLink to={"/"}>
                <img src={logo} alt="Logo FitFactory" className="" width={250} />
              </NavLink>
            </Col>
            <Col className="d-none d-md-block text-white">
              <h4 className="text-white">Opciones</h4>
              <NavLink className="text-decoration-none text-white" to="/">
                <p>Inicio</p>
              </NavLink>
              <NavLink
                className="text-decoration-none text-white"
                to="/contacto"
              >
                <p>Contacto</p>
              </NavLink>
              <NavLink
                className="text-decoration-none text-white"
                to="/nosotros"
              >
                <p>Nosotros</p>
              </NavLink>
              <NavLink
                className="text-decoration-none text-white"
                to="/login"
              >
                <p>Login</p>
              </NavLink>
            </Col>
            <Col xs={12} md={4} lg={3} className="">
              <h4 className="text-white">Información</h4>
              <NavLink className="text-decoration-none text-white" to="*">
                <p>Políticas de devolución</p>
              </NavLink>
              <NavLink className="text-decoration-none text-white" to="*">
                <p>Legal</p>
              </NavLink>
              <NavLink className="text-decoration-none text-white" to="*">
                <p>Promociones</p>
              </NavLink>
              <NavLink className="text-decoration-none text-white" to="*">
                <p>Horarios de atención</p>
              </NavLink>
            </Col>
            <Col xs={12} md={4} lg={3} className="">
              <h4 className="text-white">Contacto</h4>
              <NavLink
                to={"*"}
                className="text-decoration-none text-white"
              >
                <p>
                  <i className="bi bi-whatsapp"></i> 123-1234567
                </p>
              </NavLink>
              <NavLink to={'*'} className="text-white text-decoration-none">
                <p>
                  <i className="bi bi-instagram"></i> Tiberio.of
                </p>
              </NavLink>
              <NavLink to={'*'} className="text-white text-decoration-none">
                <p>
                  <i className="bi bi-facebook"></i> Tiiberio.of
                </p>
              </NavLink>
            </Col>
          </Row>
        </Container>
        <div className="bg-black py-1">
          <p className="text-center  text-white">
            &copy; Tiberio . Todos los derechos reservados. 2024.
          </p>
        </div>
      </>
    );
};

export default Footer;