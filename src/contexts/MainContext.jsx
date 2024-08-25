import { useState } from "react"
import { createContext } from "react";
import PropTypes from 'prop-types';

export const ModeContext = createContext()

export const ModeProvider = ({children})=>{ 

    const [userActive, setUserActive] = useState("")

    const data = {  userActive, setUserActive };
    return(
        <ModeContext.Provider value={data}>
            {children}
        </ModeContext.Provider>
    )
}
ModeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};