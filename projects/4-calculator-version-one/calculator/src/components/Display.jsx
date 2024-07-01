import styles from "./Display.module.css"; //  if u r using  this here ../App.module.css cos we r imported this in 2 times so use ..
const Display = () =>{
  return <input className={styles.display} type="text" />
}
export default Display;