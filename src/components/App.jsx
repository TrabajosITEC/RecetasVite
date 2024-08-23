import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Index';
import NuevaReceta from '../pages/NuevaReceta';
import ListaRecetas from '../pages/ListaRecetas';
import Receta from '../pages/Receta';
import Logueo from '../pages/Logueo';

function App() {
  
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logueo/>} />
        <Route path="/nuevaReceta" element={<NuevaReceta/>} />
        <Route path="/listaRecetas" element={<ListaRecetas/>} />
        <Route path="/receta" element={<Receta/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
