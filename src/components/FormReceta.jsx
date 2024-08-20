import { useState, useEffect, useContext } from "react"
import { AutoComplete } from "primereact/autocomplete";
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ModeContext } from "../contexts/MainContext";
import { useNavigate } from 'react-router-dom';

export default function FormReceta(){
    const { recetas } = useContext(ModeContext);
    const navigate = useNavigate();
    const [titulo, setTitulo] = useState("");
    const [tituloConf, setTituloConf] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [unidad, setUnidad] = useState("");
    const unidades = [
        'Gramos',
        'Kilos',
        'Cuchara sopera',
        'Cuchara chica',
        'Paquete/s'
    ];
    const [descripcion, setDescripcion] = useState("");
    const [Advertencia, setAdvertencia] = useState(false)
    const [AdvertenciaReceta, setAdvertenciaReceta] = useState(false)
    const [AdvertenciaTitulo, setAdvertenciaTitulo] = useState(false)
    const [receta, setReceta] = useState([])

    useEffect(() => {
        
    }, [receta]);

    const handleIngrediente = () => {
        if (cantidad === "" || unidad === "" || descripcion === "") {
            setAdvertencia(true)
        } else {
            setAdvertencia(false);
            const nuevoIngrediente = {cantidad, unidad, descripcion};
            setReceta(prevReceta => [...prevReceta, nuevoIngrediente]);
            setCantidad("");
            setUnidad("");
            setDescripcion("");
        }
    }

    const handleTitulo = () => {
        if (titulo === "") {
            setAdvertenciaTitulo(true)
        } else {
            setAdvertenciaTitulo(false);
            setTituloConf(titulo)
        }
    }

    const handleConfirmarReceta = () => {
        if (receta.length > 0) {
            setAdvertenciaReceta(false);
            const nuevasRecetas = [...recetas, {tituloConf,receta}];
            localStorage.setItem('listarecetas', JSON.stringify(nuevasRecetas));
            setReceta([]); 
            navigate("/listaRecetas")
        } else {
            setAdvertenciaReceta(true);
        }
    }
    
  return (
    <>
    <div className="flex flex-row flex-wrap">
        <div className="card flex flex-column justify-content-start mt-1 col-6 shadow-3">
        <h3>Titulo de su receta:</h3>
             <div className="flex flex-column align-items-start mb-5 ml-5 mt-3">
                <span className="p-float-label mb-3">
                    <AutoComplete size={20} inputId="az" value={titulo} onChange={(e) => setTitulo(e.value)} />
                    <label htmlFor="az">Titulo</label>
                </span>
                
                <Button className=" mb-2" style={{width:"200px"}} onClick={handleTitulo} >Confirmar Titulo</Button>
                {AdvertenciaTitulo && <Message severity="warn" text="El titulo no puede estar vacio" />}
            </div>
              

            <h3>Agregue sus ingredientes:</h3>
            <div className="flex flex-row align-items-center mb-5 ml-5 mt-3">
                <span className="p-float-label mr-3">
                    <AutoComplete size={20} inputId="ac" value={cantidad} onChange={(e) => setCantidad(e.value)} />
                    <label htmlFor="ac">Cantidad</label>
                </span>
                <Dropdown value={unidad} onChange={(e) => setUnidad(e.value)} options={unidades} optionLabel="name" 
                    placeholder="Unidades" className="w-full md:w-14rem" />
            </div>
        
            <span className="p-float-label mb-5 ml-5">
                <AutoComplete size={45} inputId="ae" value={descripcion}  onChange={(e) => setDescripcion(e.value)} />
                <label htmlFor="ae">Descripcion</label>
            </span>
            <div className="flex flex-row flex-wrap">
                <Button className="ml-5 mb-2" style={{width:"200px"}} onClick={handleIngrediente} >Agregar ingrediente</Button>
            </div>  
            {Advertencia && <Message severity="warn" text="Deben estar todos los campos completos" />}
        </div>
        <div className="card flex flex-column justify-content-start mt-1 col-6 shadow-3">
            <h3>Receta:  {tituloConf}</h3>
            <div className="flex flex-row align-items-center mb-5 ml-5 mt-3">
                <DataTable value={receta} stripedRows tableStyle={{ minWidth: '40rem' }} emptyMessage="Sin ingredientes agregados" >
                    <Column field="cantidad" header="Cantidad"></Column>
                    <Column field="unidad" header="Unidad"></Column>
                    <Column field="descripcion" header="Descripcion"></Column>
                </DataTable>
            </div>
            <div className="flex flex-row flex-wrap">
                <Button 
                className="ml-5 mb-2" 
                style={{width:"200px"}}
                severity="success" 
                icon="pi pi-check" 
                label="Confirmar Receta"
                onClick={handleConfirmarReceta}
                />
            </div>  
            {AdvertenciaReceta && <Message severity="warn" text="Debe agregar al menos un elemento" />}
          
        </div>
    </div>
    </>
  )
}
