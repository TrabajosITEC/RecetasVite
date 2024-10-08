import { useState, useEffect, useContext} from "react";
import { AutoComplete } from "primereact/autocomplete";
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useNavigate } from 'react-router-dom';
import { ModeContext } from "../contexts/MainContext";

export default function FormReceta() {
    // const recetas = JSON.parse(localStorage.getItem('listarecetas')) || [];
    const { recetas, setRecetas} = useContext(ModeContext);
    const navigate = useNavigate();
    const [titulo, setTitulo] = useState("");
    const [tituloConf, setTituloConf] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [unidad, setUnidad] = useState("");
    const unidades = [
        'Gramos',
        'Miligramos',
        'Kilos',
        'Litros',
        'Mililitros',
        'Cuchara sopera',
        'Cuchara chica',
        'Paquete/s'
    ];
    const [descripcion, setDescripcion] = useState("");
    const [Advertencia, setAdvertencia] = useState(false);
    const [AdvertenciaReceta, setAdvertenciaReceta] = useState(false);
    const [AdvertenciaTitulo, setAdvertenciaTitulo] = useState(false);
    const [receta, setReceta] = useState([]);

    const crearIdName = () => {
        const recetasString = localStorage.getItem('listarecetas');
        console.log("recetasString:", recetasString); 
    
        const listaIdName = recetasString ? JSON.parse(recetasString) : [];
        console.log("listaIdName:", listaIdName);  
    
        if (listaIdName.length === 0) {
            return 0;
        } else {
            const maxIdname = Math.max(...listaIdName.map(obj => Number(obj.idName)));
            console.log("maxIdname:", maxIdname);  
            return maxIdname + 1;
        }
    }
    
    useEffect(() => {

    }, [receta]);

    const handleIngrediente = () => {
        if (cantidad === "" || unidad === "" || descripcion === "") {
            setAdvertencia(true);
        } else {
            setAdvertencia(false);
            const nuevoIngrediente = { cantidad, unidad, descripcion };
            setReceta(prevReceta => [...prevReceta, nuevoIngrediente]);
            setCantidad("");
            setUnidad("");
            setDescripcion("");
        }
    };

    const handleTitulo = () => {
        if (titulo === "") {
            setAdvertenciaTitulo(true);
        } else {
            setAdvertenciaTitulo(false);
            setTituloConf(titulo);
        }
    };

    const handleConfirmarReceta = () => {
        if (receta.length > 0) {
            setAdvertenciaReceta(false);
            const idName = crearIdName()
            const nuevasRecetas = [...recetas, { idName, tituloConf, receta }];
            localStorage.setItem('listarecetas', JSON.stringify(nuevasRecetas));
            setRecetas(nuevasRecetas)
            setReceta([]);
            navigate("/listaRecetas");
        } else {
            setAdvertenciaReceta(true);
        }
    };

    return (
        <>
            <div className="form-receta-container">
                <div className="form-receta-card">
                    <h3>Título de su receta:</h3>
                    <div className="form-receta-group">
                        <span className="p-float-label">
                            <AutoComplete size={20} inputId="az" value={titulo} onChange={(e) => setTitulo(e.value)} />
                            <label htmlFor="az">Título</label>
                        </span>
                        <Button className="form-receta-button" onClick={handleTitulo} icon="pi pi-plus" label="Confirmar Título"/>
                        {AdvertenciaTitulo && <Message severity="warn" text="El título no puede estar vacío" className="form-receta-warning" />}
                    </div>

                    <h3>Agregue sus ingredientes:</h3>
                    <div className="form-receta-group">
                        <span className="p-float-label">
                            <AutoComplete size={20} inputId="ac" value={cantidad} onChange={(e) => setCantidad(e.value)} />
                            <label htmlFor="ac">Cantidad</label>
                        </span>
                        <Dropdown value={unidad} onChange={(e) => setUnidad(e.value)} options={unidades} optionLabel="name"
                            placeholder="Unidades"  />
                    </div>

                    <span className="p-float-label form-receta-group">
                        <AutoComplete size={45} inputId="ae" value={descripcion} onChange={(e) => setDescripcion(e.value)} />
                        <label htmlFor="ae">Descripción</label>
                    </span>

                    <Button className="form-receta-button" onClick={handleIngrediente} icon="pi pi-plus" label="Agregar ingrediente"/>
                    {Advertencia && <Message severity="warn" text="Deben estar todos los campos completos" className="form-receta-warning" />}
                </div>

                <div className="form-receta-card">
                    <h3>Receta: {tituloConf}</h3>
                    <div className="form-receta-table">
                        <DataTable value={receta} stripedRows tableStyle={{ minWidth: '40rem' }} emptyMessage="Sin ingredientes agregados">
                            <Column field="cantidad" header="Cantidad"></Column>
                            <Column field="unidad" header="Unidad"></Column>
                            <Column field="descripcion" header="Descripción"></Column>
                        </DataTable>
                    </div>
                    <Button className="form-receta-button success"
                        icon="pi pi-check"
                        label="Confirmar Receta"
                        onClick={handleConfirmarReceta}
                    />
                    {AdvertenciaReceta && <Message severity="warn" text="Debe agregar al menos un elemento" className="form-receta-warning" />}
                </div>
            </div>
        </>
    );
}
