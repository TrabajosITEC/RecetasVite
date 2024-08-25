import { useState } from "react"
import { createContext } from "react";
import PropTypes from 'prop-types';

export const ModeContext = createContext()

export const ModeProvider = ({children})=>{ 
    const recetas = JSON.parse(localStorage.getItem('listarecetas')) || [];
    const usuariosRegistrados = JSON.parse(localStorage.getItem('listausuarios')) || [];
    const [userActive, setUserActive] = useState("")

    const data = { recetas, userActive, setUserActive, usuariosRegistrados };
    return(
        <ModeContext.Provider value={data}>
            {children}
        </ModeContext.Provider>
    )
}
ModeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};