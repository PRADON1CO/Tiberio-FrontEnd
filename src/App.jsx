import "./App.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import GuiaTalles from "./components/pages/GuiaTalles";
import Inicio from "./components/pages/Inicio";
import Login from "./components/pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Productos from "./components/pages/Productos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetalleProducto from "./components/pages/DetalleProducto";
import Administrador from "./components/pages/Administrador";
import FormularioRemera from "./components/remeras/FormularioRemera";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/guia-talles" element={<GuiaTalles />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="administrador" element={<Administrador></Administrador>}></Route>
          <Route path ="/administrador/formulario" element={<FormularioRemera></FormularioRemera>}></Route>
          <Route path="/producto/:id" element={<DetalleProducto />} />
        </Routes>
        
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
