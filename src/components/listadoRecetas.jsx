import { DataView } from 'primereact/dataview';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModeContext } from "../contexts/MainContext";
import './Recipes.css';

export default function BasicDemo() {
    const [products, setProducts] = useState([]);
    const { recetas} = useContext(ModeContext);
    const navigate = useNavigate();
    const handleIngresarReceta = (product) => {
        navigate(`/receta/${product.idName}`);
    }
    
    useEffect(() => {
        setProducts(recetas);
    }, [recetas]);


    const itemTemplate = (product) => {
        return (
            <div className="recipe-card" key={product.id}>
                <button className="custom-button" onClick={() => handleIngresarReceta(product)}>
                    <i className="pi pi-external-link"></i>
                    Ingresar
                </button>
                <div className="recipe-card-content">
                    <div className="recipe-card-title">{product.tituloConf}</div>
                    <div className="recipe-card-info">
                        <span>Total de ingredientes: {product.receta.length}</span>
                    </div>
                </div>
            </div>
        );
    };

    const listTemplate = (items) => {
        if (!items || items.length === 0) return null;
    
        return (
            <div className="recipe-grid">
                {items.map((product, index) => (
                    <div key={index}>
                        {itemTemplate(product)}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div>
            <DataView value={products} listTemplate={listTemplate} layout={'grid'} />
        </div>
    );
}
