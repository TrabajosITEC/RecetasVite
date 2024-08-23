import { MainLayOut } from "../layouts/MainLayOut";
import { useLocation } from "react-router-dom";
import './Receta.css';

export default function Receta() {
  const location = useLocation()
  const { product } = location.state || {}

  return (
    <MainLayOut>
      <div className="receta-card">
        <div className="receta-title">{product.tituloConf}</div>
        <ul className="receta-ingredients">
          {product.receta.map((prod) => (
            <li key={prod.descripcion} className="receta-ingredient">
              <span className="receta-amount">{prod.cantidad} {prod.unidad}</span> 
              <span className="receta-description">{prod.descripcion}</span>
            </li>
          ))}
        </ul>
      </div>
    </MainLayOut>
  )
}