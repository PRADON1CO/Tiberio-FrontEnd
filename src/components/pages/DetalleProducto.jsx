import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CartIcon from '../common/CartIcon';

// Mock de datos de producto
const mockProducto = {
  nombre: "Air Jordan T Low",
  precio: 180999,
  descripcion:
    "Remera oversize de algodón peinado 24/1. Cuello reeb. Estampa en serigrafía en espalda. Diseño exclusivo de nuestra última colección. Perfecta para un look urbano y cómodo.",
  imagenPrincipal:
    "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw2cf39566/products/NIFV6057-100/NIFV6057-100-2.JPG",
  imagenes: [
    "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw32d6a1fd/products/NIFV6057-100/NIFV6057-100-1.JPG",
    "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw138cb63c/products/NIFV6057-100/NIFV6057-100-3.JPG",
    "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw783136c8/products/NIFV6057-100/NIFV6057-100-4.JPG",
    "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwba17c117/products/NIFV6057-100/NIFV6057-100-5.JPG"
  ],
  talles: ["S", "M", "L", "XL", "XXL"]
};

const DetalleProducto = () => {
  const [talleSeleccionado, setTalleSeleccionado] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [imagenActiva, setImagenActiva] = useState(mockProducto.imagenPrincipal);

  const handleTalle = (t) => setTalleSeleccionado(t);
  const handleCantidad = (delta) => {
    setCantidad((prev) => Math.max(1, prev + delta));
  };
  const handleImagen = (img) => setImagenActiva(img);

  return (
    <Container className="py-5">
      <Row className="align-items-start">
        <Col md={6} className="mb-4 mb-md-0">
          <div className="bg-light rounded p-2 text-center">
            <img
              src={imagenActiva}
              alt={mockProducto.nombre}
              style={{ maxWidth: "100%", maxHeight: 800, borderRadius: 12 }}
            />
          </div>
          <div className="d-flex justify-content-center gap-2 mt-3">
            {mockProducto.imagenes.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={mockProducto.nombre + " miniatura " + idx}
                style={{ width: 70, height: 70, objectFit: "cover", borderRadius: 8, border: img === imagenActiva ? "2px solid #000" : "2px solid transparent", cursor: "pointer" }}
                onClick={() => handleImagen(img)}
              />
            ))}
          </div>
        </Col>
        <Col md={6}>
          <h2 className="fw-bold mb-2">{mockProducto.nombre}</h2>
          <h4 className="mb-4">${mockProducto.precio.toLocaleString()}</h4>
          <div className="mb-3">
            <div className="mb-2">Seleccionar Talle</div>
            <div className="d-flex gap-2 flex-wrap">
              {mockProducto.talles.map((t) => (
                <Button
                  key={t}
                  variant={talleSeleccionado === t ? "dark" : "outline-dark"}
                  className="rounded-2 px-3"
                  onClick={() => handleTalle(t)}
                >
                  {t}
                </Button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <div className="mb-2">Cantidad</div>
            <div className="d-flex align-items-center gap-2">
              <Button variant="outline-dark" onClick={() => handleCantidad(-1)}>-</Button>
              <span className="fs-5 px-2">{cantidad}</span>
              <Button variant="outline-dark" onClick={() => handleCantidad(1)}>+</Button>
            </div>
          </div>
          <div className="mb-4 mt-4">
            <Button 
              style={{ background: '#0dcaf0', border: 'none' }}
              className="d-flex align-items-center gap-2 px-4 py-2 fw-medium"
              onClick={() => alert('Producto agregado al carrito')}
            >
              <CartIcon size={22} color="white" />
              Agregar al carrito
            </Button>
          </div>
          <hr />
          <div>
            <h5 className="fw-bold">Descripción</h5>
            <p>{mockProducto.descripcion}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleProducto;
