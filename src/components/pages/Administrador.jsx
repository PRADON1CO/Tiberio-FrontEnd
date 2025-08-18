import React, { useState } from "react";
import { Table, Modal, Button } from "react-bootstrap";
import '../../style/administrador.css'
import ItemRemera from "../remeras/ItemRemera";
import FormularioRemera from "../remeras/FormularioRemera";


const Administrador = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <div className="">
        <section className="container mainSection ">
          <div className="d-flex justify-content-between align-items-center mt-5">
            <h1 className="text-black display-5 fw-bold ">Gestionar Productos</h1>
            <button className="btn btnOpciones" onClick={handleOpenModal}>
              <i className="bi bi-file-earmark-plus fs-4"></i>
            </button>
          </div>
          <hr />
          <Table responsive bordered className="tabla table-striped">
            <thead>
              <tr className="text-center">
                <th>Cod</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Talle</th>
                <th>Stock</th>
                <th>URL de Imagen</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <ItemRemera></ItemRemera>
              <ItemRemera></ItemRemera>
              <ItemRemera></ItemRemera>
              <ItemRemera></ItemRemera>
              <ItemRemera></ItemRemera>
            </tbody>
          </Table>
        </section>
        <Modal show={showModal} onHide={handleCloseModal} centered dialogClassName="modal-50w">
          <Modal.Body>
            <FormularioRemera />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Administrador;
