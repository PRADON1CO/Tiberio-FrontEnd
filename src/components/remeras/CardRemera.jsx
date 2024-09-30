import React from 'react';
import { Card, Col } from 'react-bootstrap';


const CardRemera = () => {
    return (
        <Col xs={10} md={4} lg={3} className="mb-3 p-0">
        <Card className='bg-transparent border-0 m-1'>
          <div>
            <img
              src="data:image/jpeg;base64,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"
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