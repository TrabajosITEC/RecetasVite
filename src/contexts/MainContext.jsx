import { createContext, useState  } from "react";
import PropTypes from 'prop-types';

export const ModeContext = createContext()

export const ModeProvider = ({children})=>{ 
    const [prueba, setPrueba] = useState("Hola")


    const data = { prueba, setPrueba };
    return(
        <ModeContext.Provider value={data}>
            {children}
        </ModeContext.Provider>
    )
}
ModeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};