import { useContext, useEffect } from "react";
import { ModeContext } from "../contexts/MainContext";
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Protected({children}) {
  const { userActive } = useContext(ModeContext);
  const navigate = useNavigate();
  
  useEffect(() => {
      if (userActive === "") {
        navigate("/");
      }
    }, [navigate, userActive]);
  
    return userActive !== "" ? children : null;
}
Protected.propTypes = {
    children: PropTypes.node.isRequired,
};