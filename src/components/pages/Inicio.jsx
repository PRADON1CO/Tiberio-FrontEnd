import React from "react";
import publicidad1 from "../../assets/banner1.jpeg";
import '../../style/inicio.css'
import { Container, Row } from "react-bootstrap";
import CardRemera from "../remeras/CardRemera";

const Inicio = () => {
  return (
    <div className="bg-black">
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
        <Row>
            <CardRemera></CardRemera>
            <CardRemera></CardRemera>
            <CardRemera></CardRemera>
            <CardRemera></CardRemera>
        </Row>
      </div>
    </div>
  );
};

export default Inicio;
