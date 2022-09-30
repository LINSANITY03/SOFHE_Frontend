import React, { useContext } from "react";
import styles from "./sidebar.module.css";
import profile_img from "../assets/smile.jpg";
import sofha_logo from "../assets/sofhe.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faArrowRightToBracket,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Sidebardata from "./Sidebardata";
import { Link } from "react-router-dom";
import AuthContext from "../services/AuthContext";

function Sidebar(props) {
  let { logoutUser } = useContext(AuthContext);
  return (
    <div
      className={props.sidebar ? styles.main__container : styles.main__change}
    >
      <div className={styles.top__bar}>
        {props.sidebar ? (
          <>
            <img src={sofha_logo} alt="Sofhe" className={styles.logo} />
            <FontAwesomeIcon
              icon={faXmark}
              size="2x"
              onClick={props.ShowSidebar}
              id={styles.hamburger__menu}
            />
          </>
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            onClick={props.ShowSidebar}
            id={styles.hamburger__menu}
          />
        )}
      </div>
      {props.sidebar ? (
        <>
          <div className={styles.main__circle}>
            <img src={profile_img} alt="Profile_icon" />
            <div className={styles.upload__circle}>
              <FontAwesomeIcon icon={faArrowUpFromBracket} />
            </div>
          </div>
          <div className={styles.user__content}>
            <p>Pujan Thing</p>
            <p>Software Engineer</p>
          </div>
        </>
      ) : (
        <></>
      )}

      <div className={styles.sidebar__contents}>
        <ul>
          {Sidebardata.map((item, index) => {
            return (
              <Link to={item.path} key={index}>
                <li title={item.title}>
                  {props.sidebar ? (
                    <>
                      <FontAwesomeIcon icon={item.icons} id={styles.icon} />
                      <div id={styles.title}>
                        {item.title} {item.span ? <span>{item.span}</span> : ""}
                      </div>
                    </>
                  ) : (
                    <FontAwesomeIcon icon={item.icons} id={styles.icon} />
                  )}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className={styles.signout__content}>
        {props.sidebar ? (
          <p>
            Sign out <FontAwesomeIcon icon={faArrowRightToBracket} />
          </p>
        ) : (
          <p title="Sign out" onClick={logoutUser}>
            <FontAwesomeIcon icon={faArrowRightToBracket} />
          </p>
        )}
      </div>
      {props.sidebar ? (
        <p className={styles.user__email}>Example@gmail.com</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default Sidebar;
