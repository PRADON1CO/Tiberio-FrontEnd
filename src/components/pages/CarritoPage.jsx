import '../../style/administrador.css';
import '../../style/CarritoML.css';

import img0 from '../../assets/0.png';
import img1 from '../../assets/1.png';
import imgLogo1 from '../../assets/logo1.png';

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

const CarritoPage = () => {
  // Calcula el total
  const total = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div className="carrito-ml-container">
      <div className="carrito-ml-lista">
        <h2 className="mb-4" style={{fontFamily: 'Bebas Neue, Oswald, sans-serif', fontWeight: 700}}>Carrito de compras</h2>
        {items.map(item => (
          <div className="carrito-ml-item" key={item.id}>
            <img src={item.imagen} alt={item.nombre} className="carrito-ml-img" />
            <div className="carrito-ml-info">
              <div className="carrito-ml-nombre">{item.nombre}</div>
              <div className="carrito-ml-talle">Talle: {item.talle}</div>
            </div>
            <div className="carrito-ml-cantidad">
              <button className="carrito-ml-btn-cant" disabled>-</button>
              <span style={{minWidth: 24, textAlign: 'center'}}>{item.cantidad}</span>
              <button className="carrito-ml-btn-cant" disabled>+</button>
            </div>
            <div className="carrito-ml-precio">${item.precio.toLocaleString()}</div>
            <div className="carrito-ml-subtotal">${(item.precio * item.cantidad).toLocaleString()}</div>
            <button className="carrito-ml-eliminar" title="Quitar del carrito" disabled><i className="bi bi-trash"></i></button>
          </div>
        ))}
      </div>
      <div className="carrito-ml-resumen">
        <div className="carrito-ml-resumen-titulo">Resumen de compra</div>
        <div className="carrito-ml-resumen-row">
          <span>Subtotal</span>
          <span>${total.toLocaleString()}</span>
        </div>
        <div className="carrito-ml-resumen-row">
          <span>Envío</span>
          <span>$0</span>
        </div>
        <div className="carrito-ml-resumen-total">
          <span>Total</span>
          <span>${total.toLocaleString()}</span>
        </div>
        <button className="carrito-ml-btn-finalizar" disabled>Finalizar compra</button>
      </div>
    </div>
  );
};

export default CarritoPage
