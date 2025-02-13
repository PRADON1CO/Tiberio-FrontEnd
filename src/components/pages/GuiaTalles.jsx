import React from "react";
import '../../style/guiaDetalles.css'
import ImgTalles from'../../assets/imagenIlustrativa.jpeg'

const GuiaTalles = () => {
  return (
    <div className="container-fluid">
      <h1 className="py-3 text-center">Guía De Talles</h1>
      
      <div className="table-container container">
      <h4 className="pb-3">REMERA</h4>
        <table border="1" className="table table-striped">
          <thead>
            <tr>
              <th>Talle</th>
              <th>Ancho</th>
              <th>Largo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>M</td>
              <td>60 cm</td>
              <td>75 cm</td>
            </tr>
            <tr>
              <td>L</td>
              <td>61 cm</td>
              <td>77 cm</td>
            </tr>
            <tr>
              <td>XL</td>
              <td>62 cm</td>
              <td>79 cm</td>
            </tr>
            <tr>
              <td>XXL</td>
              <td>64 cm</td>
              <td>81 cm</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="d-flex justify-content-center">
        <img src={ImgTalles} alt="Guía de Talles" className="imgTalle" />
      </div>

    </div>
  );
};

export default GuiaTalles;
