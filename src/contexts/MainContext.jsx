import { useState } from "react"
import { createContext } from "react";
import PropTypes from 'prop-types';

export const ModeContext = createContext()

export const ModeProvider = ({children})=>{ 
    const recetas = JSON.parse(localStorage.getItem('listarecetas')) || [];
    const [userActive, setUserActive] = useState("")

    const data = { recetas, userActive, setUserActive };
    return(
        <ModeContext.Provider value={data}>
            {children}
        </ModeContext.Provider>
    )
}
ModeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};