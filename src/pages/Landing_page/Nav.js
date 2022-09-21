import React, { useEffect, useState } from "react";
import sofha_logo from "../../assets/sofhe.png";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else handleShow(false);
      });
    };
  }, []);

  return (
    <nav className={`${styles.nav} ${show && `${styles.nav_change}`}`}>
      <Link to="/">
        <img className={styles.nav_logo} src={sofha_logo} alt="Sofhe" />
      </Link>
      <div className={styles.nav__div}>
        <ul className={styles.nav__components}>
          <li>What is Sofhe</li>
          <li>About us</li>
          <li>FAQ</li>
          <li>Contact Us</li>
          <li>
            <Link to="/login">
              <button className={styles.btn}>Sign In</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
