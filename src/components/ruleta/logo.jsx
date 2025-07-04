import logokeskplay from "../../img/logo_keskplay.png";
import styles from "./logo.module.css";
function Logo({sorteo}) {
  return (
    <>
    <img src={logokeskplay} alt="" className={styles.logo}/>    
    </>
  );
}
export default Logo;