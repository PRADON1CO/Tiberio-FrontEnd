import React from 'react';
import CartIcon from '../common/CartIcon';
import './Carrito.css';

const Carrito = ({ items = [], onRemove, onClose }) => {
  const total = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div className="carrito-overlay">
      <div className="carrito-modal bg-black text-white">
        <div className="carrito-header d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
          <h4 className="m-0 d-flex align-items-center gap-2">
            <CartIcon size={20} color="white" /> Carrito
          </h4>
          <button className="btn btn-close btn-close-white" onClick={onClose}></button>
        </div>
        <div className="carrito-body">
          {items.length === 0 ? (
            <div className="text-center py-4">
              <p className="mb-0">Tu carrito está vacío.</p>
            </div>
          ) : (
            <ul className="list-unstyled mb-0">
              {items.map((item, idx) => (
                <li key={item.id} className="d-flex align-items-center justify-content-between py-2 border-bottom">
                  <div className="d-flex align-items-center gap-2">
                    <img src={item.imagen} alt={item.nombre} style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 8 }} />
                    <div>
                      <div className="fw-bold">{item.nombre}</div>
                      <div className="small text-secondary">Talle: {item.talle} | Cant: {item.cantidad}</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <span className="fw-medium text-info">${(item.precio * item.cantidad).toLocaleString()}</span>
                    <button className="btn btn-sm btn-danger px-2 py-1" onClick={() => onRemove(item.id)} title="Quitar">
                      &times;
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="carrito-footer border-top pt-3 mt-3 d-flex justify-content-between align-items-center">
          <span className="fw-bold">Total:</span>
          <span className="fw-bold text-info fs-5">${total.toLocaleString()}</span>
        </div>
        <div className="mt-3 d-flex justify-content-end">
          <button className="btn btn-info text-white px-4 fw-medium rounded-0" disabled={items.length === 0}>
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
