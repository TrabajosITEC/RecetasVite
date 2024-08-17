import { createRoot } from 'react-dom/client'
import { ModeProvider } from './contexts/MainContext.jsx'
import { PrimeReactProvider} from 'primereact/api';
import App from './components/App.jsx'

import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
// import "primereact/resources/themes/lara-dark-indigo/theme.css";
import "primereact/resources/themes/tailwind-light/theme.css";

const primeConfig = {
  ripple: true,
  
};

createRoot(document.getElementById('root')).render(
  <PrimeReactProvider value={primeConfig}>
    <ModeProvider>
      <App/>
    </ModeProvider>
  </PrimeReactProvider>
)
