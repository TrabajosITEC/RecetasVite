import { MainLayOut } from "../layouts/MainLayOut";
import { useLocation } from "react-router-dom";

export default function Receta() {
  const location = useLocation()
  const { product } = location.state || {}

  return (
    <MainLayOut>
      <div>{product.tituloConf}</div>
      <ul>
        {product.receta.map((prod) => (
          <li key={prod.descripcion}>
            {prod.cantidad} - {prod.unidad} - {prod.descripcion}
          </li>
        ))}
      </ul>
    </MainLayOut>
  )
}