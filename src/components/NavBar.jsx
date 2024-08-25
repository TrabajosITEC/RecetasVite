import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { Avatar } from 'primereact/avatar';
import { useContext} from "react";
import { ModeContext } from "../contexts/MainContext";

export default function NavBar() {
    const { userActive } = useContext(ModeContext);

    const navigate = useNavigate();
    const handleCerrarSesion = () => {
        navigate("/")
    }

    const startItems = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => {
                navigate("/home")
            }
        },
        {
            label: 'Contacto',
            icon: 'pi pi-envelope'
        },

    ];

    const endItems =
    <div>
        <div className='flex flex-row'>
            <Avatar 
            icon="pi pi-user" 
            size="large" 
            style={{ backgroundColor: '#FFFFFF', color: '#FF4500' }} 
            shape="circle" 
            />
            <p style={{color:'#FFFFFF', marginLeft:'10px'}}>{userActive}</p>

        </div>

        <Button 
        label="Cerrar Sesion" 
        icon="pi pi-power-off"
        onClick={handleCerrarSesion} 
        style={{background:'None', border:'None'}}
        />
    </div>
    
        
    
    return (
        <div className="card" style={{marginTop:0}}>
            <Menubar className='custom-menubar' model={startItems} end={endItems} />
        </div>
    )
}
