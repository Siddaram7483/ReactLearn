import styles from "./Display.module.css"; //  if u r using  this here ../App.module.css cos we r imported this in 2 times so use ..
import PropTypes from 'prop-types';
const Display = ({displayValue}) =>{
  return <input className={styles.display} type="text" value={displayValue} readOnly/>

};
Display.propTypes = {
  displayValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
};

export default Display;