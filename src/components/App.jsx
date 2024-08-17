import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '.';
import NuevaReceta from '../pages/NuevaReceta';
import ListaRecetas from '../pages/ListaRecetas';

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/nuevaReceta" element={<NuevaReceta/>} />
        <Route path="/listaRecetas" element={<ListaRecetas/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
