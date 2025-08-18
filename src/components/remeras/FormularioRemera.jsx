import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../../style/administrador.css';

const FormularioRemera = () => {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [talles, setTalles] = useState([]);
    const [stock, setStock] = useState({ S: "", M: "", L: "", XL: "" });
    const [precio, setPrecio] = useState("");
    const [imagen, setImagen] = useState(null);

    const handleTallesChange = (e) => {
        const options = e.target.options;
        const selected = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selected.push(options[i].value);
            }
        }
        setTalles(selected);
    };

    const handleStockChange = (e, talle) => {
        setStock({ ...stock, [talle]: e.target.value });
    };

    const handleImagenChange = (e) => {
        setImagen(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const producto = {
            nombre,
            descripcion,
            talles,
            stock,
            precio,
            imagen
        };
        console.log('producto',producto);
    };

    return (
        <Container className="my-4">
            <Row className="justify-content-md-center">
                <Col >
                    <div className="formAdministrador">
                        <h2 className="mb-4 text-center">CARGAR PRODUCTO</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formNombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese el nombre de la remera" value={nombre} onChange={e => setNombre(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formDescripcion">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Descripción del producto" value={descripcion} onChange={e => setDescripcion(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formTalle">
                                <Form.Label>Talles</Form.Label>
                                <Form.Select multiple aria-label="Seleccionar talles" value={talles} onChange={handleTallesChange}>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                </Form.Select>
                                <Form.Text className="text-muted">
                                    Mantén presionada la tecla Ctrl (o Cmd en Mac) para seleccionar varios talles.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formUnidad">
                                <Form.Label>Unidad (Stock por talle)</Form.Label>
                                <Row>
                                    <Col xs={6} md={3} className="mb-2">
                                        <Form.Label>S</Form.Label>
                                        <Form.Control type="number" min="0" placeholder="Stock S" value={stock.S} onChange={e => handleStockChange(e, "S")} />
                                    </Col>
                                    <Col xs={6} md={3} className="mb-2">
                                        <Form.Label>M</Form.Label>
                                        <Form.Control type="number" min="0" placeholder="Stock M" value={stock.M} onChange={e => handleStockChange(e, "M")} />
                                    </Col>
                                    <Col xs={6} md={3} className="mb-2">
                                        <Form.Label>L</Form.Label>
                                        <Form.Control type="number" min="0" placeholder="Stock L" value={stock.L} onChange={e => handleStockChange(e, "L")} />
                                    </Col>
                                    <Col xs={6} md={3} className="mb-2">
                                        <Form.Label>XL</Form.Label>
                                        <Form.Control type="number" min="0" placeholder="Stock XL" value={stock.XL} onChange={e => handleStockChange(e, "XL")} />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPrecio">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control type="number" placeholder="Precio" value={precio} onChange={e => setPrecio(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formImagen">
                                <Form.Label>Imagen</Form.Label>
                                <Form.Control type="file" onChange={handleImagenChange} />
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <button type="submit" className='mx-auto btn btnOpciones'>
                                    Cargar Producto
                                </button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default FormularioRemera;