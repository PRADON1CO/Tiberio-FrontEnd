import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import CardRemera from "../remeras/CardRemera";

const mockProductos = [
  {
    id: 1,
    nombre: "Air Jordan 1 Low",
    precio: 180999,
    imagen: "https://acdn.mitiendanube.com/stores/004/700/456/products/26-69c164e241a121372d17292575754422-480-0.webp"
  },
  {
    id: 2,
    nombre: "Nike SB Dunk",
    precio: 150000,
    imagen: "https://acdn.mitiendanube.com/stores/004/700/456/products/26-69c164e241a121372d17292575754422-480-0.webp"
  },
  {
    id: 3,
    nombre: "Adidas Originals",
    precio: 120000,
    imagen: "https://acdn.mitiendanube.com/stores/004/700/456/products/26-69c164e241a121372d17292575754422-480-0.webp"
  },
  {
    id: 4,
    nombre: "Remera Básica Negra",
    precio: 50000,
    imagen: "https://acdn.mitiendanube.com/stores/004/700/456/products/26-69c164e241a121372d17292575754422-480-0.webp"
  },
  {
    id: 5,
    nombre: "Remera Oversize Blanca",
    precio: 60000,
    imagen: "https://acdn.mitiendanube.com/stores/004/700/456/products/26-69c164e241a121372d17292575754422-480-0.webp"
  }
];

const Productos = () => {
  const [busqueda, setBusqueda] = useState("");
  const [productos] = useState(mockProductos);

  const productosFiltrados = productos.filter((prod) =>
    prod.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="bg-black mainSection">
      <h1 className="py-3 text-center text-white">- Nuestras Remeras -</h1>
      <Container>
        <Row className=" mb-4">
          <Col md={3}>
            <TextField
              variant="outlined"
              placeholder="Buscar remera..."
              fullWidth
              value={busqueda}
              onChange={e => setBusqueda(e.target.value)}
              sx={{
                input: { color: "white" }, 
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" }, 
                  "&:hover fieldset": { borderColor: "lightgray" }, 
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "white" }} /> 
                  </InputAdornment>
                ),
              }}
            />
          </Col>
        </Row>

        <Row className="g-4 justify-content-center justify-content-lg-start justify-content-md-start">
          {productosFiltrados.length === 0 ? (
            <p className="text-white text-center">No se encontraron productos.</p>
          ) : (
            productosFiltrados.map((prod) => (
              <CardRemera key={prod.id} producto={prod} />
            ))
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Productos;
