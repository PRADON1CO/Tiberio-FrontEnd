import './App.css'
import Footer from './components/common/Footer';
import Menu from './components/common/Menu';
import GuiaTalles from './components/pages/GuiaTalles';
import Inicio from './components/pages/Inicio';
import Login from './components/pages/Login'
import "bootstrap/dist/css/bootstrap.min.css";
import Productos from './components/pages/Productos';



function App() {
 
  return (
    <>
    
      <Menu></Menu>
      {/* <Inicio></Inicio> */}
      {/* <Login></Login> */}
      {/* <GuiaTalles></GuiaTalles> */}
      <Productos></Productos>
      <Footer></Footer>
    </>
  )
}

export default App
