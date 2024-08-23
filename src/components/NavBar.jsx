import { Menubar } from 'primereact/menubar';

export default function NavBar() {

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            url: '/'
        },
        {
            label: 'Contacto',
            icon: 'pi pi-envelope'
        }
    ];

    return (
        <div className="card" style={{marginTop:0}}>
            <Menubar className='custom-menubar' model={items} />
        </div>
    )
}
