import { MainLayOut } from "../layouts/MainLayOut";
import { ModeContext } from "../contexts/MainContext";
import { useContext } from "react"
import BasicDemo from "../components/listadoRecetas";

export default function ListaRecetas() {
  const { recetas } = useContext(ModeContext);
  
  console.log(recetas)
  return (
    <MainLayOut>
      <BasicDemo></BasicDemo>
    </MainLayOut>
  )
}
