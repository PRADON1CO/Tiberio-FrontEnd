import React from "react";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import logo from "../../assets/Logo.jpeg";
import '../../style/footer.css'

const Footer = () => {
  return (
    <>
      <div className=" text-center  mt-auto bg-black">
        <img src={logo} alt="" width={250} className="imgLogo" />
        <div className="d-md-flex d-lg-flex gap-3 justify-content-center pb-4">
          <p className="text-white linksFooter">Home</p>
          <p className="text-white linksFooter">Nosotros</p>
          <p className="text-white linksFooter">Productos</p>
          <p className="text-white linksFooter">Login</p>
        </div>
        <div className="pb-2 d-flex gap-4 justify-content-center">
          <p className="text-white btnRedondo">
            <i class="bi bi-instagram"></i>
          </p>
          <p className="text-white btnRedondo">
            <i class="bi bi-facebook"></i>
          </p>
          <p className="text-white btnRedondo">
          <i class="bi bi-whatsapp"></i>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
