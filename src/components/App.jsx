import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Index';
import NuevaReceta from '../pages/NuevaReceta';
import ListaRecetas from '../pages/ListaRecetas';
import Receta from '../pages/Receta';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Protected from './Protected';

function App() {
  
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<Protected> <Home/> </Protected>} />
        <Route path="/nuevaReceta" element={<Protected><NuevaReceta/></Protected>} />  
        <Route path="/listaRecetas" element={<Protected><ListaRecetas/></Protected>} />
        <Route path="/receta" element={<Receta/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
