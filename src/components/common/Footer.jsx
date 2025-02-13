import React from "react";
import logo from "../../assets/Logo.jpeg";
import '../../style/footer.css'
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" text-center  mt-auto bg-black">
        <NavLink>
          <img src={logo} alt="" width={250} className="imgLogo" />
        </NavLink>
        <div className="d-md-flex d-lg-flex gap-4 justify-content-center pb-4">
          <NavLink className='text-white linksFooter py-1' to={"/"}><p >Inicio</p></NavLink>
          <NavLink className="text-white linksFooter py-1" to={'/guia-talles'}><p>Guía De Talles</p> </NavLink>
          <NavLink className="text-white linksFooter py-1" to={'/productos'}><p>Productos</p></NavLink>
          <NavLink className="text-white linksFooter py-1" to={'/login'}><p>Login</p></NavLink>
        </div>
        <div className="pb-2 d-flex gap-4 justify-content-center ">
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
