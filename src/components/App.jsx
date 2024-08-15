import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '.';

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/nuevaReceta" element={""} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
