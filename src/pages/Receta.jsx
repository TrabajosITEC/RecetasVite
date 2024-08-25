// import { useContext } from "react";
// import { ModeContext } from "../contexts/MainContext";
import { MainLayOut } from "../layouts/MainLayOut";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from 'primereact/button';
import './Receta.css';

export default function Receta() {
  const recetas = JSON.parse(localStorage.getItem('listarecetas'));
  const navigate = useNavigate();
  const location = useLocation()
  const { product } = location.state || {}
 
  const handleEliminarReceta = () => {
    const nuevasRecetas = recetas.filter(item => item.tituloConf !== product.tituloConf)
    localStorage.setItem('listarecetas', JSON.stringify(nuevasRecetas));
    navigate("/listaRecetas")
  }
  
  return (
    <MainLayOut>
      <div className="receta-card">
        <div className="receta-title">{product.tituloConf}</div>
        <ul className="receta-ingredients">
          {product.receta.map((prod) => (
            <li key={prod.descripcion} className="receta-ingredient">
              <span className="receta-description">{prod.descripcion}</span>
              <span className="receta-amount">{prod.cantidad} {prod.unidad}</span> 
            </li>
          ))}
        </ul>
        
        <Button className="form-receta-button" onClick={()=>handleEliminarReceta()} icon="pi pi-trash" label="Eliminar receta"/>
      </div>
    </MainLayOut>
  )
}