import { DataView } from 'primereact/dataview';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Recipes.css';

export default function BasicDemo() {
    const recetas = JSON.parse(localStorage.getItem('listarecetas'));
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(recetas);
    }, [recetas]);

    const navigate = useNavigate();
    const handleIngresarReceta = (product) => {
        navigate("/receta", { state: { product } });
    }

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
                {items.map((product) => itemTemplate(product))}
            </div>
        );
    };

    return (
        <div>
            <DataView value={products} listTemplate={listTemplate} layout={'grid'} />
        </div>
    );
}
