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
        <div className="card">
            <Menubar style={{backgroundColor:'yellow'}} model={items} />
        </div>
    )
}
