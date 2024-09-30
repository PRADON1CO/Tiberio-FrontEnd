import React from 'react';
import { Card, Col } from 'react-bootstrap';


const CardRemera = () => {
    return (
        <Col xs={6} md={4} lg={3} className="mb-3 p-0">
        <Card className='bg-transparent border-0 m-1'>
          <div>
            <img
              src="https://acdn.mitiendanube.com/stores/001/240/717/products/207-5438f5cfd47dcdfcb017197905825942-320-0.webp"
              alt=""
              className="card-img-top-nueva"
            />
          </div>
          <Card.Body>
            <Card.Title className="text-white fs-5">Air Jordan 1 Low</Card.Title>
            <Card.Text>
              <div className="d-flex justify-content- align-items-center">
                <span className="text-white fw-medium pe-2">$180.999</span>
                <span className="bg-info text-white fw-bold py-1 px-2 rounded-0">
                  -30%
                </span>
              </div>
              <span className="d-block text-decoration-line-through text-danger">
                $200.999
              </span>
              <p className="precioTransferencia text-white">
                <span className="textTransferencia">
                  Con transferencia o depósito bancario
                </span>
              </p>
            </Card.Text>
          </Card.Body>
          <div className="px-3 pb-2">
            <a
              to="*"
              className="btn btn-info text-white  border-0 px-4 rounded-0 fw-medium"
            >
              Comprar
            </a>
          </div>
        </Card>
      </Col>
    );
};

export default CardRemera;