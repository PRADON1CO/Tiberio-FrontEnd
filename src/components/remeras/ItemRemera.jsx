import React from "react";


const ItemRemera = () => {
  return (
    <tr>
      <td className="text-center">123</td>
      <td className="text-center">Over</td>
      
      <td className="text-center">
        $15000
      </td>
      <td className="text-center">S / M / L</td>
      <td className="text-center">5 U</td>
      <td className="text-center">
        <img
          src="https://acdn.mitiendanube.com/stores/004/700/456/products/26-69c164e241a121372d17292575754422-480-0.webp"
          className="imgAdministrador"
          alt=""
        ></img>
        </td>
      <td className="text-center">
        <button className="btn m-1 btnOpciones ">
          <i className="bi bi-pencil-square "></i>
        </button>
        <button className="btn btnOpciones">
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default ItemRemera;
