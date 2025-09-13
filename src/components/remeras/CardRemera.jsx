// import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import EyeIcon from '../common/EyeIcon';
import CartIcon from '../common/CartIcon';


const CardRemera = ({ producto }) => {
    const navigate = useNavigate();
    if (!producto) {
        return (
            <Col xs={10} md={4} lg={3} className="mb-3 p-0">
                <Card className='bg-transparent border-0 m-1 text-center'>
                    <Card.Body>
                        <Card.Title className="text-white fs-5">Sin datos</Card.Title>
                        <Card.Text className="text-white">No hay información para mostrar.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
    const handleDetalle = (e) => {
        e.stopPropagation();
        navigate(`/producto/${producto.id}`);
    };
    const handleCardClick = (e) => {
        // Evita que el click en el botón Comprar dispare el detalle
        if (e.target.closest('.btn-comprar')) return;
        navigate(`/producto/${producto.id}`);
    };
    const handleAgregarCarrito = (e) => {
        e.stopPropagation();
        // Aquí puedes agregar la lógica para agregar al carrito
        alert(`Producto agregado al carrito: ${producto.nombre}`);
    };
    return (
        <Col xs={10} md={4} lg={3} className="mb-3 p-0">
        <Card className='bg-transparent border-0 m-1' onClick={handleCardClick} style={{ cursor: 'pointer' }}>
          <div>
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="card-img-top-nueva"
            />
          </div>
          <Card.Body>
            <Card.Title className="text-white fs-5">{producto.nombre}</Card.Title>
            <Card.Text>
              <div className="d-flex justify-content- align-items-center">
                <span className="text-white fw-medium pe-2">${producto.precio.toLocaleString()}</span>
              </div>
            </Card.Text>
          </Card.Body>
          <div className="px-3 pb-2 d-flex gap-2">
            <button
              onClick={e => e.stopPropagation()}
              className="btn btn-info text-white border-0 px-4 rounded-0 fw-medium btn-comprar"
            >
              Comprar
            </button>
            <button
              onClick={handleDetalle}
              className="btn btn-outline-light border-0 px-2 rounded-0 d-flex align-items-center btn-eyeicon"
              title="Ver detalle"
              style={{ background: 'transparent' }}
            >
              <EyeIcon size={22} color="#0dcaf0" />
            </button>
          </div>
        </Card>
      </Col>
    );
};

export default CardRemera;