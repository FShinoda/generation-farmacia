import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/categorias" element={<ListaCategorias/>}></Route>
            <Route path="/cadastroCategoria" element={<FormularioCategoria/>}></Route>
            <Route path="/editarCategoria/:id" element={<FormularioCategoria/>}></Route>
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria/>}></Route>
          </Routes>
        </div>
      <Footer/>
    </BrowserRouter>
    </>
);
}
export default App;