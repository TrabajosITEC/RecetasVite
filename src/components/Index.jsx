import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ModeContext } from '../contexts/MainContext'
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
    <>
      <MainLayOut>
      <h1 className="flex justify-content-center" style={{marginTop:'40px', marginBottom:'0px'}}>Recetario React</h1>
      <div className="flex justify-content-center" style={{marginTop: '6rem'}}>
        <div className='box flex align-items-center justify-content-center'>
          <Button 
            className='p-4 fadein animation-duration-500'
            rounded 
            severity="secondary" 
            aria-label="Bookmark" 
            label='Lista de Recetas'
            onClick={handleListaRecetas} 
            style={{
              height: '20rem', 
              width: '20rem', 
              borderRadius: '50%',
            }}
            />
        </div>

        <div className='box flex align-items-center justify-content-center'>
          <Button 
            className='p-4 fadein animation-duration-500'
            rounded 
            severity="secondary" 
            aria-label="Bookmark" 
            label='Nueva Receta' 
            onClick={handleReceta}
            style={{
              height: '20rem', 
              width: '20rem', 
              borderRadius: '50%',
            }}
            />
        </div>


       </div>
        

     

      </MainLayOut>
    </>
  )
}

export default Home
