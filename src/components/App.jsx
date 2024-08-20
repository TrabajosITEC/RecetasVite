import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '.';
import NuevaReceta from '../pages/NuevaReceta';
import ListaRecetas from '../pages/ListaRecetas';
import Receta from '../pages/receta';

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/nuevaReceta" element={<NuevaReceta/>} />
        <Route path="/listaRecetas" element={<ListaRecetas/>} />
        <Route path="/receta" element={<Receta/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
