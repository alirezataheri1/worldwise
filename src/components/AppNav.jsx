import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <NavLink to={"cities"}>cities</NavLink>
        <NavLink to={"countries"}>countries</NavLink>
      </ul>
    </nav>
  );
}

export default AppNav;
