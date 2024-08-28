import { useNavigate } from 'react-router-dom';
import { MainLayOut } from '../layouts/MainLayOut'
import { Button } from 'primereact/button';
import './index.css'

function Home() {
  const navigate = useNavigate()
  const handleReceta = () => {
    navigate("/nuevaReceta")
  }
  const handleListaRecetas = () => {
    navigate("/listaRecetas")
  }

  return (
      <MainLayOut>
      <h1 className="flex justify-content-center" style={{ marginBottom:'25px'}}>Recetario React</h1>
      <div className="flex justify-content-center">

        <div className='box'>
          <Button 
            className='boton-ajustable fadein animation-duration-500'
            severity="secondary" 
            aria-label="Bookmark" 
            onClick={handleListaRecetas}
          >
            <p className='tituloBotones'>Lista de Recetas</p>
          </Button>
        </div>


        <div className='box'>
          <Button 
            className='boton-ajustable fadein animation-duration-500'
            severity="secondary" 
            aria-label="Bookmark" 
            onClick={handleReceta}
          >
            <p className='tituloBotones'>Nueva Receta</p>
          </Button>
        </div>

      </div>
      </MainLayOut>
  )
}

export default Home
