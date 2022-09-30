import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsUpDown,
  faMagnifyingGlass,
  faBell,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../services/AuthContext";

function Navbar() {
  let { loginUser } = useContext(AuthContext);
  return (
    <nav className={styles.nav__contents}>
      <p className={styles.user__intro}>
        Hello {loginUser.user ? loginUser.user : "Anonmyous"}
      </p>
      <div className={styles.buttons__content}>
        <button className={styles.account__button}>
          <span style={{ float: "left", fontWeight: 600 }}>
            Choose Account{" "}
          </span>{" "}
          <span style={{ float: "right", marginRight: "5px" }}>
            <FontAwesomeIcon icon={faArrowsUpDown} />
          </span>
        </button>
      </div>
      <div className={styles.right__icons}>
        <div className={styles.icons__list}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={styles.nav__icons}
          />
          <FontAwesomeIcon icon={faBell} className={styles.nav__icons} />
          <FontAwesomeIcon icon={faGear} className={styles.nav__icons} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
