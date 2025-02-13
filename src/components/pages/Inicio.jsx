import React from "react";
import publicidad1 from "../../assets/TiberioPublicidad.jpeg";
import "../../style/inicio.css";
import { Col, Container, Row } from "react-bootstrap";
import CardRemera from "../remeras/CardRemera";
import pagoRealizado from "../../assets/pagoRealizado.png";
import pedidoEmpaquetado from "../../assets/pedidoEmpaquetado.png";
import pedidoEnviado from "../../assets/pedidoEnviado.png";
import recibeCompra from "../../assets/recibiTuCompra.png";


const Inicio = () => {
  return (
    <div className="bg-black mainSection">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={publicidad1}
              className="d-block w-100 bannerGradiente imgBanner"
              alt="Banner 1"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <h3 className="text-center py-3 text-white">- NEW DROP -</h3>
        <Row className="justify-content-center">
          <CardRemera></CardRemera>
          <CardRemera></CardRemera>
          <CardRemera></CardRemera>
          <CardRemera></CardRemera>
        </Row>
      </div>
      <div className="container text-center py-3">
        <h3 className="pb-3 text-white">- SOBRE ENVIOS -</h3>
        <p className="textoCentrado pb-3 text-white">
          Ofrecemos múltiples opciones de envío para que recibas tus compras de
          manera rápida y segura, sin importar dónde te encuentres. Disfruta de
          la comodidad de entregas a domicilio en cualquier rincón del país o en el punto de encuentro.
        </p>
        <Row>
          <Col xs={6} md={6} lg={3}>
            <img
              src={pagoRealizado}
              alt="imagen de factura de pago"
              className="imgEnvios"
            />
            <p className="pt-2 text-white">PAGO REALIZADO</p>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <img
              src={pedidoEmpaquetado}
              alt="imagen de pedido empaquetado"
              className="imgEnvios"
            />
            <p className="pt-2 text-white">PEDIDO EMPAQUETADO</p>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <img
              src={pedidoEnviado}
              alt="imagen de pedido enviado"
              className="imgEnvios"
            />
            <p className="pt-2 text-white">PEDIDO ENVIADO</p>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <img
              src={recibeCompra}
              alt="imagen de recibir tu compra"
              className="imgEnvios"
            />
            <p className="pt-2 text-white">RECIBI TU COMPRA</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Inicio;
