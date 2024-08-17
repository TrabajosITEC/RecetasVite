import NavBar from "../components/NavBar";
import PropTypes from 'prop-types';

export const MainLayOut = ({children})=>{

  return (
    <div>
        <NavBar></NavBar>
        <main>
            {children}
        </main>
    </div>
  )
}
MainLayOut.propTypes = {
    children: PropTypes.node.isRequired,
};