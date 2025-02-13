import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import CardRemera from "../remeras/CardRemera";

const Productos = () => {
  return (
    <div className="bg-black mainSection">
      <h1 className="py-3 text-center text-white">- Nuestras Remeras -</h1>
      <Container>
        {/* Barra de búsqueda */}
        <Row className=" mb-4">
          <Col md={3}>
            <TextField
              variant="outlined"
              placeholder="Buscar remera..."
              fullWidth
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

        {/* Contenedor de productos */}
        <Row className="g-4 justify-content-center justify-content-lg-start justify-content-md-start">
          <CardRemera></CardRemera>
          <CardRemera></CardRemera>
          <CardRemera></CardRemera>
          <CardRemera></CardRemera>
          <CardRemera></CardRemera>
          <CardRemera></CardRemera>
          <CardRemera></CardRemera>
          <CardRemera></CardRemera>
          <CardRemera></CardRemera>
        </Row>
      </Container>
    </div>
  );
};

export default Productos;
